
  var $numtyps = new Set(['i8','u8','i16','u16','i32','u32','i64','u64','f32','f64']);
  var $args = [];
  var $caps = [];
  function $include(x){
    if (globalThis.__dh_intern_hooked_include){
      let y = __dh_intern_hooked_include(x);
      if (y !== undefined) return y;
    }
    if (typeof module !== 'undefined'){
      return require('fs').readFileSync(x).toString();
    }
    var xh = new XMLHttpRequest();
    xh.open("GET",x,false);
    xh.send(null);
    return xh.responseText;
  }
  function $is_ref(x){
    if (!x || !x.__type) return false;
    return $numtyps.has(x.__type) || x.__type == 'str' || x.__type.con == 'vec' || x.__type.con == 'tup';
  }
  function $value(x){
    if ($is_ref(x)){
      return Object.assign(x.slice(),{__type:x.__type});
    }
    return x;
  }
  function $typed_value(x,__type){
    if (typeof x == 'number'){
      return Object.assign(new $typed_cons[__type]([x]),{__type});
    }else if (typeof x == 'string'){
      return Object.assign([x],{__type});
    }else if ($is_ref(x)){
      return Object.assign(x.slice(),{__type:x.__type});
    }
    return x;
  }
  function $unwrap(x){
    if ( $numtyps.has(x?.__type) || x?.__type == 'str'){
      return x[0];
    }
    return x;
  }
  function $pop_args(n){
    return $args.splice(-n).map($unwrap);
  }
  class Int64Array extends BigInt64Array {
    constructor(arg, ...rest) {
      if (arg != null && typeof arg !== "number" && !ArrayBuffer.isView(arg) && !(arg instanceof ArrayBuffer)) {
        const coerced = Array.from(arg, v =>
          typeof v === "bigint" ? v : BigInt(v)
        );
        super(coerced);
        return;
      }
      super(arg, ...rest);
    }
  }
  class Uint64Array extends BigInt64Array {
    constructor(arg, ...rest) {
      if (arg != null && typeof arg !== "number" && !ArrayBuffer.isView(arg) && !(arg instanceof ArrayBuffer)) {
        const coerced = Array.from(arg, v =>
          typeof v === "bigint" ? v : BigInt(v)
        );
        super(coerced);
        return;
      }
      super(arg, ...rest);
    }
  }
  var $typed_cons = {
    "u8":Uint8Array,
    "i8":Int8Array,
    "u16":Uint16Array,
    "i16":Int16Array,
    "u32":Uint32Array,
    "i32":Int32Array,
    "u64":Uint64Array,
    "i64":Int64Array,
    "f32":Float32Array,
    "f64":Float64Array,
  }
  function $assign(dst,src){
    if (typeof dst !== 'object' || dst === null){
      return src;
    }else if (typeof src !== 'object'){
      dst[0] = src;
      return dst;
    }else{
      // return Object.assign(dst,src);
      src.__type = dst.__type;
      return src;
    }
  }
  function $to_str(x){
    if (typeof x == 'undefined' || x == null){
      return 'null';
    }else if (typeof x != 'object'){
      return x.toString();
    }else if ($numtyps.has(x.__type)){
      return x[0].toString();
    }else if (x.__type.con == 'vec'){
      return '{'+x.toString()+'}'
    }else if (x.__type.con == 'list'){
      return '{'+x.map($to_str).join(',')+'}';
    }else if (x.__type.con == 'arr'){
      return '['+x.__dims.join('x')+']{'+x.map($to_str).join(',')+'}';
    }else if (x.__type.con == 'dict'){
      return '{'+Object.entries(x).filter(a=>!a[0].startsWith('__')).map(a=>a[1]).flat().map(a=>$to_str(a[0])+':'+$to_str(a[1])).join(',')+'}'
    }else if (x.__type.con == 'union'){
      return $to_str(x.__val);
    }else if (x.__type == 'str'){
      return x[0];
    }else if (x.__type.con == 'tup'){
      return '['+x.map($to_str).join(',')+']';
    }else{
      return '[object:'+JSON.stringify(x.__type)+']';
    }
  }
  function $eq(x,y){
    if (x === y) return true;
    x = $unwrap(x);
    y = $unwrap(y);
    if (x === y) return true;
    if (x?.__type?.con == 'vec' && y?.__type?.con == 'vec'){
      return x.toString() == y.toString();
    }
    return false;
  }
  function $hash_slot(dict,key){
    let l = dict[key];
    if (!l){
      dict[key] = l = [[key,$value(dict.__zero)]];
      return l[0];
    }
    for (let i = 0; i < l.length; i++){
      if ($eq(l[i][0],key)){
        return l[i];
      }
    }
    l.push([key,$value(dict.__zero)]);
    return l.at(-1);
  }
  
async function $MAIN($WIDT,$HEIG,$CLIP,$COLS,$PSET,$SEED,$DENS=0.0018,$PERC=0.1,$REPL=0.1,$SPLI=1){
async function __func_ovld_pt_in_clipshape_ARPYQK_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_polys = $args.pop();
var _$o_v = $args.pop();
var __210_$o_cnt = 0;
__210_$o_cnt = $value(0);
var __211_$o_i = 0;
__211_$o_i = $value(0);
case 2:/*loopstart_BTTOYS*/
var __r_0 = 0;
$args.push(_$o_polys);
__r_0=$assign(__r_0,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1 = 0;
__r_1=Number(__211_$o_i<__r_0);
if (!__r_1){$goto=6;/*loopend_OJLDXO*/ continue $$;}
var __r_2 = 0;
$args.push($typed_value(_$o_v,{"con":"vec","elt":["f32",2]}));
var __r_3 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_3 = $value(_$o_polys[__211_$o_i]);
$args.push(__r_3);
__r_2=$assign(__r_2,await __func_ovld_pt_in_poly_BKVADL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 3:/*condstart_YUYZMZ*/
if (!__r_2){$goto=4;/*endif_WMTXJG*/ continue $$;}
var __r_4 = 0;
__r_4=$unwrap(__210_$o_cnt)+$unwrap(1);
__210_$o_cnt = $value(__r_4);
case 4:/*endif_WMTXJG*/
case 5:/*cont_FUHFBB*/
var __r_5 = 0;
__r_5=$unwrap(__211_$o_i)+$unwrap(1);
__211_$o_i = $value(__r_5);
$goto=2;/*loopstart_BTTOYS*/ continue $$;
case 6:/*loopend_OJLDXO*/
var __r_6 = 0;
__r_6=$unwrap(__210_$o_cnt)&$unwrap(1);
return __r_6;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_poly_area_HSEURZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_pts = $args.pop();
var __184_$o_area = 0;
__184_$o_area = $value(0);
var __184_$o_n = 0;
var __r_7 = 0;
$args.push(_$o_pts);
__r_7=$assign(__r_7,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__184_$o_n = $value(__r_7);
var __186_$o_i = 0;
__186_$o_i = $value(0);
case 8:/*loopstart_UIEIFD*/
var __r_8 = 0;
__r_8=Number(__186_$o_i<__184_$o_n);
if (!__r_8){$goto=10;/*loopend_AWSJPG*/ continue $$;}
var __187_$o_x0 = 0;
var __187_$o_y0 = 0;
var __r_9 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_9 = $value(_$o_pts[__186_$o_i]);
__187_$o_x0 = $value(__r_9[0]);
__187_$o_y0 = $value(__r_9[1]);
var __187_$o_x1 = 0;
var __187_$o_y1 = 0;
var __r_10 = 0;
__r_10=$unwrap(__186_$o_i)+$unwrap(1);
__r_10=$unwrap(__r_10)%$unwrap(__184_$o_n);
var __r_11 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_11 = $value(_$o_pts[__r_10]);
__187_$o_x1 = $value(__r_11[0]);
__187_$o_y1 = $value(__r_11[1]);
var __187_$o_cross = 0;
var __r_12 = 0;
__r_12=$unwrap(__187_$o_x0)*$unwrap(__187_$o_y1);
var __r_13 = 0;
__r_13=$unwrap(__187_$o_x1)*$unwrap(__187_$o_y0);
__r_12=$unwrap(__r_12)-$unwrap(__r_13);
__187_$o_cross = $value(__r_12);
var __r_14 = 0;
__r_14=$unwrap(__184_$o_area)+$unwrap(__187_$o_cross);
__184_$o_area = $value(__r_14);
case 9:/*cont_BMTKQO*/
var __r_15 = 0;
__r_15=$unwrap(__186_$o_i)+$unwrap(1);
__186_$o_i = $value(__r_15);
$goto=8;/*loopstart_UIEIFD*/ continue $$;
case 10:/*loopend_AWSJPG*/
var __r_16 = 0;
__r_16=$unwrap(__184_$o_area)*$unwrap(0.5);
__184_$o_area = $value(__r_16);
return __184_$o_area;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_poisson_sample_GWLGHU_func_$L_tup_$L_list_$L_f32_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_W = $args.pop();
var __0_$o_H = $args.pop();
var _$o_clipshape = $args.pop();
var _$o_weights = $args.pop();
var __196_$o_n = 0;
var __r_17 = 0;
$args.push(_$o_weights);
__r_17=$assign(__r_17,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_f32_$7__$7__$9_i32_$7_());
__196_$o_n = $value(__r_17);
var __196_$o_ps = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_18 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__196_$o_ps = $value(__r_18);
var __198_$o_i = 0;
__198_$o_i = $value(0);
case 12:/*loopstart_RWUSOX*/
var __r_19 = 0;
__r_19=Number(__198_$o_i<__196_$o_n);
if (!__r_19){$goto=26;/*loopend_KLVOJX*/ continue $$;}
var __199_$o_dM = 0;
__199_$o_dM = $value(0);
var __199_$o_pM = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_20 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_20[0] = $value(0);
__r_20[1] = $value(0);
__199_$o_pM = $value(__r_20);
var __200_$o_j = 0;
__200_$o_j = $value(0);
case 13:/*loopstart_PVJDPM*/
var __r_21 = 0;
__r_21=Number(__200_$o_j<16);
if (!__r_21){$goto=24;/*loopend_WXKVBH*/ continue $$;}
var __201_$o_p = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_22 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_23 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_23[0] = $value(0);
__r_23[1] = $value(0);
$args.push($typed_value(__r_23,{"con":"vec","elt":["f32",2]}));
var __r_24 = Object.assign(new $typed_cons.i32(2),{__type:{"con":"vec","elt":["i32",2]}});
__r_24[0] = $value(__0_$o_W[0]);
__r_24[1] = $value(__0_$o_H[0]);
var __r_25 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_25[0] = __r_24[0]??0;
__r_25[1] = __r_24[1]??0;
$args.push($typed_value(__r_25,{"con":"vec","elt":["f32",2]}));
__r_22=$assign(__r_22,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__201_$o_p = $value(__r_22);
case 14:/*loopstart_MUPYUN*/
var __r_26 = 0;
var __r_27 = 0;
$args.push($typed_value(__201_$o_p,{"con":"vec","elt":["f32",2]}));
$args.push(_$o_clipshape);
__r_27=$assign(__r_27,await __func_ovld_pt_in_clipshape_ARPYQK_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
__r_26 = !__r_27;
if (!__r_26){$goto=16;/*loopend_AXYIGX*/ continue $$;}
var __r_28 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_29 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_29[0] = $value(0);
__r_29[1] = $value(0);
$args.push($typed_value(__r_29,{"con":"vec","elt":["f32",2]}));
var __r_30 = Object.assign(new $typed_cons.i32(2),{__type:{"con":"vec","elt":["i32",2]}});
__r_30[0] = $value(__0_$o_W[0]);
__r_30[1] = $value(__0_$o_H[0]);
var __r_31 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_31[0] = __r_30[0]??0;
__r_31[1] = __r_30[1]??0;
$args.push($typed_value(__r_31,{"con":"vec","elt":["f32",2]}));
__r_28=$assign(__r_28,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__201_$o_p = $value(__r_28);
case 15:/*cont_BVPNPL*/
$goto=14;/*loopstart_MUPYUN*/ continue $$;
case 16:/*loopend_AXYIGX*/
var __201_$o_d = 0;
__201_$o_d = $value(math_$o_INF);
var __218_$o_k = 0;
__218_$o_k = $value(0);
case 17:/*loopstart_PAMUFV*/
var __r_32 = 0;
$args.push(__196_$o_ps);
__r_32=$assign(__r_32,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_33 = 0;
__r_33=Number(__218_$o_k<__r_32);
if (!__r_33){$goto=20;/*loopend_MMXISX*/ continue $$;}
var __r_34 = 0;
var __r_35 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_35 = $value(__196_$o_ps[__218_$o_k]);
var __r_36 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_36[0]=__201_$o_p[0]-__r_35[0];
__r_36[1]=__201_$o_p[1]-__r_35[1];
$args.push($typed_value(__r_36,{"con":"vec","elt":["f32",2]}));
__r_34=$assign(__r_34,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
var __r_37 = 0;
__r_37 = $value(_$o_weights[__218_$o_k]);
__r_34=$unwrap(__r_34)/$unwrap(__r_37);
var __r_38 = 0;
__r_38=Number(__201_$o_d>__r_34);
if (!__r_38){$goto=18;/*meq_NRZNFX*/ continue $$;}
__201_$o_d = $value(__r_34);
case 18:/*meq_NRZNFX*/
case 19:/*cont_SYLZOK*/
var __r_39 = 0;
__r_39=$unwrap(__218_$o_k)+$unwrap(1);
__218_$o_k = $value(__r_39);
$goto=17;/*loopstart_PAMUFV*/ continue $$;
case 20:/*loopend_MMXISX*/
var __r_40 = 0;
__r_40=Number(__201_$o_d>__199_$o_dM);
case 21:/*condstart_HIUIWK*/
if (!__r_40){$goto=22;/*endif_ZOQGNS*/ continue $$;}
__199_$o_dM = $value(__201_$o_d);
__199_$o_pM = $value(__201_$o_p);
case 22:/*endif_ZOQGNS*/
case 23:/*cont_WISWCN*/
var __r_41 = 0;
__r_41=$unwrap(__200_$o_j)+$unwrap(1);
__200_$o_j = $value(__r_41);
$goto=13;/*loopstart_PVJDPM*/ continue $$;
case 24:/*loopend_WXKVBH*/
var __r_42 = 0;
$args.push(__196_$o_ps);
$args.push($typed_value(__199_$o_pM,{"con":"vec","elt":["f32",2]}));
__r_42=$assign(__r_42,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 25:/*cont_JRWOXV*/
var __r_43 = 0;
__r_43=$unwrap(__198_$o_i)+$unwrap(1);
__198_$o_i = $value(__r_43);
$goto=12;/*loopstart_RWUSOX*/ continue $$;
case 26:/*loopend_KLVOJX*/
$caps.push(__0_$o_W);
$caps.push(__0_$o_H);
return __196_$o_ps;
return;
$caps.push(__0_$o_W);
$caps.push(__0_$o_H);
return;
default:$goto=null;break;}}}
async function __func_ovld_convexclip_CKMYEI_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_i32_$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_clipshape = $args.pop();
var _$o_poly = $args.pop();
var __231_$o_keep = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_44 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__231_$o_keep = $value(__r_44);
var __231_$o_isects = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_45 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__231_$o_isects = $value(__r_45);
var __231_$o_mask = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_46 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__231_$o_mask = $value(__r_46);
var __232_$o_i = 0;
__232_$o_i = $value(0);
case 28:/*loopstart_RLKEYU*/
var __r_47 = 0;
$args.push(_$o_poly);
__r_47=$assign(__r_47,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_48 = 0;
__r_48=Number(__232_$o_i<__r_47);
if (!__r_48){$goto=42;/*loopend_HBNBHQ*/ continue $$;}
var __r_49 = 0;
var __r_50 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_50 = $value(_$o_poly[__232_$o_i]);
$args.push($typed_value(__r_50,{"con":"vec","elt":["f32",2]}));
$args.push(_$o_clipshape);
__r_49=$assign(__r_49,await __func_ovld_pt_in_clipshape_ARPYQK_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
case 29:/*condstart_JMIMJQ*/
if (!__r_49){$goto=30;/*endif_NUVSKS*/ continue $$;}
var __r_51 = 0;
$args.push(__231_$o_keep);
var __r_52 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_52 = $value(_$o_poly[__232_$o_i]);
$args.push($typed_value(__r_52,{"con":"vec","elt":["f32",2]}));
__r_51=$assign(__r_51,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 30:/*endif_NUVSKS*/
var __234_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_53 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_53 = $value(_$o_poly[__232_$o_i]);
__234_$o_p0 = $value(__r_53);
var __234_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_54 = 0;
__r_54=$unwrap(__232_$o_i)+$unwrap(1);
var __r_55 = 0;
$args.push(_$o_poly);
__r_55=$assign(__r_55,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_54=$unwrap(__r_54)%$unwrap(__r_55);
var __r_56 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_56 = $value(_$o_poly[__r_54]);
__234_$o_p1 = $value(__r_56);
var __238_$o_j = 0;
__238_$o_j = $value(0);
case 31:/*loopstart_DLYGLP*/
var __r_57 = 0;
$args.push(_$o_clipshape);
__r_57=$assign(__r_57,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_58 = 0;
__r_58=Number(__238_$o_j<__r_57);
if (!__r_58){$goto=40;/*loopend_JUOQYC*/ continue $$;}
var __241_$o_k = 0;
__241_$o_k = $value(0);
case 32:/*loopstart_JWGBAM*/
var __r_59 = 0;
var __r_60 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_60 = $value(_$o_clipshape[__238_$o_j]);
$args.push(__r_60);
__r_59=$assign(__r_59,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_61 = 0;
__r_61=Number(__241_$o_k<__r_59);
if (!__r_61){$goto=38;/*loopend_ENOVUH*/ continue $$;}
var __r_62 = 0;
var __r_63 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_63 = $value(_$o_clipshape[__238_$o_j]);
var __r_64 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_64 = $value(__r_63[__241_$o_k]);
$args.push($typed_value(__r_64,{"con":"vec","elt":["f32",2]}));
$args.push(_$o_poly);
__r_62=$assign(__r_62,await __func_ovld_pt_in_poly_BKVADL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 33:/*condstart_KLXPUK*/
if (!__r_62){$goto=34;/*endif_PXLEAP*/ continue $$;}
var __r_65 = 0;
$args.push(__231_$o_keep);
var __r_66 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_66 = $value(_$o_clipshape[__238_$o_j]);
var __r_67 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_67 = $value(__r_66[__241_$o_k]);
$args.push($typed_value(__r_67,{"con":"vec","elt":["f32",2]}));
__r_65=$assign(__r_65,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_68 = 0;
$args.push(__231_$o_isects);
var __r_69 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_69 = $value(_$o_clipshape[__238_$o_j]);
var __r_70 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_70 = $value(__r_69[__241_$o_k]);
$args.push($typed_value(__r_70,{"con":"vec","elt":["f32",2]}));
__r_68=$assign(__r_68,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 34:/*endif_PXLEAP*/
var __243_$o_b = 0;
var __243_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_71 = Object.assign([Object.assign(new $typed_cons.i32(1),{__type:"i32"}),Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}})],{__type:{"con":"tup","elt":["i32",{"con":"vec","elt":["f32",2]}]}});
$args.push($typed_value(__234_$o_p0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__234_$o_p1,{"con":"vec","elt":["f32",2]}));
var __r_72 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_72 = $value(_$o_clipshape[__238_$o_j]);
var __r_73 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_73 = $value(__r_72[__241_$o_k]);
$args.push($typed_value(__r_73,{"con":"vec","elt":["f32",2]}));
var __r_74 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_74 = $value(_$o_clipshape[__238_$o_j]);
var __r_75 = 0;
__r_75=$unwrap(__241_$o_k)+$unwrap(1);
var __r_76 = 0;
var __r_77 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_77 = $value(_$o_clipshape[__238_$o_j]);
$args.push(__r_77);
__r_76=$assign(__r_76,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_75=$unwrap(__r_75)%$unwrap(__r_76);
var __r_78 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_78 = $value(__r_74[__r_75]);
$args.push($typed_value(__r_78,{"con":"vec","elt":["f32",2]}));
var __r_79 = 0;
__r_79=$unwrap(geom_$o_LHS_SEGMENT)|$unwrap(geom_$o_RHS_SEGMENT);
__r_79=$unwrap(__r_79)|$unwrap(geom_$o_RET_POINTS);
$args.push($typed_value(__r_79,"i32"));
__r_71=$assign(__r_71,await __func_ovld_line_intersect_YORLGD_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_i32_$7__$9_tup_$L_i32_$9_vec_$L_f32_$9_2_$7__$7__$7_());
__243_$o_b = $value(__r_71[0]);
__243_$o_v = $value(__r_71[1]);
case 35:/*condstart_IUCPZU*/
if (!__243_$o_b){$goto=36;/*endif_ZKCKQZ*/ continue $$;}
var __r_80 = 0;
$args.push(__231_$o_keep);
$args.push($typed_value(__243_$o_v,{"con":"vec","elt":["f32",2]}));
__r_80=$assign(__r_80,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_81 = 0;
$args.push(__231_$o_isects);
$args.push($typed_value(__243_$o_v,{"con":"vec","elt":["f32",2]}));
__r_81=$assign(__r_81,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 36:/*endif_ZKCKQZ*/
case 37:/*cont_IBFYCG*/
var __r_82 = 0;
__r_82=$unwrap(__241_$o_k)+$unwrap(1);
__241_$o_k = $value(__r_82);
$goto=32;/*loopstart_JWGBAM*/ continue $$;
case 38:/*loopend_ENOVUH*/
case 39:/*cont_IVDEFD*/
var __r_83 = 0;
__r_83=$unwrap(__238_$o_j)+$unwrap(1);
__238_$o_j = $value(__r_83);
$goto=31;/*loopstart_DLYGLP*/ continue $$;
case 40:/*loopend_JUOQYC*/
case 41:/*cont_RFDFAQ*/
var __r_84 = 0;
__r_84=$unwrap(__232_$o_i)+$unwrap(1);
__232_$o_i = $value(__r_84);
$goto=28;/*loopstart_RLKEYU*/ continue $$;
case 42:/*loopend_HBNBHQ*/
var __231_$o_hull = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_85 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push(__231_$o_keep);
__r_85=$assign(__r_85,await __func_ovld_convex_hull_WARPFW_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
__231_$o_hull = $value(__r_85);
var __250_$o_i = 0;
__250_$o_i = $value(0);
case 43:/*loopstart_OGQOWX*/
var __r_86 = 0;
$args.push(__231_$o_hull);
__r_86=$assign(__r_86,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_87 = 0;
__r_87=Number(__250_$o_i<__r_86);
if (!__r_87){$goto=50;/*loopend_JEAFPV*/ continue $$;}
var __r_88 = 0;
$args.push(__231_$o_mask);
$args.push(Object.assign(new $typed_cons.i32([0]),{__type:'i32'}));
__r_88=$assign(__r_88,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
var __257_$o_j = 0;
__257_$o_j = $value(0);
case 44:/*loopstart_YSURVE*/
var __r_89 = 0;
$args.push(__231_$o_isects);
__r_89=$assign(__r_89,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_90 = 0;
__r_90=Number(__257_$o_j<__r_89);
if (!__r_90){$goto=48;/*loopend_GNJGGU*/ continue $$;}
var __r_91 = 0;
var __r_92 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_92 = $value(__231_$o_isects[__257_$o_j]);
var __r_93 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_93 = $value(__231_$o_hull[__250_$o_i]);
__r_92[0]=__r_92[0]-__r_93[0];
__r_92[1]=__r_92[1]-__r_93[1];
$args.push($typed_value(__r_92,{"con":"vec","elt":["f32",2]}));
__r_91=$assign(__r_91,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
var __r_94 = 0;
__r_94=Number(__r_91<0.0001);
case 45:/*condstart_IDQBYU*/
if (!__r_94){$goto=46;/*endif_WYXAGR*/ continue $$;}
var __r_95 = 0;
__r_95=$unwrap(0)-$unwrap(1);
__231_$o_mask[__250_$o_i] = $value(__r_95);
$goto=48;/*loopend_GNJGGU*/ continue $$;
case 46:/*endif_WYXAGR*/
case 47:/*cont_FXOWKP*/
var __r_96 = 0;
__r_96=$unwrap(__257_$o_j)+$unwrap(1);
__257_$o_j = $value(__r_96);
$goto=44;/*loopstart_YSURVE*/ continue $$;
case 48:/*loopend_GNJGGU*/
case 49:/*cont_SEPOKK*/
var __r_97 = 0;
__r_97=$unwrap(__250_$o_i)+$unwrap(1);
__250_$o_i = $value(__r_97);
$goto=43;/*loopstart_OGQOWX*/ continue $$;
case 50:/*loopend_JEAFPV*/
var __r_98 = Object.assign([Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}),Object.assign([],{__type:{"con":"list","elt":["i32"]}})],{__type:{"con":"tup","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]},{"con":"list","elt":["i32"]}]}});
__r_98[0] = $value(__231_$o_hull);
__r_98[1] = $value(__231_$o_mask);
return __r_98;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_add_edge_IWVYVN_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_i32_$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_b = $args.pop();
var _$o_a = $args.pop();
var _$o_nbr = $args.pop();
var __r_99 = 0;
__r_99=Number(_$o_a[0]<0);
case 52:/*condstart_MTAOXQ*/
if (!__r_99){$goto=53;/*endif_MWLPFP*/ continue $$;}
return;
case 53:/*endif_MWLPFP*/
var __r_100 = 0;
__r_100=Number(_$o_b[0]<0);
case 54:/*condstart_THSDAK*/
if (!__r_100){$goto=55;/*endif_FLWKWY*/ continue $$;}
return;
case 55:/*endif_FLWKWY*/
var __315_$o_i = 0;
__315_$o_i = $value(0);
case 56:/*loopstart_AHIGTE*/
var __r_101 = 0;
var __r_102 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_102 = $value(_$o_nbr[_$o_a]);
$args.push(__r_102);
__r_101=$assign(__r_101,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_103 = 0;
__r_103=Number(__315_$o_i<__r_101);
if (!__r_103){$goto=60;/*loopend_NYJOXS*/ continue $$;}
var __r_104 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_104 = $value(_$o_nbr[_$o_a]);
var __r_105 = 0;
__r_105 = $value(__r_104[__315_$o_i]);
var __r_106 = 0;
__r_106=Number(__r_105==_$o_b[0]);
case 57:/*condstart_IOLCEV*/
if (!__r_106){$goto=58;/*endif_DQOAFD*/ continue $$;}
return;
case 58:/*endif_DQOAFD*/
case 59:/*cont_ARSMOQ*/
var __r_107 = 0;
__r_107=$unwrap(__315_$o_i)+$unwrap(1);
__315_$o_i = $value(__r_107);
$goto=56;/*loopstart_AHIGTE*/ continue $$;
case 60:/*loopend_NYJOXS*/
var __r_108 = 0;
var __r_109 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_109 = $value(_$o_nbr[_$o_a]);
$args.push(__r_109);
$args.push($typed_value(_$o_b,"i32"));
__r_108=$assign(__r_108,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
return;
default:$goto=null;break;}}}
async function __func_ovld_calc_turn_DQRICR_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_p2 = $args.pop();
var _$o_p1 = $args.pop();
var _$o_p0 = $args.pop();
var __389_$o_a = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_110 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_110[0]=_$o_p1[0]-_$o_p0[0];
__r_110[1]=_$o_p1[1]-_$o_p0[1];
__389_$o_a = $value(__r_110);
var __389_$o_b = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_111 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_111[0]=_$o_p2[0]-_$o_p1[0];
__r_111[1]=_$o_p2[1]-_$o_p1[1];
__389_$o_b = $value(__r_111);
var __389_$o_cross = 0;
var __r_112 = 0;
__r_112 = $value(__389_$o_a[0]);
var __r_113 = 0;
__r_113 = $value(__389_$o_b[1]);
__r_112=$unwrap(__r_112)*$unwrap(__r_113);
var __r_114 = 0;
__r_114 = $value(__389_$o_a[1]);
var __r_115 = 0;
__r_115 = $value(__389_$o_b[0]);
__r_114=$unwrap(__r_114)*$unwrap(__r_115);
__r_112=$unwrap(__r_112)-$unwrap(__r_114);
__389_$o_cross = $value(__r_112);
var __389_$o_dot = 0;
var __r_116 = 0;
__r_116 = $value(__389_$o_a[0]);
var __r_117 = 0;
__r_117 = $value(__389_$o_b[0]);
__r_116=$unwrap(__r_116)*$unwrap(__r_117);
var __r_118 = 0;
__r_118 = $value(__389_$o_a[1]);
var __r_119 = 0;
__r_119 = $value(__389_$o_b[1]);
__r_118=$unwrap(__r_118)*$unwrap(__r_119);
__r_116=$unwrap(__r_116)+$unwrap(__r_118);
__389_$o_dot = $value(__r_116);
var __389_$o_angle = 0;
var __r_120 = 0;
$args.push($typed_value(__389_$o_cross,"f32"));
$args.push($typed_value(__389_$o_dot,"f32"));
__r_120=$assign(__r_120,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__389_$o_angle = $value(__r_120);
return __389_$o_angle;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_centroid_IEWPPR_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_pts = $args.pop();
var __332_$o_area = 0;
__332_$o_area = $value(0);
var __332_$o_cx = 0;
__332_$o_cx = $value(0);
var __332_$o_cy = 0;
__332_$o_cy = $value(0);
var __332_$o_n = 0;
var __r_121 = 0;
$args.push(_$o_pts);
__r_121=$assign(__r_121,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__332_$o_n = $value(__r_121);
var __334_$o_i = 0;
__334_$o_i = $value(0);
case 63:/*loopstart_ZAWUYY*/
var __r_122 = 0;
__r_122=Number(__334_$o_i<__332_$o_n);
if (!__r_122){$goto=65;/*loopend_LUQCVX*/ continue $$;}
var __335_$o_x0 = 0;
var __335_$o_y0 = 0;
var __r_123 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_123 = $value(_$o_pts[__334_$o_i]);
__335_$o_x0 = $value(__r_123[0]);
__335_$o_y0 = $value(__r_123[1]);
var __335_$o_x1 = 0;
var __335_$o_y1 = 0;
var __r_124 = 0;
__r_124=$unwrap(__334_$o_i)+$unwrap(1);
__r_124=$unwrap(__r_124)%$unwrap(__332_$o_n);
var __r_125 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_125 = $value(_$o_pts[__r_124]);
__335_$o_x1 = $value(__r_125[0]);
__335_$o_y1 = $value(__r_125[1]);
var __335_$o_cross = 0;
var __r_126 = 0;
__r_126=$unwrap(__335_$o_x0)*$unwrap(__335_$o_y1);
var __r_127 = 0;
__r_127=$unwrap(__335_$o_x1)*$unwrap(__335_$o_y0);
__r_126=$unwrap(__r_126)-$unwrap(__r_127);
__335_$o_cross = $value(__r_126);
var __r_128 = 0;
__r_128=$unwrap(__332_$o_area)+$unwrap(__335_$o_cross);
__332_$o_area = $value(__r_128);
var __r_129 = 0;
__r_129=$unwrap(__335_$o_x0)+$unwrap(__335_$o_x1);
__r_129=$unwrap(__r_129)*$unwrap(__335_$o_cross);
var __r_130 = 0;
__r_130=$unwrap(__332_$o_cx)+$unwrap(__r_129);
__332_$o_cx = $value(__r_130);
var __r_131 = 0;
__r_131=$unwrap(__335_$o_y0)+$unwrap(__335_$o_y1);
__r_131=$unwrap(__r_131)*$unwrap(__335_$o_cross);
var __r_132 = 0;
__r_132=$unwrap(__332_$o_cy)+$unwrap(__r_131);
__332_$o_cy = $value(__r_132);
case 64:/*cont_QKXNTR*/
var __r_133 = 0;
__r_133=$unwrap(__334_$o_i)+$unwrap(1);
__334_$o_i = $value(__r_133);
$goto=63;/*loopstart_ZAWUYY*/ continue $$;
case 65:/*loopend_LUQCVX*/
var __r_134 = 0;
__r_134=$unwrap(__332_$o_area)*$unwrap(0.5);
__332_$o_area = $value(__r_134);
var __332_$o_f = 0;
var __r_135 = 0;
__r_135=$unwrap(6)*$unwrap(__332_$o_area);
var __r_136 = 0;
__r_136=$unwrap(1)/$unwrap(__r_135);
__332_$o_f = $value(__r_136);
var __r_137 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_138 = 0;
__r_138=$unwrap(__332_$o_cx)*$unwrap(__332_$o_f);
__r_137[0] = $value(__r_138);
var __r_139 = 0;
__r_139=$unwrap(__332_$o_cy)*$unwrap(__332_$o_f);
__r_137[1] = $value(__r_139);
return __r_137;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_dist_pt_to_ln_TVNFKJ_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$9_f32_$9_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_y2 = $args.pop();
var _$o_x2 = $args.pop();
var _$o_y1 = $args.pop();
var _$o_x1 = $args.pop();
var _$o_y = $args.pop();
var _$o_x = $args.pop();
var __531_$o_A = 0;
var __r_140 = 0;
__r_140=$unwrap(_$o_x[0])-$unwrap(_$o_x1[0]);
__531_$o_A = $value(__r_140);
var __531_$o_B = 0;
var __r_141 = 0;
__r_141=$unwrap(_$o_y[0])-$unwrap(_$o_y1[0]);
__531_$o_B = $value(__r_141);
var __531_$o_C = 0;
var __r_142 = 0;
__r_142=$unwrap(_$o_x2[0])-$unwrap(_$o_x1[0]);
__531_$o_C = $value(__r_142);
var __531_$o_D = 0;
var __r_143 = 0;
__r_143=$unwrap(_$o_y2[0])-$unwrap(_$o_y1[0]);
__531_$o_D = $value(__r_143);
var __531_$o_dot = 0;
var __r_144 = 0;
__r_144=$unwrap(__531_$o_A)*$unwrap(__531_$o_C);
var __r_145 = 0;
__r_145=$unwrap(__531_$o_B)*$unwrap(__531_$o_D);
__r_144=$unwrap(__r_144)+$unwrap(__r_145);
__531_$o_dot = $value(__r_144);
var __531_$o_len_sq = 0;
var __r_146 = 0;
__r_146=$unwrap(__531_$o_C)*$unwrap(__531_$o_C);
var __r_147 = 0;
__r_147=$unwrap(__531_$o_D)*$unwrap(__531_$o_D);
__r_146=$unwrap(__r_146)+$unwrap(__r_147);
__531_$o_len_sq = $value(__r_146);
var __531_$o_param = 0;
__531_$o_param = $value(0);
var __r_148 = 0;
__r_148 = new $typed_cons.f32([0])[0]
var __r_149 = 0;
__r_149=Number(__531_$o_len_sq!=__r_148);
case 67:/*condstart_NTDKSX*/
if (!__r_149){$goto=68;/*endif_GRUQAR*/ continue $$;}
var __r_150 = 0;
__r_150=$unwrap(__531_$o_dot)/$unwrap(__531_$o_len_sq);
__531_$o_param = $value(__r_150);
$goto=69;/*condend_UNWRGU*/ continue $$;
case 68:/*endif_GRUQAR*/
var __r_151 = 0;
__r_151 = $value(0);
return __r_151;
return;
case 69:/*condend_UNWRGU*/
var __531_$o_xx = 0;
var __r_152 = 0;
__r_152=$unwrap(__531_$o_param)*$unwrap(__531_$o_C);
var __r_153 = 0;
__r_153=$unwrap(_$o_x1[0])+$unwrap(__r_152);
__531_$o_xx = $value(__r_153);
var __531_$o_yy = 0;
var __r_154 = 0;
__r_154=$unwrap(__531_$o_param)*$unwrap(__531_$o_D);
var __r_155 = 0;
__r_155=$unwrap(_$o_y1[0])+$unwrap(__r_154);
__531_$o_yy = $value(__r_155);
var __531_$o_dx = 0;
var __r_156 = 0;
__r_156=$unwrap(_$o_x[0])-$unwrap(__531_$o_xx);
__531_$o_dx = $value(__r_156);
var __531_$o_dy = 0;
var __r_157 = 0;
__r_157=$unwrap(_$o_y[0])-$unwrap(__531_$o_yy);
__531_$o_dy = $value(__r_157);
var __r_158 = 0;
var __r_159 = 0;
__r_159=$unwrap(__531_$o_dx)*$unwrap(__531_$o_dx);
var __r_160 = 0;
__r_160=$unwrap(__531_$o_dy)*$unwrap(__531_$o_dy);
__r_159=$unwrap(__r_159)+$unwrap(__r_160);
$args.push($typed_value(__r_159,"f32"));
__r_158=$assign(__r_158,await __func_ovld_sqrt_MWAJTL_func_$L_tup_$L_f32_$7__$9_f32_$7_());
return __r_158;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_hobby_RLFUVJ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_omega = $args.pop();
var _$o_points = $args.pop();
var __553_$o_n = 0;
var __r_161 = 0;
$args.push(_$o_points);
__r_161=$assign(__r_161,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_161=$unwrap(__r_161)-$unwrap(1);
__553_$o_n = $value(__r_161);
var __r_162 = 0;
__r_162=Number(__553_$o_n<1);
case 71:/*condstart_AQFNLP*/
if (!__r_162){$goto=72;/*endif_DNBVPD*/ continue $$;}
var __r_163 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
return __r_163;
return;
case 72:/*endif_DNBVPD*/
var __r_164 = 0;
__r_164=Number(__553_$o_n==1);
case 73:/*condstart_OBISUS*/
if (!__r_164){$goto=74;/*endif_ETUVJE*/ continue $$;}
var __561_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_165 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_165 = $value(_$o_points[0]);
__561_$o_p0 = $value(__r_165);
var __561_$o_p3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_166 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_166 = $value(_$o_points[1]);
__561_$o_p3 = $value(__r_166);
var __561_$o_c1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_167 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_167[0]=__561_$o_p3[0]-__561_$o_p0[0];
__r_167[1]=__561_$o_p3[1]-__561_$o_p0[1];
var __r_168 = 0;
__r_168=$unwrap(1)/$unwrap(3);
var __r_169 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_169[0] = __r_168
__r_169[1] = __r_168
__r_167[0]=__r_167[0]*__r_169[0];
__r_167[1]=__r_167[1]*__r_169[1];
var __r_170 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_170[0]=__561_$o_p0[0]+__r_167[0];
__r_170[1]=__561_$o_p0[1]+__r_167[1];
__561_$o_c1 = $value(__r_170);
var __561_$o_c2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_171 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_171[0]=__561_$o_p3[0]-__561_$o_p0[0];
__r_171[1]=__561_$o_p3[1]-__561_$o_p0[1];
var __r_172 = 0;
__r_172=$unwrap(2)/$unwrap(3);
var __r_173 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_173[0] = __r_172
__r_173[1] = __r_172
__r_171[0]=__r_171[0]*__r_173[0];
__r_171[1]=__r_171[1]*__r_173[1];
var __r_174 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_174[0]=__561_$o_p0[0]+__r_171[0];
__r_174[1]=__561_$o_p0[1]+__r_171[1];
__561_$o_c2 = $value(__r_174);
var __r_175 = Object.assign(new Array(1).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
var __r_176 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_176[0] = $value(__561_$o_p0);
__r_176[1] = $value(__561_$o_c1);
__r_176[2] = $value(__561_$o_c2);
__r_176[3] = $value(__561_$o_p3);
__r_175[0] = $value(__r_176);
return __r_175;
return;
case 74:/*endif_ETUVJE*/
var __553_$o_chords = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_177 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__553_$o_chords = $value(__r_177);
var __553_$o_d = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_178 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__553_$o_d = $value(__r_178);
var __562_$o_i = 0;
__562_$o_i = $value(0);
case 75:/*loopstart_CBWPCN*/
var __r_179 = 0;
__r_179=Number(__562_$o_i<__553_$o_n);
if (!__r_179){$goto=77;/*loopend_RCLHNH*/ continue $$;}
var __r_180 = 0;
$args.push(__553_$o_chords);
var __r_181 = 0;
__r_181=$unwrap(__562_$o_i)+$unwrap(1);
var __r_182 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_182 = $value(_$o_points[__r_181]);
var __r_183 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_183 = $value(_$o_points[__562_$o_i]);
__r_182[0]=__r_182[0]-__r_183[0];
__r_182[1]=__r_182[1]-__r_183[1];
$args.push($typed_value(__r_182,{"con":"vec","elt":["f32",2]}));
__r_180=$assign(__r_180,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_184 = 0;
$args.push(__553_$o_d);
var __r_185 = 0;
var __r_186 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_186 = $value(__553_$o_chords[__562_$o_i]);
$args.push($typed_value(__r_186,{"con":"vec","elt":["f32",2]}));
__r_185=$assign(__r_185,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
$args.push($typed_value(__r_185,"f32"));
__r_184=$assign(__r_184,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 76:/*cont_KHYHKH*/
var __r_187 = 0;
__r_187=$unwrap(__562_$o_i)+$unwrap(1);
__562_$o_i = $value(__r_187);
$goto=75;/*loopstart_CBWPCN*/ continue $$;
case 77:/*loopend_RCLHNH*/
var __553_$o_gamma = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_188 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_189 = 0;
__r_189 = new $typed_cons.f32([0])[0]
__r_188[0] = $value(__r_189);
__553_$o_gamma = $value(__r_188);
var __565_$o_i = 0;
__565_$o_i = $value(1);
case 78:/*loopstart_XRITSH*/
var __r_190 = 0;
__r_190=Number(__565_$o_i<__553_$o_n);
if (!__r_190){$goto=80;/*loopend_CPCKSW*/ continue $$;}
var __r_191 = 0;
$args.push(__553_$o_gamma);
var __r_192 = 0;
var __r_193 = 0;
__r_193=$unwrap(__565_$o_i)-$unwrap(1);
var __r_194 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_194 = $value(__553_$o_chords[__r_193]);
$args.push($typed_value(__r_194,{"con":"vec","elt":["f32",2]}));
var __r_195 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_195 = $value(__553_$o_chords[__565_$o_i]);
$args.push($typed_value(__r_195,{"con":"vec","elt":["f32",2]}));
__r_192=$assign(__r_192,await __func_ovld_v_angle_between_BMGUAQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
$args.push($typed_value(__r_192,"f32"));
__r_191=$assign(__r_191,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 79:/*cont_XFKSXT*/
var __r_196 = 0;
__r_196=$unwrap(__565_$o_i)+$unwrap(1);
__565_$o_i = $value(__r_196);
$goto=78;/*loopstart_XRITSH*/ continue $$;
case 80:/*loopend_CPCKSW*/
var __r_197 = 0;
$args.push(__553_$o_gamma);
var __r_198 = 0;
__r_198 = new $typed_cons.f32([0])[0]
$args.push($typed_value(__r_198,"f32"));
__r_197=$assign(__r_197,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __553_$o_A = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_199 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_200 = 0;
__r_200 = new $typed_cons.f32([0])[0]
__r_199[0] = $value(__r_200);
__553_$o_A = $value(__r_199);
var __553_$o_B = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_201 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_202 = 0;
__r_202 = new $typed_cons.f32([2])[0]
__r_202=$unwrap(__r_202)+$unwrap(_$o_omega[0]);
__r_201[0] = $value(__r_202);
__553_$o_B = $value(__r_201);
var __553_$o_C = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_203 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_204 = 0;
__r_204 = new $typed_cons.f32([2])[0]
__r_204=$unwrap(__r_204)*$unwrap(_$o_omega[0]);
var __r_205 = 0;
__r_205 = new $typed_cons.f32([1])[0]
__r_204=$unwrap(__r_204)+$unwrap(__r_205);
__r_203[0] = $value(__r_204);
__553_$o_C = $value(__r_203);
var __553_$o_D = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_206 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_207 = 0;
__r_207=$unwrap(0)-$unwrap(1);
var __r_208 = 0;
__r_208 = $value(__553_$o_C[0]);
var __r_209 = 0;
__r_209 = new $typed_cons.f32([__r_207])[0]
__r_209=$unwrap(__r_209)*$unwrap(__r_208);
var __r_210 = 0;
__r_210 = $value(__553_$o_gamma[1]);
__r_209=$unwrap(__r_209)*$unwrap(__r_210);
__r_206[0] = $value(__r_209);
__553_$o_D = $value(__r_206);
var __569_$o_i = 0;
__569_$o_i = $value(1);
case 81:/*loopstart_EDXSTC*/
var __r_211 = 0;
__r_211=Number(__569_$o_i<__553_$o_n);
if (!__r_211){$goto=83;/*loopend_INUTDS*/ continue $$;}
var __r_212 = 0;
$args.push(__553_$o_A);
var __r_213 = 0;
__r_213=$unwrap(__569_$o_i)-$unwrap(1);
var __r_214 = 0;
__r_214 = $value(__553_$o_d[__r_213]);
var __r_215 = 0;
__r_215=$unwrap(1)/$unwrap(__r_214);
$args.push($typed_value(__r_215,"f32"));
__r_212=$assign(__r_212,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_216 = 0;
$args.push(__553_$o_B);
var __r_217 = 0;
__r_217=$unwrap(__569_$o_i)-$unwrap(1);
var __r_218 = 0;
__r_218 = $value(__553_$o_d[__r_217]);
var __r_219 = 0;
__r_219=$unwrap(2)*$unwrap(__r_218);
var __r_220 = 0;
__r_220 = $value(__553_$o_d[__569_$o_i]);
var __r_221 = 0;
__r_221=$unwrap(2)*$unwrap(__r_220);
__r_219=$unwrap(__r_219)+$unwrap(__r_221);
var __r_222 = 0;
__r_222=$unwrap(__569_$o_i)-$unwrap(1);
var __r_223 = 0;
__r_223 = $value(__553_$o_d[__r_222]);
var __r_224 = 0;
__r_224 = $value(__553_$o_d[__569_$o_i]);
__r_223=$unwrap(__r_223)*$unwrap(__r_224);
__r_219=$unwrap(__r_219)/$unwrap(__r_223);
$args.push($typed_value(__r_219,"f32"));
__r_216=$assign(__r_216,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_225 = 0;
$args.push(__553_$o_C);
var __r_226 = 0;
__r_226 = $value(__553_$o_d[__569_$o_i]);
var __r_227 = 0;
__r_227=$unwrap(1)/$unwrap(__r_226);
$args.push($typed_value(__r_227,"f32"));
__r_225=$assign(__r_225,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_228 = 0;
$args.push(__553_$o_D);
var __r_229 = 0;
__r_229=$unwrap(0)-$unwrap(1);
var __r_230 = 0;
__r_230 = $value(__553_$o_gamma[__569_$o_i]);
var __r_231 = 0;
__r_231=$unwrap(2)*$unwrap(__r_230);
var __r_232 = 0;
__r_232 = $value(__553_$o_d[__569_$o_i]);
__r_231=$unwrap(__r_231)*$unwrap(__r_232);
var __r_233 = 0;
__r_233=$unwrap(__569_$o_i)+$unwrap(1);
var __r_234 = 0;
__r_234 = $value(__553_$o_gamma[__r_233]);
var __r_235 = 0;
__r_235=$unwrap(__569_$o_i)-$unwrap(1);
var __r_236 = 0;
__r_236 = $value(__553_$o_d[__r_235]);
__r_234=$unwrap(__r_234)*$unwrap(__r_236);
__r_231=$unwrap(__r_231)+$unwrap(__r_234);
__r_229=$unwrap(__r_229)*$unwrap(__r_231);
var __r_237 = 0;
__r_237=$unwrap(__569_$o_i)-$unwrap(1);
var __r_238 = 0;
__r_238 = $value(__553_$o_d[__r_237]);
var __r_239 = 0;
__r_239 = $value(__553_$o_d[__569_$o_i]);
__r_238=$unwrap(__r_238)*$unwrap(__r_239);
__r_229=$unwrap(__r_229)/$unwrap(__r_238);
$args.push($typed_value(__r_229,"f32"));
__r_228=$assign(__r_228,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 82:/*cont_ZXHLZX*/
var __r_240 = 0;
__r_240=$unwrap(__569_$o_i)+$unwrap(1);
__569_$o_i = $value(__r_240);
$goto=81;/*loopstart_EDXSTC*/ continue $$;
case 83:/*loopend_INUTDS*/
var __r_241 = 0;
$args.push(__553_$o_A);
var __r_242 = 0;
__r_242 = new $typed_cons.f32([2])[0]
__r_242=$unwrap(__r_242)*$unwrap(_$o_omega[0]);
var __r_243 = 0;
__r_243 = new $typed_cons.f32([1])[0]
__r_242=$unwrap(__r_242)+$unwrap(__r_243);
$args.push($typed_value(__r_242,"f32"));
__r_241=$assign(__r_241,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_244 = 0;
$args.push(__553_$o_B);
var __r_245 = 0;
__r_245 = new $typed_cons.f32([2])[0]
__r_245=$unwrap(__r_245)+$unwrap(_$o_omega[0]);
$args.push($typed_value(__r_245,"f32"));
__r_244=$assign(__r_244,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_246 = 0;
$args.push(__553_$o_C);
var __r_247 = 0;
__r_247 = new $typed_cons.f32([0])[0]
$args.push($typed_value(__r_247,"f32"));
__r_246=$assign(__r_246,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_248 = 0;
$args.push(__553_$o_D);
var __r_249 = 0;
__r_249 = new $typed_cons.f32([0])[0]
$args.push($typed_value(__r_249,"f32"));
__r_248=$assign(__r_248,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __553_$o_alpha = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_250 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(__553_$o_A);
$args.push(__553_$o_B);
$args.push(__553_$o_C);
$args.push(__553_$o_D);
__r_250=$assign(__r_250,await __func_ovld_thomas_HQSCTN_func_$L_tup_$L_list_$L_f32_$7__$9_list_$L_f32_$7__$9_list_$L_f32_$7__$9_list_$L_f32_$7__$7__$9_list_$L_f32_$7__$7_());
__553_$o_alpha = $value(__r_250);
var __553_$o_beta = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_251 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__553_$o_beta = $value(__r_251);
var __580_$o_i = 0;
__580_$o_i = $value(0);
case 84:/*loopstart_VYQLZB*/
var __r_252 = 0;
__r_252=$unwrap(__553_$o_n)-$unwrap(1);
var __r_253 = 0;
__r_253=Number(__580_$o_i<__r_252);
if (!__r_253){$goto=86;/*loopend_ZIDYKD*/ continue $$;}
var __r_254 = 0;
$args.push(__553_$o_beta);
var __r_255 = 0;
__r_255=$unwrap(0)-$unwrap(1);
var __r_256 = 0;
__r_256=$unwrap(__580_$o_i)+$unwrap(1);
var __r_257 = 0;
__r_257 = $value(__553_$o_gamma[__r_256]);
var __r_258 = 0;
__r_258 = new $typed_cons.f32([__r_255])[0]
__r_258=$unwrap(__r_258)*$unwrap(__r_257);
var __r_259 = 0;
__r_259=$unwrap(__580_$o_i)+$unwrap(1);
var __r_260 = 0;
__r_260 = $value(__553_$o_alpha[__r_259]);
__r_258=$unwrap(__r_258)-$unwrap(__r_260);
$args.push($typed_value(__r_258,"f32"));
__r_254=$assign(__r_254,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 85:/*cont_WEUFQB*/
var __r_261 = 0;
__r_261=$unwrap(__580_$o_i)+$unwrap(1);
__580_$o_i = $value(__r_261);
$goto=84;/*loopstart_VYQLZB*/ continue $$;
case 86:/*loopend_ZIDYKD*/
var __r_262 = 0;
$args.push(__553_$o_beta);
var __r_263 = 0;
__r_263=$unwrap(0)-$unwrap(1);
var __r_264 = 0;
__r_264 = $value(__553_$o_alpha[__553_$o_n]);
var __r_265 = 0;
__r_265 = new $typed_cons.f32([__r_263])[0]
__r_265=$unwrap(__r_265)*$unwrap(__r_264);
$args.push($typed_value(__r_265,"f32"));
__r_262=$assign(__r_262,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __553_$o_c0 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_266 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__553_$o_c0 = $value(__r_266);
var __553_$o_c1 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_267 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__553_$o_c1 = $value(__r_267);
var __582_$o_i = 0;
__582_$o_i = $value(0);
case 87:/*loopstart_SOQJQJ*/
var __r_268 = 0;
__r_268=Number(__582_$o_i<__553_$o_n);
if (!__r_268){$goto=89;/*loopend_PDHYLB*/ continue $$;}
var __583_$o_a = 0;
var __r_269 = 0;
var __r_270 = 0;
__r_270 = $value(__553_$o_alpha[__582_$o_i]);
$args.push($typed_value(__r_270,"f32"));
var __r_271 = 0;
__r_271 = $value(__553_$o_beta[__582_$o_i]);
$args.push($typed_value(__r_271,"f32"));
__r_269=$assign(__r_269,await __func_ovld_rho_FNAEGN_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
var __r_272 = 0;
__r_272 = $value(__553_$o_d[__582_$o_i]);
__r_269=$unwrap(__r_269)*$unwrap(__r_272);
__r_269=$unwrap(__r_269)/$unwrap(3);
__583_$o_a = $value(__r_269);
var __583_$o_b = 0;
var __r_273 = 0;
var __r_274 = 0;
__r_274 = $value(__553_$o_beta[__582_$o_i]);
$args.push($typed_value(__r_274,"f32"));
var __r_275 = 0;
__r_275 = $value(__553_$o_alpha[__582_$o_i]);
$args.push($typed_value(__r_275,"f32"));
__r_273=$assign(__r_273,await __func_ovld_rho_FNAEGN_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
var __r_276 = 0;
__r_276 = $value(__553_$o_d[__582_$o_i]);
__r_273=$unwrap(__r_273)*$unwrap(__r_276);
__r_273=$unwrap(__r_273)/$unwrap(3);
__583_$o_b = $value(__r_273);
var __r_277 = 0;
$args.push(__553_$o_c0);
var __r_278 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_278 = $value(_$o_points[__582_$o_i]);
var __r_279 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_280 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_281 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_281 = $value(__553_$o_chords[__582_$o_i]);
$args.push($typed_value(__r_281,{"con":"vec","elt":["f32",2]}));
var __r_282 = 0;
__r_282 = $value(__553_$o_alpha[__582_$o_i]);
$args.push($typed_value(__r_282,"f32"));
__r_280=$assign(__r_280,await __func_ovld_v_rot_SAJZTU_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
$args.push($typed_value(__r_280,{"con":"vec","elt":["f32",2]}));
__r_279=$assign(__r_279,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_283 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_283[0] = __583_$o_a
__r_283[1] = __583_$o_a
__r_279[0]=__r_279[0]*__r_283[0];
__r_279[1]=__r_279[1]*__r_283[1];
__r_278[0]=__r_278[0]+__r_279[0];
__r_278[1]=__r_278[1]+__r_279[1];
$args.push($typed_value(__r_278,{"con":"vec","elt":["f32",2]}));
__r_277=$assign(__r_277,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_284 = 0;
$args.push(__553_$o_c1);
var __r_285 = 0;
__r_285=$unwrap(__582_$o_i)+$unwrap(1);
var __r_286 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_286 = $value(_$o_points[__r_285]);
var __r_287 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_288 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_289 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_289 = $value(__553_$o_chords[__582_$o_i]);
$args.push($typed_value(__r_289,{"con":"vec","elt":["f32",2]}));
var __r_290 = 0;
var __r_291 = 0;
__r_291 = $value(__553_$o_beta[__582_$o_i]);
__r_290=$unwrap(0)-$unwrap(__r_291);
$args.push($typed_value(__r_290,"f32"));
__r_288=$assign(__r_288,await __func_ovld_v_rot_SAJZTU_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
$args.push($typed_value(__r_288,{"con":"vec","elt":["f32",2]}));
__r_287=$assign(__r_287,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_292 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_292[0] = __583_$o_b
__r_292[1] = __583_$o_b
__r_287[0]=__r_287[0]*__r_292[0];
__r_287[1]=__r_287[1]*__r_292[1];
__r_286[0]=__r_286[0]-__r_287[0];
__r_286[1]=__r_286[1]-__r_287[1];
$args.push($typed_value(__r_286,{"con":"vec","elt":["f32",2]}));
__r_284=$assign(__r_284,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 88:/*cont_YPPRDQ*/
var __r_293 = 0;
__r_293=$unwrap(__582_$o_i)+$unwrap(1);
__582_$o_i = $value(__r_293);
$goto=87;/*loopstart_SOQJQJ*/ continue $$;
case 89:/*loopend_PDHYLB*/
var __553_$o_res = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_294 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__553_$o_res = $value(__r_294);
var __588_$o_i = 0;
__588_$o_i = $value(0);
case 90:/*loopstart_NBAFUF*/
var __r_295 = 0;
__r_295=Number(__588_$o_i<__553_$o_n);
if (!__r_295){$goto=92;/*loopend_MPZDSU*/ continue $$;}
var __r_296 = 0;
$args.push(__553_$o_res);
var __r_297 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
var __r_298 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_298 = $value(_$o_points[__588_$o_i]);
__r_297[0] = $value(__r_298);
var __r_299 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_299 = $value(__553_$o_c0[__588_$o_i]);
__r_297[1] = $value(__r_299);
var __r_300 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_300 = $value(__553_$o_c1[__588_$o_i]);
__r_297[2] = $value(__r_300);
var __r_301 = 0;
__r_301=$unwrap(__588_$o_i)+$unwrap(1);
var __r_302 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_302 = $value(_$o_points[__r_301]);
__r_297[3] = $value(__r_302);
$args.push(__r_297);
__r_296=$assign(__r_296,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 91:/*cont_UGPOJF*/
var __r_303 = 0;
__r_303=$unwrap(__588_$o_i)+$unwrap(1);
__588_$o_i = $value(__r_303);
$goto=90;/*loopstart_NBAFUF*/ continue $$;
case 92:/*loopend_MPZDSU*/
return __553_$o_res;
return;
return;
default:$goto=null;break;}}}




async function __func_ovld_map_FFOOTE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7__$7__$9_list_$L_f32_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __562_$o_f = $args.pop();
var __562_$o_a = $args.pop();
var __563_$o_b = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_1887 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__563_$o_b = $value(__r_1887);
var __564_$o_i = 0;
__564_$o_i = $value(0);
case 615:/*loopstart_JACTPG*/
var __r_1888 = 0;
$args.push(__562_$o_a);
__r_1888=$assign(__r_1888,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1889 = 0;
__r_1889=Number(__564_$o_i<__r_1888);
if (!__r_1889){$goto=617;/*loopend_BSZGPG*/ continue $$;}
var __r_1890 = 0;
$args.push(__563_$o_b);
var __r_1891 = 0;
var __r_1892 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1892 = $value(__562_$o_a[__564_$o_i]);
$args.push($typed_value(__r_1892,{"con":"vec","elt":["f32",2]}));
$args.push(...__562_$o_f.__captr.map($value))
__r_1891=$assign(__r_1891,await __562_$o_f.__funptr());
$args.push($typed_value(__r_1891,"f32"));
__r_1890=$assign(__r_1890,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 616:/*cont_TOVXXV*/
var __r_1893 = 0;
__r_1893=$unwrap(__564_$o_i)+$unwrap(1);
__564_$o_i = $value(__r_1893);
$goto=615;/*loopstart_JACTPG*/ continue $$;
case 617:/*loopend_BSZGPG*/
return __563_$o_b;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_map_FFOOTE_func_$L_tup_$L_list_$L_f32_$7__$9_func_$L_tup_$L_f32_$7__$9_f32_$7__$7__$9_list_$L_f32_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __577_$o_f = $args.pop();
var __577_$o_a = $args.pop();
var __578_$o_b = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_1894 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__578_$o_b = $value(__r_1894);
var __579_$o_i = 0;
__579_$o_i = $value(0);
case 619:/*loopstart_SNULYN*/
var __r_1895 = 0;
$args.push(__577_$o_a);
__r_1895=$assign(__r_1895,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_f32_$7__$7__$9_i32_$7_());
var __r_1896 = 0;
__r_1896=Number(__579_$o_i<__r_1895);
if (!__r_1896){$goto=621;/*loopend_OQULSQ*/ continue $$;}
var __r_1897 = 0;
$args.push(__578_$o_b);
var __r_1898 = 0;
var __r_1899 = 0;
__r_1899 = $value(__577_$o_a[__579_$o_i]);
$args.push($typed_value(__r_1899,"f32"));
$args.push(...__577_$o_f.__captr.map($value))
__r_1898=$assign(__r_1898,await __577_$o_f.__funptr());
$args.push($typed_value(__r_1898,"f32"));
__r_1897=$assign(__r_1897,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 620:/*cont_HPQNKY*/
var __r_1900 = 0;
__r_1900=$unwrap(__579_$o_i)+$unwrap(1);
__579_$o_i = $value(__r_1900);
$goto=619;/*loopstart_SNULYN*/ continue $$;
case 621:/*loopend_OQULSQ*/
return __578_$o_b;
return;
return;
default:$goto=null;break;}}}


async function __func_ovld___lambda_MBOWJX_GHMOYT_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_x = $args.pop();
var __r_1946 = 0;
__r_1946=$assign(__r_1946,await __func_ovld_random_IAIOYX_func_$L_tup_$L__$7__$9_f32_$7_());
__r_1946=$unwrap(__r_1946)*$unwrap(_$o_x[0]);
return __r_1946;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld___lambda_ZPJNFQ_MIAEAO_func_$L_tup_$L_i32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_x = $args.pop();
var __r_1947 = 0;
__r_1947=$unwrap(0)-$unwrap(1);
var __r_1948 = 0;
__r_1948=Number(_$o_x[0]!=__r_1947);
return __r_1948;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld___lambda_YUMEOB_ARAPJW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_p = $args.pop();
var __r_1994 = 0;
__r_1994 = $value(_$o_p[0]);
return __r_1994;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld___lambda_NVNDTM_SVQHKC_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_p = $args.pop();
var __r_1995 = 0;
__r_1995 = $value(_$o_p[1]);
return __r_1995;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld___lambda_CSLMQS_FKZMTB_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_v = $args.pop();
var __r_1996 = 0;
__r_1996 = $value(0);
return __r_1996;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld___lambda_NXMCJI_EZBZFP_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_v = $args.pop();
var __r_1997 = 0;
__r_1997 = $value(0);
return __r_1997;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_control_points_1d_DLZEYZ_func_$L_tup_$L_list_$L_f32_$7__$7__$9_list_$L_f32_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_K = $args.pop();
var __570_$o_m = 0;
var __r_1973 = 0;
$args.push(_$o_K);
__r_1973=$assign(__r_1973,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_f32_$7__$7__$9_i32_$7_());
__r_1973=$unwrap(__r_1973)-$unwrap(1);
__570_$o_m = $value(__r_1973);
var __570_$o_rhs = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_1974 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__570_$o_rhs = $value(__r_1974);
var __r_1975 = 0;
$args.push(__570_$o_rhs);
var __r_1976 = 0;
__r_1976 = $value(_$o_K[0]);
var __r_1977 = 0;
__r_1977 = $value(_$o_K[1]);
var __r_1978 = 0;
__r_1978 = new $typed_cons.f32([2])[0]
__r_1978=$unwrap(__r_1978)*$unwrap(__r_1977);
__r_1976=$unwrap(__r_1976)+$unwrap(__r_1978);
$args.push($typed_value(__r_1976,"f32"));
__r_1975=$assign(__r_1975,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __572_$o_i = 0;
__572_$o_i = $value(1);
case 669:/*loopstart_SKOORZ*/
var __r_1979 = 0;
__r_1979=$unwrap(__570_$o_m)-$unwrap(1);
var __r_1980 = 0;
__r_1980=Number(__572_$o_i<__r_1979);
if (!__r_1980){$goto=671;/*loopend_LTLQMY*/ continue $$;}
var __r_1981 = 0;
$args.push(__570_$o_rhs);
var __r_1982 = 0;
__r_1982 = $value(_$o_K[__572_$o_i]);
var __r_1983 = 0;
__r_1983=$unwrap(4)*$unwrap(__r_1982);
var __r_1984 = 0;
__r_1984=$unwrap(__572_$o_i)+$unwrap(1);
var __r_1985 = 0;
__r_1985 = $value(_$o_K[__r_1984]);
var __r_1986 = 0;
__r_1986=$unwrap(2)*$unwrap(__r_1985);
__r_1983=$unwrap(__r_1983)+$unwrap(__r_1986);
$args.push($typed_value(__r_1983,"f32"));
__r_1981=$assign(__r_1981,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 670:/*cont_FJFYKD*/
var __r_1987 = 0;
__r_1987=$unwrap(__572_$o_i)+$unwrap(1);
__572_$o_i = $value(__r_1987);
$goto=669;/*loopstart_SKOORZ*/ continue $$;
case 671:/*loopend_LTLQMY*/
var __r_1988 = 0;
$args.push(__570_$o_rhs);
var __r_1989 = 0;
__r_1989=$unwrap(__570_$o_m)-$unwrap(1);
var __r_1990 = 0;
__r_1990 = $value(_$o_K[__r_1989]);
var __r_1991 = 0;
__r_1991=$unwrap(8)*$unwrap(__r_1990);
var __r_1992 = 0;
__r_1992 = $value(_$o_K[__570_$o_m]);
__r_1991=$unwrap(__r_1991)+$unwrap(__r_1992);
__r_1991=$unwrap(__r_1991)/$unwrap(2);
$args.push($typed_value(__r_1991,"f32"));
__r_1988=$assign(__r_1988,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_1993 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(__570_$o_rhs);
__r_1993=$assign(__r_1993,await __func_ovld_solve_BQYMHP_func_$L_tup_$L_list_$L_f32_$7__$7__$9_list_$L_f32_$7__$7_());
return __r_1993;
return;
return;
default:$goto=null;break;}}}

async function __func_ovld_solve_BQYMHP_func_$L_tup_$L_list_$L_f32_$7__$7__$9_list_$L_f32_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_rhs = $args.pop();
var __573_$o_m = 0;
var __r_1949 = 0;
$args.push(_$o_rhs);
__r_1949=$assign(__r_1949,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_f32_$7__$7__$9_i32_$7_());
__573_$o_m = $value(__r_1949);
var __573_$o_x = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_1950 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(_$o_rhs);
var __573_$o___func_ovld___lambda_CSLMQS_FKZMTB_$o_0_$o_3924 = {__funptr:__func_ovld___lambda_CSLMQS_FKZMTB_func_$L_tup_$L_f32_$7__$9_f32_$7_,__captr:[],__type:'func'}
$args.push(__573_$o___func_ovld___lambda_CSLMQS_FKZMTB_$o_0_$o_3924);
__r_1950=$assign(__r_1950,await __func_ovld_map_FFOOTE_func_$L_tup_$L_list_$L_f32_$7__$9_func_$L_tup_$L_f32_$7__$9_f32_$7__$7__$9_list_$L_f32_$7__$7_());
__573_$o_x = $value(__r_1950);
var __573_$o_tmp = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_1951 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(_$o_rhs);
var __573_$o___func_ovld___lambda_NXMCJI_EZBZFP_$o_0_$o_3973 = {__funptr:__func_ovld___lambda_NXMCJI_EZBZFP_func_$L_tup_$L_f32_$7__$9_f32_$7_,__captr:[],__type:'func'}
$args.push(__573_$o___func_ovld___lambda_NXMCJI_EZBZFP_$o_0_$o_3973);
__r_1951=$assign(__r_1951,await __func_ovld_map_FFOOTE_func_$L_tup_$L_list_$L_f32_$7__$9_func_$L_tup_$L_f32_$7__$9_f32_$7__$7__$9_list_$L_f32_$7__$7_());
__573_$o_tmp = $value(__r_1951);
var __573_$o_b = 0;
__573_$o_b = $value(2);
var __r_1952 = 0;
__r_1952 = $value(_$o_rhs[0]);
__r_1952=$unwrap(__r_1952)/$unwrap(__573_$o_b);
__573_$o_x[0] = $value(__r_1952);
var __585_$o_i = 0;
__585_$o_i = $value(1);
case 659:/*loopstart_QXJBDH*/
var __r_1953 = 0;
__r_1953=Number(__585_$o_i<__573_$o_m);
if (!__r_1953){$goto=664;/*loopend_LFVPKJ*/ continue $$;}
var __r_1954 = 0;
__r_1954=$unwrap(1)/$unwrap(__573_$o_b);
__573_$o_tmp[__585_$o_i] = $value(__r_1954);
var __r_1955 = 0;
var __r_1956 = 0;
__r_1956=$unwrap(__573_$o_m)-$unwrap(1);
var __r_1957 = 0;
__r_1957=Number(__585_$o_i<__r_1956);
case 660:/*ternstart_KDIHAP*/
if (!__r_1957){$goto=661;/*ternelse_PJCZHU*/ continue $$;}
__r_1955 = $value(4);
$goto=662;/*ternend_XVIBAM*/ continue $$;
case 661:/*ternelse_PJCZHU*/
__r_1955 = $value(3.5);
case 662:/*ternend_XVIBAM*/
var __r_1958 = 0;
__r_1958 = $value(__573_$o_tmp[__585_$o_i]);
__r_1955=$unwrap(__r_1955)-$unwrap(__r_1958);
__573_$o_b = $value(__r_1955);
var __r_1959 = 0;
__r_1959 = $value(_$o_rhs[__585_$o_i]);
var __r_1960 = 0;
__r_1960=$unwrap(__585_$o_i)-$unwrap(1);
var __r_1961 = 0;
__r_1961 = $value(__573_$o_x[__r_1960]);
__r_1959=$unwrap(__r_1959)-$unwrap(__r_1961);
__r_1959=$unwrap(__r_1959)/$unwrap(__573_$o_b);
__573_$o_x[__585_$o_i] = $value(__r_1959);
case 663:/*cont_BYKJFU*/
var __r_1962 = 0;
__r_1962=$unwrap(__585_$o_i)+$unwrap(1);
__585_$o_i = $value(__r_1962);
$goto=659;/*loopstart_QXJBDH*/ continue $$;
case 664:/*loopend_LFVPKJ*/
var __587_$o_i = 0;
__587_$o_i = $value(1);
case 665:/*loopstart_HRUSIU*/
var __r_1963 = 0;
__r_1963=Number(__587_$o_i<__573_$o_m);
if (!__r_1963){$goto=667;/*loopend_GYIFLE*/ continue $$;}
var __r_1964 = 0;
__r_1964=$unwrap(__573_$o_m)-$unwrap(1);
__r_1964=$unwrap(__r_1964)-$unwrap(__587_$o_i);
var __r_1965 = 0;
__r_1965 = $value(__573_$o_x[__r_1964]);
var __r_1966 = 0;
__r_1966=$unwrap(__573_$o_m)-$unwrap(__587_$o_i);
var __r_1967 = 0;
__r_1967 = $value(__573_$o_tmp[__r_1966]);
var __r_1968 = 0;
__r_1968=$unwrap(__573_$o_m)-$unwrap(__587_$o_i);
var __r_1969 = 0;
__r_1969 = $value(__573_$o_x[__r_1968]);
__r_1967=$unwrap(__r_1967)*$unwrap(__r_1969);
var __r_1970 = 0;
__r_1970=$unwrap(__r_1965)-$unwrap(__r_1967);
var __r_1971 = 0;
__r_1971=$unwrap(__573_$o_m)-$unwrap(1);
__r_1971=$unwrap(__r_1971)-$unwrap(__587_$o_i);
__573_$o_x[__r_1971] = $value(__r_1970);
case 666:/*cont_EGGGVB*/
var __r_1972 = 0;
__r_1972=$unwrap(__587_$o_i)+$unwrap(1);
__587_$o_i = $value(__r_1972);
$goto=665;/*loopstart_HRUSIU*/ continue $$;
case 667:/*loopend_GYIFLE*/
return __573_$o_x;
return;
return;
default:$goto=null;break;}}}

async function __func_ovld_natural_cubic_bezier_SFOATB_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_points = $args.pop();
var __553_$o_n = 0;
var __r_155 = 0;
$args.push(_$o_points);
__r_155=$assign(__r_155,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_155=$unwrap(__r_155)-$unwrap(1);
__553_$o_n = $value(__r_155);
var __r_156 = 0;
__r_156=Number(__553_$o_n<1);
case 68:/*condstart_YHHFDL*/
if (!__r_156){$goto=69;/*endif_AOVKMN*/ continue $$;}
var __r_157 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
return __r_157;
return;
case 69:/*endif_AOVKMN*/
var __r_158 = 0;
__r_158=Number(__553_$o_n==1);
case 70:/*condstart_KKXCIN*/
if (!__r_158){$goto=71;/*endif_BYDDAT*/ continue $$;}
var __557_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_159 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_159 = $value(_$o_points[0]);
__557_$o_p0 = $value(__r_159);
var __557_$o_p3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_160 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_160 = $value(_$o_points[1]);
__557_$o_p3 = $value(__r_160);
var __557_$o_c1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_161 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_161[0]=__557_$o_p3[0]-__557_$o_p0[0];
__r_161[1]=__557_$o_p3[1]-__557_$o_p0[1];
var __r_162 = 0;
__r_162=$unwrap(1)/$unwrap(3);
var __r_163 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_163[0] = __r_162
__r_163[1] = __r_162
__r_161[0]=__r_161[0]*__r_163[0];
__r_161[1]=__r_161[1]*__r_163[1];
var __r_164 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_164[0]=__557_$o_p0[0]+__r_161[0];
__r_164[1]=__557_$o_p0[1]+__r_161[1];
__557_$o_c1 = $value(__r_164);
var __557_$o_c2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_165 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_165[0]=__557_$o_p3[0]-__557_$o_p0[0];
__r_165[1]=__557_$o_p3[1]-__557_$o_p0[1];
var __r_166 = 0;
__r_166=$unwrap(2)/$unwrap(3);
var __r_167 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_167[0] = __r_166
__r_167[1] = __r_166
__r_165[0]=__r_165[0]*__r_167[0];
__r_165[1]=__r_165[1]*__r_167[1];
var __r_168 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_168[0]=__557_$o_p0[0]+__r_165[0];
__r_168[1]=__557_$o_p0[1]+__r_165[1];
__557_$o_c2 = $value(__r_168);
var __r_169 = Object.assign(new Array(1).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
var __r_170 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_170[0] = $value(__557_$o_p0);
__r_170[1] = $value(__557_$o_c1);
__r_170[2] = $value(__557_$o_c2);
__r_170[3] = $value(__557_$o_p3);
__r_169[0] = $value(__r_170);
return __r_169;
return;
case 71:/*endif_BYDDAT*/
var __553_$o_X = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_171 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(_$o_points);
var __553_$o___func_ovld___lambda_YUMEOB_ARAPJW_$o_0_$o_4554 = {__funptr:__func_ovld___lambda_YUMEOB_ARAPJW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_,__captr:[],__type:'func'}
$args.push(__553_$o___func_ovld___lambda_YUMEOB_ARAPJW_$o_0_$o_4554);
__r_171=$assign(__r_171,await __func_ovld_map_FFOOTE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7__$7__$9_list_$L_f32_$7__$7_());
__553_$o_X = $value(__r_171);
var __553_$o_Y = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_172 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(_$o_points);
var __553_$o___func_ovld___lambda_NVNDTM_SVQHKC_$o_0_$o_4609 = {__funptr:__func_ovld___lambda_NVNDTM_SVQHKC_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_,__captr:[],__type:'func'}
$args.push(__553_$o___func_ovld___lambda_NVNDTM_SVQHKC_$o_0_$o_4609);
__r_172=$assign(__r_172,await __func_ovld_map_FFOOTE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7__$7__$9_list_$L_f32_$7__$7_());
__553_$o_Y = $value(__r_172);
var __553_$o_p1x = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_173 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(__553_$o_X);
__r_173=$assign(__r_173,await __func_ovld_control_points_1d_DLZEYZ_func_$L_tup_$L_list_$L_f32_$7__$7__$9_list_$L_f32_$7__$7_());
__553_$o_p1x = $value(__r_173);
var __553_$o_p1y = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_174 = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
$args.push(__553_$o_Y);
__r_174=$assign(__r_174,await __func_ovld_control_points_1d_DLZEYZ_func_$L_tup_$L_list_$L_f32_$7__$7__$9_list_$L_f32_$7__$7_());
__553_$o_p1y = $value(__r_174);
var __553_$o_segments = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_175 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__553_$o_segments = $value(__r_175);
var __589_$o_i = 0;
__589_$o_i = $value(0);
case 72:/*loopstart_TOZBDG*/
var __r_176 = 0;
__r_176=Number(__589_$o_i<__553_$o_n);
if (!__r_176){$goto=77;/*loopend_XJENRK*/ continue $$;}
var __590_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_177 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_177 = $value(_$o_points[__589_$o_i]);
__590_$o_p0 = $value(__r_177);
var __590_$o_p3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_178 = 0;
__r_178=$unwrap(__589_$o_i)+$unwrap(1);
var __r_179 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_179 = $value(_$o_points[__r_178]);
__590_$o_p3 = $value(__r_179);
var __590_$o_c1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_180 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_181 = 0;
__r_181 = $value(__553_$o_p1x[__589_$o_i]);
__r_180[0] = $value(__r_181);
var __r_182 = 0;
__r_182 = $value(__553_$o_p1y[__589_$o_i]);
__r_180[1] = $value(__r_182);
__590_$o_c1 = $value(__r_180);
var __590_$o_c2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_183 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_183[0] = $value(0);
__r_183[1] = $value(0);
__590_$o_c2 = $value(__r_183);
var __r_184 = 0;
__r_184=$unwrap(__553_$o_n)-$unwrap(1);
var __r_185 = 0;
__r_185=Number(__589_$o_i<__r_184);
case 73:/*condstart_ZDYZYK*/
if (!__r_185){$goto=74;/*endif_COEJKW*/ continue $$;}
var __r_186 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_187 = 0;
__r_187=$unwrap(__589_$o_i)+$unwrap(1);
var __r_188 = 0;
__r_188 = $value(__553_$o_X[__r_187]);
var __r_189 = 0;
__r_189 = new $typed_cons.f32([2])[0]
__r_189=$unwrap(__r_189)*$unwrap(__r_188);
var __r_190 = 0;
__r_190=$unwrap(__589_$o_i)+$unwrap(1);
var __r_191 = 0;
__r_191 = $value(__553_$o_p1x[__r_190]);
__r_189=$unwrap(__r_189)-$unwrap(__r_191);
__r_186[0] = $value(__r_189);
var __r_192 = 0;
__r_192=$unwrap(__589_$o_i)+$unwrap(1);
var __r_193 = 0;
__r_193 = $value(__553_$o_Y[__r_192]);
var __r_194 = 0;
__r_194 = new $typed_cons.f32([2])[0]
__r_194=$unwrap(__r_194)*$unwrap(__r_193);
var __r_195 = 0;
__r_195=$unwrap(__589_$o_i)+$unwrap(1);
var __r_196 = 0;
__r_196 = $value(__553_$o_p1y[__r_195]);
__r_194=$unwrap(__r_194)-$unwrap(__r_196);
__r_186[1] = $value(__r_194);
__590_$o_c2 = $value(__r_186);
$goto=75;/*condend_EOPTID*/ continue $$;
case 74:/*endif_COEJKW*/
var __r_197 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_198 = 0;
__r_198 = $value(__553_$o_X[__553_$o_n]);
var __r_199 = 0;
__r_199=$unwrap(__553_$o_n)-$unwrap(1);
var __r_200 = 0;
__r_200 = $value(__553_$o_p1x[__r_199]);
__r_198=$unwrap(__r_198)+$unwrap(__r_200);
var __r_201 = 0;
__r_201 = new $typed_cons.f32([2])[0]
__r_198=$unwrap(__r_198)/$unwrap(__r_201);
__r_197[0] = $value(__r_198);
var __r_202 = 0;
__r_202 = $value(__553_$o_Y[__553_$o_n]);
var __r_203 = 0;
__r_203=$unwrap(__553_$o_n)-$unwrap(1);
var __r_204 = 0;
__r_204 = $value(__553_$o_p1y[__r_203]);
__r_202=$unwrap(__r_202)+$unwrap(__r_204);
var __r_205 = 0;
__r_205 = new $typed_cons.f32([2])[0]
__r_202=$unwrap(__r_202)/$unwrap(__r_205);
__r_197[1] = $value(__r_202);
__590_$o_c2 = $value(__r_197);
case 75:/*condend_EOPTID*/
var __r_206 = 0;
$args.push(__553_$o_segments);
var __r_207 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_207[0] = $value(__590_$o_p0);
__r_207[1] = $value(__590_$o_c1);
__r_207[2] = $value(__590_$o_c2);
__r_207[3] = $value(__590_$o_p3);
$args.push(__r_207);
__r_206=$assign(__r_206,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 76:/*cont_PJYKVQ*/
var __r_208 = 0;
__r_208=$unwrap(__589_$o_i)+$unwrap(1);
__589_$o_i = $value(__r_208);
$goto=72;/*loopstart_TOZBDG*/ continue $$;
case 77:/*loopend_XJENRK*/
return __553_$o_segments;
return;
return;
default:$goto=null;break;}}}



async function __func_ovld_smoothen_DPVJKZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_pts = $args.pop();
var __552_$o_out = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_304 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__552_$o_out = $value(__r_304);
var __552_$o_pms = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_305 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__552_$o_pms = $value(__r_305);
var __552_$o_nats = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_306 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
$args.push(_$o_pts);

if ($SPLI == 1){
__r_306=$assign(__r_306,await __func_ovld_natural_cubic_bezier_SFOATB_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7_());
}else{
$args.push(Object.assign(new $typed_cons.f32([1]),{__type:'f32'}));
__r_306=$assign(__r_306,await __func_ovld_hobby_RLFUVJ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7_());
}

__552_$o_nats = $value(__r_306);
var __590_$o_i = 0;
__590_$o_i = $value(0);
case 94:/*loopstart_EQTQJD*/
var __r_307 = 0;
$args.push(__552_$o_nats);
__r_307=$assign(__r_307,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_308 = 0;
__r_308=Number(__590_$o_i<__r_307);
if (!__r_308){$goto=99;/*loopend_XNYOHS*/ continue $$;}
var __593_$o_t = 0;
__593_$o_t = $value(0);
case 95:/*loopstart_UCMGRJ*/
var __r_309 = 0;
__r_309=Number(__593_$o_t<1);
if (!__r_309){$goto=97;/*loopend_CLSDXH*/ continue $$;}
var __594_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_310 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_311 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_311 = $value(__552_$o_nats[__590_$o_i]);
$args.push(__r_311);
$args.push(__552_$o_pms);
$args.push($typed_value(__593_$o_t,"f32"));
var __r_312 = 0;
__r_312=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_312,"i32"));
__r_310=$assign(__r_310,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__594_$o_v = $value(__r_310);
var __r_313 = 0;
$args.push(__552_$o_out);
$args.push($typed_value(__594_$o_v,{"con":"vec","elt":["f32",2]}));
__r_313=$assign(__r_313,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 96:/*cont_BEGVYN*/
var __r_314 = 0;
__r_314=$unwrap(__593_$o_t)+$unwrap(0.05);
__593_$o_t = $value(__r_314);
$goto=95;/*loopstart_UCMGRJ*/ continue $$;
case 97:/*loopend_CLSDXH*/
case 98:/*cont_DYPFHR*/
var __r_315 = 0;
__r_315=$unwrap(__590_$o_i)+$unwrap(1);
__590_$o_i = $value(__r_315);
$goto=94;/*loopstart_EQTQJD*/ continue $$;
case 99:/*loopend_XNYOHS*/
return __552_$o_out;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_ray_polygon_USXSIQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_poly = $args.pop();
var _$o_q1 = $args.pop();
var _$o_q0 = $args.pop();
var __675_$o_i = 0;
__675_$o_i = $value(0);
case 101:/*loopstart_OFLUAE*/
var __r_316 = 0;
$args.push(_$o_poly);
__r_316=$assign(__r_316,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_317 = 0;
__r_317=Number(__675_$o_i<__r_316);
if (!__r_317){$goto=105;/*loopend_PGTHDS*/ continue $$;}
var __677_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_318 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_318 = $value(_$o_poly[__675_$o_i]);
__677_$o_p0 = $value(__r_318);
var __677_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_319 = 0;
__r_319=$unwrap(__675_$o_i)+$unwrap(1);
var __r_320 = 0;
$args.push(_$o_poly);
__r_320=$assign(__r_320,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_319=$unwrap(__r_319)%$unwrap(__r_320);
var __r_321 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_321 = $value(_$o_poly[__r_319]);
__677_$o_p1 = $value(__r_321);
var __677_$o_b = 0;
var __677_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_322 = Object.assign([Object.assign(new $typed_cons.i32(1),{__type:"i32"}),Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}})],{__type:{"con":"tup","elt":["i32",{"con":"vec","elt":["f32",2]}]}});
$args.push($typed_value(_$o_q0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(_$o_q1,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__677_$o_p0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__677_$o_p1,{"con":"vec","elt":["f32",2]}));
var __r_323 = 0;
__r_323=$unwrap(geom_$o_LHS_RAY)|$unwrap(geom_$o_RHS_SEGMENT);
__r_323=$unwrap(__r_323)|$unwrap(geom_$o_RET_POINTS);
$args.push($typed_value(__r_323,"i32"));
__r_322=$assign(__r_322,await __func_ovld_line_intersect_YORLGD_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_i32_$7__$9_tup_$L_i32_$9_vec_$L_f32_$9_2_$7__$7__$7_());
__677_$o_b = $value(__r_322[0]);
__677_$o_v = $value(__r_322[1]);
case 102:/*condstart_SYYWZP*/
if (!__677_$o_b){$goto=103;/*endif_DQMCSF*/ continue $$;}
return __677_$o_v;
return;
case 103:/*endif_DQMCSF*/
case 104:/*cont_ATSFVW*/
var __r_324 = 0;
__r_324=$unwrap(__675_$o_i)+$unwrap(1);
__675_$o_i = $value(__r_324);
$goto=101;/*loopstart_OFLUAE*/ continue $$;
case 105:/*loopend_PGTHDS*/
return _$o_q1;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_shuffle_NZMNCP_func_$L_tup_$L_list_$L_i32_$7__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __719_$o_a = $args.pop();
var __721_$o_i = 0;
var __r_325 = 0;
$args.push(__719_$o_a);
__r_325=$assign(__r_325,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_325=$unwrap(__r_325)-$unwrap(1);
__721_$o_i = $value(__r_325);
case 107:/*loopstart_TYFJWW*/
var __r_326 = 0;
__r_326=Number(__721_$o_i>0);
if (!__r_326){$goto=109;/*loopend_IPGVKS*/ continue $$;}
var __723_$o_j = 0;
var __r_327 = 0;
$args.push(Object.assign(new $typed_cons.f32([0]),{__type:'f32'}));
var __r_328 = 0;
__r_328 = new $typed_cons.f32([__721_$o_i])[0]
__r_328=$unwrap(__r_328)+$unwrap(1);
$args.push($typed_value(__r_328,"f32"));
__r_327=$assign(__r_327,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
var __r_329 = 0;
__r_329 = new $typed_cons.i32([__r_327])[0]
__723_$o_j = $value(__r_329);
var __r_330 = Object.assign([Object.assign(new $typed_cons.i32(1),{__type:"i32"}),Object.assign(new $typed_cons.i32(1),{__type:"i32"})],{__type:{"con":"tup","elt":["i32","i32"]}});
var __r_331 = 0;
__r_331 = $value(__719_$o_a[__723_$o_j]);
__r_330[0] = $value(__r_331);
var __r_332 = 0;
__r_332 = $value(__719_$o_a[__721_$o_i]);
__r_330[1] = $value(__r_332);
__719_$o_a[__721_$o_i] = $value(__r_330[0]);
__719_$o_a[__723_$o_j] = $value(__r_330[1]);
case 108:/*cont_IUWFVB*/
var __r_333 = 0;
__r_333=$unwrap(__721_$o_i)-$unwrap(1);
__721_$o_i = $value(__r_333);
$goto=107;/*loopstart_TYFJWW*/ continue $$;
case 109:/*loopend_IPGVKS*/
return;
default:$goto=null;break;}}}
async function __func_ovld_find_corner_JWPHLH_func_$L_tup_$L_i32_$9_i32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_cells = $args.pop();
var __0_$o_celli = $args.pop();
var __0_$o_corner_xs = $args.pop();
var __0_$o_corner_ns = $args.pop();
var __0_$o_corner_ss = $args.pop();
var __0_$o_corner_qs = $args.pop();
var _$o_j = $args.pop();
var _$o_i = $args.pop();
var __298_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_334 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_334 = $value(__0_$o_cells[_$o_i]);
var __r_335 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_335 = $value(__r_334[_$o_j]);
__298_$o_v = $value(__r_335);
var __r_336 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_336 = $value(__0_$o_celli[_$o_i]);
var __r_337 = 0;
__r_337 = $value(__r_336[_$o_j]);
var __r_338 = 0;
__r_338=Number(__r_337<0);
case 111:/*condstart_IPSNRV*/
if (!__r_338){$goto=112;/*endif_OWGIHK*/ continue $$;}
var __r_339 = 0;
__r_339=$unwrap(0)-$unwrap(1);
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
return __r_339;
return;
case 112:/*endif_OWGIHK*/
var __301_$o_i = 0;
__301_$o_i = $value(0);
case 113:/*loopstart_LRSZVU*/
var __r_340 = 0;
$args.push(__0_$o_corner_xs);
__r_340=$assign(__r_340,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_341 = 0;
__r_341=Number(__301_$o_i<__r_340);
if (!__r_341){$goto=117;/*loopend_YAJUEQ*/ continue $$;}
var __r_342 = 0;
var __r_343 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_343 = $value(__0_$o_corner_xs[__301_$o_i]);
__r_343[0]=__r_343[0]-__298_$o_v[0];
__r_343[1]=__r_343[1]-__298_$o_v[1];
$args.push($typed_value(__r_343,{"con":"vec","elt":["f32",2]}));
__r_342=$assign(__r_342,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
var __r_344 = 0;
__r_344=Number(__r_342<0.0001);
case 114:/*condstart_LIVOSZ*/
if (!__r_344){$goto=115;/*endif_NHEQOF*/ continue $$;}
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
return __301_$o_i;
return;
case 115:/*endif_NHEQOF*/
case 116:/*cont_KNWUPU*/
var __r_345 = 0;
__r_345=$unwrap(__301_$o_i)+$unwrap(1);
__301_$o_i = $value(__r_345);
$goto=113;/*loopstart_LRSZVU*/ continue $$;
case 117:/*loopend_YAJUEQ*/
var __r_346 = 0;
$args.push(__0_$o_corner_xs);
$args.push($typed_value(__298_$o_v,{"con":"vec","elt":["f32",2]}));
__r_346=$assign(__r_346,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_347 = 0;
$args.push(__0_$o_corner_ns);
var __r_348 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
$args.push(__r_348);
__r_347=$assign(__r_347,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_349 = 0;
$args.push(__0_$o_corner_ss);
var __r_350 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
$args.push(__r_350);
__r_349=$assign(__r_349,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_351 = 0;
$args.push(__0_$o_corner_qs);
var __r_352 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
$args.push(__r_352);
__r_351=$assign(__r_351,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_353 = 0;
$args.push(__0_$o_corner_xs);
__r_353=$assign(__r_353,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_353=$unwrap(__r_353)-$unwrap(1);
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
return __r_353;
return;
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
return;
default:$goto=null;break;}}}
async function __func_ovld_walk_TIHIRF_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_visited = $args.pop();
var __0_$o_corner_ns = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_corner_xs = $args.pop();
var __0_$o_corner_ss = $args.pop();
var __0_$o_weights = $args.pop();
var __180_$o_assign = $args.pop();
var _$o_cur = $args.pop();
var _$o_path = $args.pop();
var __r_354 = 0;
__r_354 = $value(__0_$o_visited[_$o_cur]);
case 119:/*condstart_TEOHSI*/
if (!__r_354){$goto=120;/*endif_GZZBTA*/ continue $$;}
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
return;
case 120:/*endif_GZZBTA*/
var __r_355 = 0;
$args.push(_$o_path);
$args.push($typed_value(_$o_cur,"i32"));
__r_355=$assign(__r_355,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
__0_$o_visited[_$o_cur] = $value(1);
var __377_$o_i = 0;
__377_$o_i = $value(0);
case 121:/*loopstart_TDBZUV*/
var __r_356 = 0;
var __r_357 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_357 = $value(__0_$o_corner_ns[_$o_cur]);
$args.push(__r_357);
__r_356=$assign(__r_356,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_358 = 0;
__r_358=Number(__377_$o_i<__r_356);
if (!__r_358){$goto=147;/*loopend_WUAXPB*/ continue $$;}
var __r_359 = 0;
var __r_360 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_360 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_361 = 0;
__r_361 = $value(__r_360[__377_$o_i]);
var __r_362 = 0;
__r_362 = $value(__0_$o_visited[__r_361]);
__r_359 = !__r_362;
case 122:/*condstart_ANFUBZ*/
if (!__r_359){$goto=145;/*endif_XCXUQG*/ continue $$;}
var __r_363 = 0;
$args.push(_$o_path);
__r_363=$assign(__r_363,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_364 = 0;
__r_364=Number(__r_363>1);
case 123:/*condstart_FRADPB*/
if (!__r_364){$goto=143;/*endif_NPVJID*/ continue $$;}
var __384_$o_q = 0;
var __r_365 = 0;
$args.push(_$o_path);
__r_365=$assign(__r_365,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_365=$unwrap(__r_365)-$unwrap(2);
var __r_366 = 0;
__r_366 = $value(_$o_path[__r_365]);
__384_$o_q = $value(__r_366);
var __384_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_367 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_367[0] = $value(0);
__r_367[1] = $value(0);
__384_$o_p0 = $value(__r_367);
var __r_368 = 0;
__r_368=$unwrap(0)-$unwrap(1);
var __r_369 = 0;
__r_369=Number(__384_$o_q<__r_368);
case 124:/*condstart_IVRQVB*/
if (!__r_369){$goto=125;/*endif_HRYTRY*/ continue $$;}
var __r_370 = 0;
__r_370=$unwrap(0)-$unwrap(__384_$o_q);
__r_370=$unwrap(__r_370)-$unwrap(2);
var __r_371 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_371 = $value(__0_$o_sites[__r_370]);
__384_$o_p0 = $value(__r_371);
$goto=126;/*condend_HSUIIA*/ continue $$;
case 125:/*endif_HRYTRY*/
var __r_372 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_372 = $value(__0_$o_corner_xs[__384_$o_q]);
__384_$o_p0 = $value(__r_372);
case 126:/*condend_HSUIIA*/
var __384_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_373 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_373 = $value(__0_$o_corner_xs[_$o_cur]);
__384_$o_p1 = $value(__r_373);
var __384_$o_p2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_374 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_374 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_375 = 0;
__r_375 = $value(__r_374[__377_$o_i]);
var __r_376 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_376 = $value(__0_$o_corner_xs[__r_375]);
__384_$o_p2 = $value(__r_376);
var __384_$o_angle = 0;
var __r_377 = 0;
$args.push($typed_value(__384_$o_p0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__384_$o_p1,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__384_$o_p2,{"con":"vec","elt":["f32",2]}));
__r_377=$assign(__r_377,await __func_ovld_calc_turn_DQRICR_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__384_$o_angle = $value(__r_377);
var __384_$o_bob = 0;
var __r_378 = 0;
__r_378=$unwrap(0)-$unwrap(1);
__384_$o_bob = $value(__r_378);
var __390_$o_k = 0;
__390_$o_k = $value(0);
case 127:/*loopstart_DMNZZL*/
var __r_379 = 0;
var __r_380 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_380 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_381 = 0;
__r_381 = $value(__r_380[__377_$o_i]);
var __r_382 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_382 = $value(__0_$o_corner_ss[__r_381]);
$args.push(__r_382);
__r_379=$assign(__r_379,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_383 = 0;
__r_383=Number(__390_$o_k<__r_379);
if (!__r_383){$goto=135;/*loopend_ZSWTBB*/ continue $$;}
var __392_$o_si = 0;
var __r_384 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_384 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_385 = 0;
__r_385 = $value(__r_384[__377_$o_i]);
var __r_386 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_386 = $value(__0_$o_corner_ss[__r_385]);
var __r_387 = 0;
__r_387 = $value(__r_386[__390_$o_k]);
__392_$o_si = $value(__r_387);
var __r_388 = 0;
var __r_389 = 0;
__r_389 = $value(__0_$o_weights[__392_$o_si]);
var __r_390 = 0;
__r_390=Number(__r_389>1);
if (!__r_390){$goto=128;/*land0_AFMUZY*/ continue $$;}
var __r_391 = 0;
var __r_392 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_392 = $value(__180_$o_assign[__392_$o_si]);
$args.push(__r_392);
__r_391=$assign(__r_391,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_393 = 0;
__r_393=Number(__r_391==0);
if (!__r_393){$goto=128;/*land0_AFMUZY*/ continue $$;}
__r_388 = $value(1);
$goto=129;/*land1_AAZBNQ*/ continue $$;
case 128:/*land0_AFMUZY*/
__r_388 = $value(0);
case 129:/*land1_AAZBNQ*/
case 130:/*condstart_EUATCF*/
if (!__r_388){$goto=133;/*endif_KDRDQB*/ continue $$;}
var __395_$o_p3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_394 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_394 = $value(__0_$o_sites[__392_$o_si]);
__395_$o_p3 = $value(__r_394);
var __395_$o_angle2 = 0;
var __r_395 = 0;
$args.push($typed_value(__384_$o_p1,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__384_$o_p2,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__395_$o_p3,{"con":"vec","elt":["f32",2]}));
__r_395=$assign(__r_395,await __func_ovld_calc_turn_DQRICR_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__395_$o_angle2 = $value(__r_395);
var __r_396 = 0;
$args.push($typed_value(__395_$o_angle2,"f32"));
__r_396=$assign(__r_396,await __func_ovld_abs_PMVDIS_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_397 = 0;
__r_397=$unwrap(math_$o_PI)/$unwrap(2);
var __r_398 = 0;
__r_398=Number(__r_396<__r_397);
case 131:/*condstart_KGOOHK*/
if (!__r_398){$goto=132;/*endif_BVGMUF*/ continue $$;}
__384_$o_bob = $value(__392_$o_si);
$goto=135;/*loopend_ZSWTBB*/ continue $$;
case 132:/*endif_BVGMUF*/
case 133:/*endif_KDRDQB*/
case 134:/*cont_KLSTNI*/
var __r_399 = 0;
__r_399=$unwrap(__390_$o_k)+$unwrap(1);
__390_$o_k = $value(__r_399);
$goto=127;/*loopstart_DMNZZL*/ continue $$;
case 135:/*loopend_ZSWTBB*/
var __r_400 = 0;
var __r_401 = 0;
__r_401=$unwrap(0)-$unwrap(math_$o_PI);
__r_401=$unwrap(__r_401)/$unwrap(4);
var __r_402 = 0;
__r_402=Number(__r_401<__384_$o_angle);
if (!__r_402){$goto=136;/*land0_IVCLJF*/ continue $$;}
var __r_403 = 0;
__r_403=$unwrap(math_$o_PI)/$unwrap(2);
var __r_404 = 0;
__r_404=Number(__384_$o_angle<__r_403);
if (!__r_404){$goto=136;/*land0_IVCLJF*/ continue $$;}
__r_400 = $value(1);
$goto=137;/*land1_AQXJFQ*/ continue $$;
case 136:/*land0_IVCLJF*/
__r_400 = $value(0);
case 137:/*land1_AQXJFQ*/
case 138:/*condstart_FWIWFV*/
if (!__r_400){$goto=142;/*endif_SLCPGD*/ continue $$;}
var __r_405 = 0;
__r_405=$unwrap(0)-$unwrap(1);
var __r_406 = 0;
__r_406=Number(__384_$o_bob==__r_405);
case 139:/*condstart_ZCFDYB*/
if (!__r_406){$goto=140;/*endif_NNDZBE*/ continue $$;}
var __r_407 = null;
$args.push(_$o_path);
var __r_408 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_408 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_409 = 0;
__r_409 = $value(__r_408[__377_$o_i]);
$args.push($typed_value(__r_409,"i32"));
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
__r_407=$assign(__r_407,await __func_ovld_walk_TIHIRF_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_void_$7_());
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
$goto=141;/*condend_YWBJSJ*/ continue $$;
case 140:/*endif_NNDZBE*/
var __r_410 = 0;
var __r_411 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_411 = $value(__180_$o_assign[__384_$o_bob]);
$args.push(__r_411);
var __r_412 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_412 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_413 = 0;
__r_413 = $value(__r_412[__377_$o_i]);
$args.push($typed_value(__r_413,"i32"));
__r_410=$assign(__r_410,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
var __r_414 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_414 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_415 = 0;
__r_415 = $value(__r_414[__377_$o_i]);
__0_$o_visited[__r_415] = $value(1);
var __r_416 = 0;
$args.push(_$o_path);
var __r_417 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_417 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_418 = 0;
__r_418 = $value(__r_417[__377_$o_i]);
$args.push($typed_value(__r_418,"i32"));
__r_416=$assign(__r_416,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
var __r_419 = 0;
$args.push(_$o_path);
var __r_420 = 0;
__r_420=$unwrap(0)-$unwrap(2);
__r_420=$unwrap(__r_420)-$unwrap(__384_$o_bob);
$args.push($typed_value(__r_420,"i32"));
__r_419=$assign(__r_419,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 141:/*condend_YWBJSJ*/
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
return;
case 142:/*endif_SLCPGD*/
$goto=144;/*condend_IHBHRB*/ continue $$;
case 143:/*endif_NPVJID*/
var __r_421 = null;
$args.push(_$o_path);
var __r_422 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_422 = $value(__0_$o_corner_ns[_$o_cur]);
var __r_423 = 0;
__r_423 = $value(__r_422[__377_$o_i]);
$args.push($typed_value(__r_423,"i32"));
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
__r_421=$assign(__r_421,await __func_ovld_walk_TIHIRF_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_void_$7_());
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
return;
case 144:/*condend_IHBHRB*/
case 145:/*endif_XCXUQG*/
case 146:/*cont_WPNBOI*/
var __r_424 = 0;
__r_424=$unwrap(__377_$o_i)+$unwrap(1);
__377_$o_i = $value(__r_424);
$goto=121;/*loopstart_TDBZUV*/ continue $$;
case 147:/*loopend_WUAXPB*/
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
return;
default:$goto=null;break;}}}
async function __func_ovld_walk_all_CTBOGK_func_$L_tup_$L_i32_$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_sites = $args.pop();
var __0_$o_weights = $args.pop();
var __180_$o_assign = $args.pop();
var __0_$o_celli = $args.pop();
var __0_$o_visited = $args.pop();
var __0_$o_corner_ns = $args.pop();
var __0_$o_corner_xs = $args.pop();
var __0_$o_corner_ss = $args.pop();
var __0_$o_paths = $args.pop();
var _$o_cur = $args.pop();
var _$o_prv = $args.pop();
var __r_425 = 0;
var __r_426 = 0;
__r_426=$unwrap(0)-$unwrap(1);
var __r_427 = 0;
__r_427=Number(_$o_prv[0]==__r_426);
if (!__r_427){$goto=149;/*land0_PPCPXR*/ continue $$;}
var __r_428 = 0;
__r_428=$unwrap(0)-$unwrap(1);
var __r_429 = 0;
__r_429=Number(_$o_cur[0]==__r_428);
if (!__r_429){$goto=149;/*land0_PPCPXR*/ continue $$;}
__r_425 = $value(1);
$goto=150;/*land1_JVDZYL*/ continue $$;
case 149:/*land0_PPCPXR*/
__r_425 = $value(0);
case 150:/*land1_JVDZYL*/
case 151:/*condstart_PRGVMS*/
if (!__r_425){$goto=171;/*endif_JYTDBE*/ continue $$;}
var __356_$o_i = 0;
__356_$o_i = $value(0);
case 152:/*loopstart_YYJKAA*/
var __r_430 = 0;
$args.push(__0_$o_sites);
__r_430=$assign(__r_430,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_431 = 0;
__r_431=Number(__356_$o_i<__r_430);
if (!__r_431){$goto=165;/*loopend_LLNUCM*/ continue $$;}
var __r_432 = 0;
__r_432 = $value(__0_$o_weights[__356_$o_i]);
var __r_433 = 0;
__r_433=Number(__r_432<=1);
case 153:/*condstart_IIYEKD*/
if (!__r_433){$goto=154;/*endif_MWIDKV*/ continue $$;}
$goto=164;/*cont_QPGHAG*/ continue $$;
case 154:/*endif_MWIDKV*/
var __r_434 = 0;
var __r_435 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_435 = $value(__180_$o_assign[__356_$o_i]);
$args.push(__r_435);
__r_434=$assign(__r_434,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
case 155:/*condstart_CKZPQE*/
if (!__r_434){$goto=156;/*endif_AUBXNK*/ continue $$;}
$goto=164;/*cont_QPGHAG*/ continue $$;
case 156:/*endif_AUBXNK*/
var __362_$o_j = 0;
__362_$o_j = $value(0);
case 157:/*loopstart_NBNOAJ*/
var __r_436 = 0;
var __r_437 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_437 = $value(__0_$o_celli[__356_$o_i]);
$args.push(__r_437);
__r_436=$assign(__r_436,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_438 = 0;
__r_438=Number(__362_$o_j<__r_436);
if (!__r_438){$goto=163;/*loopend_DKSGYB*/ continue $$;}
var __r_439 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_439 = $value(__0_$o_celli[__356_$o_i]);
var __r_440 = 0;
__r_440 = $value(__r_439[__362_$o_j]);
var __r_441 = 0;
__r_441=Number(__r_440<0);
case 158:/*condstart_IOZWJP*/
if (!__r_441){$goto=159;/*endif_ZJFGFU*/ continue $$;}
$goto=162;/*cont_LVNLYL*/ continue $$;
case 159:/*endif_ZJFGFU*/
var __r_442 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_442 = $value(__0_$o_celli[__356_$o_i]);
var __r_443 = 0;
__r_443 = $value(__r_442[__362_$o_j]);
var __r_444 = 0;
__r_444 = $value(__0_$o_visited[__r_443]);
case 160:/*condstart_WIIDUV*/
if (!__r_444){$goto=161;/*endif_DZQJCA*/ continue $$;}
$goto=162;/*cont_LVNLYL*/ continue $$;
case 161:/*endif_DZQJCA*/
var __r_445 = 0;
var __r_446 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_446 = $value(__180_$o_assign[__356_$o_i]);
$args.push(__r_446);
var __r_447 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_447 = $value(__0_$o_celli[__356_$o_i]);
var __r_448 = 0;
__r_448 = $value(__r_447[__362_$o_j]);
$args.push($typed_value(__r_448,"i32"));
__r_445=$assign(__r_445,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
var __r_449 = null;
var __r_450 = 0;
__r_450=$unwrap(0)-$unwrap(2);
__r_450=$unwrap(__r_450)-$unwrap(__356_$o_i);
$args.push($typed_value(__r_450,"i32"));
var __r_451 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_451 = $value(__0_$o_celli[__356_$o_i]);
var __r_452 = 0;
__r_452 = $value(__r_451[__362_$o_j]);
$args.push($typed_value(__r_452,"i32"));
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
$args.push(__0_$o_celli)
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
__r_449=$assign(__r_449,await __func_ovld_walk_all_CTBOGK_func_$L_tup_$L_i32_$9_i32_$7__$9_void_$7_());
__0_$o_paths = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
__0_$o_celli = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
$caps.push(__0_$o_sites);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_paths);
return;
case 162:/*cont_LVNLYL*/
var __r_453 = 0;
__r_453=$unwrap(__362_$o_j)+$unwrap(1);
__362_$o_j = $value(__r_453);
$goto=157;/*loopstart_NBNOAJ*/ continue $$;
case 163:/*loopend_DKSGYB*/
case 164:/*cont_QPGHAG*/
var __r_454 = 0;
__r_454=$unwrap(__356_$o_i)+$unwrap(1);
__356_$o_i = $value(__r_454);
$goto=152;/*loopstart_YYJKAA*/ continue $$;
case 165:/*loopend_LLNUCM*/
var __367_$o_i = 0;
__367_$o_i = $value(0);
case 166:/*loopstart_IGISJE*/
var __r_455 = 0;
$args.push(__0_$o_visited);
__r_455=$assign(__r_455,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_456 = 0;
__r_456=Number(__367_$o_i<__r_455);
if (!__r_456){$goto=170;/*loopend_JTBOEH*/ continue $$;}
var __r_457 = 0;
var __r_458 = 0;
__r_458 = $value(__0_$o_visited[__367_$o_i]);
__r_457 = !__r_458;
case 167:/*condstart_KCZCUC*/
if (!__r_457){$goto=168;/*endif_SCKUAP*/ continue $$;}
var __r_459 = null;
var __r_460 = 0;
__r_460=$unwrap(0)-$unwrap(1);
$args.push($typed_value(__r_460,"i32"));
$args.push($typed_value(__367_$o_i,"i32"));
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
$args.push(__0_$o_celli)
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
__r_459=$assign(__r_459,await __func_ovld_walk_all_CTBOGK_func_$L_tup_$L_i32_$9_i32_$7__$9_void_$7_());
__0_$o_paths = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
__0_$o_celli = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
$caps.push(__0_$o_sites);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_paths);
return;
case 168:/*endif_SCKUAP*/
case 169:/*cont_FEMFUE*/
var __r_461 = 0;
__r_461=$unwrap(__367_$o_i)+$unwrap(1);
__367_$o_i = $value(__r_461);
$goto=166;/*loopstart_IGISJE*/ continue $$;
case 170:/*loopend_JTBOEH*/
$caps.push(__0_$o_sites);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_paths);
return;
case 171:/*endif_JYTDBE*/
var __353_$o_path = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_462 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__353_$o_path = $value(__r_462);
var __r_463 = 0;
__r_463=$unwrap(0)-$unwrap(1);
var __r_464 = 0;
__r_464=Number(_$o_prv[0]!=__r_463);
case 172:/*condstart_UYTUUA*/
if (!__r_464){$goto=173;/*endif_JPWKRF*/ continue $$;}
var __r_465 = 0;
$args.push(__353_$o_path);
$args.push($typed_value(_$o_prv,"i32"));
__r_465=$assign(__r_465,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 173:/*endif_JPWKRF*/
var __r_466 = null;
$args.push(__353_$o_path);
$args.push($typed_value(_$o_cur,"i32"));
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
__r_466=$assign(__r_466,await __func_ovld_walk_TIHIRF_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_void_$7_());
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
var __r_467 = 0;
$args.push(__353_$o_path);
__r_467=$assign(__r_467,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_468 = 0;
__r_468=Number(__r_467>1);
case 174:/*condstart_OFJYQR*/
if (!__r_468){$goto=175;/*endif_AGJDTQ*/ continue $$;}
var __r_469 = 0;
$args.push(__0_$o_paths);
$args.push(__353_$o_path);
__r_469=$assign(__r_469,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_list_$L_i32_$7__$7__$9_i32_$7_());
case 175:/*endif_AGJDTQ*/
var __407_$o_k = 0;
__407_$o_k = $value(0);
case 176:/*loopstart_GPGLFE*/
var __r_470 = 0;
$args.push(__0_$o_paths);
__r_470=$assign(__r_470,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_471 = 0;
__r_471=Number(__407_$o_k<__r_470);
if (!__r_471){$goto=186;/*loopend_SREUXN*/ continue $$;}
var __410_$o_i = 0;
__410_$o_i = $value(1);
case 177:/*loopstart_QVBOMR*/
var __r_472 = 0;
var __r_473 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_473 = $value(__0_$o_paths[__407_$o_k]);
$args.push(__r_473);
__r_472=$assign(__r_472,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_472=$unwrap(__r_472)-$unwrap(1);
var __r_474 = 0;
__r_474=Number(__410_$o_i<__r_472);
if (!__r_474){$goto=184;/*loopend_ZDOVQY*/ continue $$;}
var __413_$o_j = 0;
__413_$o_j = $value(0);
case 178:/*loopstart_PLRLDQ*/
var __r_475 = 0;
var __r_476 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_476 = $value(__0_$o_paths[__407_$o_k]);
var __r_477 = 0;
__r_477 = $value(__r_476[__410_$o_i]);
var __r_478 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_478 = $value(__0_$o_corner_ns[__r_477]);
$args.push(__r_478);
__r_475=$assign(__r_475,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_479 = 0;
__r_479=Number(__413_$o_j<__r_475);
if (!__r_479){$goto=182;/*loopend_NTZXMY*/ continue $$;}
var __r_480 = 0;
var __r_481 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_481 = $value(__0_$o_paths[__407_$o_k]);
var __r_482 = 0;
__r_482 = $value(__r_481[__410_$o_i]);
var __r_483 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_483 = $value(__0_$o_corner_ns[__r_482]);
var __r_484 = 0;
__r_484 = $value(__r_483[__413_$o_j]);
var __r_485 = 0;
__r_485 = $value(__0_$o_visited[__r_484]);
__r_480 = !__r_485;
case 179:/*condstart_YWOZSQ*/
if (!__r_480){$goto=180;/*endif_YEBETG*/ continue $$;}
var __r_486 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_486 = $value(__0_$o_paths[__407_$o_k]);
var __r_487 = 0;
__r_487 = $value(__r_486[__410_$o_i]);
var __r_488 = 0;
__r_488 = $value(__0_$o_visited[__r_487]);
var __r_489 = 0;
__r_489=$unwrap(__r_488)+$unwrap(1);
var __r_490 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_490 = $value(__0_$o_paths[__407_$o_k]);
var __r_491 = 0;
__r_491 = $value(__r_490[__410_$o_i]);
__0_$o_visited[__r_491] = $value(__r_489);
var __r_492 = null;
var __r_493 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_493 = $value(__0_$o_paths[__407_$o_k]);
var __r_494 = 0;
__r_494 = $value(__r_493[__410_$o_i]);
$args.push($typed_value(__r_494,"i32"));
var __r_495 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_495 = $value(__0_$o_paths[__407_$o_k]);
var __r_496 = 0;
__r_496 = $value(__r_495[__410_$o_i]);
var __r_497 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_497 = $value(__0_$o_corner_ns[__r_496]);
var __r_498 = 0;
__r_498 = $value(__r_497[__413_$o_j]);
$args.push($typed_value(__r_498,"i32"));
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
$args.push(__0_$o_celli)
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
__r_492=$assign(__r_492,await __func_ovld_walk_all_CTBOGK_func_$L_tup_$L_i32_$9_i32_$7__$9_void_$7_());
__0_$o_paths = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
__0_$o_celli = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
$caps.push(__0_$o_sites);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_paths);
return;
case 180:/*endif_YEBETG*/
case 181:/*cont_NJPPYZ*/
var __r_499 = 0;
__r_499=$unwrap(__413_$o_j)+$unwrap(1);
__413_$o_j = $value(__r_499);
$goto=178;/*loopstart_PLRLDQ*/ continue $$;
case 182:/*loopend_NTZXMY*/
case 183:/*cont_ZPXWIR*/
var __r_500 = 0;
__r_500=$unwrap(__410_$o_i)+$unwrap(1);
__410_$o_i = $value(__r_500);
$goto=177;/*loopstart_QVBOMR*/ continue $$;
case 184:/*loopend_ZDOVQY*/
case 185:/*cont_VRRWSH*/
var __r_501 = 0;
__r_501=$unwrap(__407_$o_k)+$unwrap(1);
__407_$o_k = $value(__r_501);
$goto=176;/*loopstart_GPGLFE*/ continue $$;
case 186:/*loopend_SREUXN*/
var __r_502 = null;
var __r_503 = 0;
__r_503=$unwrap(0)-$unwrap(1);
$args.push($typed_value(__r_503,"i32"));
var __r_504 = 0;
__r_504=$unwrap(0)-$unwrap(1);
$args.push($typed_value(__r_504,"i32"));
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
$args.push(__0_$o_celli)
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
__r_502=$assign(__r_502,await __func_ovld_walk_all_CTBOGK_func_$L_tup_$L_i32_$9_i32_$7__$9_void_$7_());
__0_$o_paths = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
__0_$o_celli = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
$caps.push(__0_$o_sites);
$caps.push(__0_$o_weights);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_paths);
return;
default:$goto=null;break;}}}
async function __func_ovld_relax_LEWONK_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __0_$o_corner_ss = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_weights = $args.pop();
var _$o_clipshape = $args.pop();
var __322_$o_cs = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_505 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
$args.push(__0_$o_corner_xs);
__r_505=$assign(__r_505,await __func_ovld_voronoi_BSTGDO_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7_());
__322_$o_cs = $value(__r_505);
var __323_$o_i = 0;
__323_$o_i = $value(0);
case 188:/*loopstart_YABYRM*/
var __r_506 = 0;
$args.push(__322_$o_cs);
__r_506=$assign(__r_506,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_507 = 0;
__r_507=Number(__323_$o_i<__r_506);
if (!__r_507){$goto=200;/*loopend_VMKQZI*/ continue $$;}
var __325_$o_bad = 0;
__325_$o_bad = $value(0);
var __326_$o_j = 0;
__326_$o_j = $value(0);
case 189:/*loopstart_YMQIQL*/
var __r_508 = 0;
var __r_509 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_509 = $value(__322_$o_cs[__323_$o_i]);
$args.push(__r_509);
__r_508=$assign(__r_508,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_510 = 0;
__r_510=Number(__326_$o_j<__r_508);
if (!__r_510){$goto=193;/*loopend_EQHNXW*/ continue $$;}
var __r_511 = 0;
var __r_512 = 0;
var __r_513 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_513 = $value(__322_$o_cs[__323_$o_i]);
var __r_514 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_514 = $value(__r_513[__326_$o_j]);
$args.push($typed_value(__r_514,{"con":"vec","elt":["f32",2]}));
$args.push(_$o_clipshape);
__r_512=$assign(__r_512,await __func_ovld_pt_in_clipshape_ARPYQK_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
__r_511 = !__r_512;
case 190:/*condstart_ZKYMYL*/
if (!__r_511){$goto=191;/*endif_RZWBRV*/ continue $$;}
__325_$o_bad = $value(1);
$goto=193;/*loopend_EQHNXW*/ continue $$;
case 191:/*endif_RZWBRV*/
case 192:/*cont_IPETOX*/
var __r_515 = 0;
__r_515=$unwrap(__326_$o_j)+$unwrap(1);
__326_$o_j = $value(__r_515);
$goto=189;/*loopstart_YMQIQL*/ continue $$;
case 193:/*loopend_EQHNXW*/
case 194:/*condstart_JQXVRY*/
if (!__325_$o_bad){$goto=195;/*endif_SGBWSL*/ continue $$;}
$goto=199;/*cont_DIYEBG*/ continue $$;
case 195:/*endif_SGBWSL*/
var __325_$o_c = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_516 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_517 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_517 = $value(__322_$o_cs[__323_$o_i]);
$args.push(__r_517);
__r_516=$assign(__r_516,await __func_ovld_centroid_IEWPPR_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__325_$o_c = $value(__r_516);
var __325_$o_f = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_518 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_518 = $value(__0_$o_corner_xs[__323_$o_i]);
var __r_519 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_519[0]=__325_$o_c[0]-__r_518[0];
__r_519[1]=__325_$o_c[1]-__r_518[1];
var __r_520 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_520[0] = 0.5
__r_520[1] = 0.5
__r_519[0]=__r_519[0]*__r_520[0];
__r_519[1]=__r_519[1]*__r_520[1];
__325_$o_f = $value(__r_519);
var __336_$o_j = 0;
__336_$o_j = $value(0);
case 196:/*loopstart_UITWTE*/
var __r_521 = 0;
var __r_522 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_522 = $value(__0_$o_corner_ss[__323_$o_i]);
$args.push(__r_522);
__r_521=$assign(__r_521,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_523 = 0;
__r_523=Number(__336_$o_j<__r_521);
if (!__r_523){$goto=198;/*loopend_DYFNFA*/ continue $$;}
var __338_$o_si = 0;
var __r_524 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_524 = $value(__0_$o_corner_ss[__323_$o_i]);
var __r_525 = 0;
__r_525 = $value(__r_524[__336_$o_j]);
__338_$o_si = $value(__r_525);
var __338_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_526 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_526 = $value(__0_$o_corner_xs[__323_$o_i]);
var __r_527 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_527 = $value(__0_$o_sites[__338_$o_si]);
__r_526[0]=__r_526[0]-__r_527[0];
__r_526[1]=__r_526[1]-__r_527[1];
var __r_528 = 0;
__r_528 = $value(__0_$o_weights[__338_$o_si]);
__r_528=$unwrap(__r_528)-$unwrap(1);
var __r_529 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_529[0] = __r_528
__r_529[1] = __r_528
__r_526[0]=__r_526[0]*__r_529[0];
__r_526[1]=__r_526[1]*__r_529[1];
var __r_530 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_530[0] = $REPL
__r_530[1] = $REPL
__r_526[0]=__r_526[0]*__r_530[0];
__r_526[1]=__r_526[1]*__r_530[1];
__338_$o_d = $value(__r_526);
var __r_531 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_531[0]=__325_$o_f[0]+__338_$o_d[0];
__r_531[1]=__325_$o_f[1]+__338_$o_d[1];
__325_$o_f = $value(__r_531);
case 197:/*cont_QASOXO*/
var __r_532 = 0;
__r_532=$unwrap(__336_$o_j)+$unwrap(1);
__336_$o_j = $value(__r_532);
$goto=196;/*loopstart_UITWTE*/ continue $$;
case 198:/*loopend_DYFNFA*/
var __r_533 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_533 = $value(__0_$o_corner_xs[__323_$o_i]);
var __r_534 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_534[0]=__r_533[0]+__325_$o_f[0];
__r_534[1]=__r_533[1]+__325_$o_f[1];
__0_$o_corner_xs[__323_$o_i] = $value(__r_534);
case 199:/*cont_DIYEBG*/
var __r_535 = 0;
__r_535=$unwrap(__323_$o_i)+$unwrap(1);
__323_$o_i = $value(__r_535);
$goto=188;/*loopstart_YABYRM*/ continue $$;
case 200:/*loopend_VMKQZI*/
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_weights);
return;
default:$goto=null;break;}}}
async function __func_ovld_plan_bud_CBSMLU_func_$L_tup_$L_i32_$9_i32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_visited = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_corner_xs = $args.pop();
var __0_$o_corner_ss = $args.pop();
var __180_$o_assign = $args.pop();
var __0_$o_cells = $args.pop();
var _$o_idx1 = $args.pop();
var _$o_idx0 = $args.pop();
var __r_536 = 0;
__r_536=$unwrap(0)-$unwrap(1);
var __r_537 = 0;
__r_537=Number(_$o_idx1[0]<__r_536);
case 202:/*condstart_HMHSEN*/
if (!__r_537){$goto=203;/*endif_TJOMCV*/ continue $$;}
var __r_538 = 0;
__r_538=$unwrap(0)-$unwrap(1);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_cells);
return __r_538;
return;
case 203:/*endif_TJOMCV*/
var __r_539 = 0;
__r_539 = $value(__0_$o_visited[_$o_idx1]);
var __r_540 = 0;
__r_540=Number(__r_539>1);
case 204:/*condstart_UHYOFS*/
if (!__r_540){$goto=205;/*endif_EUVWHO*/ continue $$;}
var __r_541 = 0;
__r_541=$unwrap(0)-$unwrap(1);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_cells);
return __r_541;
return;
case 205:/*endif_EUVWHO*/
var __438_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_542 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_542[0] = $value(0);
__r_542[1] = $value(0);
__438_$o_p0 = $value(__r_542);
var __r_543 = 0;
__r_543=$unwrap(0)-$unwrap(1);
var __r_544 = 0;
__r_544=Number(_$o_idx0[0]<__r_543);
case 206:/*condstart_TMCDJK*/
if (!__r_544){$goto=207;/*endif_MHBGYC*/ continue $$;}
var __r_545 = 0;
__r_545=$unwrap(0)-$unwrap(_$o_idx0[0]);
__r_545=$unwrap(__r_545)-$unwrap(2);
var __r_546 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_546 = $value(__0_$o_sites[__r_545]);
__438_$o_p0 = $value(__r_546);
$goto=208;/*condend_JRADXL*/ continue $$;
case 207:/*endif_MHBGYC*/
var __r_547 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_547 = $value(__0_$o_corner_xs[_$o_idx0]);
__438_$o_p0 = $value(__r_547);
case 208:/*condend_JRADXL*/
var __438_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_548 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_548 = $value(__0_$o_corner_xs[_$o_idx1]);
__438_$o_p1 = $value(__r_548);
var __438_$o_ma = 0;
__438_$o_ma = $value(0);
var __438_$o_mi = 0;
var __r_549 = 0;
__r_549=$unwrap(0)-$unwrap(1);
__438_$o_mi = $value(__r_549);
var __446_$o_j = 0;
__446_$o_j = $value(0);
case 209:/*loopstart_CMTONR*/
var __r_550 = 0;
var __r_551 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_551 = $value(__0_$o_corner_ss[_$o_idx1]);
$args.push(__r_551);
__r_550=$assign(__r_550,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_552 = 0;
__r_552=Number(__446_$o_j<__r_550);
if (!__r_552){$goto=217;/*loopend_JLHBYU*/ continue $$;}
var __448_$o_si = 0;
var __r_553 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_553 = $value(__0_$o_corner_ss[_$o_idx1]);
var __r_554 = 0;
__r_554 = $value(__r_553[__446_$o_j]);
__448_$o_si = $value(__r_554);
var __r_555 = 0;
var __r_556 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_556 = $value(__180_$o_assign[__448_$o_si]);
$args.push(__r_556);
__r_555=$assign(__r_555,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
case 210:/*condstart_OORTAQ*/
if (!__r_555){$goto=211;/*endif_RRNDCU*/ continue $$;}
$goto=216;/*cont_DBZQIQ*/ continue $$;
case 211:/*endif_RRNDCU*/
var __448_$o_p2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_557 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_557 = $value(__0_$o_sites[__448_$o_si]);
__448_$o_p2 = $value(__r_557);
var __448_$o_ang = 0;
var __r_558 = 0;
var __r_559 = 0;
$args.push($typed_value(__438_$o_p0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__438_$o_p1,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__448_$o_p2,{"con":"vec","elt":["f32",2]}));
__r_559=$assign(__r_559,await __func_ovld_calc_turn_DQRICR_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
$args.push($typed_value(__r_559,"f32"));
__r_558=$assign(__r_558,await __func_ovld_abs_PMVDIS_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__448_$o_ang = $value(__r_558);
var __448_$o_area = 0;
var __r_560 = 0;
var __r_561 = 0;
var __r_562 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_562 = $value(__0_$o_cells[__448_$o_si]);
$args.push(__r_562);
__r_561=$assign(__r_561,await __func_ovld_poly_area_HSEURZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_f32_$7_());
$args.push($typed_value(__r_561,"f32"));
__r_560=$assign(__r_560,await __func_ovld_abs_PMVDIS_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__448_$o_area = $value(__r_560);
var __r_563 = 0;
var __r_564 = 0;
__r_564=Number(__448_$o_area>__438_$o_ma);
if (!__r_564){$goto=212;/*land0_TVFJAQ*/ continue $$;}
var __r_565 = 0;
__r_565=$unwrap(math_$o_PI)/$unwrap(2);
var __r_566 = 0;
__r_566=Number(__448_$o_ang<__r_565);
if (!__r_566){$goto=212;/*land0_TVFJAQ*/ continue $$;}
__r_563 = $value(1);
$goto=213;/*land1_GYCAXA*/ continue $$;
case 212:/*land0_TVFJAQ*/
__r_563 = $value(0);
case 213:/*land1_GYCAXA*/
case 214:/*condstart_EAWLOZ*/
if (!__r_563){$goto=215;/*endif_ROJWBT*/ continue $$;}
__438_$o_mi = $value(__448_$o_si);
__438_$o_ma = $value(__448_$o_area);
case 215:/*endif_ROJWBT*/
case 216:/*cont_DBZQIQ*/
var __r_567 = 0;
__r_567=$unwrap(__446_$o_j)+$unwrap(1);
__446_$o_j = $value(__r_567);
$goto=209;/*loopstart_CMTONR*/ continue $$;
case 217:/*loopend_JLHBYU*/
var __r_568 = 0;
__r_568=Number(__438_$o_mi<0);
case 218:/*condstart_HAUFXU*/
if (!__r_568){$goto=219;/*endif_GJCSPQ*/ continue $$;}
$caps.push(__0_$o_visited);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_cells);
return __438_$o_mi;
return;
case 219:/*endif_GJCSPQ*/
var __r_569 = 0;
var __r_570 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_570 = $value(__180_$o_assign[__438_$o_mi]);
$args.push(__r_570);
$args.push($typed_value(_$o_idx1,"i32"));
__r_569=$assign(__r_569,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
$caps.push(__0_$o_visited);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_cells);
return __438_$o_mi;
return;
$caps.push(__0_$o_visited);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ss);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_cells);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_petal_NZZIRM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_e = $args.pop();
var _$o_q1 = $args.pop();
var _$o_q0 = $args.pop();
var __483_$o_pms = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_571 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__483_$o_pms = $value(__r_571);
var __483_$o_cl = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_572 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_572[0] = $value(_$o_q0);
var __r_573 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_573[0] = 0.7
__r_573[1] = 0.7
var __r_574 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_574[0]=_$o_q0[0]*__r_573[0];
__r_574[1]=_$o_q0[1]*__r_573[1];
var __r_575 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_575[0] = 0.3
__r_575[1] = 0.3
var __r_576 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_576[0]=_$o_q1[0]*__r_575[0];
__r_576[1]=_$o_q1[1]*__r_575[1];
__r_574[0]=__r_574[0]+__r_576[0];
__r_574[1]=__r_574[1]+__r_576[1];
var __r_577 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_577[0] = 1.2
__r_577[1] = 1.2
var __r_578 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_578[0]=_$o_e[0]*__r_577[0];
__r_578[1]=_$o_e[1]*__r_577[1];
__r_574[0]=__r_574[0]+__r_578[0];
__r_574[1]=__r_574[1]+__r_578[1];
__r_572[1] = $value(__r_574);
var __r_579 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_579[0]=_$o_q1[0]+_$o_e[0];
__r_579[1]=_$o_q1[1]+_$o_e[1];
__r_572[2] = $value(__r_579);
var __r_580 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_580[0] = 0.1
__r_580[1] = 0.1
var __r_581 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_581[0]=_$o_q0[0]*__r_580[0];
__r_581[1]=_$o_q0[1]*__r_580[1];
var __r_582 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_582[0] = 0.9
__r_582[1] = 0.9
var __r_583 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_583[0]=_$o_q1[0]*__r_582[0];
__r_583[1]=_$o_q1[1]*__r_582[1];
__r_581[0]=__r_581[0]+__r_583[0];
__r_581[1]=__r_581[1]+__r_583[1];
var __r_584 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_584[0] = 0.3
__r_584[1] = 0.3
var __r_585 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_585[0]=_$o_e[0]*__r_584[0];
__r_585[1]=_$o_e[1]*__r_584[1];
__r_581[0]=__r_581[0]+__r_585[0];
__r_581[1]=__r_581[1]+__r_585[1];
__r_572[3] = $value(__r_581);
__483_$o_cl = $value(__r_572);
var __483_$o_cm = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_586 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
var __r_587 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_587[0] = 0.1
__r_587[1] = 0.1
var __r_588 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_588[0]=_$o_q0[0]*__r_587[0];
__r_588[1]=_$o_q0[1]*__r_587[1];
var __r_589 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_589[0] = 0.9
__r_589[1] = 0.9
var __r_590 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_590[0]=_$o_q1[0]*__r_589[0];
__r_590[1]=_$o_q1[1]*__r_589[1];
__r_588[0]=__r_588[0]+__r_590[0];
__r_588[1]=__r_588[1]+__r_590[1];
var __r_591 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_591[0] = 0.3
__r_591[1] = 0.3
var __r_592 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_592[0]=_$o_e[0]*__r_591[0];
__r_592[1]=_$o_e[1]*__r_591[1];
__r_588[0]=__r_588[0]+__r_592[0];
__r_588[1]=__r_588[1]+__r_592[1];
__r_586[0] = $value(__r_588);
var __r_593 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_593[0] = 0.1
__r_593[1] = 0.1
var __r_594 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_594[0]=_$o_e[0]*__r_593[0];
__r_594[1]=_$o_e[1]*__r_593[1];
var __r_595 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_595[0]=_$o_q1[0]+__r_594[0];
__r_595[1]=_$o_q1[1]+__r_594[1];
__r_586[1] = $value(__r_595);
var __r_596 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_596[0] = 0.1
__r_596[1] = 0.1
var __r_597 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_597[0]=_$o_e[0]*__r_596[0];
__r_597[1]=_$o_e[1]*__r_596[1];
var __r_598 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_598[0]=_$o_q1[0]-__r_597[0];
__r_598[1]=_$o_q1[1]-__r_597[1];
__r_586[2] = $value(__r_598);
var __r_599 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_599[0] = 0.1
__r_599[1] = 0.1
var __r_600 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_600[0]=_$o_q0[0]*__r_599[0];
__r_600[1]=_$o_q0[1]*__r_599[1];
var __r_601 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_601[0] = 0.9
__r_601[1] = 0.9
var __r_602 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_602[0]=_$o_q1[0]*__r_601[0];
__r_602[1]=_$o_q1[1]*__r_601[1];
__r_600[0]=__r_600[0]+__r_602[0];
__r_600[1]=__r_600[1]+__r_602[1];
var __r_603 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_603[0] = 0.3
__r_603[1] = 0.3
var __r_604 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_604[0]=_$o_e[0]*__r_603[0];
__r_604[1]=_$o_e[1]*__r_603[1];
__r_600[0]=__r_600[0]-__r_604[0];
__r_600[1]=__r_600[1]-__r_604[1];
__r_586[3] = $value(__r_600);
__483_$o_cm = $value(__r_586);
var __483_$o_cr = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_605 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
var __r_606 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_606[0] = 0.1
__r_606[1] = 0.1
var __r_607 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_607[0]=_$o_q0[0]*__r_606[0];
__r_607[1]=_$o_q0[1]*__r_606[1];
var __r_608 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_608[0] = 0.9
__r_608[1] = 0.9
var __r_609 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_609[0]=_$o_q1[0]*__r_608[0];
__r_609[1]=_$o_q1[1]*__r_608[1];
__r_607[0]=__r_607[0]+__r_609[0];
__r_607[1]=__r_607[1]+__r_609[1];
var __r_610 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_610[0] = 0.3
__r_610[1] = 0.3
var __r_611 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_611[0]=_$o_e[0]*__r_610[0];
__r_611[1]=_$o_e[1]*__r_610[1];
__r_607[0]=__r_607[0]-__r_611[0];
__r_607[1]=__r_607[1]-__r_611[1];
__r_605[0] = $value(__r_607);
var __r_612 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_612[0]=_$o_q1[0]-_$o_e[0];
__r_612[1]=_$o_q1[1]-_$o_e[1];
__r_605[1] = $value(__r_612);
var __r_613 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_613[0] = 0.7
__r_613[1] = 0.7
var __r_614 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_614[0]=_$o_q0[0]*__r_613[0];
__r_614[1]=_$o_q0[1]*__r_613[1];
var __r_615 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_615[0] = 0.3
__r_615[1] = 0.3
var __r_616 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_616[0]=_$o_q1[0]*__r_615[0];
__r_616[1]=_$o_q1[1]*__r_615[1];
__r_614[0]=__r_614[0]+__r_616[0];
__r_614[1]=__r_614[1]+__r_616[1];
var __r_617 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_617[0] = 1.2
__r_617[1] = 1.2
var __r_618 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_618[0]=_$o_e[0]*__r_617[0];
__r_618[1]=_$o_e[1]*__r_617[1];
__r_614[0]=__r_614[0]-__r_618[0];
__r_614[1]=__r_614[1]-__r_618[1];
__r_605[2] = $value(__r_614);
__r_605[3] = $value(_$o_q0);
__483_$o_cr = $value(__r_605);
var __483_$o_pts = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_619 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__483_$o_pts = $value(__r_619);
var __484_$o_t = 0;
__484_$o_t = $value(0);
case 221:/*loopstart_RABNMP*/
var __r_620 = 0;
__r_620=Number(__484_$o_t<1);
if (!__r_620){$goto=223;/*loopend_ORRSNQ*/ continue $$;}
var __485_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_621 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__483_$o_cl);
$args.push(__483_$o_pms);
$args.push($typed_value(__484_$o_t,"f32"));
var __r_622 = 0;
__r_622=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_622,"i32"));
__r_621=$assign(__r_621,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__485_$o_v = $value(__r_621);
var __r_623 = 0;
$args.push(__483_$o_pts);
$args.push($typed_value(__485_$o_v,{"con":"vec","elt":["f32",2]}));
__r_623=$assign(__r_623,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 222:/*cont_YMDQLK*/
var __r_624 = 0;
__r_624=$unwrap(__484_$o_t)+$unwrap(0.05);
__484_$o_t = $value(__r_624);
$goto=221;/*loopstart_RABNMP*/ continue $$;
case 223:/*loopend_ORRSNQ*/
var __487_$o_t = 0;
__487_$o_t = $value(0);
case 224:/*loopstart_IHMJKS*/
var __r_625 = 0;
__r_625=Number(__487_$o_t<1);
if (!__r_625){$goto=226;/*loopend_AVXTZR*/ continue $$;}
var __488_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_626 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__483_$o_cm);
$args.push(__483_$o_pms);
$args.push($typed_value(__487_$o_t,"f32"));
var __r_627 = 0;
__r_627=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_627,"i32"));
__r_626=$assign(__r_626,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__488_$o_v = $value(__r_626);
var __r_628 = 0;
$args.push(__483_$o_pts);
$args.push($typed_value(__488_$o_v,{"con":"vec","elt":["f32",2]}));
__r_628=$assign(__r_628,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 225:/*cont_KBNTUC*/
var __r_629 = 0;
__r_629=$unwrap(__487_$o_t)+$unwrap(0.05);
__487_$o_t = $value(__r_629);
$goto=224;/*loopstart_IHMJKS*/ continue $$;
case 226:/*loopend_AVXTZR*/
var __490_$o_t = 0;
__490_$o_t = $value(0);
case 227:/*loopstart_UCZCUA*/
var __r_630 = 0;
__r_630=Number(__490_$o_t<1);
if (!__r_630){$goto=229;/*loopend_RKOMEW*/ continue $$;}
var __491_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_631 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__483_$o_cr);
$args.push(__483_$o_pms);
$args.push($typed_value(__490_$o_t,"f32"));
var __r_632 = 0;
__r_632=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_632,"i32"));
__r_631=$assign(__r_631,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__491_$o_v = $value(__r_631);
var __r_633 = 0;
$args.push(__483_$o_pts);
$args.push($typed_value(__491_$o_v,{"con":"vec","elt":["f32",2]}));
__r_633=$assign(__r_633,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 228:/*cont_RCOUHK*/
var __r_634 = 0;
__r_634=$unwrap(__490_$o_t)+$unwrap(0.05);
__490_$o_t = $value(__r_634);
$goto=227;/*loopstart_UCZCUA*/ continue $$;
case 229:/*loopend_RKOMEW*/
return __483_$o_pts;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_make_leaf01_ATNARP_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __180_$o_assign = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_cells = $args.pop();
var _$o_i = $args.pop();
var _$o_veins = $args.pop();
var _$o_leaves = $args.pop();
var __603_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_635 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_635 = $value(__180_$o_assign[_$o_i]);
var __r_636 = 0;
__r_636 = $value(__r_635[0]);
var __r_637 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_637 = $value(__0_$o_corner_xs[__r_636]);
__603_$o_p0 = $value(__r_637);
var __603_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_638 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_638 = $value(__180_$o_assign[_$o_i]);
var __r_639 = 0;
__r_639 = $value(__r_638[1]);
var __r_640 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_640 = $value(__0_$o_corner_xs[__r_639]);
__603_$o_p1 = $value(__r_640);
var __603_$o_p2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_641 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_641 = $value(__0_$o_sites[_$o_i]);
__603_$o_p2 = $value(__r_641);
var __603_$o_p3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_642 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_642 = $value(__0_$o_cells[_$o_i]);
var __r_643 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_643 = $value(__180_$o_assign[_$o_i]);
var __r_644 = 0;
__r_644 = $value(__r_643[2]);
var __r_645 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_645 = $value(__r_642[__r_644]);
__603_$o_p3 = $value(__r_645);
var __603_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_646 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_646[0]=__603_$o_p1[0]-__603_$o_p0[0];
__r_646[1]=__603_$o_p1[1]-__603_$o_p0[1];
var __r_647 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_647[0] = 0.5
__r_647[1] = 0.5
__r_646[0]=__r_646[0]*__r_647[0];
__r_646[1]=__r_646[1]*__r_647[1];
__603_$o_d = $value(__r_646);
var __603_$o_q0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_648 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_648[0]=__603_$o_p0[0]+__603_$o_p1[0];
__r_648[1]=__603_$o_p0[1]+__603_$o_p1[1];
var __r_649 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_649[0] = 0.5
__r_649[1] = 0.5
__r_648[0]=__r_648[0]*__r_649[0];
__r_648[1]=__r_648[1]*__r_649[1];
__603_$o_q0 = $value(__r_648);
var __603_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_650 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_650[0]=__603_$o_q0[0]+__603_$o_p2[0];
__r_650[1]=__603_$o_q0[1]+__603_$o_p2[1];
var __r_651 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_651[0] = 0.5
__r_651[1] = 0.5
__r_650[0]=__r_650[0]*__r_651[0];
__r_650[1]=__r_650[1]*__r_651[1];
__603_$o_q1 = $value(__r_650);
var __603_$o_q2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__603_$o_q2 = $value(__603_$o_p2);
var __603_$o_q3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_652 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_652[0]=__603_$o_p2[0]+__603_$o_p3[0];
__r_652[1]=__603_$o_p2[1]+__603_$o_p3[1];
var __r_653 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_653[0] = 0.5
__r_653[1] = 0.5
__r_652[0]=__r_652[0]*__r_653[0];
__r_652[1]=__r_652[1]*__r_653[1];
__603_$o_q3 = $value(__r_652);
var __603_$o_l = 0;
var __r_654 = 0;
var __r_655 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_655[0]=__603_$o_p3[0]-__603_$o_q0[0];
__r_655[1]=__603_$o_p3[1]-__603_$o_q0[1];
$args.push($typed_value(__r_655,{"con":"vec","elt":["f32",2]}));
__r_654=$assign(__r_654,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__603_$o_l = $value(__r_654);
var __r_656 = 0;
$args.push($typed_value(__603_$o_d,{"con":"vec","elt":["f32",2]}));
__r_656=$assign(__r_656,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
var __r_657 = 0;
__r_657=$unwrap(__603_$o_l)*$unwrap(0.15);
var __r_658 = 0;
__r_658=Number(__r_656<__r_657);
case 231:/*condstart_DRGZGN*/
if (!__r_658){$goto=232;/*endif_UVMNAQ*/ continue $$;}
var __r_659 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__603_$o_d,{"con":"vec","elt":["f32",2]}));
__r_659=$assign(__r_659,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_660 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_660[0] = __603_$o_l
__r_660[1] = __603_$o_l
__r_659[0]=__r_659[0]*__r_660[0];
__r_659[1]=__r_659[1]*__r_660[1];
var __r_661 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_661[0] = 0.15
__r_661[1] = 0.15
__r_659[0]=__r_659[0]*__r_661[0];
__r_659[1]=__r_659[1]*__r_661[1];
__603_$o_d = $value(__r_659);
case 232:/*endif_UVMNAQ*/
var __r_662 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_662[0] = 1.3
__r_662[1] = 1.3
var __r_663 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_663[0]=__603_$o_d[0]*__r_662[0];
__r_663[1]=__603_$o_d[1]*__r_662[1];
__603_$o_d = $value(__r_663);
var __603_$o_pts0 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_664 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__603_$o_pts0 = $value(__r_664);
var __603_$o_pts1 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_665 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__603_$o_pts1 = $value(__r_665);
var __603_$o_pms = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_666 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__603_$o_pms = $value(__r_666);
var __603_$o_cl = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_667 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_667[0] = $value(__603_$o_q0);
var __r_668 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_668[0]=__603_$o_q1[0]-__603_$o_d[0];
__r_668[1]=__603_$o_q1[1]-__603_$o_d[1];
__r_667[1] = $value(__r_668);
var __r_669 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_669[0] = 0.65
__r_669[1] = 0.65
var __r_670 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_670[0]=__603_$o_d[0]*__r_669[0];
__r_670[1]=__603_$o_d[1]*__r_669[1];
var __r_671 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_671[0]=__603_$o_q2[0]-__r_670[0];
__r_671[1]=__603_$o_q2[1]-__r_670[1];
__r_667[2] = $value(__r_671);
__r_667[3] = $value(__603_$o_q3);
__603_$o_cl = $value(__r_667);
var __603_$o_cr = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_672 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_672[0] = $value(__603_$o_q3);
var __r_673 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_673[0] = 0.65
__r_673[1] = 0.65
var __r_674 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_674[0]=__603_$o_d[0]*__r_673[0];
__r_674[1]=__603_$o_d[1]*__r_673[1];
var __r_675 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_675[0]=__603_$o_q2[0]+__r_674[0];
__r_675[1]=__603_$o_q2[1]+__r_674[1];
__r_672[1] = $value(__r_675);
var __r_676 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_676[0]=__603_$o_q1[0]+__603_$o_d[0];
__r_676[1]=__603_$o_q1[1]+__603_$o_d[1];
__r_672[2] = $value(__r_676);
__r_672[3] = $value(__603_$o_q0);
__603_$o_cr = $value(__r_672);
var __609_$o_t = 0;
__609_$o_t = $value(0);
case 233:/*loopstart_LTIJQL*/
var __r_677 = 0;
__r_677=Number(__609_$o_t<=1);
if (!__r_677){$goto=235;/*loopend_EQLZKC*/ continue $$;}
var __610_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_678 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__603_$o_cl);
$args.push(__603_$o_pms);
$args.push($typed_value(__609_$o_t,"f32"));
var __r_679 = 0;
__r_679=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_679,"i32"));
__r_678=$assign(__r_678,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__610_$o_v = $value(__r_678);
var __r_680 = 0;
$args.push(__603_$o_pts0);
$args.push($typed_value(__610_$o_v,{"con":"vec","elt":["f32",2]}));
__r_680=$assign(__r_680,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 234:/*cont_TKLQNQ*/
var __r_681 = 0;
__r_681=$unwrap(__609_$o_t)+$unwrap(0.05);
__609_$o_t = $value(__r_681);
$goto=233;/*loopstart_LTIJQL*/ continue $$;
case 235:/*loopend_EQLZKC*/
var __612_$o_t = 0;
__612_$o_t = $value(0);
case 236:/*loopstart_THLRLU*/
var __r_682 = 0;
__r_682=Number(__612_$o_t<=1);
if (!__r_682){$goto=238;/*loopend_ECGLDI*/ continue $$;}
var __613_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_683 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__603_$o_cr);
$args.push(__603_$o_pms);
$args.push($typed_value(__612_$o_t,"f32"));
var __r_684 = 0;
__r_684=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_684,"i32"));
__r_683=$assign(__r_683,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__613_$o_v = $value(__r_683);
var __r_685 = 0;
$args.push(__603_$o_pts0);
$args.push($typed_value(__613_$o_v,{"con":"vec","elt":["f32",2]}));
__r_685=$assign(__r_685,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 237:/*cont_AKSYUB*/
var __r_686 = 0;
__r_686=$unwrap(__612_$o_t)+$unwrap(0.05);
__612_$o_t = $value(__r_686);
$goto=236;/*loopstart_THLRLU*/ continue $$;
case 238:/*loopend_ECGLDI*/
var __615_$o_i = 0;
__615_$o_i = $value(0);
case 239:/*loopstart_EJTTQM*/
var __r_687 = 0;
$args.push(__603_$o_pts0);
__r_687=$assign(__r_687,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_688 = 0;
__r_688 = new $typed_cons.f32([__r_687])[0]
__r_688=$unwrap(__r_688)*$unwrap(0.42);
var __r_689 = 0;
__r_689 = new $typed_cons.f32([__615_$o_i])[0]
var __r_690 = 0;
__r_690=Number(__r_689<__r_688);
if (!__r_690){$goto=241;/*loopend_QDOJWK*/ continue $$;}
var __617_$o_v0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_691 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_691 = $value(__603_$o_pts0[__615_$o_i]);
__617_$o_v0 = $value(__r_691);
var __617_$o_v1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_692 = 0;
$args.push(__603_$o_pts0);
__r_692=$assign(__r_692,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_692=$unwrap(__r_692)-$unwrap(1);
__r_692=$unwrap(__r_692)-$unwrap(__615_$o_i);
var __r_693 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_693 = $value(__603_$o_pts0[__r_692]);
__617_$o_v1 = $value(__r_693);
var __r_694 = 0;
$args.push(__603_$o_pts1);
var __r_695 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_695[0] = 0.6
__r_695[1] = 0.6
var __r_696 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_696[0]=__617_$o_v0[0]*__r_695[0];
__r_696[1]=__617_$o_v0[1]*__r_695[1];
var __r_697 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_697[0] = 0.4
__r_697[1] = 0.4
var __r_698 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_698[0]=__617_$o_v1[0]*__r_697[0];
__r_698[1]=__617_$o_v1[1]*__r_697[1];
__r_696[0]=__r_696[0]+__r_698[0];
__r_696[1]=__r_696[1]+__r_698[1];
$args.push($typed_value(__r_696,{"con":"vec","elt":["f32",2]}));
__r_694=$assign(__r_694,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 240:/*cont_GCRCWU*/
var __r_699 = 0;
__r_699=$unwrap(__615_$o_i)+$unwrap(1);
__615_$o_i = $value(__r_699);
$goto=239;/*loopstart_EJTTQM*/ continue $$;
case 241:/*loopend_QDOJWK*/
var __603_$o_larea = 0;
var __r_700 = 0;
var __r_701 = 0;
$args.push(__603_$o_pts0);
__r_701=$assign(__r_701,await __func_ovld_poly_area_HSEURZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_f32_$7_());
$args.push($typed_value(__r_701,"f32"));
__r_700=$assign(__r_700,await __func_ovld_abs_PMVDIS_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__603_$o_larea = $value(__r_700);
var __619_$o_i = 0;
__619_$o_i = $value(3);
case 242:/*loopstart_XOJFCW*/
var __r_702 = 0;
$args.push(__603_$o_pts1);
__r_702=$assign(__r_702,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_702=$unwrap(__r_702)-$unwrap(3);
var __r_703 = 0;
__r_703=Number(__619_$o_i<__r_702);
if (!__r_703){$goto=249;/*loopend_IOLHPN*/ continue $$;}
var __621_$o_t = 0;
var __r_704 = 0;
__r_704 = new $typed_cons.f32([__619_$o_i])[0]
var __r_705 = 0;
$args.push(__603_$o_pts1);
__r_705=$assign(__r_705,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_706 = 0;
__r_706 = new $typed_cons.f32([__r_705])[0]
__r_704=$unwrap(__r_704)/$unwrap(__r_706);
__621_$o_t = $value(__r_704);
var __r_707 = 0;
__r_707=$unwrap(__621_$o_t)*$unwrap(0.7);
__r_707=$unwrap(__r_707)+$unwrap(0.3);
__621_$o_t = $value(__r_707);
var __621_$o_j = 0;
var __r_708 = 0;
$args.push(__603_$o_pts0);
__r_708=$assign(__r_708,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_709 = 0;
__r_709 = new $typed_cons.f32([__r_708])[0]
__r_709=$unwrap(__r_709)*$unwrap(0.5);
__r_709=$unwrap(__r_709)*$unwrap(__621_$o_t);
var __r_710 = 0;
__r_710 = new $typed_cons.i32([__r_709])[0]
__621_$o_j = $value(__r_710);
var __621_$o_pts2 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_711 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__621_$o_pts2 = $value(__r_711);
var __r_712 = 0;
$args.push(__621_$o_pts2);
var __r_713 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_713 = $value(__603_$o_pts1[__619_$o_i]);
$args.push($typed_value(__r_713,{"con":"vec","elt":["f32",2]}));
__r_712=$assign(__r_712,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_714 = 0;
__r_714=$unwrap(__619_$o_i)-$unwrap(3);
__r_714=new $typed_cons.i32([$unwrap(__r_714)/$unwrap(3)])[0];
__r_714=$unwrap(__r_714)&$unwrap(1);
case 243:/*condstart_VBWXIO*/
if (!__r_714){$goto=244;/*endif_SCOBGW*/ continue $$;}
var __r_715 = 0;
$args.push(__621_$o_pts2);
var __r_716 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_716 = $value(__603_$o_pts0[__621_$o_j]);
var __r_717 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_717[0] = 0.7
__r_717[1] = 0.7
__r_716[0]=__r_716[0]*__r_717[0];
__r_716[1]=__r_716[1]*__r_717[1];
var __r_718 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_718 = $value(__603_$o_pts1[__619_$o_i]);
var __r_719 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_719[0] = 0.3
__r_719[1] = 0.3
__r_718[0]=__r_718[0]*__r_719[0];
__r_718[1]=__r_718[1]*__r_719[1];
__r_716[0]=__r_716[0]+__r_718[0];
__r_716[1]=__r_716[1]+__r_718[1];
$args.push($typed_value(__r_716,{"con":"vec","elt":["f32",2]}));
__r_715=$assign(__r_715,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
$goto=245;/*condend_TCYVTF*/ continue $$;
case 244:/*endif_SCOBGW*/
var __r_720 = 0;
$args.push(__621_$o_pts2);
var __r_721 = 0;
$args.push(__603_$o_pts0);
__r_721=$assign(__r_721,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_721=$unwrap(__r_721)-$unwrap(1);
__r_721=$unwrap(__r_721)-$unwrap(__621_$o_j);
var __r_722 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_722 = $value(__603_$o_pts0[__r_721]);
var __r_723 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_723[0] = 0.7
__r_723[1] = 0.7
__r_722[0]=__r_722[0]*__r_723[0];
__r_722[1]=__r_722[1]*__r_723[1];
var __r_724 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_724 = $value(__603_$o_pts1[__619_$o_i]);
var __r_725 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_725[0] = 0.3
__r_725[1] = 0.3
__r_724[0]=__r_724[0]*__r_725[0];
__r_724[1]=__r_724[1]*__r_725[1];
__r_722[0]=__r_722[0]+__r_724[0];
__r_722[1]=__r_722[1]+__r_724[1];
$args.push($typed_value(__r_722,{"con":"vec","elt":["f32",2]}));
__r_720=$assign(__r_720,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 245:/*condend_TCYVTF*/
var __r_726 = 0;
__r_726 = new $typed_cons.f32([400])[0]
var __r_727 = 0;
__r_727=Number(__603_$o_larea>__r_726);
case 246:/*condstart_HCNXJJ*/
if (!__r_727){$goto=247;/*endif_WUPYZR*/ continue $$;}
var __r_728 = 0;
$args.push(_$o_veins);
$args.push(__621_$o_pts2);
__r_728=$assign(__r_728,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 247:/*endif_WUPYZR*/
case 248:/*cont_RVTDPE*/
var __r_729 = 0;
__r_729=$unwrap(__619_$o_i)+$unwrap(3);
__619_$o_i = $value(__r_729);
$goto=242;/*loopstart_XOJFCW*/ continue $$;
case 249:/*loopend_IOLHPN*/
var __r_730 = 0;
__r_730 = new $typed_cons.f32([100])[0]
var __r_731 = 0;
__r_731=Number(__603_$o_larea>__r_730);
case 250:/*condstart_PJNWBB*/
if (!__r_731){$goto=251;/*endif_TECSPT*/ continue $$;}
var __r_732 = 0;
$args.push(_$o_veins);
$args.push(__603_$o_pts1);
__r_732=$assign(__r_732,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 251:/*endif_TECSPT*/
var __r_733 = 0;
$args.push(_$o_leaves);
$args.push(__603_$o_pts0);
__r_733=$assign(__r_733,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
$caps.push(__0_$o_corner_xs);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_leaf02_RKGXAE_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __180_$o_assign = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_cells = $args.pop();
var _$o_i = $args.pop();
var _$o_veins = $args.pop();
var _$o_leaves = $args.pop();
var __634_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_734 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_734 = $value(__180_$o_assign[_$o_i]);
var __r_735 = 0;
__r_735 = $value(__r_734[0]);
var __r_736 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_736 = $value(__0_$o_corner_xs[__r_735]);
__634_$o_p0 = $value(__r_736);
var __634_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_737 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_737 = $value(__180_$o_assign[_$o_i]);
var __r_738 = 0;
__r_738 = $value(__r_737[1]);
var __r_739 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_739 = $value(__0_$o_corner_xs[__r_738]);
__634_$o_p1 = $value(__r_739);
var __634_$o_p2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_740 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_740 = $value(__0_$o_sites[_$o_i]);
__634_$o_p2 = $value(__r_740);
var __634_$o_p3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_741 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_741 = $value(__0_$o_cells[_$o_i]);
var __r_742 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_742 = $value(__180_$o_assign[_$o_i]);
var __r_743 = 0;
__r_743 = $value(__r_742[2]);
var __r_744 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_744 = $value(__r_741[__r_743]);
__634_$o_p3 = $value(__r_744);
var __634_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_745 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_745[0]=__634_$o_p1[0]-__634_$o_p0[0];
__r_745[1]=__634_$o_p1[1]-__634_$o_p0[1];
var __r_746 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_746[0] = 0.5
__r_746[1] = 0.5
__r_745[0]=__r_745[0]*__r_746[0];
__r_745[1]=__r_745[1]*__r_746[1];
__634_$o_d = $value(__r_745);
var __634_$o_q0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_747 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_747[0]=__634_$o_p0[0]+__634_$o_p1[0];
__r_747[1]=__634_$o_p0[1]+__634_$o_p1[1];
var __r_748 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_748[0] = 0.5
__r_748[1] = 0.5
__r_747[0]=__r_747[0]*__r_748[0];
__r_747[1]=__r_747[1]*__r_748[1];
__634_$o_q0 = $value(__r_747);
var __634_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_749 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_749[0]=__634_$o_q0[0]+__634_$o_p2[0];
__r_749[1]=__634_$o_q0[1]+__634_$o_p2[1];
var __r_750 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_750[0] = 0.5
__r_750[1] = 0.5
__r_749[0]=__r_749[0]*__r_750[0];
__r_749[1]=__r_749[1]*__r_750[1];
__634_$o_q1 = $value(__r_749);
var __634_$o_q2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__634_$o_q2 = $value(__634_$o_p2);
var __634_$o_q3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_751 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_751[0] = 0.3
__r_751[1] = 0.3
var __r_752 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_752[0]=__634_$o_p2[0]*__r_751[0];
__r_752[1]=__634_$o_p2[1]*__r_751[1];
var __r_753 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_753[0] = 0.7
__r_753[1] = 0.7
var __r_754 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_754[0]=__634_$o_p3[0]*__r_753[0];
__r_754[1]=__634_$o_p3[1]*__r_753[1];
__r_752[0]=__r_752[0]+__r_754[0];
__r_752[1]=__r_752[1]+__r_754[1];
__634_$o_q3 = $value(__r_752);
var __634_$o_l = 0;
var __r_755 = 0;
var __r_756 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_756[0]=__634_$o_p3[0]-__634_$o_q0[0];
__r_756[1]=__634_$o_p3[1]-__634_$o_q0[1];
$args.push($typed_value(__r_756,{"con":"vec","elt":["f32",2]}));
__r_755=$assign(__r_755,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__634_$o_l = $value(__r_755);
var __r_757 = 0;
$args.push($typed_value(__634_$o_d,{"con":"vec","elt":["f32",2]}));
__r_757=$assign(__r_757,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
var __r_758 = 0;
__r_758=$unwrap(__634_$o_l)*$unwrap(0.15);
var __r_759 = 0;
__r_759=Number(__r_757<__r_758);
case 253:/*condstart_OOJYLI*/
if (!__r_759){$goto=254;/*endif_OETUYW*/ continue $$;}
var __r_760 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__634_$o_d,{"con":"vec","elt":["f32",2]}));
__r_760=$assign(__r_760,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_761 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_761[0] = __634_$o_l
__r_761[1] = __634_$o_l
__r_760[0]=__r_760[0]*__r_761[0];
__r_760[1]=__r_760[1]*__r_761[1];
var __r_762 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_762[0] = 0.15
__r_762[1] = 0.15
__r_760[0]=__r_760[0]*__r_762[0];
__r_760[1]=__r_760[1]*__r_762[1];
__634_$o_d = $value(__r_760);
case 254:/*endif_OETUYW*/
var __r_763 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_763[0] = 1.3
__r_763[1] = 1.3
var __r_764 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_764[0]=__634_$o_d[0]*__r_763[0];
__r_764[1]=__634_$o_d[1]*__r_763[1];
__634_$o_d = $value(__r_764);
var __634_$o_pts0 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_765 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__634_$o_pts0 = $value(__r_765);
var __634_$o_pts1 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_766 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__634_$o_pts1 = $value(__r_766);
var __634_$o_pts3 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_767 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__634_$o_pts3 = $value(__r_767);
var __634_$o_pms = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_768 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__634_$o_pms = $value(__r_768);
var __634_$o_cl = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_769 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_769[0] = $value(__634_$o_q0);
var __r_770 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_770[0]=__634_$o_q1[0]-__634_$o_d[0];
__r_770[1]=__634_$o_q1[1]-__634_$o_d[1];
__r_769[1] = $value(__r_770);
var __r_771 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_771[0] = 0.65
__r_771[1] = 0.65
var __r_772 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_772[0]=__634_$o_d[0]*__r_771[0];
__r_772[1]=__634_$o_d[1]*__r_771[1];
var __r_773 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_773[0]=__634_$o_q2[0]-__r_772[0];
__r_773[1]=__634_$o_q2[1]-__r_772[1];
__r_769[2] = $value(__r_773);
__r_769[3] = $value(__634_$o_q3);
__634_$o_cl = $value(__r_769);
var __634_$o_cr = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_774 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_774[0] = $value(__634_$o_q3);
var __r_775 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_775[0] = 0.65
__r_775[1] = 0.65
var __r_776 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_776[0]=__634_$o_d[0]*__r_775[0];
__r_776[1]=__634_$o_d[1]*__r_775[1];
var __r_777 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_777[0]=__634_$o_q2[0]+__r_776[0];
__r_777[1]=__634_$o_q2[1]+__r_776[1];
__r_774[1] = $value(__r_777);
var __r_778 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_778[0]=__634_$o_q1[0]+__634_$o_d[0];
__r_778[1]=__634_$o_q1[1]+__634_$o_d[1];
__r_774[2] = $value(__r_778);
__r_774[3] = $value(__634_$o_q0);
__634_$o_cr = $value(__r_774);
var __640_$o_t = 0;
__640_$o_t = $value(0);
case 255:/*loopstart_LZUZKU*/
var __r_779 = 0;
__r_779=Number(__640_$o_t<=1);
if (!__r_779){$goto=257;/*loopend_WETVPL*/ continue $$;}
var __641_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_780 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__634_$o_cl);
$args.push(__634_$o_pms);
$args.push($typed_value(__640_$o_t,"f32"));
var __r_781 = 0;
__r_781=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_781,"i32"));
__r_780=$assign(__r_780,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__641_$o_v = $value(__r_780);
var __r_782 = 0;
$args.push(__634_$o_pts0);
$args.push($typed_value(__641_$o_v,{"con":"vec","elt":["f32",2]}));
__r_782=$assign(__r_782,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 256:/*cont_IWFEAV*/
var __r_783 = 0;
__r_783=$unwrap(__640_$o_t)+$unwrap(0.05);
__640_$o_t = $value(__r_783);
$goto=255;/*loopstart_LZUZKU*/ continue $$;
case 257:/*loopend_WETVPL*/
var __643_$o_t = 0;
__643_$o_t = $value(0);
case 258:/*loopstart_GXRWDS*/
var __r_784 = 0;
__r_784=Number(__643_$o_t<=1);
if (!__r_784){$goto=260;/*loopend_GTLHYJ*/ continue $$;}
var __644_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_785 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__634_$o_cr);
$args.push(__634_$o_pms);
$args.push($typed_value(__643_$o_t,"f32"));
var __r_786 = 0;
__r_786=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_786,"i32"));
__r_785=$assign(__r_785,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__644_$o_v = $value(__r_785);
var __r_787 = 0;
$args.push(__634_$o_pts0);
$args.push($typed_value(__644_$o_v,{"con":"vec","elt":["f32",2]}));
__r_787=$assign(__r_787,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 259:/*cont_TOCWEK*/
var __r_788 = 0;
__r_788=$unwrap(__643_$o_t)+$unwrap(0.05);
__643_$o_t = $value(__r_788);
$goto=258;/*loopstart_GXRWDS*/ continue $$;
case 260:/*loopend_GTLHYJ*/
var __646_$o_i = 0;
__646_$o_i = $value(0);
case 261:/*loopstart_EZYAJN*/
var __r_789 = 0;
$args.push(__634_$o_pts0);
__r_789=$assign(__r_789,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_790 = 0;
__r_790 = new $typed_cons.f32([__r_789])[0]
__r_790=$unwrap(__r_790)*$unwrap(0.35);
var __r_791 = 0;
__r_791 = new $typed_cons.f32([__646_$o_i])[0]
var __r_792 = 0;
__r_792=Number(__r_791<__r_790);
if (!__r_792){$goto=263;/*loopend_HFBQFY*/ continue $$;}
var __648_$o_v0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_793 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_793 = $value(__634_$o_pts0[__646_$o_i]);
__648_$o_v0 = $value(__r_793);
var __648_$o_v1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_794 = 0;
$args.push(__634_$o_pts0);
__r_794=$assign(__r_794,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_794=$unwrap(__r_794)-$unwrap(1);
__r_794=$unwrap(__r_794)-$unwrap(__646_$o_i);
var __r_795 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_795 = $value(__634_$o_pts0[__r_794]);
__648_$o_v1 = $value(__r_795);
var __r_796 = 0;
$args.push(__634_$o_pts1);
var __r_797 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_797[0] = 0.6
__r_797[1] = 0.6
var __r_798 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_798[0]=__648_$o_v0[0]*__r_797[0];
__r_798[1]=__648_$o_v0[1]*__r_797[1];
var __r_799 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_799[0] = 0.4
__r_799[1] = 0.4
var __r_800 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_800[0]=__648_$o_v1[0]*__r_799[0];
__r_800[1]=__648_$o_v1[1]*__r_799[1];
__r_798[0]=__r_798[0]+__r_800[0];
__r_798[1]=__r_798[1]+__r_800[1];
$args.push($typed_value(__r_798,{"con":"vec","elt":["f32",2]}));
__r_796=$assign(__r_796,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 262:/*cont_FRMYNT*/
var __r_801 = 0;
__r_801=$unwrap(__646_$o_i)+$unwrap(1);
__646_$o_i = $value(__r_801);
$goto=261;/*loopstart_EZYAJN*/ continue $$;
case 263:/*loopend_HFBQFY*/
var __650_$o_i = 0;
__650_$o_i = $value(0);
case 264:/*loopstart_NCMUSH*/
var __r_802 = 0;
$args.push(__634_$o_pts0);
__r_802=$assign(__r_802,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_803 = 0;
__r_803=Number(__650_$o_i<__r_802);
if (!__r_803){$goto=269;/*loopend_NUOAXU*/ continue $$;}
var __652_$o_v0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_804 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_804 = $value(__634_$o_pts0[__650_$o_i]);
__652_$o_v0 = $value(__r_804);
var __652_$o_ii = 0;
var __r_805 = 0;
var __r_806 = 0;
$args.push(__634_$o_pts0);
__r_806=$assign(__r_806,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_806=new $typed_cons.i32([$unwrap(__r_806)/$unwrap(2)])[0];
var __r_807 = 0;
__r_807=Number(__650_$o_i<__r_806);
case 265:/*ternstart_HGOGLX*/
if (!__r_807){$goto=266;/*ternelse_SGVQJN*/ continue $$;}
__r_805 = $value(__650_$o_i);
$goto=267;/*ternend_IEHLEW*/ continue $$;
case 266:/*ternelse_SGVQJN*/
var __r_808 = 0;
$args.push(__634_$o_pts0);
__r_808=$assign(__r_808,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_808=$unwrap(__r_808)-$unwrap(1);
__r_808=$unwrap(__r_808)-$unwrap(__650_$o_i);
__r_805 = $value(__r_808);
case 267:/*ternend_IEHLEW*/
__652_$o_ii = $value(__r_805);
var __652_$o_j = 0;
var __r_809 = 0;
__r_809 = new $typed_cons.f32([__652_$o_ii])[0]
var __r_810 = 0;
$args.push(__634_$o_pts0);
__r_810=$assign(__r_810,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_811 = 0;
__r_811 = new $typed_cons.f32([__r_810])[0]
__r_811=$unwrap(__r_811)*$unwrap(0.5);
__r_809=$unwrap(__r_809)/$unwrap(__r_811);
var __r_812 = 0;
$args.push(__634_$o_pts1);
__r_812=$assign(__r_812,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_813 = 0;
__r_813 = new $typed_cons.f32([__r_812])[0]
__r_809=$unwrap(__r_809)*$unwrap(__r_813);
var __r_814 = 0;
__r_814 = new $typed_cons.i32([__r_809])[0]
__652_$o_j = $value(__r_814);
var __652_$o_v1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_815 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_815 = $value(__634_$o_pts1[__652_$o_j]);
__652_$o_v1 = $value(__r_815);
var __652_$o_t = 0;
var __r_816 = 0;
var __r_817 = 0;
__r_817=$unwrap(__650_$o_i)*$unwrap(8);
var __r_818 = 0;
__r_818 = new $typed_cons.f32([__r_817])[0]
$args.push($typed_value(__r_818,"f32"));
__r_816=$assign(__r_816,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_816=$unwrap(__r_816)*$unwrap(0.2);
__r_816=$unwrap(__r_816)+$unwrap(1.2);
__652_$o_t = $value(__r_816);
var __r_819 = 0;
$args.push(__634_$o_pts3);
var __r_820 = 0;
__r_820 = new $typed_cons.f32([1])[0]
__r_820=$unwrap(__r_820)-$unwrap(__652_$o_t);
var __r_821 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_821[0] = __r_820
__r_821[1] = __r_820
var __r_822 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_822[0]=__652_$o_v1[0]*__r_821[0];
__r_822[1]=__652_$o_v1[1]*__r_821[1];
var __r_823 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_823[0] = __652_$o_t
__r_823[1] = __652_$o_t
var __r_824 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_824[0]=__652_$o_v0[0]*__r_823[0];
__r_824[1]=__652_$o_v0[1]*__r_823[1];
__r_822[0]=__r_822[0]+__r_824[0];
__r_822[1]=__r_822[1]+__r_824[1];
$args.push($typed_value(__r_822,{"con":"vec","elt":["f32",2]}));
__r_819=$assign(__r_819,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 268:/*cont_BWBRAQ*/
var __r_825 = 0;
__r_825=$unwrap(__650_$o_i)+$unwrap(1);
__650_$o_i = $value(__r_825);
$goto=264;/*loopstart_NCMUSH*/ continue $$;
case 269:/*loopend_NUOAXU*/
var __634_$o_larea = 0;
var __r_826 = 0;
var __r_827 = 0;
$args.push(__634_$o_pts0);
__r_827=$assign(__r_827,await __func_ovld_poly_area_HSEURZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_f32_$7_());
$args.push($typed_value(__r_827,"f32"));
__r_826=$assign(__r_826,await __func_ovld_abs_PMVDIS_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__634_$o_larea = $value(__r_826);
var __657_$o_i = 0;
__657_$o_i = $value(3);
case 270:/*loopstart_VRQQZA*/
var __r_828 = 0;
$args.push(__634_$o_pts1);
__r_828=$assign(__r_828,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_828=$unwrap(__r_828)-$unwrap(3);
var __r_829 = 0;
__r_829=Number(__657_$o_i<__r_828);
if (!__r_829){$goto=277;/*loopend_JBPQAX*/ continue $$;}
var __659_$o_t = 0;
var __r_830 = 0;
__r_830 = new $typed_cons.f32([__657_$o_i])[0]
var __r_831 = 0;
$args.push(__634_$o_pts1);
__r_831=$assign(__r_831,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_832 = 0;
__r_832 = new $typed_cons.f32([__r_831])[0]
__r_830=$unwrap(__r_830)/$unwrap(__r_832);
__659_$o_t = $value(__r_830);
var __r_833 = 0;
__r_833=$unwrap(__659_$o_t)*$unwrap(0.7);
__r_833=$unwrap(__r_833)+$unwrap(0.3);
__659_$o_t = $value(__r_833);
var __659_$o_j = 0;
var __r_834 = 0;
$args.push(__634_$o_pts0);
__r_834=$assign(__r_834,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_835 = 0;
__r_835 = new $typed_cons.f32([__r_834])[0]
__r_835=$unwrap(__r_835)*$unwrap(0.5);
__r_835=$unwrap(__r_835)*$unwrap(__659_$o_t);
var __r_836 = 0;
__r_836 = new $typed_cons.i32([__r_835])[0]
__659_$o_j = $value(__r_836);
var __659_$o_pts2 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_837 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__659_$o_pts2 = $value(__r_837);
var __r_838 = 0;
$args.push(__659_$o_pts2);
var __r_839 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_839 = $value(__634_$o_pts1[__657_$o_i]);
$args.push($typed_value(__r_839,{"con":"vec","elt":["f32",2]}));
__r_838=$assign(__r_838,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_840 = 0;
__r_840=$unwrap(__657_$o_i)-$unwrap(3);
__r_840=new $typed_cons.i32([$unwrap(__r_840)/$unwrap(3)])[0];
__r_840=$unwrap(__r_840)&$unwrap(1);
case 271:/*condstart_TJBPBL*/
if (!__r_840){$goto=272;/*endif_LEVXKO*/ continue $$;}
var __r_841 = 0;
$args.push(__659_$o_pts2);
var __r_842 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_842 = $value(__634_$o_pts0[__659_$o_j]);
var __r_843 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_843[0] = 0.7
__r_843[1] = 0.7
__r_842[0]=__r_842[0]*__r_843[0];
__r_842[1]=__r_842[1]*__r_843[1];
var __r_844 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_844 = $value(__634_$o_pts1[__657_$o_i]);
var __r_845 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_845[0] = 0.3
__r_845[1] = 0.3
__r_844[0]=__r_844[0]*__r_845[0];
__r_844[1]=__r_844[1]*__r_845[1];
__r_842[0]=__r_842[0]+__r_844[0];
__r_842[1]=__r_842[1]+__r_844[1];
$args.push($typed_value(__r_842,{"con":"vec","elt":["f32",2]}));
__r_841=$assign(__r_841,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
$goto=273;/*condend_VMQIVC*/ continue $$;
case 272:/*endif_LEVXKO*/
var __r_846 = 0;
$args.push(__659_$o_pts2);
var __r_847 = 0;
$args.push(__634_$o_pts0);
__r_847=$assign(__r_847,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_847=$unwrap(__r_847)-$unwrap(1);
__r_847=$unwrap(__r_847)-$unwrap(__659_$o_j);
var __r_848 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_848 = $value(__634_$o_pts0[__r_847]);
var __r_849 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_849[0] = 0.7
__r_849[1] = 0.7
__r_848[0]=__r_848[0]*__r_849[0];
__r_848[1]=__r_848[1]*__r_849[1];
var __r_850 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_850 = $value(__634_$o_pts1[__657_$o_i]);
var __r_851 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_851[0] = 0.3
__r_851[1] = 0.3
__r_850[0]=__r_850[0]*__r_851[0];
__r_850[1]=__r_850[1]*__r_851[1];
__r_848[0]=__r_848[0]+__r_850[0];
__r_848[1]=__r_848[1]+__r_850[1];
$args.push($typed_value(__r_848,{"con":"vec","elt":["f32",2]}));
__r_846=$assign(__r_846,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 273:/*condend_VMQIVC*/
var __r_852 = 0;
__r_852 = new $typed_cons.f32([200])[0]
var __r_853 = 0;
__r_853=Number(__634_$o_larea>__r_852);
case 274:/*condstart_CKQIKT*/
if (!__r_853){$goto=275;/*endif_HDXZYP*/ continue $$;}
var __r_854 = 0;
$args.push(_$o_veins);
$args.push(__659_$o_pts2);
__r_854=$assign(__r_854,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 275:/*endif_HDXZYP*/
case 276:/*cont_FGREWD*/
var __r_855 = 0;
__r_855=$unwrap(__657_$o_i)+$unwrap(3);
__657_$o_i = $value(__r_855);
$goto=270;/*loopstart_VRQQZA*/ continue $$;
case 277:/*loopend_JBPQAX*/
var __r_856 = 0;
__r_856 = new $typed_cons.f32([100])[0]
var __r_857 = 0;
__r_857=Number(__634_$o_larea>__r_856);
case 278:/*condstart_JOGSTU*/
if (!__r_857){$goto=279;/*endif_FKXEQO*/ continue $$;}
var __r_858 = 0;
$args.push(_$o_veins);
$args.push(__634_$o_pts1);
__r_858=$assign(__r_858,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 279:/*endif_FKXEQO*/
var __r_859 = 0;
$args.push(_$o_leaves);
$args.push(__634_$o_pts3);
__r_859=$assign(__r_859,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
$caps.push(__0_$o_corner_xs);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_leaf03_JVLQLD_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __180_$o_assign = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_cells = $args.pop();
var _$o_i = $args.pop();
var _$o_veins = $args.pop();
var _$o_leaves = $args.pop();
var __672_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_860 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_860 = $value(__180_$o_assign[_$o_i]);
var __r_861 = 0;
__r_861 = $value(__r_860[0]);
var __r_862 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_862 = $value(__0_$o_corner_xs[__r_861]);
__672_$o_p0 = $value(__r_862);
var __672_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_863 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_863 = $value(__180_$o_assign[_$o_i]);
var __r_864 = 0;
__r_864 = $value(__r_863[1]);
var __r_865 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_865 = $value(__0_$o_corner_xs[__r_864]);
__672_$o_p1 = $value(__r_865);
var __672_$o_p2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_866 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_866 = $value(__0_$o_sites[_$o_i]);
__672_$o_p2 = $value(__r_866);
var __672_$o_p3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_867 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_867 = $value(__0_$o_cells[_$o_i]);
var __r_868 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_868 = $value(__180_$o_assign[_$o_i]);
var __r_869 = 0;
__r_869 = $value(__r_868[2]);
var __r_870 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_870 = $value(__r_867[__r_869]);
__672_$o_p3 = $value(__r_870);
var __672_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_871 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_871[0]=__672_$o_p1[0]-__672_$o_p0[0];
__r_871[1]=__672_$o_p1[1]-__672_$o_p0[1];
var __r_872 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_872[0] = 0.5
__r_872[1] = 0.5
__r_871[0]=__r_871[0]*__r_872[0];
__r_871[1]=__r_871[1]*__r_872[1];
__672_$o_d = $value(__r_871);
var __672_$o_q0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_873 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_873[0]=__672_$o_p0[0]+__672_$o_p1[0];
__r_873[1]=__672_$o_p0[1]+__672_$o_p1[1];
var __r_874 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_874[0] = 0.5
__r_874[1] = 0.5
__r_873[0]=__r_873[0]*__r_874[0];
__r_873[1]=__r_873[1]*__r_874[1];
__672_$o_q0 = $value(__r_873);
var __672_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_875 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_875[0]=__672_$o_q0[0]+__672_$o_p2[0];
__r_875[1]=__672_$o_q0[1]+__672_$o_p2[1];
var __r_876 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_876[0] = 0.5
__r_876[1] = 0.5
__r_875[0]=__r_875[0]*__r_876[0];
__r_875[1]=__r_875[1]*__r_876[1];
__672_$o_q1 = $value(__r_875);
var __672_$o_q2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__672_$o_q2 = $value(__672_$o_p2);
var __672_$o_q3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_877 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_877[0] = 0.3
__r_877[1] = 0.3
var __r_878 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_878[0]=__672_$o_p2[0]*__r_877[0];
__r_878[1]=__672_$o_p2[1]*__r_877[1];
var __r_879 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_879[0] = 0.7
__r_879[1] = 0.7
var __r_880 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_880[0]=__672_$o_p3[0]*__r_879[0];
__r_880[1]=__672_$o_p3[1]*__r_879[1];
__r_878[0]=__r_878[0]+__r_880[0];
__r_878[1]=__r_878[1]+__r_880[1];
__672_$o_q3 = $value(__r_878);
var __672_$o_e = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_881 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_881[0]=__672_$o_q3[0]-__672_$o_q0[0];
__r_881[1]=__672_$o_q3[1]-__672_$o_q0[1];
__672_$o_e = $value(__r_881);
var __672_$o_f = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_882 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_883 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_884 = 0;
var __r_885 = 0;
__r_885 = $value(__672_$o_e[1]);
__r_884=$unwrap(0)-$unwrap(__r_885);
__r_883[0] = $value(__r_884);
var __r_886 = 0;
__r_886 = $value(__672_$o_e[0]);
__r_883[1] = $value(__r_886);
$args.push($typed_value(__r_883,{"con":"vec","elt":["f32",2]}));
__r_882=$assign(__r_882,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__672_$o_f = $value(__r_882);
var __672_$o_q4 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_887 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q2,{"con":"vec","elt":["f32",2]}));
var __r_888 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_888[0]=__672_$o_q2[0]+__672_$o_f[0];
__r_888[1]=__672_$o_q2[1]+__672_$o_f[1];
$args.push($typed_value(__r_888,{"con":"vec","elt":["f32",2]}));
var __r_889 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_889 = $value(__0_$o_cells[_$o_i]);
$args.push(__r_889);
__r_887=$assign(__r_887,await __func_ovld_ray_polygon_USXSIQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__672_$o_q4 = $value(__r_887);
var __672_$o_q5 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_890 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q2,{"con":"vec","elt":["f32",2]}));
var __r_891 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_891[0]=__672_$o_q2[0]-__672_$o_f[0];
__r_891[1]=__672_$o_q2[1]-__672_$o_f[1];
$args.push($typed_value(__r_891,{"con":"vec","elt":["f32",2]}));
var __r_892 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_892 = $value(__0_$o_cells[_$o_i]);
$args.push(__r_892);
__r_890=$assign(__r_890,await __func_ovld_ray_polygon_USXSIQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__672_$o_q5 = $value(__r_890);
var __r_893 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_893[0] = 3
__r_893[1] = 3
var __r_894 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_894[0]=__672_$o_f[0]*__r_893[0];
__r_894[1]=__672_$o_f[1]*__r_893[1];
var __r_895 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_895[0]=__672_$o_q4[0]-__r_894[0];
__r_895[1]=__672_$o_q4[1]-__r_894[1];
__672_$o_q4 = $value(__r_895);
var __r_896 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_896[0] = 3
__r_896[1] = 3
var __r_897 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_897[0]=__672_$o_f[0]*__r_896[0];
__r_897[1]=__672_$o_f[1]*__r_896[1];
var __r_898 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_898[0]=__672_$o_q5[0]+__r_897[0];
__r_898[1]=__672_$o_q5[1]+__r_897[1];
__672_$o_q5 = $value(__r_898);
var __672_$o_q6 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_899 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_899[0]=__672_$o_q4[0]+__672_$o_q0[0];
__r_899[1]=__672_$o_q4[1]+__672_$o_q0[1];
__r_899[0]=__r_899[0]+__672_$o_q2[0];
__r_899[1]=__r_899[1]+__672_$o_q2[1];
__r_899[0]=__r_899[0]+__672_$o_q0[0];
__r_899[1]=__r_899[1]+__672_$o_q0[1];
var __r_900 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_900[0] = 4
__r_900[1] = 4
__r_899[0]=__r_899[0]/__r_900[0];
__r_899[1]=__r_899[1]/__r_900[1];
__672_$o_q6 = $value(__r_899);
var __672_$o_q7 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_901 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_901[0]=__672_$o_q5[0]+__672_$o_q0[0];
__r_901[1]=__672_$o_q5[1]+__672_$o_q0[1];
__r_901[0]=__r_901[0]+__672_$o_q2[0];
__r_901[1]=__r_901[1]+__672_$o_q2[1];
__r_901[0]=__r_901[0]+__672_$o_q0[0];
__r_901[1]=__r_901[1]+__672_$o_q0[1];
var __r_902 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_902[0] = 4
__r_902[1] = 4
__r_901[0]=__r_901[0]/__r_902[0];
__r_901[1]=__r_901[1]/__r_902[1];
__672_$o_q7 = $value(__r_901);
var __672_$o_q8 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_903 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_903[0]=__672_$o_p0[0]+__672_$o_q0[0];
__r_903[1]=__672_$o_p0[1]+__672_$o_q0[1];
var __r_904 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_904[0] = 0.5
__r_904[1] = 0.5
__r_903[0]=__r_903[0]*__r_904[0];
__r_903[1]=__r_903[1]*__r_904[1];
__672_$o_q8 = $value(__r_903);
var __672_$o_q9 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_905 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_905[0]=__672_$o_p1[0]+__672_$o_q0[0];
__r_905[1]=__672_$o_p1[1]+__672_$o_q0[1];
var __r_906 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_906[0] = 0.5
__r_906[1] = 0.5
__r_905[0]=__r_905[0]*__r_906[0];
__r_905[1]=__r_905[1]*__r_906[1];
__672_$o_q9 = $value(__r_905);
var __672_$o_l = 0;
var __r_907 = 0;
var __r_908 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_908[0]=__672_$o_p3[0]-__672_$o_q0[0];
__r_908[1]=__672_$o_p3[1]-__672_$o_q0[1];
$args.push($typed_value(__r_908,{"con":"vec","elt":["f32",2]}));
__r_907=$assign(__r_907,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__672_$o_l = $value(__r_907);
var __r_909 = 0;
$args.push($typed_value(__672_$o_d,{"con":"vec","elt":["f32",2]}));
__r_909=$assign(__r_909,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
var __r_910 = 0;
__r_910=$unwrap(__672_$o_l)*$unwrap(0.15);
var __r_911 = 0;
__r_911=Number(__r_909<__r_910);
case 281:/*condstart_XDQYRU*/
if (!__r_911){$goto=282;/*endif_XDCCNL*/ continue $$;}
var __r_912 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_d,{"con":"vec","elt":["f32",2]}));
__r_912=$assign(__r_912,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_913 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_913[0] = __672_$o_l
__r_913[1] = __672_$o_l
__r_912[0]=__r_912[0]*__r_913[0];
__r_912[1]=__r_912[1]*__r_913[1];
var __r_914 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_914[0] = 0.15
__r_914[1] = 0.15
__r_912[0]=__r_912[0]*__r_914[0];
__r_912[1]=__r_912[1]*__r_914[1];
__672_$o_d = $value(__r_912);
case 282:/*endif_XDCCNL*/
var __r_915 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_915[0] = 1.3
__r_915[1] = 1.3
var __r_916 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_916[0]=__672_$o_d[0]*__r_915[0];
__r_916[1]=__672_$o_d[1]*__r_915[1];
__672_$o_d = $value(__r_916);
var __672_$o_pts0 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_917 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__672_$o_pts0 = $value(__r_917);
var __672_$o_pms = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_918 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__672_$o_pms = $value(__r_918);
var __672_$o_cs = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_919 = Object.assign(new Array(6).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
var __r_920 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_920[0] = $value(__672_$o_q0);
__r_920[1] = $value(__672_$o_q8);
var __r_921 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q8,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q4,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.5]),{__type:'f32'}));
__r_921=$assign(__r_921,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_920[2] = $value(__r_921);
__r_920[3] = $value(__672_$o_q4);
__r_919[0] = $value(__r_920);
var __r_922 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_922[0] = $value(__672_$o_q4);
var __r_923 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q4,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q6,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.3]),{__type:'f32'}));
__r_923=$assign(__r_923,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_922[1] = $value(__r_923);
var __r_924 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q4,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q6,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.6]),{__type:'f32'}));
__r_924=$assign(__r_924,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_922[2] = $value(__r_924);
__r_922[3] = $value(__672_$o_q6);
__r_919[1] = $value(__r_922);
var __r_925 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_925[0] = $value(__672_$o_q6);
var __r_926 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q6,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q3,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.3]),{__type:'f32'}));
__r_926=$assign(__r_926,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_925[1] = $value(__r_926);
var __r_927 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q6,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q3,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.6]),{__type:'f32'}));
__r_927=$assign(__r_927,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_925[2] = $value(__r_927);
__r_925[3] = $value(__672_$o_q3);
__r_919[2] = $value(__r_925);
var __r_928 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_928[0] = $value(__672_$o_q3);
var __r_929 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q3,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q7,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.3]),{__type:'f32'}));
__r_929=$assign(__r_929,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_928[1] = $value(__r_929);
var __r_930 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q3,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q7,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.6]),{__type:'f32'}));
__r_930=$assign(__r_930,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_928[2] = $value(__r_930);
__r_928[3] = $value(__672_$o_q7);
__r_919[3] = $value(__r_928);
var __r_931 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_931[0] = $value(__672_$o_q7);
var __r_932 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q7,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q5,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.3]),{__type:'f32'}));
__r_932=$assign(__r_932,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_931[1] = $value(__r_932);
var __r_933 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q7,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q5,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.6]),{__type:'f32'}));
__r_933=$assign(__r_933,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_931[2] = $value(__r_933);
__r_931[3] = $value(__672_$o_q5);
__r_919[4] = $value(__r_931);
var __r_934 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_934[0] = $value(__672_$o_q5);
var __r_935 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__672_$o_q5,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__672_$o_q9,{"con":"vec","elt":["f32",2]}));
$args.push(Object.assign(new $typed_cons.f32([0.5]),{__type:'f32'}));
__r_935=$assign(__r_935,await __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__r_934[1] = $value(__r_935);
__r_934[2] = $value(__672_$o_q9);
__r_934[3] = $value(__672_$o_q0);
__r_919[5] = $value(__r_934);
__672_$o_cs = $value(__r_919);
var __689_$o_i = 0;
__689_$o_i = $value(0);
case 283:/*loopstart_OUTURV*/
var __r_936 = 0;
$args.push(__672_$o_cs);
__r_936=$assign(__r_936,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_937 = 0;
__r_937=Number(__689_$o_i<__r_936);
if (!__r_937){$goto=288;/*loopend_AVGCTF*/ continue $$;}
var __692_$o_t = 0;
__692_$o_t = $value(0);
case 284:/*loopstart_AYLMTO*/
var __r_938 = 0;
__r_938=Number(__692_$o_t<=1);
if (!__r_938){$goto=286;/*loopend_YTOYSB*/ continue $$;}
var __693_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_939 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_940 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_940 = $value(__672_$o_cs[__689_$o_i]);
$args.push(__r_940);
$args.push(__672_$o_pms);
$args.push($typed_value(__692_$o_t,"f32"));
var __r_941 = 0;
__r_941=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_941,"i32"));
__r_939=$assign(__r_939,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__693_$o_v = $value(__r_939);
var __r_942 = 0;
$args.push(__672_$o_pts0);
$args.push($typed_value(__693_$o_v,{"con":"vec","elt":["f32",2]}));
__r_942=$assign(__r_942,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 285:/*cont_OFPSAW*/
var __r_943 = 0;
__r_943=$unwrap(__692_$o_t)+$unwrap(0.05);
__692_$o_t = $value(__r_943);
$goto=284;/*loopstart_AYLMTO*/ continue $$;
case 286:/*loopend_YTOYSB*/
case 287:/*cont_BREFTU*/
var __r_944 = 0;
__r_944=$unwrap(__689_$o_i)+$unwrap(1);
__689_$o_i = $value(__r_944);
$goto=283;/*loopstart_OUTURV*/ continue $$;
case 288:/*loopend_AVGCTF*/
var __r_945 = 0;
$args.push(_$o_leaves);
$args.push(__672_$o_pts0);
__r_945=$assign(__r_945,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
$caps.push(__0_$o_corner_xs);
$caps.push(__180_$o_assign);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_bud01_GDUYQD_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __0_$o_paths = $args.pop();
var __0_$o_sites = $args.pop();
var __180_$o_ends = $args.pop();
var _$o_i = $args.pop();
var _$o_flowers = $args.pop();
var _$o_buds = $args.pop();
var __460_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_946 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_946 = $value(__0_$o_paths[_$o_i]);
var __r_947 = 0;
var __r_948 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_948 = $value(__0_$o_paths[_$o_i]);
$args.push(__r_948);
__r_947=$assign(__r_947,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_947=$unwrap(__r_947)-$unwrap(1);
var __r_949 = 0;
__r_949 = $value(__r_946[__r_947]);
var __r_950 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_950 = $value(__0_$o_corner_xs[__r_949]);
__460_$o_p0 = $value(__r_950);
var __460_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_951 = 0;
__r_951 = $value(__180_$o_ends[_$o_i]);
var __r_952 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_952 = $value(__0_$o_sites[__r_951]);
__460_$o_p1 = $value(__r_952);
var __460_$o_th = 0;
var __r_953 = 0;
var __r_954 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_954[0]=__460_$o_p1[0]-__460_$o_p0[0];
__r_954[1]=__460_$o_p1[1]-__460_$o_p0[1];
var __r_955 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_955[0] = $value(__r_954[1]);
__r_955[1] = $value(__r_954[0]);
var __r_956 = 0;
__r_956 = $value(__r_955[0]);
$args.push($typed_value(__r_956,"f32"));
var __r_957 = 0;
__r_957 = $value(__r_955[1]);
$args.push($typed_value(__r_957,"f32"));
__r_953=$assign(__r_953,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__460_$o_th = $value(__r_953);
var __460_$o_costh = 0;
var __r_958 = 0;
$args.push($typed_value(__460_$o_th,"f32"));
__r_958=$assign(__r_958,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__460_$o_costh = $value(__r_958);
var __460_$o_sinth = 0;
var __r_959 = 0;
$args.push($typed_value(__460_$o_th,"f32"));
__r_959=$assign(__r_959,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__460_$o_sinth = $value(__r_959);
var __460_$o_n = 0;
__460_$o_n = $value(20);
var __460_$o_ps = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_960 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__460_$o_ps = $value(__r_960);
var __462_$o_j = 0;
__462_$o_j = $value(0);
case 290:/*loopstart_HAWLAS*/
var __r_961 = 0;
__r_961=Number(__462_$o_j<__460_$o_n);
if (!__r_961){$goto=292;/*loopend_XMKYIU*/ continue $$;}
var __463_$o_a = 0;
var __r_962 = 0;
__r_962 = new $typed_cons.f32([__462_$o_j])[0]
var __r_963 = 0;
__r_963 = new $typed_cons.f32([__460_$o_n])[0]
__r_962=$unwrap(__r_962)/$unwrap(__r_963);
__r_962=$unwrap(__r_962)*$unwrap(math_$o_PI);
var __r_964 = 0;
__r_964 = new $typed_cons.f32([2])[0]
__r_962=$unwrap(__r_962)*$unwrap(__r_964);
__463_$o_a = $value(__r_962);
var __463_$o_x = 0;
var __r_965 = 0;
$args.push($typed_value(__463_$o_a,"f32"));
__r_965=$assign(__r_965,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_966 = 0;
__r_966 = new $typed_cons.f32([16])[0]
__r_965=$unwrap(__r_965)*$unwrap(__r_966);
__r_965=$unwrap(__r_965)*$unwrap(0.5);
var __r_967 = 0;
__r_967 = new $typed_cons.f32([2])[0]
__r_965=$unwrap(__r_965)+$unwrap(__r_967);
__r_965=$unwrap(__r_965)*$unwrap(0.9);
__463_$o_x = $value(__r_965);
var __463_$o_y = 0;
var __r_968 = 0;
$args.push($typed_value(__463_$o_a,"f32"));
__r_968=$assign(__r_968,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_969 = 0;
__r_969 = new $typed_cons.f32([14])[0]
__r_968=$unwrap(__r_968)*$unwrap(__r_969);
__r_968=$unwrap(__r_968)*$unwrap(0.5);
var __r_970 = 0;
__r_970 = new $typed_cons.f32([0])[0]
__r_968=$unwrap(__r_968)+$unwrap(__r_970);
__r_968=$unwrap(__r_968)*$unwrap(0.9);
__463_$o_y = $value(__r_968);
var __463_$o_x1 = 0;
var __r_971 = 0;
__r_971=$unwrap(__463_$o_x)*$unwrap(__460_$o_costh);
var __r_972 = 0;
__r_972=$unwrap(__463_$o_y)*$unwrap(__460_$o_sinth);
__r_971=$unwrap(__r_971)-$unwrap(__r_972);
var __r_973 = 0;
__r_973 = $value(__180_$o_ends[_$o_i]);
var __r_974 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_974 = $value(__0_$o_sites[__r_973]);
var __r_975 = 0;
__r_975 = $value(__r_974[0]);
__r_971=$unwrap(__r_971)+$unwrap(__r_975);
__463_$o_x1 = $value(__r_971);
var __463_$o_y1 = 0;
var __r_976 = 0;
__r_976=$unwrap(__463_$o_x)*$unwrap(__460_$o_sinth);
var __r_977 = 0;
__r_977=$unwrap(__463_$o_y)*$unwrap(__460_$o_costh);
__r_976=$unwrap(__r_976)+$unwrap(__r_977);
var __r_978 = 0;
__r_978 = $value(__180_$o_ends[_$o_i]);
var __r_979 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_979 = $value(__0_$o_sites[__r_978]);
var __r_980 = 0;
__r_980 = $value(__r_979[1]);
__r_976=$unwrap(__r_976)+$unwrap(__r_980);
__463_$o_y1 = $value(__r_976);
var __r_981 = 0;
$args.push(__460_$o_ps);
var __r_982 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_982[0] = $value(__463_$o_x1);
__r_982[1] = $value(__463_$o_y1);
$args.push($typed_value(__r_982,{"con":"vec","elt":["f32",2]}));
__r_981=$assign(__r_981,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 291:/*cont_WQKRXV*/
var __r_983 = 0;
__r_983=$unwrap(__462_$o_j)+$unwrap(1);
__462_$o_j = $value(__r_983);
$goto=290;/*loopstart_HAWLAS*/ continue $$;
case 292:/*loopend_XMKYIU*/
var __r_984 = 0;
$args.push(_$o_buds);
$args.push(__460_$o_ps);
__r_984=$assign(__r_984,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_985 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__460_$o_ps = $value(__r_985);
var __468_$o_j = 0;
__468_$o_j = $value(0);
case 293:/*loopstart_HJIPIN*/
var __r_986 = 0;
__r_986=Number(__468_$o_j<__460_$o_n);
if (!__r_986){$goto=295;/*loopend_AABKYI*/ continue $$;}
var __469_$o_a = 0;
var __r_987 = 0;
__r_987 = new $typed_cons.f32([__468_$o_j])[0]
var __r_988 = 0;
__r_988 = new $typed_cons.f32([__460_$o_n])[0]
__r_987=$unwrap(__r_987)/$unwrap(__r_988);
__r_987=$unwrap(__r_987)*$unwrap(math_$o_PI);
var __r_989 = 0;
__r_989 = new $typed_cons.f32([2])[0]
__r_987=$unwrap(__r_987)*$unwrap(__r_989);
__469_$o_a = $value(__r_987);
var __469_$o_x = 0;
var __r_990 = 0;
$args.push($typed_value(__469_$o_a,"f32"));
__r_990=$assign(__r_990,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_991 = 0;
__r_991 = new $typed_cons.f32([20])[0]
__r_990=$unwrap(__r_990)*$unwrap(__r_991);
__r_990=$unwrap(__r_990)*$unwrap(0.5);
var __r_992 = 0;
__r_992 = new $typed_cons.f32([4])[0]
__r_990=$unwrap(__r_990)+$unwrap(__r_992);
__r_990=$unwrap(__r_990)*$unwrap(0.9);
__469_$o_x = $value(__r_990);
var __469_$o_y = 0;
var __r_993 = 0;
$args.push($typed_value(__469_$o_a,"f32"));
__r_993=$assign(__r_993,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_994 = 0;
__r_994 = new $typed_cons.f32([14])[0]
__r_993=$unwrap(__r_993)*$unwrap(__r_994);
__r_993=$unwrap(__r_993)*$unwrap(0.5);
var __r_995 = 0;
__r_995 = new $typed_cons.f32([2])[0]
__r_993=$unwrap(__r_993)-$unwrap(__r_995);
__r_993=$unwrap(__r_993)*$unwrap(0.9);
__469_$o_y = $value(__r_993);
var __469_$o_x1 = 0;
var __r_996 = 0;
__r_996=$unwrap(__469_$o_x)*$unwrap(__460_$o_costh);
var __r_997 = 0;
__r_997=$unwrap(__469_$o_y)*$unwrap(__460_$o_sinth);
__r_996=$unwrap(__r_996)-$unwrap(__r_997);
var __r_998 = 0;
__r_998 = $value(__180_$o_ends[_$o_i]);
var __r_999 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_999 = $value(__0_$o_sites[__r_998]);
var __r_1000 = 0;
__r_1000 = $value(__r_999[0]);
__r_996=$unwrap(__r_996)+$unwrap(__r_1000);
__469_$o_x1 = $value(__r_996);
var __469_$o_y1 = 0;
var __r_1001 = 0;
__r_1001=$unwrap(__469_$o_x)*$unwrap(__460_$o_sinth);
var __r_1002 = 0;
__r_1002=$unwrap(__469_$o_y)*$unwrap(__460_$o_costh);
__r_1001=$unwrap(__r_1001)+$unwrap(__r_1002);
var __r_1003 = 0;
__r_1003 = $value(__180_$o_ends[_$o_i]);
var __r_1004 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1004 = $value(__0_$o_sites[__r_1003]);
var __r_1005 = 0;
__r_1005 = $value(__r_1004[1]);
__r_1001=$unwrap(__r_1001)+$unwrap(__r_1005);
__469_$o_y1 = $value(__r_1001);
var __r_1006 = 0;
$args.push(__460_$o_ps);
var __r_1007 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1007[0] = $value(__469_$o_x1);
__r_1007[1] = $value(__469_$o_y1);
$args.push($typed_value(__r_1007,{"con":"vec","elt":["f32",2]}));
__r_1006=$assign(__r_1006,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 294:/*cont_IXYINE*/
var __r_1008 = 0;
__r_1008=$unwrap(__468_$o_j)+$unwrap(1);
__468_$o_j = $value(__r_1008);
$goto=293;/*loopstart_HJIPIN*/ continue $$;
case 295:/*loopend_AABKYI*/
var __r_1009 = 0;
$args.push(_$o_buds);
$args.push(__460_$o_ps);
__r_1009=$assign(__r_1009,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_paths);
$caps.push(__0_$o_sites);
$caps.push(__180_$o_ends);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_bud02_FMRUBY_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __0_$o_paths = $args.pop();
var __0_$o_sites = $args.pop();
var __180_$o_ends = $args.pop();
var _$o_i = $args.pop();
var _$o_flowers = $args.pop();
var _$o_buds = $args.pop();
var __472_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1010 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1010 = $value(__0_$o_paths[_$o_i]);
var __r_1011 = 0;
var __r_1012 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1012 = $value(__0_$o_paths[_$o_i]);
$args.push(__r_1012);
__r_1011=$assign(__r_1011,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_1011=$unwrap(__r_1011)-$unwrap(1);
var __r_1013 = 0;
__r_1013 = $value(__r_1010[__r_1011]);
var __r_1014 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1014 = $value(__0_$o_corner_xs[__r_1013]);
__472_$o_p0 = $value(__r_1014);
var __472_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1015 = 0;
__r_1015 = $value(__180_$o_ends[_$o_i]);
var __r_1016 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1016 = $value(__0_$o_sites[__r_1015]);
__472_$o_p1 = $value(__r_1016);
var __472_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1017 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1017[0]=__472_$o_p1[0]-__472_$o_p0[0];
__r_1017[1]=__472_$o_p1[1]-__472_$o_p0[1];
var __r_1018 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1018[0] = 0.3
__r_1018[1] = 0.3
__r_1017[0]=__r_1017[0]*__r_1018[0];
__r_1017[1]=__r_1017[1]*__r_1018[1];
__472_$o_d = $value(__r_1017);
var __472_$o_e = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1019 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1020 = 0;
var __r_1021 = 0;
__r_1021 = $value(__472_$o_d[1]);
__r_1020=$unwrap(0)-$unwrap(__r_1021);
__r_1019[0] = $value(__r_1020);
var __r_1022 = 0;
__r_1022 = $value(__472_$o_d[0]);
__r_1019[1] = $value(__r_1022);
var __r_1023 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1023[0] = 1.5
__r_1023[1] = 1.5
__r_1019[0]=__r_1019[0]*__r_1023[0];
__r_1019[1]=__r_1019[1]*__r_1023[1];
__472_$o_e = $value(__r_1019);
var __472_$o_cl = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1024 = Object.assign(new Array(3).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_1024[0] = $value(__472_$o_p0);
var __r_1025 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1025[0]=__472_$o_p0[0]+__472_$o_d[0];
__r_1025[1]=__472_$o_p0[1]+__472_$o_d[1];
__r_1025[0]=__r_1025[0]-__472_$o_e[0];
__r_1025[1]=__r_1025[1]-__472_$o_e[1];
__r_1024[1] = $value(__r_1025);
var __r_1026 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1026[0]=__472_$o_p0[0]+__472_$o_d[0];
__r_1026[1]=__472_$o_p0[1]+__472_$o_d[1];
__r_1024[2] = $value(__r_1026);
__472_$o_cl = $value(__r_1024);
var __472_$o_cr = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1027 = Object.assign(new Array(3).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
var __r_1028 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1028[0]=__472_$o_p0[0]+__472_$o_d[0];
__r_1028[1]=__472_$o_p0[1]+__472_$o_d[1];
__r_1027[0] = $value(__r_1028);
var __r_1029 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1029[0]=__472_$o_p0[0]+__472_$o_d[0];
__r_1029[1]=__472_$o_p0[1]+__472_$o_d[1];
__r_1029[0]=__r_1029[0]+__472_$o_e[0];
__r_1029[1]=__r_1029[1]+__472_$o_e[1];
__r_1027[1] = $value(__r_1029);
__r_1027[2] = $value(__472_$o_p0);
__472_$o_cr = $value(__r_1027);
var __472_$o_pms = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_1030 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__472_$o_pms = $value(__r_1030);
var __472_$o_pts = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1031 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__472_$o_pts = $value(__r_1031);
var __474_$o_t = 0;
__474_$o_t = $value(0);
case 297:/*loopstart_ZCPIFX*/
var __r_1032 = 0;
__r_1032=Number(__474_$o_t<1);
if (!__r_1032){$goto=299;/*loopend_KHVQLQ*/ continue $$;}
var __475_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1033 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__472_$o_cl);
$args.push(__472_$o_pms);
$args.push($typed_value(__474_$o_t,"f32"));
var __r_1034 = 0;
__r_1034=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_QUADRATIC);
$args.push($typed_value(__r_1034,"i32"));
__r_1033=$assign(__r_1033,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__475_$o_v = $value(__r_1033);
var __r_1035 = 0;
$args.push(__472_$o_pts);
$args.push($typed_value(__475_$o_v,{"con":"vec","elt":["f32",2]}));
__r_1035=$assign(__r_1035,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 298:/*cont_DZYLRG*/
var __r_1036 = 0;
__r_1036=$unwrap(__474_$o_t)+$unwrap(0.05);
__474_$o_t = $value(__r_1036);
$goto=297;/*loopstart_ZCPIFX*/ continue $$;
case 299:/*loopend_KHVQLQ*/
var __477_$o_t = 0;
__477_$o_t = $value(0);
case 300:/*loopstart_JNQBMS*/
var __r_1037 = 0;
__r_1037=Number(__477_$o_t<1);
if (!__r_1037){$goto=302;/*loopend_QNLBHZ*/ continue $$;}
var __478_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1038 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__472_$o_cr);
$args.push(__472_$o_pms);
$args.push($typed_value(__477_$o_t,"f32"));
var __r_1039 = 0;
__r_1039=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_QUADRATIC);
$args.push($typed_value(__r_1039,"i32"));
__r_1038=$assign(__r_1038,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__478_$o_v = $value(__r_1038);
var __r_1040 = 0;
$args.push(__472_$o_pts);
$args.push($typed_value(__478_$o_v,{"con":"vec","elt":["f32",2]}));
__r_1040=$assign(__r_1040,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 301:/*cont_VRUQII*/
var __r_1041 = 0;
__r_1041=$unwrap(__477_$o_t)+$unwrap(0.05);
__477_$o_t = $value(__r_1041);
$goto=300;/*loopstart_JNQBMS*/ continue $$;
case 302:/*loopend_QNLBHZ*/
var __r_1042 = 0;
$args.push(_$o_buds);
$args.push(__472_$o_pts);
__r_1042=$assign(__r_1042,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __480_$o_i = 0;
__480_$o_i = $value(0);
case 303:/*loopstart_OEQIYE*/
var __r_1043 = 0;
__r_1043=Number(__480_$o_i<3);
if (!__r_1043){$goto=305;/*loopend_BKCPQF*/ continue $$;}
var __481_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1044 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1044[0]=__472_$o_p1[0]-__472_$o_p0[0];
__r_1044[1]=__472_$o_p1[1]-__472_$o_p0[1];
__481_$o_d = $value(__r_1044);
var __481_$o_th = 0;
var __r_1045 = 0;
__r_1045=$unwrap(__480_$o_i)-$unwrap(1);
var __r_1046 = 0;
__r_1046 = new $typed_cons.f32([__r_1045])[0]
__r_1046=$unwrap(__r_1046)*$unwrap(0.35);
__481_$o_th = $value(__r_1046);
var __481_$o_costh = 0;
var __r_1047 = 0;
$args.push($typed_value(__481_$o_th,"f32"));
__r_1047=$assign(__r_1047,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__481_$o_costh = $value(__r_1047);
var __481_$o_sinth = 0;
var __r_1048 = 0;
$args.push($typed_value(__481_$o_th,"f32"));
__r_1048=$assign(__r_1048,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__481_$o_sinth = $value(__r_1048);
var __481_$o_x1 = 0;
var __r_1049 = 0;
__r_1049 = $value(__481_$o_d[0]);
__r_1049=$unwrap(__r_1049)*$unwrap(__481_$o_costh);
var __r_1050 = 0;
__r_1050 = $value(__481_$o_d[1]);
__r_1050=$unwrap(__r_1050)*$unwrap(__481_$o_sinth);
__r_1049=$unwrap(__r_1049)-$unwrap(__r_1050);
__481_$o_x1 = $value(__r_1049);
var __481_$o_y1 = 0;
var __r_1051 = 0;
__r_1051 = $value(__481_$o_d[0]);
__r_1051=$unwrap(__r_1051)*$unwrap(__481_$o_sinth);
var __r_1052 = 0;
__r_1052 = $value(__481_$o_d[1]);
__r_1052=$unwrap(__r_1052)*$unwrap(__481_$o_costh);
__r_1051=$unwrap(__r_1051)+$unwrap(__r_1052);
__481_$o_y1 = $value(__r_1051);
var __r_1053 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1053[0] = $value(__481_$o_x1);
__r_1053[1] = $value(__481_$o_y1);
__481_$o_d = $value(__r_1053);
var __481_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1054 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1054[0]=__472_$o_p0[0]+__481_$o_d[0];
__r_1054[1]=__472_$o_p0[1]+__481_$o_d[1];
__481_$o_q1 = $value(__r_1054);
var __481_$o_e = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1055 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1056 = 0;
var __r_1057 = 0;
__r_1057 = $value(__481_$o_d[1]);
__r_1056=$unwrap(0)-$unwrap(__r_1057);
__r_1055[0] = $value(__r_1056);
var __r_1058 = 0;
__r_1058 = $value(__481_$o_d[0]);
__r_1055[1] = $value(__r_1058);
__481_$o_e = $value(__r_1055);
var __r_1059 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__481_$o_e,{"con":"vec","elt":["f32",2]}));
__r_1059=$assign(__r_1059,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__481_$o_e = $value(__r_1059);
var __r_1060 = 0;
$args.push(_$o_flowers);
var __r_1061 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push($typed_value(__472_$o_p0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__481_$o_q1,{"con":"vec","elt":["f32",2]}));
var __r_1062 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1062[0] = 3
__r_1062[1] = 3
var __r_1063 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1063[0]=__481_$o_e[0]*__r_1062[0];
__r_1063[1]=__481_$o_e[1]*__r_1062[1];
$args.push($typed_value(__r_1063,{"con":"vec","elt":["f32",2]}));
__r_1061=$assign(__r_1061,await __func_ovld_make_petal_NZZIRM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
$args.push(__r_1061);
__r_1060=$assign(__r_1060,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 304:/*cont_MKEDEB*/
var __r_1064 = 0;
__r_1064=$unwrap(__480_$o_i)+$unwrap(1);
__480_$o_i = $value(__r_1064);
$goto=303;/*loopstart_OEQIYE*/ continue $$;
case 305:/*loopend_BKCPQF*/
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_paths);
$caps.push(__0_$o_sites);
$caps.push(__180_$o_ends);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_bud03_PBBKNZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __0_$o_paths = $args.pop();
var __0_$o_sites = $args.pop();
var __180_$o_ends = $args.pop();
var _$o_i = $args.pop();
var _$o_flowers = $args.pop();
var _$o_buds = $args.pop();
var __495_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1065 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1065 = $value(__0_$o_paths[_$o_i]);
var __r_1066 = 0;
var __r_1067 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1067 = $value(__0_$o_paths[_$o_i]);
$args.push(__r_1067);
__r_1066=$assign(__r_1066,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_1066=$unwrap(__r_1066)-$unwrap(1);
var __r_1068 = 0;
__r_1068 = $value(__r_1065[__r_1066]);
var __r_1069 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1069 = $value(__0_$o_corner_xs[__r_1068]);
__495_$o_p0 = $value(__r_1069);
var __495_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1070 = 0;
__r_1070 = $value(__180_$o_ends[_$o_i]);
var __r_1071 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1071 = $value(__0_$o_sites[__r_1070]);
__495_$o_p1 = $value(__r_1071);
var __495_$o_th = 0;
var __r_1072 = 0;
var __r_1073 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1073[0]=__495_$o_p1[0]-__495_$o_p0[0];
__r_1073[1]=__495_$o_p1[1]-__495_$o_p0[1];
var __r_1074 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1074[0] = $value(__r_1073[1]);
__r_1074[1] = $value(__r_1073[0]);
var __r_1075 = 0;
__r_1075 = $value(__r_1074[0]);
$args.push($typed_value(__r_1075,"f32"));
var __r_1076 = 0;
__r_1076 = $value(__r_1074[1]);
$args.push($typed_value(__r_1076,"f32"));
__r_1072=$assign(__r_1072,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__495_$o_th = $value(__r_1072);
var __495_$o_costh = 0;
var __r_1077 = 0;
$args.push($typed_value(__495_$o_th,"f32"));
__r_1077=$assign(__r_1077,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__495_$o_costh = $value(__r_1077);
var __495_$o_sinth = 0;
var __r_1078 = 0;
$args.push($typed_value(__495_$o_th,"f32"));
__r_1078=$assign(__r_1078,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__495_$o_sinth = $value(__r_1078);
var __495_$o_n = 0;
__495_$o_n = $value(20);
var __495_$o_ps = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1079 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__495_$o_ps = $value(__r_1079);
var __497_$o_j = 0;
__497_$o_j = $value(0);
case 307:/*loopstart_HPGWHH*/
var __r_1080 = 0;
__r_1080=Number(__497_$o_j<__495_$o_n);
if (!__r_1080){$goto=309;/*loopend_HJJIBQ*/ continue $$;}
var __498_$o_a = 0;
var __r_1081 = 0;
__r_1081 = new $typed_cons.f32([__497_$o_j])[0]
var __r_1082 = 0;
__r_1082 = new $typed_cons.f32([__495_$o_n])[0]
__r_1081=$unwrap(__r_1081)/$unwrap(__r_1082);
__r_1081=$unwrap(__r_1081)*$unwrap(math_$o_PI);
var __r_1083 = 0;
__r_1083 = new $typed_cons.f32([2])[0]
__r_1081=$unwrap(__r_1081)*$unwrap(__r_1083);
__498_$o_a = $value(__r_1081);
var __498_$o_x = 0;
var __r_1084 = 0;
$args.push($typed_value(__498_$o_a,"f32"));
__r_1084=$assign(__r_1084,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1085 = 0;
__r_1085 = new $typed_cons.f32([16])[0]
__r_1084=$unwrap(__r_1084)*$unwrap(__r_1085);
__r_1084=$unwrap(__r_1084)*$unwrap(0.5);
var __r_1086 = 0;
__r_1086 = new $typed_cons.f32([0])[0]
__r_1084=$unwrap(__r_1084)+$unwrap(__r_1086);
__498_$o_x = $value(__r_1084);
var __498_$o_y = 0;
var __r_1087 = 0;
$args.push($typed_value(__498_$o_a,"f32"));
__r_1087=$assign(__r_1087,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1088 = 0;
__r_1088 = new $typed_cons.f32([14])[0]
__r_1087=$unwrap(__r_1087)*$unwrap(__r_1088);
__r_1087=$unwrap(__r_1087)*$unwrap(0.5);
var __r_1089 = 0;
__r_1089 = new $typed_cons.f32([0])[0]
__r_1087=$unwrap(__r_1087)+$unwrap(__r_1089);
__498_$o_y = $value(__r_1087);
var __498_$o_x1 = 0;
var __r_1090 = 0;
__r_1090=$unwrap(__498_$o_x)*$unwrap(__495_$o_costh);
var __r_1091 = 0;
__r_1091=$unwrap(__498_$o_y)*$unwrap(__495_$o_sinth);
__r_1090=$unwrap(__r_1090)-$unwrap(__r_1091);
var __r_1092 = 0;
__r_1092 = $value(__180_$o_ends[_$o_i]);
var __r_1093 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1093 = $value(__0_$o_sites[__r_1092]);
var __r_1094 = 0;
__r_1094 = $value(__r_1093[0]);
__r_1090=$unwrap(__r_1090)+$unwrap(__r_1094);
__498_$o_x1 = $value(__r_1090);
var __498_$o_y1 = 0;
var __r_1095 = 0;
__r_1095=$unwrap(__498_$o_x)*$unwrap(__495_$o_sinth);
var __r_1096 = 0;
__r_1096=$unwrap(__498_$o_y)*$unwrap(__495_$o_costh);
__r_1095=$unwrap(__r_1095)+$unwrap(__r_1096);
var __r_1097 = 0;
__r_1097 = $value(__180_$o_ends[_$o_i]);
var __r_1098 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1098 = $value(__0_$o_sites[__r_1097]);
var __r_1099 = 0;
__r_1099 = $value(__r_1098[1]);
__r_1095=$unwrap(__r_1095)+$unwrap(__r_1099);
__498_$o_y1 = $value(__r_1095);
var __r_1100 = 0;
$args.push(__495_$o_ps);
var __r_1101 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1101[0] = $value(__498_$o_x1);
__r_1101[1] = $value(__498_$o_y1);
$args.push($typed_value(__r_1101,{"con":"vec","elt":["f32",2]}));
__r_1100=$assign(__r_1100,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 308:/*cont_JAKVHA*/
var __r_1102 = 0;
__r_1102=$unwrap(__497_$o_j)+$unwrap(1);
__497_$o_j = $value(__r_1102);
$goto=307;/*loopstart_HPGWHH*/ continue $$;
case 309:/*loopend_HJJIBQ*/
var __r_1103 = 0;
$args.push(_$o_flowers);
$args.push(__495_$o_ps);
__r_1103=$assign(__r_1103,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __495_$o_pms = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_1104 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__495_$o_pms = $value(__r_1104);
var __499_$o_i = 0;
__499_$o_i = $value(0);
case 310:/*loopstart_EYVLBM*/
var __r_1105 = 0;
__r_1105=Number(__499_$o_i<2);
if (!__r_1105){$goto=318;/*loopend_TQRYRA*/ continue $$;}
var __500_$o_pts0 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1106 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__500_$o_pts0 = $value(__r_1106);
var __500_$o_e = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1107 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1107[0]=__495_$o_p1[0]-__495_$o_p0[0];
__r_1107[1]=__495_$o_p1[1]-__495_$o_p0[1];
__500_$o_e = $value(__r_1107);
var __r_1108 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1109 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1110 = 0;
var __r_1111 = 0;
__r_1111 = $value(__500_$o_e[1]);
__r_1110=$unwrap(0)-$unwrap(__r_1111);
__r_1109[0] = $value(__r_1110);
var __r_1112 = 0;
__r_1112 = $value(__500_$o_e[0]);
__r_1109[1] = $value(__r_1112);
$args.push($typed_value(__r_1109,{"con":"vec","elt":["f32",2]}));
__r_1108=$assign(__r_1108,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1113 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1113[0] = 20
__r_1113[1] = 20
__r_1108[0]=__r_1108[0]*__r_1113[0];
__r_1108[1]=__r_1108[1]*__r_1113[1];
__500_$o_e = $value(__r_1108);
var __500_$o_q0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1114 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1115 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1115[0]=__495_$o_p1[0]-__495_$o_p0[0];
__r_1115[1]=__495_$o_p1[1]-__495_$o_p0[1];
$args.push($typed_value(__r_1115,{"con":"vec","elt":["f32",2]}));
__r_1114=$assign(__r_1114,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1116 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1116[0] = 15
__r_1116[1] = 15
__r_1114[0]=__r_1114[0]*__r_1116[0];
__r_1114[1]=__r_1114[1]*__r_1116[1];
var __r_1117 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1117[0]=__495_$o_p1[0]-__r_1114[0];
__r_1117[1]=__495_$o_p1[1]-__r_1114[1];
__500_$o_q0 = $value(__r_1117);
var __500_$o_q3 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1118 = 0;
__r_1118 = new $typed_cons.f32([__499_$o_i])[0]
__r_1118=$unwrap(__r_1118)-$unwrap(0.5);
var __r_1119 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1119[0] = __r_1118
__r_1119[1] = __r_1118
var __r_1120 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1120[0]=__500_$o_e[0]*__r_1119[0];
__r_1120[1]=__500_$o_e[1]*__r_1119[1];
var __r_1121 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1121[0]=__495_$o_p1[0]+__r_1120[0];
__r_1121[1]=__495_$o_p1[1]+__r_1120[1];
__500_$o_q3 = $value(__r_1121);
var __500_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1122 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1122[0] = 0.7
__r_1122[1] = 0.7
var __r_1123 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1123[0]=__500_$o_q0[0]*__r_1122[0];
__r_1123[1]=__500_$o_q0[1]*__r_1122[1];
var __r_1124 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1124[0] = 0.3
__r_1124[1] = 0.3
var __r_1125 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1125[0]=__500_$o_q3[0]*__r_1124[0];
__r_1125[1]=__500_$o_q3[1]*__r_1124[1];
__r_1123[0]=__r_1123[0]+__r_1125[0];
__r_1123[1]=__r_1123[1]+__r_1125[1];
__500_$o_q1 = $value(__r_1123);
var __500_$o_q2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1126 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1126[0] = 0.3
__r_1126[1] = 0.3
var __r_1127 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1127[0]=__500_$o_q0[0]*__r_1126[0];
__r_1127[1]=__500_$o_q0[1]*__r_1126[1];
var __r_1128 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1128[0] = 0.7
__r_1128[1] = 0.7
var __r_1129 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1129[0]=__500_$o_q3[0]*__r_1128[0];
__r_1129[1]=__500_$o_q3[1]*__r_1128[1];
__r_1127[0]=__r_1127[0]+__r_1129[0];
__r_1127[1]=__r_1127[1]+__r_1129[1];
__500_$o_q2 = $value(__r_1127);
var __500_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1130 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1130[0]=__500_$o_q3[0]-__500_$o_q0[0];
__r_1130[1]=__500_$o_q3[1]-__500_$o_q0[1];
__500_$o_d = $value(__r_1130);
var __r_1131 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1132 = 0;
var __r_1133 = 0;
__r_1133 = $value(__500_$o_d[1]);
__r_1132=$unwrap(0)-$unwrap(__r_1133);
__r_1131[0] = $value(__r_1132);
var __r_1134 = 0;
__r_1134 = $value(__500_$o_d[0]);
__r_1131[1] = $value(__r_1134);
var __r_1135 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1135[0] = 0.25
__r_1135[1] = 0.25
__r_1131[0]=__r_1131[0]*__r_1135[0];
__r_1131[1]=__r_1131[1]*__r_1135[1];
__500_$o_d = $value(__r_1131);
var __500_$o_cl = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1136 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_1136[0] = $value(__500_$o_q0);
var __r_1137 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1137[0]=__500_$o_q1[0]-__500_$o_d[0];
__r_1137[1]=__500_$o_q1[1]-__500_$o_d[1];
__r_1136[1] = $value(__r_1137);
var __r_1138 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1138[0] = 0.65
__r_1138[1] = 0.65
var __r_1139 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1139[0]=__500_$o_d[0]*__r_1138[0];
__r_1139[1]=__500_$o_d[1]*__r_1138[1];
var __r_1140 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1140[0]=__500_$o_q2[0]-__r_1139[0];
__r_1140[1]=__500_$o_q2[1]-__r_1139[1];
__r_1136[2] = $value(__r_1140);
__r_1136[3] = $value(__500_$o_q3);
__500_$o_cl = $value(__r_1136);
var __500_$o_cr = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1141 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_1141[0] = $value(__500_$o_q3);
var __r_1142 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1142[0] = 0.65
__r_1142[1] = 0.65
var __r_1143 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1143[0]=__500_$o_d[0]*__r_1142[0];
__r_1143[1]=__500_$o_d[1]*__r_1142[1];
var __r_1144 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1144[0]=__500_$o_q2[0]+__r_1143[0];
__r_1144[1]=__500_$o_q2[1]+__r_1143[1];
__r_1141[1] = $value(__r_1144);
var __r_1145 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1145[0]=__500_$o_q1[0]+__500_$o_d[0];
__r_1145[1]=__500_$o_q1[1]+__500_$o_d[1];
__r_1141[2] = $value(__r_1145);
__r_1141[3] = $value(__500_$o_q0);
__500_$o_cr = $value(__r_1141);
var __503_$o_t = 0;
__503_$o_t = $value(0);
case 311:/*loopstart_NDKOLE*/
var __r_1146 = 0;
__r_1146=Number(__503_$o_t<=1);
if (!__r_1146){$goto=313;/*loopend_WFIJNK*/ continue $$;}
var __504_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1147 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__500_$o_cl);
$args.push(__495_$o_pms);
$args.push($typed_value(__503_$o_t,"f32"));
var __r_1148 = 0;
__r_1148=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_1148,"i32"));
__r_1147=$assign(__r_1147,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__504_$o_v = $value(__r_1147);
var __r_1149 = 0;
$args.push(__500_$o_pts0);
$args.push($typed_value(__504_$o_v,{"con":"vec","elt":["f32",2]}));
__r_1149=$assign(__r_1149,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 312:/*cont_ZJZRZV*/
var __r_1150 = 0;
__r_1150=$unwrap(__503_$o_t)+$unwrap(0.05);
__503_$o_t = $value(__r_1150);
$goto=311;/*loopstart_NDKOLE*/ continue $$;
case 313:/*loopend_WFIJNK*/
var __506_$o_t = 0;
__506_$o_t = $value(0);
case 314:/*loopstart_WUTRAV*/
var __r_1151 = 0;
__r_1151=Number(__506_$o_t<=1);
if (!__r_1151){$goto=316;/*loopend_FWLSAN*/ continue $$;}
var __507_$o_v = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1152 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push(__500_$o_cr);
$args.push(__495_$o_pms);
$args.push($typed_value(__506_$o_t,"f32"));
var __r_1153 = 0;
__r_1153=$unwrap(geom_$o_TYPE_BEZIER)|$unwrap(geom_$o_ORD_CUBIC);
$args.push($typed_value(__r_1153,"i32"));
__r_1152=$assign(__r_1152,await __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_());
__507_$o_v = $value(__r_1152);
var __r_1154 = 0;
$args.push(__500_$o_pts0);
$args.push($typed_value(__507_$o_v,{"con":"vec","elt":["f32",2]}));
__r_1154=$assign(__r_1154,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 315:/*cont_KLZLCO*/
var __r_1155 = 0;
__r_1155=$unwrap(__506_$o_t)+$unwrap(0.05);
__506_$o_t = $value(__r_1155);
$goto=314;/*loopstart_WUTRAV*/ continue $$;
case 316:/*loopend_FWLSAN*/
var __r_1156 = 0;
$args.push(_$o_buds);
$args.push(__500_$o_pts0);
__r_1156=$assign(__r_1156,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 317:/*cont_WHMKMJ*/
var __r_1157 = 0;
__r_1157=$unwrap(__499_$o_i)+$unwrap(1);
__499_$o_i = $value(__r_1157);
$goto=310;/*loopstart_EYVLBM*/ continue $$;
case 318:/*loopend_TQRYRA*/
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_paths);
$caps.push(__0_$o_sites);
$caps.push(__180_$o_ends);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_flower01_IGMSZI_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_cells = $args.pop();
var _$o_si = $args.pop();
var _$o_ci = $args.pop();
var _$o_flowers = $args.pop();
var __706_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1158 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1158 = $value(__0_$o_corner_xs[_$o_ci]);
__706_$o_p0 = $value(__r_1158);
var __706_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1159 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1159 = $value(__0_$o_sites[_$o_si]);
__706_$o_p1 = $value(__r_1159);
var __706_$o_dp = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1160 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1160[0]=__706_$o_p1[0]-__706_$o_p0[0];
__r_1160[1]=__706_$o_p1[1]-__706_$o_p0[1];
__706_$o_dp = $value(__r_1160);
var __706_$o_ep = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1161 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1162 = 0;
var __r_1163 = 0;
__r_1163 = $value(__706_$o_dp[1]);
__r_1162=$unwrap(0)-$unwrap(__r_1163);
__r_1161[0] = $value(__r_1162);
var __r_1164 = 0;
__r_1164 = $value(__706_$o_dp[0]);
__r_1161[1] = $value(__r_1164);
__706_$o_ep = $value(__r_1161);
var __706_$o_q0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1165 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1165[0] = 0.7
__r_1165[1] = 0.7
var __r_1166 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1166[0]=__706_$o_p0[0]*__r_1165[0];
__r_1166[1]=__706_$o_p0[1]*__r_1165[1];
var __r_1167 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1167[0] = 0.3
__r_1167[1] = 0.3
var __r_1168 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1168[0]=__706_$o_p1[0]*__r_1167[0];
__r_1168[1]=__706_$o_p1[1]*__r_1167[1];
__r_1166[0]=__r_1166[0]+__r_1168[0];
__r_1166[1]=__r_1166[1]+__r_1168[1];
__706_$o_q0 = $value(__r_1166);
var __706_$o_n = 0;
__706_$o_n = $value(32);
var __706_$o_vs = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1169 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__706_$o_vs = $value(__r_1169);
var __706_$o_sz = 0;
var __r_1170 = 0;
$args.push($typed_value(__706_$o_dp,{"con":"vec","elt":["f32",2]}));
__r_1170=$assign(__r_1170,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__706_$o_sz = $value(__r_1170);
var __706_$o_ang0 = 0;
var __r_1171 = 0;
var __r_1172 = 0;
__r_1172 = $value(__706_$o_dp[1]);
$args.push($typed_value(__r_1172,"f32"));
var __r_1173 = 0;
__r_1173 = $value(__706_$o_dp[0]);
$args.push($typed_value(__r_1173,"f32"));
__r_1171=$assign(__r_1171,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__706_$o_ang0 = $value(__r_1171);
var __708_$o_i = 0;
__708_$o_i = $value(0);
case 320:/*loopstart_YGDXQQ*/
var __r_1174 = 0;
__r_1174=Number(__708_$o_i<__706_$o_n);
if (!__r_1174){$goto=324;/*loopend_DHELJO*/ continue $$;}
var __709_$o_ang = 0;
var __r_1175 = 0;
__r_1175=$unwrap(__706_$o_n)-$unwrap(1);
var __r_1176 = 0;
__r_1176 = new $typed_cons.f32([__r_1175])[0]
var __r_1177 = 0;
__r_1177 = new $typed_cons.f32([__708_$o_i])[0]
__r_1177=$unwrap(__r_1177)/$unwrap(__r_1176);
__r_1177=$unwrap(__r_1177)-$unwrap(0.5);
__r_1177=$unwrap(__r_1177)*$unwrap(math_$o_PI);
__r_1177=$unwrap(__r_1177)+$unwrap(__706_$o_ang0);
__709_$o_ang = $value(__r_1177);
var __709_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1178 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1179 = 0;
$args.push($typed_value(__709_$o_ang,"f32"));
__r_1179=$assign(__r_1179,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1178[0] = $value(__r_1179);
var __r_1180 = 0;
$args.push($typed_value(__709_$o_ang,"f32"));
__r_1180=$assign(__r_1180,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1178[1] = $value(__r_1180);
var __r_1181 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1181[0]=__706_$o_q0[0]+__r_1178[0];
__r_1181[1]=__706_$o_q0[1]+__r_1178[1];
__709_$o_q1 = $value(__r_1181);
var __709_$o_q2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1182 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__706_$o_q0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__709_$o_q1,{"con":"vec","elt":["f32",2]}));
var __r_1183 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1183 = $value(__0_$o_cells[_$o_si]);
$args.push(__r_1183);
__r_1182=$assign(__r_1182,await __func_ovld_ray_polygon_USXSIQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__709_$o_q2 = $value(__r_1182);
var __709_$o_l = 0;
var __r_1184 = 0;
var __r_1185 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1185[0]=__709_$o_q2[0]-__706_$o_q0[0];
__r_1185[1]=__709_$o_q2[1]-__706_$o_q0[1];
$args.push($typed_value(__r_1185,{"con":"vec","elt":["f32",2]}));
__r_1184=$assign(__r_1184,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__709_$o_l = $value(__r_1184);
var __r_1186 = 0;
__r_1186=$unwrap(__706_$o_sz)*$unwrap(1);
var __r_1187 = 0;
__r_1187=Number(__709_$o_l>__r_1186);
case 321:/*condstart_YPWXRC*/
if (!__r_1187){$goto=322;/*endif_EFYUFN*/ continue $$;}
var __r_1188 = 0;
$args.push(__706_$o_vs);
$args.push($typed_value(__709_$o_q2,{"con":"vec","elt":["f32",2]}));
__r_1188=$assign(__r_1188,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 322:/*endif_EFYUFN*/
case 323:/*cont_AVTGIJ*/
var __r_1189 = 0;
__r_1189=$unwrap(__708_$o_i)+$unwrap(1);
__708_$o_i = $value(__r_1189);
$goto=320;/*loopstart_YGDXQQ*/ continue $$;
case 324:/*loopend_DHELJO*/
var __r_1190 = 0;
$args.push(__706_$o_vs);
__r_1190=$assign(__r_1190,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1191 = 0;
__r_1191=Number(__r_1190>2);
case 325:/*condstart_RNAPPJ*/
if (!__r_1191){$goto=326;/*endif_EAOUMH*/ continue $$;}
var __r_1192 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push(__706_$o_vs);
$args.push(Object.assign(new $typed_cons.i32([1]),{__type:'i32'}));
var __r_1193 = 0;
$args.push(__706_$o_vs);
__r_1193=$assign(__r_1193,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_1193=$unwrap(__r_1193)-$unwrap(1);
$args.push($typed_value(__r_1193,"i32"));
__r_1192=$assign(__r_1192,await __func_ovld_slice_NXQHGA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_i32_$9_i32_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
__706_$o_vs = $value(__r_1192);
case 326:/*endif_EAOUMH*/
var __706_$o_idcs = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_1194 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__706_$o_idcs = $value(__r_1194);
var __717_$o_i = 0;
__717_$o_i = $value(0);
case 327:/*loopstart_OHPERA*/
var __r_1195 = 0;
$args.push(__706_$o_vs);
__r_1195=$assign(__r_1195,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1196 = 0;
__r_1196=Number(__717_$o_i<__r_1195);
if (!__r_1196){$goto=329;/*loopend_VUGCFR*/ continue $$;}
var __r_1197 = 0;
$args.push(__706_$o_idcs);
$args.push($typed_value(__717_$o_i,"i32"));
__r_1197=$assign(__r_1197,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 328:/*cont_NFLJLX*/
var __r_1198 = 0;
__r_1198=$unwrap(__717_$o_i)+$unwrap(1);
__717_$o_i = $value(__r_1198);
$goto=327;/*loopstart_OHPERA*/ continue $$;
case 329:/*loopend_VUGCFR*/
var __r_1199 = null;
$args.push(__706_$o_idcs);
__r_1199=$assign(__r_1199,await __func_ovld_shuffle_NZMNCP_func_$L_tup_$L_list_$L_i32_$7__$7__$9_void_$7_());
var __706_$o_nn = 0;
var __r_1200 = 0;
$args.push(__706_$o_vs);
__r_1200=$assign(__r_1200,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__706_$o_nn = $value(__r_1200);
var __r_1201 = 0;
__r_1201=Number(__706_$o_nn>8);
case 330:/*condstart_BTEOAU*/
if (!__r_1201){$goto=331;/*endif_PFIXAX*/ continue $$;}
__706_$o_nn = $value(8);
case 331:/*endif_PFIXAX*/
var __729_$o_i = 0;
__729_$o_i = $value(0);
case 332:/*loopstart_NWQAJH*/
var __r_1202 = 0;
__r_1202=Number(__729_$o_i<__706_$o_nn);
if (!__r_1202){$goto=344;/*loopend_NRQXCU*/ continue $$;}
var __730_$o_idx = 0;
var __r_1203 = 0;
__r_1203 = $value(__706_$o_idcs[__729_$o_i]);
__730_$o_idx = $value(__r_1203);
var __730_$o_t = 0;
var __r_1204 = 0;
__r_1204 = new $typed_cons.f32([__730_$o_idx])[0]
var __r_1205 = 0;
$args.push(__706_$o_vs);
__r_1205=$assign(__r_1205,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_1205=$unwrap(__r_1205)-$unwrap(1);
var __r_1206 = 0;
__r_1206 = new $typed_cons.f32([__r_1205])[0]
__r_1204=$unwrap(__r_1204)/$unwrap(__r_1206);
__730_$o_t = $value(__r_1204);
var __730_$o_ti = 0;
var __r_1207 = 0;
__r_1207 = new $typed_cons.f32([__729_$o_i])[0]
var __r_1208 = 0;
__r_1208 = new $typed_cons.f32([__706_$o_nn])[0]
__r_1207=$unwrap(__r_1207)/$unwrap(__r_1208);
__730_$o_ti = $value(__r_1207);
var __730_$o_sh = 0;
__730_$o_sh = $value(0.1);
var __r_1209 = 0;
__r_1209=new $typed_cons.i32([$unwrap(__706_$o_nn)/$unwrap(2)])[0];
var __r_1210 = 0;
__r_1210=Number(__729_$o_i>__r_1209);
case 333:/*condstart_ZGFORJ*/
if (!__r_1210){$goto=334;/*endif_RFWTZJ*/ continue $$;}
__730_$o_sh = $value(0.3);
case 334:/*endif_RFWTZJ*/
var __730_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1211 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1211 = $value(__706_$o_vs[__730_$o_idx]);
__r_1211[0]=__r_1211[0]-__706_$o_q0[0];
__r_1211[1]=__r_1211[1]-__706_$o_q0[1];
var __r_1212 = 0;
__r_1212=$unwrap(1)-$unwrap(__730_$o_sh);
var __r_1213 = 0;
__r_1213=$unwrap(__730_$o_ti)*$unwrap(0.1);
__r_1212=$unwrap(__r_1212)-$unwrap(__r_1213);
var __r_1214 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1214[0] = __r_1212
__r_1214[1] = __r_1212
__r_1211[0]=__r_1211[0]*__r_1214[0];
__r_1211[1]=__r_1211[1]*__r_1214[1];
__r_1211[0]=__r_1211[0]+__706_$o_q0[0];
__r_1211[1]=__r_1211[1]+__706_$o_q0[1];
__730_$o_q1 = $value(__r_1211);
var __730_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1215 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1215[0]=__730_$o_q1[0]-__706_$o_q0[0];
__r_1215[1]=__730_$o_q1[1]-__706_$o_q0[1];
__730_$o_d = $value(__r_1215);
var __730_$o_e = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1216 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1217 = 0;
var __r_1218 = 0;
__r_1218 = $value(__730_$o_d[1]);
__r_1217=$unwrap(0)-$unwrap(__r_1218);
__r_1216[0] = $value(__r_1217);
var __r_1219 = 0;
__r_1219 = $value(__730_$o_d[0]);
__r_1216[1] = $value(__r_1219);
__730_$o_e = $value(__r_1216);
var __r_1220 = 0;
__r_1220=new $typed_cons.i32([$unwrap(__706_$o_nn)/$unwrap(2)])[0];
var __r_1221 = 0;
__r_1221=Number(__729_$o_i==__r_1220);
case 335:/*condstart_YUGLNV*/
if (!__r_1221){$goto=342;/*endif_YUXQBL*/ continue $$;}
var __736_$o_j = 0;
__736_$o_j = $value(0);
case 336:/*loopstart_SYPBXX*/
var __r_1222 = 0;
__r_1222=Number(__736_$o_j<8);
if (!__r_1222){$goto=341;/*loopend_GXAETM*/ continue $$;}
var __737_$o_a1 = 0;
var __r_1223 = 0;
$args.push(Object.assign(new $typed_cons.f32([0]),{__type:'f32'}));
var __r_1224 = 0;
__r_1224 = new $typed_cons.f32([2])[0]
var __r_1225 = 0;
__r_1225=$unwrap(math_$o_PI)*$unwrap(__r_1224);
$args.push($typed_value(__r_1225,"f32"));
__r_1223=$assign(__r_1223,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__737_$o_a1 = $value(__r_1223);
var __737_$o_r1 = 0;
var __r_1226 = 0;
$args.push(Object.assign(new $typed_cons.f32([0]),{__type:'f32'}));
var __r_1227 = 0;
__r_1227=$unwrap(__706_$o_sz)*$unwrap(0.4);
$args.push($typed_value(__r_1227,"f32"));
__r_1226=$assign(__r_1226,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__737_$o_r1 = $value(__r_1226);
var __737_$o_og = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1228 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1229 = 0;
$args.push($typed_value(__737_$o_a1,"f32"));
__r_1229=$assign(__r_1229,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1229=$unwrap(__r_1229)*$unwrap(__737_$o_r1);
__r_1228[0] = $value(__r_1229);
var __r_1230 = 0;
$args.push($typed_value(__737_$o_a1,"f32"));
__r_1230=$assign(__r_1230,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1230=$unwrap(__r_1230)*$unwrap(__737_$o_r1);
__r_1228[1] = $value(__r_1230);
var __r_1231 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1231[0]=__706_$o_p1[0]+__r_1228[0];
__r_1231[1]=__706_$o_p1[1]+__r_1228[1];
__737_$o_og = $value(__r_1231);
var __737_$o_a2 = 0;
var __r_1232 = 0;
var __r_1233 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1233[0] = $value(__737_$o_og[1]);
__r_1233[1] = $value(__737_$o_og[0]);
var __r_1234 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1234[0] = $value(__706_$o_q0[1]);
__r_1234[1] = $value(__706_$o_q0[0]);
__r_1233[0]=__r_1233[0]-__r_1234[0];
__r_1233[1]=__r_1233[1]-__r_1234[1];
var __r_1235 = 0;
__r_1235 = $value(__r_1233[0]);
$args.push($typed_value(__r_1235,"f32"));
var __r_1236 = 0;
__r_1236 = $value(__r_1233[1]);
$args.push($typed_value(__r_1236,"f32"));
__r_1232=$assign(__r_1232,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__737_$o_a2 = $value(__r_1232);
var __737_$o_pts = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1237 = Object.assign(new Array(1).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_1237[0] = $value(__706_$o_q0);
__737_$o_pts = $value(__r_1237);
var __738_$o_k = 0;
__738_$o_k = $value(0);
case 337:/*loopstart_DBXGVF*/
var __r_1238 = 0;
__r_1238=Number(__738_$o_k<10);
if (!__r_1238){$goto=339;/*loopend_PZPEMM*/ continue $$;}
var __739_$o_a = 0;
var __r_1239 = 0;
__r_1239 = new $typed_cons.f32([__738_$o_k])[0]
__r_1239=$unwrap(__r_1239)/$unwrap(9);
__r_1239=$unwrap(__r_1239)-$unwrap(0.5);
__r_1239=$unwrap(__r_1239)*$unwrap(math_$o_PI);
__r_1239=$unwrap(__r_1239)*$unwrap(1.6);
__r_1239=$unwrap(__r_1239)+$unwrap(__737_$o_a2);
__739_$o_a = $value(__r_1239);
var __r_1240 = 0;
$args.push(__737_$o_pts);
var __r_1241 = Object.assign(new $typed_cons.f32(2*1),{__type:{"con":"vec","elt":["f32",2,1]}});
var __r_1242 = 0;
$args.push($typed_value(__739_$o_a,"f32"));
__r_1242=$assign(__r_1242,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1243 = 0;
__r_1243 = new $typed_cons.f32([3])[0]
__r_1242=$unwrap(__r_1242)*$unwrap(__r_1243);
__r_1241[0] = $value(__r_1242);
var __r_1244 = 0;
$args.push($typed_value(__739_$o_a,"f32"));
__r_1244=$assign(__r_1244,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1245 = 0;
__r_1245 = new $typed_cons.f32([3])[0]
__r_1244=$unwrap(__r_1244)*$unwrap(__r_1245);
__r_1241[1] = $value(__r_1244);
var __r_1246 = Object.assign(new $typed_cons.f32(2*1),{__type:{"con":"vec","elt":["f32",2,1]}});
__r_1246[0] = __737_$o_og[0]??0;
__r_1246[1] = __737_$o_og[1]??0;
__r_1241[0]=__r_1241[0]+__r_1246[0];
__r_1241[1]=__r_1241[1]+__r_1246[1];
var __r_1247 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1247[0] = __r_1241[0]??0;
__r_1247[1] = __r_1241[1]??0;
$args.push($typed_value(__r_1247,{"con":"vec","elt":["f32",2]}));
__r_1240=$assign(__r_1240,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 338:/*cont_CUPPEP*/
var __r_1248 = 0;
__r_1248=$unwrap(__738_$o_k)+$unwrap(1);
__738_$o_k = $value(__r_1248);
$goto=337;/*loopstart_DBXGVF*/ continue $$;
case 339:/*loopend_PZPEMM*/
var __r_1249 = 0;
$args.push(__737_$o_pts);
$args.push($typed_value(__706_$o_q0,{"con":"vec","elt":["f32",2]}));
__r_1249=$assign(__r_1249,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_1250 = 0;
$args.push(_$o_flowers);
$args.push(__737_$o_pts);
__r_1250=$assign(__r_1250,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 340:/*cont_PKIBGP*/
var __r_1251 = 0;
__r_1251=$unwrap(__736_$o_j)+$unwrap(1);
__736_$o_j = $value(__r_1251);
$goto=336;/*loopstart_SYPBXX*/ continue $$;
case 341:/*loopend_GXAETM*/
case 342:/*endif_YUXQBL*/
var __730_$o_w = 0;
var __r_1252 = 0;
var __r_1253 = 0;
__r_1253=$unwrap(__730_$o_t)*$unwrap(math_$o_PI);
$args.push($typed_value(__r_1253,"f32"));
__r_1252=$assign(__r_1252,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__730_$o_w = $value(__r_1252);
var __r_1254 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__730_$o_e,{"con":"vec","elt":["f32",2]}));
__r_1254=$assign(__r_1254,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1255 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1255[0] = __706_$o_sz
__r_1255[1] = __706_$o_sz
__r_1254[0]=__r_1254[0]*__r_1255[0];
__r_1254[1]=__r_1254[1]*__r_1255[1];
var __r_1256 = 0;
__r_1256=$unwrap(__730_$o_w)*$unwrap(0.1);
__r_1256=$unwrap(__r_1256)+$unwrap(0.2);
var __r_1257 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1257[0] = __r_1256
__r_1257[1] = __r_1256
__r_1254[0]=__r_1254[0]*__r_1257[0];
__r_1254[1]=__r_1254[1]*__r_1257[1];
__730_$o_e = $value(__r_1254);
var __r_1258 = 0;
$args.push(_$o_flowers);
var __r_1259 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push($typed_value(__706_$o_q0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__730_$o_q1,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__730_$o_e,{"con":"vec","elt":["f32",2]}));
__r_1259=$assign(__r_1259,await __func_ovld_make_petal_NZZIRM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
$args.push(__r_1259);
__r_1258=$assign(__r_1258,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 343:/*cont_RTYVDV*/
var __r_1260 = 0;
__r_1260=$unwrap(__729_$o_i)+$unwrap(1);
__729_$o_i = $value(__r_1260);
$goto=332;/*loopstart_NWQAJH*/ continue $$;
case 344:/*loopend_NRQXCU*/
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_flower02_VAZKFZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_cells = $args.pop();
var _$o_si = $args.pop();
var _$o_ci = $args.pop();
var _$o_flowers = $args.pop();
var __744_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1261 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1261 = $value(__0_$o_corner_xs[_$o_ci]);
__744_$o_p0 = $value(__r_1261);
var __744_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1262 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1262 = $value(__0_$o_sites[_$o_si]);
__744_$o_p1 = $value(__r_1262);
var __744_$o_dp = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1263 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1263[0]=__744_$o_p1[0]-__744_$o_p0[0];
__r_1263[1]=__744_$o_p1[1]-__744_$o_p0[1];
__744_$o_dp = $value(__r_1263);
var __744_$o_ep = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1264 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1265 = 0;
var __r_1266 = 0;
__r_1266 = $value(__744_$o_dp[1]);
__r_1265=$unwrap(0)-$unwrap(__r_1266);
__r_1264[0] = $value(__r_1265);
var __r_1267 = 0;
__r_1267 = $value(__744_$o_dp[0]);
__r_1264[1] = $value(__r_1267);
__744_$o_ep = $value(__r_1264);
var __744_$o_q0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1268 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1268[0] = 0.1
__r_1268[1] = 0.1
var __r_1269 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1269[0]=__744_$o_p0[0]*__r_1268[0];
__r_1269[1]=__744_$o_p0[1]*__r_1268[1];
var __r_1270 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1270[0] = 0.9
__r_1270[1] = 0.9
var __r_1271 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1271[0]=__744_$o_p1[0]*__r_1270[0];
__r_1271[1]=__744_$o_p1[1]*__r_1270[1];
__r_1269[0]=__r_1269[0]+__r_1271[0];
__r_1269[1]=__r_1269[1]+__r_1271[1];
__744_$o_q0 = $value(__r_1269);
var __744_$o_n = 0;
__744_$o_n = $value(12);
var __744_$o_vs = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1272 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__744_$o_vs = $value(__r_1272);
var __744_$o_sz = 0;
var __r_1273 = 0;
$args.push($typed_value(__744_$o_dp,{"con":"vec","elt":["f32",2]}));
__r_1273=$assign(__r_1273,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__744_$o_sz = $value(__r_1273);
var __744_$o_ang0 = 0;
var __r_1274 = 0;
var __r_1275 = 0;
__r_1275 = $value(__744_$o_dp[1]);
$args.push($typed_value(__r_1275,"f32"));
var __r_1276 = 0;
__r_1276 = $value(__744_$o_dp[0]);
$args.push($typed_value(__r_1276,"f32"));
__r_1274=$assign(__r_1274,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__744_$o_ang0 = $value(__r_1274);
var __744_$o_avgl = 0;
__744_$o_avgl = $value(0);
var __746_$o_i = 0;
__746_$o_i = $value(0);
case 346:/*loopstart_GSKNXA*/
var __r_1277 = 0;
__r_1277=Number(__746_$o_i<__744_$o_n);
if (!__r_1277){$goto=350;/*loopend_NSVXAB*/ continue $$;}
var __747_$o_ang = 0;
var __r_1278 = 0;
__r_1278=$unwrap(__744_$o_n)-$unwrap(1);
var __r_1279 = 0;
__r_1279 = new $typed_cons.f32([__r_1278])[0]
var __r_1280 = 0;
__r_1280 = new $typed_cons.f32([__746_$o_i])[0]
__r_1280=$unwrap(__r_1280)/$unwrap(__r_1279);
var __r_1281 = 0;
__r_1281 = new $typed_cons.f32([2])[0]
var __r_1282 = 0;
__r_1282=$unwrap(math_$o_PI)*$unwrap(__r_1281);
__r_1280=$unwrap(__r_1280)*$unwrap(__r_1282);
var __r_1283 = 0;
var __r_1284 = 0;
__r_1284=$unwrap(0)-$unwrap(0.05);
$args.push($typed_value(__r_1284,"f32"));
$args.push(Object.assign(new $typed_cons.f32([0.05]),{__type:'f32'}));
__r_1283=$assign(__r_1283,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__r_1280=$unwrap(__r_1280)+$unwrap(__r_1283);
__747_$o_ang = $value(__r_1280);
var __747_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1285 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1286 = 0;
$args.push($typed_value(__747_$o_ang,"f32"));
__r_1286=$assign(__r_1286,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1285[0] = $value(__r_1286);
var __r_1287 = 0;
$args.push($typed_value(__747_$o_ang,"f32"));
__r_1287=$assign(__r_1287,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1285[1] = $value(__r_1287);
var __r_1288 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1288[0]=__744_$o_q0[0]+__r_1285[0];
__r_1288[1]=__744_$o_q0[1]+__r_1285[1];
__747_$o_q1 = $value(__r_1288);
var __747_$o_q2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1289 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__744_$o_q0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__747_$o_q1,{"con":"vec","elt":["f32",2]}));
var __r_1290 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1290 = $value(__0_$o_cells[_$o_si]);
$args.push(__r_1290);
__r_1289=$assign(__r_1289,await __func_ovld_ray_polygon_USXSIQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__747_$o_q2 = $value(__r_1289);
var __747_$o_l = 0;
var __r_1291 = 0;
var __r_1292 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1292[0]=__747_$o_q2[0]-__744_$o_q0[0];
__r_1292[1]=__747_$o_q2[1]-__744_$o_q0[1];
$args.push($typed_value(__r_1292,{"con":"vec","elt":["f32",2]}));
__r_1291=$assign(__r_1291,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__747_$o_l = $value(__r_1291);
var __r_1293 = 0;
__r_1293=$unwrap(__744_$o_sz)*$unwrap(0.5);
var __r_1294 = 0;
__r_1294=Number(__747_$o_l>__r_1293);
case 347:/*condstart_QMYVKK*/
if (!__r_1294){$goto=348;/*endif_OBCLEW*/ continue $$;}
var __r_1295 = 0;
__r_1295=$unwrap(__744_$o_avgl)+$unwrap(__747_$o_l);
__744_$o_avgl = $value(__r_1295);
var __r_1296 = 0;
$args.push(__744_$o_vs);
$args.push($typed_value(__747_$o_q2,{"con":"vec","elt":["f32",2]}));
__r_1296=$assign(__r_1296,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 348:/*endif_OBCLEW*/
case 349:/*cont_OQQHIB*/
var __r_1297 = 0;
__r_1297=$unwrap(__746_$o_i)+$unwrap(1);
__746_$o_i = $value(__r_1297);
$goto=346;/*loopstart_GSKNXA*/ continue $$;
case 350:/*loopend_NSVXAB*/
var __r_1298 = 0;
$args.push(__744_$o_vs);
__r_1298=$assign(__r_1298,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1299 = 0;
__r_1299 = new $typed_cons.f32([__r_1298])[0]
var __r_1300 = 0;
__r_1300=$unwrap(__744_$o_avgl)/$unwrap(__r_1299);
__744_$o_avgl = $value(__r_1300);
var __744_$o_idcs = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_1301 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__744_$o_idcs = $value(__r_1301);
var __752_$o_i = 0;
__752_$o_i = $value(0);
case 351:/*loopstart_XYUHKN*/
var __r_1302 = 0;
$args.push(__744_$o_vs);
__r_1302=$assign(__r_1302,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1303 = 0;
__r_1303=Number(__752_$o_i<__r_1302);
if (!__r_1303){$goto=353;/*loopend_IPRHYK*/ continue $$;}
var __r_1304 = 0;
$args.push(__744_$o_idcs);
$args.push($typed_value(__752_$o_i,"i32"));
__r_1304=$assign(__r_1304,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 352:/*cont_QTCFNZ*/
var __r_1305 = 0;
__r_1305=$unwrap(__752_$o_i)+$unwrap(1);
__752_$o_i = $value(__r_1305);
$goto=351;/*loopstart_XYUHKN*/ continue $$;
case 353:/*loopend_IPRHYK*/
var __r_1306 = null;
$args.push(__744_$o_idcs);
__r_1306=$assign(__r_1306,await __func_ovld_shuffle_NZMNCP_func_$L_tup_$L_list_$L_i32_$7__$7__$9_void_$7_());
var __744_$o_nn = 0;
var __r_1307 = 0;
$args.push(__744_$o_vs);
__r_1307=$assign(__r_1307,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__744_$o_nn = $value(__r_1307);
var __r_1308 = 0;
__r_1308=Number(__744_$o_nn>12);
case 354:/*condstart_FYQOED*/
if (!__r_1308){$goto=355;/*endif_UKIOZM*/ continue $$;}
__744_$o_nn = $value(12);
case 355:/*endif_UKIOZM*/
var __756_$o_i = 0;
__756_$o_i = $value(0);
case 356:/*loopstart_IALJSS*/
var __r_1309 = 0;
__r_1309=Number(__756_$o_i<__744_$o_nn);
if (!__r_1309){$goto=366;/*loopend_UOZBIF*/ continue $$;}
var __757_$o_idx = 0;
var __r_1310 = 0;
__r_1310 = $value(__744_$o_idcs[__756_$o_i]);
__757_$o_idx = $value(__r_1310);
var __757_$o_t = 0;
var __r_1311 = 0;
__r_1311 = new $typed_cons.f32([__757_$o_idx])[0]
var __r_1312 = 0;
$args.push(__744_$o_vs);
__r_1312=$assign(__r_1312,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_1312=$unwrap(__r_1312)-$unwrap(1);
var __r_1313 = 0;
__r_1313 = new $typed_cons.f32([__r_1312])[0]
__r_1311=$unwrap(__r_1311)/$unwrap(__r_1313);
__757_$o_t = $value(__r_1311);
var __757_$o_ti = 0;
var __r_1314 = 0;
__r_1314 = new $typed_cons.f32([__756_$o_i])[0]
var __r_1315 = 0;
__r_1315 = new $typed_cons.f32([__744_$o_nn])[0]
__r_1314=$unwrap(__r_1314)/$unwrap(__r_1315);
__757_$o_ti = $value(__r_1314);
var __757_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1316 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1316 = $value(__744_$o_vs[__757_$o_idx]);
__r_1316[0]=__r_1316[0]-__744_$o_q0[0];
__r_1316[1]=__r_1316[1]-__744_$o_q0[1];
__757_$o_q1 = $value(__r_1316);
var __757_$o_l = 0;
var __r_1317 = 0;
$args.push($typed_value(__757_$o_q1,{"con":"vec","elt":["f32",2]}));
__r_1317=$assign(__r_1317,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__r_1317=$unwrap(__r_1317)*$unwrap(0.5);
var __r_1318 = 0;
__r_1318=$unwrap(__744_$o_avgl)*$unwrap(0.3);
__r_1317=$unwrap(__r_1317)+$unwrap(__r_1318);
__757_$o_l = $value(__r_1317);
var __r_1319 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__757_$o_q1,{"con":"vec","elt":["f32",2]}));
__r_1319=$assign(__r_1319,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1320 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1320[0] = __757_$o_l
__r_1320[1] = __757_$o_l
__r_1319[0]=__r_1319[0]*__r_1320[0];
__r_1319[1]=__r_1319[1]*__r_1320[1];
__r_1319[0]=__r_1319[0]+__744_$o_q0[0];
__r_1319[1]=__r_1319[1]+__744_$o_q0[1];
__757_$o_q1 = $value(__r_1319);
var __757_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1321 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1321[0]=__757_$o_q1[0]-__744_$o_q0[0];
__r_1321[1]=__757_$o_q1[1]-__744_$o_q0[1];
__757_$o_d = $value(__r_1321);
var __757_$o_e = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1322 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1323 = 0;
var __r_1324 = 0;
__r_1324 = $value(__757_$o_d[1]);
__r_1323=$unwrap(0)-$unwrap(__r_1324);
__r_1322[0] = $value(__r_1323);
var __r_1325 = 0;
__r_1325 = $value(__757_$o_d[0]);
__r_1322[1] = $value(__r_1325);
__757_$o_e = $value(__r_1322);
var __r_1326 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__757_$o_e,{"con":"vec","elt":["f32",2]}));
__r_1326=$assign(__r_1326,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1327 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1327[0] = __744_$o_avgl
__r_1327[1] = __744_$o_avgl
__r_1326[0]=__r_1326[0]*__r_1327[0];
__r_1326[1]=__r_1326[1]*__r_1327[1];
var __r_1328 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1328[0] = 0.13
__r_1328[1] = 0.13
__r_1326[0]=__r_1326[0]*__r_1328[0];
__r_1326[1]=__r_1326[1]*__r_1328[1];
__757_$o_e = $value(__r_1326);
var __r_1329 = 0;
$args.push(_$o_flowers);
var __r_1330 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push($typed_value(__744_$o_q0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__757_$o_q1,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__757_$o_e,{"con":"vec","elt":["f32",2]}));
__r_1330=$assign(__r_1330,await __func_ovld_make_petal_NZZIRM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
$args.push(__r_1330);
__r_1329=$assign(__r_1329,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1331 = 0;
__r_1331=$unwrap(__744_$o_nn)-$unwrap(1);
var __r_1332 = 0;
__r_1332=Number(__756_$o_i==__r_1331);
case 357:/*condstart_EVRTGN*/
if (!__r_1332){$goto=364;/*endif_VQMFXG*/ continue $$;}
var __764_$o_j = 0;
__764_$o_j = $value(0);
case 358:/*loopstart_NFQNCV*/
var __r_1333 = 0;
__r_1333=Number(__764_$o_j<12);
if (!__r_1333){$goto=363;/*loopend_SRYPKE*/ continue $$;}
var __765_$o_a1 = 0;
var __r_1334 = 0;
$args.push(Object.assign(new $typed_cons.f32([0]),{__type:'f32'}));
var __r_1335 = 0;
__r_1335 = new $typed_cons.f32([2])[0]
var __r_1336 = 0;
__r_1336=$unwrap(math_$o_PI)*$unwrap(__r_1335);
$args.push($typed_value(__r_1336,"f32"));
__r_1334=$assign(__r_1334,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__765_$o_a1 = $value(__r_1334);
var __765_$o_r1 = 0;
var __r_1337 = 0;
$args.push(Object.assign(new $typed_cons.f32([0]),{__type:'f32'}));
var __r_1338 = 0;
__r_1338=$unwrap(__744_$o_sz)*$unwrap(0.3);
$args.push($typed_value(__r_1338,"f32"));
__r_1337=$assign(__r_1337,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__765_$o_r1 = $value(__r_1337);
var __765_$o_og = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1339 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1340 = 0;
$args.push($typed_value(__765_$o_a1,"f32"));
__r_1340=$assign(__r_1340,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1340=$unwrap(__r_1340)*$unwrap(__765_$o_r1);
__r_1339[0] = $value(__r_1340);
var __r_1341 = 0;
$args.push($typed_value(__765_$o_a1,"f32"));
__r_1341=$assign(__r_1341,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1341=$unwrap(__r_1341)*$unwrap(__765_$o_r1);
__r_1339[1] = $value(__r_1341);
var __r_1342 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1342[0]=__744_$o_p1[0]+__r_1339[0];
__r_1342[1]=__744_$o_p1[1]+__r_1339[1];
__765_$o_og = $value(__r_1342);
var __765_$o_a2 = 0;
var __r_1343 = 0;
var __r_1344 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1344[0] = $value(__765_$o_og[1]);
__r_1344[1] = $value(__765_$o_og[0]);
var __r_1345 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1345[0] = $value(__744_$o_q0[1]);
__r_1345[1] = $value(__744_$o_q0[0]);
__r_1344[0]=__r_1344[0]-__r_1345[0];
__r_1344[1]=__r_1344[1]-__r_1345[1];
var __r_1346 = 0;
__r_1346 = $value(__r_1344[0]);
$args.push($typed_value(__r_1346,"f32"));
var __r_1347 = 0;
__r_1347 = $value(__r_1344[1]);
$args.push($typed_value(__r_1347,"f32"));
__r_1343=$assign(__r_1343,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__765_$o_a2 = $value(__r_1343);
var __765_$o_pts = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1348 = Object.assign(new Array(1).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_1348[0] = $value(__744_$o_q0);
__765_$o_pts = $value(__r_1348);
var __766_$o_k = 0;
__766_$o_k = $value(0);
case 359:/*loopstart_KUYCIX*/
var __r_1349 = 0;
__r_1349=Number(__766_$o_k<10);
if (!__r_1349){$goto=361;/*loopend_STQZTX*/ continue $$;}
var __767_$o_a = 0;
var __r_1350 = 0;
__r_1350 = new $typed_cons.f32([__766_$o_k])[0]
__r_1350=$unwrap(__r_1350)/$unwrap(9);
__r_1350=$unwrap(__r_1350)-$unwrap(0.5);
__r_1350=$unwrap(__r_1350)*$unwrap(math_$o_PI);
__r_1350=$unwrap(__r_1350)*$unwrap(1.6);
__r_1350=$unwrap(__r_1350)+$unwrap(__765_$o_a2);
__767_$o_a = $value(__r_1350);
var __r_1351 = 0;
$args.push(__765_$o_pts);
var __r_1352 = Object.assign(new $typed_cons.f32(2*1),{__type:{"con":"vec","elt":["f32",2,1]}});
var __r_1353 = 0;
$args.push($typed_value(__767_$o_a,"f32"));
__r_1353=$assign(__r_1353,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1354 = 0;
__r_1354 = new $typed_cons.f32([3])[0]
__r_1353=$unwrap(__r_1353)*$unwrap(__r_1354);
__r_1352[0] = $value(__r_1353);
var __r_1355 = 0;
$args.push($typed_value(__767_$o_a,"f32"));
__r_1355=$assign(__r_1355,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1356 = 0;
__r_1356 = new $typed_cons.f32([3])[0]
__r_1355=$unwrap(__r_1355)*$unwrap(__r_1356);
__r_1352[1] = $value(__r_1355);
var __r_1357 = Object.assign(new $typed_cons.f32(2*1),{__type:{"con":"vec","elt":["f32",2,1]}});
__r_1357[0] = __765_$o_og[0]??0;
__r_1357[1] = __765_$o_og[1]??0;
__r_1352[0]=__r_1352[0]+__r_1357[0];
__r_1352[1]=__r_1352[1]+__r_1357[1];
var __r_1358 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1358[0] = __r_1352[0]??0;
__r_1358[1] = __r_1352[1]??0;
$args.push($typed_value(__r_1358,{"con":"vec","elt":["f32",2]}));
__r_1351=$assign(__r_1351,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 360:/*cont_NZBWEM*/
var __r_1359 = 0;
__r_1359=$unwrap(__766_$o_k)+$unwrap(1);
__766_$o_k = $value(__r_1359);
$goto=359;/*loopstart_KUYCIX*/ continue $$;
case 361:/*loopend_STQZTX*/
var __r_1360 = 0;
$args.push(__765_$o_pts);
$args.push($typed_value(__744_$o_q0,{"con":"vec","elt":["f32",2]}));
__r_1360=$assign(__r_1360,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_1361 = 0;
$args.push(_$o_flowers);
$args.push(__765_$o_pts);
__r_1361=$assign(__r_1361,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 362:/*cont_LKKMUO*/
var __r_1362 = 0;
__r_1362=$unwrap(__764_$o_j)+$unwrap(1);
__764_$o_j = $value(__r_1362);
$goto=358;/*loopstart_NFQNCV*/ continue $$;
case 363:/*loopend_SRYPKE*/
case 364:/*endif_VQMFXG*/
case 365:/*cont_UPABKZ*/
var __r_1363 = 0;
__r_1363=$unwrap(__756_$o_i)+$unwrap(1);
__756_$o_i = $value(__r_1363);
$goto=356;/*loopstart_IALJSS*/ continue $$;
case 366:/*loopend_UOZBIF*/
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
return;
default:$goto=null;break;}}}
async function __func_ovld_make_flower03_VFVGUL_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_corner_xs = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_cells = $args.pop();
var _$o_si = $args.pop();
var _$o_ci = $args.pop();
var _$o_flowers = $args.pop();
var __771_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1364 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1364 = $value(__0_$o_corner_xs[_$o_ci]);
__771_$o_p0 = $value(__r_1364);
var __771_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1365 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1365 = $value(__0_$o_sites[_$o_si]);
__771_$o_p1 = $value(__r_1365);
var __771_$o_dp = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1366 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1366[0]=__771_$o_p1[0]-__771_$o_p0[0];
__r_1366[1]=__771_$o_p1[1]-__771_$o_p0[1];
__771_$o_dp = $value(__r_1366);
var __771_$o_ep = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1367 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1368 = 0;
var __r_1369 = 0;
__r_1369 = $value(__771_$o_dp[1]);
__r_1368=$unwrap(0)-$unwrap(__r_1369);
__r_1367[0] = $value(__r_1368);
var __r_1370 = 0;
__r_1370 = $value(__771_$o_dp[0]);
__r_1367[1] = $value(__r_1370);
__771_$o_ep = $value(__r_1367);
var __771_$o_q0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1371 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1371[0] = 0.1
__r_1371[1] = 0.1
var __r_1372 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1372[0]=__771_$o_p0[0]*__r_1371[0];
__r_1372[1]=__771_$o_p0[1]*__r_1371[1];
var __r_1373 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1373[0] = 0.9
__r_1373[1] = 0.9
var __r_1374 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1374[0]=__771_$o_p1[0]*__r_1373[0];
__r_1374[1]=__771_$o_p1[1]*__r_1373[1];
__r_1372[0]=__r_1372[0]+__r_1374[0];
__r_1372[1]=__r_1372[1]+__r_1374[1];
__771_$o_q0 = $value(__r_1372);
var __771_$o_n = 0;
__771_$o_n = $value(12);
var __771_$o_vs = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1375 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__771_$o_vs = $value(__r_1375);
var __771_$o_sz = 0;
var __r_1376 = 0;
$args.push($typed_value(__771_$o_dp,{"con":"vec","elt":["f32",2]}));
__r_1376=$assign(__r_1376,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__771_$o_sz = $value(__r_1376);
var __771_$o_ang0 = 0;
var __r_1377 = 0;
var __r_1378 = 0;
__r_1378 = $value(__771_$o_dp[1]);
$args.push($typed_value(__r_1378,"f32"));
var __r_1379 = 0;
__r_1379 = $value(__771_$o_dp[0]);
$args.push($typed_value(__r_1379,"f32"));
__r_1377=$assign(__r_1377,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__771_$o_ang0 = $value(__r_1377);
var __771_$o_avgl = 0;
__771_$o_avgl = $value(0);
var __773_$o_i = 0;
__773_$o_i = $value(0);
case 368:/*loopstart_QNQIQM*/
var __r_1380 = 0;
__r_1380=Number(__773_$o_i<__771_$o_n);
if (!__r_1380){$goto=372;/*loopend_YPRBPW*/ continue $$;}
var __774_$o_ang = 0;
var __r_1381 = 0;
__r_1381=$unwrap(__771_$o_n)-$unwrap(1);
var __r_1382 = 0;
__r_1382 = new $typed_cons.f32([__r_1381])[0]
var __r_1383 = 0;
__r_1383 = new $typed_cons.f32([__773_$o_i])[0]
__r_1383=$unwrap(__r_1383)/$unwrap(__r_1382);
var __r_1384 = 0;
__r_1384 = new $typed_cons.f32([2])[0]
var __r_1385 = 0;
__r_1385=$unwrap(math_$o_PI)*$unwrap(__r_1384);
__r_1383=$unwrap(__r_1383)*$unwrap(__r_1385);
var __r_1386 = 0;
var __r_1387 = 0;
__r_1387=$unwrap(0)-$unwrap(0.05);
$args.push($typed_value(__r_1387,"f32"));
$args.push(Object.assign(new $typed_cons.f32([0.05]),{__type:'f32'}));
__r_1386=$assign(__r_1386,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__r_1383=$unwrap(__r_1383)+$unwrap(__r_1386);
__774_$o_ang = $value(__r_1383);
var __774_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1388 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1389 = 0;
$args.push($typed_value(__774_$o_ang,"f32"));
__r_1389=$assign(__r_1389,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1388[0] = $value(__r_1389);
var __r_1390 = 0;
$args.push($typed_value(__774_$o_ang,"f32"));
__r_1390=$assign(__r_1390,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1388[1] = $value(__r_1390);
var __r_1391 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1391[0]=__771_$o_q0[0]+__r_1388[0];
__r_1391[1]=__771_$o_q0[1]+__r_1388[1];
__774_$o_q1 = $value(__r_1391);
var __774_$o_q2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1392 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__771_$o_q0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__774_$o_q1,{"con":"vec","elt":["f32",2]}));
var __r_1393 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1393 = $value(__0_$o_cells[_$o_si]);
$args.push(__r_1393);
__r_1392=$assign(__r_1392,await __func_ovld_ray_polygon_USXSIQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__774_$o_q2 = $value(__r_1392);
var __774_$o_l = 0;
var __r_1394 = 0;
var __r_1395 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1395[0]=__774_$o_q2[0]-__771_$o_q0[0];
__r_1395[1]=__774_$o_q2[1]-__771_$o_q0[1];
$args.push($typed_value(__r_1395,{"con":"vec","elt":["f32",2]}));
__r_1394=$assign(__r_1394,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__774_$o_l = $value(__r_1394);
var __r_1396 = 0;
__r_1396=$unwrap(__771_$o_sz)*$unwrap(0.5);
var __r_1397 = 0;
__r_1397=Number(__774_$o_l>__r_1396);
case 369:/*condstart_BIVSYU*/
if (!__r_1397){$goto=370;/*endif_UKFPOT*/ continue $$;}
var __r_1398 = 0;
__r_1398=$unwrap(__771_$o_avgl)+$unwrap(__774_$o_l);
__771_$o_avgl = $value(__r_1398);
var __r_1399 = 0;
$args.push(__771_$o_vs);
$args.push($typed_value(__774_$o_q2,{"con":"vec","elt":["f32",2]}));
__r_1399=$assign(__r_1399,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 370:/*endif_UKFPOT*/
case 371:/*cont_ZULVCC*/
var __r_1400 = 0;
__r_1400=$unwrap(__773_$o_i)+$unwrap(1);
__773_$o_i = $value(__r_1400);
$goto=368;/*loopstart_QNQIQM*/ continue $$;
case 372:/*loopend_YPRBPW*/
var __r_1401 = 0;
$args.push(__771_$o_vs);
__r_1401=$assign(__r_1401,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1402 = 0;
__r_1402 = new $typed_cons.f32([__r_1401])[0]
var __r_1403 = 0;
__r_1403=$unwrap(__771_$o_avgl)/$unwrap(__r_1402);
__771_$o_avgl = $value(__r_1403);
var __771_$o_idcs = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_1404 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__771_$o_idcs = $value(__r_1404);
var __779_$o_i = 0;
__779_$o_i = $value(0);
case 373:/*loopstart_RVSJOB*/
var __r_1405 = 0;
$args.push(__771_$o_vs);
__r_1405=$assign(__r_1405,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1406 = 0;
__r_1406=Number(__779_$o_i<__r_1405);
if (!__r_1406){$goto=375;/*loopend_WOIGWC*/ continue $$;}
var __r_1407 = 0;
$args.push(__771_$o_idcs);
$args.push($typed_value(__779_$o_i,"i32"));
__r_1407=$assign(__r_1407,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 374:/*cont_CTFRGI*/
var __r_1408 = 0;
__r_1408=$unwrap(__779_$o_i)+$unwrap(1);
__779_$o_i = $value(__r_1408);
$goto=373;/*loopstart_RVSJOB*/ continue $$;
case 375:/*loopend_WOIGWC*/
var __r_1409 = null;
$args.push(__771_$o_idcs);
__r_1409=$assign(__r_1409,await __func_ovld_shuffle_NZMNCP_func_$L_tup_$L_list_$L_i32_$7__$7__$9_void_$7_());
var __771_$o_nn = 0;
var __r_1410 = 0;
$args.push(__771_$o_vs);
__r_1410=$assign(__r_1410,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__771_$o_nn = $value(__r_1410);
var __r_1411 = 0;
__r_1411=Number(__771_$o_nn>12);
case 376:/*condstart_DCWCRA*/
if (!__r_1411){$goto=377;/*endif_IQHKIX*/ continue $$;}
__771_$o_nn = $value(12);
case 377:/*endif_IQHKIX*/
var __783_$o_i = 0;
__783_$o_i = $value(0);
case 378:/*loopstart_ZKZVYA*/
var __r_1412 = 0;
__r_1412=Number(__783_$o_i<__771_$o_nn);
if (!__r_1412){$goto=388;/*loopend_GQDKIK*/ continue $$;}
var __784_$o_idx = 0;
var __r_1413 = 0;
__r_1413 = $value(__771_$o_idcs[__783_$o_i]);
__784_$o_idx = $value(__r_1413);
var __784_$o_t = 0;
var __r_1414 = 0;
__r_1414 = new $typed_cons.f32([__784_$o_idx])[0]
var __r_1415 = 0;
$args.push(__771_$o_vs);
__r_1415=$assign(__r_1415,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_1415=$unwrap(__r_1415)-$unwrap(1);
var __r_1416 = 0;
__r_1416 = new $typed_cons.f32([__r_1415])[0]
__r_1414=$unwrap(__r_1414)/$unwrap(__r_1416);
__784_$o_t = $value(__r_1414);
var __784_$o_ti = 0;
var __r_1417 = 0;
__r_1417 = new $typed_cons.f32([__783_$o_i])[0]
var __r_1418 = 0;
__r_1418 = new $typed_cons.f32([__771_$o_nn])[0]
__r_1417=$unwrap(__r_1417)/$unwrap(__r_1418);
__784_$o_ti = $value(__r_1417);
var __784_$o_q1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1419 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1419 = $value(__771_$o_vs[__784_$o_idx]);
__r_1419[0]=__r_1419[0]-__771_$o_q0[0];
__r_1419[1]=__r_1419[1]-__771_$o_q0[1];
__784_$o_q1 = $value(__r_1419);
var __784_$o_l = 0;
var __r_1420 = 0;
$args.push($typed_value(__784_$o_q1,{"con":"vec","elt":["f32",2]}));
__r_1420=$assign(__r_1420,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
__r_1420=$unwrap(__r_1420)*$unwrap(0.5);
var __r_1421 = 0;
__r_1421=$unwrap(__771_$o_avgl)*$unwrap(0.4);
__r_1420=$unwrap(__r_1420)+$unwrap(__r_1421);
var __r_1422 = 0;
__r_1422 = new $typed_cons.f32([1])[0]
__r_1422=$unwrap(__r_1422)-$unwrap(__784_$o_ti);
__r_1422=$unwrap(__r_1422)*$unwrap(0.5);
__r_1422=$unwrap(__r_1422)+$unwrap(0.5);
__r_1420=$unwrap(__r_1420)*$unwrap(__r_1422);
__784_$o_l = $value(__r_1420);
var __r_1423 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__784_$o_q1,{"con":"vec","elt":["f32",2]}));
__r_1423=$assign(__r_1423,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1424 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1424[0] = __784_$o_l
__r_1424[1] = __784_$o_l
__r_1423[0]=__r_1423[0]*__r_1424[0];
__r_1423[1]=__r_1423[1]*__r_1424[1];
__r_1423[0]=__r_1423[0]+__771_$o_q0[0];
__r_1423[1]=__r_1423[1]+__771_$o_q0[1];
__784_$o_q1 = $value(__r_1423);
var __784_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1425 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1425[0]=__784_$o_q1[0]-__771_$o_q0[0];
__r_1425[1]=__784_$o_q1[1]-__771_$o_q0[1];
__784_$o_d = $value(__r_1425);
var __784_$o_e = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1426 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1427 = 0;
var __r_1428 = 0;
__r_1428 = $value(__784_$o_d[1]);
__r_1427=$unwrap(0)-$unwrap(__r_1428);
__r_1426[0] = $value(__r_1427);
var __r_1429 = 0;
__r_1429 = $value(__784_$o_d[0]);
__r_1426[1] = $value(__r_1429);
__784_$o_e = $value(__r_1426);
var __r_1430 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
$args.push($typed_value(__784_$o_e,{"con":"vec","elt":["f32",2]}));
__r_1430=$assign(__r_1430,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1431 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1431[0] = __784_$o_l
__r_1431[1] = __784_$o_l
__r_1430[0]=__r_1430[0]*__r_1431[0];
__r_1430[1]=__r_1430[1]*__r_1431[1];
var __r_1432 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1432[0] = 0.4
__r_1432[1] = 0.4
__r_1430[0]=__r_1430[0]*__r_1432[0];
__r_1430[1]=__r_1430[1]*__r_1432[1];
__784_$o_e = $value(__r_1430);
var __r_1433 = 0;
$args.push(_$o_flowers);
var __r_1434 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push($typed_value(__771_$o_q0,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__784_$o_q1,{"con":"vec","elt":["f32",2]}));
$args.push($typed_value(__784_$o_e,{"con":"vec","elt":["f32",2]}));
__r_1434=$assign(__r_1434,await __func_ovld_make_petal_NZZIRM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
$args.push(__r_1434);
__r_1433=$assign(__r_1433,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1435 = 0;
__r_1435=$unwrap(__771_$o_nn)-$unwrap(1);
var __r_1436 = 0;
__r_1436=Number(__783_$o_i==__r_1435);
case 379:/*condstart_GKFIMX*/
if (!__r_1436){$goto=386;/*endif_RICMRO*/ continue $$;}
var __791_$o_j = 0;
__791_$o_j = $value(0);
case 380:/*loopstart_OATGXZ*/
var __r_1437 = 0;
__r_1437=Number(__791_$o_j<12);
if (!__r_1437){$goto=385;/*loopend_ZWMZCY*/ continue $$;}
var __792_$o_a1 = 0;
var __r_1438 = 0;
$args.push(Object.assign(new $typed_cons.f32([0]),{__type:'f32'}));
var __r_1439 = 0;
__r_1439 = new $typed_cons.f32([2])[0]
var __r_1440 = 0;
__r_1440=$unwrap(math_$o_PI)*$unwrap(__r_1439);
$args.push($typed_value(__r_1440,"f32"));
__r_1438=$assign(__r_1438,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__792_$o_a1 = $value(__r_1438);
var __792_$o_r1 = 0;
var __r_1441 = 0;
$args.push(Object.assign(new $typed_cons.f32([0]),{__type:'f32'}));
var __r_1442 = 0;
__r_1442=$unwrap(__771_$o_sz)*$unwrap(0.3);
$args.push($typed_value(__r_1442,"f32"));
__r_1441=$assign(__r_1441,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__792_$o_r1 = $value(__r_1441);
var __792_$o_og = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1443 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1444 = 0;
$args.push($typed_value(__792_$o_a1,"f32"));
__r_1444=$assign(__r_1444,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1444=$unwrap(__r_1444)*$unwrap(__792_$o_r1);
__r_1443[0] = $value(__r_1444);
var __r_1445 = 0;
$args.push($typed_value(__792_$o_a1,"f32"));
__r_1445=$assign(__r_1445,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1445=$unwrap(__r_1445)*$unwrap(__792_$o_r1);
__r_1443[1] = $value(__r_1445);
var __r_1446 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1446[0]=__771_$o_p1[0]+__r_1443[0];
__r_1446[1]=__771_$o_p1[1]+__r_1443[1];
__792_$o_og = $value(__r_1446);
var __792_$o_a2 = 0;
var __r_1447 = 0;
var __r_1448 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1448[0] = $value(__792_$o_og[1]);
__r_1448[1] = $value(__792_$o_og[0]);
var __r_1449 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1449[0] = $value(__771_$o_q0[1]);
__r_1449[1] = $value(__771_$o_q0[0]);
__r_1448[0]=__r_1448[0]-__r_1449[0];
__r_1448[1]=__r_1448[1]-__r_1449[1];
var __r_1450 = 0;
__r_1450 = $value(__r_1448[0]);
$args.push($typed_value(__r_1450,"f32"));
var __r_1451 = 0;
__r_1451 = $value(__r_1448[1]);
$args.push($typed_value(__r_1451,"f32"));
__r_1447=$assign(__r_1447,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
__792_$o_a2 = $value(__r_1447);
var __792_$o_pts = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1452 = Object.assign(new Array(1).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__r_1452[0] = $value(__771_$o_q0);
__792_$o_pts = $value(__r_1452);
var __793_$o_k = 0;
__793_$o_k = $value(0);
case 381:/*loopstart_KAOEKU*/
var __r_1453 = 0;
__r_1453=Number(__793_$o_k<10);
if (!__r_1453){$goto=383;/*loopend_YQJNJW*/ continue $$;}
var __794_$o_a = 0;
var __r_1454 = 0;
__r_1454 = new $typed_cons.f32([__793_$o_k])[0]
__r_1454=$unwrap(__r_1454)/$unwrap(9);
__r_1454=$unwrap(__r_1454)-$unwrap(0.5);
__r_1454=$unwrap(__r_1454)*$unwrap(math_$o_PI);
__r_1454=$unwrap(__r_1454)*$unwrap(1.6);
__r_1454=$unwrap(__r_1454)+$unwrap(__792_$o_a2);
__794_$o_a = $value(__r_1454);
var __r_1455 = 0;
$args.push(__792_$o_pts);
var __r_1456 = Object.assign(new $typed_cons.f32(2*1),{__type:{"con":"vec","elt":["f32",2,1]}});
var __r_1457 = 0;
$args.push($typed_value(__794_$o_a,"f32"));
__r_1457=$assign(__r_1457,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1458 = 0;
__r_1458 = new $typed_cons.f32([3])[0]
__r_1457=$unwrap(__r_1457)*$unwrap(__r_1458);
__r_1456[0] = $value(__r_1457);
var __r_1459 = 0;
$args.push($typed_value(__794_$o_a,"f32"));
__r_1459=$assign(__r_1459,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1460 = 0;
__r_1460 = new $typed_cons.f32([3])[0]
__r_1459=$unwrap(__r_1459)*$unwrap(__r_1460);
__r_1456[1] = $value(__r_1459);
var __r_1461 = Object.assign(new $typed_cons.f32(2*1),{__type:{"con":"vec","elt":["f32",2,1]}});
__r_1461[0] = __792_$o_og[0]??0;
__r_1461[1] = __792_$o_og[1]??0;
__r_1456[0]=__r_1456[0]+__r_1461[0];
__r_1456[1]=__r_1456[1]+__r_1461[1];
var __r_1462 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1462[0] = __r_1456[0]??0;
__r_1462[1] = __r_1456[1]??0;
$args.push($typed_value(__r_1462,{"con":"vec","elt":["f32",2]}));
__r_1455=$assign(__r_1455,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 382:/*cont_WQHRRY*/
var __r_1463 = 0;
__r_1463=$unwrap(__793_$o_k)+$unwrap(1);
__793_$o_k = $value(__r_1463);
$goto=381;/*loopstart_KAOEKU*/ continue $$;
case 383:/*loopend_YQJNJW*/
var __r_1464 = 0;
$args.push(__792_$o_pts);
$args.push($typed_value(__771_$o_q0,{"con":"vec","elt":["f32",2]}));
__r_1464=$assign(__r_1464,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
var __r_1465 = 0;
$args.push(_$o_flowers);
$args.push(__792_$o_pts);
__r_1465=$assign(__r_1465,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 384:/*cont_LWQHWQ*/
var __r_1466 = 0;
__r_1466=$unwrap(__791_$o_j)+$unwrap(1);
__791_$o_j = $value(__r_1466);
$goto=380;/*loopstart_OATGXZ*/ continue $$;
case 385:/*loopend_ZWMZCY*/
case 386:/*endif_RICMRO*/
case 387:/*cont_HSRSCR*/
var __r_1467 = 0;
__r_1467=$unwrap(__783_$o_i)+$unwrap(1);
__783_$o_i = $value(__r_1467);
$goto=378;/*loopstart_ZKZVYA*/ continue $$;
case 388:/*loopend_GQDKIK*/
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
return;
default:$goto=null;break;}}}
async function __func_ovld_process_OQGCAV_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_weights = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_W = $args.pop();
var __0_$o_H = $args.pop();
var __0_$o_cells = $args.pop();
var __0_$o_celli = $args.pop();
var __0_$o_corner_xs = $args.pop();
var __0_$o_corner_ns = $args.pop();
var __0_$o_corner_ss = $args.pop();
var __0_$o_corner_qs = $args.pop();
var __0_$o_visited = $args.pop();
var __0_$o_paths = $args.pop();
var __0_$o_preset = $args.pop();
var _$o_clipshape = $args.pop();
var __180_$o_tot_area = 0;
__180_$o_tot_area = $value(0);
var __181_$o_i = 0;
__181_$o_i = $value(0);
case 390:/*loopstart_OGMBCA*/
var __r_1468 = 0;
$args.push(_$o_clipshape);
__r_1468=$assign(__r_1468,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1469 = 0;
__r_1469=Number(__181_$o_i<__r_1468);
if (!__r_1469){$goto=392;/*loopend_PMPVYX*/ continue $$;}
var __r_1470 = 0;
var __r_1471 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1471 = $value(_$o_clipshape[__181_$o_i]);
$args.push(__r_1471);
__r_1470=$assign(__r_1470,await __func_ovld_poly_area_HSEURZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_f32_$7_());
var __r_1472 = 0;
__r_1472=$unwrap(__180_$o_tot_area)+$unwrap(__r_1470);
__180_$o_tot_area = $value(__r_1472);
case 391:/*cont_LWWJMV*/
var __r_1473 = 0;
__r_1473=$unwrap(__181_$o_i)+$unwrap(1);
__181_$o_i = $value(__r_1473);
$goto=390;/*loopstart_OGMBCA*/ continue $$;
case 392:/*loopend_PMPVYX*/
var __180_$o_n_samp = 0;
var __r_1474 = 0;
__r_1474=$unwrap(__180_$o_tot_area)*$unwrap($DENS);
var __r_1475 = 0;
__r_1475 = new $typed_cons.i32([__r_1474])[0]
__180_$o_n_samp = $value(__r_1475);
var __180_$o_n_big = 0;
var __r_1476 = 0;
__r_1476 = new $typed_cons.f32([__180_$o_n_samp])[0]
__r_1476=$unwrap(__r_1476)*$unwrap($PERC);
var __r_1477 = 0;
__r_1477 = new $typed_cons.i32([__r_1476])[0]
__180_$o_n_big = $value(__r_1477);
var __180_$o_n_lil = 0;
var __r_1478 = 0;
__r_1478=$unwrap(__180_$o_n_samp)-$unwrap(__180_$o_n_big);
__180_$o_n_lil = $value(__r_1478);
var __r_1479 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__0_$o_weights = $value(__r_1479);
var __188_$o_i = 0;
__188_$o_i = $value(0);
case 393:/*loopstart_HCZCGE*/
var __r_1480 = 0;
__r_1480=Number(__188_$o_i<__180_$o_n_big);
if (!__r_1480){$goto=395;/*loopend_HNEIYR*/ continue $$;}
var __r_1481 = 0;
$args.push(__0_$o_weights);
$args.push(Object.assign(new $typed_cons.f32([2]),{__type:'f32'}));
__r_1481=$assign(__r_1481,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 394:/*cont_BFCDJU*/
var __r_1482 = 0;
__r_1482=$unwrap(__188_$o_i)+$unwrap(1);
__188_$o_i = $value(__r_1482);
$goto=393;/*loopstart_HCZCGE*/ continue $$;
case 395:/*loopend_HNEIYR*/
var __194_$o_i = 0;
__194_$o_i = $value(0);
case 396:/*loopstart_PHLZJP*/
var __r_1483 = 0;
__r_1483=Number(__194_$o_i<__180_$o_n_lil);
if (!__r_1483){$goto=398;/*loopend_BZSTPL*/ continue $$;}
var __r_1484 = 0;
$args.push(__0_$o_weights);
$args.push(Object.assign(new $typed_cons.f32([1]),{__type:'f32'}));
__r_1484=$assign(__r_1484,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 397:/*cont_DUHLCU*/
var __r_1485 = 0;
__r_1485=$unwrap(__194_$o_i)+$unwrap(1);
__194_$o_i = $value(__r_1485);
$goto=396;/*loopstart_PHLZJP*/ continue $$;
case 398:/*loopend_BZSTPL*/
var __r_1486 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push(__0_$o_weights);
$args.push(_$o_clipshape);
$args.push(__0_$o_H)
$args.push(__0_$o_W)
__r_1486=$assign(__r_1486,await __func_ovld_poisson_sample_GWLGHU_func_$L_tup_$L_list_$L_f32_$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
__0_$o_H = $caps.pop();
__0_$o_W = $caps.pop();
__0_$o_sites = $value(__r_1486);
var __r_1487 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
$args.push(__0_$o_sites);
__r_1487=$assign(__r_1487,await __func_ovld_voronoi_BSTGDO_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7_());
__0_$o_cells = $value(__r_1487);
var __r_1488 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_celli = $value(__r_1488);
var __180_$o_exempt = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1489 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__180_$o_exempt = $value(__r_1489);
var __228_$o_i = 0;
__228_$o_i = $value(0);
case 399:/*loopstart_MEBLFE*/
var __r_1490 = 0;
$args.push(__0_$o_cells);
__r_1490=$assign(__r_1490,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1491 = 0;
__r_1491=Number(__228_$o_i<__r_1490);
if (!__r_1491){$goto=416;/*loopend_ASKRVE*/ continue $$;}
var __230_$o_hull = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __230_$o_mask = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_1492 = Object.assign([Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}),Object.assign([],{__type:{"con":"list","elt":["i32"]}})],{__type:{"con":"tup","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]},{"con":"list","elt":["i32"]}]}});
var __r_1493 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1493 = $value(__0_$o_cells[__228_$o_i]);
$args.push(__r_1493);
$args.push(_$o_clipshape);
__r_1492=$assign(__r_1492,await __func_ovld_convexclip_CKMYEI_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_i32_$7__$7__$7_());
__230_$o_hull = $value(__r_1492[0]);
__230_$o_mask = $value(__r_1492[1]);
var __230_$o_nin = 0;
var __r_1494 = 0;
var __r_1495 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
$args.push(__230_$o_mask);
var __230_$o___func_ovld___lambda_KRWMUV_IPXJVP_$o_0_$o_27726 = {__funptr:__func_ovld___lambda_KRWMUV_IPXJVP_func_$L_tup_$L_i32_$7__$9_i32_$7_,__captr:[],__type:'func'}
$args.push(__230_$o___func_ovld___lambda_KRWMUV_IPXJVP_$o_0_$o_27726);
__r_1495=$assign(__r_1495,await __func_ovld_filter_KTKISG_func_$L_tup_$L_list_$L_i32_$7__$9_func_$L_tup_$L_i32_$7__$9_i32_$7__$7__$9_list_$L_i32_$7__$7_());
$args.push(__r_1495);
__r_1494=$assign(__r_1494,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__230_$o_nin = $value(__r_1494);
var __r_1496 = 0;
__r_1496=Number(__230_$o_nin==0);
case 400:/*condstart_LHWDSG*/
if (!__r_1496){$goto=404;/*endif_VFPUAH*/ continue $$;}
var __275_$o_j = 0;
__275_$o_j = $value(0);
case 401:/*loopstart_LTVVGY*/
var __r_1497 = 0;
$args.push(__230_$o_mask);
__r_1497=$assign(__r_1497,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1498 = 0;
__r_1498=Number(__275_$o_j<__r_1497);
if (!__r_1498){$goto=403;/*loopend_QWUQWK*/ continue $$;}
__230_$o_mask[__275_$o_j] = $value(0);
case 402:/*cont_IMZNDL*/
var __r_1499 = 0;
__r_1499=$unwrap(__275_$o_j)+$unwrap(1);
__275_$o_j = $value(__r_1499);
$goto=401;/*loopstart_LTVVGY*/ continue $$;
case 403:/*loopend_QWUQWK*/
case 404:/*endif_VFPUAH*/
var __278_$o_j = 0;
__278_$o_j = $value(0);
case 405:/*loopstart_MWGNNU*/
var __r_1500 = 0;
$args.push(__230_$o_mask);
__r_1500=$assign(__r_1500,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1501 = 0;
__r_1501=Number(__278_$o_j<__r_1500);
if (!__r_1501){$goto=414;/*loopend_MUWOEF*/ continue $$;}
var __r_1502 = 0;
__r_1502 = $value(__230_$o_mask[__278_$o_j]);
var __r_1503 = 0;
__r_1503=$unwrap(0)-$unwrap(1);
var __r_1504 = 0;
__r_1504=Number(__r_1502!=__r_1503);
case 406:/*condstart_XSDTJU*/
if (!__r_1504){$goto=407;/*endif_DNEMPM*/ continue $$;}
$goto=413;/*cont_VABAKS*/ continue $$;
case 407:/*endif_DNEMPM*/
var __282_$o_k = 0;
__282_$o_k = $value(0);
case 408:/*loopstart_HKEAEJ*/
var __r_1505 = 0;
$args.push(__180_$o_exempt);
__r_1505=$assign(__r_1505,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1506 = 0;
__r_1506=Number(__282_$o_k<__r_1505);
if (!__r_1506){$goto=412;/*loopend_GNOARY*/ continue $$;}
var __r_1507 = 0;
var __r_1508 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1508 = $value(__180_$o_exempt[__282_$o_k]);
var __r_1509 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1509 = $value(__230_$o_hull[__278_$o_j]);
__r_1508[0]=__r_1508[0]-__r_1509[0];
__r_1508[1]=__r_1508[1]-__r_1509[1];
$args.push($typed_value(__r_1508,{"con":"vec","elt":["f32",2]}));
__r_1507=$assign(__r_1507,await __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_());
var __r_1510 = 0;
__r_1510=Number(__r_1507<0.0001);
case 409:/*condstart_SNAPEH*/
if (!__r_1510){$goto=410;/*endif_VDYFED*/ continue $$;}
__230_$o_mask[__278_$o_j] = $value(0);
case 410:/*endif_VDYFED*/
case 411:/*cont_YRKVLE*/
var __r_1511 = 0;
__r_1511=$unwrap(__282_$o_k)+$unwrap(1);
__282_$o_k = $value(__r_1511);
$goto=408;/*loopstart_HKEAEJ*/ continue $$;
case 412:/*loopend_GNOARY*/
case 413:/*cont_VABAKS*/
var __r_1512 = 0;
__r_1512=$unwrap(__278_$o_j)+$unwrap(1);
__278_$o_j = $value(__r_1512);
$goto=405;/*loopstart_MWGNNU*/ continue $$;
case 414:/*loopend_MUWOEF*/
__0_$o_cells[__228_$o_i] = $value(__230_$o_hull);
var __r_1513 = 0;
$args.push(__0_$o_celli);
$args.push(__230_$o_mask);
__r_1513=$assign(__r_1513,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_list_$L_i32_$7__$7__$9_i32_$7_());
case 415:/*cont_KNVONJ*/
var __r_1514 = 0;
__r_1514=$unwrap(__228_$o_i)+$unwrap(1);
__228_$o_i = $value(__r_1514);
$goto=399;/*loopstart_MEBLFE*/ continue $$;
case 416:/*loopend_ASKRVE*/
var __r_1515 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__0_$o_corner_xs = $value(__r_1515);
var __r_1516 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_corner_ns = $value(__r_1516);
var __r_1517 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_corner_ss = $value(__r_1517);
var __r_1518 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_corner_qs = $value(__r_1518);
var __292_$o_i = 0;
__292_$o_i = $value(0);
case 417:/*loopstart_VXQSLJ*/
var __r_1519 = 0;
$args.push(__0_$o_cells);
__r_1519=$assign(__r_1519,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1520 = 0;
__r_1520=Number(__292_$o_i<__r_1519);
if (!__r_1520){$goto=426;/*loopend_EWRBLT*/ continue $$;}
var __r_1521 = 0;
var __r_1522 = 0;
var __r_1523 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1523 = $value(__0_$o_cells[__292_$o_i]);
$args.push(__r_1523);
__r_1522=$assign(__r_1522,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_1521 = !__r_1522;
case 418:/*condstart_KWYTAO*/
if (!__r_1521){$goto=419;/*endif_KKCNPP*/ continue $$;}
$goto=425;/*cont_GRUWXO*/ continue $$;
case 419:/*endif_KKCNPP*/
var __294_$o_idx0 = 0;
var __r_1524 = 0;
$args.push($typed_value(__292_$o_i,"i32"));
var __r_1525 = 0;
var __r_1526 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1526 = $value(__0_$o_cells[__292_$o_i]);
$args.push(__r_1526);
__r_1525=$assign(__r_1525,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_1525=$unwrap(__r_1525)-$unwrap(1);
$args.push($typed_value(__r_1525,"i32"));
$args.push(__0_$o_corner_qs)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_celli)
$args.push(__0_$o_cells)
__r_1524=$assign(__r_1524,await __func_ovld_find_corner_JWPHLH_func_$L_tup_$L_i32_$9_i32_$7__$9_i32_$7_());
__0_$o_corner_qs = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_celli = $caps.pop();
__0_$o_cells = $caps.pop();
__294_$o_idx0 = $value(__r_1524);
var __308_$o_j = 0;
__308_$o_j = $value(0);
case 420:/*loopstart_SBJFXD*/
var __r_1527 = 0;
var __r_1528 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1528 = $value(__0_$o_cells[__292_$o_i]);
$args.push(__r_1528);
__r_1527=$assign(__r_1527,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1529 = 0;
__r_1529=Number(__308_$o_j<__r_1527);
if (!__r_1529){$goto=424;/*loopend_YBSOGX*/ continue $$;}
var __310_$o_idx1 = 0;
var __r_1530 = 0;
$args.push($typed_value(__292_$o_i,"i32"));
$args.push($typed_value(__308_$o_j,"i32"));
$args.push(__0_$o_corner_qs)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_celli)
$args.push(__0_$o_cells)
__r_1530=$assign(__r_1530,await __func_ovld_find_corner_JWPHLH_func_$L_tup_$L_i32_$9_i32_$7__$9_i32_$7_());
__0_$o_corner_qs = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_celli = $caps.pop();
__0_$o_cells = $caps.pop();
__310_$o_idx1 = $value(__r_1530);
var __r_1531 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1531 = $value(__0_$o_celli[__292_$o_i]);
__r_1531[__308_$o_j] = $value(__310_$o_idx1);
var __r_1532 = 0;
__r_1532=Number(__310_$o_idx1>0);
case 421:/*condstart_NIGSTQ*/
if (!__r_1532){$goto=422;/*endif_GPXBUE*/ continue $$;}
var __r_1533 = 0;
var __r_1534 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1534 = $value(__0_$o_corner_ss[__310_$o_idx1]);
$args.push(__r_1534);
$args.push($typed_value(__292_$o_i,"i32"));
__r_1533=$assign(__r_1533,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 422:/*endif_GPXBUE*/
var __r_1535 = null;
$args.push(__0_$o_corner_ns);
$args.push($typed_value(__294_$o_idx0,"i32"));
$args.push($typed_value(__310_$o_idx1,"i32"));
__r_1535=$assign(__r_1535,await __func_ovld_add_edge_IWVYVN_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_i32_$9_i32_$7__$9_void_$7_());
var __r_1536 = null;
$args.push(__0_$o_corner_ns);
$args.push($typed_value(__310_$o_idx1,"i32"));
$args.push($typed_value(__294_$o_idx0,"i32"));
__r_1536=$assign(__r_1536,await __func_ovld_add_edge_IWVYVN_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_i32_$9_i32_$7__$9_void_$7_());
__294_$o_idx0 = $value(__310_$o_idx1);
case 423:/*cont_RAEYQH*/
var __r_1537 = 0;
__r_1537=$unwrap(__308_$o_j)+$unwrap(1);
__308_$o_j = $value(__r_1537);
$goto=420;/*loopstart_SBJFXD*/ continue $$;
case 424:/*loopend_YBSOGX*/
case 425:/*cont_GRUWXO*/
var __r_1538 = 0;
__r_1538=$unwrap(__292_$o_i)+$unwrap(1);
__292_$o_i = $value(__r_1538);
$goto=417;/*loopstart_VXQSLJ*/ continue $$;
case 426:/*loopend_EWRBLT*/
var __r_1539 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__0_$o_visited = $value(__r_1539);
var __320_$o_i = 0;
__320_$o_i = $value(0);
case 427:/*loopstart_WDCEGN*/
var __r_1540 = 0;
$args.push(__0_$o_corner_xs);
__r_1540=$assign(__r_1540,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1541 = 0;
__r_1541=Number(__320_$o_i<__r_1540);
if (!__r_1541){$goto=429;/*loopend_UCDUOZ*/ continue $$;}
var __r_1542 = 0;
$args.push(__0_$o_visited);
$args.push(Object.assign(new $typed_cons.i32([0]),{__type:'i32'}));
__r_1542=$assign(__r_1542,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 428:/*cont_UMAEFT*/
var __r_1543 = 0;
__r_1543=$unwrap(__320_$o_i)+$unwrap(1);
__320_$o_i = $value(__r_1543);
$goto=427;/*loopstart_WDCEGN*/ continue $$;
case 429:/*loopend_UCDUOZ*/
var __r_1544 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_paths = $value(__r_1544);
var __r_1545 = null;
$args.push(_$o_clipshape);
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
__r_1545=$assign(__r_1545,await __func_ovld_relax_LEWONK_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_void_$7_());
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
var __r_1546 = null;
$args.push(_$o_clipshape);
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
__r_1546=$assign(__r_1546,await __func_ovld_relax_LEWONK_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_void_$7_());
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
var __r_1547 = null;
$args.push(_$o_clipshape);
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
__r_1547=$assign(__r_1547,await __func_ovld_relax_LEWONK_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_void_$7_());
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
var __339_$o_i = 0;
__339_$o_i = $value(0);
case 430:/*loopstart_EANSZM*/
var __r_1548 = 0;
$args.push(__0_$o_sites);
__r_1548=$assign(__r_1548,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1549 = 0;
__r_1549=Number(__339_$o_i<__r_1548);
if (!__r_1549){$goto=437;/*loopend_SUVEDE*/ continue $$;}
var __342_$o_j = 0;
__342_$o_j = $value(0);
case 431:/*loopstart_HEZUIK*/
var __r_1550 = 0;
var __r_1551 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1551 = $value(__0_$o_celli[__339_$o_i]);
$args.push(__r_1551);
__r_1550=$assign(__r_1550,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1552 = 0;
__r_1552=Number(__342_$o_j<__r_1550);
if (!__r_1552){$goto=435;/*loopend_IZPRYG*/ continue $$;}
var __344_$o_idx = 0;
var __r_1553 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1553 = $value(__0_$o_celli[__339_$o_i]);
var __r_1554 = 0;
__r_1554 = $value(__r_1553[__342_$o_j]);
__344_$o_idx = $value(__r_1554);
var __r_1555 = 0;
__r_1555=Number(__344_$o_idx>=0);
case 432:/*condstart_JBFYGU*/
if (!__r_1555){$goto=433;/*endif_QRTIPN*/ continue $$;}
var __r_1556 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1556 = $value(__0_$o_cells[__339_$o_i]);
var __r_1557 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1557 = $value(__0_$o_corner_xs[__344_$o_idx]);
__r_1556[__342_$o_j] = $value(__r_1557);
case 433:/*endif_QRTIPN*/
case 434:/*cont_IPZPVE*/
var __r_1558 = 0;
__r_1558=$unwrap(__342_$o_j)+$unwrap(1);
__342_$o_j = $value(__r_1558);
$goto=431;/*loopstart_HEZUIK*/ continue $$;
case 435:/*loopend_IZPRYG*/
case 436:/*cont_HJHITZ*/
var __r_1559 = 0;
__r_1559=$unwrap(__339_$o_i)+$unwrap(1);
__339_$o_i = $value(__r_1559);
$goto=430;/*loopstart_EANSZM*/ continue $$;
case 437:/*loopend_SUVEDE*/
var __347_$o_i = 0;
__347_$o_i = $value(0);
case 438:/*loopstart_PCODAE*/
var __r_1560 = 0;
$args.push(__0_$o_sites);
__r_1560=$assign(__r_1560,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1561 = 0;
__r_1561=Number(__347_$o_i<__r_1560);
if (!__r_1561){$goto=440;/*loopend_GAQHUX*/ continue $$;}
var __r_1562 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1563 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1563 = $value(__0_$o_cells[__347_$o_i]);
$args.push(__r_1563);
__r_1562=$assign(__r_1562,await __func_ovld_centroid_IEWPPR_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
__0_$o_sites[__347_$o_i] = $value(__r_1562);
case 439:/*cont_VTTEUF*/
var __r_1564 = 0;
__r_1564=$unwrap(__347_$o_i)+$unwrap(1);
__347_$o_i = $value(__r_1564);
$goto=438;/*loopstart_PCODAE*/ continue $$;
case 440:/*loopend_GAQHUX*/
var __180_$o_assign = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}});
var __r_1565 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__180_$o_assign = $value(__r_1565);
var __350_$o_i = 0;
__350_$o_i = $value(0);
case 441:/*loopstart_OZKUHE*/
var __r_1566 = 0;
$args.push(__0_$o_sites);
__r_1566=$assign(__r_1566,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1567 = 0;
__r_1567=Number(__350_$o_i<__r_1566);
if (!__r_1567){$goto=443;/*loopend_WSEKHL*/ continue $$;}
var __r_1568 = 0;
$args.push(__180_$o_assign);
var __r_1569 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
$args.push(__r_1569);
__r_1568=$assign(__r_1568,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_list_$L_i32_$7__$7__$9_i32_$7_());
case 442:/*cont_GIHOCQ*/
var __r_1570 = 0;
__r_1570=$unwrap(__350_$o_i)+$unwrap(1);
__350_$o_i = $value(__r_1570);
$goto=441;/*loopstart_OZKUHE*/ continue $$;
case 443:/*loopend_WSEKHL*/
var __r_1571 = null;
var __r_1572 = 0;
__r_1572=$unwrap(0)-$unwrap(1);
$args.push($typed_value(__r_1572,"i32"));
var __r_1573 = 0;
__r_1573=$unwrap(0)-$unwrap(1);
$args.push($typed_value(__r_1573,"i32"));
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_visited)
$args.push(__0_$o_celli)
$args.push(__180_$o_assign)
$args.push(__0_$o_weights)
$args.push(__0_$o_sites)
__r_1571=$assign(__r_1571,await __func_ovld_walk_all_CTBOGK_func_$L_tup_$L_i32_$9_i32_$7__$9_void_$7_());
__0_$o_paths = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_visited = $caps.pop();
__0_$o_celli = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_sites = $caps.pop();
var __418_$o_i = 0;
__418_$o_i = $value(0);
case 444:/*loopstart_AFJHHA*/
var __r_1574 = 0;
$args.push(__0_$o_paths);
__r_1574=$assign(__r_1574,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_1575 = 0;
__r_1575=Number(__418_$o_i<__r_1574);
if (!__r_1575){$goto=449;/*loopend_APGMGB*/ continue $$;}
var __421_$o_j = 0;
__421_$o_j = $value(0);
case 445:/*loopstart_JEJSGJ*/
var __r_1576 = 0;
var __r_1577 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1577 = $value(__0_$o_paths[__418_$o_i]);
$args.push(__r_1577);
__r_1576=$assign(__r_1576,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_1576=$unwrap(__r_1576)-$unwrap(1);
var __r_1578 = 0;
__r_1578=Number(__421_$o_j<__r_1576);
if (!__r_1578){$goto=447;/*loopend_EKCTLS*/ continue $$;}
var __r_1579 = null;
$args.push(__0_$o_corner_qs);
var __r_1580 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1580 = $value(__0_$o_paths[__418_$o_i]);
var __r_1581 = 0;
__r_1581 = $value(__r_1580[__421_$o_j]);
$args.push($typed_value(__r_1581,"i32"));
var __r_1582 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1582 = $value(__0_$o_paths[__418_$o_i]);
var __r_1583 = 0;
__r_1583=$unwrap(__421_$o_j)+$unwrap(1);
var __r_1584 = 0;
__r_1584 = $value(__r_1582[__r_1583]);
$args.push($typed_value(__r_1584,"i32"));
__r_1579=$assign(__r_1579,await __func_ovld_add_edge_IWVYVN_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_i32_$9_i32_$7__$9_void_$7_());
var __r_1585 = null;
$args.push(__0_$o_corner_qs);
var __r_1586 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1586 = $value(__0_$o_paths[__418_$o_i]);
var __r_1587 = 0;
__r_1587=$unwrap(__421_$o_j)+$unwrap(1);
var __r_1588 = 0;
__r_1588 = $value(__r_1586[__r_1587]);
$args.push($typed_value(__r_1588,"i32"));
var __r_1589 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1589 = $value(__0_$o_paths[__418_$o_i]);
var __r_1590 = 0;
__r_1590 = $value(__r_1589[__421_$o_j]);
$args.push($typed_value(__r_1590,"i32"));
__r_1585=$assign(__r_1585,await __func_ovld_add_edge_IWVYVN_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_i32_$9_i32_$7__$9_void_$7_());
case 446:/*cont_MFKOAB*/
var __r_1591 = 0;
__r_1591=$unwrap(__421_$o_j)+$unwrap(1);
__421_$o_j = $value(__r_1591);
$goto=445;/*loopstart_JEJSGJ*/ continue $$;
case 447:/*loopend_EKCTLS*/
case 448:/*cont_EIYAKJ*/
var __r_1592 = 0;
__r_1592=$unwrap(__418_$o_i)+$unwrap(1);
__418_$o_i = $value(__r_1592);
$goto=444;/*loopstart_AFJHHA*/ continue $$;
case 449:/*loopend_APGMGB*/
var __180_$o_ends = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_1593 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__180_$o_ends = $value(__r_1593);
var __424_$o_i = 0;
__424_$o_i = $value(0);
case 450:/*loopstart_ZCWTQW*/
var __r_1594 = 0;
$args.push(__0_$o_paths);
__r_1594=$assign(__r_1594,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_1595 = 0;
__r_1595=Number(__424_$o_i<__r_1594);
if (!__r_1595){$goto=461;/*loopend_VMVCEW*/ continue $$;}
var __426_$o_e = 0;
var __r_1596 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1596 = $value(__0_$o_paths[__424_$o_i]);
var __r_1597 = 0;
var __r_1598 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1598 = $value(__0_$o_paths[__424_$o_i]);
$args.push(__r_1598);
__r_1597=$assign(__r_1597,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_1597=$unwrap(__r_1597)-$unwrap(1);
var __r_1599 = 0;
__r_1599 = $value(__r_1596[__r_1597]);
__426_$o_e = $value(__r_1599);
var __r_1600 = 0;
__r_1600=Number(__426_$o_e>=0);
case 451:/*condstart_DQNINH*/
if (!__r_1600){$goto=459;/*endif_MQHVJO*/ continue $$;}
var __430_$o_k = 0;
__430_$o_k = $value(0);
case 452:/*loopstart_AKIRRP*/
var __r_1601 = 0;
var __r_1602 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1602 = $value(__0_$o_corner_ss[__426_$o_e]);
$args.push(__r_1602);
__r_1601=$assign(__r_1601,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1603 = 0;
__r_1603=Number(__430_$o_k<__r_1601);
if (!__r_1603){$goto=458;/*loopend_FUXUYT*/ continue $$;}
var __432_$o_si = 0;
var __r_1604 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1604 = $value(__0_$o_corner_ss[__426_$o_e]);
var __r_1605 = 0;
__r_1605 = $value(__r_1604[__430_$o_k]);
__432_$o_si = $value(__r_1605);
var __r_1606 = 0;
var __r_1607 = 0;
__r_1607 = $value(__0_$o_weights[__432_$o_si]);
var __r_1608 = 0;
__r_1608=Number(__r_1607>1);
if (!__r_1608){$goto=453;/*land0_IJCUBR*/ continue $$;}
var __r_1609 = 0;
var __r_1610 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1610 = $value(__180_$o_assign[__432_$o_si]);
$args.push(__r_1610);
__r_1609=$assign(__r_1609,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1611 = 0;
__r_1611=Number(__r_1609==0);
if (!__r_1611){$goto=453;/*land0_IJCUBR*/ continue $$;}
__r_1606 = $value(1);
$goto=454;/*land1_FCZOPP*/ continue $$;
case 453:/*land0_IJCUBR*/
__r_1606 = $value(0);
case 454:/*land1_FCZOPP*/
case 455:/*condstart_MAXOAR*/
if (!__r_1606){$goto=456;/*endif_WSWGNX*/ continue $$;}
var __r_1612 = 0;
var __r_1613 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1613 = $value(__0_$o_paths[__424_$o_i]);
$args.push(__r_1613);
var __r_1614 = 0;
__r_1614=$unwrap(0)-$unwrap(2);
__r_1614=$unwrap(__r_1614)-$unwrap(__432_$o_si);
$args.push($typed_value(__r_1614,"i32"));
__r_1612=$assign(__r_1612,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
var __r_1615 = 0;
var __r_1616 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1616 = $value(__180_$o_assign[__432_$o_si]);
$args.push(__r_1616);
$args.push($typed_value(__426_$o_e,"i32"));
__r_1615=$assign(__r_1615,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
$goto=458;/*loopend_FUXUYT*/ continue $$;
case 456:/*endif_WSWGNX*/
case 457:/*cont_QOPJBF*/
var __r_1617 = 0;
__r_1617=$unwrap(__430_$o_k)+$unwrap(1);
__430_$o_k = $value(__r_1617);
$goto=452;/*loopstart_AKIRRP*/ continue $$;
case 458:/*loopend_FUXUYT*/
case 459:/*endif_MQHVJO*/
var __r_1618 = 0;
$args.push(__180_$o_ends);
var __r_1619 = 0;
var __r_1620 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1620 = $value(__0_$o_paths[__424_$o_i]);
var __r_1621 = 0;
var __r_1622 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1622 = $value(__0_$o_paths[__424_$o_i]);
$args.push(__r_1622);
__r_1621=$assign(__r_1621,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_1621=$unwrap(__r_1621)-$unwrap(2);
var __r_1623 = 0;
__r_1623 = $value(__r_1620[__r_1621]);
$args.push($typed_value(__r_1623,"i32"));
var __r_1624 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1624 = $value(__0_$o_paths[__424_$o_i]);
var __r_1625 = 0;
var __r_1626 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1626 = $value(__0_$o_paths[__424_$o_i]);
$args.push(__r_1626);
__r_1625=$assign(__r_1625,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_1625=$unwrap(__r_1625)-$unwrap(1);
var __r_1627 = 0;
__r_1627 = $value(__r_1624[__r_1625]);
$args.push($typed_value(__r_1627,"i32"));
$args.push(__0_$o_cells)
$args.push(__180_$o_assign)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_sites)
$args.push(__0_$o_visited)
__r_1619=$assign(__r_1619,await __func_ovld_plan_bud_CBSMLU_func_$L_tup_$L_i32_$9_i32_$7__$9_i32_$7_());
__0_$o_cells = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_visited = $caps.pop();
$args.push($typed_value(__r_1619,"i32"));
__r_1618=$assign(__r_1618,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 460:/*cont_CBFUOP*/
var __r_1628 = 0;
__r_1628=$unwrap(__424_$o_i)+$unwrap(1);
__424_$o_i = $value(__r_1628);
$goto=450;/*loopstart_ZCWTQW*/ continue $$;
case 461:/*loopend_VMVCEW*/
var __180_$o_buds = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_1629 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__180_$o_buds = $value(__r_1629);
var __180_$o_flowers = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_1630 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__180_$o_flowers = $value(__r_1630);
var __454_$o_i = 0;
__454_$o_i = $value(0);
case 462:/*loopstart_OPELUT*/
var __r_1631 = 0;
$args.push(__180_$o_ends);
__r_1631=$assign(__r_1631,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1632 = 0;
__r_1632=Number(__454_$o_i<__r_1631);
if (!__r_1632){$goto=474;/*loopend_BQTEFG*/ continue $$;}
var __r_1633 = 0;
__r_1633 = $value(__180_$o_ends[__454_$o_i]);
var __r_1634 = 0;
__r_1634=Number(__r_1633<0);
case 463:/*condstart_QBZACP*/
if (!__r_1634){$goto=464;/*endif_QZZPCU*/ continue $$;}
$goto=473;/*cont_INSTFR*/ continue $$;
case 464:/*endif_QZZPCU*/
var __r_1635 = 0;
__r_1635=Number(__0_$o_preset[0]==1);
case 465:/*condstart_PHLSPU*/
if (!__r_1635){$goto=466;/*endif_QQLEYG*/ continue $$;}
var __r_1636 = null;
$args.push(__180_$o_buds);
$args.push(__180_$o_flowers);
$args.push($typed_value(__454_$o_i,"i32"));
$args.push(__180_$o_ends)
$args.push(__0_$o_sites)
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_xs)
__r_1636=$assign(__r_1636,await __func_ovld_make_bud01_GDUYQD_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_());
__180_$o_ends = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_paths = $caps.pop();
__0_$o_corner_xs = $caps.pop();
$goto=472;/*condend_GITUPJ*/ continue $$;
case 466:/*endif_QQLEYG*/
var __r_1637 = 0;
__r_1637=Number(__0_$o_preset[0]==2);
case 467:/*condstart_CMUNRA*/
if (!__r_1637){$goto=468;/*endif_QJSZPJ*/ continue $$;}
var __r_1638 = null;
$args.push(__180_$o_buds);
$args.push(__180_$o_flowers);
$args.push($typed_value(__454_$o_i,"i32"));
$args.push(__180_$o_ends)
$args.push(__0_$o_sites)
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_xs)
__r_1638=$assign(__r_1638,await __func_ovld_make_bud02_FMRUBY_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_());
__180_$o_ends = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_paths = $caps.pop();
__0_$o_corner_xs = $caps.pop();
$goto=471;/*condend_DZXLBL*/ continue $$;
case 468:/*endif_QJSZPJ*/
var __r_1639 = 0;
__r_1639=Number(__0_$o_preset[0]==3);
case 469:/*condstart_FEZOUI*/
if (!__r_1639){$goto=470;/*endif_FZUQOP*/ continue $$;}
var __r_1640 = null;
$args.push(__180_$o_buds);
$args.push(__180_$o_flowers);
$args.push($typed_value(__454_$o_i,"i32"));
$args.push(__180_$o_ends)
$args.push(__0_$o_sites)
$args.push(__0_$o_paths)
$args.push(__0_$o_corner_xs)
__r_1640=$assign(__r_1640,await __func_ovld_make_bud03_PBBKNZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_());
__180_$o_ends = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_paths = $caps.pop();
__0_$o_corner_xs = $caps.pop();
case 470:/*endif_FZUQOP*/
case 471:/*condend_DZXLBL*/
case 472:/*condend_GITUPJ*/
case 473:/*cont_INSTFR*/
var __r_1641 = 0;
__r_1641=$unwrap(__454_$o_i)+$unwrap(1);
__454_$o_i = $value(__r_1641);
$goto=462;/*loopstart_OPELUT*/ continue $$;
case 474:/*loopend_BQTEFG*/
var __509_$o_i = 0;
__509_$o_i = $value(0);
case 475:/*loopstart_EGAXIS*/
var __r_1642 = 0;
$args.push(__0_$o_celli);
__r_1642=$assign(__r_1642,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_1643 = 0;
__r_1643=Number(__509_$o_i<__r_1642);
if (!__r_1643){$goto=508;/*loopend_WZQXVI*/ continue $$;}
var __r_1644 = 0;
var __r_1645 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1645 = $value(__180_$o_assign[__509_$o_i]);
$args.push(__r_1645);
__r_1644=$assign(__r_1644,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
case 476:/*condstart_JPLDYO*/
if (!__r_1644){$goto=477;/*endif_RIRJEC*/ continue $$;}
$goto=507;/*cont_YGTHLS*/ continue $$;
case 477:/*endif_RIRJEC*/
var __511_$o_md = 0;
__511_$o_md = $value(0);
var __511_$o_m0 = 0;
var __r_1646 = 0;
__r_1646=$unwrap(0)-$unwrap(1);
__511_$o_m0 = $value(__r_1646);
var __511_$o_m1 = 0;
var __r_1647 = 0;
__r_1647=$unwrap(0)-$unwrap(1);
__511_$o_m1 = $value(__r_1647);
var __511_$o_m2 = 0;
var __r_1648 = 0;
__r_1648=$unwrap(0)-$unwrap(1);
__511_$o_m2 = $value(__r_1648);
var __514_$o_j = 0;
__514_$o_j = $value(0);
case 478:/*loopstart_MORVCO*/
var __r_1649 = 0;
var __r_1650 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1650 = $value(__0_$o_celli[__509_$o_i]);
$args.push(__r_1650);
__r_1649=$assign(__r_1649,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1651 = 0;
__r_1651=Number(__514_$o_j<__r_1649);
if (!__r_1651){$goto=504;/*loopend_KSMKYK*/ continue $$;}
var __516_$o_a = 0;
var __r_1652 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1652 = $value(__0_$o_celli[__509_$o_i]);
var __r_1653 = 0;
__r_1653 = $value(__r_1652[__514_$o_j]);
__516_$o_a = $value(__r_1653);
var __516_$o_b = 0;
var __r_1654 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1654 = $value(__0_$o_celli[__509_$o_i]);
var __r_1655 = 0;
__r_1655=$unwrap(__514_$o_j)+$unwrap(1);
var __r_1656 = 0;
var __r_1657 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1657 = $value(__0_$o_celli[__509_$o_i]);
$args.push(__r_1657);
__r_1656=$assign(__r_1656,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
__r_1655=$unwrap(__r_1655)%$unwrap(__r_1656);
var __r_1658 = 0;
__r_1658 = $value(__r_1654[__r_1655]);
__516_$o_b = $value(__r_1658);
var __r_1659 = 0;
__r_1659 = $value(0);
var __r_1660 = 0;
__r_1660=$unwrap(0)-$unwrap(1);
var __r_1661 = 0;
__r_1661=Number(__516_$o_a==__r_1660);
if (!__r_1661){$goto=479;/*lor_ZUWKHU*/ continue $$;}
__r_1659 = $value(1);
$goto=480;/*lor_OZFHYS*/ continue $$;
case 479:/*lor_ZUWKHU*/
var __r_1662 = 0;
__r_1662=$unwrap(0)-$unwrap(1);
var __r_1663 = 0;
__r_1663=Number(__516_$o_b==__r_1662);
if (!__r_1663){$goto=480;/*lor_OZFHYS*/ continue $$;}
__r_1659 = $value(1);
case 480:/*lor_OZFHYS*/
case 481:/*condstart_HTJIZP*/
if (!__r_1659){$goto=482;/*endif_YZBWNL*/ continue $$;}
$goto=503;/*cont_UJXBEZ*/ continue $$;
case 482:/*endif_YZBWNL*/
var __516_$o_ok = 0;
__516_$o_ok = $value(0);
var __519_$o_k = 0;
__519_$o_k = $value(0);
case 483:/*loopstart_LFRMAY*/
var __r_1664 = 0;
var __r_1665 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1665 = $value(__0_$o_corner_qs[__516_$o_a]);
$args.push(__r_1665);
__r_1664=$assign(__r_1664,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1666 = 0;
__r_1666=Number(__519_$o_k<__r_1664);
if (!__r_1666){$goto=487;/*loopend_PABDKI*/ continue $$;}
var __r_1667 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1667 = $value(__0_$o_corner_qs[__516_$o_a]);
var __r_1668 = 0;
__r_1668 = $value(__r_1667[__519_$o_k]);
var __r_1669 = 0;
__r_1669=Number(__r_1668==__516_$o_b);
case 484:/*condstart_RUJMMY*/
if (!__r_1669){$goto=485;/*endif_PUSTUO*/ continue $$;}
__516_$o_ok = $value(1);
$goto=487;/*loopend_PABDKI*/ continue $$;
case 485:/*endif_PUSTUO*/
case 486:/*cont_RLXKZF*/
var __r_1670 = 0;
__r_1670=$unwrap(__519_$o_k)+$unwrap(1);
__519_$o_k = $value(__r_1670);
$goto=483;/*loopstart_LFRMAY*/ continue $$;
case 487:/*loopend_PABDKI*/
var __r_1671 = 0;
__r_1671 = !__516_$o_ok;
case 488:/*condstart_CUYGTD*/
if (!__r_1671){$goto=489;/*endif_RVPWIC*/ continue $$;}
$goto=503;/*cont_UJXBEZ*/ continue $$;
case 489:/*endif_RVPWIC*/
var __516_$o_p0 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1672 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1672 = $value(__0_$o_corner_xs[__516_$o_a]);
__516_$o_p0 = $value(__r_1672);
var __516_$o_p1 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1673 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1673 = $value(__0_$o_corner_xs[__516_$o_b]);
__516_$o_p1 = $value(__r_1673);
var __516_$o_dd = 0;
__516_$o_dd = $value(0);
var __516_$o_dk = 0;
var __r_1674 = 0;
__r_1674=$unwrap(0)-$unwrap(1);
__516_$o_dk = $value(__r_1674);
var __525_$o_k = 0;
__525_$o_k = $value(0);
case 490:/*loopstart_FAGALF*/
var __r_1675 = 0;
var __r_1676 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1676 = $value(__0_$o_cells[__509_$o_i]);
$args.push(__r_1676);
__r_1675=$assign(__r_1675,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1677 = 0;
__r_1677=Number(__525_$o_k<__r_1675);
if (!__r_1677){$goto=498;/*loopend_ENXAMW*/ continue $$;}
var __r_1678 = 0;
__r_1678=Number(__525_$o_k==__514_$o_j);
case 491:/*condstart_ABDKVP*/
if (!__r_1678){$goto=492;/*endif_QAQDYP*/ continue $$;}
$goto=497;/*cont_WQXTNC*/ continue $$;
case 492:/*endif_QAQDYP*/
var __r_1679 = 0;
__r_1679=$unwrap(__514_$o_j)+$unwrap(1);
var __r_1680 = 0;
var __r_1681 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1681 = $value(__0_$o_cells[__509_$o_i]);
$args.push(__r_1681);
__r_1680=$assign(__r_1680,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
__r_1679=$unwrap(__r_1679)%$unwrap(__r_1680);
var __r_1682 = 0;
__r_1682=Number(__525_$o_k==__r_1679);
case 493:/*condstart_WCEDDU*/
if (!__r_1682){$goto=494;/*endif_SVNVHP*/ continue $$;}
$goto=497;/*cont_WQXTNC*/ continue $$;
case 494:/*endif_SVNVHP*/
var __527_$o_p2 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1683 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1683 = $value(__0_$o_cells[__509_$o_i]);
var __r_1684 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1684 = $value(__r_1683[__525_$o_k]);
__527_$o_p2 = $value(__r_1684);
var __527_$o_d = 0;
var __r_1685 = 0;
var __r_1686 = 0;
__r_1686 = $value(__527_$o_p2[0]);
$args.push($typed_value(__r_1686,"f32"));
var __r_1687 = 0;
__r_1687 = $value(__527_$o_p2[1]);
$args.push($typed_value(__r_1687,"f32"));
var __r_1688 = 0;
__r_1688 = $value(__516_$o_p0[0]);
$args.push($typed_value(__r_1688,"f32"));
var __r_1689 = 0;
__r_1689 = $value(__516_$o_p0[1]);
$args.push($typed_value(__r_1689,"f32"));
var __r_1690 = 0;
__r_1690 = $value(__516_$o_p1[0]);
$args.push($typed_value(__r_1690,"f32"));
var __r_1691 = 0;
__r_1691 = $value(__516_$o_p1[1]);
$args.push($typed_value(__r_1691,"f32"));
__r_1685=$assign(__r_1685,await __func_ovld_dist_pt_to_ln_TVNFKJ_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$9_f32_$9_f32_$7__$9_f32_$7_());
__527_$o_d = $value(__r_1685);
var __r_1692 = 0;
__r_1692=Number(__527_$o_d>__516_$o_dd);
case 495:/*condstart_TJPGVS*/
if (!__r_1692){$goto=496;/*endif_VOFTHT*/ continue $$;}
__516_$o_dd = $value(__527_$o_d);
__516_$o_dk = $value(__525_$o_k);
case 496:/*endif_VOFTHT*/
case 497:/*cont_WQXTNC*/
var __r_1693 = 0;
__r_1693=$unwrap(__525_$o_k)+$unwrap(1);
__525_$o_k = $value(__r_1693);
$goto=490;/*loopstart_FAGALF*/ continue $$;
case 498:/*loopend_ENXAMW*/
var __r_1694 = 0;
var __r_1695 = 0;
__r_1695=Number(__516_$o_dk>=0);
if (!__r_1695){$goto=499;/*land0_TXMACU*/ continue $$;}
var __r_1696 = 0;
__r_1696=Number(__516_$o_dd>__511_$o_md);
if (!__r_1696){$goto=499;/*land0_TXMACU*/ continue $$;}
__r_1694 = $value(1);
$goto=500;/*land1_IOLQEI*/ continue $$;
case 499:/*land0_TXMACU*/
__r_1694 = $value(0);
case 500:/*land1_IOLQEI*/
case 501:/*condstart_IZVTUN*/
if (!__r_1694){$goto=502;/*endif_PTWOIU*/ continue $$;}
__511_$o_md = $value(__516_$o_dd);
__511_$o_m0 = $value(__516_$o_a);
__511_$o_m1 = $value(__516_$o_b);
__511_$o_m2 = $value(__516_$o_dk);
case 502:/*endif_PTWOIU*/
case 503:/*cont_UJXBEZ*/
var __r_1697 = 0;
__r_1697=$unwrap(__514_$o_j)+$unwrap(1);
__514_$o_j = $value(__r_1697);
$goto=478;/*loopstart_MORVCO*/ continue $$;
case 504:/*loopend_KSMKYK*/
var __r_1698 = 0;
__r_1698=Number(__511_$o_m0>=0);
case 505:/*condstart_CSSUZV*/
if (!__r_1698){$goto=506;/*endif_XLTKPA*/ continue $$;}
var __r_1699 = 0;
var __r_1700 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1700 = $value(__180_$o_assign[__509_$o_i]);
$args.push(__r_1700);
$args.push($typed_value(__511_$o_m0,"i32"));
__r_1699=$assign(__r_1699,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
var __r_1701 = 0;
var __r_1702 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1702 = $value(__180_$o_assign[__509_$o_i]);
$args.push(__r_1702);
$args.push($typed_value(__511_$o_m1,"i32"));
__r_1701=$assign(__r_1701,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
var __r_1703 = 0;
var __r_1704 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1704 = $value(__180_$o_assign[__509_$o_i]);
$args.push(__r_1704);
$args.push($typed_value(__511_$o_m2,"i32"));
__r_1703=$assign(__r_1703,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 506:/*endif_XLTKPA*/
case 507:/*cont_YGTHLS*/
var __r_1705 = 0;
__r_1705=$unwrap(__509_$o_i)+$unwrap(1);
__509_$o_i = $value(__r_1705);
$goto=475;/*loopstart_EGAXIS*/ continue $$;
case 508:/*loopend_WZQXVI*/
var __180_$o_vines = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_1706 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__180_$o_vines = $value(__r_1706);
var __541_$o_i = 0;
__541_$o_i = $value(0);
case 509:/*loopstart_QCTBZE*/
var __r_1707 = 0;
$args.push(__0_$o_paths);
__r_1707=$assign(__r_1707,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_1708 = 0;
__r_1708=Number(__541_$o_i<__r_1707);
if (!__r_1708){$goto=519;/*loopend_WNCEPG*/ continue $$;}
var __543_$o_pts = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1709 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__543_$o_pts = $value(__r_1709);
var __544_$o_j = 0;
__544_$o_j = $value(0);
case 510:/*loopstart_GUKGBY*/
var __r_1710 = 0;
var __r_1711 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1711 = $value(__0_$o_paths[__541_$o_i]);
$args.push(__r_1711);
__r_1710=$assign(__r_1710,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1712 = 0;
__r_1712=Number(__544_$o_j<__r_1710);
if (!__r_1712){$goto=515;/*loopend_FLEPBK*/ continue $$;}
var __546_$o_q = 0;
var __r_1713 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1713 = $value(__0_$o_paths[__541_$o_i]);
var __r_1714 = 0;
__r_1714 = $value(__r_1713[__544_$o_j]);
__546_$o_q = $value(__r_1714);
var __r_1715 = 0;
__r_1715=$unwrap(0)-$unwrap(1);
var __r_1716 = 0;
__r_1716=Number(__546_$o_q<__r_1715);
case 511:/*condstart_KIGOOW*/
if (!__r_1716){$goto=512;/*endif_DURMKO*/ continue $$;}
var __r_1717 = 0;
$args.push(__543_$o_pts);
var __r_1718 = 0;
__r_1718=$unwrap(0)-$unwrap(__546_$o_q);
__r_1718=$unwrap(__r_1718)-$unwrap(2);
var __r_1719 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1719 = $value(__0_$o_sites[__r_1718]);
$args.push($typed_value(__r_1719,{"con":"vec","elt":["f32",2]}));
__r_1717=$assign(__r_1717,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
$goto=513;/*condend_PXJSPO*/ continue $$;
case 512:/*endif_DURMKO*/
var __r_1720 = 0;
$args.push(__543_$o_pts);
var __r_1721 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1721 = $value(__0_$o_corner_xs[__546_$o_q]);
$args.push($typed_value(__r_1721,{"con":"vec","elt":["f32",2]}));
__r_1720=$assign(__r_1720,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 513:/*condend_PXJSPO*/
case 514:/*cont_VOVRNO*/
var __r_1722 = 0;
__r_1722=$unwrap(__544_$o_j)+$unwrap(1);
__544_$o_j = $value(__r_1722);
$goto=510;/*loopstart_GUKGBY*/ continue $$;
case 515:/*loopend_FLEPBK*/
var __r_1723 = 0;
__r_1723 = $value(__180_$o_ends[__541_$o_i]);
var __r_1724 = 0;
__r_1724=Number(__r_1723>=0);
case 516:/*condstart_DMORGY*/
if (!__r_1724){$goto=517;/*endif_VAFVYO*/ continue $$;}
var __r_1725 = 0;
$args.push(__543_$o_pts);
var __r_1726 = 0;
__r_1726 = $value(__180_$o_ends[__541_$o_i]);
var __r_1727 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1727 = $value(__0_$o_sites[__r_1726]);
$args.push($typed_value(__r_1727,{"con":"vec","elt":["f32",2]}));
__r_1725=$assign(__r_1725,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
case 517:/*endif_VAFVYO*/
var __r_1728 = 0;
$args.push(__180_$o_vines);
var __r_1729 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
$args.push(__543_$o_pts);
__r_1729=$assign(__r_1729,await __func_ovld_smoothen_DPVJKZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
$args.push(__r_1729);
__r_1728=$assign(__r_1728,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 518:/*cont_KOWKMH*/
var __r_1730 = 0;
__r_1730=$unwrap(__541_$o_i)+$unwrap(1);
__541_$o_i = $value(__r_1730);
$goto=509;/*loopstart_QCTBZE*/ continue $$;
case 519:/*loopend_WNCEPG*/
var __180_$o_leaves = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_1731 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__180_$o_leaves = $value(__r_1731);
var __180_$o_veins = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_1732 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__180_$o_veins = $value(__r_1732);
var __596_$o_i = 0;
__596_$o_i = $value(0);
case 520:/*loopstart_AXLJEV*/
var __r_1733 = 0;
$args.push(__180_$o_assign);
__r_1733=$assign(__r_1733,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_1734 = 0;
__r_1734=Number(__596_$o_i<__r_1733);
if (!__r_1734){$goto=532;/*loopend_SDMUQM*/ continue $$;}
var __r_1735 = 0;
var __r_1736 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1736 = $value(__180_$o_assign[__596_$o_i]);
$args.push(__r_1736);
__r_1735=$assign(__r_1735,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1737 = 0;
__r_1737=Number(__r_1735!=3);
case 521:/*condstart_LXHCYV*/
if (!__r_1737){$goto=522;/*endif_JSABAX*/ continue $$;}
$goto=531;/*cont_MJJWWK*/ continue $$;
case 522:/*endif_JSABAX*/
var __r_1738 = 0;
__r_1738=Number(__0_$o_preset[0]==1);
case 523:/*condstart_MDOWSG*/
if (!__r_1738){$goto=524;/*endif_RXOHJH*/ continue $$;}
var __r_1739 = null;
$args.push(__180_$o_leaves);
$args.push(__180_$o_veins);
$args.push($typed_value(__596_$o_i,"i32"));
$args.push(__0_$o_cells)
$args.push(__0_$o_sites)
$args.push(__180_$o_assign)
$args.push(__0_$o_corner_xs)
__r_1739=$assign(__r_1739,await __func_ovld_make_leaf01_ATNARP_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_());
__0_$o_cells = $caps.pop();
__0_$o_sites = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_corner_xs = $caps.pop();
$goto=530;/*condend_HVMXYQ*/ continue $$;
case 524:/*endif_RXOHJH*/
var __r_1740 = 0;
__r_1740=Number(__0_$o_preset[0]==2);
case 525:/*condstart_RQKZUC*/
if (!__r_1740){$goto=526;/*endif_XKLVWD*/ continue $$;}
var __r_1741 = null;
$args.push(__180_$o_leaves);
$args.push(__180_$o_veins);
$args.push($typed_value(__596_$o_i,"i32"));
$args.push(__0_$o_cells)
$args.push(__0_$o_sites)
$args.push(__180_$o_assign)
$args.push(__0_$o_corner_xs)
__r_1741=$assign(__r_1741,await __func_ovld_make_leaf02_RKGXAE_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_());
__0_$o_cells = $caps.pop();
__0_$o_sites = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_corner_xs = $caps.pop();
$goto=529;/*condend_UYDUOC*/ continue $$;
case 526:/*endif_XKLVWD*/
var __r_1742 = 0;
__r_1742=Number(__0_$o_preset[0]==3);
case 527:/*condstart_KWQNKX*/
if (!__r_1742){$goto=528;/*endif_OHQNOX*/ continue $$;}
var __r_1743 = null;
$args.push(__180_$o_leaves);
$args.push(__180_$o_veins);
$args.push($typed_value(__596_$o_i,"i32"));
$args.push(__0_$o_cells)
$args.push(__0_$o_sites)
$args.push(__180_$o_assign)
$args.push(__0_$o_corner_xs)
__r_1743=$assign(__r_1743,await __func_ovld_make_leaf03_JVLQLD_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7__$9_void_$7_());
__0_$o_cells = $caps.pop();
__0_$o_sites = $caps.pop();
__180_$o_assign = $caps.pop();
__0_$o_corner_xs = $caps.pop();
case 528:/*endif_OHQNOX*/
case 529:/*condend_UYDUOC*/
case 530:/*condend_HVMXYQ*/
case 531:/*cont_MJJWWK*/
var __r_1744 = 0;
__r_1744=$unwrap(__596_$o_i)+$unwrap(1);
__596_$o_i = $value(__r_1744);
$goto=520;/*loopstart_AXLJEV*/ continue $$;
case 532:/*loopend_SDMUQM*/
var __695_$o_i = 0;
__695_$o_i = $value(0);
case 533:/*loopstart_QFXPCT*/
var __r_1745 = 0;
$args.push(__0_$o_paths);
__r_1745=$assign(__r_1745,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_1746 = 0;
__r_1746=Number(__695_$o_i<__r_1745);
if (!__r_1746){$goto=550;/*loopend_XRAVQY*/ continue $$;}
var __698_$o_j = 0;
__698_$o_j = $value(0);
case 534:/*loopstart_FXCYIO*/
var __r_1747 = 0;
var __r_1748 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1748 = $value(__0_$o_paths[__695_$o_i]);
$args.push(__r_1748);
__r_1747=$assign(__r_1747,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_1749 = 0;
__r_1749=Number(__698_$o_j<__r_1747);
if (!__r_1749){$goto=548;/*loopend_GAYEXC*/ continue $$;}
var __r_1750 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1750 = $value(__0_$o_paths[__695_$o_i]);
var __r_1751 = 0;
__r_1751 = $value(__r_1750[__698_$o_j]);
var __r_1752 = 0;
__r_1752=$unwrap(0)-$unwrap(1);
var __r_1753 = 0;
__r_1753=Number(__r_1751<__r_1752);
case 535:/*condstart_NJWTKJ*/
if (!__r_1753){$goto=546;/*endif_JZGGRA*/ continue $$;}
var __702_$o_j1 = 0;
var __r_1754 = 0;
__r_1754=$unwrap(__698_$o_j)+$unwrap(1);
__702_$o_j1 = $value(__r_1754);
case 536:/*condstart_VTGUNE*/
if (!__698_$o_j){$goto=537;/*endif_PHLYCN*/ continue $$;}
var __r_1755 = 0;
__r_1755=$unwrap(__698_$o_j)-$unwrap(1);
__702_$o_j1 = $value(__r_1755);
case 537:/*endif_PHLYCN*/
var __r_1756 = 0;
__r_1756=Number(__0_$o_preset[0]==1);
case 538:/*condstart_MHDGLJ*/
if (!__r_1756){$goto=539;/*endif_GIHLBD*/ continue $$;}
var __r_1757 = null;
$args.push(__180_$o_flowers);
var __r_1758 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1758 = $value(__0_$o_paths[__695_$o_i]);
var __r_1759 = 0;
__r_1759 = $value(__r_1758[__702_$o_j1]);
$args.push($typed_value(__r_1759,"i32"));
var __r_1760 = 0;
var __r_1761 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1761 = $value(__0_$o_paths[__695_$o_i]);
var __r_1762 = 0;
__r_1762 = $value(__r_1761[__698_$o_j]);
__r_1760=$unwrap(0)-$unwrap(__r_1762);
__r_1760=$unwrap(__r_1760)-$unwrap(2);
$args.push($typed_value(__r_1760,"i32"));
$args.push(__0_$o_cells)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_xs)
__r_1757=$assign(__r_1757,await __func_ovld_make_flower01_IGMSZI_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_i32_$7__$9_void_$7_());
__0_$o_cells = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_xs = $caps.pop();
$goto=545;/*condend_EVPLEX*/ continue $$;
case 539:/*endif_GIHLBD*/
var __r_1763 = 0;
__r_1763=Number(__0_$o_preset[0]==2);
case 540:/*condstart_RGUWKO*/
if (!__r_1763){$goto=541;/*endif_NPTGDY*/ continue $$;}
var __r_1764 = null;
$args.push(__180_$o_flowers);
var __r_1765 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1765 = $value(__0_$o_paths[__695_$o_i]);
var __r_1766 = 0;
__r_1766 = $value(__r_1765[__702_$o_j1]);
$args.push($typed_value(__r_1766,"i32"));
var __r_1767 = 0;
var __r_1768 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1768 = $value(__0_$o_paths[__695_$o_i]);
var __r_1769 = 0;
__r_1769 = $value(__r_1768[__698_$o_j]);
__r_1767=$unwrap(0)-$unwrap(__r_1769);
__r_1767=$unwrap(__r_1767)-$unwrap(2);
$args.push($typed_value(__r_1767,"i32"));
$args.push(__0_$o_cells)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_xs)
__r_1764=$assign(__r_1764,await __func_ovld_make_flower02_VAZKFZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_i32_$7__$9_void_$7_());
__0_$o_cells = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_xs = $caps.pop();
$goto=544;/*condend_QBTNLF*/ continue $$;
case 541:/*endif_NPTGDY*/
var __r_1770 = 0;
__r_1770=Number(__0_$o_preset[0]==3);
case 542:/*condstart_QEQJKE*/
if (!__r_1770){$goto=543;/*endif_DPLPES*/ continue $$;}
var __r_1771 = null;
$args.push(__180_$o_flowers);
var __r_1772 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1772 = $value(__0_$o_paths[__695_$o_i]);
var __r_1773 = 0;
__r_1773 = $value(__r_1772[__702_$o_j1]);
$args.push($typed_value(__r_1773,"i32"));
var __r_1774 = 0;
var __r_1775 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1775 = $value(__0_$o_paths[__695_$o_i]);
var __r_1776 = 0;
__r_1776 = $value(__r_1775[__698_$o_j]);
__r_1774=$unwrap(0)-$unwrap(__r_1776);
__r_1774=$unwrap(__r_1774)-$unwrap(2);
$args.push($typed_value(__r_1774,"i32"));
$args.push(__0_$o_cells)
$args.push(__0_$o_sites)
$args.push(__0_$o_corner_xs)
__r_1771=$assign(__r_1771,await __func_ovld_make_flower03_VFVGUL_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_i32_$7__$9_void_$7_());
__0_$o_cells = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_corner_xs = $caps.pop();
case 543:/*endif_DPLPES*/
case 544:/*condend_QBTNLF*/
case 545:/*condend_EVPLEX*/
case 546:/*endif_JZGGRA*/
case 547:/*cont_BWPHAC*/
var __r_1777 = 0;
__r_1777=$unwrap(__698_$o_j)+$unwrap(1);
__698_$o_j = $value(__r_1777);
$goto=534;/*loopstart_FXCYIO*/ continue $$;
case 548:/*loopend_GAYEXC*/
case 549:/*cont_POWRFW*/
var __r_1778 = 0;
__r_1778=$unwrap(__695_$o_i)+$unwrap(1);
__695_$o_i = $value(__r_1778);
$goto=533;/*loopstart_QFXPCT*/ continue $$;
case 550:/*loopend_XRAVQY*/
var __796_$o_i = 0;
__796_$o_i = $value(0);
case 551:/*loopstart_RGXVKB*/
var __r_1779 = 0;
$args.push(__180_$o_assign);
__r_1779=$assign(__r_1779,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
var __r_1780 = 0;
__r_1780=Number(__796_$o_i<__r_1779);
if (!__r_1780){$goto=555;/*loopend_UMOAGG*/ continue $$;}
var __r_1781 = 0;
var __r_1782 = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
__r_1782 = $value(__180_$o_assign[__796_$o_i]);
$args.push(__r_1782);
__r_1781=$assign(__r_1781,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
case 552:/*condstart_UGCNYG*/
if (!__r_1781){$goto=553;/*endif_RZDFTC*/ continue $$;}
$goto=554;/*cont_DICXHE*/ continue $$;
case 553:/*endif_RZDFTC*/
var __798_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1783 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1784 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1785 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1786 = 0;
__r_1786=$unwrap(0)-$unwrap(1);
__r_1785[0] = $value(__r_1786);
var __r_1787 = 0;
__r_1787=$unwrap(0)-$unwrap(1);
__r_1785[1] = $value(__r_1787);
$args.push($typed_value(__r_1785,{"con":"vec","elt":["f32",2]}));
var __r_1788 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1788[0] = $value(1);
__r_1788[1] = $value(1);
$args.push($typed_value(__r_1788,{"con":"vec","elt":["f32",2]}));
__r_1784=$assign(__r_1784,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
$args.push($typed_value(__r_1784,{"con":"vec","elt":["f32",2]}));
__r_1783=$assign(__r_1783,await __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1789 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1789[0] = 8
__r_1789[1] = 8
__r_1783[0]=__r_1783[0]*__r_1789[0];
__r_1783[1]=__r_1783[1]*__r_1789[1];
__798_$o_d = $value(__r_1783);
var __r_1790 = 0;
$args.push(__180_$o_flowers);
var __r_1791 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_1792 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1792 = $value(__0_$o_sites[__796_$o_i]);
__r_1792[0]=__r_1792[0]-__798_$o_d[0];
__r_1792[1]=__r_1792[1]-__798_$o_d[1];
$args.push($typed_value(__r_1792,{"con":"vec","elt":["f32",2]}));
var __r_1793 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1793 = $value(__0_$o_sites[__796_$o_i]);
__r_1793[0]=__r_1793[0]+__798_$o_d[0];
__r_1793[1]=__r_1793[1]+__798_$o_d[1];
$args.push($typed_value(__r_1793,{"con":"vec","elt":["f32",2]}));
var __r_1794 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1795 = 0;
var __r_1796 = 0;
__r_1796 = $value(__798_$o_d[1]);
__r_1795=$unwrap(0)-$unwrap(__r_1796);
__r_1794[0] = $value(__r_1795);
var __r_1797 = 0;
__r_1797 = $value(__798_$o_d[0]);
__r_1794[1] = $value(__r_1797);
var __r_1798 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1798[0] = 1.5
__r_1798[1] = 1.5
__r_1794[0]=__r_1794[0]/__r_1798[0];
__r_1794[1]=__r_1794[1]/__r_1798[1];
$args.push($typed_value(__r_1794,{"con":"vec","elt":["f32",2]}));
__r_1791=$assign(__r_1791,await __func_ovld_make_petal_NZZIRM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_());
$args.push(__r_1791);
__r_1790=$assign(__r_1790,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
case 554:/*cont_DICXHE*/
var __r_1799 = 0;
__r_1799=$unwrap(__796_$o_i)+$unwrap(1);
__796_$o_i = $value(__r_1799);
$goto=551;/*loopstart_RGXVKB*/ continue $$;
case 555:/*loopend_UMOAGG*/
var __r_1800 = Object.assign([Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})],{__type:{"con":"tup","elt":[{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}]}});
__r_1800[0] = $value(__180_$o_vines);
__r_1800[1] = $value(__180_$o_leaves);
__r_1800[2] = $value(__180_$o_veins);
__r_1800[3] = $value(__180_$o_flowers);
__r_1800[4] = $value(__180_$o_buds);
$caps.push(__0_$o_weights);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_W);
$caps.push(__0_$o_H);
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_paths);
$caps.push(__0_$o_preset);
return __r_1800;
return;
$caps.push(__0_$o_weights);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_W);
$caps.push(__0_$o_H);
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_paths);
$caps.push(__0_$o_preset);
return;
default:$goto=null;break;}}}
async function __func_ovld_render_RPTSVK_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_color1 = $args.pop();
var __0_$o_color0 = $args.pop();
var __0_$o_color2 = $args.pop();
var __0_$o_color3 = $args.pop();
var _$o_buds = $args.pop();
var _$o_flowers = $args.pop();
var _$o_veins = $args.pop();
var _$o_leaves = $args.pop();
var _$o_vines = $args.pop();
var __r_1801 = null;
var __r_1802 = 0;
__r_1802 = new $typed_cons.f32([0])[0]
// $args.push($typed_value(__r_1802,"f32"));
// __r_1801=$assign(__r_1801,await __func_ovld_background_KBTDLY_func_$L_tup_$L_f32_$7__$9_void_$7_());
var __r_1803 = null;
var __r_1804 = 0;
__r_1804 = $value(__0_$o_color1[0]);
$args.push($typed_value(__r_1804,"f32"));
var __r_1805 = 0;
__r_1805 = $value(__0_$o_color1[1]);
$args.push($typed_value(__r_1805,"f32"));
var __r_1806 = 0;
__r_1806 = $value(__0_$o_color1[2]);
$args.push($typed_value(__r_1806,"f32"));
__r_1803=$assign(__r_1803,await __func_ovld_fill_DUZWVO_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1807 = null;
var __r_1808 = 0;
__r_1808 = $value(__0_$o_color0[0]);
$args.push($typed_value(__r_1808,"f32"));
var __r_1809 = 0;
__r_1809 = $value(__0_$o_color0[1]);
$args.push($typed_value(__r_1809,"f32"));
var __r_1810 = 0;
__r_1810 = $value(__0_$o_color0[2]);
$args.push($typed_value(__r_1810,"f32"));
__r_1807=$assign(__r_1807,await __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1811 = null;
$args.push(Object.assign(new $typed_cons.f32([1.5]),{__type:'f32'}));
__r_1811=$assign(__r_1811,await __func_ovld_stroke_weight_PLKJWH_func_$L_tup_$L_f32_$7__$9_void_$7_());
var __808_$o_i = 0;
__808_$o_i = $value(0);
case 557:/*loopstart_DSAWGA*/
var __r_1812 = 0;
$args.push(_$o_leaves);
__r_1812=$assign(__r_1812,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1813 = 0;
__r_1813=Number(__808_$o_i<__r_1812);
if (!__r_1813){$goto=562;/*loopend_WOWBIO*/ continue $$;}
var __r_1814 = null;
__r_1814=$assign(__r_1814,await __func_ovld_begin_shape_ZNBSZT_func_$L_tup_$L__$7__$9_void_$7_());
var __811_$o_j = 0;
__811_$o_j = $value(0);
case 558:/*loopstart_JTHQCX*/
var __r_1815 = 0;
var __r_1816 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1816 = $value(_$o_leaves[__808_$o_i]);
$args.push(__r_1816);
__r_1815=$assign(__r_1815,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1817 = 0;
__r_1817=Number(__811_$o_j<__r_1815);
if (!__r_1817){$goto=560;/*loopend_GTKWBM*/ continue $$;}
var __r_1818 = null;
var __r_1819 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1819 = $value(_$o_leaves[__808_$o_i]);
var __r_1820 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1820 = $value(__r_1819[__811_$o_j]);
var __r_1821 = 0;
__r_1821 = $value(__r_1820[0]);
$args.push($typed_value(__r_1821,"f32"));
var __r_1822 = 0;
__r_1822 = $value(__r_1820[1]);
$args.push($typed_value(__r_1822,"f32"));
__r_1818=$assign(__r_1818,await __func_ovld_vertex_TIMLPC_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_());
case 559:/*cont_HVJGRK*/
var __r_1823 = 0;
__r_1823=$unwrap(__811_$o_j)+$unwrap(1);
__811_$o_j = $value(__r_1823);
$goto=558;/*loopstart_JTHQCX*/ continue $$;
case 560:/*loopend_GTKWBM*/
var __r_1824 = null;
$args.push(Object.assign(new $typed_cons.i32([1]),{__type:'i32'}));
__r_1824=$assign(__r_1824,await __func_ovld_end_shape_FECDUL_func_$L_tup_$L_i32_$7__$9_void_$7_());
case 561:/*cont_PJQTMP*/
var __r_1825 = 0;
__r_1825=$unwrap(__808_$o_i)+$unwrap(1);
__808_$o_i = $value(__r_1825);
$goto=557;/*loopstart_DSAWGA*/ continue $$;
case 562:/*loopend_WOWBIO*/
var __r_1826 = null;
var __r_1827 = 0;
__r_1827 = $value(__0_$o_color0[0]);
$args.push($typed_value(__r_1827,"f32"));
var __r_1828 = 0;
__r_1828 = $value(__0_$o_color0[1]);
$args.push($typed_value(__r_1828,"f32"));
var __r_1829 = 0;
__r_1829 = $value(__0_$o_color0[2]);
$args.push($typed_value(__r_1829,"f32"));
__r_1826=$assign(__r_1826,await __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1830 = null;
$args.push(Object.assign(new $typed_cons.f32([1.5]),{__type:'f32'}));
__r_1830=$assign(__r_1830,await __func_ovld_stroke_weight_PLKJWH_func_$L_tup_$L_f32_$7__$9_void_$7_());
var __r_1831 = null;
__r_1831=$assign(__r_1831,await __func_ovld_no_fill_NHCOQE_func_$L_tup_$L__$7__$9_void_$7_());
var __814_$o_i = 0;
__814_$o_i = $value(0);
case 563:/*loopstart_JHCVCF*/
var __r_1832 = 0;
$args.push(_$o_veins);
__r_1832=$assign(__r_1832,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1833 = 0;
__r_1833=Number(__814_$o_i<__r_1832);
if (!__r_1833){$goto=568;/*loopend_BDGJEB*/ continue $$;}
var __r_1834 = null;
__r_1834=$assign(__r_1834,await __func_ovld_begin_shape_ZNBSZT_func_$L_tup_$L__$7__$9_void_$7_());
var __817_$o_j = 0;
__817_$o_j = $value(0);
case 564:/*loopstart_OLMCHH*/
var __r_1835 = 0;
var __r_1836 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1836 = $value(_$o_veins[__814_$o_i]);
$args.push(__r_1836);
__r_1835=$assign(__r_1835,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1837 = 0;
__r_1837=Number(__817_$o_j<__r_1835);
if (!__r_1837){$goto=566;/*loopend_BGGZWY*/ continue $$;}
var __r_1838 = null;
var __r_1839 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1839 = $value(_$o_veins[__814_$o_i]);
var __r_1840 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1840 = $value(__r_1839[__817_$o_j]);
var __r_1841 = 0;
__r_1841 = $value(__r_1840[0]);
$args.push($typed_value(__r_1841,"f32"));
var __r_1842 = 0;
__r_1842 = $value(__r_1840[1]);
$args.push($typed_value(__r_1842,"f32"));
__r_1838=$assign(__r_1838,await __func_ovld_vertex_TIMLPC_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_());
case 565:/*cont_HUADDS*/
var __r_1843 = 0;
__r_1843=$unwrap(__817_$o_j)+$unwrap(1);
__817_$o_j = $value(__r_1843);
$goto=564;/*loopstart_OLMCHH*/ continue $$;
case 566:/*loopend_BGGZWY*/
var __r_1844 = null;
__r_1844=$assign(__r_1844,await __func_ovld_end_shape_FECDUL_func_$L_tup_$L__$7__$9_void_$7_());
case 567:/*cont_FTFZXE*/
var __r_1845 = 0;
__r_1845=$unwrap(__814_$o_i)+$unwrap(1);
__814_$o_i = $value(__r_1845);
$goto=563;/*loopstart_JHCVCF*/ continue $$;
case 568:/*loopend_BDGJEB*/
var __r_1846 = null;
__r_1846=$assign(__r_1846,await __func_ovld_no_fill_NHCOQE_func_$L_tup_$L__$7__$9_void_$7_());
var __r_1847 = null;
var __r_1848 = 0;
__r_1848 = $value(__0_$o_color0[0]);
$args.push($typed_value(__r_1848,"f32"));
var __r_1849 = 0;
__r_1849 = $value(__0_$o_color0[1]);
$args.push($typed_value(__r_1849,"f32"));
var __r_1850 = 0;
__r_1850 = $value(__0_$o_color0[2]);
$args.push($typed_value(__r_1850,"f32"));
__r_1847=$assign(__r_1847,await __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1851 = null;
var __r_1852 = 0;
__r_1852 = new $typed_cons.f32([6])[0]
$args.push($typed_value(__r_1852,"f32"));
__r_1851=$assign(__r_1851,await __func_ovld_stroke_weight_PLKJWH_func_$L_tup_$L_f32_$7__$9_void_$7_());
var __821_$o_k = 0;
__821_$o_k = $value(0);
case 569:/*loopstart_WWNIGR*/
var __r_1853 = 0;
$args.push(_$o_vines);
__r_1853=$assign(__r_1853,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1854 = 0;
__r_1854=Number(__821_$o_k<__r_1853);
if (!__r_1854){$goto=574;/*loopend_MYHBHQ*/ continue $$;}
var __r_1855 = null;
__r_1855=$assign(__r_1855,await __func_ovld_begin_shape_ZNBSZT_func_$L_tup_$L__$7__$9_void_$7_());
var __824_$o_i = 0;
__824_$o_i = $value(0);
case 570:/*loopstart_NXMAOU*/
var __r_1856 = 0;
var __r_1857 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1857 = $value(_$o_vines[__821_$o_k]);
$args.push(__r_1857);
__r_1856=$assign(__r_1856,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1858 = 0;
__r_1858=Number(__824_$o_i<__r_1856);
if (!__r_1858){$goto=572;/*loopend_SKDEIZ*/ continue $$;}
var __r_1859 = null;
var __r_1860 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1860 = $value(_$o_vines[__821_$o_k]);
var __r_1861 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1861 = $value(__r_1860[__824_$o_i]);
var __r_1862 = 0;
__r_1862 = $value(__r_1861[0]);
$args.push($typed_value(__r_1862,"f32"));
var __r_1863 = 0;
__r_1863 = $value(__r_1861[1]);
$args.push($typed_value(__r_1863,"f32"));
__r_1859=$assign(__r_1859,await __func_ovld_vertex_TIMLPC_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_());
case 571:/*cont_NOPFQQ*/
var __r_1864 = 0;
__r_1864=$unwrap(__824_$o_i)+$unwrap(1);
__824_$o_i = $value(__r_1864);
$goto=570;/*loopstart_NXMAOU*/ continue $$;
case 572:/*loopend_SKDEIZ*/
var __r_1865 = null;
__r_1865=$assign(__r_1865,await __func_ovld_end_shape_FECDUL_func_$L_tup_$L__$7__$9_void_$7_());
case 573:/*cont_XLLBQR*/
var __r_1866 = 0;
__r_1866=$unwrap(__821_$o_k)+$unwrap(1);
__821_$o_k = $value(__r_1866);
$goto=569;/*loopstart_WWNIGR*/ continue $$;
case 574:/*loopend_MYHBHQ*/
var __r_1867 = null;
var __r_1868 = 0;
__r_1868 = $value(__0_$o_color2[0]);
$args.push($typed_value(__r_1868,"f32"));
var __r_1869 = 0;
__r_1869 = $value(__0_$o_color2[1]);
$args.push($typed_value(__r_1869,"f32"));
var __r_1870 = 0;
__r_1870 = $value(__0_$o_color2[2]);
$args.push($typed_value(__r_1870,"f32"));
__r_1867=$assign(__r_1867,await __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1871 = null;
var __r_1872 = 0;
__r_1872 = new $typed_cons.f32([3])[0]
$args.push($typed_value(__r_1872,"f32"));
__r_1871=$assign(__r_1871,await __func_ovld_stroke_weight_PLKJWH_func_$L_tup_$L_f32_$7__$9_void_$7_());
var __827_$o_k = 0;
__827_$o_k = $value(0);
case 575:/*loopstart_GGYTWN*/
var __r_1873 = 0;
$args.push(_$o_vines);
__r_1873=$assign(__r_1873,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1874 = 0;
__r_1874=Number(__827_$o_k<__r_1873);
if (!__r_1874){$goto=580;/*loopend_DLHGVY*/ continue $$;}
var __r_1875 = null;
__r_1875=$assign(__r_1875,await __func_ovld_begin_shape_ZNBSZT_func_$L_tup_$L__$7__$9_void_$7_());
var __830_$o_i = 0;
__830_$o_i = $value(0);
case 576:/*loopstart_TOKRFW*/
var __r_1876 = 0;
var __r_1877 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1877 = $value(_$o_vines[__827_$o_k]);
$args.push(__r_1877);
__r_1876=$assign(__r_1876,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1878 = 0;
__r_1878=Number(__830_$o_i<__r_1876);
if (!__r_1878){$goto=578;/*loopend_ITYXOR*/ continue $$;}
var __r_1879 = null;
var __r_1880 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1880 = $value(_$o_vines[__827_$o_k]);
var __r_1881 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1881 = $value(__r_1880[__830_$o_i]);
var __r_1882 = 0;
__r_1882 = $value(__r_1881[0]);
$args.push($typed_value(__r_1882,"f32"));
var __r_1883 = 0;
__r_1883 = $value(__r_1881[1]);
$args.push($typed_value(__r_1883,"f32"));
__r_1879=$assign(__r_1879,await __func_ovld_vertex_TIMLPC_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_());
case 577:/*cont_LOJVRA*/
var __r_1884 = 0;
__r_1884=$unwrap(__830_$o_i)+$unwrap(1);
__830_$o_i = $value(__r_1884);
$goto=576;/*loopstart_TOKRFW*/ continue $$;
case 578:/*loopend_ITYXOR*/
var __r_1885 = null;
__r_1885=$assign(__r_1885,await __func_ovld_end_shape_FECDUL_func_$L_tup_$L__$7__$9_void_$7_());
case 579:/*cont_QPHYAM*/
var __r_1886 = 0;
__r_1886=$unwrap(__827_$o_k)+$unwrap(1);
__827_$o_k = $value(__r_1886);
$goto=575;/*loopstart_GGYTWN*/ continue $$;
case 580:/*loopend_DLHGVY*/
var __r_1887 = null;
var __r_1888 = 0;
__r_1888 = $value(__0_$o_color0[0]);
$args.push($typed_value(__r_1888,"f32"));
var __r_1889 = 0;
__r_1889 = $value(__0_$o_color0[1]);
$args.push($typed_value(__r_1889,"f32"));
var __r_1890 = 0;
__r_1890 = $value(__0_$o_color0[2]);
$args.push($typed_value(__r_1890,"f32"));
__r_1887=$assign(__r_1887,await __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1891 = null;
$args.push(Object.assign(new $typed_cons.f32([1.5]),{__type:'f32'}));
__r_1891=$assign(__r_1891,await __func_ovld_stroke_weight_PLKJWH_func_$L_tup_$L_f32_$7__$9_void_$7_());
var __r_1892 = null;
var __r_1893 = 0;
__r_1893 = $value(__0_$o_color3[0]);
$args.push($typed_value(__r_1893,"f32"));
var __r_1894 = 0;
__r_1894 = $value(__0_$o_color3[1]);
$args.push($typed_value(__r_1894,"f32"));
var __r_1895 = 0;
__r_1895 = $value(__0_$o_color3[2]);
$args.push($typed_value(__r_1895,"f32"));
__r_1892=$assign(__r_1892,await __func_ovld_fill_DUZWVO_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __833_$o_i = 0;
__833_$o_i = $value(0);
case 581:/*loopstart_IQPZVH*/
var __r_1896 = 0;
$args.push(_$o_flowers);
__r_1896=$assign(__r_1896,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1897 = 0;
__r_1897=Number(__833_$o_i<__r_1896);
if (!__r_1897){$goto=586;/*loopend_TTBIFV*/ continue $$;}
var __r_1898 = null;
__r_1898=$assign(__r_1898,await __func_ovld_begin_shape_ZNBSZT_func_$L_tup_$L__$7__$9_void_$7_());
var __836_$o_j = 0;
__836_$o_j = $value(0);
case 582:/*loopstart_EFIXGH*/
var __r_1899 = 0;
var __r_1900 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1900 = $value(_$o_flowers[__833_$o_i]);
$args.push(__r_1900);
__r_1899=$assign(__r_1899,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1901 = 0;
__r_1901=Number(__836_$o_j<__r_1899);
if (!__r_1901){$goto=584;/*loopend_DVVSZY*/ continue $$;}
var __r_1902 = null;
var __r_1903 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1903 = $value(_$o_flowers[__833_$o_i]);
var __r_1904 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1904 = $value(__r_1903[__836_$o_j]);
var __r_1905 = 0;
__r_1905 = $value(__r_1904[0]);
$args.push($typed_value(__r_1905,"f32"));
var __r_1906 = 0;
__r_1906 = $value(__r_1904[1]);
$args.push($typed_value(__r_1906,"f32"));
__r_1902=$assign(__r_1902,await __func_ovld_vertex_TIMLPC_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_());
case 583:/*cont_CSWQSU*/
var __r_1907 = 0;
__r_1907=$unwrap(__836_$o_j)+$unwrap(1);
__836_$o_j = $value(__r_1907);
$goto=582;/*loopstart_EFIXGH*/ continue $$;
case 584:/*loopend_DVVSZY*/
var __r_1908 = null;
__r_1908=$assign(__r_1908,await __func_ovld_end_shape_FECDUL_func_$L_tup_$L__$7__$9_void_$7_());
case 585:/*cont_GELQTM*/
var __r_1909 = 0;
__r_1909=$unwrap(__833_$o_i)+$unwrap(1);
__833_$o_i = $value(__r_1909);
$goto=581;/*loopstart_IQPZVH*/ continue $$;
case 586:/*loopend_TTBIFV*/
var __r_1910 = null;
var __r_1911 = 0;
__r_1911 = $value(__0_$o_color1[0]);
$args.push($typed_value(__r_1911,"f32"));
var __r_1912 = 0;
__r_1912 = $value(__0_$o_color1[1]);
$args.push($typed_value(__r_1912,"f32"));
var __r_1913 = 0;
__r_1913 = $value(__0_$o_color1[2]);
$args.push($typed_value(__r_1913,"f32"));
__r_1910=$assign(__r_1910,await __func_ovld_fill_DUZWVO_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1914 = null;
var __r_1915 = 0;
__r_1915 = $value(__0_$o_color0[0]);
$args.push($typed_value(__r_1915,"f32"));
var __r_1916 = 0;
__r_1916 = $value(__0_$o_color0[1]);
$args.push($typed_value(__r_1916,"f32"));
var __r_1917 = 0;
__r_1917 = $value(__0_$o_color0[2]);
$args.push($typed_value(__r_1917,"f32"));
__r_1914=$assign(__r_1914,await __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_());
var __r_1918 = null;
$args.push(Object.assign(new $typed_cons.f32([1.5]),{__type:'f32'}));
__r_1918=$assign(__r_1918,await __func_ovld_stroke_weight_PLKJWH_func_$L_tup_$L_f32_$7__$9_void_$7_());
var __839_$o_i = 0;
__839_$o_i = $value(0);
case 587:/*loopstart_UREOBF*/
var __r_1919 = 0;
$args.push(_$o_buds);
__r_1919=$assign(__r_1919,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
var __r_1920 = 0;
__r_1920=Number(__839_$o_i<__r_1919);
if (!__r_1920){$goto=592;/*loopend_ARWFZE*/ continue $$;}
var __r_1921 = null;
__r_1921=$assign(__r_1921,await __func_ovld_begin_shape_ZNBSZT_func_$L_tup_$L__$7__$9_void_$7_());
var __842_$o_j = 0;
__842_$o_j = $value(0);
case 588:/*loopstart_PZQEGZ*/
var __r_1922 = 0;
var __r_1923 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1923 = $value(_$o_buds[__839_$o_i]);
$args.push(__r_1923);
__r_1922=$assign(__r_1922,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
var __r_1924 = 0;
__r_1924=Number(__842_$o_j<__r_1922);
if (!__r_1924){$goto=590;/*loopend_MRFSHD*/ continue $$;}
var __r_1925 = null;
var __r_1926 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
__r_1926 = $value(_$o_buds[__839_$o_i]);
var __r_1927 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1927 = $value(__r_1926[__842_$o_j]);
var __r_1928 = 0;
__r_1928 = $value(__r_1927[0]);
$args.push($typed_value(__r_1928,"f32"));
var __r_1929 = 0;
__r_1929 = $value(__r_1927[1]);
$args.push($typed_value(__r_1929,"f32"));
__r_1925=$assign(__r_1925,await __func_ovld_vertex_TIMLPC_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_());
case 589:/*cont_ORNADD*/
var __r_1930 = 0;
__r_1930=$unwrap(__842_$o_j)+$unwrap(1);
__842_$o_j = $value(__r_1930);
$goto=588;/*loopstart_PZQEGZ*/ continue $$;
case 590:/*loopend_MRFSHD*/
var __r_1931 = null;
$args.push(Object.assign(new $typed_cons.i32([1]),{__type:'i32'}));
__r_1931=$assign(__r_1931,await __func_ovld_end_shape_FECDUL_func_$L_tup_$L_i32_$7__$9_void_$7_());
case 591:/*cont_JJOFIF*/
var __r_1932 = 0;
__r_1932=$unwrap(__839_$o_i)+$unwrap(1);
__839_$o_i = $value(__r_1932);
$goto=587;/*loopstart_UREOBF*/ continue $$;
case 592:/*loopend_ARWFZE*/
$caps.push(__0_$o_color1);
$caps.push(__0_$o_color0);
$caps.push(__0_$o_color2);
$caps.push(__0_$o_color3);
return;
default:$goto=null;break;}}}
async function __func_ovld_main_JQKEFQ_func_$L_tup_$L_i32_$9_i32_$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_3_$7__$7__$9_i32_$9_i32_$7__$9_50_$o_Graphics_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __0_$o_color0 = $args.pop();
var __0_$o_color1 = $args.pop();
var __0_$o_color2 = $args.pop();
var __0_$o_color3 = $args.pop();
var __0_$o_preset = $args.pop();
var __0_$o_weights = $args.pop();
var __0_$o_sites = $args.pop();
var __0_$o_cells = $args.pop();
var __0_$o_celli = $args.pop();
var __0_$o_corner_xs = $args.pop();
var __0_$o_corner_ns = $args.pop();
var __0_$o_corner_ss = $args.pop();
var __0_$o_corner_qs = $args.pop();
var __0_$o_visited = $args.pop();
var __0_$o_paths = $args.pop();
var _$o_seed = $args.pop();
var _$o_pset = $args.pop();
var _$o_colors = $args.pop();
var _$o_clipshape = $args.pop();
var _$o_H = $args.pop();
var _$o_W = $args.pop();
var __r_1933 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_1933 = $value(_$o_colors[0]);
__0_$o_color0 = $value(__r_1933);
var __r_1934 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_1934 = $value(_$o_colors[1]);
__0_$o_color1 = $value(__r_1934);
var __r_1935 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_1935 = $value(_$o_colors[2]);
__0_$o_color2 = $value(__r_1935);
var __r_1936 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_1936 = $value(_$o_colors[3]);
__0_$o_color3 = $value(__r_1936);
__0_$o_preset[0] = $value(_$o_pset[0]);
var __r_1937 = null;
var __r_1938 = 0;
__r_1938 = new $typed_cons.u32([_$o_seed[0]])[0]
$args.push($typed_value(__r_1938,"u32"));
__r_1937=$assign(__r_1937,await __func_ovld_seed_PFLFBD_func_$L_tup_$L_u32_$7__$9_void_$7_());
var __179_$o_drawdat = Object.assign([Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})],{__type:{"con":"tup","elt":[{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}]}});
var __r_1939 = Object.assign([Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}}),Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})],{__type:{"con":"tup","elt":[{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]},{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}]}});
$args.push(_$o_clipshape);
$args.push(__0_$o_preset)
$args.push(__0_$o_paths)
$args.push(__0_$o_visited)
$args.push(__0_$o_corner_qs)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_celli)
$args.push(__0_$o_cells)
$args.push(__0_$o_H)
$args.push(__0_$o_W)
$args.push(__0_$o_sites)
$args.push(__0_$o_weights)
__r_1939=$assign(__r_1939,await __func_ovld_process_OQGCAV_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$7_());
__0_$o_preset = $caps.pop();
__0_$o_paths = $caps.pop();
__0_$o_visited = $caps.pop();
__0_$o_corner_qs = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_celli = $caps.pop();
__0_$o_cells = $caps.pop();
__0_$o_H = $caps.pop();
__0_$o_W = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_weights = $caps.pop();
__179_$o_drawdat = $value(__r_1939);
var __179_$o_pg = null;
var __r_1940 = null;
var __r_1941 = 0;
__r_1941=$unwrap(_$o_W[0])*$unwrap(2);
$args.push($typed_value(__r_1941,"i32"));
var __r_1942 = 0;
__r_1942=$unwrap(_$o_H[0])*$unwrap(2);
$args.push($typed_value(__r_1942,"i32"));
__r_1940=$assign(__r_1940,await __func_ovld_create_graphics_HUZCYI_func_$L_tup_$L_i32_$9_i32_$7__$9_50_$o_Graphics_$7_());
__179_$o_pg = $value(__r_1940);
var __r_1943 = null;
__r_1943 = $value(__179_$o_pg);
$args.push(__r_1943);
var __r_1944 = null;
__r_1944=$assign(__r_1944,await __func_ovld_begin_GZVGCL_func_$L_tup_$L__$7__$9_void_$7_());
var __r_1945 = null;
var __r_1946 = 0;
__r_1946 = new $typed_cons.f32([2])[0]
$args.push($typed_value(__r_1946,"f32"));
var __r_1947 = 0;
__r_1947 = new $typed_cons.f32([2])[0]
$args.push($typed_value(__r_1947,"f32"));
__r_1945=$assign(__r_1945,await __func_ovld_scale_OQFVPB_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_());
var __r_1948 = null;
var __r_1949 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
__r_1949 = $value(__179_$o_drawdat[0]);
$args.push(__r_1949);
var __r_1950 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
__r_1950 = $value(__179_$o_drawdat[1]);
$args.push(__r_1950);
var __r_1951 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
__r_1951 = $value(__179_$o_drawdat[2]);
$args.push(__r_1951);
var __r_1952 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
__r_1952 = $value(__179_$o_drawdat[3]);
$args.push(__r_1952);
var __r_1953 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
__r_1953 = $value(__179_$o_drawdat[4]);
$args.push(__r_1953);
$args.push(__0_$o_color3)
$args.push(__0_$o_color2)
$args.push(__0_$o_color0)
$args.push(__0_$o_color1)
__r_1948=$assign(__r_1948,await __func_ovld_render_RPTSVK_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_void_$7_());
__0_$o_color3 = $caps.pop();
__0_$o_color2 = $caps.pop();
__0_$o_color0 = $caps.pop();
__0_$o_color1 = $caps.pop();
var __r_1954 = null;
__r_1954 = $value(__179_$o_pg);
$args.push(__r_1954);
var __r_1955 = null;
__r_1955=$assign(__r_1955,await __func_ovld_end_MTYLFW_func_$L_tup_$L__$7__$9_void_$7_());
$caps.push(__0_$o_color0);
$caps.push(__0_$o_color1);
$caps.push(__0_$o_color2);
$caps.push(__0_$o_color3);
$caps.push(__0_$o_preset);
$caps.push(__0_$o_weights);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_paths);
return __179_$o_pg;
return;
$caps.push(__0_$o_color0);
$caps.push(__0_$o_color1);
$caps.push(__0_$o_color2);
$caps.push(__0_$o_color3);
$caps.push(__0_$o_preset);
$caps.push(__0_$o_weights);
$caps.push(__0_$o_sites);
$caps.push(__0_$o_cells);
$caps.push(__0_$o_celli);
$caps.push(__0_$o_corner_xs);
$caps.push(__0_$o_corner_ns);
$caps.push(__0_$o_corner_ss);
$caps.push(__0_$o_corner_qs);
$caps.push(__0_$o_visited);
$caps.push(__0_$o_paths);
return;
default:$goto=null;break;}}}
async function __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_a = $args.pop();
var __r_1956 = 0;
__r_1956=$assign(__r_1956,await __func_ovld_random_ZSJXOM_func_$L_tup_$L__$7__$9_f32_$7_());
__r_1956=$unwrap(__r_1956)*$unwrap(_$o_a[0]);
return __r_1956;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_random_ZSJXOM_func_$L_tup_$L__$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1957 = 0;
RYVVCD = $rand.random("f32");
if (RYVVCD instanceof Promise) {RYVVCD = await RYVVCD;}
__r_1957=$assign(__r_1957,RYVVCD);
return __r_1957;
return;
default:$goto=null;break;}}}
async function __func_ovld_random_ZSJXOM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __202_$o_b = $args.pop();
var __202_$o_a = $args.pop();
var __r_1958 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1959 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1959[0]=__202_$o_b[0]-__202_$o_a[0];
__r_1959[1]=__202_$o_b[1]-__202_$o_a[1];
$args.push($typed_value(__r_1959,{"con":"vec","elt":["f32",2]}));
__r_1958=$assign(__r_1958,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_());
var __r_1960 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_1960[0]=__202_$o_a[0]+__r_1958[0];
__r_1960[1]=__202_$o_a[1]+__r_1958[1];
return __r_1960;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_random_ZSJXOM_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __205_$o_a = $args.pop();
var __r_1961 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_1962 = 0;
var __r_1963 = 0;
__r_1963 = $value(__205_$o_a[0]);
$args.push($typed_value(__r_1963,"f32"));
__r_1962=$assign(__r_1962,await __func_ovld___lambda_SZVYDJ_QRLFYA_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1961[0] = $value(__r_1962);
var __r_1964 = 0;
var __r_1965 = 0;
__r_1965 = $value(__205_$o_a[1]);
$args.push($typed_value(__r_1965,"f32"));
__r_1964=$assign(__r_1964,await __func_ovld___lambda_SZVYDJ_QRLFYA_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_1961[1] = $value(__r_1964);
return __r_1961;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __724_$o_b = $args.pop();
var __724_$o_a = $args.pop();
var __r_1966 = 0;
var __r_1967 = 0;
__r_1967=$unwrap(__724_$o_b[0])-$unwrap(__724_$o_a[0]);
$args.push($typed_value(__r_1967,"f32"));
__r_1966=$assign(__r_1966,await __func_ovld_random_ZSJXOM_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_1968 = 0;
__r_1968=$unwrap(__724_$o_a[0])+$unwrap(__r_1966);
return __r_1968;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_seed_PFLFBD_func_$L_tup_$L_u32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1969 = null;
CHZEJI = $rand.seed("void");
if (CHZEJI instanceof Promise) {CHZEJI = await CHZEJI;}
__r_1969=$assign(__r_1969,CHZEJI);
return __r_1969;
return;
default:$goto=null;break;}}}
async function __func_ovld_line_intersect_YORLGD_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_i32_$7__$9_tup_$L_i32_$9_vec_$L_f32_$9_2_$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1970 = Object.assign([Object.assign(new $typed_cons.i32(1),{__type:"i32"}),Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}})],{__type:{"con":"tup","elt":["i32",{"con":"vec","elt":["f32",2]}]}});
BGCFWB = $geom.line_intersect({"con":"tup","elt":["i32",{"con":"vec","elt":["f32",2]}]});
if (BGCFWB instanceof Promise) {BGCFWB = await BGCFWB;}
__r_1970=$assign(__r_1970,BGCFWB);
return __r_1970;
return;
default:$goto=null;break;}}}
async function __func_ovld_convex_hull_WARPFW_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1971 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
HUCAEQ = $geom.convex_hull({"con":"list","elt":[{"con":"vec","elt":["f32",2]}]});
if (HUCAEQ instanceof Promise) {HUCAEQ = await HUCAEQ;}
__r_1971=$assign(__r_1971,HUCAEQ);
return __r_1971;
return;
default:$goto=null;break;}}}
async function __func_ovld_pt_in_poly_BKVADL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1972 = 0;
DNFTJX = $geom.pt_in_poly("i32");
if (DNFTJX instanceof Promise) {DNFTJX = await DNFTJX;}
__r_1972=$assign(__r_1972,DNFTJX);
return __r_1972;
return;
default:$goto=null;break;}}}
async function __func_ovld_voronoi_BSTGDO_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1973 = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
PKNCRZ = $geom.voronoi({"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]});
if (PKNCRZ instanceof Promise) {PKNCRZ = await PKNCRZ;}
__r_1973=$assign(__r_1973,PKNCRZ);
return __r_1973;
return;
default:$goto=null;break;}}}
async function __func_ovld_curve_UPCVVE_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_list_$L_f32_$7__$9_f32_$9_i32_$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1974 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
ZXCAGS = $geom.curve({"con":"vec","elt":["f32",2]});
if (ZXCAGS instanceof Promise) {ZXCAGS = await ZXCAGS;}
__r_1974=$assign(__r_1974,ZXCAGS);
return __r_1974;
return;
default:$goto=null;break;}}}
async function __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1975 = 0;
ZDHAEN = $math.sin("f32");
if (ZDHAEN instanceof Promise) {ZDHAEN = await ZDHAEN;}
__r_1975=$assign(__r_1975,ZDHAEN);
return __r_1975;
return;
default:$goto=null;break;}}}
async function __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1976 = 0;
YCZUEU = $math.cos("f32");
if (YCZUEU instanceof Promise) {YCZUEU = await YCZUEU;}
__r_1976=$assign(__r_1976,YCZUEU);
return __r_1976;
return;
default:$goto=null;break;}}}
async function __func_ovld_abs_PMVDIS_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1977 = 0;
YAFSAZ = $math.abs("f32");
if (YAFSAZ instanceof Promise) {YAFSAZ = await YAFSAZ;}
__r_1977=$assign(__r_1977,YAFSAZ);
return __r_1977;
return;
default:$goto=null;break;}}}
async function __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1978 = 0;
RDFLUS = $math.atan2("f32");
if (RDFLUS instanceof Promise) {RDFLUS = await RDFLUS;}
__r_1978=$assign(__r_1978,RDFLUS);
return __r_1978;
return;
default:$goto=null;break;}}}
async function __func_ovld_sqrt_MWAJTL_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1979 = 0;
PUGZLU = $math.sqrt("f32");
if (PUGZLU instanceof Promise) {PUGZLU = await PUGZLU;}
__r_1979=$assign(__r_1979,PUGZLU);
return __r_1979;
return;
default:$goto=null;break;}}}
async function __func_ovld_slice_NXQHGA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_i32_$9_i32_$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1980 = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
ZFZEUS = $list.slice({"con":"list","elt":[{"con":"vec","elt":["f32",2]}]});
if (ZFZEUS instanceof Promise) {ZFZEUS = await ZFZEUS;}
__r_1980=$assign(__r_1980,ZFZEUS);
return __r_1980;
return;
default:$goto=null;break;}}}
async function __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_f32_$7__$9_i32_$9_f32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1981 = 0;
XHAQWY = $list.insert("i32");
if (XHAQWY instanceof Promise) {XHAQWY = await XHAQWY;}
__r_1981=$assign(__r_1981,XHAQWY);
return __r_1981;
return;
default:$goto=null;break;}}}
async function __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_i32_$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1982 = 0;
UXOYFG = $list.insert("i32");
if (UXOYFG instanceof Promise) {UXOYFG = await UXOYFG;}
__r_1982=$assign(__r_1982,UXOYFG);
return __r_1982;
return;
default:$goto=null;break;}}}
async function __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$9_i32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1983 = 0;
YWZXLZ = $list.insert("i32");
if (YWZXLZ instanceof Promise) {YWZXLZ = await YWZXLZ;}
__r_1983=$assign(__r_1983,YWZXLZ);
return __r_1983;
return;
default:$goto=null;break;}}}
async function __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_i32_$9_list_$L_i32_$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1984 = 0;
VWOWTX = $list.insert("i32");
if (VWOWTX instanceof Promise) {VWOWTX = await VWOWTX;}
__r_1984=$assign(__r_1984,VWOWTX);
return __r_1984;
return;
default:$goto=null;break;}}}
async function __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1985 = 0;
ELZQDC = $list.insert("i32");
if (ELZQDC instanceof Promise) {ELZQDC = await ELZQDC;}
__r_1985=$assign(__r_1985,ELZQDC);
return __r_1985;
return;
default:$goto=null;break;}}}
async function __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1986 = 0;
KYQKQB = $list.length("i32");
if (KYQKQB instanceof Promise) {KYQKQB = await KYQKQB;}
__r_1986=$assign(__r_1986,KYQKQB);
return __r_1986;
return;
default:$goto=null;break;}}}
async function __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1987 = 0;
FEXBVJ = $list.length("i32");
if (FEXBVJ instanceof Promise) {FEXBVJ = await FEXBVJ;}
__r_1987=$assign(__r_1987,FEXBVJ);
return __r_1987;
return;
default:$goto=null;break;}}}
async function __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_f32_$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1988 = 0;
BTAGQJ = $list.length("i32");
if (BTAGQJ instanceof Promise) {BTAGQJ = await BTAGQJ;}
__r_1988=$assign(__r_1988,BTAGQJ);
return __r_1988;
return;
default:$goto=null;break;}}}
async function __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1989 = 0;
HVAXYL = $list.length("i32");
if (HVAXYL instanceof Promise) {HVAXYL = await HVAXYL;}
__r_1989=$assign(__r_1989,HVAXYL);
return __r_1989;
return;
default:$goto=null;break;}}}
async function __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_1990 = 0;
OJSLWY = $list.length("i32");
if (OJSLWY instanceof Promise) {OJSLWY = await OJSLWY;}
__r_1990=$assign(__r_1990,OJSLWY);
return __r_1990;
return;
default:$goto=null;break;}}}
async function __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __190_$o_x = $args.pop();
var __190_$o_a = $args.pop();
var __r_1991 = 0;
$args.push(__190_$o_a);
var __r_1992 = 0;
$args.push(__190_$o_a);
__r_1992=$assign(__r_1992,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_f32_$7__$7__$9_i32_$7_());
$args.push($typed_value(__r_1992,"i32"));
$args.push($typed_value(__190_$o_x,"f32"));
__r_1991=$assign(__r_1991,await __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_f32_$7__$9_i32_$9_f32_$7__$9_i32_$7_());
return __r_1991;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __224_$o_x = $args.pop();
var __224_$o_a = $args.pop();
var __r_1993 = 0;
$args.push(__224_$o_a);
var __r_1994 = 0;
$args.push(__224_$o_a);
__r_1994=$assign(__r_1994,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
$args.push($typed_value(__r_1994,"i32"));
$args.push($typed_value(__224_$o_x,{"con":"vec","elt":["f32",2]}));
__r_1993=$assign(__r_1993,await __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$9_i32_$9_vec_$L_f32_$9_2_$7__$7__$9_i32_$7_());
return __r_1993;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __253_$o_x = $args.pop();
var __253_$o_a = $args.pop();
var __r_1995 = 0;
$args.push(__253_$o_a);
var __r_1996 = 0;
$args.push(__253_$o_a);
__r_1996=$assign(__r_1996,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
$args.push($typed_value(__r_1996,"i32"));
$args.push($typed_value(__253_$o_x,"i32"));
__r_1995=$assign(__r_1995,await __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$9_i32_$7__$9_i32_$7_());
return __r_1995;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_list_$L_i32_$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __288_$o_x = $args.pop();
var __288_$o_a = $args.pop();
var __r_1997 = 0;
$args.push(__288_$o_a);
var __r_1998 = 0;
$args.push(__288_$o_a);
__r_1998=$assign(__r_1998,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$7__$9_i32_$7_());
$args.push($typed_value(__r_1998,"i32"));
$args.push(__288_$o_x);
__r_1997=$assign(__r_1997,await __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_list_$L_i32_$7__$7__$9_i32_$9_list_$L_i32_$7__$7__$9_i32_$7_());
return __r_1997;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __464_$o_x = $args.pop();
var __464_$o_a = $args.pop();
var __r_1999 = 0;
$args.push(__464_$o_a);
var __r_2000 = 0;
$args.push(__464_$o_a);
__r_2000=$assign(__r_2000,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$7__$9_i32_$7_());
$args.push($typed_value(__r_2000,"i32"));
$args.push(__464_$o_x);
__r_1999=$assign(__r_1999,await __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$9_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_i32_$7_());
return __r_1999;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_filter_KTKISG_func_$L_tup_$L_list_$L_i32_$7__$9_func_$L_tup_$L_i32_$7__$9_i32_$7__$7__$9_list_$L_i32_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __265_$o_f = $args.pop();
var __265_$o_a = $args.pop();
var __266_$o_b = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_2001 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__266_$o_b = $value(__r_2001);
var __267_$o_i = 0;
__267_$o_i = $value(0);
case 627:/*loopstart_PNVECY*/
var __r_2002 = 0;
$args.push(__265_$o_a);
__r_2002=$assign(__r_2002,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_i32_$7__$7__$9_i32_$7_());
var __r_2003 = 0;
__r_2003=Number(__267_$o_i<__r_2002);
if (!__r_2003){$goto=631;/*loopend_JPFCOH*/ continue $$;}
var __r_2004 = 0;
var __r_2005 = 0;
__r_2005 = $value(__265_$o_a[__267_$o_i]);
$args.push($typed_value(__r_2005,"i32"));
$args.push(...__265_$o_f.__captr.map($value))
__r_2004=$assign(__r_2004,await __265_$o_f.__funptr());
case 628:/*condstart_YJAJZY*/
if (!__r_2004){$goto=629;/*endif_YCGPTM*/ continue $$;}
var __r_2006 = 0;
$args.push(__266_$o_b);
var __r_2007 = 0;
__r_2007 = $value(__265_$o_a[__267_$o_i]);
$args.push($typed_value(__r_2007,"i32"));
__r_2006=$assign(__r_2006,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_i32_$7__$9_i32_$7__$9_i32_$7_());
case 629:/*endif_YCGPTM*/
case 630:/*cont_TJCKKJ*/
var __r_2008 = 0;
__r_2008=$unwrap(__267_$o_i)+$unwrap(1);
__267_$o_i = $value(__r_2008);
$goto=627;/*loopstart_PNVECY*/ continue $$;
case 631:/*loopend_JPFCOH*/
return __266_$o_b;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_mag_EEAJOW_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2009 = 0;
BSEVZL = $vec.mag("f32");
if (BSEVZL instanceof Promise) {BSEVZL = await BSEVZL;}
__r_2009=$assign(__r_2009,BSEVZL);
return __r_2009;
return;
default:$goto=null;break;}}}
async function __func_ovld_dir_ESFFWN_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2010 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
EBOXTH = $vec.dir({"con":"vec","elt":["f32",2]});
if (EBOXTH instanceof Promise) {EBOXTH = await EBOXTH;}
__r_2010=$assign(__r_2010,EBOXTH);
return __r_2010;
return;
default:$goto=null;break;}}}
async function __func_ovld__begin_fbo_GQFZLQ_func_$L_tup_$L_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2011 = null;
ECZQKN = $drw._begin_fbo("void");
if (ECZQKN instanceof Promise) {ECZQKN = await ECZQKN;}
__r_2011=$assign(__r_2011,ECZQKN);
return __r_2011;
return;
default:$goto=null;break;}}}
async function __func_ovld__end_fbo_NJKWQW_func_$L_tup_$L__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2012 = null;
WWRGJE = $drw._end_fbo("void");
if (WWRGJE instanceof Promise) {WWRGJE = await WWRGJE;}
__r_2012=$assign(__r_2012,WWRGJE);
return __r_2012;
return;
default:$goto=null;break;}}}
async function __func_ovld_begin_shape_ZNBSZT_func_$L_tup_$L__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2013 = null;
AKXTFU = $drw.begin_shape("void");
if (AKXTFU instanceof Promise) {AKXTFU = await AKXTFU;}
__r_2013=$assign(__r_2013,AKXTFU);
return __r_2013;
return;
default:$goto=null;break;}}}
async function __func_ovld_end_shape_FECDUL_func_$L_tup_$L__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2014 = null;
$args.push(Object.assign(new $typed_cons.i32([0]),{__type:'i32'}));
__r_2014=$assign(__r_2014,await __func_ovld_end_shape_FECDUL_func_$L_tup_$L_i32_$7__$9_void_$7_());
return;
default:$goto=null;break;}}}
async function __func_ovld_end_shape_FECDUL_func_$L_tup_$L_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2015 = null;
GFLMMZ = $drw.end_shape("void");
if (GFLMMZ instanceof Promise) {GFLMMZ = await GFLMMZ;}
__r_2015=$assign(__r_2015,GFLMMZ);
return __r_2015;
return;
default:$goto=null;break;}}}
async function __func_ovld_vertex_TIMLPC_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2016 = null;
BMQDIT = $drw.vertex("void");
if (BMQDIT instanceof Promise) {BMQDIT = await BMQDIT;}
__r_2016=$assign(__r_2016,BMQDIT);
return __r_2016;
return;
default:$goto=null;break;}}}
async function __func_ovld_background_KBTDLY_func_$L_tup_$L_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_r = $args.pop();
var __r_2017 = null;
$args.push($typed_value(_$o_r,"f32"));
$args.push($typed_value(_$o_r,"f32"));
$args.push($typed_value(_$o_r,"f32"));
$args.push(Object.assign(new $typed_cons.f32([1]),{__type:'f32'}));
__r_2017=$assign(__r_2017,await __func_ovld_background_KBTDLY_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$7__$9_void_$7_());
return;
default:$goto=null;break;}}}
async function __func_ovld_background_KBTDLY_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2018 = null;
KUMOMX = $drw.background("void");
if (KUMOMX instanceof Promise) {KUMOMX = await KUMOMX;}
__r_2018=$assign(__r_2018,KUMOMX);
return __r_2018;
return;
default:$goto=null;break;}}}
async function __func_ovld_fill_DUZWVO_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_b = $args.pop();
var _$o_g = $args.pop();
var _$o_r = $args.pop();
var __r_2019 = null;
$args.push($typed_value(_$o_r,"f32"));
$args.push($typed_value(_$o_g,"f32"));
$args.push($typed_value(_$o_b,"f32"));
$args.push(Object.assign(new $typed_cons.f32([1]),{__type:'f32'}));
__r_2019=$assign(__r_2019,await __func_ovld_fill_DUZWVO_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$7__$9_void_$7_());
return;
default:$goto=null;break;}}}
async function __func_ovld_fill_DUZWVO_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2020 = null;
BDUAYN = $drw.fill("void");
if (BDUAYN instanceof Promise) {BDUAYN = await BDUAYN;}
__r_2020=$assign(__r_2020,BDUAYN);
return __r_2020;
return;
default:$goto=null;break;}}}
async function __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_b = $args.pop();
var _$o_g = $args.pop();
var _$o_r = $args.pop();
var __r_2021 = null;
$args.push($typed_value(_$o_r,"f32"));
$args.push($typed_value(_$o_g,"f32"));
$args.push($typed_value(_$o_b,"f32"));
$args.push(Object.assign(new $typed_cons.f32([1]),{__type:'f32'}));
__r_2021=$assign(__r_2021,await __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$7__$9_void_$7_());
return;
default:$goto=null;break;}}}
async function __func_ovld_stroke_CEAAVE_func_$L_tup_$L_f32_$9_f32_$9_f32_$9_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2022 = null;
LOEOYC = $drw.stroke("void");
if (LOEOYC instanceof Promise) {LOEOYC = await LOEOYC;}
__r_2022=$assign(__r_2022,LOEOYC);
return __r_2022;
return;
default:$goto=null;break;}}}
async function __func_ovld_stroke_weight_PLKJWH_func_$L_tup_$L_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2023 = null;
GEYKSI = $drw.stroke_weight("void");
if (GEYKSI instanceof Promise) {GEYKSI = await GEYKSI;}
__r_2023=$assign(__r_2023,GEYKSI);
return __r_2023;
return;
default:$goto=null;break;}}}
async function __func_ovld_no_fill_NHCOQE_func_$L_tup_$L__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2024 = null;
CWFDPI = $drw.no_fill("void");
if (CWFDPI instanceof Promise) {CWFDPI = await CWFDPI;}
__r_2024=$assign(__r_2024,CWFDPI);
return __r_2024;
return;
default:$goto=null;break;}}}
async function __func_ovld_scale_OQFVPB_func_$L_tup_$L_f32_$9_f32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2025 = null;
GAENNV = $drw.scale("void");
if (GAENNV instanceof Promise) {GAENNV = await GAENNV;}
__r_2025=$assign(__r_2025,GAENNV);
return __r_2025;
return;
default:$goto=null;break;}}}
async function __func_ovld__init_graphics_LVKOPP_func_$L_tup_$L_50_$o_Graphics_$9_i32_$9_i32_$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __r_2026 = null;
YCMATE = $drw._init_graphics("void");
if (YCMATE instanceof Promise) {YCMATE = await YCMATE;}
__r_2026=$assign(__r_2026,YCMATE);
return __r_2026;
return;
default:$goto=null;break;}}}
async function __func_ovld_create_graphics_HUZCYI_func_$L_tup_$L_i32_$9_i32_$7__$9_50_$o_Graphics_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_h = $args.pop();
var _$o_w = $args.pop();
var __802_$o_pg = null;
var __r_2027 = null;
{
var _$o_this = {__type:"50.Graphics"};
_$o_this["this"] = null;
_$o_this["fbo"] = 0;
_$o_this["w"] = 0;
_$o_this["h"] = 0;
_$o_this["this"] = $value(_$o_this);
__r_2027 = _$o_this;
}
__802_$o_pg = $value(__r_2027);
var __r_2028 = null;
$args.push(__802_$o_pg);
$args.push($typed_value(_$o_w,"i32"));
$args.push($typed_value(_$o_h,"i32"));
__r_2028=$assign(__r_2028,await __func_ovld__init_graphics_LVKOPP_func_$L_tup_$L_50_$o_Graphics_$9_i32_$9_i32_$7__$9_void_$7_());
return __802_$o_pg;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_begin_GZVGCL_func_$L_tup_$L__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __57_$o_this = $args.pop();
var __r_2029 = null;
var __r_2030 = 0;
__r_2030 = $value(__57_$o_this["fbo"]);
$args.push($typed_value(__r_2030,"i32"));
__r_2029=$assign(__r_2029,await __func_ovld__begin_fbo_GQFZLQ_func_$L_tup_$L_i32_$7__$9_void_$7_());
return;
default:$goto=null;break;}}}
async function __func_ovld_end_MTYLFW_func_$L_tup_$L__$7__$9_void_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var __57_$o_this = $args.pop();
var __r_2031 = null;
__r_2031=$assign(__r_2031,await __func_ovld__end_fbo_NJKWQW_func_$L_tup_$L__$7__$9_void_$7_());
return;
default:$goto=null;break;}}}
async function __func_ovld___lambda_SZVYDJ_QRLFYA_func_$L_tup_$L_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_x = $args.pop();
var __r_2032 = 0;
__r_2032=$assign(__r_2032,await __func_ovld_random_ZSJXOM_func_$L_tup_$L__$7__$9_f32_$7_());
__r_2032=$unwrap(__r_2032)*$unwrap(_$o_x[0]);
return __r_2032;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld___lambda_KRWMUV_IPXJVP_func_$L_tup_$L_i32_$7__$9_i32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_x = $args.pop();
var __r_2033 = 0;
__r_2033=$unwrap(0)-$unwrap(1);
var __r_2034 = 0;
__r_2034=Number(_$o_x[0]!=__r_2033);
return __r_2034;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_thomas_HQSCTN_func_$L_tup_$L_list_$L_f32_$7__$9_list_$L_f32_$7__$9_list_$L_f32_$7__$9_list_$L_f32_$7__$7__$9_list_$L_f32_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_D = $args.pop();
var _$o_C = $args.pop();
var _$o_B = $args.pop();
var _$o_A = $args.pop();
var __573_$o_n = 0;
var __r_2035 = 0;
$args.push(_$o_B);
__r_2035=$assign(__r_2035,await __func_ovld_length_GVVBBA_func_$L_tup_$L_list_$L_f32_$7__$7__$9_i32_$7_());
__r_2035=$unwrap(__r_2035)-$unwrap(1);
__573_$o_n = $value(__r_2035);
var __573_$o_Cp = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_2036 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_2037 = 0;
__r_2037 = $value(_$o_C[0]);
var __r_2038 = 0;
__r_2038 = $value(_$o_B[0]);
__r_2037=$unwrap(__r_2037)/$unwrap(__r_2038);
__r_2036[0] = $value(__r_2037);
__573_$o_Cp = $value(__r_2036);
var __573_$o_Dp = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_2039 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_2040 = 0;
__r_2040 = $value(_$o_D[0]);
var __r_2041 = 0;
__r_2041 = $value(_$o_B[0]);
__r_2040=$unwrap(__r_2040)/$unwrap(__r_2041);
__r_2039[0] = $value(__r_2040);
__573_$o_Dp = $value(__r_2039);
var __575_$o_i = 0;
__575_$o_i = $value(1);
case 656:/*loopstart_MOTAGM*/
var __r_2042 = 0;
__r_2042=Number(__575_$o_i<=__573_$o_n);
if (!__r_2042){$goto=658;/*loopend_QWZXDR*/ continue $$;}
var __576_$o_denom = 0;
var __r_2043 = 0;
__r_2043 = $value(_$o_B[__575_$o_i]);
var __r_2044 = 0;
__r_2044=$unwrap(__575_$o_i)-$unwrap(1);
var __r_2045 = 0;
__r_2045 = $value(__573_$o_Cp[__r_2044]);
var __r_2046 = 0;
__r_2046 = $value(_$o_A[__575_$o_i]);
__r_2045=$unwrap(__r_2045)*$unwrap(__r_2046);
__r_2043=$unwrap(__r_2043)-$unwrap(__r_2045);
__576_$o_denom = $value(__r_2043);
var __r_2047 = 0;
$args.push(__573_$o_Cp);
var __r_2048 = 0;
__r_2048 = $value(_$o_C[__575_$o_i]);
__r_2048=$unwrap(__r_2048)/$unwrap(__576_$o_denom);
$args.push($typed_value(__r_2048,"f32"));
__r_2047=$assign(__r_2047,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
var __r_2049 = 0;
$args.push(__573_$o_Dp);
var __r_2050 = 0;
__r_2050 = $value(_$o_D[__575_$o_i]);
var __r_2051 = 0;
__r_2051=$unwrap(__575_$o_i)-$unwrap(1);
var __r_2052 = 0;
__r_2052 = $value(__573_$o_Dp[__r_2051]);
var __r_2053 = 0;
__r_2053 = $value(_$o_A[__575_$o_i]);
__r_2052=$unwrap(__r_2052)*$unwrap(__r_2053);
__r_2050=$unwrap(__r_2050)-$unwrap(__r_2052);
__r_2050=$unwrap(__r_2050)/$unwrap(__576_$o_denom);
$args.push($typed_value(__r_2050,"f32"));
__r_2049=$assign(__r_2049,await __func_ovld_push_OPAMOZ_func_$L_tup_$L_list_$L_f32_$7__$9_f32_$7__$9_i32_$7_());
case 657:/*cont_DGQQFV*/
var __r_2054 = 0;
__r_2054=$unwrap(__575_$o_i)+$unwrap(1);
__575_$o_i = $value(__r_2054);
$goto=656;/*loopstart_MOTAGM*/ continue $$;
case 658:/*loopend_QWZXDR*/
var __573_$o_X = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_2055 = Object.assign(new Array(1).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
var __r_2056 = 0;
__r_2056 = $value(__573_$o_Dp[__573_$o_n]);
__r_2055[0] = $value(__r_2056);
__573_$o_X = $value(__r_2055);
var __577_$o_i = 0;
var __r_2057 = 0;
__r_2057=$unwrap(__573_$o_n)-$unwrap(1);
__577_$o_i = $value(__r_2057);
case 659:/*loopstart_LPAQEA*/
var __r_2058 = 0;
__r_2058=Number(__577_$o_i>=0);
if (!__r_2058){$goto=661;/*loopend_NMANHP*/ continue $$;}
var __r_2059 = 0;
$args.push(__573_$o_X);
$args.push(Object.assign(new $typed_cons.i32([0]),{__type:'i32'}));
var __r_2060 = 0;
__r_2060 = $value(__573_$o_Dp[__577_$o_i]);
var __r_2061 = 0;
__r_2061 = $value(__573_$o_Cp[__577_$o_i]);
var __r_2062 = 0;
__r_2062 = $value(__573_$o_X[0]);
__r_2061=$unwrap(__r_2061)*$unwrap(__r_2062);
__r_2060=$unwrap(__r_2060)-$unwrap(__r_2061);
$args.push($typed_value(__r_2060,"f32"));
__r_2059=$assign(__r_2059,await __func_ovld_insert_DEFXJA_func_$L_tup_$L_list_$L_f32_$7__$9_i32_$9_f32_$7__$9_i32_$7_());
case 660:/*cont_DWXDWE*/
var __r_2063 = 0;
__r_2063=$unwrap(__577_$o_i)-$unwrap(1);
__577_$o_i = $value(__r_2063);
$goto=659;/*loopstart_LPAQEA*/ continue $$;
case 661:/*loopend_NMANHP*/
return __573_$o_X;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_v_angle_between_BMGUAQ_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_w = $args.pop();
var _$o_v = $args.pop();
var __r_2064 = 0;
var __r_2065 = 0;
__r_2065 = $value(_$o_w[1]);
var __r_2066 = 0;
__r_2066 = $value(_$o_v[0]);
__r_2065=$unwrap(__r_2065)*$unwrap(__r_2066);
var __r_2067 = 0;
__r_2067 = $value(_$o_w[0]);
var __r_2068 = 0;
__r_2068 = $value(_$o_v[1]);
__r_2067=$unwrap(__r_2067)*$unwrap(__r_2068);
__r_2065=$unwrap(__r_2065)-$unwrap(__r_2067);
$args.push($typed_value(__r_2065,"f32"));
var __r_2069 = 0;
__r_2069 = $value(_$o_v[0]);
var __r_2070 = 0;
__r_2070 = $value(_$o_w[0]);
__r_2069=$unwrap(__r_2069)*$unwrap(__r_2070);
var __r_2071 = 0;
__r_2071 = $value(_$o_v[1]);
var __r_2072 = 0;
__r_2072 = $value(_$o_w[1]);
__r_2071=$unwrap(__r_2071)*$unwrap(__r_2072);
__r_2069=$unwrap(__r_2069)+$unwrap(__r_2071);
$args.push($typed_value(__r_2069,"f32"));
__r_2064=$assign(__r_2064,await __func_ovld_atan2_BNJVCC_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_());
return __r_2064;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_v_rot_SAJZTU_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_angle = $args.pop();
var _$o_v = $args.pop();
var __585_$o_ca = 0;
var __r_2073 = 0;
$args.push($typed_value(_$o_angle,"f32"));
__r_2073=$assign(__r_2073,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__585_$o_ca = $value(__r_2073);
var __585_$o_sa = 0;
var __r_2074 = 0;
$args.push($typed_value(_$o_angle,"f32"));
__r_2074=$assign(__r_2074,await __func_ovld_sin_DBQCVB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__585_$o_sa = $value(__r_2074);
var __r_2075 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_2076 = 0;
__r_2076 = $value(_$o_v[0]);
__r_2076=$unwrap(__r_2076)*$unwrap(__585_$o_ca);
var __r_2077 = 0;
__r_2077 = $value(_$o_v[1]);
__r_2077=$unwrap(__r_2077)*$unwrap(__585_$o_sa);
__r_2076=$unwrap(__r_2076)-$unwrap(__r_2077);
__r_2075[0] = $value(__r_2076);
var __r_2078 = 0;
__r_2078 = $value(_$o_v[0]);
__r_2078=$unwrap(__r_2078)*$unwrap(__585_$o_sa);
var __r_2079 = 0;
__r_2079 = $value(_$o_v[1]);
__r_2079=$unwrap(__r_2079)*$unwrap(__585_$o_ca);
__r_2078=$unwrap(__r_2078)+$unwrap(__r_2079);
__r_2075[1] = $value(__r_2078);
return __r_2075;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_rho_FNAEGN_func_$L_tup_$L_f32_$9_f32_$7__$9_f32_$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_beta = $args.pop();
var _$o_alpha = $args.pop();
var __584_$o_c = 0;
var __r_2080 = 0;
__r_2080=$unwrap(2)/$unwrap(3);
__584_$o_c = $value(__r_2080);
var __r_2081 = 0;
$args.push($typed_value(_$o_beta,"f32"));
__r_2081=$assign(__r_2081,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
var __r_2082 = 0;
__r_2082=$unwrap(__584_$o_c)*$unwrap(__r_2081);
var __r_2083 = 0;
__r_2083 = new $typed_cons.f32([1])[0]
__r_2083=$unwrap(__r_2083)+$unwrap(__r_2082);
var __r_2084 = 0;
__r_2084 = new $typed_cons.f32([1])[0]
__r_2084=$unwrap(__r_2084)-$unwrap(__584_$o_c);
var __r_2085 = 0;
$args.push($typed_value(_$o_alpha,"f32"));
__r_2085=$assign(__r_2085,await __func_ovld_cos_KEWVBB_func_$L_tup_$L_f32_$7__$9_f32_$7_());
__r_2084=$unwrap(__r_2084)*$unwrap(__r_2085);
__r_2083=$unwrap(__r_2083)+$unwrap(__r_2084);
var __r_2086 = 0;
__r_2086=$unwrap(2)/$unwrap(__r_2083);
return __r_2086;
return;
return;
default:$goto=null;break;}}}
async function __func_ovld_bul_OXJVIL_func_$L_tup_$L_vec_$L_f32_$9_2_$7__$9_vec_$L_f32_$9_2_$7__$9_f32_$7__$9_vec_$L_f32_$9_2_$7__$7_(){
let $goto = -1
$$: while ($goto){switch($goto){case -1:
var _$o_t = $args.pop();
var _$o_p1 = $args.pop();
var _$o_p0 = $args.pop();
var __688_$o_d = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_2087 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_2087[0]=_$o_p1[0]-_$o_p0[0];
__r_2087[1]=_$o_p1[1]-_$o_p0[1];
__688_$o_d = $value(__r_2087);
var __r_2088 = 0;
__r_2088 = new $typed_cons.f32([1])[0]
__r_2088=$unwrap(__r_2088)-$unwrap(_$o_t[0]);
var __r_2089 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_2089[0] = __r_2088
__r_2089[1] = __r_2088
var __r_2090 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_2090[0]=_$o_p0[0]*__r_2089[0];
__r_2090[1]=_$o_p0[1]*__r_2089[1];
var __r_2091 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_2091[0] = _$o_t[0]
__r_2091[1] = _$o_t[0]
var __r_2092 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_2092[0]=_$o_p1[0]*__r_2091[0];
__r_2092[1]=_$o_p1[1]*__r_2091[1];
__r_2090[0]=__r_2090[0]+__r_2092[0];
__r_2090[1]=__r_2090[1]+__r_2092[1];
var __r_2093 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
var __r_2094 = 0;
var __r_2095 = 0;
__r_2095 = $value(__688_$o_d[1]);
__r_2094=$unwrap(0)-$unwrap(__r_2095);
__r_2093[0] = $value(__r_2094);
var __r_2096 = 0;
__r_2096 = $value(__688_$o_d[0]);
__r_2093[1] = $value(__r_2096);
var __r_2097 = Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}});
__r_2097[0] = 0.15
__r_2097[1] = 0.15
__r_2093[0]=__r_2093[0]*__r_2097[0];
__r_2093[1]=__r_2093[1]*__r_2097[1];
__r_2090[0]=__r_2090[0]+__r_2093[0];
__r_2090[1]=__r_2090[1]+__r_2093[1];
return __r_2090;
return;
return;
default:$goto=0;break;}}}
let $goto = -1
$$: while ($goto){switch($goto){case -1:
globalThis.$rand = new function(){
  let that = this;

  let jsr = 0x5EED;
  function rand(){
    jsr^=(jsr<<17);
    jsr^=(jsr>>>13);
    jsr^=(jsr<<5);
    return (jsr>>>0)/4294967295;
  }
  var PERLIN_YWRAPB = 4; var PERLIN_YWRAP = 1<<PERLIN_YWRAPB;
  var PERLIN_ZWRAPB = 8; var PERLIN_ZWRAP = 1<<PERLIN_ZWRAPB;
  var PERLIN_SIZE = 4095;
  var perlin_octaves = 4;var perlin_amp_falloff = 0.5;
  var scaled_cosine = function(i) {return 0.5*(1.0-Math.cos(i*Math.PI));};
  var perlin;

  function noise(x,y,z) {
    y = y || 0; z = z || 0;
    if (perlin == null) {
      perlin = new Array(PERLIN_SIZE + 1);
      for (var i = 0; i < PERLIN_SIZE + 1; i++) {
        perlin[i] = rand();
      }
    }
    if (x<0) { x=-x; } if (y<0) { y=-y; } if (z<0) { z=-z; }
    var xi=Math.floor(x), yi=Math.floor(y), zi=Math.floor(z);
    var xf = x - xi; var yf = y - yi; var zf = z - zi;
    var rxf, ryf;
    var r=0; var ampl=0.5;
    var n1,n2,n3;
    for (var o=0; o<perlin_octaves; o++) {
      var of=xi+(yi<<PERLIN_YWRAPB)+(zi<<PERLIN_ZWRAPB);
      rxf = scaled_cosine(xf); ryf = scaled_cosine(yf);
      n1  = perlin[of&PERLIN_SIZE];
      n1 += rxf*(perlin[(of+1)&PERLIN_SIZE]-n1);
      n2  = perlin[(of+PERLIN_YWRAP)&PERLIN_SIZE];
      n2 += rxf*(perlin[(of+PERLIN_YWRAP+1)&PERLIN_SIZE]-n2);
      n1 += ryf*(n2-n1);
      of += PERLIN_ZWRAP;
      n2  = perlin[of&PERLIN_SIZE];
      n2 += rxf*(perlin[(of+1)&PERLIN_SIZE]-n2);
      n3  = perlin[(of+PERLIN_YWRAP)&PERLIN_SIZE];
      n3 += rxf*(perlin[(of+PERLIN_YWRAP+1)&PERLIN_SIZE]-n3);
      n2 += ryf*(n3-n2);
      n1 += scaled_cosine(zf)*(n2-n1);
      r += n1*ampl;
      ampl *= perlin_amp_falloff;
      xi<<=1; xf*=2; yi<<=1; yf*=2; zi<<=1; zf*=2;
      if (xf>=1.0) { xi++; xf--; }
      if (yf>=1.0) { yi++; yf--; }
      if (zf>=1.0) { zi++; zf--; }
    }
    return r;
  };


  that.noise = function(){
    let [x,y,z] = $pop_args(3);
    return noise(x,y,z);
  };
  that.noise_reseed = function(){
    if (perlin == null) perlin = new Array(PERLIN_SIZE + 1);
    for (var i = 0; i < PERLIN_SIZE + 1; i++) {
      perlin[i] = rand();
    }
  }
  that.noise_detail = function(){
    let [lod,falloff] = $pop_args(2);
    perlin_amp_falloff = falloff;
    perlin_octaves = lod;
  }
  that.seed = function(){
    let [x] = $pop_args(1);
    jsr = x;
  }
  that.random = function(){
    return rand();
  }
};
globalThis.$geom = new function(){
  let that = this;

  const LHS_CAPL   = 1
  const RHS_CAPL   = 4
  const LHS_CAPR   = 2
  const RHS_CAPR   = 8
  const RET_POINTS = 0
  const RET_PARAMS = 16
  const BY_COUNT   = 0
  const BY_SPACING = 1
  const MODE_POLYLINE = 0
  const MODE_POLYGON  =128
  const MODE_ALIGNED  = 0
  const MODE_ORIENTED =16
  const OP_INCLUDE =1
  const OP_EXCLUDE =2
  const TYPE_BEZIER   =16
  const TYPE_CATROM   =32
  const TYPE_BSPLINE  =48
  const ORD_QUADRATIC = 2
  const ORD_CUBIC     = 3

  function point_list_typed(x,nd){
    for (let i = 0; i < x.length; i++){
      x[i] = new Float32Array(x[i]);
      x[i].__type = {con:'vec',elt:['f32',nd]}
    }
    return x;
  }
  function point_list_list_typed(x,nd){
    for (let i = 0; i < x.length; i++){
      x[i] = point_list_typed(x[i],nd);
      x[i].__type = {con:'list',elt:[{con:'vec',elt:['f32',nd]}]}
    }
    return x;
  }

  function line_intersect_2d(
    p0x, p0y, p1x, p1y,
    q0x, q0y, q1x, q1y, flags
  ){
    let o0,o1;
    let d0x = p1x - p0x;
    let d0y = p1y - p0y;
    let d1x = q1x - q0x;
    let d1y = q1y - q0y;
    let vc = d0x * d1y - d0y * d1x;
    if (vc == 0) {
      return [0,0,0];
    }
    let vcn = vc * vc;
    let q0x_p0x = q0x - p0x;
    let q0y_p0y = q0y - p0y;
    let vc_vcn = vc / vcn;
    let t = (q0x_p0x * d1y - q0y_p0y * d1x) * vc_vcn;
    let s = (q0x_p0x * d0y - q0y_p0y * d0x) * vc_vcn;
    if (flags & RET_PARAMS){
      o0 = t;
      o1 = s;
    }else{
      o0 = p0x * (1-t) + p1x * t;
      o1 = p0y * (1-t) + p1y * t;
    }
    if (
      (0 <= t || !(flags & LHS_CAPL)) && 
      (t < 1 || !(flags & LHS_CAPR)) && 
      (0 <= s || !(flags & RHS_CAPL)) && 
      (s < 1 || !(flags & RHS_CAPR))
    ) {
      return [1,o0,o1];
    }
    return [0,o0,o1];
  }

  let DET3=(a,b,c,d,e,f,g,h,i)=>((a)*(e)*(i) + (b)*(f)*(g) + (c)*(d)*(h) - (c)*(e)*(g) - (b)*(d)*(i) - (a)*(f)*(h))

  function line_intersect_3d(
    p0x, p0y, p0z,
    p1x, p1y, p1z,
    q0x, q0y, q0z,
    q1x, q1y, q1z, flags
  ){
    let o0,o1,o2;
    let d0x = p1x - p0x;
    let d0y = p1y - p0y;
    let d0z = p1z - p0z;
    let d1x = q1x - q0x;
    let d1y = q1y - q0y;
    let d1z = q1z - q0z;
    let vcx = d0y*d1z-d0z*d1y;
    let vcy = d0z*d1x-d0x*d1z;
    let vcz = d0x*d1y-d0y*d1x;
    let vcn = vcx*vcx+vcy*vcy+vcz*vcz;
    if (vcn == 0){
      return [0,0,0,0];
    }
    let q0x_p0x = q0x - p0x;
    let q0y_p0y = q0y - p0y;
    let q0z_p0z = q0z - p0z;
    let t = DET3(q0x_p0x,q0y_p0y,q0z_p0z,d1x,d1y,d1z,vcx,vcy,vcz)/vcn;
    let s = DET3(q0x_p0x,q0y_p0y,q0z_p0z,d0x,d0y,d0z,vcx,vcy,vcz)/vcn;
    if (flags & RET_PARAMS){
      o0 = t;
      o1 = s;
      o2 = 0;
    }else{
      o0 = p0x * (1-t) + p1x * t;
      o1 = p0y * (1-t) + p1y * t;
      o2 = p0z * (1-t) + p1z * t;
    }
    if (
      (0 <= t || !(flags & LHS_CAPL)) && 
      (t <= 1 || !(flags & LHS_CAPR)) && 
      (0 <= s || !(flags & RHS_CAPL)) && 
      (s <= 1 || !(flags & RHS_CAPR))
    ) {
      return [1,o0,o1,o2];
    }
    return [0,o0,o1,o2];
  }

  that.line_intersect = function(retype){
    let [p0,p1,q0,q1,flags] = $pop_args(5);
    let v;
    let b,o0,o1,o2;
    if (p0.length == 2){
      ;[b,o0,o1] = line_intersect_2d(
        ...p0,...p1,...q0,...q1,flags
      );
      v = new Float32Array([o0,o1]);
      v.__type = {con:'vec',elt:['f32',2]}
    }else{
      ;[b,o0,o1,o2] = line_intersect_3d(
        ...p0,...p1,...q0,...q1,flags
      );
      v = new Float32Array([o0,o1,o2]);
      v.__type = {con:'vec',elt:['f32',3]}
    }
    let tup = [b,v];
    tup.__type = retype;
    return tup;
  }

  let acc_len = [];
  let n_acc_len = 0;
  that.poly_resample = function(){
    let [points, n, flags] = $pop_args(3);
    let n_points = points.length;
    let n_poly = n_points;
    if (flags & MODE_POLYGON){
      n_poly++;
    }
    if (n_poly+1 > n_acc_len){
      acc_len = new Array(n_acc_len = n_poly+1);
    }
    let tot_len = 0;
    for (let i = 0; i < n_poly-1; i++){
      let dx = points[i][0] - points[(i+1)%n_points][0];
      let dy = points[i][1] - points[(i+1)%n_points][1];
      tot_len += Math.sqrt(dx*dx+dy*dy);
      acc_len[i+1] = tot_len;
    }
    acc_len[0] = 0;
    acc_len[n_poly] = tot_len;
    let spacing = 0;
    let count = 0;
    if (flags & BY_SPACING){
      spacing = n;
      count = Math.ceil(tot_len/spacing);
    }else{ // BY_COUNT
      spacing = tot_len/n;
      count = Math.ceil(n);
    }
    let out = new Array(count);
    let idx = 0;
    let lidx = 0;
    for (let l = 0; l < tot_len; l+= spacing){
      let readout = 0;
      for (let i = lidx; i < n_poly; i++){
        if (acc_len[i] <= l && l < acc_len[i+1]){
          let t = (l-acc_len[i])/(acc_len[i+1]-acc_len[i]);
          let x = points[i][0]*(1-t)+points[(i+1)%n_points][0]*t;
          let y = points[i][1]*(1-t)+points[(i+1)%n_points][1]*t;
          out[idx] = [x,y];
          idx ++;
          lidx = i;
          if (idx == count){
            readout = 1;
          }
          break;
        }
      }
      if (readout) break;
    }
    if (!(flags & MODE_POLYGON)){
      out[count-1][0] = points[(n_poly-1)%n_points][0];
      out[count-1][1] = points[(n_poly-1)%n_points][1];
    }
    return point_list_typed(out,2);
  }

  let CWISE=(x0,y0,x1,y1,x2,y2)=>(((x1)-(x0))*((y2)-(y0)) - ((x2)-(x0))*((y1)-(y0)));

  function pt_in_poly(x,y, points){
    let n_points = points.length;
    let wn = 0;
    for (let i = 0, j = n_points-1; i < n_points; j = i++){
      let xi = points[i][0];
      let yi = points[i][1];
      let xj = points[j][0];
      let yj = points[j][1];
      if (yj <= y){
        if (yi > y){
          if (CWISE(xj,yj,xi,yi,x,y)>0){
            wn++;
          }
        }
      }else{
        if (yi <= y){
          if (CWISE(xj,yj,xi,yi,x,y)<0){
            wn--;
          }
        }
      }
    }
    return Number(wn != 0);
  }

  that.pt_in_poly = function(){
    let [pt,points] = $pop_args(3);
    return pt_in_poly(...pt,points);
  }

  function dist_pt_seg(x0,y0,x1,y1,x2,y2){
    let A = x0-x1;
    let B = y0-y1;
    let C = x2-x1;
    let D = y2-y1;
    let dot = A*C+B*D;
    let len_sq = C*C+D*D;
    let param = -1.0;
    if (len_sq != 0){
      param = dot/len_sq;
    }
    let xx,yy;
    if (param < 0){
      xx = x1; yy = y1;
    }else if (param > 1){
      xx = x2; yy = y2;
    }else{
      xx = x1 + param*C;
      yy = y1 + param*D;
    }
    let dx = x0-xx;
    let dy = y0-yy;
    return Math.sqrt(dx*dx+dy*dy);
  }

  that.poly_simplify = function(){
    let [points,eps] = $pop_args(2);
    function impl(points,start,end,eps){
      let n_points = end - start;
      if (n_points <= 2){
        return [
          points[start].slice(),
          points[start+1].slice()
        ];
      }
      let dmax = 0;
      let argmax = -1;
      for (let i = start+1; i < end-1; i++){
        let d = dist_pt_seg(
          ...points[i],
          ...points[start],
          ...points[end-1]
        );
        if (d > dmax){
          dmax = d;
          argmax = i;
        }
      }
      if (dmax > eps){
        let L = impl(points, start, argmax+1, eps);
        let R = impl(points, argmax, end, eps);
        out = L.slice(0,-1).concat(R);
      }else{
        out = [
          points[start].slice(),
          points[end-1].slice()
        ]
      }
      return out;
    }
    return point_list_typed(impl(points,0,points.length,eps));
  }

  let cur_px;
  let cur_py;
  function cmp_angle(a,b){
    let x0 = a[0] - cur_px;
    let y0 = a[1] - cur_py;
    let x1 = b[0] - cur_px;
    let y1 = b[1] - cur_py;
    let vc = x0*y1 - y0*x1;
    if (vc == 0){
      vc = x0+y0-x1-y1;
      return Math.sign(vc);
    }
    return -Math.sign(vc);
  }

  function convex_hull(points){
    let n_points = points.length;
    if (n_points<=1){
      return point_list_typed(points.map(x=>x.slice()));
    }
    let mi = 0;
    let my = Infinity;
    let mx = Infinity;
    for (let i = 0; i < n_points; i++){
      if (points[i][1]<my || (points[i][1]==my && points[i][0]<mx)){
        mx = points[i][0];
        my = points[i][1];
        mi = i;
      }
    }
    let [px,py] = points[mi];
    let sorted = points.slice(0,mi).concat(points.slice(mi+1));
    cur_px = px;
    cur_py = py;
    sorted.sort(cmp_angle);
    sorted = sorted.map(x=>x.slice());
    let stack = [[px,py],sorted[0]];
    for (let i = 0; i < n_points-1; i++){
      while (stack.length >= 2 && CWISE(
        ...stack[stack.length-2],
        ...stack[stack.length-1],
        ...sorted[i],
      )<=0){
        stack.pop()
      }
      stack.push(sorted[i])
    }
    return point_list_typed(stack);
  }

  that.convex_hull = function(){
    let [points] = $pop_args(1);
    return point_list_typed(convex_hull(points));
  }

  let PT_IN_TRI = (p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y) => (
    CWISE(p0x,p0y, p1x,p1y, p2x,p2y)>=0 &&
    CWISE(p0x,p0y, p2x,p2y, p3x,p3y)>=0 &&
    CWISE(p0x,p0y, p3x,p3y, p1x,p1y)>=0);
  
  function triangulate_simple(points){
    let n_points = points.length;
    let out = [];
    let skips = new Array(n_points).fill(0);
    let i = -1;
    let skipped = -1;
    while (out.length < (n_points-2)*3){
      i++;
      skipped++;
      i = i % n_points;
      i = (i+skips[i])%n_points;
      if (skipped > n_points){
        return out;
      }
      let i0 = i;

      let i1 = (i0+1) % n_points;
      i1 = (i1+skips[i1])%n_points;
      let i2 = (i1+1) % n_points;
      i2 = (i2+skips[i2])%n_points;
      if (CWISE(
        ...points[i0],
        ...points[i1],
        ...points[i2] 
      )<=0) continue;
      let ok = 1;
      for (let j = 0; j < n_points; j++){
        let j0 = j % n_points;
        j0 = (j0+skips[j0])%n_points;
        let j1 = (j0+1) % n_points;
        j1 = (j1+skips[j1])%n_points;
        let j2 = (j1+1) % n_points;
        j2 = (j2+skips[j2])%n_points;
        if (j1 == i0 || j1 == i1 || j1 == i2) continue;
        if (CWISE(
          ...points[j0],
          ...points[j1],
          ...points[j2] 
        )>=0) continue;
        if (PT_IN_TRI(
          ...points[j1],
          ...points[i0],
          ...points[i1],
          ...points[i2] 
        )){
          ok = 0;
          break;
        }
      }
      if (!ok) continue;
      out.push(i0,i1,i2)
      skips[i1] = skips[(i1+1)%n_points]+1;
      let k = i1;
      while (k = (k-1+n_points)%n_points, skips[k]){
        skips[k] += skips[i1];
      }
      i--;
      skipped = 0;
    }
    return out;
  }
  that.triangulate = function(){
    let [points] = $pop_args(1);
    return triangulate_simple(points.slice());
  }

  function circum_circle(xp,yp,x1,y1,x2,y2,x3,y3){
    let xc=0,yc=0,rsqr=0;
    const EPSILON = 0.000001;
    let m1,m2,mx1,mx2,my1,my2;
    let dx,dy,drsqr;
    let fabsy1y2 = Math.abs(y1-y2);
    let fabsy2y3 = Math.abs(y2-y3);
    if (fabsy1y2 < EPSILON && fabsy2y3 < EPSILON) return [0,xc,yc,rsqr];
    if (fabsy1y2 < EPSILON) {
      m2 = - (x3-x2) / (y3-y2);
      mx2 = (x2 + x3) / 2.0;
      my2 = (y2 + y3) / 2.0;
      xc = (x2 + x1) / 2.0;
      yc = m2 * (xc - mx2) + my2;
    } else if (fabsy2y3 < EPSILON) {
      m1 = - (x2-x1) / (y2-y1);
      mx1 = (x1 + x2) / 2.0;
      my1 = (y1 + y2) / 2.0;
      xc = (x3 + x2) / 2.0;
      yc = m1 * (xc - mx1) + my1;
    } else {
      m1 = - (x2-x1) / (y2-y1);
      m2 = - (x3-x2) / (y3-y2);
      mx1 = (x1 + x2) / 2.0;
      mx2 = (x2 + x3) / 2.0;
      my1 = (y1 + y2) / 2.0;
      my2 = (y2 + y3) / 2.0;
      xc = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
      if (fabsy1y2 > fabsy2y3) {
        yc = m1 * (xc - mx1) + my1;
      } else {
        yc = m2 * (xc - mx2) + my2;
      }
    }
    dx = x2 - xc;
    dy = y2 - yc;
    rsqr = dx*dx + dy*dy;
    dx = xp - xc;
    dy = yp - yc;
    drsqr = dx*dx + dy*dy;
    return [((drsqr - rsqr) <= EPSILON), xc,yc,rsqr];
  }
  function cmp_x(a,b){
    let x0 = a[0];
    let x1 = b[0];
    return Math.sign(x0-x1);
  }
  function delaunay_bowyer_watson_bourke(nv,pxyz,V){
    // based on https://paulbourke.net/papers/triangulate/
    let complete;
    let edges = [];
    let nedge = 0;
    let trimax;
    let inside;
    let ntri;
    let xp,yp,x1,y1,x2,y2,x3,y3,xc,yc,r;
    let xmin,xmax,ymin,ymax,xmid,ymid;
    let dx,dy,dmax;
    trimax = 4 * nv;
    complete = new Array(trimax);
    xmin = pxyz[0][0];
    ymin = pxyz[0][1];
    xmax = xmin;
    ymax = ymin;
    for (let i=1;i<nv;i++) {
      if (pxyz[i][0] < xmin) xmin = pxyz[i][0];
      if (pxyz[i][0] > xmax) xmax = pxyz[i][0];
      if (pxyz[i][1] < ymin) ymin = pxyz[i][1];
      if (pxyz[i][1] > ymax) ymax = pxyz[i][1];
    }
    dx = xmax - xmin;
    dy = ymax - ymin;
    dmax = (dx > dy) ? dx : dy;
    xmid = (xmax + xmin) / 2.0;
    ymid = (ymax + ymin) / 2.0;
    pxyz[nv+0][0] = xmid - 20 * dmax;
    pxyz[nv+0][1] = ymid - dmax;
    pxyz[nv+1][0] = xmid;
    pxyz[nv+1][1] = ymid + 20 * dmax;
    pxyz[nv+2][0] = xmid + 20 * dmax;
    pxyz[nv+2][1] = ymid - dmax;
    V[0] = nv;
    V[1] = nv+1;
    V[2] = nv+2;
    complete[0] = 0;
    ntri = 1;
    
    for (let i=0;i<nv;i++) {
      xp = pxyz[i][0];
      yp = pxyz[i][1];
      nedge = 0;
      for (let j=0;j<ntri;j++) {
        if (complete[j]) continue;
        x1 = pxyz[V[j*3+0]][0];
        y1 = pxyz[V[j*3+0]][1];
        x2 = pxyz[V[j*3+1]][0];
        y2 = pxyz[V[j*3+1]][1];
        x3 = pxyz[V[j*3+2]][0];
        y3 = pxyz[V[j*3+2]][1];
        ;[inside,xc,yc,r] = circum_circle(xp,yp,x1,y1,x2,y2,x3,y3);
        if (xc < xp && ((xp-xc)*(xp-xc)) > r) complete[j] = 1;
        if (inside) {
          edges[(nedge+0)*2+0] = V[j*3+0];
          edges[(nedge+0)*2+1] = V[j*3+1];
          edges[(nedge+1)*2+0] = V[j*3+1];
          edges[(nedge+1)*2+1] = V[j*3+2];
          edges[(nedge+2)*2+0] = V[j*3+2];
          edges[(nedge+2)*2+1] = V[j*3+0];
          nedge += 3;
          V[j*3+0] = V[(ntri-1)*3+0];
          V[j*3+1] = V[(ntri-1)*3+1];
          V[j*3+2] = V[(ntri-1)*3+2];
          complete[j] = complete[ntri-1];
          ntri--;
          j--;
        }
      }
      for (let j=0;j<nedge-1;j++) {
        for (let k=j+1;k<nedge;k++) {
          if ((edges[j*2] == edges[k*2+1]) && (edges[j*2+1] == edges[k*2])) {
            edges[j*2+0] = -1;
            edges[j*2+1] = -1;
            edges[k*2+0] = -1;
            edges[k*2+1] = -1;
          }
          if ((edges[j*2] == edges[k*2]) && (edges[j*2+1] == edges[k*2+1])) {
            edges[j*2+0] = -1;
            edges[j*2+1] = -1;
            edges[k*2+0] = -1;
            edges[k*2+1] = -1;
          }
        }
      }
      for (let j=0;j<nedge;j++) {
        if (edges[j*2] < 0 || edges[j*2+1] < 0) continue;
        V[ntri*3+0] = edges[j*2];
        V[ntri*3+1] = edges[j*2+1];
        V[ntri*3+2] = i;
        complete[ntri] = 0;
        ntri++;
      }
    }
    return ntri;
  }
  that.delaunay = function(){
    let [points] = $pop_args(1);
    let n_points = points.length;
    let pxyz = new Array(n_points);
    for (let i = 0; i < n_points; i++){
      pxyz[i] = [...points[i], i];
    }
    pxyz.sort(cmp_x);
    pxyz.push([0,0,-1],[0,0,-1],[0,0,-1]);

    let V = new Array(n_points*9);
    let ntri = delaunay_bowyer_watson_bourke(n_points, pxyz, V);

    for (let i=0;i<ntri;i++) {
      if (V[i*3+0] >= n_points || V[i*3+1] >= n_points || V[i*3+2] >= n_points) {
        V[i*3+0] = V[(ntri-1)*3+0];
        V[i*3+1] = V[(ntri-1)*3+1];
        V[i*3+2] = V[(ntri-1)*3+2];
        ntri--;
        i--;
      }
    }
    for (let i = 0; i < ntri*3; i++){
      V[i] = pxyz[V[i]][2];
    }
    return V.slice(0,ntri*3);
  }

  function site_add_vertex(points, sites, idx, x, y){
    let ang = Math.atan2(y-points[idx][1], x-points[idx][0]);
    let ii;
    for (ii = 0; ii < sites[idx].vs.length; ii++){
      if (ang < sites[idx].angs[ii]){
        break;
      }
    }
    sites[idx].angs.splice(ii,0,ang);
    sites[idx].vs.splice(ii,0,[x,y]);
  }

  that.voronoi = function(){
    let [points] = $pop_args(1);
    let n_points = points.length;
    let pxyz = new Array(n_points);
    for (let i = 0; i < n_points; i++){
      pxyz[i] = [...points[i], i];
    }
    pxyz.sort(cmp_x);
    pxyz.push([0,0,-1],[0,0,-1],[0,0,-1]);

    let V = new Array(n_points*9);
    let ntri = delaunay_bowyer_watson_bourke(n_points, pxyz, V);
    let sites = new Array(n_points).fill(0).map(_=>({
      angs:[],vs:[]
    }));

    for (let i = 0; i < ntri; i++){
      let i0 = V[i*3];
      let i1 = V[i*3+1];
      let i2 = V[i*3+2];
      let [inside,xc,yc,rsqr] = circum_circle(0,0, 
        pxyz[i0][0], pxyz[i0][1],
        pxyz[i1][0], pxyz[i1][1],
        pxyz[i2][0], pxyz[i2][1],
      );
      if (i0 < n_points) site_add_vertex(points,sites,pxyz[i0][2], xc,yc);
      if (i1 < n_points) site_add_vertex(points,sites,pxyz[i1][2], xc,yc);
      if (i2 < n_points) site_add_vertex(points,sites,pxyz[i2][2], xc,yc);
    }
    return point_list_list_typed(sites.map(x=>x.vs));
  }

  function aabb_2d(points){
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < points.length; i++){
      let x = points[i][0];
      let y = points[i][1];
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
    let w = maxX - minX;
    let h = maxY - minY;
    return [(minX+maxX)*0.5,(minY+maxY)*0.5,w/2,h/2,1,0,0,1];
  }

  function obb_2d_pca(points){
    let n_points = points.length;
    let meanX = 0;
    let meanY = 0;
    for (let i = 0; i < n_points; i++){
      meanX += points[i][0];
      meanY += points[i][1];
    }
    meanX /= n_points;
    meanY /= n_points;
    let covXX = 0, covXY = 0, covYY = 0;
    for (let i = 0; i < n_points; i++){
      let dx = points[i][0] - meanX;
      let dy = points[i][1] - meanY;
      covXX += dx*dx;
      covXY += dx*dy;
      covYY += dy*dy;
    }
    covXX /= n_points;
    covXY /= n_points;
    covYY /= n_points;
    let trace = covXX + covYY;
    let det = covXX*covYY - covXY*covXY;
    let temp = Math.sqrt((trace*trace)/4 - det);
    let eig1X = trace/2 + temp;
    let eig1Y = trace/2 - temp;
    let eigvec1X = 1;
    let eigvec1Y = 0;
    if (Math.abs(covXY) > 1e-6){
      eigvec1X = eig1X - covYY;
      eigvec1Y = covXY;
    }
    let mag = Math.hypot(eigvec1X,eigvec1Y);
    eigvec1X /= mag;
    eigvec1Y /= mag;
    let eigvec2X = -eigvec1Y;
    let eigvec2Y = eigvec1X;
    let minX = INFINITY, maxX = -INFINITY;
    let minY = INFINITY, maxY = -INFINITY;
    for (let i = 0; i < n_points; i++){
      let dx = points[i*2] - meanX;
      let dy = points[i*2+1] - meanY;
      let projX = dx*eigvec1X + dy*eigvec1Y;
      let projY = dx*eigvec2X + dy*eigvec2Y;
      minX = Math.min(minX, projX);
      maxX = Math.max(maxX, projX);
      minY = Math.min(minY, projY);
      maxY = Math.max(maxY, projY);
    }
    let w = maxX - minX;
    let h = maxY - minY;
    let cx = (maxX+minX)/2;
    let cy = (maxY+minY)/2;
    let ccx = cx*eigvec1X + cy*eigvec2X;
    let ccy = cx*eigvec1Y + cy*eigvec2Y;
    return [
      meanX+ccx,
      meanY+ccy,
      w/2,
      h/2,
      eigvec1X,
      eigvec2X,
      eigvec1Y,
      eigvec2Y,
    ]
  }

  function obb_2d_rotcal(points){
    let out = new Array(8).fill(0);
    let hull,nh;
    let RCHULL_PROJ = (ux,uy,idx)=>((ux)*hull[((idx)%nh)][0] + (uy)*hull[((idx)%nh)][1])
    let RCHULL_EDGE = (idx)=>{
      let ux = (hull[(((idx)+1)%nh)][0]-hull[((idx)%nh)][0]);
      let uy = (hull[(((idx)+1)%nh)][1]-hull[((idx)%nh)][1]); 
      let l = Math.hypot(ux,uy); 
      if (l){ux/=l; uy/=l;}
      return [ux,uy];
    }
    hull = convex_hull(points);
    nh = hull.length;
    let kMinX,kMinY,kMaxX,kMaxY;
    let u1x,u1y,u2x,u2y;
    ;[u1x,u1y] = RCHULL_EDGE(0);
    u2x = -u1y, u2y = u1x;
    let maxX=-Infinity, minX=Infinity, maxY=-Infinity, minY=Infinity;
    for(let t=0;t<nh;t++){
      let px = RCHULL_PROJ(u1x,u1y,t);
      let py = RCHULL_PROJ(u2x,u2y,t);
      if(px>maxX){maxX=px; kMaxX=t;}
      if(px<minX){minX=px; kMinX=t;}
      if(py>maxY){maxY=py; kMaxY=t;}
      if(py<minY){minY=py; kMinY=t;}
    }
    let bestArea = Infinity;

    for (let i = 0; i < nh; i++){
      let maxX=-Infinity, minX=Infinity, maxY=-Infinity, minY=Infinity;
      let u1x,u1y,u2x,u2y;
      ;[u1x,u1y] = RCHULL_EDGE(i);
      u2x = -u1y, u2y = u1x;
      while(RCHULL_PROJ(u1x,u1y,kMaxX+1) > (maxX=RCHULL_PROJ(u1x,u1y,kMaxX))) kMaxX++; 
      while(RCHULL_PROJ(u1x,u1y,kMinX+1) < (minX=RCHULL_PROJ(u1x,u1y,kMinX))) kMinX++; 
      while(RCHULL_PROJ(u2x,u2y,kMaxY+1) > (maxY=RCHULL_PROJ(u2x,u2y,kMaxY))) kMaxY++; 
      while(RCHULL_PROJ(u2x,u2y,kMinY+1) < (minY=RCHULL_PROJ(u2x,u2y,kMinY))) kMinY++; 
      let width = (maxX-minX);
      let height = (maxY-minY);
      let area = width*height;
      if (area < bestArea){
        bestArea = area;
        let cx = (minX+maxX)*0.5;
        let cy = (minY+maxY)*0.5;
        out[0] = u1x*cx + u2x*cy;
        out[1] = u1y*cx + u2y*cy;
        out[2] = width*0.5;
        out[3] = height*0.5;
        out[4] = u1x;
        out[5] = u2x;
        out[6] = u1y;
        out[7] = u2y;
      }
    }
    return out;
  }
  function power_iter(
    a00, a01, a02,
    a10, a11, a12,
    a20, a21, a22,
  ){
    let v0 = Math.PI;
    let v1 = Math.E;
    let v2 = Math.SQRT2;
    for (let k = 0; k < 12; k++){
      let x0 = a00*v0+a01*v1+a02*v2;
      let x1 = a10*v0+a11*v1+a12*v2;
      let x2 = a20*v0+a21*v1+a22*v2;
      let n = Math.sqrt(x0*x0+x1*x1+x2*x2);
      if (n < 1e-12) break;
      v0 = x0/n;
      v1 = x1/n;
      v2 = x2/n;
    }
    return [v0,v1,v2];
  }
  function obb_3d_pca(points){
    let n_points = points.length;
    let meanX = 0, meanY = 0, meanZ = 0;
    for (let i = 0; i < n_points; i++){
      meanX += points[i][0];
      meanY += points[i][1];
      meanZ += points[i][2];
    }
    meanX /= n_points;
    meanY /= n_points;
    meanZ /= n_points;
    let cxx=0, cxy=0, cxz=0, cyy=0, cyz=0, czz=0;
    for (let i = 0; i < n_points; i++){
      let dx = points[i][0] - meanX;
      let dy = points[i][1] - meanY;
      let dz = points[i][2] - meanZ;
      cxx += dx*dx; cxy += dx*dy; cxz += dx*dz; 
      cyy += dy*dy; cyz += dy*dz; czz += dz*dz;
    }
    cxx/=n_points; cxy/=n_points; cxz/=n_points;
    cyy/=n_points; cyz/=n_points; czz/=n_points;

    let [e1x, e1y, e1z] = power_iter(
      cxx,cxy,cxz, 
      cxy,cyy,cyz, 
      cxz,cyz,czz
    );

    let lambda =
      e1x*(cxx*e1x+cxy*e1y+cxz*e1z)+
      e1y*(cxy*e1x+cyy*e1y+cyz*e1z)+
      e1z*(cxz*e1x+cyz*e1y+czz*e1z);
    
    let [e2x, e2y, e2z] = power_iter(
      cxx-lambda*e1x*e1x, cxy-lambda*e1x*e1y, cxz-lambda*e1x*e1z,
      cxy-lambda*e1y*e1x, cyy-lambda*e1y*e1y, cyz-lambda*e1y*e1z,
      cxz-lambda*e1z*e1x, cyz-lambda*e1z*e1y, czz-lambda*e1z*e1z,
    );

    let e3x = e1y*e2z-e1z*e2y;
    let e3y = e1z*e2x-e1x*e2z;
    let e3z = e1x*e2y-e1y*e2x;

    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX =-Infinity, maxY =-Infinity, maxZ =-Infinity;

    for (let i = 0; i < n_points; i++){
      let dx = points[i][0] - meanX;
      let dy = points[i][1] - meanY;
      let dz = points[i][2] - meanZ;
      let projX = dx*e1x+dy*e1y+dz*e1z;
      let projY = dx*e2x+dy*e2y+dz*e2z;
      let projZ = dx*e3x+dy*e3y+dz*e3z;
      minX = Math.min(minX, projX);
      maxX = Math.max(maxX, projX);
      minY = Math.min(minY, projY);
      maxY = Math.max(maxY, projY);
      minZ = Math.min(minZ, projZ);
      maxZ = Math.max(maxZ, projZ);
    }
    let cx = (minX+maxX)*0.5;
    let cy = (minY+maxY)*0.5;
    let cz = (minZ+maxZ)*0.5;

    return [
      meanX + cx*e1x + cy*e2x + cz*e3x,
      meanY + cx*e1y + cy*e2y + cz*e3y,
      meanZ + cx*e1z + cy*e2z + cz*e3z,
      (maxX-minX)*0.5,
      (maxY-minY)*0.5,
      (maxZ-minZ)*0.5,
      e1x, e2x, e3x,
      e1y, e2y, e3y,
      e1z, e2z, e3z,
    ];
  }

  function rotate_axes(a,b,th){
    let c=Math.cos(th), s=Math.sin(th);
    return [
      c*a[0]+s*b[0], c*a[1]+s*b[1], c*a[2]+s*b[2],
      -s*a[0]+c*b[0],-s*a[1]+c*b[1],-s*a[2]+c*b[2]
    ];
  }

  function obb_3d_refine(points,out){
    let best_vol = out[3]*out[4]*out[5]*8;
    let best_axes = [
      out[6], out[9], out[12],
      out[7], out[10],out[13],
      out[8], out[11],out[14]
    ];
    let angle = 0.15;
    let cx,cy,cz;
    for (let iter = 0; iter < 2; iter++){
      for (let i = 0; i < 3; i++){
        let j = (i+1)%3;
        let k = (i+2)%3;
        for (let s = -1; s <=1; s+=2){
          let try_axes = new Array(9);
          let m = rotate_axes(
            best_axes.slice(i*3,i*3+3), 
            best_axes.slice(j*3,j*3+3), s*angle);
          try_axes[i*3]=m[0];
          try_axes[i*3+1]=m[1];
          try_axes[i*3+2]=m[2];
          try_axes[j*3]=m[3];
          try_axes[j*3+1]=m[4];
          try_axes[j*3+2]=m[5];
          try_axes[k*3]=best_axes[k*3];
          try_axes[k*3+1]=best_axes[k*3+1];
          try_axes[k*3+2]=best_axes[k*3+2];

          let minX = Infinity, minY = Infinity, minZ = Infinity;
          let maxX =-Infinity, maxY =-Infinity, maxZ =-Infinity;
          for (let p = 0; p < points.length; p++){
            let dx = points[p][0] -  out[0];
            let dy = points[p][1] -out[1];
            let dz = points[p][2] -out[2];
            let projX = dx*try_axes[0]+dy*try_axes[1]+dz*try_axes[2];
            let projY = dx*try_axes[3]+dy*try_axes[4]+dz*try_axes[5];
            let projZ = dx*try_axes[6]+dy*try_axes[7]+dz*try_axes[8];
            minX = Math.min(minX, projX);
            maxX = Math.max(maxX, projX);
            minY = Math.min(minY, projY);
            maxY = Math.max(maxY, projY);
            minZ = Math.min(minZ, projZ);
            maxZ = Math.max(maxZ, projZ);
          }
          let vol = (maxX-minX)*(maxY-minY)*(maxZ-minZ);
          if (vol < best_vol){
            best_vol = vol;
            best_axes = try_axes;
            cx = (minX+maxX)*0.5;
            cy = (minY+maxY)*0.5;
            cz = (minZ+maxZ)*0.5;
            out[3] = (maxX-minX)*0.5;
            out[4] = (maxY-minY)*0.5;
            out[5] = (maxZ-minZ)*0.5;
          }
        }
      }
      angle *= 0.5;
    }
    out[0] += cx*best_axes[0] + cy*best_axes[3] + cz*best_axes[6];
    out[1] += cx*best_axes[1] + cy*best_axes[4] + cz*best_axes[7];
    out[2] += cx*best_axes[2] + cy*best_axes[5] + cz*best_axes[8];
    out[6] = best_axes[0]; out[7] = best_axes[3]; out[8] = best_axes[6];
    out[9] = best_axes[1]; out[10]= best_axes[4]; out[11]= best_axes[7];
    out[12]= best_axes[2]; out[13]= best_axes[5]; out[14]= best_axes[8];
  }


  function aabb_3d(points){
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < points.length; i++){
      let x = points[i][0];
      let y = points[i][1];
      let z = points[i][2];
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      minZ = Math.min(minZ, z);
      maxZ = Math.max(maxZ, z);
    }
    return [
      (minX+maxX)*0.5,
      (minY+maxY)*0.5,
      (minZ+maxZ)*0.5,
      (maxX-minX)*0.5,
      (maxY-minY)*0.5,
      (maxZ-minZ)*0.5,
      1,0,0,
      0,1,0,
      0,0,1,
    ];
  }

  that.bbox = function(){
    let [points,flags] = $pop_args(2);
    let nd = Number(points.__type.elt[0].elt[1]);
    let out = [];
    if (nd == 2){
      if ((flags&0xf0)==MODE_ORIENTED){
        if (flags&0xf){
          out = obb_2d_rotcal(points);
        }else{
          out = obb_2d_pca(points);
        }
      }else if ((flags&0xf0)==MODE_ALIGNED){
        out = aabb_2d(points);
      }
      let a = out.slice(0,2);
      let b = out.slice(2,4);
      let c = out.slice(4);
      a.__type = {con:'vec',elt:['f32',2]}
      b.__type = {con:'vec',elt:['f32',2]}
      c.__type = {con:'vec',elt:['f32',2,2]}
      return [a,b,c];
    }else if (nd == 3){
      if ((flags&0xf0)==MODE_ORIENTED){
        out = obb_3d_pca(points);
        if (flags&0xf){
          obb_3d_refine(points,out);
        }
      }else if ((flags&0xf0)==MODE_ALIGNED){
        out = aabb_3d(points);
      }
      let a = out.slice(0,3);
      let b = out.slice(3,6);
      let c = out.slice(6);
      a.__type = {con:'vec',elt:['f32',3]}
      b.__type = {con:'vec',elt:['f32',3]}
      c.__type = {con:'vec',elt:['f32',3,3]}
      return [a,b,c];
    }
  }

  function clip_add_seg(clipped, ls0x,ls0y,ls1x,ls1y){
    if (!clipped.length){
      clipped.push([])
    }
    if (!clipped.at(-1).length){
      clipped.at(-1).push([ls0x,ls0y],[ls1x,ls1y]);
      return;
    }
    if (clipped.at(-1).at(-1)[0] == ls0x && clipped.at(-1).at(-1)[1] == ls0y){
      clipped.at(-1).push([ls1x,ls1y])
    }else{
      clipped.push([[ls0x,ls0y],[ls1x,ls1y]]);
    }
  }

  that.clip = function(){
    let [polyline,polygon,flags] = $pop_args(3);
    let do_diff = flags == OP_EXCLUDE;
    let clipped = [];
    for (let i = 0; i < polyline.length-1; i++){
      let ls0x = polyline[i][0];
      let ls0y = polyline[i][1];
      let ls1x = polyline[i+1][0];
      let ls1y = polyline[i+1][1];
      let isx = [];
      for (let j = 0; j < polygon.length; j++){
        let [ret,t,s] = line_intersect_2d(
          ls0x,ls0y,ls1x,ls1y,
          polygon[j][0], polygon[j][1], 
          polygon[(j+1)%polygon.length][0], polygon[(j+1)%polygon.length][1],
          LHS_CAPL|LHS_CAPR|RHS_CAPL|RHS_CAPR|RET_PARAMS
        );
        if (ret){
          isx.push(t);
        }
      }
      if (!isx.length){
        if (do_diff == !pt_in_poly(ls0x,ls0y,polygon)){
          clip_add_seg(clipped,ls0x,ls0y,ls1x,ls1y);
        }
      }else{
        isx.push(0,1);
        isx.sort((a,b)=>(a-b));
        let dx = ls1x-ls0x;
        let dy = ls1y-ls0y;
        let td = dx*dx+dy*dy;
        for (let k = 0; k < isx.length-1; k++){
          let t0 = isx[k];
          let t1 = isx[k+1];
          let x0 = ls0x*(1-t0)+ls1x*(t0);
          let y0 = ls0y*(1-t0)+ls1y*(t0);        
          let x1 = ls0x*(1-t1)+ls1x*(t1);
          let y1 = ls0y*(1-t1)+ls1y*(t1);
          let ds = (t1-t0)*td;
          if (ds >= 0.001){
            if (do_diff == !pt_in_poly((x0+x1)*0.5,(y0+y1)*0.5,polygon)){
              clip_add_seg(clipped, x0,y0,x1,y1);
            }
          }
        }
      }
    }
    return point_list_list_typed(clipped);
  }


  function quadratic_rational_bezier(p, nd, w, t, o){
    let tt = t*t;
    let l_tl_t = (1-t)*(1-t);
    let ztl_tw = 2*t*(1-t)*w[0];
    let u = l_tl_t+ztl_tw+tt;
    for (let i = 0; i < nd; i++){
      o[i] = (l_tl_t*p[0][i]+ztl_tw*p[1][i]+tt*p[2][i])/u;
    }
  }
  function cubic_rational_bezier(p, nd, w, t, o){
    let tt = t*t;
    let ttt = tt*t;
    let l_t2 = (1-t)*(1-t);
    let l_t3 = l_t2 * (1-t);
    let tl_t2w3 = t*l_t2*w[0]*3;
    let ttl_tw3 = tt*(1-t)*w[1]*3;
    let u = l_t3 + tl_t2w3 + ttl_tw3 + ttt;
    for (let i = 0; i < nd; i++){
      o[i] = (l_t3*p[0][i]+tl_t2w3*p[1][i]+ttl_tw3*p[2][i]+ttt*p[3][i])/u;
    }
  }

  function catrom_getT(p,idx,nd,alpha){
    let d = 0;
    for (let i = 0; i < nd; i++){
      let dx = p[idx][i]-p[idx+1][i];
      d += dx*dx;
    }
    if (d < 1e-4) d = 1e-4;
    return Math.pow(d, 0.5*alpha);
  }

  function catrom(p, nd, alpha, t, o){
    let t0 = 0.0;
    let t1 = t0 + catrom_getT(p,0, nd, alpha[0]);
    let t2 = t1 + catrom_getT(p,1, nd, alpha[0]);
    let t3 = t2 + catrom_getT(p,2, nd, alpha[0]);
    let t_ = t1 * (1-t) + t2 * t;
    for (let i = 0; i < nd; i++){
      let A1 = ( t1-t_ )/( t1-t0 )*p[0][i] + ( t_-t0 )/( t1-t0 )*p[1][i];
      let A2 = ( t2-t_ )/( t2-t1 )*p[1][i] + ( t_-t1 )/( t2-t1 )*p[2][i];
      let A3 = ( t3-t_ )/( t3-t2 )*p[2][i] + ( t_-t2 )/( t3-t2 )*p[3][i];
      let B1 = ( t2-t_ )/( t2-t0 )*A1 + ( t_-t0 )/( t2-t0 )*A2;
      let B2 = ( t3-t_ )/( t3-t1 )*A2 + ( t_-t1 )/( t3-t1 )*A3;
      let C  = ( t2-t_ )/( t2-t1 )*B1 + ( t_-t1 )/( t2-t1 )*B2;
      o[i] = C;
    }
  }

  function cubic_bspline(p, nd, w, t, o){
    let t2 = t * t;
    let t3 = t2 * t;
    let b0 = (-t3 + 3*t2 - 3*t + 1) / 6*w[0];
    let b1 = ( 3*t3 - 6*t2 + 4) / 6*w[1];
    let b2 = (-3*t3 + 3*t2 + 3*t + 1) / 6*w[2];
    let b3 = ( t3 ) / 6*w[3];
    let denom = b0+b1+b2+b3;
    for (let i = 0; i < nd; i++){
      o[i] = (b0*p[0][i] + b1*p[1][i] + b2*p[2][i] + b3*p[3][i])/denom;
    }
  }

  function quadratic_bspline(p, nd, w, t, o){
    let t2 = t * t;
    let b0 = 0.5 * (t2 - 2*t + 1)*w[0];
    let b1 = 0.5 * (-2*t2 + 2*t + 1)*w[1];
    let b2 = 0.5 * (t2)*w[2];
    let denom = b0+b1+b2;
    for (let i = 0; i < nd; i++){
      o[i] = (b0*p[0][i] + b1*p[1][i] + b2*p[2][i])/denom;
    }
  }

  that.curve = function(){
    let [points,params,t,flags] = $pop_args(4);
    let nd = Number(points.__type.elt[0].elt[1]);
    let p = points;
    let a = [...params,1,1,1,1];
    let o = new Float32Array(nd);
    if ((flags & 0xf0) == TYPE_BEZIER){
      if ((flags & 0xf) == ORD_QUADRATIC){
        quadratic_rational_bezier(p,nd,a,t,o);
      }else if ((flags & 0xf) == ORD_CUBIC){
        cubic_rational_bezier(p,nd,a,t,o);
      }
    }else if ((flags & 0xf0) == TYPE_CATROM){
      catrom(p,nd,a,t,o);
    }else if ((flags & 0xf0) == TYPE_BSPLINE){
      if ((flags & 0xf) == ORD_QUADRATIC){
        quadratic_bspline(p,nd,a,t,o);
      }else if ((flags & 0xf) == ORD_CUBIC){
        cubic_bspline(p,nd,a,t,o);
      }
    }
    return o;
  }

};
var geom_$o_LHS_LINE = 0;
geom_$o_LHS_LINE = $value(0);
var geom_$o_RHS_LINE = 0;
geom_$o_RHS_LINE = $value(0);
var geom_$o_LHS_RAY = 0;
geom_$o_LHS_RAY = $value(1);
var geom_$o_RHS_RAY = 0;
geom_$o_RHS_RAY = $value(4);
var geom_$o_LHS_SEGMENT = 0;
geom_$o_LHS_SEGMENT = $value(3);
var geom_$o_RHS_SEGMENT = 0;
geom_$o_RHS_SEGMENT = $value(12);
var geom_$o_RET_POINTS = 0;
geom_$o_RET_POINTS = $value(0);
var geom_$o_RET_PARAMS = 0;
geom_$o_RET_PARAMS = $value(16);
var geom_$o_BY_COUNT = 0;
geom_$o_BY_COUNT = $value(0);
var geom_$o_BY_SPACING = 0;
geom_$o_BY_SPACING = $value(1);
var geom_$o_MODE_POLYLINE = 0;
geom_$o_MODE_POLYLINE = $value(0);
var geom_$o_MODE_POLYGON = 0;
geom_$o_MODE_POLYGON = $value(128);
var geom_$o_MODE_ALIGNED = 0;
geom_$o_MODE_ALIGNED = $value(0);
var geom_$o_MODE_ORIENTED = 0;
geom_$o_MODE_ORIENTED = $value(16);
var geom_$o_OP_INCLUDE = 0;
geom_$o_OP_INCLUDE = $value(1);
var geom_$o_OP_EXCLUDE = 0;
geom_$o_OP_EXCLUDE = $value(2);
var geom_$o_TYPE_BEZIER = 0;
geom_$o_TYPE_BEZIER = $value(16);
var geom_$o_TYPE_CATROM = 0;
geom_$o_TYPE_CATROM = $value(32);
var geom_$o_TYPE_BSPLINE = 0;
geom_$o_TYPE_BSPLINE = $value(48);
var geom_$o_ORD_QUADRATIC = 0;
geom_$o_ORD_QUADRATIC = $value(2);
var geom_$o_ORD_CUBIC = 0;
geom_$o_ORD_CUBIC = $value(3);
globalThis.$math = new function(){
  var that = this;
  that.pi = Math.PI;
  that.random = function(){
    return Math.random();
  }
  that.sin = function(){
    let [x] = $pop_args(1);
    return Math.sin(x);
  }
  that.cos = function(){
    let [x] = $pop_args(1);
    return Math.cos(x);
  }
  that.acos = function(){
    let [x] = $pop_args(1);
    return Math.acos(x);
  }
  that.abs = function(){
    let [x] = $pop_args(1);
    return Math.abs(x);
  }
  that.max = function(){
    let [x,y] = $pop_args(2);
    return Math.max(x,y);
  }
  that.min = function(){
    let [x,y] = $pop_args(2);
    return Math.min(x,y);
  }
  that.atan2 = function(){
    let [y,x] = $pop_args(2);
    return Math.atan2(y,x);
  }
  that.hypot = function(){
    let [x,y] = $pop_args(2);
    return Math.hypot(x,y);
  }
  that.round = function(){
    let [x] = $pop_args(1);
    return Math.round(x);
  }
  that.floor = function(){
    let [x] = $pop_args(1);
    return Math.floor(x);
  }
  that.ceil = function(){
    let [x] = $pop_args(1);
    return Math.ceil(x);
  }
  that.exp = function(){
    let [x] = $pop_args(1);
    return Math.exp(x);
  }
  that.sqrt = function(){
    let [x] = $pop_args(1);
    return Math.sqrt(x);
  }
  that.tan = function(){
    let [x] = $pop_args(1);
    return Math.tan(x);
  }
  that.bitcast = function(){
    let t = $args.at(-1).__type;
    let [x] = $pop_args(1);
    let buf = new ArrayBuffer(4);
    let f = new Float32Array(buf);
    let u = new Uint32Array(buf);
    if (t == 'f32'){
      f[0] = x; return u[0];
    }else{
      u[0] = x; return f[0];
    }
  }
}


var math_$o_PI = 0;
math_$o_PI = $value(3.141592653589793);
var math_$o_INF = 0;
var __r_2098 = 0;
__r_2098=$unwrap(1)/$unwrap(0);
math_$o_INF = $value(__r_2098);
globalThis.$list = new function(){
  var that = this;

  that.slice = function(){
    let [a,i,j] = $pop_args(3);
    return a.slice(i,j).map($value);
  }
  that.insert = function(){
    let [a,i,x] = $pop_args(3);
    a.splice(i,0,$value(x));
  }
  that.erase = function(){
    let [a,i,j] = $pop_args(3);
    a.splice(i,j-i);
  }
  that.make = function(){
    let [n,x] = $pop_args(2);
    return new Array(n).fill(0).map(_=>$value(x));
  }
  that.length = function(){
    let [x] = $pop_args(1);
    return x.length;
  }
  that._sort = function(){
    let [a,b] = $pop_args(2);
    let ab = a.map((x,i)=>[b[i],x]);
    ab.sort((x,y)=>x[0]-y[0]);
    for (let i = 0; i < a.length; i++){
      a[i] = ab[i][1];
    }
  }
}


globalThis.$vec = new function(){
  let that = this;
  that.mag = function(){
    let [v] = $pop_args(1);
    let s = 0;
    for (let i = 0; i < v.length; i++){
      s += v[i]*v[i];
    }
    return Math.sqrt(s);
  }
  that.dir = function(){
    let [v] = $pop_args(1);
    let s = 0;
    for (let i = 0; i < v.length; i++){
      s += v[i]*v[i];
    }
    let u = v.slice();
    if (s){
      s = 1.0/Math.sqrt(s);
      for (let i = 0; i < u.length; i++){
        u[i] *= s;
      }
    }
    return u;
  }
  that.dot = function(){
    let [u,v] = $pop_args(2);
    let s = 0;
    for (let i = 0; i < v.length; i++){
      s += u[i]*v[i];
    }
    return s;
  }
}
globalThis.$io = new function(){
  var that = this;
  var is_node = typeof module !== 'undefined';
  let buf = [];
  let fs;

  that.print = async function(){
    let [x] = $pop_args(1);
    if (globalThis.__io_intern_hooked_print){
      let o = __io_intern_hooked_print(x);
      if (o instanceof Promise){
        await o;
      }
    }else if (is_node){
      process.stdout.write(x);
    }else{
      for (let q of x){
        if (q == '\n'){
          console.log(buf.join(''));
          buf.splice(0,Infinity);
          await (function() {
            return new Promise(resolve => requestAnimationFrame(resolve));
          })();
        }else{
          buf.push(q)
        }
      }
    }
  }
  that.println = async function(){
    await that.print();
    $args.push('\n');
    await that.print();
  }
  that.read_file = async function(){
    let [pth] = $pop_args(1);
    if (globalThis.__io_intern_hooked_read_file){
      let o = __io_intern_hooked_read_file(pth);
      if (o instanceof Promise){
        o = await o;
      }
      return o;
    }else if (is_node){
      return Array.from((fs??(fs=require('fs'))).readFileSync(pth));
    }else{
      const response = await fetch(pth, { method: 'GET' });
      const arrayBuffer = await response.arrayBuffer();
      let arr = Array.from(new Uint8Array(arrayBuffer));
      return arr;
    }
  }
  that.write_file = async function(){
    let [pth,lst] = $pop_args(2);
    if (is_node){
      const buffer = Buffer.from(lst);
      (fs??(fs=require('fs'))).writeFileSync(pth, buffer);
    }else{
      const blob = new Blob([new Uint8Array(lst)], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = pth;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }
}


globalThis.$drw = new function(){
  let that = this;
  let ctx;
  let cnv;
  let fbos = [];
  let no_stroke = 0;
  let no_fill = 0;
  let first_vertex = 0;
  that._size = function(){
    let [w,h,id] = $pop_args(3);
    cnv = document.getElementById(id);
    ctx = cnv.getContext('2d');
    ctx.fillRect(0,0,w,h);
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.font = "15px monospace";
    ctx.textBaseline = "bottom";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }
  that._init_graphics = function(){
    let [pg,w,h] = $pop_args(3);
    let c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    fbos.push(c);
    pg.w = w;
    pg.h = h;
    pg.fbo = fbos.length-1;
    pg.__canvas = c;
  }
  that._begin_fbo = function(){
    let [fbo] = $pop_args(1);
    ctx = fbos[fbo].getContext('2d');
  }
  that._end_fbo = function(){
    if (cnv) ctx = cnv.getContext('2d');
  }
  that._read_pixels = function(){
    let [fbo] = $pop_args(1);
    let c = fbos[fbo].getContext('2d');
    let h = c.canvas.height;
    let w = c.canvas.width;
    let data = c.getImageData(0,0,w,h).data;
    return Object.assign(Array.from(data),{__dims:[h,w,4]});
  }
  that._write_pixels = function(){
    let [fbo,arr] = $pop_args(2);
    let c = fbos[fbo].getContext('2d');
    let h = c.canvas.height;
    let w = c.canvas.width;
    let imdata = c.getImageData(0,0,w,h);
    for (let i = 0; i < imdata.data.length; i++){
      imdata.data[i] = arr[i];
    }
    c.putImageData(imdata,0,0);
  }
  that._draw_texture = function(){
    let [fbo,x,y,w,h] = $pop_args(5);
    ctx.drawImage(fbos[fbo], x,y,w,h);
  }
  that.background = function(){
    let [r,g,b,a] = $pop_args(4);
    ctx.save();
    ctx.resetTransform();
    ctx.fillStyle = `rgba(${~~(r*255)}, ${~~(g*255)}, ${~~(b*255)}, ${(~~(a*1000))/1000})`;
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.restore();
  }
  that.stroke = function(){
    let [r,g,b,a] = $pop_args(4);
    ctx.strokeStyle = `rgba(${~~(r*255)}, ${~~(g*255)}, ${~~(b*255)}, ${(~~(a*1000))/1000})`;
    no_stroke = 0;
  }
  that.fill = function(){
    let [r,g,b,a] = $pop_args(4);
    ctx.fillStyle = `rgba(${~~(r*255)}, ${~~(g*255)}, ${~~(b*255)}, ${(~~(a*1000))/1000})`;
    no_fill = 0;
  }
  that.no_fill = function(){
    no_fill = 1;
  }
  that.no_stroke = function(){
    no_stroke = 1;
  }
  that.stroke_weight = function(){
    let [x] = $pop_args(1);
    ctx.lineWidth = x;
  }
  that.point = function(){
    let [x,y] = $pop_args(2);
    if (no_stroke) return;
    let w = ctx.lineWidth;
    ctx.save();
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fillRect(x-w/2,y-w/2,w,w);
    ctx.restore();
  }
  that.line = function(){
    let [x0,y0,x1,y1] = $pop_args(4);
    if (no_stroke) return;
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
  }
  that.rect = function(){
    let [x,y,w,h] = $pop_args(4);
    if (!no_fill)
    ctx.fillRect(x,y,w,h);
    if (!no_stroke)
    ctx.strokeRect(x,y,w,h);
  }
  that.ellipse = function(){
    let [x,y,w,h] = $pop_args(4);
    if (no_fill && no_stroke) return;
    ctx.beginPath();
    ctx.ellipse(x, y, w/2, h/2, 0, 0, 2 * Math.PI);
  
    if (!no_fill)
    ctx.fill();
    if (!no_stroke)
    ctx.stroke();
  }
  that.push_matrix = function(){
    ctx.save();
  }
  that.pop_matrix = function(){
    ctx.restore();
  }
  that.rotate_deg = function(){
    let [r] = $pop_args(1);
    ctx.rotate(r * Math.PI/180);
  }
  that.translate = function(){
    let [x,y] = $pop_args(2);
    ctx.translate(x,y);
  }
  that.scale = function(){
    let [x,y] = $pop_args(2);
    ctx.scale(x,y);
  }
  that.reset_matrix = function(){
    ctx.resetTransform();
  }
  that.apply_matrix = function(){
    let [mat] = $pop_args(1);
    ctx.transform(
      mat[0],
      mat[3],
      mat[6],
      mat[1],
      mat[4],
      mat[7]
    );
  }
  that.begin_shape = function(){
    ctx.beginPath();
    first_vertex = 1;
  }
  that.vertex = function(){
    let [x,y] = $pop_args(2);
    if (first_vertex){
      ctx.moveTo(x,y);
    }else{
      ctx.lineTo(x,y);
    }
    first_vertex = 0;
  }
  that.next_contour = function(){
    let [bclose] = $pop_args(1);
    if (bclose){
      ctx.closePath();
    }
    first_vertex = 1;
  }
  that.end_shape = function(){
    let [bclose] = $pop_args(1);
    if (bclose){
      ctx.closePath();
    }
    if (!no_fill) ctx.fill();
    
    if (!no_stroke) ctx.stroke();
    
    if (no_fill && no_stroke){
      ctx.beginPath();
      ctx.fill();
    }
  }
  that.text = function(){
    let [s,x,y] = $pop_args(3);
    for (let i = 0; i < s.length; i++){
      ctx.fillText(s[i],x+i*8,y+1);
    }
  }
  that._flush = function(){
    
  }
  that.resize = function(){
    let [w,h] = $pop_args(2);
    cnv.width = w;
    cnv.height = h;
  }
}

globalThis.$win = new function(){
  var that = this;
  let cnv;
  let evtq = [];
  let keymap = {
    F1    :0xffbe,
    F2    :0xffbf,
    F3    :0xffc0,
    F4    :0xffc1,
    F5    :0xffc2,
    F6    :0xffc3,
    F7    :0xffc4,
    F8    :0xffc5,
    F9    :0xffc6,
    F10   :0xffc7,
    F11   :0xffc8,
    F12   :0xffc9,
    ArrowLeft: 0xff51,
    ArrowUp:   0xff52,
    ArrowRight:0xff53,
    ArrowDown: 0xff54,
    Shift:     0xffe1,
    Control:   0xffe3,
    Alt:       0xffe9,
    Meta:      0xffeb,
    Escape:    27,
  };
  that.init = function(){
    let [w,h,flags] = $pop_args(3);
    let par = document.getElementById("out") ?? document.body;
    cnv = document.createElement("canvas");
    let id = ~~(Math.random()*65535)
    cnv.id = id;
    cnv.width = w;
    cnv.height = h;
    par.appendChild(cnv);

    cnv.addEventListener('mousedown',function(e){
      let r = cnv.getBoundingClientRect();
      let x = (e.clientX-r.left);
      let y = (e.clientY-r.top);
      evtq.push({type:1,key:[1,0,2][e.button],x,y})
    });
    cnv.addEventListener('mouseup',function(e){
      let r = cnv.getBoundingClientRect();
      let x = (e.clientX-r.left);
      let y = (e.clientY-r.top);
      evtq.push({type:2,key:[1,0,2][e.button],x,y})
    });
    cnv.addEventListener('mousemove',function(e){
      let r = cnv.getBoundingClientRect();
      let x = (e.clientX-r.left);
      let y = (e.clientY-r.top);
      if (evtq.length && evtq.at(-1).type == 3){
        evtq[evtq.length-1].x = x;
        evtq[evtq.length-1],y = y;
      }else{
        evtq.push({type:3,key:0,x,y})
      }
    });
    cnv.addEventListener('wheel',function(e){
      let x = e.deltaX;
      let y = e.deltaY;
      evtq.push({type:6,key:0,x,y})
    });
    function mapkey(k){
      let m = keymap[k];
      if (!m){
        m = k.charCodeAt(0);
      }
      return m;
    }
    document.addEventListener('keydown',function(e){
      let key = mapkey(e.key);
      evtq.push({type:4,key,x:0,y:0});
    });
    document.addEventListener('keyup',function(e){
      let key = mapkey(e.key);
      evtq.push({type:5,key,x:0,y:0});
    });
    return BigInt(id);
  }
  function animation_frame() {
    return new Promise(resolve => requestAnimationFrame(resolve));
  }
  that.poll = async function(){
    await animation_frame();
    if (evtq.length){
      return evtq.shift();
    }else{
      return {type:0,key:0,x:0,y:0};
    }
  }
  that.exit = function(){
    cnv.parentElement.removeChild(cnv);
  }
}


$goto=668;/*end__typd_45.Event*/ continue $$;
case 667:/*__typd_45.Event*/
case 668:/*end__typd_45.Event*/
var win_$o_KEY_F1 = 0;
win_$o_KEY_F1 = $value(65470);
var win_$o_KEY_F2 = 0;
win_$o_KEY_F2 = $value(65471);
var win_$o_KEY_F3 = 0;
win_$o_KEY_F3 = $value(65472);
var win_$o_KEY_F4 = 0;
win_$o_KEY_F4 = $value(65473);
var win_$o_KEY_F5 = 0;
win_$o_KEY_F5 = $value(65474);
var win_$o_KEY_F6 = 0;
win_$o_KEY_F6 = $value(65475);
var win_$o_KEY_F7 = 0;
win_$o_KEY_F7 = $value(65476);
var win_$o_KEY_F8 = 0;
win_$o_KEY_F8 = $value(65477);
var win_$o_KEY_F9 = 0;
win_$o_KEY_F9 = $value(65478);
var win_$o_KEY_F10 = 0;
win_$o_KEY_F10 = $value(65479);
var win_$o_KEY_F11 = 0;
win_$o_KEY_F11 = $value(65480);
var win_$o_KEY_F12 = 0;
win_$o_KEY_F12 = $value(65481);
var win_$o_KEY_LARR = 0;
win_$o_KEY_LARR = $value(65361);
var win_$o_KEY_UARR = 0;
win_$o_KEY_UARR = $value(65362);
var win_$o_KEY_RARR = 0;
win_$o_KEY_RARR = $value(65363);
var win_$o_KEY_DARR = 0;
win_$o_KEY_DARR = $value(65364);
var win_$o_KEY_LSHIFT = 0;
win_$o_KEY_LSHIFT = $value(65505);
var win_$o_KEY_RSHIFT = 0;
win_$o_KEY_RSHIFT = $value(65506);
var win_$o_KEY_LCTRL = 0;
win_$o_KEY_LCTRL = $value(65507);
var win_$o_KEY_RCTRL = 0;
win_$o_KEY_RCTRL = $value(65508);
var win_$o_KEY_LALT = 0;
win_$o_KEY_LALT = $value(65513);
var win_$o_KEY_RALT = 0;
win_$o_KEY_RALT = $value(65514);
var win_$o_KEY_LCMD = 0;
win_$o_KEY_LCMD = $value(65515);
var win_$o_KEY_RCMD = 0;
win_$o_KEY_RCMD = $value(65516);
var win_$o_MOUSE_LEFT = 0;
win_$o_MOUSE_LEFT = $value(1);
var win_$o_MOUSE_RIGHT = 0;
win_$o_MOUSE_RIGHT = $value(2);
var win_$o_IDLE = 0;
win_$o_IDLE = $value(0);
var win_$o_MOUSE_PRESSED = 0;
win_$o_MOUSE_PRESSED = $value(1);
var win_$o_MOUSE_RELEASED = 0;
win_$o_MOUSE_RELEASED = $value(2);
var win_$o_MOUSE_MOVED = 0;
win_$o_MOUSE_MOVED = $value(3);
var win_$o_KEY_PRESSED = 0;
win_$o_KEY_PRESSED = $value(4);
var win_$o_KEY_RELEASED = 0;
win_$o_KEY_RELEASED = $value(5);
var win_$o_WHEEL_SCROLLED = 0;
win_$o_WHEEL_SCROLLED = $value(6);
var win_$o_WINDOW_RESIZED = 0;
win_$o_WINDOW_RESIZED = $value(7);
var win_$o_CONTEXT_2D = 0;
win_$o_CONTEXT_2D = $value(1);
var win_$o_CONTEXT_3D = 0;
win_$o_CONTEXT_3D = $value(2);
$goto=670;/*end__typd_50.Graphics*/ continue $$;
case 669:/*__typd_50.Graphics*/
case 670:/*end__typd_50.Graphics*/
globalThis.$time = new function(){
  var that = this;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  let last_time = performance.now();
  let start_time = last_time;

  that.fps = async function(){
    let [target_fps] = $pop_args(1);
    if (target_fps < 0) target_fps = Number.MAX_VALUE;
    let current_time = performance.now();
    let elapsed = (current_time - last_time) / 1000.0;
    let target_frame_time = 1.0 / target_fps;
    let sleep_time_sec = target_frame_time - elapsed;
    sleep_time_sec -= 0.001;
    if (sleep_time_sec > 0) {
      await sleep(sleep_time_sec * 1000);
      elapsed = (performance.now()-last_time) / 1000.0;
    }
    last_time = current_time;
    return 1.0 / elapsed;
  }

  that.millis = function(){
    let now = performance.now();
    return now - start_time;
  }

  that.stamp = function(){
    return new Date().getTime()/1000.0;
  }

  that.delay = async function(){
    let [ms] = $pop_args(1);
    await sleep(ms);
  }
  that.local = function(){
    let [ts] = $pop_args(1);
    let dt = new Date(ts*1000.0);
    return [dt.getFullYear(), dt.getMonth()+1, dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()]
  }

}


var HF_DATA = `HFF\x0ea\x00\xc2\x00#\x01\x84\x01\xe5\x01F\x02\xa7\x02\x08\x03i\x03\xca\x03+\x04\x8c\x04\xed\x04N\x05 \x00\
~\x000\x0a\xfe\x0a\x1c\x0bx\x0b"\x0b\xa6'\x84\x0bp\x0b@\x0bK\x0b\xbd&\x5c\x0b\xda\x0aY\x0b\xd4\x0a=\x0b1\x0aC\x0aH\x0aW\x0a\
g\x0an\x0a\x80\x0a\x98\x0a\x9e\x0a\xbc\x0a\xe3\x0a\xef\x0ak'b\x0bo'\x07\x0b\xf7'#\x02,\x02D\x02W\x02g\x02s\x02|\x02\x93\x02\
\x9c\x02\x9f\x02\xaa\x02\xb3\x02\xb9\x02\xc5\x02\xce\x02\xe4\x02\xf2\x02\x0b\x03\x1c\x031\x037\x03B\x03H\x03T\x03Z\x03a\x03\
\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0bh\x0b\xa3\x06\xb5\x06\xc7\x06\xd6\x06\xe8\x06\xfa\x06\x03\x07\x1a\x07%\x07.\x07:\x07C\x07F\
\x07Y\x07d\x07v\x07\x88\x07\x9a\x07\xa3\x07\xb5\x07\xbe\x07\xc9\x07\xcf\x07\xdb\x07\xe1\x07\xeb\x07\x09'V\x0b1's' \x00~\x00\
0\x0a\xbc:\xa2;x\x0b6;\xa6'\xff:\xf7:b;v;\x8a;\x5c\x0b\x9b:Y\x0b\xd4\x0a_;\x169@9O9y9\xab9\xb59\xdc9\x0a:(:g:\xa3:\xae:k'\
b\x0bo'\xcd:\xf7'j\x03~\x03\xa7\x03\xbf\x03\xe2\x03\xfe\x03\x1a\x047\x04]\x04v\x04\x8f\x04\xb6\x04\xd3\x04\x00\x05 \x05=\x05\
\x5c\x05|\x05\xa2\x05\xbe\x05\xd7\x05\xf8\x05\x18\x061\x06U\x06{\x06\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0b\xef:\xf4\x07\x0a\x08!\
\x08/\x08G\x08X\x08p\x08\x8c\x08\xa9\x08\xb9\x08\xcd\x08\xee\x08\x00\x09!\x098\x09O\x09g\x09\x82\x09\x91\x09\xa1\x09\xb1\x09\
\xc4\x09\xd5\x09\xee\x09\x02\x0a\x19\x0a\x09'V\x0b1's' \x00~\x00\xf0s)v\x9dwY(\xd4v\xa6'\x96v\x88v\x18w3wNw}w\xecuuw\xe1u\
\x10w\xf1s\x1bt6tft\x9ft\xc8t\xfdt8u^u\xa5u\xfau\x10vk'\x8dwo'Gv\xf7'\xc6f\x02gpg\xb5g\xfdg[h\xb6h\x0di}i\xc0i\x01jtj\xc9\
j4k\x88k\xd7k\x1dl\x80l\xeclJm\x91m\xeam2n\x91n\xd2n(o\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0bzvao\x96o\xc2o\xe5o\x0ep.pWp\x8fp\xbe\
p\xe1p\x08q:qPq\x93q\xc0q\xe8q\x1erJrpr\xabr\xc7r\xf6r\x1asSs\x8es\xcas\x09'Y'1's' \x00~\x00\xf0s)v\x9dwY(\xd4v\xa6'\x96v\
\x88v\x18w3wNw}w\xecuuw\xe1u\x10w\xf1s\x1bt6tft\x9ft\xc8t\xfdt8u^u\xa5u\xfau\x10vk'\x8dwo'Gv\xf7''YeY\xcaY\x19ZhZ\xc7Z%[\x88\
[\xe4[7\x5c\x8a\x5c\xdb\x5c$]\xa4]\x04^L^\xb0^\x08_h_\xbb_\x0c\x609\x60\x9d\x60,a\x82a\xcca\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0b\
zv\x16bDbvb\x91b\xc0b\xdbb\x0ccAcsc\x9ac\xc7c\x06d#dmd\x9ed\xc7d\x00e+eKeue\x9ae\xc9e\xf8e@flf\x9bf\x09'Y'1's' \x00~\x00\xf0\
s)v\x9dwY(\xd4v\xa6'\x96v\x88v\x18w3wNw}w\xecuuw\xe1u\x10w\xf1s\x1bt6tft\x9ft\xc8t\xfdt8u^u\xa5u\xfau\x10vk'\x8dwo'Gv\xf7\
'\xb3w\xe7w(xdx\x92x\xe8x-y\x87y\xb9y\xd0y\xfay@zmz\xb1z\xe1z\x17{J{\x94{\xd9{7|y|\xac|\xcb|\x0e}7}f}\xf1&\xaa\x0b\xfd&\x9b\
'\xb6\x0bzv\xaf}\xd9}\xf8}\x0f~/~H~h~\x91~\xbb~\xe0~\x05\x7f8\x7fM\x7f\x8f\x7f\xbb\x7f\xd7\x7f\x06\x80%\x80D\x80m\x80\x88\
\x80\xb0\x80\xd4\x80\x0f\x816\x81g\x81\x09'Y'1's' \x00~\x00\x159\xbc:\xa2;Y(6;\xa6'\xff:\xf7:b;v;\x8a;\x96;\x9b:\x93;\x95\
:_;\x169@9O9y9\xab9\xb59\xdc9\x0a:(:g:\xa3:\xae:k'\x9c;o'\xcd:\xf7'\xdf\x1b\xf1\x1b\x1a\x1c<\x1cZ\x1cp\x1c\x84\x1c\xae\x1c\
\xc9\x1c\xd5\x1c\xea\x1c\x05\x1d\x13\x1d1\x1dF\x1dp\x1d\x8b\x1d\xc8\x1d\xf2\x1d\x15\x1e%\x1e>\x1eM\x1ee\x1ez\x1e\x8e\x1e\xf1\
&\xaa\x0b\xfd&\x9b'\xb6\x0b\xef:{!\xa2!\xc6!\xdf!\x09"#"F"q"\x90"\xaa"\xca"\xec"\xfe"2#W#w#\xa1#\xc2#\xdc#\xf8#\x0a$/$I$r\
$\x9c$\xc5$\x09'Y'1's' \x00~\x001\x16\x89\x17{\x17\x0e\x19\xec\x18\x8c\x18\xa6\x18o\x18\xc1\x17\xd1\x17\xb5\x17K\x18g\x17\
H\x18a\x17\xa7\x0b2\x16N\x16X\x16{\x16\xa2\x16\xaf\x16\xd0\x16\xf4\x16\x0a\x17=\x17o\x17{\x17W\x18Q\x18[\x18\x98\x17\xcf\x18\
5\x0eG\x0ei\x0e\x82\x0e\x9c\x0e\xb2\x0e\xc6\x0e\xe7\x0e\x02\x0f\x0e\x0f!\x0f<\x0fJ\x0fh\x0f}\x0f\x9d\x0f\xb5\x0f\xe3\x0f\x06\
\x10"\x102\x10F\x10U\x10m\x10\x82\x10\x96\x10\xe1\x17\xaa\x0b\xed\x17\x7f\x18\xb3\x0bw\x18=\x13]\x13}\x13\x93\x13\xb6\x13\
\xcd\x13\xe4\x13\x06\x14#\x14=\x14W\x14w\x14\x87\x14\xb5\x14\xd6\x14\xf2\x14\x15\x151\x15G\x15_\x15o\x15\x90\x15\xa8\x15\xcd\
\x15\xf3\x15\x16\x16\xf9\x17E\x18\x1f\x18_\x18 \x00~\x00\xfdTuW\x11YY(FX\xa6'\xfeW\xe8W\x82X\xa2X\xc2X\xf1X\x19W\xe9X\x09\
WzX\xfeT8ULU\x80U\xc0U\xcfU\x00V=VdV\xccV/WOWk'\x01Yo'\x97W\xf7'dA\x8aA\xd8A\x01B@B\x90B\xd6B\x17ChC\x8fC\xbeC\x06D7D{D\xa6\
D\xdeD\x1aEhE\xb6E\xe2E\x18FHFkF\xa4F\xdaF\x0dG\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0b\xd2W/LaL\x95L\xb7L\xf1L\x12M?MxM\xa1M\xc4M\
\xf1M"N<NyN\xa3N\xd1N\x13OLOjO\x99O\xb0O\xdaO\xf7O'PZP\x8bP\x09'Y'1's' \x00~\x00\x159\xbc:\xa2;Y(6;\xa6'\xff:\xf7:b;v;\x8a\
;\x96;\x9b:\x93;\x95:_;\x169@9O9y9\xab9\xb59\xdc9\x0a:(:g:\xa3:\xae:k'\x9c;o'\xcd:\xf7'\x0f+5+{+\xa4+\xcf+\x00,.,c,\x9a,\xbb\
,\xdd,\x18-@-q-\x97-\xb9-\xee-\x19.Z.~.\xa4.\xcb.\xef.\x18/L/v/\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0b\xef:}2\x9e2\xb52\xcb2\xec2\
\x033\x1e3D3b3u3\x8d3\xac3\xbd3\xea3\x0a4'4E4h4\x804\x964\xaa4\xc54\xdc4\x005*5J5\x09'Y'1's' \x00~\x00\xe4$\x8e&\x80&Y(/(\
\xa6'\xc6'\x8b'\xc9&\xdd&\xbd&_'l&\x5c'f&\xc6&\xe5$\x0d%\x18%E%t%\x81%\xa8%\xd8%\xf7%6&t&\x80&k'e'o'\x9d&\xf7'\x1a\x19,\x19\
Y\x19y\x19\x97\x19\xad\x19\xc1\x19\xe9\x19\x04\x1a\x10\x1a$\x1a?\x1aM\x1ak\x1a\x80\x1a\xac\x1a\xc9\x1a\x09\x1b6\x1bX\x1bh\
\x1b\x7f\x1b\x8e\x1b\xa6\x1b\xbb\x1b\xcf\x1b\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0b\x93'\x9e\x1e\xc5\x1e\xe6\x1e\x02\x1f&\x1fE\x1f\
[\x1f\x97\x1f\xb3\x1f\xc5\x1f\xde\x1f\xf9\x1f\x05 1 M q \x95 \xb6 \xcd \xed \xfd \x19!(!@!U!k!\x09'Y'1's' \x00~\x001\x16\x89\
\x17{\x17\x0e\x19\xec\x18\x8c\x18\xa6\x18o\x18\xc1\x17\xd1\x17\xb5\x17K\x18g\x17H\x18a\x17\xbe\x172\x16N\x16X\x16{\x16\xa2\
\x16\xaf\x16\xd0\x16\xf4\x16\x0a\x17=\x17o\x17{\x17W\x18Q\x18[\x18\x98\x17\xcf\x18\xb9\x0b\xcb\x0b\xee\x0b\x06\x0c \x0c6\x0c\
J\x0cn\x0c\x89\x0c\x95\x0c\xa8\x0c\xc3\x0c\xd1\x0c\xef\x0c\x04\x0d$\x0d=\x0dl\x0d\x91\x0d\xb1\x0d\xc1\x0d\xd5\x0d\xe4\x0d\
\xfc\x0d\x11\x0e%\x0e\xe1\x17\xaa\x0b\xed\x17\x7f\x18\xb3\x0bw\x18\xa6\x10\xc6\x10\xe3\x10\xfb\x10\x1b\x115\x11I\x11s\x11\
\x8f\x11\xa1\x11\xb8\x11\xd3\x11\xdf\x11\x0b\x12'\x12C\x12c\x12\x80\x12\x96\x12\xb0\x12\xbe\x12\xda\x12\xe9\x12\x01\x13\x16\
\x13-\x13\xf9\x17E\x18\x1f\x18_\x18 \x00~\x00p5|7\xff8Y(E8\xa6'\xfe7\xe67\x808\x988\xb08\xdf8\x1c7\xd78\x0c7x8q5\x9b5\xa7\
5\xc95\xf95\x0b6@6~6\x8a6\xce647T7k'\xef8o'\x947\xf7'e(y(\xa5(\xcb(\xeb(\x06)\x1b)G)])e)y)\x8f)\x9d)\xb7)\xcb)\xf3)\x0e*>\
*\x60*\x8b*\x9a*\xb2*\xc0*\xda*\xea*\xfb*\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0b\xce7\xa2/\xc6/\xea/\x0a0.0R0j0\x9a0\xb30\xcb0\xe3\
0\xf90\x011+1D1h1\x8c1\xb01\xc51\xf71\x072 2.2H2X2i2\x09'Y'1's' \x00~\x00\x05\x01\x9e\x01\xbb\x01\x02\x02\xc1\x01\x8c\x18\
\x0e\x02\xfb\x01\xd4\x01\xdb\x01\xb5\x17\xe8\x01~\x01\xe5\x01x\x01\xd1\x01\x06\x01\x12\x01\x16\x01\x1f\x01.\x015\x01C\x01\
Q\x01W\x01j\x01\x85\x01\x91\x01W\x18\xee\x01[\x18\xaa\x01\xcf\x18\x00\x00\x09\x00\x19\x00$\x000\x00<\x00E\x00T\x00]\x00\x60\
\x00g\x00p\x00v\x00\x82\x00\x8b\x00\x99\x00\xa3\x00\xb4\x00\xc1\x00\xce\x00\xd4\x00\xdd\x00\xe3\x00\xef\x00\xf5\x00\xfc\x00\
\xe1\x17\xad\x0b\xed\x17\x7f\x18\xb0\x0b\xf4\x01\x00\x00\x09\x00\x19\x00$\x000\x00<\x00E\x00T\x00]\x00\x60\x00g\x00p\x00v\
\x00\x82\x00\x8b\x00\x99\x00\xa3\x00\xb4\x00\xc1\x00\xce\x00\xd4\x00\xdd\x00\xe3\x00\xef\x00\xf5\x00\xfc\x00\xf9\x17\xe2\x01\
\x1f\x18_\x18 \x00~\x00\xb2PRS\xe7TY("T\xa6'\xd8S\xc0SbT}T\x98T\xc7T\xf2R\xbfT\xe2RZT\xb3P\xe5P\x01Q?Q\x8bQ\xa7Q\xdeQ#RNR\
\x9dR\x0aS*Sk'\xd7To'tS\xf7'\xae;\xd2; <E<\x83<\xd6<\x1c=X=\xa9=\xd0=\xfd=B>v>\xb5>\xdc>\x12?M?\x9a?\xea?\x16@O@|@\x9e@\xd5\
@\x0bA;A\xf1&\xaa\x0b\xfd&\x9b'\xb6\x0b\xa8S0GfG\x95G\xb7G\xebG\x14H<H\x95H\xd6H\x01I*IgI\x86I\xe9I*JXJ\x94J\xcbJ\xf6J!K7\
KbK\x81K\xaeK\xdeK\x06L\x09'Y'1's'\x08\x0aWISR RWI[R RUOYO\x0f\x0aTITR RTIXIZJZLXM RTMXMZNZQXRTR\x0a\x0b[JYIWIUJTLTOUQWRY\
R[Q\x0b\x0aTITR RTIWIYJZLZOYQWRTR\x0b\x0aTITR RTIZI RTMXM RTRZR\x08\x09TITR RTIZI RTMXM\x0e\x0b[JYIWIUJTLTOUQWRYR[Q[N RXN\
[N\x08\x0aTITR RZIZR RTMZM\x02\x04TITR\x06\x07WIWPVRTRSPSO\x08\x0aTITR RZITO RVMZR\x05\x09TITR RTRZR\x0b\x0cTITR RTIXR R\x5c\
IXR R\x5cI\x5cR\x08\x0aTITR RTIZR RZIZR\x0d\x0bWIUJTLTOUQWRXRZQ[O[LZJXIWI\x09\x0aTITR RTIXIZJZMXNTN\x10\x0bWIUJTLTOUQWRXR\
ZQ[O[LZJXIWI RXP[S\x0c\x0aTITR RTIXIZJZMXNTN RWNZR\x0c\x0aZJXIVITJTKULYNZOZQXRVRTQ\x05\x0aWIWR RSI[I\x08\x0bTITOUQWRXRZQ[\
O[I\x05\x0aSIWR R[IWR\x0b\x0cTIVR RXIVR RXIZR R\x5cIZR\x05\x0aTIZR RZITR\x06\x0aSIWMWR R[IWM\x08\x0aZITR RTIZI RTRZR\x00\x08\
\x0b\x0aWIUJTLTOUQWRYQZOZLYJWI\x03\x0aUKWIWR\x08\x0aTJVIXIZJZLYNTRZR\x0e\x0aTJVIXIZJZLXM RWMXMZNZQXRVRTQ\x06\x0aXIXR RXIS\
O[O\x0d\x0aUITMVLWLYMZOYQWRVRTQ RUIYI\x0d\x0aYIWIUJTLTOUQWRYQZOYMWLUMTO\x05\x0aZIVR RTIZI\x12\x0aVITJTLVMXMZLZJXIVI RVMTN\
TQVRXRZQZNXM\x0d\x0aZLYNWOUNTLUJWIYJZLZOYQWRUR\x05\x05TQTRURUQTQ\x06\x05URTRTQUQUSTU\x0b\x05TLTMUMULTL RTQTRURUQTQ\x0c\x05\
TLTMUMULTL RURTRTQUQUSTU\x0b\x05TITN RUIUN RTQTRURUQTQ\x10\x09TJVIWIYJYLVMVNWNWMYL RVQVRWRWQVQ\x05\x08TITM RXIXM\x0f\x0aZ\
JXIVITJTLVMYNZOZQXRVRTQ RWHWS\x02\x0a[HSS\x06\x07WHUJTLTOUQWS\x06\x07THVJWLWOVQTS\x02\x04THTS\x02\x0cTN\x5cN\x05\x0cXJXR \
RTN\x5cN\x05\x0cTL\x5cL RTP\x5cP\x06\x05UITKTMUMULTL\x06\x05UJTJTIUIUKTM\x0b\x0bWHUS RZHXS RTL[L RTO[O\x14\x0c\x5cN[NZOYQ\
XRURTQTOUNXMYLYJXIVIUJULWOYQ[R\x5cR\x08\x12[=SR R[=cR RVK\x60K\x17\x15V=VR RV=_=b>c?dAdCcEbF_G RVG_GbHcIdKdNcPbQ_RVR\x12\x15\
dBc@a>_=[=Y>W@VBUEUJVMWOYQ[R_RaQcOdM\x0f\x15V=VR RV=]=\x60>b@cBdEdJcMbO\x60Q]RVR\x0b\x13V=VR RV=c= RVG^G RVRcR\x08\x12V=V\
R RV=c= RVG^G\x16\x15dBc@a>_=[=Y>W@VBUEUJVMWOYQ[R_RaQcOdMdJ R_JdJ\x08\x16V=VR Rd=dR RVGdG\x02\x08V=VR\x0a\x10^=^M]P\x5cQZ\
RXRVQUPTMTK\x08\x15V=VR Rd=VK R[FdR\x05\x11V=VR RVRbR\x0b\x18V=VR RV=^R Rf=^R Rf=fR\x08\x16V=VR RV=dR Rd=dR\x15\x16[=Y>W@\
VBUEUJVMWOYQ[R_RaQcOdMeJeEdBc@a>_=[=\x0d\x15V=VR RV=_=b>c?dAdDcFbG_HVH\x18\x16[=Y>W@VBUEUJVMWOYQ[R_RaQcOdMeJeEdBc@a>_=[= \
R^NdT\x10\x15V=VR RV=_=b>c?dAdCcEbF_GVG R]GdR\x14\x14c@a>^=Z=W>U@UBVDWEYF_HaIbJcLcOaQ^RZRWQUO\x05\x10Z=ZR RS=a=\x0a\x16V=\
VLWOYQ\x5cR^RaQcOdLd=\x05\x12S=[R Rc=[R\x0b\x18T=YR R^=YR R^=cR Rh=cR\x05\x14U=cR Rc=UR\x06\x12S=[G[R Rc=[G\x08\x14c=UR R\
U=c= RURcR\x13\x14RRTQWNZJ^Ca=aR\x60O^L\x5cJYHWHVIVKWMYO\x5cQ_RdR(\x17_?\x60@\x60C_G^J]L[OYQWRVRUQUNVIWFXDZA\x5c?^>a=d=f>\
g@gBfDeEcF\x60G R_G\x60GcHdIeKeNdPcQaR^R\x5cQ[O\x17\x14^C^D_EaEcDdBd@c>a=^=[>Y@WCVEUIUMVPWQYR[R^Q\x60OaM"\x17_=]>\x5c@[DZ\
JYMXOVQTRRRQQQORNTNVOXQ[R^RaQcOeKfFfBe?d>b=_=]?]A^D\x60GbIeKgL\x1b\x14\x60A\x60BaCcCdBd@c>\x60=\x5c=Y>X@XCYEZF]GZGWHVIUKU\
NVPWQZR]R\x60QbOcM\x1b\x14\x5cCZCXBW@X>[=^=b>e>g= Rb>\x60E^K\x5cOZQXRVRTQSOSMTLVLXM R[GdG\x1c\x17RRTQXM[H\x5cE]A]>\x5c=[=\
Z>Y@YCZE\x5cF\x60FcEdDeBeHdMcOaQ^RZRWQUOTMTK%\x18YDWCVAV@W>Y=Z=\x5c>]@]B\x5cFZLXPVRTRSQSO RYIbFdEgCiAj?j>i=h=f?dCbIaNaQbR\
cReQfPhM\x18\x11\x60M^K\x5cH[FZCZ@[>\x5c=^=_>\x60@\x60C_H]M\x5cOZQXRVRTQSOSMTLVLXM\x18\x0f\x5cUZRXMWGWAX>Z=\x5c=]>^A^D]IZ\
RXXW[V]T^S]S[TXVUXS[Q_O&\x18YDWCVAV@W>Y=Z=\x5c>]@]B\x5cFZLXPVRTRSQSO Rj@j>i=h=f>d@bC\x60E^F\x5cF R^F_H_O\x60QaRbRdQePgM\x1c\
\x13VIXI\x5cH_FaDbBb?a=_=^>]@\x5cE[JZMYOWQURSRRQROSNUNWOZQ]R_RbQdO,!WDUCTAT@U>W=X=Z>[@[BZGYKWR RYK\x5cC^?_>a=b=d>e@eBdGcK\
aR RcKfCh?i>k=l=n>o@oBnGlNlQmRnRpQqPsM\x1f\x18WDUCTAT@U>W=X=Z>[@[BZGYKWR RYK\x5cC^?_>a=c=e>f@fBeGcNcQdReRgQhPjM\x1c\x15^=\
[>Y@WCVEUIUMVPWQYR[R^Q\x60ObLcJdFdBc?b>\x60=^=\x5c?\x5cB]E_HaJdLfM\x1e\x19_?\x60@\x60C_G^J]L[OYQWRVRUQUNVIWFXDZA\x5c?^>a=\
f=h>i?jAjDiFhGfHcHaG\x60F\x1f\x16_C^E]F[GYGXEXCY@[>^=a=c>d@dDcGaJ]NZPXQURSRRQROSNUNWOZQ]R\x60RcQeO%\x19_?\x60@\x60C_G^J]L\
[OYQWRVRUQUNVIWFXDZA\x5c?^>a=e=g>h?iAiDhFgGeHbH_G\x60HaJaObQdRfQgPiM\x1b\x14RRTQVOYK[H]D^A^>]=\x5c=[>Z@ZB[D]F\x60HbJcLcNb\
PaQ^RZRWQUOTMTK\x18\x13\x5cCZCXBW@X>[=^=b>e>g= Rb>\x60E^K\x5cOZQXRVRTQSOSMTLVLXM \x18WDUCTAT@U>W=X=Z>[@[BZFYIXMXOYQ[R]R_Q\
\x60PbLeDg= ReDdHcNcQdReRgQhPjM\x1f\x17WDUCTAT@U>W=X=Z>[@[BZFYIXMXPYR[R]Q\x60NbKdGeDf@f>e=d=c>b@bBcEeGgH\x18\x1cWDUCTAT@U\
>W=X=Z>[@[CZR Rd=ZR Rd=bR Rp=n>kAhEeKbR#\x18ZCXCWBW@X>Z=\x5c=^>_@_C]L]O^Q\x60RbRdQeOeMdLbL Ri@i>h=f=d>b@\x60C\x5cLZOXQVRT\
RSQSO%\x17WDUCTAT@U>W=X=Z>[@[BZFYIXMXOYQZR\x5cR^Q\x60ObLcJeD Rg=eDbN\x60T^Y\x5c]Z^Y]Y[ZX\x5cU_RbPgM'\x15_C^E]F[GYGXEXCY@[\
>^=a=c>d@dDcGaK^NZQXRURTQTOUNXNZO[P\x5cR\x5cU[XZZX]V^U]U[VXXU[R^PdM\x11\x13aDaR RaG_E]DZDXEVGUJULVOXQZR]R_QaO\x11\x13V=VR\
 RVGXEZD]D_EaGbJbLaO_Q]RZRXQVO\x0e\x12aG_E]DZDXEVGUJULVOXQZR]R_QaO\x11\x13a=aR RaG_E]DZDXEVGUJULVOXQZR]R_QaO\x11\x12UJaJa\
H\x60F_E]DZDXEVGUJULVOXQZR]R_QaO\x08\x0c\x5c=Z=X>WAWR RTD[D\x16\x13aDaT\x60W_X]YZYXX RaG_E]DZDXEVGUJULVOXQZR]R_QaO\x0a\x13\
V=VR RVHYE[D^D\x60EaHaR\x08\x08U=V>W=V<U= RVDVR\x0b\x0aW=X>Y=X<W= RXDXUWXUYSY\x08\x11V=VR R\x60DVN RZJaR\x02\x08V=VR\x12\x1e\
VDVR RVHYE[D^D\x60EaHaR RaHdEfDiDkElHlR\x0a\x13VDVR RVHYE[D^D\x60EaHaR\x11\x13ZDXEVGUJULVOXQZR]R_QaObLbJaG_E]DZD\x11\x13V\
DVY RVGXEZD]D_EaGbJbLaO_Q]RZRXQVO\x11\x13aDaY RaG_E]DZDXEVGUJULVOXQZR]R_QaO\x08\x0dVDVR RVJWGYE[D^D\x11\x11\x60G_E\x5cDYD\
VEUGVIXJ]K_L\x60N\x60O_Q\x5cRYRVQUO\x08\x0cW=WNXQZR\x5cR RTD[D\x0a\x13VDVNWQYR\x5cR^QaN RaDaR\x05\x10TDZR R\x60DZR\x0b\x16\
UDYR R]DYR R]DaR ReDaR\x05\x11UD\x60R R\x60DUR\x09\x10TDZR R\x60DZRXVVXTYSY\x08\x11\x60DUR RUD\x60D RUR\x60R\x15\x10[LZJX\
IVITJSKRMROSQURWRYQZO\x5cI[N[Q\x5cR]R_Q\x60PbM\x16\x0eRMTJWEXCY@Y>X=V>U@TDSKSQTRURWQYOZLZI[M\x5cN^N\x60M\x0d\x0bYKYJXIVIT\
JSKRMROSQURXR[P]M\x17\x10[LZJXIVITJSKRMROSQURWRYQZO\x60= R\x5cI[N[Q\x5cR]R_Q\x60PbM\x10\x0aSPUOVNWLWJVIUISJRLROSQURWRYQZP\
\x5cM\x17\x08RMVHXEYCZ@Z>Y=W>V@THQQNXM[M]N^P]QZRQSRURWQXPZM\x1b\x0f[LZJXIVITJSKRMROSQURWRYQZP R\x5cIZPV[U]S^R]R[SXVUYS[R^\
PaM\x1c\x0fRMTJWEXCY@Y>X=V>U@TDSJRR RRRSOTMVJXIZI[J[LZOZQ[R\x5cR^Q_PaM\x0f\x07UDUEVEVDUD RRMTIRORQSRTRVQWPYM\x13\x07UDUEV\
EVDUD RRMTIN[M]K^J]J[KXNUQSSRVPYM \x0eRMTJWEXCY@Y>X=V>U@TDSJRR RRRSOTMVJXIZI[J[LYMVM RVMXNYQZR[R]Q^P\x60M\x11\x08RMTJWEXC\
Y@Y>X=V>U@TDSKSQTRURWQXPZM \x19RMTJVIWJWKVOUR RVOWMYJ[I]I^J^K]O\x5cR R]O^M\x60JbIdIeJeLdOdQeRfRhQiPkM\x16\x12RMTJVIWJWKVO\
UR RVOWMYJ[I]I^J^L]O]Q^R_RaQbPdM\x16\x0eXIVITJSKRMROSQURWRYQZP[N[LZJXIWJWLXNZO]O_N\x60M\x17\x0fRMTJUHTLN^ RTLUJWIYI[J\x5c\
L\x5cN[PZQXR RTQVRYR\x5cQ^PaM\x1a\x0f[LZJXIVITJSKRMROSQURWRYQ R\x5cI[LYQVXU[U]V^X]YZYS[R^PaM\x0e\x0dRMTJUHUJXJYKYMXPXQYRZ\
R\x5cQ]P_M\x0f\x0bRMTJUHUJWMXOXQVR RRQTRXRZQ[P]M\x0f\x09RMTJVF RY=SOSQTRVRXQYP[M RSEZE\x12\x0fRMTIRORQSRURWQYO[L R\x5cIZO\
ZQ[R\x5cR^Q_PaM\x10\x0fRMTISNSQTRURXQZO[L[I R[I\x5cM]N_NaM\x18\x15UISKRNRPSRURWQYO R[IYOYQZR\x5cR^Q\x60OaLaI RaIbMcNeNgM\x13\
\x10RMTJVIXIYJYQZR]R\x60PbM R_J^I\x5cI[JWQVRTRSQ\x16\x0fRMTIRORQSRURWQYO[L R\x5cIV[U]S^R]R[SXVUYS[R^PaM\x16\x0eRMTJVIXIZK\
ZMYOWQTRVSWUWXV[U]S^R]R[SXVUYS]P\x60M\x00\x10\x11\x14[=X>VAUFUIVNXQ[R]R\x60QbNcIcFbA\x60>]=[=\x04\x14XAZ@]=]R\x0e\x14VBVA\
W?X>Z=^=\x60>a?bAbCaE_HURcR\x0f\x14W=b=\x5cE_EaFbGcJcLbO\x60Q]RZRWQVPUN\x06\x14_=UKdK R_=_R\x11\x14a=W=VFWEZD]D\x60EbGcJc\
LbO\x60Q]RZRWQVPUN\x17\x14b@a>^=\x5c=Y>WAVFVKWOYQ\x5cR]R\x60QbOcLcKbH\x60F]E\x5cEYFWHVK\x05\x14c=YR RU=c=\x1d\x14Z=W>V@VB\
WDYE]F\x60GbIcKcNbPaQ^RZRWQVPUNUKVIXG[F_EaDbBb@a>^=Z=\x17\x14bDaG_I\x5cJ[JXIVGUDUCV@X>[=\x5c=_>a@bDbIaN_Q\x5cRZRWQVO\x05\x0a\
WPVQWRXQWP\x08\x0aXQWRVQWPXQXSWUVV\x0b\x0aWDVEWFXEWD RWPVQWRXQWP\x0e\x0aWDVEWFXEWD RXQWRVQWPXQXSWUVV\x08\x0aW=WK RWPVQWRX\
QWP\x14\x12UBUAV?W>Y=]=_>\x60?aAaC\x60E_F[H[K R[PZQ[R\x5cQ[P\x05\x10V=VD R^=^D\x1a\x14Z9ZV R^9^V Rc@a>^=Z=W>U@UBVDWEYF_Ha\
IbJcLcOaQ^RZRWQUO\x02\x16f9TY\x0a\x0e]9[;Y>WBVGVKWPYT[W]Y\x0a\x0eU9W;Y>[B\x5cG\x5cK[PYTWWUY\x02\x08V9VY\x02\x1aVIhI\x05\x1a\
_@_R RVIhI\x05\x1aVFhF RVLhL\x07\x0aX=W>V@VBWCXBWA\x07\x0aW?V>W=X>X@WBVC\x0b\x15]9VY Rc9\x5cY RVFdF RULcL"\x1aiFiEhDgDfEe\
GcLaO_Q]RYRWQVPUNULVJWI^E_D\x60B\x60@_>]=[>Z@ZB[E]HbOdQfRhRiQiP\x02\x0eRU\x60=\x02\x0eR=\x60U\x02\x0aRD\x5cN\x02\x0aRO\x5c\
O\x02\x10RQbQ\x02\x10RTbT\x11\x0eYETR RYH]R RYE^R RVN[N RRRWR R[R\x60R"\x10VEVR RWEWR RTE[E^F_H^J[K R[E]F^H]J[K RWK[K^L_N\
_O^Q[RTR R[K]L^N^O]Q[R\x17\x0e]F^E^I]F[EXEVFUGTJTMUPVQXR[R]Q^O RXEVGUJUMVPXR\x19\x10VEVR RWEWR RTE[E^F_G\x60J\x60M_P^Q[RT\
R R[E]F^G_J_M^P]Q[R\x15\x0fVEVR RWEWR R[I[M RTE^E^I]E RWK[K RTR^R^N]R\x13\x0eVEVR RWEWR R[I[M RTE^E^I]E RWK[K RTRYR#\x10]\
F^E^I]F[EXEVFUGTJTMUPVQXR[R]Q RXEVGUJUMVPXR R[R\x5cQ]O R]M]R R^M^R R[M\x60M\x1a\x11VEVR RWEWR R^E^R R_E_R RTEYE R\x5cEaE \
RWK^K RTRYR R\x5cRaR\x0b\x09VEVR RWEWR RTEYE RTRYR\x12\x0cYEYOXQWR RZEZOYQWRVRTQSOTNUOTP RWE\x5cE\x1a\x10VEVR RWEWR R_EWM\
 RYK^R RZK_R RTEYE R\x5cEaE RTRYR R\x5cRaR\x0d\x0dVEVR RWEWR RTEYE RTR^R^N]R\x1d\x13VEVR RWH[R RWE[O R\x60E[R R\x60E\x60R\
 RaEaR RTEWE R\x60EcE RTRXR R^RcR\x14\x10VEVR RWG^R RWE^P R^E^R RTEWE R\x5cE\x60E RTRXR\x1f\x0fXEVFUGTJTMUPVQXR[R]Q^P_M_J\
^G]F[EXE RXEVGUJUMVPXR R[R]P^M^J]G[E\x18\x0fVEVR RWEWR RTE[E^F_H_I^K[LWL R[E]F^H^I]K[L RTRYR.\x0fXEVFUGTJTMUPVQXR[R]Q^P_M\
_J^G]F[EXE RXEVGUJUMVPXR R[R]P^M^J]G[E RWQWOXNZN[O\x5cT]U^U_T R[O\x5cR]T^U$\x10VEVR RWEWR RTE[E^F_H_I^K[LWL R[E]F^H^I]K[L\
 RTRYR R[L\x5cM]Q^R_R\x60Q R[L]M^Q_R\x1f\x0f]G^E^I]G\x5cFZEXEVFUGUIVJXK[L]M^N RUHVIXJ[K]L^M^P]Q[RYRWQVPUNURVP\x0f\x0fYEYR\
 RZEZR RUETITE_E_I^E RWR\x5cR\x13\x11VEVOWQYR\x5cR^Q_O_E RWEWOXQYR RTEYE R]EaE\x0e\x0eTEYR RUEYO R^EYR RREWE R[E\x60E\x17\
\x12UEXR RVEXN R[EXR R[E^R R\x5cE^N RaE^R RSEXE R_EcE\x14\x0fUE]R RVE^R R^EUR RSEXE R[E\x60E RSRXR R[R\x60R\x13\x0dTEXLXR\
 RUEYL R]EYLYR RREWE RZE_E RVR[R\x0f\x0d\x5cETR R]EUR RUETITE]E RTR]R]N\x5cR\x11\x0e[ERR RZG[R R[E\x5cR RUN[N RPRUR RYR^R\
!\x0fXETR RYEUR RVE]E_F_H^J[K R]E^F^H]J[K RWKZK\x5cL]M]O\x5cQYRRR RZK\x5cM\x5cO[QYR\x18\x0d]F^F_E^H]F[EYEWFVGUITLTOUQWRYR\
[Q\x5cO RYEWGVIULUPWR\x19\x0fXETR RYEUR RVE\x5cE^F_H_K^N]P\x5cQYRRR R\x5cE]F^H^K]N\x5cP[QYR\x15\x0fXETR RYEUR R[IZM RVE\x60\
E_H_E RWKZK RRR\x5cR]O[R\x13\x0eXETR RYEUR R[IZM RVE\x60E_H_E RWKZK RRRWR \x0e]F^F_E^H]F[EYEWFVGUITLTOUQWRYR[Q\x5cP]M RYE\
WGVIULUPWR RYR[P\x5cM RZM_M\x1a\x11XETR RYEUR R\x60E\x5cR RaE]R RVE[E R^EcE RWK^K RRRWR RZR_R\x0b\x09XETR RYEUR RVE[E RRR\
WR\x12\x0c[EXOWQVR R\x5cEYOXQVRURSQROSNTOSP RYE^E\x1a\x10XETR RYEUR RaEWL RZJ\x5cR R[J]R RVE[E R^EcE RRRWR RZR_R\x0d\x0dX\
ETR RYEUR RVE[E RRR\x5cR]O[R\x1d\x13XETR RXGYR RYEZP RbEYR RbE^R RcE_R RVEYE RbEeE RRRVR R\x5cRaR\x14\x10XETR RXE\x5cR RY\
E\x5cO R\x60E\x5cR RVEYE R^EbE RRRVR\x1f\x0eYEWFVGUITLTOUQWRYR[Q\x5cP]N^K^H]F[EYE RYEWGVIULUPWR RYR[P\x5cN]K]G[E\x17\x0fX\
ETR RYEUR RVE]E_F\x60G\x60I_K\x5cLWL R]E_G_I^K\x5cL RRRWR-\x0eYEWFVGUITLTOUQWRYR[Q\x5cP]N^K^H]F[EYE RYEWGVIULUPWR RYR[P\x5c\
N]K]G[E RVQVPWOXOYPYTZU[U\x5cT RYPZT[U"\x10XETR RYEUR RVE]E_F\x60G\x60I_K\x5cLWL R]E_G_I^K\x5cL R[L\x5cQ]R^R_Q R[L\x5cM]Q\
^R RRRWR\x1b\x0f^F_F\x60E_H^F\x5cEYEWFVGVIWJ\x5cM]N RVHWI\x5cL]M]P\x5cQZRWRUQTOSRTQUQ\x0f\x0f[EWR R\x5cEXR RWEUHVEaE\x60H\
\x60E RURZR\x13\x11XEUOUQWR[R]Q^OaE RYEVOVQWR RVE[E R_EcE\x0e\x0eVEWR RWEXP R\x60EWR RTEYE R]EbE\x17\x12WEVR RXEWP R]EVR \
R]E\x5cR R^E]P RcE\x5cR RUEZE RaEeE\x14\x0fWE[R RXE\x5cR R\x60ESR RUEZE R]EbE RQRVR RYR^R\x13\x0dVEXKVR RWEYK R_EYKWR RTE\
YE R\x5cEaE RTRYR\x0f\x0d^ERR R_ESR RWEUHVE_E RRR[R\x5cOZR\x1f\x0eWIVJVKUKUJWIZI\x5cK\x5cQ]R^R RZI[K[Q]R R[LXMVNUOUQVRYRZ\
Q[O RXMVOVQWR\x1c\x0fVEVR RWEWR RWLXJZI\x5cI^J_L_O^Q\x5cRZRXQWO R\x5cI]J^L^O]Q\x5cR RTEWE\x17\x0c\x5cK[K[L\x5cL\x5cK[JYIW\
IUJTLTOUQWRYR[Q\x5cP RWIVJULUOVQWR\x1f\x0f\x5cE\x5cR R]E]R R\x5cL[JYIWIUJTLTOUQWRYR[Q\x5cO RWIVJULUOVQWR RZE]E R\x5cR_R\x19\
\x0cUM\x5cM\x5cL[JYIWIUJTLTOUQWRYR[Q\x5cP R[M[KYI RWIVJULUOVQWR\x13\x0bZE[F[G\x5cG\x5cFZEXEVGVR RXEWGWR RTIYI RTRYR)\x0dW\
IUKUMWOYO[M[KYIWI RWIVKVMWO RYOZMZKYI RZJ[I\x5cI RVNUOURVSZS\x5cT RUQVRZR\x5cS\x5cUZVVVTUTSVR\x1b\x11VEVR RWEWR RWLXJZI\x5c\
I^J_L_R R\x5cI]J^L^R RTEWE RTRYR R\x5cRaR\x11\x09VEVFWFWEVE RVIVR RWIWR RTIWI RTRYR\x16\x09WEWFXFXEWE RWIWTVV RXIXTVVTVSU\
STTTTUSU RUIXI\x1a\x10VEVR RWEWR R_IWO RZM^R R[M_R RTEWE R\x5cIaI RTRYR R\x5cRaR\x0b\x09VEVR RWEWR RTEWE RTRYR+\x19VIVR R\
WIWR RWLXJZI\x5cI^J_L_R R\x5cI]J^L^R R_L\x60JbIdIfJgLgR RdIeJfLfR RTIWI RTRYR R\x5cRaR RdRiR\x1b\x11VIVR RWIWR RWLXJZI\x5c\
I^J_L_R R\x5cI]J^L^R RTIWI RTRYR R\x5cRaR\x1b\x0dWIUJTLTOUQWRZR\x5cQ]O]L\x5cJZIWI RWIVJULUOVQWR RZR[Q\x5cO\x5cL[JZI\x1f\x0f\
VIVV RWIWV RWLXJZI\x5cI^J_L_O^Q\x5cRZRXQWO R\x5cI]J^L^O]Q\x5cR RTIWI RTVYV\x1c\x0e\x5cI\x5cV R]I]V R\x5cL[JYIWIUJTLTOUQWR\
YR[Q\x5cO RWIVJULUOVQWR RZV_V\x15\x0dVIVR RWIWR RWLXJZI\x5cI]J]K\x5cK\x5cJ]J RTIWI RTRYR\x19\x0dZI[J[K\x5cK\x5cJZIWIUJULW\
MZN\x5cO RUKWLZM\x5cN\x5cQZRWRUQUPVPVQWR\x0d\x0bVEVPXRZR[Q[P RWEWPXR RTIZI\x1b\x11VIVOWQYR[R]Q^O RWIWOXQYR R^I^R R_I_R RT\
IWI R\x5cI_I R^RaR\x0e\x0eUIYR RVIYP R]IYR RSIXI R[I_I\x17\x12UIXR RVIXO R[IXR R[I^R R\x5cI^O RaI^R RSIXI R_IcI\x14\x0eUI\
\x5cR RVI]R R]IUR RSIXI R[I_I RSRWR RZR_R\x16\x0eUIYR RVIYP R]IYRWUUVTVSUSTTTTUSU RSIXI R[I_I\x0f\x0c[ITR R\x5cIUR RUITKT\
I\x5cI RTR\x5cR\x5cP[R\x1f\x0f]I[P[Q\x5cR^R_Q\x60O R^I\x5cP\x5cQ]R R\x5cM\x5cKZIXIVJUKTMTOUQWRYR[P RXIVKUMUPWR\x1f\x0eWEU\
L RXEVLVPXR RVLWJYI[I]J^L^N]P\x5cQZRXRVQUOUL R[I]K]N\x5cPZR RUEXE\x15\x0d\x5cJ\x5cK]K\x5cJZIXIVJUKTMTOUQWRYR[Q\x5cP RXIVK\
UMUPWR"\x0f^E[P[Q\x5cR^R_Q\x60O R_E\x5cP\x5cQ]R R\x5cM\x5cKZIXIVJUKTMTOUQWRYR[P RXIVKUMUPWR R\x5cE_E\x16\x0cUOYN[M\x5cL\x5c\
JZIXIVJUKTMTOUQWRYR[Q\x5cP RXIVKUMUPWR\x16\x0b\x5cE]F]E[EYFXHUSTUSV R[EZFYHVSUUSVQVQURV RUI[I!\x0e]I[PZSYU R^I\x5cP[SYUWV\
TVSUTUUV R\x5cM\x5cKZIXIVJUKTMTOUQWRYR[P RXIVKUMUPWR\x1c\x0fWESR RXETR RVKWJYI[I]J]L\x5cO\x5cQ]R R[I\x5cJ\x5cL[O[Q\x5cR^R\
_Q\x60O RUEXE\x19\x0aXEXFYFYEXE RSLTJUIWIXJXLWOWQXR RVIWJWLVOVQWRYRZQ[O\x19\x0aYEYFZFZEYE RTLUJVIXIYJYLWSVUTVRVRUSV RWIXJ\
XLVSUUTV\x1f\x0dWESR RXETR R]J\x5cK]K]J\x5cI[IYKWLVL RVLWMXQYR[R\x5cQ]O RVLXMYQZR RUEXE\x0f\x08WETPTQURWRXQYO RXEUPUQVR R\
UEXE-\x18SLTJUIWIXJXKVR RVIWJWKUR RXKYJ[I]I_J_K]R R]I^J^K\x5cR R_K\x60JbIdIfJfLeOeQfR RdIeJeLdOdQeRgRhQiO \x11SLTJUIWIXJX\
KVR RVIWJWKUR RXKYJ[I]I_J_L^O^Q_R R]I^J^L]O]Q^R\x60RaQbO\x1b\x0dXIVJUKTMTOUQWRYR[Q\x5cP]N]L\x5cJZIXI RXIVKUMUPWR RYR[P\x5c\
N\x5cKZI"\x0fSLTJUIWIXJXKUV RVIWJWKTV RXKZI\x5cI^J_L_N^P]Q[RYRWPWN R\x5cI^K^N]P[R RRVWV\x1b\x0e]IYV R^IZV R\x5cM\x5cKZIXI\
VJUKTMTOUQWRYR[P RXIVKUMUPWR RWV\x5cV\x15\x0cSLTJUIWIXJXKVR RVIWJWKUR RXKYJ[I\x5cI]J]K\x5cK]J\x17\x0d\x5cJ\x5cK]K\x5cJZIW\
IUJULWMZN\x5cO RUKWLZM\x5cN\x5cQZRWRUQTPUPUQ\x0f\x09WETPTQURWRXQYO RXEUPUQVR RTIYI \x11SLTJUIWIXJXLWOWQXR RVIWJWLVOVQXRZR\
\x5cQ]P R_I]P]Q^R\x60RaQbO R\x60I^P^Q_R\x17\x0eSLTJUIWIXJXLWOWQXR RVIWJWLVOVQXRYR[Q]O^L^I]I^J$\x14SLTJUIWIXJXLWOWQXR RVIW\
JWLVOVQXRYR[Q\x5cP R^I\x5cP\x5cQ^R R_I]P]Q^R_RaQcOdLdIcIdJ%\x10ULVJXIZI[J[L RYIZJZLYOXQVRURTQTPUPTQ R\x60J_K\x60K\x60J_I^\
I\x5cJ[LZOZQ[R RYOYQZR\x5cR^Q_O"\x10SLTJUIWIXJXLWOWQXR RVIWJWLVOVQXRZR\x5cQ]P R_I]P\x5cS[U R\x60I^P]S[UYVVVUUVUWV\x1a\x0e\
^I^J]KUPTQTR RUKVIYI\x5cK RVJYJ\x5cK]K RUPVPYQ\x5cQ RVPYR\x5cR]P\x00\x0c\x1b\x0dWEUFTITNUQWRZR\x5cQ]N]I\x5cFZEWE RWEVFUIU\
NVQWR RZR[Q\x5cN\x5cI[FZE\x09\x0dVHYEYR RXFXR RUR\x5cR"\x0dUGUHTHTGUFWEZE\x5cF]H\x5cJZKWLUMTOTR RZE[F\x5cH[JZK RTQUPVPYQ\x5c\
Q]P RVPYR\x5cR]P]O&\x0dUGUHTHTGUFWEZE\x5cF]H\x5cJZK RZE[F\x5cH[JZK RXKZK\x5cL]N]O\x5cQZRWRUQTPTOUOUP RZK[L\x5cN\x5cO[QZR\x0c\
\x0dYGYR RZEZR RZESN^N RWR\x5cR \x0dUETK RUE\x5cE RUFYF\x5cE RTKUJWIZI\x5cJ]L]O\x5cQZRWRUQTPTOUOUP RZI[J\x5cL\x5cO[QZR#\x0d\
\x5cG\x5cH]H]G\x5cFZEXEVFUGTJTOUQWRZR\x5cQ]O]M\x5cKZJWJTL RXEVGUJUOVQWR RZR[Q\x5cO\x5cM[KZJ\x15\x0dTETI R\x5cGXNVR R]EZKW\
R RTGVEXE[G RTGVFXF[G\x5cG2\x0dWEUFTHUJWKZK\x5cJ]H\x5cFZEWE RWEVFUHVJWK RZK[J\x5cH[FZE RWKULTNTOUQWRZR\x5cQ]O]N\x5cLZK RW\
KVLUNUOVQWR RZR[Q\x5cO\x5cN[LZK#\x0dUPUOTOTPUQWRYR[Q\x5cP]M]H\x5cFZEWEUFTHTJULWMZM]K RYR[P\x5cM\x5cH[FZE RWEVFUHUJVLWM\x05\
\x08VPUQVRWQVP\x07\x08WQVRUQVPWQWSUU\x0b\x08VIUJVKWJVI RVPUQVRWQVP\x0d\x08VIUJVKWJVI RWQVRUQVPWQWSUU\x0e\x08VEUFVMWFVE RV\
FVI RVPUQVRWQVP\x1c\x0dTHUHUITITHUFWEZE\x5cF]H]I\x5cKYLXMXNYN RZE\x5cG\x5cJ[KYL RXQXRYRYQXQ\x08\x0aWDWJ RTEZI RZETI\x02\x0f\
_BTV\x0f\x0aZBXDVGUJUNVQXTZV RXDWFVJVNWRXT\x0f\x0aTBVDXGYJYNXQVTTV RVDWFXJXNWRVT\x0b\x0aUBUV RVBVV RUBZB RUVZV\x0b\x0aXBX\
V RYBYV RTBYB RTVYV%\x0bYBWCVDVFXHYJ RWCVF RYHXK RVDWFYHYJXKVLXMYNYPWRVT RXMYP RVRWU RYNXPVRVTWUYV%\x0bVBXCYDYFWHVJ RXCYF\
 RVHWK RYDXFVHVJWKYLWMVNVPXRYT RWMVP RYRXU RVNWPYRYTXUVV\x02\x06UBUV\x02\x12ULaL\x05\x12[F[R RULaL\x05\x12UJaJ RUNaN\x03\x10\
_FUL_R\x03\x10UF_LUR\x0f\x10TNTLUJWJ]M_M\x60L RTLUKWK]N_N\x60L\x60J\x07\x08WFVGUFVEWFWHUJ\x07\x08WEUGUIVJWIVHUI\x0c\x0aWG\
WR RTJUIWFYIZJ RUIWGYI\x19\x10\x60ETR RWEXFXHWIUITHTFUEWE[F^F\x60E R]N\x5cO\x5cQ]R_R\x60Q\x60O_N]N(\x11aJ\x60J\x60KaKaJ\x60\
I_I^J]N\x5cP[QYRWRUQTPTNUMWLZJ[H[FZEXEWFWHXK]Q_R\x60RaQ RWRUPUNWL RWHXJ^Q_R\x1c\x11]J[IYIXKXLYN[N]M R]I]M^N\x60NaLaK\x60H\
^F[EZEWFUHTKTLUOWQZR[R^Q!\x0fXBXV R[B[V R^F]F]G^G^F\x5cEWEUFUHVJ]M^N RUHVI]L^N^P]Q[RXRVQUPUOVOVPUP\x0b\x0eYEUV R]EYV RUK^\
K RTP]P\x11\x14\x5c=UR R\x5c=cR R\x5c@bR RWL\x60L RSRYR R_ReR,\x16W=WR RX=XR RT=\x60=c>d?eAeCdEcF\x60G R\x60=b>c?dAdCcEbF\
\x60G RXG\x60GcHdIeKeNdPcQ\x60RTR R\x60GbHcIdKdNcPbQ\x60R\x1f\x15c@dCd=c@a>^=\x5c=Y>W@VBUEUJVMWOYQ\x5cR^RaQcOdM R\x5c=Z>X\
@WBVEVJWMXOZQ\x5cR\x1d\x16W=WR RX=XR RT=^=a>c@dBeEeJdMcOaQ^RTR R^=\x60>b@cBdEdJcMbO\x60Q^R\x15\x15W=WR RX=XR R^C^K RT=d=d\
Cc= RXG^G RTRdRdLcR\x13\x14W=WR RX=XR R^C^K RT=d=dCc= RXG^G RTR[R'\x17c@dCd=c@a>^=\x5c=Y>W@VBUEUJVMWOYQ\x5cR^RaQcO R\x5c=\
Z>X@WBVEVJWMXOZQ\x5cR RcJcR RdJdR R\x60JgJ\x1a\x18W=WR RX=XR Rd=dR Re=eR RT=[= Ra=h= RXGdG RTR[R RaRhR\x0b\x0bW=WR RX=XR \
RT=[= RTR[R\x13\x0f\x5c=\x5cN[QYRWRUQTOTMULVMUN R[=[NZQYR RX=_=\x1a\x16W=WR RX=XR Re=XJ R]FeR R\x5cFdR RT=[= Ra=g= RTR[R \
RaRgR\x0d\x12W=WR RX=XR RT=[= RTRcRcLbR\x1d\x19W=WR RX=^O RW=^R Re=^R Re=eR Rf=fR RT=X= Re=i= RTRZR RbRiR\x14\x17W=WR RX=\
dP RX?dR Rd=dR RT=X= Ra=g= RTRZR+\x16\x5c=Y>W@VBUFUIVMWOYQ\x5cR^RaQcOdMeIeFdBc@a>^=\x5c= R\x5c=Z>X@WBVFVIWMXOZQ\x5cR R^R\x60\
QbOcMdIdFcBb@\x60>^=\x1c\x16W=WR RX=XR RT=\x60=c>d?eAeDdFcG\x60HXH R\x60=b>c?dAdDcFbG\x60H RTR[R?\x16\x5c=Y>W@VBUFUIVMWOY\
Q\x5cR^RaQcOdMeIeFdBc@a>^=\x5c= R\x5c=Z>X@WBVFVIWMXOZQ\x5cR R^R\x60QbOcMdIdFcBb@\x60>^= RYPYOZM\x5cL]L_M\x60OaVbWdWeUeT R\
\x60OaSbUcVdVeU,\x16W=WR RX=XR RT=\x60=c>d?eAeCdEcF\x60GXG R\x60=b>c?dAdCcEbF\x60G RTR[R R]G_H\x60IcPdQeQfP R_H\x60JbQcRe\
RfPfO!\x14b@c=cCb@\x60>]=Z=W>U@UBVDWEYF_HaIcK RUBWDYE_GaHbIcKcOaQ^R[RXQVOULURVO\x0f\x13[=[R R\x5c=\x5cR RU=TCT=c=cCb= RXR\
_R\x16\x18W=WLXOZQ]R_RbQdOeLe= RX=XLYO[Q]R RT=[= Rb=h=\x0e\x14U=\x5cR RV=\x5cO Rc=\x5cR RS=Y= R_=e=\x17\x18V=ZR RW=ZM R^=\
ZR R^=bR R_=bM Rf=bR RS=Z= Rc=i=\x14\x14U=bR RV=cR Rc=UR RS=Y= R_=e= RSRYR R_ReR\x13\x15U=\x5cH\x5cR RV=]H]R Rd=]H RS=Y= \
R\x60=f= RYR\x60R\x0f\x14b=UR Rc=VR RV=UCU=c= RURcRcLbR\x11\x14_=RR R_=\x60R R^?_R RVL_L RPRVR R\x5cRbR(\x18[=UR R\x5c=VR\
 RX=c=f>g@gBfEeFbG Rc=e>f@fBeEdFbG RYGbGdHeJeLdObQ^RRR RbGcHdJdLcOaQ^R!\x15d?e?f=eCeAd?c>a=^=[>Y@WCVFUJUMVPWQZR]R_QaObM R\
^=\x5c>Z@XCWFVJVMWPXQZR\x1d\x17[=UR R\x5c=VR RX=a=d>e?fBfFeJcNaP_Q[RRR Ra=c>d?eBeFdJbN\x60P^Q[R\x15\x17[=UR R\x5c=VR R\x60\
C^K RX=g=fCf= RYG_G RRRaRcM\x60R\x13\x16[=UR R\x5c=VR R\x60C^K RX=g=fCf= RYG_G RRRYR)\x16d?e?f=eCeAd?c>a=^=[>Y@WCVFUJUMVP\
WQZR\x5cR_QaOcK R^=\x5c>Z@XCWFVJVMWPXQZR R\x5cR^Q\x60ObK R_KfK\x1a\x1a[=UR R\x5c=VR Rh=bR Ri=cR RX=_= Re=l= RYGeG RRRYR R\
_RfR\x0b\x0d[=UR R\x5c=VR RX=_= RRRYR\x14\x12a=\x5cN[PZQXRVRTQSOSMTLUMTN R\x60=[NZPXR R]=d=\x1a\x17[=UR R\x5c=VR Ri=XJ R_\
FcR R^FbR RX=_= Re=k= RRRYR R_ReR\x0d\x14[=UR R\x5c=VR RX=_= RRRaRcL\x60R\x1d\x1b[=UR R[=\x5cR R\x5c=]P Ri=\x5cR Ri=cR Rj\
=dR RX=\x5c= Ri=m= RRRXR R\x60RgR\x14\x19[=UR R[=bO R[@bR Rh=bR RX=[= Re=k= RRRXR)\x16^=[>Y@WCVFUJUMVPWQYR\x5cR_QaOcLdIeE\
eBd?c>a=^= R^=\x5c>Z@XCWFVJVMWPYR R\x5cR^Q\x60ObLcIdEdBc?a=\x1a\x17[=UR R\x5c=VR RX=d=g>h@hBgEeGaHYH Rd=f>g@gBfEdGaH RRRY\
R<\x16^=[>Y@WCVFUJUMVPWQYR\x5cR_QaOcLdIeEeBd?c>a=^= R^=\x5c>Z@XCWFVJVMWPYR R\x5cR^Q\x60ObLcIdEdBc?a= RWPWOXMZL[L]M^O^V_Wa\
WbUbT R^O_U\x60VaVbU)\x18[=UR R\x5c=VR RX=c=f>g@gBfEeFbGYG Rc=e>f@fBeEdFbG R^G\x60HaIbQcReRfPfO RaIcPdQeQfP RRRYR"\x17e?f\
?g=fCfAe?d>a=]=Z>X@XBYDZEaIcK RXBZDaHbIcKcNbPaQ^RZRWQVPUNULTRUPVP\x0f\x15_=YR R\x60=ZR RY=VCX=g=fCf= RVR]R\x18\x19Z=WHVLV\
OWQZR^RaQcOdLh= R[=XHWLWOXQZR RW=^= Re=k=\x0e\x14X=YR RY=ZP Rf=YR RV=\x5c= Rb=h=\x17\x1aZ=XR R[=YP Rb=XR Rb=\x60R Rc=aP R\
j=\x60R RW=^= Rg=m=\x14\x16Y=\x60R RZ=aR Rg=SR RW=]= Rc=i= RQRWR R]RcR\x13\x15X=\x5cGYR RY=]GZR Rg=]G RV=\x5c= Rc=i= RVR]\
R\x0f\x16f=SR Rg=TR RZ=WCY=g= RSRaRcL\x60R&\x14WFWGVGVFWEYD]D_E\x60FaHaObQcR R\x60F\x60OaQcRdR R\x60H_IYJVKUMUOVQYR\x5cR^\
Q\x60O RYJWKVMVOWQYR \x15W=WR RX=XR RXGZE\x5cD^DaEcGdJdLcOaQ^R\x5cRZQXO R^D\x60EbGcJcLbO\x60Q^R RT=X=\x1b\x13aG\x60HaIbHb\
G\x60E^D[DXEVGUJULVOXQ[R]R\x60QbO R[DYEWGVJVLWOYQ[R#\x15a=aR Rb=bR RaG_E]D[DXEVGUJULVOXQ[R]R_QaO R[DYEWGVJVLWOYQ[R R^=b= \
RaReR\x1e\x13VJbJbHaF\x60E^D[DXEVGUJULVOXQ[R]R\x60QbO RaJaG\x60E R[DYEWGVJVLWOYQ[R\x15\x0d\x5c>[?\x5c@]?]>\x5c=Z=X>W@WR R\
Z=Y>X@XR RTD\x5cD RTR[R;\x13ZDXEWFVHVJWLXMZN\x5cN^M_L\x60J\x60H_F^E\x5cDZD RXEWGWKXM R^M_K_G^E R_F\x60EbDbE\x60E RWLVMUOU\
PVRYS^SaTbU RUPVQYR^RaSbUbVaX^YXYUXTVTUUSXR\x1b\x16W=WR RX=XR RXGZE]D_DbEcGcR R_DaEbGbR RT=X= RTR[R R_RfR\x11\x0bW=V>W?X>\
W= RWDWR RXDXR RTDXD RTR[R\x18\x0bX=W>X?Y>X= RYDYVXXVYTYSXSWTVUWTX RXDXVWXVY RUDYD\x1a\x15W=WR RX=XR RbDXN R]JcR R\x5cJbR\
 RT=X= R_DeD RTR[R R_ReR\x0b\x0bW=WR RX=XR RT=X= RTR[R+!WDWR RXDXR RXGZE]D_DbEcGcR R_DaEbGbR RcGeEhDjDmEnGnR RjDlEmGmR RT\
DXD RTR[R R_RfR RjRqR\x1b\x16WDWR RXDXR RXGZE]D_DbEcGcR R_DaEbGbR RTDXD RTR[R R_RfR#\x14[DXEVGUJULVOXQ[R]R\x60QbOcLcJbG\x60\
E]D[D R[DYEWGVJVLWOYQ[R R]R_QaObLbJaG_E]D#\x15WDWY RXDXY RXGZE\x5cD^DaEcGdJdLcOaQ^R\x5cRZQXO R^D\x60EbGcJcLbO\x60Q^R RTDX\
D RTY[Y \x14aDaY RbDbY RaG_E]D[DXEVGUJULVOXQ[R]R_QaO R[DYEWGVJVLWOYQ[R R^YeY\x16\x11WDWR RXDXR RXJYG[E]D\x60DaEaF\x60G_F\x60\
E RTDXD RTR[R\x1f\x11_F\x60D\x60H_F^E\x5cDXDVEUFUHVIXJ]L_M\x60N RUGVHXI]K_L\x60M\x60P_Q]RYRWQVPUNURVP\x0f\x0fW=WNXQZR\x5c\
R^Q_O RX=XNYQZR RTD\x5cD\x1b\x16WDWOXQ[R]R\x60QbO RXDXOYQ[R RbDbR RcDcR RTDXD R_DcD RbRfR\x0e\x12UD[R RVD[P RaD[R RSDYD R\
]DcD\x17\x18VDZR RWDZO R^DZR R^DbR R_DbO RfDbR RSDZD RcDiD\x14\x14VDaR RWDbR RbDVR RTDZD R^DdD RTRZR R^RdR\x15\x13VD\x5cR\
 RWD\x5cP RbD\x5cRZVXXVYUYTXUWVX RTDZD R^DdD\x0f\x12\x60DUR RaDVR RVDUHUDaD RURaRaN\x60R&\x15bD\x60K_O_Q\x60RcRePfN RcDaK\
\x60O\x60QaR R\x60K\x60H_E]D[DXEVHUKUNVPWQYR[R]Q_N\x60K R[DYEWHVKVOWQ#\x13Z=VJVMWPXQ R[=WJ RWJXGZE\x5cD^D\x60EaFbHbKaN_Q\x5c\
RZRXQWNWJ R\x60EaGaK\x60N^Q\x5cR RW=[=\x18\x12\x60G\x60HaHaG\x60E^D[DXEVHUKUNVPWQYR[R^Q\x60N R[DYEWHVKVOWQ)\x15d=\x60K_O_\
Q\x60RcRePfN Re=aK\x60O\x60QaR R\x60K\x60H_E]D[DXEVHUKUNVPWQYR[R]Q_N\x60K R[DYEWHVKVOWQ Ra=e=\x19\x12VMZL]K\x60IaG\x60E^D\
[DXEVHUKUNVPWQYR[R^Q\x60O R[DYEWHVKVOWQ"\x0fa>\x60?a@b?b>a=_=]>\x5c?[AZDWRVVUX R_=]?\x5cA[EYNXRWUVWUXSYQYPXPWQVRWQX RVD\x60\
D*\x14cD_R^U\x5cXYYVYTXSWSVTUUVTW RbD^R]U[XYY R\x60K\x60H_E]D[DXEVHUKUNVPWQYR[R]Q_N\x60K R[DYEWHVKVOWQ\x1e\x15Z=TR R[=UR \
RWKYG[E]D_DaEbFbH\x60N\x60QaR R_DaFaH_N_Q\x60RcRePfN RW=[=\x19\x0d[=Z>[?\x5c>[= RSHTFVDYDZEZHXNXQYR RXDYEYHWNWQXR[R]P^N\x1f\
\x0d\x5c=[>\x5c?]>\x5c= RTHUFWDZD[E[HXRWUVWUXSYQYPXPWQVRWQX RYDZEZHWRVUUWSY!\x14Z=TR R[=UR RbEaFbGcFcEbDaD_E[IYJWJ RYJ[K]\
Q^R RYJZK\x5cQ]R_RaQcN RW=[=\x11\x0cZ=VKUOUQVRYR[P\x5cN R[=WKVOVQWR RW=[=3!SHTFVDYDZEZGYKWR RXDYEYGXKVR RYK[G]E_DaDcEdFdH\
aR RaDcFcH\x60R RcKeGgEiDkDmEnFnHlNlQmR RkDmFmHkNkQlRoRqPrN$\x17SHTFVDYDZEZGYKWR RXDYEYGXKVR RYK[G]E_DaDcEdFdHbNbQcR RaDc\
FcHaNaQbReRgPhN\x1f\x12[DXEVHUKUNVPWQYR[R^Q\x60NaKaH\x60F_E]D[D R[DYEWHVKVOWQ R[R]Q_N\x60K\x60G_E)\x15SHTFVDYDZEZGYKUY RX\
DYEYGXKTY RYKZH\x5cE^D\x60DbEcFdHdKcNaQ^R\x5cRZQYNYK RbEcGcKbN\x60Q^R RQYXY \x14bD\x5cY RcD]Y R\x60K\x60H_E]D[DXEVHUKUNVP\
WQYR[R]Q_N\x60K R[DYEWHVKVOWQ RYY\x60Y\x19\x11SHTFVDYDZEZGYKWR RXDYEYGXKVR RYK[G]E_DaDbEbFaG\x60FaE\x1b\x11\x60F\x60GaGaF\
\x60E]DZDWEVFVHWI^M_N RVGWH^L_M_P^Q[RXRUQTPTOUOUP\x11\x0e[=WKVOVQWRZR\x5cP]N R\x5c=XKWOWQXR RUD^D$\x17SHTFVDYDZEZHXNXPZR \
RXDYEYHWNWPXQZR\x5cR^Q\x60ObK RdDbKaOaQbReRgPhN ReDcKbObQcR\x19\x14SHTFVDYDZEZHXNXPZR RXDYEYHWNWPXQZR[R^Q\x60ObLcHcDbDcF(\
\x1dSHTFVDYDZEZHXNXPZR RXDYEYHWNWPXQZR\x5cR^Q\x60OaM RcDaMaPbQdRfRhQjOkMlIlDkDlF RdDbMbPdR)\x14UHWEYD\x5cD]F]I R[D\x5cF\x5c\
I[MZOXQVRURTQTPUOVPUQ R[M[P\x5cR_RaQcN RcEbFcGdFdEcDbD\x60E^G]I\x5cM\x5cP]R(\x15SHTFVDYDZEZHXNXPZR RXDYEYHWNWPXQZR\x5cR^Q\
\x60ObK ReDaR\x60U^X[YXYVXUWUVVUWVVW RdD\x60R_U]X[Y\x1e\x14cDbF\x60HXNVPUR RVHWFYD\x5cD\x60F RWFYE\x5cE\x60FbF RVPXP\x5cQ\
_QaP RXP\x5cR_RaPbN\x00\x10'\x14[=X>VAUFUIVNXQ[R]R\x60QbNcIcFbA\x60>]=[= R[=Y>X?WAVFVIWNXPYQ[R R]R_Q\x60PaNbIbFaA\x60?_>]\
=\x0a\x14XAZ@]=]R R\x5c>\x5cR RXRaR,\x14VAWBVCUBUAV?W>Z=^=a>b?cAcCbE_GZIXJVLUOUR R^=\x60>a?bAbCaE^GZI RUPVOXO]Q\x60QbPcO \
RXO]RaRbQcOcM.\x14VAWBVCUBUAV?W>Z=^=a>b@bCaE^F[F R^=\x60>a@aC\x60E^F R^F\x60GbIcKcNbPaQ^RZRWQVPUNUMVLWMVN RaHbKbNaP\x60Q^\
R\x0c\x14^?^R R_=_R R_=TLdL R[RbR&\x14W=UG RUGWEZD]D\x60EbGcJcLbO\x60Q]RZRWQVPUNUMVLWMVN R]D_EaGbJbLaO_Q]R RW=a= RW>\x5c>\
a=/\x14a@\x60AaBbAb@a>_=\x5c=Y>W@VBUFULVOXQ[R]R\x60QbOcLcKbH\x60F]E\x5cEYFWHVK R\x5c=Z>X@WBVFVLWOYQ[R R]R_QaObLbKaH_F]E\x1e\
\x14U=UC RUAV?X=Z=_@a@b?c= RV?X>Z>_@ Rc=c@bC^H]J\x5cM\x5cR RbC]H\x5cJ[M[R>\x14Z=W>V@VCWEZF^FaEbCb@a>^=Z= RZ=X>W@WCXEZF R^\
F\x60EaCa@\x60>^= RZFWGVHUJUNVPWQZR^RaQbPcNcJbHaG^F RZFXGWHVJVNWPXQZR R^R\x60QaPbNbJaH\x60G^F/\x14bDaG_I\x5cJ[JXIVGUDUCV@\
X>[=]=\x60>b@cCcIbMaO_Q\x5cRYRWQVOVNWMXNWO R[JYIWGVDVCW@Y>[= R]=_>a@bCbIaM\x60O^Q\x5cR\x05\x0aWPVQWRXQWP\x07\x0aWRVQWPXQX\
SWUVV\x0b\x0aWDVEWFXEWD RWPVQWRXQWP\x0d\x0aWDVEWFXEWD RWRVQWPXQXSWUVV\x0e\x0aW=V?WKX?W= RW?WE RWPVQWRXQWP\x1f\x12VAWBVCUB\
UAV?W>Y=\x5c=_>\x60?aAaC\x60E_F[H[K R\x5c=^>_?\x60A\x60C_E]G R[PZQ[R\x5cQ[P\x08\x10Z=ZI RU@_F R_@UF\x02\x16f9TY\x13\x0e]9\
[;Y>WBVGVKWPYT[W]Y R[;Y?XBWGWKXPYS[W\x13\x0eU9W;Y>[B\x5cG\x5cK[PYTWWUY RW;Y?ZB[G[KZPYSWW\x0b\x0eV9VY RW9WY RV9]9 RVY]Y\x0b\
\x0e[9[Y R\x5c9\x5cY RU9\x5c9 RUY\x5cY'\x0e[9Y:X;W=W?XAYBZDZFXH RY:X<X>Y@ZA[C[EZGVIZK[M[OZQYRXTXVYX RXJZLZNYPXQWSWUXWYX[Y\
'\x0eW9Y:Z;[=[?ZAYBXDXFZH RY:Z<Z>Y@XAWCWEXG\x5cIXKWMWOXQYRZTZVYX RZJXLXNYPZQ[S[UZWYXWY\x02\x08V9VY\x02\x1aVIhI\x05\x1a_@_\
R RVIhI\x05\x1aVFhF RVLhL\x03\x18f@VIfR\x03\x18V@fIVR\x17\x18ULUJVGXFZF\x5cG\x60JbKdKfJgH RUJVHXGZG\x5cH\x60KbLdLfKgHgF\x07\
\x0aW?V>W=X>X@WBVC\x07\x0aX=W>V@VBWCXBWA\x0a\x10XCZ@\x5cC RUFZA_F RZAZR\x1f\x18g=UR RZ=\x5c?\x5cA[CYDWDUBU@V>X=Z=\x5c>_?b\
?e>g= RcKaL\x60N\x60PbRdRfQgOgMeKcK0\x19gEfFgGhFhEgDfDeEdGbL\x60O^Q\x5cRYRVQUOULVJ\x5cF^D_B_@^>\x5c=Z>Y@YBZE\x5cHaOcQfRgR\
hQhP RYRWQVOVLWJYH RYBZDbOdQfR7\x1bdEcCaB^B\x5cC[DZGZJ[L]M\x60MbLcJ R^B\x5cD[G[J\x5cL]M RdBcJcLeMgMiKjHjFiChAf?d>a=^=[>Y?\
WAVCUFUIVLWNYP[Q^RaRdQfPgO ReBdJdLeM)\x14Z9ZV R^9^V Rb@aAbBcAc@a>^=Z=W>U@UBVDWEYF_HaIcK RUBWDYE_GaHbIcKcOaQ^RZRWQUOUNVMWN\
VO\x0b\x15]=VY Rc=\x5cY RVHdH RUNcN\x13\x14\x5c=TR R\x5c@URTR R\x5c@cRdR R\x5c=dR RWLaL RVMbM+\x14V=VR RW>WQ RV=^=a>b?cAc\
DbFaG^H RW>^>a?bAbDaF^G RWG^GaHbIcKcNbPaQ^RVR RWH^HaIbKbNaP^QWQ%\x15dBc@a>_=[=Y>W@VBUEUJVMWOYQ[R_RaQcOdM RdBcBb@a?_>[>Y?W\
BVEVJWMYP[Q_QaPbOcMdM\x1f\x15V=VR RW>WQ RV=]=\x60>b@cBdEdJcMbO\x60Q]RVR RW>]>\x60?a@bBcEcJbMaO\x60P]QWQ\x1a\x13V=VR RW>WQ\
 RV=b= RW>b>b= RWG]G]H RWH]H RWQbQbR RVRbR\x14\x12V=VR RW>WRVR RV=b= RW>b>b= RWG]G]H RWH]H+\x15dBc@a>_=[=Y>W@VBUEUJVMWOYQ\
[R_RaQcOdMdI_I RdBcBb@a?_>[>Y?X@WBVEVJWMXOYP[Q_QaPbOcMcJ_J_I\x15\x16V=VR RV=W=WRVR Rd=c=cRdR Rd=dR RWGcG RWHcH\x07\x09V=V\
RWR RV=W=WR\x13\x11^=^M]P[QYQWPVMUM R^=_=_M^P]Q[RYRWQVPUM\x15\x15V=VRWR RV=W=WR Rd=c=WI Rd=WJ RZFcRdR R[FdR\x0d\x11V=VR R\
V=W=WQ RWQbQbR RVRbR\x19\x18V=VR RWBWRVR RWB^R RV=^O Rf=^O ReB^R ReBeRfR Rf=fR\x13\x16V=VR RW@WRVR RW@dR RV=cO Rc=cO Rc=d\
=dR'\x16[=Y>W@VBUEUJVMWOYQ[R_RaQcOdMeJeEdBc@a>_=[= R\x5c>Y?WBVEVJWMYP\x5cQ^QaPcMdJdEcBa?^>\x5c>\x1a\x14V=VR RW>WRVR RV=_=\
a>b?cAcDbFaG_HWH RW>_>a?bAbDaF_GWG/\x16[=Y>W@VBUEUJVMWOYQ[R_RaQcOdMeJeEdBc@a>_=[= R\x5c>Y?WBVEVJWMYP\x5cQ^QaPcMdJdEcBa?^>\
\x5c> R^OcTdT R^O_OdT!\x14V=VR RW>WRVR RV=^=a>b?cAcDbFaG^HWH RW>^>a?bAbDaF^GWG R\x5cHbRcR R]HcR*\x14c@a>^=Z=W>U@UBVDWEYF^\
H\x60IaJbLbOaP^QZQXPWOUO Rc@a@\x60?^>Z>W?V@VBWDYE^G\x60HbJcLcOaQ^RZRWQUO\x0e\x11Z>ZR R[>[RZR RT=a=a> RT=T>a>\x17\x16V=VLW\
OYQ\x5cR^RaQcOdLd= RV=W=WLXOYP\x5cQ^QaPbOcLc=d=\x0d\x14T=\x5cR RT=U=\x5cO Rd=c=\x5cO Rd=\x5cR\x19\x1aT=ZR RT=U=ZO R_=ZO R\
_@ZR R_@dR R_=dO Rj=i=dO Rj=dR\x0f\x14U=bRcR RU=V=cR Rc=b=UR Rc=VRUR\x10\x13T=[G[R\x5cR RT=U=\x5cG Rc=b=[G Rc=\x5cG\x5cR\x13\
\x14b=UR Rc=VR RU=c= RU=U>b> RVQcQcR RURcR%\x17e=c?aB^G\x5cJYNVQTRRRQQQORNSORP Re=dAbKaR Re=bR RaRaP\x60M_K]I[HYHXIXKYN\x5c\
Q_RcReQE\x18a>\x60?_A]F[LZNXQVR R\x60?_B]J\x5cM[OYQVRTRSQSOTNUOTP R[CZEYFWFVEVCWAY?[>^=d=f>g@gBfDdE\x60F^F Rd=e>f@fBeDdE \
R\x60FcGdHeJeMdPcQaR_R^Q^O_L R\x60FbGcHdJdMcPaR(\x15U?TATCUEXF[F_EaDcBd@d>c=a=^>[AYDWHVLVOWQZR\x5cR_QaObMbKaI_I]J\x5cL Ra\
=_>\x5cAZDXHWLWOXQZR*\x17a>\x60?_A]F[LZNXQVR R\x60?_B]J\x5cM[OYQVRTRSQSOTNVNXOZQ\x5cR_RaQcOeKfFfCe@c>a=\x5c=Y>W@VBVDWEYEZ\
D[B0\x13\x60@_A_C\x60DbDcBc@b>\x60=]=[>Z?YAYCZE\x5cF R]=[?ZAZD\x5cF R\x5cFZFWGUITKTNUPVQXR[R^Q\x60OaMaK\x60I^I\x5cJ[L RZF\
XGVIUKUOVQ-\x15b?aA_F]L\x5cNZQXR R\x5cC[EYFWFVDVBW@Y>\x5c=f=c>b?aB_J^M]O[QXRVRTQSPSOTNUOTP R^=b>c> RZJ[I]HaHcGeDcK4\x16U@\
TBTDUFWGZG]F_EbBc?c>b=a=_>]@\x5cB[E[H\x5cJ^K\x60KbJdHeF Rb=\x60>^@]B\x5cE\x5cI^K ReFdJbN\x60P^QZRWRUQTOTNUMVNUO RdJbM\x60\
O]QZR6\x18XCWBW@X>[=^=[HYNXPWQURSRRQROSNTOSP R^=[FZIXNWPUR RVKWJYIbFdEgCiAj?j>i=h=f>dAcCaI\x60M\x60PbRcReQgO Rh=f?dCbIaMa\
PbR \x10\x60?^B\x5cGZLYNWQUR RbC\x60E]FZFXEWCWAX?Z>^=b=\x60?_A]G[MZOXQURSRRQROSNTOSP!\x11b=\x60?^B\x5cGYPWT RbD\x60F]GZGX\
FWDWBX@Z>^=b=\x60@_B\x5cKZOYQWTVUTVSUSSTQVOXN[M_L:\x18XCWBW@Y>\x5c=^=[HYNXPWQURSRRQROSNTOSP R^=[FZIXNWPUR Rf>cBaD_E\x5cF \
Ri>h?i@j?j>i=h=f>cCbD\x60E\x5cF R\x5cF_G\x60IaPbR R\x5cF^G_I\x60PbRcReQgO'\x12V@UBUDVFXG[G^F\x60EcBd?d>c=b=\x60>_?]BYLXNV\
QTR R_?]C[JZMYOWQTRRRQQQORNTNVOYQ[R^R\x60QbO0\x1c\x60=\x5cFYLWOUQSRQRPQPOQNROQP R\x60=^D]H\x5cM\x5cQ^R R\x60=_A^F]M]Q^R R\
i=eF\x60O^R Ri=gDfHeMeQgRhRjQlO Ri=hAgFfMfQgR%\x17]=\x5cAZGXLWNUQSRQRPQPOQNROQP R]=]B^M_R R]=^B_M_R Rk>j?k@l?l>k=i=g>eAdC\
bH\x60N_R!\x15]=[>Y@WCVEUIUMVPWQYR[R^Q\x60ObLcJdFdBc?b>a>_?]A[EZJZM R[>YAWEVIVMWPYR4\x17a>\x60?_A]F[LZNXQVR R\x60?_B]J\x5c\
M[OYQVRTRSQSOTNUOTP R[CZEYFWFVEVCWAY?[>^=b=e>f?gAgDfFeGbH\x60H^G Rb=d>e?fAfDeFdGbH*\x15_A_C^E]F[GYGXEXCY@[>^=a=c>d@dDcGaJ\
]NZPXQURSRRQROSNUNWOZQ]R\x60RbQdO Ra=b>c@cDbG\x60J]MYPUR@\x18a>\x60?_A]F[LZNXQVR R\x60?_B]J\x5cM[OYQVRTRSQSOTNUOTP R[CZEY\
FWFVEVCWAY?[>^=c=f>g@gBfDeEbF^F Rc=e>f@fBeDdEbF R^FaGbIcPdR R^F\x60GaIbPdReRgQiO#\x14X@WBWDXFZG]G\x60FbEeBf?f>e=d=b>a?\x60\
A_D]K\x5cNZQXR R\x60A_E^L]O[QXRURSQRORNSMTNSO%\x12b?aA_F]L\x5cNZQXR R\x5cC[EYFWFVDVBW@Y>\x5c=e=c>b?aB_J^M]O[QXRVRTQSPSOTN\
UOTP R^=b>c>&\x16SAU>W=X=Z?ZBYEVMVPWR RX=Y?YBVJUMUPWRYR[Q^N\x60KaI Re=aI\x60M\x60PbRcReQgO Rf=bIaMaPbR#\x15SAU>W=X=Z?ZBYF\
WMWPXR RX=Y?YBWIVMVPXRYR\x5cQ_NaKcGdDe@e>d=c=b>a@aCbEdGfHhH(\x17UCTCSBS@T>V=Z=Y?XCWLVR RXCXLWR Rb=\x60?^C[LYPWR Rb=a?\x60\
C_L^R R\x60C\x60L_R Rl=j>h@fCcLaP_R3\x14ZBYCWCVBV@W>Y=[=]>^@^C]G[LYOWQTRRRQQQORNSORP R[=\x5c>]@]C\x5cGZLXOVQTR Rg>f?g@h?h\
>g=e=c>a@_C]G\x5cL\x5cO]Q^R_RaQcO)\x16UAW>Y=Z=\x5c>\x5c@ZFZI[K RZ=[>[@YFYI[K]K\x60JbHdEeC Rg=eCbK\x60O Rh=fCdHbL\x60O^Q[R\
WRUQTOTNUMVNUO+\x15e?dAbFaI\x60K^N\x5cPZQWR R^C]E[FYFXDXBY@[>^=h=f>e?dBcFaL_O\x5cQWRSRRQROSNUNWOZQ\x5cR_RbQdO Ra=e>f>#\x14\
aDaRbR RaDbDbR RaG_E]DZDXEVGUJULVOXQZR]R_QaO RaG]EZEXFWGVJVLWOXPZQ]QaO#\x14V=VRWR RV=W=WR RWGYE[D^D\x60EbGcJcLbO\x60Q^R[R\
YQWO RWG[E^E\x60FaGbJbLaO\x60P^Q[QWO\x1f\x12aG_E]DZDXEVGUJULVOXQZR]R_QaO RaG\x60H_F]EZEXFWGVJVLWOXPZQ]Q_P\x60NaO#\x14a=aR\
bR Ra=b=bR RaG_E]DZDXEVGUJULVOXQZR]R_QaO RaG]EZEXFWGVJVLWOXPZQ]QaO#\x12VKaKaH\x60F_E]DZDXEVGUJULVOXQZR]R_QaO RVJ\x60J\x60\
H_F]EZEXFWGVJVLWOXPZQ]Q_P\x60NaO\x17\x0e]=[=Y>XAXRYR R]=]>[>Y? RZ>YAYR RUD\x5cD\x5cE RUDUE\x5cE/\x14bDaDaS\x60V_W]X[XYWXV\
VV RbDbSaV_X]YZYXXVV RaG_E]DZDXEVGUJULVOXQZR]R_QaO RaG]EZEXFWGVJVLWOXPZQ]QaO\x18\x14V=VRWR RV=W=WR RWHZE\x5cD_DaEbHbR RWH\
ZF\x5cE^E\x60FaHaRbR\x17\x09V=U>U?V@W@X?X>W=V= RV>V?W?W>V> RVDVRWR RVDWDWR\x17\x09V=U>U?V@W@X?X>W=V= RV>V?W?W>V> RVDVYWY \
RVDWDWY\x15\x13V=VRWR RV=W=WR RbDaDWN RbDWO RZK\x60RbR R[JbR\x07\x09V=VRWR RV=W=WR)\x1fVDVRWR RVDWDWR RWHZE\x5cD_DaEbHbR \
RWHZF\x5cE^E\x60FaHaRbR RbHeEgDjDlEmHmR RbHeFgEiEkFlHlRmR\x18\x14VDVRWR RVDWDWR RWHZE\x5cD_DaEbHbR RWHZF\x5cE^E\x60FaHaRb\
R#\x13ZDXEVGUJULVOXQZR]R_QaObLbJaG_E]DZD RZEXFWGVJVLWOXPZQ]Q_P\x60OaLaJ\x60G_F]EZE#\x14VDVYWY RVDWDWY RWGYE[D^D\x60EbGcJc\
LbO\x60Q^R[RYQWO RWG[E^E\x60FaGbJbLaO\x60P^Q[QWO#\x14aDaYbY RaDbDbY RaG_E]DZDXEVGUJULVOXQZR]R_QaO RaG]EZEXFWGVJVLWOXPZQ]Q\
aO\x14\x0eVDVRWR RVDWDWR RWJXGZE\x5cD_D RWJXHZF\x5cE_E_D1\x11\x60G_E\x5cDYDVEUGVIXJ]L_M R^L_N_O^Q R_P\x5cQYQVP RWQVOUO R\x60\
G_G^E R_F\x5cEYEVF RWEVGWI RVHXI]K_L\x60N\x60O_Q\x5cRYRVQUO\x0f\x0bW=WRXR RW=X=XR RTD[D[E RTDTE[E\x18\x14VDVNWQYR\x5cR^Qa\
N RVDWDWNXPZQ\x5cQ^PaN RaDaRbR RaDbDbR\x0d\x10TDZR RTDUDZP R\x60D_DZP R\x60DZR\x19\x18UDZR RUDVDZO R^DZO R^GZR R^GbR R^Db\
O RgDfDbO RgDbR\x0f\x12UD\x60RaR RUDVDaR RaD\x60DUR RaDVRUR\x10\x10TDZR RTDUDZP R\x60D_DZPVY R\x60DZRWYVY\x13\x12_EUR RaD\
WQ RUDaD RUDUE_E RWQaQaR RURaR \x10\x5cL[JYIWIUJTKSMSOTQVRXRZQ[O RWIUKTMTPVR R]I[O[Q]R_Q\x60PbM R^I\x5cO\x5cQ]R\x16\x0eRM\
TJVF RY=SOSQURVRXQZO[L[I\x5cM]N^N\x60M RZ=TOTQUR\x15\x0cZJYKZKZJYIWIUJTKSMSOTQVRYR\x5cP^M RWIUKTMTPVR \x10\x5cL[JYIWIUJTK\
SMSOTQVRXRZQ[O RWIUKTMTPVR Ra=[O[Q]R_Q\x60PbM Rb=\x5cO\x5cQ]R\x16\x0cUPWOXNYLYJXIWIUJTKSMSOTQVRYR\x5cP^M RWIUKTMTPVR\x1a\x09\
UIXFZC[@[>Z=X>W@N[N]O^Q]RZSQTRVRXQYP[M RW@VEUIRRPWN[%\x10\x5cL[JYIWIUJTKSMSOTQVRXRZQ[O RWIUKTMTPVR R]IW[ R^I[RYWW[V]T^S]S\
[TXVVYT]R\x60PbM\x1d\x0fRMTJVF RY=RR RZ=SR RULWJYIZI\x5cJ\x5cL[O[Q\x5cR RZI[J[LZOZQ\x5cR^Q_PaM\x12\x08WCVDWEXDWC RUISOSQU\
RWQXPZM RVITOTQUR\x17\x08WCVDWEXDWC RUIO[ RVISRQWO[N]L^K]K[LXNVQTURXPZM\x1e\x0eRMTJVF RY=RR RZ=SR R[I[J\x5cJ[IZIXKUL RULX\
MYQZR RULWMXQZR[R^P\x60M\x10\x08RMTJVF RY=SOSQURWQXPZM RZ=TOTQUR,\x19RMTJVIXJXLVR RVIWJWLUR RXLZJ\x5cI]I_J_L]R R]I^J^L\x5c\
R R_LaJcIdIfJfLeOeQfR RdIeJeLdOdQfRhQiPkM\x1f\x12RMTJVIXJXLVR RVIWJWLUR RXLZJ\x5cI]I_J_L^O^Q_R R]I^J^L]O]Q_RaQbPdM\x1c\x0e\
YIWIUJTKSMSOTQVRXRZQ[P\x5cN\x5cL[JYIXJXLYN[O]O_N\x60M RWIUKTMTPVR\x1d\x0fRMTJVF RWCN^ RXCO^ RULWJYIZI\x5cJ\x5cL[O[Q\x5cR \
RZI[J[LZOZQ\x5cR^Q_PaM"\x10\x5cL[JYIWIUJTKSMSOTQVRXRZQ RWIUKTMTPVR R]IW[W]X^Z][Z[R]R\x60PbM R^I[RYWW[\x17\x0eRMTJVIXJXLVR\
 RVIWJWLUR RXLZJ\x5cI]I\x5cL R\x5cI\x5cL]N^N\x60M\x15\x0cRMTJUHUJXLYNYPXQVR RUJWLXNXPVR RRQTRYR\x5cP^M\x13\x08RMTJVF RY=S\
OSQURWQXPZM RZ=TOTQUR RTEZE\x1a\x10UISOSQURVRXQZO\x5cL RVITOTQUR R]I[O[Q]R_Q\x60PbM R^I\x5cO\x5cQ]R\x16\x0fUITKSNSQURVRYQ\
[O\x5cL\x5cI RVIUKTNTQUR R\x5cI]M^N_NaM#\x15VITKSNSQURVRXQZO RWIUKTNTQUR R\x5cIZOZQ\x5cR]R_QaObLbI R]I[O[Q\x5cR RbIcMdNeN\
gM)\x10RMTJVIXIYJYLXOWQURTRSQSPTPSQ R_J^K_K_J^I]I[JZLYOYQZR]R\x60PbM RYJZL R[JYL RXOYQ RYOWQ\x1f\x10UISOSQURVRXQZO\x5cL R\
VITOTQUR R]IW[ R^I[RYWW[V]T^S]S[TXVVYT]R\x60PbM%\x0dRMTJVIXIZJZMYOVQTR RXIYJYMXOVQ RTRVSWUWXV[T]R^Q]Q[RXUUXS\x5cP_M RTRUS\
VUVXU[T]\x00\x10)\x14[=X>VAUFUIVNXQ[R]R\x60QbNcIcFbA\x60>]=[= RY>WAVFVIWNYQ RXP[Q]Q\x60P R_QaNbIbFaA_> R\x60?]>[>X?\x0b\x14\
XAZ@]=]R RXAXBZA\x5c?\x5cR]R!\x14VBVAW?X>Z=^=\x60>a?bAbCaE_HVR RVBWBWAX?Z>^>\x60?aAaC\x60E^HUR RVQcQcR RURcR/\x14W=b=[F R\
W=W>a> Ra=ZF R[E]E\x60FbHcKcLbO\x60Q]RZRWQVPUNVN RZF]F\x60GbJ R^FaHbKbLaO^Q RbM\x60P]QZQWPVN RYQVO\x11\x14_@_R\x60R R\x60\
=\x60R R\x60=UMdM R_@VM RVLdLdM4\x14W=VF RX>WE RW=a=a> RX>a> RWEZD]D\x60EbGcJcLbO\x60Q]RZRWQVPUNVN RVFWFYE]E\x60FbI R^EaG\
bJbLaO^Q RbM\x60P]QZQWPVN RYQVO=\x14\x60>a@b@a>^=\x5c=Y>WAVFVKWOYQ\x5cR]R\x60QbOcLcKbH\x60F]E\x5cEYFWH Ra?^>\x5c>Y? RZ>XA\
WFWKXO[Q RWMYP\x5cQ]Q\x60PbM R^QaObLbKaH^F RbJ\x60G]F\x5cFYGWJ R[FXHWK\x0b\x14U=c=YR RU=U>b> Rb=XRYRC\x14Z=W>V@VBWDXEZF^G\
\x60HaIbKbNaP^QZQWPVNVKWIXHZG^F\x60EaDbBb@a>^=Z= RX>W@WBXDZE^F\x60GbIcKcNbPaQ^RZRWQVPUNUKVIXGZF^E\x60DaBa@\x60> Ra?^>Z>W?\
 RVOYQ R_QbO=\x14aG_I\x5cJ[JXIVGUDUCV@X>[=\x5c=_>a@bDbIaN_Q\x5cRZRWQVOWOXQ RaD\x60G]I RaE_H\x5cI[IXHVE RZIWGVDVCW@Z> RVBX\
?[>\x5c>_?aB R]>\x60@aDaI\x60N^Q R_P\x5cQZQWP\x0f\x0bWOVPVQWRXRYQYPXOWO RWPWQXQXPWP\x17\x0bYQXRWRVQVPWOXOYPYSXUVV RWPWQXQ\
XPWP RXRYS RYQXU\x1f\x0bWDVEVFWGXGYFYEXDWD RWEWFXFXEWE RWOVPVQWRXRYQYPXOWO RWPWQXQXPWP'\x0bWDVEVFWGXGYFYEXDWD RWEWFXFXEWE\
 RYQXRWRVQVPWOXOYPYSXUVV RWPWQXQXPWP RXRYS RYQXU\x17\x0bW=WKXK RW=X=XK RWOVPVQWRXRYQYPXOWO RWPWQXQXPWP9\x13UBUAV?W>Z=]=\x60\
>a?bAbCaE\x60F^G[H RUBVBVAW?Z>]>\x60?aAaC\x60E^F[G RV@Y> R^>a@ RaD]G R[G[K\x5cK\x5cG R[OZPZQ[R\x5cR]Q]P\x5cO[O R[P[Q\x5cQ\
\x5cP[P\x17\x0bY=W>V@VCWDXDYCYBXAWAVB RWBWCXCXBWB RW>VB RV@WA\x17\x0bY?X@W@V?V>W=X=Y>YAXCVD RW>W?X?X>W> RX@YA RY?XCF\x19h\
DfDdEcGaM\x60O_P]QYQWPVNVLWJXI]F_D\x60B\x60@_>]=\x5c=Z>Y@YBZE\x5cHaNdQfRhR RhDhEfEdF ReEdGbMaO_Q]RYRWQVPUNULVJXH]E^D_B_@^\
> R_?]>\x5c>Z? R[>Z@ZB[E]HbNdPfQhQhR2\x13[9[V\x5cV R[9\x5c9\x5cV R\x60@b@\x60>]=Z=W>U@UBVDWE_I\x60JaLaN\x60P]QZQXPWO R\x60\
@_?]>Z>W?V@VBWD_HaJbLbNaP\x60Q]RZRWQUOWO RaO^Q\x07\x17f9TYUY Rf9g9UY\x17\x0e\x5c9Z;X>VBUGUKVPXTZW\x5cY]Y R\x5c9]9[;Y>WBVG\
VKWPYT[W]Y\x17\x0eU9W;Y>[B\x5cG\x5cK[PYTWWUYVY RU9V9X;Z>\x5cB]G]K\x5cPZTXWVY&\x10Z=Y>[HZI RZ=ZI RZ=[>YHZI RU@V@^F_F RU@_F\
 RU@UA_E_F R_@^@VFUF R_@UF R_@_AUEUF\x07\x19VHgHgI RVHVIgI\x0f\x19^@^Q_Q R^@_@_Q RVHgHgI RVHVIgI\x0f\x19VDgDgE RVDVEgE RV\
LgLgM RVLVMgM\x15\x12W=V>VD RW>VD RW=X>VD R\x60=_>_D R\x60>_D R\x60=a>_D\x00\x10)\x15^=[>Y@WCVFUJUMVPWQYR[R^Q\x60ObLcIdEd\
Bc?b>\x60=^= R^=\x5c>Z@XCWFVJVMWPYR R[R]Q_OaLbIcEcBb?\x60=\x0e\x15^AYR R\x60=ZR R\x60=]@ZBXC R_@[BXC)\x15YAZBYCXBXAY?Z>]=\
\x60=c>d@dBcDaF^HZJWLUNSR R\x60=b>c@cBbD\x60FZJ RTPUOWO\x5cQ_QaPbN RWO\x5cR_RaQbN1\x15YAZBYCXBXAY?Z>]=\x60=c>d@dBcD\x60F]\
G R\x60=b>c@cBbD\x60F R[G]G\x60HaIbKbNaP\x60Q]RYRVQUPTNTMULVMUN R]G_H\x60IaKaN\x60P_Q]R\x09\x15b>\x5cR Rc=]R Rc=TLdL&\x15\
[=VG R[=e= R[>\x60>e= RVGWFZE]E\x60FaGbIbLaO_Q\x5cRYRVQUPTNTMULVMUN R]E_F\x60GaIaL\x60O^Q\x5cR-\x15c@bAcBdAd@c>a=^=[>Y@WC\
VFUJUNVPWQYR\x5cR_QaObMbJaH\x60G^F[FYGWIVK R^=\x5c>Z@XCWFVJVOWQ R\x5cR^Q\x60OaMaI\x60G\x1d\x15X=VC Re=d@bC]I[LZNYR RbC\x5c\
IZLYNXR RW@Z=\x5c=a@ RX?Z>\x5c>a@c@d?e=>\x15]=Z>Y?XAXDYF[G^GbFcEdCd@c>\x60=]= R]=[>Z?YAYDZF[G R^GaFbEcCc@b>\x60= R[GWHUJT\
LTOUQXR\x5cR\x60QaPbNbKaI\x60H^G R[GXHVJULUOVQXR R\x5cR_Q\x60PaNaJ\x60H-\x15cDbF\x60H^I[IYHXGWEWBX@Z>]=\x60=b>c?dAdEcIbL\x60\
O^Q[RXRVQUOUNVMWNVO RYHXFXBY@[>]= Rb>c@cEbIaL_O]Q[R\x05\x0bUPTQURVQUP\x07\x0bURTQUPVQVRUTSV\x0a\x0bXDWEXFYEXD RUPTQURVQ\x0d\
\x0bXDWEXFYEXD RURTQUPVQVRUTSV\x10\x0bZ=Y>WJ RZ>WJ RZ=[>WJ RUPTQURVQUP!\x15YAZBYCXBXAY?Z>]=a=d>e@eBdDcE]G[H[J\x5cK^K Ra=c\
>d@dBcDbE\x60F RZPYQZR[QZP\x07\x0b[=Y?XAXBYCZBYA\x07\x0bZ?Y>Z=[>[?ZAXC6\x1aiEhFiGjFjEiDhDfEdG_O]Q[RXRUQTOTMUKVJXI]G_FaDbB\
b@a>_=]>\x5c@\x5cC]I^L\x60ObQdRfRgPgO RXRVQUOUMVKWJ]G R\x5cC]H^K\x60NbPdQfQgP(\x15^9VV Rc9[V RdAcBdCeBeAd?c>\x60=\x5c=Y>W\
@WBXDYE\x60IbK RWBYD\x60HaIbKbNaP\x60Q]RYRVQUPTNTMULVMUN\x02\x16j9PY\x13\x0fa9]<Z?XBVFUKUOVTWWXY R]<Z@XDWGVLVQWVXY\x13\x0f\
[9\x5c;]>^C^G]L[PYSVVRY R[9\x5c<]A]F\x5cK[NYRVV\x08\x11\x5c=\x5cI RW@aF Ra@WF\x02\x1aVIhI\x05\x1a_@_R RVIhI\x05\x1aVFhF R\
VLhL\x0b\x12Y=WD RZ=WD Rb=\x60D Rc=\x60D#\x14\x5c=UQ R[@aR R\x5c@bR R\x5c=cR RWL\x60L RSRYR R^ReR RUQTR RUQWR RaQ_R RaP\x60\
R RbPdRM\x16W=WR RX>XQ RY=YR RT=\x60=c>d?eAeCdEcF\x60G Rc?dAdCcE R\x60=b>c@cDbF\x60G RYG\x60GcHdIeKeNdPcQ\x60RTR RcIdKdNc\
P R\x60GbHcJcObQ\x60R RU=W> RV=W? RZ=Y? R[=Y> RWQUR RWPVR RYPZR RYQ[R$\x15c@d=dCc@a>_=\x5c=Y>W@VBUEUJVMWOYQ\x5cR_RaQcOdM \
RX@WBVEVJWMXO R\x5c=Z>XAWEWJXNZQ\x5cR=\x16W=WR RX>XQ RY=YR RT=^=a>c@dBeEeJdMcOaQ^RTR Rb@cBdEdJcMbO R^=\x60>bAcEcJbN\x60Q^\
R RU=W> RV=W? RZ=Y? R[=Y> RWQUR RWPVR RYPZR RYQ[RR\x15W=WR RX>XQ RY=YR RT=d=dC RYG_G R_C_K RTRdRdL RU=W> RV=W? RZ=Y? R[=Y\
> R_=d> Ra=d? Rb=d@ Rc=dC R_C^G_K R_E]G_I R_F[G_H RWQUR RWPVR RYPZR RYQ[R R_RdQ RaRdP RbRdO RcRdLE\x14W=WR RX>XQ RY=YR RT\
=d=dC RYG_G R_C_K RTR\x5cR RU=W> RV=W? RZ=Y? R[=Y> R_=d> Ra=d? Rb=d@ Rc=dC R_C^G_K R_E]G_I R_F[G_H RWQUR RWPVR RYPZR RYQ[\
R;\x17c@d=dCc@a>_=\x5c=Y>W@VBUEUJVMWOYQ\x5cR_RaQcQdRdJ RX@WBVEVJWMXO R\x5c=Z>XAWEWJXNZQ\x5cR RcKcP RbJbPaQ R_JgJ R\x60JbK\
 RaJbL ReJdL RfJdKP\x18W=WR RX>XQ RY=YR Rc=cR Rd>dQ Re=eR RT=\x5c= R\x60=h= RYGcG RTR\x5cR R\x60RhR RU=W> RV=W? RZ=Y? R[=\
Y> Ra=c> Rb=c? Rf=e? Rg=e> RWQUR RWPVR RYPZR RYQ[R RcQaR RcPbR RePfR ReQgR&\x0cW=WR RX>XQ RY=YR RT=\x5c= RTR\x5cR RU=W> R\
V=W? RZ=Y? R[=Y> RWQUR RWPVR RYPZR RYQ[R,\x0f[=[NZQYR R\x5c>\x5cN[Q R]=]N\x5cQYRWRUQTOTMULVLWMWNVOUO RUMUNVNVMUM RX=\x60=\
 RY=[> RZ=[? R^=]? R_=]>D\x16W=WR RX>XQ RY=YR Rd>YI R\x5cGcR R]GdR R]EeR RT=\x5c= Ra=g= RTR\x5cR R\x60RgR RU=W> RV=W? RZ=\
Y? R[=Y> Rc=d> Rf=d> RWQUR RWPVR RYPZR RYQ[R RcPaR RcPfR3\x12W=WR RX>XQ RY=YR RT=\x5c= RTRcRcL RU=W> RV=W? RZ=Y? R[=Y> RW\
QUR RWPVR RYPZR RYQ[R R^RcQ R\x60RcP RaRcO RbRcL>\x1aW=WQ RW=^R RX=^O RY=_O Re=^R Re=eR Rf>fQ Rg=gR RT=Y= Re=j= RTRZR RbR\
jR RU=W> Rh=g? Ri=g> RWQUR RWQYR ReQcR RePdR RgPhR RgQiR&\x18W=WQ RW=eR RX=dO RY=eO Re>eR RT=Y= Rb=h= RTRZR RU=W> Rc=e> R\
g=e> RWQUR RWQYR5\x16\x5c=Y>W@VBUFUIVMWOYQ\x5cR^RaQcOdMeIeFdBc@a>^=\x5c= RX@WBVEVJWMXO RbOcMdJdEcBb@ R\x5c=Z>XAWEWJXNZQ\x5c\
R R^R\x60QbNcJcEbA\x60>^=:\x16W=WR RX>XQ RY=YR RT=\x60=c>d?eAeDdFcG\x60HYH Rc?dAdDcF R\x60=b>c@cEbG\x60H RTR\x5cR RU=W> R\
V=W? RZ=Y? R[=Y> RWQUR RWPVR RYPZR RYQ[RL\x16\x5c=Y>W@VBUFUIVMWOYQ\x5cR^RaQcOdMeIeFdBc@a>^=\x5c= RX@WBVEVJWMXO RbOcMdJdEc\
Bb@ R\x5c=Z>XAWEWJXNZQ\x5cR R^R\x60QbNcJcEbA\x60>^= RYOZM\x5cL]L_M\x60OaUbWdWeUeS RaSbUcVdV R\x60ObTcUdUeTO\x16W=WR RX>XQ\
 RY=YR RT=\x60=c>d?eAeCdEcF\x60GYG Rc?dAdCcE R\x60=b>c@cDbF\x60G R]G_H\x60JbPcReRfPfN RbNcPdQeQ R_H\x60IcOdPePfO RTR\x5cR\
 RU=W> RV=W? RZ=Y? R[=Y> RWQUR RWPVR RYPZR RYQ[R+\x14b@c=cCb@\x60>]=Z=W>U@UCVEYG_IaJbLbOaQ RVCWEYF_HaIbK RW>V@VBWDYE_GbIc\
KcNbPaQ^R[RXQVOULURVO8\x14T=TC R[=[R R\x5c>\x5cQ R]=]R Rd=dC RT=d= RXR\x60R RU=TC RV=T@ RW=T? RY=T> R_=d> Ra=d? Rb=d@ Rc=\
dC R[QYR R[PZR R]P^R R]Q_R,\x18W=WLXOZQ]R_RbQdOeLe> RX>XMYO RY=YMZP[Q]R RT=\x5c= Rb=h= RU=W> RV=W? RZ=Y? R[=Y> Rc=e> Rg=e\
>!\x14U=\x5cR RV=\x5cO\x5cR RW=]O Rc>\x5cR RS=Z= R_=e= RT=V? RX=W? RY=W> Ra=c> Rd=c>6\x18V=ZR RW=ZMZR RX=[M R^=[MZR R^=bR\
 R_=bMbR R\x60=cM Rf>cMbR RS=[= R^=\x60= Rc=i= RT=W> RU=W? RY=X? RZ=X> Rd=f> Rh=f>5\x14U=aR RV=bR RW=cR Rb>VQ RS=Z= R_=e=\
 RSRYR R^ReR RT=W? RX=W? RY=W> R\x60=b> Rd=b> RVQTR RVQXR RaQ_R RaP\x60R RaPdR/\x16U=\x5cH\x5cR RV=]H]Q RW=^H^R Rd>^H RS=\
Z= Ra=g= RYRaR RT=V> RY=W> Rb=d> Rf=d> R\x5cQZR R\x5cP[R R^P_R R^Q\x60R(\x14c=U=UC Ra=UR Rb=VR Rc=WR RURcRcL RV=UC RW=U@ \
RX=U? RZ=U> R^RcQ R\x60RcP RaRcO RbRcL%\x14_=SQ R]A^R R^?_Q R_=_?\x60P\x60R RVL^L RPRVR R[RbR RSQQR RSQUR R^Q\x5cR R^P]R \
R\x60PaRM\x18[=UR R\x5c=VR R]=WR RX=c=f>g@gBfEeFbG Re>f@fBeEdF Rc=d>e@eBdEbG RZGbGdHeJeLdObQ^RRR RcHdJdLcOaQ RbGcIcLbO\x60\
Q^R RY=\x5c> RZ=[? R^=\x5c? R_=\x5c> RVQSR RVPTR RWPXR RVQYR(\x15d?e?f=eCeAd?c>a=^=[>Y@WCVFUJUMVPWQZR]R_QaObM R[?YAXCWFVJ\
VNWP R^=\x5c>ZAYCXFWJWOXQZR>\x17[=UR R\x5c=VR R]=WR RX=a=d>e?fBfFeJcNaP_Q[RRR Rc>d?eBeFdJbN\x60P Ra=c?dBdFcJaN^Q[R RY=\x5c\
> RZ=[? R^=\x5c? R_=\x5c> RVQSR RVPTR RWPXR RVQYRO\x17[=UR R\x5c=VR R]=WR RaC_K RX=g=fC RZG\x60G RRRaRcM RY=\x5c> RZ=[? R\
^=\x5c? R_=\x5c> Rc=f> Rd=f? Re=f@ Rf=fC RaC_G_K R\x60E^G_I R\x60F]G_H RVQSR RVPTR RWPXR RVQYR R\x5cRaQ R^RaP RaPcME\x16[\
=UR R\x5c=VR R]=WR RaC_K RX=g=fC RZG\x60G RRRZR RY=\x5c> RZ=[? R^=\x5c? R_=\x5c> Rc=f> Rd=f? Re=f@ Rf=fC RaC_G_K R\x60E^G\
_I R\x60F]G_H RVQSR RVPTR RWPXR RVQYR@\x16d?e?f=eCeAd?c>a=^=[>Y@WCVFUJUMVPWQZR\x5cR_QaOcK R[?YAXCWFVJVNWP R\x60OaNbK R^=\x5c\
>ZAYCXFWJWOXQZR R\x5cR^Q\x60NaK R^KfK R_KaL R\x60KaN RdKbM ReKbLP\x1a[=UR R\x5c=VR R]=WR Rg=aR Rh=bR Ri=cR RX=\x60= Rd=l=\
 RYGeG RRRZR R^RfR RY=\x5c> RZ=[? R^=\x5c? R_=\x5c> Re=h> Rf=g? Rj=h? Rk=h> RVQSR RVPTR RWPXR RVQYR RbQ_R RbP\x60R RcPdR \
RbQeR&\x0e[=UR R\x5c=VR R]=WR RX=\x60= RRRZR RY=\x5c> RZ=[? R^=\x5c? R_=\x5c> RVQSR RVPTR RWPXR RVQYR.\x13\x60=[NZPXR Ra=\
]J\x5cM[O Rb=^J\x5cOZQXRVRTQSOSMTLULVMVNUOTO RTMTNUNUMTM R]=e= R^=a> R_=\x60? Rc=a? Rd=a>G\x17[=UR R\x5c=VR R]=WR Rh>YI R\
]FaR R^FbR R_EcQ RX=\x60= Re=k= RRRZR R^ReR RY=\x5c> RZ=[? R^=\x5c? R_=\x5c> Rf=h> Rj=h> RVQSR RVPTR RWPXR RVQYR RaQ_R Ra\
P\x60R RbPdR0\x14[=UR R\x5c=VR R]=WR RX=\x60= RRRaRcL RY=\x5c> RZ=[? R^=\x5c? R_=\x5c> RVQSR RVPTR RWPXR RVQYR R\x5cRaQ R\
^RbO R\x60RcLC\x1c[=UQ R[>\x5cP\x5cR R\x5c=]P R]=^O Ri=^O\x5cR Ri=cR Rj=dR Rk=eR RX=]= Ri=n= RRRXR R\x60RhR RY=[> RZ=[? R\
l=j? Rm=j> RUQSR RUQWR RdQaR RdPbR RePfR RdQgR*\x19[=UQ R[=bR R\x5c=bO R]=cO Rh>cObR RX=]= Re=k= RRRXR RY=\x5c> RZ=\x5c? \
Rf=h> Rj=h> RUQSR RUQWR7\x16^=[>Y@WCVFUJUMVPWQYR\x5cR_QaOcLdIeEeBd?c>a=^= RZ@XCWFVJVNWP R\x60ObLcIdEdAc? R^=\x5c>ZAYCXFWJ\
WOXQYR R\x5cR^Q\x60NaLbIcEc@b>a=;\x17[=UR R\x5c=VR R]=WR RX=d=g>h@hBgEeGaHYH Rf>g@gBfEdG Rd=e>f@fBeEcGaH RRRZR RY=\x5c> R\
Z=[? R^=\x5c? R_=\x5c> RVQSR RVPTR RWPXR RVQYRM\x16^=[>Y@WCVFUJUMVPWQYR\x5cR_QaOcLdIeEeBd?c>a=^= RZ@XCWFVJVNWP R\x60ObLcI\
dEdAc? R^=\x5c>ZAYCXFWJWOXQYR R\x5cR^Q\x60NaLbIcEc@b>a= RWOXMZL[L]M^O_T\x60UaUbT R_U\x60VaV R^O^V_WaWbTbSM\x18[=UR R\x5c=\
VR R]=WR RX=c=f>g@gBfEeFbGZG Re>f@fBeEdF Rc=d>e@eBdEbG R^G\x60HaIcOdPePfO RcPdQeQ RaIbQcReRfOfN RRRZR RY=\x5c> RZ=[? R^=\x5c\
? R_=\x5c> RVQSR RVPTR RWPXR RVQYR+\x17e?f?g=fCfAe?d>a=]=Z>X@XCYE[GaJbLbOaQ RYCZEaIbK RZ>Y@YBZD\x60GbIcKcNbPaQ^RZRWQVPUNU\
LTRUPVP5\x16_=YR R\x60=ZR Ra=[R RX=VC Rh=gC RX=h= RVR^R RY=VC R[=W@ R]=X> Rd=g> Re=g? Rf=g@ Rg=gC RZQWR RZPXR R[P\x5cR RZ\
Q]R/\x19Z=WHVLVOWQZR^RaQcOdLh> R[=XHWLWPXQ R\x5c=YHXLXPZR RW=_= Re=k= RX=[> RY=Z? R]=[? R^=[> Rf=h> Rj=h>"\x14X=X?YPYR RY\
>ZO RZ=[N Re>YR RV=]= Rb=h= RW=X? R[=Z? R\x5c=Y> Rc=e> Rg=e>8\x1aZ=Z?XPXR R[>YO R\x5c=ZN Rb=ZNXR Rb=b?\x60P\x60R Rc>aO Rd\
=bN Rj>bN\x60R RW=_= Rb=d= Rg=m= RX=[> RY=Z? R]=[@ R^=[> Rh=j> Rl=j>5\x16Y=_R RZ=\x60R R[=aR Rf>TQ RW=^= Rc=i= RQRWR R\x5c\
RcR RX=Z? R\x5c=[? R]=[> Rd=f> Rh=f> RTQRR RTQVR R_Q]R R_P^R R\x60PbR2\x16X=\x5cGYR RY=]GZR RZ=^G[R Rg>^G RV=]= Rd=j= RVR\
^R RW=Y> R[=Z? R\x5c=Y> Re=g> Ri=g> RZQWR RZPXR R[P\x5cR RZQ]R"\x16e=SR Rf=TR Rg=UR Rg=Y=WC RSRaRcL RZ=WC R[=X@ R]=Y> R]R\
aQ R_RbO R\x60RcL5\x14WGWFXFXHVHVFWEYD]D_E\x60FaHaObQcR R_F\x60H\x60OaQ R]D^E_G_O\x60QcRdR R_I^JYKVLUNUOVQYR\x5cR^Q_O RWL\
VNVOWQ R^JZKXLWNWOXQYR.\x15W=WRXQZQ RX>XP RT=Y=YQ RYGZE\x5cD^DaEcGdJdLcOaQ^R\x5cRZQYO RbGcIcMbO R^D\x60EaFbIbMaP\x60Q^R R\
U=W> RV=W?!\x13aHaG\x60G\x60IbIbG\x60E^D[DXEVGUJULVOXQ[R]R\x60QbO RWGVIVMWO R[DYEXFWIWMXPYQ[R3\x15\x60=\x60ReR Ra>aQ R]=b\
=bR R\x60G_E]D[DXEVGUJULVOXQ[R]R_Q\x60O RWGVIVMWO R[DYEXFWIWMXPYQ[R R^=\x60> R_=\x60? RbPcR RbQdR(\x13WJbJbHaF\x60E]D[DXE\
VGUJULVOXQ[R]R\x60QbO RaIaH\x60F RWGVIVMWO R\x60J\x60G_E]D R[DYEXFWIWMXPYQ[R'\x0e^?^>]>]@_@_>^=[=Y>X?WBWR RY?XBXQ R[=Z>Y@\
YR RTD]D RTR\x5cR RWQUR RWPVR RYPZR RYQ[RX\x13aEbFcEbDaD_E^F RZDXEWFVHVJWLXMZN\x5cN^M_L\x60J\x60H_F^E\x5cDZD RXFWHWJXL R^\
L_J_H^F RZDYEXGXKYMZN R\x5cN]M^K^G]E\x5cD RWLVMUOUPVRWSZT^TaUbV RWRZS^SaT RUPVQYR^RaSbUbVaX^YXYUXTVTUUSXR RXYVXUVUUVSXR@\x17\
W=WR RX>XQ RT=Y=YR RYHZF[E]D\x60DbEcFdIdR RbFcIcQ R\x60DaEbHbR RTR\x5cR R_RgR RU=W> RV=W? RWQUR RWPVR RYPZR RYQ[R RbQ\x60\
R RbPaR RdPeR RdQfR*\x0cW=W?Y?Y=W= RX=X? RW>Y> RWDWR RXEXQ RTDYDYR RTR\x5cR RUDWE RVDWF RWQUR RWPVR RYPZR RYQ[R(\x0dY=Y?[\
?[=Y= RZ=Z? RY>[> RYDYUXXWY RZEZTYW RVD[D[TZWYXWYTYSXSVUVUXTXTW RWDYE RXDYF<\x16W=WR RX>XQ RT=Y=YR RbEYN R]JdR R]KcR R\x5c\
KbR R_DfD RTR\x5cR R_RfR RU=W> RV=W? R\x60DbE ReDbE RWQUR RWPVR RYPZR RYQ[R RbP\x60R RaPeR\x1e\x0cW=WR RX>XQ RT=Y=YR RTR\x5c\
R RU=W> RV=W? RWQUR RWPVR RYPZR RYQ[Rb"WDWR RXEXQ RTDYDYR RYHZF[E]D\x60DbEcFdIdR RbFcIcQ R\x60DaEbHbR RdHeFfEhDkDmEnFoIoR\
 RmFnInQ RkDlEmHmR RTR\x5cR R_RgR RjRrR RUDWE RVDWF RWQUR RWPVR RYPZR RYQ[R RbQ\x60R RbPaR RdPeR RdQfR RmQkR RmPlR RoPpR \
RoQqR@\x17WDWR RXEXQ RTDYDYR RYHZF[E]D\x60DbEcFdIdR RbFcIcQ R\x60DaEbHbR RTR\x5cR R_RgR RUDWE RVDWF RWQUR RWPVR RYPZR RYQ\
[R RbQ\x60R RbPaR RdPeR RdQfR-\x14[DXEVGUJULVOXQ[R]R\x60QbOcLcJbG\x60E]D[D RWGVIVMWO RaObMbIaG R[DYEXFWIWMXPYQ[R R]R_Q\x60\
PaMaI\x60F_E]D;\x15WDWY RXEXX RTDYDYY RYGZE\x5cD^DaEcGdJdLcOaQ^R\x5cRZQYO RbGcIcMbO R^D\x60EaFbIbMaP\x60Q^R RTY\x5cY RUDW\
E RVDWF RWXUY RWWVY RYWZY RYX[Y6\x14\x60E\x60Y RaFaX R_EaEbDbY R\x60G_E]D[DXEVGUJULVOXQ[R]R_Q\x60O RWGVIVMWO R[DYEXFWIWMX\
PYQ[R R]YeY R\x60X^Y R\x60W_Y RbWcY RbXdY*\x11WDWR RXEXQ RTDYDYR R\x60F\x60E_E_GaGaE\x60D^D\x5cEZGYJ RTR\x5cR RUDWE RVDWF\
 RWQUR RWPVR RYPZR RYQ[R*\x11_F\x60D\x60H_F^E\x5cDXDVEUFUHVJXK]L_M\x60P RVEUH RVIXJ]K_L R\x60M_Q RUFVHXI]J_K\x60M\x60P_Q]\
RYRWQVPUNURVP\x15\x0fW?WMXPYQ[R]R_Q\x60O RX?XNYP RW?Y=YNZQ[R RTD]D*\x17WDWMXPYQ[R^R\x60QaPbN RXEXNYP RTDYDYNZQ[R RbDbRgR \
RcEcQ R_DdDdR RUDWE RVDWF RdPeR RdQfR\x1e\x12UD[R RVD[P RWD\x5cP RaE\x5cP[R RSDZD R]DcD RTDWF RYDWE R_DaE RbDaE,\x18VDZR \
RWDZO RXD[O R^D[OZR R^DbR R_DbO R^D\x60DcO RfEcObR RSD[D RcDiD RTDWE RZDXE RdDfE RhDfE/\x14VD\x60R RWDaR RXDbR RaEWQ RTD[\
D R^DdD RTRZR R]RdR RUDWE RZDXE R_DaE RcDaE RWQUR RWQYR R\x60Q^R RaQcR'\x13VD\x5cR RWD\x5cP RXD]P RbE]PZVXXVYTYSXSVUVUXTX\
TW RTD[D R^DdD RUDXF RZDXE R\x60DbE RcDbE(\x12_DUR R\x60DVR RaDWR RaDUDUH RURaRaN RVDUH RWDUG RXDUF RZDUE R\x5cRaQ R^RaP \
R_RaO R\x60RaN1\x16bD\x60K\x60OaQbRdRfPgN RcDaKaQ RbDdDbKaO R\x60K\x60H_E]D[DXEVHUKUMVPWQYR[R]Q^P_N\x60K RYEWHVKVNWP R[DY\
FXHWKWNXQYR3\x13Y=WDVJVNWPXQZR\x5cR_QaNbKbIaF\x60E^D\x5cDZEYFXHWK RZ=XDWHWNXQ R_P\x60NaKaH\x60F RV=[=YDWK R\x5cR^P_N\x60K\
\x60H_E^D RW=Z> RX=Y?!\x12\x60H\x60G_G_IaIaG\x60E^D[DXEVHUKUMVPWQYR[R^Q\x60N RXFWHVKVNWP R[DYFXHWKWNXQYR9\x16d=aH\x60L\x60\
OaQbRdRfPgN Re=bHaLaQ Ra=f=bKaO R\x60K\x60H_E]D[DXEVHUKUMVPWQYR[R]Q^P_N\x60K RXFWHVKVNWP R[DYFXHWKWNXQYR Rb=e> Rc=d? \x12\
VMZL]K\x60IaG\x60E^D[DXEVHUKUMVPWQYR[R^Q\x60O RXFWHVKVNWP R[DYFXHWKWNXQYR,\x10b?b>a>a@c@c>b=\x60=^>\x5c@[BZEYIWRVUUWSY R\x5c\
A[DZIXRWU R\x60=^?]A\x5cD[IYQXTWVUXSYQYPXPVRVRXQXQW RVDaD8\x15bD^R]U[XYY RcD_R]V RbDdD\x60R^V\x5cXYYVYTXSWSUUUUWTWTV R\x60\
K\x60H_E]D[DXEVHUKUMVPWQYR[R]Q^P_N\x60K RXFWHVKVNWP R[DYFXHWKWNXQYR(\x16Z=TRVR R[=UR RW=\x5c=VR RXKZG\x5cE^D\x60DbEcGcJaO\
 RbEbIaMaQ RbG\x60L\x60OaQbRdRfPgN RX=[> RY=Z?"\x0dZ=Z?\x5c?\x5c=Z= R[=[? RZ>\x5c> RSHTFVDXDYEZGZJXO RYEYIXMXQ RYGWLWOXQY\
R[R]P^N,\x0d\x5c=\x5c?^?^=\x5c= R]=]? R\x5c>^> RTHUFWDYDZE[G[JYQXTWVUXSYQYPXPVRVRXQXQW RZEZJXQWTVV RZGYKWRVUUWSY0\x16Z=TR\
VR R[=UR RW=\x5c=VR RdFdEcEcGeGeEdDbD\x60E\x5cIZJ RXJZJ\x5cK]L_P\x60QbQ R\x5cL^P_Q RZJ[K]Q^R\x60RbQdN RX=[> RY=Z?\x19\x0c\
Z=WHVLVOWQXRZR\x5cP]N R[=XHWLWQ RW=\x5c=XKWO RX=[> RY=Z?<#SHTFVDXDYEZGZJXR RYEYJWR RYGXKVRXR RZJ\x5cG^E\x60DbDdEeGeJcR Rd\
EdJbR RdGcKaRcR ReJgGiEkDmDoEpGpJnO RoEoInMnQ RoGmLmOnQoRqRsPtN)\x18SHTFVDXDYEZGZJXR RYEYJWR RYGXKVRXR RZJ\x5cG^E\x60DbDd\
EeGeJcO RdEdIcMcQ RdGbLbOcQdRfRhPiN-\x14[DXEVHUKUMVPWQZR]R\x60QbNcKcIbFaE^D[D RXFWHVKVNWP R\x60PaNbKbHaF R[DYFXHWKWNXQZR \
R]R_P\x60NaKaH\x60E^DA\x16SHTFVDXDYEZGZJYNVY RYEYJXNUY RYGXKTY RZK[H\x5cF]E_DaDcEdFeIeKdNbQ_R]R[QZNZK RcFdHdKcNbP RaDbEcH\
cKbNaP_R RQYYY RUXRY RUWSY RVWWY RUXXY8\x15bD\x5cY RcD]Y RbDdD^Y R\x60K\x60H_E]D[DXEVHUKUMVPWQYR[R]Q^P_N\x60K RXFWHVKVNWP\
 R[DYFXHWKWNXQYR RYYaY R]XZY R]W[Y R^W_Y R]X\x60Y\x1d\x12SHTFVDXDYEZGZKXR RYEYKWR RYGXKVRXR RbFbEaEaGcGcEbD\x60D^E\x5cGZK\
.\x11\x60G\x60F_F_HaHaF\x60E]DZDWEVFVHWJYK\x5cL^M_O RWEVH RWIYJ\x5cK^L R_M^Q RVFWHYI\x5cJ^K_M_O^Q[RXRUQTPTNVNVPUPUO\x16\x0e\
[=XHWLWOXQYR[R]P^N R\x5c=YHXLXQ R[=]=YKXO RUD_D)\x18SHTFVDXDYEZGZJXO RYEYIXMXQ RYGWLWOXQZR\x5cR^Q\x60ObL RdDbLbOcQdRfRhPi\
N ReDcLcQ RdDfDdKcO\x1c\x14SHTFVDXDYEZGZJXO RYEYIXMXQ RYGWLWOXQZR\x5cR^Q\x60ObLcHcDbDbEcG/\x1eSHTFVDXDYEZGZJXO RYEYIXMXQ \
RYGWLWOXQZR\x5cR^Q\x60OaL RcDaLaObQdRfRhQjOlLmHmDlDlEmG RdDbLbQ RcDeDcKbO2\x16UHWEYD[D]E^G^I R[D\x5cE\x5cI[MZOXQVRTRSQSOU\
OUQTQTP R]F]I\x5cM\x5cP ReFeEdEdGfGfEeDcDaE_G^I]M]Q^R R[M[O\x5cQ^R\x60RbQdN0\x16SHTFVDXDYEZGZJXO RYEYIXMXQ RYGWLWOXQZR\x5c\
R^Q\x60ObK RdD\x60R_U]X[Y ReDaR_V RdDfDbR\x60V^X[YXYVXUWUUWUWWVWVV&\x14cDbF\x60HXNVPUR RbFYFWGVI R\x60F\x5cEYEXF R\x60F\x5c\
DYDWFVI RVP_PaObM RXP\x5cQ_Q\x60P RXP\x5cR_RaPbM\x00\x101\x14[=X>VAUFUIVNXQ[R]R\x60QbNcIcFbA\x60>]=[= RX?WAVEVJWNXP R\x60\
PaNbJbEaA\x60? R[=Y>X@WEWJXOYQ[R R]R_Q\x60OaJaE\x60@_>]=\x1b\x14[?[R R\x5c?\x5cQ R]=]R R]=Z@XA RWRaR R[QYR R[PZR R]P^R R]\
Q_R=\x14VAVBWBWAVA RV@W@XAXBWCVCUBUAV?W>Z=^=a>b?cAcCbE_GZIXJVLUOUR Ra?bAbCaE R^=\x60>aAaC\x60E^GZI RUPVOXO]PaPcO RXO]QaQb\
P RXO]RaRbQcOcMK\x14VAVBWBWAVA RV@W@XAXBWCVCUBUAV?W>Z=^=a>b@bCaE^F R\x60>a@aC\x60E R]=_>\x60@\x60C_E]F R[F^F\x60GbIcKcNbP\
aQ^RZRWQVPUNUMVLWLXMXNWOVO RaIbKbNaP R]F_G\x60HaKaN\x60Q^R RVMVNWNWMVM\x1b\x14]@]R R^?^Q R_=_R R_=TLdL RZRbR R]Q[R R]P\x5c\
R R_P\x60R R_QaR6\x14W=UGWEZD]D\x60EbGcJcLbO\x60Q]RZRWQVPUNUMVLWLXMXNWOVO RaGbIbMaO R]D_E\x60FaIaM\x60P_Q]R RVMVNWNWMVM R\
W=a= RW>_> RW?[?_>a=D\x14\x60@\x60AaAa@\x60@ Ra?\x60?_@_A\x60BaBbAb@a>_=\x5c=Y>W@VBUFULVOXQ[R]R\x60QbOcLcKbH\x60F]E[EYFXG\
WI RX@WBVFVLWOXP RaObMbJaH R\x5c=Z>Y?XAWEWLXOYQ[R R]R_Q\x60PaMaJ\x60G_F]E*\x14U=UC Rc=c@bC^H]J\x5cN\x5cR R]I\x5cK[N[R RbC\
]H[KZNZR\x5cR RUAV?X=Z=_@a@b?c= RW?X>Z>\x5c? RUAV@X?Z?_@N\x14Z=W>V@VCWEZF^FaEbCb@a>^=Z= RX>W@WCXE R\x60EaCa@\x60> RZ=Y>X@\
XCYEZF R^F_E\x60C\x60@_>^= RZFWGVHUJUNVPWQZR^RaQbPcNcJbHaG^F RWHVJVNWP RaPbNbJaH RZFXGWJWNXQZR R^R\x60QaNaJ\x60G^FD\x14WN\
WOXOXNWN RaF\x60H_I]J[JXIVGUDUCV@X>[=]=\x60>b@cCcIbMaO_Q\x5cRYRWQVOVNWMXMYNYOXPWP RWGVEVBW@ R\x60?a@bCbIaM\x60O R[JYIXHWE\
WBX?Y>[= R]=_>\x60@aCaJ\x60N_P^Q\x5cR\x0f\x0bWOVPVQWRXRYQYPXOWO RWPWQXQXPWP\x17\x0bYQXRWRVQVPWOXOYPYSXUVV RWPWQXQXPWP RXR\
YS RYQXU\x1f\x0bWDVEVFWGXGYFYEXDWD RWEWFXFXEWE RWOVPVQWRXRYQYPXOWO RWPWQXQXPWP'\x0bWDVEVFWGXGYFYEXDWD RWEWFXFXEWE RYQXRWR\
VQVPWOXOYPYSXUVV RWPWQXQXPWP RXRYS RYQXU!\x0bW=V>V@WH RW=WKXK RW=X=XK RX=Y>Y@XH RWOVPVQWRXRYQYPXOWO RWPWQXQXPWP3\x13VBVAW\
AWCUCUAV?W>Y=]=\x60>a?bAbCaE\x60F\x5cH R\x60?a@aD\x60E R]=_>\x60@\x60D_F^G R[H[K\x5cK\x5cH[H R[OZPZQ[R\x5cR]Q]P\x5cO[O R[\
P[Q\x5cQ\x5cP[P\x17\x0bY=W>V@VCWDXDYCYBXAWAVB RWBWCXCXBWB RW>VB RV@WA\x17\x0bY?X@W@V?V>W=X=Y>YAXCVD RW>W?X?X>W> RX@YA RY?\
XCI\x1ahFhEgEgGiGiEhDgDfEeGcLaO_Q]RYRWQVOVLWJ]F_D\x60B\x60@_>]=[>Z@ZC[F]IaNdQfRhRiPiO RXQWOWLXJYI R_D\x60@ R\x60B_> R[>ZB\
 R[E]HaMdPfQ R[RYQXOXLYJ]F RZ@[D^HbMePgQhQiP7\x14Z9ZV R^9^V RbBbAaAaCcCcAb?a>^=Z=W>U@UCVEYG_IaJbLbOaQ RVCWEYF_HaIbK RW>V@\
VBWDYE_GbIcKcNbPaQ^RZRWQVPUNULWLWNVNVM\x07\x17f9TYUY Rf9g9UY\x1a\x0e\x5c9Z;X>VBUGUKVPXTZW\x5cY RX?WBVFVLWPXS RZ;Y=X@WFWLX\
RYUZW\x1a\x0eV9X;Z>\x5cB]G]K\x5cPZTXWVY RZ?[B\x5cF\x5cL[PZS RX;Y=Z@[F[LZRYUXW&\x10Z=Y>[HZI RZ=ZI RZ=[>YHZI RU@V@^F_F RU@_\
F RU@UA_E_F R_@^@VFUF R_@UF R_@_AUEUF\x07\x19VHgHgI RVHVIgI\x0f\x19^@^Q_Q R^@_@_Q RVHgHgI RVHVIgI\x0f\x19VDgDgE RVDVEgE R\
VLgLgM RVLVMgM\x15\x12W=V>VD RW>VD RW=X>VD R\x60=_>_D R\x60>_D R\x60=a>_D\x00\x109\x15^=[>Y@WCVFUJUMVPWQYR[R^Q\x60ObLcIdE\
dBc?b>\x60=^= R[?YAXCWFVJVNWP R^P\x60NaLbIcEcAb? R^=\x5c>ZAYCXFWJWOXQYR R[R]Q_N\x60LaIbEb@a>\x60=\x13\x15^AYR[R Ra=_AZR R\
a=[R Ra=^@[BYC R^A\x5cBYC3\x15YBYAZAZCXCXAY?Z>]=\x60=c>d@dBcDaFWLUNSR Rb>c@cBbD\x60F]H R\x60=a>b@bBaD_FWL RTPUOWO\x5cPaPb\
O RWO\x5cQaQ RWO\x5cR_RaQbObN?\x15YBYAZAZCXCXAY?Z>]=\x60=c>d@dBcDbE\x60F]G Rb>c@cBbDaE R\x60=a>b@bBaD_F]G R[G]G\x60HaIbKb\
NaP_Q\x5cRYRVQUPTNTLVLVNUNUM R\x60IaKaN\x60P R]G_H\x60J\x60N_P^Q\x5cR\x0e\x15aA\x5cR^R Rd=bA]R Rd=^R Rd=TLdL0\x15[=VG R[=\
e= R[>c> RZ?_?c>e= RVGWFZE]E\x60FaGbIbLaO_Q[RXRVQUPTNTLVLVNUNUM R\x60GaIaL\x60O^Q R]E_F\x60H\x60L_O]Q[R<\x15cAc@b@bBdBd@c\
>a=^=[>Y@WCVFUJUMVPWQYR\x5cR_QaObMbJaH\x60G^F[FYGXHWJ RZ@XCWFVJVNWP R\x60OaMaJ\x60H R^=\x5c>ZAYCXFWJWOXQYR R\x5cR^Q_P\x60\
M\x60I_G^F&\x15X=VC Re=d@bC^H\x5cK[NZR R\x5cJZNYR RbC\x5cIZLYNXRZR RW@Z=\x5c=a@ RY>\x5c>a@ RW@Y?\x5c?a@c@d?e=g\x15]=Z>Y?X\
AXDYF[G^GaFcEdCd@c>a=]= R_=Z> RZ?YAYEZF RYF\x5cG R]GaF RbEcCc@b> Rc>_= R]=[?ZAZE[G R^G\x60FaEbCb?a= R[GWHUJTLTOUQXR\x5cR\x60\
QaPbNbKaI\x60H^G R\x5cGWH RXHVJULUOVQ RUQZR\x60Q R\x60PaNaK\x60I R\x60H]G R[GYHWJVLVOWQXR R\x5cR^Q_P\x60N\x60J_H^G<\x15bE\
aG\x60H^I[IYHXGWEWBX@Z>]=\x60=b>c?dBdEcIbL\x60O^Q[RXRVQUOUMWMWOVOVN RYGXEXBY@ Rb?cAcEbIaL_O R[IZHYFYBZ?[>]= R\x60=a>b@bEa\
I\x60L_N]Q[R\x0f\x0bUOTPTQURVRWQWPVOUO RUPUQVQVPUP\x15\x0bVRURTQTPUOVOWPWRVTUUSV RUPUQVQVPUP RVRVSUU\x1f\x0bXDWEWFXGYGZFZ\
EYDXD RXEXFYFYEXE RUOTPTQURVRWQWPVOUO RUPUQVQVPUP%\x0bXDWEWFXGYGZFZEYDXD RXEXFYFYEXE RVRURTQTPUOVOWPWRVTUUSV RUPUQVQVPUP \
RVRVSUU!\x0b[=Z=Y>WK R[>Z>WK R[>[?WK R[=\x5c>\x5c?WK RUOTPTQURVRWQWPVOUO RUPUQVQVPUP:\x15YBYAZAZCXCXAY?Z>]=a=d>e@eBdDcEaF\
]G[H[J]K^K R_=d> Rc>d@dBcDbE\x60F Ra=b>c@cBbDaE]G\x5cH\x5cJ]K RZOYPYQZR[R\x5cQ\x5cP[OZO RZPZQ[Q[PZP\x15\x0b\x5c=Z>Y?XAXCY\
DZD[C[BZAYA RZ>Y@YA RYBYCZCZBYB\x15\x0b[@Z@Y?Y>Z=[=\x5c>\x5c@[BZCXD RZ>Z?[?[>Z> R[@[AZCG\x1aiFiEhEhGjGjEiDhDfEdG_O]Q[RXRU\
QTOTMUKVJXI]G_FaDbBb@a>_=]>\x5c@\x5cC]I^L_NaQcReRfPfO RYRUQ RVQUOUMVKWJYI R]G^JaPcQ RXRWQVOVMWKXJZI_F R\x5cC]F^I\x60MbPdQ\
eQfP3\x15^9VV Rc9[V RdBdAcAcCeCeAd?c>\x60=\x5c=Y>W@WCXEZG\x60JaLaO\x60Q RXCYE\x60IaK RY>X@XBYD_GaIbKbNaP\x60Q]RYRVQUPTNTL\
VLVNUNUM\x07\x17j9PYQY Rj9k9QY\x1f\x10b9\x60:]<Z?XBVFUJUOVSWVYY R[?YBWFVKVS Rb9_;\x5c>ZAYCXFWJVS RVKWTXWYY\x1f\x10[9]<^?_\
C_H^L\x5cPZSWVTXRY R^?^G]L[PYS R[9\x5c;]>^G R^?]H\x5cL[OZQXTUWRY&\x11\x5c=[>]H\x5cI R\x5c=\x5cI R\x5c=]>[H\x5cI RW@X@\x60\
FaF RW@aF RW@WAaEaF Ra@\x60@XFWF Ra@WF Ra@aAWEWF\x07\x19VHgHgI RVHVIgI\x0f\x19^@^Q_Q R^@_@_Q RVHgHgI RVHVIgI\x0f\x19VDgDg\
E RVDVEgE RVLgLgM RVLVMgM\x15\x14Z=Y>WD RZ>WD RZ=[>WD Rd=c>aD Rd>aD Rd=e>aD=\x18U@VAUBTAU?W>Y>[?\x5c@]C]G\x5cJZLXMUN R[@\x5c\
C\x5cH[J RY>Z?[B[HZKXM RXN[Q RWN[R RUNZSaN Rh?g@h@h?g>e>c?b@aBaQcSgO Rc@bBbPdR Re>d?cBcOeQd\x1aTITJUKWKYJYGXEVBV@X> RXGVC\
 RWKXJXHVEUCUAV?X>[>]?^@_B_J^M\x5cO R]@^B^L R[>\x5c?]B]M\x5cO R_A\x60?b>d>f?g@hBiC Rf@gB Rd>e?fBgCiC RiC_H RfEhGiJiMhPfRc\
S\x60S]RWOVOUP ReFfFhH RcFfGhIiK RaR_RYOXO RgQeRbR_Q[OXNVNUPURVSWRVQN\x18^@\x5c>Z>X?VBUFUJVNXQZR]S\x60ScReQgO RX@WBVEVJWN\
YQ\x5cR RZ>Y?XAWEWIXMYO[Q^RaRdQgO Ra>^@]A\x5cC\x5cD]F\x60HaJaL R]C]DaHaI R]A]B^DaFbHbJaL_M^M\x5cL[J Ra>b?d@f@ Ra?b@c@ R\x60\
?bAdAf@g?N\x1aUDUCVAX?[>_>b?d@fBhEiIiMhPfRcS\x60S]RWOVOUP RX@Z?_?b@dAfChF RaR_RYOXO RUCWAZ@_@bAdBfDhGiJ RgQeRbR_Q[OXNVNUP\
URVSWRVQ R]@ZCYEYG[K[M RZFZG[I[J RZCZE\x5cI\x5cK[MZNXNWMWL^\x18^@\x5c>Z>X?VBUFUJVNXQZR]S\x60ScReQgO RX@WBVEVJWNYQ\x5cR RZ\
>Y?XAWEWIXMYO[Q^RaRdQgO Ra>^@]A\x5cC\x5cD]F\x60HaJaL R]C]DaHaI R]A]B^DaFbHbJaL_M^M\x5cL[J Ra>b?d@f@ Ra?b@c@ R\x60?bAdAf@g\
? RaFeC ReCfDhD RdDeEfE RcEdFfFhD]\x18YFWEVCVAW?Z>]>\x60?dA RW@Y?^?a@ RVCWAY@^@dAfAg@g?f>e> R_@^A]C]E^GbKcNcQbTaU_V R\x60\
HcKdNdQcS R]E_GbIdKeNeQdSbU_V[VXUWTVRVOXLXJWI RXTWSWOXM R[VYUXSXOYLYJXIVIUJUK RaHeD ReDfEhE RdEeFfF RcFdGfGhEb\x1abBa@\x60\
?^>[>X?VBUFUJVMWOYQ[R^SaSdRfQhOiLiIhFfD RX@WBVEVJWMXO RgOhMhIgFfE R[>Y?XAWEWJXNYP[R RdRfPgMgIfGdE Rb>_@]B\x5cD\x5cE]G\x60\
IaKaM R]D]EaIaJ R]B]C^EaGbIbKaM_N^N\x5cM[K RaGfDgB Ri>gB Rf?jA Ri>h?f?g@gBhAjAi@i>[\x19^>\x5c?ZAYCYEZG\x5cI]K]M RZDZE]I]J\
 RZAZC[E]G^I^K]M\x5cNZOXOVNUMTKTIUHVIUJ R^>\x60@b@d? R]?_@ R\x5c?]@_AaAd? R^HeC ReCgFhIhLgOeQbR^S RdDfFgIgMfO RbEcEeGfJfN\
ePdQbR RbR\x60R^Q\x5cQZRYTZV\x5cW^W\x60V R_R]R R^S\x5cRZRR\x19\x5cHZHXGWFVDVBW@X?[>]>\x60?cBeC RX@Z?^?\x60@aA RVBWAY@]@\x60\
AbBeCgChBh@g?e? RVPWQVRUQUOVNXNZO\x5cQ^T\x60V RZP[Q]T^U RXNYOZQ\x5cT]U_VbVdUeTfRfOeMcJbHbG RePeObJbI RdUeSeQdObLaJaHcFeFf\
GfHR\x19\x5cHZHXGWFVDVBW@X?[>]>\x60?cBeC RX@Z?^?\x60@aA RVBWAY@]@\x60AbBeCgChBh@g?e? RVPWQVRUQUOVNXNZO\x5cQ^T\x60V RZP[Q]\
T^U RXNYOZQ\x5cT]U_VbVdUeTfRfOeMcJbHbG RePeObJbI RdUeSeQdObLaJaHcFeFfGfHP\x1ahCgAe?b>_>\x5c?ZAYCYFZI]O]Q[S RZFZG]M]N R[@Z\
BZE[G]K^N^P]R[SYSWR RUNWR RTQXO RUNUPTQVQWRWPXOVOUN R[G[E\x5cC^BaBcCeEfE RbCdE R_BaCbDcF RfE]I RbGfPgQhQ RaHePgR R\x60HdQ\
fSiPH\x17eKdLaL\x60K\x60IaGcDdBd@ RaIaHdDdC RbLaKaJbHdFeDeBd@c?\x60>[>X?W@VBVDWFYIZKZLYN RWCWDZIZJ RW@WBXDZG[I[KZMXOUQ RX\
OZO]Q\x60RcReQ RYPZP^R_R RUQWPXP\x5cR_SaSdReQfO\x7f UIUJVKXKZJZGYEWBW@Y> RYGWC RXKYJYHWEVCVAW?Y>[>]?_A\x60D\x60J_M^O\x5cQ\
YSXRWR R^A_D_J^M]O RZRYQXQ R[>]@^C^J]N\x5cP[QZPYPVS R^?\x60>b>d?fAgDgJfMeOcQaS\x60R_R ReAfDfJeN RbRaQ\x60Q Rb>d@eCeKdOcQb\
PaP^S Re@f?h>j>l?m@nBoC Rl@mB Rj>k?lBmCoC RoClEkFjIjLkPmSpP RlFkHkLlOnR RoCmElGlKmOoQ_\x1cUIUJVKXKZJZGYEWBW@Y> RYGWC RXKY\
JYHWEVCVAW?Y>\x5c>^?\x60AaDaJ\x60M_O]QZSYRWRUS R_A\x60C\x60J_M^O]P R[RYQWQ R\x5c>^@_C_J^N\x5cQZPXPUS R\x60@a?c>e>g?h@iBjC\
 Rg@hB Re>f?gBhCjC RjCgEfFeIeLfPhSkP RgFfHfLgOiR RjChEgGgKhOjQG\x1c^>\x5c?ZAYCYE[I[K RZDZE[G[H RZAZC\x5cG\x5cI[KZLXLWKWJ \
R^>_?eAhCiEjHjKiNhPfRcS\x60S]RWOVOUP R^?_@eBgChD R^>^@_AeCgDiFjH RaR_RYOXO RgQeRbR_Q[OXNVNUPURVSWRVQc\x1bUIUJVKXKZJZGYEWB\
W@Y> RYGWC RXKYJYHWEVCVAW?Y>\x5c>^?_@\x60B\x60M R\x60O\x60T_V]WZWYVYTZS[TZU R^@_B_T^V R\x5c>]?^B^M R^O^T]V\x5cW R\x60Be> \
Re>gAhCiGiJhMfPcS Rd?gChFhG Rc@eBgEhHhKgNfP RdQbN\x60M R^M\x5cNZP RdRbO\x60N]N RcSaP\x60O R^O\x5cOZPW\x1c^>\x5c?ZAYCYE[I[\
K RZDZE[G[H RZAZC\x5cG\x5cI[KZLXLWKWJ R^>_?eAhCiEjHjKiNhP RfRcS\x60S]RWOVOUP R^?_@eBgChD R^>^@_AeCgDiFjH RaR_RYOXO RfRbR_\
Q[OXNVNUPURVSWRVQ RbPdNfNjRkR ReOfOiR RcOdOhSjSlQ_\x1cUIUJVKXKZJZGYEWBW@Y> RYGWC RXKYJYHWEVCVAW?Y>\x5c>^?_@\x60B\x60N_P]R\
[SYSWR R^@_B_N^P R\x5c>]?^B^N]Q[S RUNWR RTQXO RUNUPTQVQWRWPXOVOUN R\x60Aa?c>e>g?h@iBjC Rg@hB Re>f?gBhCjC RjC\x60H RbGfQhS\
kP RcGgPiR RdFhPiQjQR\x1bi@h?i>j?jAiCgCcA\x60@\x5c@XAVC RfBc@\x60?\x5c?Y@ RjAiBgBc?\x60>\x5c>Y?WAVCUFUJVMWOYQ[R^SbSeRgQiO\
jLjIiGgFdFbG\x60J^K\x5cK RYP[Q^RbRfQ RVMXOZP]QbQfPhOiNjL ReGdG\x60K_K RjIhGfGdHbK\x60L^L\x5cK[I[G\x5cE^DP\x19XFVEUCUAV?Y>\
^>a?eBgBhA RV@X?^?a@dB RUCVAX@^@aAeCgChAh?g>f?g@ RaA^D]F]H_L_N R^G^H_J_K R^D^F\x60J\x60L_N^O\x5cO[N[L RVQWRVSURUPVNXN[O_Q\
bReRgQ RXOYO_RaR RUPVOWOYP]R\x60ScSfRhP,\x16U@V@WAWOUP RV?X@XP[R RTAW>Y@YO[Q]Q RUPVPXQZS]QaN R_@\x60@aAaQcSfP R\x60?b@bQd\
R R^Aa>d@cAcPdQeQc\x1cUIUJVKXKZJZGYEWBW@Y> RYGWC RXKYJYHWEVCVAW?Y>\x5c>^?_@\x60B\x60J_M]O R^@_B_L R\x5c>]?^B^M]O R\x60Aa?\
c>e>g?iBjC Rg@hB Re>f?gBhCjC RhCfCeDeFfHiJjL RfGiI ReEfFiHjJjNiPgReSaS^RXOWOVP RbR\x60RZOYO RhQfRcR\x60Q\x5cOYNWNVPVRWSXR\
WQ\x8e!UIUJVKXKZJZGYEWBW@Y> RYGWC RXKYJYHWEVCVAW?Y>\x5c>^?_@\x60B\x60F_I]L[N R^@_B_G^J R\x5c>]?^B^G]K[N R^?\x60>c>e? Rg>d\
?cAcEdHfKgMgOfQ RdEdFgKgL Rg>e?dAdDeFgIhLhNgPeRcS_S]R[PYOWOVP R^R[OZO RaS_R\x5cOZNWNVPVRWSXRWQ Rg>j>l?nBoC Rl@mB Rj>k?lBm\
CoC RmCkCjDjFkHnJoL RkGnI RjEkFnHoJoOnQmRkShSeR RiRhRfQ RnQlRjRhQgPU\x18W@Y@[A\x5cB]E]G R]I]M\x5cPYSWRUS RZRXQWQ R[QZQXPU\
S RY?\x5c@]A^D^M_OaQcR RUAZ>\x5c?^A_D_G R_I_L\x60OaPcQeQ R]M^P\x60RbSgP R_D\x60Ac>e?g> Rb?d@e@ Ra@b@dAg> RWKYG]G R_GcGeE \
RYHcH RWKYI]I R_IcIeEI\x1aUIUJVKXKZJZGYEWBW@Y> RYGWC RXKYJYHWEVCVAW?Y>\x5c>^?_@\x60B\x60G_J^L^M\x60OaO R^@_B_H^K]M\x60P R\
\x5c>]?^B^H]L\x5cN_QbN R\x60Bh> Rf?fReU Rg?gPfS Rh>hNgRfTdVaW]WZVXTWRXQYRXSI\x18ZA[?]>\x60>b?c@dBdEcGbH\x60I R]I[HZF Rb@c\
AcFbG R\x60>a?bAbFaH\x60I RYMZK[J]I\x60IcJeLfNfReTcV\x60W\x5cWZVWRVQ RdLeNeRdT R\x60IcKdMdScUbV\x60W R[VZUXRWQ R^W\x5cV[U\
YRXQUQTRTTUUVU-\x11\x5cEYFWGVHUKUNVQWS]P RVNWQXR RYFWHVKVMWPYR RZF[G]H]Q_SbP R[F^H^P\x60R R\x5cE]F_G\x60G R_H\x60G R_H_P\x60\
QaQ1\x11T@UAVC R\x5c>Y?WAVCVPUQ RXAWCWPZR R\x5c>Z?Y@XCXPZQ[R RUQVQXRYS\x5cR RXH^E_G\x60J\x60M_P^Q\x5cR R]F^G_I R\x5cF^H_K\
_M^P\x5cR\x1a\x0dYF[H]G[EYFVHUJUOVQXS\x5cQ RZF\x5cG RWHVJVOWQXR RXGWIWNXPZR.\x11Y>VAVCWD[F^H_J_M^P\x5cR RWBWC[E^G_H RW@WA\
XB]E_G\x60J\x60M_P\x5cRYS RZFVHVPUQ RWHWPZR RXGXPZQ[R RUQVQXRYS\x1a\x0dWM]IZEVHUJUOVQXS\x5cQ R\x5cIYF RWHVJVOWQXR R[JYGXG\
WIWNXPZR0\x0d^>]?[?Y>W>V@VEUGTH R\x5c@Z@X?W? R^>]@\x5cAZAX@W@VA RVCWEXFZG\x5cG\x5cH RTHVH RXH\x5cH RVHVLWX RYGVGWFWS RXHX\
LWX4\x11\x5cEYFWGVHUKUNVQWS]P RVOWQXR RYFWHVKVMWPYR RZF[G]H]P^S^U]W R[F^H^R R\x5cE]F_G\x60G R_H\x60G R_H_T^V]W[XXXVWUVUUV\
UVV1\x11T@UAVC R\x5c>Y?WAVCVPUQ RXAWCWQXR R\x5c>Z?Y@XCXPYQZQ RUQWRXS[P RXH^E_G\x60K\x60O_R^T\x5cVYX R]F^G_J R\x5cF^I_L_O^\
S\x5cV&\x0aW>V?V@WAX@X?W> RV?X@ RV@X? RTGUGVHVQXS[P RUFWGWPYR RSHVEWFYG RXHYG RXHXPYQZQ,\x0aW>V?V@WAX@X?W> RV?X@ RV@X? RT\
GUGVHVSUVTWRX RUFWGWSVU RSHVEWFYG RXHYG RXHXSWUUWRX RXSYUZV>\x0eU@VAWC R\x5c>Z?XAWCWEVGUH RWHWPVQ RYAXCXE RXGWGXEXPZR R\x5c\
>Z@YCYG RYHYPZQ[Q RVQXRYS\x5cP RYD]A^B^D\x5cFZG R\x5cB]C]D\x5cF RYG^G^H RUHWH RYH^H\x1c\x0aT@UAVC R\x5c>Y?WAVCVPUQ RXAWCW\
QYR R\x5c>Z?Y@XCXPYQZQ RUQWRXS[PI\x1aTGUGVHVPUQWS RUFWHWPVQWRXQWP RSHVEXGXPYQWS R[F]G^I^P]Q_S R]F^G_I_P^Q_R\x60Q_P RXH[F]\
E_F\x60H\x60PaQ_S RcFdGfHfQhSkP RdFgHgPiR R\x60HcFeEfFhGiG RhHiG RhHhPiQjQ0\x12TGUGVHVPUQWS RUFWHWPVQWRXQWP RSHVEXGXPYQWS\
 R[F\x5cG^H^Q\x60ScP R\x5cF_H_PaR RXH[F]E^F\x60GaG R\x60HaG R\x60H\x60PaQbQ(\x11VHVPUQ RWHWPZR RYGXHXPZQ[R RUQVQXRYS\x5cR\
 RVHYG^E_G\x60J\x60M_P^Q\x5cR R]F^G_I R\x5cF^H_K_M^P\x5cR8\x11WBUDUFVIVPTR RVQWX RVEVFWIWS RVCVDWFXIXPYP[Q\x5cR RXQWX R[R\
YQ R\x5cRZSXQ RVQTR RXH^E_G\x60J\x60M_P^Q\x5cR R]F^G_I R\x5cF^H_K_M^P\x5cR*\x11\x5cEYFWGVHUKUNVQWS]P RVOWQXR RYFWHVKVMWPY\
R RZF[G]H]P^X R[F^H^S R\x5cE]F_G\x60G R_H\x60G R_H_P^X\x1f\x0eUGVGWHWPVQ RVFXHXQZR RTHWEYGYPZQ[Q RVQXRYS\x5cP R[F\x5cH^G]\
EYG R\x5cF]G)\x0b^>]?[?Y>W>V@VEUGTH R\x5c@Z@X?W? R^>]@\x5cAZAX@W@VA RVCXH RVHVLWX RWGVGWFWS RXHXLWX RTHVH$\x0cYAXDWFVGTH \
RYAYG\x5cG\x5cH RTHWH RYH\x5cH RWHWPVQ RXGWGXEXPZR RYHYPZQ[Q RVQXRYS\x5cP.\x12TGUGVHVPUQ RUFWHWPYR RSHVEXGXPZQ[R RUQVQXRY\
S[R^P R_E]G^H^Q\x60ScP R_H\x60G_F^G_H_PaR R_EaG\x60H\x60PaQbQ.\x11WCUEUGVJVPUQ RVFVGWJWPZR RVDVEWGXJXPZQ[R RUQVQXRYS\x5cR\
 RXH^E_G\x60J\x60M_P^Q\x5cR R]F^G_I R\x5cF^H_K_M^P\x5cRG\x19WCUEUGVJVPUQWS RVFVGWJWPVQWRXQWP RVDVEWGXJXPYQWS R[F]G^I^P]Q \
R]F^G_I_PbR RXH[F]E_F\x60H\x60PbQcR R]Q^Q\x60RaSdR R\x60HfEgGhJhLgPfQdR ReFfGgI RdFfHgKgMfPdR+\x0fVGWGXHXPWPUQTSTUUWWXZX]\
W]V\x5cV\x5cW RWFYHYP\x5cR RUHXEZGZP\x5cQ]R R_Q[SZRXQVQTS R\x5cF]H_G^EZG R]F^G.\x11WCUEUGVJVPUQ RVFVGWJWQYR RVDVEWGXJXPYQ\
ZQ RUQWRXS[P RXH^E_G\x60K\x60O_R^T\x5cVYX R]F^G_J R\x5cF^I_L_O^S\x5cV*\x0eUHZE\x5cF]H]J\x5cLXN RZF\x5cG RYF[G\x5cI\x5cJ[L\
ZM RZM\x5cO]Q]U\x5cWZXXXVWUUUSVQXP^N RYN[O\x5cQ RXN[P\x5cR\x5cU[WZX;\x16WAY?[>]>^?eOfPhP R\x5c?]@dPeRfQdP RY?[?\x5c@cPdRe\
SfShP RWEXDZC[C\x5cD R[D[E RXDZD[F RRSTQVPYP[Q RUQYQZR RRSURXRYS[Q R]BWP RYKaKm\x18T@V>Y>[?]> RW?Z? RT@V?X@[@]> RYCXDWFWG\
UGTHTJUIWIWO RXEXM RUHXH RYCYLXNWO R^A]B\x5cD\x5cM R]C]K R^A^J]L\x5cM R^Ad>f?gAgCeEaG Rd?fAfC Rb?d@eAeDcF RcFfHgJgP ReHfJ\
fO RcFdGeIeP RVSYQ\x5cP\x60PcQ RXR[Q\x60QbR RVSZR_RaScQePgP RaGaP RaJeJ RaMeMD\x18[?Y@WBVDUGUKVNWPZR]S\x60ScReQgOhM RWCVF\
VKXO[Q^RaRdQ R[?YAXCWFWJXM[P^QaQdPfOhM R]B]N R^B^L R_A_K^M]N R]B_Ab>d?f?g> Ra?c@e@ R\x60@bAdAf@g> RdAdPG\x17T>b>d?eAeP RV\
?b?dAdO RT>U?W@b@cAcP RZCYDXFXGVGUHUJVIXIXN RYEYL RVHYH RZCZKYMXN RTSWQZP^PaQ RVRYQ^Q\x60R RTSXR]R_SaQcPeP R]@]P R]E_FaFc\
E R]K_JaJcK]\x16T@V>X>Z?\x5c> RW?Y? RT@V?X@Z@\x5c> RYCXDWFWGUGTHTJUIWIWO RXEXM RUHXH RYCYLXNWO R\x5cE]B^@_?a>c>f? R_@a?c?\
e@ R]B^A\x60@b@dAf? R\x5cM]J^H_GaGcH R_HaHbI R]J^I\x60IaJcH RVSYQ]PbPfQ RXR[QbQeR RVSZRaRdSfQ R\x5cE\x5cPZ\x17V@X>[>]?_> \
RY?\x5c? RV@X?Z@]@_> R\x5cC[DZFZGXGWHWJXIZIZN R[E[L RXH[H R\x5cC\x5cK[MZN R_B_Q^R]RYPWPUQSS R\x60B\x60P R\x60HdH R\x5cR[R\
YQVQ RaAaGdG RdIaIaO\x60Q\x5cSZSXRVRSS R_BaAd>f?h?i> Rc?e@g@ Rb@dAfAh@i> RdAdOV\x19[?Y@WBVDUGUJVMWOYQ[R^SbSeRgPhNhKgIfHdG\
bG RWCVFVKWN R[?YAXCWFWKXNYP[R RfPgOgKfI RbSdReQfOfKeIdHbG R]B]O R^B^M R_A_L^N]O R]B_Ab>d?f?g> Ra?c@e@ R\x60@bAdAf@g> Rf@\
bGbS RbKfK RbNfNo\x18T@V>Y>[?]> RW?Z? RT@V?X@[@]> RYCXDWFWGUGTHTJUIWIWO RXEXM RUHXH RYCYLXNWO RVSYQ\x5cP_PaQ RXR[Q^Q\x60R\
 RVSZR]R_SaQ R^A]B\x5cD\x5cM R]C]K R^A^J]L\x5cM R^A\x60?b>d>f? Rc?d?e@ R\x60?b?dAf? RaGcFeDfEgHgLfPdS RdEeFfHfMeP RcFdFeH\
eMdS RaGaQ RaJeJ RaMeMB\x13U@W>Z>]?_> RX?\x5c? RU@W?Z@]@_> R\x5cC[DZFZGXGWHWJXIZIZN R[E[L RXH[H R\x5cC\x5cK[MZN Rb@\x60B_\
E_P^R\x5cRXPVPTQRS R\x60C\x60O R[RZRXQUQ Rb@aBaN\x60P^R\x5cSYSWRTRRS@\x14V@X>[>^?\x60> RY?]? RV@X?[@^@\x60> R]C\x5cD[F[GY\
GXHXJYI[I[N R\x5cE\x5cL RYH\x5cH R]C]K\x5cM[N Rc@aB\x60E\x60P_R RaCaO Rc@bBbNaP_R\x5cSYSVRTPTNUMVMWNVOUO RTNWNr\x18T@V>Y>\
[?]> RW?Z? RT@V?X@[@]> RYCXDWFWGUGTHTJUIWIWO RXEXM RUHXH RYCYLXNWO RVSYQ\x5cP_PaQ RXRZQ^Q\x60R RVSZR]R_SaQ R^A]B\x5cD\x5c\
M R]C]K R^A^J]L\x5cM R^A\x60?b>d>f? Rc?d?e@ R\x60?b?dAf? RaGdDeEgF RcEeFgF RgFeIcKaM RcKeLfPgRhR ReNfR RcKdLeRfSgShR RaGa\
QT\x16T@V>Y>[?]> RW?Z? RT@V?X@[@]> RYCXDWFWGUGTHTJUIWIWO RXEXM RUHXH RYCYLXNWO RVSYQ]PbPfQ RXR[QbQeR RVSZRaRdSfQ R^A]B\x5c\
D\x5cM R]C]K R^A^J]L\x5cM R^A\x60?b>d>f? Rc?d?e@ R\x60?b?dAf? Rb?bPj\x1cZBYCXEXGVGUHUJVIXIXM RYDYK RVHYH RZBZJYLXM RSSUQW\
PYP[Q\x5cQ]P RVQYQ[R RSSURXRZS[S\x5cR]P RZB^>bBbOcQdQ R^?aBaP\x60QaRbQaP R^HaH R\x5c@]@\x60C\x60G]G R]I\x60I\x60P_QaSdQeP\
 RbBf>jBjOkQlQ Rf?iBiPkR RfHiH Rd@e@hChGeG ReIhIhQjSlQ R]@]P Re@ePS\x19TAV?X>Z>\x5c?^BcMePfQ RZ?\x5cA]CcOfR RV?X?Z@\x5cCa\
NcQdRfS Rc@eAgAi@j> Rd?f@h@ Rc@e>g?i?j> RXGVGUHUJVIXI RVHXH RTSVQXP[P]Q RWQZQ\x5cR RTSWRZR[S]Q RX?XP RfAfS R_D\x60EbFdFfE\
 RXLZK^K\x60LN\x1a[>Y?WAVCUFUJVMWOYQ[R^S\x60ScReQgOhMiJiFhCgAe?c>b?_A\x5cB RWBVEVKWN R[>Y@XBWEWKXNYP[R RgNhKhEfAe@ RcRePf\
NgKgEfCd@b? R\x5cB\x5cO R]B]M R^B^L]N\x5cO Rb?bR RbEdFeFgE RbKdJeJgKE\x16U>V?WAWGUGTHTJUIWIWQTSWRWZYX RW@XBXX RUHXH RU>W?\
X@YBYX RYC\x5cA\x60>dBdP R\x60?cBcP R^@_@bCbQ R\x5cP_PbQ R]Q_QaR R\x5cR^R\x60SbQdP R\x5cA\x5cW R\x5cE^F\x60FbE R\x5cK^J\x60\
JbKb\x1a[>Y?WAVCUFUJVMWOYQ[R]SaScReQgOhMiJiFhCgAe?c>b?_A\x5cB RWBVEVKWN R[>Y@XBWEWKXNYP[R RgNhKhEfAe@ RcRePfNgKgEfCd@b? R\
\x5cB\x5cO R]B]M R^B^L]N\x5cO Rb?bR RbEdFeFgE RbKdJeJgK R]S^R_RaSeXgYhY RaTcWeYfY R_R\x60ScYeZgZhYk\x18T@V>Y>[?]> RW?Z? R\
T@V?X@[@]> RYCXDWFWGUGTHTJUIWIWO RXEXM RUHXH RYCYLXNWO RVSYQ\x5cP^PaQ RXRZQ^Q\x60R RVSZR]R_SaQ R^A]B\x5cD\x5cM R]C]K R^A^\
J]L\x5cM R^Aa?c>e?fAfDeFdG\x60I^J Rc?d?eAeEdF Ra?c@dBdEcG\x60I R\x60IbJcKfPgQhQ RcLePgR R\x60IbKdQfShQ]\x17\x60A_@]?Z> Ra\
@_? Rb?^>Z>W?V@UBVDWEZFbFdGeHeJdM RVCWDZEcEeFfGfIeK RV@VBWCZDdDfEgGgIdM\x60S RTGUHWI\x60IaJaK\x60M RUIWJ_J\x60K RTGTHUJWK\
^K\x60L\x60M RTSWQ[P^PaQ RVRYQ]Q\x60R RTSXR]R\x60S Rb?\x60A^D R]F[I RZKXMVNUNUMVNF\x18WBVDUGUKVNXQZR]S\x60ScReQgOhM RVKWN\
YP[Q^RaRdQ RWBVEVIWLYO[P^QaQdPfOhM RUAV?X>\x5c>b?f?h> R]?a@e@ RUAV@X?[?aAdAf@h> R\x60A_B]C]N R^C^L R_B_K^M]N RdAdPX\x18T@\
V>X>[?]> RW?Z? RT@V?Y@[@]> RWBVDUGUKVNWPYR\x5cS_SbRdQfShQ RVKWNZQ]R\x60R RWBVFVIWLXNZP]QaQdP RaA]B\x5cD\x5cN R]C]L R^B^K]\
M\x5cN RaAc@e>f?h@fAfOgQhQ ReAf@e?d@eAePgR Rc@dAdP RaAaQ RaFdF RaJdJG\x17U>V?WAWGUGTHTJUIWIWPUQ RW@XBXP RUHXH RYQ\x5cQ^R \
RU>W?X@YBYP]P\x60Q RUQXQ[R]S\x60QcPeP R]B\x60Ab@d>e?g@eAeP RdAe@d?c@dAdO Rb@cAcP R]B]P R]E_FaFcE R]K_JaJcK^\x1bU>V?WAWGUG\
THTJUIWIWPUQ RW@XBXP RUHXH RYQ[Q]R RU>W?X@YBYP\x5cP^Q RUQXQ[R\x5cS^QaPcQdSfQiP R\x5c@_>a@aPdPfQ R_?\x60@\x60P R\x5c@^@_A_\
P^Q RdQeR Rd@g>i@iP Rg?h@hP Rd@f@gAgPfQ R\x5c@\x5cP Rd@dP R\x5cF_F R\x5cJ_J RdFgF RdJgJ@\x16SAU?W>Y>Z?bQcReR RX?Y@aQbR RU\
?W?X@\x60RaScSeRgP Rb>d?f?g> Rb?c@e@ Ra@bAdAf@g> RSSTQVPXPYQ RUQWQXR RSSTRVRXS Rb>^G R\x5cJXS RWH[H R^HcHU\x17U>V?WAWGUGT\
HTJUIWIWPUQ RW@XBXP RUHXH RYQ\x5cQ^R RU>W?X@YBYP]P\x60Q RUQXQ[R]S\x60QcP R]B\x60Ab@d>e?g@eAeVdXbZ\x60Y\x5cXWX RdAe@d?c@dA\
dQ Rb@cAcPeS RcYaX^X RdXaW[WWX R]B]P R]E_FaFcE R]K_JaJcK8\x14b?aA\x5cGYKWOTS R\x60CXN Rd>aB_F\x5cJWPVR RT@V>Y?_?d> RU?Y@]\
@a? RT@XA\x5cA\x60@b? RVRXQ\x5cP\x60PdQ RWR[Q_QcR RTSYR_RbSdQ RWH[H R^HbH4\x11XJVLUNUPVRXSZQ]P RUNVPWQYR RVLVNWPYQZQ RVHX\
H[G]F^E\x60G_H_P\x60QaQ RWFVGYG R\x5cG_G^F^Q_R RUGWEXFZG]H]Q_SaQ RUGZL+\x12U@VBVPTQ RWBV@W?WPZR RU@X>XPZQ[R RTQVQXRYS[R^Q\
\x60Q RXH[G]F^E_FaGbG\x60H\x60Q R]F_G_P R[G\x5cG^H^Q"\x0eVGVPTQUQWRXS RWGWQYR RXGXPZQ[QYRXS RVGZF\x5cE]F_G\x60G R[F\x5cG^\
G RXGZF\x5cH^H\x60G(\x11[EYFVGVPTQ RWGWPZR R[EXGXPZQ[R RTQVQXRYS[R^Q\x60Q RV@Y>ZA\x60G\x60Q RYAW@X?YA_G_P RV@^H^Q\x1f\x0e\
VGVPTQUQWRXS RWGWQYR RXGXPZQ[QYRXS RVGZF\x5cE_I]JXM R[F^I RXGZF]J(\x0dV@VPTQUQWRXS RW@WQYR RX@XPZQ[QYRXS RV@Y?[>\x5c?^@_@\
 RZ?[@]@ RX@Y?[A]A_@ RSEVE RXE\x5cE7\x12VGVPTQUQWRXSYR[Q^P RWHWQYR RXGXPZQ[Q RVGXG[F]E^F\x60GbG\x60H\x60T_W]Y[ZZYXXVX R\x5c\
F_H_T R\x5cYZXYX R[F\x5cG^H^R_U_W R]Y\x5cXZWXWVX.\x12U@VBVPTQUQWRXS RWBV@W?WQYR RU@X>XPZQXS RXH[G]F^E_FaGbG\x60H\x60Q^S]U\
 R]F_G_Q^S R[G\x5cG^H^Q]U]X^Z_Z]X"\x0aW>U@WAY@W> RW?V@X@W? RWEVFTGVHVQXSZQ RWHXGWFVGWHWQXR RWEXFZGXHXPYQZQ&\x0aW>U@WAY@W>\
 RW?V@X@W? RWEVFTGVHVQXSYU RWHXGWFVGWHWQXS RWEXFZGXHXQYUYXWZUZUYWZ1\x11U@VBVPTQUQWRXS RWBV@W?WQYR RU@X>XPZQXS RXH[F]E_H\x5c\
JXM R\x5cF^H R[F]I R\x5cJ]K_P\x60QaQ R\x5cK]L^Q_R R[K\x5cL]Q_SaQ\x15\x0aU@VBVPTQUQWRXS RWBV@W?WQYR RU@X>XPZQ[QYRXSB\x1aTG\
UGVHVPTQUQWRXS RVFWGWQYR RTGVEXGXPZQXS RXH[G]F^E\x60G\x60PbQ\x60S R]F_G_QaR R[G\x5cG^H^P]Q_R\x60S R\x60HcGeFfEgFiGjGhHhPi\
QjQ ReFgGgQhR RcGdGfHfQhSjQ,\x12TGUGVHVPTQUQWRXS RVFWGWQYR RTGVEXGXPZQXS RXH[G]F^E_FaGbG\x60H\x60PaQbQ R]F_G_Q\x60R R[G\x5c\
G^H^Q\x60SbQ'\x12VGVPTQ RWHWPZR RXGXPZQ[R RTQVQXRYS[R^Q\x60Q RVGXG[F]E^F\x60GbG\x60H\x60Q R\x5cF_H_P R[F\x5cG^H^Q5\x12UEV\
GVPTQVQVZ RVFWGWYXXWV RWQXQZR RUEWFXGXPZQ[R RXRYS[R^Q\x60Q RXRXVYXVZ RXH[G]F^E_FaGbG\x60H\x60Q R]F_G_P R[G\x5cG^H^Q+\x12V\
GVPTQ RWHWQYR RXGXPZQ[Q RTQUQWRXSYR[Q^P RVGXG[F]E^F\x60GbG\x60H\x60Z R\x5cF_H_Y^X_V R[F\x5cG^H^V]X\x60Z%\x0eTGUGVHVPTQUQW\
RXS RUFWGWQYR RTGVEXGXPZQ[QYRXS RXG\x5cE]F_G\x60G R[F\x5cG^G RZF\x5cH^H\x60G:\x10UGUKWL]L_M_Q RVGVK R^M^Q RXFWGWKYL R[L]M\
]Q\x5cR RUGXFZE\x5cF^F_E RYF[F RXFZG\x5cG^F R_Q\x5cRZSXRVRTS R[RYR R\x5cRZQWQTS R_E^G\x5cJWOTS\x1b\x0aU@VBVPTQUQWRXS RWBV\
@W?WQYR RU@X>XPZQ[QYRXS RSEVE RXE[E.\x12TGUGVHVPTQ RUFWGWQYR RTGVEXGXPZQ[Q RTQUQWRXSYR[Q^P R^E_FaGbG\x60H\x60PaQbQ R]F_G_\
Q\x60R R^E\x5cG^H^Q\x60SbQ#\x12UEVGVPYS[Q^P\x60P RVFWGWPZR RUEWFXGXOYP[Q R^E_FaGbG\x60H\x60P R]F_G_O R^E\x5cG^H^P8\x1aUEV\
GVPYS[Q^P RVFWGWPZR RUEWFXGXOYP[Q R^E\x5cG^H^PaScQfPhP R]F_G_PbR R^E_FaG\x60H\x60OaPcQ RfEgFiGjGhHhP ReFgGgO RfEdGfHfP:\x13\
UGVGXHYI]Q^R\x60SbQ RWFYG^Q\x60R RUGWEYFZG^O_PaQbQ R\x5cK_E\x60FbFcE R_F\x60GaG R^G\x60HbGcE R[MXSWRURTS RXRWQVQ RYQWPUQT\
S RWLZL R]L\x60L;\x12TGUGVHVPTQ RUFWGWQYR RTGVEXGXPZQ[Q RTQUQWRXSYR[Q^P R^E_FaGbG\x60H\x60T_W]Y[ZZYXXVX R]F_G_T R\x5cYZXY\
X R^E\x5cG^H^R_U_W R]Y\x5cXZWXWVX%\x12aEUS RUGWHZH]GaE RVFXG\x5cG RUGWEYF]FaE RUSYQ\x5cP_PaQ RZQ^Q\x60R RUSYR]R_SaQ RWL_L\
\x00\x10)\x14V@VPTQ RWAWPZR RX@XPZQ[R RV@X@]?_> R]?^@\x60A\x60Q R^?aAaP R_>\x60?b@d@bAbQ RTQVQXRYS[R\x60QbQ\x1a\x14Y@ZA[C\
[PYQ R[AZ@[?\x5cA\x5cQ^R RY@\x5c>]@]P_Q\x60Q RYQZQ\x5cR]S^R\x60Q/\x14V@X@Z?[>]?\x60@b@ RZ@\x5c? RV@XAZA\x5c@]? R\x60@\x60\
H RaAaG Rb@bH[HXIVKUNUS RUSYQ]P\x60PdQ RXR[Q\x60QcR RUSZR_RbSdQ8\x14V@W@Y?Z>\x5c?\x60@b@ RY@[? RV@XAZA\x5c? R\x60@\x60G R\
aAaF Rb@bG\x60G]H[I R[H]I\x60JbJbQ RaKaP R\x60J\x60Q RUQWPYP[Q\x5cR RYQ[R RUQWQYRZS\x5cR\x60QbQ(\x14_>UHUM^M R\x60MdMeNeL\
dM RVHVL RWFWM R^?^P\x5cQ R_B\x60@_?_QaR R_>a@\x60B\x60PbQcQ R\x5cQ]Q_R\x60SaRcQ4\x14V>VG RV>b> RW?\x60? RV@_@a?b> R\x60D\
_E]FYGVG R]F^F\x60G\x60Q R_EaFaP R\x60DaEcFdFbGbQ RUQWPYP[Q\x5cR RYQ[R RUQWQYRZS\x5cR\x60QbQ:\x14V@VPTQ RWAWPZR RX@XPZQ[R\
 RV@X@\x5c?^>_?a@b@ R]?_@ R\x5c?^A\x60Ab@ RXHYH]G_F\x60E R]G^G\x60H\x60Q R_FaHaP R\x60EaFcGdGbHbQ RTQVQXRYS[R\x60QbQ%\x14\
U@W>Z?_?d> RV?Y@^@a? RU@YA\x5cA\x60@d> Rd>c@aC]G[JZMZP[S R\x5cI[L[O\x5cR R_E]H\x5cK\x5cN]Q[SF\x14VAVG RWBWF RXAXG RVAXA]@\
_?\x60> R]@^@\x60A\x60G R_?a@aF R\x60>a?c@d@bAbG RVGXG\x60JbJ RbG\x60GXJVJ RVJVPTQ RWKWPZR RXJXPZQ[R R\x60J\x60Q RaKaP Rb\
JbQ RTQVQXRYS[R\x60QbQ;\x14V@VITJ RWAWJYK RX@XIZJ[J RV@X@]?_> R]?^@\x60A\x60Q R^?aAaP R_>\x60?b@d@bAbQ RTJUJWKXLYK[J_I\x60\
I RUQWPYP[Q\x5cR RYQ[R RUQWQYRZS\x5cR\x60QbQ\x0a\x0cXPVRXSZRXP RXQWRYRXQ\x0d\x0cXVXTVRXPYRYTXVVW RXQWRXSXQ\x15\x0cXEVGXHZ\
GXE RXFWGYGXF RXPVRXSZRXP RXQWRYRXQ\x18\x0cXEVGXHZGXE RXFWGYGXF RXVXTVRXPYRYTXVVW RXQWRXSXQ\x1d\x0cX>W?U@WAXL RXAY@X?W@XA\
XL RX>Y?[@YAXL RXPVRXSZRXP RXQWRYRXQ2\x12UBV@W?Z>\x5c>_?\x60@aBaD\x60F^H\x5cI RVBW@ R_@\x60A\x60E_F RUBWCWAX?Z> R\x5c>^?_\
A_E^G\x5cI R[I[L\x5cIZI[L R[PYR[S]R[P R[QZR\x5cR[Q\x0d\x0cZ>X?WAWCXEZCXAX? RXBXDYCXB\x0d\x0cXDXBV@X>Y@YBXDVE RX?W@XAX?=\x1a\
fFgGhGiF ReGfHhH ReHfIgIhHiF RfF\x60L R_MYSUN[H R\x5cG\x60C\x5c>WD]JaPcReSgShRiP RYRVN R_C\x5c? RXD]IaOcQeRhR RZRVM R_D[?\
 RXC^IbOcPeQhQiP;\x14Z:ZW R^:^W R^>\x60?aAaCcBb@a?^>Z>W?UAUDVFYH_JaKbMbPaR RbBa@ RVDWFYG_IaJbL RWQVO RW?VAVCWEYF_HbJcLcOb\
QaR^SZSWRVQUOWNWPXRZS\x07\x17f:TZUZ Rf:g:UZ\x1a\x0e\x5c:Z<X?VCUHULVQXUZX\x5cZ RX@WCVGVMWQXT RZ<Y>XAWGWMXSYVZX\x1a\x0eV:X<\
Z?\x5cC]H]L\x5cQZUXXVZ RZ@[C\x5cG\x5cM[QZT RX<Y>ZA[G[MZSYVXX&\x10Z>Y?[IZJ RZ>ZJ RZ>[?YIZJ RUAVA^G_G RUA_G RUAUB_F_G R_A^A\
VGUG R_AUG R_A_BUFUG\x07\x19VIgIgJ RVIVJgJ\x0f\x19^A^R_R R^A_A_R RVIgIgJ RVIVJgJ\x0f\x19VEgEgF RVEVFgF RVMgMgN RVMVNgN\x15\
\x12W>V?VE RW?VE RW>X?VE R\x60>_?_E R\x60?_E R\x60>a?_E3\x1a[@YAWCVEUHUKVMXN RWDVGVKWM R[@YBXDWGWJXNXPWRUS Rc@e@eQcQ Rf@f\
Q Rg?gR RU>X?^@c@g?i> RWHeH RUSXR^QcQgRiS@\x1aY?YR RZ?ZR R]>[?[R]S RUBW@Y?]>b>e?gAgCfE Re@fAfCeE Rb>d?eAeCdD R^M\x5cL[J[H\
\x5cF]E\x60DcDfEhGiIiLhOfQdRaS]SYRWQUO RgGhIhMgO RcDfFgIgMfPdR;\x1ai>h@gBe@c?\x60>^>[?Y@WBVDUGUJVMWOYQ[R^S\x60ScReQgOhQiS\
 Rh@gEgLhQ RgCfB RgFfCeAc? RWCVFVKWN R[?YAXCWFWKXNYP[R RfOgN RcRePfNgK-\x1aX?XR RY?YR R[>Z?ZR[S RUCVAX?[>\x60>c?e@gBhDiGi\
JhMgOeQcR\x60S[SXRVPUN RgChFhKgN Rc?eAfCgFgKfNePcRU\x1ai>h@gBe@c?\x60>^>[?Y@WBVDUGUJVMWOYQ[R^S\x60ScReQgOhQiS Rh@gEgLhQ R\
gCfB RgEeAc? RWCVFVKWN R[?YAXCWFWKXNYP[R RfOgN RcRePfNgK RWHXG[GbIeIgH R]H_IbJdJfI RZG_JbKdKfJgH RgEfDeDdEeFfED\x1aW@WR R\
Z?X@XQ R\x5c>Z?YAYQ[Q RUBW@Y?\x5c>\x60>c?e@fAi> Ri>h@gDgGhKiM RgAfC Rc?eAfDgG RYHZG\x5cGaHdHfG R^HaIcIeH R[GaJcJeIfGfDeCd\
CcDdEeD RUSWR[Q\x60QfRiSY\x1ai>h@gBe@c?\x60>^>[?Y@WBVDUGUJVMWOYQ[R^SaScReQfPgNhQiS Rh@gEgLhQ RgCfB RgFfCeAc? RWCVFVKWN R[\
?YAXCWFWKXNYP[R RePfNfJ RcRdQeNeI RXKYJZKYLXLWK RWHXFZE\x5cE_FbHdI RXGZF\x5cF_GaH RWHYG\x5cGbIfIgH1\x1aW?WRUS RX@XR R[@Y@\
YR RU>W?[@\x60@f?i> RYHZF\x5cD_CcCfDhFiIiLhMfN RgFhHhKgM RcCeDfEgGgKfNfPgRiS RUSYR]RbS\x16\x1a^A^Q R_B_P R\x60A\x60Q RU>Y\
@]AaAe@i> RUSXR\x5cQbQfRiS)\x1aaAcAcPbR\x60S RdAdPcQ Re@eQ RU>Y@]AaAe@i> RVGUIUMVPXR[S\x60ScReQgOiL RVMWPXQ RUKWMXPYR[SE\x1a\
W?WRUS RX@XR R[@Y@YR RU>W?[@\x60@f?i> RYHZF\x5cD_CbCeDfEfGeH\x60J^K]L]M^N_M^L RdDeEeGdH RbCdEdGcH\x60J R\x60JcJfKgMgOfP R\
dKfMfO R\x60JcKeMfPgRhSiS RUSYR]RbS,\x1aW?WR RX@XQ R[@Y@YQ[Q RiCgFfHeKeMfOhP RgGfJfMgO RiChEgIgLhPiS RU>W?[@\x60@f?i> RUS\
WR[Q\x60QfRiSC\x1a^A^Q R_B_P R\x60A\x60Q R[QYOWNVMUJUEVBX@Z?]>a>d?f@hBiEiJhMgNeOcQ RWMVJVEWB RYOXMWJWDXAZ? RgBhEhJgM Rd?f\
AgDgJfMeO RU>Y@]AaAe@i> RUSXR\x5cQbQfRiS/\x1aW@WRUS RY@XAXR R\x5c>Z?YAYR RUBW@Y?\x5c>\x60>c?e@gBhDiGiKhMfN RgChFhJgM Rc?e\
AfCgFgJfNfPgRhSiS RUSYR]RbS5\x1a^>[?Y@WBVDUGUJVMWOYQ[R^S\x60ScReQgOhMiJiGhDgBe@c?\x60>^> RWCVFVKWN R[?YAXCWFWKXNYP[R RgNh\
KhFgC RcRePfNgKgFfCeAc?2\x1aWAWR RZ@XBXQ R^>\x5c?ZAYCYQ[Q RUCWA[?^>a>d?f@hBiEiGhJfLcM_M\x5cLZJYG RgBhDhHgJ Rd?fAgDgHfKcM \
RUSWR[Q\x60QfRiSI\x1a^>[?Y@WBVDUGUJVMWOYQ[R^S\x60ScReQgOhMiJiGhDgBe@c?\x60>^> RWCVFVKWN R[?YAXCWFWKXNYP[R RgNhKhFgC RcReP\
fNgKgFfCeAc? RWKXM[NaOhOiPiRhShRiQ R]O_O RXM[O^P\x60PaOD\x1aWAWRUS RXAXR RY@YR RUCWAY@[?^>b>f?hAiCiFhHgI Rf@gAhChFgH Rb>d\
?fAgCgGfI ReJbK_K]J]H_GbGeHgJiMiOhPgP ReIfJhNhOgL RaGcHeJfLgPhRiS RUSYR]RbS]\x1aa>g?i>h@hBf@d?a>]>Z?WBVEVGWJYL\x5cM_MaLbK\
cIcH Rh?g@hB RWHXJYK\x5cL_LaK RXAWCWFXHZJ]K_KaJcHdGeG RYIZI[H]F_EbEdFfHgJgMfPdR R]E_DbDeEgGhJhMgO RVOWQVR R[H[G\x5cE]D_Cb\
CeDhGiJiLhOfQdRaS]SZRXQVOVQUSWR]SA\x1a^@Z@XAWBVDUGUKVNWPXQZR]S\x60ScReQgOhMiJiFhCfAd@ Rb@aAaCbDcCbB RVKWNYP[Q^RaRdQ RWBVF\
VIWLYO[P^QaQdPfOhLiJ RU>XA RX@Y? RV?W?X>Z?^@d@g?i>2\x1aY@WBVDUGUJVMWOYQ[R^SbSeRgQ RXBWDVGVKWN RXAYBYCXEWHWKXNYP[R Rc@e@eP\
dRbS Rf@fPeQ Rg?gQiS RU>X?^@c@g?i>\x1e\x1aU>_S RV?W@^O_Q RW?X@_O\x60P Ri>_S RdFbK RfDbIaLaN RU>W?\x5c@b@g?i>B\x1aY@WBVDUG\
UJVMWOYQ[R^S\x60ScReQgOhMiJiGhDgBe@ RWDVGVJWMXO RWBXCXDWGWJXNYP[R RfOgMhJhGgD RcRePfNgJgGfDfCgB R^A^S R_B_R R\x60A\x60S R\
U>Y@]AaAe@i>(\x1aU>eQfR RV?X@gR RY@iS Ri>\x60H R^JWR R]KZMYO R^JZLYMXOXQ RU>Y@]AaAe@i> RUSWR[Q\x60QfRiS.\x1ae@eR Rf@fQ Rg\
?gQ RX@VBUEUHVKXMZN]O\x60OcNeM RYM\x5cNbN RUHVJXL[MaMcN RU>Y@]AaAe@i> RUOWQYR]SaSeRiPH\x1aU>V?X@[@\x60>c>f?gAgCfE Re?fAfC\
eE Rc>d?eAeD ReFaG_G]F]D_CaCeD RaCcDdEcFaG RfEhGiJiLhOfQdRaS]SZRXQVOULUJVGWFYE[E]F]H\x5cI[H\x5cG ReEgGhIhMgO ReFfGgIgMfPd\
R)\x11XIULUPXS\x5cQ RVLVPXR RWJWOZR RZKUFVEWFVG RWF[F]E_G_P\x60Q R]F^G^P]Q^R_Q^P R[F]H]P\x5cQ^S\x60Q\x1e\x11W@U>VBVPYS^Q\x60\
P RW@WPYR RW@Y>XBXO[R RXG]E\x60H\x60P R]F_H_P R[F^I^Q\x16\x0cUHUQWSYQ RVHVQWR RWGWPXQYQ RUH[E]G[HYF RZF\x5cG\x1f\x10ZEUHU\
PXSZR]Q_Q RVHVPXR RWGWOZR RXAX>YA_H_Q RXA^H^P RXAUAXB]H]Q\x18\x0dUHUQWSYQ RVHVQWR RWGWPXQYQ RUH[E^IWM RZF]I RYF\x5cJ\x1f\x0c\
VAVPUQWS RWAWPVQWRXQWP RX@XPYQWS RVA\x5c>^@\x5cAZ? R[?]@ RSEVE RXE\x5cE(\x11UHUPXS]Q RVHVPXR RWGWOZR RUHWG\x5cE_H_U^W]X[Y\
YYWXUYWZYY R\x5cF^H^U]W RXYVY RZF]I]V\x5cX[Y)\x12W@U>VBVPUQWS RW@WPVQWRXQWP RW@Y>XBXPYQWS RXG[F]E\x60H\x60Q]U]X^Z_Z]X R]F\
_H_Q^S R[F^I^R]U$\x0aW>U@WBY@W> RW?V@WAX@W? RWEUGVHVPUQWS RWHXGWFVGWHWPVQWRXQWP RWEYGXHXPYQWS$\x0aW>U@WBY@W> RW?V@WAX@W? \
RWEUGVHVQYU RWHXGWFVGWHWQXS RWEYGXHXRYUYXWZUYUZWZ2\x11W@U>VBVPUQWS RW@WPVQWRXQWP RW@Y>XBXPYQWS RXH[F]E_H\x5cJXM R\x5cF^H \
R[F]I R[K\x5cL]Q_SaQ R\x5cK]M^Q_R R\x5cJ]K_P\x60QaQ\x14\x0aW@U>VBVPUQWS RW@WPVQWRXQWP RW@Y>XBXPYQWSA\x1aTGUGVHVPUQWS RVFW\
GWPVQWRXQWP RTGVEXGXPYQWS RXG[F]E\x60G\x60PaQ_S R]F_G_P^Q_R\x60Q_P R[F^H^P]Q_S R\x60GcFeEhGhPiQgS ReFgGgPfQgRhQgP RcFfHfP\
eQgS+\x12TGUGVHVPUQWS RVFWGWPVQWRXQWP RTGVEXGXPYQWS RXG[F]E\x60G\x60PaQ_S R]F_G_P^Q_R\x60Q_P R[F^H^P]Q_S\x1b\x10UHUPXS]Q_\
P RVHVPXR RWGWOZR RUHWG\x5cE_H_P R\x5cF^H^P RZF]I]Q.\x11UEVGVPTQVQVWUZWX RWGWX RUEWFXGXPZQ[R RWQXQZR RXRYS^Q\x60P RXRXWYZ\
WX RXG[F]E\x60H\x60P R]F_H_P R[F^I^Q\x1e\x11UHUPXS]Q RVHVPXR RWGWOZR RUHWG\x5cE_H_W\x60Z^X R\x5cF^H^X RZF]I]W\x5cZ^X\x1e\x0d\
TGUGVHVPUQWS RVFWGWPVQWRXQWP RTGVEXGXPYQWS RXG\x5cE^G\x5cHZF R[F]G(\x10UHUKWM]J_L_P RVHVKWL RWGWKXL R]K^L^P R\x5cK]L]Q RU\
H[E^F\x5cGYF RZF]F R_PYSUQWP[R RWQYR\x1a\x0aW@U>VBVPUQWS RW@WPVQWRXQWP RW@Y>XBXPYQWS RSEVE RXE[E'\x12TGUGVHVQYS^Q RVFWGWQ\
YR RTGVEXGXP[R R_EaG\x60H\x60PaQbQ R_H\x60G_F^G_H_Q\x60R R_E]G^H^Q\x60SbQ#\x12UEVGVPZS\x5cQ\x60O RVFWGWPZR RUEWFXGXO[Q\x5c\
Q R_EaG\x60H\x60O R_H\x60G_F^G_H_O R_E]G^H^P:\x1aUEVGVPZS\x5cQ^P RVFWGWPZR RUEWFXGXO[Q\x5cQ R_E]G^H^PbSdQhO R_H\x60G_F^G_\
H_PbR R_EaG\x60H\x60OcQdQ RgEiGhHhO RgHhGgFfGgHgO RgEeGfHfP&\x12UGWH^R_SaQ RVFXG^Q\x60R RUGWEXF_PaQ RaE_E_GaGaE_G\x5cK RZ\
MWQUSWSWQUQUS RWLZL R\x5cL_L0\x12TGUGVHVQYS^Q RVFWGWQYR RTGVEXGXP[R R_EaG\x60H\x60U_W^X\x5cYZYXXVYXZZY R_H\x60G_F^G_H_V^W\
 RYYWY R_E]G^H^V]X\x5cY*\x0fXFUHUGXFZE]G]KXM RZF\x5cG\x5cK RXF[H[KZL RXM]O]U\x5cW[XYYWYUXSYUZWY R\x5cO\x5cV[W RVYTY RZN[O\
[VZXYY`;

var TTF2PL = new function(){
  let SEEK_SET = 0;
  let SEEK_CUR = 1;
  function fgetc(fp){
    return fp.buf[fp.pos++]
  }
  function ftell(fp){
    return fp.pos;
  }
  function fseek(fp,pos,mode){
    if (mode == SEEK_SET){
      fp.pos = pos;
    }else if (mode == SEEK_POS){
      fp.pos += pos;
    }
  }
  function u16be(fp){
    return (fgetc(fp)<<8) | fgetc(fp);
  }
  function u32be(fp){
    return ((fgetc(fp)<<24)>>>0) | (fgetc(fp)<<16) | (fgetc(fp)<<8) | fgetc(fp);
  }
  function i16be(fp){
    let u = u16be(fp);
    const buffer = new ArrayBuffer(2);
    new Uint16Array(buffer)[0] = u;
    return new Int16Array(buffer)[0];
  }
  function i8xe(fp){
    let u = fgetc(fp);
    const buffer = new ArrayBuffer(1);
    new Uint8Array(buffer)[0] = u;
    return new Int8Array(buffer)[0];
  }
  function f2d14(fp){
    let i = i16be(fp);
    return i/(1<<14);
  }
  function table_lookup(fp,name){
    fseek(fp,0,SEEK_SET);
    let offs = 0;
    if (u32be(fp) == 0x74746366){
      fseek(fp,12,SEEK_SET);
      offs = u32be(fp);
    }
    fseek(fp,offs+4,SEEK_SET);
    let ntbl = u16be(fp);
    for (let i = 0; i < ntbl; i++){
      fseek(fp,offs+12+16*i,SEEK_SET);
      if (name.charCodeAt(0) != fgetc(fp)) continue;
      if (name.charCodeAt(1) != fgetc(fp)) continue;
      if (name.charCodeAt(2) != fgetc(fp)) continue;
      if (name.charCodeAt(3) != fgetc(fp)) continue;
      fseek(fp,offs+20+16*i,SEEK_SET);
      return u32be(fp);
    }
    return 0;
  }
  function cmap_lookup(fp,code){
    let offs = table_lookup(fp, "cmap");
    fseek(fp,offs,SEEK_SET);
    let vers = u16be(fp);
    let ntbl = u16be(fp);
    let fmt=-1;
    let sofs;
    let rank=-1;
    for (let i = 0; i < ntbl; i++){
      fseek(fp,offs+4+i*8,SEEK_SET);
      let platid = u16be(fp);
      let encid = u16be(fp);
      let sofsx = u32be(fp);
      fseek(fp,offs+sofsx,SEEK_SET);
      let fmtx = u16be(fp);
      let rankx =platid*10000+encid*100+fmtx; //heuristic
      if (fmtx == 6) rankx=1;
      if (rankx > rank){
        if ((fmtx == 0 || fmtx == 4 || fmtx == 6 || fmtx == 12)){
          fmt = fmtx;
          sofs = sofsx;
          rank = rankx;
        }
      }
    }
    if (fmt == 0){
      if (code > 255) return 0;
      fseek(fp,offs+sofs+6+code,SEEK_SET);
      return fgetc(fp);
    }else if (fmt == 4){
      fseek(fp,offs+sofs+6,SEEK_SET);
      let nseg = u16be(fp)>>1;
      for (let j = 0; j < nseg; j++){
        fseek(fp,offs+sofs+14+j*2,SEEK_SET);
        let cend = u16be(fp);
        if (code > cend) continue;
        fseek(fp,offs+sofs+16+nseg*2+j*2,SEEK_SET);
        let cstart = u16be(fp);
        if (code < cstart) continue;
        fseek(fp,offs+sofs+16+nseg*4+j*2,SEEK_SET);
        let idelta = i16be(fp);
        let pidoffs = offs+sofs+16+nseg*6+j*2;
        fseek(fp,pidoffs,SEEK_SET);
        let idoffs = u16be(fp);
        let gid;
        if (idoffs == 0){
          gid = code + idelta;
        }else{
          fseek(fp, pidoffs+idoffs+(code-cstart)*2,SEEK_SET);
          gid = u16be(fp);
          if (gid){
            gid += idelta;
          }
        }
        gid &= 0xffff;
        return gid;
      }
    }else if (fmt == 6){
      fseek(fp,offs+sofs+6,SEEK_SET);
      let cstart = u16be(fp);
      let nent = u16be(fp);
      if (code < cstart || code >= cstart+nent) return 0;
      fseek(fp,(code - cstart)*2,SEEK_CUR);
      return u16be(fp);
    }else if (fmt == 12){
      fseek(fp,offs+sofs+12,SEEK_SET);
      let nseg = u32be(fp);
      for (let j = 0; j < nseg; j++){
        fseek(fp,offs+sofs+16+j*12,SEEK_SET);
        let cstart = u32be(fp);
        if (code < cstart) continue;

        let cend = u32be(fp);
        if (code > cend) continue;

        let sid = u32be(fp);
        return code-cstart+sid;
      }
    }
    return 0;
  }

  function loca_lookup(fp, gid){
    let head = table_lookup(fp, "head");
    fseek(fp,head+50,SEEK_SET);
    let fmt = i16be(fp);
    let offs = table_lookup(fp,"loca");
    if (fmt){
      fseek(fp,offs+gid*4,SEEK_SET);
      let i0 = u32be(fp);
      let i1 = u32be(fp);
      if (i0 == i1) return -1;
      return i0;
    }else{
      fseek(fp,offs+gid*2,SEEK_SET);
      let i0 = u16be(fp);
      let i1 = u16be(fp);
      if (i0 == i1) return -1;
      return i0*2;
    }
    return 0;
  }

  function glyf_lookup(fp, gid, trfm, O, cb){
    let loca = loca_lookup(fp,gid);
    if (loca < 0){
      O.n = 0;
      O.x = 0;
      O.y = 0;
      return;
    }
    let offs = table_lookup(fp, "glyf") + loca;
    fseek(fp,offs,SEEK_SET);

    let nctr = i16be(fp);

    if (nctr < 0){
      fseek(fp,offs+10,SEEK_SET);
      let flags;
      let lx = 0;
      let ly = 0;
      do {
        flags = u16be(fp);
        let cid = u16be(fp);
        let a1,a2;
        if (flags & 0x2){
          if ( flags & 0x1) {
            a1 = i16be(fp);
            a2 = i16be(fp);
          } else {
            a1 = i8xe(fp);
            a2 = i8xe(fp);
          }
        }else{
          if ( flags & 0x1) {
            a1 = u16be(fp);
            a2 = u16be(fp);
          } else {
            a1 = fgetc(fp);
            a2 = fgetc(fp);
          }
        }
        let mat = [
          1,0,0,
          0,1,0
        ];
        if ( flags & 0x8 ) {
          mat[0] = mat[3] = f2d14(fp);
        } else if ( flags & 0x40 ) {
          mat[0] = f2d14(fp);
          mat[4] = f2d14(fp);
        } else if ( flags & 0x80 ) {
          mat[0] = f2d14(fp);
          mat[3] = f2d14(fp);
          mat[1] = f2d14(fp);
          mat[4] = f2d14(fp);
        }
        let old = ftell(fp);
        if (flags & 0x2){
          if (flags & 0x0800){
            mat[2] = a1 * mat[0] + a2 * mat[1];
            mat[5] = a1 * mat[3] + a2 * mat[4];
          }else{
            mat[2] = a1;
            mat[5] = a2;
          }
          mat[2] -= lx;
          mat[5] -= ly;
        }else{
          let o = {n:a1};
          glyf_lookup(fp,gid,trfm,o,null);
          let x0 = o.x;
          let y0 = o.y;
          o = {n:a2};
          glyf_lookup(fp,cid,trfm,o,null);
          let x1 = o.x;
          let y1 = o.y;
          mat[2] = x0-x1;
          mat[5] = y0-y1;
        }
        if (trfm){
          let nmat = [
            trfm[0]*mat[0]+trfm[1]*mat[3],
            trfm[0]*mat[1]+trfm[1]*mat[4],
            trfm[0]*mat[2]+trfm[1]*mat[5]+trfm[2],
            trfm[3]*mat[0]+trfm[4]*mat[3],
            trfm[3]*mat[1]+trfm[4]*mat[4],
            trfm[3]*mat[2]+trfm[4]*mat[5]+trfm[5],
          ];
          nmat.forEach((v,i)=>mat[i]=v);
        }
        let o = {};
        if (O.n != undefined && O.n != -1){
          o = {n:O.n};
          glyf_lookup(fp,cid,mat,o,cb);
          if (o.n == O.n){
            O.x = lx;
            O.y = ly;
            return;
          }else{
            O.n -= o.n;
          }
        }else{
          glyf_lookup(fp,cid,mat,o,cb);
        }
        lx += o.x;
        ly += o.y;
        fseek(fp,old,SEEK_SET);
      } while ( flags & 0x20 );
      return;
    }
    fseek(fp,offs+10+2*nctr,SEEK_SET);
    let nins = u16be(fp);

    fseek(fp,offs+10+2*(nctr-1),SEEK_SET);
    let npts = u16be(fp)+1;

    let xlen = 0;
    let xrem = npts;
    let fofs = offs+12+2*nctr+nins;
    fseek(fp,fofs,SEEK_SET);
    while (xrem){
      let flag = fgetc(fp);
      let mul = 1;
      if (flag & 0x08){ //REPEAT_FLAG
        mul += fgetc(fp);
      }
      xrem -= mul;
      if (flag & 0x02){ //X_SHORT_VECTOR
        xlen += mul;
        continue;
      }else{
        if (flag & 0x10){ //X_IS_SAME
          continue;
        }else{
          xlen += 2*mul;
        }
      }
    }
    
    let xofs = ftell(fp);
    let yofs = xofs+xlen;
    let pidx = 0;
    let pend = 0;
    let x = 0;
    let y = 0;
    while (pidx < npts){
      fseek(fp,fofs,SEEK_SET);
      let flag = fgetc(fp);
      let mul = 1;
      let oncurve = flag & 0x01;
      if (flag & 0x08){ //REPEAT_FLAG
        mul += fgetc(fp);
      }
      fofs = ftell(fp);
      for (let i = 0; i < mul; i++){
        let dx,dy;
        fseek(fp,xofs,SEEK_SET);
        if (flag & 0x02){ //X_SHORT_VECTOR
          if (flag & 0x10){ //POSITIVE_X
            dx = fgetc(fp);
          }else{
            dx = -fgetc(fp);
          }
        }else{
          if (flag & 0x10){ //X_IS_SAME
            dx = 0;
          }else{
            dx = i16be(fp);
          }
        }
        xofs = ftell(fp);
        fseek(fp,yofs,SEEK_SET);
        if (flag & 0x04){ //Y_SHORT_VECTOR
          if (flag & 0x20){ //POSITIVE_Y
            dy = fgetc(fp);
          }else{
            dy = -fgetc(fp);
          }
        }else{
          if (flag & 0x20){ //Y_IS_SAME
            dy = 0;
          }else{
            dy = i16be(fp);
          }
        }
        yofs = ftell(fp);
        let isend = 0;
        fseek(fp,offs+10+pend*2,SEEK_SET);
        if (pidx == u16be(fp)){
          isend = 0x80;
          pend++;
        }
        if (trfm){
          let dx1 = dx * trfm[0] + dy * trfm[1];
          let dy1 = dx * trfm[3] + dy * trfm[4];
          if (pidx == 0){
            dx1 += trfm[2];
            dy1 += trfm[5];
          }
          dx = dx1;
          dy = dy1;
        }
        x += dx;
        y += dy;
        if (O.n==pidx){
          O.x = x;
          O.y = y;
          return;
        }
        if (cb) cb(isend|oncurve,dx,dy);
        pidx++;
      }
    }
    O.n = npts;
    O.x = x;
    O.y = y;
  }

  let ds = {
    x:0,
    y:0,
    x0:0,
    y0:0,
    qx:0,
    qy:0,
    qx0:0,
    qy0:0,
    q:0,
    q0:0,
    first:0,
    unit:0,
    reso:0,
    lineto:(x,y)=>0,
    moveto:(x,y)=>0,
  };

  function quadratic_bezier(x0,y0,x1,y1,x2,y2,t){
    let s = 1-t;
    let s2 = s*s;
    let t2 = t*t;
    let xo = s2*x0+2*s*t*x1+t2*x2;
    let yo = s2*y0+2*s*t*y1+t2*y2;
    return [xo,yo];
  }

  function discretizer(flag, dx, dy){
    let dxf = dx *ds.unit;
    let dyf =-dy *ds.unit;
    let x = ds.x + ds.qx + dxf;
    let y = ds.y + ds.qy + dyf;
    if (ds.first){
      if (flag & 0x01){
        ds.moveto(ds.x0 = ds.x = x, ds.y0 = ds.y = y);
        ds.q = ds.q0 = 0;
        ds.qx = ds.qy = 0;
      }else{
        ds.q0 = ds.q = 1;
        ds.qx = dxf;
        ds.qy = dyf;
      }
      ds.first = 0;
    }else if (!(flag & 0x01)){
      if (ds.q){
        let cx = ds.x + ds.qx;
        let cy = ds.y + ds.qy;
        let mx = (cx + x)*0.5;
        let my = (cy + y)*0.5;
        if (ds.q0 == 1){
          ds.x0 = mx;
          ds.y0 = my;
          ds.qx0 = cx;
          ds.qy0 = cy;
          ds.q0 = 2;
          ds.moveto(mx,my);
        }else{
          for (let i = 0; i < ds.reso; i++){
            let t = (i+1)/ds.reso;
            let [xt,yt] = quadratic_bezier(ds.x,ds.y,cx,cy,mx,my,t);
            ds.lineto(xt,yt);
          }
        }
        ds.x = mx;
        ds.y = my;
        ds.qx = x-mx;
        ds.qy = y-my;
      }else{
        ds.qx = dxf;
        ds.qy = dyf;
        ds.q = 1;
      }
    }else if (ds.q){
      let cx = ds.x + ds.qx;
      let cy = ds.y + ds.qy;
      if (ds.q0 == 1){
        ds.qx0 = cx;
        ds.qy0 = cy;
        ds.q0 = 2;
        ds.moveto(ds.x0 = x, ds.y0 = y);
      }else{
        for (let i = 0; i < ds.reso; i++){
          let t = (i+1)/ds.reso;
          let [xt,yt]= quadratic_bezier(ds.x,ds.y,cx,cy,x,y,t);
          ds.lineto(xt,yt);
        }
      }
      ds.q = 0;
      ds.qx = ds.qy = 0;
      ds.x = x;
      ds.y = y;
    }else{
      ds.lineto(ds.x = x, ds.y = y);
    }
    if (flag & 0x80){
      if (ds.q){
        let cx = ds.x + ds.qx;
        let cy = ds.y + ds.qy;
        if (ds.q0){
          let mx = (cx + ds.qx0)*0.5;
          let my = (cy + ds.qy0)*0.5;
          for (let i = 0; i < ds.reso; i++){
            let t = (i+1)/ds.reso;
            let [xt,yt]=quadratic_bezier(ds.x,ds.y,cx,cy,mx,my,t);
            ds.lineto(xt,yt);
          }
          for (let i = 0; i < ds.reso; i++){
            let t = (i+1)/ds.reso;
            let [xt,yt]=quadratic_bezier(mx,my,ds.qx0,ds.qy0,ds.x0,ds.y0,t);
            ds.lineto(xt,yt);
          }
        }else{
          for (let i = 0; i < ds.reso; i++){
            let t = (i+1)/ds.reso;
            let [xt,yt]=quadratic_bezier(ds.x,ds.y,cx,cy,ds.x0,ds.y0,t);
            ds.lineto(xt,yt);
          }
        }
        ds.q = ds.q0 = 0;
        ds.qx = ds.qy = 0;
        ds.x = x;
        ds.y = y;
      }else if (ds.q0){
        for (let i = 0; i < ds.reso; i++){
          let t = (i+1)/ds.reso;
          let [xt,yt]= quadratic_bezier(ds.x,ds.y,ds.qx0,ds.qy0,ds.x0,ds.y0,t);
          ds.lineto(xt,yt);
        }
      }else if (x != ds.x0 || y != ds.y0){
        ds.lineto(ds.x0,ds.y0);
      }
      ds.first = 1;
    }
  }

  function glyph(fp,gid,reso,moveto,lineto){
    let head = table_lookup(fp, "head");
    fseek(fp,head+18,SEEK_SET);
    ds.unit = 1.0/u16be(fp);
    ds.x = 0;
    ds.y = 0;
    ds.q = 0;
    ds.q0 = 0;
    ds.qx = 0;
    ds.qy = 0;
    ds.first = 1;
    ds.reso = reso;
    ds.lineto = lineto?lineto:(x,y)=>console.log(`L ${x} ${y}`);
    ds.moveto = moveto?moveto:(x,y)=>console.log(`M ${x} ${y}`);
    glyf_lookup(fp,gid,null,{},discretizer);
  }

  function hmtx_lookup(fp, gid){
    let advw,lsb;
    let hhea = table_lookup(fp, "hhea");
    fseek(fp,hhea+34,SEEK_SET);
    let nhm = u16be(fp);
    let hmtx = table_lookup(fp, "hmtx");
    if (gid < nhm){
      fseek(fp,hmtx+gid*4,SEEK_SET);
      advw = u16be(fp);
      lsb = i16be(fp);
    }else{
      fseek(fp,hmtx+(nhm-1)*4,SEEK_SET);
      advw = u16be(fp);
      fseek(fp,hmtx+nhm*4+(gid-nhm)*2,SEEK_SET);
      lsb = i16be(fp);
    }
    return [advw,lsb];
  }

  function kern_lookup(fp, aid, bid){
    let key = ((aid<<16)>>>0) | bid;
    let kern = table_lookup(fp, "kern");
    fseek(fp,kern+2,SEEK_SET);
    let ntbl = u16be(fp);

    fseek(fp,kern+4,SEEK_SET);
    for (let i = 0; i < ntbl; i++){
      let ver = u16be(fp);
      let len = u16be(fp);
      let cov = u16be(fp);
      let fmt = (cov>>8) & 0xff;
      if (fmt != 0){
        fseek(fp,len-6,SEEK_CUR);
        continue;
      }
      let npair = u16be(fp);
      let sran = u16be(fp);
      let esel = u16be(fp);
      let rshf = u16be(fp);
      let offs = ftell(fp);
      let probe = sran;
      let base = 0;
      while (probe){
        fseek(fp,offs+base+probe,SEEK_SET);
        let pair = u32be(fp);
        if (key == pair){
          return i16be(fp);
        }else if (key > pair){
          base += probe;
        }
        probe >>= 1;
      }
    }
    return 0;
  }


  function gsub_lookup(fp, tag, gid, num_next, next_gids){
    let gsub = table_lookup(fp, "GSUB");
    if (gsub == 0) return gid;
    fseek(fp,gsub+6,SEEK_SET);
    let featl = u16be(fp);
    let lul = u16be(fp);
    fseek(fp,gsub+featl,SEEK_SET);
    let nfeat = i16be(fp);
    for (let i = 0; i < nfeat; i++){
      fseek(fp,gsub+featl+2+i*6,SEEK_SET);
      if (tag.charCodeAt(0) != fgetc(fp)) continue;
      if (tag.charCodeAt(1) != fgetc(fp)) continue;
      if (tag.charCodeAt(2) != fgetc(fp)) continue;
      if (tag.charCodeAt(3) != fgetc(fp)) continue;
      let offs = u16be(fp);
      fseek(fp,gsub+featl+offs,SEEK_SET);
      let param = i16be(fp);
      let nlui = u16be(fp);
      for (let j = 0; j < nlui; j++){
        fseek(fp,gsub+featl+offs+4+j*2,SEEK_SET);
        let idx = u16be(fp);
        fseek(fp, gsub+lul+2+idx*2, SEEK_SET);
        let lofs = u16be(fp);
        fseek(fp, gsub+lul+lofs, SEEK_SET);
        let typ = u16be(fp);
        if (typ != 1 && typ != 4) continue;

        let flg = u16be(fp);
        let nst = u16be(fp);
        for (let k = 0; k < nst; k++){
          fseek(fp, gsub+lul+lofs+6+k*2, SEEK_SET);
          let sofs = u16be(fp);
          fseek(fp,gsub+lul+lofs+sofs,SEEK_SET);
          let sfmt = u16be(fp);
          let cofs = u16be(fp);
          fseek(fp,gsub+lul+lofs+sofs+cofs,SEEK_SET);
          let cfmt = u16be(fp);
          let cidx = -1;
          if (cfmt == 1){
            let n = u16be(fp);
            for (let l = 0; l < n; l++){
              if (gid == u16be(fp)){
                cidx = l;
                break;
              }
            }
          }else if (cfmt == 2){
            let n = u16be(fp);
            for (let l = 0; l < n; l++){
              let gstart = u16be(fp);
              let gend = u16be(fp);
              let sci = u16be(fp);
              if (gstart <= gid && gid <= gend){
                cidx = gid-gstart+sci;
                break;
              }
            }
          }else{
            continue;
          }
          if (cidx < 0) continue;
          fseek(fp,gsub+lul+lofs+sofs+4,SEEK_SET);
          if (typ == 1){
            if (sfmt == 1){
              let delta = i16be(fp);
              return (gid + delta) & 0xffff;
            }else if (sfmt == 2){
              let nglyf = u16be(fp);
              fseek(fp,cidx*2,SEEK_CUR);
              return u16be(fp);
            }
          }else if (typ == 4){
            if (sfmt == 1){
              let nlset = u16be(fp);
              fseek(fp,gsub+lul+lofs+sofs+6+cidx*2,SEEK_SET);
              let lsofs = u16be(fp);
              fseek(fp,gsub+lul+lofs+sofs+lsofs,SEEK_SET);
              let nlig = u16be(fp);

              for (let n = num_next[0]; n > 0; n--){
                for (let l = 0; l < nlig; l++){
                  fseek(fp,gsub+lul+lofs+sofs+lsofs+2+l*2,SEEK_SET);
                  let lgofs = u16be(fp);
                  fseek(fp,gsub+lul+lofs+sofs+lsofs+lgofs,SEEK_SET);
                  let lid = u16be(fp);
                  let ncom = u16be(fp)-1;
                  if (ncom != n) continue;
                  let ok = 1;
                  for (let m = 0; m < ncom; m++){
                    if (next_gids[m] != u16be(fp)){
                      ok = 0;
                      break;
                    }
                  }
                  if (ok){
                    num_next[0] = n;
                    return lid;
                  }
                }
              
              }
            }
          }
        }
      }
    }
    if (num_next)num_next[0] = 0;
    return gid;
  }

  function class_def_lookup(fp, gid){
    let cdofs = ftell(fp);
    let fmt = u16be(fp);
    if (fmt == 1){
      let gstart = u16be(fp);
      let nglyf = u16be(fp);
      if (gstart <= gid && gid < gstart+nglyf){
        let ci = gid-gstart;
        fseek(fp,cdofs+6+ci*2,SEEK_SET);
        return u16be(fp);
      }
    }else if (fmt == 2){
      let ncran = u16be(fp);
      for (let i = 0; i < ncran; i++){
        let gstart = u16be(fp);
        let gend = u16be(fp);
        let cls = u16be(fp);
        if (gstart <= gid && gid <= gend){
          return cls;
        }
      }
    }
    return 0;
  }


  function gpos_kern_lookup(fp, aid, bid){
    let gsub = table_lookup(fp, "GPOS");
    if (gsub == 0) return 0;
    fseek(fp,gsub+6,SEEK_SET);
    let featl = u16be(fp);
    let lul = u16be(fp);
    fseek(fp,gsub+featl,SEEK_SET);
    let nfeat = i16be(fp);
    for (let i = 0; i < nfeat; i++){
      fseek(fp,gsub+featl+2+i*6,SEEK_SET);
      if ('k'.charCodeAt(0) != fgetc(fp)) continue;
      if ('e'.charCodeAt(0) != fgetc(fp)) continue;
      if ('r'.charCodeAt(0) != fgetc(fp)) continue;
      if ('n'.charCodeAt(0) != fgetc(fp)) continue;
      let offs = u16be(fp);
      fseek(fp,gsub+featl+offs,SEEK_SET);
      let param = i16be(fp);
      let nlui = u16be(fp);
      for (let j = 0; j < nlui; j++){
        fseek(fp,gsub+featl+offs+4+j*2,SEEK_SET);
        let idx = u16be(fp);
        fseek(fp, gsub+lul+2+idx*2, SEEK_SET);
        let lofs = u16be(fp);
        fseek(fp, gsub+lul+lofs, SEEK_SET);
        let typ = u16be(fp);

        if (typ != 2) continue;
        let flg = u16be(fp);
        let nst = u16be(fp);
        for (let k = 0; k < nst; k++){
          fseek(fp, gsub+lul+lofs+6+k*2, SEEK_SET);
          let sofs = u16be(fp);
          fseek(fp,gsub+lul+lofs+sofs,SEEK_SET);
          let sfmt = u16be(fp);
          let cofs = u16be(fp);
          fseek(fp,gsub+lul+lofs+sofs+cofs,SEEK_SET);
          let cfmt = u16be(fp);
          let cidx = -1;
          if (cfmt == 1){
            let n = u16be(fp);
            for (let l = 0; l < n; l++){
              if (aid == u16be(fp)){
                cidx = l;
                break;
              }
            }
          }else if (cfmt == 2){
            let n = u16be(fp);
            for (let l = 0; l < n; l++){
              let gstart = u16be(fp);
              let gend = u16be(fp);
              let sci = u16be(fp);
              if (gstart <= aid && aid <= gend){
                cidx = aid-gstart+sci;
                break;
              }
            }
          }else{
            continue;
          }
          if (cidx < 0) continue;
          fseek(fp,gsub+lul+lofs+sofs+4,SEEK_SET);

          if (typ == 2){
            let vfmt1 = u16be(fp);
            let vfmt2 = u16be(fp);
            if (vfmt1 != 4 || vfmt2 != 0){
              continue;
            }
            let v1sz = ((vfmt1&1)+!!(vfmt1&2)+!!(vfmt1&4)+!!(vfmt1&8)+!!(vfmt1&16)+!!(vfmt1&32)+!!(vfmt1&64)+!!(vfmt1&128))*2;
            let v2sz = ((vfmt2&1)+!!(vfmt2&2)+!!(vfmt2&4)+!!(vfmt2&8)+!!(vfmt2&16)+!!(vfmt2&32)+!!(vfmt2&64)+!!(vfmt2&128))*2;

            if (sfmt == 1){
              let npset = u16be(fp);
              fseek(fp,gsub+lul+lofs+sofs+10+cidx*2,SEEK_SET);
              let psofs = u16be(fp);

              fseek(fp,gsub+lul+lofs+sofs+psofs,SEEK_SET);
              let npval = u16be(fp);
              for (let l = 0; l < npval; l++){
                fseek(fp,gsub+lul+lofs+sofs+psofs+2+(2+v1sz+v2sz)*l,SEEK_SET);
                let gid = u16be(fp);
                if (gid == bid){
                  fseek(fp,gsub+lul+lofs+sofs+psofs+2+(2+v1sz+v2sz)*l+2,SEEK_SET);
                  return i16be(fp);
                }
              }

            }else if (sfmt == 2){
              let cd1ofs = u16be(fp);
              let cd2ofs = u16be(fp);
              let nc1 = u16be(fp);
              let nc2 = u16be(fp);
              
              fseek(fp,gsub+lul+lofs+sofs+cd1ofs,SEEK_SET);
              let cls1 = class_def_lookup(fp,aid);

              fseek(fp,gsub+lul+lofs+sofs+cd2ofs,SEEK_SET);
              let cls2 = class_def_lookup(fp,bid);

              fseek(fp,gsub+lul+lofs+sofs+16 + cls1 * (v1sz+v2sz)*nc2 + cls2*(v1sz+v2sz),SEEK_SET);
              return i16be(fp);
            }
          }
        }
      }
    }
    return 0;
  }

  function advance(fp, aid, bid, kern){
    let head = table_lookup(fp, "head");
    fseek(fp,head+18,SEEK_SET);
    let unit = 1.0/u16be(fp);

    let awa, awb, lsa, lsb;
    if (aid != -1){
      ;[awa,lsa] = hmtx_lookup(fp,aid);
    }
    if (bid != -1){
      ;[awb,lsb] = hmtx_lookup(fp,bid);
    }
    if (aid == -1){
      return 0;
    }
    if (bid == -1){
      return awa*unit;
    } 
    let k = 0;
    if (kern){
      k += kern_lookup(fp,aid,bid);
      if (!k){
        k += gpos_kern_lookup(fp,aid,bid);
      }
    }
    return (awa+k)*unit;
  }

  function lineheight(fp){
    let head = table_lookup(fp, "head");
    fseek(fp,head+18,SEEK_SET);
    let unit = 1.0/u16be(fp);

    let hhea = table_lookup(fp, "hhea");
    fseek(fp,hhea+4,SEEK_SET);
    let asc = i16be(fp);
    let des = i16be(fp);
    let gap = i16be(fp);
    return (asc-des+gap)*unit;
  }
  this.glyph = glyph;
  this.cmap_lookup = cmap_lookup;
  this.gsub_lookup = gsub_lookup;
  this.advance = advance;
  this.lineheight = lineheight;
}

var HF = new function(){
  let SEEK_SET = 0;
  let SEEK_CUR = 1;
  function fgetc(fp){
    return fp.buf.charCodeAt(fp.pos++);
  }
  function ftell(fp){
    return fp.pos;
  }
  function fseek(fp,pos,mode){
    if (mode == SEEK_SET){
      fp.pos = pos;
    }else if (mode == SEEK_POS){
      fp.pos += pos;
    }
  }
  function u16le(fp){
    return fgetc(fp) | (fgetc(fp)<<8);
  }
  function cmap_lookup(fp, cset, code){
    fseek(fp,3,SEEK_SET);
    let ntbl = fgetc(fp);
    let dtbl = 0;
    if (cset){
      fseek(fp,4+(cset-1)*2,SEEK_SET);
      dtbl = u16le(fp)*2;
    }
    fseek(fp,4+(cset)*2,SEEK_SET);
    let ltbl = u16le(fp)*2-dtbl;
    let tbl = 4+ntbl*2+dtbl;
    fseek(fp,4+(ntbl-1)*2,SEEK_SET);
    let glyf = 4+ntbl*2+u16le(fp)*2;
    while (1){
      fseek(fp,tbl,SEEK_SET);
      let idx0 = u16le(fp);
      let idx1 = u16le(fp);
      if (idx0 <= code && code <= idx1){
        fseek(fp,tbl+4+(code-idx0)*2,SEEK_SET);
        let ofs = u16le(fp)*2;
        return glyf+ofs;
      }
      tbl += (idx1-idx0+1)*2 + 4;
      if (tbl >= 4+ntbl*2+dtbl+ltbl){
        break;
      }
    }
    return 0;
  }
  let hf_scale = 0.04;

  function advance(fp, gid){
    if (gid <= 0){
      return 0;
    }
    fseek(fp,gid+1,SEEK_SET);
    return fgetc(fp)*hf_scale;
  }
  function glyph(fp,gid,moveto,lineto){
    if (gid <= 0) return;
    fseek(fp,gid,SEEK_SET);
    let npts = fgetc(fp);
    let w = fgetc(fp);
    let first = 1;
    for (let i = 0; i < npts; i++){
      let x = fgetc(fp);
      let y = fgetc(fp);
      if (x == 32 && y == 82){
        first = 1;
        continue;
      }
      x -= 82;
      y -= 82;
      if (first){
        moveto(x*hf_scale,y*hf_scale);
      }else{
        lineto(x*hf_scale,y*hf_scale);
      }
      first = 0;
    }
  }
  this.cmap_lookup = cmap_lookup;
  this.advance = advance;
  this.glyph = glyph;
}

globalThis.$font = new function(){
  let that = this;

  let FEAT_SMCP=1
  let FEAT_ONUM=2
  let FEAT_HIST=4
  let FEAT_LIGA=256
  let FEAT_KERN=65536

  let fonts = [];
  that.decode = function(){
    let [bytes] = $pop_args(1);
    let fmt = 0;
    if (typeof bytes == 'number'){
      fmt = bytes;
      bytes = HF_DATA
    }
    let fp = {
      pos:0,
      buf:bytes
    };
    fonts.push({fp,fmt});
    return {id:fonts.length-1};
  }
  that._lookup = function(){
    let [id,x,flag] = $pop_args(3);
    if (fonts[id].fmt){
      if (typeof x == 'number'){
        return HF.cmap_lookup(fonts[id].fp,fonts[id].fmt-1,x);
      }else{
        return HF.cmap_lookup(fonts[id].fp,fonts[id].fmt-1,x.shift());
      }
    }
    if (typeof x == 'number'){
      let gid = TTF2PL.cmap_lookup(fonts[id].fp,x);
      if (flag & FEAT_SMCP){
        gid = TTF2PL.gsub_lookup(fonts[id].fp,"smcp",gid,[0],[]);
      }
      if (flag & FEAT_ONUM){
        gid = TTF2PL.gsub_lookup(fonts[id].fp,"onum",gid,[0],[]);
      }
      if (flag & FEAT_HIST){
        gid = TTF2PL.gsub_lookup(fonts[id].fp,"hist",gid,[0],[]);
      }
      return gid;
    }else{
      let gids = new Array(x.length);
      for (let i = 0; i < x.length; i++){
        gids[i] = TTF2PL.cmap_lookup(fonts[id].fp, x[i]);
      }
      let gid = -1;
      let n = [x.length - 1];
      if (flag & FEAT_LIGA){
        gid = TTF2PL.gsub_lookup(fonts[id].fp,"liga",gids[0],n,gids.slice(1));
        if (gid == gids[0]){
          n = [x.length - 1];
          gid = TTF2PL.gsub_lookup(fonts[id].fp,"dlig",gids[0],n,gids.slice(1));
          if (gid == gids[0]){
            n = [x.length - 1];
            gid = TTF2PL.gsub_lookup(fonts[id].fp,"hlig",gids[0],n,gids.slice(1));
          }
        }
      }
      let n_code;
      if (gid == -1){
        gid = gids[0];
        n_code = 1;
      }
      n_code = n[0]+1;
      if (flag & FEAT_SMCP){
        gid = TTF2PL.gsub_lookup(fonts[id].fp,"smcp",gid,[0],[]);
      }
      if (flag & FEAT_ONUM){
        gid = TTF2PL.gsub_lookup(fonts[id].fp,"onum",gid,[0],[]);
      }
      if (flag & FEAT_HIST){
        gid = TTF2PL.gsub_lookup(fonts[id].fp,"hist",gid,[0],[]);
      }
      x.splice(0,n_code);
      return gid;
    }
  }
  that._advance = function(){
    let [id,gidx,hidx,flag] = $pop_args(4);
    if (fonts[id].fmt){
      return HF.advance(fonts[id].fp,gidx);
    }
    return TTF2PL.advance(fonts[id].fp,gidx,hidx,Number(!!(flag & FEAT_KERN)));
  }
  that._glyph = function(){
    let [id,gidx,reso] = $pop_args(3);
    let polys = [];
    polys.__type = {con:'list',elt:[{con:'list',elt:[{con:'vec',elt:['f32',2]}]}]}
    function moveto(x,y){
      let ps = [];
      ps.__type = polys.__type.elt[0];
      polys.push(ps);
      lineto(x,y);
    }
    function lineto(x,y){
      let p = [x,y];
      p.__type = polys.__type.elt[0].elt[0];
      polys.at(-1).push(p);
    }
    if (fonts[id].fmt){
      HF.glyph(fonts[id].fp,gidx,moveto,lineto);
    }else{
      TTF2PL.glyph(fonts[id].fp,gidx,reso,moveto,lineto);
    }
    return polys;
  }

};
$goto=672;/*end__typd_112.Font*/ continue $$;
case 671:/*__typd_112.Font*/
case 672:/*end__typd_112.Font*/
var font_$o_FEAT_NONE = 0;
var __r_2099 = 0;
__r_2099 = new $typed_cons.u32([0])[0]
font_$o_FEAT_NONE = $value(__r_2099);
var font_$o_FEAT_SMCP = 0;
var __r_2100 = 0;
__r_2100 = new $typed_cons.u32([1])[0]
font_$o_FEAT_SMCP = $value(__r_2100);
var font_$o_FEAT_ONUM = 0;
var __r_2101 = 0;
__r_2101 = new $typed_cons.u32([2])[0]
font_$o_FEAT_ONUM = $value(__r_2101);
var font_$o_FEAT_HIST = 0;
var __r_2102 = 0;
__r_2102 = new $typed_cons.u32([4])[0]
font_$o_FEAT_HIST = $value(__r_2102);
var font_$o_FEAT_LIGA = 0;
var __r_2103 = 0;
__r_2103 = new $typed_cons.u32([256])[0]
font_$o_FEAT_LIGA = $value(__r_2103);
var font_$o_FEAT_KERN = 0;
var __r_2104 = 0;
__r_2104 = new $typed_cons.u32([65536])[0]
font_$o_FEAT_KERN = $value(__r_2104);
var font_$o_H1_SANS = 0;
font_$o_H1_SANS = $value(1);
var font_$o_H1_SCPT = 0;
font_$o_H1_SCPT = $value(2);
var font_$o_H3_GOTH_EN = 0;
font_$o_H3_GOTH_EN = $value(3);
var font_$o_H3_GOTH_DE = 0;
font_$o_H3_GOTH_DE = $value(4);
var font_$o_H3_GOTH_IT = 0;
font_$o_H3_GOTH_IT = $value(5);
var font_$o_H2_ITAL = 0;
font_$o_H2_ITAL = $value(6);
var font_$o_H2_ITAL_SM = 0;
font_$o_H2_ITAL_SM = $value(7);
var font_$o_H3_ITAL = 0;
font_$o_H3_ITAL = $value(8);
var font_$o_H2_SCPT = 0;
font_$o_H2_SCPT = $value(9);
var font_$o_H2_SRIF = 0;
font_$o_H2_SRIF = $value(10);
var font_$o_H2_SRIF_SM = 0;
font_$o_H2_SRIF_SM = $value(11);
var font_$o_H2_SANS = 0;
font_$o_H2_SANS = $value(12);
var font_$o_H1_SANS_SM = 0;
font_$o_H1_SANS_SM = $value(13);
var font_$o_H3_SRIF = 0;
font_$o_H3_SRIF = $value(14);

globalThis.$img = new function(){
  var that = this;

  function getImageMimeType(byteArray) {
    if (!byteArray || byteArray.length < 4) return null;
    const bytes = new Uint8Array(byteArray);
    if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
      return 'image/png';
    }
    if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
      return 'image/jpeg';
    }
    if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
      return 'image/gif';
    }
    if (bytes[0] === 0x42 && bytes[1] === 0x4D) {
      return 'image/bmp';
    }
    if (
      bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 && 
      bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50  
    ) {
      return 'image/webp';
    }
  }
  that.decode = async function(){
    let [byteArray] = $pop_args(1);
    return await new Promise((resolve, reject) => {
      const blob = new Blob([new Uint8Array(byteArray)], { type: getImageMimeType(byteArray) });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        
        const out = Object.assign(
          data,
          {__dims:[img.height,img.width,4]}
        );
        URL.revokeObjectURL(url);
        resolve(out);
      };
      img.src = url;
    });
  }
  that.encode = async function(){
    let [type,pixels] = $pop_args(2);

    return await new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      canvas.width = pixels.__dims[1];
      canvas.height = pixels.__dims[0];
      const ctx = canvas.getContext('2d');
      const imageData = new ImageData(new Uint8ClampedArray(pixels), pixels.__dims[1], pixels.__dims[0]);
      ctx.putImageData(imageData, 0, 0);
      canvas.toBlob((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const arrayBuffer = reader.result;
          resolve(Array.from(new Uint8Array(arrayBuffer)));
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      }, 'image/'+type.replace('jpg','jpeg'), 0.92);
    });
  }



  const MASK_NORM = 3
  const NORM_L1   = 1
  const NORM_L2   = 0
  const NORM_LINF = 2
  const MASK_COLOR    = 7
  const MASK_ALPHA    = (7<<4)
  const MASK_SCALE    = (7<<8)
  const COLOR_COPY       =0
  const COLOR_RGB_GRAY   =1
  const COLOR_RGB_BGR    =2
  const COLOR_RGB_HSV    =3
  const COLOR_HSV_RGB    =4
  const COLOR_LIN_SRGB   =5
  const COLOR_SRGB_LIN   =6
  const COLOR_INVERT     =7
  const ALPHA_COPY       =0
  const ALPHA_DROP       =16
  const ALPHA_PREMUL     =32
  const ALPHA_STRAIGHTEN =48
  const THRESH_BINARY   =256
  const THRESH_AUTO     =512
  const THRESH_ADAPTIVE =768
  const MORPH_ERODE       =16
  const MORPH_DILATE      =32
  const MORPH_OPEN        =48
  const MORPH_CLOSE       =64
  const MORPH_SKELETONIZE =80
  const BORDER_ZERO =0
  const BORDER_COPY =16
  const INT16_MAX =32767;
  const INT16_MIN =-32768;
  let tmp_buf = new ArrayBuffer(0);
  function EDT_f(x, i, g_i) {
    return (x - i) * (x - i) + g_i * g_i;
  }
  function EDT_Sep(i, u, g_i, g_u) {
    return (u * u - i * i + g_u * g_u - g_i * g_i) / (2 * (u - i));
  }
  function MDT_f(x, i, g_i) {	
    return Math.abs(x-i) + g_i;	
  }
  function MDT_Sep(i, u, g_i, g_u) {
    if (g_u >= (g_i + u - i))
      return INT16_MAX;
    if (g_i > (g_u + u - i))
      return INT16_MIN;
    return (g_u - g_i + u + i)/2;
  }
  function CDT_f(x, i, g_i) {	
    return MAX(abs(x-i), g_i);
  }
  function CDT_Sep(i, u, g_i, g_u) {
    if (g_i <= g_u)
      return Math.max(i+g_u, ((i+u)/2));
    else
      return Math.min(u-g_i, ((i+u)/2));
  }
  that.dist_transform = function(){
    let [b,flags,dt] = $pop_args(3);
    let m = b.__dims[1];
    let n = b.__dims[0];
    dt.__dims[0] = b.__dims[0];
    dt.__dims[1] = b.__dims[1];
    let f;
    let Sep;
    if ((flags&MASK_NORM) == NORM_L1){
      f = MDT_f;
      Sep = MDT_Sep;
    }else if ((flags&MASK_NORM) == NORM_L2){
      f = EDT_f;
      Sep = EDT_Sep;
    }else if ((flags&MASK_NORM) == NORM_LINF){
      f = CDT_f;
      Sep = CDT_Sep;
    }
    let do_voro = !!(flags&12);
    let tsz = m*n*2+m*2+m*2+m*n*4;
    if (tmp_buf.byteLength < tsz){
      tmp_buf = new ArrayBuffer(tsz);
    }
    let g = new Int16Array(tmp_buf,0,m*n);
    let s = new Int16Array(tmp_buf,m*n*2,m);
    let t = new Int16Array(tmp_buf,m*n*2+m*2,m);
    let v = new Int32Array(tmp_buf,m*n*2+m*2+m*2,m*n);
    for (let x = 0; x < m; x++) {
      if (b[x + 0 * m]){
        g[x + 0 * m] = 0;
        v[x + 0 * m] = b[x];
      }else{
        g[x + 0 * m] = m+n;
        v[x + 0 * m] = 0;
      }
      for (let y = 1; y < n; y++) {
        if (b[x + y * m]){
          g[x + y * m] = 0;
          v[x + y * m] = b[x + y * m];
        }else{
          g[x + y * m] = 1 + g[x + (y - 1) * m];
          v[x + y * m] = v[x + (y - 1) * m];
        }
      }
      for (let y = n - 2; y >= 0; y--) {
        if (g[x + (y + 1) * m] < g[x + y * m]){
          g[x + y * m] = 1 + g[x + (y + 1) * m];
          v[x + y * m] = v[x + (y + 1) * m];
        }
      }
    }
    let q = 0;
    let w;
    for (let y = 0; y < n; y++) {
      q = 0;
      s[0] = 0;
      t[0] = 0;
      for (let u = 1; u < m; u++) {
        while (q >= 0 && f(t[q], s[q], g[s[q] + y * m]) > f(t[q], u, g[u + y * m]))
          q--;
        if (q < 0) {
          q = 0;
          s[0] = u;
        } else {
          w = 1 + Sep(s[q], u, g[s[q] + y * m], g[u + y * m]);
          if (w < m) {
            q++;
            s[q] = u;
            t[q] = w;
          }
        }
      }
      for (let u = m - 1; u >= 0; u--) {
        let d = f(u, s[q], g[s[q] + y * m]);
        if (f == EDT_f) d = Math.sqrt(d);
        dt[u + y * m] = d;
        if (do_voro) b[u + y * m] = v[s[q] + y * m];
        if (u == t[q]) q--;
      }
    }
  }
  function rgb2hsv(r,g,b){
    let h,s,v;
    let rgbMin, rgbMax;
    rgbMin = r < g ? (r < b ? r : b) : (g < b ? g : b);
    rgbMax = r > g ? (r > b ? r : b) : (g > b ? g : b);
    v = rgbMax;
    if (v == 0){
      h = 0;
      s = 0;
      return [h,s,v];
    }
    s = (rgbMax - rgbMin) / rgbMax;
    if (s == 0){
      h = 0;
      return [h,s,v];
    }
    if (rgbMax == r)
      h = 1.0/6.0 * (g - b) / (rgbMax - rgbMin);
    else if (rgbMax == g)
      h = 2.0/6.0 + 1.0/6.0 * (b - r) / (rgbMax - rgbMin);
    else
      h = 4.0/6.0 + 1.0/6.0 * (r - g) / (rgbMax - rgbMin);
    return [h,s,v];
  }
  function hsv2rgb(h,s,v){
    let r,g,b;
    if (s == 0){
      r = v;
      g = v;
      b = v;
      return [r,g,b];
    }
    let hh = h+1.0;
    hh -= ~~hh;
    hh *= 6.0;
    let i = ~~hh;
    let ff = hh-i;
    let p = v * (1.0 - s);
    let q = v * (1.0 - (s*ff));
    let t = v * (1.0 - (s*(1.0-ff)));
    if (i==0){
      r = v; g = t; b = p;
    }else if (i==1){
      r = q; g = v; b = p;
    }else if (i==2){
      r = p; g = v; b = t;
    }else if (i==3){
      r = p; g = q; b = v;
    }else if (i==4){
      r = t; g = p; b = v;
    }else{
      r = v; g = p; b = q;
    }
    return [r,g,b];
  }
  that.convert = function(){
    let [pix,flags,out] = $pop_args(3);
    if (out.__dims.length == 3 && (out.__dims[2]==0||(out.__dims[0]==0&&out.__dims[1]==0))){
      out.__dims[2] = 1;
      if (pix.__dims.length == 3){
        out.__dims[2] = pix.__dims[2];
      }
      if ((out.__dims[2] == 4 || out.__dims[2] == 2) && (flags&MASK_ALPHA) == ALPHA_DROP){
        out.__dims[2] --;
      }
    }
    let ic = pix.__dims[2]??1;
    let oc = out.__dims[2]??1;
    let h = out.__dims[0] = pix.__dims[0];
    let w = out.__dims[1] = pix.__dims[1];
    let sizeof_dtype0 = 1;
    let cons0 = Uint8Array;
    let div0 = 255;
    let div1 = 255;
    if (pix.__type.elt[0]=='f32'){
      sizeof_dtype0 = 4;
      cons0 = Float32Array;
      div0 = 1;
    }
    if (out.__type.elt[0]=='f32'){
      div1 = 1;
    }
    let icc = (ic <= 2) ? 1 : 3;
    let occ = (oc <= 2) ? 1 : 3;
    let inp = pix;
    if ((flags & MASK_ALPHA) == ALPHA_STRAIGHTEN && (ic==2||ic==4)){
      let n = w*h*ic*sizeof_dtype0;
      if (n > tmp_buf.byteLength){
        tmp_buf = new ArrayBuffer(n);
      }
      let tmp = new cons0(tmp_buf,0,w*h*ic);
      let icc = (ic <= 2) ? 1 : 3;
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          tmp[(i*w+j)*ic+icc] = inp[(i*w+j)*ic+icc];
          for (let k = 0; k < ic; k++){
            if (inp[(i*w+j)*ic+icc] == 0){
              tmp[(i*w+j)*ic+k] = 0;
            }else{
              tmp[(i*w+j)*ic+k] = (inp[(i*w+j)*ic+k]*div0/inp[(i*w+j)*ic+icc]);
            }
          }
        }
      }
      inp = tmp;
    }
    if ((flags & MASK_COLOR) == COLOR_COPY || 
        ((flags & MASK_COLOR) == COLOR_RGB_GRAY) && ic <= 2){
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          for (let k = 0; k < occ; k++){
            out[(i*w+j)*oc+k] = inp[(i*w+j)*ic+k%icc]*div1/div0;
          }
        }
      }
    }else if ((flags & MASK_COLOR) == COLOR_INVERT){
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          for (let k = 0; k < occ; k++){
            out[(i*w+j)*oc+k] = (div0-inp[(i*w+j)*ic+k%icc])*div1/div0;
          }
        }
      }
    }else if ((flags & MASK_COLOR) == COLOR_RGB_GRAY){
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let ir = inp[(i*w+j)*ic+0];
          let ig = inp[(i*w+j)*ic+1];
          let ib = inp[(i*w+j)*ic+2];
          out[(i*w+j)*oc] = (ir*0.2126 + ig*0.7152 + ib*0.0722)/div0*div1;
        }
      }
    }else if ((flags & MASK_COLOR) == COLOR_RGB_BGR){
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          for (let k = 0; k < occ; k++){
            out[(i*w+j)*oc+k] = inp[(i*w+j)*ic+icc-1-(k%icc)]*div1/div0;
          }
        }
      }
    }else if ((flags & MASK_COLOR) == COLOR_RGB_HSV || (flags & MASK_COLOR) == COLOR_HSV_RGB){
      let F;
      if ((flags & MASK_COLOR) == COLOR_RGB_HSV) F = rgb2hsv;
      if ((flags & MASK_COLOR) == COLOR_HSV_RGB) F = hsv2rgb;
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let ir = (inp[(i*w+j)*ic+0%icc])/div0;
          let ig = (inp[(i*w+j)*ic+1%icc])/div0;
          let ib = (inp[(i*w+j)*ic+2%icc])/div0;
          let [oh,os,ov] = F(ir,ig,ib);
          out[(i*w+j)*oc+0%occ] = oh*div1;
          out[(i*w+j)*oc+1%occ] = os*div1;
          out[(i*w+j)*oc+2%occ] = ov*div1;
        }
      }
    }else if ((flags & MASK_COLOR) == COLOR_SRGB_LIN || (flags & MASK_COLOR) == COLOR_LIN_SRGB){
      let gamma = ((flags & MASK_COLOR) == COLOR_SRGB_LIN) ? 2.2 : 0.45;
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          for (let k = 0; k < occ; k++){
            out[(i*w+j)*oc+k] = Math.pow((float)(inp[(i*w+j)*ic+k%icc])/div0,gamma)*div1;
          }
        }
      }
    }
    if ((flags & MASK_ALPHA) != ALPHA_DROP && (oc == 2 || oc == 4) && (ic == 2 || ic == 4)){
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          out[(i*w+j)*oc+occ] = inp[(i*w+j)*ic+icc];
        }
      }
    }
    if ((flags & MASK_ALPHA) == ALPHA_PREMUL && (oc == 2 || oc == 4)){
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          for (let k = 0; k < occ; k++){
            out[(i*w+j)*oc+k] = (out[(i*w+j)*ic+k]*inp[(i*w+j)*ic+icc])*div1/div0/div0;
          }
        }
      }
    }
    if (out.__type.elt[0]=='u8'){
      for (let i = 0; i < out.length; i++) out[i]&=0xff;
    }
  }

  that.threshold = function(){
    let [pix, thresh, flags] = $pop_args(5);
    let w = pix.__dims[1];
    let h = pix.__dims[0];
    if ((flags & 0xff00) == THRESH_BINARY){
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let b = pix[i*w+j] > thresh;
          pix[i*w+j] = b ? 255 : 0;
        }
      }
    }else if ((flags & 0xff00) == THRESH_AUTO){
      let hsz = 256*4;
      if (tmp_buf.byteLength < hsz){
        tmp_buf = new ArrayBuffer(hsz);
      }
      let hist = new Int32Array(tmp_buf);
      for (let i = 0; i < hist.length; i++){
        hist[i] = 0;
      }
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let v = pix[i*w+j];
          hist[v]++;
        }
      }
      let total = w*h;
      let sum = 0;
      for (let i = 0; i < 256; i++) sum += i*hist[i];
      let sumB = 0;
      let wB = 0;
      let maxVar = 0;
      let threshold = 0;
      for (let t = 0; t < 256; t++){
        wB += hist[t];
        if (wB == 0) continue;
        let wF = total - wB;
        if (wF == 0) break;
        sumB += t * hist[t];
        let mB = sumB / wB;
        let mF = (sum - sumB) / wF;
        let betweenVar = wB * wF * (mB-mF) * (mB-mF);
        if (betweenVar > maxVar){
          maxVar = betweenVar;
          threshold = t;
        }
      }
      thresh = threshold;
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let b = pix[i*w+j] > thresh;
          pix[i*w+j] = b ? 255 : 0;
        }
      }
    }else if ((flags & 0xff00) == THRESH_ADAPTIVE){
      let sz = w*h*2;
      if (tmp_buf.byteLength < sz){
        tmp_buf = new ArrayBuffer(sz);
      }
      let blurx = new Uint8Array(tmp_buf,0,w*h);
      let blury = new Uint8Array(tmp_buf,w*h,w*h);
      let sig = flags & 0xff;
      let rad = sig*3;
      let ksz = rad*2+1;
      let kern = new Array(ksz);
      for (let i = 0; i < ksz; i++){
        kern[i] = Math.exp(-(i-rad)*(i-rad)/(2.0*sig*sig));
      }
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let n = 0;
          let s = 0;
          for (let k = j-rad; k <= j+rad; k++){
            if (k < 0) continue;
            if (k >= w) continue;
            let ki = kern[k-j+rad];
            s += pix[i*w+k]*ki;
            n+=ki;
          }
          blurx[i*w+j] = s/n;
        }
      }
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let n = 0;
          let s = 0;       
          for (let k = i-rad; k <= i+rad; k++){
            if (k < 0) continue;
            if (k >= h) continue;
            let ki = kern[k-i+rad];
            s += blurx[k*w+j]*ki;
            n+=ki;
          }
          blury[i*w+j] = s/n;
        }
      }
      for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
          let b = pix[i*w+j] > blury[i*w+j]+thresh;
          pix[i*w+j] = b ? 255 : 0;
          // pix[i*w+j] = blury[i*w+j];
        }
      }
    }
  }
  function erode_or_dilate(pix,w,h,kern,rad,flags,out){
    let ksz = rad*2+1;
    let v0 = ((flags & 0xf0) == MORPH_DILATE) ? 0 : 255;
    for (let i = 0; i < h; i++){
      for (let j = 0; j < w; j++){
        let v = v0;
        for (let k = i-rad; k <= i+rad; k++){
          if (k < 0) continue;
          if (k >= h) continue;
          for (let l = j-rad; l <= j+rad; l++){
            if (l < 0) continue;
            if (l >= w) continue;
            let e = kern[ (k-i+rad) * ksz + (l-j+rad) ];
            if (!e) continue;
            if (v0){
              v = Math.min(v,pix[k*w+l]);
            }else{
              v = Math.max(v,pix[k*w+l]);
            }
          }
        }
        out[i*w+j] = v;
      }
    }
  }
  function thinning_zs_iteration(im, W, H, iter) {
    let diff = 0;
    for (let i = 1; i < H-1; i++){
      for (let j = 1; j < W-1; j++){
        let p2 = im[(i-1)*W+j]   & 1;
        let p3 = im[(i-1)*W+j+1] & 1;
        let p4 = im[(i)*W+j+1]   & 1;
        let p5 = im[(i+1)*W+j+1] & 1;
        let p6 = im[(i+1)*W+j]   & 1;
        let p7 = im[(i+1)*W+j-1] & 1;
        let p8 = im[(i)*W+j-1]   & 1;
        let p9 = im[(i-1)*W+j-1] & 1;
        let A  = (p2 == 0 && p3 == 1) + (p3 == 0 && p4 == 1) +
                (p4 == 0 && p5 == 1) + (p5 == 0 && p6 == 1) +
                (p6 == 0 && p7 == 1) + (p7 == 0 && p8 == 1) +
                (p8 == 0 && p9 == 1) + (p9 == 0 && p2 == 1);
        let B  = p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
        let m1 = iter == 0 ? (p2 * p4 * p6) : (p2 * p4 * p8);
        let m2 = iter == 0 ? (p4 * p6 * p8) : (p2 * p6 * p8);
        if (A == 1 && (B >= 2 && B <= 6) && m1 == 0 && m2 == 0)
          im[i*W+j] |= 2;
      }
    }
    for (let i = 0; i < H*W; i++){
      let marker = im[i]>>1;
      let old = im[i]&1;
      im[i] = old & (!marker);
      if ((!diff) && (im[i] != old)){
        diff = 1;
      }
    }
    return diff;
  }
  function thinning_zs(im, W, H){
    let diff = 1;
    do {
      diff &= thinning_zs_iteration(im,W,H,0);
      diff &= thinning_zs_iteration(im,W,H,1);
    }while (diff);
  }
  that.morphology = function(){
    let [pix,rad,flags,out] = $pop_args(4);
    let w = pix.__dims[1];
    let h = pix.__dims[0];
    out.__dims[0] = h;
    out.__dims[1] = w;

    if (((flags & 0xf0) == MORPH_SKELETONIZE)){
      let sz = w*h;
      if (tmp_buf.byteLength < sz){
        tmp_buf = new ArrayBuffer(sz);
      }
      buf = new Uint8Array(tmp_buf,0,w*h);
      for (let i = 0; i < w*h; i++){
        buf[i] = pix[i] > 128 ? 1 : 0;
      }
      thinning_zs(buf,w,h);
      for (let i = 0; i < w*h; i++){
        out[i] = buf[i]?255:0;
      }
      return;
    }

    let ksz = rad*2+1;
    let sz = ksz*ksz;
    let proc = out;
    if (out == pix){
      sz += w*h;
    }
    let inter = null;
    let twostep = ((flags & 0xf0) == MORPH_OPEN) || ((flags & 0xf0) == MORPH_CLOSE);
    if (twostep){
      sz += w*h;
    }
    if (tmp_buf.byteLength < sz){
      tmp_buf = new ArrayBuffer(sz);
    }
    sz = ksz*ksz;
    if (out == pix){
      proc = new Uint8Array(tmp_buf,sz);
      sz += w*h;
    }
    if (twostep){
      inter = new Uint8Array(tmp_buf,sz);
    }

    let kern = new Uint8Array(tmp_buf,0,ksz*ksz);

    if ((flags & 0xf) == NORM_LINF){
      for (let i = 0; i < ksz*ksz; i++) kern[i] = 1;
    }else if ((flags & 0xf) == NORM_L1){
      for (let i = 0; i < ksz; i++){
        for (let j = 0; j < ksz; j++){
          let d = Math.abs(i-rad)+Math.abs(j-rad);
          kern[i*ksz+j] = (d <= rad);
        }
      }
    }else if ((flags & 0xf) == NORM_L2){
      for (let i = 0; i < ksz; i++){
        for (let j = 0; j < ksz; j++){
          let d = Math.hypot(i-rad,j-rad);
          kern[i*ksz+j] = (d <= rad);
        }
      }
    }
    if ((flags & 0xf0) == MORPH_ERODE || (flags & 0xf0) == MORPH_DILATE){
      erode_or_dilate(pix,w,h,kern,rad,flags,proc);
    }else if ((flags & 0xf0) == MORPH_OPEN){
      erode_or_dilate(pix,w,h,kern,rad,MORPH_ERODE,inter);
      erode_or_dilate(inter,w,h,kern,rad,MORPH_DILATE,proc);
    }else if ((flags & 0xf0) == MORPH_CLOSE){
      erode_or_dilate(pix,w,h,kern,rad,MORPH_DILATE,inter);
      erode_or_dilate(inter,w,h,kern,rad,MORPH_ERODE,proc);
    }
    if (out == proc) return;
    for (let i = 0; i < w*h; i++) out[i] = proc[i];
  }
  that.convolve = function(){
    let [pix,kern,flags,out] = $pop_args(4);
    let dtype = pix.__type.elt[0];
    let dsize = (dtype == 'u8') ? 1 : 4;
    let w = pix.__dims[1];
    let h = pix.__dims[0];
    out.__dims[0] = h;
    out.__dims[1] = w;

    let sz = w*h*dsize;
    
    if (tmp_buf.byteLength < sz){
      tmp_buf = new ArrayBuffer(sz);
    }
    if (dtype == 'u8'){
      proc = new Uint8Array(tmp_buf,0,w*h);
    }else{
      proc = new Float32Array(tmp_buf,0,w*h);
    }
    
    let kw = kern.__dims[1];
    let kh = kern.__dims[0];

    let kx = ~~((kw-1)/2);
    let ky = ~~((kh-1)/2);
    let border = (flags&0xf0)==BORDER_COPY;
    for (let i = 0; i < h; i++){
      for (let j = 0; j < w; j++){
        let s = 0.0;
        for (let k = 0; k < kh; k++){
          for (let l = 0; l < kw; l++){
            let ii = i+k-kx;
            let jj = j+l-ky;
            let iii = Math.min(Math.max(ii,0),h-1);
            let jjj = Math.min(Math.max(jj,0),w-1);
            if (border || (iii==ii&&jjj==jj)){
              s += pix[iii*w+jjj]*kern[k*kw+l];
            }
          }
        }
        proc[i*w+j] = s;
      }
    }
    for (let i = 0; i < w*h; i++) out[i] = proc[i];
  }

  // https://gist.github.com/LingDong-/b99cdbe814e600d8152c0eefeef01ab3  
  let N_PIXEL_NEIGHBOR = 8;
  // give pixel neighborhood counter-clockwise ID's for
  // easier access with findContour algorithm
  function neighborIDToIndex(i, j, id){
    if (id == 0){return [i,j+1];}
    if (id == 1){return [i-1,j+1];}
    if (id == 2){return [i-1,j];}
    if (id == 3){return [i-1,j-1];}
    if (id == 4){return [i,j-1];}
    if (id == 5){return [i+1,j-1];}
    if (id == 6){return [i+1,j];}
    if (id == 7){return [i+1,j+1];}
    return null;
  }
  function neighborIndexToID(i0, j0, i, j){
    let di = i - i0;
    let dj = j - j0;
    if (di == 0 && dj == 1){return 0;}
    if (di ==-1 && dj == 1){return 1;}
    if (di ==-1 && dj == 0){return 2;}
    if (di ==-1 && dj ==-1){return 3;}
    if (di == 0 && dj ==-1){return 4;}
    if (di == 1 && dj ==-1){return 5;}
    if (di == 1 && dj == 0){return 6;}
    if (di == 1 && dj == 1){return 7;}
    return -1;
  }

  // first counter clockwise non-zero element in neighborhood
  function ccwNon0(F, w, h, i0, j0, i, j, offset){
    let id = neighborIndexToID(i0,j0,i,j);
    for (let k = 0; k < N_PIXEL_NEIGHBOR; k++){
      let kk = (k+id+offset + N_PIXEL_NEIGHBOR*2) % N_PIXEL_NEIGHBOR;
      let ij = neighborIDToIndex(i0,j0,kk);
      if (F[ij[0]*w+ij[1]]!=0){
        return ij;
      }
    }
    return null;
  }

  // first clockwise non-zero element in neighborhood
  function cwNon0(F, w, h, i0, j0, i, j, offset){
    let id = neighborIndexToID(i0,j0,i,j);
    for (let k = 0; k < N_PIXEL_NEIGHBOR; k++){
      let kk = (-k+id-offset + N_PIXEL_NEIGHBOR*2) % N_PIXEL_NEIGHBOR;
      let ij = neighborIDToIndex(i0,j0,kk);
      if (F[ij[0]*w+ij[1]]!=0){
        return ij;
      }
    }
    return null;
  }
  /**
   * Find contours in a binary image
   * <p>
   * Implements Suzuki, S. and Abe, K.
   * Topological Structural Analysis of Digitized Binary Images by Border Following.
   * <p>
   * See source code for step-by-step correspondence to the paper's algorithm
   * description.
   * @param  F    The bitmap, stored in 1-dimensional row-major form. 
   *              0=background, 1=foreground, will be modified by the function
   *              to hold semantic information
   * @param  w    Width of the bitmap
   * @param  h    Height of the bitmap
   * @return      An array of contours found in the image.
   * @see         Contour
   */
   function findContours(F, w, h) {
    // Topological Structural Analysis of Digitized Binary Images by Border Following.
    // Suzuki, S. and Abe, K., CVGIP 30 1, pp 32-46 (1985)
    let nbd = 1;
    let lnbd = 1;

    let contours = [];
    
    // Without loss of generality, we assume that 0-pixels fill the frame 
    // of a binary picture
    for (let i = 1; i < h-1; i++){
      F[i*w] = 0; F[i*w+w-1]=0;
    }
    for (let i = 0; i < w; i++){
      F[i] = 0; F[w*h-1-i]=0;
    }

    //Scan the picture with a TV raster and perform the following steps 
    //for each pixel such that fij # 0. Every time we begin to scan a 
    //new row of the picture, reset LNBD to 1.
    for (let i = 1; i < h-1; i++) {
      lnbd = 1;

      for (let j = 1; j < w-1; j++) {
        
        let i2 = 0, j2 = 0;
        if (F[i*w+j] == 0) {
          continue;
        }
        //(a) If fij = 1 and fi, j-1 = 0, then decide that the pixel 
        //(i, j) is the border following starting point of an outer 
        //border, increment NBD, and (i2, j2) <- (i, j - 1).
        if (F[i*w+j] == 1 && F[i*w+(j-1)] == 0) {
          nbd ++;
          i2 = i;
          j2 = j-1;
          
          
        //(b) Else if fij >= 1 and fi,j+1 = 0, then decide that the 
        //pixel (i, j) is the border following starting point of a 
        //hole border, increment NBD, (i2, j2) <- (i, j + 1), and 
        //LNBD + fij in case fij > 1.  
        } else if (F[i*w+j]>=1 && F[i*w+j+1] == 0) {
          nbd ++;
          i2 = i;
          j2 = j+1;
          if (F[i*w+j]>1) {
            lnbd = F[i*w+j];
          }
          
          
        } else {
          //(c) Otherwise, go to (4).
          //(4) If fij != 1, then LNBD <- |fij| and resume the raster
          //scan from pixel (i,j+1). The algorithm terminates when the
          //scan reaches the lower right corner of the picture
          if (F[i*w+j]!=1){lnbd = Math.abs(F[i*w+j]);}
          continue;
          
        }
        //(2) Depending on the types of the newly found border 
        //and the border with the sequential number LNBD 
        //(i.e., the last border met on the current row), 
        //decide the parent of the current border as shown in Table 1.
        // TABLE 1
        // Decision Rule for the Parent Border of the Newly Found Border B
        // ----------------------------------------------------------------
        // Type of border B'
        // \    with the sequential
        //     \     number LNBD
        // Type of B \                Outer border         Hole border
        // ---------------------------------------------------------------     
        // Outer border               The parent border    The border B'
        //                            of the border B'
        //
        // Hole border                The border B'      The parent border
        //                                               of the border B'
        // ----------------------------------------------------------------
        
        let B = {};
        B.points = []
        B.points.push([j,i]);
        B.isHole = (j2 == j+1);
        B.id = nbd;
        contours.push(B);

        let B0 = {}
        for (let c = 0; c < contours.length; c++){
          if (contours[c].id == lnbd){
            B0 = contours[c];
            break;
          }
        }
        if (B0.isHole){
          if (B.isHole){
            B.parent = B0.parent;
          }else{
            B.parent = lnbd;
          }
        }else{
          if (B.isHole){
            B.parent = lnbd;
          }else{
            B.parent = B0.parent;
          }
        }
        
        //(3) From the starting point (i, j), follow the detected border: 
        //this is done by the following substeps (3.1) through (3.5).
        
        //(3.1) Starting from (i2, j2), look around clockwise the pixels 
        //in the neigh- borhood of (i, j) and tind a nonzero pixel. 
        //Let (i1, j1) be the first found nonzero pixel. If no nonzero 
        //pixel is found, assign -NBD to fij and go to (4).
        let i1 = -1, j1 = -1;
        let i1j1 = cwNon0(F,w,h,i,j,i2,j2,0);
        if (i1j1 == null){
          F[i*w+j] = -nbd;
          //go to (4)
          if (F[i*w+j]!=1){lnbd = Math.abs(F[i*w+j]);}
          continue;
        }
        i1 = i1j1[0]; j1 = i1j1[1];
        
        // (3.2) (i2, j2) <- (i1, j1) ad (i3,j3) <- (i, j).
        i2 = i1;
        j2 = j1;
        let i3 = i;
        let j3 = j;
        
        while (true){

          //(3.3) Starting from the next elementof the pixel (i2, j2) 
          //in the counterclock- wise order, examine counterclockwise 
          //the pixels in the neighborhood of the current pixel (i3, j3) 
          //to find a nonzero pixel and let the first one be (i4, j4).
          
          let i4j4 = ccwNon0(F,w,h,i3,j3,i2,j2,1);
   
          var i4 = i4j4[0];
          var j4 = i4j4[1];

          contours[contours.length-1].points.push([j4,i4]);
          
          //(a) If the pixel (i3, j3 + 1) is a O-pixel examined in the
          //substep (3.3) then fi3, j3 <-  -NBD.
          if (F[i3*w+j3+1] == 0){
            F[i3*w+j3] = -nbd;
            
          //(b) If the pixel (i3, j3 + 1) is not a O-pixel examined 
          //in the substep (3.3) and fi3,j3 = 1, then fi3,j3 <- NBD.
          }else if (F[i3*w+j3] == 1){
            F[i3*w+j3] = nbd;
          }else{
            //(c) Otherwise, do not change fi3, j3.
          }
          
          //(3.5) If (i4, j4) = (i, j) and (i3, j3) = (i1, j1) 
          //(coming back to the starting point), then go to (4);
          if (i4 == i && j4 == j && i3 == i1 && j3 == j1){
            if (F[i*w+j]!=1){lnbd = Math.abs(F[i*w+j]);}
            break;
            
          //otherwise, (i2, j2) + (i3, j3),(i3, j3) + (i4, j4), 
          //and go back to (3.3).
          }else{
            i2 = i3;
            j2 = j3;
            i3 = i4;
            j3 = j4;
          }
        }
      }
    }
    return contours;
  }

  that.find_contours = function(){
    let [pix] = $pop_args(1);
    let h = pix.__dims[0];
    let w = pix.__dims[1];
    if (tmp_buf.byteLength < w*h*4){
      tmp_buf = new ArrayBuffer(w*h*4);
    }
    let F = new Int32Array(tmp_buf,0,w*h);
    for (let i = 0; i < w*h; i++){
      F[i] = (pix[i])?1:0;
    }
    let contours = findContours(F, w, h);
    let out = [];
    const eps = 0.001;
    for (let i = 0; i < contours.length; i++){
      out.push([])
      for (let j = 0; j < contours[i].points.length; j++){
        let x1 = contours[i].points[j][0];
        let y1 = contours[i].points[j][1];
        if (j == 0 || j == contours[i].points.length-1){
          out.at(-1).push([x1,y1])
        }else{
          let x0 = out.at(-1).at(-1)[0];
          let y0 = out.at(-1).at(-1)[1];
          let x2 = contours[i].points[j+1][0];
          let y2 = contours[i].points[j+1][1];
          let cw = (((x1)-(x0))*((y2)-(y0)) - ((x2)-(x0))*((y1)-(y0)));
          if (cw > eps || cw < -eps){
            out.at(-1).push([x1,y1]);
          }
        }
      }
      if (out.at(-1).length < 3){
        out.pop();
      }else{
        out.at(-1).forEach(v=>v.__type = {con:'vec',elt:['f32',2]});
        out.at(-1).__type = {con:'list',elt:[{con:'vec',elt:['f32',2]}]}
      }
    }
    // console.log(out,contours);
    return out;
  }

  function lbl_assoc(lbl_eq, pw, pn){
    if (pw == pn) return pw;
    if (!pw) return pn;
    if (!pn) return pw;
    let pa = pw;
    let pb = pn;
    if (pa > pb){
      pa = pn;
      pb = pw;
    }
    if (!lbl_eq[pb]){
      lbl_eq[pb] = pa;
      return pa;
    }
    let pc = lbl_eq[pb];
    return (lbl_eq[pb] = lbl_assoc(lbl_eq,pa,pc));
  }

  that.label_blobs = function(){
    let [pix,out] = $pop_args(2);
    let h = out.__dims[0] = pix.__dims[0];
    let w = out.__dims[1] = pix.__dims[1];
    let lbl_eq = [0];
    let lbl = 1;
    for (let i = 0; i < h; i++){
      for (let j = 0; j < w; j++){
        if (pix[i*w+j]){
          let pw = j ? out[i*w+j-1] : 0;
          let pn = i ? out[i*w+j-w] : 0;
          if (pw == 0 && pn == 0){
            out[i*w+j] = lbl;
            lbl_eq[lbl] = 0;
            lbl++;
          }else{
            out[i*w+j] = lbl_assoc(lbl_eq,pw,pn);
          }
        }else{
          out[i*w+j] = 0;
        }
      }
    }
    let uniques = new Array(lbl).fill(0);
    let nid = 0;
    for (let i = 1; i < lbl; i++){
      if (!lbl_eq[i]){
        uniques[i] = nid++;
      }
    }
    for (let i = 0; i < h; i++){
      for (let j = 0; j < w; j++){
        if (out[i*w+j]){
          let ini = out[i*w+j];
          let bot = ini;
          while (lbl_eq[bot]){
            bot = lbl_eq[bot];
          }
          if (bot != ini){
            lbl_eq[ini] = bot;
          }
          out[i*w+j] = uniques[bot];
        }
      }
    }
  }
}


var img_$o_MORPH_ERODE = 0;
img_$o_MORPH_ERODE = $value(16);
var img_$o_MORPH_DILATE = 0;
img_$o_MORPH_DILATE = $value(32);
var img_$o_MORPH_OPEN = 0;
img_$o_MORPH_OPEN = $value(48);
var img_$o_MORPH_CLOSE = 0;
img_$o_MORPH_CLOSE = $value(64);
var img_$o_MORPH_SKELETONIZE = 0;
img_$o_MORPH_SKELETONIZE = $value(80);
var img_$o_THRESH_BINARY = 0;
img_$o_THRESH_BINARY = $value(256);
var img_$o_THRESH_AUTO = 0;
img_$o_THRESH_AUTO = $value(512);
var img_$o_THRESH_ADAPTIVE = 0;
img_$o_THRESH_ADAPTIVE = $value(768);
var img_$o_BYPROD_NONE = 0;
img_$o_BYPROD_NONE = $value(0);
var img_$o_BYPROD_VORONOI = 0;
img_$o_BYPROD_VORONOI = $value(4);
var img_$o_NORM_L1 = 0;
img_$o_NORM_L1 = $value(1);
var img_$o_NORM_L2 = 0;
img_$o_NORM_L2 = $value(0);
var img_$o_NORM_LINF = 0;
img_$o_NORM_LINF = $value(2);
var img_$o_BORDER_ZERO = 0;
img_$o_BORDER_ZERO = $value(0);
var img_$o_BORDER_COPY = 0;
img_$o_BORDER_COPY = $value(16);
var img_$o_COLOR_COPY = 0;
img_$o_COLOR_COPY = $value(0);
var img_$o_COLOR_RGB_GRAY = 0;
img_$o_COLOR_RGB_GRAY = $value(1);
var img_$o_COLOR_RGB_BGR = 0;
img_$o_COLOR_RGB_BGR = $value(2);
var img_$o_COLOR_RGB_HSV = 0;
img_$o_COLOR_RGB_HSV = $value(3);
var img_$o_COLOR_HSV_RGB = 0;
img_$o_COLOR_HSV_RGB = $value(4);
var img_$o_COLOR_LIN_SRGB = 0;
img_$o_COLOR_LIN_SRGB = $value(5);
var img_$o_COLOR_SRGB_LIN = 0;
img_$o_COLOR_SRGB_LIN = $value(6);
var img_$o_COLOR_INVERT = 0;
img_$o_COLOR_INVERT = $value(7);
var img_$o_ALPHA_COPY = 0;
img_$o_ALPHA_COPY = $value(0);
var img_$o_ALPHA_DROP = 0;
img_$o_ALPHA_DROP = $value(16);
var img_$o_ALPHA_PREMUL = 0;
img_$o_ALPHA_PREMUL = $value(32);
var img_$o_ALPHA_STRAIGHTEN = 0;
img_$o_ALPHA_STRAIGHTEN = $value(48);
globalThis.$arr = new function(){
  var that = this;

  that.reshape = function(){
    let [a,n] = $pop_args(2);
    let cnt = n.reduce((acc, num) => acc * num, 1);
    a.__dims = n;
    a.length = cnt;
  }
  that.make = function(){
    let [n,x] = $pop_args(2);
    let cnt = n.reduce((acc, num) => acc * num, 1);
    return Object.assign(new Array(cnt).fill(0).map(_=>$value(x)),{__dims:n.slice()});
  }
  that.shape = function(){
    let [x] = $pop_args(1);
    return x.__dims;
  }
  that.copy = function(){
    let [a] = $pop_args(1);
    let b = a.slice();
    b.__dims = a.__dims.slice();
    return b;
  }
}


globalThis.$str = new function(){
  var that = this;

  const LEADING = 1;
  const TRAILING = 2;

  that.length = function(){
    let [s] = $pop_args(1);
    return s.length;
  }
  that.chr = function(){
    let [i] = $pop_args(1);
    return String.fromCharCode(i);
  }
  that.ord = function(){
    let [s] = $pop_args(1);
    return s.charCodeAt(0);
  }
  that.decode = function(){
    let [a,e] = $pop_args(2);
    if (Array.isArray(a)){
      a = new Uint8Array(a).buffer;
    }
    return new TextDecoder(e).decode(a);
  }
  that.encode = function(){
    let [s,e] = $pop_args(2);
    return new TextEncoder(e).encode(s);
  }
  that.slice = function(){
    let [a,i,j] = $pop_args(3);
    return a.slice(i,j);
  }
  that.split = function(){
    let [a,b] = $pop_args(2);
    return a.split(b);
  }
  that.trim = function(){
    let [a,b,e] = $pop_args(3);
    let start = 0;
    let end = a.length;
    if (e & 1){
      while (b.includes(a[start])) start++;
    }
    if (e & 2){
      while (b.includes(a[end-1])) end--;
    }
    return a.slice(start,end);
  }
  that.join = function(){
    let [s,a] = $pop_args(2);
    return a.join(s);
  }
  that.affixed = function(){
    let [s,cs,end] = $pop_args(3);
    if (end == LEADING){
      return Number(s.startsWith(cs));
    }else{
      return Number(s.endsWith(cs));
    }
  }
  that.pad = function(){
    let [s,n,cs,end] = $pop_args(4);
    if (end == LEADING){
      return s.padStart(n,cs);
    }else{
      return s.padEnd(n,cs);
    }
  }
}


var str_$o_LEADING = 0;
str_$o_LEADING = $value(1);
var str_$o_TRAILING = 0;
str_$o_TRAILING = $value(2);
var __0_$o_W = Object.assign(new $typed_cons.i32(1),{__type:"i32"});
__0_$o_W[0] = $value(1024);
var __0_$o_H = Object.assign(new $typed_cons.i32(1),{__type:"i32"});
__0_$o_H[0] = $value(1024);
var __0_$o_preset = Object.assign(new $typed_cons.i32(1),{__type:"i32"});
__0_$o_preset[0] = $value(1);
var __0_$o_weights = Object.assign([],{__type:{"con":"list","elt":["f32"]}});
var __r_2105 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["f32"]}})
__0_$o_weights = $value(__r_2105);
var __0_$o_sites = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_2106 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__0_$o_sites = $value(__r_2106);
var __0_$o_cells = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}});
var __r_2107 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]}})
__0_$o_cells = $value(__r_2107);
var __0_$o_celli = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}});
var __r_2108 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_celli = $value(__r_2108);
var __0_$o_corner_xs = Object.assign([],{__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}});
var __r_2109 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(2),{__type:{"con":"vec","elt":["f32",2]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}})
__0_$o_corner_xs = $value(__r_2109);
var __0_$o_corner_ns = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}});
var __r_2110 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_corner_ns = $value(__r_2110);
var __0_$o_corner_ss = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}});
var __r_2111 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_corner_ss = $value(__r_2111);
var __0_$o_corner_qs = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}});
var __r_2112 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_corner_qs = $value(__r_2112);
var __0_$o_visited = Object.assign([],{__type:{"con":"list","elt":["i32"]}});
var __r_2113 = Object.assign(new Array(0).fill(0).map(_=>$value(0)), {__type:{"con":"list","elt":["i32"]}})
__0_$o_visited = $value(__r_2113);
var __0_$o_paths = Object.assign([],{__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}});
var __r_2114 = Object.assign(new Array(0).fill(0).map(_=>$value(Object.assign([],{__type:{"con":"list","elt":["i32"]}}))), {__type:{"con":"list","elt":[{"con":"list","elt":["i32"]}]}})
__0_$o_paths = $value(__r_2114);
var __0_$o_color0 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
var __r_2115 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_2115[0] = $value(0);
__r_2115[1] = $value(0);
__r_2115[2] = $value(0);
__0_$o_color0 = $value(__r_2115);
var __0_$o_color1 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
var __r_2116 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_2116[0] = $value(0.7);
__r_2116[1] = $value(0.9);
__r_2116[2] = $value(0.8);
__0_$o_color1 = $value(__r_2116);
var __0_$o_color2 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
var __r_2117 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_2117[0] = $value(0.9);
__r_2117[1] = $value(0.8);
__r_2117[2] = $value(0.6);
__0_$o_color2 = $value(__r_2117);
var __0_$o_color3 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
var __r_2118 = Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}});
__r_2118[0] = $value(1);
__r_2118[1] = $value(0.5);
__r_2118[2] = $value(0.4);
__0_$o_color3 = $value(__r_2118);
var __0_$o_pg1 = null;
var __r_2119 = null;
$args.push($typed_value($WIDT,"i32"));
$args.push($typed_value($HEIG,"i32"));
var __r_2120 = $CLIP;
for (let i = 0; i < $CLIP.length; i++){
  $CLIP[i].__type = {"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}
  for (let j = 0; j < $CLIP[i].length; j++){
    $CLIP[i][j] = new Float32Array($CLIP[i][j])
    $CLIP[i][j].__type = {"con":"vec","elt":["f32",2]};
  }
}
$CLIP.__type = {"con":"list","elt":[{"con":"list","elt":[{"con":"vec","elt":["f32",2]}]}]};
$args.push(__r_2120);
var __r_2138 = Object.assign(new Array(4).fill(0).map(_=>$value(Object.assign(new $typed_cons.f32(3),{__type:{"con":"vec","elt":["f32",3]}}))), {__type:{"con":"list","elt":[{"con":"vec","elt":["f32",3]}]}})
__r_2138[0] = $value($COLS[0]);
__r_2138[1] = $value($COLS[1]);
__r_2138[2] = $value($COLS[2]);
__r_2138[3] = $value($COLS[3]);
$args.push(__r_2138);
$args.push(Object.assign(new $typed_cons.i32([$PSET]),{__type:'i32'}));
$args.push(Object.assign(new $typed_cons.i32([$SEED]),{__type:'i32'}));
$args.push(__0_$o_paths)
$args.push(__0_$o_visited)
$args.push(__0_$o_corner_qs)
$args.push(__0_$o_corner_ss)
$args.push(__0_$o_corner_ns)
$args.push(__0_$o_corner_xs)
$args.push(__0_$o_celli)
$args.push(__0_$o_cells)
$args.push(__0_$o_sites)
$args.push(__0_$o_weights)
$args.push(__0_$o_preset)
$args.push(__0_$o_color3)
$args.push(__0_$o_color2)
$args.push(__0_$o_color1)
$args.push(__0_$o_color0)
__r_2119=$assign(__r_2119,await __func_ovld_main_JQKEFQ_func_$L_tup_$L_i32_$9_i32_$9_list_$L_list_$L_vec_$L_f32_$9_2_$7__$7__$7__$9_list_$L_vec_$L_f32_$9_3_$7__$7__$9_i32_$9_i32_$7__$9_50_$o_Graphics_$7_());
__0_$o_paths = $caps.pop();
__0_$o_visited = $caps.pop();
__0_$o_corner_qs = $caps.pop();
__0_$o_corner_ss = $caps.pop();
__0_$o_corner_ns = $caps.pop();
__0_$o_corner_xs = $caps.pop();
__0_$o_celli = $caps.pop();
__0_$o_cells = $caps.pop();
__0_$o_sites = $caps.pop();
__0_$o_weights = $caps.pop();
__0_$o_preset = $caps.pop();
__0_$o_color3 = $caps.pop();
__0_$o_color2 = $caps.pop();
__0_$o_color1 = $caps.pop();
__0_$o_color0 = $caps.pop();
__0_$o_pg1 = $value(__r_2119);
return __0_$o_pg1;
default:$goto=0;break;}}}