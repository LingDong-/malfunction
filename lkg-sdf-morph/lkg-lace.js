/*
lkg-lace.js
A minimal JS/WebGL snippet for generating lenticular image for Looking Glass display.

  Unlike other solutions, this one does not assume that you're rendering a 3D scene, 
  or require the Looking Glass Bridge software,
  or require any other piece of software really,
  it just takes any quilt image and turns it into a lenticular/lightfield image
  which you can fullscreen on the display. That's it!

  let config = {...};                // from your device or defaults below
  let lacer = lkg_interlace(config); // returns a reusable function for your device
  let cnv = lacer(quilt,12,9);       // takes in web canvas or image, columns, rows
  document.body.appendChild(cnv);    // returns a canvas, click to fullscreen

Lingdong Huang 2025
*/
function lkg_interlace(config){
  var W = config.screenW.value;
  var H = config.screenH.value;

  // adapted from https://github.com/Looking-Glass/LookingGlassCoreSDK/blob/master/HoloPlayCore/include/HoloPlayShaders.h
  var hpc_LightfieldVertShaderGLSL = `precision mediump float;
  attribute vec2 vertPos_data;
  varying vec2 texCoords;
  void main(){
    gl_Position = vec4(vertPos_data.xy, 0.0, 1.0);
    texCoords = (vertPos_data.xy + 1.0) * 0.5;
  }
  `;
  var hpc_LightfieldFragShaderGLSL = `precision mediump float;
  varying vec2 texCoords;
  // Calibration values
  float tilt = float(${(H/(W*config.slope.value))});
  float pitch = float(${((config.pitch.value * W) / config.DPI.value) * Math.cos(Math.atan(1.0 / config.slope.value))});
  float center = float(${config.center.value});
  int invView = 0;
  float subp = float(${1/(W*3)});
  float displayAspect = float(${W/H});

  // Quilt settings
  uniform vec3 tile;
  uniform float quiltAspect;
  int overscan = 0;
  int quiltInvert = 0;

  int debug = 0;

  uniform sampler2D screenTex;

  vec2 texArr(vec3 uvz)
  {
    // decide which section to take from based on the z.
    float x = (mod(uvz.z, tile.x) + uvz.x) / tile.x;
    float y = (floor(uvz.z / tile.x) + uvz.y) / tile.y;
    return vec2(x, y);
  }

  // recreate CG clip function (clear pixel if any component is negative)
  void clip(vec3 toclip)
  {
    if (any(lessThan(toclip, vec3(0,0,0)))) discard;
  }

  void main()
  {
    if (debug == 1)
    {
      gl_FragColor = texture2D(screenTex, texCoords.xy);
    }
    else {
      float invert = 1.0;
      if (invView + quiltInvert == 1) invert = -1.0;
      vec3 nuv = vec3(texCoords.xy, 0.0);
      nuv -= 0.5;
      float modx = clamp (step(quiltAspect, displayAspect) * step(float(overscan), 0.5) + step(displayAspect, quiltAspect) * step(0.5, float(overscan)), 0.0, 1.0);
      nuv.x = modx * nuv.x * displayAspect / quiltAspect + (1.0-modx) * nuv.x;
      nuv.y = modx * nuv.y + (1.0-modx) * nuv.y * quiltAspect / displayAspect; 
      nuv += 0.5;
      clip (nuv);
      clip (1.0-nuv);
      vec4 rgb[3];
      for (int i=0; i < 3; i++)
      {
        nuv.z = (texCoords.x + float(i) * subp + texCoords.y * tilt) * pitch - center;
        nuv.z = mod(nuv.z + ceil(abs(nuv.z)), 1.0);
        nuv.z *= invert;
        nuv.z *= tile.z;
        vec3 coords1 = nuv;
        vec3 coords2 = nuv;
        coords1.y = coords2.y = clamp(nuv.y, 0.005, 0.995);
        coords1.z = floor(nuv.z);
        coords2.z = ceil(nuv.z);
        vec4 col1 = texture2D(screenTex, texArr(coords1));
        vec4 col2 = texture2D(screenTex, texArr(coords2));
        rgb[i] = mix(col1, col2, nuv.z - coords1.z);
      }
      gl_FragColor = vec4(rgb[0].r, rgb[1].g, rgb[2].b, 1.0);
    }
  }
  `;

  function interlace(canvas, tileCols, tileRows){
    let cnv = document.createElement("canvas");
    cnv.width = W;
    cnv.height = H;
    let gl = cnv.getContext('webgl');

    cnv.onclick = ()=>cnv.requestFullscreen()

    const vertices = new Float32Array([
    -1.0, -1.0, 
      1.0, -1.0,
    -1.0,  1.0, 
      1.0,  1.0,
    ]);

    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER,  hpc_LightfieldVertShaderGLSL);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER,  hpc_LightfieldFragShaderGLSL);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);

    gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
    gl.useProgram(program);

    function loop(){
      requestAnimationFrame(loop);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,gl.RGBA,gl.UNSIGNED_BYTE,canvas);
      gl.bindTexture(gl.TEXTURE_2D, null);

      const u = gl.getUniformLocation(program, "screenTex");
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.uniform1i(u, 0);

      gl.uniform3fv(gl.getUniformLocation(program, "tile"), [tileCols,tileRows,tileCols*tileRows]);
      gl.uniform1f(gl.getUniformLocation(program, "quiltAspect"), (canvas.width/tileCols)/(canvas.height/tileRows));


      let vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
      gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);

      const posAttrib = gl.getAttribLocation(program, 'vertPos_data');
      gl.enableVertexAttribArray(posAttrib);
      gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.disableVertexAttribArray(posAttrib);
      gl.bindBuffer(gl.ARRAY_BUFFER,null);
    }
    loop();
    return cnv;
  }
  return interlace;
}

