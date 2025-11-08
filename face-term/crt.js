var CRT = function(W,H){
  console.log(W,H)
  let that = this;
  
  let cnv = document.createElement('canvas');
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
  cnv.style="position:absolute;left:0px;top:0px";
  document.body.appendChild(cnv);
  let gl = cnv.getContext('webgl');

  // let cnv1 = document.createElement('canvas');
  // cnv1.width = window.innerWidth;
  // cnv1.height = window.innerHeight;
  // cnv1.style="position:absolute;left:0px;top:0px";
  // document.body.appendChild(cnv1);
  // let ctx = cnv1.getContext('2d');

  let pass0 = new FILTERPASS(gl,0,true,`
    precision mediump float;
    varying vec2 v_uv;
    uniform sampler2D image0;
    void main() {
      vec2 u = 1.25/vec2(float(${W}),float(${H}));
      vec4 c = 0.0
      + texture2D(image0, v_uv+u*vec2(-12,0)) * 1.
      + texture2D(image0, v_uv+u*vec2(-11,0)) * 24.
      + texture2D(image0, v_uv+u*vec2(-10,0)) * 276.
      + texture2D(image0, v_uv+u*vec2( -9,0)) * 2024.
      + texture2D(image0, v_uv+u*vec2( -8,0)) * 10626.
      + texture2D(image0, v_uv+u*vec2( -7,0)) * 42504.
      + texture2D(image0, v_uv+u*vec2( -6,0)) * 134596.
      + texture2D(image0, v_uv+u*vec2( -5,0)) * 346104.
      + texture2D(image0, v_uv+u*vec2( -4,0)) * 735471.
      + texture2D(image0, v_uv+u*vec2( -3,0)) * 1307504.
      + texture2D(image0, v_uv+u*vec2( -2,0)) * 1961256.
      + texture2D(image0, v_uv+u*vec2( -1,0)) * 2496144.
      + texture2D(image0, v_uv+u*vec2(  0,0)) * 2704156.
      + texture2D(image0, v_uv+u*vec2(  1,0)) * 2496144.
      + texture2D(image0, v_uv+u*vec2(  2,0)) * 1961256.
      + texture2D(image0, v_uv+u*vec2(  3,0)) * 1307504.
      + texture2D(image0, v_uv+u*vec2(  4,0)) * 735471.
      + texture2D(image0, v_uv+u*vec2(  5,0)) * 346104.
      + texture2D(image0, v_uv+u*vec2(  6,0)) * 134596.
      + texture2D(image0, v_uv+u*vec2(  7,0)) * 42504.
      + texture2D(image0, v_uv+u*vec2(  8,0)) * 10626.
      + texture2D(image0, v_uv+u*vec2(  9,0)) * 2024.
      + texture2D(image0, v_uv+u*vec2( 10,0)) * 276.
      + texture2D(image0, v_uv+u*vec2( 11,0)) * 24.
      + texture2D(image0, v_uv+u*vec2( 12,0)) * 1.
      ;
      gl_FragColor = c/16777216.;
  }
  `)
  let pass1 = new FILTERPASS(gl,0,true,`
    precision mediump float;
    varying vec2 v_uv;
    uniform sampler2D image0;
    void main() {
      vec2 u = 1.25/vec2(float(${W}),float(${H}));
      vec4 c = 0.0
      + texture2D(image0, v_uv+u*vec2(0,-12)) * 1.
      + texture2D(image0, v_uv+u*vec2(0,-11)) * 24.
      + texture2D(image0, v_uv+u*vec2(0,-10)) * 276.
      + texture2D(image0, v_uv+u*vec2(0, -9)) * 2024.
      + texture2D(image0, v_uv+u*vec2(0, -8)) * 10626.
      + texture2D(image0, v_uv+u*vec2(0, -7)) * 42504.
      + texture2D(image0, v_uv+u*vec2(0, -6)) * 134596.
      + texture2D(image0, v_uv+u*vec2(0, -5)) * 346104.
      + texture2D(image0, v_uv+u*vec2(0, -4)) * 735471.
      + texture2D(image0, v_uv+u*vec2(0, -3)) * 1307504.
      + texture2D(image0, v_uv+u*vec2(0, -2)) * 1961256.
      + texture2D(image0, v_uv+u*vec2(0, -1)) * 2496144.
      + texture2D(image0, v_uv+u*vec2(0,  0)) * 2704156.
      + texture2D(image0, v_uv+u*vec2(0,  1)) * 2496144.
      + texture2D(image0, v_uv+u*vec2(0,  2)) * 1961256.
      + texture2D(image0, v_uv+u*vec2(0,  3)) * 1307504.
      + texture2D(image0, v_uv+u*vec2(0,  4)) * 735471.
      + texture2D(image0, v_uv+u*vec2(0,  5)) * 346104.
      + texture2D(image0, v_uv+u*vec2(0,  6)) * 134596.
      + texture2D(image0, v_uv+u*vec2(0,  7)) * 42504.
      + texture2D(image0, v_uv+u*vec2(0,  8)) * 10626.
      + texture2D(image0, v_uv+u*vec2(0,  9)) * 2024.
      + texture2D(image0, v_uv+u*vec2(0, 10)) * 276.
      + texture2D(image0, v_uv+u*vec2(0, 11)) * 24.
      + texture2D(image0, v_uv+u*vec2(0, 12)) * 1.
      ;
      gl_FragColor = c/16777216.;
  }
  `)
  let pass2 = new FILTERPASS(gl,0,true,`
    precision mediump float;
    varying vec2 v_uv;
    uniform sampler2D image0;
    uniform sampler2D image1;
    void main() {

      vec4 c0 = texture2D(image0, v_uv);
      vec4 c1 = texture2D(image1, v_uv);

      float d = sin(3.1415926*(v_uv.y*float(${H})*2.0-0.5))*0.4+0.6;

      vec3 c2 = ((c0+c1).xyz*0.95+0.05)*d;
      
      gl_FragColor = vec4(c2,1.0);
  }
  `)
  let pass3 = new FILTERPASS(gl,1,true,`
    precision mediump float;
    varying vec2 v_uv;
    uniform sampler2D image0;
    uniform float t;
    uniform vec3 tint;

    float rand(vec2 co){
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }
    void main() {
      vec2 p1 = 2.0*v_uv-1.0;
      vec2 p2 = p1/(1.0-0.2*length(p1));
      p2 = (p2*0.82+1.0)*0.5;
      vec4 c = texture2D(image0, p2);

      float r = rand(v_uv+vec2(t,0.0))*0.05;
      c += vec4(r,r,r,0.0);
      c *= vec4(tint,1.0);
      //c *= vec4(2.0,1.0,0.5,1.0);
      //c *= vec4(0.5,2.0,1.0,1.0);
      //c *= vec4(0.5,1.0,2.0,1.0);
      
      if (p2.x < 0. || p2.x > 1. || p2.y < 0. || p2.y > 1.){
        //float a = 0.05+0.05*abs(mod(atan(p1.y,p1.x)+3.1415926*2., 3.1415926*0.5)-(3.1415926*0.25));
        float a = 0.0;
        c = vec4(a,a,a,1.);
      }
      gl_FragColor = c;
    }
  `)


  that.process = function(canvas){
    pass0.upload_texture(0,canvas);
    let out0 = pass0.process();
    pass1.upload_texture(0,out0);
    let out1 = pass1.process();
    pass2.upload_texture(0,canvas);
    pass2.upload_texture(1,out1);
    let out2 = pass2.process();
    pass3.upload_texture(0,out2);
    pass3.process({
      t:['1f',(new Date().getTime()*0.001)%1000.0],
      tint:['3fv',window.tint??[0,2,1]]
    });
    
    // ctx.globalAlpha = 0.5;
    // ctx.drawImage(cnv,0,0);
  }
}