// Renders ```d2 fenced blocks as diagrams. Loaded as an ES module.
import { D2 } from 'https://esm.sh/@terrastruct/d2';

// Chroma wraps fenced blocks in <div class="highlight">; replace the outermost wrapper.
function diagramBlockRoot(codeEl) {
    return codeEl.closest('div.highlight') || codeEl.parentNode;
}

// Given both a theme-id and a dark-theme-id, D2 emits one SVG carrying both
// palettes, the dark half behind @media (prefers-color-scheme: dark). That is
// the right answer for a site with no theme control, and the wrong one here:
// this site's toggle can hold dark while the OS says light, and the diagram
// would follow the OS and disagree with the page around it.
//
// So the media query is rewritten into the class the rest of the theme uses.
// The rules inside are flat -- `.d2-1234 .fill-N1{fill:#CDD6F4;}` -- so each
// gains a :root.dark prefix, which also outranks its light counterpart by one
// class. Nothing else about the SVG changes.
function followThemeClass(svg) {
    const marker = '@media screen and (prefers-color-scheme:dark)';
    const at = svg.indexOf(marker);
    if (at === -1) return svg;

    const open = svg.indexOf('{', at);
    if (open === -1) return svg;

    let depth = 0, close = -1;
    for (let i = open; i < svg.length; i++) {
        if (svg[i] === '{') depth++;
        else if (svg[i] === '}' && --depth === 0) { close = i; break; }
    }
    if (close === -1) return svg;

    const scoped = svg.slice(open + 1, close)
        .replace(/(^|\})\s*([^{}]+)\{/g, (_, before, selector) =>
            before + '\n\t\t:root.dark ' + selector.trim() + '{');

    return svg.slice(0, at) + scoped + svg.slice(close + 1);
}

document.addEventListener('DOMContentLoaded', async function () {
    const d2Elements = document.querySelectorAll('pre code.language-d2, pre code.d2');
    if (d2Elements.length === 0) return;

    try {
        const d2 = new D2();

        // Swap every block for a placeholder up front, then render them in turn.
        const diagramTasks = Array.from(d2Elements).map(codeEl => {
            const root = diagramBlockRoot(codeEl);
            let d2Code = codeEl.textContent.replace(/&gt;/g, '>').replace(/&lt;/g, '<');

            const container = document.createElement('div');
            container.className = 'd2-diagram d2-loading';
            container.innerHTML = '<span class="spinner">⚙️</span> Rendering diagram...';
            root.parentNode.replaceChild(container, root);

            if (!d2Code.includes('d2-config')) {
                d2Code = 'vars: {\n  d2-config: {\n    layout-engine: elk\n    theme-id: 105\n    dark-theme-id: 200\n  }\n}\n' + d2Code;
            }

            return { d2Code, container };
        });

        for (const task of diagramTasks) {
            try {
                const result = await d2.compile(task.d2Code);
                const svg = await d2.render(result.diagram, result.renderOptions || {});

                task.container.className = 'd2-diagram';
                task.container.innerHTML = followThemeClass(svg);

                const svgEl = task.container.querySelector('svg');
                if (svgEl) {
                    svgEl.removeAttribute('width');
                    svgEl.removeAttribute('height');
                    svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                }
            } catch (err) {
                console.error('D2 compile/render error:', err);
                task.container.className = 'd2-diagram';
                task.container.innerHTML = '<div class="chart-error">Error rendering D2 diagram: ' + (err.message || err) + '</div>';
            }
        }
    } catch (initErr) {
        console.error('D2 initialization error:', initErr);
    }
});
