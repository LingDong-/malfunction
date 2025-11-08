const fs = require('fs');
let projs = fs.readdirSync(".").filter(x=>(!x.includes(".")&&x!='editor'&&x!='Makefile'));

let html = `<html>
<style>
a:link {
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  color: black;
}
a:active {
  color: black;
}
</style>
<div style="position:relative;top:0px;left:0px">
<img src="logo.png" width="128" height="128" style="position:absolute;top:-24px;right:20px;z-index:-10000"></img>
</div>

<body style="max-width:1080px;margin:auto;font-family:sans-serif;margin-top:50px">
<div style="margin:10px">
<h1>MALFUNCTION:</h1>
<i style="font-size:20px">New web experiments (2025-) by Lingdong Huang.</i>
<br><br>
<p>
Previous projects (2018-2025) have been archived at <a href="https://unglitch.netlify.app/">UNGLITCH</a>.
</p>
<p>
This website hosts both the new projects, as well as <a href="editor">an IDE for editing them online</a>. 
Consider this my poor man's version of <a href="https://glitch.com/">glitch.com</a> since its departure.
Click on a link below to explore!
</p>
</div>
`;

for (let i = 0; i < projs.length; i++){
  let ind = fs.readFileSync(projs[i]+"/index.html").toString();
  const match = ind.match(
    /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i
  );
  let desc = match ? match[1].trim() : '';
  html += `<div onclick="window.location.href='/${projs[i]}'" style="display:inline-block;width:240px;height:100px;border:1px solid silver;margin:10px;border-radius:4px;background:white;overflow:hidden;cursor:pointer">
  <div style="margin:10px;">
    <b><a href="${projs[i]}">${projs[i]}</a></b>
    <p style="font-size:13px">${desc}</p>
  </div>
  </div>`
}


html += `<div style="margin:10px">
<p>All the source code for all the projects, including that of this page, are available <a href="https://github.com/LingDong-/malfunction">here on GitHub</a>.</p>
</div>
`

html += `</body></html>`
fs.writeFileSync("index.html",html)
