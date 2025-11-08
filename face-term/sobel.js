var SOBEL = function(W,H){
  let that = this;

  let cnv = document.createElement("canvas");
  cnv.width = W;
  cnv.height = H;
  let gl = cnv.getContext('webgl');

  const vertexSrc = `
  precision mediump float;
  attribute vec3 a_position;
  attribute vec2 a_uv;
  varying vec2 v_uv;
  void main() {
    v_uv = a_uv;
    gl_Position = vec4(a_position,1.0);
  }
    `;

  const fragmentSrc = `
  precision mediump float;
  varying vec2 v_uv;
  uniform sampler2D image;
  void main() {
    vec2 u = v_uv.xy / gl_FragCoord.xy;

    vec4 a = vec4(0.,0.,0.,0.);
    a += texture2D(image,v_uv+u*vec2(-1.,-1.));
    a += texture2D(image,v_uv+u*vec2(-1., 0.))*2.;
    a += texture2D(image,v_uv+u*vec2(-1.,+1.));
    a -= texture2D(image,v_uv+u*vec2(+1.,-1.));
    a -= texture2D(image,v_uv+u*vec2(+1., 0.))*2.;
    a -= texture2D(image,v_uv+u*vec2(+1.,+1.));
    vec4 b = vec4(0.,0.,0.,0.);
    b += texture2D(image,v_uv+u*vec2(-1.,-1.));
    b += texture2D(image,v_uv+u*vec2( 0.,-1.))*2.;
    b += texture2D(image,v_uv+u*vec2(+1.,-1.));
    b -= texture2D(image,v_uv+u*vec2(-1.,+1.));
    b -= texture2D(image,v_uv+u*vec2( 0.,+1.))*2.;
    b -= texture2D(image,v_uv+u*vec2(+1.,+1.));

    vec4 c = sqrt(a*a+b*b);
    mat3 d = mat3(a.x,b.x,c.x, a.y,b.y,c.y, a.z,b.z,c.z);
    vec3 e = d[0]*0.2+d[1]*0.7+d[2]*0.1;
    gl_FragColor = vec4(e.z,e.x*0.5+0.5,e.y*0.5+0.5,1.0);
  }
    `;
  const vertices = new Float32Array([
  -1.0, -1.0, 0.0,
   1.0, -1.0, 0.0,
  -1.0,  1.0, 0.0,
   1.0,  1.0, 0.0
  ]);
  const uvs = new Float32Array([
    0,0, 1,0, 0,1, 1,1
  ])
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
  
  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSrc);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSrc);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  let tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, W, H, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.bindTexture(gl.TEXTURE_2D, null);

  function process(canvas){
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,gl.RGBA,gl.UNSIGNED_BYTE,canvas);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
    gl.useProgram(program);

    const u = gl.getUniformLocation(program, "image");
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(u, 0);

    let vbo_uvs = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,vbo_uvs);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);

    let loc_uv = gl.getAttribLocation(program,'a_uv');
    gl.bindBuffer(gl.ARRAY_BUFFER,vbo_uvs);
    gl.enableVertexAttribArray(loc_uv);
    gl.vertexAttribPointer(loc_uv,2,gl.FLOAT,false,0,0);

    let vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
    gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);

    const posAttrib = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posAttrib);
    gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.disableVertexAttribArray(posAttrib);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
    gl.deleteBuffer(vbo);
    gl.deleteBuffer(vbo_uvs);

    return cnv;
  }

  that.process = process;
}
