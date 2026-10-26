/* Slidetake 0.1.0 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var _=(e,t)=>()=>(e&&(t=e(e=0)),t);var Nt,Pn=_(()=>{Nt=`---
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
`});var Rn,An=_(()=>{Rn=`---
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
| \` \`\`\`echarts \` with JSON options | a chart |
| \` \`\`\`svg \` or \`![](drawing.svg)\` | an SVG drawing |
| an image alone | the image fills the card |
| an image and text | a split card: the image sits on the side written first |
| a list of images | a gallery; with \`<!-- steps -->\` a carousel, one image per press |
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
`});var _n,Dn=_(()=>{_n=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var Nn,jn=_(()=>{Nn=`---
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
`});var Hn,Fn=_(()=>{Hn=`---
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
`});var Un,Wn=_(()=>{Un=`---
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
  "series": [{"type": "bar", "data": [12, 19, 15, 24, 30], "itemStyle": {"color": "#e0b024"}}]
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

![An image alone fills the card](https://slidetake.com/og.jpg)

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
`});function Le(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function _e(e){return e.replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function C(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function qn(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,n)=>n[0]==="#"?String.fromCodePoint(n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10)):Pa[n.toLowerCase()]??t)}function je(e){let t={};for(let n of e.matchAll(/([\w-]+)="([^"]*)"/g))t[n[1]]=n[2];return t}function Ne(e,t){let n=[[]],o=null;return e.split(`
`).forEach(a=>{let r=a.match(/^\s{0,3}(`{3,}|~{3,})/);r&&(o?r[1][0]===o[0]&&r[1].length>=o.length&&(o=null):o=r[1]),!o&&!r&&t.test(a)?n.push([]):n[n.length-1].push(a)}),n.map(a=>a.join(`
`))}function $n(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let n=t.match(/^(\d+):(\d{1,2})$/);if(n)return(+n[1]*60+ +n[2])*1e3;if(n=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!n)return 0;let o=(n[2]||"m")[0];return parseFloat(n[1])*(o==="h"?3600:o==="s"?1:60)*1e3}function K(e){let t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return(n?n+":"+String(o).padStart(2,"0"):o)+":"+String(a).padStart(2,"0")}var Pa,rt=_(()=>{"use strict";Pa={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function Gn(e){let t=null;return e.split(`
`).filter(n=>{let o=n.match(/^\s{0,3}(`{3,}|~{3,})/);return o?(t?o[1][0]===t[0]&&o[1].length>=t.length&&(t=null):t=o[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function Ft(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(Gn(e))}function Ht(e){let t=Gn(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function Aa(e){let t={},n=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!n)return{deck:t,body:e};let o=null;return n[1].split(`
`).forEach(a=>{let r=a.match(/^\s+-\s+(.*)$/);if(r&&o){t[o].push(r[1].trim().replace(/^["']|["']$/g,""));return}let i=a.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){o=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],o=s):(t[s]=l,o=null)}),{deck:t,body:e.slice(n[0].length)}}function Kn(e){let t=a=>typeof a=="string"||typeof a=="number"||typeof a=="boolean",n=a=>String(a).replace(/\s*\n\s*/g," "),o=[];for(let[a,r]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(a)&&(t(r)?o.push(a+": "+n(r)):Array.isArray(r)&&r.every(t)&&(o.push(a+":"),r.forEach(i=>o.push("  - "+n(i)))));return o.length?`---
`+o.join(`
`)+`
---
`:""}function Ra(e){let t=e.split(`
`),n={},o=e;if(t[0]!==void 0&&t[0].trim()==="---"){let a=-1;for(let r=1;r<t.length;r++)if(t[r].trim()==="---"){a=r;break}a!==-1&&(t.slice(1,a).forEach(r=>{let i=r.indexOf(":");i>-1&&(n[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}),o=t.slice(a+1).join(`
`).replace(/^\n+/,""))}return{meta:n,body:o}}function Da(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),n=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),o=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),a=null;if(n&&(!o||n.index<o.index)?a=n[1]:o&&(a=o[1].replace(/<[^>]+>/g," ")),!a){let r=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));a=r?r.slice(0,60):null}return a?qn(_e(a)).replace(/\s+/g," ").trim():null}function Yn(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?je(t[1]):{}}function Vn(e,{render:t=n=>({html:n,err:null})}={}){let n=new Map,o=b=>{let E=b,g=2;for(;n.has(E);)E=b+"-"+g++;return E},a=b=>(n.set(b.id,{x:null,y:null,children:[],...b}),b.id);e=e.replace(/\r\n?/g,`
`);let r=/^\+\+\+[ \t]*$/m.test(e),i={};r||({deck:i,body:e}=Aa(e));let s=/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||"")),l=!r&&(Ne(e,/^--\s*$/).length>1||s&&Ne(e,/^---\s*$/).length>1),d=r?N():l?M():f();return n.forEach(b=>{(!b.parent||b.parent===b.id||!n.has(b.parent))&&(b.parent=null)}),n.forEach(b=>{let E=new Set([b.id]),g=b.parent;for(;g;){if(E.has(g)){b.parent=null;break}E.add(g),g=n.get(g).parent}}),n.forEach(b=>{b.parent&&n.get(b.parent).children.push(b.id)}),{deck:i,nodes:n,format:r?"+++":l?"reveal":"headings",errCount:d};function f(){let b=[],E=null,g=null,B={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(m=>{let y=m.match(/^\s{0,3}(`{3,}|~{3,})/);y&&(g?y[1][0]===g[0]&&y[1].length>=g.length&&(g=null):g=y[1]);let L=!g&&!y?m.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(L){let D=L[2],se=null,ne=D.match(/\s*\{#([\w\-:.]+)\}\s*$/);ne&&(se=ne[1],D=D.slice(0,ne.index)),E={level:L[1].length,title:_e(D),explicitId:se,lines:[L[1]+" "+D]},b.push(E)}else(E||B).lines.push(m)});let G=B.lines.join(`
`);G.trim()&&(b.length&&!G.replace(/<!--[\s\S]*?-->/g,"").trim()?b[0].lines.splice(1,0,...B.lines):b.unshift(B));let w=[];return b.forEach(m=>{for(;w.length&&w[w.length-1].level>=m.level;)w.pop();let y=w.length?w[w.length-1].id:null,L=m.lines.join(`
`).trim(),D=m.title||_e((L.split(`
`).find(ge=>ge.trim())||"Intro").slice(0,48));m.id=o(m.explicitId||Le(D));let{html:se,err:ne}=t(L);a({id:m.id,parent:y,title:D,html:se,err:ne,camera:Ht(L),mapFirst:Ft(L)}),w.push(m)}),0}function N(){let b=e.split(/\n\+\+\+[ \t]*\n/).map(B=>B.trim()).filter(B=>B.length),E=null,g=0;return b.forEach((B,G)=>{let{meta:w,body:m}=Ra(B),y=o(w.id||"slide-"+(G+1)),L="parent"in w?w.parent||null:E,D=m.match(/^#{1,6}\s+(.+)$/m),se=w.title||(D?_e(D[1]):y),{html:ne,err:ge}=t(m);ge&&g++,a({id:y,parent:L,title:se,html:ne,err:ge,camera:w.camera||Ht(m),mapFirst:Ft(m),x:w.x!==void 0?parseFloat(w.x):null,y:w.y!==void 0?parseFloat(w.y):null}),E=y}),g}function M(){let b=0,E=0,g=null;function B(w,m){let y=w.body.trim();E++;let L=Da(y)||"Slide "+E,D=m?n.get(m).title:null;D&&L.startsWith(D+" / ")&&(L=L.slice(D.length+3));let se=o(Le(L)),{html:ne,err:ge}=t(y);return ge&&b++,a({id:se,parent:m,title:L,html:ne,err:ge,camera:Ht(y),mapFirst:Ft(y),autoslide:parseInt(w.attrs["data-autoslide"],10)||0})}let G=[];return Ne(e,/^---\s*$/).forEach(w=>{if(/<section\b/i.test(w)){for(let L of w.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))G.push([{body:L[2],attrs:je(L[1])}]);let y=w.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");y.trim()&&G.push([{body:y,attrs:Yn(y)}]);return}let m=Ne(w,/^--\s*$/).filter(y=>y.trim()).map(y=>({body:y,attrs:Yn(y)}));m.length&&G.push(m)}),G.forEach(w=>{let m=null;w.forEach((y,L)=>{if(!g){g=m=B(y,null);return}L===0?m=B(y,g):B(y,m)})}),b}}var Xn=_(()=>{"use strict";rt()});function it(e,t){return String(t||"").toLowerCase().split(/\s+/).forEach(n=>{n&&(n==="off"||n==="hide"?e.off=!0:n==="on"||n==="pip"||n==="show"?(e.off=!1,e.full=!1,e.used=!0):n==="full"||n==="fullscreen"?(e.full=!0,e.off=!1,e.used=!0):/^\d+(\.\d+)?%?$/.test(n)?(e.size=Wt(parseFloat(n)),e.used=!0):Fe.includes(n)?(e.corner=n,e.used=!0):n==="flip"?(e.flip=!e.flip,e.used=!0):n==="circle"?e.circle=!0:n==="rect"?e.circle=!1:n==="mirror"?e.mirror=!0:(n==="unmirror"||n==="no-mirror")&&(e.mirror=!1))}),e}function Jn(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Zn(e,t){let n=[];if(!e.length){for(let a=0;a<=t;a++)n.push({cam:0,frag:a});return n}let o=e.findIndex(a=>!it({},a).full);o<0&&(o=e.length-1);for(let a=0;a<=o;a++)n.push({cam:a,frag:0});for(let a=1;a<=t;a++)n.push({cam:o,frag:a});for(let a=o+1;a<e.length;a++)n.push({cam:a,frag:t});return n}var Fe,Wt,Qn=_(()=>{"use strict";Fe=["top-left","top-right","bottom-left","bottom-right"],Wt=e=>Math.max(8,Math.min(60,e))});function eo(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let o=n.pathname.split("/").filter(Boolean);if(n.hostname==="github.com"||n.hostname==="www.github.com"){let[a,r,i,s,...l]=o;if(a&&r&&(i==="blob"||i==="raw"||i==="tree")&&s){let d=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(d))&&(d=(d?d+"/":"")+"index.md"),{kind:"url",url:Ut+[a,r,s].join("/")+"/"+d}}if(a&&r&&!i)return{kind:"url",url:Ut+a+"/"+r+"/HEAD/README.md"}}if(n.hostname==="gist.github.com"){let a=o.length>=2?o[1]:o[0];if(a&&/^[\da-f]+$/i.test(a))return{kind:"gist",id:a}}if(n.hostname==="slidetake.com"||n.hostname==="www.slidetake.com"){let a=qt(n.pathname);if(a)return a;let r=n.searchParams.get("src");if(r)return{kind:"url",url:r}}return{kind:"url",url:n.href}}function qt(e){let t=String(e||"").split("/").filter(Boolean).map(n=>{try{return decodeURIComponent(n)}catch{return n}});if(t[0]==="gh"&&t.length>=4){let[,n,o,...a]=t,r=o.indexOf("@"),i=r<0?o:o.slice(0,r),s=r<0?"HEAD":o.slice(r+1);return!n||!i||!s?null:{kind:"url",url:Ut+[n,i,s,...a].map(encodeURIComponent).join("/")}}return t.length===1&&t[0]==="help"?{kind:"builtin",id:"help"}:t.length===1&&t[0]==="examples"?{kind:"builtin",id:"showcase"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function to(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id==="showcase"?"/examples":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,n,o,a,r]=t;if(!/^refs$/.test(a))return"/gh/"+n+"/"+o+(a==="HEAD"?"":"@"+a)+"/"+r}return"/?src="+encodeURIComponent(e.url)}var Ut,$t=_(()=>{"use strict";Ut="https://raw.githubusercontent.com/"});function _a(e){let t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function ja(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,n=>n.charCodeAt(0))}async function no(e,t){let n=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await n.arrayBuffer())}async function oo(e){return _a(await no(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function ao(e){return new TextDecoder().decode(await no(ja(e),new DecompressionStream("deflate-raw")))}function st(e){let t=e.replace(/^#/,"");if(!t.startsWith(Yt)){let r=t;try{r=decodeURIComponent(t)}catch{}return{data:null,slide:r}}let n=t.slice(Yt.length),o=n.indexOf("~"),a=o<0?"":n.slice(o+1);try{a=decodeURIComponent(a)}catch{}return{data:o<0?n:n.slice(0,o),slide:a}}function Gt(e,t){return"#"+Yt+e+(t?"~"+encodeURIComponent(t):"")}var Yt,Kt=_(()=>{"use strict";Yt="deflate:"});function ro(e,t,n){let o=e.replace(/\/+$/,"")||"/",a=new URLSearchParams(t),{data:r,slide:i}=st(n);if(o==="/share")return r?{page:"share",data:r,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(o==="/edit")return{page:"edit",slide:i};if(o==="/new"){let d=a.get("template");return d&&Na.includes(d)?{page:"source",source:{kind:"builtin",id:"template:"+d},slide:i}:{page:"pick"}}let s=qt(o);if(s)return{page:"source",source:s,slide:i};let l=a.get("src");return o==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function oe(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="help"?"Help":e.id==="showcase"?"the examples":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let n=new URL(e.url);return n.hostname+n.pathname}catch{return e.url}}}}function lt(e,t,{exported:n=!1}={}){return{text:e,origin:t,originText:e,exported:n?e:null}}function ct(e){return e.text!==(e.exported??e.originText)}function dt(e){return e.text===e.originText}function io(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var Na,so=_(()=>{"use strict";$t();Kt();Na=["blank","talk","recording"]});function lo(e){let t;try{t=new URL(e)}catch{return null}let n=t.hostname.replace(/^(www\.|m\.)/,""),o=null,a=!1;if(n==="youtu.be")o=t.pathname.slice(1).split("/")[0];else if(n==="youtube.com"||n==="youtube-nocookie.com"){let r=t.pathname.split("/").filter(Boolean);r[0]==="watch"?o=t.searchParams.get("v"):["shorts","live","embed"].includes(r[0])&&(o=r[1]||null,a=r[0]==="shorts")}return!o||!/^[\w-]{6,}$/.test(o)?null:{id:o,start:Fa(t.searchParams.get("t")||t.searchParams.get("start")||""),portrait:a}}function Fa(e){if(/^\d+$/.test(e))return+e;let t=e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);return t&&e?+(t[1]||0)*3600+ +(t[2]||0)*60+ +(t[3]||0):0}function co(e){return"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?enablejsapi=1&rel=0&playsinline=1"+(e.start?"&start="+e.start:"")}var po=_(()=>{"use strict"});function He(e){let t=new Map,n=e.totalObs??e.total;return e.events.forEach((o,a)=>{t.has(o.id)||t.set(o.id,{id:o.id,title:o.title,takes:[]});let r=t.get(o.id),i=e.events[a+1];r.takes.push({no:r.takes.length+1,start:uo(o),end:i?uo(i):n})}),t}function We(e){let t=[],n=ut(e);return He(e).forEach(o=>{let a=e.picks[o.id]??o.takes.length;if(!a)return;let r=o.takes[a-1];if(!r)return;let i=ho(r.start,n),s=ho(r.end,n);s>i&&t.push({id:o.id,title:o.title,f0:i,f1:s,start:i*1e3/n,end:s*1e3/n})}),t}function Ha(e){let t=[];return e.forEach(n=>{let o=t[t.length-1];o&&n.f0===o.f1?(o.f1=n.f1,o.end=n.end):t.push({f0:n.f0,f1:n.f1,start:n.start,end:n.end})}),t}function Vt(e,t){let n=0,o=[];return We(e).forEach(a=>{let{sec:r,title:i}=t(a.id,a.title),s=o[o.length-1];(!s||s.sec!==r&&s.title!==i)&&o.push({sec:r,title:i,t:n}),n+=a.end-a.start}),{list:o,length:n}}function fo(e,t){let{list:n,length:o}=Vt(e,t),a=n.filter((r,i)=>i===0||(n[i+1]?n[i+1].t:o)-r.t>=1e4);return a.length&&(a[0].t=0),{lines:a.map(r=>K(r.t)+" "+r.title),dropped:n.length-a.length,length:o}}function go(e,t,{input:n,outputName:o,sectionOf:a}){let r=Ha(We(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!r.length)return"# Every slide is left out: nothing to render.";let i=Wa(n)+o,{list:s,length:l}=Vt(e,a),d=m=>String(m).replace(/[=;#\\\n]/g,y=>"\\"+y),N=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+d(e.deckTitle)+`
`+s.map((m,y)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(m.t)+`
END=`+Math.round(s[y+1]?s[y+1].t:l)+`
title=`+d(m.title)).join(`
`))+`
EOF
`,M=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let m=r.map(L=>"file "+pt(n)+`
inpoint `+mo(L.start)+`
outpoint `+mo(L.end)).join(`
`);return(r.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(r.length===2?"the cut":"each of the "+(r.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+m+`
EOF
`+N+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+M+" -c copy -movflags +faststart "+pt(i)}let b=ut(e),E=m=>(m/b).toFixed(6),g=m=>((m-.5)/b).toFixed(6),B=r.map(m=>"gte(t,"+g(m.f0)+")*lt(t,"+g(m.f1)+")").join("+"),G=r.map(m=>"gte(t,"+E(m.f0)+")*lt(t,"+E(m.f1)+")").join("+"),w=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return N+"ffmpeg -i "+pt(n)+" -i /tmp/slidetake-chapters.txt"+M+` -vf "select='`+B+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+G+`',asetpts=N/SR/TB" `+w+" -c:a aac -b:a 192k -movflags +faststart "+pt(i)}var uo,ut,ho,Ce,Wa,pt,mo,bo=_(()=>{"use strict";rt();uo=e=>e.obsT??e.t,ut=e=>e.fps||60,ho=(e,t)=>Math.round(e*t/1e3);Ce=e=>String(e||"").split(/[\\/]/).pop()||"",Wa=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},pt=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",mo=e=>(e/1e3).toFixed(3)});var ui={};function Z(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let n=e.slice(10);return localStorage.getItem("slidetake:"+n)??localStorage.getItem("traverse:"+n)}catch{return null}}function Q(e,t){try{localStorage.setItem(e,t)}catch{}}function Za(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+C(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function vt(){let e=x.brand||"",t=x.logo||"",n=/^chip$/i.test(x.brand_style||""),o=/^slidetake$/i.test(e)?'<span class="st-mark">'+_o+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+C(t)+'">':"")+(e?"<span"+(n?' class="chip"':"")+">"+C(e)+"</span>":"");if(le.dataset.html!==o){le.dataset.html=o,le.innerHTML=o;let r=le.querySelector("img");r&&(r.onload=r.onerror=()=>te(!0))}le.hidden=!o,gn(),document.title=x.title||"Slidetake";let a=String(x.theme||x.palette||"").toLowerCase();a?document.body.dataset.palette=a:delete document.body.dataset.palette,jo()}function yt(){if(O&&O.themeKey&&!xo){let t=Z(O.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(xo||Z("slidetake:mode")||x.mode||"dark").toLowerCase()==="light"?"light":"dark"}function jo(){let e=yt()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function No(){let e=yt()==="light"?"dark":"light";O&&O.themeKey?(Q(O.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):Q("slidetake:mode",e),jo(),W.querySelector(".echarts-container, .diagram.d2")&&zt(!0)}function Qa(){let t=(x.camera||"").replace(/^\[|\]$/g,"").split(",").map(n=>n.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function an(e){return!q&&e?Jn(e.camera):[]}function Se(e){return Zn(an(e),e&&e.frags?e.frags.length:0)}function Fo(){let e=Se(c.get(p));return e[Math.min(ee,e.length-1)]||{cam:0,frag:0}}function er(){if(!p)return null;let e=an(c.get(p));if(e.length)return e[Math.min(Fo().cam,e.length-1)];for(let t=h.indexOf(p)-1;t>=0;t--){let n=an(c.get(h[t]));if(n.length)return n[n.length-1]}return null}function tr(){let e={corner:(x.pip||"none").toLowerCase(),size:Wt(parseFloat(x.pip_size)||24),circle:(x.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(x.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};return it(e,er()),it(e,me),!Fe.includes(e.corner)&&(U||e.used)&&(e.corner="bottom-right"),e.flip&&Fe.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function gn(){let e=!I.hidden&&I.offsetWidth?I.getBoundingClientRect():null,t=Oe=tr(),n=Fe.includes(t.corner);if(I.className=n?[t.corner,t.circle&&"circle",U&&"live",t.mirror&&"mirror",t.full&&"full"].filter(Boolean).join(" "):"",I.style.width=t.size+"%",I.hidden=!n||q||t.off,Ja.dataset.pip=I.hidden||t.full?"none":t.corner,I.hidden||Ae||!I.animate)return;let o="cubic-bezier(.65,0,.35,1)";if(!e){I.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let a=I.getBoundingClientRect();Math.abs(e.left-a.left)+Math.abs(e.top-a.top)+Math.abs(e.width-a.width)+Math.abs(e.height-a.height)<2||I.animate([{transformOrigin:"0 0",transform:"translate("+(e.left-a.left)+"px,"+(e.top-a.top)+"px) scale("+e.width/a.width+","+e.height/a.height+")"},{transformOrigin:"0 0",transform:"none"}],{duration:600,easing:o})}function nr(){let e=Oe;if(!e||I.hidden||e.full)return null;let t=T.clientWidth,n=T.clientHeight,o=16,a=t*e.size/100,r=e.circle?a:a*9/16,i=e.corner.includes("left")?o:t-o-a,s=e.corner.includes("top")?o:n-o-r;return{x0:i,y0:s,x1:i+a,y1:s+r}}function or(){if(!Ze)return;if(q){Bn(!0);return}let e=Qa();ce=(ce+1)%e.length,me=e[ce],gn(),R||Me("Camera: "+me),!U&&!I.hidden?ot():te()}function Ho(e){let t=Vn(e,{render:Za});x=t.deck,c=t.nodes,vt();let n={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];Ua.textContent=c.size+(c.size===1?" card":" cards")+" \xB7 "+n,Ke.textContent=t.errCount?t.errCount+" card(s) had errors":""}function Wo(){ie=[...c.values()].filter(o=>!o.parent).map(o=>o.id);let e=0;function t(o,a){let r=c.get(o);if(r.depth=a,r.children.length===0)r._slot=e++;else{r.children.forEach(s=>t(s,a+1));let i=r.children.map(s=>c.get(s)._slot);r._slot=(Math.min(...i)+Math.max(...i))/2}}ie.forEach(o=>t(o,0)),h=[];function n(o){h.push(o),c.get(o).children.forEach(n)}return ie.forEach(n),Math.max(1,e)}function ar(){let e=[],t=[],n=[];return c.forEach(o=>{e[o.depth]=Math.max(e[o.depth]||0,o._h),t[o.depth]=Math.max(t[o.depth]||0,o._w),n[o.depth]=(n[o.depth]||0)+1}),{maxH:e,maxW:t,count:n,maxDepth:e.length-1}}function Uo(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function rr(){let{maxH:e,maxDepth:t}=ar(),n=[0];for(let l=1;l<=t;l++)n[l]=n[l-1]+e[l-1]+Ya;let o=$a-Ve,a=[],r=(l,d)=>{let f=c.get(l);f.cx+=d,f.children.forEach(N=>r(N,d))},i=l=>{let d=c.get(l);a[d.depth]=Math.max(a[d.depth]??-1/0,d.cx+d._w/2),d.children.forEach(i)};function s(l){let d=c.get(l),f=a[d.depth]!==void 0?a[d.depth]+o:-1/0;d.children.length?(d.children.forEach(s),d.cx=(c.get(d.children[0]).cx+c.get(d.children[d.children.length-1]).cx)/2,d.cx-d._w/2<f&&r(l,f-(d.cx-d._w/2))):d.cx=(f===-1/0?0:f)+d._w/2,i(l)}ie.forEach(s),c.forEach(l=>{l.cy=n[l.depth]+l._h/2,Uo(l)})}function ir(e){let t=Math.PI*2/e,n=32,o=[],a=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+n&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+n,r=Math.max(0,...[...c.values()].map(s=>s.depth)),i=0;for(let s=0;s<=r;s++){let l=[...c.values()].filter(f=>f.depth===s);if(!l.length)continue;let d=s===0?ie.length>1?Ka*.5:0:i+Ga;for(let f=0;f<400&&(l.forEach(M=>{let b=(M._slot+.5)*t-Math.PI/2;M.cx=d*Math.cos(b),M.cy=d*Math.sin(b),Uo(M)}),!!l.some((M,b)=>l.some((E,g)=>g>b&&a(M,E))||o.some(E=>a(M,E))));f++)d=d*1.02+10;i=d,o.push(...l)}}function sr(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)n.push(t.currentNode);n.forEach(o=>{let a=o.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!a)return;let r=o.previousSibling;for(;r&&r.nodeType===3&&!r.data.trim();)r=r.previousSibling;let i=r&&r.nodeType===1?r:o.parentElement;i&&Object.entries(je(a[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function Jt(e){let t=document.createElement("figure");t.className="media",e.replaceWith(t),t.appendChild(e);let n=e.getAttribute("alt");return n&&t.insertAdjacentHTML("beforeend","<figcaption>"+C(n)+"</figcaption>"),t}function lr(e,t){let n=document.createElement("figure");return n.className="media yt fragment yt-play"+(e.portrait?" portrait":""),n.innerHTML='<div class="frame"><iframe src="'+co(e)+'" title="'+C(t||"YouTube video")+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'+(t?"<figcaption>"+C(t)+"</figcaption>":""),n}function wo(e,t){let n=t<=4?t:t<=6?3:4;e.style.setProperty("--cols",n),e.style.setProperty("--rows",Math.ceil(t/n))}function dr(e,t){t.querySelectorAll("pre > code.language-svg").forEach(a=>{let r=document.createElement("img");r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(a.textContent.trim()),r.alt="";let i=document.createElement("p");i.appendChild(r),a.parentElement.replaceWith(i)}),t.querySelectorAll(":scope > p").forEach(a=>{let r=a.children.length===1?a.children[0]:null;if(!r)return;let i=r.tagName==="A"&&a.textContent.trim()===r.textContent.trim()?r.getAttribute("href"):r.tagName==="IMG"?r.getAttribute("src"):null,s=i&&lo(i);s&&a.replaceWith(lr(s,r.tagName==="IMG"?r.getAttribute("alt"):""))}),t.querySelectorAll(":scope > ul, :scope > ol").forEach(a=>{let r=[...a.children];!r.length||!r.every(i=>i.querySelector("img")&&!i.textContent.trim())||(a.classList.add("gallery"),r.forEach(i=>{let s=i.querySelector("img");i.innerHTML="",i.appendChild(s),Jt(s)}),r.length>1&&r.every(i=>i.classList.contains("fragment"))?(a.classList.add("carousel"),r[0].classList.remove("fragment","fade-up"),r.forEach((i,s)=>{i.classList.replace("fade-up","current-visible");let l=i.querySelector("figcaption");l&&(l.dataset.count=s+1+" / "+r.length)})):wo(a,r.length))}),t.querySelectorAll(":scope > p").forEach(a=>{if(!cr(a))return;let r=[...a.querySelectorAll("img")];if(r.length===1){a.replaceWith(r[0]),Jt(r[0]);return}let i=document.createElement("div");i.className="gallery grid",a.replaceWith(i),r.forEach(s=>{i.appendChild(s),Jt(s)}),wo(i,r.length)});let n=[...t.children].filter(a=>!/^H[1-6]$/.test(a.tagName)&&!(a.nodeType===1&&a.tagName==="HR")),o=n.filter(a=>a.matches("figure.media"));if(o.length===1&&n.length===1)e.classList.add("card-media");else if(o.length===1){e.classList.add("card-split",n.indexOf(o[0])===0?"media-first":"media-last");let a=document.createElement("div");a.className="split-text",n.filter(r=>r!==o[0]).forEach(r=>a.appendChild(r)),o[0].after(a),n.indexOf(o[0])!==0&&a.after(o[0])}t.querySelector(".gallery")&&e.classList.add("card-gallery")}function qo(e,t){let n=e.querySelector("iframe");n&&n.contentWindow&&n.contentWindow.postMessage(JSON.stringify({event:"command",func:t,args:[]}),"*")}function pr(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)/^\s*steps\s*$/i.test(t.currentNode.data)&&n.push(t.currentNode);n.forEach(o=>{let a=o.nextSibling;for(;a&&a.nodeType!==1;)a=a.nextSibling;a&&/^(UL|OL)$/.test(a.tagName)&&a.querySelectorAll(":scope > li").forEach(r=>r.classList.add("fragment","fade-up"))})}function ur(e){let t=[...e.querySelectorAll(".fragment")].map((a,r)=>({e:a,i:r,k:a.dataset.fragmentIndex}));if(t.every(a=>a.k===void 0))return t.map(a=>[a.e]);let n=0;t.forEach(a=>{a.k=a.k===void 0?n:parseFloat(a.k),n=Math.max(n,a.k)+1}),t.sort((a,r)=>a.k-r.k||a.i-r.i);let o=[];return t.forEach((a,r)=>{r&&t[r-1].k===a.k?o[o.length-1].push(a.e):o.push([a.e])}),o}function bn(e,t,n){!e||!e.frags||(n&&e.el.classList.add("snap"),e.frags.forEach((o,a)=>o.forEach(r=>{let i=r.classList.contains("visible");r.classList.toggle("visible",a<t),r.classList.toggle("current-fragment",a===t-1),r.classList.contains("yt-play")&&i!==a<t&&!n&&qo(r,a<t?"playVideo":"pauseVideo")})),n&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function hr(){try{return x.base?new URL(x.base,X||location.href):X?new URL(X):null}catch{return null}}function mr(e){let t=hr(),n=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(o=>{let a=o.hasAttribute("src")?"src":"href",r=o.getAttribute(a);if(!r||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(r))return;if(!t){a==="src"&&n++;return}let i=t;try{x.site&&(i=new URL(x.site,t))}catch{}o.setAttribute(a,new URL(r,r.startsWith("/")?i:t).href)}),n}function Ot(e){let t=e.el,n=t.querySelector(".body");t.classList.add("measuring"),n.style.zoom="";let o=Ve;e.visual=!!n.querySelector("iframe, .echarts-container, pre > code.language-dot, pre > code.language-d2, pre > code.language-echarts, .diagram, figure.media"),e.visual?o=ht:(n.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||n.querySelectorAll("img").length>=4)&&(o=yo);let a=n.querySelectorAll("table");if(a.length){t.style.width=ht+"px";let i=t.offsetWidth-n.clientWidth;a.forEach(s=>{o=Math.max(o,Math.min(yo,Math.ceil(s.offsetWidth)+i+12))})}let r=n.querySelectorAll(".fragment.grow");if(r.length){t.style.width=o+"px";let i=t.offsetWidth-n.clientWidth;r.forEach(s=>{o=Math.max(o,Math.min(ht,Math.ceil(s.offsetWidth*1.3)+i))})}t.style.width=o+"px",t.scrollWidth>o+2&&(t.style.width=(o=Math.min(ht,t.scrollWidth+24))+"px"),n.scrollWidth>n.clientWidth+2&&(n.style.zoom=(n.clientWidth/n.scrollWidth).toFixed(3)),e._w=o,e._h=t.offsetHeight||on,t.classList.remove("measuring")}function fr(){clearTimeout(ko),ko=setTimeout(()=>{c.forEach(Ot),Qe(),te(!0)},200)}function rn(e){return Zt[e]||(Zt[e]=new Promise((t,n)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>{delete Zt[e],n(new Error("could not load "+e))},document.head.appendChild(o)}))}async function wr(){let e=be,t=[...W.querySelectorAll(".node pre > code.language-dot")];W.querySelectorAll(".node pre > code.language-echarts").forEach(r=>{let i=document.createElement("div");i.className="echarts-container",i.dataset.chart=r.textContent,r.parentElement.replaceWith(i)});let n=[...W.querySelectorAll(".node .echarts-container[data-chart]")],o=[...W.querySelectorAll(".node pre > code.language-d2")];if(!t.length&&!n.length&&!o.length)return;let a=[];if(t.length)try{if(await rn(gr),Qt=Qt||await Viz.instance(),e!==be)return;t.forEach(r=>{let i=document.createElement("div");i.className="diagram";try{i.appendChild(Qt.renderSVGElement(r.textContent))}catch(s){i.className="diagram err",i.textContent="Diagram error: "+s.message}r.parentElement.replaceWith(i)})}catch{a.push("diagrams")}if(o.length)try{if(!mt){let i=await import(vr);mt=new i.D2}if(e!==be)return;let r=yr[yt()];for(let i of o){let s=document.createElement("div");s.className="diagram d2";try{let l=await mt.compile(xr(i.textContent));s.innerHTML=await mt.render(l.diagram,{...l.renderOptions||{},themeOverrides:r,darkThemeOverrides:r})}catch(l){s.className="diagram err",s.textContent="Diagram error: "+(l.message||l)}if(e!==be)return;i.parentElement.replaceWith(s)}}catch{a.push("D2 diagrams")}if(n.length)try{if(await rn(br),e!==be)return;n.forEach(r=>{let i;try{i=JSON.parse(r.dataset.chart)}catch{r.textContent="Chart data is not valid JSON.";return}echarts.init(r,yt()==="light"?null:"dark",{renderer:"svg"}).setOption(Object.assign({backgroundColor:"transparent",animation:!Ae},i))})}catch{a.push("charts")}e===be&&(a.length&&(Ke.textContent="Could not load the "+a.join(" and ")+" renderer (offline?)"),c.forEach(Ot),Qe(),te(!0))}function kr(){let e=[];return h.forEach(t=>{let n=Je(t),o=e[e.length-1];o&&o.sec===n?o.ids.push(t):e.push({sec:n,ids:[t]})}),e}function Er(){let n=0,o=0,a=0;kr().forEach((r,i)=>{let s=Math.max(...r.ids.map(f=>c.get(f)._h));i&&(n+=a/2+120+s/2);let l=o,d=o;r.ids.forEach((f,N)=>{let M=c.get(f);N&&(l+=90+M._w/2),M.cx=l,M.cy=n,d=l,l+=M._w/2}),o=d,a=s})}function Sr(){c.forEach(e=>{e.cx=0,e.cy=0})}function $o(){be++,window.echarts&&W.querySelectorAll(".echarts-container").forEach(n=>{let o=echarts.getInstanceByDom(n);o&&o.dispose()}),W.querySelectorAll("div.node").forEach(n=>n.remove());let e=Wo(),t=0;c.forEach(n=>{let o=document.createElement("div");o.className="node",o.tabIndex=0,o.dataset.id=n.id;let a=n.parent?It(n.id).slice(0,-1).map(i=>c.get(i).title).join(" / "):"";o.innerHTML=(a?'<div class="crumb">'+C(a)+"</div>":"")+'<div class="body">'+n.html+"</div>"+(n.err?'<div class="err-badge">!</div>':"");let r=o.querySelector(".body");sr(r),pr(r),dr(o,r),r.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=mr(r),n.frags=ur(r),r.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",fr,{once:!0})}),o.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));c.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),u.active||A(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),o.addEventListener("click",()=>{u.active||A(n.id)}),o.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===o&&A(n.id)}),W.appendChild(o),n.el=o,bn(n,n.frags.length)}),t&&!Ke.textContent&&(Ke.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),c.forEach(Ot),Qe(e),wr()}function Qe(e){e===void 0&&(e=Wo()),P==="radial"?ir(e):P==="path"?Er():P==="focus"?Sr():rr(),W.classList.toggle("focus",P==="focus"),c.forEach(t=>{let n=t.el.style;n.setProperty("--cx",t.cx),n.setProperty("--cy",t.cy)}),Lr(),Re(),wn()}function Lr(){let e="";if(P==="focus"){Xt.innerHTML="";return}if(P==="path"){for(let t=1;t<h.length;t++){let n=c.get(h[t-1]),o=c.get(h[t]);e+='<path data-from="'+n.id+'" data-to="'+o.id+'" d="M '+n.cx+" "+n.cy+" L "+o.cx+" "+o.cy+'"/>'}Xt.innerHTML=e;return}c.forEach(t=>{if(!t.parent)return;let n=c.get(t.parent);if(P==="radial")e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+n.cy+" L "+t.cx+" "+t.cy+'"/>';else{let o=n.cy+n._h/2,a=t.cy-t._h/2,r=o+(a-o)/2;e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+o+" L "+n.cx+" "+r+" L "+t.cx+" "+r+" L "+t.cx+" "+a+'"/>'}}),Xt.innerHTML=e}function It(e){let t=[],n=e;for(;n;)t.unshift(n),n=c.get(n).parent;return t}function Ie(){let e=T.clientWidth,t=T.clientHeight;W.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+S.zoom+") translate("+-S.x+"px,"+-S.y+"px)",Qo()}function vn(){Ye&&(Ye.kill(),Ye=null)}function Yo(e,t){if(vn(),t||Ae||!window.gsap){Object.assign(S,e),Ie();return}let n=T.clientWidth,o=Math.hypot(e.x-S.x,e.y-S.y),a=e.zoom,r=gsap.timeline({onUpdate:Ie,onComplete:()=>{Ye=null}}),{zoom:i,...s}=e,l=o*Math.min(S.zoom,a),d=Math.max(.55,Math.min(1.3,.55+l/n*.3));if(r.to(S,{...s,duration:d,ease:"power2.inOut"},0),l>n*1.2){let f=Math.max(.06,Math.min(S.zoom,a,n*.9/(o+Ve)));r.to(S,{zoom:f,duration:d/2,ease:"sine.out"},0).to(S,{zoom:a,duration:d/2,ease:"sine.in"},d/2)}else r.to(S,{zoom:a,duration:d,ease:"power2.inOut"},0);Ye=r}function Cr(){let e=T.getBoundingClientRect(),t=14,n=[];if(!le.hidden&&le.offsetWidth){let a=le.getBoundingClientRect();n.push({x0:a.left-e.left-t,y0:a.top-e.top-t,x1:a.right-e.left+t,y1:a.bottom-e.top+t})}let o=nr();return o&&n.push({x0:o.x0-t,y0:o.y0-t,x1:o.x1+t,y1:o.y1+t}),n}function Tr(){let e=T.clientWidth,t=T.clientHeight,n=[{x0:16,y0:R?20:56,x1:e-16,y1:t-(R?20:74)}];return Cr().forEach(o=>{let a=[];n.forEach(r=>{if(o.x1<=r.x0||o.x0>=r.x1||o.y1<=r.y0||o.y0>=r.y1){a.push(r);return}[{...r,x1:Math.min(r.x1,o.x0)},{...r,x0:Math.max(r.x0,o.x1)},{...r,y1:Math.min(r.y1,o.y0)},{...r,y0:Math.max(r.y0,o.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&a.push(i)})}),a.length&&(n=a)}),n}function sn(e,t,n){let o=T.clientWidth,a=T.clientHeight,r=null;return Tr().forEach(i=>{let s=n*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!r||s>r.zoom)&&(r={zoom:s,sx:(i.x0+i.x1)/2-o/2,sy:(i.y0+i.y1)/2-a/2})}),r}function Go(e,t,n,o){return{x:e-n.sx/o,y:t-n.sy/o}}function Ee(e,t){let n=c.get(e);if(!n)return;let o=sn(n._w,n._h,Xe),a=Je(e),r=h.filter(l=>Je(l)===a&&!c.get(l).visual).map(l=>{let d=c.get(l);return sn(d._w,d._h,Xe).zoom}).sort((l,d)=>l-d),i=r.length?r[Math.floor((r.length-1)/2)]:o.zoom,s=Math.max(.2,Math.min(5,o.zoom,i));Yo(Object.assign(Go(n.cx,n.cy,o,s),{zoom:s}),t)}function et(e){let t=[...c.values()];if(!t.length)return;let n=T.clientWidth,o=T.clientHeight,a=Math.min(...t.map(f=>f.cx-f._w/2)),r=Math.max(...t.map(f=>f.cx+f._w/2)),i=Math.min(...t.map(f=>f.cy-f._h/2)),s=Math.max(...t.map(f=>f.cy+f._h/2)),l=sn(r-a,s-i,.94),d=Math.max(.05,Math.min(1,l.zoom));Yo(Object.assign(Go((a+r)/2,(i+s)/2,l,d),{zoom:d}),e)}function te(e){p&&c.has(p)?Ee(p,e):et(e)}function Re(){let e=p?It(p):[];c.forEach(t=>{let n=t.el;n.classList.toggle("current",t.id===p),n.classList.toggle("active-path",e.includes(t.id))}),W.querySelectorAll("#connectors path").forEach(t=>{let n=P==="path"?!!p&&h.indexOf(t.dataset.to)<=h.indexOf(p):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",n)}),Ir(e),Vo()}function Ko(){return $n(new URLSearchParams(location.search).get("duration")??x.duration)}function Mr(){return R&&Ko()>0&&(!u.active||/^always$/i.test(x.timer||""))}function xt(){let e=Mr()&&de.start>0;if(ye.classList.toggle("timed",e),!e){ye.classList.remove("over");return}let n=(u.active&&u.t0?St():performance.now()-de.start)/Ko();ye.firstChild.style.width=Math.min(100,n*100)+"%",ye.classList.toggle("over",n>=1)}function Br(){de.start=performance.now(),clearInterval(de.timer),de.timer=setInterval(xt,1e3),xt()}function Or(){clearInterval(de.timer),de.timer=null,de.start=0,xt()}function Vo(){let e=R&&h.length>1&&!/^(off|no|false)$/i.test(x.progress||"");if(ye.classList.toggle("show",e),!e)return;xt();let t=h.indexOf(p),n=0,o=0;h.forEach((a,r)=>{let i=Se(c.get(a)).length;n+=i,r<t?o+=i:r===t&&(o+=Math.min(ee,i-1)+1)}),ye.lastChild.style.width=(n?o/n*100:0)+"%"}function Ir(e){vo.innerHTML=e.map((t,n)=>(n>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===p?" here":"")+'" data-id="'+C(t)+'">'+C(c.get(t).title)+"</button>").join(""),vo.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{u.active||A(t.dataset.id)}))}function tt(e){let t=c.get(p);t&&(bn(t,Fo().frag,e),gn(),(I.hidden||!Oe||!Oe.full)&&Ar(t),xn(t))}function Pr(e){return!h.length||e.id!==h[0]&&e.id!==h[h.length-1]||e.el.querySelector("[data-gsap], .title-scramble")?null:[...e.el.querySelector(".body").children].filter(t=>!t.classList.contains("fragment"))}function Ar(e){if(e._played||!window.gsap||Ae)return;e._played=!0;let t=Pr(e);if(t&&t.length){e._auto=t;let[n,...o]=t;/^H[1-3]$/.test(n.tagName)&&!n.children.length?(n.classList.add("auto-scramble"),Eo(n)):o.unshift(n),gsap.from(o,{opacity:0,y:24,duration:.7,ease:"power2.out",delay:.5,stagger:.45})}e.el.querySelectorAll("[data-gsap]").forEach(n=>{let o;try{o=JSON.parse(n.dataset.gsap)}catch{return}let a={duration:o.duration??1,delay:o.delay??0,ease:o.ease||"power2.out"};o.to?gsap.fromTo(n,o.from||{},Object.assign({},o.to,a)):o.from&&gsap.from(n,Object.assign({},o.from,a))}),e.el.querySelectorAll(".title-scramble").forEach(Eo)}function yn(e){!e||!e._played||(e._played=!1,window.gsap&&(e._auto&&(e._auto.forEach(t=>{gsap.killTweensOf(t),gsap.set(t,{clearProps:"opacity,transform"})}),e._auto=null),e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let n={};try{n=JSON.parse(t.dataset.gsap)}catch{}let o=new Set(Object.keys(Object.assign({},n.from,n.to)).map(a=>zr.includes(a)?"transform":a));o.size&&gsap.set(t,{clearProps:[...o].join(",")})}),e.el.querySelectorAll(".title-scramble, .auto-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function Eo(e){let t=e.dataset.text||(e.dataset.text=e.textContent),n=Array.from(t),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",a={p:0};e._scramble=gsap.to(a,{p:1,duration:1.4,ease:"none",onUpdate(){let r=Math.floor(a.p*n.length);e.textContent=n.map((i,s)=>s<r||/\s/.test(i)?i:o[Math.random()*o.length|0]).join("")},onComplete(){e.textContent=t}})}function xn(e){clearTimeout(ze),!(!R||!e||!e.autoslide||u.active&&(!u.t0||u.paused))&&(ze=setTimeout(()=>{p===e.id&&Pe(1)},e.autoslide))}function Xo(e){let t=e&&e!==h[0]?e:"";try{v&&v.kind==="share"?history.replaceState(null,"",location.pathname+location.search+Gt(v.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function A(e,t,n){if(!c.has(e))return;if(e!==p){me=null,ce=-1,ee=n?Se(c.get(e)).length-1:0;let r=c.get(p);r&&P==="focus"&&!t&&(r.el.classList.add("leaving"),setTimeout(()=>r.el.classList.remove("leaving"),600)),Jo()}let o=e!==p;if(p=e,clearTimeout(V),V=null,o&&P==="focus"&&!t&&!Ae){let r=c.get(e).el;r.classList.add("entering"),r.offsetWidth,r.classList.remove("entering")}tt(o),o&&Cn("slide",e);let a=c.get(e);o&&a.mapFirst&&!n&&!t&&P!=="focus"?(et(),V=setTimeout(()=>{V=null,p===e&&Ee(e)},1900)):Ee(e,t),Re(),wn(),Xo(e)}function Jo(){let e=c.get(p);e&&(e.el.querySelectorAll("figure.yt").forEach(t=>qo(t,"pauseVideo")),bn(e,e.frags.length,!0),yn(e))}function Rr(){if(!p&&xe&&c.has(xe)){Zo();return}p&&(xe=p),P==="focus"&&we("path"),Jo(),clearTimeout(ze),p=null,Re(),wn(),et(),Xo(null)}function Zo(){if(V)return clearTimeout(V),V=null,Ee(p),!0;if(!p&&xe&&c.has(xe)){let e=xe;return xe=null,A(e),!0}return!1}function Pe(e){if(!p){h.length&&A(h[e>0?0:h.length-1]);return}if(V&&e>0){clearTimeout(V),V=null,Ee(p);return}let t=Se(c.get(p)),n=Math.min(ee,t.length-1)+e;if(n>=0&&n<t.length){ee=n,me=null,ce=-1,tt(),!U&&!I.hidden&&Oe.used?ot():te(),Re();return}let o=h.indexOf(p)+e;o>=0&&o<h.length&&A(h[o],!1,e<0)}function Dr(){let e=c.get(p);e&&e.parent&&A(e.parent)}function _r(){let e=c.get(p);e&&e.children.length?A(e.children[0]):!p&&h.length&&A(h[0])}function wn(){let e=[...c.values()];if(!e.length){nn.innerHTML="",ae=null;return}qa.textContent="map";let t=g=>g.cx,n=g=>g.cy,o=Math.min(...e.map(t))-Ve/2,a=Math.max(...e.map(t))+Ve/2,r=Math.min(...e.map(n))-on/2,i=Math.max(...e.map(n))+on/2,s=16,l=180,d=130,f=Math.min((l-2*s)/Math.max(1,a-o),(d-2*s-6)/Math.max(1,i-r)),N=l/2-(o+a)/2*f,M=d/2+5-(r+i)/2*f,b=p?It(p):[],E="";e.forEach(g=>{if(!g.parent)return;let B=c.get(g.parent);E+='<line x1="'+(t(B)*f+N)+'" y1="'+(n(B)*f+M)+'" x2="'+(t(g)*f+N)+'" y2="'+(n(g)*f+M)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(g=>{let B=g.id===p?"var(--accent)":b.includes(g.id)?"var(--accent-teal)":"var(--node-border)";E+='<circle data-id="'+C(g.id)+'" cx="'+(t(g)*f+N)+'" cy="'+(n(g)*f+M)+'" r="'+(g.id===p?4:3)+'" fill="'+B+'"><title>'+C(g.title)+"</title></circle>"}),E+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',nn.innerHTML=E,ae={s:f,ox:N,oy:M},Qo()}function Qo(){let e=document.getElementById("mm-viewport");if(!e||!ae)return;let t=T.clientWidth/S.zoom,n=T.clientHeight/S.zoom;e.setAttribute("x",(S.x-t/2)*ae.s+ae.ox),e.setAttribute("y",(S.y-n/2)*ae.s+ae.oy),e.setAttribute("width",Math.max(2,t*ae.s)),e.setAttribute("height",Math.max(2,n*ae.s))}function zt(e){Ho(J.value),p&&!c.has(p)&&(p=null),$o(),p?A(p,e):h.length?A(h[0],e):(p=null,et(!0))}function we(e,t){P=e,Q("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(n=>n.classList.toggle("active",n.dataset.mode===e)),c.size&&(!t&&!Ae&&(W.classList.add("morph"),setTimeout(()=>W.classList.remove("morph"),700)),Qe(),Ie(),p?Ee(p,t):et(t))}function ea(e){return Math.max(.04,Math.min(5,e))}function jr(e){Xe=Math.round(Math.max(Va,Math.min(Xa,e))*100)/100,Q("slidetake:slideSize",Xe),p&&Ee(p)}function Lo(e){p?jr(Xe+e*.1):ta(e>0?1.2:1/1.2)}function ta(e,t,n){vn();let o=ea(S.zoom*e);if(t!==void 0){let a=T.getBoundingClientRect(),r=t-a.left-a.width/2,i=n-a.top-a.height/2;S.x+=r/S.zoom-r/o,S.y+=i/S.zoom-i/o}S.zoom=o,Ie()}function Pt(){O||(he.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!he.classList.contains("collapsed")))}function fe(e){R=e,document.body.classList.toggle("presenting",e),va();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!p&&h.length&&A(h[0]);let n=x.camera||[...c.values()].some(o=>o.camera);e&&n&&!U&&!q&&ot(),e?xn(c.get(p)):clearTimeout(ze),e?Br():Or(),Vo()}function St(){return(u.paused?u.pauseAt:performance.now())-u.t0-u.pausedMs}function At(e){e.classList.add("open")}function Sn(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function Wr(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,n,...o]=e.split(":");return wt.value=t||"localhost",kt.value=n||"4455",Et.value=o.join(":"),!0}try{let t=JSON.parse(Z("slidetake:obs")||"null");t&&(wt.value=t.host||"localhost",kt.value=t.port||"4455",Et.value=t.password||"",kn.checked=!0)}catch{}return!1}function aa(){if(kn.checked)Q("slidetake:obs",JSON.stringify({host:wt.value.trim(),port:kt.value.trim(),password:Et.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function Ue(e,t){Oo.textContent=e,Oo.className=t||""}function qr(e){return location.protocol==="https:"&&!Ur(e)}async function ra(){let e=wt.value.trim()||"localhost",t="ws://"+e+":"+(kt.value.trim()||"4455");if(qr(e)){ve=!1,Ge.disabled=!0,Ue($r,"err");return}Ue("Connecting to "+t+"\u2026");try{await rn(Nr);let n=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(H)try{await H.disconnect()}catch{}H=new n,H.on("ConnectionClosed",()=>{ve=!1,Ue("Disconnected from OBS","err"),Ge.disabled=!0}),H.on("RecordStateChanged",a=>{a.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&ke&&(ke(),ke=null),a.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&u.active&&u.withObs&&!u.finishing&&Rt("Stopped in OBS")});let o=await H.connect(t,Et.value||void 0);ve=!0;try{let a=await H.call("GetVideoSettings");a&&a.fpsNumerator&&a.fpsDenominator&&(na=a.fpsNumerator/a.fpsDenominator)}catch{}Ue("Connected"+(o&&o.obsWebSocketVersion?" \xB7 OBS WebSocket "+o.obsWebSocketVersion:""),"ok"),aa()}catch(n){ve=!1,Ue("Could not connect ("+(n&&n.message||n)+"). Is OBS running with its WebSocket server on, and is the password right?","err")}Ge.disabled=!ve}function Yr(){let e=document.getElementById("rec-screen"),t=screen.width,n=screen.height;if(Math.abs(t/n-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+n+"), right for YouTube.</span>";return}let o=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[a,r]=o.reduce((s,l)=>Math.abs(l[1]-t/n)<Math.abs(s[1]-t/n)?l:s),i=Math.abs(r-t/n)<.005?a:"about "+a;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+n+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function cn(){if(!Ze)return;let e=h.reduce((n,o)=>n+Se(c.get(o)).length,0),t=x.camera||[...c.values()].some(n=>n.camera);document.getElementById("rec-deck-info").innerHTML=C(x.title||(ie[0]?c.get(ie[0]).title:"This deck"))+" \xB7 "+h.length+" slides \xB7 "+e+" presses"+(t&&q?'<br><span class="warn">The camera is off. Press C first if this take should include your webcam.</span>':""),Ge.disabled=!ve,Jr(),Yr(),At(Fr)}async function ia(e){if(u.active||!h.length)return;Sn(),Object.assign(u,{active:!0,withObs:e,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null}),document.body.classList.add("recording"),ga();let t=document.getElementById("rec-layout").value;t!=="current"&&t!==P&&we(t,!0),R||fe(!0),p===h[0]&&(ee=0,me=null,ce=-1),A(h[0],!0);for(let o=3;o>0;o--)if(ft.querySelector(".num").textContent=o,ft.classList.add("show"),await En(1e3),!u.active)return;if(ft.classList.remove("show"),await oa(),e){let o=new Promise(a=>{ke=a,setTimeout(()=>{ke&&(ke(),ke=null)},2500)});try{await H.call("StartRecord")}catch(a){Ln("OBS could not start recording: "+(a&&a.message||a));return}if(await o,!u.active)return}u.counting=!1,u.t0=performance.now();let n=c.get(p);yn(n),tt(!0),Cn("slide",p)}function Ln(e){u.active=!1,u.counting=!1,ft.classList.remove("show"),document.body.classList.remove("recording"),R&&fe(!1),Me(e)}function Cn(e,t){if(!u.active||!u.t0||u.finishing)return;let n=c.get(t),o={id:t,title:n?n.title:t,retake:e==="retake",t:Math.round(St()),obsT:null};u.events.push(o),u.withObs&&ve&&(H.call("GetRecordStatus").then(a=>{a&&typeof a.outputDuration=="number"&&(o.obsT=a.outputDuration)}).catch(()=>{}),n&&H.call("CreateRecordChapter",{chapterName:(o.retake?"RETAKE \xB7 ":"")+n.title}).catch(()=>{}))}function Gr(e){let t=e.key;if((To.includes(t)||Mo.includes(t)||Bo.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){u.counting?Ln("Take cancelled"):Rt("Stopped early");return}if(!(u.counting||u.finishing)){if(Bo.includes(t)){Xr();return}u.paused||(To.includes(t)?Kr():Mo.includes(t)&&Vr())}}function Kr(){let e=Se(c.get(p));Math.min(ee,e.length-1)>=e.length-1&&h.indexOf(p)===h.length-1?Rt():Pe(1)}function Vr(){let e=c.get(p);e&&(Cn("retake",p),ee=0,me=null,ce=-1,yn(e),tt(!0),!U&&!I.hidden&&Oe.used?ot():te(),Re())}async function Xr(){u.t0&&(u.paused?(ln.classList.remove("show"),await oa(),u.withObs&&await H.call("ResumeRecord").catch(()=>{}),u.pausedMs+=performance.now()-u.pauseAt,u.paused=!1,xn(c.get(p))):(u.paused=!0,u.pauseAt=performance.now(),clearTimeout(ze),u.withObs&&await H.call("PauseRecord").catch(()=>{}),ln.classList.add("show")))}async function Rt(e){if(!u.active||u.finishing)return;if(u.counting){Ln("Take cancelled");return}u.finishing=!0,clearTimeout(ze),u.paused&&(u.pausedMs+=performance.now()-u.pauseAt,u.paused=!1,ln.classList.remove("show"));let t=Math.round(St()),n=null;if(u.withObs){await En(1200),t=Math.round(St());try{let a=await H.call("GetRecordStatus");a&&typeof a.outputDuration=="number"&&(n=a.outputDuration)}catch{}try{let a=await H.call("StopRecord");u.outputPath=a&&a.outputPath}catch(a){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(a&&a.message||a)+")"}}u.active=!1,u.finishing=!1,document.body.classList.remove("recording"),R&&fe(!1);let o={key:Dt(),deckTitle:x.title||c.get(h[0]).title,date:new Date().toISOString(),withObs:u.withObs,outputPath:u.outputPath,reason:e||"",total:t,totalObs:n,fps:na,events:u.events.map(a=>({id:a.id,title:a.title,retake:a.retake,t:a.t,obsT:a.obsT})),picks:{}};Tn(o),ha(o)}function Dt(){return Le(x.title||(h[0]?c.get(h[0]).title:"deck"))}function sa(){try{return JSON.parse(Z("slidetake:sessions")||"[]")}catch{return[]}}function Tn(e){let t=sa().filter(n=>n.date!==e.date);t.unshift(e),Q("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function Jr(){let e=document.getElementById("rec-sessions"),t=sa().filter(n=>n.key===Dt());e.innerHTML=t.length?"<h3>Earlier takes of this deck</h3>"+t.map((n,o)=>'<div class="row"><button class="btn small" data-session="'+o+'">Review</button><span>'+C(new Date(n.date).toLocaleString())+" \xB7 "+K(n.totalObs??n.total)+(n.withObs?"":" \xB7 rehearsal")+(n.outputPath?" \xB7 "+C(Ce(n.outputPath)):"")+"</span></div>").join(""):"",e.querySelectorAll("[data-session]").forEach(n=>n.onclick=()=>{Sn(),ha(t[+n.dataset.session])})}function Je(e){let t=c.has(e)?It(e):[e];return t[Math.min(1,t.length-1)]}function la(e,t){let n=Je(e);return{sec:n,title:c.has(n)?c.get(n).title:t}}function pa(){let e=Object.keys(x).filter(t=>t==="tags"||/_tags$/.test(t)).flatMap(t=>[].concat(x[t])).filter(t=>typeof t=="string");return[...new Set(e.map(t=>t.trim()).filter(Boolean))]}function Zr(){return[].concat(x.related||[]).map(e=>{let t=String(e).match(/^\[([^\]]+)\]\(([^)]+)\)$/),n=String(e).split("|");return t?t[1]+": "+t[2]:n.length===2?n[0].trim()+": "+n[1].trim():String(e)})}function Qr(){if(x.permalink||x.url)return x.permalink||x.url;let e=x.site||Z("slidetake:site");if(!e||!X)return"";try{let t=new URL(X).pathname.replace(/\/index\.md$/i,"/").replace(/\.md$/i,"/");return new URL(t,e).href}catch{return""}}function ua(e){let t=ca(e),n=document.getElementById("rv-link").value.trim(),o=Zr(),a=pa(),r=[];x.summary&&r.push(x.summary),n&&r.push("\u{1F4D1} Slides: "+n),t.lines.length>=3&&r.push(`Chapters
`+t.lines.join(`
`)),o.length&&r.push(`Related
`+o.map(i=>"\u2022 "+i).join(`
`)),a.length&&r.push(a.slice(0,3).map(i=>"#"+i.replace(/[^\p{L}\p{N}]+/gu,"")).join(" ")),document.getElementById("rv-yt-desc").value=r.join(`

`),document.getElementById("rv-chapters-note").textContent=(t.dropped?t.dropped+" section"+(t.dropped>1?"s were":" was")+" under 10 seconds and folded into the chapter before, as YouTube requires. ":"")+(t.lines.length<3?"YouTube needs at least three chapters, so none are listed. ":"")+"Final length "+K(t.length)+"."}function ha(e){j=e,F=null;let t=He(e),n=e.events.filter(a=>a.retake).length;document.getElementById("rv-title").textContent=(e.withObs?"Review the take \xB7 ":"Rehearsal \xB7 ")+e.deckTitle,document.getElementById("rv-info").textContent=[e.reason,new Date(e.date).toLocaleString(),(e.withObs?"recorded ":"ran ")+K(e.totalObs??e.total),t.size+" slides",n?n+" retake"+(n>1?"s":""):"no retakes",e.outputPath?"saved to "+e.outputPath:e.withObs?"":"nothing was recorded"].filter(Boolean).join(" \xB7 "),document.getElementById("rv-file").textContent=e.outputPath?" ("+Ce(e.outputPath)+")":"",document.getElementById("rv-yt-title").value=e.deckTitle;let o=ut(e);Lt.value=[...Lt.options].reduce((a,r)=>Math.abs(r.value-o)<Math.abs(a.value-o)?r:a).value,document.getElementById("rv-yt-tags").value=pa().join(", "),document.getElementById("rv-link").value=Qr(),z.src&&pe!==Ce(e.outputPath)&&e.outputPath&&(z.removeAttribute("src"),z.load(),pe=""),document.getElementById("rv-novideo").hidden=!!z.src,_t(),At(Hr),oi(e)}function _t(){let e=j,t=document.getElementById("rv-list"),n=null;t.innerHTML=[...He(e).values()].map(o=>{let a=e.picks[o.id]??o.takes.length,r=Je(o.id),i=r!==n;n=r;let s=o.takes.map(l=>'<button class="rv-chip'+(a===l.no?" on":"")+'" data-id="'+C(o.id)+'" data-take="'+l.no+'">'+(o.takes.length>1?"Take "+l.no+" \xB7 ":"")+K(l.end-l.start)+"</button>").join("")+'<button class="rv-chip skip'+(a===0?" on":"")+'" data-id="'+C(o.id)+'" data-take="0">Leave out</button>';return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+C(o.title)+"<small>"+K(o.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(o=>o.onclick=()=>{e.picks[o.dataset.id]=+o.dataset.take,Tn(e),_t();let a=He(e).get(o.dataset.id),r=a&&a.takes[+o.dataset.take-1];r&&Tt([{start:r.start,end:r.end,title:a.title+(a.takes.length>1?" \xB7 take "+r.no:"")}])}),document.getElementById("rv-ffmpeg").value=da(e,document.getElementById("rv-mode").value),ua(e)}function Tt(e){if(!z.src){Ct=e,$.textContent=pn?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.";return}Ct=null,F={ranges:e,i:0},$.textContent="\u25B6 "+e[0].title;let t=()=>{z.currentTime=e[0].start/1e3,z.play().catch(n=>{n&&n.name!=="AbortError"&&($.textContent="Could not play: "+n.message)})};z.readyState>=1?t():z.addEventListener("loadedmetadata",t,{once:!0})}function ma(e){return new Promise((t,n)=>{let o=indexedDB.open(e||"slidetake",1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>t(o.result),o.onerror=()=>n(o.error)})}async function ei(e){let t=async n=>{let o=await ma(n);return await new Promise(a=>{let r=o.transaction("kv").objectStore("kv").get(e);r.onsuccess=()=>a(r.result),r.onerror=()=>a(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function ti(e,t){try{(await ma()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function jt(e){pn=!0;try{return await ni(e)}finally{pn=!1}}async function ni(e){let t=await e.getFile();for(let n=0;n<10;n++){await new Promise(a=>setTimeout(a,1e3));let o=await e.getFile();if(o.size===t.size&&o.lastModified===t.lastModified)return o;t=o}return t}function nt(e,t,n){z.src&&URL.revokeObjectURL(z.src),qe=t||null,n||(dn=0),z.src=URL.createObjectURL(e),pe=e.name,document.getElementById("rv-novideo").hidden=!0,$.textContent="Loaded "+e.name+". Click a take to preview it.",Ct?Tt(Ct):n&&F&&Tt(F.ranges.slice(F.i)),j&&(document.getElementById("rv-ffmpeg").value=da(j,document.getElementById("rv-mode").value))}async function oi(e){let t=Ce(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(pe===t&&z.src))try{let n=await ei("obs-folder");if(!n||await n.queryPermission({mode:"read"})!=="granted")return;let o=await n.getFileHandle(t);$.textContent="Opening "+t+"\u2026",nt(await jt(o),o)}catch{}}function Me(e,t){u.active||(gt.textContent=e,gt.classList.add("show"),clearTimeout(un),t||(un=setTimeout(()=>gt.classList.remove("show"),9e3)))}function ga(){clearTimeout(un),gt.classList.remove("show")}function tn(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function ba(){U&&U.getTracks().forEach(t=>t.stop()),U=null;let e=I.querySelector("video");e&&e.remove()}async function ot(){if(!(U||q)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){Me("Camera not available on this page."+tn());return}if(re.disabled)return;re.disabled=!0,Me("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{U=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),ga()}catch(t){let n=t&&t.name;Me(n==="NotAllowedError"||n==="SecurityError"?"Camera access was blocked."+tn():n==="NotFoundError"||n==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":n==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(n?" ("+n+")":"")+"."+tn());return}finally{re.disabled=!1,Mn()}U.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{ba(),vt(),te()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=U,I.appendChild(e)}vt(),te()}}function Mn(){re.querySelector("svg")||(re.innerHTML=ai+'<span class="lbl"> Camera</span>'),re.classList.toggle("on",!q),re.setAttribute("aria-pressed",String(!q)),re.title=q?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function Bn(e){e&&!Ze||(q=!e,q&&ba(),me=null,ce=-1,ee=Math.min(ee,Math.max(0,Se(c.get(p)).length-1)),Mn(),vt(),tt(),Re(),te(),R||Me(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&ot())}function va(){document.body.classList.remove("idle"),clearTimeout(Io),R&&(Io=setTimeout(()=>document.body.classList.add("idle"),2e3))}function Mt(e,t){Be.textContent=e,Be.classList.add("show"),clearTimeout(Po),Po=setTimeout(()=>Be.classList.remove("show"),t||2500)}function hn(e,{keepObs:t=!0,keepEdit:n=!0,slide:o=""}={}){let a=new URL(to(e),location.origin);return new URLSearchParams(location.search).forEach((r,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!n||a.searchParams.set(i,r)}),o&&(a.hash=o),a.href.replace(a.pathname,a.pathname.replace(/%40/g,"@"))}async function ii(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(v.kind==="source")return{link:hn(v.source,t),inside:!1};if(v.kind==="copy"&&dt(k)&&["url","gist","builtin"].includes(k.origin.kind))return{link:hn(k.origin,t),inside:!1};let o=v.kind==="share"?v.data:await oo(J.value),a=new URLSearchParams(location.search);return["src","obs","edit"].forEach(r=>a.delete(r)),{link:location.origin+"/share"+(a.toString()?"?"+a:"")+Gt(o,e),inside:!0}}function si(){let e=Z("slidetake:draft");if(!e||e===Nt)return null;let t=lt(e,{kind:"file",name:"your earlier draft"},{exported:!0});Q("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function at(){Q("slidetake:copy",JSON.stringify(k))}function De(){if(O)return;let e;if(v.kind==="copy")e='<span class="mine">Your copy of '+C(oe(k.origin))+"</span>"+(ct(k)?' <span class="edited">\xB7 edited</span>':"");else{let n=v.kind==="share"?"a shared deck":oe(v.source);e='<span class="mine">'+C(n.charAt(0).toUpperCase()+n.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,he.classList.toggle("unsaved",v.kind==="copy"&&ct(k)),document.getElementById("btn-reset").hidden=!(v.kind==="copy"&&!dt(k));let t=document.getElementById("continue");t.hidden=v.kind==="copy"||!k,k&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+oe(k.origin))}function ya(e){return!k||!ct(k)?!0:confirm("Your copy of "+oe(k.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function xa(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function li(){let e=v.kind==="share"?{kind:"shared"}:v.source;return ya("a copy of "+oe(e))?(k=lt(v.text,e),v={kind:"copy"},history.pushState(null,"",xa()+(p&&p!==h[0]?"#"+encodeURIComponent(p):"")),Mt("Editing your own copy of "+oe(e)+". The original is unchanged.",4e3),!0):(J.value=v.text,!1)}function ci(){v={kind:"copy"},history.pushState(null,"",xa()),he.classList.contains("collapsed")&&Pt(),J.value=k.text,zt(!0),De()}async function di(e){if(e.kind==="builtin")return bt[e.id]??bt.home;if(e.kind==="gist"){let n=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!n.ok)throw new Error(n.status===404?"no such gist":n.status+" "+n.statusText);let o=Object.values((await n.json()).files||{}),a=o.find(r=>r.filename===e.file)||o.find(r=>/\.(md|markdown)$/i.test(r.filename))||o[0];if(!a)throw new Error("the gist has no files");return X=a.raw_url,a.truncated?await(await fetch(a.raw_url)).text():a.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return X=new URL(e.url,location.href).href,await t.text()}function Do(){return v={kind:"source",source:{kind:"builtin",id:"home"},text:bt.home},v.text}async function pi(){if(O)return X=O.base||location.href,v={kind:"source",source:{kind:"url",url:X},text:Kn(O.settings||{})+String(O.markdown||"")},v.text;if(Y.page==="edit"){if(k)return v={kind:"copy"},k.text;history.replaceState(null,"","/new"+location.search),Y.page="pick"}if(Y.page==="pick")return At(document.getElementById("new-dialog")),v={kind:"source",source:{kind:"builtin",id:"template:blank"},text:bt["template:blank"]},v.text;if(Y.page==="share")try{let e=await ao(Y.data);return v={kind:"share",data:Y.data,text:e},e}catch{return Mt("This link's deck is damaged or cut short, so it could not be opened.",6e3),Do()}try{let e=await di(Y.source);return v={kind:"source",source:Y.source,text:e},e}catch(e){return Ke.textContent="Could not load the deck ("+e.message+")",Mt("Could not load "+oe(Y.source)+": "+e.message,6e3),Do()}}var O,_o,Ze,Ae,bt,J,T,W,Xt,vo,Ua,Ke,nn,qa,he,Ve,yo,ht,on,$a,Ya,Ga,Ka,Va,Xa,Xe,c,h,ie,p,P,R,x,q,U,le,I,Ja,S,Ye,xo,ee,me,ce,Oe,cr,X,ko,gr,br,vr,mt,yr,xr,Zt,be,Qt,ye,de,zr,ze,V,xe,ae,So,en,Te,Co,Nr,To,Mo,Bo,Fr,Hr,ft,ln,wt,kt,Et,kn,Oo,Ge,H,ve,ke,na,u,En,oa,Ur,$r,pe,ca,da,j,F,z,$,Lt,Ct,qe,dn,pn,$e,fa,re,gt,un,ai,Io,ue,zo,Be,Po,ri,mn,fn,Ao,Bt,Y,Ro,v,k,wa=_(()=>{"use strict";Pn();An();Dn();jn();Fn();Wn();rt();Xn();Qn();$t();Kt();so();po();bo();O=window.SLIDETAKE||null,_o=document.querySelector("header .mark .logo").outerHTML;document.documentElement.classList.toggle("embed",!!O);Ze=!O||O.recording===!0||new URLSearchParams(location.search).has("obs");document.documentElement.classList.toggle("no-record",!Ze);Ae=window.matchMedia("(prefers-reduced-motion: reduce)").matches,bt={home:Nt,help:Rn,showcase:Un,"template:blank":_n,"template:talk":Nn,"template:recording":Hn},J=document.getElementById("editor"),T=document.getElementById("stage"),W=document.getElementById("world"),Xt=document.getElementById("connectors"),vo=document.getElementById("breadcrumbs"),Ua=document.getElementById("status-count"),Ke=document.getElementById("status-err"),nn=document.getElementById("mm-svg"),qa=document.getElementById("mm-label"),he=document.getElementById("editor-pane"),Ve=440,yo=720,ht=960,on=180,$a=540,Ya=100,Ga=110,Ka=420,Va=.35,Xa=1,Xe=parseFloat(Z("slidetake:slideSize"))||.92,c=new Map,h=[],ie=[],p=null,P="tree",R=!1,x={},q=!0,U=null,le=document.getElementById("brand"),I=document.getElementById("pip"),Ja=document.getElementById("stage-wrap"),S={x:0,y:0,zoom:.6},Ye=null;xo=new URLSearchParams(location.search).get("mode");ee=0;me=null,ce=-1,Oe=null;cr=e=>e.querySelector("img")&&!e.textContent.trim()&&[...e.children].every(t=>/^(IMG|BR)$/.test(t.tagName));X=null;ko=null;gr="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",br="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",vr="https://esm.sh/@terrastruct/d2@0.1.33",mt=null,yr={dark:{N1:"#e4e4e7",N2:"#a1a1aa",N3:"#a1a1aa",N4:"#323238",N5:"#27272a",N6:"#18181b",N7:"#09090b",B1:"#e0b024",B2:"#907320",B3:"#68551f",B4:"#483c1d",B5:"#38301c",B6:"#2c271c"},light:{N1:"#27272a",N2:"#71717a",N3:"#71717a",N4:"#e4e4e7",N5:"#e4e4e7",N6:"#f4f4f5",N7:"#ffffff",B1:"#7a5c12",B2:"#e5cf87",B3:"#eedfaf",B4:"#f5eccf",B5:"#f8f2df",B6:"#fbf7eb"}},xr=e=>/d2-config\s*:/.test(e)?e:`vars: {
  d2-config: {
    layout-engine: elk
  }
}
`+e,Zt={};be=0,Qt=null;ye=document.getElementById("progress");ye.innerHTML="<b></b><i></i>";de={start:0,timer:null};zr=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];ze=null;V=null;xe=null;ae=null;nn.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!u.active&&A(t.dataset.id)});So=null;J.addEventListener("input",()=>{v.kind!=="copy"&&!li()||(k.text=J.value,De(),clearTimeout(So),So=setTimeout(()=>{at(),zt(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==P&&we(e.dataset.mode)})});(function(){let e=new Map,t=0,n=!1,o=null,a=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};T.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||u.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,n=!1,e.size===2&&(o={d:a(),zoom:S.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,d=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(d),!n&&t>5&&(n=!0,vn(),T.classList.add("dragging")),n&&(e.size===2&&o?S.zoom=ea(o.zoom*a()/o.d):(S.x-=l/S.zoom,S.y-=d/S.zoom),Ie())});let r=i=>{e.delete(i.pointerId),e.size<2&&(o=null),e.size||T.classList.remove("dragging")};window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),T.addEventListener("click",i=>{n&&(i.stopPropagation(),i.preventDefault(),n=!1)},!0)})();T.addEventListener("wheel",e=>{e.preventDefault(),!u.active&&ta(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>Pe(-1);document.getElementById("nav-next").onclick=()=>Pe(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=()=>{ya("a copy of "+t.name)&&(k=lt(String(n.result),{kind:"file",name:t.name},{exported:!0}),at(),X=null,p=null,ci())},n.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([J.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(ie[0]?Le(c.get(ie[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),v.kind==="copy"&&(k.exported=k.text,at(),De())};document.getElementById("btn-reset").onclick=()=>{v.kind!=="copy"||dt(k)||confirm("Discard your edits and go back to "+oe(k.origin)+" as it was?")&&(k.text=k.originText,at(),J.value=k.text,p=null,zt(!0),De())};document.getElementById("btn-edit-toggle").onclick=Pt;en=document.querySelector("main"),Te=document.getElementById("editor-resizer"),Co=parseFloat(Z("slidetake:editorWidth"));Co&&he.style.setProperty("--editor-w",Co+"px");Te.addEventListener("pointerdown",e=>{e.preventDefault(),Te.setPointerCapture(e.pointerId),en.classList.add("resizing");let t=en.getBoundingClientRect().right,n=a=>{let r=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-a.clientX)));he.style.setProperty("--editor-w",r+"px")},o=()=>{en.classList.remove("resizing"),Te.removeEventListener("pointermove",n),Q("slidetake:editorWidth",String(he.getBoundingClientRect().width))};Te.addEventListener("pointermove",n),Te.addEventListener("pointerup",o,{once:!0})});Te.addEventListener("dblclick",()=>{he.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=No;document.getElementById("btn-present").onclick=()=>fe(!R);Nr="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",To=["ArrowRight","PageDown"," ","ArrowDown","Enter"],Mo=["ArrowLeft","PageUp","ArrowUp","r","R"],Bo=["b","B","."],Fr=document.getElementById("rec-dialog"),Hr=document.getElementById("review"),ft=document.getElementById("rec-countdown"),ln=document.getElementById("rec-paused"),wt=document.getElementById("obs-host"),kt=document.getElementById("obs-port"),Et=document.getElementById("obs-pass"),kn=document.getElementById("obs-remember"),Oo=document.getElementById("obs-status"),Ge=document.getElementById("rec-start"),H=null,ve=!1,ke=null,na=null,u={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null},En=e=>new Promise(t=>setTimeout(t,e)),oa=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),En(100)]);document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>{let t=document.getElementById(e.dataset.copy);t.select(),(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).catch(()=>document.execCommand("copy")),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy"},1500)}));Ur=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);$r="This page is served over https, and browsers block it from reaching OBS on another computer (OBS only offers plain ws://). Run OBS on this computer and use localhost, or open Slidetake from a local copy: download dist/index.html from github.com/slidetake/slidetake and serve it with python3 -m http.server.";document.getElementById("obs-connect").onclick=ra;kn.addEventListener("change",aa);document.getElementById("btn-record").onclick=cn;Ge.onclick=()=>ia(!0);document.getElementById("rec-rehearse").onclick=()=>ia(!1);pe="";ca=e=>fo(e,la),da=(e,t)=>go(e,t,{input:e.outputPath||pe||"recording.mov",outputName:Dt()+"-final.mp4",sectionOf:la});j=null,F=null,z=document.getElementById("rv-video"),$=document.getElementById("rv-now");document.getElementById("rv-mode").onchange=()=>_t();Lt=document.getElementById("rv-fps");Lt.onchange=()=>{j&&(j.fps=parseFloat(Lt.value),Tn(j),_t())};document.getElementById("rv-link").addEventListener("input",e=>{try{Q("slidetake:site",new URL(e.target.value.trim()).origin)}catch{}j&&ua(j)});Ct=null;z.addEventListener("timeupdate",()=>{if(!F)return;let e=F.ranges[F.i];if(z.currentTime*1e3<e.end)return;if(F.i++,F.i>=F.ranges.length){z.pause(),F=null,$.textContent="";return}let t=F.ranges[F.i];z.currentTime=t.start/1e3,$.textContent="\u25B6 "+t.title});document.getElementById("rv-play-final").onclick=()=>{j&&Tt(We(j).map(e=>({start:e.start,end:e.end,title:e.title})))};qe=null,dn=0,pn=!1;z.addEventListener("error",async()=>{if(z.getAttribute("src")){if(qe&&dn<5){dn++,$.textContent="Reloading "+pe+" (OBS was still finishing it)\u2026",await new Promise(e=>setTimeout(e,1500));try{nt(await jt(qe),qe,!0);return}catch{}}$.textContent=qe?"Chrome cannot play "+pe+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(pe||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video."}});$e=document.getElementById("rv-file-input");$e.addEventListener("change",()=>{$e.files[0]&&nt($e.files[0]),$e.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return $e.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});$.textContent="Opening "+e.name+"\u2026",nt(await jt(e),e)}catch(e){(!e||e.name!=="AbortError")&&($.textContent="Could not open that file.")}};fa=document.getElementById("rv-folder");fa.hidden=!window.showDirectoryPicker;fa.onclick=async()=>{let e=j&&Ce(j.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(ti("obs-folder",t),!e){$.textContent="Folder remembered. This session has no file name from OBS; open the file instead.";return}let n=await t.getFileHandle(e);nt(await jt(n),n)}catch(t){if(t&&t.name==="AbortError")return;$.textContent=(e?e+" is not in that folder":"Could not read that folder")+". Use \u201COpen the recording file\u2026\u201D instead."}};document.getElementById("rv-download").onclick=()=>{if(!j)return;let e=j,t=ca(e),n="# "+document.getElementById("rv-yt-title").value+`

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

`+We(e).map(a=>"- "+K(a.start)+"\u2013"+K(a.end)+"  "+a.title).join(`
`)+`
`,o=document.createElement("a");o.href=URL.createObjectURL(new Blob([n],{type:"text/markdown"})),o.download=Dt()+"-publish.md",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),1e3)};Wr()&&new URLSearchParams(location.search).get("obs")&&ra();re=document.getElementById("btn-camera"),gt=document.getElementById("pip-msg"),un=null;ai='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';re.onclick=()=>Bn(q);Mn();Io=null;window.addEventListener("pointermove",va);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(u.active?Rt("Stopped: the browser left fullscreen"):R&&fe(!1))});ue=document.getElementById("help");document.getElementById("btn-help").onclick=()=>window.open(O?"https://slidetake.com/help":"/help","_blank","noopener");document.getElementById("btn-keys").onclick=()=>ue.classList.add("open");document.getElementById("help-close").onclick=()=>ue.classList.remove("open");ue.addEventListener("click",e=>{e.target===ue&&ue.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),u.active||cn();return}if(u.active){Gr(e);return}if(document.querySelector(".modal.open")){e.key==="Escape"&&Sn();return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(ue.classList.contains("open")){e.key==="Escape"&&ue.classList.remove("open");return}let n=e.key;n==="ArrowRight"||n===" "||n==="PageDown"?(e.preventDefault(),Pe(1)):n==="ArrowLeft"||n==="PageUp"?(e.preventDefault(),Pe(-1)):n==="ArrowDown"?(e.preventDefault(),_r()):n==="ArrowUp"?(e.preventDefault(),Dr()):n==="Home"?h.length&&A(h[0]):n==="End"?h.length&&A(h[h.length-1]):n==="o"||n==="O"?Rr():n==="e"||n==="E"?Pt():n==="f"||n==="F"||n==="p"||n==="P"?fe(!R):n==="r"||n==="R"?cn():n==="1"?we("tree"):n==="2"?we("radial"):n==="3"?we("path"):n==="4"?we("focus"):n==="c"||n==="C"?Bn(q):n==="v"||n==="V"?or():n==="l"||n==="L"?No():n==="+"||n==="="?Lo(1):n==="-"||n==="_"?Lo(-1):n==="?"||n==="k"||n==="K"?ue.classList.add("open"):n==="Escape"&&!Zo()&&R&&fe(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=st(location.hash);if(e&&!(v&&v.kind==="share"&&e===v.data)){location.reload();return}t&&t!==p&&c.has(t)&&A(t)});zo="";new ResizeObserver(()=>{let e=T.clientWidth+"x"+T.clientHeight;e!==zo&&(zo=e,Ie(),te(!0))}).observe(T);Be=document.createElement("div");Be.id="toast";Be.setAttribute("role","status");document.body.appendChild(Be);Po=null;ri=document.getElementById("open-dialog"),mn=document.getElementById("open-url"),fn=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{fn.hidden=!0,At(ri),mn.focus(),mn.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=eo(mn.value);if(!t){fn.textContent="That doesn't look like a link.",fn.hidden=!1;return}location.href=hn(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await ii(p&&p!==h[0]?p:""),n=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),Mt(n,5e3)}catch{prompt("Copy this link:",e)}v.kind==="copy"&&(k.exported=k.text,at(),De())};Ao=Z("slidetake:layout");P=["tree","radial","path","focus"].includes(Ao)?Ao:"tree";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===P));Bt=new URLSearchParams(location.search);["tree","radial","path","focus"].includes(Bt.get("layout"))&&(P=Bt.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===P)));if(O){let e=(Array.isArray(O.trail)?O.trail:O.back?[O.back]:[]).filter(a=>a&&a.label),t=document.querySelector("header .brand");e.length&&(t.innerHTML='<nav class="trail" aria-label="Site">'+e.map((a,r)=>(r?'<span class="sep" aria-hidden="true">|</span>':"")+(a.url?'<a href="'+C(a.url)+'">'+C(a.label)+"</a>":"<span>"+C(a.label)+"</span>")).join("")+"</nav>");let n=document.createElement("a");n.id="credit",n.href="https://slidetake.com",n.target="_blank",n.rel="noopener",n.title="Made with Slidetake",n.setAttribute("aria-label","Made with Slidetake"),n.innerHTML=_o+'<span class="word">Slide<span>take</span></span>';let o=document.querySelector("header .hdr-actions");o.insertBefore(n,o.firstChild),Ze||(o.insertAdjacentHTML("beforeend",'<button class="btn" id="hdr-keys" title="Keyboard shortcuts (K)">\u2328 Keys</button><button class="btn" id="hdr-full" title="Fullscreen (F)">\u26F6 Fullscreen</button>'),document.getElementById("hdr-keys").onclick=()=>document.getElementById("help").classList.add("open"),document.getElementById("hdr-full").onclick=()=>fe(!R))}Y=ro(location.pathname,location.search,location.hash),Ro=Y.page==="pick"?"":Y.slide,v=null,k=io(Z("slidetake:copy"))||si();window.addEventListener("popstate",()=>location.reload());(Bt.get("edit")==="1"||Y.page==="edit"&&k&&Bt.get("edit")!=="0")&&Pt();pi().then(e=>(J.value=e,De(),Ho(J.value),$o(),document.fonts?document.fonts.ready:null)).then(()=>{c.forEach(Ot),Qe(),A(c.has(Ro)?Ro:h[0],!0)})});var On=`  /* One palette, Slidetake gold, at two levels: bright gold on zinc in dark mode, deep gold on white in
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
`;var In=`
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
`;var zn=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var ka=e=>new Promise((t,n)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>n(new Error("could not load "+e)),document.head.appendChild(o)});async function Ea(){document.head.insertAdjacentHTML("beforeend",zn);let e=document.createElement("style");e.textContent=On,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",In),await Promise.all([window.gsap?null:ka("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:ka("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>(wa(),ui))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ea,{once:!0}):Ea();})();
