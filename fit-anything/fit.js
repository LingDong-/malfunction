function norm(x){
  let s=0;
  for (let i = 0; i < x.length; i++){
    s+=x[i]*x[i];
  }
  return Math.sqrt(s);
}
function copy(x){
  let y = x.slice();
  y.shape = x.shape.slice();
  return y;
}
function zeros(N,M){
  let x = new Array(N*M).fill(0);
  x.shape = [N,M];
  return x;
}
function eye(N){
  let x = zeros(N,N);
  for (let i = 0; i < N; i++){
    x[i*N+i] = 1;
  }
  return x;
}
function slice(x,N0,N1,M0,M1){
  let [N,M] = x.shape;
  let y = [];
  for (let i = N0; i < N1; i++){
    for (let j = M0; j < M1; j++){
      y.push(x[i*M+j]);
    }
  }
  y.shape = [N1-N0,M1-M0];
  return y;
}
function matmul(a,b){
  let o = zeros(a.shape[0],b.shape[1]);
  for (let r = 0; r < a.shape[0]; r++) {
    for (let c = 0; c < b.shape[1]; c++) {
      for (let i = 0; i < a.shape[1]; i++) {
        o[r*o.shape[1]+c] += a[r*a.shape[1]+i] * b[i*b.shape[1]+c];
      }
    }
  }
  return o;
}
function outer(a,b){
  let rows = a.length;
  let cols = b.length;
  let o = zeros(rows,cols);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      o[i*cols+j] = a[i]*b[j];
    }
  }
  return o;
}
function dot(a,b){
  let c = 0;
  for (let i = 0; i < a.length; i++){
    c += a[i]*b[i];
  }
  return c;
}
function transpose(x){
  let y = copy(x);
  y.shape.reverse();
  for (let i = 0; i < y.shape[0]; i++){
    for (let j = 0; j < y.shape[1]; j++){
      y[i*y.shape[1]+j] = x[j*x.shape[1]+i];
    }
  }
  return y;
}
function qr_householder(A){
  // console.log(JSON.stringify(A));
  let [N,M] = A.shape;
  let R = copy(A);
  let Q = eye(N);
  for (let k = 0; k < M; k++){
    let x = slice(R,k,N,k,k+1);
    let e1 = zeros(...x.shape);
    e1[0] = 1.0;
    let alpha = norm(x);
    if (alpha == 0){
      continue;
    }
    let sign = x[0] >= 0 ? 1.0 : -1.0;
    let v = copy(x);
    for (let i = 0; i < x.length; i++){
      v[i]+=sign*alpha*e1[i];
    }
    let vn = norm(v);
    for (let i = 0; i < v.length; i++){
      v[i] /= vn;
    }
    let vT = transpose(v);
    let Rkk = outer(v, matmul(vT, slice(R,k,N,k,M)));
    for (let i = k; i < N; i++){
      for (let j = k; j < M; j++){
        R[i*M+j] -= 2.0 * Rkk[(i-k)*Rkk.shape[1]+(j-k)];
      }
    }
    let Qk = outer(matmul(slice(Q,0,N,k,N),v), v);
    for (let i = 0; i < N; i++){
      for (let j = k; j < N; j++){
        Q[i*N+j] -= 2.0 * Qk[i*Qk.shape[1]+(j-k)];
      }
    }
  }
  let triuRM = slice(R,0,M,0,M);
  for (let i = 0; i < M; i++){
    for (let j = i+1; j < M; j++){
      triuRM[(M-1-i)*M+(M-1-j)] = 0;
    }
  }
  return [slice(Q,0,N,0,M), triuRM]
}
function lstsq_qr(J, b){
  let [Q,R] = qr_householder(J);

  let y = matmul(transpose(Q), b);
  let x = zeros(R.shape[1],1);
  let M = R.shape[1];

  for (let i = M-1; i>=0; i--){
    x[i] = (y[i] - dot(slice(R,i,i+1,i+1,R.shape[1]), x.slice(i+1))) / R[i*R.shape[1]+i]
  }
  return x;
}
function gauss_newton(x0, points, residuals, bounds, max_iter, tol){

  let x = copy(x0);
  x.shape = [x.shape[0]*x.shape[1],1];
  let delta;
  for (let it = 0; it < max_iter; it++){
    let r = residuals(x, points);
    let J = zeros(r.length, x.length);
    let eps = 1e-8;
    for (let i = 0; i < x.length; i++){
      let dx = zeros(x.length,1);
      dx[i] = eps;
      let x1 = copy(x);
      for (let j = 0; j < x1.length; j++) x1[i]+=dx[i];
      let r_dx = residuals(x1,points);
      for (let j = 0; j < J.shape[0]; j++){
        J[j*J.shape[1]+i] = (r_dx[j]-r[j])/eps;
      }
    }
    let nr = copy(r);
    for (let j = 0; j < nr.length; j++) nr[j]*=-1;
    delta = lstsq_qr(J, nr);
    
    for (let i = 0; i < x.length; i++){
      let old = x[i];
      x[i]+=delta[i];
      x[i]=Math.max(x[i],bounds[0][i]);
      x[i]=Math.min(x[i],bounds[1][i]);
      delta[i] = x[i]-old;
    }
    
    if (norm(delta)<tol) break;
  }
  return [x,delta];
}
function levenberg_marquardt(x0, points, residuals, bounds, max_iter, tol, lambda_init=1e-3){
  let x = copy(x0);
  x.shape = [x.shape[0]*x.shape[1],1];
  let lam = lambda_init;
  let cost_prev = Infinity;
  let delta;
  for (let it = 0; it < max_iter; it++){
    let r = residuals(x, points);
    let cost = 0;
    for (let j = 0; j < r.length; j++) cost += r[j]*r[j]*0.5;

    let J = zeros(r.length,x.length);
    let eps = [];
    for (let j = 0; j < x.length; j++) eps[j] = 1e-6*Math.max(1,Math.abs(x[j]));
    for (let i = 0; i < x.length; i++){
      let dx = zeros(x.length,1);
      dx[i] = eps[i];
      let x1 = copy(x);
      for (let j = 0; j < x1.length; j++) x1[i]+=dx[i];
      let r_dx = residuals(x1,points);
      for (let j = 0; j < J.shape[0]; j++){
        J[j*J.shape[1]+i] = (r_dx[j]-r[j])/eps[i];
      }
    }
    let JT = transpose(J);
    let JTJ = matmul(JT,J);
    let JTr = matmul(JT,r);
    let JTJ_damped = copy(JTJ);
    for (let j = 0; j < JTJ.shape[0]; j++){
      JTJ_damped[j*JTJ.shape[1]+j] += lam;
    }
    let nJTr = copy(JTr);
    for (let j = 0; j < nJTr.length; j++) nJTr[j]*=-1;
    delta = lstsq_qr(JTJ_damped, nJTr);
    let x_new = copy(x);
    for (let i = 0; i < x_new.length; i++){
      x_new[i]+=delta[i];
      x_new[i]=Math.max(x_new[i],bounds[0][i]+1e-3);
      x_new[i]=Math.min(x_new[i],bounds[1][i]-1e-3);
    }
    let r_new = residuals(x_new, points);
    let cost_new = 0;
    for (let j = 0; j < r_new.length; j++) cost_new += r_new[j]*r_new[j]*0.5;
    
    let ldj = copy(delta);
    for (let j = 0; j < ldj.length; j++) ldj[j] = (ldj[j]*lam-JTr[j]);
    let pred_red = 0.5*dot(delta, ldj);
    let actual_red = cost - cost_new;
    let rho = actual_red / (pred_red + 1e-12);
    if (rho > 0){
      x = x_new;
      cost_prev = cost_new;
      lam = Math.max(lam*0.7,1e-12);
      if (norm(delta)< tol){
        break;
      }
    }else{
      lam = Math.min(lam*2.0,1e6);
    }
  }
  return [x,delta];
}

function dist_pt_to_seg(p, a, b){
  let result = [];
  let abx = b[0] - a[0];
  let aby = b[1] - a[1];
  let abLenSq = abx * abx + aby * aby;
  let apx = p[0] - a[0];
  let apy = p[1] - a[1];
  let t = (apx * abx + apy * aby) / abLenSq;
  if (t < 0) t = 0;
  if (t > 1) t = 1;
  let closestX = a[0] + t * abx;
  let closestY = a[1] + t * aby;
  let dx = p[0] - closestX;
  let dy = p[1] - closestY;
  let dist = Math.sqrt(dx * dx + dy * dy);
  return dist;
}
function polygon_residuals_affine(template,lambda_reg){
  return function(params, points){
    let A = params.slice(0,4);
    A.shape = [2,2];
    let t = params.slice(4);
    let v = matmul(template, transpose(A));
    for (let i = 0; i < v.shape[0]; i++){
      v[i*2] += t[0];
      v[i*2+1] += t[1];
    }
    let res = [];
    for (let k = 0; k < points.shape[0]; k++){
      let p = [points[k*2],points[k*2+1]]
      let md = Infinity;
      for (let i = 0; i < v.shape[0]; i++){
        let i1 = (i+1)%v.shape[0];
        let a = [v[i*2],v[i*2+1]];
        let b = [v[i1*2],v[i1*2+1]];
        let d = dist_pt_to_seg(p,a,b);
        md = Math.min(md,d);
      }
      res.push(md);
    }
    let reg = copy(A);
    reg[0] -= 1;
    reg[3] -= 1;
    res.push(norm(reg)*lambda_reg);
    res.shape = [res.length,1];
    return res;
  }
}
function fit_polygon_affine_nlls(points,template){
  function normalize(X){
    let c = [0,0];
    for (let i = 0; i < X.shape[0]; i++){
      c[0] += X[i*X.shape[1]+0];
      c[1] += X[i*X.shape[1]+1];
    }
    c[0]/=X.shape[0];
    c[1]/=X.shape[0];
    let ds = [];
    let davg = 0;
    for (let i = 0; i < X.shape[0]; i++){
      let dx = X[i*X.shape[1]+0]-c[0];
      let dy = X[i*X.shape[1]+1]-c[1];
      ds.push(dx,dy);
      davg += dx+dy;
    }
    davg /= ds.length*2;
    let s = 0;
    for (let i = 0; i < ds.length; i++){
      let d = ds[i]-davg;
      s += d*d;
    }
    s=Math.sqrt(s/ds.length);
    let Y = zeros(...X.shape);
    for (let i = 0; i < X.shape[0]; i++){
      Y[i*X.shape[1]+0]=(X[i*X.shape[1]+0]-c[0])/s;
      Y[i*X.shape[1]+1]=(X[i*X.shape[1]+1]-c[1])/s;
    }
    return [Y,c,s];
  }
  let [template_n, cT, sT] = normalize(template);
  let [points_n, cP, sP] = normalize(points);

  let x0 = [1,0,0,1,0,0];
  x0.shape = [6,1];
  let [res,delta] = 
//   gauss_newton(
  levenberg_marquardt(
    x0, points_n, 
    polygon_residuals_affine(template_n,0.1), 
    [[-3, -3, -3, -3, -1, -1], [3, 3, 3, 3, 1, 1]],
    200, 1e-6);

  let A = res.slice(0,4);
  A.shape = [2,2];
  let t = res.slice(4);

  let Ag = copy(A);
  Ag[0] = sP/sT*A[0];
  Ag[1] = sP/sT*A[1];
  Ag[2] = sP/sT*A[2];
  Ag[3] = sP/sT*A[3];
  cT.shape = [2,1];
  let tg = matmul(Ag,cT);
  tg[0] = cP[0] - tg[0] + sP * t[0];
  tg[1] = cP[1] - tg[1] + sP * t[1];
  return [Ag[0],Ag[2],Ag[1],Ag[3],...tg];
}

function lstsq_rss(A,x,b){
  let r = matmul(A,x);
  let s = 0;
  for (let i = 0; i < r.length; i++){
    s += (r[i]-b[i])**2;
  }
  return s;
}

function fit_polygon_resampled_affine_lstsq(points,template){
  let A = zeros(points.length,6);
  let b = zeros(points.length,1);
  for (let i = 0; i < points.shape[0]; i++){
    A[i*12+0] = template[i*2+0];
    A[i*12+2] = template[i*2+1];
    A[i*12+4] = 1;
    A[i*12+7] = template[i*2+0];
    A[i*12+9] = template[i*2+1];
    A[i*12+11] = 1;
    b[i*2] =   points[i*2+0];
    b[i*2+1] = points[i*2+1];
  }
  let x = lstsq_qr(A,b);
  let s = lstsq_rss(A,x,b);
  return [x,s];
}




