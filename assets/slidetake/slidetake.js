/* Slidetake 0.1.0 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var _=(e,t)=>()=>(e&&(t=e(e=0)),t);var Nt,Rn=_(()=>{Nt=`---
title: Slidetake \u2014 write in markdown, record without timeline editing
brand: slidetake
pip: bottom-right
---

<!-- camera: on, full, on -->

# ![](/favicon.svg) Slidetake

**Write in markdown. Present on a spatial canvas. Record without timeline editing.**

For developers and technical educators who explain things on video. You're inside a Slidetake deck right now: press \u2192 to walk it, **O** for the map.

## \u2702\uFE0F Stop editing on a timeline

**Retake by slide.** The slide is the timeline marker, so a fumbled line costs one press, not an editing session.

### Every slide is a take

Stumbled on a slide? Press \u2190 and say it again. Every attempt is kept, and recording carries on.

### Pick, don't scrub

Choose the best take of each slide. Slidetake writes the frame-exact **ffmpeg** cut, the YouTube **chapters** and the description.

## \u{1F5FA}\uFE0F A map, not a stack

<!-- view: overview -->

Your headings are the hierarchy: zoom out for the whole system, zoom in for one part. This slide just showed you the map.

### Headings become cards

\`#\` is the first card, \`##\` branches from it, \`###\` goes a level deeper. No layout to draw.

### A path your viewer can follow

\u2192 always walks the same order, and **path** lays it out as a staircase, so the audience never loses its place.

## \u{1F3A5} The camera is part of the deck

<!-- camera: on, full, on -->

A comment in a slide moves you: corner, full screen, or off. Turn on **Camera** and watch this slide do it.

### Broadcast-quality recording

**[OBS](https://obsproject.com)** records at full quality; Slidetake drives it. No scenes to switch, no recording to watch.

### One session, one finished video

Write, present and record in one sitting. What comes out is ready to upload.

## \u270D\uFE0F Plain text in

Markdown you already know: headings, lists, tables, code, diagrams, charts, images and YouTube links. [See every example \u2192](/examples)

### Your copy

Type in any deck, this one included, and it becomes your own copy. The original stays as it is.

### Open and share

**\u21E3 Load** a GitHub file or gist, start from a template, and **Share** a link with the deck inside it.

## \u{1F49B} Free and open

Open source, Apache 2.0: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake).

Everything else is in the guide: **[slidetake.com/help](/help)**.
`});var _n,Dn=_(()=>{_n=`---
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

### What a card can hold

Plain markdown, and the layout follows from what's on the card. [See every one \u2192](/examples)

| Write | Get |
|---|---|
| \`<!-- steps -->\` before a list | one item per press |
| \` \`\`\`dot \`, \` \`\`\`d2 \` | a Graphviz or D2 diagram |
| \` \`\`\`echarts \` with JSON options | a chart, in the deck's colors for dark and light |
| \` \`\`\`svg \` or \`![](drawing.svg)\` | an SVG drawing |
| an image alone | an image card: a phone shot sits beside the heading and caption, a landscape one spans the card between them, a 16:9 one fills it |
| an image and text | a split card: the image sits on the side written first |
| a list of images | a gallery; with \`<!-- steps -->\` a carousel, one image per press, laid out like an image card |
| \`<!-- view: full -->\` in a card | the card fills the whole screen |
| images in one paragraph | a grid, up to four a row |
| a YouTube link alone on a line | the video: the next press plays it, leaving pauses it |

The first and last cards animate in on their own. The alt text of an image is its caption.

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
| K or ? | keys (also \u2328 Keys on screen) |
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
`});var Nn,jn=_(()=>{Nn=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var Wn,Hn=_(()=>{Wn=`---
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
`});var Un,Fn=_(()=>{Un=`---
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
`});var $n,qn=_(()=>{$n=`---
title: Slidetake examples
brand: slidetake
duration: 10m
---

# Slidetake examples

Everything a deck can hold, written in plain markdown. Open **\u270E Editor** to see the source of any card, or press **O** for the map.

## \u270D\uFE0F Text

Paragraphs, **bold**, *italic*, \`code\`, [links](https://slidetake.com) and lists, as markdown writes them.

- One point
- Another point
  - A detail under it

### Steps

Put \`<!-- steps -->\` before a list and it reveals one item per press:

<!-- steps -->
- First, the problem
- Then, the idea
- Finally, the result

### Quotes and tables

> A quote stands out from the text around it.

| Plan | Price | Users |
|---|---:|---:|
| Free | \u20B90 | 1 |
| Team | \u20B9499 | 10 |

### Code

\`\`\`python
def take(slide):
    return slide.best_attempt()
\`\`\`

## \u{1F9ED} Diagrams

Write the diagram in a fenced block named after its language.

### Graphviz

\`\`\`dot
digraph {
  rankdir=LR
  node [shape=box style=rounded]
  Markdown -> Deck -> Takes -> Video
}
\`\`\`

### D2

\`\`\`d2
direction: right
write: Write {shape: rectangle}
present: Present
record: Record
write -> present -> record: one session
\`\`\`

### SVG

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120">
  <rect x="10" y="20" width="90" height="80" rx="10" fill="#e0b024"/>
  <rect x="115" y="20" width="90" height="80" rx="10" fill="#e0b024" opacity=".7"/>
  <rect x="220" y="20" width="90" height="80" rx="10" fill="#e0b024" opacity=".4"/>
</svg>
\`\`\`

## \u{1F4CA} Charts

ECharts, as a fenced \`echarts\` block of JSON options.

### A bar chart

\`\`\`echarts
{
  "xAxis": {"type": "category", "data": ["Jan", "Feb", "Mar", "Apr", "May"]},
  "yAxis": {"type": "value"},
  "series": [{"type": "bar", "data": [12, 19, 15, 24, 30]}]
}
\`\`\`

### A donut

\`\`\`echarts
{
  "series": [{"type": "pie", "radius": ["45%", "70%"],
    "data": [{"name": "Equity", "value": 85}, {"name": "Debt", "value": 5}, {"name": "Gold", "value": 10}]}]
}
\`\`\`

## \u{1F5BC}\uFE0F Images

The layout comes from what's on the slide; the alt text is the caption.

### One image

![An image alone fills the card edge to edge](https://slidetake.com/og.jpg)

### Image and text

![Written first, so it sits on the left](https://slidetake.com/og.jpg)

An image beside text makes a split card. Write the text first and the image moves to the right.

### A gallery

A list of images is a gallery. With \`<!-- steps -->\` it becomes a carousel: one image at a time, the next on each press.

<!-- steps -->
- ![The logo](https://slidetake.com/favicon.svg)
- ![The home-screen icon](https://slidetake.com/apple-touch-icon.png)
- ![The link preview](https://slidetake.com/og.jpg)

### A grid

Several images in one paragraph sit side by side, up to four a row:

![Logo](https://slidetake.com/favicon.svg) ![Icon](https://slidetake.com/apple-touch-icon.png) ![Preview](https://slidetake.com/og.jpg)

### Full screen

<!-- view: full -->

![A card tagged view: full fills the whole screen](https://slidetake.com/og.jpg)

## \u25B6\uFE0F YouTube

A YouTube link alone on a line becomes the video. The next press plays it; leaving the slide pauses it.

https://www.youtube.com/watch?v=jNQXAC9IVRw

## \u{1F3A5} Camera and map

<!-- camera: on, full, on -->
<!-- view: overview -->

Two comments do what markdown can't: \`<!-- camera: on, full, on -->\` moves the presenter's camera, and \`<!-- view: overview -->\` shows the whole map first.

## \u{1F680} Start your own

Press **New** for a template (blank, talk or recording), or type in this deck to make it your copy.

The templates and this deck live in [examples/](https://github.com/slidetake/slidetake/tree/main/examples) on GitHub.
`});function Te(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function Ne(e){return e.replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function C(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Yn(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,n)=>n[0]==="#"?String.fromCodePoint(n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10)):Pa[n.toLowerCase()]??t)}function He(e){let t={};for(let n of e.matchAll(/([\w-]+)="([^"]*)"/g))t[n[1]]=n[2];return t}function We(e,t){let n=[[]],o=null;return e.split(`
`).forEach(a=>{let r=a.match(/^\s{0,3}(`{3,}|~{3,})/);r&&(o?r[1][0]===o[0]&&r[1].length>=o.length&&(o=null):o=r[1]),!o&&!r&&t.test(a)?n.push([]):n[n.length-1].push(a)}),n.map(a=>a.join(`
`))}function Gn(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let n=t.match(/^(\d+):(\d{1,2})$/);if(n)return(+n[1]*60+ +n[2])*1e3;if(n=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!n)return 0;let o=(n[2]||"m")[0];return parseFloat(n[1])*(o==="h"?3600:o==="s"?1:60)*1e3}function K(e){let t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return(n?n+":"+String(o).padStart(2,"0"):o)+":"+String(a).padStart(2,"0")}var Pa,it=_(()=>{"use strict";Pa={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function Vn(e){let t=null;return e.split(`
`).filter(n=>{let o=n.match(/^\s{0,3}(`{3,}|~{3,})/);return o?(t?o[1][0]===t[0]&&o[1].length>=t.length&&(t=null):t=o[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function Ht(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(Vn(e))}function Wt(e){let t=Vn(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function Ra(e){let t={},n=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!n)return{deck:t,body:e};let o=null;return n[1].split(`
`).forEach(a=>{let r=a.match(/^\s+-\s+(.*)$/);if(r&&o){t[o].push(r[1].trim().replace(/^["']|["']$/g,""));return}let i=a.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){o=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],o=s):(t[s]=l,o=null)}),{deck:t,body:e.slice(n[0].length)}}function Xn(e){let t=a=>typeof a=="string"||typeof a=="number"||typeof a=="boolean",n=a=>String(a).replace(/\s*\n\s*/g," "),o=[];for(let[a,r]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(a)&&(t(r)?o.push(a+": "+n(r)):Array.isArray(r)&&r.every(t)&&(o.push(a+":"),r.forEach(i=>o.push("  - "+n(i)))));return o.length?`---
`+o.join(`
`)+`
---
`:""}function Da(e){let t=e.split(`
`),n={},o=e;if(t[0]!==void 0&&t[0].trim()==="---"){let a=-1;for(let r=1;r<t.length;r++)if(t[r].trim()==="---"){a=r;break}a!==-1&&(t.slice(1,a).forEach(r=>{let i=r.indexOf(":");i>-1&&(n[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}),o=t.slice(a+1).join(`
`).replace(/^\n+/,""))}return{meta:n,body:o}}function _a(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),n=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),o=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),a=null;if(n&&(!o||n.index<o.index)?a=n[1]:o&&(a=o[1].replace(/<[^>]+>/g," ")),!a){let r=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));a=r?r.slice(0,60):null}return a?Yn(Ne(a)).replace(/\s+/g," ").trim():null}function Kn(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?He(t[1]):{}}function Jn(e,{render:t=n=>({html:n,err:null})}={}){let n=new Map,o=b=>{let E=b,g=2;for(;n.has(E);)E=b+"-"+g++;return E},a=b=>(n.set(b.id,{x:null,y:null,children:[],...b}),b.id);e=e.replace(/\r\n?/g,`
`);let r=/^\+\+\+[ \t]*$/m.test(e),i={};r||({deck:i,body:e}=Ra(e));let s=/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||"")),l=!r&&(We(e,/^--\s*$/).length>1||s&&We(e,/^---\s*$/).length>1),c=r?N():l?M():f();return n.forEach(b=>{(!b.parent||b.parent===b.id||!n.has(b.parent))&&(b.parent=null)}),n.forEach(b=>{let E=new Set([b.id]),g=b.parent;for(;g;){if(E.has(g)){b.parent=null;break}E.add(g),g=n.get(g).parent}}),n.forEach(b=>{b.parent&&n.get(b.parent).children.push(b.id)}),{deck:i,nodes:n,format:r?"+++":l?"reveal":"headings",errCount:c};function f(){let b=[],E=null,g=null,B={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(m=>{let v=m.match(/^\s{0,3}(`{3,}|~{3,})/);v&&(g?v[1][0]===g[0]&&v[1].length>=g.length&&(g=null):g=v[1]);let L=!g&&!v?m.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(L){let D=L[2],se=null,ne=D.match(/\s*\{#([\w\-:.]+)\}\s*$/);ne&&(se=ne[1],D=D.slice(0,ne.index)),E={level:L[1].length,title:Ne(D),explicitId:se,lines:[L[1]+" "+D]},b.push(E)}else(E||B).lines.push(m)});let G=B.lines.join(`
`);G.trim()&&(b.length&&!G.replace(/<!--[\s\S]*?-->/g,"").trim()?b[0].lines.splice(1,0,...B.lines):b.unshift(B));let w=[];return b.forEach(m=>{for(;w.length&&w[w.length-1].level>=m.level;)w.pop();let v=w.length?w[w.length-1].id:null,L=m.lines.join(`
`).trim(),D=m.title||Ne((L.split(`
`).find(be=>be.trim())||"Intro").slice(0,48));m.id=o(m.explicitId||Te(D));let{html:se,err:ne}=t(L);a({id:m.id,parent:v,title:D,html:se,err:ne,camera:Wt(L),mapFirst:Ht(L)}),w.push(m)}),0}function N(){let b=e.split(/\n\+\+\+[ \t]*\n/).map(B=>B.trim()).filter(B=>B.length),E=null,g=0;return b.forEach((B,G)=>{let{meta:w,body:m}=Da(B),v=o(w.id||"slide-"+(G+1)),L="parent"in w?w.parent||null:E,D=m.match(/^#{1,6}\s+(.+)$/m),se=w.title||(D?Ne(D[1]):v),{html:ne,err:be}=t(m);be&&g++,a({id:v,parent:L,title:se,html:ne,err:be,camera:w.camera||Wt(m),mapFirst:Ht(m),x:w.x!==void 0?parseFloat(w.x):null,y:w.y!==void 0?parseFloat(w.y):null}),E=v}),g}function M(){let b=0,E=0,g=null;function B(w,m){let v=w.body.trim();E++;let L=_a(v)||"Slide "+E,D=m?n.get(m).title:null;D&&L.startsWith(D+" / ")&&(L=L.slice(D.length+3));let se=o(Te(L)),{html:ne,err:be}=t(v);return be&&b++,a({id:se,parent:m,title:L,html:ne,err:be,camera:Wt(v),mapFirst:Ht(v),autoslide:parseInt(w.attrs["data-autoslide"],10)||0})}let G=[];return We(e,/^---\s*$/).forEach(w=>{if(/<section\b/i.test(w)){for(let L of w.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))G.push([{body:L[2],attrs:He(L[1])}]);let v=w.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");v.trim()&&G.push([{body:v,attrs:Kn(v)}]);return}let m=We(w,/^--\s*$/).filter(v=>v.trim()).map(v=>({body:v,attrs:Kn(v)}));m.length&&G.push(m)}),G.forEach(w=>{let m=null;w.forEach((v,L)=>{if(!g){g=m=B(v,null);return}L===0?m=B(v,g):B(v,m)})}),b}}var Zn=_(()=>{"use strict";it()});function st(e,t){return String(t||"").toLowerCase().split(/\s+/).forEach(n=>{n&&(n==="off"||n==="hide"?e.off=!0:n==="on"||n==="pip"||n==="show"?(e.off=!1,e.full=!1,e.used=!0):n==="full"||n==="fullscreen"?(e.full=!0,e.off=!1,e.used=!0):/^\d+(\.\d+)?%?$/.test(n)?(e.size=Ft(parseFloat(n)),e.used=!0):Fe.includes(n)?(e.corner=n,e.used=!0):n==="flip"?(e.flip=!e.flip,e.used=!0):n==="circle"?e.circle=!0:n==="rect"?e.circle=!1:n==="mirror"?e.mirror=!0:(n==="unmirror"||n==="no-mirror")&&(e.mirror=!1))}),e}function Qn(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function eo(e,t){let n=[];if(!e.length){for(let a=0;a<=t;a++)n.push({cam:0,frag:a});return n}let o=e.findIndex(a=>!st({},a).full);o<0&&(o=e.length-1);for(let a=0;a<=o;a++)n.push({cam:a,frag:0});for(let a=1;a<=t;a++)n.push({cam:o,frag:a});for(let a=o+1;a<e.length;a++)n.push({cam:a,frag:t});return n}var Fe,Ft,to=_(()=>{"use strict";Fe=["top-left","top-right","bottom-left","bottom-right"],Ft=e=>Math.max(8,Math.min(60,e))});function no(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let o=n.pathname.split("/").filter(Boolean);if(n.hostname==="github.com"||n.hostname==="www.github.com"){let[a,r,i,s,...l]=o;if(a&&r&&(i==="blob"||i==="raw"||i==="tree")&&s){let c=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(c))&&(c=(c?c+"/":"")+"index.md"),{kind:"url",url:Ut+[a,r,s].join("/")+"/"+c}}if(a&&r&&!i)return{kind:"url",url:Ut+a+"/"+r+"/HEAD/README.md"}}if(n.hostname==="gist.github.com"){let a=o.length>=2?o[1]:o[0];if(a&&/^[\da-f]+$/i.test(a))return{kind:"gist",id:a}}if(n.hostname==="slidetake.com"||n.hostname==="www.slidetake.com"){let a=qt(n.pathname);if(a)return a;let r=n.searchParams.get("src");if(r)return{kind:"url",url:r}}return{kind:"url",url:n.href}}function qt(e){let t=String(e||"").split("/").filter(Boolean).map(n=>{try{return decodeURIComponent(n)}catch{return n}});if(t[0]==="gh"&&t.length>=4){let[,n,o,...a]=t,r=o.indexOf("@"),i=r<0?o:o.slice(0,r),s=r<0?"HEAD":o.slice(r+1);return!n||!i||!s?null:{kind:"url",url:Ut+[n,i,s,...a].map(encodeURIComponent).join("/")}}return t.length===1&&t[0]==="help"?{kind:"builtin",id:"help"}:t.length===1&&t[0]==="examples"?{kind:"builtin",id:"showcase"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function oo(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id==="showcase"?"/examples":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,n,o,a,r]=t;if(!/^refs$/.test(a))return"/gh/"+n+"/"+o+(a==="HEAD"?"":"@"+a)+"/"+r}return"/?src="+encodeURIComponent(e.url)}var Ut,$t=_(()=>{"use strict";Ut="https://raw.githubusercontent.com/"});function ja(e){let t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Na(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,n=>n.charCodeAt(0))}async function ao(e,t){let n=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await n.arrayBuffer())}async function ro(e){return ja(await ao(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function io(e){return new TextDecoder().decode(await ao(Na(e),new DecompressionStream("deflate-raw")))}function lt(e){let t=e.replace(/^#/,"");if(!t.startsWith(Yt)){let r=t;try{r=decodeURIComponent(t)}catch{}return{data:null,slide:r}}let n=t.slice(Yt.length),o=n.indexOf("~"),a=o<0?"":n.slice(o+1);try{a=decodeURIComponent(a)}catch{}return{data:o<0?n:n.slice(0,o),slide:a}}function Gt(e,t){return"#"+Yt+e+(t?"~"+encodeURIComponent(t):"")}var Yt,Kt=_(()=>{"use strict";Yt="deflate:"});function so(e,t,n){let o=e.replace(/\/+$/,"")||"/",a=new URLSearchParams(t),{data:r,slide:i}=lt(n);if(o==="/share")return r?{page:"share",data:r,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(o==="/edit")return{page:"edit",slide:i};if(o==="/new"){let c=a.get("template");return c&&Ha.includes(c)?{page:"source",source:{kind:"builtin",id:"template:"+c},slide:i}:{page:"pick"}}let s=qt(o);if(s)return{page:"source",source:s,slide:i};let l=a.get("src");return o==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function oe(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="help"?"Help":e.id==="showcase"?"the examples":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let n=new URL(e.url);return n.hostname+n.pathname}catch{return e.url}}}}function dt(e,t,{exported:n=!1}={}){return{text:e,origin:t,originText:e,exported:n?e:null}}function ct(e){return e.text!==(e.exported??e.originText)}function pt(e){return e.text===e.originText}function lo(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var Ha,co=_(()=>{"use strict";$t();Kt();Ha=["blank","talk","recording"]});function po(e){let t;try{t=new URL(e)}catch{return null}let n=t.hostname.replace(/^(www\.|m\.)/,""),o=null,a=!1;if(n==="youtu.be")o=t.pathname.slice(1).split("/")[0];else if(n==="youtube.com"||n==="youtube-nocookie.com"){let r=t.pathname.split("/").filter(Boolean);r[0]==="watch"?o=t.searchParams.get("v"):["shorts","live","embed"].includes(r[0])&&(o=r[1]||null,a=r[0]==="shorts")}return!o||!/^[\w-]{6,}$/.test(o)?null:{id:o,start:Wa(t.searchParams.get("t")||t.searchParams.get("start")||""),portrait:a}}function Wa(e){if(/^\d+$/.test(e))return+e;let t=e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);return t&&e?+(t[1]||0)*3600+ +(t[2]||0)*60+ +(t[3]||0):0}function uo(e){return"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?enablejsapi=1&rel=0&playsinline=1"+(e.start?"&start="+e.start:"")}var ho=_(()=>{"use strict"});function Ue(e){let t=new Map,n=e.totalObs??e.total;return e.events.forEach((o,a)=>{t.has(o.id)||t.set(o.id,{id:o.id,title:o.title,takes:[]});let r=t.get(o.id),i=e.events[a+1];r.takes.push({no:r.takes.length+1,start:mo(o),end:i?mo(i):n})}),t}function qe(e){let t=[],n=ht(e);return Ue(e).forEach(o=>{let a=e.picks[o.id]??o.takes.length;if(!a)return;let r=o.takes[a-1];if(!r)return;let i=fo(r.start,n),s=fo(r.end,n);s>i&&t.push({id:o.id,title:o.title,f0:i,f1:s,start:i*1e3/n,end:s*1e3/n})}),t}function Fa(e){let t=[];return e.forEach(n=>{let o=t[t.length-1];o&&n.f0===o.f1?(o.f1=n.f1,o.end=n.end):t.push({f0:n.f0,f1:n.f1,start:n.start,end:n.end})}),t}function Vt(e,t){let n=0,o=[];return qe(e).forEach(a=>{let{sec:r,title:i}=t(a.id,a.title),s=o[o.length-1];(!s||s.sec!==r&&s.title!==i)&&o.push({sec:r,title:i,t:n}),n+=a.end-a.start}),{list:o,length:n}}function bo(e,t){let{list:n,length:o}=Vt(e,t),a=n.filter((r,i)=>i===0||(n[i+1]?n[i+1].t:o)-r.t>=1e4);return a.length&&(a[0].t=0),{lines:a.map(r=>K(r.t)+" "+r.title),dropped:n.length-a.length,length:o}}function yo(e,t,{input:n,outputName:o,sectionOf:a}){let r=Fa(qe(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!r.length)return"# Every slide is left out: nothing to render.";let i=Ua(n)+o,{list:s,length:l}=Vt(e,a),c=m=>String(m).replace(/[=;#\\\n]/g,v=>"\\"+v),N=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+c(e.deckTitle)+`
`+s.map((m,v)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(m.t)+`
END=`+Math.round(s[v+1]?s[v+1].t:l)+`
title=`+c(m.title)).join(`
`))+`
EOF
`,M=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let m=r.map(L=>"file "+ut(n)+`
inpoint `+go(L.start)+`
outpoint `+go(L.end)).join(`
`);return(r.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(r.length===2?"the cut":"each of the "+(r.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+m+`
EOF
`+N+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+M+" -c copy -movflags +faststart "+ut(i)}let b=ht(e),E=m=>(m/b).toFixed(6),g=m=>((m-.5)/b).toFixed(6),B=r.map(m=>"gte(t,"+g(m.f0)+")*lt(t,"+g(m.f1)+")").join("+"),G=r.map(m=>"gte(t,"+E(m.f0)+")*lt(t,"+E(m.f1)+")").join("+"),w=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return N+"ffmpeg -i "+ut(n)+" -i /tmp/slidetake-chapters.txt"+M+` -vf "select='`+B+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+G+`',asetpts=N/SR/TB" `+w+" -c:a aac -b:a 192k -movflags +faststart "+ut(i)}var mo,ht,fo,Ce,Ua,ut,go,vo=_(()=>{"use strict";it();mo=e=>e.obsT??e.t,ht=e=>e.fps||60,fo=(e,t)=>Math.round(e*t/1e3);Ce=e=>String(e||"").split(/[\\/]/).pop()||"",Ua=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},ut=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",go=e=>(e/1e3).toFixed(3)});var gi={};function Z(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let n=e.slice(10);return localStorage.getItem("slidetake:"+n)??localStorage.getItem("traverse:"+n)}catch{return null}}function Q(e,t){try{localStorage.setItem(e,t)}catch{}}function er(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+C(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function yt(){let e=x.brand||"",t=x.logo||"",n=/^chip$/i.test(x.brand_style||""),o=/^slidetake$/i.test(e)?'<span class="st-mark">'+No+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+C(t)+'">':"")+(e?"<span"+(n?' class="chip"':"")+">"+C(e)+"</span>":"");if(de.dataset.html!==o){de.dataset.html=o,de.innerHTML=o;let r=de.querySelector("img");r&&(r.onload=r.onerror=()=>te(!0))}de.hidden=!o,yn(),document.title=x.title||"Slidetake";let a=String(x.theme||x.palette||"").toLowerCase();a?document.body.dataset.palette=a:delete document.body.dataset.palette,Ho()}function vt(){if(O&&O.themeKey&&!ko){let t=Z(O.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(ko||Z("slidetake:mode")||x.mode||"dark").toLowerCase()==="light"?"light":"dark"}function Ho(){let e=vt()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function Wo(){let e=vt()==="light"?"dark":"light";O&&O.themeKey?(Q(O.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):Q("slidetake:mode",e),Ho(),F.querySelector(".echarts-container, .diagram.d2")&&It(!0)}function tr(){let t=(x.camera||"").replace(/^\[|\]$/g,"").split(",").map(n=>n.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function rn(e){return!q&&e?Qn(e.camera):[]}function Le(e){return eo(rn(e),e&&e.frags?e.frags.length:0)}function Fo(){let e=Le(d.get(p));return e[Math.min(ee,e.length-1)]||{cam:0,frag:0}}function nr(){if(!p)return null;let e=rn(d.get(p));if(e.length)return e[Math.min(Fo().cam,e.length-1)];for(let t=h.indexOf(p)-1;t>=0;t--){let n=rn(d.get(h[t]));if(n.length)return n[n.length-1]}return null}function or(){let e={corner:(x.pip||"none").toLowerCase(),size:Ft(parseFloat(x.pip_size)||24),circle:(x.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(x.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};return st(e,nr()),st(e,fe),!Fe.includes(e.corner)&&(U||e.used)&&(e.corner="bottom-right"),e.flip&&Fe.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function yn(){let e=!z.hidden&&z.offsetWidth?z.getBoundingClientRect():null,t=Ie=or(),n=Fe.includes(t.corner);if(z.className=n?[t.corner,t.circle&&"circle",U&&"live",t.mirror&&"mirror",t.full&&"full"].filter(Boolean).join(" "):"",z.style.width=t.size+"%",z.hidden=!n||q||t.off,Qa.dataset.pip=z.hidden||t.full?"none":t.corner,z.hidden||De||!z.animate)return;let o="cubic-bezier(.65,0,.35,1)";if(!e){z.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let a=z.getBoundingClientRect();Math.abs(e.left-a.left)+Math.abs(e.top-a.top)+Math.abs(e.width-a.width)+Math.abs(e.height-a.height)<2||z.animate([{transformOrigin:"0 0",transform:"translate("+(e.left-a.left)+"px,"+(e.top-a.top)+"px) scale("+e.width/a.width+","+e.height/a.height+")"},{transformOrigin:"0 0",transform:"none"}],{duration:600,easing:o})}function ar(){let e=Ie;if(!e||z.hidden||e.full)return null;let t=T.clientWidth,n=T.clientHeight,o=16,a=t*e.size/100,r=e.circle?a:a*9/16,i=e.corner.includes("left")?o:t-o-a,s=e.corner.includes("top")?o:n-o-r;return{x0:i,y0:s,x1:i+a,y1:s+r}}function rr(){if(!Qe)return;if(q){zn(!0);return}let e=tr();ce=(ce+1)%e.length,fe=e[ce],yn(),R||Be("Camera: "+fe),!U&&!z.hidden?at():te()}function Uo(e){let t=Jn(e,{render:er});x=t.deck,d=t.nodes,yt();let n={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];qa.textContent=d.size+(d.size===1?" card":" cards")+" \xB7 "+n,Xe.textContent=t.errCount?t.errCount+" card(s) had errors":""}function qo(){ie=[...d.values()].filter(o=>!o.parent).map(o=>o.id);let e=0;function t(o,a){let r=d.get(o);if(r.depth=a,r.children.length===0)r._slot=e++;else{r.children.forEach(s=>t(s,a+1));let i=r.children.map(s=>d.get(s)._slot);r._slot=(Math.min(...i)+Math.max(...i))/2}}ie.forEach(o=>t(o,0)),h=[];function n(o){h.push(o),d.get(o).children.forEach(n)}return ie.forEach(n),Math.max(1,e)}function ir(){let e=[],t=[],n=[];return d.forEach(o=>{e[o.depth]=Math.max(e[o.depth]||0,o._h),t[o.depth]=Math.max(t[o.depth]||0,o._w),n[o.depth]=(n[o.depth]||0)+1}),{maxH:e,maxW:t,count:n,maxDepth:e.length-1}}function $o(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function sr(){let{maxH:e,maxDepth:t}=ir(),n=[0];for(let l=1;l<=t;l++)n[l]=n[l-1]+e[l-1]+Ka;let o=Ga-ze,a=[],r=(l,c)=>{let f=d.get(l);f.cx+=c,f.children.forEach(N=>r(N,c))},i=l=>{let c=d.get(l);a[c.depth]=Math.max(a[c.depth]??-1/0,c.cx+c._w/2),c.children.forEach(i)};function s(l){let c=d.get(l),f=a[c.depth]!==void 0?a[c.depth]+o:-1/0;c.children.length?(c.children.forEach(s),c.cx=(d.get(c.children[0]).cx+d.get(c.children[c.children.length-1]).cx)/2,c.cx-c._w/2<f&&r(l,f-(c.cx-c._w/2))):c.cx=(f===-1/0?0:f)+c._w/2,i(l)}ie.forEach(s),d.forEach(l=>{l.cy=n[l.depth]+l._h/2,$o(l)})}function lr(e){let t=Math.PI*2/e,n=32,o=[],a=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+n&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+n,r=Math.max(0,...[...d.values()].map(s=>s.depth)),i=0;for(let s=0;s<=r;s++){let l=[...d.values()].filter(f=>f.depth===s);if(!l.length)continue;let c=s===0?ie.length>1?Xa*.5:0:i+Va;for(let f=0;f<400&&(l.forEach(M=>{let b=(M._slot+.5)*t-Math.PI/2;M.cx=c*Math.cos(b),M.cy=c*Math.sin(b),$o(M)}),!!l.some((M,b)=>l.some((E,g)=>g>b&&a(M,E))||o.some(E=>a(M,E))));f++)c=c*1.02+10;i=c,o.push(...l)}}function dr(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)n.push(t.currentNode);n.forEach(o=>{let a=o.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!a)return;let r=o.previousSibling;for(;r&&r.nodeType===3&&!r.data.trim();)r=r.previousSibling;let i=r&&r.nodeType===1?r:o.parentElement;i&&Object.entries(He(a[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function Zt(e){let t=document.createElement("figure");t.className="media",e.replaceWith(t),t.appendChild(e);let n=e.getAttribute("alt");return n&&t.insertAdjacentHTML("beforeend","<figcaption>"+C(n)+"</figcaption>"),t}function cr(e,t){let n=document.createElement("figure");return n.className="media yt fragment yt-play"+(e.portrait?" portrait":""),n.innerHTML='<div class="frame"><iframe src="'+uo(e)+'" title="'+C(t||"YouTube video")+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'+(t?"<figcaption>"+C(t)+"</figcaption>":""),n}function Eo(e,t){let n=t<=4?t:t<=6?3:4;e.style.setProperty("--cols",n),e.style.setProperty("--rows",Math.ceil(t/n))}function ur(e,t){t.querySelectorAll("pre > code.language-svg").forEach(r=>{let i=document.createElement("img");i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(r.textContent.trim()),i.alt="";let s=document.createElement("p");s.appendChild(i),r.parentElement.replaceWith(s)}),t.querySelectorAll(":scope > p").forEach(r=>{let i=r.children.length===1?r.children[0]:null;if(!i)return;let s=i.tagName==="A"&&r.textContent.trim()===i.textContent.trim()?i.getAttribute("href"):i.tagName==="IMG"?i.getAttribute("src"):null,l=s&&po(s);l&&r.replaceWith(cr(l,i.tagName==="IMG"?i.getAttribute("alt"):""))}),t.querySelectorAll(":scope > ul, :scope > ol").forEach(r=>{let i=[...r.children];!i.length||!i.every(s=>s.querySelector("img")&&!s.textContent.trim())||(r.classList.add("gallery"),i.forEach(s=>{let l=s.querySelector("img");s.innerHTML="",s.appendChild(l),Zt(l)}),i.length>1&&i.every(s=>s.classList.contains("fragment"))?(r.classList.add("carousel"),i[0].classList.remove("fragment","fade-up"),i.forEach((s,l)=>{s.classList.replace("fade-up","current-visible");let c=s.querySelector("figcaption");c&&(c.dataset.count=l+1+" / "+i.length)})):Eo(r,i.length))}),t.querySelectorAll(":scope > p").forEach(r=>{if(!pr(r))return;let i=[...r.querySelectorAll("img")];if(i.length===1){r.replaceWith(i[0]),Zt(i[0]);return}let s=document.createElement("div");s.className="gallery grid",r.replaceWith(s),i.forEach(l=>{s.appendChild(l),Zt(l)}),Eo(s,i.length)});let n=[...t.children].filter(r=>!/^H[1-6]$/.test(r.tagName)&&!(r.nodeType===1&&r.tagName==="HR")),o=n.filter(r=>r.matches("figure.media"));o.length===1&&n.length===1&&e.classList.add("card-media"),n.length===1&&(n[0].matches("figure.media:not(.yt)")||n[0].matches(".gallery.carousel"))&&e.classList.add("card-bleed");let a=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);for(;a.nextNode();)if(/^\s*view\s*:\s*full\s*$/i.test(a.currentNode.data))e.classList.add("card-full");else if(o.length===1){e.classList.add("card-split",n.indexOf(o[0])===0?"media-first":"media-last");let r=document.createElement("div");r.className="split-text",n.filter(i=>i!==o[0]).forEach(i=>r.appendChild(i)),o[0].after(r),n.indexOf(o[0])!==0&&r.after(o[0])}t.querySelector(".gallery")&&e.classList.add("card-gallery")}function Yo(e,t){let n=e.querySelector("iframe");n&&n.contentWindow&&n.contentWindow.postMessage(JSON.stringify({event:"command",func:t,args:[]}),"*")}function hr(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)/^\s*steps\s*$/i.test(t.currentNode.data)&&n.push(t.currentNode);n.forEach(o=>{let a=o.nextSibling;for(;a&&a.nodeType!==1;)a=a.nextSibling;a&&/^(UL|OL)$/.test(a.tagName)&&a.querySelectorAll(":scope > li").forEach(r=>r.classList.add("fragment","fade-up"))})}function mr(e){let t=[...e.querySelectorAll(".fragment")].map((a,r)=>({e:a,i:r,k:a.dataset.fragmentIndex}));if(t.every(a=>a.k===void 0))return t.map(a=>[a.e]);let n=0;t.forEach(a=>{a.k=a.k===void 0?n:parseFloat(a.k),n=Math.max(n,a.k)+1}),t.sort((a,r)=>a.k-r.k||a.i-r.i);let o=[];return t.forEach((a,r)=>{r&&t[r-1].k===a.k?o[o.length-1].push(a.e):o.push([a.e])}),o}function vn(e,t,n){!e||!e.frags||(n&&e.el.classList.add("snap"),e.frags.forEach((o,a)=>o.forEach(r=>{let i=r.classList.contains("visible");r.classList.toggle("visible",a<t),r.classList.toggle("current-fragment",a===t-1),r.classList.contains("yt-play")&&i!==a<t&&!n&&Yo(r,a<t?"playVideo":"pauseVideo")})),n&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function fr(){try{return x.base?new URL(x.base,X||location.href):X?new URL(X):null}catch{return null}}function gr(e){let t=fr(),n=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(o=>{let a=o.hasAttribute("src")?"src":"href",r=o.getAttribute(a);if(!r||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(r))return;if(!t){a==="src"&&n++;return}let i=t;try{x.site&&(i=new URL(x.site,t))}catch{}o.setAttribute(a,new URL(r,r.startsWith("/")?i:t).href)}),n}function Ot(e){let t=e.el,n=t.querySelector(".body");t.classList.add("measuring"),n.style.zoom="";let o=ze;e.visual=!!n.querySelector("iframe, .echarts-container, pre > code.language-dot, pre > code.language-d2, pre > code.language-echarts, .diagram, figure.media"),e.visual&&(o=le);let a=t.classList.contains("card-full");if(t.classList.remove("img-portrait","img-landscape","img-overlay"),a&&(o=le),t.classList.contains("card-bleed")){let s=Math.max(0,...[...n.querySelectorAll("img")].map(l=>l.naturalWidth&&l.naturalHeight?l.naturalWidth/l.naturalHeight:0))||1.7777777777777777;if(a||Math.abs(s-16/9)<.08)t.classList.add("img-overlay"),o=le;else if(s<1){let l=Math.round(wo*s);t.classList.add("img-portrait"),t.style.setProperty("--img-w",l+"px"),o=Math.min(le,Math.max(Jt,l*2))}else t.classList.add("img-landscape"),o=Math.round(Math.max(ze,Math.min(le,(wo-Ya)*s))),t.style.setProperty("--img-h",Math.round(o/s)+"px")}else(n.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||n.querySelectorAll("img").length>=4)&&(o=Jt);let r=n.querySelectorAll("table");if(r.length){t.style.width=le+"px";let s=t.offsetWidth-n.clientWidth;r.forEach(l=>{o=Math.max(o,Math.min(Jt,Math.ceil(l.offsetWidth)+s+12))})}let i=n.querySelectorAll(".fragment.grow");if(i.length){t.style.width=o+"px";let s=t.offsetWidth-n.clientWidth;i.forEach(l=>{o=Math.max(o,Math.min(le,Math.ceil(l.offsetWidth*1.3)+s))})}t.style.width=o+"px",t.scrollWidth>o+2&&(t.style.width=(o=Math.min(le,t.scrollWidth+24))+"px"),n.scrollWidth>n.clientWidth+2&&(n.style.zoom=(n.clientWidth/n.scrollWidth).toFixed(3)),e._w=o,e._h=t.offsetHeight||an,t.classList.remove("measuring")}function br(){clearTimeout(So),So=setTimeout(()=>{d.forEach(Ot),et(),te(!0)},200)}function wr(){Object.entries(xr).forEach(([e,t])=>{let n={axisLine:{lineStyle:{color:t.line}},axisTick:{lineStyle:{color:t.line}},axisLabel:{color:t.muted},splitLine:{lineStyle:{color:t.split}},nameTextStyle:{color:t.muted}};echarts.registerTheme("slidetake-"+e,{color:t.palette,backgroundColor:"transparent",textStyle:{color:t.text,fontFamily:"'IBM Plex Sans', sans-serif"},title:{textStyle:{color:t.text},subtextStyle:{color:t.muted}},legend:{textStyle:{color:t.text}},tooltip:{backgroundColor:t.tip,borderColor:t.line,textStyle:{color:t.text}},categoryAxis:n,valueAxis:n,logAxis:n,timeAxis:n,line:{symbolSize:6,lineStyle:{width:2.5}}})})}function sn(e){return Qt[e]||(Qt[e]=new Promise((t,n)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>{delete Qt[e],n(new Error("could not load "+e))},document.head.appendChild(o)}))}async function Lr(){let e=ye,t=[...F.querySelectorAll(".node pre > code.language-dot")];F.querySelectorAll(".node pre > code.language-echarts").forEach(r=>{let i=document.createElement("div");i.className="echarts-container",i.dataset.chart=r.textContent,r.parentElement.replaceWith(i)});let n=[...F.querySelectorAll(".node .echarts-container[data-chart]")],o=[...F.querySelectorAll(".node pre > code.language-d2")];if(!t.length&&!n.length&&!o.length)return;let a=[];if(t.length)try{if(await sn(yr),en=en||await Viz.instance(),e!==ye)return;t.forEach(r=>{let i=document.createElement("div");i.className="diagram";try{i.appendChild(en.renderSVGElement(r.textContent))}catch(s){i.className="diagram err",i.textContent="Diagram error: "+s.message}r.parentElement.replaceWith(i)})}catch{a.push("diagrams")}if(o.length)try{if(!mt){let i=await import(kr);mt=new i.D2}if(e!==ye)return;let r=Er[vt()];for(let i of o){let s=document.createElement("div");s.className="diagram d2";try{let l=await mt.compile(Sr(i.textContent));s.innerHTML=await mt.render(l.diagram,{...l.renderOptions||{},themeOverrides:r,darkThemeOverrides:r})}catch(l){s.className="diagram err",s.textContent="Diagram error: "+(l.message||l)}if(e!==ye)return;i.parentElement.replaceWith(s)}}catch{a.push("D2 diagrams")}if(n.length)try{if(await sn(vr),e!==ye)return;echarts._slidetakeThemes||(wr(),echarts._slidetakeThemes=!0),n.forEach(r=>{let i;try{i=JSON.parse(r.dataset.chart)}catch{r.textContent="Chart data is not valid JSON.";return}echarts.init(r,"slidetake-"+(vt()==="light"?"light":"dark"),{renderer:"svg"}).setOption(Object.assign({backgroundColor:"transparent",animation:!De},i))})}catch{a.push("charts")}e===ye&&(a.length&&(Xe.textContent="Could not load the "+a.join(" and ")+" renderer (offline?)"),d.forEach(Ot),et(),te(!0))}function Tr(){let e=[];return h.forEach(t=>{let n=Ze(t),o=e[e.length-1];o&&o.sec===n?o.ids.push(t):e.push({sec:n,ids:[t]})}),e}function Cr(){let n=0,o=0,a=0;Tr().forEach((r,i)=>{let s=Math.max(...r.ids.map(f=>d.get(f)._h));i&&(n+=a/2+120+s/2);let l=o,c=o;r.ids.forEach((f,N)=>{let M=d.get(f);N&&(l+=90+M._w/2),M.cx=l,M.cy=n,c=l,l+=M._w/2}),o=c,a=s})}function Mr(){d.forEach(e=>{e.cx=0,e.cy=0})}function Go(){ye++,window.echarts&&F.querySelectorAll(".echarts-container").forEach(n=>{let o=echarts.getInstanceByDom(n);o&&o.dispose()}),F.querySelectorAll("div.node").forEach(n=>n.remove());let e=qo(),t=0;d.forEach(n=>{let o=document.createElement("div");o.className="node",o.tabIndex=0,o.dataset.id=n.id;let a=n.parent?zt(n.id).slice(0,-1).map(i=>d.get(i).title).join(" / "):"";o.innerHTML=(a?'<div class="crumb">'+C(a)+"</div>":"")+'<div class="body">'+n.html+"</div>"+(n.err?'<div class="err-badge">!</div>':"");let r=o.querySelector(".body");dr(r),hr(r),ur(o,r),r.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=gr(r),n.frags=mr(r),r.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",br,{once:!0})}),o.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));d.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),u.active||P(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),o.addEventListener("click",()=>{u.active||P(n.id)}),o.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===o&&P(n.id)}),F.appendChild(o),n.el=o,vn(n,n.frags.length)}),t&&!Xe.textContent&&(Xe.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),d.forEach(Ot),et(e),Lr()}function et(e){e===void 0&&(e=qo()),A==="radial"?lr(e):A==="path"?Cr():A==="focus"?Mr():sr(),F.classList.toggle("focus",A==="focus"),d.forEach(t=>{let n=t.el.style;n.setProperty("--cx",t.cx),n.setProperty("--cy",t.cy)}),Br(),_e(),En()}function Br(){let e="";if(A==="focus"){Xt.innerHTML="";return}if(A==="path"){for(let t=1;t<h.length;t++){let n=d.get(h[t-1]),o=d.get(h[t]);e+='<path data-from="'+n.id+'" data-to="'+o.id+'" d="M '+n.cx+" "+n.cy+" L "+o.cx+" "+o.cy+'"/>'}Xt.innerHTML=e;return}d.forEach(t=>{if(!t.parent)return;let n=d.get(t.parent);if(A==="radial")e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+n.cy+" L "+t.cx+" "+t.cy+'"/>';else{let o=n.cy+n._h/2,a=t.cy-t._h/2,r=o+(a-o)/2;e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+o+" L "+n.cx+" "+r+" L "+t.cx+" "+r+" L "+t.cx+" "+a+'"/>'}}),Xt.innerHTML=e}function zt(e){let t=[],n=e;for(;n;)t.unshift(n),n=d.get(n).parent;return t}function Ae(){let e=T.clientWidth,t=T.clientHeight;F.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+S.zoom+") translate("+-S.x+"px,"+-S.y+"px)",ea()}function xn(){Ke&&(Ke.kill(),Ke=null)}function ln(e,t){if(xn(),t||De||!window.gsap){Object.assign(S,e),Ae();return}let n=T.clientWidth,o=Math.hypot(e.x-S.x,e.y-S.y),a=e.zoom,r=gsap.timeline({onUpdate:Ae,onComplete:()=>{Ke=null}}),{zoom:i,...s}=e,l=o*Math.min(S.zoom,a),c=Math.max(.55,Math.min(1.3,.55+l/n*.3));if(r.to(S,{...s,duration:c,ease:"power2.inOut"},0),l>n*1.2){let f=Math.max(.06,Math.min(S.zoom,a,n*.9/(o+ze)));r.to(S,{zoom:f,duration:c/2,ease:"sine.out"},0).to(S,{zoom:a,duration:c/2,ease:"sine.in"},c/2)}else r.to(S,{zoom:a,duration:c,ease:"power2.inOut"},0);Ke=r}function Or(){let e=T.getBoundingClientRect(),t=14,n=[];if(!de.hidden&&de.offsetWidth){let a=de.getBoundingClientRect();n.push({x0:a.left-e.left-t,y0:a.top-e.top-t,x1:a.right-e.left+t,y1:a.bottom-e.top+t})}let o=ar();return o&&n.push({x0:o.x0-t,y0:o.y0-t,x1:o.x1+t,y1:o.y1+t}),n}function zr(){let e=T.clientWidth,t=T.clientHeight,n=[{x0:16,y0:R?20:56,x1:e-16,y1:t-(R?20:74)}];return Or().forEach(o=>{let a=[];n.forEach(r=>{if(o.x1<=r.x0||o.x0>=r.x1||o.y1<=r.y0||o.y0>=r.y1){a.push(r);return}[{...r,x1:Math.min(r.x1,o.x0)},{...r,x0:Math.max(r.x0,o.x1)},{...r,y1:Math.min(r.y1,o.y0)},{...r,y0:Math.max(r.y0,o.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&a.push(i)})}),a.length&&(n=a)}),n}function dn(e,t,n){let o=T.clientWidth,a=T.clientHeight,r=null;return zr().forEach(i=>{let s=n*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!r||s>r.zoom)&&(r={zoom:s,sx:(i.x0+i.x1)/2-o/2,sy:(i.y0+i.y1)/2-a/2})}),r}function Ko(e,t,n,o){return{x:e-n.sx/o,y:t-n.sy/o}}function Se(e,t){let n=d.get(e);if(!n)return;if(document.body.classList.toggle("full-card",n.el.classList.contains("card-full")),n.el.classList.contains("card-full")){let l=Math.min(T.clientWidth/n._w,T.clientHeight/n._h);ln({x:n.cx,y:n.cy,zoom:l},t);return}let o=dn(n._w,n._h,Je),a=Ze(e),r=h.filter(l=>Ze(l)===a&&!d.get(l).visual).map(l=>{let c=d.get(l);return dn(c._w,c._h,Je).zoom}).sort((l,c)=>l-c),i=r.length?r[Math.floor((r.length-1)/2)]:o.zoom,s=Math.max(.2,Math.min(5,o.zoom,i));ln(Object.assign(Ko(n.cx,n.cy,o,s),{zoom:s}),t)}function tt(e){document.body.classList.remove("full-card");let t=[...d.values()];if(!t.length)return;let n=T.clientWidth,o=T.clientHeight,a=Math.min(...t.map(f=>f.cx-f._w/2)),r=Math.max(...t.map(f=>f.cx+f._w/2)),i=Math.min(...t.map(f=>f.cy-f._h/2)),s=Math.max(...t.map(f=>f.cy+f._h/2)),l=dn(r-a,s-i,.94),c=Math.max(.05,Math.min(1,l.zoom));ln(Object.assign(Ko((a+r)/2,(i+s)/2,l,c),{zoom:c}),e)}function te(e){p&&d.has(p)?Se(p,e):tt(e)}function _e(){let e=p?zt(p):[];d.forEach(t=>{let n=t.el;n.classList.toggle("current",t.id===p),n.classList.toggle("active-path",e.includes(t.id))}),F.querySelectorAll("#connectors path").forEach(t=>{let n=A==="path"?!!p&&h.indexOf(t.dataset.to)<=h.indexOf(p):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",n)}),Rr(e),Xo()}function Vo(){return Gn(new URLSearchParams(location.search).get("duration")??x.duration)}function Ir(){return R&&Vo()>0&&(!u.active||/^always$/i.test(x.timer||""))}function xt(){let e=Ir()&&pe.start>0;if(xe.classList.toggle("timed",e),!e){xe.classList.remove("over");return}let n=(u.active&&u.t0?St():performance.now()-pe.start)/Vo();xe.firstChild.style.width=Math.min(100,n*100)+"%",xe.classList.toggle("over",n>=1)}function Ar(){pe.start=performance.now(),clearInterval(pe.timer),pe.timer=setInterval(xt,1e3),xt()}function Pr(){clearInterval(pe.timer),pe.timer=null,pe.start=0,xt()}function Xo(){let e=R&&h.length>1&&!/^(off|no|false)$/i.test(x.progress||"");if(xe.classList.toggle("show",e),!e)return;xt();let t=h.indexOf(p),n=0,o=0;h.forEach((a,r)=>{let i=Le(d.get(a)).length;n+=i,r<t?o+=i:r===t&&(o+=Math.min(ee,i-1)+1)}),xe.lastChild.style.width=(n?o/n*100:0)+"%"}function Rr(e){xo.innerHTML=e.map((t,n)=>(n>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===p?" here":"")+'" data-id="'+C(t)+'">'+C(d.get(t).title)+"</button>").join(""),xo.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{u.active||P(t.dataset.id)}))}function nt(e){let t=d.get(p);t&&(vn(t,Fo().frag,e),yn(),(z.hidden||!Ie||!Ie.full)&&jr(t),kn(t))}function _r(e){return!h.length||e.id!==h[0]&&e.id!==h[h.length-1]||e.el.querySelector("[data-gsap], .title-scramble")?null:[...e.el.querySelector(".body").children].filter(t=>!t.classList.contains("fragment"))}function jr(e){if(e._played||!window.gsap||De)return;e._played=!0;let t=_r(e);if(t&&t.length){e._auto=t;let[n,...o]=t;/^H[1-3]$/.test(n.tagName)&&!n.children.length?(n.classList.add("auto-scramble"),Lo(n)):o.unshift(n),gsap.from(o,{opacity:0,y:24,duration:.7,ease:"power2.out",delay:.5,stagger:.45})}e.el.querySelectorAll("[data-gsap]").forEach(n=>{let o;try{o=JSON.parse(n.dataset.gsap)}catch{return}let a={duration:o.duration??1,delay:o.delay??0,ease:o.ease||"power2.out"};o.to?gsap.fromTo(n,o.from||{},Object.assign({},o.to,a)):o.from&&gsap.from(n,Object.assign({},o.from,a))}),e.el.querySelectorAll(".title-scramble").forEach(Lo)}function wn(e){!e||!e._played||(e._played=!1,window.gsap&&(e._auto&&(e._auto.forEach(t=>{gsap.killTweensOf(t),gsap.set(t,{clearProps:"opacity,transform"})}),e._auto=null),e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let n={};try{n=JSON.parse(t.dataset.gsap)}catch{}let o=new Set(Object.keys(Object.assign({},n.from,n.to)).map(a=>Dr.includes(a)?"transform":a));o.size&&gsap.set(t,{clearProps:[...o].join(",")})}),e.el.querySelectorAll(".title-scramble, .auto-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function Lo(e){let t=e.dataset.text||(e.dataset.text=e.textContent),n=Array.from(t),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",a={p:0};e._scramble=gsap.to(a,{p:1,duration:1.4,ease:"none",onUpdate(){let r=Math.floor(a.p*n.length);e.textContent=n.map((i,s)=>s<r||/\s/.test(i)?i:o[Math.random()*o.length|0]).join("")},onComplete(){e.textContent=t}})}function kn(e){clearTimeout(Pe),!(!R||!e||!e.autoslide||u.active&&(!u.t0||u.paused))&&(Pe=setTimeout(()=>{p===e.id&&Re(1)},e.autoslide))}function Jo(e){let t=e&&e!==h[0]?e:"";try{y&&y.kind==="share"?history.replaceState(null,"",location.pathname+location.search+Gt(y.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function P(e,t,n){if(!d.has(e))return;if(e!==p){fe=null,ce=-1,ee=n?Le(d.get(e)).length-1:0;let r=d.get(p);r&&A==="focus"&&!t&&(r.el.classList.add("leaving"),setTimeout(()=>r.el.classList.remove("leaving"),600)),Zo()}let o=e!==p;if(p=e,clearTimeout(V),V=null,o&&A==="focus"&&!t&&!De){let r=d.get(e).el;r.classList.add("entering"),r.offsetWidth,r.classList.remove("entering")}nt(o),o&&Mn("slide",e);let a=d.get(e);o&&a.mapFirst&&!n&&!t&&A!=="focus"?(tt(),V=setTimeout(()=>{V=null,p===e&&Se(e)},1900)):Se(e,t),_e(),En(),Jo(e)}function Zo(){let e=d.get(p);e&&(e.el.querySelectorAll("figure.yt").forEach(t=>Yo(t,"pauseVideo")),vn(e,e.frags.length,!0),wn(e))}function Nr(){if(!p&&we&&d.has(we)){Qo();return}p&&(we=p),A==="focus"&&ke("path"),Zo(),clearTimeout(Pe),p=null,_e(),En(),tt(),Jo(null)}function Qo(){if(V)return clearTimeout(V),V=null,Se(p),!0;if(!p&&we&&d.has(we)){let e=we;return we=null,P(e),!0}return!1}function Re(e){if(!p){h.length&&P(h[e>0?0:h.length-1]);return}if(V&&e>0){clearTimeout(V),V=null,Se(p);return}let t=Le(d.get(p)),n=Math.min(ee,t.length-1)+e;if(n>=0&&n<t.length){ee=n,fe=null,ce=-1,nt(),!U&&!z.hidden&&Ie.used?at():te(),_e();return}let o=h.indexOf(p)+e;o>=0&&o<h.length&&P(h[o],!1,e<0)}function Hr(){let e=d.get(p);e&&e.parent&&P(e.parent)}function Wr(){let e=d.get(p);e&&e.children.length?P(e.children[0]):!p&&h.length&&P(h[0])}function En(){let e=[...d.values()];if(!e.length){on.innerHTML="",ae=null;return}$a.textContent="map";let t=g=>g.cx,n=g=>g.cy,o=Math.min(...e.map(t))-ze/2,a=Math.max(...e.map(t))+ze/2,r=Math.min(...e.map(n))-an/2,i=Math.max(...e.map(n))+an/2,s=16,l=180,c=130,f=Math.min((l-2*s)/Math.max(1,a-o),(c-2*s-6)/Math.max(1,i-r)),N=l/2-(o+a)/2*f,M=c/2+5-(r+i)/2*f,b=p?zt(p):[],E="";e.forEach(g=>{if(!g.parent)return;let B=d.get(g.parent);E+='<line x1="'+(t(B)*f+N)+'" y1="'+(n(B)*f+M)+'" x2="'+(t(g)*f+N)+'" y2="'+(n(g)*f+M)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(g=>{let B=g.id===p?"var(--accent)":b.includes(g.id)?"var(--accent-teal)":"var(--node-border)";E+='<circle data-id="'+C(g.id)+'" cx="'+(t(g)*f+N)+'" cy="'+(n(g)*f+M)+'" r="'+(g.id===p?4:3)+'" fill="'+B+'"><title>'+C(g.title)+"</title></circle>"}),E+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',on.innerHTML=E,ae={s:f,ox:N,oy:M},ea()}function ea(){let e=document.getElementById("mm-viewport");if(!e||!ae)return;let t=T.clientWidth/S.zoom,n=T.clientHeight/S.zoom;e.setAttribute("x",(S.x-t/2)*ae.s+ae.ox),e.setAttribute("y",(S.y-n/2)*ae.s+ae.oy),e.setAttribute("width",Math.max(2,t*ae.s)),e.setAttribute("height",Math.max(2,n*ae.s))}function It(e){Uo(J.value),p&&!d.has(p)&&(p=null),Go(),p?P(p,e):h.length?P(h[0],e):(p=null,tt(!0))}function ke(e,t){A=e,Q("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(n=>n.classList.toggle("active",n.dataset.mode===e)),d.size&&(!t&&!De&&(F.classList.add("morph"),setTimeout(()=>F.classList.remove("morph"),700)),et(),Ae(),p?Se(p,t):tt(t))}function ta(e){return Math.max(.04,Math.min(5,e))}function Fr(e){Je=Math.round(Math.max(Ja,Math.min(Za,e))*100)/100,Q("slidetake:slideSize",Je),p&&Se(p)}function Co(e){p?Fr(Je+e*.1):na(e>0?1.2:1/1.2)}function na(e,t,n){xn();let o=ta(S.zoom*e);if(t!==void 0){let a=T.getBoundingClientRect(),r=t-a.left-a.width/2,i=n-a.top-a.height/2;S.x+=r/S.zoom-r/o,S.y+=i/S.zoom-i/o}S.zoom=o,Ae()}function At(){O||(me.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!me.classList.contains("collapsed")))}function ge(e){R=e,document.body.classList.toggle("presenting",e),va();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!p&&h.length&&P(h[0]);let n=x.camera||[...d.values()].some(o=>o.camera);e&&n&&!U&&!q&&at(),e?kn(d.get(p)):clearTimeout(Pe),e?Ar():Pr(),Xo()}function St(){return(u.paused?u.pauseAt:performance.now())-u.t0-u.pausedMs}function Pt(e){e.classList.add("open")}function Tn(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function Yr(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,n,...o]=e.split(":");return wt.value=t||"localhost",kt.value=n||"4455",Et.value=o.join(":"),!0}try{let t=JSON.parse(Z("slidetake:obs")||"null");t&&(wt.value=t.host||"localhost",kt.value=t.port||"4455",Et.value=t.password||"",Sn.checked=!0)}catch{}return!1}function ra(){if(Sn.checked)Q("slidetake:obs",JSON.stringify({host:wt.value.trim(),port:kt.value.trim(),password:Et.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function $e(e,t){Io.textContent=e,Io.className=t||""}function Kr(e){return location.protocol==="https:"&&!Gr(e)}async function ia(){let e=wt.value.trim()||"localhost",t="ws://"+e+":"+(kt.value.trim()||"4455");if(Kr(e)){ve=!1,Ve.disabled=!0,$e(Vr,"err");return}$e("Connecting to "+t+"\u2026");try{await sn(Ur);let n=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(W)try{await W.disconnect()}catch{}W=new n,W.on("ConnectionClosed",()=>{ve=!1,$e("Disconnected from OBS","err"),Ve.disabled=!0}),W.on("RecordStateChanged",a=>{a.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&Ee&&(Ee(),Ee=null),a.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&u.active&&u.withObs&&!u.finishing&&Rt("Stopped in OBS")});let o=await W.connect(t,Et.value||void 0);ve=!0;try{let a=await W.call("GetVideoSettings");a&&a.fpsNumerator&&a.fpsDenominator&&(oa=a.fpsNumerator/a.fpsDenominator)}catch{}$e("Connected"+(o&&o.obsWebSocketVersion?" \xB7 OBS WebSocket "+o.obsWebSocketVersion:""),"ok"),ra()}catch(n){ve=!1,$e("Could not connect ("+(n&&n.message||n)+"). Is OBS running with its WebSocket server on, and is the password right?","err")}Ve.disabled=!ve}function Xr(){let e=document.getElementById("rec-screen"),t=screen.width,n=screen.height;if(Math.abs(t/n-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+n+"), right for YouTube.</span>";return}let o=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[a,r]=o.reduce((s,l)=>Math.abs(l[1]-t/n)<Math.abs(s[1]-t/n)?l:s),i=Math.abs(r-t/n)<.005?a:"about "+a;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+n+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function pn(){if(!Qe)return;let e=h.reduce((n,o)=>n+Le(d.get(o)).length,0),t=x.camera||[...d.values()].some(n=>n.camera);document.getElementById("rec-deck-info").innerHTML=C(x.title||(ie[0]?d.get(ie[0]).title:"This deck"))+" \xB7 "+h.length+" slides \xB7 "+e+" presses"+(t&&q?'<br><span class="warn">The camera is off. Press C first if this take should include your webcam.</span>':""),Ve.disabled=!ve,ti(),Xr(),Pt(qr)}async function sa(e){if(u.active||!h.length)return;Tn(),Object.assign(u,{active:!0,withObs:e,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null}),document.body.classList.add("recording"),ba();let t=document.getElementById("rec-layout").value;t!=="current"&&t!==A&&ke(t,!0),R||ge(!0),p===h[0]&&(ee=0,fe=null,ce=-1),P(h[0],!0);for(let o=3;o>0;o--)if(ft.querySelector(".num").textContent=o,ft.classList.add("show"),await Ln(1e3),!u.active)return;if(ft.classList.remove("show"),await aa(),e){let o=new Promise(a=>{Ee=a,setTimeout(()=>{Ee&&(Ee(),Ee=null)},2500)});try{await W.call("StartRecord")}catch(a){Cn("OBS could not start recording: "+(a&&a.message||a));return}if(await o,!u.active)return}u.counting=!1,u.t0=performance.now();let n=d.get(p);wn(n),nt(!0),Mn("slide",p)}function Cn(e){u.active=!1,u.counting=!1,ft.classList.remove("show"),document.body.classList.remove("recording"),R&&ge(!1),Be(e)}function Mn(e,t){if(!u.active||!u.t0||u.finishing)return;let n=d.get(t),o={id:t,title:n?n.title:t,retake:e==="retake",t:Math.round(St()),obsT:null};u.events.push(o),u.withObs&&ve&&(W.call("GetRecordStatus").then(a=>{a&&typeof a.outputDuration=="number"&&(o.obsT=a.outputDuration)}).catch(()=>{}),n&&W.call("CreateRecordChapter",{chapterName:(o.retake?"RETAKE \xB7 ":"")+n.title}).catch(()=>{}))}function Jr(e){let t=e.key;if((Bo.includes(t)||Oo.includes(t)||zo.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){u.counting?Cn("Take cancelled"):Rt("Stopped early");return}if(!(u.counting||u.finishing)){if(zo.includes(t)){ei();return}u.paused||(Bo.includes(t)?Zr():Oo.includes(t)&&Qr())}}function Zr(){let e=Le(d.get(p));Math.min(ee,e.length-1)>=e.length-1&&h.indexOf(p)===h.length-1?Rt():Re(1)}function Qr(){let e=d.get(p);e&&(Mn("retake",p),ee=0,fe=null,ce=-1,wn(e),nt(!0),!U&&!z.hidden&&Ie.used?at():te(),_e())}async function ei(){u.t0&&(u.paused?(cn.classList.remove("show"),await aa(),u.withObs&&await W.call("ResumeRecord").catch(()=>{}),u.pausedMs+=performance.now()-u.pauseAt,u.paused=!1,kn(d.get(p))):(u.paused=!0,u.pauseAt=performance.now(),clearTimeout(Pe),u.withObs&&await W.call("PauseRecord").catch(()=>{}),cn.classList.add("show")))}async function Rt(e){if(!u.active||u.finishing)return;if(u.counting){Cn("Take cancelled");return}u.finishing=!0,clearTimeout(Pe),u.paused&&(u.pausedMs+=performance.now()-u.pauseAt,u.paused=!1,cn.classList.remove("show"));let t=Math.round(St()),n=null;if(u.withObs){await Ln(1200),t=Math.round(St());try{let a=await W.call("GetRecordStatus");a&&typeof a.outputDuration=="number"&&(n=a.outputDuration)}catch{}try{let a=await W.call("StopRecord");u.outputPath=a&&a.outputPath}catch(a){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(a&&a.message||a)+")"}}u.active=!1,u.finishing=!1,document.body.classList.remove("recording"),R&&ge(!1);let o={key:Dt(),deckTitle:x.title||d.get(h[0]).title,date:new Date().toISOString(),withObs:u.withObs,outputPath:u.outputPath,reason:e||"",total:t,totalObs:n,fps:oa,events:u.events.map(a=>({id:a.id,title:a.title,retake:a.retake,t:a.t,obsT:a.obsT})),picks:{}};Bn(o),ma(o)}function Dt(){return Te(x.title||(h[0]?d.get(h[0]).title:"deck"))}function la(){try{return JSON.parse(Z("slidetake:sessions")||"[]")}catch{return[]}}function Bn(e){let t=la().filter(n=>n.date!==e.date);t.unshift(e),Q("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function ti(){let e=document.getElementById("rec-sessions"),t=la().filter(n=>n.key===Dt());e.innerHTML=t.length?"<h3>Earlier takes of this deck</h3>"+t.map((n,o)=>'<div class="row"><button class="btn small" data-session="'+o+'">Review</button><span>'+C(new Date(n.date).toLocaleString())+" \xB7 "+K(n.totalObs??n.total)+(n.withObs?"":" \xB7 rehearsal")+(n.outputPath?" \xB7 "+C(Ce(n.outputPath)):"")+"</span></div>").join(""):"",e.querySelectorAll("[data-session]").forEach(n=>n.onclick=()=>{Tn(),ma(t[+n.dataset.session])})}function Ze(e){let t=d.has(e)?zt(e):[e];return t[Math.min(1,t.length-1)]}function da(e,t){let n=Ze(e);return{sec:n,title:d.has(n)?d.get(n).title:t}}function ua(){let e=Object.keys(x).filter(t=>t==="tags"||/_tags$/.test(t)).flatMap(t=>[].concat(x[t])).filter(t=>typeof t=="string");return[...new Set(e.map(t=>t.trim()).filter(Boolean))]}function ni(){return[].concat(x.related||[]).map(e=>{let t=String(e).match(/^\[([^\]]+)\]\(([^)]+)\)$/),n=String(e).split("|");return t?t[1]+": "+t[2]:n.length===2?n[0].trim()+": "+n[1].trim():String(e)})}function oi(){if(x.permalink||x.url)return x.permalink||x.url;let e=x.site||Z("slidetake:site");if(!e||!X)return"";try{let t=new URL(X).pathname.replace(/\/index\.md$/i,"/").replace(/\.md$/i,"/");return new URL(t,e).href}catch{return""}}function ha(e){let t=ca(e),n=document.getElementById("rv-link").value.trim(),o=ni(),a=ua(),r=[];x.summary&&r.push(x.summary),n&&r.push("\u{1F4D1} Slides: "+n),t.lines.length>=3&&r.push(`Chapters
`+t.lines.join(`
`)),o.length&&r.push(`Related
`+o.map(i=>"\u2022 "+i).join(`
`)),a.length&&r.push(a.slice(0,3).map(i=>"#"+i.replace(/[^\p{L}\p{N}]+/gu,"")).join(" ")),document.getElementById("rv-yt-desc").value=r.join(`

`),document.getElementById("rv-chapters-note").textContent=(t.dropped?t.dropped+" section"+(t.dropped>1?"s were":" was")+" under 10 seconds and folded into the chapter before, as YouTube requires. ":"")+(t.lines.length<3?"YouTube needs at least three chapters, so none are listed. ":"")+"Final length "+K(t.length)+"."}function ma(e){j=e,H=null;let t=Ue(e),n=e.events.filter(a=>a.retake).length;document.getElementById("rv-title").textContent=(e.withObs?"Review the take \xB7 ":"Rehearsal \xB7 ")+e.deckTitle,document.getElementById("rv-info").textContent=[e.reason,new Date(e.date).toLocaleString(),(e.withObs?"recorded ":"ran ")+K(e.totalObs??e.total),t.size+" slides",n?n+" retake"+(n>1?"s":""):"no retakes",e.outputPath?"saved to "+e.outputPath:e.withObs?"":"nothing was recorded"].filter(Boolean).join(" \xB7 "),document.getElementById("rv-file").textContent=e.outputPath?" ("+Ce(e.outputPath)+")":"",document.getElementById("rv-yt-title").value=e.deckTitle;let o=ht(e);Lt.value=[...Lt.options].reduce((a,r)=>Math.abs(r.value-o)<Math.abs(a.value-o)?r:a).value,document.getElementById("rv-yt-tags").value=ua().join(", "),document.getElementById("rv-link").value=oi(),I.src&&ue!==Ce(e.outputPath)&&e.outputPath&&(I.removeAttribute("src"),I.load(),ue=""),document.getElementById("rv-novideo").hidden=!!I.src,_t(),Pt($r),si(e)}function _t(){let e=j,t=document.getElementById("rv-list"),n=null;t.innerHTML=[...Ue(e).values()].map(o=>{let a=e.picks[o.id]??o.takes.length,r=Ze(o.id),i=r!==n;n=r;let s=o.takes.map(l=>'<button class="rv-chip'+(a===l.no?" on":"")+'" data-id="'+C(o.id)+'" data-take="'+l.no+'">'+(o.takes.length>1?"Take "+l.no+" \xB7 ":"")+K(l.end-l.start)+"</button>").join("")+'<button class="rv-chip skip'+(a===0?" on":"")+'" data-id="'+C(o.id)+'" data-take="0">Leave out</button>';return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+C(o.title)+"<small>"+K(o.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(o=>o.onclick=()=>{e.picks[o.dataset.id]=+o.dataset.take,Bn(e),_t();let a=Ue(e).get(o.dataset.id),r=a&&a.takes[+o.dataset.take-1];r&&Ct([{start:r.start,end:r.end,title:a.title+(a.takes.length>1?" \xB7 take "+r.no:"")}])}),document.getElementById("rv-ffmpeg").value=pa(e,document.getElementById("rv-mode").value),ha(e)}function Ct(e){if(!I.src){Tt=e,$.textContent=hn?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.";return}Tt=null,H={ranges:e,i:0},$.textContent="\u25B6 "+e[0].title;let t=()=>{I.currentTime=e[0].start/1e3,I.play().catch(n=>{n&&n.name!=="AbortError"&&($.textContent="Could not play: "+n.message)})};I.readyState>=1?t():I.addEventListener("loadedmetadata",t,{once:!0})}function fa(e){return new Promise((t,n)=>{let o=indexedDB.open(e||"slidetake",1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>t(o.result),o.onerror=()=>n(o.error)})}async function ai(e){let t=async n=>{let o=await fa(n);return await new Promise(a=>{let r=o.transaction("kv").objectStore("kv").get(e);r.onsuccess=()=>a(r.result),r.onerror=()=>a(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function ri(e,t){try{(await fa()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function jt(e){hn=!0;try{return await ii(e)}finally{hn=!1}}async function ii(e){let t=await e.getFile();for(let n=0;n<10;n++){await new Promise(a=>setTimeout(a,1e3));let o=await e.getFile();if(o.size===t.size&&o.lastModified===t.lastModified)return o;t=o}return t}function ot(e,t,n){I.src&&URL.revokeObjectURL(I.src),Ye=t||null,n||(un=0),I.src=URL.createObjectURL(e),ue=e.name,document.getElementById("rv-novideo").hidden=!0,$.textContent="Loaded "+e.name+". Click a take to preview it.",Tt?Ct(Tt):n&&H&&Ct(H.ranges.slice(H.i)),j&&(document.getElementById("rv-ffmpeg").value=pa(j,document.getElementById("rv-mode").value))}async function si(e){let t=Ce(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(ue===t&&I.src))try{let n=await ai("obs-folder");if(!n||await n.queryPermission({mode:"read"})!=="granted")return;let o=await n.getFileHandle(t);$.textContent="Opening "+t+"\u2026",ot(await jt(o),o)}catch{}}function Be(e,t){u.active||(gt.textContent=e,gt.classList.add("show"),clearTimeout(mn),t||(mn=setTimeout(()=>gt.classList.remove("show"),9e3)))}function ba(){clearTimeout(mn),gt.classList.remove("show")}function nn(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function ya(){U&&U.getTracks().forEach(t=>t.stop()),U=null;let e=z.querySelector("video");e&&e.remove()}async function at(){if(!(U||q)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){Be("Camera not available on this page."+nn());return}if(re.disabled)return;re.disabled=!0,Be("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{U=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),ba()}catch(t){let n=t&&t.name;Be(n==="NotAllowedError"||n==="SecurityError"?"Camera access was blocked."+nn():n==="NotFoundError"||n==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":n==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(n?" ("+n+")":"")+"."+nn());return}finally{re.disabled=!1,On()}U.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{ya(),yt(),te()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=U,z.appendChild(e)}yt(),te()}}function On(){re.querySelector("svg")||(re.innerHTML=li+'<span class="lbl"> Camera</span>'),re.classList.toggle("on",!q),re.setAttribute("aria-pressed",String(!q)),re.title=q?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function zn(e){e&&!Qe||(q=!e,q&&ya(),fe=null,ce=-1,ee=Math.min(ee,Math.max(0,Le(d.get(p)).length-1)),On(),yt(),nt(),_e(),te(),R||Be(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&at())}function va(){document.body.classList.remove("idle"),clearTimeout(Ao),R&&(Ao=setTimeout(()=>document.body.classList.add("idle"),2e3))}function Mt(e,t){Oe.textContent=e,Oe.classList.add("show"),clearTimeout(Ro),Ro=setTimeout(()=>Oe.classList.remove("show"),t||2500)}function fn(e,{keepObs:t=!0,keepEdit:n=!0,slide:o=""}={}){let a=new URL(oo(e),location.origin);return new URLSearchParams(location.search).forEach((r,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!n||a.searchParams.set(i,r)}),o&&(a.hash=o),a.href.replace(a.pathname,a.pathname.replace(/%40/g,"@"))}async function ci(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(y.kind==="source")return{link:fn(y.source,t),inside:!1};if(y.kind==="copy"&&pt(k)&&["url","gist","builtin"].includes(k.origin.kind))return{link:fn(k.origin,t),inside:!1};let o=y.kind==="share"?y.data:await ro(J.value),a=new URLSearchParams(location.search);return["src","obs","edit"].forEach(r=>a.delete(r)),{link:location.origin+"/share"+(a.toString()?"?"+a:"")+Gt(o,e),inside:!0}}function pi(){let e=Z("slidetake:draft");if(!e||e===Nt)return null;let t=dt(e,{kind:"file",name:"your earlier draft"},{exported:!0});Q("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function rt(){Q("slidetake:copy",JSON.stringify(k))}function je(){if(O)return;let e;if(y.kind==="copy")e='<span class="mine">Your copy of '+C(oe(k.origin))+"</span>"+(ct(k)?' <span class="edited">\xB7 edited</span>':"");else{let n=y.kind==="share"?"a shared deck":oe(y.source);e='<span class="mine">'+C(n.charAt(0).toUpperCase()+n.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,me.classList.toggle("unsaved",y.kind==="copy"&&ct(k)),document.getElementById("btn-reset").hidden=!(y.kind==="copy"&&!pt(k));let t=document.getElementById("continue");t.hidden=y.kind==="copy"||!k,k&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+oe(k.origin))}function xa(e){return!k||!ct(k)?!0:confirm("Your copy of "+oe(k.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function wa(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function ui(){let e=y.kind==="share"?{kind:"shared"}:y.source;return xa("a copy of "+oe(e))?(k=dt(y.text,e),y={kind:"copy"},history.pushState(null,"",wa()+(p&&p!==h[0]?"#"+encodeURIComponent(p):"")),Mt("Editing your own copy of "+oe(e)+". The original is unchanged.",4e3),!0):(J.value=y.text,!1)}function hi(){y={kind:"copy"},history.pushState(null,"",wa()),me.classList.contains("collapsed")&&At(),J.value=k.text,It(!0),je()}async function mi(e){if(e.kind==="builtin")return bt[e.id]??bt.home;if(e.kind==="gist"){let n=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!n.ok)throw new Error(n.status===404?"no such gist":n.status+" "+n.statusText);let o=Object.values((await n.json()).files||{}),a=o.find(r=>r.filename===e.file)||o.find(r=>/\.(md|markdown)$/i.test(r.filename))||o[0];if(!a)throw new Error("the gist has no files");return X=a.raw_url,a.truncated?await(await fetch(a.raw_url)).text():a.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return X=new URL(e.url,location.href).href,await t.text()}function jo(){return y={kind:"source",source:{kind:"builtin",id:"home"},text:bt.home},y.text}async function fi(){if(O)return X=O.base||location.href,y={kind:"source",source:{kind:"url",url:X},text:Xn(O.settings||{})+String(O.markdown||"")},y.text;if(Y.page==="edit"){if(k)return y={kind:"copy"},k.text;history.replaceState(null,"","/new"+location.search),Y.page="pick"}if(Y.page==="pick")return Pt(document.getElementById("new-dialog")),y={kind:"source",source:{kind:"builtin",id:"template:blank"},text:bt["template:blank"]},y.text;if(Y.page==="share")try{let e=await io(Y.data);return y={kind:"share",data:Y.data,text:e},e}catch{return Mt("This link's deck is damaged or cut short, so it could not be opened.",6e3),jo()}try{let e=await mi(Y.source);return y={kind:"source",source:Y.source,text:e},e}catch(e){return Xe.textContent="Could not load the deck ("+e.message+")",Mt("Could not load "+oe(Y.source)+": "+e.message,6e3),jo()}}var O,No,Qe,De,bt,J,T,F,Xt,xo,qa,Xe,on,$a,me,wo,Ya,ze,Jt,le,an,Ga,Ka,Va,Xa,Ja,Za,Je,d,h,ie,p,A,R,x,q,U,de,z,Qa,S,Ke,ko,ee,fe,ce,Ie,pr,X,So,yr,vr,xr,kr,mt,Er,Sr,Qt,ye,en,xe,pe,Dr,Pe,V,we,ae,To,tn,Me,Mo,Ur,Bo,Oo,zo,qr,$r,ft,cn,wt,kt,Et,Sn,Io,Ve,W,ve,Ee,oa,u,Ln,aa,Gr,Vr,ue,ca,pa,j,H,I,$,Lt,Tt,Ye,un,hn,Ge,ga,re,gt,mn,li,Ao,he,Po,Oe,Ro,di,gn,bn,Do,Bt,Y,_o,y,k,ka=_(()=>{"use strict";Rn();Dn();jn();Hn();Fn();qn();it();Zn();to();$t();Kt();co();ho();vo();O=window.SLIDETAKE||null,No=document.querySelector("header .mark .logo").outerHTML;document.documentElement.classList.toggle("embed",!!O);Qe=!O||O.recording===!0||new URLSearchParams(location.search).has("obs");document.documentElement.classList.toggle("no-record",!Qe);De=window.matchMedia("(prefers-reduced-motion: reduce)").matches,bt={home:Nt,help:_n,showcase:$n,"template:blank":Nn,"template:talk":Wn,"template:recording":Un},J=document.getElementById("editor"),T=document.getElementById("stage"),F=document.getElementById("world"),Xt=document.getElementById("connectors"),xo=document.getElementById("breadcrumbs"),qa=document.getElementById("status-count"),Xe=document.getElementById("status-err"),on=document.getElementById("mm-svg"),$a=document.getElementById("mm-label"),me=document.getElementById("editor-pane"),wo=540,Ya=96,ze=440,Jt=720,le=960,an=180,Ga=540,Ka=100,Va=110,Xa=420,Ja=.35,Za=1,Je=parseFloat(Z("slidetake:slideSize"))||.92,d=new Map,h=[],ie=[],p=null,A="tree",R=!1,x={},q=!0,U=null,de=document.getElementById("brand"),z=document.getElementById("pip"),Qa=document.getElementById("stage-wrap"),S={x:0,y:0,zoom:.6},Ke=null;ko=new URLSearchParams(location.search).get("mode");ee=0;fe=null,ce=-1,Ie=null;pr=e=>e.querySelector("img")&&!e.textContent.trim()&&[...e.children].every(t=>/^(IMG|BR)$/.test(t.tagName));X=null;So=null;yr="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",vr="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",xr={dark:{palette:["#e0b024","#60a5fa","#34d399","#f472b6","#a78bfa","#fb923c","#a1a1aa"],text:"#e4e4e7",muted:"#a1a1aa",line:"#3f3f46",split:"#27272a",tip:"#18181b"},light:{palette:["#c4930f","#2563eb","#059669","#db2777","#7c3aed","#ea580c","#71717a"],text:"#27272a",muted:"#71717a",line:"#d4d4d8",split:"#e4e4e7",tip:"#ffffff"}};kr="https://esm.sh/@terrastruct/d2@0.1.33",mt=null,Er={dark:{N1:"#e4e4e7",N2:"#a1a1aa",N3:"#a1a1aa",N4:"#323238",N5:"#27272a",N6:"#18181b",N7:"#09090b",B1:"#e0b024",B2:"#907320",B3:"#68551f",B4:"#483c1d",B5:"#38301c",B6:"#2c271c"},light:{N1:"#27272a",N2:"#71717a",N3:"#71717a",N4:"#e4e4e7",N5:"#e4e4e7",N6:"#f4f4f5",N7:"#ffffff",B1:"#7a5c12",B2:"#e5cf87",B3:"#eedfaf",B4:"#f5eccf",B5:"#f8f2df",B6:"#fbf7eb"}},Sr=e=>/d2-config\s*:/.test(e)?e:`vars: {
  d2-config: {
    layout-engine: elk
  }
}
`+e,Qt={};ye=0,en=null;xe=document.getElementById("progress");xe.innerHTML="<b></b><i></i>";pe={start:0,timer:null};Dr=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];Pe=null;V=null;we=null;ae=null;on.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!u.active&&P(t.dataset.id)});To=null;J.addEventListener("input",()=>{y.kind!=="copy"&&!ui()||(k.text=J.value,je(),clearTimeout(To),To=setTimeout(()=>{rt(),It(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==A&&ke(e.dataset.mode)})});(function(){let e=new Map,t=0,n=!1,o=null,a=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};T.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||u.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,n=!1,e.size===2&&(o={d:a(),zoom:S.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,c=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(c),!n&&t>5&&(n=!0,xn(),T.classList.add("dragging")),n&&(e.size===2&&o?S.zoom=ta(o.zoom*a()/o.d):(S.x-=l/S.zoom,S.y-=c/S.zoom),Ae())});let r=i=>{e.delete(i.pointerId),e.size<2&&(o=null),e.size||T.classList.remove("dragging")};window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),T.addEventListener("click",i=>{n&&(i.stopPropagation(),i.preventDefault(),n=!1)},!0)})();T.addEventListener("wheel",e=>{e.preventDefault(),!u.active&&na(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>Re(-1);document.getElementById("nav-next").onclick=()=>Re(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=()=>{xa("a copy of "+t.name)&&(k=dt(String(n.result),{kind:"file",name:t.name},{exported:!0}),rt(),X=null,p=null,hi())},n.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([J.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(ie[0]?Te(d.get(ie[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),y.kind==="copy"&&(k.exported=k.text,rt(),je())};document.getElementById("btn-reset").onclick=()=>{y.kind!=="copy"||pt(k)||confirm("Discard your edits and go back to "+oe(k.origin)+" as it was?")&&(k.text=k.originText,rt(),J.value=k.text,p=null,It(!0),je())};document.getElementById("btn-edit-toggle").onclick=At;tn=document.querySelector("main"),Me=document.getElementById("editor-resizer"),Mo=parseFloat(Z("slidetake:editorWidth"));Mo&&me.style.setProperty("--editor-w",Mo+"px");Me.addEventListener("pointerdown",e=>{e.preventDefault(),Me.setPointerCapture(e.pointerId),tn.classList.add("resizing");let t=tn.getBoundingClientRect().right,n=a=>{let r=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-a.clientX)));me.style.setProperty("--editor-w",r+"px")},o=()=>{tn.classList.remove("resizing"),Me.removeEventListener("pointermove",n),Q("slidetake:editorWidth",String(me.getBoundingClientRect().width))};Me.addEventListener("pointermove",n),Me.addEventListener("pointerup",o,{once:!0})});Me.addEventListener("dblclick",()=>{me.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=Wo;document.getElementById("btn-present").onclick=()=>ge(!R);Ur="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",Bo=["ArrowRight","PageDown"," ","ArrowDown","Enter"],Oo=["ArrowLeft","PageUp","ArrowUp","r","R"],zo=["b","B","."],qr=document.getElementById("rec-dialog"),$r=document.getElementById("review"),ft=document.getElementById("rec-countdown"),cn=document.getElementById("rec-paused"),wt=document.getElementById("obs-host"),kt=document.getElementById("obs-port"),Et=document.getElementById("obs-pass"),Sn=document.getElementById("obs-remember"),Io=document.getElementById("obs-status"),Ve=document.getElementById("rec-start"),W=null,ve=!1,Ee=null,oa=null,u={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null},Ln=e=>new Promise(t=>setTimeout(t,e)),aa=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Ln(100)]);document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>{let t=document.getElementById(e.dataset.copy);t.select(),(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).catch(()=>document.execCommand("copy")),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy"},1500)}));Gr=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);Vr="This page is served over https, and browsers block it from reaching OBS on another computer (OBS only offers plain ws://). Run OBS on this computer and use localhost, or open Slidetake from a local copy: download dist/index.html from github.com/slidetake/slidetake and serve it with python3 -m http.server.";document.getElementById("obs-connect").onclick=ia;Sn.addEventListener("change",ra);document.getElementById("btn-record").onclick=pn;Ve.onclick=()=>sa(!0);document.getElementById("rec-rehearse").onclick=()=>sa(!1);ue="";ca=e=>bo(e,da),pa=(e,t)=>yo(e,t,{input:e.outputPath||ue||"recording.mov",outputName:Dt()+"-final.mp4",sectionOf:da});j=null,H=null,I=document.getElementById("rv-video"),$=document.getElementById("rv-now");document.getElementById("rv-mode").onchange=()=>_t();Lt=document.getElementById("rv-fps");Lt.onchange=()=>{j&&(j.fps=parseFloat(Lt.value),Bn(j),_t())};document.getElementById("rv-link").addEventListener("input",e=>{try{Q("slidetake:site",new URL(e.target.value.trim()).origin)}catch{}j&&ha(j)});Tt=null;I.addEventListener("timeupdate",()=>{if(!H)return;let e=H.ranges[H.i];if(I.currentTime*1e3<e.end)return;if(H.i++,H.i>=H.ranges.length){I.pause(),H=null,$.textContent="";return}let t=H.ranges[H.i];I.currentTime=t.start/1e3,$.textContent="\u25B6 "+t.title});document.getElementById("rv-play-final").onclick=()=>{j&&Ct(qe(j).map(e=>({start:e.start,end:e.end,title:e.title})))};Ye=null,un=0,hn=!1;I.addEventListener("error",async()=>{if(I.getAttribute("src")){if(Ye&&un<5){un++,$.textContent="Reloading "+ue+" (OBS was still finishing it)\u2026",await new Promise(e=>setTimeout(e,1500));try{ot(await jt(Ye),Ye,!0);return}catch{}}$.textContent=Ye?"Chrome cannot play "+ue+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(ue||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video."}});Ge=document.getElementById("rv-file-input");Ge.addEventListener("change",()=>{Ge.files[0]&&ot(Ge.files[0]),Ge.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return Ge.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});$.textContent="Opening "+e.name+"\u2026",ot(await jt(e),e)}catch(e){(!e||e.name!=="AbortError")&&($.textContent="Could not open that file.")}};ga=document.getElementById("rv-folder");ga.hidden=!window.showDirectoryPicker;ga.onclick=async()=>{let e=j&&Ce(j.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(ri("obs-folder",t),!e){$.textContent="Folder remembered. This session has no file name from OBS; open the file instead.";return}let n=await t.getFileHandle(e);ot(await jt(n),n)}catch(t){if(t&&t.name==="AbortError")return;$.textContent=(e?e+" is not in that folder":"Could not read that folder")+". Use \u201COpen the recording file\u2026\u201D instead."}};document.getElementById("rv-download").onclick=()=>{if(!j)return;let e=j,t=ca(e),n="# "+document.getElementById("rv-yt-title").value+`

Recorded `+new Date(e.date).toLocaleString()+(e.outputPath?" \xB7 "+e.outputPath:"")+" \xB7 final length "+K(t.length)+`

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

`+qe(e).map(a=>"- "+K(a.start)+"\u2013"+K(a.end)+"  "+a.title).join(`
`)+`
`,o=document.createElement("a");o.href=URL.createObjectURL(new Blob([n],{type:"text/markdown"})),o.download=Dt()+"-publish.md",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),1e3)};Yr()&&new URLSearchParams(location.search).get("obs")&&ia();re=document.getElementById("btn-camera"),gt=document.getElementById("pip-msg"),mn=null;li='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';re.onclick=()=>zn(q);On();Ao=null;window.addEventListener("pointermove",va);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(u.active?Rt("Stopped: the browser left fullscreen"):R&&ge(!1))});he=document.getElementById("help");document.getElementById("btn-help").onclick=()=>window.open(O?"https://slidetake.com/help":"/help","_blank","noopener");document.getElementById("btn-keys").onclick=()=>he.classList.add("open");document.getElementById("help-close").onclick=()=>he.classList.remove("open");he.addEventListener("click",e=>{e.target===he&&he.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),u.active||pn();return}if(u.active){Jr(e);return}if(document.querySelector(".modal.open")){e.key==="Escape"&&Tn();return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(he.classList.contains("open")){e.key==="Escape"&&he.classList.remove("open");return}let n=e.key;n==="ArrowRight"||n===" "||n==="PageDown"?(e.preventDefault(),Re(1)):n==="ArrowLeft"||n==="PageUp"?(e.preventDefault(),Re(-1)):n==="ArrowDown"?(e.preventDefault(),Wr()):n==="ArrowUp"?(e.preventDefault(),Hr()):n==="Home"?h.length&&P(h[0]):n==="End"?h.length&&P(h[h.length-1]):n==="o"||n==="O"?Nr():n==="e"||n==="E"?At():n==="f"||n==="F"||n==="p"||n==="P"?ge(!R):n==="r"||n==="R"?pn():n==="1"?ke("tree"):n==="2"?ke("radial"):n==="3"?ke("path"):n==="4"?ke("focus"):n==="c"||n==="C"?zn(q):n==="v"||n==="V"?rr():n==="l"||n==="L"?Wo():n==="+"||n==="="?Co(1):n==="-"||n==="_"?Co(-1):n==="?"||n==="k"||n==="K"?he.classList.add("open"):n==="Escape"&&!Qo()&&R&&ge(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=lt(location.hash);if(e&&!(y&&y.kind==="share"&&e===y.data)){location.reload();return}t&&t!==p&&d.has(t)&&P(t)});Po="";new ResizeObserver(()=>{let e=T.clientWidth+"x"+T.clientHeight;e!==Po&&(Po=e,Ae(),te(!0))}).observe(T);Oe=document.createElement("div");Oe.id="toast";Oe.setAttribute("role","status");document.body.appendChild(Oe);Ro=null;di=document.getElementById("open-dialog"),gn=document.getElementById("open-url"),bn=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{bn.hidden=!0,Pt(di),gn.focus(),gn.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=no(gn.value);if(!t){bn.textContent="That doesn't look like a link.",bn.hidden=!1;return}location.href=fn(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await ci(p&&p!==h[0]?p:""),n=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),Mt(n,5e3)}catch{prompt("Copy this link:",e)}y.kind==="copy"&&(k.exported=k.text,rt(),je())};Do=Z("slidetake:layout");A=["tree","radial","path","focus"].includes(Do)?Do:"tree";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===A));Bt=new URLSearchParams(location.search);["tree","radial","path","focus"].includes(Bt.get("layout"))&&(A=Bt.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===A)));if(O){let e=(Array.isArray(O.trail)?O.trail:O.back?[O.back]:[]).filter(a=>a&&a.label),t=document.querySelector("header .brand");e.length&&(t.innerHTML='<nav class="trail" aria-label="Site">'+e.map((a,r)=>(r?'<span class="sep" aria-hidden="true">|</span>':"")+(a.url?'<a href="'+C(a.url)+'">'+C(a.label)+"</a>":"<span>"+C(a.label)+"</span>")).join("")+"</nav>");let n=document.createElement("a");n.id="credit",n.href="https://slidetake.com",n.target="_blank",n.rel="noopener",n.title="Made with Slidetake",n.setAttribute("aria-label","Made with Slidetake"),n.innerHTML=No+'<span class="word">Slide<span>take</span></span>';let o=document.querySelector("header .hdr-actions");o.insertBefore(n,o.firstChild),Qe||(o.insertAdjacentHTML("beforeend",'<button class="btn" id="hdr-keys" title="Keyboard shortcuts (K)">\u2328 Keys</button><button class="btn" id="hdr-full" title="Fullscreen (F)">\u26F6 Fullscreen</button>'),document.getElementById("hdr-keys").onclick=()=>document.getElementById("help").classList.add("open"),document.getElementById("hdr-full").onclick=()=>ge(!R))}Y=so(location.pathname,location.search,location.hash),_o=Y.page==="pick"?"":Y.slide,y=null,k=lo(Z("slidetake:copy"))||pi();window.addEventListener("popstate",()=>location.reload());(Bt.get("edit")==="1"||Y.page==="edit"&&k&&Bt.get("edit")!=="0")&&At();fi().then(e=>(J.value=e,je(),Uo(J.value),Go(),document.fonts?document.fonts.ready:null)).then(()=>{d.forEach(Ot),et(),P(d.has(_o)?_o:h[0],!0)})});var In=`  /* One palette, Slidetake gold, at two levels: bright gold on zinc in dark mode, deep gold on white in
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
  /* ---------- media from plain markdown (see applyMedia) ---------- */
  .node .body figure.media{margin:0;}
  .node .body figure.media img{display:block;width:100%;height:auto;max-height:70vh;object-fit:contain;border-radius:8px;}
  .node .body figure.media figcaption{margin-top:8px;font-size:.82em;color:var(--text-muted);line-height:1.45;}
  .node .body figure.yt .frame{position:relative;width:100%;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#000;}
  .node .body figure.yt.portrait .frame{aspect-ratio:9/16;max-height:70vh;width:auto;margin:0 auto;}
  .node .body figure.yt iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}
  /* the video is always on show; its step only plays it */
  .node .fragment.yt-play{opacity:1 !important;visibility:inherit !important;transform:none !important;}
  .node.card-split .body{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:4px 22px;align-items:center;}
  .node.card-split .body > :is(h1,h2,h3,h4,h5,h6){grid-column:1 / -1;}
  .node.card-split .body .split-text > :first-child{margin-top:0;}
  .node.card-split.media-last .body{grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);}
  .node .body .gallery{list-style:none;padding:0;margin:8px 0 0;display:grid;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr));gap:14px;align-items:end;}
  .node .body .gallery li{margin:0;}
  .node .body .gallery figure.media img{max-height:calc(56vh / var(--rows,1));margin:0 auto;}
  .node .body .gallery figure.media figcaption{font-size:.72em;text-align:center;}
  /* a stepped gallery: the images stack in one place and each press brings the next */
  .node .body .gallery.carousel{grid-template-columns:minmax(0,1fr);}
  .node .body .gallery.carousel > li{grid-area:1/1;}
  .node .body .gallery.carousel figure.media img{max-height:58vh;}
  .node .body .gallery.carousel figure.media figcaption{font-size:.82em;}
  .node .body .gallery.carousel figcaption[data-count]::before{content:attr(data-count) "  \xB7  ";color:var(--accent);font-family:var(--mono);white-space:pre;}
  .node .body .gallery.carousel:has(> li.visible) > li:not(.fragment){opacity:0;visibility:hidden;transition:opacity .45s ease, visibility 0s .45s;}
  .node .body .gallery.carousel > li:not(.fragment){transition:opacity .45s ease;}
  /* image cards: an image or carousel alone, laid out by the image's shape (see sizeCard) */
  div.node.card-bleed{padding:0;overflow:hidden;}
  .node.card-bleed .body .gallery{margin:0;}
  .node.card-bleed .body figure.media img,
  .node.card-bleed .body .gallery.carousel figure.media img{max-height:none;border-radius:0;background:var(--code-bg);}
  .node.card-bleed .body figure.media figcaption{margin:0;text-align:left;font-size:.9em;}
  /* landscape: the image spans the card; the heading sits above it, the caption below */
  .node.img-landscape .crumb{margin:12px 18px 4px;}
  .node.img-landscape .body > :is(h1,h2,h3,h4,h5,h6):first-child{margin:0 18px 10px;}
  .node.img-landscape .body figure.media img{width:100%;height:var(--img-h);object-fit:contain;}
  .node.img-landscape .body figure.media figcaption{padding:10px 18px 14px;}
  /* portrait: the image on the right at the card's height; the heading and caption share the left */
  div.node.img-portrait{height:540px;padding:20px calc(var(--img-w) + 26px) 22px 24px;}
  .node.img-portrait .body{display:flex;flex-direction:column;height:100%;}
  .node.img-portrait .crumb{margin-bottom:10px;}
  .node.img-portrait .body > :is(h1,h2,h3,h4,h5,h6):first-child{font-size:22px;}
  .node.img-portrait .body > .gallery, .node.img-portrait .body > figure.media{margin-top:auto;}
  .node.img-portrait .body figure.media img{position:absolute;top:0;right:0;width:var(--img-w);height:540px;object-fit:contain;}
  .node.img-portrait .body figure.media figcaption, .node.img-portrait .body .gallery.carousel figure.media figcaption{font-size:1.35em;line-height:1.45;color:var(--text);}
  .node.img-portrait .body .gallery.carousel figure.media figcaption::before{font-size:.7em;}
  .node.img-portrait .body .gallery.carousel figure.media figcaption::before{content:attr(data-count) "\\A";white-space:pre;}
  /* 16:9, or a full-screen card: the image fills the card, the heading and caption over it */
  .node.img-overlay::before{content:"";position:absolute;inset:0 0 auto;height:96px;z-index:2;pointer-events:none;
    background:linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,0));border-radius:8px 8px 0 0;}
  .node.img-overlay .crumb{position:absolute;top:12px;left:18px;right:18px;z-index:3;margin:0;color:rgba(255,255,255,.72);}
  .node.img-overlay .body > :is(h1,h2,h3,h4,h5,h6):first-child{position:absolute;top:28px;left:18px;right:18px;z-index:3;margin:0;
    color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.6);}
  .node.img-overlay .body figure.media{position:relative;}
  .node.img-overlay .body figure.media img{width:100%;height:540px;object-fit:contain;}
  .node.card-full.img-overlay .body figure.media img{object-fit:cover;}
  .node.img-overlay .body figure.media figcaption{position:absolute;left:0;right:0;bottom:0;padding:36px 18px 14px;
    color:#f4f4f5;background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.78));}
  .node.img-overlay .body .gallery.carousel figure.media figcaption::before{color:#f5c542;}
  /* <!-- view: full -->: a 16:9 card that fills the screen, with the map and breadcrumbs out of the way */
  div.node.card-full{height:540px;overflow:hidden;}
  body.full-card #breadcrumbs, body.full-card #minimap{opacity:0;pointer-events:none;}
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
  /* D2 is drawn in the deck's own palette, so it needs no light backdrop */
  .node .diagram.d2{background:none;border:none;padding:0;}
  .node .diagram.d2 svg{max-height:62vh;}
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
  html.embed .brand .trail{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:600;font-size:15px;min-width:0;}
  html.embed .brand .trail a{color:var(--text);text-decoration:none;white-space:nowrap;}
  html.embed .brand .trail a:hover{color:var(--accent);}
  html.embed .brand .trail a:last-child{color:var(--accent);}
  html.embed .brand .trail .sep{color:var(--text-muted);font-weight:400;}
  #credit{display:inline-flex;align-items:center;gap:6px;padding:4px 6px;text-decoration:none;
    font-family:var(--display);font-weight:700;font-size:14px;color:var(--text);}
  #credit .logo{width:18px;height:18px;fill:var(--accent);}
  #credit .word > span{color:var(--accent);}
  #credit:hover{opacity:.85;}
  html.embed #btn-help{display:none !important;}
  /* a reader's page (embedded, not recording): no bottom bar, except the arrows on touch screens */
  html.embed.no-record #navbar{display:none;}
  @media (pointer:coarse){
    html.embed.no-record #navbar{display:flex;}
    html.embed.no-record #navbar > :not(.touch-only){display:none !important;}
  }
  html.no-record #btn-camera, html.no-record #btn-record, html.no-record #navbar .divider, html.no-record #pip, html.no-record #help tr.rec{display:none !important;}
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
`;var An=`
<noscript>
  <h1>Slidetake</h1>
  <p><strong>Write in markdown. Present on a spatial canvas. Record without timeline editing.</strong></p>
  <p>For developers and technical educators who explain things on video. Your headings become a map you move through; with OBS, every slide is a take, so a fumbled line is retaken on the spot, and Slidetake writes the frame-exact cut, YouTube chapters and description.</p>
  <p>Slidetake needs JavaScript. Read the <a href="/help.md">guide</a>, the <a href="/llms.txt">summary</a>, or the source on <a href="https://github.com/slidetake/slidetake">GitHub</a>.</p>
</noscript>

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
      <button id="btn-keys" title="Keyboard shortcuts (K)">\u2328<span class="lbl"> Keys</span></button>
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
      <tr class="rec"><td><kbd>C</kbd> <kbd>V</kbd> <kbd>R</kbd></td><td>camera, camera layouts, record</td></tr>
      <tr><td><kbd>K</kbd> <kbd>?</kbd></td><td>this card</td></tr>
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
      <li><a href="/examples"><strong>Examples</strong><span>Everything a deck can hold: diagrams, charts, images, YouTube.</span></a></li>
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
`;var Pn=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var Ea=e=>new Promise((t,n)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>n(new Error("could not load "+e)),document.head.appendChild(o)});async function Sa(){document.head.insertAdjacentHTML("beforeend",Pn);let e=document.createElement("style");e.textContent=In,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",An),await Promise.all([window.gsap?null:Ea("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:Ea("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>(ka(),gi))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Sa,{once:!0}):Sa();})();
