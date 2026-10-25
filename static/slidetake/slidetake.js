/* Slidetake 0.1.0 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var W=(e,t)=>()=>(e&&(t=e(e=0)),t);var At,Bn=W(()=>{At=`---
title: Slidetake \u2014 markdown to finished video
brand: slidetake
pip: bottom-right
---

<!-- camera: on, full, on -->

# ![](/favicon.svg) Slidetake

**Markdown to finished video.** Write a deck in markdown, present it as a map you move through, and record it take by take.

Press \u2192 to walk this deck, or **O** to see its map.

## \u270D\uFE0F Write

Ordinary markdown is the whole format.

### Headings are cards

\`#\` is the first card, \`##\` sections branch from it, \`###\` go a level deeper. This card is a \`###\`.

### The tree is the map

\u2193 goes into a section, \u2191 comes back out. This deck is a tree you're walking right now.

## \u{1F3AC} Present

<!-- view: overview -->

The deck is a map: this slide pulls back to all of it first.

### Four layouts

**Tree**, **radial**, **path** or **focus** at the top. Path is a staircase made for video; focus fades slide to slide.

### Fullscreen

**F** fills the screen. A thin bar along the bottom tracks your progress, and the clock if the deck has a length.

## \u23FA\uFE0F Record

<!-- camera: on, full, on -->

With **[OBS](https://obsproject.com)**, the deck directs the video. Turn on **Camera** and this slide moves you around the screen.

### Every slide is a take

Fumbled a slide? \u2190 starts it again. Every attempt is kept; pick the best one later.

### The cut

Slidetake writes a frame-exact **ffmpeg** command for the takes you picked, with YouTube **chapters** and a description.

## \u{1F517} Open and share

**\u270E Editor** opens the markdown beside the deck.

### Your copy

Type in any deck, this one included, and it becomes your own copy. The original stays as it is.

### Links

**\u21E3 Load** a GitHub file or gist, **New** from a template, and **Share** a link with your deck inside it.

## \u{1F49B} Free and open

Open source, Apache 2.0: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake).

Everything else is in the guide: **[slidetake.com/help](/help)**.
`});var zn,On=W(()=>{zn=`---
title: Slidetake help
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slidetake help

The details behind the [home deck](/): writing, sharing, presenting, recording and the camera. Press \u2192 to read in order, \u2193 \u2191 to go into a section and back out, or **O** for the whole map.

## \u270D\uFE0F Writing a deck

A deck is an ordinary markdown file. **Every heading becomes a card**, and a heading branches off the nearest shallower heading above it.

\`\`\`md
# Product            \u2190 the first card
Intro text.

## Pricing           \u2190 branches from Product
### Enterprise       \u2190 branches from Pricing
## Roadmap {#plan}   \u2190 branches from Product, id "plan"

See the [roadmap](#plan).
\`\`\`

### Rules

- Text before the first heading becomes a card of its own.
- Headings inside fenced code blocks are ignored.
- A card's id is its heading slugified (\`## Moving around\` \u2192 \`moving-around\`), or set one with \`{#id}\` at the end of the heading.
- A link to \`#id\` flies to that card.

### reveal.js decks

Decks written for reveal.js open as they are: \`---\` starts a slide and \`--\` a vertical one beneath it, and the first slide becomes the root card.

Supported: fragments (\`fade-up\`, \`fade-in-then-out\`, \`grow\`, \u2026, one per \u2192), \`r-stack\`, \`<!-- .element: \u2026 -->\`, \`<section>\` slides, \`data-autoslide\`, Graphviz \`dot\` diagrams, ECharts charts, \`data-gsap\` entrance animations and \`title-scramble\`.

### Older +++ decks

Decks that separate slides with \`+++\` and use \`id\`, \`parent\`, \`x\`, \`y\` frontmatter still load.

### Wide content

Cards widen for wide tables, columns, diagrams and embeds; anything wider still is scaled to fit.

## \u{1F517} Opening, editing and sharing

Every deck you open is **read-only**: Slidetake's own decks, templates, files on the web and shared links. Viewing one never changes anything.

**Type in it**, and it becomes **your copy**, at \`/edit\`. Your copy lives in this browser, remembers where it came from, and is there whenever you come back: the **Your copy \u2192** button at the top takes you to it.

### Where decks come from

Press **\u270E Editor**, then **\u21E3 Load**, and paste a link: a GitHub file or folder, a gist, or any URL that lets other sites read it. Or link straight to a deck:

| Link | Opens |
|---|---|
| \`/gh/owner/repo/path/deck.md\` | a GitHub file, default branch |
| \`/gh/owner/repo@branch/deck.md\` | another branch or tag |
| \`/gist/<id>\` | a gist's first markdown file |
| \`/?src=https://\u2026/deck.md\` | anything else |
| \`/share#deflate:\u2026\` | a shared deck, carried inside the link |
| \`/new\` | a template: blank, talk or recording |

Images next to the deck load as they are. **Open** opens a markdown file from your computer, straight into your copy.

### Your copy

There's one working copy at a time. The editor bar says whose copy it is, and marks **edited** while it has changes you haven't saved or shared.

- **Reset to original** throws your edits away and goes back to the deck you started from.
- Starting a new copy, by typing in another deck or opening a file, asks first if the old one has edits you haven't kept.

### Saving and sharing

**Save** downloads your markdown as a file. **Share** copies a link: the short link while your copy still matches an online original, and otherwise a \`/share#deflate:\u2026\` link with the whole deck compressed inside it. That part of a link is never sent to a server, so nothing is uploaded. Shared links never include \`?obs=\`.

For a file from your computer whose images sit next to it online, add \`base: https://\u2026/deck-folder/\` to its top block.

### Address options

| Option | Does |
|---|---|
| \`?edit=1\` | opens the editor |
| \`?layout=tree\` (radial, path, focus) | picks the layout |
| \`?mode=light\` | light theme |
| \`?duration=10m\` | talk length for the timer |
| \`#card-id\` | opens at a card |

## \u{1F9ED} Moving around

| Key | Does |
|---|---|
| \u2192 \u2190 Space | next / previous step, in document order |
| \u2193 \u2191 | first child / parent |
| O | the whole map; O or Esc goes back to your slide |
| 1 2 3 4 | tree, radial, path, focus |
| F | fullscreen |
| + \u2212 | bigger / smaller slides (remembered) |
| E | editor |
| L | light / dark |
| ? | keys (also \u2328 in the bottom bar) |
| C \xB7 V \xB7 R | camera, camera layouts, record |

Click a card to fly to it. Drag to pan; scroll or pinch to zoom. On a touch screen, the bottom bar adds \u2190 \u2192 buttons.

### Layouts

**Tree** is a top-down chart and **radial** rings out from the root.

**Path** is made for video: a staircase in presenting order. Each section is a row, and the next one starts just below where the last ended, so every move is a short step right or down.

**Focus** doesn't travel at all: the next slide fades in where the last one was.

### Steady text

Text keeps one size within a section and only changes when the section does. Charts and diagrams are fitted on their own.

### Map moments

\`<!-- view: overview -->\` on a slide pulls back to the whole map for a beat before flying in: a good start to a chapter.

## \u{1F3AC} Presenting

**F** goes fullscreen. The current slide fills the screen, and the cursor and controls hide after two seconds without the mouse moving.

### Progress and talk timer

While presenting, a thin bar along the bottom fills with every press.

Give the deck a length, \`duration: 10m\` (or \`90s\`, \`1h\`, \`12:30\`), and a lighter layer of the same colour grows behind it with the clock: if the lighter stretch shows past the solid fill, you're behind; if it reaches the end, the bar pulses.

The timer is for you, so recordings show progress only, unless the deck says \`timer: always\`. \`progress: off\` hides the bar.

## \u23FA\uFE0F Recording

Recording needs **[OBS Studio](https://obsproject.com)** (free) with its WebSocket server on: in OBS, Tools \u2192 WebSocket Server Settings. OBS records; Slidetake drives it.

### Connecting to OBS

Press **\u25CF Record** and enter where OBS is: host, port and the password from OBS's WebSocket settings. Tick *Remember* to skip this next time.

\`?obs=localhost:4455\` (or \`?obs=host:port:password\`) in the address fills this in and connects as the page opens.

### A 16:9 screen

YouTube is 16:9, and many laptop screens aren't. The Record dialog checks yours: if it isn't 16:9, move the window to a screen that is, physical or virtual (say 1920\xD71080), and press **F** there.

### OBS on another computer

From https://slidetake.com, OBS must be on the same computer (\`localhost\`): browsers block secure pages from reaching plain \`ws://\` addresses elsewhere. For OBS on another machine, serve a local copy of [\`dist/index.html\`](https://github.com/slidetake/slidetake) over http.

### Taking a take

**\u25CF Record** (or **R**) connects to OBS, counts down and starts recording. From then on the deck drives everything: camera layouts, reveals and slides follow \u2192 (a Bluetooth clicker works).

- **\u2190** takes the current slide again, keeping every attempt
- **B** pauses and resumes
- one press past the last step stops OBS

Clicks, dragging and the map are locked so the take only moves forward.

### Review and cut

Then the review opens: every slide with its takes (the last one picked), previews from the OBS file, a ready-to-run **ffmpeg** command for the picked takes (frame-exact), and the YouTube title, description with **chapters** and links, and tags.

Sessions are kept in this browser, so a take can be reviewed again later from \u25CF Record.

## \u{1F4F7} Camera

**C** (or **Camera** in the bottom bar) turns your webcam on in its box; a plain screen recording then captures you and the slides together. The camera is off every time the page opens, and until it's on, the deck's camera settings are ignored, so readers get slides using the whole screen.

### Deck settings

An optional block at the top of the file:

\`\`\`yaml
---
brand: example.com/talks     \u2190 text in the top-right corner
logo: https://\u2026/logo.png     \u2190 image beside it
pip: bottom-right            \u2190 camera corner, or none
pip_size: 24%                \u2190 camera box width
pip_shape: rect              \u2190 rect (16:9) or circle
pip_mirror: yes              \u2190 mirror the webcam
camera: 24%, 40%, full, off  \u2190 layouts V cycles through
---
\`\`\`

Slides are always placed clear of the brand and the camera box.

### Camera per slide

A comment in a slide changes the camera from that slide on:

\`\`\`md
## Intro
<!-- camera: full -->       \u2190 camera fills the screen

## Pricing
<!-- camera: 18% flip -->   \u2190 small, on the other side
\`\`\`

Words you can combine: \`on\`, \`off\`, \`full\`, a size like \`30%\`, a corner, \`flip\`, \`circle\` / \`rect\`, \`mirror\` / \`unmirror\`.

### Several steps on one slide

List layouts with commas to step through them: \`full, on\` opens full screen on you, and the next \u2192 shrinks the camera to its corner and shows the slide. \`on, full, on, off\` ends a closing slide on you, then the slide again, then without the camera.

**V** steps through the deck's \`camera:\` list for the current slide.

## \u{1F4CB} Publish pack

The review fills the YouTube description from the deck's top block:

| Key | Used for |
|---|---|
| \`title\` | the video title |
| \`summary\` | the description's first paragraph |
| \`related\` | a list of \`[Title](url)\` links |
| \`tags\` | tags (any other list ending in \`_tags\` is added too) |
| \`permalink\` or \`site\` | the link back to the deck |

## \u{1F512} Your data

Your draft and settings stay in this browser. Decks inside links live in the part of the address after \`#\`, which browsers never send to a server. Slidetake has no accounts and stores no decks.

slidetake.com counts visits with Google Analytics. What it records leaves out the \`#\` part and \`?obs=\`, so neither your deck nor an OBS password reaches it. Copies you host yourself send nothing.

Slidetake is open source: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake).
`});var Pn,In=W(()=>{Pn=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var An,Rn=W(()=>{An=`---
title: Talk title
duration: 15m
---

# Talk title

One line on what the audience will take away.

## \u{1F9ED} Why this matters

- The problem, in the audience's words
- Why now
- What changes if it's solved

## \u{1F4A1} The idea

The one thing to remember, stated plainly.

### How it works

Three steps, a diagram or a table.

### An example

Something concrete the audience will recognise.

## \u2696\uFE0F Trade-offs

- What it costs
- When not to use it

## \u2705 Summary

- Point one
- Point two
- Point three

## \u{1F64F} Thank you

Where to find you, and the link to these slides.
`});var _n,Dn=W(()=>{_n=`---
title: Video title
duration: 10m
pip: bottom-right
pip_size: 24%
camera: 24%, 40%, full, off
---

<!-- camera: full, on -->

# Video title

Opens full screen on you; the next press shows this slide with you in the corner.

## \u{1F4CC} Disclaimer

<!-- camera: off, on -->

Opens without the camera, so the text has the whole screen; the next press brings you back.

## \u{1F9ED} Contents

- Part one
- Part two
- Part three

## \u{1F539} Part one

<!-- view: overview -->

The overview comment pulls back to the whole map first: a good start to a chapter.

### A detail

Slides you talk over in the corner.

## \u{1F538} Part two

### A detail

## \u{1F537} Part three

### A detail

## \u{1F64F} Thanks for watching

<!-- camera: on, full, on, off -->

Ends on you full screen, then back to the slide, then without the camera.
`});function Ee(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function Ae(e){return e.replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function R(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function jn(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,n)=>n[0]==="#"?String.fromCodePoint(n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10)):ya[n.toLowerCase()]??t)}function De(e){let t={};for(let n of e.matchAll(/([\w-]+)="([^"]*)"/g))t[n[1]]=n[2];return t}function nt(e,t){let n=[[]],o=null;return e.split(`
`).forEach(a=>{let r=a.match(/^\s{0,3}(`{3,}|~{3,})/);r&&(o?r[1][0]===o[0]&&r[1].length>=o.length&&(o=null):o=r[1]),!o&&!r&&t.test(a)?n.push([]):n[n.length-1].push(a)}),n.map(a=>a.join(`
`))}function Fn(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let n=t.match(/^(\d+):(\d{1,2})$/);if(n)return(+n[1]*60+ +n[2])*1e3;if(n=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!n)return 0;let o=(n[2]||"m")[0];return parseFloat(n[1])*(o==="h"?3600:o==="s"?1:60)*1e3}function Y(e){let t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return(n?n+":"+String(o).padStart(2,"0"):o)+":"+String(a).padStart(2,"0")}var ya,ot=W(()=>{"use strict";ya={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function Wn(e){let t=null;return e.split(`
`).filter(n=>{let o=n.match(/^\s{0,3}(`{3,}|~{3,})/);return o?(t?o[1][0]===t[0]&&o[1].length>=t.length&&(t=null):t=o[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function Dt(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(Wn(e))}function _t(e){let t=Wn(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function xa(e){let t={},n=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!n)return{deck:t,body:e};let o=null;return n[1].split(`
`).forEach(a=>{let r=a.match(/^\s+-\s+(.*)$/);if(r&&o){t[o].push(r[1].trim().replace(/^["']|["']$/g,""));return}let i=a.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){o=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],o=s):(t[s]=l,o=null)}),{deck:t,body:e.slice(n[0].length)}}function Un(e){let t=a=>typeof a=="string"||typeof a=="number"||typeof a=="boolean",n=a=>String(a).replace(/\s*\n\s*/g," "),o=[];for(let[a,r]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(a)&&(t(r)?o.push(a+": "+n(r)):Array.isArray(r)&&r.every(t)&&(o.push(a+":"),r.forEach(i=>o.push("  - "+n(i)))));return o.length?`---
`+o.join(`
`)+`
---
`:""}function wa(e){let t=e.split(`
`),n={},o=e;if(t[0]!==void 0&&t[0].trim()==="---"){let a=-1;for(let r=1;r<t.length;r++)if(t[r].trim()==="---"){a=r;break}a!==-1&&(t.slice(1,a).forEach(r=>{let i=r.indexOf(":");i>-1&&(n[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}),o=t.slice(a+1).join(`
`).replace(/^\n+/,""))}return{meta:n,body:o}}function ka(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),n=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),o=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),a=null;if(n&&(!o||n.index<o.index)?a=n[1]:o&&(a=o[1].replace(/<[^>]+>/g," ")),!a){let r=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));a=r?r.slice(0,60):null}return a?jn(Ae(a)).replace(/\s+/g," ").trim():null}function Hn(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?De(t[1]):{}}function Nn(e,{render:t=n=>({html:n,err:null})}={}){let n=new Map,o=h=>{let C=h,x=2;for(;n.has(C);)C=h+"-"+x++;return C},a=h=>(n.set(h.id,{x:null,y:null,children:[],...h}),h.id);e=e.replace(/\r\n?/g,`
`);let r=/^\+\+\+[ \t]*$/m.test(e),i={};r||({deck:i,body:e}=xa(e));let s=!r&&(/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||""))||nt(e,/^--\s*$/).length>1),l=r?g():s?j():d();return n.forEach(h=>{(!h.parent||h.parent===h.id||!n.has(h.parent))&&(h.parent=null)}),n.forEach(h=>{let C=new Set([h.id]),x=h.parent;for(;x;){if(C.has(x)){h.parent=null;break}C.add(x),x=n.get(x).parent}}),n.forEach(h=>{h.parent&&n.get(h.parent).children.push(h.id)}),{deck:i,nodes:n,format:r?"+++":s?"reveal":"headings",errCount:l};function d(){let h=[],C=null,x=null,b={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(E=>{let m=E.match(/^\s{0,3}(`{3,}|~{3,})/);m&&(x?m[1][0]===x[0]&&m[1].length>=x.length&&(x=null):x=m[1]);let S=!x&&!m?E.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(S){let P=S[2],ie=null,te=P.match(/\s*\{#([\w\-:.]+)\}\s*$/);te&&(ie=te[1],P=P.slice(0,te.index)),C={level:S[1].length,title:Ae(P),explicitId:ie,lines:[S[1]+" "+P]},h.push(C)}else(C||b).lines.push(E)});let A=b.lines.join(`
`);A.trim()&&(h.length&&!A.replace(/<!--[\s\S]*?-->/g,"").trim()?h[0].lines.splice(1,0,...b.lines):h.unshift(b));let w=[];return h.forEach(E=>{for(;w.length&&w[w.length-1].level>=E.level;)w.pop();let m=w.length?w[w.length-1].id:null,S=E.lines.join(`
`).trim(),P=E.title||Ae((S.split(`
`).find(me=>me.trim())||"Intro").slice(0,48));E.id=o(E.explicitId||Ee(P));let{html:ie,err:te}=t(S);a({id:E.id,parent:m,title:P,html:ie,err:te,camera:_t(S),mapFirst:Dt(S)}),w.push(E)}),0}function g(){let h=e.split(/\n\+\+\+[ \t]*\n/).map(b=>b.trim()).filter(b=>b.length),C=null,x=0;return h.forEach((b,A)=>{let{meta:w,body:E}=wa(b),m=o(w.id||"slide-"+(A+1)),S="parent"in w?w.parent||null:C,P=E.match(/^#{1,6}\s+(.+)$/m),ie=w.title||(P?Ae(P[1]):m),{html:te,err:me}=t(E);me&&x++,a({id:m,parent:S,title:ie,html:te,err:me,camera:w.camera||_t(E),mapFirst:Dt(E),x:w.x!==void 0?parseFloat(w.x):null,y:w.y!==void 0?parseFloat(w.y):null}),C=m}),x}function j(){let h=0,C=0,x=null;function b(w,E){let m=w.body.trim();C++;let S=ka(m)||"Slide "+C,P=E?n.get(E).title:null;P&&S.startsWith(P+" / ")&&(S=S.slice(P.length+3));let ie=o(Ee(S)),{html:te,err:me}=t(m);return me&&h++,a({id:ie,parent:E,title:S,html:te,err:me,camera:_t(m),mapFirst:Dt(m),autoslide:parseInt(w.attrs["data-autoslide"],10)||0})}let A=[];return nt(e,/^---\s*$/).forEach(w=>{if(/<section\b/i.test(w)){for(let S of w.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))A.push([{body:S[2],attrs:De(S[1])}]);let m=w.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");m.trim()&&A.push([{body:m,attrs:Hn(m)}]);return}let E=nt(w,/^--\s*$/).filter(m=>m.trim()).map(m=>({body:m,attrs:Hn(m)}));E.length&&A.push(E)}),A.forEach(w=>{let E=null;w.forEach((m,S)=>{if(!x){x=E=b(m,null);return}S===0?E=b(m,x):b(m,E)})}),h}}var qn=W(()=>{"use strict";ot()});function at(e,t){return String(t||"").toLowerCase().split(/\s+/).forEach(n=>{n&&(n==="off"||n==="hide"?e.off=!0:n==="on"||n==="pip"||n==="show"?(e.off=!1,e.full=!1,e.used=!0):n==="full"||n==="fullscreen"?(e.full=!0,e.off=!1,e.used=!0):/^\d+(\.\d+)?%?$/.test(n)?(e.size=jt(parseFloat(n)),e.used=!0):_e.includes(n)?(e.corner=n,e.used=!0):n==="flip"?(e.flip=!e.flip,e.used=!0):n==="circle"?e.circle=!0:n==="rect"?e.circle=!1:n==="mirror"?e.mirror=!0:(n==="unmirror"||n==="no-mirror")&&(e.mirror=!1))}),e}function $n(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Yn(e,t){let n=[];if(!e.length){for(let a=0;a<=t;a++)n.push({cam:0,frag:a});return n}let o=e.findIndex(a=>!at({},a).full);o<0&&(o=e.length-1);for(let a=0;a<=o;a++)n.push({cam:a,frag:0});for(let a=1;a<=t;a++)n.push({cam:o,frag:a});for(let a=o+1;a<e.length;a++)n.push({cam:a,frag:t});return n}var _e,jt,Gn=W(()=>{"use strict";_e=["top-left","top-right","bottom-left","bottom-right"],jt=e=>Math.max(8,Math.min(60,e))});function Kn(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let o=n.pathname.split("/").filter(Boolean);if(n.hostname==="github.com"||n.hostname==="www.github.com"){let[a,r,i,s,...l]=o;if(a&&r&&(i==="blob"||i==="raw"||i==="tree")&&s){let d=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(d))&&(d=(d?d+"/":"")+"index.md"),{kind:"url",url:Ft+[a,r,s].join("/")+"/"+d}}if(a&&r&&!i)return{kind:"url",url:Ft+a+"/"+r+"/HEAD/README.md"}}if(n.hostname==="gist.github.com"){let a=o.length>=2?o[1]:o[0];if(a&&/^[\da-f]+$/i.test(a))return{kind:"gist",id:a}}if(n.hostname==="slidetake.com"||n.hostname==="www.slidetake.com"){let a=Ht(n.pathname);if(a)return a;let r=n.searchParams.get("src");if(r)return{kind:"url",url:r}}return{kind:"url",url:n.href}}function Ht(e){let t=String(e||"").split("/").filter(Boolean).map(n=>{try{return decodeURIComponent(n)}catch{return n}});if(t[0]==="gh"&&t.length>=4){let[,n,o,...a]=t,r=o.indexOf("@"),i=r<0?o:o.slice(0,r),s=r<0?"HEAD":o.slice(r+1);return!n||!i||!s?null:{kind:"url",url:Ft+[n,i,s,...a].map(encodeURIComponent).join("/")}}return t.length===1&&t[0]==="help"?{kind:"builtin",id:"help"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function Vn(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,n,o,a,r]=t;if(!/^refs$/.test(a))return"/gh/"+n+"/"+o+(a==="HEAD"?"":"@"+a)+"/"+r}return"/?src="+encodeURIComponent(e.url)}var Ft,Wt=W(()=>{"use strict";Ft="https://raw.githubusercontent.com/"});function Ea(e){let t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Sa(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,n=>n.charCodeAt(0))}async function Xn(e,t){let n=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await n.arrayBuffer())}async function Jn(e){return Ea(await Xn(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function Zn(e){return new TextDecoder().decode(await Xn(Sa(e),new DecompressionStream("deflate-raw")))}function rt(e){let t=e.replace(/^#/,"");if(!t.startsWith(Ut)){let r=t;try{r=decodeURIComponent(t)}catch{}return{data:null,slide:r}}let n=t.slice(Ut.length),o=n.indexOf("~"),a=o<0?"":n.slice(o+1);try{a=decodeURIComponent(a)}catch{}return{data:o<0?n:n.slice(0,o),slide:a}}function Nt(e,t){return"#"+Ut+e+(t?"~"+encodeURIComponent(t):"")}var Ut,qt=W(()=>{"use strict";Ut="deflate:"});function Qn(e,t,n){let o=e.replace(/\/+$/,"")||"/",a=new URLSearchParams(t),{data:r,slide:i}=rt(n);if(o==="/share")return r?{page:"share",data:r,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(o==="/edit")return{page:"edit",slide:i};if(o==="/new"){let d=a.get("template");return d&&La.includes(d)?{page:"source",source:{kind:"builtin",id:"template:"+d},slide:i}:{page:"pick"}}let s=Ht(o);if(s)return{page:"source",source:s,slide:i};let l=a.get("src");return o==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function ne(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="help"?"Help":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let n=new URL(e.url);return n.hostname+n.pathname}catch{return e.url}}}}function it(e,t,{exported:n=!1}={}){return{text:e,origin:t,originText:e,exported:n?e:null}}function st(e){return e.text!==(e.exported??e.originText)}function lt(e){return e.text===e.originText}function eo(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var La,to=W(()=>{"use strict";Wt();qt();La=["blank","talk","recording"]});function je(e){let t=new Map,n=e.totalObs??e.total;return e.events.forEach((o,a)=>{t.has(o.id)||t.set(o.id,{id:o.id,title:o.title,takes:[]});let r=t.get(o.id),i=e.events[a+1];r.takes.push({no:r.takes.length+1,start:no(o),end:i?no(i):n})}),t}function Fe(e){let t=[],n=dt(e);return je(e).forEach(o=>{let a=e.picks[o.id]??o.takes.length;if(!a)return;let r=o.takes[a-1];if(!r)return;let i=oo(r.start,n),s=oo(r.end,n);s>i&&t.push({id:o.id,title:o.title,f0:i,f1:s,start:i*1e3/n,end:s*1e3/n})}),t}function Ca(e){let t=[];return e.forEach(n=>{let o=t[t.length-1];o&&n.f0===o.f1?(o.f1=n.f1,o.end=n.end):t.push({f0:n.f0,f1:n.f1,start:n.start,end:n.end})}),t}function $t(e,t){let n=0,o=[];return Fe(e).forEach(a=>{let{sec:r,title:i}=t(a.id,a.title),s=o[o.length-1];(!s||s.sec!==r&&s.title!==i)&&o.push({sec:r,title:i,t:n}),n+=a.end-a.start}),{list:o,length:n}}function ro(e,t){let{list:n,length:o}=$t(e,t),a=n.filter((r,i)=>i===0||(n[i+1]?n[i+1].t:o)-r.t>=1e4);return a.length&&(a[0].t=0),{lines:a.map(r=>Y(r.t)+" "+r.title),dropped:n.length-a.length,length:o}}function io(e,t,{input:n,outputName:o,sectionOf:a}){let r=Ca(Fe(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!r.length)return"# Every slide is left out: nothing to render.";let i=Ta(n)+o,{list:s,length:l}=$t(e,a),d=m=>String(m).replace(/[=;#\\\n]/g,S=>"\\"+S),j=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+d(e.deckTitle)+`
`+s.map((m,S)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(m.t)+`
END=`+Math.round(s[S+1]?s[S+1].t:l)+`
title=`+d(m.title)).join(`
`))+`
EOF
`,h=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let m=r.map(P=>"file "+ct(n)+`
inpoint `+ao(P.start)+`
outpoint `+ao(P.end)).join(`
`);return(r.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(r.length===2?"the cut":"each of the "+(r.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+m+`
EOF
`+j+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+h+" -c copy -movflags +faststart "+ct(i)}let C=dt(e),x=m=>(m/C).toFixed(6),b=m=>((m-.5)/C).toFixed(6),A=r.map(m=>"gte(t,"+b(m.f0)+")*lt(t,"+b(m.f1)+")").join("+"),w=r.map(m=>"gte(t,"+x(m.f0)+")*lt(t,"+x(m.f1)+")").join("+"),E=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return j+"ffmpeg -i "+ct(n)+" -i /tmp/slidetake-chapters.txt"+h+` -vf "select='`+A+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+w+`',asetpts=N/SR/TB" `+E+" -c:a aac -b:a 192k -movflags +faststart "+ct(i)}var no,dt,oo,Se,Ta,ct,ao,so=W(()=>{"use strict";ot();no=e=>e.obsT??e.t,dt=e=>e.fps||60,oo=(e,t)=>Math.round(e*t/1e3);Se=e=>String(e||"").split(/[\\/]/).pop()||"",Ta=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},ct=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",ao=e=>(e/1e3).toFixed(3)});var qr={};function J(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let n=e.slice(10);return localStorage.getItem("slidetake:"+n)??localStorage.getItem("traverse:"+n)}catch{return null}}function Z(e,t){try{localStorage.setItem(e,t)}catch{}}function _a(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+R(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function ft(){let e=y.brand||"",t=y.logo||"",n=/^chip$/i.test(y.brand_style||""),o=/^slidetake$/i.test(e)?'<span class="st-mark">'+document.querySelector("header .mark .logo").outerHTML+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+R(t)+'">':"")+(e?"<span"+(n?' class="chip"':"")+">"+R(e)+"</span>":"");if(se.dataset.html!==o){se.dataset.html=o,se.innerHTML=o;let r=se.querySelector("img");r&&(r.onload=r.onerror=()=>ee(!0))}se.hidden=!o,un(),document.title=y.title||"Slidetake";let a=String(y.theme||y.palette||"").toLowerCase();a?document.body.dataset.palette=a:delete document.body.dataset.palette,Co()}function pn(){if(M&&M.themeKey&&!po){let t=J(M.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(po||J("slidetake:mode")||y.mode||"dark").toLowerCase()==="light"?"light":"dark"}function Co(){let e=pn()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function To(){let e=pn()==="light"?"dark":"light";M&&M.themeKey?(Z(M.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):Z("slidetake:mode",e),Co(),G.querySelector(".echarts-container")&&Mt(!0)}function ja(){let t=(y.camera||"").replace(/^\[|\]$/g,"").split(",").map(n=>n.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function Qt(e){return!N&&e?$n(e.camera):[]}function ke(e){return Yn(Qt(e),e&&e.frags?e.frags.length:0)}function Mo(){let e=ke(c.get(p));return e[Math.min(Q,e.length-1)]||{cam:0,frag:0}}function Fa(){if(!p)return null;let e=Qt(c.get(p));if(e.length)return e[Math.min(Mo().cam,e.length-1)];for(let t=f.indexOf(p)-1;t>=0;t--){let n=Qt(c.get(f[t]));if(n.length)return n[n.length-1]}return null}function Ha(){let e={corner:(y.pip||"none").toLowerCase(),size:jt(parseFloat(y.pip_size)||24),circle:(y.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(y.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};return at(e,Fa()),at(e,he),!_e.includes(e.corner)&&(U||e.used)&&(e.corner="bottom-right"),e.flip&&_e.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function un(){let e=!B.hidden&&B.offsetWidth?B.getBoundingClientRect():null,t=Me=Ha(),n=_e.includes(t.corner);if(B.className=n?[t.corner,t.circle&&"circle",U&&"live",t.mirror&&"mirror",t.full&&"full"].filter(Boolean).join(" "):"",B.style.width=t.size+"%",B.hidden=!n||N||t.off,Da.dataset.pip=B.hidden||t.full?"none":t.corner,B.hidden||Ie||!B.animate)return;let o="cubic-bezier(.65,0,.35,1)";if(!e){B.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let a=B.getBoundingClientRect();Math.abs(e.left-a.left)+Math.abs(e.top-a.top)+Math.abs(e.width-a.width)+Math.abs(e.height-a.height)<2||B.animate([{transformOrigin:"0 0",transform:"translate("+(e.left-a.left)+"px,"+(e.top-a.top)+"px) scale("+e.width/a.width+","+e.height/a.height+")"},{transformOrigin:"0 0",transform:"none"}],{duration:600,easing:o})}function Wa(){let e=Me;if(!e||B.hidden||e.full)return null;let t=T.clientWidth,n=T.clientHeight,o=16,a=t*e.size/100,r=e.circle?a:a*9/16,i=e.corner.includes("left")?o:t-o-a,s=e.corner.includes("top")?o:n-o-r;return{x0:i,y0:s,x1:i+a,y1:s+r}}function Ua(){if(N){Ln(!0);return}let e=ja();le=(le+1)%e.length,he=e[le],un(),D||Ce("Camera: "+he),!U&&!B.hidden?et():ee()}function Bo(e){let t=Nn(e,{render:_a});y=t.deck,c=t.nodes,ft();let n={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];Ma.textContent=c.size+(c.size===1?" card":" cards")+" \xB7 "+n,Ye.textContent=t.errCount?t.errCount+" card(s) had errors":""}function Oo(){re=[...c.values()].filter(o=>!o.parent).map(o=>o.id);let e=0;function t(o,a){let r=c.get(o);if(r.depth=a,r.children.length===0)r._slot=e++;else{r.children.forEach(s=>t(s,a+1));let i=r.children.map(s=>c.get(s)._slot);r._slot=(Math.min(...i)+Math.max(...i))/2}}re.forEach(o=>t(o,0)),f=[];function n(o){f.push(o),c.get(o).children.forEach(n)}return re.forEach(n),Math.max(1,e)}function Na(){let e=[],t=[],n=[];return c.forEach(o=>{e[o.depth]=Math.max(e[o.depth]||0,o._h),t[o.depth]=Math.max(t[o.depth]||0,o._w),n[o.depth]=(n[o.depth]||0)+1}),{maxH:e,maxW:t,count:n,maxDepth:e.length-1}}function zo(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function qa(){let{maxH:e,maxDepth:t}=Na(),n=[0];for(let l=1;l<=t;l++)n[l]=n[l-1]+e[l-1]+za;let o=Oa-Ge,a=[],r=(l,d)=>{let g=c.get(l);g.cx+=d,g.children.forEach(j=>r(j,d))},i=l=>{let d=c.get(l);a[d.depth]=Math.max(a[d.depth]??-1/0,d.cx+d._w/2),d.children.forEach(i)};function s(l){let d=c.get(l),g=a[d.depth]!==void 0?a[d.depth]+o:-1/0;d.children.length?(d.children.forEach(s),d.cx=(c.get(d.children[0]).cx+c.get(d.children[d.children.length-1]).cx)/2,d.cx-d._w/2<g&&r(l,g-(d.cx-d._w/2))):d.cx=(g===-1/0?0:g)+d._w/2,i(l)}re.forEach(s),c.forEach(l=>{l.cy=n[l.depth]+l._h/2,zo(l)})}function $a(e){let t=Math.PI*2/e,n=32,o=[],a=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+n&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+n,r=Math.max(0,...[...c.values()].map(s=>s.depth)),i=0;for(let s=0;s<=r;s++){let l=[...c.values()].filter(g=>g.depth===s);if(!l.length)continue;let d=s===0?re.length>1?Pa*.5:0:i+Ia;for(let g=0;g<400&&(l.forEach(h=>{let C=(h._slot+.5)*t-Math.PI/2;h.cx=d*Math.cos(C),h.cy=d*Math.sin(C),zo(h)}),!!l.some((h,C)=>l.some((x,b)=>b>C&&a(h,x))||o.some(x=>a(h,x))));g++)d=d*1.02+10;i=d,o.push(...l)}}function Ya(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)n.push(t.currentNode);n.forEach(o=>{let a=o.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!a)return;let r=o.previousSibling;for(;r&&r.nodeType===3&&!r.data.trim();)r=r.previousSibling;let i=r&&r.nodeType===1?r:o.parentElement;i&&Object.entries(De(a[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function Ga(e){let t=[...e.querySelectorAll(".fragment")].map((a,r)=>({e:a,i:r,k:a.dataset.fragmentIndex}));if(t.every(a=>a.k===void 0))return t.map(a=>[a.e]);let n=0;t.forEach(a=>{a.k=a.k===void 0?n:parseFloat(a.k),n=Math.max(n,a.k)+1}),t.sort((a,r)=>a.k-r.k||a.i-r.i);let o=[];return t.forEach((a,r)=>{r&&t[r-1].k===a.k?o[o.length-1].push(a.e):o.push([a.e])}),o}function hn(e,t,n){!e||!e.frags||(n&&e.el.classList.add("snap"),e.frags.forEach((o,a)=>o.forEach(r=>{r.classList.toggle("visible",a<t),r.classList.toggle("current-fragment",a===t-1)})),n&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function Ka(){try{return y.base?new URL(y.base,V||location.href):V?new URL(V):null}catch{return null}}function Va(e){let t=Ka(),n=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(o=>{let a=o.hasAttribute("src")?"src":"href",r=o.getAttribute(a);if(!r||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(r))return;if(!t){a==="src"&&n++;return}let i=t;try{y.site&&(i=new URL(y.site,t))}catch{}o.setAttribute(a,new URL(r,r.startsWith("/")?i:t).href)}),n}function Ct(e){let t=e.el,n=t.querySelector(".body");t.classList.add("measuring"),n.style.zoom="";let o=Ge;e.visual=!!n.querySelector("iframe, .echarts-container, pre > code.language-dot, .diagram"),e.visual?o=pt:(n.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||n.querySelectorAll("img").length>=4)&&(o=co);let a=n.querySelectorAll("table");if(a.length){t.style.width=pt+"px";let i=t.offsetWidth-n.clientWidth;a.forEach(s=>{o=Math.max(o,Math.min(co,Math.ceil(s.offsetWidth)+i+12))})}let r=n.querySelectorAll(".fragment.grow");if(r.length){t.style.width=o+"px";let i=t.offsetWidth-n.clientWidth;r.forEach(s=>{o=Math.max(o,Math.min(pt,Math.ceil(s.offsetWidth*1.3)+i))})}t.style.width=o+"px",t.scrollWidth>o+2&&(t.style.width=(o=Math.min(pt,t.scrollWidth+24))+"px"),n.scrollWidth>n.clientWidth+2&&(n.style.zoom=(n.clientWidth/n.scrollWidth).toFixed(3)),e._w=o,e._h=t.offsetHeight||Zt,t.classList.remove("measuring")}function Xa(){clearTimeout(uo),uo=setTimeout(()=>{c.forEach(Ct),Xe(),ee(!0)},200)}function en(e){return Gt[e]||(Gt[e]=new Promise((t,n)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>{delete Gt[e],n(new Error("could not load "+e))},document.head.appendChild(o)}))}async function Qa(){let e=We,t=[...G.querySelectorAll(".node pre > code.language-dot")],n=[...G.querySelectorAll(".node .echarts-container[data-chart]")];if(!t.length&&!n.length)return;let o=[];if(t.length)try{if(await en(Ja),Kt=Kt||await Viz.instance(),e!==We)return;t.forEach(a=>{let r=document.createElement("div");r.className="diagram";try{r.appendChild(Kt.renderSVGElement(a.textContent))}catch(i){r.className="diagram err",r.textContent="Diagram error: "+i.message}a.parentElement.replaceWith(r)})}catch{o.push("diagrams")}if(n.length)try{if(await en(Za),e!==We)return;n.forEach(a=>{let r;try{r=JSON.parse(a.dataset.chart)}catch{a.textContent="Chart data is not valid JSON.";return}echarts.init(a,pn()==="light"?null:"dark",{renderer:"svg"}).setOption(Object.assign({backgroundColor:"transparent",animation:!Ie},r))})}catch{o.push("charts")}e===We&&(o.length&&(Ye.textContent="Could not load the "+o.join(" and ")+" renderer (offline?)"),c.forEach(Ct),Xe(),ee(!0))}function er(){let e=[];return f.forEach(t=>{let n=Ve(t),o=e[e.length-1];o&&o.sec===n?o.ids.push(t):e.push({sec:n,ids:[t]})}),e}function tr(){let n=0,o=0,a=0;er().forEach((r,i)=>{let s=Math.max(...r.ids.map(g=>c.get(g)._h));i&&(n+=a/2+120+s/2);let l=o,d=o;r.ids.forEach((g,j)=>{let h=c.get(g);j&&(l+=90+h._w/2),h.cx=l,h.cy=n,d=l,l+=h._w/2}),o=d,a=s})}function nr(){c.forEach(e=>{e.cx=0,e.cy=0})}function Io(){We++,window.echarts&&G.querySelectorAll(".echarts-container").forEach(n=>{let o=echarts.getInstanceByDom(n);o&&o.dispose()}),G.querySelectorAll("div.node").forEach(n=>n.remove());let e=Oo(),t=0;c.forEach(n=>{let o=document.createElement("div");o.className="node",o.tabIndex=0,o.dataset.id=n.id;let a=n.parent?Tt(n.id).slice(0,-1).map(i=>c.get(i).title).join(" / "):"";o.innerHTML=(a?'<div class="crumb">'+R(a)+"</div>":"")+'<div class="body">'+n.html+"</div>"+(n.err?'<div class="err-badge">!</div>':"");let r=o.querySelector(".body");Ya(r),r.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=Va(r),n.frags=Ga(r),r.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",Xa,{once:!0})}),o.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));c.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),u.active||I(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),o.addEventListener("click",()=>{u.active||I(n.id)}),o.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===o&&I(n.id)}),G.appendChild(o),n.el=o,hn(n,n.frags.length)}),t&&!Ye.textContent&&(Ye.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),c.forEach(Ct),Xe(e),Qa()}function Xe(e){e===void 0&&(e=Oo()),z==="radial"?$a(e):z==="path"?tr():z==="focus"?nr():qa(),G.classList.toggle("focus",z==="focus"),c.forEach(t=>{let n=t.el.style;n.setProperty("--cx",t.cx),n.setProperty("--cy",t.cy)}),or(),Pe(),bn()}function or(){let e="";if(z==="focus"){Yt.innerHTML="";return}if(z==="path"){for(let t=1;t<f.length;t++){let n=c.get(f[t-1]),o=c.get(f[t]);e+='<path data-from="'+n.id+'" data-to="'+o.id+'" d="M '+n.cx+" "+n.cy+" L "+o.cx+" "+o.cy+'"/>'}Yt.innerHTML=e;return}c.forEach(t=>{if(!t.parent)return;let n=c.get(t.parent);if(z==="radial")e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+n.cy+" L "+t.cx+" "+t.cy+'"/>';else{let o=n.cy+n._h/2,a=t.cy-t._h/2,r=o+(a-o)/2;e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+o+" L "+n.cx+" "+r+" L "+t.cx+" "+r+" L "+t.cx+" "+a+'"/>'}}),Yt.innerHTML=e}function Tt(e){let t=[],n=e;for(;n;)t.unshift(n),n=c.get(n).parent;return t}function Be(){let e=T.clientWidth,t=T.clientHeight;G.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+L.zoom+") translate("+-L.x+"px,"+-L.y+"px)",Ho()}function mn(){qe&&(qe.kill(),qe=null)}function Po(e,t){if(mn(),t||Ie||!window.gsap){Object.assign(L,e),Be();return}let n=T.clientWidth,o=Math.hypot(e.x-L.x,e.y-L.y),a=e.zoom,r=gsap.timeline({onUpdate:Be,onComplete:()=>{qe=null}}),{zoom:i,...s}=e,l=o*Math.min(L.zoom,a),d=Math.max(.55,Math.min(1.3,.55+l/n*.3));if(r.to(L,{...s,duration:d,ease:"power2.inOut"},0),l>n*1.2){let g=Math.max(.06,Math.min(L.zoom,a,n*.9/(o+Ge)));r.to(L,{zoom:g,duration:d/2,ease:"sine.out"},0).to(L,{zoom:a,duration:d/2,ease:"sine.in"},d/2)}else r.to(L,{zoom:a,duration:d,ease:"power2.inOut"},0);qe=r}function ar(){let e=T.getBoundingClientRect(),t=14,n=[];if(!se.hidden&&se.offsetWidth){let a=se.getBoundingClientRect();n.push({x0:a.left-e.left-t,y0:a.top-e.top-t,x1:a.right-e.left+t,y1:a.bottom-e.top+t})}let o=Wa();return o&&n.push({x0:o.x0-t,y0:o.y0-t,x1:o.x1+t,y1:o.y1+t}),n}function rr(){let e=T.clientWidth,t=T.clientHeight,n=[{x0:16,y0:D?20:56,x1:e-16,y1:t-(D?20:74)}];return ar().forEach(o=>{let a=[];n.forEach(r=>{if(o.x1<=r.x0||o.x0>=r.x1||o.y1<=r.y0||o.y0>=r.y1){a.push(r);return}[{...r,x1:Math.min(r.x1,o.x0)},{...r,x0:Math.max(r.x0,o.x1)},{...r,y1:Math.min(r.y1,o.y0)},{...r,y0:Math.max(r.y0,o.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&a.push(i)})}),a.length&&(n=a)}),n}function tn(e,t,n){let o=T.clientWidth,a=T.clientHeight,r=null;return rr().forEach(i=>{let s=n*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!r||s>r.zoom)&&(r={zoom:s,sx:(i.x0+i.x1)/2-o/2,sy:(i.y0+i.y1)/2-a/2})}),r}function Ro(e,t,n,o){return{x:e-n.sx/o,y:t-n.sy/o}}function xe(e,t){let n=c.get(e);if(!n)return;let o=tn(n._w,n._h,Ke),a=Ve(e),r=f.filter(l=>Ve(l)===a&&!c.get(l).visual).map(l=>{let d=c.get(l);return tn(d._w,d._h,Ke).zoom}).sort((l,d)=>l-d),i=r.length?r[Math.floor((r.length-1)/2)]:o.zoom,s=Math.max(.2,Math.min(5,o.zoom,i));Po(Object.assign(Ro(n.cx,n.cy,o,s),{zoom:s}),t)}function Je(e){let t=[...c.values()];if(!t.length)return;let n=T.clientWidth,o=T.clientHeight,a=Math.min(...t.map(g=>g.cx-g._w/2)),r=Math.max(...t.map(g=>g.cx+g._w/2)),i=Math.min(...t.map(g=>g.cy-g._h/2)),s=Math.max(...t.map(g=>g.cy+g._h/2)),l=tn(r-a,s-i,.94),d=Math.max(.05,Math.min(1,l.zoom));Po(Object.assign(Ro((a+r)/2,(i+s)/2,l,d),{zoom:d}),e)}function ee(e){p&&c.has(p)?xe(p,e):Je(e)}function Pe(){let e=p?Tt(p):[];c.forEach(t=>{let n=t.el;n.classList.toggle("current",t.id===p),n.classList.toggle("active-path",e.includes(t.id))}),G.querySelectorAll("#connectors path").forEach(t=>{let n=z==="path"?!!p&&f.indexOf(t.dataset.to)<=f.indexOf(p):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",n)}),cr(e),Do()}function Ao(){return Fn(new URLSearchParams(location.search).get("duration")??y.duration)}function ir(){return D&&Ao()>0&&(!u.active||/^always$/i.test(y.timer||""))}function gt(){let e=ir()&&ce.start>0;if(ge.classList.toggle("timed",e),!e){ge.classList.remove("over");return}let n=(u.active&&u.t0?xt():performance.now()-ce.start)/Ao();ge.firstChild.style.width=Math.min(100,n*100)+"%",ge.classList.toggle("over",n>=1)}function sr(){ce.start=performance.now(),clearInterval(ce.timer),ce.timer=setInterval(gt,1e3),gt()}function lr(){clearInterval(ce.timer),ce.timer=null,ce.start=0,gt()}function Do(){let e=D&&f.length>1&&!/^(off|no|false)$/i.test(y.progress||"");if(ge.classList.toggle("show",e),!e)return;gt();let t=f.indexOf(p),n=0,o=0;f.forEach((a,r)=>{let i=ke(c.get(a)).length;n+=i,r<t?o+=i:r===t&&(o+=Math.min(Q,i-1)+1)}),ge.lastChild.style.width=(n?o/n*100:0)+"%"}function cr(e){lo.innerHTML=e.map((t,n)=>(n>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===p?" here":"")+'" data-id="'+R(t)+'">'+R(c.get(t).title)+"</button>").join(""),lo.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{u.active||I(t.dataset.id)}))}function Ze(e){let t=c.get(p);t&&(hn(t,Mo().frag,e),un(),(B.hidden||!Me||!Me.full)&&pr(t),gn(t))}function pr(e){e._played||!window.gsap||Ie||(e._played=!0,e.el.querySelectorAll("[data-gsap]").forEach(t=>{let n;try{n=JSON.parse(t.dataset.gsap)}catch{return}let o={duration:n.duration??1,delay:n.delay??0,ease:n.ease||"power2.out"};n.to?gsap.fromTo(t,n.from||{},Object.assign({},n.to,o)):n.from&&gsap.from(t,Object.assign({},n.from,o))}),e.el.querySelectorAll(".title-scramble").forEach(ur))}function fn(e){!e||!e._played||(e._played=!1,window.gsap&&(e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let n={};try{n=JSON.parse(t.dataset.gsap)}catch{}let o=new Set(Object.keys(Object.assign({},n.from,n.to)).map(a=>dr.includes(a)?"transform":a));o.size&&gsap.set(t,{clearProps:[...o].join(",")})}),e.el.querySelectorAll(".title-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function ur(e){let t=e.dataset.text||(e.dataset.text=e.textContent),n=Array.from(t),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",a={p:0};e._scramble=gsap.to(a,{p:1,duration:1.4,ease:"none",onUpdate(){let r=Math.floor(a.p*n.length);e.textContent=n.map((i,s)=>s<r||/\s/.test(i)?i:o[Math.random()*o.length|0]).join("")},onComplete(){e.textContent=t}})}function gn(e){clearTimeout(Oe),!(!D||!e||!e.autoslide||u.active&&(!u.t0||u.paused))&&(Oe=setTimeout(()=>{p===e.id&&ze(1)},e.autoslide))}function _o(e){let t=e&&e!==f[0]?e:"";try{v&&v.kind==="share"?history.replaceState(null,"",location.pathname+location.search+Nt(v.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function I(e,t,n){if(!c.has(e))return;if(e!==p){he=null,le=-1,Q=n?ke(c.get(e)).length-1:0;let r=c.get(p);r&&z==="focus"&&!t&&(r.el.classList.add("leaving"),setTimeout(()=>r.el.classList.remove("leaving"),600)),jo()}let o=e!==p;if(p=e,clearTimeout(K),K=null,o&&z==="focus"&&!t&&!Ie){let r=c.get(e).el;r.classList.add("entering"),r.offsetWidth,r.classList.remove("entering")}Ze(o),o&&kn("slide",e);let a=c.get(e);o&&a.mapFirst&&!n&&!t&&z!=="focus"?(Je(),K=setTimeout(()=>{K=null,p===e&&xe(e)},1900)):xe(e,t),Pe(),bn(),_o(e)}function jo(){let e=c.get(p);e&&(hn(e,e.frags.length,!0),fn(e))}function hr(){if(!p&&be&&c.has(be)){Fo();return}p&&(be=p),z==="focus"&&ve("path"),jo(),clearTimeout(Oe),p=null,Pe(),bn(),Je(),_o(null)}function Fo(){if(K)return clearTimeout(K),K=null,xe(p),!0;if(!p&&be&&c.has(be)){let e=be;return be=null,I(e),!0}return!1}function ze(e){if(!p){f.length&&I(f[e>0?0:f.length-1]);return}if(K&&e>0){clearTimeout(K),K=null,xe(p);return}let t=ke(c.get(p)),n=Math.min(Q,t.length-1)+e;if(n>=0&&n<t.length){Q=n,he=null,le=-1,Ze(),!U&&!B.hidden&&Me.used?et():ee(),Pe();return}let o=f.indexOf(p)+e;o>=0&&o<f.length&&I(f[o],!1,e<0)}function mr(){let e=c.get(p);e&&e.parent&&I(e.parent)}function fr(){let e=c.get(p);e&&e.children.length?I(e.children[0]):!p&&f.length&&I(f[0])}function bn(){let e=[...c.values()];if(!e.length){Jt.innerHTML="",oe=null;return}Ba.textContent="map";let t=b=>b.cx,n=b=>b.cy,o=Math.min(...e.map(t))-Ge/2,a=Math.max(...e.map(t))+Ge/2,r=Math.min(...e.map(n))-Zt/2,i=Math.max(...e.map(n))+Zt/2,s=16,l=180,d=130,g=Math.min((l-2*s)/Math.max(1,a-o),(d-2*s-6)/Math.max(1,i-r)),j=l/2-(o+a)/2*g,h=d/2+5-(r+i)/2*g,C=p?Tt(p):[],x="";e.forEach(b=>{if(!b.parent)return;let A=c.get(b.parent);x+='<line x1="'+(t(A)*g+j)+'" y1="'+(n(A)*g+h)+'" x2="'+(t(b)*g+j)+'" y2="'+(n(b)*g+h)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(b=>{let A=b.id===p?"var(--accent)":C.includes(b.id)?"var(--accent-teal)":"var(--node-border)";x+='<circle data-id="'+R(b.id)+'" cx="'+(t(b)*g+j)+'" cy="'+(n(b)*g+h)+'" r="'+(b.id===p?4:3)+'" fill="'+A+'"><title>'+R(b.title)+"</title></circle>"}),x+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',Jt.innerHTML=x,oe={s:g,ox:j,oy:h},Ho()}function Ho(){let e=document.getElementById("mm-viewport");if(!e||!oe)return;let t=T.clientWidth/L.zoom,n=T.clientHeight/L.zoom;e.setAttribute("x",(L.x-t/2)*oe.s+oe.ox),e.setAttribute("y",(L.y-n/2)*oe.s+oe.oy),e.setAttribute("width",Math.max(2,t*oe.s)),e.setAttribute("height",Math.max(2,n*oe.s))}function Mt(e){Bo(X.value),p&&!c.has(p)&&(p=null),Io(),p?I(p,e):f.length?I(f[0],e):(p=null,Je(!0))}function ve(e,t){z=e,Z("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(n=>n.classList.toggle("active",n.dataset.mode===e)),c.size&&(!t&&!Ie&&(G.classList.add("morph"),setTimeout(()=>G.classList.remove("morph"),700)),Xe(),Be(),p?xe(p,t):Je(t))}function Wo(e){return Math.max(.04,Math.min(5,e))}function gr(e){Ke=Math.round(Math.max(Ra,Math.min(Aa,e))*100)/100,Z("slidetake:slideSize",Ke),p&&xe(p)}function mo(e){p?gr(Ke+e*.1):Uo(e>0?1.2:1/1.2)}function Uo(e,t,n){mn();let o=Wo(L.zoom*e);if(t!==void 0){let a=T.getBoundingClientRect(),r=t-a.left-a.width/2,i=n-a.top-a.height/2;L.x+=r/L.zoom-r/o,L.y+=i/L.zoom-i/o}L.zoom=o,Be()}function Bt(){M||(ue.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!ue.classList.contains("collapsed")))}function we(e){D=e,document.body.classList.toggle("presenting",e),ra();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!p&&f.length&&I(f[0]);let n=y.camera||[...c.values()].some(o=>o.camera);e&&n&&!U&&!N&&et(),e?gn(c.get(p)):clearTimeout(Oe),e?sr():lr(),Do()}function xt(){return(u.paused?u.pauseAt:performance.now())-u.t0-u.pausedMs}function Ot(e){e.classList.add("open")}function xn(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function xr(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,n,...o]=e.split(":");return bt.value=t||"localhost",vt.value=n||"4455",yt.value=o.join(":"),!0}try{let t=JSON.parse(J("slidetake:obs")||"null");t&&(bt.value=t.host||"localhost",vt.value=t.port||"4455",yt.value=t.password||"",vn.checked=!0)}catch{}return!1}function $o(){if(vn.checked)Z("slidetake:obs",JSON.stringify({host:bt.value.trim(),port:vt.value.trim(),password:yt.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function He(e,t){yo.textContent=e,yo.className=t||""}function kr(e){return location.protocol==="https:"&&!wr(e)}async function Yo(){let e=bt.value.trim()||"localhost",t="ws://"+e+":"+(vt.value.trim()||"4455");if(kr(e)){fe=!1,$e.disabled=!0,He(Er,"err");return}He("Connecting to "+t+"\u2026");try{await en(br);let n=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(H)try{await H.disconnect()}catch{}H=new n,H.on("ConnectionClosed",()=>{fe=!1,He("Disconnected from OBS","err"),$e.disabled=!0}),H.on("RecordStateChanged",a=>{a.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&ye&&(ye(),ye=null),a.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&u.active&&u.withObs&&!u.finishing&&zt("Stopped in OBS")});let o=await H.connect(t,yt.value||void 0);fe=!0;try{let a=await H.call("GetVideoSettings");a&&a.fpsNumerator&&a.fpsDenominator&&(No=a.fpsNumerator/a.fpsDenominator)}catch{}He("Connected"+(o&&o.obsWebSocketVersion?" \xB7 OBS WebSocket "+o.obsWebSocketVersion:""),"ok"),$o()}catch(n){fe=!1,He("Could not connect ("+(n&&n.message||n)+"). Is OBS running with its WebSocket server on, and is the password right?","err")}$e.disabled=!fe}function Sr(){let e=document.getElementById("rec-screen"),t=screen.width,n=screen.height;if(Math.abs(t/n-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+n+"), right for YouTube.</span>";return}let o=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[a,r]=o.reduce((s,l)=>Math.abs(l[1]-t/n)<Math.abs(s[1]-t/n)?l:s),i=Math.abs(r-t/n)<.005?a:"about "+a;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+n+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function on(){let e=f.reduce((n,o)=>n+ke(c.get(o)).length,0),t=y.camera||[...c.values()].some(n=>n.camera);document.getElementById("rec-deck-info").innerHTML=R(y.title||(re[0]?c.get(re[0]).title:"This deck"))+" \xB7 "+f.length+" slides \xB7 "+e+" presses"+(t&&N?'<br><span class="warn">The camera is off. Press C first if this take should include your webcam.</span>':""),$e.disabled=!fe,Br(),Sr(),Ot(vr)}async function Go(e){if(u.active||!f.length)return;xn(),Object.assign(u,{active:!0,withObs:e,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null}),document.body.classList.add("recording"),oa();let t=document.getElementById("rec-layout").value;t!=="current"&&t!==z&&ve(t,!0),D||we(!0),p===f[0]&&(Q=0,he=null,le=-1),I(f[0],!0);for(let o=3;o>0;o--)if(ut.querySelector(".num").textContent=o,ut.classList.add("show"),await yn(1e3),!u.active)return;if(ut.classList.remove("show"),await qo(),e){let o=new Promise(a=>{ye=a,setTimeout(()=>{ye&&(ye(),ye=null)},2500)});try{await H.call("StartRecord")}catch(a){wn("OBS could not start recording: "+(a&&a.message||a));return}if(await o,!u.active)return}u.counting=!1,u.t0=performance.now();let n=c.get(p);fn(n),Ze(!0),kn("slide",p)}function wn(e){u.active=!1,u.counting=!1,ut.classList.remove("show"),document.body.classList.remove("recording"),D&&we(!1),Ce(e)}function kn(e,t){if(!u.active||!u.t0||u.finishing)return;let n=c.get(t),o={id:t,title:n?n.title:t,retake:e==="retake",t:Math.round(xt()),obsT:null};u.events.push(o),u.withObs&&fe&&(H.call("GetRecordStatus").then(a=>{a&&typeof a.outputDuration=="number"&&(o.obsT=a.outputDuration)}).catch(()=>{}),n&&H.call("CreateRecordChapter",{chapterName:(o.retake?"RETAKE \xB7 ":"")+n.title}).catch(()=>{}))}function Lr(e){let t=e.key;if((go.includes(t)||bo.includes(t)||vo.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){u.counting?wn("Take cancelled"):zt("Stopped early");return}if(!(u.counting||u.finishing)){if(vo.includes(t)){Mr();return}u.paused||(go.includes(t)?Cr():bo.includes(t)&&Tr())}}function Cr(){let e=ke(c.get(p));Math.min(Q,e.length-1)>=e.length-1&&f.indexOf(p)===f.length-1?zt():ze(1)}function Tr(){let e=c.get(p);e&&(kn("retake",p),Q=0,he=null,le=-1,fn(e),Ze(!0),!U&&!B.hidden&&Me.used?et():ee(),Pe())}async function Mr(){u.t0&&(u.paused?(nn.classList.remove("show"),await qo(),u.withObs&&await H.call("ResumeRecord").catch(()=>{}),u.pausedMs+=performance.now()-u.pauseAt,u.paused=!1,gn(c.get(p))):(u.paused=!0,u.pauseAt=performance.now(),clearTimeout(Oe),u.withObs&&await H.call("PauseRecord").catch(()=>{}),nn.classList.add("show")))}async function zt(e){if(!u.active||u.finishing)return;if(u.counting){wn("Take cancelled");return}u.finishing=!0,clearTimeout(Oe),u.paused&&(u.pausedMs+=performance.now()-u.pauseAt,u.paused=!1,nn.classList.remove("show"));let t=Math.round(xt()),n=null;if(u.withObs){await yn(1200),t=Math.round(xt());try{let a=await H.call("GetRecordStatus");a&&typeof a.outputDuration=="number"&&(n=a.outputDuration)}catch{}try{let a=await H.call("StopRecord");u.outputPath=a&&a.outputPath}catch(a){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(a&&a.message||a)+")"}}u.active=!1,u.finishing=!1,document.body.classList.remove("recording"),D&&we(!1);let o={key:It(),deckTitle:y.title||c.get(f[0]).title,date:new Date().toISOString(),withObs:u.withObs,outputPath:u.outputPath,reason:e||"",total:t,totalObs:n,fps:No,events:u.events.map(a=>({id:a.id,title:a.title,retake:a.retake,t:a.t,obsT:a.obsT})),picks:{}};En(o),ea(o)}function It(){return Ee(y.title||(f[0]?c.get(f[0]).title:"deck"))}function Ko(){try{return JSON.parse(J("slidetake:sessions")||"[]")}catch{return[]}}function En(e){let t=Ko().filter(n=>n.date!==e.date);t.unshift(e),Z("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function Br(){let e=document.getElementById("rec-sessions"),t=Ko().filter(n=>n.key===It());e.innerHTML=t.length?"<h3>Earlier takes of this deck</h3>"+t.map((n,o)=>'<div class="row"><button class="btn small" data-session="'+o+'">Review</button><span>'+R(new Date(n.date).toLocaleString())+" \xB7 "+Y(n.totalObs??n.total)+(n.withObs?"":" \xB7 rehearsal")+(n.outputPath?" \xB7 "+R(Se(n.outputPath)):"")+"</span></div>").join(""):"",e.querySelectorAll("[data-session]").forEach(n=>n.onclick=()=>{xn(),ea(t[+n.dataset.session])})}function Ve(e){let t=c.has(e)?Tt(e):[e];return t[Math.min(1,t.length-1)]}function Vo(e,t){let n=Ve(e);return{sec:n,title:c.has(n)?c.get(n).title:t}}function Zo(){let e=Object.keys(y).filter(t=>t==="tags"||/_tags$/.test(t)).flatMap(t=>[].concat(y[t])).filter(t=>typeof t=="string");return[...new Set(e.map(t=>t.trim()).filter(Boolean))]}function Or(){return[].concat(y.related||[]).map(e=>{let t=String(e).match(/^\[([^\]]+)\]\(([^)]+)\)$/),n=String(e).split("|");return t?t[1]+": "+t[2]:n.length===2?n[0].trim()+": "+n[1].trim():String(e)})}function zr(){if(y.permalink||y.url)return y.permalink||y.url;let e=y.site||J("slidetake:site");if(!e||!V)return"";try{let t=new URL(V).pathname.replace(/\/index\.md$/i,"/").replace(/\.md$/i,"/");return new URL(t,e).href}catch{return""}}function Qo(e){let t=Xo(e),n=document.getElementById("rv-link").value.trim(),o=Or(),a=Zo(),r=[];y.summary&&r.push(y.summary),n&&r.push("\u{1F4D1} Slides: "+n),t.lines.length>=3&&r.push(`Chapters
`+t.lines.join(`
`)),o.length&&r.push(`Related
`+o.map(i=>"\u2022 "+i).join(`
`)),a.length&&r.push(a.slice(0,3).map(i=>"#"+i.replace(/[^\p{L}\p{N}]+/gu,"")).join(" ")),document.getElementById("rv-yt-desc").value=r.join(`

`),document.getElementById("rv-chapters-note").textContent=(t.dropped?t.dropped+" section"+(t.dropped>1?"s were":" was")+" under 10 seconds and folded into the chapter before, as YouTube requires. ":"")+(t.lines.length<3?"YouTube needs at least three chapters, so none are listed. ":"")+"Final length "+Y(t.length)+"."}function ea(e){_=e,F=null;let t=je(e),n=e.events.filter(a=>a.retake).length;document.getElementById("rv-title").textContent=(e.withObs?"Review the take \xB7 ":"Rehearsal \xB7 ")+e.deckTitle,document.getElementById("rv-info").textContent=[e.reason,new Date(e.date).toLocaleString(),(e.withObs?"recorded ":"ran ")+Y(e.totalObs??e.total),t.size+" slides",n?n+" retake"+(n>1?"s":""):"no retakes",e.outputPath?"saved to "+e.outputPath:e.withObs?"":"nothing was recorded"].filter(Boolean).join(" \xB7 "),document.getElementById("rv-file").textContent=e.outputPath?" ("+Se(e.outputPath)+")":"",document.getElementById("rv-yt-title").value=e.deckTitle;let o=dt(e);wt.value=[...wt.options].reduce((a,r)=>Math.abs(r.value-o)<Math.abs(a.value-o)?r:a).value,document.getElementById("rv-yt-tags").value=Zo().join(", "),document.getElementById("rv-link").value=zr(),O.src&&de!==Se(e.outputPath)&&e.outputPath&&(O.removeAttribute("src"),O.load(),de=""),document.getElementById("rv-novideo").hidden=!!O.src,Pt(),Ot(yr),Ar(e)}function Pt(){let e=_,t=document.getElementById("rv-list"),n=null;t.innerHTML=[...je(e).values()].map(o=>{let a=e.picks[o.id]??o.takes.length,r=Ve(o.id),i=r!==n;n=r;let s=o.takes.map(l=>'<button class="rv-chip'+(a===l.no?" on":"")+'" data-id="'+R(o.id)+'" data-take="'+l.no+'">'+(o.takes.length>1?"Take "+l.no+" \xB7 ":"")+Y(l.end-l.start)+"</button>").join("")+'<button class="rv-chip skip'+(a===0?" on":"")+'" data-id="'+R(o.id)+'" data-take="0">Leave out</button>';return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+R(o.title)+"<small>"+Y(o.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(o=>o.onclick=()=>{e.picks[o.dataset.id]=+o.dataset.take,En(e),Pt();let a=je(e).get(o.dataset.id),r=a&&a.takes[+o.dataset.take-1];r&&Et([{start:r.start,end:r.end,title:a.title+(a.takes.length>1?" \xB7 take "+r.no:"")}])}),document.getElementById("rv-ffmpeg").value=Jo(e,document.getElementById("rv-mode").value),Qo(e)}function Et(e){if(!O.src){kt=e,q.textContent=rn?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.";return}kt=null,F={ranges:e,i:0},q.textContent="\u25B6 "+e[0].title;let t=()=>{O.currentTime=e[0].start/1e3,O.play().catch(n=>{n&&n.name!=="AbortError"&&(q.textContent="Could not play: "+n.message)})};O.readyState>=1?t():O.addEventListener("loadedmetadata",t,{once:!0})}function ta(e){return new Promise((t,n)=>{let o=indexedDB.open(e||"slidetake",1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>t(o.result),o.onerror=()=>n(o.error)})}async function Ir(e){let t=async n=>{let o=await ta(n);return await new Promise(a=>{let r=o.transaction("kv").objectStore("kv").get(e);r.onsuccess=()=>a(r.result),r.onerror=()=>a(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function Pr(e,t){try{(await ta()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function Rt(e){rn=!0;try{return await Rr(e)}finally{rn=!1}}async function Rr(e){let t=await e.getFile();for(let n=0;n<10;n++){await new Promise(a=>setTimeout(a,1e3));let o=await e.getFile();if(o.size===t.size&&o.lastModified===t.lastModified)return o;t=o}return t}function Qe(e,t,n){O.src&&URL.revokeObjectURL(O.src),Ue=t||null,n||(an=0),O.src=URL.createObjectURL(e),de=e.name,document.getElementById("rv-novideo").hidden=!0,q.textContent="Loaded "+e.name+". Click a take to preview it.",kt?Et(kt):n&&F&&Et(F.ranges.slice(F.i)),_&&(document.getElementById("rv-ffmpeg").value=Jo(_,document.getElementById("rv-mode").value))}async function Ar(e){let t=Se(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(de===t&&O.src))try{let n=await Ir("obs-folder");if(!n||await n.queryPermission({mode:"read"})!=="granted")return;let o=await n.getFileHandle(t);q.textContent="Opening "+t+"\u2026",Qe(await Rt(o),o)}catch{}}function Ce(e,t){u.active||(ht.textContent=e,ht.classList.add("show"),clearTimeout(sn),t||(sn=setTimeout(()=>ht.classList.remove("show"),9e3)))}function oa(){clearTimeout(sn),ht.classList.remove("show")}function Xt(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function aa(){U&&U.getTracks().forEach(t=>t.stop()),U=null;let e=B.querySelector("video");e&&e.remove()}async function et(){if(!(U||N)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){Ce("Camera not available on this page."+Xt());return}if(ae.disabled)return;ae.disabled=!0,Ce("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{U=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),oa()}catch(t){let n=t&&t.name;Ce(n==="NotAllowedError"||n==="SecurityError"?"Camera access was blocked."+Xt():n==="NotFoundError"||n==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":n==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(n?" ("+n+")":"")+"."+Xt());return}finally{ae.disabled=!1,Sn()}U.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{aa(),ft(),ee()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=U,B.appendChild(e)}ft(),ee()}}function Sn(){ae.querySelector("svg")||(ae.innerHTML=Dr+'<span class="lbl"> Camera</span>'),ae.classList.toggle("on",!N),ae.setAttribute("aria-pressed",String(!N)),ae.title=N?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function Ln(e){N=!e,N&&aa(),he=null,le=-1,Q=Math.min(Q,Math.max(0,ke(c.get(p)).length-1)),Sn(),ft(),Ze(),Pe(),ee(),D||Ce(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&et()}function ra(){document.body.classList.remove("idle"),clearTimeout(xo),D&&(xo=setTimeout(()=>document.body.classList.add("idle"),2e3))}function St(e,t){Te.textContent=e,Te.classList.add("show"),clearTimeout(ko),ko=setTimeout(()=>Te.classList.remove("show"),t||2500)}function ln(e,{keepObs:t=!0,keepEdit:n=!0,slide:o=""}={}){let a=new URL(Vn(e),location.origin);return new URLSearchParams(location.search).forEach((r,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!n||a.searchParams.set(i,r)}),o&&(a.hash=o),a.href.replace(a.pathname,a.pathname.replace(/%40/g,"@"))}async function jr(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(v.kind==="source")return{link:ln(v.source,t),inside:!1};if(v.kind==="copy"&&lt(k)&&["url","gist","builtin"].includes(k.origin.kind))return{link:ln(k.origin,t),inside:!1};let o=v.kind==="share"?v.data:await Jn(X.value),a=new URLSearchParams(location.search);return["src","obs","edit"].forEach(r=>a.delete(r)),{link:location.origin+"/share"+(a.toString()?"?"+a:"")+Nt(o,e),inside:!0}}function Fr(){let e=J("slidetake:draft");if(!e||e===At)return null;let t=it(e,{kind:"file",name:"your earlier draft"},{exported:!0});Z("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function tt(){Z("slidetake:copy",JSON.stringify(k))}function Re(){if(M)return;let e;if(v.kind==="copy")e='<span class="mine">Your copy of '+R(ne(k.origin))+"</span>"+(st(k)?' <span class="edited">\xB7 edited</span>':"");else{let n=v.kind==="share"?"a shared deck":ne(v.source);e='<span class="mine">'+R(n.charAt(0).toUpperCase()+n.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,ue.classList.toggle("unsaved",v.kind==="copy"&&st(k)),document.getElementById("btn-reset").hidden=!(v.kind==="copy"&&!lt(k));let t=document.getElementById("continue");t.hidden=v.kind==="copy"||!k,k&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+ne(k.origin))}function ia(e){return!k||!st(k)?!0:confirm("Your copy of "+ne(k.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function sa(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function Hr(){let e=v.kind==="share"?{kind:"shared"}:v.source;return ia("a copy of "+ne(e))?(k=it(v.text,e),v={kind:"copy"},history.pushState(null,"",sa()+(p&&p!==f[0]?"#"+encodeURIComponent(p):"")),St("Editing your own copy of "+ne(e)+". The original is unchanged.",4e3),!0):(X.value=v.text,!1)}function Wr(){v={kind:"copy"},history.pushState(null,"",sa()),ue.classList.contains("collapsed")&&Bt(),X.value=k.text,Mt(!0),Re()}async function Ur(e){if(e.kind==="builtin")return mt[e.id]??mt.home;if(e.kind==="gist"){let n=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!n.ok)throw new Error(n.status===404?"no such gist":n.status+" "+n.statusText);let o=Object.values((await n.json()).files||{}),a=o.find(r=>r.filename===e.file)||o.find(r=>/\.(md|markdown)$/i.test(r.filename))||o[0];if(!a)throw new Error("the gist has no files");return V=a.raw_url,a.truncated?await(await fetch(a.raw_url)).text():a.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return V=new URL(e.url,location.href).href,await t.text()}function Lo(){return v={kind:"source",source:{kind:"builtin",id:"home"},text:mt.home},v.text}async function Nr(){if(M)return V=M.base||location.href,v={kind:"source",source:{kind:"url",url:V},text:Un(M.settings||{})+String(M.markdown||"")},v.text;if($.page==="edit"){if(k)return v={kind:"copy"},k.text;history.replaceState(null,"","/new"+location.search),$.page="pick"}if($.page==="pick")return Ot(document.getElementById("new-dialog")),v={kind:"source",source:{kind:"builtin",id:"template:blank"},text:mt["template:blank"]},v.text;if($.page==="share")try{let e=await Zn($.data);return v={kind:"share",data:$.data,text:e},e}catch{return St("This link's deck is damaged or cut short, so it could not be opened.",6e3),Lo()}try{let e=await Ur($.source);return v={kind:"source",source:$.source,text:e},e}catch(e){return Ye.textContent="Could not load the deck ("+e.message+")",St("Could not load "+ne($.source)+": "+e.message,6e3),Lo()}}var M,Ie,mt,X,T,G,Yt,lo,Ma,Ye,Jt,Ba,ue,Ge,co,pt,Zt,Oa,za,Ia,Pa,Ra,Aa,Ke,c,f,re,p,z,D,y,N,U,se,B,Da,L,qe,po,Q,he,le,Me,V,uo,Ja,Za,Gt,We,Kt,ge,ce,dr,Oe,K,be,oe,ho,Vt,Le,fo,br,go,bo,vo,vr,yr,ut,nn,bt,vt,yt,vn,yo,$e,H,fe,ye,No,u,yn,qo,wr,Er,de,Xo,Jo,_,F,O,q,wt,kt,Ue,an,rn,Ne,na,ae,ht,sn,Dr,xo,pe,wo,Te,ko,_r,cn,dn,Eo,Lt,$,So,v,k,la=W(()=>{"use strict";Bn();On();In();Rn();Dn();ot();qn();Gn();Wt();qt();to();so();M=window.SLIDETAKE||null;document.documentElement.classList.toggle("embed",!!M);Ie=window.matchMedia("(prefers-reduced-motion: reduce)").matches,mt={home:At,help:zn,"template:blank":Pn,"template:talk":An,"template:recording":_n},X=document.getElementById("editor"),T=document.getElementById("stage"),G=document.getElementById("world"),Yt=document.getElementById("connectors"),lo=document.getElementById("breadcrumbs"),Ma=document.getElementById("status-count"),Ye=document.getElementById("status-err"),Jt=document.getElementById("mm-svg"),Ba=document.getElementById("mm-label"),ue=document.getElementById("editor-pane"),Ge=440,co=720,pt=960,Zt=180,Oa=540,za=100,Ia=110,Pa=420,Ra=.35,Aa=1,Ke=parseFloat(J("slidetake:slideSize"))||.92,c=new Map,f=[],re=[],p=null,z="tree",D=!1,y={},N=!0,U=null,se=document.getElementById("brand"),B=document.getElementById("pip"),Da=document.getElementById("stage-wrap"),L={x:0,y:0,zoom:.6},qe=null;po=new URLSearchParams(location.search).get("mode");Q=0;he=null,le=-1,Me=null;V=null;uo=null;Ja="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",Za="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",Gt={};We=0,Kt=null;ge=document.getElementById("progress");ge.innerHTML="<b></b><i></i>";ce={start:0,timer:null};dr=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];Oe=null;K=null;be=null;oe=null;Jt.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!u.active&&I(t.dataset.id)});ho=null;X.addEventListener("input",()=>{v.kind!=="copy"&&!Hr()||(k.text=X.value,Re(),clearTimeout(ho),ho=setTimeout(()=>{tt(),Mt(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==z&&ve(e.dataset.mode)})});(function(){let e=new Map,t=0,n=!1,o=null,a=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};T.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||u.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,n=!1,e.size===2&&(o={d:a(),zoom:L.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,d=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(d),!n&&t>5&&(n=!0,mn(),T.classList.add("dragging")),n&&(e.size===2&&o?L.zoom=Wo(o.zoom*a()/o.d):(L.x-=l/L.zoom,L.y-=d/L.zoom),Be())});let r=i=>{e.delete(i.pointerId),e.size<2&&(o=null),e.size||T.classList.remove("dragging")};window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),T.addEventListener("click",i=>{n&&(i.stopPropagation(),i.preventDefault(),n=!1)},!0)})();T.addEventListener("wheel",e=>{e.preventDefault(),!u.active&&Uo(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>ze(-1);document.getElementById("nav-next").onclick=()=>ze(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=()=>{ia("a copy of "+t.name)&&(k=it(String(n.result),{kind:"file",name:t.name},{exported:!0}),tt(),V=null,p=null,Wr())},n.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([X.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(re[0]?Ee(c.get(re[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),v.kind==="copy"&&(k.exported=k.text,tt(),Re())};document.getElementById("btn-reset").onclick=()=>{v.kind!=="copy"||lt(k)||confirm("Discard your edits and go back to "+ne(k.origin)+" as it was?")&&(k.text=k.originText,tt(),X.value=k.text,p=null,Mt(!0),Re())};document.getElementById("btn-edit-toggle").onclick=Bt;Vt=document.querySelector("main"),Le=document.getElementById("editor-resizer"),fo=parseFloat(J("slidetake:editorWidth"));fo&&ue.style.setProperty("--editor-w",fo+"px");Le.addEventListener("pointerdown",e=>{e.preventDefault(),Le.setPointerCapture(e.pointerId),Vt.classList.add("resizing");let t=Vt.getBoundingClientRect().right,n=a=>{let r=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-a.clientX)));ue.style.setProperty("--editor-w",r+"px")},o=()=>{Vt.classList.remove("resizing"),Le.removeEventListener("pointermove",n),Z("slidetake:editorWidth",String(ue.getBoundingClientRect().width))};Le.addEventListener("pointermove",n),Le.addEventListener("pointerup",o,{once:!0})});Le.addEventListener("dblclick",()=>{ue.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=To;document.getElementById("btn-present").onclick=()=>we(!D);br="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",go=["ArrowRight","PageDown"," ","ArrowDown","Enter"],bo=["ArrowLeft","PageUp","ArrowUp","r","R"],vo=["b","B","."],vr=document.getElementById("rec-dialog"),yr=document.getElementById("review"),ut=document.getElementById("rec-countdown"),nn=document.getElementById("rec-paused"),bt=document.getElementById("obs-host"),vt=document.getElementById("obs-port"),yt=document.getElementById("obs-pass"),vn=document.getElementById("obs-remember"),yo=document.getElementById("obs-status"),$e=document.getElementById("rec-start"),H=null,fe=!1,ye=null,No=null,u={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null},yn=e=>new Promise(t=>setTimeout(t,e)),qo=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),yn(100)]);document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>{let t=document.getElementById(e.dataset.copy);t.select(),(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).catch(()=>document.execCommand("copy")),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy"},1500)}));wr=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);Er="This page is served over https, and browsers block it from reaching OBS on another computer (OBS only offers plain ws://). Run OBS on this computer and use localhost, or open Slidetake from a local copy: download dist/index.html from github.com/slidetake/slidetake and serve it with python3 -m http.server.";document.getElementById("obs-connect").onclick=Yo;vn.addEventListener("change",$o);document.getElementById("btn-record").onclick=on;$e.onclick=()=>Go(!0);document.getElementById("rec-rehearse").onclick=()=>Go(!1);de="";Xo=e=>ro(e,Vo),Jo=(e,t)=>io(e,t,{input:e.outputPath||de||"recording.mov",outputName:It()+"-final.mp4",sectionOf:Vo});_=null,F=null,O=document.getElementById("rv-video"),q=document.getElementById("rv-now");document.getElementById("rv-mode").onchange=()=>Pt();wt=document.getElementById("rv-fps");wt.onchange=()=>{_&&(_.fps=parseFloat(wt.value),En(_),Pt())};document.getElementById("rv-link").addEventListener("input",e=>{try{Z("slidetake:site",new URL(e.target.value.trim()).origin)}catch{}_&&Qo(_)});kt=null;O.addEventListener("timeupdate",()=>{if(!F)return;let e=F.ranges[F.i];if(O.currentTime*1e3<e.end)return;if(F.i++,F.i>=F.ranges.length){O.pause(),F=null,q.textContent="";return}let t=F.ranges[F.i];O.currentTime=t.start/1e3,q.textContent="\u25B6 "+t.title});document.getElementById("rv-play-final").onclick=()=>{_&&Et(Fe(_).map(e=>({start:e.start,end:e.end,title:e.title})))};Ue=null,an=0,rn=!1;O.addEventListener("error",async()=>{if(O.getAttribute("src")){if(Ue&&an<5){an++,q.textContent="Reloading "+de+" (OBS was still finishing it)\u2026",await new Promise(e=>setTimeout(e,1500));try{Qe(await Rt(Ue),Ue,!0);return}catch{}}q.textContent=Ue?"Chrome cannot play "+de+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(de||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video."}});Ne=document.getElementById("rv-file-input");Ne.addEventListener("change",()=>{Ne.files[0]&&Qe(Ne.files[0]),Ne.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return Ne.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});q.textContent="Opening "+e.name+"\u2026",Qe(await Rt(e),e)}catch(e){(!e||e.name!=="AbortError")&&(q.textContent="Could not open that file.")}};na=document.getElementById("rv-folder");na.hidden=!window.showDirectoryPicker;na.onclick=async()=>{let e=_&&Se(_.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(Pr("obs-folder",t),!e){q.textContent="Folder remembered. This session has no file name from OBS; open the file instead.";return}let n=await t.getFileHandle(e);Qe(await Rt(n),n)}catch(t){if(t&&t.name==="AbortError")return;q.textContent=(e?e+" is not in that folder":"Could not read that folder")+". Use \u201COpen the recording file\u2026\u201D instead."}};document.getElementById("rv-download").onclick=()=>{if(!_)return;let e=_,t=Xo(e),n="# "+document.getElementById("rv-yt-title").value+`

Recorded `+new Date(e.date).toLocaleString()+(e.outputPath?" \xB7 "+e.outputPath:"")+" \xB7 final length "+Y(t.length)+`

## Render

\`\`\`sh
`+document.getElementById("rv-ffmpeg").value+`
\`\`\`

## YouTube title

`+document.getElementById("rv-yt-title").value+`

## YouTube description

`+document.getElementById("rv-yt-desc").value+`

## Tags

`+document.getElementById("rv-yt-tags").value+`

## Picked takes

`+Fe(e).map(a=>"- "+Y(a.start)+"\u2013"+Y(a.end)+"  "+a.title).join(`
`)+`
`,o=document.createElement("a");o.href=URL.createObjectURL(new Blob([n],{type:"text/markdown"})),o.download=It()+"-publish.md",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),1e3)};xr()&&new URLSearchParams(location.search).get("obs")&&Yo();ae=document.getElementById("btn-camera"),ht=document.getElementById("pip-msg"),sn=null;Dr='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';ae.onclick=()=>Ln(N);Sn();xo=null;window.addEventListener("pointermove",ra);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(u.active?zt("Stopped: the browser left fullscreen"):D&&we(!1))});pe=document.getElementById("help");document.getElementById("btn-help").onclick=()=>window.open(M?"https://slidetake.com/help":"/help","_blank","noopener");document.getElementById("btn-keys").onclick=()=>pe.classList.add("open");document.getElementById("help-close").onclick=()=>pe.classList.remove("open");pe.addEventListener("click",e=>{e.target===pe&&pe.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),u.active||on();return}if(u.active){Lr(e);return}if(document.querySelector(".modal.open")){e.key==="Escape"&&xn();return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(pe.classList.contains("open")){e.key==="Escape"&&pe.classList.remove("open");return}let n=e.key;n==="ArrowRight"||n===" "||n==="PageDown"?(e.preventDefault(),ze(1)):n==="ArrowLeft"||n==="PageUp"?(e.preventDefault(),ze(-1)):n==="ArrowDown"?(e.preventDefault(),fr()):n==="ArrowUp"?(e.preventDefault(),mr()):n==="Home"?f.length&&I(f[0]):n==="End"?f.length&&I(f[f.length-1]):n==="o"||n==="O"?hr():n==="e"||n==="E"?Bt():n==="f"||n==="F"||n==="p"||n==="P"?we(!D):n==="r"||n==="R"?on():n==="1"?ve("tree"):n==="2"?ve("radial"):n==="3"?ve("path"):n==="4"?ve("focus"):n==="c"||n==="C"?Ln(N):n==="v"||n==="V"?Ua():n==="l"||n==="L"?To():n==="+"||n==="="?mo(1):n==="-"||n==="_"?mo(-1):n==="?"?pe.classList.add("open"):n==="Escape"&&!Fo()&&D&&we(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=rt(location.hash);if(e&&!(v&&v.kind==="share"&&e===v.data)){location.reload();return}t&&t!==p&&c.has(t)&&I(t)});wo="";new ResizeObserver(()=>{let e=T.clientWidth+"x"+T.clientHeight;e!==wo&&(wo=e,Be(),ee(!0))}).observe(T);Te=document.createElement("div");Te.id="toast";Te.setAttribute("role","status");document.body.appendChild(Te);ko=null;_r=document.getElementById("open-dialog"),cn=document.getElementById("open-url"),dn=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{dn.hidden=!0,Ot(_r),cn.focus(),cn.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=Kn(cn.value);if(!t){dn.textContent="That doesn't look like a link.",dn.hidden=!1;return}location.href=ln(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await jr(p&&p!==f[0]?p:""),n=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),St(n,5e3)}catch{prompt("Copy this link:",e)}v.kind==="copy"&&(k.exported=k.text,tt(),Re())};Eo=J("slidetake:layout");z=["tree","radial","path","focus"].includes(Eo)?Eo:"tree";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===z));Lt=new URLSearchParams(location.search);["tree","radial","path","focus"].includes(Lt.get("layout"))&&(z=Lt.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===z)));if(M){let e=document.querySelector("header .mark");M.back&&M.back.url&&(e.href=M.back.url,e.title="Back to "+(M.back.label||"the site"),e.innerHTML='<span class="back">\u2190</span><span class="word">'+R(M.back.label||"Back")+"</span>");let t=document.querySelector("header .tagline");t&&(t.innerHTML='made with <a href="https://slidetake.com" target="_blank" rel="noopener">Slidetake</a>')}$=Qn(location.pathname,location.search,location.hash),So=$.page==="pick"?"":$.slide,v=null,k=eo(J("slidetake:copy"))||Fr();window.addEventListener("popstate",()=>location.reload());(Lt.get("edit")==="1"||$.page==="edit"&&k&&Lt.get("edit")!=="0")&&Bt();Nr().then(e=>(X.value=e,Re(),Bo(X.value),Io(),document.fonts?document.fonts.ready:null)).then(()=>{c.forEach(Ct),Xe(),I(c.has(So)?So:f[0],!0)})});var Cn=`  /* One palette, Slidetake gold, at two levels: bright gold on zinc in dark mode, deep gold on white in
     light mode (the same values as sakthipriyan.com's Building Wealth section, so its decks match). */
  :root{
    --bg:#09090b;
    --grid-dot:#1d1d21;
    --panel:#111113;
    --panel-line:#27272a;
    --node-bg:#18181b;
    --node-border:#323238;
    --accent:#e0b024;
    --accent-teal:#f5c542;              /* headings below h2 */
    --text:#e4e4e7;
    --text-muted:#a1a1aa;
    --danger:#e0645c;
    --code-bg:#0f0f12;
    --overlay:rgba(17,17,19,.9);       /* breadcrumbs, nav bar, minimap */
    --on-accent:#1a1408;               /* text on an accent-filled button */
    --card-shadow:0 6px 24px rgba(0,0,0,.35);
    --brand-shadow:0 1px 6px rgba(0,0,0,.6);
    --mono: 'IBM Plex Mono', ui-monospace, monospace;
    --display: 'Space Grotesk', sans-serif;
    --body: 'IBM Plex Sans', sans-serif;
  }
  /* Tokens derived from others are declared on body, not :root: a custom property resolves var() where
     it is declared, so on :root these would freeze the default palette's colours. */
  body{
    --accent-line:#966f04;             /* borders and connector lines on the active path */
    --accent-ring:var(--accent);        /* the current slide's border, glow and the progress bar */
    --edge:var(--node-border);          /* connector lines off the active path */
  }
  /* Light mode (L, mode: light, ?mode=light): #7a5c12 carries text (6.2:1 on white); the brighter gold
     only rings and lines, which never need to be read. */
  body[data-mode="light"]{
    --bg:#fafaf9; --grid-dot:#e7e5e4; --panel:#ffffff; --panel-line:#e4e4e7;
    --node-bg:#ffffff; --node-border:#e4e4e7; --edge:#d4d4d8;
    --accent:#7a5c12; --accent-teal:#8a6610; --accent-line:#d4af37; --accent-ring:#d4af37;
    --text:#27272a; --text-muted:#71717a; --danger:#c2410c;
    --code-bg:#f4f4f5; --overlay:rgba(255,255,255,.92); --on-accent:#ffffff;
    --card-shadow:0 4px 18px rgba(24,24,27,.08); --brand-shadow:0 1px 4px rgba(255,255,255,.9);
  }
  body[data-mode="light"] .node .body pre code{color:var(--text);}
  body[data-mode="light"] #help, body[data-mode="light"] .modal{background:rgba(24,24,27,.45);}
  *{box-sizing:border-box;}
  html,body{height:100%;margin:0;}
  body{
    background:var(--bg);
    color:var(--text);
    font-family:var(--body);
    overflow:hidden;
    display:flex;
    flex-direction:column;
  }
  ::selection{background:var(--accent);color:var(--on-accent);}
  :focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
  button{font-family:var(--mono);}

  /* ---------- header ---------- */
  header{
    min-height:56px;flex:none;
    display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;
    padding:8px 16px;
    background:var(--panel);
    border-bottom:1px solid var(--panel-line);
    z-index:20;
  }
  .brand{display:flex;align-items:baseline;gap:10px;}
  .brand .mark{font-family:var(--display);font-weight:700;font-size:17px;letter-spacing:.02em;color:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:7px;align-self:center;}
  .brand .mark .logo{width:20px;height:20px;fill:var(--accent);flex:none;}
  .brand .mark .word > span{color:var(--accent);}
  .brand .tagline{font-family:var(--mono);font-size:13px;color:var(--text-muted);}
  .hdr-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
  .btn{
    background:transparent;color:var(--text);
    border:1px solid var(--node-border);border-radius:6px;
    padding:7px 12px;font-size:12px;letter-spacing:.02em;cursor:pointer;
    display:flex;align-items:center;gap:6px;
    transition:border-color .15s, color .15s, background .15s;
  }
  a.btn{text-decoration:none;}
  .btn:hover{border-color:var(--accent);color:var(--accent);}
  .btn.primary{border-color:var(--accent);color:var(--accent);}
  .btn.primary:hover{background:var(--accent);color:var(--on-accent);}
  .btn.active{background:var(--node-border);}
  .seg{display:flex;border:1px solid var(--node-border);border-radius:6px;overflow:hidden;}
  .seg-btn{
    background:transparent;border:none;color:var(--text-muted);font-family:var(--mono);
    font-size:12px;padding:7px 12px;cursor:pointer;transition:background .15s,color .15s;
  }
  .seg-btn:hover{color:var(--accent);}
  .seg-btn.active{background:var(--node-border);color:var(--accent);}

  /* ---------- main layout ---------- */
  main{flex:1;display:flex;min-height:0;}
  /* the editor sits on the right; its width is dragged with #editor-resizer and remembered */
  #editor-pane{
    width:var(--editor-w, 38%);min-width:280px;max-width:75vw;
    display:flex;flex-direction:column;
    background:var(--panel);border-left:1px solid var(--panel-line);
    transition:width .25s ease, min-width .25s ease, opacity .2s ease;
    overflow:hidden;
  }
  #editor-pane.collapsed{width:0;min-width:0;opacity:0;border-left:none;}
  main.resizing #editor-pane{transition:none;}
  main.resizing{cursor:col-resize;user-select:none;}
  #editor-resizer{flex:none;width:6px;margin-right:-3px;margin-left:-3px;z-index:5;cursor:col-resize;position:relative;}
  #editor-resizer:hover, main.resizing #editor-resizer{background:var(--accent-line, var(--accent));opacity:.6;}
  #editor-resizer:has(+ #editor-pane.collapsed){display:none;}
  .pane-bar{flex:none;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px 8px 14px;border-bottom:1px solid var(--panel-line);}
  .pane-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;}
  #doc-state{text-transform:none;letter-spacing:.02em;font-size:11px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  #doc-state .ro{color:var(--text-muted);}
  #doc-state .mine{color:var(--text);}
  #doc-state .edited{color:var(--accent);}
  #continue{color:var(--accent);border-color:var(--accent-line);}
  #continue[hidden]{display:none;}
  .modal ul.templates{list-style:none;padding:0;display:grid;gap:8px;margin:12px 0;}
  .modal ul.templates a{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border:1px solid var(--panel-line);border-radius:8px;text-decoration:none;color:var(--text);}
  .modal ul.templates a:hover{border-color:var(--accent);}
  .modal ul.templates span{font-size:12px;color:var(--text-muted);}
  #editor-pane.unsaved .pane-bar{box-shadow:inset 0 -2px 0 var(--accent);}
  #editor-pane.unsaved #btn-share, #editor-pane.unsaved #btn-save{border-color:var(--accent);color:var(--accent);}
  .btn.small{padding:3px 9px;font-size:11px;}
  .btn.icon{padding:4px 9px;min-width:30px;display:inline-flex;align-items:center;justify-content:center;}
  .btn.icon svg{width:15px;height:15px;display:block;}
  .pane-label{
    font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--text-muted);flex:none;
  }
  #editor{
    flex:1;resize:none;border:none;outline:none;padding-top:10px !important;
    background:var(--panel);color:var(--text);
    font-family:var(--mono);font-size:12.5px;line-height:1.65;
    padding:0 14px 14px;tab-size:2;
  }
  #status-line{
    flex:none;padding:6px 14px;font-family:var(--mono);font-size:11px;
    color:var(--text-muted);border-top:1px solid var(--panel-line);
    display:flex;justify-content:space-between;gap:10px;
  }
  #status-line .err{color:var(--danger);}
  #btn-reset{background:none;border:none;color:var(--text-muted);font-size:11px;cursor:pointer;padding:0;text-decoration:underline;}
  #btn-reset:hover{color:var(--accent);}

  body.presenting header, body.presenting #editor-pane, body.presenting #editor-resizer{display:none;}
  #breadcrumbs, #navbar, #minimap{transition:opacity .4s;}
  body.presenting.idle #breadcrumbs, body.presenting.idle #navbar, body.presenting.idle #minimap{opacity:0;pointer-events:none;}
  body.presenting.idle, body.presenting.idle *{cursor:none !important;}

  /* ---------- stage ---------- */
  #stage-wrap{flex:1;position:relative;overflow:hidden;}
  #stage{
    position:absolute;inset:0;
    background-color:var(--bg);
    background-image:radial-gradient(var(--grid-dot) 1.2px, transparent 1.2px);
    background-size:28px 28px;
    overflow:hidden;cursor:grab;touch-action:none;
  }
  #stage.dragging{cursor:grabbing;user-select:none;}
  #world{position:absolute;left:0;top:0;transform-origin:0 0;}
  #connectors{position:absolute;left:0;top:0;overflow:visible;pointer-events:none;}
  #connectors path{fill:none;stroke:var(--edge);stroke-width:1.5;transition:stroke .2s;}
  #connectors path.active{stroke:var(--accent-line);stroke-width:2;}

  div.node{ /* div: Graphviz also puts class="node" on its SVG shapes */
    position:absolute;left:0;top:0;width:440px;
    /* centre of the card sits at (--cx, --cy); --push is Focus's settle-in scale */
    transform:translate(calc(var(--cx,0) * 1px), calc(var(--cy,0) * 1px)) scale(var(--push,1)) translate(-50%,-50%);
    transform-origin:0 0; /* the last translate puts the card centre at 0,0, so the scale pivots on it */
    background:var(--node-bg);
    border:1px solid var(--node-border);border-radius:8px;
    padding:16px 18px 18px;cursor:pointer;
    box-shadow:var(--card-shadow);
    transition:border-color .18s, box-shadow .18s, opacity .3s;
  }
  /* Focus: every card sits at the same spot and only the current one shows; the next fades in with
     a slight push-in instead of the camera travelling */
  /* other cards vanish at once (no stacked fade on load or layout change); only the slide just left
     fades out, beneath the incoming one */
  #world.focus div.node{transition:none;}
  #world.focus div.node:not(.current){opacity:0;pointer-events:none;}
  #world.focus div.node.current{z-index:2;transition:opacity .55s ease, transform .8s cubic-bezier(.2,.7,.2,1), border-color .18s;}
  #world.focus div.node.leaving{z-index:1;transition:opacity .45s ease;}
  #world.focus div.node.entering{--push:.96;transition:none;}
  #world.focus #connectors{display:none;}
  /* progress: one continuous bar that moves with every press, reveals and camera steps included */
  #progress{position:absolute;left:0;right:0;bottom:0;height:5px;z-index:9;display:none;
    background:color-mix(in srgb, var(--text-muted) 22%, transparent);}
  #progress.show{display:block;}
  #progress i{position:absolute;inset:0 auto 0 0;width:0;background:var(--accent-ring);transition:width .5s ease;}
  /* talk timer on the same bar, in the same colour: the clock grows a half-strength layer behind the
     solid progress, so any half-strength stretch showing past the solid is how far behind the talk is */
  #progress b{position:absolute;inset:0 auto 0 0;width:0;background:color-mix(in srgb, var(--accent-ring) 50%, transparent);transition:width 1s linear;display:none;}
  #progress.timed b{display:block;}
  #progress.over b{animation:over 1.4s ease-in-out infinite;}
  @keyframes over{50%{opacity:.45;}}
  #world.morph div.node{transition:transform .65s cubic-bezier(.65,0,.35,1), border-color .18s, opacity .3s;}
  .node .body{overflow-wrap:anywhere;word-break:break-word;}
  /* only the current slide is ringed in the accent; hover and the route back to the root are faint tints */
  /* hover never touches the current slide, or its border would sit inside the ring as a second line */
  .node:not(.current):hover{border-color:color-mix(in srgb, var(--accent-line) 35%, var(--node-border));}
  body.presenting .node:not(.current):hover{border-color:var(--node-border);}
  /* cards take focus on click; the current-slide ring already marks them, so no second outline
     (Chrome re-shows :focus-visible when the window regains focus) */
  .node:focus-visible{outline:none;}
  .node:not(.current):focus-visible{border-color:var(--accent-line);}
  .node.current{border-color:var(--accent-ring);box-shadow:0 0 0 1px var(--accent-ring), 0 10px 34px color-mix(in srgb, var(--accent-ring) 22%, transparent);}
  .node.active-path:not(.current){border-color:color-mix(in srgb, var(--accent-line) 30%, var(--node-border));}
  .node .crumb{
    font-family:var(--mono);font-size:10px;color:var(--text-muted);overflow-wrap:anywhere;
    letter-spacing:.06em;margin-bottom:8px;text-transform:uppercase;
  }
  .node .body h1,.node .body h2,.node .body h3,.node .body h4,.node .body h5,.node .body h6{
    font-family:var(--display);color:var(--text);margin:0 0 8px;line-height:1.25;
  }
  .node .body h1{font-size:19px;}
  .node .body h2{font-size:16px;}
  .node .body h3{font-size:14px;color:var(--accent-teal);}
  .node .body h4,.node .body h5,.node .body h6{font-size:13px;color:var(--accent-teal);}
  .node .body p{margin:0 0 10px;font-size:13px;line-height:1.6;}
  .node .body > :last-child{margin-bottom:0;}
  .node .body ul,.node .body ol{margin:0 0 10px;padding-left:18px;font-size:13px;line-height:1.6;}
  .node .body li{margin-bottom:3px;}
  .node .body blockquote{margin:0 0 10px;padding-left:10px;border-left:2px solid var(--accent);color:var(--text-muted);font-size:13px;}
  .node .body img{max-width:100%;border-radius:4px;}
  .node .body table{border-collapse:collapse;font-size:12px;margin:0 0 10px;}
  .node .body th,.node .body td{border:1px solid var(--panel-line);padding:3px 7px;}
  .node .body code{
    font-family:var(--mono);background:var(--code-bg);border:1px solid var(--panel-line);
    padding:1px 5px;border-radius:4px;font-size:12px;color:var(--accent-teal);
  }
  .node .body pre{
    background:var(--code-bg);border:1px solid var(--panel-line);border-radius:6px;
    padding:10px 12px;overflow-x:auto;margin:0 0 10px;
  }
  .node .body pre code{border:none;background:none;padding:0;color:var(--text);}
  .node .body strong{color:var(--accent);}
  .node .body a{color:var(--accent-teal);}
  .node .body a.xlink::after{content:" \u2197";font-size:10px;}
  .node .err-badge{
    position:absolute;top:-8px;right:-8px;background:var(--danger);color:#1a0a08;
    font-family:var(--mono);font-size:10px;padding:2px 7px;border-radius:20px;font-weight:600;
  }

  /* ---------- recording ---------- */
  .modal{position:fixed;inset:0;background:rgba(4,7,13,.72);z-index:50;display:none;align-items:center;justify-content:center;padding:16px;}
  .modal.open{display:flex;}
  .modal .panel{
    position:relative;width:min(620px,100%);max-height:88vh;overflow-y:auto;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:12px;padding:24px 26px;
  }
  .modal .panel.wide{width:min(760px,100%);}
  .modal h2{font-family:var(--display);font-size:18px;margin:0 0 6px;color:var(--accent);}
  .modal h3{font-family:var(--display);font-size:13px;margin:18px 0 8px;color:var(--text);display:flex;align-items:center;gap:10px;}
  .modal p, .modal li{font-size:13px;line-height:1.6;color:var(--text-muted);margin:0 0 6px;}
  .modal ul{padding-left:18px;margin:0;}
  .modal .close{position:absolute;top:14px;right:16px;background:none;border:none;color:var(--text-muted);font-size:18px;cursor:pointer;}
  .modal .fields{display:grid;grid-template-columns:2fr 1fr 2fr;gap:10px;}
  #open-form{display:flex;gap:8px;margin:12px 0 6px;}
  #help table.keys{border-collapse:collapse;margin:6px 0 12px;font-size:13px;}
  #help table.keys td{padding:5px 14px 5px 0;color:var(--text-muted);vertical-align:top;}
  #help table.keys td:first-child{white-space:nowrap;}
  #help a{color:var(--accent);}
  #open-url{flex:1;min-width:0;}
  .modal p.warn{color:var(--danger);}
  #toast{position:fixed;left:50%;top:64px;transform:translateX(-50%) translateY(-8px);opacity:0;pointer-events:none;z-index:60;
    background:var(--panel, #18181b);color:var(--text);border:1px solid var(--accent-line, var(--accent));border-radius:8px;
    padding:8px 14px;font-family:var(--mono);font-size:12px;transition:opacity .2s, transform .2s;max-width:min(560px,calc(100vw - 32px));}
  #toast.show{opacity:1;transform:translateX(-50%);}
  .modal label{display:flex;flex-direction:column;gap:4px;font-family:var(--mono);font-size:11px;color:var(--text-muted);}
  .modal label.check{flex-direction:row;align-items:center;gap:8px;margin-top:10px;}
  .modal input[type=text], .modal input[type=password], .modal textarea{
    background:var(--code-bg);border:1px solid var(--node-border);border-radius:6px;color:var(--text);
    font-family:var(--mono);font-size:12.5px;padding:8px 10px;outline:none;
  }
  .modal input:focus, .modal textarea:focus{border-color:var(--accent);}
  .modal textarea{width:100%;resize:vertical;line-height:1.6;}
  .modal .row{display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap;}
  .modal .row.end{justify-content:flex-end;margin-top:20px;}
  .modal .btn[disabled]{opacity:.4;cursor:not-allowed;}
  .modal .btn.small{padding:3px 9px;font-size:11px;}
  #obs-status{font-family:var(--mono);font-size:12px;color:var(--text-muted);}
  #obs-status.ok, #rec-screen .ok{color:#10b981;}
  #rec-screen a{color:inherit;text-decoration:underline;}
  #obs-status.err{color:var(--danger);}
  .modal .warn{color:var(--accent);}
  @media (max-width:560px){ .modal .fields{grid-template-columns:1fr;} }
  #navbar #btn-record{color:#f87171;}
  #navbar #btn-record:hover{color:#fff;background:#b91c1c;}
  #navbar #btn-present{color:var(--accent);}
  /* camera: a grey camera when off; green, with a live dot, when on */
  #btn-camera{display:inline-flex;align-items:center;gap:6px;}
  #btn-camera svg{display:block;}
  #navbar #btn-camera.on{color:#22c55e;}
  /* while a take runs nothing but the slides and the camera is on screen */
  body.recording #breadcrumbs, body.recording #navbar, body.recording #minimap, body.recording #pip-msg{display:none !important;}
  body.recording, body.recording *{cursor:none !important;}
  #rec-countdown{
    position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;flex-direction:column;gap:14px;
    background:rgba(4,7,13,.9);font-family:var(--display);color:var(--accent);
  }
  #rec-countdown.show{display:flex;}
  #rec-countdown .num{font-size:180px;font-weight:700;line-height:1;}
  #rec-countdown .hint{font-family:var(--mono);font-size:13px;color:var(--text-muted);}
  #rec-paused{
    position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;
    background:rgba(4,7,13,.94);font-family:var(--mono);font-size:15px;color:var(--text-muted);letter-spacing:.06em;
  }
  #rec-paused.show{display:flex;}
  .modal .panel.xwide{width:min(1220px,100%);max-height:94vh;}
  .rv-grid{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,2fr);gap:18px;margin-top:12px;}
  @media (max-width:900px){ .rv-grid{grid-template-columns:1fr;} }
  .rv-video{position:relative;background:#000;border-radius:8px;overflow:hidden;aspect-ratio:16/9;}
  .rv-video video{width:100%;height:100%;display:block;}
  #rv-novideo{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;text-align:center;}
  #rv-novideo[hidden]{display:none;}
  #rv-now{font-family:var(--mono);font-size:12px;color:var(--text-muted);margin-top:8px;min-height:1.4em;}
  .rv-list{max-height:52vh;overflow-y:auto;border:1px solid var(--panel-line);border-radius:8px;}
  .rv-row{padding:9px 12px;border-bottom:1px solid var(--panel-line);}
  .rv-row:last-child{border-bottom:none;}
  .rv-row .t{font-size:12.5px;color:var(--text);margin-bottom:6px;display:flex;justify-content:space-between;gap:8px;}
  .rv-row .t small{font-family:var(--mono);color:var(--text-muted);font-size:10.5px;white-space:nowrap;}
  .rv-row.sec .t{color:var(--accent-teal);}
  .rv-chips{display:flex;flex-wrap:wrap;gap:6px;}
  .rv-chip{background:transparent;border:1px solid var(--node-border);color:var(--text-muted);border-radius:20px;
    font-family:var(--mono);font-size:11px;padding:3px 10px;cursor:pointer;}
  .rv-chip:hover{border-color:var(--accent-teal);color:var(--text);}
  .rv-chip.on{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .rv-chip.skip.on{border-color:var(--danger);color:var(--danger);background:rgba(224,100,92,.1);}
  .rv-out{margin-top:6px;}
  .rv-out .two{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  @media (max-width:900px){ .rv-out .two{grid-template-columns:1fr;} }
  .modal select{background:var(--code-bg);border:1px solid var(--node-border);border-radius:6px;color:var(--text);font-family:var(--mono);font-size:11.5px;padding:4px 8px;}
  #rec-sessions{margin-top:14px;}

  /* ---------- reveal.js compatibility: fragments, stacks, diagrams, charts ---------- */
  .node .fragment{opacity:0;visibility:hidden;transition:opacity .45s ease, transform .45s ease, visibility 0s .45s;}
  .node .fragment.visible{opacity:1;visibility:inherit;transition:opacity .45s ease, transform .45s ease;}
  .node .fragment.fade-up{transform:translateY(24px);}
  .node .fragment.fade-down{transform:translateY(-24px);}
  .node .fragment.fade-left{transform:translateX(40px);}
  .node .fragment.fade-right{transform:translateX(-40px);}
  .node .fragment.zoom-in{transform:scale(.1);}
  .node .fragment.visible:is(.fade-up,.fade-down,.fade-left,.fade-right,.zoom-in){transform:none;}
  /* these start visible and change when their step comes */
  .node .fragment:is(.grow,.shrink,.fade-out,.semi-fade-out,.strike,.highlight-red,.highlight-green,.highlight-blue){opacity:1;visibility:inherit;}
  /* grow: sized to its content and growing rightwards, so the card can make room for its last step */
  .node .fragment.grow{width:fit-content;max-width:100%;transform-origin:left center;}
  .node .fragment.grow.visible{transform:scale(1.3);}
  .node .fragment.shrink.visible{transform:scale(.7);}
  .node .fragment.fade-out.visible{opacity:0;visibility:hidden;}
  .node .fragment.semi-fade-out.visible{opacity:.5;}
  .node .fragment.strike.visible{text-decoration:line-through;}
  .node .fragment.highlight-red.visible{color:var(--danger);}
  .node .fragment.highlight-green.visible{color:#10b981;}
  .node .fragment.highlight-blue.visible{color:#60a5fa;}
  /* shown only while it is the newest step */
  .node .fragment.visible:is(.fade-in-then-out,.current-visible):not(.current-fragment){opacity:0;visibility:hidden;}
  .node .fragment.fade-in-then-semi-out.visible:not(.current-fragment){opacity:.5;}
  .node .r-stack{display:grid;}
  .node .r-stack > *{grid-area:1/1;margin:auto;}
  .node .r-hstack{display:flex;flex-direction:row;align-items:center;justify-content:center;}
  .node .r-vstack{display:flex;flex-direction:column;align-items:center;justify-content:center;}
  .node .body img{max-width:100%;height:auto;object-fit:contain;}
  /* measure cards at their resting size, without grow/zoom transforms */
  div.node.measuring .fragment{transform:none !important;transition:none !important;}
  /* a card re-measured mid-entrance (a theme switch replays it) must not count a gsap "from" state such
     as scale(3) as its width, or it shrinks the whole card to fit */
  div.node.measuring [data-gsap]{transform:none !important;}
  /* arriving at or leaving a slide snaps its fragments; only steps within the slide animate */
  div.node.snap .fragment{transition:none !important;}
  .node .body iframe{max-width:100%;border:0;border-radius:6px;background:#fff;}
  .node .diagram{background:#f8fafc;border:1px solid var(--panel-line);border-radius:8px;padding:12px;margin:0 0 10px;overflow:auto;}
  .node .diagram svg{display:block;width:100%;height:auto;max-height:640px;}
  .node .diagram.err{background:none;color:var(--danger);font-family:var(--mono);font-size:12px;padding:0;}
  .node .echarts-container{width:100%;height:360px;margin:0 0 10px;}

  /* ---------- overlays ---------- */
  #breadcrumbs{
    position:absolute;top:14px;left:14px;z-index:10;
    display:flex;align-items:center;gap:6px;flex-wrap:wrap;max-width:60%;
    font-family:var(--mono);font-size:11.5px;
  }
  #breadcrumbs .crumb-btn{
    background:var(--overlay);border:1px solid var(--panel-line);color:var(--text-muted);
    padding:4px 9px;border-radius:5px;cursor:pointer;backdrop-filter:blur(4px);
  }
  #breadcrumbs .crumb-btn:hover,#breadcrumbs .crumb-btn.here{color:var(--accent);border-color:var(--accent);}
  #breadcrumbs .sep{color:var(--text-muted);}

  #navbar{
    position:absolute;bottom:16px;left:50%;transform:translateX(-50%);z-index:10;
    display:flex;align-items:center;gap:4px;
    background:var(--overlay);border:1px solid var(--panel-line);border-radius:9px;
    padding:6px;backdrop-filter:blur(6px);
  }
  #navbar button{
    background:transparent;border:none;color:var(--text-muted);white-space:nowrap;
    font-size:12px;padding:7px 11px;border-radius:6px;cursor:pointer;
  }
  #navbar button:hover{color:var(--accent);background:var(--node-bg);}
  #navbar .divider{width:1px;height:18px;background:var(--panel-line);margin:0 2px;}
  /* the arrows are for touch screens; keyboards and clickers use the keys */
  #navbar .touch-only{display:none;}
  @media (pointer:coarse){ #navbar .touch-only{display:inline-block;} }

  #minimap{
    position:absolute;bottom:16px;right:14px;z-index:10;width:180px;height:130px;
    background:var(--overlay);border:1px solid var(--panel-line);border-radius:8px;
    backdrop-filter:blur(6px);overflow:hidden;
  }
  #minimap .mm-label{
    position:absolute;top:5px;left:8px;font-family:var(--mono);font-size:9px;
    color:var(--text-muted);letter-spacing:.1em;text-transform:uppercase;pointer-events:none;
  }
  #mm-svg circle{cursor:pointer;}
  #stage-wrap[data-pip="bottom-right"] #minimap{right:auto;left:14px;}

  /* channel mark: fixed in the corner, never moves with the camera */
  #brand{
    position:absolute;top:16px;right:18px;z-index:12;pointer-events:none;
    display:flex;align-items:center;gap:10px;opacity:.9;
    font-family:var(--display);font-weight:600;font-size:18px;letter-spacing:.02em;color:var(--text);
    text-shadow:var(--brand-shadow);
  }
  #brand[hidden]{display:none;}
  /* embedded in a site page: one read-only deck, so no editor, links or copies */
  html.embed #btn-edit-toggle, html.embed #continue, html.embed #editor-pane, html.embed #editor-resizer{display:none !important;}
  html.embed .brand .mark .back{color:var(--accent);margin-right:2px;}
  html.embed .brand .tagline a{color:inherit;}
  /* the logo written into a heading: # ![](/favicon.svg) Slidetake */
  .node .body :is(h1,h2) img[src$="favicon.svg"]{height:1em;width:auto;vertical-align:-.12em;margin-right:.25em;display:inline;}
  #brand .st-mark{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:700;font-size:20px;color:var(--text);}
  #brand .st-mark .logo{width:24px;height:24px;fill:var(--accent);}
  #brand .st-mark .word > span{color:var(--accent);}
  #brand img{height:40px;width:auto;display:block;}
  /* optional gold chip, as on the decks' title slides (brand_style: chip); plain text is the default */
  #brand .chip{display:inline-block;padding:5px 22px;border-radius:30px;color:#fff;font-family:var(--body);
    font-size:15px;font-weight:600;letter-spacing:.01em;text-shadow:none;
    background:linear-gradient(90deg, #fbbf24, #f59e0b);box-shadow:0 2px 10px rgba(0,0,0,.25);}

  /* PIP camera: slides are laid out to keep clear of this box */
  #pip{
    position:absolute;z-index:11;pointer-events:none;aspect-ratio:16/9;
    border:2px dashed color-mix(in srgb, var(--accent-teal) 55%, transparent);border-radius:10px;
    display:flex;align-items:center;justify-content:center;
    font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-teal);
    background:color-mix(in srgb, var(--accent-teal) 4%, transparent);
  }
  #pip[hidden]{display:none;}
  #pip.circle{aspect-ratio:1;border-radius:50%;}
  #pip.top-left{top:16px;left:16px;}
  #pip.top-right{top:16px;right:16px;}
  #pip.bottom-left{bottom:16px;left:16px;}
  #pip.bottom-right{bottom:16px;right:16px;}
  /* full: the camera takes the whole stage, under the brand and the controls */
  /* it also swallows clicks, so a click can't land on the hidden cards behind it */
  #pip.full{inset:0;width:100% !important;height:100%;aspect-ratio:auto;border-radius:0;z-index:9;pointer-events:auto;}
  /* while presenting the box is empty so the camera overlay sits on plain background */
  /* while presenting, the empty box stays as a faint guide for lining up a camera overlay */
  body.presenting #pip{border-color:color-mix(in srgb, var(--accent-teal) 30%, transparent);background:none;}
  body.presenting #pip span{opacity:.5;}
  /* live webcam inside the box */
  #pip.live{border:none;background:#000;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.55), 0 0 0 1px var(--panel-line);}
  #pip.live span{display:none;}
  #pip video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  #pip.mirror video{transform:scaleX(-1);}
  #pip-msg{
    position:absolute;left:50%;top:70px;transform:translateX(-50%);z-index:30;
    background:var(--panel);border:1px solid var(--danger);color:var(--text);
    font-family:var(--mono);font-size:13px;line-height:1.5;padding:10px 16px;border-radius:6px;display:none;
    width:max-content;max-width:min(620px, 90%);text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.5);
  }
  #pip-msg.show{display:block;}

  /* ---------- help popover ---------- */
  #help{position:fixed;inset:0;background:rgba(4,7,13,.7);z-index:50;display:none;align-items:center;justify-content:center;}
  #help.open{display:flex;}
  #help .panel{
    position:relative;width:min(580px,92vw);max-height:84vh;overflow-y:auto;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:12px;padding:26px 28px;
  }
  #help h2{font-family:var(--display);font-size:18px;margin:0 0 14px;color:var(--accent);}
  #help h3{font-family:var(--display);font-size:13px;margin:18px 0 6px;color:var(--text);}
  #help p, #help li{font-size:13px;line-height:1.65;color:var(--text-muted);margin:0 0 8px;}
  #help pre{
    background:var(--code-bg);border:1px solid var(--panel-line);border-radius:6px;
    padding:10px 12px;font-family:var(--mono);font-size:11.5px;color:var(--text);overflow-x:auto;
  }
  #help .close{position:absolute;top:16px;right:18px;background:none;border:none;color:var(--text-muted);font-size:18px;cursor:pointer;}
  kbd{
    font-family:var(--mono);background:var(--node-bg);border:1px solid var(--node-border);
    border-radius:4px;padding:1px 6px;font-size:11px;color:var(--accent);
  }

  @media (max-width:760px){
    main{flex-direction:column;}
    #editor-pane{width:100% !important;max-width:none;min-width:0;height:40vh;border-left:none;border-top:1px solid var(--panel-line);}
    #editor-resizer{display:none;}
    #editor-pane.collapsed{height:0;}
    #stage-wrap{flex:1;}
    .brand .tagline{display:none;}
    #minimap{display:none;}
    #navbar .lbl{display:none;}
  }
`;var Tn=`

<header>
  <div class="brand">
    <a class="mark" href="/" title="Slidetake home"><svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M 10 8 H 38 C 41.3 8 44 10.7 44 14 V 18 H 22 C 16.5 18 12 22.5 12 28 V 36 H 10 C 6.7 36 4 33.3 4 30 V 14 C 4 10.7 6.7 8 10 8 Z" opacity="0.4"/><path fill-rule="evenodd" d="M 22 22 H 54 C 57.3 22 60 24.7 60 28 V 50 C 60 53.3 57.3 56 54 56 H 22 C 18.7 56 16 53.3 16 50 V 28 C 16 24.7 18.7 22 22 22 Z M 26 34 C 28.2 34 30 32.2 30 30 C 30 27.8 28.2 26 26 26 C 23.8 26 22 27.8 22 30 C 22 32.2 23.8 34 26 34 Z M 38 40 C 36.9 40 36 40.9 36 42 V 48 C 36 49.1 36.9 50 38 50 H 50 C 51.1 50 52 49.1 52 48 V 42 C 52 40.9 51.1 40 50 40 H 38 Z"/></svg><span class="word">Slide<span>take</span></span></a>
    <div class="tagline">plain markdown \u2192 spatial deck \u2192 video</div>
  </div>
  <div class="hdr-actions">
    <input type="file" id="file-input" accept=".md,.markdown,.txt,text/markdown" hidden>
    <div class="seg" id="layout-toggle">
      <button class="seg-btn" data-mode="tree" title="Tree (1)">tree</button>
      <button class="seg-btn" data-mode="radial" title="Radial (2)">radial</button>
      <button class="seg-btn" data-mode="path" title="Path: slides in presenting order (3)">path</button>
      <button class="seg-btn" data-mode="focus" title="Focus: one slide at a time, no travel (4)">focus</button>
    </div>
    <a class="btn" id="continue" href="/edit" hidden></a>
    <button class="btn" id="btn-edit-toggle" title="Editor: write, open, share (E)">\u270E Editor</button>
    <button class="btn icon" id="btn-mode" title="Light / dark (L)" aria-label="Light / dark"></button>
    <button class="btn icon" id="btn-help" title="Help: the full guide (? for keys)" aria-label="Help">?</button>
  </div>
</header>

<main>
  <div id="stage-wrap">
    <div id="stage">
      <div id="world">
        <svg id="connectors"></svg>
      </div>
    </div>
    <div id="breadcrumbs"></div>
    <div id="navbar">
      <button id="btn-keys" title="Keyboard shortcuts (?)">\u2328<span class="lbl"> Keys</span></button>
      <button id="nav-prev" class="touch-only" title="Previous (\u2190)" aria-label="Previous">\u2190</button>
      <button id="nav-next" class="touch-only" title="Next (\u2192)" aria-label="Next">\u2192</button>
      <div class="divider"></div>
      <button id="btn-camera" title="Camera (C)" aria-pressed="false"></button>
      <button id="btn-record" title="Record a take with OBS (R)">\u25CF<span class="lbl"> Record</span></button>
      <button id="btn-present" title="Fullscreen (F)">\u26F6<span class="lbl"> Fullscreen</span></button>
    </div>
    <div id="progress" aria-hidden="true"></div>
    <div id="minimap"><div class="mm-label" id="mm-label">map</div><svg id="mm-svg" width="180" height="130"></svg></div>
    <div id="brand" hidden></div>
    <div id="pip" hidden><span>PIP camera</span></div>
    <div id="pip-msg" role="status"></div>
  </div>
  <div id="editor-resizer" role="separator" aria-orientation="vertical" aria-label="Resize the editor" title="Drag to resize"></div>
  <div id="editor-pane" class="collapsed">
    <div class="pane-bar">
      <span class="pane-label" id="doc-state" aria-live="polite"></span>
      <span class="pane-actions">
        <a class="btn small" id="btn-new" href="/new" title="Start from a template">New</a>
        <button class="btn small" id="btn-load" title="Load a deck from a link: GitHub, a gist or any URL">\u21E3 Load</button>
        <button class="btn small" id="btn-open" title="Open a markdown file from this computer">Open</button>
        <button class="btn small" id="btn-save" title="Save the markdown to a file on this computer">Save</button>
        <button class="btn small" id="btn-share" title="Copy a link to this deck">Share</button>
      </span>
    </div>
    <textarea id="editor" spellcheck="false"></textarea>
    <div id="status-line"><span id="status-count"></span><span id="status-err" class="err"></span><button id="btn-reset" hidden title="Discard your edits and go back to the original">reset to original</button></div>
  </div>
</main>

<div id="help">
  <div class="panel">
    <button class="close" id="help-close" aria-label="Close">\u2715</button>
    <h2>Keys</h2>
    <table class="keys">
      <tr><td><kbd>\u2192</kbd> <kbd>\u2190</kbd> <kbd>Space</kbd></td><td>next / previous step</td></tr>
      <tr><td><kbd>\u2193</kbd> <kbd>\u2191</kbd></td><td>first child / parent</td></tr>
      <tr><td><kbd>O</kbd></td><td>the whole map; <kbd>O</kbd> or <kbd>Esc</kbd> goes back</td></tr>
      <tr><td><kbd>1</kbd>\u2013<kbd>4</kbd></td><td>tree, radial, path, focus</td></tr>
      <tr><td><kbd>F</kbd></td><td>fullscreen</td></tr>
      <tr><td><kbd>+</kbd> <kbd>\u2212</kbd></td><td>bigger / smaller slides</td></tr>
      <tr><td><kbd>E</kbd></td><td>editor: write, open, share</td></tr>
      <tr><td><kbd>L</kbd></td><td>light / dark</td></tr>
      <tr><td><kbd>C</kbd> <kbd>V</kbd> <kbd>R</kbd></td><td>camera, camera layouts, record</td></tr>
    </table>
    <p>Drag to pan, scroll or pinch to zoom, click a card to fly to it.</p>
    <p><a href="/help" target="_blank" rel="noopener">The full guide \u2192</a> writing decks, sharing, recording, camera, review and cut.</p>
  </div>
</div>

<div id="new-dialog" class="modal" role="dialog" aria-labelledby="new-title">
  <div class="panel">
    <button class="close" data-close aria-label="Close">\u2715</button>
    <h2 id="new-title">Start a new deck</h2>
    <p>Pick a template. It opens as it is; start typing and it becomes your own copy at <code>/edit</code>.</p>
    <ul class="templates">
      <li><a href="/new?template=blank"><strong>Blank</strong><span>A first card, a section and a detail.</span></a></li>
      <li><a href="/new?template=talk"><strong>Talk</strong><span>Why it matters, the idea, trade-offs, summary.</span></a></li>
      <li><a href="/new?template=recording"><strong>Recording</strong><span>Camera steps, an overview moment and a closing on camera.</span></a></li>
    </ul>
    <p>Or <strong>\u21E3 Load</strong> a deck from a link, or <strong>Open</strong> a file from this computer.</p>
  </div>
</div>

<div id="open-dialog" class="modal" role="dialog" aria-labelledby="open-title">
  <div class="panel">
    <button class="close" data-close aria-label="Close">\u2715</button>
    <h2 id="open-title">Load a deck from a link</h2>
    <p>Paste a link to a markdown file: a GitHub file or folder, a gist, or any URL that allows other sites to read it.</p>
    <form id="open-form" class="row">
      <input type="text" id="open-url" placeholder="https://github.com/you/repo/blob/main/talk.md" spellcheck="false" autocomplete="off">
      <button class="btn primary" type="submit">Load</button>
    </form>
    <p id="open-error" class="warn" hidden></p>
    <h3>Try one</h3>
    <ul id="open-examples">
      <li><a href="/gh/slidetake/slidetake/examples/why-debt-is-not-bad.md">Why debt is a tool, not an enemy</a> (headings format)</li>
      <li><a href="/gh/sakthipriyan/sakthipriyan.github.io/content/building-wealth/slides/2025/invest-in-gold/index.md">Invest in gold</a> (a reveal.js deck)</li>
    </ul>
    <h3>Short links</h3>
    <p><code>slidetake.com/gh/owner/repo/path/deck.md</code> opens a file on GitHub (add <code>@branch</code> after the repo for another branch), and <code>slidetake.com/gist/&lt;id&gt;</code> a gist. Images next to the deck load as they are.</p>
    <p>A file on this computer? Use <strong>Open</strong>.</p>
  </div>
</div>

<div id="rec-dialog" class="modal" role="dialog" aria-labelledby="rec-title">
  <div class="panel">
    <button class="close" data-close aria-label="Close">\u2715</button>
    <h2 id="rec-title">Record a take</h2>
    <p id="rec-deck-info"></p>
    <p id="rec-screen"></p>
    <h3>OBS</h3>
    <div class="fields">
      <label>Host<input type="text" id="obs-host" value="localhost" spellcheck="false"></label>
      <label>Port<input type="text" id="obs-port" value="4455" inputmode="numeric"></label>
      <label>Password<input type="password" id="obs-pass" autocomplete="off"></label>
    </div>
    <label class="check"><input type="checkbox" id="obs-remember"> Remember these on this computer</label>
    <div class="row"><button class="btn" id="obs-connect">Connect</button><span id="obs-status">Not connected</span></div>
    <p>In OBS: Tools \u2192 WebSocket Server Settings \u2192 enable it; the port and password are shown there. Point OBS at this browser window plus your microphone. No scenes are needed: the deck switches the camera itself.</p>
    <h3>During the take</h3>
    <ul>
      <li><kbd>\u2192</kbd> / clicker next: the next step. One more press after the last step ends the take and stops OBS.</li>
      <li><kbd>\u2190</kbd> / clicker back: <strong>take this slide again</strong>. Every attempt is kept; you pick the best one afterwards.</li>
      <li><kbd>B</kbd> / clicker blank: pause and resume the recording.</li>
      <li><kbd>Esc</kbd>: stop the take early.</li>
    </ul>
    <label style="margin-top:14px">Layout for this take
      <select id="rec-layout">
        <option value="path">Path: short, one-direction moves (recommended)</option>
        <option value="focus">Focus: no travel, slides fade in</option>
        <option value="current">Keep the current layout</option>
      </select>
    </label>
    <div id="rec-sessions"></div>
    <div class="row end">
      <button class="btn" id="rec-rehearse">Rehearse (no recording)</button>
      <button class="btn primary" id="rec-start" disabled>\u25CF Start recording</button>
    </div>
  </div>
</div>

<div id="review" class="modal" role="dialog" aria-labelledby="rv-title">
  <div class="panel xwide">
    <button class="close" data-close aria-label="Close">\u2715</button>
    <h2 id="rv-title">Review the take</h2>
    <p id="rv-info"></p>
    <div class="rv-grid">
      <div>
        <div class="rv-video">
          <video id="rv-video" controls playsinline preload="metadata"></video>
          <div id="rv-novideo">
            <div class="row" style="justify-content:center;margin:0">
              <button class="btn primary" id="rv-open">Open the recording file\u2026</button>
              <button class="btn" id="rv-folder" hidden>Use my OBS recordings folder\u2026</button>
            </div>
            <p>Pick the file OBS saved<span id="rv-file"></span> (.mov, .mp4 or .mkv) to preview takes. Or choose your OBS recordings folder once, and later takes load by themselves.</p>
          </div>
        </div>
        <div class="row"><button class="btn small" id="rv-play-final">\u25B6 Play the final cut</button><span id="rv-now"></span></div>
      </div>
      <div class="rv-list" id="rv-list"></div>
    </div>
    <div class="rv-out">
      <h3>ffmpeg
        <select id="rv-mode">
          <option value="accurate">Frame-accurate (x264)</option>
          <option value="mac">Frame-accurate, Mac hardware encoder (faster)</option>
          <option value="copy">No re-encode (only when nothing is cut out)</option>
        </select>
        <select id="rv-fps" title="Recording frame rate: cut points snap to its frames">
          <option value="24">24 fps</option><option value="25">25 fps</option><option value="30">30 fps</option>
          <option value="50">50 fps</option><option value="60">60 fps</option>
          <option value="23.976">23.976 fps</option><option value="29.97">29.97 fps</option><option value="59.94">59.94 fps</option>
        </select>
        <button class="btn small" data-copy="rv-ffmpeg">Copy</button>
      </h3>
      <textarea id="rv-ffmpeg" rows="4" readonly spellcheck="false"></textarea>
      <h3>YouTube</h3>
      <div class="two">
        <label>Title<input type="text" id="rv-yt-title"></label>
        <label>Slides link (goes in the description)<input type="text" id="rv-link" placeholder="https://\u2026/slides/\u2026/" spellcheck="false"></label>
      </div>
      <h3>Description <button class="btn small" data-copy="rv-yt-desc">Copy</button></h3>
      <textarea id="rv-yt-desc" rows="10" spellcheck="false"></textarea>
      <p id="rv-chapters-note"></p>
      <h3>Tags <button class="btn small" data-copy="rv-yt-tags">Copy</button></h3>
      <input type="text" id="rv-yt-tags" spellcheck="false" style="width:100%">
    </div>
    <div class="row end">
      <button class="btn" id="rv-download">\u2193 Download script + publish pack</button>
      <button class="btn primary" data-close>Done</button>
    </div>
  </div>
</div>
<input type="file" id="rv-file-input" accept="video/*,video/quicktime,.mov,.mp4,.m4v,.mkv,.webm" hidden>

<div id="rec-countdown"><div class="num"></div><div class="hint">recording starts after the countdown \xB7 Esc to cancel</div></div>
<div id="rec-paused">Paused \xB7 press B to resume</div>

<!-- The sample deck. Plain markdown, nothing else. -->
`;var Mn=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var ca=e=>new Promise((t,n)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>n(new Error("could not load "+e)),document.head.appendChild(o)});async function da(){document.head.insertAdjacentHTML("beforeend",Mn);let e=document.createElement("style");e.textContent=Cn,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",Tn),await Promise.all([window.gsap?null:ca("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:ca("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>(la(),qr))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",da,{once:!0}):da();})();
