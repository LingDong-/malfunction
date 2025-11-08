const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
let do_download = 1;

function download(url,enc){
  let tmp = path.join(os.tmpdir(), btoa(url));
  if (fs.existsSync(tmp)){
    console.log("loading cached... "+tmp)
    return fs.readFileSync(tmp).toString();
  }else{
    console.log("downloading... "+url)
    let s = execSync(`curl -sL "${url}"`, {encoding:enc});
    fs.writeFileSync(tmp,s);
    return s;
  }
}

function download_script(url) {
  if (do_download){
    return `<script>${download(url,'utf-8')}</script>`
  }else{
    return `<script src="${url}"></script>`
  }
  
}
function download_font(url){
  if (do_download){
    return `data:font/woff2;base64,${download(url,'base64')}`
  }else{
    return url;
  }
}

let html = [`
<meta charset="UTF-8">
<style>
  html{
    height:100%;
    overflow:hidden;
  }
  .bigbtn{
    display: inline-block; 
    width: 24px; 
    height: 24px; 
    text-align: center; 
    background: gainsboro;
    margin: 4px;
    margin-right: 0px;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid silver;
  }
  .bigbtn:hover{
    background: silver;
  }
  .filename{
    text-decoration:underline;
    cursor:pointer;
    margin-top:2px;
  }
  .filename:hover{
    font-weight:bold;
  }
</style>
<style>
.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta{color:#555}.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error{color:red}.cm-invalidchar{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:0;position:relative}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none;outline:0}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:0}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:''}span.CodeMirror-selectedtext{background:0 0}
</style>
<style>
.cm-s-theme span.cm-number, .cm-s-theme span.cm-string, .cm-s-theme span.cm-atom { color: #762; }
.cm-s-theme span.cm-comment { color: #777; font-style: italic; line-height: 1em; }
.cm-s-theme span.cm-meta { color: #555; font-style: italic; line-height: 1em; }
.cm-s-theme span.cm-variable { color: black; }
.cm-s-theme span.cm-variable-2 { color: #b11; }
.cm-s-theme span.cm-qualifier { color: #555; }
.cm-s-theme span.cm-keyword { color: #730; }
.cm-s-theme span.cm-builtin { color: #30a; }
.cm-s-theme span.cm-link { color: #762; }
.cm-s-theme span.cm-error { background-color: #fdd; }
.cm-s-theme .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-theme .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }

</style>
${download_script("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/codemirror.min.js"              )}
${download_script("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/mode/javascript/javascript.js"  )}
${download_script("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/mode/xml/xml.js"                )}
${download_script("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/mode/css/css.js"                )}
${download_script("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/mode/htmlmixed/htmlmixed.js"    )}
${download_script("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/addon/edit/matchbrackets.min.js")}
${download_script("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.1/addon/comment/comment.min.js"   )}
<style>.CodeMirror { height: 100%; }</style>

<body style="background:white;margin:0px;width:100%;height:100%;overflow:hidden;font-family:sans-serif">
  <div id="side" style="overflow:hidden;position:absolute;left:0px;top:0px;width:200px;height:100%;background:white">
    <div id="menu" style="position:absolute;left:10px;top:10px;width:180px;height:250px;font-size:14px;border-bottom:1px solid silver;line-height:20px;">
      <div style="text-align:right">
        <div class="bigbtn" id="btn-run">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
            <polygon points="5,4 21,12 5,20" fill="#111"/>
          </svg>
        </div>
        <div class="bigbtn" id="btn-stop">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
            <rect x="6" y="6" width="12" height="12" fill="#111"/>
          </svg>
        </div>
        <div class="bigbtn" id="btn-tab">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
            <polygon points="7,6 18,12 7,18" fill="#111"/>
            <rect x="4" y="4" width="16" height="16" stroke-width="2" fill="none" stroke="#111"/>
          </svg>
        </div>
      </div>
      <div style="font-weight:bold;margin-top:15px;font-size:20px;">malfunction</div>
      <i style="margin-bottom:20px;display:block;font-size:12px;">Web experiment IDE / preview</i>

      <label>github user/repo/folder<input type="text" id="inp-repo" placeholder="username/repo/folder" style="width:100%;font-size:12px;"></label><br>
      <label>access token<input type="password" id="inp-tok"    placeholder="github_pat_xxxxxx..." style="width:100%;font-size:12px;"></label><br><br>
      <button id="btn-pull">Pull ⤵</button>
      <button id="btn-push">Push ⤴</button>
    </div>
    <button id="btn-fnew" style="position:absolute;left:10px;top:275px">+</button>
    <button id="btn-fdel" style="position:absolute;left:40px;top:275px">-</button>
    <div id="dir" style="position:absolute;left:10px;top:300px;width:185px;height:calc(100% - 245px);overflow:scroll;font-size:14px;">
      
    </div>
  </div>
  <div id="edit" style="position:absolute;left:200px;top:0px;width:calc(50% - 100px);height:100%;border-right:1px solid silver; border-left:1px solid silver"></div>
  <div id="out" style="position:absolute;left:calc(50% + 100px);top:0px;width:calc(50% - 100px);height:calc(100% - 200px);"></div>
  <div id="log" style="position:absolute;left:calc(50% + 100px);top:calc(100% - 200px);width:calc(50% - 110px);height:190px;border-top:1px solid silver;font-size:14px;font-family:monospace;padding:5px;overflow:scroll;"></div>

</body>
`];


function main(){

  function guess_type(path) {
    const ext = path.split('.').pop().toLowerCase();
    return {
      html: 'text/html',
      htm: 'text/html',
      js: 'text/javascript',
      css: 'text/css',
      json: 'application/json',
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      gif: 'image/gif',
      svg: 'image/svg+xml',
      txt: 'text/plain'
    }[ext] || 'application/octet-stream';
  }

  let FILES;
  if (sessionStorage.getItem("state")){
    let state = JSON.parse(sessionStorage.getItem("state"));
    // FILES = window.FILES = state.FILES;
    document.getElementById("inp-repo").value = state.repo;
    document.getElementById("inp-tok").value = state.token;
  }

  FILES = window.FILES = {
    'index.html':{
      content:`<meta charset="UTF-8">\n<meta name="description" content="another experiment">\n<style>\n  body{\n    font-family:sans-serif;\n  }\n</style>\n<body>\n  <h1>hello world</h1>\n  this is your site.\n</body>\n<script src="script.js"><`+`/script>`
    },
    'script.js':{
      content:`console.log("hello world");`
    },
  }
  
  let CURFILE = Object.keys(FILES)[0];

  function syslog(t){
    console.log(t);
    let logDiv = document.getElementById("log");
    let msg = document.createElement("div");
    msg.style.color = "dimgray";
    msg.innerHTML = t;
    logDiv.appendChild(msg);
    logDiv.scrollTop = 100000;
  }

  window.addEventListener("message", (event) => {
    if (!event.data?.type) return;
    let logDiv = document.getElementById("log");
    let msg = document.createElement("div");
    msg.textContent = `${event.data.args.join(" ")}`;
    if (event.data.type == 'warn'){
      msg.style.background = "khaki";
    }else if (event.data.type == 'error'){
      msg.style.background = "salmon";
    }
    logDiv.appendChild(msg);
    logDiv.scrollTop = 100000;
  });

  function make_html(){
    let html = FILES['index.html'].content;
    let blobs = {};
    for (let k in FILES){
      if (k == "index.html") continue;
      let bb = URL.createObjectURL(new Blob([FILES[k].content], {type:guess_type(k)}));
      blobs[k] = bb;
    }
    return html.replaceAll(
      /(src|href)=["']([^"']+)["']/g,
      (match, attr, path) => {
        const newPath = blobs[path] ?? path;
        return `${attr}="${newPath}"`;
      }
    );
  }

  function run_in_tab(){
    FILES[CURFILE].content = CML.getValue();
    document.getElementById("btn-stop").click();
    document.getElementById("log").innerHTML = "";
    let iframe = document.createElement("iframe");
    iframe.style = "width:100%;height:100%;border:none;";
    document.getElementById("out").appendChild(iframe);
    let doc = iframe.contentDocument || iframe.contentWindow.document;
    let html = make_html();
    html = `
      <script>
        (function() {
          const send = (type, args) => {
            parent.postMessage({ type, args }, '*');
          };
          ['log', 'warn', 'error', 'info'].forEach(level => {
            const orig = console[level];
            console[level] = function(...args) {
              send(level, args.map(a => {
                if (typeof a == 'string') return a;
                try { return JSON.stringify(a); }
                catch { return String(a); }
              }));
              orig.apply(console, args);
            };
          });
        })();
      <`+`/script>
    `+html;
    doc.write(html);
    doc.close();
  }

  const bootcode = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body>
    <script>
      const channel = new BroadcastChannel('preview-sync');
      channel.postMessage({ type: 'request-update' });
      channel.onmessage = (e) => {
        if (e.data.type === 'html') {
          document.open();
          document.write(e.data.html);
          document.close();
        }
      };
      window.addEventListener('beforeunload', () => channel.close());
    <\/script>
    </body>
    </html>`;
  const bootblob = new Blob([bootcode], { type: 'text/html' });
  const booturl = URL.createObjectURL(bootblob);

  function run_new_tab(){
    FILES[CURFILE].content = CML.getValue();
    document.getElementById("btn-stop").click();
    let win = window.open(booturl, 'preview');
  }

  let channel = new BroadcastChannel('preview-sync');
  channel.onmessage = function(e){
    if (e.origin === location.origin && e.source === window) return;
    if (e.data.type === 'request-update') {
      const renderedHTML = make_html();
      channel.postMessage({ type: 'html', html: renderedHTML });
    }
  }

  document.getElementById("btn-run").onclick = run_in_tab;
  document.getElementById("btn-tab").onclick = run_new_tab;
  document.getElementById("btn-stop").onclick = function(){
    document.getElementById("out").innerHTML = "";
  }

  function encodeContentForGitHub(str) {
    const utf8Bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < utf8Bytes.length; i++) {
      binary += String.fromCharCode(utf8Bytes[i]);
    }
    return btoa(binary);
  }
  function decodeContentFromGitHub(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  document.getElementById("btn-pull").onclick = async function(){
    let [user,repo,proj] = document.getElementById("inp-repo").value.split('/');
    let token = document.getElementById("inp-tok").value;
    const repoRes = await fetch(`https://api.github.com/repos/${user}/${repo}`, {
      headers: { Authorization: `token ${token}` }
    });
    if (!repoRes.ok){
      syslog(`[err] ${repoRes.status} ${repoRes.statusText}`);
      return;
    }
    const repoInfo = await repoRes.json();
    const branch = repoInfo.default_branch;

    const treeRes = await fetch(`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`, {
      headers: { Authorization: `token ${token}` }
    });
    if (!treeRes.ok){
      syslog(`[err] ${treeRes.status} ${treeRes.statusText}`);
      return;
    }
    const treeData = await treeRes.json();
    let files = treeData.tree.filter(x=>x.type=='blob'&&x.path.startsWith(proj+'/'));
    
    for (const key in FILES) {
      if (FILES.hasOwnProperty(key)) {
        delete FILES[key];
      }
    }
    for (let i = 0; i < files.length; i++){
      let {path,sha} = files[i];
      path = path.split('/').slice(1).join('/');
      syslog(`[log] downloading ${path}...`);
      const res = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${proj}/${path}`, {
        headers: { Authorization: `token ${token}`},
      });
      if (!res.ok){
        syslog(`[err] ${res.status} ${res.statusText}`);
      }else{
        const data = await res.json();
        let content = decodeContentFromGitHub(data.content.replace(/\n/g, ''));
        let sha = data.sha;
        FILES[path] = {content,sha};
      }
    }
    CURFILE = Object.keys(FILES)[0];
    make_explorer();
    syslog(`[log] done.`);
  }

  document.getElementById("btn-push").onclick = async function(){
    FILES[CURFILE].content = CML.getValue();
    let [user,repo,path] = document.getElementById("inp-repo").value.split('/');
    let token = document.getElementById("inp-tok").value;
    for (let k in FILES){
      let sha = FILES[k].sha;
      let content = FILES[k].content;
      if (FILES[k].deleted){
        const res = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}/${k}`, {
          method: 'DELETE',
          headers: { 
            Authorization: `token ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Delete from web editor',
            sha: sha
          })
        });
        if (!res.ok){
          syslog(`[err] ${res.status} ${res.statusText}`);
        }else{
          const data = await res.json();
          delete FILES[k];
          syslog(`[log] ${k} deleted.`);
        }
      }else{
        const res = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}/${k}`, {
          method: 'PUT',
          headers: { 
            Authorization: `token ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Update from web editor',
            content: encodeContentForGitHub(content),
            sha: sha
          })
        });
        if (!res.ok){
          syslog(`[err] ${res.status} ${res.statusText}`);
        }else{
          const data = await res.json();
          FILES[k].sha = data.content.sha;
          syslog(`[log] ${k} uploaded. sha: ${FILES[k].sha}`);
        }
      }
    }
    syslog(`[log] done.`);
  }

  document.getElementById("btn-fnew").onclick = function(){
    let ans = prompt("create new file: specify path/name.ext", "file.txt");
    if (ans == null) return;
    if (FILES[ans]){
      if (!FILES[ans].deleted){
        syslog(`[err] file exists.`);
        return;
      }
      FILES[ans].deleted = false;
      FILES[ans].content = "";
    }else{
      FILES[ans] = {content:""};
    }
    CURFILE = ans;
    make_explorer();
  }
  document.getElementById("btn-fdel").onclick = function(){
    if (CURFILE == 'index.html'){
      syslog(`[err] index.html must not be deleted`);
      return;
    }
    if (FILES[CURFILE].sha){
      FILES[CURFILE].deleted = true;
    }else{
      delete FILES[CURFILE];
    }
    CURFILE = Object.keys(FILES).filter(x=>!FILES[x].deleted)[0];
    make_explorer();
  }

  document.getElementById("edit").addEventListener('keydown', function(e) {
    FILES[CURFILE].content = CML.getValue();
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      document.getElementById("btn-run").onclick();
    }
  });

  var CML = window.CML = CodeMirror(document.getElementById("edit"), {
    lineNumbers:true,
    matchBrackets: true,
    theme:"theme",
    mode:"htmlmixed",
    indentWithTabs: false,
    indentUnit: 2,
    tabSize: 2,
    extraKeys:{
      'Ctrl-/': 'toggleComment',
      'Cmd-/': 'toggleComment',
      "Tab": function(cm) {
        cm.replaceSelection("  ", "end");
      }
    }
  });

  CML.setSize(null,null);
  
  function make_explorer(){
    document.getElementById("dir").innerHTML = "";
    for (let k in FILES){
      if (FILES[k].deleted) continue;
      let div = document.createElement("div");
      div.classList.add("filename");
      div.innerHTML = k;
      div.onclick = function(){
        CURFILE = k;
        Array.from(document.getElementsByClassName("filename")).forEach(x=>x.style.background="none");
        div.style.background = "gainsboro";
        CML.setValue(FILES[CURFILE].content);
        if (k.endsWith(".html")){
          CML.setOption("mode","htmlmixed");
        }else if (k.endsWith(".js")){
          CML.setOption("mode","javascript");
        }else if (k.endsWith(".css")){
          CML.setOption("mode","css");
        }else{
          CML.setOption("mode",'text/plain');
        }
      }
      document.getElementById("dir").appendChild(div);
      if (CURFILE == k) div.onclick();
    }
  }
  make_explorer();

  function autosave(){
    setTimeout(autosave,1000);
    FILES[CURFILE].content = CML.getValue();
    sessionStorage.setItem("state",JSON.stringify({
      repo:document.getElementById("inp-repo").value,
      token:document.getElementById("inp-tok").value,
    }));
  }
  autosave();
}

html.push(`<script>${main.toString()};main();</script>`)

fs.writeFileSync("editor/index.html",html.join("\n"));

