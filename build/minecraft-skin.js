var N$={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},E$={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var x7=0;var d8=2;var U9=0;var F9=303;var pJ=1003;var V9=1015,R9=1016;class eJ{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){if(this._listeners===void 0)return!1;let Q=this._listeners;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){if(this._listeners===void 0)return;let Z=this._listeners[J];if(Z!==void 0){let Y=Z.indexOf($);if(Y!==-1)Z.splice(Y,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let Q=this._listeners[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let Y=0,X=Z.length;Y<X;Y++)Z[Y].call(this,J);J.target=null}}}var FJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],B6=1234567,Z8=Math.PI/180,K8=180/Math.PI;function tJ(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(FJ[J&255]+FJ[J>>8&255]+FJ[J>>16&255]+FJ[J>>24&255]+"-"+FJ[$&255]+FJ[$>>8&255]+"-"+FJ[$>>16&15|64]+FJ[$>>24&255]+"-"+FJ[Q&63|128]+FJ[Q>>8&255]+"-"+FJ[Q>>16&255]+FJ[Q>>24&255]+FJ[Z&255]+FJ[Z>>8&255]+FJ[Z>>16&255]+FJ[Z>>24&255]).toLowerCase()}function RJ(J,$,Q){return Math.max($,Math.min(Q,J))}function v7(J,$){return(J%$+$)%$}function O5(J,$,Q,Z,Y){return Z+(J-$)*(Y-Z)/(Q-$)}function z5(J,$,Q){if(J!==$)return(Q-J)/($-J);else return 0}function Y8(J,$,Q){return(1-Q)*J+Q*$}function I5(J,$,Q,Z){return Y8(J,$,1-Math.exp(-Q*Z))}function M5(J,$=1){return $-Math.abs(v7(J,$*2)-$)}function B5(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*(3-2*J)}function C5(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*J*(J*(J*6-15)+10)}function k5(J,$){return J+Math.floor(Math.random()*($-J+1))}function L5(J,$){return J+Math.random()*($-J)}function w5(J){return J*(0.5-Math.random())}function A5(J){if(J!==void 0)B6=J;let $=B6+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function P5(J){return J*Z8}function T5(J){return J*K8}function f7(J){return(J&J-1)===0&&J!==0}function S5(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function p8(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function j5(J,$,Q,Z,Y){let{cos:X,sin:K}=Math,W=X(Q/2),H=K(Q/2),q=X(($+Z)/2),U=K(($+Z)/2),G=X(($-Z)/2),F=K(($-Z)/2),N=X((Z-$)/2),_=K((Z-$)/2);switch(Y){case"XYX":J.set(W*U,H*G,H*F,W*q);break;case"YZY":J.set(H*F,W*U,H*G,W*q);break;case"ZXZ":J.set(H*G,H*F,W*U,W*q);break;case"XZX":J.set(W*U,H*_,H*N,W*q);break;case"YXY":J.set(H*N,W*U,H*_,W*q);break;case"ZYZ":J.set(H*_,H*N,W*U,W*q);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Y)}}function gJ(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function m0(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var N9={DEG2RAD:Z8,RAD2DEG:K8,generateUUID:tJ,clamp:RJ,euclideanModulo:v7,mapLinear:O5,inverseLerp:z5,lerp:Y8,damp:I5,pingpong:M5,smoothstep:B5,smootherstep:C5,randInt:k5,randFloat:L5,randFloatSpread:w5,seededRandom:A5,degToRad:P5,radToDeg:T5,isPowerOfTwo:f7,ceilPowerOfTwo:S5,floorPowerOfTwo:p8,setQuaternionFromProperEuler:j5,normalize:m0,denormalize:gJ};class R0{constructor(J=0,$=0){R0.prototype.isVector2=!0,this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=Math.max(J.x,Math.min($.x,this.x)),this.y=Math.max(J.y,Math.min($.y,this.y)),this}clampScalar(J,$){return this.x=Math.max(J,Math.min($,this.x)),this.y=Math.max(J,Math.min($,this.y)),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min($,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(RJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),Y=this.x-J.x,X=this.y-J.y;return this.x=Y*Q-X*Z+J.x,this.y=Y*Z+X*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class S0{constructor(J,$,Q,Z,Y,X,K,W,H){if(S0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,Y,X,K,W,H)}set(J,$,Q,Z,Y,X,K,W,H){let q=this.elements;return q[0]=J,q[1]=Z,q[2]=K,q[3]=$,q[4]=Y,q[5]=W,q[6]=Q,q[7]=X,q[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,Y=this.elements,X=Q[0],K=Q[3],W=Q[6],H=Q[1],q=Q[4],U=Q[7],G=Q[2],F=Q[5],N=Q[8],_=Z[0],z=Z[3],R=Z[6],V=Z[1],k=Z[4],B=Z[7],A=Z[2],w=Z[5],M=Z[8];return Y[0]=X*_+K*V+W*A,Y[3]=X*z+K*k+W*w,Y[6]=X*R+K*B+W*M,Y[1]=H*_+q*V+U*A,Y[4]=H*z+q*k+U*w,Y[7]=H*R+q*B+U*M,Y[2]=G*_+F*V+N*A,Y[5]=G*z+F*k+N*w,Y[8]=G*R+F*B+N*M,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],Y=J[3],X=J[4],K=J[5],W=J[6],H=J[7],q=J[8];return $*X*q-$*K*H-Q*Y*q+Q*K*W+Z*Y*H-Z*X*W}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],Y=J[3],X=J[4],K=J[5],W=J[6],H=J[7],q=J[8],U=q*X-K*H,G=K*W-q*Y,F=H*Y-X*W,N=$*U+Q*G+Z*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/N;return J[0]=U*_,J[1]=(Z*H-q*Q)*_,J[2]=(K*Q-Z*X)*_,J[3]=G*_,J[4]=(q*$-Z*W)*_,J[5]=(Z*Y-K*$)*_,J[6]=F*_,J[7]=(Q*W-H*$)*_,J[8]=(X*$-Q*Y)*_,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,Y,X,K){let W=Math.cos(Y),H=Math.sin(Y);return this.set(Q*W,Q*H,-Q*(W*X+H*K)+X+J,-Z*H,Z*W,-Z*(-H*X+W*K)+K+$,0,0,1),this}scale(J,$){return this.premultiply(G7.makeScale(J,$)),this}rotate(J){return this.premultiply(G7.makeRotation(-J)),this}translate(J,$){return this.premultiply(G7.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var G7=new S0;function E9(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function m8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function f5(){let J=m8("canvas");return J.style.display="block",J}var C6={};function X8(J){if(J in C6)return;C6[J]=!0,console.warn(J)}function m$(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function U7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var b5=new S0().fromArray([0.8224621,0.0331941,0.0170827,0.177538,0.9668058,0.0723974,-0.0000001,0.0000001,0.9105199]),y5=new S0().fromArray([1.2249401,-0.0420569,-0.0196376,-0.2249404,1.0420571,-0.0786361,0.0000001,0,1.0982735]);function x5(J){return J.convertSRGBToLinear().applyMatrix3(y5)}function v5(J){return J.applyMatrix3(b5).convertLinearToSRGB()}var h5={["srgb-linear"]:(J)=>J,["srgb"]:(J)=>J.convertSRGBToLinear(),["display-p3"]:x5},g5={["srgb-linear"]:(J)=>J,["srgb"]:(J)=>J.convertLinearToSRGB(),["display-p3"]:v5},CJ={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(J){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!J},get workingColorSpace(){return"srgb-linear"},set workingColorSpace(J){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(J,$,Q){if(this.enabled===!1||$===Q||!$||!Q)return J;let Z=h5[$],Y=g5[Q];if(Z===void 0||Y===void 0)throw Error(`Unsupported color space conversion, "${$}" to "${Q}".`);return Y(Z(J))},fromWorkingColorSpace:function(J,$){return this.convert(J,this.workingColorSpace,$)},toWorkingColorSpace:function(J,$){return this.convert(J,$,this.workingColorSpace)}},z$;class h7{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(z$===void 0)z$=m8("canvas");z$.width=J.width,z$.height=J.height;let Q=z$.getContext("2d");if(J instanceof ImageData)Q.putImageData(J,0,0);else Q.drawImage(J,0,0,J.width,J.height);$=z$}if($.width>2048||$.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),$.toDataURL("image/jpeg",0.6);else return $.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=m8("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),Y=Z.data;for(let X=0;X<Y.length;X++)Y[X]=m$(Y[X]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(m$($[Q]/255)*255);else $[Q]=m$($[Q]);return{data:$,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var p5=0;class g7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p5++}),this.uuid=tJ(),this.data=J,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let Y;if(Array.isArray(Z)){Y=[];for(let X=0,K=Z.length;X<K;X++)if(Z[X].isDataTexture)Y.push(F7(Z[X].image));else Y.push(F7(Z[X]))}else Y=F7(Z);Q.url=Y}if(!$)J.images[this.uuid]=Q;return Q}}function F7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return h7.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var m5=0;class qJ extends eJ{constructor(J=qJ.DEFAULT_IMAGE,$=qJ.DEFAULT_MAPPING,Q=1001,Z=1001,Y=1006,X=1008,K=1023,W=1009,H=qJ.DEFAULT_ANISOTROPY,q=""){super();if(this.isTexture=!0,Object.defineProperty(this,"id",{value:m5++}),this.uuid=tJ(),this.name="",this.source=new g7(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=Y,this.minFilter=X,this.anisotropy=H,this.format=K,this.internalFormat=null,this.type=W,this.offset=new R0(0,0),this.repeat=new R0(1,1),this.center=new R0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new S0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof q==="string")this.colorSpace=q;else X8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=q===3001?"srgb":"";this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}get encoding(){return X8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?3001:3000}set encoding(J){X8("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=J===3001?"srgb":""}}qJ.DEFAULT_IMAGE=null;qJ.DEFAULT_MAPPING=300;qJ.DEFAULT_ANISOTROPY=1;class s0{constructor(J=0,$=0,Q=0,Z=1){s0.prototype.isVector4=!0,this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,Y=this.w,X=J.elements;return this.x=X[0]*$+X[4]*Q+X[8]*Z+X[12]*Y,this.y=X[1]*$+X[5]*Q+X[9]*Z+X[13]*Y,this.z=X[2]*$+X[6]*Q+X[10]*Z+X[14]*Y,this.w=X[3]*$+X[7]*Q+X[11]*Z+X[15]*Y,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,Y,X=0.01,K=0.1,W=J.elements,H=W[0],q=W[4],U=W[8],G=W[1],F=W[5],N=W[9],_=W[2],z=W[6],R=W[10];if(Math.abs(q-G)<0.01&&Math.abs(U-_)<0.01&&Math.abs(N-z)<0.01){if(Math.abs(q+G)<0.1&&Math.abs(U+_)<0.1&&Math.abs(N+z)<0.1&&Math.abs(H+F+R-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let k=(H+1)/2,B=(F+1)/2,A=(R+1)/2,w=(q+G)/4,M=(U+_)/4,g=(N+z)/4;if(k>B&&k>A)if(k<0.01)Q=0,Z=0.707106781,Y=0.707106781;else Q=Math.sqrt(k),Z=w/Q,Y=M/Q;else if(B>A)if(B<0.01)Q=0.707106781,Z=0,Y=0.707106781;else Z=Math.sqrt(B),Q=w/Z,Y=g/Z;else if(A<0.01)Q=0.707106781,Z=0.707106781,Y=0;else Y=Math.sqrt(A),Q=M/Y,Z=g/Y;return this.set(Q,Z,Y,$),this}let V=Math.sqrt((z-N)*(z-N)+(U-_)*(U-_)+(G-q)*(G-q));if(Math.abs(V)<0.001)V=1;return this.x=(z-N)/V,this.y=(U-_)/V,this.z=(G-q)/V,this.w=Math.acos((H+F+R-1)/2),this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=Math.max(J.x,Math.min($.x,this.x)),this.y=Math.max(J.y,Math.min($.y,this.y)),this.z=Math.max(J.z,Math.min($.z,this.z)),this.w=Math.max(J.w,Math.min($.w,this.w)),this}clampScalar(J,$){return this.x=Math.max(J,Math.min($,this.x)),this.y=Math.max(J,Math.min($,this.y)),this.z=Math.max(J,Math.min($,this.z)),this.w=Math.max(J,Math.min($,this.w)),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min($,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D9 extends eJ{constructor(J=1,$=1,Q={}){super();this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=1,this.scissor=new s0(0,0,J,$),this.scissorTest=!1,this.viewport=new s0(0,0,J,$);let Z={width:J,height:$,depth:1};if(Q.encoding!==void 0)X8("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),Q.colorSpace=Q.encoding===3001?"srgb":"";this.texture=new qJ(Z,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.internalFormat=Q.internalFormat!==void 0?Q.internalFormat:null,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:1006,this.depthBuffer=Q.depthBuffer!==void 0?Q.depthBuffer:!0,this.stencilBuffer=Q.stencilBuffer!==void 0?Q.stencilBuffer:!1,this.depthTexture=Q.depthTexture!==void 0?Q.depthTexture:null,this.samples=Q.samples!==void 0?Q.samples:0}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q)this.width=J,this.height=$,this.depth=Q,this.texture.image.width=J,this.texture.image.height=$,this.texture.image.depth=Q,this.dispose();this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.texture=J.texture.clone(),this.texture.isRenderTargetTexture=!0;let $=Object.assign({},J.texture.image);if(this.texture.source=new g7($),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class PJ extends D9{constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class p7 extends qJ{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _9 extends qJ{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mJ{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,Y,X,K){let W=Q[Z+0],H=Q[Z+1],q=Q[Z+2],U=Q[Z+3],G=Y[X+0],F=Y[X+1],N=Y[X+2],_=Y[X+3];if(K===0){J[$+0]=W,J[$+1]=H,J[$+2]=q,J[$+3]=U;return}if(K===1){J[$+0]=G,J[$+1]=F,J[$+2]=N,J[$+3]=_;return}if(U!==_||W!==G||H!==F||q!==N){let z=1-K,R=W*G+H*F+q*N+U*_,V=R>=0?1:-1,k=1-R*R;if(k>Number.EPSILON){let A=Math.sqrt(k),w=Math.atan2(A,R*V);z=Math.sin(z*w)/A,K=Math.sin(K*w)/A}let B=K*V;if(W=W*z+G*B,H=H*z+F*B,q=q*z+N*B,U=U*z+_*B,z===1-K){let A=1/Math.sqrt(W*W+H*H+q*q+U*U);W*=A,H*=A,q*=A,U*=A}}J[$]=W,J[$+1]=H,J[$+2]=q,J[$+3]=U}static multiplyQuaternionsFlat(J,$,Q,Z,Y,X){let K=Q[Z],W=Q[Z+1],H=Q[Z+2],q=Q[Z+3],U=Y[X],G=Y[X+1],F=Y[X+2],N=Y[X+3];return J[$]=K*N+q*U+W*F-H*G,J[$+1]=W*N+q*G+H*U-K*F,J[$+2]=H*N+q*F+K*G-W*U,J[$+3]=q*N-K*U-W*G-H*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$){let{_x:Q,_y:Z,_z:Y,_order:X}=J,K=Math.cos,W=Math.sin,H=K(Q/2),q=K(Z/2),U=K(Y/2),G=W(Q/2),F=W(Z/2),N=W(Y/2);switch(X){case"XYZ":this._x=G*q*U+H*F*N,this._y=H*F*U-G*q*N,this._z=H*q*N+G*F*U,this._w=H*q*U-G*F*N;break;case"YXZ":this._x=G*q*U+H*F*N,this._y=H*F*U-G*q*N,this._z=H*q*N-G*F*U,this._w=H*q*U+G*F*N;break;case"ZXY":this._x=G*q*U-H*F*N,this._y=H*F*U+G*q*N,this._z=H*q*N+G*F*U,this._w=H*q*U-G*F*N;break;case"ZYX":this._x=G*q*U-H*F*N,this._y=H*F*U+G*q*N,this._z=H*q*N-G*F*U,this._w=H*q*U+G*F*N;break;case"YZX":this._x=G*q*U+H*F*N,this._y=H*F*U+G*q*N,this._z=H*q*N-G*F*U,this._w=H*q*U-G*F*N;break;case"XZY":this._x=G*q*U-H*F*N,this._y=H*F*U-G*q*N,this._z=H*q*N+G*F*U,this._w=H*q*U+G*F*N;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+X)}if($!==!1)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],Y=$[8],X=$[1],K=$[5],W=$[9],H=$[2],q=$[6],U=$[10],G=Q+K+U;if(G>0){let F=0.5/Math.sqrt(G+1);this._w=0.25/F,this._x=(q-W)*F,this._y=(Y-H)*F,this._z=(X-Z)*F}else if(Q>K&&Q>U){let F=2*Math.sqrt(1+Q-K-U);this._w=(q-W)/F,this._x=0.25*F,this._y=(Z+X)/F,this._z=(Y+H)/F}else if(K>U){let F=2*Math.sqrt(1+K-Q-U);this._w=(Y-H)/F,this._x=(Z+X)/F,this._y=0.25*F,this._z=(W+q)/F}else{let F=2*Math.sqrt(1+U-Q-K);this._w=(X-Z)/F,this._x=(Y+H)/F,this._y=(W+q)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<Number.EPSILON)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(RJ(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:Y,_w:X}=J,K=$._x,W=$._y,H=$._z,q=$._w;return this._x=Q*q+X*K+Z*H-Y*W,this._y=Z*q+X*W+Y*K-Q*H,this._z=Y*q+X*H+Q*W-Z*K,this._w=X*q-Q*K-Z*W-Y*H,this._onChangeCallback(),this}slerp(J,$){if($===0)return this;if($===1)return this.copy(J);let Q=this._x,Z=this._y,Y=this._z,X=this._w,K=X*J._w+Q*J._x+Z*J._y+Y*J._z;if(K<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,K=-K;else this.copy(J);if(K>=1)return this._w=X,this._x=Q,this._y=Z,this._z=Y,this;let W=1-K*K;if(W<=Number.EPSILON){let F=1-$;return this._w=F*X+$*this._w,this._x=F*Q+$*this._x,this._y=F*Z+$*this._y,this._z=F*Y+$*this._z,this.normalize(),this._onChangeCallback(),this}let H=Math.sqrt(W),q=Math.atan2(H,K),U=Math.sin((1-$)*q)/H,G=Math.sin($*q)/H;return this._w=X*U+this._w*G,this._x=Q*U+this._x*G,this._y=Z*U+this._y*G,this._z=Y*U+this._z*G,this._onChangeCallback(),this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=Math.random(),$=Math.sqrt(1-J),Q=Math.sqrt(J),Z=2*Math.PI*Math.random(),Y=2*Math.PI*Math.random();return this.set($*Math.cos(Z),Q*Math.sin(Y),Q*Math.cos(Y),$*Math.sin(Z))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(J=0,$=0,Q=0){S.prototype.isVector3=!0,this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(k6.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(k6.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,Y=J.elements;return this.x=Y[0]*$+Y[3]*Q+Y[6]*Z,this.y=Y[1]*$+Y[4]*Q+Y[7]*Z,this.z=Y[2]*$+Y[5]*Q+Y[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,Y=J.elements,X=1/(Y[3]*$+Y[7]*Q+Y[11]*Z+Y[15]);return this.x=(Y[0]*$+Y[4]*Q+Y[8]*Z+Y[12])*X,this.y=(Y[1]*$+Y[5]*Q+Y[9]*Z+Y[13])*X,this.z=(Y[2]*$+Y[6]*Q+Y[10]*Z+Y[14])*X,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,Y=J.x,X=J.y,K=J.z,W=J.w,H=W*$+X*Z-K*Q,q=W*Q+K*$-Y*Z,U=W*Z+Y*Q-X*$,G=-Y*$-X*Q-K*Z;return this.x=H*W+G*-Y+q*-K-U*-X,this.y=q*W+G*-X+U*-Y-H*-K,this.z=U*W+G*-K+H*-X-q*-Y,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,Y=J.elements;return this.x=Y[0]*$+Y[4]*Q+Y[8]*Z,this.y=Y[1]*$+Y[5]*Q+Y[9]*Z,this.z=Y[2]*$+Y[6]*Q+Y[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=Math.max(J.x,Math.min($.x,this.x)),this.y=Math.max(J.y,Math.min($.y,this.y)),this.z=Math.max(J.z,Math.min($.z,this.z)),this}clampScalar(J,$){return this.x=Math.max(J,Math.min($,this.x)),this.y=Math.max(J,Math.min($,this.y)),this.z=Math.max(J,Math.min($,this.z)),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(Math.max(J,Math.min($,Q)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:Y}=J,X=$.x,K=$.y,W=$.z;return this.x=Z*W-Y*K,this.y=Y*X-Q*W,this.z=Q*K-Z*X,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return V7.copy(this).projectOnVector(J),this.sub(V7)}reflect(J){return this.sub(V7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(RJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=(Math.random()-0.5)*2,$=Math.random()*Math.PI*2,Q=Math.sqrt(1-J**2);return this.x=Q*Math.cos($),this.y=Q*Math.sin($),this.z=J,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var V7=new S,k6=new mJ;class d${constructor(J=new S(1/0,1/0,1/0),$=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(sJ.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(sJ.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=sJ.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){if(J.updateWorldMatrix(!1,!1),J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();I$.copy(J.boundingBox),I$.applyMatrix4(J.matrixWorld),this.union(I$)}else{let Z=J.geometry;if(Z!==void 0)if($&&Z.attributes!==void 0&&Z.attributes.position!==void 0){let Y=Z.attributes.position;for(let X=0,K=Y.count;X<K;X++)sJ.fromBufferAttribute(Y,X).applyMatrix4(J.matrixWorld),this.expandByPoint(sJ)}else{if(Z.boundingBox===null)Z.computeBoundingBox();I$.copy(Z.boundingBox),I$.applyMatrix4(J.matrixWorld),this.union(I$)}}let Q=J.children;for(let Z=0,Y=Q.length;Z<Y;Z++)this.expandByObject(Q[Z],$);return this}containsPoint(J){return J.x<this.min.x||J.x>this.max.x||J.y<this.min.y||J.y>this.max.y||J.z<this.min.z||J.z>this.max.z?!1:!0}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x<this.min.x||J.min.x>this.max.x||J.max.y<this.min.y||J.min.y>this.max.y||J.max.z<this.min.z||J.min.z>this.max.z?!1:!0}intersectsSphere(J){return this.clampPoint(J.center,sJ),sJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(i$),N8.subVectors(this.max,i$),M$.subVectors(J.a,i$),B$.subVectors(J.b,i$),C$.subVectors(J.c,i$),J$.subVectors(B$,M$),$$.subVectors(C$,B$),q$.subVectors(M$,C$);let $=[0,-J$.z,J$.y,0,-$$.z,$$.y,0,-q$.z,q$.y,J$.z,0,-J$.x,$$.z,0,-$$.x,q$.z,0,-q$.x,-J$.y,J$.x,0,-$$.y,$$.x,0,-q$.y,q$.x,0];if(!R7($,M$,B$,C$,N8))return!1;if($=[1,0,0,0,1,0,0,0,1],!R7($,M$,B$,C$,N8))return!1;return E8.crossVectors(J$,$$),$=[E8.x,E8.y,E8.z],R7($,M$,B$,C$,N8)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,sJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(sJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return nJ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),nJ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),nJ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),nJ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),nJ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),nJ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),nJ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),nJ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(nJ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var nJ=[new S,new S,new S,new S,new S,new S,new S,new S],sJ=new S,I$=new d$,M$=new S,B$=new S,C$=new S,J$=new S,$$=new S,q$=new S,i$=new S,N8=new S,E8=new S,G$=new S;function R7(J,$,Q,Z,Y){for(let X=0,K=J.length-3;X<=K;X+=3){G$.fromArray(J,X);let W=Y.x*Math.abs(G$.x)+Y.y*Math.abs(G$.y)+Y.z*Math.abs(G$.z),H=$.dot(G$),q=Q.dot(G$),U=Z.dot(G$);if(Math.max(-Math.max(H,q,U),Math.min(H,q,U))>W)return!1}return!0}var u5=new d$,o$=new S,N7=new S;class l8{constructor(J=new S,$=-1){this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else u5.setFromPoints(J).getCenter(Q);let Z=0;for(let Y=0,X=J.length;Y<X;Y++)Z=Math.max(Z,Q.distanceToSquared(J[Y]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;o$.subVectors(J,this.center);let $=o$.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(o$,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else N7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(o$.copy(J.center).add(N7)),this.expandByPoint(o$.copy(J.center).sub(N7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var iJ=new S,E7=new S,D8=new S,Q$=new S,D7=new S,_8=new S,_7=new S;class c8{constructor(J=new S,$=new S(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,iJ)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=iJ.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return iJ.copy(this.origin).addScaledVector(this.direction,$),iJ.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){E7.copy(J).add($).multiplyScalar(0.5),D8.copy($).sub(J).normalize(),Q$.copy(this.origin).sub(E7);let Y=J.distanceTo($)*0.5,X=-this.direction.dot(D8),K=Q$.dot(this.direction),W=-Q$.dot(D8),H=Q$.lengthSq(),q=Math.abs(1-X*X),U,G,F,N;if(q>0)if(U=X*W-K,G=X*K-W,N=Y*q,U>=0)if(G>=-N)if(G<=N){let _=1/q;U*=_,G*=_,F=U*(U+X*G+2*K)+G*(X*U+G+2*W)+H}else G=Y,U=Math.max(0,-(X*G+K)),F=-U*U+G*(G+2*W)+H;else G=-Y,U=Math.max(0,-(X*G+K)),F=-U*U+G*(G+2*W)+H;else if(G<=-N)U=Math.max(0,-(-X*Y+K)),G=U>0?-Y:Math.min(Math.max(-Y,-W),Y),F=-U*U+G*(G+2*W)+H;else if(G<=N)U=0,G=Math.min(Math.max(-Y,-W),Y),F=G*(G+2*W)+H;else U=Math.max(0,-(X*Y+K)),G=U>0?Y:Math.min(Math.max(-Y,-W),Y),F=-U*U+G*(G+2*W)+H;else G=X>0?-Y:Y,U=Math.max(0,-(X*G+K)),F=-U*U+G*(G+2*W)+H;if(Q)Q.copy(this.origin).addScaledVector(this.direction,U);if(Z)Z.copy(E7).addScaledVector(D8,G);return F}intersectSphere(J,$){iJ.subVectors(J.center,this.origin);let Q=iJ.dot(this.direction),Z=iJ.dot(iJ)-Q*Q,Y=J.radius*J.radius;if(Z>Y)return null;let X=Math.sqrt(Y-Z),K=Q-X,W=Q+X;if(W<0)return null;if(K<0)return this.at(W,$);return this.at(K,$)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,Y,X,K,W,H=1/this.direction.x,q=1/this.direction.y,U=1/this.direction.z,G=this.origin;if(H>=0)Q=(J.min.x-G.x)*H,Z=(J.max.x-G.x)*H;else Q=(J.max.x-G.x)*H,Z=(J.min.x-G.x)*H;if(q>=0)Y=(J.min.y-G.y)*q,X=(J.max.y-G.y)*q;else Y=(J.max.y-G.y)*q,X=(J.min.y-G.y)*q;if(Q>X||Y>Z)return null;if(Y>Q||isNaN(Q))Q=Y;if(X<Z||isNaN(Z))Z=X;if(U>=0)K=(J.min.z-G.z)*U,W=(J.max.z-G.z)*U;else K=(J.max.z-G.z)*U,W=(J.min.z-G.z)*U;if(Q>W||K>Z)return null;if(K>Q||Q!==Q)Q=K;if(W<Z||Z!==Z)Z=W;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,iJ)!==null}intersectTriangle(J,$,Q,Z,Y){D7.subVectors($,J),_8.subVectors(Q,J),_7.crossVectors(D7,_8);let X=this.direction.dot(_7),K;if(X>0){if(Z)return null;K=1}else if(X<0)K=-1,X=-X;else return null;Q$.subVectors(this.origin,J);let W=K*this.direction.dot(_8.crossVectors(Q$,_8));if(W<0)return null;let H=K*this.direction.dot(D7.cross(Q$));if(H<0)return null;if(W+H>X)return null;let q=-K*Q$.dot(_7);if(q<0)return null;return this.at(q/X,Y)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class e0{constructor(J,$,Q,Z,Y,X,K,W,H,q,U,G,F,N,_,z){if(e0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,Y,X,K,W,H,q,U,G,F,N,_,z)}set(J,$,Q,Z,Y,X,K,W,H,q,U,G,F,N,_,z){let R=this.elements;return R[0]=J,R[4]=$,R[8]=Q,R[12]=Z,R[1]=Y,R[5]=X,R[9]=K,R[13]=W,R[2]=H,R[6]=q,R[10]=U,R[14]=G,R[3]=F,R[7]=N,R[11]=_,R[15]=z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e0().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){let $=this.elements,Q=J.elements,Z=1/k$.setFromMatrixColumn(J,0).length(),Y=1/k$.setFromMatrixColumn(J,1).length(),X=1/k$.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*Y,$[5]=Q[5]*Y,$[6]=Q[6]*Y,$[7]=0,$[8]=Q[8]*X,$[9]=Q[9]*X,$[10]=Q[10]*X,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,Y=J.z,X=Math.cos(Q),K=Math.sin(Q),W=Math.cos(Z),H=Math.sin(Z),q=Math.cos(Y),U=Math.sin(Y);if(J.order==="XYZ"){let G=X*q,F=X*U,N=K*q,_=K*U;$[0]=W*q,$[4]=-W*U,$[8]=H,$[1]=F+N*H,$[5]=G-_*H,$[9]=-K*W,$[2]=_-G*H,$[6]=N+F*H,$[10]=X*W}else if(J.order==="YXZ"){let G=W*q,F=W*U,N=H*q,_=H*U;$[0]=G+_*K,$[4]=N*K-F,$[8]=X*H,$[1]=X*U,$[5]=X*q,$[9]=-K,$[2]=F*K-N,$[6]=_+G*K,$[10]=X*W}else if(J.order==="ZXY"){let G=W*q,F=W*U,N=H*q,_=H*U;$[0]=G-_*K,$[4]=-X*U,$[8]=N+F*K,$[1]=F+N*K,$[5]=X*q,$[9]=_-G*K,$[2]=-X*H,$[6]=K,$[10]=X*W}else if(J.order==="ZYX"){let G=X*q,F=X*U,N=K*q,_=K*U;$[0]=W*q,$[4]=N*H-F,$[8]=G*H+_,$[1]=W*U,$[5]=_*H+G,$[9]=F*H-N,$[2]=-H,$[6]=K*W,$[10]=X*W}else if(J.order==="YZX"){let G=X*W,F=X*H,N=K*W,_=K*H;$[0]=W*q,$[4]=_-G*U,$[8]=N*U+F,$[1]=U,$[5]=X*q,$[9]=-K*q,$[2]=-H*q,$[6]=F*U+N,$[10]=G-_*U}else if(J.order==="XZY"){let G=X*W,F=X*H,N=K*W,_=K*H;$[0]=W*q,$[4]=-U,$[8]=H*q,$[1]=G*U+_,$[5]=X*q,$[9]=F*U-N,$[2]=N*U-F,$[6]=K*q,$[10]=_*U+G}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(d5,J,l5)}lookAt(J,$,Q){let Z=this.elements;if(MJ.subVectors(J,$),MJ.lengthSq()===0)MJ.z=1;if(MJ.normalize(),Z$.crossVectors(Q,MJ),Z$.lengthSq()===0){if(Math.abs(Q.z)===1)MJ.x+=0.0001;else MJ.z+=0.0001;MJ.normalize(),Z$.crossVectors(Q,MJ)}return Z$.normalize(),O8.crossVectors(MJ,Z$),Z[0]=Z$.x,Z[4]=O8.x,Z[8]=MJ.x,Z[1]=Z$.y,Z[5]=O8.y,Z[9]=MJ.y,Z[2]=Z$.z,Z[6]=O8.z,Z[10]=MJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,Y=this.elements,X=Q[0],K=Q[4],W=Q[8],H=Q[12],q=Q[1],U=Q[5],G=Q[9],F=Q[13],N=Q[2],_=Q[6],z=Q[10],R=Q[14],V=Q[3],k=Q[7],B=Q[11],A=Q[15],w=Z[0],M=Z[4],g=Z[8],l=Z[12],E=Z[1],L=Z[5],s=Z[9],Y0=Z[13],h=Z[2],y=Z[6],d=Z[10],t=Z[14],c=Z[3],u=Z[7],o=Z[11],T=Z[15];return Y[0]=X*w+K*E+W*h+H*c,Y[4]=X*M+K*L+W*y+H*u,Y[8]=X*g+K*s+W*d+H*o,Y[12]=X*l+K*Y0+W*t+H*T,Y[1]=q*w+U*E+G*h+F*c,Y[5]=q*M+U*L+G*y+F*u,Y[9]=q*g+U*s+G*d+F*o,Y[13]=q*l+U*Y0+G*t+F*T,Y[2]=N*w+_*E+z*h+R*c,Y[6]=N*M+_*L+z*y+R*u,Y[10]=N*g+_*s+z*d+R*o,Y[14]=N*l+_*Y0+z*t+R*T,Y[3]=V*w+k*E+B*h+A*c,Y[7]=V*M+k*L+B*y+A*u,Y[11]=V*g+k*s+B*d+A*o,Y[15]=V*l+k*Y0+B*t+A*T,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],Y=J[12],X=J[1],K=J[5],W=J[9],H=J[13],q=J[2],U=J[6],G=J[10],F=J[14],N=J[3],_=J[7],z=J[11],R=J[15];return N*(+Y*W*U-Z*H*U-Y*K*G+Q*H*G+Z*K*F-Q*W*F)+_*(+$*W*F-$*H*G+Y*X*G-Z*X*F+Z*H*q-Y*W*q)+z*(+$*H*U-$*K*F-Y*X*U+Q*X*F+Y*K*q-Q*H*q)+R*(-Z*K*q-$*W*U+$*K*G+Z*X*U-Q*X*G+Q*W*q)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],Y=J[3],X=J[4],K=J[5],W=J[6],H=J[7],q=J[8],U=J[9],G=J[10],F=J[11],N=J[12],_=J[13],z=J[14],R=J[15],V=U*z*H-_*G*H+_*W*F-K*z*F-U*W*R+K*G*R,k=N*G*H-q*z*H-N*W*F+X*z*F+q*W*R-X*G*R,B=q*_*H-N*U*H+N*K*F-X*_*F-q*K*R+X*U*R,A=N*U*W-q*_*W-N*K*G+X*_*G+q*K*z-X*U*z,w=$*V+Q*k+Z*B+Y*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/w;return J[0]=V*M,J[1]=(_*G*Y-U*z*Y-_*Z*F+Q*z*F+U*Z*R-Q*G*R)*M,J[2]=(K*z*Y-_*W*Y+_*Z*H-Q*z*H-K*Z*R+Q*W*R)*M,J[3]=(U*W*Y-K*G*Y-U*Z*H+Q*G*H+K*Z*F-Q*W*F)*M,J[4]=k*M,J[5]=(q*z*Y-N*G*Y+N*Z*F-$*z*F-q*Z*R+$*G*R)*M,J[6]=(N*W*Y-X*z*Y-N*Z*H+$*z*H+X*Z*R-$*W*R)*M,J[7]=(X*G*Y-q*W*Y+q*Z*H-$*G*H-X*Z*F+$*W*F)*M,J[8]=B*M,J[9]=(N*U*Y-q*_*Y-N*Q*F+$*_*F+q*Q*R-$*U*R)*M,J[10]=(X*_*Y-N*K*Y+N*Q*H-$*_*H-X*Q*R+$*K*R)*M,J[11]=(q*K*Y-X*U*Y-q*Q*H+$*U*H+X*Q*F-$*K*F)*M,J[12]=A*M,J[13]=(q*_*Z-N*U*Z+N*Q*G-$*_*G-q*Q*z+$*U*z)*M,J[14]=(N*K*Z-X*_*Z-N*Q*W+$*_*W+X*Q*z-$*K*z)*M,J[15]=(X*U*Z-q*K*Z+q*Q*W-$*U*W-X*Q*G+$*K*G)*M,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,Y=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=Y,$[1]*=Q,$[5]*=Z,$[9]*=Y,$[2]*=Q,$[6]*=Z,$[10]*=Y,$[3]*=Q,$[7]*=Z,$[11]*=Y,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),Y=1-Q,X=J.x,K=J.y,W=J.z,H=Y*X,q=Y*K;return this.set(H*X+Q,H*K-Z*W,H*W+Z*K,0,H*K+Z*W,q*K+Q,q*W-Z*X,0,H*W-Z*K,q*W+Z*X,Y*W*W+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,Y,X){return this.set(1,Q,Y,0,J,1,X,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,Y=$._x,X=$._y,K=$._z,W=$._w,H=Y+Y,q=X+X,U=K+K,G=Y*H,F=Y*q,N=Y*U,_=X*q,z=X*U,R=K*U,V=W*H,k=W*q,B=W*U,A=Q.x,w=Q.y,M=Q.z;return Z[0]=(1-(_+R))*A,Z[1]=(F+B)*A,Z[2]=(N-k)*A,Z[3]=0,Z[4]=(F-B)*w,Z[5]=(1-(G+R))*w,Z[6]=(z+V)*w,Z[7]=0,Z[8]=(N+k)*M,Z[9]=(z-V)*M,Z[10]=(1-(G+_))*M,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements,Y=k$.set(Z[0],Z[1],Z[2]).length(),X=k$.set(Z[4],Z[5],Z[6]).length(),K=k$.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)Y=-Y;J.x=Z[12],J.y=Z[13],J.z=Z[14],SJ.copy(this);let H=1/Y,q=1/X,U=1/K;return SJ.elements[0]*=H,SJ.elements[1]*=H,SJ.elements[2]*=H,SJ.elements[4]*=q,SJ.elements[5]*=q,SJ.elements[6]*=q,SJ.elements[8]*=U,SJ.elements[9]*=U,SJ.elements[10]*=U,$.setFromRotationMatrix(SJ),Q.x=Y,Q.y=X,Q.z=K,this}makePerspective(J,$,Q,Z,Y,X,K=2000){let W=this.elements,H=2*Y/($-J),q=2*Y/(Q-Z),U=($+J)/($-J),G=(Q+Z)/(Q-Z),F,N;if(K===2000)F=-(X+Y)/(X-Y),N=-2*X*Y/(X-Y);else if(K===2001)F=-X/(X-Y),N=-X*Y/(X-Y);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return W[0]=H,W[4]=0,W[8]=U,W[12]=0,W[1]=0,W[5]=q,W[9]=G,W[13]=0,W[2]=0,W[6]=0,W[10]=F,W[14]=N,W[3]=0,W[7]=0,W[11]=-1,W[15]=0,this}makeOrthographic(J,$,Q,Z,Y,X,K=2000){let W=this.elements,H=1/($-J),q=1/(Q-Z),U=1/(X-Y),G=($+J)*H,F=(Q+Z)*q,N,_;if(K===2000)N=(X+Y)*U,_=-2*U;else if(K===2001)N=Y*U,_=-1*U;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return W[0]=2*H,W[4]=0,W[8]=0,W[12]=-G,W[1]=0,W[5]=2*q,W[9]=0,W[13]=-F,W[2]=0,W[6]=0,W[10]=_,W[14]=-N,W[3]=0,W[7]=0,W[11]=0,W[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var k$=new S,SJ=new e0,d5=new S(0,0,0),l5=new S(1,1,1),Z$=new S,O8=new S,MJ=new S,L6=new e0,w6=new mJ;class n8{constructor(J=0,$=0,Q=0,Z=n8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,Y=Z[0],X=Z[4],K=Z[8],W=Z[1],H=Z[5],q=Z[9],U=Z[2],G=Z[6],F=Z[10];switch($){case"XYZ":if(this._y=Math.asin(RJ(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-q,F),this._z=Math.atan2(-X,Y);else this._x=Math.atan2(G,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-RJ(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(K,F),this._z=Math.atan2(W,H);else this._y=Math.atan2(-U,Y),this._z=0;break;case"ZXY":if(this._x=Math.asin(RJ(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-U,F),this._z=Math.atan2(-X,H);else this._y=0,this._z=Math.atan2(W,Y);break;case"ZYX":if(this._y=Math.asin(-RJ(U,-1,1)),Math.abs(U)<0.9999999)this._x=Math.atan2(G,F),this._z=Math.atan2(W,Y);else this._x=0,this._z=Math.atan2(-X,H);break;case"YZX":if(this._z=Math.asin(RJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(-q,H),this._y=Math.atan2(-U,Y);else this._x=0,this._y=Math.atan2(K,F);break;case"XZY":if(this._z=Math.asin(-RJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(G,H),this._y=Math.atan2(K,Y);else this._x=Math.atan2(-q,F),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return L6.makeRotationFromQuaternion(J),this.setFromRotationMatrix(L6,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return w6.setFromEuler(this),this.setFromQuaternion(w6,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}n8.DEFAULT_ORDER="XYZ";class m7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var c5=0,A6=new S,L$=new mJ,oJ=new e0,z8=new S,r$=new S,n5=new S,s5=new mJ,P6=new S(1,0,0),T6=new S(0,1,0),S6=new S(0,0,1),i5={type:"added"},o5={type:"removed"};class GJ extends eJ{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:c5++}),this.uuid=tJ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=GJ.DEFAULT_UP.clone();let J=new S,$=new n8,Q=new mJ,Z=new S(1,1,1);function Y(){Q.setFromEuler($,!1)}function X(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(Y),Q._onChange(X),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new e0},normalMatrix:{value:new S0}}),this.matrix=new e0,this.matrixWorld=new e0,this.matrixAutoUpdate=GJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=GJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new m7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return L$.setFromAxisAngle(J,$),this.quaternion.multiply(L$),this}rotateOnWorldAxis(J,$){return L$.setFromAxisAngle(J,$),this.quaternion.premultiply(L$),this}rotateX(J){return this.rotateOnAxis(P6,J)}rotateY(J){return this.rotateOnAxis(T6,J)}rotateZ(J){return this.rotateOnAxis(S6,J)}translateOnAxis(J,$){return A6.copy(J).applyQuaternion(this.quaternion),this.position.add(A6.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(P6,J)}translateY(J){return this.translateOnAxis(T6,J)}translateZ(J){return this.translateOnAxis(S6,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(oJ.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)z8.copy(J);else z8.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),r$.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)oJ.lookAt(r$,z8,this.up);else oJ.lookAt(z8,r$,this.up);if(this.quaternion.setFromRotationMatrix(oJ),Z)oJ.extractRotation(Z.matrixWorld),L$.setFromRotationMatrix(oJ),this.quaternion.premultiply(L$.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D){if(J.parent!==null)J.parent.remove(J);J.parent=this,this.children.push(J),J.dispatchEvent(i5)}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(o5);return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),oJ.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),oJ.multiply(J.parent.matrixWorld);return J.applyMatrix4(oJ),this.add(J),J.updateWorldMatrix(!1,!0),this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let X=this.children[Q].getObjectByProperty(J,$);if(X!==void 0)return X}return}getObjectsByProperty(J,$){let Q=[];if(this[J]===$)Q.push(this);for(let Z=0,Y=this.children.length;Z<Y;Z++){let X=this.children[Z].getObjectsByProperty(J,$);if(X.length>0)Q=Q.concat(X)}return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(r$,J,n5),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(r$,s5,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++){let Y=$[Q];if(Y.matrixWorldAutoUpdate===!0||J===!0)Y.updateMatrixWorld(J)}}updateWorldMatrix(J,$){let Q=this.parent;if(J===!0&&Q!==null&&Q.matrixWorldAutoUpdate===!0)Q.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if($===!0){let Z=this.children;for(let Y=0,X=Z.length;Y<X;Y++){let K=Z[Y];if(K.matrixWorldAutoUpdate===!0)K.updateWorldMatrix(!1,!0)}}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}function Y(K,W){if(K[W.uuid]===void 0)K[W.uuid]=W.toJSON(J);return W.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=Y(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let W=K.shapes;if(Array.isArray(W))for(let H=0,q=W.length;H<q;H++){let U=W[H];Y(J.shapes,U)}else Y(J.shapes,W)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Y(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let W=0,H=this.material.length;W<H;W++)K.push(Y(J.materials,this.material[W]));Z.material=K}else Z.material=Y(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let K=0;K<this.children.length;K++)Z.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let K=0;K<this.animations.length;K++){let W=this.animations[K];Z.animations.push(Y(J.animations,W))}}if($){let K=X(J.geometries),W=X(J.materials),H=X(J.textures),q=X(J.images),U=X(J.shapes),G=X(J.skeletons),F=X(J.animations),N=X(J.nodes);if(K.length>0)Q.geometries=K;if(W.length>0)Q.materials=W;if(H.length>0)Q.textures=H;if(q.length>0)Q.images=q;if(U.length>0)Q.shapes=U;if(G.length>0)Q.skeletons=G;if(F.length>0)Q.animations=F;if(N.length>0)Q.nodes=N}return Q.object=Z,Q;function X(K){let W=[];for(let H in K){let q=K[H];delete q.metadata,W.push(q)}return W}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}}GJ.DEFAULT_UP=new S(0,1,0);GJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;GJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jJ=new S,rJ=new S,O7=new S,aJ=new S,w$=new S,A$=new S,j6=new S,z7=new S,I7=new S,M7=new S,I8=!1;class AJ{constructor(J=new S,$=new S,Q=new S){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),jJ.subVectors(J,$),Z.cross(jJ);let Y=Z.lengthSq();if(Y>0)return Z.multiplyScalar(1/Math.sqrt(Y));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,Y){jJ.subVectors(Z,$),rJ.subVectors(Q,$),O7.subVectors(J,$);let X=jJ.dot(jJ),K=jJ.dot(rJ),W=jJ.dot(O7),H=rJ.dot(rJ),q=rJ.dot(O7),U=X*H-K*K;if(U===0)return Y.set(-2,-1,-1);let G=1/U,F=(H*W-K*q)*G,N=(X*q-K*W)*G;return Y.set(1-F-N,N,F)}static containsPoint(J,$,Q,Z){return this.getBarycoord(J,$,Q,Z,aJ),aJ.x>=0&&aJ.y>=0&&aJ.x+aJ.y<=1}static getUV(J,$,Q,Z,Y,X,K,W){if(I8===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),I8=!0;return this.getInterpolation(J,$,Q,Z,Y,X,K,W)}static getInterpolation(J,$,Q,Z,Y,X,K,W){return this.getBarycoord(J,$,Q,Z,aJ),W.setScalar(0),W.addScaledVector(Y,aJ.x),W.addScaledVector(X,aJ.y),W.addScaledVector(K,aJ.z),W}static isFrontFacing(J,$,Q,Z){return jJ.subVectors(Q,$),rJ.subVectors(J,$),jJ.cross(rJ).dot(Z)<0?!0:!1}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return jJ.subVectors(this.c,this.b),rJ.subVectors(this.a,this.b),jJ.cross(rJ).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return AJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return AJ.getBarycoord(J,this.a,this.b,this.c,$)}getUV(J,$,Q,Z,Y){if(I8===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),I8=!0;return AJ.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,Y)}getInterpolation(J,$,Q,Z,Y){return AJ.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,Y)}containsPoint(J){return AJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return AJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,Y=this.c,X,K;w$.subVectors(Z,Q),A$.subVectors(Y,Q),z7.subVectors(J,Q);let W=w$.dot(z7),H=A$.dot(z7);if(W<=0&&H<=0)return $.copy(Q);I7.subVectors(J,Z);let q=w$.dot(I7),U=A$.dot(I7);if(q>=0&&U<=q)return $.copy(Z);let G=W*U-q*H;if(G<=0&&W>=0&&q<=0)return X=W/(W-q),$.copy(Q).addScaledVector(w$,X);M7.subVectors(J,Y);let F=w$.dot(M7),N=A$.dot(M7);if(N>=0&&F<=N)return $.copy(Y);let _=F*H-W*N;if(_<=0&&H>=0&&N<=0)return K=H/(H-N),$.copy(Q).addScaledVector(A$,K);let z=q*N-F*U;if(z<=0&&U-q>=0&&F-N>=0)return j6.subVectors(Y,Z),K=(U-q)/(U-q+(F-N)),$.copy(Z).addScaledVector(j6,K);let R=1/(z+_+G);return X=_*R,K=G*R,$.copy(Q).addScaledVector(w$,X).addScaledVector(A$,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var r5=0;class D$ extends eJ{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:r5++}),this.uuid=tJ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){console.warn(`THREE.Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){console.warn(`THREE.Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,this.name!=="")Q.name=this.name;if(this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity&&this.emissiveIntensity!==1)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.shadowSide!==null)Q.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Q.blending=this.blending;if(this.side!==0)Q.side=this.side;if(this.vertexColors)Q.vertexColors=!0;if(this.opacity<1)Q.opacity=this.opacity;if(this.transparent===!0)Q.transparent=this.transparent;if(Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.stencilWrite=this.stencilWrite,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0)Q.rotation=this.rotation;if(this.polygonOffset===!0)Q.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Q.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Q.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Q.linewidth=this.linewidth;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.dithering===!0)Q.dithering=!0;if(this.alphaTest>0)Q.alphaTest=this.alphaTest;if(this.alphaHash===!0)Q.alphaHash=this.alphaHash;if(this.alphaToCoverage===!0)Q.alphaToCoverage=this.alphaToCoverage;if(this.premultipliedAlpha===!0)Q.premultipliedAlpha=this.premultipliedAlpha;if(this.forceSinglePass===!0)Q.forceSinglePass=this.forceSinglePass;if(this.wireframe===!0)Q.wireframe=this.wireframe;if(this.wireframeLinewidth>1)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Q.flatShading=this.flatShading;if(this.visible===!1)Q.visible=!1;if(this.toneMapped===!1)Q.toneMapped=!1;if(this.fog===!1)Q.fog=!1;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(Y){let X=[];for(let K in Y){let W=Y[K];delete W.metadata,X.push(W)}return X}if($){let Y=Z(J.textures),X=Z(J.images);if(Y.length>0)Q.textures=Y;if(X.length>0)Q.images=X}return Q}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let Y=0;Y!==Z;++Y)Q[Y]=$[Y].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var O9={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fJ={h:0,s:0,l:0},M8={h:0,s:0,l:0};function B7(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class x0{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,CJ.toWorkingColorSpace(this,$),this}setRGB(J,$,Q,Z=CJ.workingColorSpace){return this.r=J,this.g=$,this.b=Q,CJ.toWorkingColorSpace(this,Z),this}setHSL(J,$,Q,Z=CJ.workingColorSpace){if(J=v7(J,1),$=RJ($,0,1),Q=RJ(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let Y=Q<=0.5?Q*(1+$):Q+$-Q*$,X=2*Q-Y;this.r=B7(X,Y,J+0.3333333333333333),this.g=B7(X,Y,J),this.b=B7(X,Y,J-0.3333333333333333)}return CJ.toWorkingColorSpace(this,Z),this}setStyle(J,$="srgb"){function Q(Y){if(Y===void 0)return;if(parseFloat(Y)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let Y,X=Z[1],K=Z[2];switch(X){case"rgb":case"rgba":if(Y=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setRGB(Math.min(255,parseInt(Y[1],10))/255,Math.min(255,parseInt(Y[2],10))/255,Math.min(255,parseInt(Y[3],10))/255,$);if(Y=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setRGB(Math.min(100,parseInt(Y[1],10))/100,Math.min(100,parseInt(Y[2],10))/100,Math.min(100,parseInt(Y[3],10))/100,$);break;case"hsl":case"hsla":if(Y=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Q(Y[4]),this.setHSL(parseFloat(Y[1])/360,parseFloat(Y[2])/100,parseFloat(Y[3])/100,$);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let Y=Z[1],X=Y.length;if(X===3)return this.setRGB(parseInt(Y.charAt(0),16)/15,parseInt(Y.charAt(1),16)/15,parseInt(Y.charAt(2),16)/15,$);else if(X===6)return this.setHex(parseInt(Y,16),$);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=O9[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=m$(J.r),this.g=m$(J.g),this.b=m$(J.b),this}copyLinearToSRGB(J){return this.r=U7(J.r),this.g=U7(J.g),this.b=U7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return CJ.fromWorkingColorSpace(VJ.copy(this),J),Math.round(RJ(VJ.r*255,0,255))*65536+Math.round(RJ(VJ.g*255,0,255))*256+Math.round(RJ(VJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=CJ.workingColorSpace){CJ.fromWorkingColorSpace(VJ.copy(this),$);let{r:Q,g:Z,b:Y}=VJ,X=Math.max(Q,Z,Y),K=Math.min(Q,Z,Y),W,H,q=(K+X)/2;if(K===X)W=0,H=0;else{let U=X-K;switch(H=q<=0.5?U/(X+K):U/(2-X-K),X){case Q:W=(Z-Y)/U+(Z<Y?6:0);break;case Z:W=(Y-Q)/U+2;break;case Y:W=(Q-Z)/U+4;break}W/=6}return J.h=W,J.s=H,J.l=q,J}getRGB(J,$=CJ.workingColorSpace){return CJ.fromWorkingColorSpace(VJ.copy(this),$),J.r=VJ.r,J.g=VJ.g,J.b=VJ.b,J}getStyle(J="srgb"){CJ.fromWorkingColorSpace(VJ.copy(this),J);let{r:$,g:Q,b:Z}=VJ;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(fJ),fJ.h+=J,fJ.s+=$,fJ.l+=Q,this.setHSL(fJ.h,fJ.s,fJ.l),this}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(fJ),J.getHSL(M8);let Q=Y8(fJ.h,M8.h,$),Z=Y8(fJ.s,M8.s,$),Y=Y8(fJ.l,M8.l,$);return this.setHSL(Q,Z,Y),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,Y=J.elements;return this.r=Y[0]*$+Y[3]*Q+Y[6]*Z,this.g=Y[1]*$+Y[4]*Q+Y[7]*Z,this.b=Y[2]*$+Y[5]*Q+Y[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var VJ=new x0;x0.NAMES=O9;class u7 extends D${constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new x0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var QJ=new S,B8=new R0;class kJ{constructor(J,$,Q=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRange={offset:0,count:-1},this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,Y=this.itemSize;Z<Y;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)B8.fromBufferAttribute(this,$),B8.applyMatrix3(J),this.setXY($,B8.x,B8.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)QJ.fromBufferAttribute(this,$),QJ.applyMatrix3(J),this.setXYZ($,QJ.x,QJ.y,QJ.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)QJ.fromBufferAttribute(this,$),QJ.applyMatrix4(J),this.setXYZ($,QJ.x,QJ.y,QJ.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)QJ.fromBufferAttribute(this,$),QJ.applyNormalMatrix(J),this.setXYZ($,QJ.x,QJ.y,QJ.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)QJ.fromBufferAttribute(this,$),QJ.transformDirection(J),this.setXYZ($,QJ.x,QJ.y,QJ.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=gJ(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=m0(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=gJ($,this.array);return $}setX(J,$){if(this.normalized)$=m0($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=gJ($,this.array);return $}setY(J,$){if(this.normalized)$=m0($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=gJ($,this.array);return $}setZ(J,$){if(this.normalized)$=m0($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=gJ($,this.array);return $}setW(J,$){if(this.normalized)$=m0($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=m0($,this.array),Q=m0(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=m0($,this.array),Q=m0(Q,this.array),Z=m0(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,Y){if(J*=this.itemSize,this.normalized)$=m0($,this.array),Q=m0(Q,this.array),Z=m0(Z,this.array),Y=m0(Y,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=Y,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;if(this.updateRange.offset!==0||this.updateRange.count!==-1)J.updateRange=this.updateRange;return J}}class d7 extends kJ{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class l7 extends kJ{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class bJ extends kJ{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var a5=0,wJ=new e0,C7=new GJ,P$=new S,BJ=new d$,a$=new d$,HJ=new S;class uJ extends eJ{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a5++}),this.uuid=tJ(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((E9(J))?l7:d7)(J,1);else this.index=J;return this}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let Y=new S0().getNormalMatrix(J);Q.applyNormalMatrix(Y),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return wJ.makeRotationFromQuaternion(J),this.applyMatrix4(wJ),this}rotateX(J){return wJ.makeRotationX(J),this.applyMatrix4(wJ),this}rotateY(J){return wJ.makeRotationY(J),this.applyMatrix4(wJ),this}rotateZ(J){return wJ.makeRotationZ(J),this.applyMatrix4(wJ),this}translate(J,$,Q){return wJ.makeTranslation(J,$,Q),this.applyMatrix4(wJ),this}scale(J,$,Q){return wJ.makeScale(J,$,Q),this.applyMatrix4(wJ),this}lookAt(J){return C7.lookAt(J),C7.updateMatrix(),this.applyMatrix4(C7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(P$).negate(),this.translate(P$.x,P$.y,P$.z),this}setFromPoints(J){let $=[];for(let Q=0,Z=J.length;Q<Z;Q++){let Y=J[Q];$.push(Y.x,Y.y,Y.z||0)}return this.setAttribute("position",new bJ($,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new d$;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let Y=$[Q];if(BJ.setFromBufferAttribute(Y),this.morphTargetsRelative)HJ.addVectors(this.boundingBox.min,BJ.min),this.boundingBox.expandByPoint(HJ),HJ.addVectors(this.boundingBox.max,BJ.max),this.boundingBox.expandByPoint(HJ);else this.boundingBox.expandByPoint(BJ.min),this.boundingBox.expandByPoint(BJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new l8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(J){let Q=this.boundingSphere.center;if(BJ.setFromBufferAttribute(J),$)for(let Y=0,X=$.length;Y<X;Y++){let K=$[Y];if(a$.setFromBufferAttribute(K),this.morphTargetsRelative)HJ.addVectors(BJ.min,a$.min),BJ.expandByPoint(HJ),HJ.addVectors(BJ.max,a$.max),BJ.expandByPoint(HJ);else BJ.expandByPoint(a$.min),BJ.expandByPoint(a$.max)}BJ.getCenter(Q);let Z=0;for(let Y=0,X=J.count;Y<X;Y++)HJ.fromBufferAttribute(J,Y),Z=Math.max(Z,Q.distanceToSquared(HJ));if($)for(let Y=0,X=$.length;Y<X;Y++){let K=$[Y],W=this.morphTargetsRelative;for(let H=0,q=K.count;H<q;H++){if(HJ.fromBufferAttribute(K,H),W)P$.fromBufferAttribute(J,H),HJ.add(P$);Z=Math.max(Z,Q.distanceToSquared(HJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let Q=J.array,Z=$.position.array,Y=$.normal.array,X=$.uv.array,K=Z.length/3;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new kJ(new Float32Array(4*K),4));let W=this.getAttribute("tangent").array,H=[],q=[];for(let E=0;E<K;E++)H[E]=new S,q[E]=new S;let U=new S,G=new S,F=new S,N=new R0,_=new R0,z=new R0,R=new S,V=new S;function k(E,L,s){U.fromArray(Z,E*3),G.fromArray(Z,L*3),F.fromArray(Z,s*3),N.fromArray(X,E*2),_.fromArray(X,L*2),z.fromArray(X,s*2),G.sub(U),F.sub(U),_.sub(N),z.sub(N);let Y0=1/(_.x*z.y-z.x*_.y);if(!isFinite(Y0))return;R.copy(G).multiplyScalar(z.y).addScaledVector(F,-_.y).multiplyScalar(Y0),V.copy(F).multiplyScalar(_.x).addScaledVector(G,-z.x).multiplyScalar(Y0),H[E].add(R),H[L].add(R),H[s].add(R),q[E].add(V),q[L].add(V),q[s].add(V)}let B=this.groups;if(B.length===0)B=[{start:0,count:Q.length}];for(let E=0,L=B.length;E<L;++E){let s=B[E],Y0=s.start,h=s.count;for(let y=Y0,d=Y0+h;y<d;y+=3)k(Q[y+0],Q[y+1],Q[y+2])}let A=new S,w=new S,M=new S,g=new S;function l(E){M.fromArray(Y,E*3),g.copy(M);let L=H[E];A.copy(L),A.sub(M.multiplyScalar(M.dot(L))).normalize(),w.crossVectors(g,L);let Y0=w.dot(q[E])<0?-1:1;W[E*4]=A.x,W[E*4+1]=A.y,W[E*4+2]=A.z,W[E*4+3]=Y0}for(let E=0,L=B.length;E<L;++E){let s=B[E],Y0=s.start,h=s.count;for(let y=Y0,d=Y0+h;y<d;y+=3)l(Q[y+0]),l(Q[y+1]),l(Q[y+2])}}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0)Q=new kJ(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let G=0,F=Q.count;G<F;G++)Q.setXYZ(G,0,0,0);let Z=new S,Y=new S,X=new S,K=new S,W=new S,H=new S,q=new S,U=new S;if(J)for(let G=0,F=J.count;G<F;G+=3){let N=J.getX(G+0),_=J.getX(G+1),z=J.getX(G+2);Z.fromBufferAttribute($,N),Y.fromBufferAttribute($,_),X.fromBufferAttribute($,z),q.subVectors(X,Y),U.subVectors(Z,Y),q.cross(U),K.fromBufferAttribute(Q,N),W.fromBufferAttribute(Q,_),H.fromBufferAttribute(Q,z),K.add(q),W.add(q),H.add(q),Q.setXYZ(N,K.x,K.y,K.z),Q.setXYZ(_,W.x,W.y,W.z),Q.setXYZ(z,H.x,H.y,H.z)}else for(let G=0,F=$.count;G<F;G+=3)Z.fromBufferAttribute($,G+0),Y.fromBufferAttribute($,G+1),X.fromBufferAttribute($,G+2),q.subVectors(X,Y),U.subVectors(Z,Y),q.cross(U),Q.setXYZ(G+0,q.x,q.y,q.z),Q.setXYZ(G+1,q.x,q.y,q.z),Q.setXYZ(G+2,q.x,q.y,q.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)HJ.fromBufferAttribute(J,$),HJ.normalize(),J.setXYZ($,HJ.x,HJ.y,HJ.z)}toNonIndexed(){function J(K,W){let{array:H,itemSize:q,normalized:U}=K,G=new H.constructor(W.length*q),F=0,N=0;for(let _=0,z=W.length;_<z;_++){if(K.isInterleavedBufferAttribute)F=W[_]*K.data.stride+K.offset;else F=W[_]*q;for(let R=0;R<q;R++)G[N++]=H[F++]}return new kJ(G,q,U)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new uJ,Q=this.index.array,Z=this.attributes;for(let K in Z){let W=Z[K],H=J(W,Q);$.setAttribute(K,H)}let Y=this.morphAttributes;for(let K in Y){let W=[],H=Y[K];for(let q=0,U=H.length;q<U;q++){let G=H[q],F=J(G,Q);W.push(F)}$.morphAttributes[K]=W}$.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;for(let K=0,W=X.length;K<W;K++){let H=X[K];$.addGroup(H.start,H.count,H.materialIndex)}return $}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let W=this.parameters;for(let H in W)if(W[H]!==void 0)J[H]=W[H];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let W in Q){let H=Q[W];J.data.attributes[W]=H.toJSON(J.data)}let Z={},Y=!1;for(let W in this.morphAttributes){let H=this.morphAttributes[W],q=[];for(let U=0,G=H.length;U<G;U++){let F=H[U];q.push(F.toJSON(J.data))}if(q.length>0)Z[W]=q,Y=!0}if(Y)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let X=this.groups;if(X.length>0)J.data.groups=JSON.parse(JSON.stringify(X));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere={center:K.center.toArray(),radius:K.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone($));let Z=J.attributes;for(let H in Z){let q=Z[H];this.setAttribute(H,q.clone($))}let Y=J.morphAttributes;for(let H in Y){let q=[],U=Y[H];for(let G=0,F=U.length;G<F;G++)q.push(U[G].clone($));this.morphAttributes[H]=q}this.morphTargetsRelative=J.morphTargetsRelative;let X=J.groups;for(let H=0,q=X.length;H<q;H++){let U=X[H];this.addGroup(U.start,U.count,U.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let W=J.boundingSphere;if(W!==null)this.boundingSphere=W.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var f6=new e0,U$=new c8,C8=new l8,b6=new S,T$=new S,S$=new S,j$=new S,k7=new S,k8=new S,L8=new R0,w8=new R0,A8=new R0,y6=new S,x6=new S,v6=new S,P8=new S,T8=new S;class p0 extends GJ{constructor(J=new uJ,$=new u7){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Y=0,X=Z.length;Y<X;Y++){let K=Z[Y].name||String(Y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Y}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,Y=Q.morphAttributes.position,X=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let K=this.morphTargetInfluences;if(Y&&K){k8.set(0,0,0);for(let W=0,H=Y.length;W<H;W++){let q=K[W],U=Y[W];if(q===0)continue;if(k7.fromBufferAttribute(U,J),X)k8.addScaledVector(k7,q);else k8.addScaledVector(k7.sub($),q)}$.add(k8)}return $}raycast(J,$){let Q=this.geometry,Z=this.material,Y=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(C8.copy(Q.boundingSphere),C8.applyMatrix4(Y),U$.copy(J.ray).recast(J.near),C8.containsPoint(U$.origin)===!1){if(U$.intersectSphere(C8,b6)===null)return;if(U$.origin.distanceToSquared(b6)>(J.far-J.near)**2)return}if(f6.copy(Y).invert(),U$.copy(J.ray).applyMatrix4(f6),Q.boundingBox!==null){if(U$.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,U$)}_computeIntersections(J,$,Q){let Z,Y=this.geometry,X=this.material,K=Y.index,W=Y.attributes.position,H=Y.attributes.uv,q=Y.attributes.uv1,U=Y.attributes.normal,G=Y.groups,F=Y.drawRange;if(K!==null)if(Array.isArray(X))for(let N=0,_=G.length;N<_;N++){let z=G[N],R=X[z.materialIndex],V=Math.max(z.start,F.start),k=Math.min(K.count,Math.min(z.start+z.count,F.start+F.count));for(let B=V,A=k;B<A;B+=3){let w=K.getX(B),M=K.getX(B+1),g=K.getX(B+2);if(Z=S8(this,R,J,Q,H,q,U,w,M,g),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=z.materialIndex,$.push(Z)}}else{let N=Math.max(0,F.start),_=Math.min(K.count,F.start+F.count);for(let z=N,R=_;z<R;z+=3){let V=K.getX(z),k=K.getX(z+1),B=K.getX(z+2);if(Z=S8(this,X,J,Q,H,q,U,V,k,B),Z)Z.faceIndex=Math.floor(z/3),$.push(Z)}}else if(W!==void 0)if(Array.isArray(X))for(let N=0,_=G.length;N<_;N++){let z=G[N],R=X[z.materialIndex],V=Math.max(z.start,F.start),k=Math.min(W.count,Math.min(z.start+z.count,F.start+F.count));for(let B=V,A=k;B<A;B+=3){let w=B,M=B+1,g=B+2;if(Z=S8(this,R,J,Q,H,q,U,w,M,g),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=z.materialIndex,$.push(Z)}}else{let N=Math.max(0,F.start),_=Math.min(W.count,F.start+F.count);for(let z=N,R=_;z<R;z+=3){let V=z,k=z+1,B=z+2;if(Z=S8(this,X,J,Q,H,q,U,V,k,B),Z)Z.faceIndex=Math.floor(z/3),$.push(Z)}}}}function t5(J,$,Q,Z,Y,X,K,W){let H;if($.side===1)H=Z.intersectTriangle(K,X,Y,!0,W);else H=Z.intersectTriangle(Y,X,K,$.side===0,W);if(H===null)return null;T8.copy(W),T8.applyMatrix4(J.matrixWorld);let q=Q.ray.origin.distanceTo(T8);if(q<Q.near||q>Q.far)return null;return{distance:q,point:T8.clone(),object:J}}function S8(J,$,Q,Z,Y,X,K,W,H,q){J.getVertexPosition(W,T$),J.getVertexPosition(H,S$),J.getVertexPosition(q,j$);let U=t5(J,$,Q,Z,T$,S$,j$,P8);if(U){if(Y)L8.fromBufferAttribute(Y,W),w8.fromBufferAttribute(Y,H),A8.fromBufferAttribute(Y,q),U.uv=AJ.getInterpolation(P8,T$,S$,j$,L8,w8,A8,new R0);if(X)L8.fromBufferAttribute(X,W),w8.fromBufferAttribute(X,H),A8.fromBufferAttribute(X,q),U.uv1=AJ.getInterpolation(P8,T$,S$,j$,L8,w8,A8,new R0),U.uv2=U.uv1;if(K){if(y6.fromBufferAttribute(K,W),x6.fromBufferAttribute(K,H),v6.fromBufferAttribute(K,q),U.normal=AJ.getInterpolation(P8,T$,S$,j$,y6,x6,v6,new S),U.normal.dot(Z.direction)>0)U.normal.multiplyScalar(-1)}let G={a:W,b:H,c:q,normal:new S,materialIndex:0};AJ.getNormal(T$,S$,j$,G.normal),U.face=G}return U}class a0 extends uJ{constructor(J=1,$=1,Q=1,Z=1,Y=1,X=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:Y,depthSegments:X};let K=this;Z=Math.floor(Z),Y=Math.floor(Y),X=Math.floor(X);let W=[],H=[],q=[],U=[],G=0,F=0;N("z","y","x",-1,-1,Q,$,J,X,Y,0),N("z","y","x",1,-1,Q,$,-J,X,Y,1),N("x","z","y",1,1,J,Q,$,Z,X,2),N("x","z","y",1,-1,J,Q,-$,Z,X,3),N("x","y","z",1,-1,J,$,Q,Z,Y,4),N("x","y","z",-1,-1,J,$,-Q,Z,Y,5),this.setIndex(W),this.setAttribute("position",new bJ(H,3)),this.setAttribute("normal",new bJ(q,3)),this.setAttribute("uv",new bJ(U,2));function N(_,z,R,V,k,B,A,w,M,g,l){let E=B/M,L=A/g,s=B/2,Y0=A/2,h=w/2,y=M+1,d=g+1,t=0,c=0,u=new S;for(let o=0;o<d;o++){let T=o*L-Y0;for(let n=0;n<y;n++){let $0=n*E-s;u[_]=$0*V,u[z]=T*k,u[R]=h,H.push(u.x,u.y,u.z),u[_]=0,u[z]=0,u[R]=w>0?1:-1,q.push(u.x,u.y,u.z),U.push(n/M),U.push(1-o/g),t+=1}}for(let o=0;o<g;o++)for(let T=0;T<M;T++){let n=G+T+y*o,$0=G+T+y*(o+1),F0=G+(T+1)+y*(o+1),G0=G+(T+1)+y*o;W.push(n,$0,G0),W.push($0,F0,G0),c+=6}K.addGroup(F,c,l),F+=c,G+=t}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function u$(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let Y=J[Q][Z];if(Y&&(Y.isColor||Y.isMatrix3||Y.isMatrix4||Y.isVector2||Y.isVector3||Y.isVector4||Y.isTexture||Y.isQuaternion))if(Y.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=Y.clone();else if(Array.isArray(Y))$[Q][Z]=Y.slice();else $[Q][Z]=Y}}return $}function OJ(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=u$(J[Q]);for(let Y in Z)$[Y]=Z[Y]}return $}function e5(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function z9(J){if(J.getRenderTarget()===null)return J.outputColorSpace;return"srgb-linear"}var c7={clone:u$,merge:OJ},JQ=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$Q=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yJ extends D${constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JQ,this.fragmentShader=$Q,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=u$(J.uniforms),this.uniformsGroups=e5(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let X=this.uniforms[Z].value;if(X&&X.isTexture)$.uniforms[Z]={type:"t",value:X.toJSON(J).uuid};else if(X&&X.isColor)$.uniforms[Z]={type:"c",value:X.getHex()};else if(X&&X.isVector2)$.uniforms[Z]={type:"v2",value:X.toArray()};else if(X&&X.isVector3)$.uniforms[Z]={type:"v3",value:X.toArray()};else if(X&&X.isVector4)$.uniforms[Z]={type:"v4",value:X.toArray()};else if(X&&X.isMatrix3)$.uniforms[Z]={type:"m3",value:X.toArray()};else if(X&&X.isMatrix4)$.uniforms[Z]={type:"m4",value:X.toArray()};else $.uniforms[Z]={value:X}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}}class n7 extends GJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new e0,this.projectionMatrix=new e0,this.projectionMatrixInverse=new e0,this.coordinateSystem=2000}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set(-$[8],-$[9],-$[10]).normalize()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,$){super.updateWorldMatrix(J,$),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zJ extends n7{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=K8*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(Z8*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return K8*2*Math.atan(Math.tan(Z8*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(J,$,Q,Z,Y,X){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=Y,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(Z8*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,Y=-0.5*Z,X=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:W,fullHeight:H}=X;Y+=X.offsetX*Z/W,$-=X.offsetY*Q/H,Z*=X.width/W,Q*=X.height/H}let K=this.filmOffset;if(K!==0)Y+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(Y,Y+Z,$,$-Q,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}var f$=-90,b$=1;class I9 extends GJ{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null;let Z=new zJ(f$,b$,J,$);Z.layers=this.layers,this.add(Z);let Y=new zJ(f$,b$,J,$);Y.layers=this.layers,this.add(Y);let X=new zJ(f$,b$,J,$);X.layers=this.layers,this.add(X);let K=new zJ(f$,b$,J,$);K.layers=this.layers,this.add(K);let W=new zJ(f$,b$,J,$);W.layers=this.layers,this.add(W);let H=new zJ(f$,b$,J,$);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,Y,X,K,W]=$;for(let H of $)this.remove(H);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),Y.up.set(0,0,-1),Y.lookAt(0,1,0),X.up.set(0,0,1),X.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),W.up.set(0,1,0),W.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),Y.up.set(0,0,1),Y.lookAt(0,1,0),X.up.set(0,0,-1),X.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),W.up.set(0,-1,0),W.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of $)this.add(H),H.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let Q=this.renderTarget;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,Y,X,K,W,H]=this.children,q=J.getRenderTarget(),U=J.xr.enabled;J.xr.enabled=!1;let G=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1,J.setRenderTarget(Q,0),J.render($,Z),J.setRenderTarget(Q,1),J.render($,Y),J.setRenderTarget(Q,2),J.render($,X),J.setRenderTarget(Q,3),J.render($,K),J.setRenderTarget(Q,4),J.render($,W),Q.texture.generateMipmaps=G,J.setRenderTarget(Q,5),J.render($,H),J.setRenderTarget(q),J.xr.enabled=U,Q.texture.needsPMREMUpdate=!0}}class s7 extends qJ{constructor(J,$,Q,Z,Y,X,K,W,H,q){J=J!==void 0?J:[],$=$!==void 0?$:301;super(J,$,Q,Z,Y,X,K,W,H,q);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class M9 extends PJ{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];if($.encoding!==void 0)X8("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),$.colorSpace=$.encoding===3001?"srgb":"";this.texture=new s7(Z,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=$.generateMipmaps!==void 0?$.generateMipmaps:!1,this.texture.minFilter=$.minFilter!==void 0?$.minFilter:1006}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new a0(5,5,5),Y=new yJ({name:"CubemapFromEquirect",uniforms:u$(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:1,blending:0});Y.uniforms.tEquirect.value=$;let X=new p0(Z,Y),K=$.minFilter;if($.minFilter===1008)$.minFilter=1006;return new I9(1,10,this).update(J,X),$.minFilter=K,X.geometry.dispose(),X.material.dispose(),this}clear(J,$,Q,Z){let Y=J.getRenderTarget();for(let X=0;X<6;X++)J.setRenderTarget(this,X),J.clear($,Q,Z);J.setRenderTarget(Y)}}var L7=new S,QQ=new S,ZQ=new S0;class vJ{constructor(J=new S(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=L7.subVectors(Q,$).cross(QQ.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$){let Q=J.delta(L7),Z=this.normal.dot(Q);if(Z===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let Y=-(J.start.dot(this.normal)+this.constant)/Z;if(Y<0||Y>1)return null;return $.copy(J.start).addScaledVector(Q,Y)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||ZQ.getNormalMatrix(J),Z=this.coplanarPoint(L7).applyMatrix4(J),Y=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(Y),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var F$=new l8,j8=new S;class s8{constructor(J=new vJ,$=new vJ,Q=new vJ,Z=new vJ,Y=new vJ,X=new vJ){this.planes=[J,$,Q,Z,Y,X]}set(J,$,Q,Z,Y,X){let K=this.planes;return K[0].copy(J),K[1].copy($),K[2].copy(Q),K[3].copy(Z),K[4].copy(Y),K[5].copy(X),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000){let Q=this.planes,Z=J.elements,Y=Z[0],X=Z[1],K=Z[2],W=Z[3],H=Z[4],q=Z[5],U=Z[6],G=Z[7],F=Z[8],N=Z[9],_=Z[10],z=Z[11],R=Z[12],V=Z[13],k=Z[14],B=Z[15];if(Q[0].setComponents(W-Y,G-H,z-F,B-R).normalize(),Q[1].setComponents(W+Y,G+H,z+F,B+R).normalize(),Q[2].setComponents(W+X,G+q,z+N,B+V).normalize(),Q[3].setComponents(W-X,G-q,z-N,B-V).normalize(),Q[4].setComponents(W-K,G-U,z-_,B-k).normalize(),$===2000)Q[5].setComponents(W+K,G+U,z+_,B+k).normalize();else if($===2001)Q[5].setComponents(K,U,_,k).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();F$.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();F$.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(F$)}intersectsSprite(J){return F$.center.set(0,0,0),F$.radius=0.7071067811865476,F$.applyMatrix4(J.matrixWorld),this.intersectsSphere(F$)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let Y=0;Y<6;Y++)if($[Y].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(j8.x=Z.normal.x>0?J.max.x:J.min.x,j8.y=Z.normal.y>0?J.max.y:J.min.y,j8.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(j8)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function B9(){let J=null,$=!1,Q=null,Z=null;function Y(X,K){Q(X,K),Z=J.requestAnimationFrame(Y)}return{start:function(){if($===!0)return;if(Q===null)return;Z=J.requestAnimationFrame(Y),$=!0},stop:function(){J.cancelAnimationFrame(Z),$=!1},setAnimationLoop:function(X){Q=X},setContext:function(X){J=X}}}function YQ(J,$){let Q=$.isWebGL2,Z=new WeakMap;function Y(q,U){let{array:G,usage:F}=q,N=J.createBuffer();J.bindBuffer(U,N),J.bufferData(U,G,F),q.onUploadCallback();let _;if(G instanceof Float32Array)_=J.FLOAT;else if(G instanceof Uint16Array)if(q.isFloat16BufferAttribute)if(Q)_=J.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=J.UNSIGNED_SHORT;else if(G instanceof Int16Array)_=J.SHORT;else if(G instanceof Uint32Array)_=J.UNSIGNED_INT;else if(G instanceof Int32Array)_=J.INT;else if(G instanceof Int8Array)_=J.BYTE;else if(G instanceof Uint8Array)_=J.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)_=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:N,type:_,bytesPerElement:G.BYTES_PER_ELEMENT,version:q.version}}function X(q,U,G){let{array:F,updateRange:N}=U;if(J.bindBuffer(G,q),N.count===-1)J.bufferSubData(G,0,F);else{if(Q)J.bufferSubData(G,N.offset*F.BYTES_PER_ELEMENT,F,N.offset,N.count);else J.bufferSubData(G,N.offset*F.BYTES_PER_ELEMENT,F.subarray(N.offset,N.offset+N.count));N.count=-1}U.onUploadCallback()}function K(q){if(q.isInterleavedBufferAttribute)q=q.data;return Z.get(q)}function W(q){if(q.isInterleavedBufferAttribute)q=q.data;let U=Z.get(q);if(U)J.deleteBuffer(U.buffer),Z.delete(q)}function H(q,U){if(q.isGLBufferAttribute){let F=Z.get(q);if(!F||F.version<q.version)Z.set(q,{buffer:q.buffer,type:q.type,bytesPerElement:q.elementSize,version:q.version});return}if(q.isInterleavedBufferAttribute)q=q.data;let G=Z.get(q);if(G===void 0)Z.set(q,Y(q,U));else if(G.version<q.version)X(G.buffer,q,U),G.version=q.version}return{get:K,remove:W,update:H}}class i7 extends uJ{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let Y=J/2,X=$/2,K=Math.floor(Q),W=Math.floor(Z),H=K+1,q=W+1,U=J/K,G=$/W,F=[],N=[],_=[],z=[];for(let R=0;R<q;R++){let V=R*G-X;for(let k=0;k<H;k++){let B=k*U-Y;N.push(B,-V,0),_.push(0,0,1),z.push(k/K),z.push(1-R/W)}}for(let R=0;R<W;R++)for(let V=0;V<K;V++){let k=V+H*R,B=V+H*(R+1),A=V+1+H*(R+1),w=V+1+H*R;F.push(k,B,w),F.push(B,A,w)}this.setIndex(F),this.setAttribute("position",new bJ(N,3)),this.setAttribute("normal",new bJ(_,3)),this.setAttribute("uv",new bJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new i7(J.width,J.height,J.widthSegments,J.heightSegments)}}var XQ=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WQ=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KQ=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HQ=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qQ=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,GQ=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UQ=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FQ=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VQ=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RQ=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NQ=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EQ=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DQ=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_Q=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OQ=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zQ=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IQ=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MQ=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BQ=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CQ=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kQ=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LQ=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wQ=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AQ=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PQ=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TQ=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SQ=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jQ=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fQ="gl_FragColor = linearToOutputTexel( gl_FragColor );",bQ=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yQ=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xQ=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vQ=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hQ=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gQ=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pQ=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mQ=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uQ=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dQ=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lQ=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cQ=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nQ=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sQ=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iQ=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oQ=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rQ=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aQ=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tQ=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eQ=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JZ=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$Z=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,QZ=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZZ=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YZ=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XZ=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,WZ=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KZ=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HZ=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qZ=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GZ=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UZ=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FZ=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VZ=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RZ=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NZ=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EZ=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DZ=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_Z=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,OZ=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zZ=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,IZ=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MZ=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BZ=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CZ=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kZ=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LZ=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wZ=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AZ=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PZ=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TZ=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SZ=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jZ=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fZ=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bZ=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yZ=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xZ=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vZ=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hZ=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gZ=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pZ=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mZ=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uZ=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dZ=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lZ=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cZ=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nZ=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sZ=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iZ=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oZ=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rZ=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aZ=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tZ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eZ=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$Y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZY=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XY=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KY=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HY=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qY=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GY=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UY=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RY=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NY=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EY=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DY=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_Y=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OY=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zY=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IY=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MY=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BY=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CY=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kY=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LY=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wY=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AY=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PY=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TY=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jY=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fY=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bY=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L0={alphahash_fragment:XQ,alphahash_pars_fragment:WQ,alphamap_fragment:KQ,alphamap_pars_fragment:HQ,alphatest_fragment:qQ,alphatest_pars_fragment:GQ,aomap_fragment:UQ,aomap_pars_fragment:FQ,begin_vertex:VQ,beginnormal_vertex:RQ,bsdfs:NQ,iridescence_fragment:EQ,bumpmap_pars_fragment:DQ,clipping_planes_fragment:_Q,clipping_planes_pars_fragment:OQ,clipping_planes_pars_vertex:zQ,clipping_planes_vertex:IQ,color_fragment:MQ,color_pars_fragment:BQ,color_pars_vertex:CQ,color_vertex:kQ,common:LQ,cube_uv_reflection_fragment:wQ,defaultnormal_vertex:AQ,displacementmap_pars_vertex:PQ,displacementmap_vertex:TQ,emissivemap_fragment:SQ,emissivemap_pars_fragment:jQ,colorspace_fragment:fQ,colorspace_pars_fragment:bQ,envmap_fragment:yQ,envmap_common_pars_fragment:xQ,envmap_pars_fragment:vQ,envmap_pars_vertex:hQ,envmap_physical_pars_fragment:rQ,envmap_vertex:gQ,fog_vertex:pQ,fog_pars_vertex:mQ,fog_fragment:uQ,fog_pars_fragment:dQ,gradientmap_pars_fragment:lQ,lightmap_fragment:cQ,lightmap_pars_fragment:nQ,lights_lambert_fragment:sQ,lights_lambert_pars_fragment:iQ,lights_pars_begin:oQ,lights_toon_fragment:aQ,lights_toon_pars_fragment:tQ,lights_phong_fragment:eQ,lights_phong_pars_fragment:JZ,lights_physical_fragment:$Z,lights_physical_pars_fragment:QZ,lights_fragment_begin:ZZ,lights_fragment_maps:YZ,lights_fragment_end:XZ,logdepthbuf_fragment:WZ,logdepthbuf_pars_fragment:KZ,logdepthbuf_pars_vertex:HZ,logdepthbuf_vertex:qZ,map_fragment:GZ,map_pars_fragment:UZ,map_particle_fragment:FZ,map_particle_pars_fragment:VZ,metalnessmap_fragment:RZ,metalnessmap_pars_fragment:NZ,morphcolor_vertex:EZ,morphnormal_vertex:DZ,morphtarget_pars_vertex:_Z,morphtarget_vertex:OZ,normal_fragment_begin:zZ,normal_fragment_maps:IZ,normal_pars_fragment:MZ,normal_pars_vertex:BZ,normal_vertex:CZ,normalmap_pars_fragment:kZ,clearcoat_normal_fragment_begin:LZ,clearcoat_normal_fragment_maps:wZ,clearcoat_pars_fragment:AZ,iridescence_pars_fragment:PZ,opaque_fragment:TZ,packing:SZ,premultiplied_alpha_fragment:jZ,project_vertex:fZ,dithering_fragment:bZ,dithering_pars_fragment:yZ,roughnessmap_fragment:xZ,roughnessmap_pars_fragment:vZ,shadowmap_pars_fragment:hZ,shadowmap_pars_vertex:gZ,shadowmap_vertex:pZ,shadowmask_pars_fragment:mZ,skinbase_vertex:uZ,skinning_pars_vertex:dZ,skinning_vertex:lZ,skinnormal_vertex:cZ,specularmap_fragment:nZ,specularmap_pars_fragment:sZ,tonemapping_fragment:iZ,tonemapping_pars_fragment:oZ,transmission_fragment:rZ,transmission_pars_fragment:aZ,uv_pars_fragment:tZ,uv_pars_vertex:eZ,uv_vertex:JY,worldpos_vertex:$Y,background_vert:QY,background_frag:ZY,backgroundCube_vert:YY,backgroundCube_frag:XY,cube_vert:WY,cube_frag:KY,depth_vert:HY,depth_frag:qY,distanceRGBA_vert:GY,distanceRGBA_frag:UY,equirect_vert:FY,equirect_frag:VY,linedashed_vert:RY,linedashed_frag:NY,meshbasic_vert:EY,meshbasic_frag:DY,meshlambert_vert:_Y,meshlambert_frag:OY,meshmatcap_vert:zY,meshmatcap_frag:IY,meshnormal_vert:MY,meshnormal_frag:BY,meshphong_vert:CY,meshphong_frag:kY,meshphysical_vert:LY,meshphysical_frag:wY,meshtoon_vert:AY,meshtoon_frag:PY,points_vert:TY,points_frag:SY,shadow_vert:jY,shadow_frag:fY,sprite_vert:bY,sprite_frag:yY},X0={common:{diffuse:{value:new x0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new S0},alphaMap:{value:null},alphaMapTransform:{value:new S0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new S0}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new S0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new S0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new S0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new S0},normalScale:{value:new R0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new S0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new S0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new S0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new S0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new x0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new x0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new S0},alphaTest:{value:0},uvTransform:{value:new S0}},sprite:{diffuse:{value:new x0(16777215)},opacity:{value:1},center:{value:new R0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new S0},alphaMap:{value:null},alphaMapTransform:{value:new S0},alphaTest:{value:0}}},hJ={basic:{uniforms:OJ([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.fog]),vertexShader:L0.meshbasic_vert,fragmentShader:L0.meshbasic_frag},lambert:{uniforms:OJ([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new x0(0)}}]),vertexShader:L0.meshlambert_vert,fragmentShader:L0.meshlambert_frag},phong:{uniforms:OJ([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new x0(0)},specular:{value:new x0(1118481)},shininess:{value:30}}]),vertexShader:L0.meshphong_vert,fragmentShader:L0.meshphong_frag},standard:{uniforms:OJ([X0.common,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.roughnessmap,X0.metalnessmap,X0.fog,X0.lights,{emissive:{value:new x0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:L0.meshphysical_vert,fragmentShader:L0.meshphysical_frag},toon:{uniforms:OJ([X0.common,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.gradientmap,X0.fog,X0.lights,{emissive:{value:new x0(0)}}]),vertexShader:L0.meshtoon_vert,fragmentShader:L0.meshtoon_frag},matcap:{uniforms:OJ([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,{matcap:{value:null}}]),vertexShader:L0.meshmatcap_vert,fragmentShader:L0.meshmatcap_frag},points:{uniforms:OJ([X0.points,X0.fog]),vertexShader:L0.points_vert,fragmentShader:L0.points_frag},dashed:{uniforms:OJ([X0.common,X0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:L0.linedashed_vert,fragmentShader:L0.linedashed_frag},depth:{uniforms:OJ([X0.common,X0.displacementmap]),vertexShader:L0.depth_vert,fragmentShader:L0.depth_frag},normal:{uniforms:OJ([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,{opacity:{value:1}}]),vertexShader:L0.meshnormal_vert,fragmentShader:L0.meshnormal_frag},sprite:{uniforms:OJ([X0.sprite,X0.fog]),vertexShader:L0.sprite_vert,fragmentShader:L0.sprite_frag},background:{uniforms:{uvTransform:{value:new S0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:L0.background_vert,fragmentShader:L0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:L0.backgroundCube_vert,fragmentShader:L0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:L0.cube_vert,fragmentShader:L0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:L0.equirect_vert,fragmentShader:L0.equirect_frag},distanceRGBA:{uniforms:OJ([X0.common,X0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:L0.distanceRGBA_vert,fragmentShader:L0.distanceRGBA_frag},shadow:{uniforms:OJ([X0.lights,X0.fog,{color:{value:new x0(0)},opacity:{value:1}}]),vertexShader:L0.shadow_vert,fragmentShader:L0.shadow_frag}};hJ.physical={uniforms:OJ([hJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new S0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new S0},clearcoatNormalScale:{value:new R0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new S0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new S0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new S0},sheen:{value:0},sheenColor:{value:new x0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new S0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new S0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new S0},transmissionSamplerSize:{value:new R0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new S0},attenuationDistance:{value:0},attenuationColor:{value:new x0(0)},specularColor:{value:new x0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new S0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new S0},anisotropyVector:{value:new R0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new S0}}]),vertexShader:L0.meshphysical_vert,fragmentShader:L0.meshphysical_frag};var f8={r:0,b:0,g:0};function xY(J,$,Q,Z,Y,X,K){let W=new x0(0),H=X===!0?0:1,q,U,G=null,F=0,N=null;function _(R,V){let k=!1,B=V.isScene===!0?V.background:null;if(B&&B.isTexture)B=(V.backgroundBlurriness>0?Q:$).get(B);if(B===null)z(W,H);else if(B&&B.isColor)z(B,1),k=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")Z.buffers.color.setClear(0,0,0,1,K);else if(A==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||k)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(B&&(B.isCubeTexture||B.mapping===306)){if(U===void 0)U=new p0(new a0(1,1,1),new yJ({name:"BackgroundCubeMaterial",uniforms:u$(hJ.backgroundCube.uniforms),vertexShader:hJ.backgroundCube.vertexShader,fragmentShader:hJ.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(w,M,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Y.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,U.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,U.material.toneMapped=B.colorSpace==="srgb"?!1:!0,G!==B||F!==B.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=B,F=B.version,N=J.toneMapping;U.layers.enableAll(),R.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(q===void 0)q=new p0(new i7(2,2),new yJ({name:"BackgroundMaterial",uniforms:u$(hJ.background.uniforms),vertexShader:hJ.background.vertexShader,fragmentShader:hJ.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),q.geometry.deleteAttribute("normal"),Object.defineProperty(q.material,"map",{get:function(){return this.uniforms.t2D.value}}),Y.update(q);if(q.material.uniforms.t2D.value=B,q.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,q.material.toneMapped=B.colorSpace==="srgb"?!1:!0,B.matrixAutoUpdate===!0)B.updateMatrix();if(q.material.uniforms.uvTransform.value.copy(B.matrix),G!==B||F!==B.version||N!==J.toneMapping)q.material.needsUpdate=!0,G=B,F=B.version,N=J.toneMapping;q.layers.enableAll(),R.unshift(q,q.geometry,q.material,0,0,null)}}function z(R,V){R.getRGB(f8,z9(J)),Z.buffers.color.setClear(f8.r,f8.g,f8.b,V,K)}return{getClearColor:function(){return W},setClearColor:function(R,V=1){W.set(R),H=V,z(W,H)},getClearAlpha:function(){return H},setClearAlpha:function(R){H=R,z(W,H)},render:_}}function vY(J,$,Q,Z){let Y=J.getParameter(J.MAX_VERTEX_ATTRIBS),X=Z.isWebGL2?null:$.get("OES_vertex_array_object"),K=Z.isWebGL2||X!==null,W={},H=R(null),q=H,U=!1;function G(y,d,t,c,u){let o=!1;if(K){let T=z(c,t,d);if(q!==T)q=T,N(q.object);if(o=V(y,c,t,u),o)k(y,c,t,u)}else{let T=d.wireframe===!0;if(q.geometry!==c.id||q.program!==t.id||q.wireframe!==T)q.geometry=c.id,q.program=t.id,q.wireframe=T,o=!0}if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(o||U){if(U=!1,l(y,d,t,c),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function F(){if(Z.isWebGL2)return J.createVertexArray();return X.createVertexArrayOES()}function N(y){if(Z.isWebGL2)return J.bindVertexArray(y);return X.bindVertexArrayOES(y)}function _(y){if(Z.isWebGL2)return J.deleteVertexArray(y);return X.deleteVertexArrayOES(y)}function z(y,d,t){let c=t.wireframe===!0,u=W[y.id];if(u===void 0)u={},W[y.id]=u;let o=u[d.id];if(o===void 0)o={},u[d.id]=o;let T=o[c];if(T===void 0)T=R(F()),o[c]=T;return T}function R(y){let d=[],t=[],c=[];for(let u=0;u<Y;u++)d[u]=0,t[u]=0,c[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:d,enabledAttributes:t,attributeDivisors:c,object:y,attributes:{},index:null}}function V(y,d,t,c){let u=q.attributes,o=d.attributes,T=0,n=t.getAttributes();for(let $0 in n)if(n[$0].location>=0){let G0=u[$0],N0=o[$0];if(N0===void 0){if($0==="instanceMatrix"&&y.instanceMatrix)N0=y.instanceMatrix;if($0==="instanceColor"&&y.instanceColor)N0=y.instanceColor}if(G0===void 0)return!0;if(G0.attribute!==N0)return!0;if(N0&&G0.data!==N0.data)return!0;T++}if(q.attributesNum!==T)return!0;if(q.index!==c)return!0;return!1}function k(y,d,t,c){let u={},o=d.attributes,T=0,n=t.getAttributes();for(let $0 in n)if(n[$0].location>=0){let G0=o[$0];if(G0===void 0){if($0==="instanceMatrix"&&y.instanceMatrix)G0=y.instanceMatrix;if($0==="instanceColor"&&y.instanceColor)G0=y.instanceColor}let N0={};if(N0.attribute=G0,G0&&G0.data)N0.data=G0.data;u[$0]=N0,T++}q.attributes=u,q.attributesNum=T,q.index=c}function B(){let y=q.newAttributes;for(let d=0,t=y.length;d<t;d++)y[d]=0}function A(y){w(y,0)}function w(y,d){let{newAttributes:t,enabledAttributes:c,attributeDivisors:u}=q;if(t[y]=1,c[y]===0)J.enableVertexAttribArray(y),c[y]=1;if(u[y]!==d)(Z.isWebGL2?J:$.get("ANGLE_instanced_arrays"))[Z.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,d),u[y]=d}function M(){let{newAttributes:y,enabledAttributes:d}=q;for(let t=0,c=d.length;t<c;t++)if(d[t]!==y[t])J.disableVertexAttribArray(t),d[t]=0}function g(y,d,t,c,u,o,T){if(T===!0)J.vertexAttribIPointer(y,d,t,u,o);else J.vertexAttribPointer(y,d,t,c,u,o)}function l(y,d,t,c){if(Z.isWebGL2===!1&&(y.isInstancedMesh||c.isInstancedBufferGeometry)){if($.get("ANGLE_instanced_arrays")===null)return}B();let u=c.attributes,o=t.getAttributes(),T=d.defaultAttributeValues;for(let n in o){let $0=o[n];if($0.location>=0){let F0=u[n];if(F0===void 0){if(n==="instanceMatrix"&&y.instanceMatrix)F0=y.instanceMatrix;if(n==="instanceColor"&&y.instanceColor)F0=y.instanceColor}if(F0!==void 0){let{normalized:G0,itemSize:N0}=F0,v0=Q.get(F0);if(v0===void 0)continue;let{buffer:_0,type:A0,bytesPerElement:n0}=v0,UJ=Z.isWebGL2===!0&&(A0===J.INT||A0===J.UNSIGNED_INT||F0.gpuType===1013);if(F0.isInterleavedBufferAttribute){let j=F0.data,i0=j.stride,j0=F0.offset;if(j.isInstancedInterleavedBuffer){for(let E0=0;E0<$0.locationSize;E0++)w($0.location+E0,j.meshPerAttribute);if(y.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=j.meshPerAttribute*j.count}else for(let E0=0;E0<$0.locationSize;E0++)A($0.location+E0);J.bindBuffer(J.ARRAY_BUFFER,_0);for(let E0=0;E0<$0.locationSize;E0++)g($0.location+E0,N0/$0.locationSize,A0,G0,i0*n0,(j0+N0/$0.locationSize*E0)*n0,UJ)}else{if(F0.isInstancedBufferAttribute){for(let j=0;j<$0.locationSize;j++)w($0.location+j,F0.meshPerAttribute);if(y.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=F0.meshPerAttribute*F0.count}else for(let j=0;j<$0.locationSize;j++)A($0.location+j);J.bindBuffer(J.ARRAY_BUFFER,_0);for(let j=0;j<$0.locationSize;j++)g($0.location+j,N0/$0.locationSize,A0,G0,N0*n0,N0/$0.locationSize*j*n0,UJ)}}else if(T!==void 0){let G0=T[n];if(G0!==void 0)switch(G0.length){case 2:J.vertexAttrib2fv($0.location,G0);break;case 3:J.vertexAttrib3fv($0.location,G0);break;case 4:J.vertexAttrib4fv($0.location,G0);break;default:J.vertexAttrib1fv($0.location,G0)}}}}M()}function E(){Y0();for(let y in W){let d=W[y];for(let t in d){let c=d[t];for(let u in c)_(c[u].object),delete c[u];delete d[t]}delete W[y]}}function L(y){if(W[y.id]===void 0)return;let d=W[y.id];for(let t in d){let c=d[t];for(let u in c)_(c[u].object),delete c[u];delete d[t]}delete W[y.id]}function s(y){for(let d in W){let t=W[d];if(t[y.id]===void 0)continue;let c=t[y.id];for(let u in c)_(c[u].object),delete c[u];delete t[y.id]}}function Y0(){if(h(),U=!0,q===H)return;q=H,N(q.object)}function h(){H.geometry=null,H.program=null,H.wireframe=!1}return{setup:G,reset:Y0,resetDefaultState:h,dispose:E,releaseStatesOfGeometry:L,releaseStatesOfProgram:s,initAttributes:B,enableAttribute:A,disableUnusedAttributes:M}}function hY(J,$,Q,Z){let Y=Z.isWebGL2,X;function K(q){X=q}function W(q,U){J.drawArrays(X,q,U),Q.update(U,X,1)}function H(q,U,G){if(G===0)return;let F,N;if(Y)F=J,N="drawArraysInstanced";else if(F=$.get("ANGLE_instanced_arrays"),N="drawArraysInstancedANGLE",F===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}F[N](X,q,U,G),Q.update(U,X,G)}this.setMode=K,this.render=W,this.renderInstances=H}function gY(J,$,Q){let Z;function Y(){if(Z!==void 0)return Z;if($.has("EXT_texture_filter_anisotropic")===!0){let g=$.get("EXT_texture_filter_anisotropic");Z=J.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function X(g){if(g==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let K=typeof WebGL2RenderingContext<"u"&&J.constructor.name==="WebGL2RenderingContext",W=Q.precision!==void 0?Q.precision:"highp",H=X(W);if(H!==W)console.warn("THREE.WebGLRenderer:",W,"not supported, using",H,"instead."),W=H;let q=K||$.has("WEBGL_draw_buffers"),U=Q.logarithmicDepthBuffer===!0,G=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),F=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=J.getParameter(J.MAX_TEXTURE_SIZE),_=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),z=J.getParameter(J.MAX_VERTEX_ATTRIBS),R=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),V=J.getParameter(J.MAX_VARYING_VECTORS),k=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),B=F>0,A=K||$.has("OES_texture_float"),w=B&&A,M=K?J.getParameter(J.MAX_SAMPLES):0;return{isWebGL2:K,drawBuffers:q,getMaxAnisotropy:Y,getMaxPrecision:X,precision:W,logarithmicDepthBuffer:U,maxTextures:G,maxVertexTextures:F,maxTextureSize:N,maxCubemapSize:_,maxAttributes:z,maxVertexUniforms:R,maxVaryings:V,maxFragmentUniforms:k,vertexTextures:B,floatFragmentTextures:A,floatVertexTextures:w,maxSamples:M}}function pY(J){let $=this,Q=null,Z=0,Y=!1,X=!1,K=new vJ,W=new S0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(G,F){let N=G.length!==0||F||Z!==0||Y;return Y=F,Z=G.length,N},this.beginShadows=function(){X=!0,U(null)},this.endShadows=function(){X=!1},this.setGlobalState=function(G,F){Q=U(G,F,0)},this.setState=function(G,F,N){let{clippingPlanes:_,clipIntersection:z,clipShadows:R}=G,V=J.get(G);if(!Y||_===null||_.length===0||X&&!R)if(X)U(null);else q();else{let k=X?0:Z,B=k*4,A=V.clippingState||null;H.value=A,A=U(_,F,B,N);for(let w=0;w!==B;++w)A[w]=Q[w];V.clippingState=A,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=k}};function q(){if(H.value!==Q)H.value=Q,H.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function U(G,F,N,_){let z=G!==null?G.length:0,R=null;if(z!==0){if(R=H.value,_!==!0||R===null){let V=N+z*4,k=F.matrixWorldInverse;if(W.getNormalMatrix(k),R===null||R.length<V)R=new Float32Array(V);for(let B=0,A=N;B!==z;++B,A+=4)K.copy(G[B]).applyMatrix4(k,W),K.normal.toArray(R,A),R[A+3]=K.constant}H.value=R,H.needsUpdate=!0}return $.numPlanes=z,$.numIntersection=0,R}}function mY(J){let $=new WeakMap;function Q(K,W){if(W===303)K.mapping=301;else if(W===304)K.mapping=302;return K}function Z(K){if(K&&K.isTexture&&K.isRenderTargetTexture===!1){let W=K.mapping;if(W===303||W===304)if($.has(K)){let H=$.get(K).texture;return Q(H,K.mapping)}else{let H=K.image;if(H&&H.height>0){let q=new M9(H.height/2);return q.fromEquirectangularTexture(J,K),$.set(K,q),K.addEventListener("dispose",Y),Q(q.texture,K.mapping)}else return null}}return K}function Y(K){let W=K.target;W.removeEventListener("dispose",Y);let H=$.get(W);if(H!==void 0)$.delete(W),H.dispose()}function X(){$=new WeakMap}return{get:Z,dispose:X}}class i8 extends n7{constructor(J=-1,$=1,Q=1,Z=-1,Y=0.1,X=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=Y,this.far=X,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,Y,X){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=Y,this.view.height=X,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,Y=Q-J,X=Q+J,K=Z+$,W=Z-$;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,q=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Y+=H*this.view.offsetX,X=Y+H*this.view.width,K-=q*this.view.offsetY,W=K-q*this.view.height}this.projectionMatrix.makeOrthographic(Y,X,K,W,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}var p$=4,h6=[0.125,0.215,0.35,0.446,0.526,0.582],R$=20,w7=new i8,g6=new x0,A7=null,V$=(1+Math.sqrt(5))/2,y$=1/V$,p6=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,V$,y$),new S(0,V$,-y$),new S(y$,0,V$),new S(-y$,0,V$),new S(V$,y$,0),new S(-V$,y$,0)];class b7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,$=0,Q=0.1,Z=100){A7=this._renderer.getRenderTarget(),this._setSize(256);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,Y),$>0)this._blur(Y,0,0,$);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=d6(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=u6(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(A7),J.scissorTest=!1,b8(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===301||J.mapping===302)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);A7=this._renderer.getRenderTarget();let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},Z=m6(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=m6(J,$,Q);let{_lodMax:Y}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uY(Y)),this._blurMaterial=dY(Y,J,$)}return Z}_compileMaterial(J){let $=new p0(this._lodPlanes[0],J);this._renderer.compile($,w7)}_sceneToCubeUV(J,$,Q,Z){let K=new zJ(90,1,$,Q),W=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],q=this._renderer,U=q.autoClear,G=q.toneMapping;q.getClearColor(g6),q.toneMapping=0,q.autoClear=!1;let F=new u7({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),N=new p0(new a0,F),_=!1,z=J.background;if(z){if(z.isColor)F.color.copy(z),J.background=null,_=!0}else F.color.copy(g6),_=!0;for(let R=0;R<6;R++){let V=R%3;if(V===0)K.up.set(0,W[R],0),K.lookAt(H[R],0,0);else if(V===1)K.up.set(0,0,W[R]),K.lookAt(0,H[R],0);else K.up.set(0,W[R],0),K.lookAt(0,0,H[R]);let k=this._cubeSize;if(b8(Z,V*k,R>2?k:0,k,k),q.setRenderTarget(Z),_)q.render(N,K);q.render(J,K)}N.geometry.dispose(),N.material.dispose(),q.toneMapping=G,q.autoClear=U,J.background=z}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===301||J.mapping===302;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=d6();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=u6();let Y=Z?this._cubemapMaterial:this._equirectMaterial,X=new p0(this._lodPlanes[0],Y),K=Y.uniforms;K.envMap.value=J;let W=this._cubeSize;b8($,0,0,3*W,2*W),Q.setRenderTarget($),Q.render(X,w7)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;for(let Z=1;Z<this._lodPlanes.length;Z++){let Y=Math.sqrt(this._sigmas[Z]*this._sigmas[Z]-this._sigmas[Z-1]*this._sigmas[Z-1]),X=p6[(Z-1)%p6.length];this._blur(J,Z-1,Z,Y,X)}$.autoClear=Q}_blur(J,$,Q,Z,Y){let X=this._pingPongRenderTarget;this._halfBlur(J,X,$,Q,Z,"latitudinal",Y),this._halfBlur(X,J,Q,Q,Z,"longitudinal",Y)}_halfBlur(J,$,Q,Z,Y,X,K){let W=this._renderer,H=this._blurMaterial;if(X!=="latitudinal"&&X!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let q=3,U=new p0(this._lodPlanes[Z],H),G=H.uniforms,F=this._sizeLods[Q]-1,N=isFinite(Y)?Math.PI/(2*F):2*Math.PI/(2*R$-1),_=Y/N,z=isFinite(Y)?1+Math.floor(q*_):R$;if(z>R$)console.warn(`sigmaRadians, ${Y}, is too large and will clip, as it requested ${z} samples when the maximum is set to ${R$}`);let R=[],V=0;for(let M=0;M<R$;++M){let g=M/_,l=Math.exp(-g*g/2);if(R.push(l),M===0)V+=l;else if(M<z)V+=2*l}for(let M=0;M<R.length;M++)R[M]=R[M]/V;if(G.envMap.value=J.texture,G.samples.value=z,G.weights.value=R,G.latitudinal.value=X==="latitudinal",K)G.poleAxis.value=K;let{_lodMax:k}=this;G.dTheta.value=N,G.mipInt.value=k-Q;let B=this._sizeLods[Z],A=3*B*(Z>k-p$?Z-k+p$:0),w=4*(this._cubeSize-B);b8($,A,w,3*B,2*B),W.setRenderTarget($),W.render(U,w7)}}function uY(J){let $=[],Q=[],Z=[],Y=J,X=J-p$+1+h6.length;for(let K=0;K<X;K++){let W=Math.pow(2,Y);Q.push(W);let H=1/W;if(K>J-p$)H=h6[K-J+p$-1];else if(K===0)H=0;Z.push(H);let q=1/(W-2),U=-q,G=1+q,F=[U,U,G,U,G,G,U,U,G,G,U,G],N=6,_=6,z=3,R=2,V=1,k=new Float32Array(z*_*N),B=new Float32Array(R*_*N),A=new Float32Array(V*_*N);for(let M=0;M<N;M++){let g=M%3*2/3-1,l=M>2?0:-1,E=[g,l,0,g+0.6666666666666666,l,0,g+0.6666666666666666,l+1,0,g,l,0,g+0.6666666666666666,l+1,0,g,l+1,0];k.set(E,z*_*M),B.set(F,R*_*M);let L=[M,M,M,M,M,M];A.set(L,V*_*M)}let w=new uJ;if(w.setAttribute("position",new kJ(k,z)),w.setAttribute("uv",new kJ(B,R)),w.setAttribute("faceIndex",new kJ(A,V)),$.push(w),Y>p$)Y--}return{lodPlanes:$,sizeLods:Q,sigmas:Z}}function m6(J,$,Q){let Z=new PJ(J,$,Q);return Z.texture.mapping=306,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function b8(J,$,Q,Z,Y){J.viewport.set($,Q,Z,Y),J.scissor.set($,Q,Z,Y)}function dY(J,$,Q){let Z=new Float32Array(R$),Y=new S(0,1,0);return new yJ({name:"SphericalGaussianBlur",defines:{n:R$,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Y}},vertexShader:o7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function u6(){return new yJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:o7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function d6(){return new yJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:o7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function o7(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lY(J){let $=new WeakMap,Q=null;function Z(W){if(W&&W.isTexture){let H=W.mapping,q=H===303||H===304,U=H===301||H===302;if(q||U)if(W.isRenderTargetTexture&&W.needsPMREMUpdate===!0){W.needsPMREMUpdate=!1;let G=$.get(W);if(Q===null)Q=new b7(J);return G=q?Q.fromEquirectangular(W,G):Q.fromCubemap(W,G),$.set(W,G),G.texture}else if($.has(W))return $.get(W).texture;else{let G=W.image;if(q&&G&&G.height>0||U&&G&&Y(G)){if(Q===null)Q=new b7(J);let F=q?Q.fromEquirectangular(W):Q.fromCubemap(W);return $.set(W,F),W.addEventListener("dispose",X),F.texture}else return null}}return W}function Y(W){let H=0,q=6;for(let U=0;U<q;U++)if(W[U]!==void 0)H++;return H===q}function X(W){let H=W.target;H.removeEventListener("dispose",X);let q=$.get(H);if(q!==void 0)$.delete(H),q.dispose()}function K(){if($=new WeakMap,Q!==null)Q.dispose(),Q=null}return{get:Z,dispose:K}}function cY(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let Y;switch(Z){case"WEBGL_depth_texture":Y=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":Y=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":Y=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":Y=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:Y=J.getExtension(Z)}return $[Z]=Y,Y}return{has:function(Z){return Q(Z)!==null},init:function(Z){if(Z.isWebGL2)Q("EXT_color_buffer_float");else Q("WEBGL_depth_texture"),Q("OES_texture_float"),Q("OES_texture_half_float"),Q("OES_texture_half_float_linear"),Q("OES_standard_derivatives"),Q("OES_element_index_uint"),Q("OES_vertex_array_object"),Q("ANGLE_instanced_arrays");Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture")},get:function(Z){let Y=Q(Z);if(Y===null)console.warn("THREE.WebGLRenderer: "+Z+" extension not supported.");return Y}}}function nY(J,$,Q,Z){let Y={},X=new WeakMap;function K(G){let F=G.target;if(F.index!==null)$.remove(F.index);for(let _ in F.attributes)$.remove(F.attributes[_]);for(let _ in F.morphAttributes){let z=F.morphAttributes[_];for(let R=0,V=z.length;R<V;R++)$.remove(z[R])}F.removeEventListener("dispose",K),delete Y[F.id];let N=X.get(F);if(N)$.remove(N),X.delete(F);if(Z.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0)delete F._maxInstanceCount;Q.memory.geometries--}function W(G,F){if(Y[F.id]===!0)return F;return F.addEventListener("dispose",K),Y[F.id]=!0,Q.memory.geometries++,F}function H(G){let F=G.attributes;for(let _ in F)$.update(F[_],J.ARRAY_BUFFER);let N=G.morphAttributes;for(let _ in N){let z=N[_];for(let R=0,V=z.length;R<V;R++)$.update(z[R],J.ARRAY_BUFFER)}}function q(G){let F=[],N=G.index,_=G.attributes.position,z=0;if(N!==null){let k=N.array;z=N.version;for(let B=0,A=k.length;B<A;B+=3){let w=k[B+0],M=k[B+1],g=k[B+2];F.push(w,M,M,g,g,w)}}else if(_!==void 0){let k=_.array;z=_.version;for(let B=0,A=k.length/3-1;B<A;B+=3){let w=B+0,M=B+1,g=B+2;F.push(w,M,M,g,g,w)}}else return;let R=new((E9(F))?l7:d7)(F,1);R.version=z;let V=X.get(G);if(V)$.remove(V);X.set(G,R)}function U(G){let F=X.get(G);if(F){let N=G.index;if(N!==null){if(F.version<N.version)q(G)}}else q(G);return X.get(G)}return{get:W,update:H,getWireframeAttribute:U}}function sY(J,$,Q,Z){let Y=Z.isWebGL2,X;function K(F){X=F}let W,H;function q(F){W=F.type,H=F.bytesPerElement}function U(F,N){J.drawElements(X,N,W,F*H),Q.update(N,X,1)}function G(F,N,_){if(_===0)return;let z,R;if(Y)z=J,R="drawElementsInstanced";else if(z=$.get("ANGLE_instanced_arrays"),R="drawElementsInstancedANGLE",z===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}z[R](X,N,W,F*H,_),Q.update(N,X,_)}this.setMode=K,this.setIndex=q,this.render=U,this.renderInstances=G}function iY(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(X,K,W){switch(Q.calls++,K){case J.TRIANGLES:Q.triangles+=W*(X/3);break;case J.LINES:Q.lines+=W*(X/2);break;case J.LINE_STRIP:Q.lines+=W*(X-1);break;case J.LINE_LOOP:Q.lines+=W*X;break;case J.POINTS:Q.points+=W*X;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",K);break}}function Y(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:Y,update:Z}}function oY(J,$){return J[0]-$[0]}function rY(J,$){return Math.abs($[1])-Math.abs(J[1])}function aY(J,$,Q){let Z={},Y=new Float32Array(8),X=new WeakMap,K=new s0,W=[];for(let q=0;q<8;q++)W[q]=[q,0];function H(q,U,G){let F=q.morphTargetInfluences;if($.isWebGL2===!0){let N=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_=N!==void 0?N.length:0,z=X.get(U);if(z===void 0||z.count!==_){let y=function(){Y0.dispose(),X.delete(U),U.removeEventListener("dispose",y)};if(z!==void 0)z.texture.dispose();let k=U.morphAttributes.position!==void 0,B=U.morphAttributes.normal!==void 0,A=U.morphAttributes.color!==void 0,w=U.morphAttributes.position||[],M=U.morphAttributes.normal||[],g=U.morphAttributes.color||[],l=0;if(k===!0)l=1;if(B===!0)l=2;if(A===!0)l=3;let E=U.attributes.position.count*l,L=1;if(E>$.maxTextureSize)L=Math.ceil(E/$.maxTextureSize),E=$.maxTextureSize;let s=new Float32Array(E*L*4*_),Y0=new p7(s,E,L,_);Y0.type=1015,Y0.needsUpdate=!0;let h=l*4;for(let d=0;d<_;d++){let t=w[d],c=M[d],u=g[d],o=E*L*4*d;for(let T=0;T<t.count;T++){let n=T*h;if(k===!0)K.fromBufferAttribute(t,T),s[o+n+0]=K.x,s[o+n+1]=K.y,s[o+n+2]=K.z,s[o+n+3]=0;if(B===!0)K.fromBufferAttribute(c,T),s[o+n+4]=K.x,s[o+n+5]=K.y,s[o+n+6]=K.z,s[o+n+7]=0;if(A===!0)K.fromBufferAttribute(u,T),s[o+n+8]=K.x,s[o+n+9]=K.y,s[o+n+10]=K.z,s[o+n+11]=u.itemSize===4?K.w:1}}z={count:_,texture:Y0,size:new R0(E,L)},X.set(U,z),U.addEventListener("dispose",y)}let R=0;for(let k=0;k<F.length;k++)R+=F[k];let V=U.morphTargetsRelative?1:1-R;G.getUniforms().setValue(J,"morphTargetBaseInfluence",V),G.getUniforms().setValue(J,"morphTargetInfluences",F),G.getUniforms().setValue(J,"morphTargetsTexture",z.texture,Q),G.getUniforms().setValue(J,"morphTargetsTextureSize",z.size)}else{let N=F===void 0?0:F.length,_=Z[U.id];if(_===void 0||_.length!==N){_=[];for(let B=0;B<N;B++)_[B]=[B,0];Z[U.id]=_}for(let B=0;B<N;B++){let A=_[B];A[0]=B,A[1]=F[B]}_.sort(rY);for(let B=0;B<8;B++)if(B<N&&_[B][1])W[B][0]=_[B][0],W[B][1]=_[B][1];else W[B][0]=Number.MAX_SAFE_INTEGER,W[B][1]=0;W.sort(oY);let z=U.morphAttributes.position,R=U.morphAttributes.normal,V=0;for(let B=0;B<8;B++){let A=W[B],w=A[0],M=A[1];if(w!==Number.MAX_SAFE_INTEGER&&M){if(z&&U.getAttribute("morphTarget"+B)!==z[w])U.setAttribute("morphTarget"+B,z[w]);if(R&&U.getAttribute("morphNormal"+B)!==R[w])U.setAttribute("morphNormal"+B,R[w]);Y[B]=M,V+=M}else{if(z&&U.hasAttribute("morphTarget"+B)===!0)U.deleteAttribute("morphTarget"+B);if(R&&U.hasAttribute("morphNormal"+B)===!0)U.deleteAttribute("morphNormal"+B);Y[B]=0}}let k=U.morphTargetsRelative?1:1-V;G.getUniforms().setValue(J,"morphTargetBaseInfluence",k),G.getUniforms().setValue(J,"morphTargetInfluences",Y)}}return{update:H}}function tY(J,$,Q,Z){let Y=new WeakMap;function X(H){let q=Z.render.frame,U=H.geometry,G=$.get(H,U);if(Y.get(G)!==q)$.update(G),Y.set(G,q);if(H.isInstancedMesh){if(H.hasEventListener("dispose",W)===!1)H.addEventListener("dispose",W);if(Y.get(H)!==q){if(Q.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)Q.update(H.instanceColor,J.ARRAY_BUFFER);Y.set(H,q)}}if(H.isSkinnedMesh){let F=H.skeleton;if(Y.get(F)!==q)F.update(),Y.set(F,q)}return G}function K(){Y=new WeakMap}function W(H){let q=H.target;if(q.removeEventListener("dispose",W),Q.remove(q.instanceMatrix),q.instanceColor!==null)Q.remove(q.instanceColor)}return{update:X,dispose:K}}var C9=new qJ,k9=new p7,L9=new _9,w9=new s7,l6=[],c6=[],n6=new Float32Array(16),s6=new Float32Array(9),i6=new Float32Array(4);function l$(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let Y=$*Q,X=l6[Y];if(X===void 0)X=new Float32Array(Y),l6[Y]=X;if($!==0){Z.toArray(X,0);for(let K=1,W=0;K!==$;++K)W+=Q,J[K].toArray(X,W)}return X}function XJ(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function WJ(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function o8(J,$){let Q=c6[$];if(Q===void 0)Q=new Int32Array($),c6[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function eY(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function JX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(XJ(Q,$))return;J.uniform2fv(this.addr,$),WJ(Q,$)}}function $X(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(XJ(Q,$))return;J.uniform3fv(this.addr,$),WJ(Q,$)}}function QX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(XJ(Q,$))return;J.uniform4fv(this.addr,$),WJ(Q,$)}}function ZX(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(XJ(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),WJ(Q,$)}else{if(XJ(Q,Z))return;i6.set(Z),J.uniformMatrix2fv(this.addr,!1,i6),WJ(Q,Z)}}function YX(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(XJ(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),WJ(Q,$)}else{if(XJ(Q,Z))return;s6.set(Z),J.uniformMatrix3fv(this.addr,!1,s6),WJ(Q,Z)}}function XX(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(XJ(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),WJ(Q,$)}else{if(XJ(Q,Z))return;n6.set(Z),J.uniformMatrix4fv(this.addr,!1,n6),WJ(Q,Z)}}function WX(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function KX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(XJ(Q,$))return;J.uniform2iv(this.addr,$),WJ(Q,$)}}function HX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(XJ(Q,$))return;J.uniform3iv(this.addr,$),WJ(Q,$)}}function qX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(XJ(Q,$))return;J.uniform4iv(this.addr,$),WJ(Q,$)}}function GX(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function UX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(XJ(Q,$))return;J.uniform2uiv(this.addr,$),WJ(Q,$)}}function FX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(XJ(Q,$))return;J.uniform3uiv(this.addr,$),WJ(Q,$)}}function VX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(XJ(Q,$))return;J.uniform4uiv(this.addr,$),WJ(Q,$)}}function RX(J,$,Q){let Z=this.cache,Y=Q.allocateTextureUnit();if(Z[0]!==Y)J.uniform1i(this.addr,Y),Z[0]=Y;Q.setTexture2D($||C9,Y)}function NX(J,$,Q){let Z=this.cache,Y=Q.allocateTextureUnit();if(Z[0]!==Y)J.uniform1i(this.addr,Y),Z[0]=Y;Q.setTexture3D($||L9,Y)}function EX(J,$,Q){let Z=this.cache,Y=Q.allocateTextureUnit();if(Z[0]!==Y)J.uniform1i(this.addr,Y),Z[0]=Y;Q.setTextureCube($||w9,Y)}function DX(J,$,Q){let Z=this.cache,Y=Q.allocateTextureUnit();if(Z[0]!==Y)J.uniform1i(this.addr,Y),Z[0]=Y;Q.setTexture2DArray($||k9,Y)}function _X(J){switch(J){case 5126:return eY;case 35664:return JX;case 35665:return $X;case 35666:return QX;case 35674:return ZX;case 35675:return YX;case 35676:return XX;case 5124:case 35670:return WX;case 35667:case 35671:return KX;case 35668:case 35672:return HX;case 35669:case 35673:return qX;case 5125:return GX;case 36294:return UX;case 36295:return FX;case 36296:return VX;case 35678:case 36198:case 36298:case 36306:case 35682:return RX;case 35679:case 36299:case 36307:return NX;case 35680:case 36300:case 36308:case 36293:return EX;case 36289:case 36303:case 36311:case 36292:return DX}}function OX(J,$){J.uniform1fv(this.addr,$)}function zX(J,$){let Q=l$($,this.size,2);J.uniform2fv(this.addr,Q)}function IX(J,$){let Q=l$($,this.size,3);J.uniform3fv(this.addr,Q)}function MX(J,$){let Q=l$($,this.size,4);J.uniform4fv(this.addr,Q)}function BX(J,$){let Q=l$($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function CX(J,$){let Q=l$($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function kX(J,$){let Q=l$($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function LX(J,$){J.uniform1iv(this.addr,$)}function wX(J,$){J.uniform2iv(this.addr,$)}function AX(J,$){J.uniform3iv(this.addr,$)}function PX(J,$){J.uniform4iv(this.addr,$)}function TX(J,$){J.uniform1uiv(this.addr,$)}function SX(J,$){J.uniform2uiv(this.addr,$)}function jX(J,$){J.uniform3uiv(this.addr,$)}function fX(J,$){J.uniform4uiv(this.addr,$)}function bX(J,$,Q){let Z=this.cache,Y=$.length,X=o8(Q,Y);if(!XJ(Z,X))J.uniform1iv(this.addr,X),WJ(Z,X);for(let K=0;K!==Y;++K)Q.setTexture2D($[K]||C9,X[K])}function yX(J,$,Q){let Z=this.cache,Y=$.length,X=o8(Q,Y);if(!XJ(Z,X))J.uniform1iv(this.addr,X),WJ(Z,X);for(let K=0;K!==Y;++K)Q.setTexture3D($[K]||L9,X[K])}function xX(J,$,Q){let Z=this.cache,Y=$.length,X=o8(Q,Y);if(!XJ(Z,X))J.uniform1iv(this.addr,X),WJ(Z,X);for(let K=0;K!==Y;++K)Q.setTextureCube($[K]||w9,X[K])}function vX(J,$,Q){let Z=this.cache,Y=$.length,X=o8(Q,Y);if(!XJ(Z,X))J.uniform1iv(this.addr,X),WJ(Z,X);for(let K=0;K!==Y;++K)Q.setTexture2DArray($[K]||k9,X[K])}function hX(J){switch(J){case 5126:return OX;case 35664:return zX;case 35665:return IX;case 35666:return MX;case 35674:return BX;case 35675:return CX;case 35676:return kX;case 5124:case 35670:return LX;case 35667:case 35671:return wX;case 35668:case 35672:return AX;case 35669:case 35673:return PX;case 5125:return TX;case 36294:return SX;case 36295:return jX;case 36296:return fX;case 35678:case 36198:case 36298:case 36306:case 35682:return bX;case 35679:case 36299:case 36307:return yX;case 35680:case 36300:case 36308:case 36293:return xX;case 36289:case 36303:case 36311:case 36292:return vX}}class A9{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.setValue=_X($.type)}}class P9{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.size=$.size,this.setValue=hX($.type)}}class T9{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];K.setValue(J,$[K.id],Q)}}}var P7=/(\w+)(\])?(\[|\.)?/g;function o6(J,$){J.seq.push($),J.map[$.id]=$}function gX(J,$,Q){let Z=J.name,Y=Z.length;P7.lastIndex=0;while(!0){let X=P7.exec(Z),K=P7.lastIndex,W=X[1],H=X[2]==="]",q=X[3];if(H)W=W|0;if(q===void 0||q==="["&&K+2===Y){o6(Q,q===void 0?new A9(W,J,$):new P9(W,J,$));break}else{let G=Q.map[W];if(G===void 0)G=new T9(W),o6(Q,G);Q=G}}}class W8{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let Z=0;Z<Q;++Z){let Y=J.getActiveUniform($,Z),X=J.getUniformLocation($,Y.name);gX(Y,X,this)}}setValue(J,$,Q,Z){let Y=this.map[$];if(Y!==void 0)Y.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let Y=0,X=$.length;Y!==X;++Y){let K=$[Y],W=Q[K.id];if(W.needsUpdate!==!1)K.setValue(J,W.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,Y=J.length;Z!==Y;++Z){let X=J[Z];if(X.id in $)Q.push(X)}return Q}}function r6(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var pX=0;function mX(J,$){let Q=J.split(`
`),Z=[],Y=Math.max($-6,0),X=Math.min($+6,Q.length);for(let K=Y;K<X;K++){let W=K+1;Z.push(`${W===$?">":" "} ${W}: ${Q[K]}`)}return Z.join(`
`)}function uX(J){switch(J){case"srgb-linear":return["Linear","( value )"];case"srgb":return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",J),["Linear","( value )"]}}function a6(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),Y=J.getShaderInfoLog($).trim();if(Z&&Y==="")return"";let X=/ERROR: 0:(\d+)/.exec(Y);if(X){let K=parseInt(X[1]);return Q.toUpperCase()+`

`+Y+`

`+mX(J.getShaderSource($),K)}else return Y}function dX(J,$){let Q=uX($);return"vec4 "+J+"( vec4 value ) { return LinearTo"+Q[0]+Q[1]+"; }"}function lX(J,$){let Q;switch($){case 1:Q="Linear";break;case 2:Q="Reinhard";break;case 3:Q="OptimizedCineon";break;case 4:Q="ACESFilmic";break;case 5:Q="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",$),Q="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}function cX(J){return[J.extensionDerivatives||!!J.envMapCubeUVHeight||J.bumpMap||J.normalMapTangentSpace||J.clearcoatNormalMap||J.flatShading||J.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(J.extensionFragDepth||J.logarithmicDepthBuffer)&&J.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",J.extensionDrawBuffers&&J.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(J.extensionShaderTextureLOD||J.envMap||J.transmission)&&J.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Q8).join(`
`)}function nX(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function sX(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let Y=0;Y<Z;Y++){let X=J.getActiveAttrib($,Y),K=X.name,W=1;if(X.type===J.FLOAT_MAT2)W=2;if(X.type===J.FLOAT_MAT3)W=3;if(X.type===J.FLOAT_MAT4)W=4;Q[K]={type:X.type,location:J.getAttribLocation($,K),locationSize:W}}return Q}function Q8(J){return J!==""}function t6(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function e6(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var iX=/^[ \t]*#include +<([\w\d./]+)>/gm;function y7(J){return J.replace(iX,rX)}var oX=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rX(J,$){let Q=L0[$];if(Q===void 0){let Z=oX.get($);if(Z!==void 0)Q=L0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("Can not resolve #include <"+$+">")}return y7(Q)}var aX=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J9(J){return J.replace(aX,tX)}function tX(J,$,Q,Z){let Y="";for(let X=parseInt($);X<parseInt(Q);X++)Y+=Z.replace(/\[\s*i\s*\]/g,"[ "+X+" ]").replace(/UNROLLED_LOOP_INDEX/g,X);return Y}function $9(J){let $="precision "+J.precision+` float;
precision `+J.precision+" int;";if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}function eX(J){let $="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===1)$="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===2)$="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===3)$="SHADOWMAP_TYPE_VSM";return $}function J4(J){let $="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case 301:case 302:$="ENVMAP_TYPE_CUBE";break;case 306:$="ENVMAP_TYPE_CUBE_UV";break}return $}function $4(J){let $="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case 302:$="ENVMAP_MODE_REFRACTION";break}return $}function Q4(J){let $="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case 0:$="ENVMAP_BLENDING_MULTIPLY";break;case 1:$="ENVMAP_BLENDING_MIX";break;case 2:$="ENVMAP_BLENDING_ADD";break}return $}function Z4(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function Y4(J,$,Q,Z){let Y=J.getContext(),X=Q.defines,K=Q.vertexShader,W=Q.fragmentShader,H=eX(Q),q=J4(Q),U=$4(Q),G=Q4(Q),F=Z4(Q),N=Q.isWebGL2?"":cX(Q),_=nX(X),z=Y.createProgram(),R,V,k=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,_].filter(Q8).join(`
`),R.length>0)R+=`
`;if(V=[N,"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,_].filter(Q8).join(`
`),V.length>0)V+=`
`}else R=[$9(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,_,Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors&&Q.isWebGL2?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0&&Q.isWebGL2?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.useLegacyLights?"#define LEGACY_LIGHTS":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.logarithmicDepthBuffer&&Q.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Q8).join(`
`),V=[N,$9(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,_,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+q:"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+G:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.useLegacyLights?"#define LEGACY_LIGHTS":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Q.logarithmicDepthBuffer&&Q.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==0?"#define TONE_MAPPING":"",Q.toneMapping!==0?L0.tonemapping_pars_fragment:"",Q.toneMapping!==0?lX("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",L0.colorspace_pars_fragment,dX("linearToOutputTexel",Q.outputColorSpace),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(Q8).join(`
`);if(K=y7(K),K=t6(K,Q),K=e6(K,Q),W=y7(W),W=t6(W,Q),W=e6(W,Q),K=J9(K),W=J9(W),Q.isWebGL2&&Q.isRawShaderMaterial!==!0)k=`#version 300 es
`,R=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,V=["#define varying in",Q.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+V;let B=k+R+K,A=k+V+W,w=r6(Y,Y.VERTEX_SHADER,B),M=r6(Y,Y.FRAGMENT_SHADER,A);if(Y.attachShader(z,w),Y.attachShader(z,M),Q.index0AttributeName!==void 0)Y.bindAttribLocation(z,0,Q.index0AttributeName);else if(Q.morphTargets===!0)Y.bindAttribLocation(z,0,"position");if(Y.linkProgram(z),J.debug.checkShaderErrors){let E=Y.getProgramInfoLog(z).trim(),L=Y.getShaderInfoLog(w).trim(),s=Y.getShaderInfoLog(M).trim(),Y0=!0,h=!0;if(Y.getProgramParameter(z,Y.LINK_STATUS)===!1)if(Y0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Y,z,w,M);else{let y=a6(Y,w,"vertex"),d=a6(Y,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+Y.getError()+" - VALIDATE_STATUS "+Y.getProgramParameter(z,Y.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+y+`
`+d)}else if(E!=="")console.warn("THREE.WebGLProgram: Program Info Log:",E);else if(L===""||s==="")h=!1;if(h)this.diagnostics={runnable:Y0,programLog:E,vertexShader:{log:L,prefix:R},fragmentShader:{log:s,prefix:V}}}Y.deleteShader(w),Y.deleteShader(M);let g;this.getUniforms=function(){if(g===void 0)g=new W8(Y,z);return g};let l;return this.getAttributes=function(){if(l===void 0)l=sX(Y,z);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),Y.deleteProgram(z),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=pX++,this.cacheKey=$,this.usedTimes=1,this.program=z,this.vertexShader=w,this.fragmentShader=M,this}var X4=0;class S9{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:$,fragmentShader:Q}=J,Z=this._getShaderStage($),Y=this._getShaderStage(Q),X=this._getShaderCacheForMaterial(J);if(X.has(Z)===!1)X.add(Z),Z.usedTimes++;if(X.has(Y)===!1)X.add(Y),Y.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new j9(J),$.set(J,Q);return Q}}class j9{constructor(J){this.id=X4++,this.code=J,this.usedTimes=0}}function W4(J,$,Q,Z,Y,X,K){let W=new m7,H=new S9,q=[],U=Y.isWebGL2,G=Y.logarithmicDepthBuffer,F=Y.vertexTextures,N=Y.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function z(E){if(E===0)return"uv";return`uv${E}`}function R(E,L,s,Y0,h){let y=Y0.fog,d=h.geometry,t=E.isMeshStandardMaterial?Y0.environment:null,c=(E.isMeshStandardMaterial?Q:$).get(E.envMap||t),u=!!c&&c.mapping===306?c.image.height:null,o=_[E.type];if(E.precision!==null){if(N=Y.getMaxPrecision(E.precision),N!==E.precision)console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",N,"instead.")}let T=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,n=T!==void 0?T.length:0,$0=0;if(d.morphAttributes.position!==void 0)$0=1;if(d.morphAttributes.normal!==void 0)$0=2;if(d.morphAttributes.color!==void 0)$0=3;let F0,G0,N0,v0;if(o){let c0=hJ[o];F0=c0.vertexShader,G0=c0.fragmentShader}else F0=E.vertexShader,G0=E.fragmentShader,H.update(E),N0=H.getVertexShaderID(E),v0=H.getFragmentShaderID(E);let _0=J.getRenderTarget(),A0=h.isInstancedMesh===!0,n0=!!E.map,UJ=!!E.matcap,j=!!c,i0=!!E.aoMap,j0=!!E.lightMap,E0=!!E.bumpMap,z0=!!E.normalMap,l0=!!E.displacementMap,w0=!!E.emissiveMap,b0=!!E.metalnessMap,d0=!!E.roughnessMap,g0=E.anisotropy>0,KJ=E.clearcoat>0,NJ=E.iridescence>0,C=E.sheen>0,D=E.transmission>0,v=g0&&!!E.anisotropyMap,J0=KJ&&!!E.clearcoatMap,r=KJ&&!!E.clearcoatNormalMap,a=KJ&&!!E.clearcoatRoughnessMap,D0=NJ&&!!E.iridescenceMap,Q0=NJ&&!!E.iridescenceThicknessMap,O=C&&!!E.sheenColorMap,i=C&&!!E.sheenRoughnessMap,H0=!!E.specularMap,Z0=!!E.specularColorMap,q0=!!E.specularIntensityMap,U0=D&&!!E.transmissionMap,C0=D&&!!E.thicknessMap,P0=!!E.gradientMap,P=!!E.alphaMap,W0=E.alphaTest>0,x=!!E.alphaHash,e=!!E.extensions,K0=!!d.attributes.uv1,T0=!!d.attributes.uv2,h0=!!d.attributes.uv3,o0=0;if(E.toneMapped){if(_0===null||_0.isXRRenderTarget===!0)o0=J.toneMapping}return{isWebGL2:U,shaderID:o,shaderType:E.type,shaderName:E.name,vertexShader:F0,fragmentShader:G0,defines:E.defines,customVertexShaderID:N0,customFragmentShaderID:v0,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:N,instancing:A0,instancingColor:A0&&h.instanceColor!==null,supportsVertexTextures:F,outputColorSpace:_0===null?J.outputColorSpace:_0.isXRRenderTarget===!0?_0.texture.colorSpace:"srgb-linear",map:n0,matcap:UJ,envMap:j,envMapMode:j&&c.mapping,envMapCubeUVHeight:u,aoMap:i0,lightMap:j0,bumpMap:E0,normalMap:z0,displacementMap:F&&l0,emissiveMap:w0,normalMapObjectSpace:z0&&E.normalMapType===1,normalMapTangentSpace:z0&&E.normalMapType===0,metalnessMap:b0,roughnessMap:d0,anisotropy:g0,anisotropyMap:v,clearcoat:KJ,clearcoatMap:J0,clearcoatNormalMap:r,clearcoatRoughnessMap:a,iridescence:NJ,iridescenceMap:D0,iridescenceThicknessMap:Q0,sheen:C,sheenColorMap:O,sheenRoughnessMap:i,specularMap:H0,specularColorMap:Z0,specularIntensityMap:q0,transmission:D,transmissionMap:U0,thicknessMap:C0,gradientMap:P0,opaque:E.transparent===!1&&E.blending===1,alphaMap:P,alphaTest:W0,alphaHash:x,combine:E.combine,mapUv:n0&&z(E.map.channel),aoMapUv:i0&&z(E.aoMap.channel),lightMapUv:j0&&z(E.lightMap.channel),bumpMapUv:E0&&z(E.bumpMap.channel),normalMapUv:z0&&z(E.normalMap.channel),displacementMapUv:l0&&z(E.displacementMap.channel),emissiveMapUv:w0&&z(E.emissiveMap.channel),metalnessMapUv:b0&&z(E.metalnessMap.channel),roughnessMapUv:d0&&z(E.roughnessMap.channel),anisotropyMapUv:v&&z(E.anisotropyMap.channel),clearcoatMapUv:J0&&z(E.clearcoatMap.channel),clearcoatNormalMapUv:r&&z(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:a&&z(E.clearcoatRoughnessMap.channel),iridescenceMapUv:D0&&z(E.iridescenceMap.channel),iridescenceThicknessMapUv:Q0&&z(E.iridescenceThicknessMap.channel),sheenColorMapUv:O&&z(E.sheenColorMap.channel),sheenRoughnessMapUv:i&&z(E.sheenRoughnessMap.channel),specularMapUv:H0&&z(E.specularMap.channel),specularColorMapUv:Z0&&z(E.specularColorMap.channel),specularIntensityMapUv:q0&&z(E.specularIntensityMap.channel),transmissionMapUv:U0&&z(E.transmissionMap.channel),thicknessMapUv:C0&&z(E.thicknessMap.channel),alphaMapUv:P&&z(E.alphaMap.channel),vertexTangents:!!d.attributes.tangent&&(z0||g0),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,vertexUv1s:K0,vertexUv2s:T0,vertexUv3s:h0,pointsUvs:h.isPoints===!0&&!!d.attributes.uv&&(n0||P),fog:!!y,useFog:E.fog===!0,fogExp2:y&&y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:G,skinning:h.isSkinnedMesh===!0,morphTargets:d.morphAttributes.position!==void 0,morphNormals:d.morphAttributes.normal!==void 0,morphColors:d.morphAttributes.color!==void 0,morphTargetsCount:n,morphTextureStride:$0,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:E.dithering,shadowMapEnabled:J.shadowMap.enabled&&s.length>0,shadowMapType:J.shadowMap.type,toneMapping:o0,useLegacyLights:J._useLegacyLights,decodeVideoTexture:n0&&E.map.isVideoTexture===!0&&E.map.colorSpace==="srgb",premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===2,flipSided:E.side===1,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:e&&E.extensions.derivatives===!0,extensionFragDepth:e&&E.extensions.fragDepth===!0,extensionDrawBuffers:e&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:e&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:U||Z.has("EXT_frag_depth"),rendererExtensionDrawBuffers:U||Z.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:U||Z.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function V(E){let L=[];if(E.shaderID)L.push(E.shaderID);else L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID);if(E.defines!==void 0)for(let s in E.defines)L.push(s),L.push(E.defines[s]);if(E.isRawShaderMaterial===!1)k(L,E),B(L,E),L.push(J.outputColorSpace);return L.push(E.customProgramCacheKey),L.join()}function k(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function B(E,L){if(W.disableAll(),L.isWebGL2)W.enable(0);if(L.supportsVertexTextures)W.enable(1);if(L.instancing)W.enable(2);if(L.instancingColor)W.enable(3);if(L.matcap)W.enable(4);if(L.envMap)W.enable(5);if(L.normalMapObjectSpace)W.enable(6);if(L.normalMapTangentSpace)W.enable(7);if(L.clearcoat)W.enable(8);if(L.iridescence)W.enable(9);if(L.alphaTest)W.enable(10);if(L.vertexColors)W.enable(11);if(L.vertexAlphas)W.enable(12);if(L.vertexUv1s)W.enable(13);if(L.vertexUv2s)W.enable(14);if(L.vertexUv3s)W.enable(15);if(L.vertexTangents)W.enable(16);if(L.anisotropy)W.enable(17);if(E.push(W.mask),W.disableAll(),L.fog)W.enable(0);if(L.useFog)W.enable(1);if(L.flatShading)W.enable(2);if(L.logarithmicDepthBuffer)W.enable(3);if(L.skinning)W.enable(4);if(L.morphTargets)W.enable(5);if(L.morphNormals)W.enable(6);if(L.morphColors)W.enable(7);if(L.premultipliedAlpha)W.enable(8);if(L.shadowMapEnabled)W.enable(9);if(L.useLegacyLights)W.enable(10);if(L.doubleSided)W.enable(11);if(L.flipSided)W.enable(12);if(L.useDepthPacking)W.enable(13);if(L.dithering)W.enable(14);if(L.transmission)W.enable(15);if(L.sheen)W.enable(16);if(L.opaque)W.enable(17);if(L.pointsUvs)W.enable(18);if(L.decodeVideoTexture)W.enable(19);E.push(W.mask)}function A(E){let L=_[E.type],s;if(L){let Y0=hJ[L];s=c7.clone(Y0.uniforms)}else s=E.uniforms;return s}function w(E,L){let s;for(let Y0=0,h=q.length;Y0<h;Y0++){let y=q[Y0];if(y.cacheKey===L){s=y,++s.usedTimes;break}}if(s===void 0)s=new Y4(J,L,E,X),q.push(s);return s}function M(E){if(--E.usedTimes===0){let L=q.indexOf(E);q[L]=q[q.length-1],q.pop(),E.destroy()}}function g(E){H.remove(E)}function l(){H.dispose()}return{getParameters:R,getProgramCacheKey:V,getUniforms:A,acquireProgram:w,releaseProgram:M,releaseShaderCache:g,programs:q,dispose:l}}function K4(){let J=new WeakMap;function $(X){let K=J.get(X);if(K===void 0)K={},J.set(X,K);return K}function Q(X){J.delete(X)}function Z(X,K,W){J.get(X)[K]=W}function Y(){J=new WeakMap}return{get:$,remove:Q,update:Z,dispose:Y}}function H4(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function Q9(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function Z9(){let J=[],$=0,Q=[],Z=[],Y=[];function X(){$=0,Q.length=0,Z.length=0,Y.length=0}function K(G,F,N,_,z,R){let V=J[$];if(V===void 0)V={id:G.id,object:G,geometry:F,material:N,groupOrder:_,renderOrder:G.renderOrder,z,group:R},J[$]=V;else V.id=G.id,V.object=G,V.geometry=F,V.material=N,V.groupOrder=_,V.renderOrder=G.renderOrder,V.z=z,V.group=R;return $++,V}function W(G,F,N,_,z,R){let V=K(G,F,N,_,z,R);if(N.transmission>0)Z.push(V);else if(N.transparent===!0)Y.push(V);else Q.push(V)}function H(G,F,N,_,z,R){let V=K(G,F,N,_,z,R);if(N.transmission>0)Z.unshift(V);else if(N.transparent===!0)Y.unshift(V);else Q.unshift(V)}function q(G,F){if(Q.length>1)Q.sort(G||H4);if(Z.length>1)Z.sort(F||Q9);if(Y.length>1)Y.sort(F||Q9)}function U(){for(let G=$,F=J.length;G<F;G++){let N=J[G];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:Q,transmissive:Z,transparent:Y,init:X,push:W,unshift:H,finish:U,sort:q}}function q4(){let J=new WeakMap;function $(Z,Y){let X=J.get(Z),K;if(X===void 0)K=new Z9,J.set(Z,[K]);else if(Y>=X.length)K=new Z9,X.push(K);else K=X[Y];return K}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function G4(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"DirectionalLight":Q={direction:new S,color:new x0};break;case"SpotLight":Q={position:new S,direction:new S,color:new x0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new S,color:new x0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new S,skyColor:new x0,groundColor:new x0};break;case"RectAreaLight":Q={color:new x0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[$.id]=Q,Q}}}function U4(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"DirectionalLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"SpotLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"PointLight":Q={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var F4=0;function V4(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function R4(J,$){let Q=new G4,Z=U4(),Y={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let U=0;U<9;U++)Y.probe.push(new S);let X=new S,K=new e0,W=new e0;function H(U,G){let F=0,N=0,_=0;for(let s=0;s<9;s++)Y.probe[s].set(0,0,0);let z=0,R=0,V=0,k=0,B=0,A=0,w=0,M=0,g=0,l=0;U.sort(V4);let E=G===!0?Math.PI:1;for(let s=0,Y0=U.length;s<Y0;s++){let h=U[s],y=h.color,d=h.intensity,t=h.distance,c=h.shadow&&h.shadow.map?h.shadow.map.texture:null;if(h.isAmbientLight)F+=y.r*d*E,N+=y.g*d*E,_+=y.b*d*E;else if(h.isLightProbe)for(let u=0;u<9;u++)Y.probe[u].addScaledVector(h.sh.coefficients[u],d);else if(h.isDirectionalLight){let u=Q.get(h);if(u.color.copy(h.color).multiplyScalar(h.intensity*E),h.castShadow){let o=h.shadow,T=Z.get(h);T.shadowBias=o.bias,T.shadowNormalBias=o.normalBias,T.shadowRadius=o.radius,T.shadowMapSize=o.mapSize,Y.directionalShadow[z]=T,Y.directionalShadowMap[z]=c,Y.directionalShadowMatrix[z]=h.shadow.matrix,A++}Y.directional[z]=u,z++}else if(h.isSpotLight){let u=Q.get(h);u.position.setFromMatrixPosition(h.matrixWorld),u.color.copy(y).multiplyScalar(d*E),u.distance=t,u.coneCos=Math.cos(h.angle),u.penumbraCos=Math.cos(h.angle*(1-h.penumbra)),u.decay=h.decay,Y.spot[V]=u;let o=h.shadow;if(h.map){if(Y.spotLightMap[g]=h.map,g++,o.updateMatrices(h),h.castShadow)l++}if(Y.spotLightMatrix[V]=o.matrix,h.castShadow){let T=Z.get(h);T.shadowBias=o.bias,T.shadowNormalBias=o.normalBias,T.shadowRadius=o.radius,T.shadowMapSize=o.mapSize,Y.spotShadow[V]=T,Y.spotShadowMap[V]=c,M++}V++}else if(h.isRectAreaLight){let u=Q.get(h);u.color.copy(y).multiplyScalar(d),u.halfWidth.set(h.width*0.5,0,0),u.halfHeight.set(0,h.height*0.5,0),Y.rectArea[k]=u,k++}else if(h.isPointLight){let u=Q.get(h);if(u.color.copy(h.color).multiplyScalar(h.intensity*E),u.distance=h.distance,u.decay=h.decay,h.castShadow){let o=h.shadow,T=Z.get(h);T.shadowBias=o.bias,T.shadowNormalBias=o.normalBias,T.shadowRadius=o.radius,T.shadowMapSize=o.mapSize,T.shadowCameraNear=o.camera.near,T.shadowCameraFar=o.camera.far,Y.pointShadow[R]=T,Y.pointShadowMap[R]=c,Y.pointShadowMatrix[R]=h.shadow.matrix,w++}Y.point[R]=u,R++}else if(h.isHemisphereLight){let u=Q.get(h);u.skyColor.copy(h.color).multiplyScalar(d*E),u.groundColor.copy(h.groundColor).multiplyScalar(d*E),Y.hemi[B]=u,B++}}if(k>0)if($.isWebGL2)Y.rectAreaLTC1=X0.LTC_FLOAT_1,Y.rectAreaLTC2=X0.LTC_FLOAT_2;else if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=X0.LTC_FLOAT_1,Y.rectAreaLTC2=X0.LTC_FLOAT_2;else if(J.has("OES_texture_half_float_linear")===!0)Y.rectAreaLTC1=X0.LTC_HALF_1,Y.rectAreaLTC2=X0.LTC_HALF_2;else console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");Y.ambient[0]=F,Y.ambient[1]=N,Y.ambient[2]=_;let L=Y.hash;if(L.directionalLength!==z||L.pointLength!==R||L.spotLength!==V||L.rectAreaLength!==k||L.hemiLength!==B||L.numDirectionalShadows!==A||L.numPointShadows!==w||L.numSpotShadows!==M||L.numSpotMaps!==g)Y.directional.length=z,Y.spot.length=V,Y.rectArea.length=k,Y.point.length=R,Y.hemi.length=B,Y.directionalShadow.length=A,Y.directionalShadowMap.length=A,Y.pointShadow.length=w,Y.pointShadowMap.length=w,Y.spotShadow.length=M,Y.spotShadowMap.length=M,Y.directionalShadowMatrix.length=A,Y.pointShadowMatrix.length=w,Y.spotLightMatrix.length=M+g-l,Y.spotLightMap.length=g,Y.numSpotLightShadowsWithMaps=l,L.directionalLength=z,L.pointLength=R,L.spotLength=V,L.rectAreaLength=k,L.hemiLength=B,L.numDirectionalShadows=A,L.numPointShadows=w,L.numSpotShadows=M,L.numSpotMaps=g,Y.version=F4++}function q(U,G){let F=0,N=0,_=0,z=0,R=0,V=G.matrixWorldInverse;for(let k=0,B=U.length;k<B;k++){let A=U[k];if(A.isDirectionalLight){let w=Y.directional[F];w.direction.setFromMatrixPosition(A.matrixWorld),X.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(X),w.direction.transformDirection(V),F++}else if(A.isSpotLight){let w=Y.spot[_];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(V),w.direction.setFromMatrixPosition(A.matrixWorld),X.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(X),w.direction.transformDirection(V),_++}else if(A.isRectAreaLight){let w=Y.rectArea[z];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(V),W.identity(),K.copy(A.matrixWorld),K.premultiply(V),W.extractRotation(K),w.halfWidth.set(A.width*0.5,0,0),w.halfHeight.set(0,A.height*0.5,0),w.halfWidth.applyMatrix4(W),w.halfHeight.applyMatrix4(W),z++}else if(A.isPointLight){let w=Y.point[N];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(V),N++}else if(A.isHemisphereLight){let w=Y.hemi[R];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(V),R++}}}return{setup:H,setupView:q,state:Y}}function Y9(J,$){let Q=new R4(J,$),Z=[],Y=[];function X(){Z.length=0,Y.length=0}function K(G){Z.push(G)}function W(G){Y.push(G)}function H(G){Q.setup(Z,G)}function q(G){Q.setupView(Z,G)}return{init:X,state:{lightsArray:Z,shadowsArray:Y,lights:Q},setupLights:H,setupLightsView:q,pushLight:K,pushShadow:W}}function N4(J,$){let Q=new WeakMap;function Z(X,K=0){let W=Q.get(X),H;if(W===void 0)H=new Y9(J,$),Q.set(X,[H]);else if(K>=W.length)H=new Y9(J,$),W.push(H);else H=W[K];return H}function Y(){Q=new WeakMap}return{get:Z,dispose:Y}}class f9 extends D${constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class b9 extends D${constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}var E4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _4(J,$,Q){let Z=new s8,Y=new R0,X=new R0,K=new s0,W=new f9({depthPacking:3201}),H=new b9,q={},U=Q.maxTextureSize,G={[0]:1,[1]:0,[2]:2},F=new yJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R0},radius:{value:4}},vertexShader:E4,fragmentShader:D4}),N=F.clone();N.defines.HORIZONTAL_PASS=1;let _=new uJ;_.setAttribute("position",new kJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let z=new p0(_,F),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let V=this.type;this.render=function(w,M,g){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(w.length===0)return;let l=J.getRenderTarget(),E=J.getActiveCubeFace(),L=J.getActiveMipmapLevel(),s=J.state;s.setBlending(0),s.buffers.color.setClear(1,1,1,1),s.buffers.depth.setTest(!0),s.setScissorTest(!1);let Y0=V!==3&&this.type===3,h=V===3&&this.type!==3;for(let y=0,d=w.length;y<d;y++){let t=w[y],c=t.shadow;if(c===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(c.autoUpdate===!1&&c.needsUpdate===!1)continue;Y.copy(c.mapSize);let u=c.getFrameExtents();if(Y.multiply(u),X.copy(c.mapSize),Y.x>U||Y.y>U){if(Y.x>U)X.x=Math.floor(U/u.x),Y.x=X.x*u.x,c.mapSize.x=X.x;if(Y.y>U)X.y=Math.floor(U/u.y),Y.y=X.y*u.y,c.mapSize.y=X.y}if(c.map===null||Y0===!0||h===!0){let T=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(c.map!==null)c.map.dispose();c.map=new PJ(Y.x,Y.y,T),c.map.texture.name=t.name+".shadowMap",c.camera.updateProjectionMatrix()}J.setRenderTarget(c.map),J.clear();let o=c.getViewportCount();for(let T=0;T<o;T++){let n=c.getViewport(T);K.set(X.x*n.x,X.y*n.y,X.x*n.z,X.y*n.w),s.viewport(K),c.updateMatrices(t,T),Z=c.getFrustum(),A(M,g,c.camera,t,this.type)}if(c.isPointLightShadow!==!0&&this.type===3)k(c,g);c.needsUpdate=!1}V=this.type,R.needsUpdate=!1,J.setRenderTarget(l,E,L)};function k(w,M){let g=$.update(z);if(F.defines.VSM_SAMPLES!==w.blurSamples)F.defines.VSM_SAMPLES=w.blurSamples,N.defines.VSM_SAMPLES=w.blurSamples,F.needsUpdate=!0,N.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new PJ(Y.x,Y.y);F.uniforms.shadow_pass.value=w.map.texture,F.uniforms.resolution.value=w.mapSize,F.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(M,null,g,F,z,null),N.uniforms.shadow_pass.value=w.mapPass.texture,N.uniforms.resolution.value=w.mapSize,N.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(M,null,g,N,z,null)}function B(w,M,g,l){let E=null,L=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)E=L;else if(E=g.isPointLight===!0?H:W,J.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let s=E.uuid,Y0=M.uuid,h=q[s];if(h===void 0)h={},q[s]=h;let y=h[Y0];if(y===void 0)y=E.clone(),h[Y0]=y;E=y}if(E.visible=M.visible,E.wireframe=M.wireframe,l===3)E.side=M.shadowSide!==null?M.shadowSide:M.side;else E.side=M.shadowSide!==null?M.shadowSide:G[M.side];if(E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,g.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let s=J.properties.get(E);s.light=g}return E}function A(w,M,g,l,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&E===3)&&(!w.frustumCulled||Z.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);let Y0=$.update(w),h=w.material;if(Array.isArray(h)){let y=Y0.groups;for(let d=0,t=y.length;d<t;d++){let c=y[d],u=h[c.materialIndex];if(u&&u.visible){let o=B(w,u,l,E);J.renderBufferDirect(g,null,Y0,o,w,c)}}}else if(h.visible){let y=B(w,h,l,E);J.renderBufferDirect(g,null,Y0,y,w,null)}}}let s=w.children;for(let Y0=0,h=s.length;Y0<h;Y0++)A(s[Y0],M,g,l,E)}}function O4(J,$,Q){let Z=Q.isWebGL2;function Y(){let P=!1,W0=new s0,x=null,e=new s0(0,0,0,0);return{setMask:function(K0){if(x!==K0&&!P)J.colorMask(K0,K0,K0,K0),x=K0},setLocked:function(K0){P=K0},setClear:function(K0,T0,h0,o0,lJ){if(lJ===!0)K0*=o0,T0*=o0,h0*=o0;if(W0.set(K0,T0,h0,o0),e.equals(W0)===!1)J.clearColor(K0,T0,h0,o0),e.copy(W0)},reset:function(){P=!1,x=null,e.set(-1,0,0,0)}}}function X(){let P=!1,W0=null,x=null,e=null;return{setTest:function(K0){if(K0)_0(J.DEPTH_TEST);else A0(J.DEPTH_TEST)},setMask:function(K0){if(W0!==K0&&!P)J.depthMask(K0),W0=K0},setFunc:function(K0){if(x!==K0){switch(K0){case 0:J.depthFunc(J.NEVER);break;case 1:J.depthFunc(J.ALWAYS);break;case 2:J.depthFunc(J.LESS);break;case 3:J.depthFunc(J.LEQUAL);break;case 4:J.depthFunc(J.EQUAL);break;case 5:J.depthFunc(J.GEQUAL);break;case 6:J.depthFunc(J.GREATER);break;case 7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}x=K0}},setLocked:function(K0){P=K0},setClear:function(K0){if(e!==K0)J.clearDepth(K0),e=K0},reset:function(){P=!1,W0=null,x=null,e=null}}}function K(){let P=!1,W0=null,x=null,e=null,K0=null,T0=null,h0=null,o0=null,lJ=null;return{setTest:function(c0){if(!P)if(c0)_0(J.STENCIL_TEST);else A0(J.STENCIL_TEST)},setMask:function(c0){if(W0!==c0&&!P)J.stencilMask(c0),W0=c0},setFunc:function(c0,EJ,xJ){if(x!==c0||e!==EJ||K0!==xJ)J.stencilFunc(c0,EJ,xJ),x=c0,e=EJ,K0=xJ},setOp:function(c0,EJ,xJ){if(T0!==c0||h0!==EJ||o0!==xJ)J.stencilOp(c0,EJ,xJ),T0=c0,h0=EJ,o0=xJ},setLocked:function(c0){P=c0},setClear:function(c0){if(lJ!==c0)J.clearStencil(c0),lJ=c0},reset:function(){P=!1,W0=null,x=null,e=null,K0=null,T0=null,h0=null,o0=null,lJ=null}}}let W=new Y,H=new X,q=new K,U=new WeakMap,G=new WeakMap,F={},N={},_=new WeakMap,z=[],R=null,V=!1,k=null,B=null,A=null,w=null,M=null,g=null,l=null,E=!1,L=null,s=null,Y0=null,h=null,y=null,d=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),t=!1,c=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)c=parseFloat(/^WebGL (\d)/.exec(u)[1]),t=c>=1;else if(u.indexOf("OpenGL ES")!==-1)c=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),t=c>=2;let o=null,T={},n=J.getParameter(J.SCISSOR_BOX),$0=J.getParameter(J.VIEWPORT),F0=new s0().fromArray(n),G0=new s0().fromArray($0);function N0(P,W0,x,e){let K0=new Uint8Array(4),T0=J.createTexture();J.bindTexture(P,T0),J.texParameteri(P,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(P,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let h0=0;h0<x;h0++)if(Z&&(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY))J.texImage3D(W0,0,J.RGBA,1,1,e,0,J.RGBA,J.UNSIGNED_BYTE,K0);else J.texImage2D(W0+h0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,K0);return T0}let v0={};if(v0[J.TEXTURE_2D]=N0(J.TEXTURE_2D,J.TEXTURE_2D,1),v0[J.TEXTURE_CUBE_MAP]=N0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z)v0[J.TEXTURE_2D_ARRAY]=N0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),v0[J.TEXTURE_3D]=N0(J.TEXTURE_3D,J.TEXTURE_3D,1,1);W.setClear(0,0,0,1),H.setClear(1),q.setClear(0),_0(J.DEPTH_TEST),H.setFunc(3),l0(!1),w0(1),_0(J.CULL_FACE),E0(0);function _0(P){if(F[P]!==!0)J.enable(P),F[P]=!0}function A0(P){if(F[P]!==!1)J.disable(P),F[P]=!1}function n0(P,W0){if(N[P]!==W0){if(J.bindFramebuffer(P,W0),N[P]=W0,Z){if(P===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=W0;if(P===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=W0}return!0}return!1}function UJ(P,W0){let x=z,e=!1;if(P){if(x=_.get(W0),x===void 0)x=[],_.set(W0,x);if(P.isWebGLMultipleRenderTargets){let K0=P.texture;if(x.length!==K0.length||x[0]!==J.COLOR_ATTACHMENT0){for(let T0=0,h0=K0.length;T0<h0;T0++)x[T0]=J.COLOR_ATTACHMENT0+T0;x.length=K0.length,e=!0}}else if(x[0]!==J.COLOR_ATTACHMENT0)x[0]=J.COLOR_ATTACHMENT0,e=!0}else if(x[0]!==J.BACK)x[0]=J.BACK,e=!0;if(e)if(Q.isWebGL2)J.drawBuffers(x);else $.get("WEBGL_draw_buffers").drawBuffersWEBGL(x)}function j(P){if(R!==P)return J.useProgram(P),R=P,!0;return!1}let i0={[100]:J.FUNC_ADD,[101]:J.FUNC_SUBTRACT,[102]:J.FUNC_REVERSE_SUBTRACT};if(Z)i0[103]=J.MIN,i0[104]=J.MAX;else{let P=$.get("EXT_blend_minmax");if(P!==null)i0[103]=P.MIN_EXT,i0[104]=P.MAX_EXT}let j0={[200]:J.ZERO,[201]:J.ONE,[202]:J.SRC_COLOR,[204]:J.SRC_ALPHA,[210]:J.SRC_ALPHA_SATURATE,[208]:J.DST_COLOR,[206]:J.DST_ALPHA,[203]:J.ONE_MINUS_SRC_COLOR,[205]:J.ONE_MINUS_SRC_ALPHA,[209]:J.ONE_MINUS_DST_COLOR,[207]:J.ONE_MINUS_DST_ALPHA};function E0(P,W0,x,e,K0,T0,h0,o0){if(P===0){if(V===!0)A0(J.BLEND),V=!1;return}if(V===!1)_0(J.BLEND),V=!0;if(P!==5){if(P!==k||o0!==E){if(B!==100||M!==100)J.blendEquation(J.FUNC_ADD),B=100,M=100;if(o0)switch(P){case 1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.ONE,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case 2:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case 3:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case 4:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,w=null,g=null,l=null,k=P,E=o0}return}if(K0=K0||W0,T0=T0||x,h0=h0||e,W0!==B||K0!==M)J.blendEquationSeparate(i0[W0],i0[K0]),B=W0,M=K0;if(x!==A||e!==w||T0!==g||h0!==l)J.blendFuncSeparate(j0[x],j0[e],j0[T0],j0[h0]),A=x,w=e,g=T0,l=h0;k=P,E=!1}function z0(P,W0){P.side===2?A0(J.CULL_FACE):_0(J.CULL_FACE);let x=P.side===1;if(W0)x=!x;l0(x),P.blending===1&&P.transparent===!1?E0(0):E0(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),H.setFunc(P.depthFunc),H.setTest(P.depthTest),H.setMask(P.depthWrite),W.setMask(P.colorWrite);let e=P.stencilWrite;if(q.setTest(e),e)q.setMask(P.stencilWriteMask),q.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),q.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);d0(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_0(J.SAMPLE_ALPHA_TO_COVERAGE):A0(J.SAMPLE_ALPHA_TO_COVERAGE)}function l0(P){if(L!==P){if(P)J.frontFace(J.CW);else J.frontFace(J.CCW);L=P}}function w0(P){if(P!==0){if(_0(J.CULL_FACE),P!==s)if(P===1)J.cullFace(J.BACK);else if(P===2)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else A0(J.CULL_FACE);s=P}function b0(P){if(P!==Y0){if(t)J.lineWidth(P);Y0=P}}function d0(P,W0,x){if(P){if(_0(J.POLYGON_OFFSET_FILL),h!==W0||y!==x)J.polygonOffset(W0,x),h=W0,y=x}else A0(J.POLYGON_OFFSET_FILL)}function g0(P){if(P)_0(J.SCISSOR_TEST);else A0(J.SCISSOR_TEST)}function KJ(P){if(P===void 0)P=J.TEXTURE0+d-1;if(o!==P)J.activeTexture(P),o=P}function NJ(P,W0,x){if(x===void 0)if(o===null)x=J.TEXTURE0+d-1;else x=o;let e=T[x];if(e===void 0)e={type:void 0,texture:void 0},T[x]=e;if(e.type!==P||e.texture!==W0){if(o!==x)J.activeTexture(x),o=x;J.bindTexture(P,W0||v0[P]),e.type=P,e.texture=W0}}function C(){let P=T[o];if(P!==void 0&&P.type!==void 0)J.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function D(){try{J.compressedTexImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function v(){try{J.compressedTexImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J0(){try{J.texSubImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function r(){try{J.texSubImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function a(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function D0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q0(){try{J.texStorage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{J.texStorage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function i(){try{J.texImage2D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H0(){try{J.texImage3D.apply(J,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z0(P){if(F0.equals(P)===!1)J.scissor(P.x,P.y,P.z,P.w),F0.copy(P)}function q0(P){if(G0.equals(P)===!1)J.viewport(P.x,P.y,P.z,P.w),G0.copy(P)}function U0(P,W0){let x=G.get(W0);if(x===void 0)x=new WeakMap,G.set(W0,x);let e=x.get(P);if(e===void 0)e=J.getUniformBlockIndex(W0,P.name),x.set(P,e)}function C0(P,W0){let e=G.get(W0).get(P);if(U.get(W0)!==e)J.uniformBlockBinding(W0,e,P.__bindingPointIndex),U.set(W0,e)}function P0(){if(J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),Z===!0)J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null);J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),F={},o=null,T={},N={},_=new WeakMap,z=[],R=null,V=!1,k=null,B=null,A=null,w=null,M=null,g=null,l=null,E=!1,L=null,s=null,Y0=null,h=null,y=null,F0.set(0,0,J.canvas.width,J.canvas.height),G0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),H.reset(),q.reset()}return{buffers:{color:W,depth:H,stencil:q},enable:_0,disable:A0,bindFramebuffer:n0,drawBuffers:UJ,useProgram:j,setBlending:E0,setMaterial:z0,setFlipSided:l0,setCullFace:w0,setLineWidth:b0,setPolygonOffset:d0,setScissorTest:g0,activeTexture:KJ,bindTexture:NJ,unbindTexture:C,compressedTexImage2D:D,compressedTexImage3D:v,texImage2D:i,texImage3D:H0,updateUBOMapping:U0,uniformBlockBinding:C0,texStorage2D:Q0,texStorage3D:O,texSubImage2D:J0,texSubImage3D:r,compressedTexSubImage2D:a,compressedTexSubImage3D:D0,scissor:Z0,viewport:q0,reset:P0}}function z4(J,$,Q,Z,Y,X,K){let{isWebGL2:W,maxTextures:H,maxCubemapSize:q,maxTextureSize:U,maxSamples:G}=Y,F=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,N=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,z,R=new WeakMap,V=!1;try{V=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function k(C,D){return V?new OffscreenCanvas(C,D):m8("canvas")}function B(C,D,v,J0){let r=1;if(C.width>J0||C.height>J0)r=J0/Math.max(C.width,C.height);if(r<1||D===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let a=D?p8:Math.floor,D0=a(r*C.width),Q0=a(r*C.height);if(z===void 0)z=k(D0,Q0);let O=v?k(D0,Q0):z;return O.width=D0,O.height=Q0,O.getContext("2d").drawImage(C,0,0,D0,Q0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+D0+"x"+Q0+")."),O}else{if("data"in C)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+").");return C}return C}function A(C){return f7(C.width)&&f7(C.height)}function w(C){if(W)return!1;return C.wrapS!==1001||C.wrapT!==1001||C.minFilter!==1003&&C.minFilter!==1006}function M(C,D){return C.generateMipmaps&&D&&C.minFilter!==1003&&C.minFilter!==1006}function g(C){J.generateMipmap(C)}function l(C,D,v,J0,r=!1){if(W===!1)return D;if(C!==null){if(J[C]!==void 0)return J[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let a=D;if(D===J.RED){if(v===J.FLOAT)a=J.R32F;if(v===J.HALF_FLOAT)a=J.R16F;if(v===J.UNSIGNED_BYTE)a=J.R8}if(D===J.RED_INTEGER){if(v===J.UNSIGNED_BYTE)a=J.R8UI;if(v===J.UNSIGNED_SHORT)a=J.R16UI;if(v===J.UNSIGNED_INT)a=J.R32UI;if(v===J.BYTE)a=J.R8I;if(v===J.SHORT)a=J.R16I;if(v===J.INT)a=J.R32I}if(D===J.RG){if(v===J.FLOAT)a=J.RG32F;if(v===J.HALF_FLOAT)a=J.RG16F;if(v===J.UNSIGNED_BYTE)a=J.RG8}if(D===J.RGBA){if(v===J.FLOAT)a=J.RGBA32F;if(v===J.HALF_FLOAT)a=J.RGBA16F;if(v===J.UNSIGNED_BYTE)a=J0==="srgb"&&r===!1?J.SRGB8_ALPHA8:J.RGBA8;if(v===J.UNSIGNED_SHORT_4_4_4_4)a=J.RGBA4;if(v===J.UNSIGNED_SHORT_5_5_5_1)a=J.RGB5_A1}if(a===J.R16F||a===J.R32F||a===J.RG16F||a===J.RG32F||a===J.RGBA16F||a===J.RGBA32F)$.get("EXT_color_buffer_float");return a}function E(C,D,v){if(M(C,v)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006)return Math.log2(Math.max(D.width,D.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return D.mipmaps.length;else return 1}function L(C){if(C===1003||C===1004||C===1005)return J.NEAREST;return J.LINEAR}function s(C){let D=C.target;if(D.removeEventListener("dispose",s),h(D),D.isVideoTexture)_.delete(D)}function Y0(C){let D=C.target;D.removeEventListener("dispose",Y0),d(D)}function h(C){let D=Z.get(C);if(D.__webglInit===void 0)return;let v=C.source,J0=R.get(v);if(J0){let r=J0[D.__cacheKey];if(r.usedTimes--,r.usedTimes===0)y(C);if(Object.keys(J0).length===0)R.delete(v)}Z.remove(C)}function y(C){let D=Z.get(C);J.deleteTexture(D.__webglTexture);let v=C.source,J0=R.get(v);delete J0[D.__cacheKey],K.memory.textures--}function d(C){let D=C.texture,v=Z.get(C),J0=Z.get(D);if(J0.__webglTexture!==void 0)J.deleteTexture(J0.__webglTexture),K.memory.textures--;if(C.depthTexture)C.depthTexture.dispose();if(C.isWebGLCubeRenderTarget)for(let r=0;r<6;r++){if(Array.isArray(v.__webglFramebuffer[r]))for(let a=0;a<v.__webglFramebuffer[r].length;a++)J.deleteFramebuffer(v.__webglFramebuffer[r][a]);else J.deleteFramebuffer(v.__webglFramebuffer[r]);if(v.__webglDepthbuffer)J.deleteRenderbuffer(v.__webglDepthbuffer[r])}else{if(Array.isArray(v.__webglFramebuffer))for(let r=0;r<v.__webglFramebuffer.length;r++)J.deleteFramebuffer(v.__webglFramebuffer[r]);else J.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer)J.deleteRenderbuffer(v.__webglDepthbuffer);if(v.__webglMultisampledFramebuffer)J.deleteFramebuffer(v.__webglMultisampledFramebuffer);if(v.__webglColorRenderbuffer){for(let r=0;r<v.__webglColorRenderbuffer.length;r++)if(v.__webglColorRenderbuffer[r])J.deleteRenderbuffer(v.__webglColorRenderbuffer[r])}if(v.__webglDepthRenderbuffer)J.deleteRenderbuffer(v.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let r=0,a=D.length;r<a;r++){let D0=Z.get(D[r]);if(D0.__webglTexture)J.deleteTexture(D0.__webglTexture),K.memory.textures--;Z.remove(D[r])}Z.remove(D),Z.remove(C)}let t=0;function c(){t=0}function u(){let C=t;if(C>=H)console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+H);return t+=1,C}function o(C){let D=[];return D.push(C.wrapS),D.push(C.wrapT),D.push(C.wrapR||0),D.push(C.magFilter),D.push(C.minFilter),D.push(C.anisotropy),D.push(C.internalFormat),D.push(C.format),D.push(C.type),D.push(C.generateMipmaps),D.push(C.premultiplyAlpha),D.push(C.flipY),D.push(C.unpackAlignment),D.push(C.colorSpace),D.join()}function T(C,D){let v=Z.get(C);if(C.isVideoTexture)KJ(C);if(C.isRenderTargetTexture===!1&&C.version>0&&v.__version!==C.version){let J0=C.image;if(J0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{n0(v,C,D);return}}Q.bindTexture(J.TEXTURE_2D,v.__webglTexture,J.TEXTURE0+D)}function n(C,D){let v=Z.get(C);if(C.version>0&&v.__version!==C.version){n0(v,C,D);return}Q.bindTexture(J.TEXTURE_2D_ARRAY,v.__webglTexture,J.TEXTURE0+D)}function $0(C,D){let v=Z.get(C);if(C.version>0&&v.__version!==C.version){n0(v,C,D);return}Q.bindTexture(J.TEXTURE_3D,v.__webglTexture,J.TEXTURE0+D)}function F0(C,D){let v=Z.get(C);if(C.version>0&&v.__version!==C.version){UJ(v,C,D);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,v.__webglTexture,J.TEXTURE0+D)}let G0={[1000]:J.REPEAT,[1001]:J.CLAMP_TO_EDGE,[1002]:J.MIRRORED_REPEAT},N0={[1003]:J.NEAREST,[1004]:J.NEAREST_MIPMAP_NEAREST,[1005]:J.NEAREST_MIPMAP_LINEAR,[1006]:J.LINEAR,[1007]:J.LINEAR_MIPMAP_NEAREST,[1008]:J.LINEAR_MIPMAP_LINEAR},v0={[512]:J.NEVER,[519]:J.ALWAYS,[513]:J.LESS,[515]:J.LEQUAL,[514]:J.EQUAL,[518]:J.GEQUAL,[516]:J.GREATER,[517]:J.NOTEQUAL};function _0(C,D,v){if(v){if(J.texParameteri(C,J.TEXTURE_WRAP_S,G0[D.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,G0[D.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,G0[D.wrapR]);J.texParameteri(C,J.TEXTURE_MAG_FILTER,N0[D.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,N0[D.minFilter])}else{if(J.texParameteri(C,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(C,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,J.CLAMP_TO_EDGE);if(D.wrapS!==1001||D.wrapT!==1001)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,L(D.magFilter)),J.texParameteri(C,J.TEXTURE_MIN_FILTER,L(D.minFilter)),D.minFilter!==1003&&D.minFilter!==1006)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}if(D.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,v0[D.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){let J0=$.get("EXT_texture_filter_anisotropic");if(D.magFilter===1003)return;if(D.minFilter!==1005&&D.minFilter!==1008)return;if(D.type===1015&&$.has("OES_texture_float_linear")===!1)return;if(W===!1&&(D.type===1016&&$.has("OES_texture_half_float_linear")===!1))return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy)J.texParameterf(C,J0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,Y.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}function A0(C,D){let v=!1;if(C.__webglInit===void 0)C.__webglInit=!0,D.addEventListener("dispose",s);let J0=D.source,r=R.get(J0);if(r===void 0)r={},R.set(J0,r);let a=o(D);if(a!==C.__cacheKey){if(r[a]===void 0)r[a]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,v=!0;r[a].usedTimes++;let D0=r[C.__cacheKey];if(D0!==void 0){if(r[C.__cacheKey].usedTimes--,D0.usedTimes===0)y(D)}C.__cacheKey=a,C.__webglTexture=r[a].texture}return v}function n0(C,D,v){let J0=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)J0=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)J0=J.TEXTURE_3D;let r=A0(C,D),a=D.source;Q.bindTexture(J0,C.__webglTexture,J.TEXTURE0+v);let D0=Z.get(a);if(a.version!==D0.__version||r===!0){Q.activeTexture(J.TEXTURE0+v),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.NONE);let Q0=w(D)&&A(D.image)===!1,O=B(D.image,Q0,!1,U);O=NJ(D,O);let i=A(O)||W,H0=X.convert(D.format,D.colorSpace),Z0=X.convert(D.type),q0=l(D.internalFormat,H0,Z0,D.colorSpace,D.isVideoTexture);_0(J0,D,i);let U0,C0=D.mipmaps,P0=W&&D.isVideoTexture!==!0,P=D0.__version===void 0||r===!0,W0=E(D,O,i);if(D.isDepthTexture){if(q0=J.DEPTH_COMPONENT,W)if(D.type===1015)q0=J.DEPTH_COMPONENT32F;else if(D.type===1014)q0=J.DEPTH_COMPONENT24;else if(D.type===1020)q0=J.DEPTH24_STENCIL8;else q0=J.DEPTH_COMPONENT16;else if(D.type===1015)console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");if(D.format===1026&&q0===J.DEPTH_COMPONENT){if(D.type!==1012&&D.type!==1014)console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=1014,Z0=X.convert(D.type)}if(D.format===1027&&q0===J.DEPTH_COMPONENT){if(q0=J.DEPTH_STENCIL,D.type!==1020)console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=1020,Z0=X.convert(D.type)}if(P)if(P0)Q.texStorage2D(J.TEXTURE_2D,1,q0,O.width,O.height);else Q.texImage2D(J.TEXTURE_2D,0,q0,O.width,O.height,0,H0,Z0,null)}else if(D.isDataTexture)if(C0.length>0&&i){if(P0&&P)Q.texStorage2D(J.TEXTURE_2D,W0,q0,C0[0].width,C0[0].height);for(let x=0,e=C0.length;x<e;x++)if(U0=C0[x],P0)Q.texSubImage2D(J.TEXTURE_2D,x,0,0,U0.width,U0.height,H0,Z0,U0.data);else Q.texImage2D(J.TEXTURE_2D,x,q0,U0.width,U0.height,0,H0,Z0,U0.data);D.generateMipmaps=!1}else if(P0){if(P)Q.texStorage2D(J.TEXTURE_2D,W0,q0,O.width,O.height);Q.texSubImage2D(J.TEXTURE_2D,0,0,0,O.width,O.height,H0,Z0,O.data)}else Q.texImage2D(J.TEXTURE_2D,0,q0,O.width,O.height,0,H0,Z0,O.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(P0&&P)Q.texStorage3D(J.TEXTURE_2D_ARRAY,W0,q0,C0[0].width,C0[0].height,O.depth);for(let x=0,e=C0.length;x<e;x++)if(U0=C0[x],D.format!==1023)if(H0!==null)if(P0)Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,x,0,0,0,U0.width,U0.height,O.depth,H0,U0.data,0,0);else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,x,q0,U0.width,U0.height,O.depth,0,U0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P0)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,x,0,0,0,U0.width,U0.height,O.depth,H0,Z0,U0.data);else Q.texImage3D(J.TEXTURE_2D_ARRAY,x,q0,U0.width,U0.height,O.depth,0,H0,Z0,U0.data)}else{if(P0&&P)Q.texStorage2D(J.TEXTURE_2D,W0,q0,C0[0].width,C0[0].height);for(let x=0,e=C0.length;x<e;x++)if(U0=C0[x],D.format!==1023)if(H0!==null)if(P0)Q.compressedTexSubImage2D(J.TEXTURE_2D,x,0,0,U0.width,U0.height,H0,U0.data);else Q.compressedTexImage2D(J.TEXTURE_2D,x,q0,U0.width,U0.height,0,U0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P0)Q.texSubImage2D(J.TEXTURE_2D,x,0,0,U0.width,U0.height,H0,Z0,U0.data);else Q.texImage2D(J.TEXTURE_2D,x,q0,U0.width,U0.height,0,H0,Z0,U0.data)}else if(D.isDataArrayTexture)if(P0){if(P)Q.texStorage3D(J.TEXTURE_2D_ARRAY,W0,q0,O.width,O.height,O.depth);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,H0,Z0,O.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,q0,O.width,O.height,O.depth,0,H0,Z0,O.data);else if(D.isData3DTexture)if(P0){if(P)Q.texStorage3D(J.TEXTURE_3D,W0,q0,O.width,O.height,O.depth);Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,H0,Z0,O.data)}else Q.texImage3D(J.TEXTURE_3D,0,q0,O.width,O.height,O.depth,0,H0,Z0,O.data);else if(D.isFramebufferTexture){if(P)if(P0)Q.texStorage2D(J.TEXTURE_2D,W0,q0,O.width,O.height);else{let{width:x,height:e}=O;for(let K0=0;K0<W0;K0++)Q.texImage2D(J.TEXTURE_2D,K0,q0,x,e,0,H0,Z0,null),x>>=1,e>>=1}}else if(C0.length>0&&i){if(P0&&P)Q.texStorage2D(J.TEXTURE_2D,W0,q0,C0[0].width,C0[0].height);for(let x=0,e=C0.length;x<e;x++)if(U0=C0[x],P0)Q.texSubImage2D(J.TEXTURE_2D,x,0,0,H0,Z0,U0);else Q.texImage2D(J.TEXTURE_2D,x,q0,H0,Z0,U0);D.generateMipmaps=!1}else if(P0){if(P)Q.texStorage2D(J.TEXTURE_2D,W0,q0,O.width,O.height);Q.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,Z0,O)}else Q.texImage2D(J.TEXTURE_2D,0,q0,H0,Z0,O);if(M(D,i))g(J0);if(D0.__version=a.version,D.onUpdate)D.onUpdate(D)}C.__version=D.version}function UJ(C,D,v){if(D.image.length!==6)return;let J0=A0(C,D),r=D.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+v);let a=Z.get(r);if(r.version!==a.__version||J0===!0){Q.activeTexture(J.TEXTURE0+v),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.NONE);let D0=D.isCompressedTexture||D.image[0].isCompressedTexture,Q0=D.image[0]&&D.image[0].isDataTexture,O=[];for(let x=0;x<6;x++){if(!D0&&!Q0)O[x]=B(D.image[x],!1,!0,q);else O[x]=Q0?D.image[x].image:D.image[x];O[x]=NJ(D,O[x])}let i=O[0],H0=A(i)||W,Z0=X.convert(D.format,D.colorSpace),q0=X.convert(D.type),U0=l(D.internalFormat,Z0,q0,D.colorSpace),C0=W&&D.isVideoTexture!==!0,P0=a.__version===void 0||J0===!0,P=E(D,i,H0);_0(J.TEXTURE_CUBE_MAP,D,H0);let W0;if(D0){if(C0&&P0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,P,U0,i.width,i.height);for(let x=0;x<6;x++){W0=O[x].mipmaps;for(let e=0;e<W0.length;e++){let K0=W0[e];if(D.format!==1023)if(Z0!==null)if(C0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e,0,0,K0.width,K0.height,Z0,K0.data);else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e,U0,K0.width,K0.height,0,K0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(C0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e,0,0,K0.width,K0.height,Z0,q0,K0.data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e,U0,K0.width,K0.height,0,Z0,q0,K0.data)}}}else{if(W0=D.mipmaps,C0&&P0){if(W0.length>0)P++;Q.texStorage2D(J.TEXTURE_CUBE_MAP,P,U0,O[0].width,O[0].height)}for(let x=0;x<6;x++)if(Q0){if(C0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,O[x].width,O[x].height,Z0,q0,O[x].data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,U0,O[x].width,O[x].height,0,Z0,q0,O[x].data);for(let e=0;e<W0.length;e++){let T0=W0[e].image[x].image;if(C0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e+1,0,0,T0.width,T0.height,Z0,q0,T0.data);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e+1,U0,T0.width,T0.height,0,Z0,q0,T0.data)}}else{if(C0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,Z0,q0,O[x]);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,U0,Z0,q0,O[x]);for(let e=0;e<W0.length;e++){let K0=W0[e];if(C0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e+1,0,0,Z0,q0,K0.image[x]);else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+x,e+1,U0,Z0,q0,K0.image[x])}}}if(M(D,H0))g(J.TEXTURE_CUBE_MAP);if(a.__version=r.version,D.onUpdate)D.onUpdate(D)}C.__version=D.version}function j(C,D,v,J0,r,a){let D0=X.convert(v.format,v.colorSpace),Q0=X.convert(v.type),O=l(v.internalFormat,D0,Q0,v.colorSpace);if(!Z.get(D).__hasExternalTextures){let H0=Math.max(1,D.width>>a),Z0=Math.max(1,D.height>>a);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Q.texImage3D(r,a,O,H0,Z0,D.depth,0,D0,Q0,null);else Q.texImage2D(r,a,O,H0,Z0,0,D0,Q0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,C),g0(D))F.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J0,r,Z.get(v).__webglTexture,0,d0(D));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,J0,r,Z.get(v).__webglTexture,a);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function i0(C,D,v){if(J.bindRenderbuffer(J.RENDERBUFFER,C),D.depthBuffer&&!D.stencilBuffer){let J0=J.DEPTH_COMPONENT16;if(v||g0(D)){let r=D.depthTexture;if(r&&r.isDepthTexture){if(r.type===1015)J0=J.DEPTH_COMPONENT32F;else if(r.type===1014)J0=J.DEPTH_COMPONENT24}let a=d0(D);if(g0(D))F.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,a,J0,D.width,D.height);else J.renderbufferStorageMultisample(J.RENDERBUFFER,a,J0,D.width,D.height)}else J.renderbufferStorage(J.RENDERBUFFER,J0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.RENDERBUFFER,C)}else if(D.depthBuffer&&D.stencilBuffer){let J0=d0(D);if(v&&g0(D)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,J0,J.DEPTH24_STENCIL8,D.width,D.height);else if(g0(D))F.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,J0,J.DEPTH24_STENCIL8,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,J.DEPTH_STENCIL,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.RENDERBUFFER,C)}else{let J0=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let r=0;r<J0.length;r++){let a=J0[r],D0=X.convert(a.format,a.colorSpace),Q0=X.convert(a.type),O=l(a.internalFormat,D0,Q0,a.colorSpace),i=d0(D);if(v&&g0(D)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,i,O,D.width,D.height);else if(g0(D))F.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,i,O,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,O,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function j0(C,D){if(D&&D.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Q.bindFramebuffer(J.FRAMEBUFFER,C),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!Z.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;T(D.depthTexture,0);let J0=Z.get(D.depthTexture).__webglTexture,r=d0(D);if(D.depthTexture.format===1026)if(g0(D))F.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,J0,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,J0,0);else if(D.depthTexture.format===1027)if(g0(D))F.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,J0,0,r);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,J0,0);else throw Error("Unknown depthTexture format")}function E0(C){let D=Z.get(C),v=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!D.__autoAllocateDepthBuffer){if(v)throw Error("target.depthTexture not supported in Cube render targets");j0(D.__webglFramebuffer,C)}else if(v){D.__webglDepthbuffer=[];for(let J0=0;J0<6;J0++)Q.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[J0]),D.__webglDepthbuffer[J0]=J.createRenderbuffer(),i0(D.__webglDepthbuffer[J0],C,!1)}else Q.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=J.createRenderbuffer(),i0(D.__webglDepthbuffer,C,!1);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function z0(C,D,v){let J0=Z.get(C);if(D!==void 0)j(J0.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(v!==void 0)E0(C)}function l0(C){let D=C.texture,v=Z.get(C),J0=Z.get(D);if(C.addEventListener("dispose",Y0),C.isWebGLMultipleRenderTargets!==!0){if(J0.__webglTexture===void 0)J0.__webglTexture=J.createTexture();J0.__version=D.version,K.memory.textures++}let r=C.isWebGLCubeRenderTarget===!0,a=C.isWebGLMultipleRenderTargets===!0,D0=A(C)||W;if(r){v.__webglFramebuffer=[];for(let Q0=0;Q0<6;Q0++)if(W&&D.mipmaps&&D.mipmaps.length>0){v.__webglFramebuffer[Q0]=[];for(let O=0;O<D.mipmaps.length;O++)v.__webglFramebuffer[Q0][O]=J.createFramebuffer()}else v.__webglFramebuffer[Q0]=J.createFramebuffer()}else{if(W&&D.mipmaps&&D.mipmaps.length>0){v.__webglFramebuffer=[];for(let Q0=0;Q0<D.mipmaps.length;Q0++)v.__webglFramebuffer[Q0]=J.createFramebuffer()}else v.__webglFramebuffer=J.createFramebuffer();if(a)if(Y.drawBuffers){let Q0=C.texture;for(let O=0,i=Q0.length;O<i;O++){let H0=Z.get(Q0[O]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),K.memory.textures++}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(W&&C.samples>0&&g0(C)===!1){let Q0=a?D:[D];v.__webglMultisampledFramebuffer=J.createFramebuffer(),v.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let O=0;O<Q0.length;O++){let i=Q0[O];v.__webglColorRenderbuffer[O]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,v.__webglColorRenderbuffer[O]);let H0=X.convert(i.format,i.colorSpace),Z0=X.convert(i.type),q0=l(i.internalFormat,H0,Z0,i.colorSpace,C.isXRRenderTarget===!0),U0=d0(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,U0,q0,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O,J.RENDERBUFFER,v.__webglColorRenderbuffer[O])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)v.__webglDepthRenderbuffer=J.createRenderbuffer(),i0(v.__webglDepthRenderbuffer,C,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(r){Q.bindTexture(J.TEXTURE_CUBE_MAP,J0.__webglTexture),_0(J.TEXTURE_CUBE_MAP,D,D0);for(let Q0=0;Q0<6;Q0++)if(W&&D.mipmaps&&D.mipmaps.length>0)for(let O=0;O<D.mipmaps.length;O++)j(v.__webglFramebuffer[Q0][O],C,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,O);else j(v.__webglFramebuffer[Q0],C,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0);if(M(D,D0))g(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(a){let Q0=C.texture;for(let O=0,i=Q0.length;O<i;O++){let H0=Q0[O],Z0=Z.get(H0);if(Q.bindTexture(J.TEXTURE_2D,Z0.__webglTexture),_0(J.TEXTURE_2D,H0,D0),j(v.__webglFramebuffer,C,H0,J.COLOR_ATTACHMENT0+O,J.TEXTURE_2D,0),M(H0,D0))g(J.TEXTURE_2D)}Q.unbindTexture()}else{let Q0=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)if(W)Q0=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;else console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");if(Q.bindTexture(Q0,J0.__webglTexture),_0(Q0,D,D0),W&&D.mipmaps&&D.mipmaps.length>0)for(let O=0;O<D.mipmaps.length;O++)j(v.__webglFramebuffer[O],C,D,J.COLOR_ATTACHMENT0,Q0,O);else j(v.__webglFramebuffer,C,D,J.COLOR_ATTACHMENT0,Q0,0);if(M(D,D0))g(Q0);Q.unbindTexture()}if(C.depthBuffer)E0(C)}function w0(C){let D=A(C)||W,v=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let J0=0,r=v.length;J0<r;J0++){let a=v[J0];if(M(a,D)){let D0=C.isWebGLCubeRenderTarget?J.TEXTURE_CUBE_MAP:J.TEXTURE_2D,Q0=Z.get(a).__webglTexture;Q.bindTexture(D0,Q0),g(D0),Q.unbindTexture()}}}function b0(C){if(W&&C.samples>0&&g0(C)===!1){let D=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],v=C.width,J0=C.height,r=J.COLOR_BUFFER_BIT,a=[],D0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=Z.get(C),O=C.isWebGLMultipleRenderTargets===!0;if(O)for(let i=0;i<D.length;i++)Q.bindFramebuffer(J.FRAMEBUFFER,Q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+i,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,Q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+i,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,Q0.__webglMultisampledFramebuffer),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,Q0.__webglFramebuffer);for(let i=0;i<D.length;i++){if(a.push(J.COLOR_ATTACHMENT0+i),C.depthBuffer)a.push(D0);let H0=Q0.__ignoreDepthValues!==void 0?Q0.__ignoreDepthValues:!1;if(H0===!1){if(C.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(O)J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Q0.__webglColorRenderbuffer[i]);if(H0===!0)J.invalidateFramebuffer(J.READ_FRAMEBUFFER,[D0]),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D0]);if(O){let Z0=Z.get(D[i]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Z0,0)}if(J.blitFramebuffer(0,0,v,J0,0,0,v,J0,r,J.NEAREST),N)J.invalidateFramebuffer(J.READ_FRAMEBUFFER,a)}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),O)for(let i=0;i<D.length;i++){Q.bindFramebuffer(J.FRAMEBUFFER,Q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+i,J.RENDERBUFFER,Q0.__webglColorRenderbuffer[i]);let H0=Z.get(D[i]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,Q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+i,J.TEXTURE_2D,H0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,Q0.__webglMultisampledFramebuffer)}}function d0(C){return Math.min(G,C.samples)}function g0(C){let D=Z.get(C);return W&&C.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function KJ(C){let D=K.render.frame;if(_.get(C)!==D)_.set(C,D),C.update()}function NJ(C,D){let{colorSpace:v,format:J0,type:r}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===1035)return D;if(v!=="srgb-linear"&&v!=="")if(v==="srgb"||v==="display-p3"){if(W===!1)if($.has("EXT_sRGB")===!0&&J0===1023)C.format=1035,C.minFilter=1006,C.generateMipmaps=!1;else D=h7.sRGBToLinear(D);else if(J0!==1023||r!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",v);return D}this.allocateTextureUnit=u,this.resetTextureUnits=c,this.setTexture2D=T,this.setTexture2DArray=n,this.setTexture3D=$0,this.setTextureCube=F0,this.rebindTextures=z0,this.setupRenderTarget=l0,this.updateRenderTargetMipmap=w0,this.updateMultisampleRenderTarget=b0,this.setupDepthRenderbuffer=E0,this.setupFrameBufferTexture=j,this.useMultisampledRTT=g0}var I4=0,YJ=1;function M4(J,$,Q){let Z=Q.isWebGL2;function Y(X,K=""){let W,H=K==="srgb"||K==="display-p3"?YJ:I4;if(X===1009)return J.UNSIGNED_BYTE;if(X===1017)return J.UNSIGNED_SHORT_4_4_4_4;if(X===1018)return J.UNSIGNED_SHORT_5_5_5_1;if(X===1010)return J.BYTE;if(X===1011)return J.SHORT;if(X===1012)return J.UNSIGNED_SHORT;if(X===1013)return J.INT;if(X===1014)return J.UNSIGNED_INT;if(X===1015)return J.FLOAT;if(X===1016){if(Z)return J.HALF_FLOAT;if(W=$.get("OES_texture_half_float"),W!==null)return W.HALF_FLOAT_OES;else return null}if(X===1021)return J.ALPHA;if(X===1023)return J.RGBA;if(X===1024)return J.LUMINANCE;if(X===1025)return J.LUMINANCE_ALPHA;if(X===1026)return J.DEPTH_COMPONENT;if(X===1027)return J.DEPTH_STENCIL;if(X===1035)if(W=$.get("EXT_sRGB"),W!==null)return W.SRGB_ALPHA_EXT;else return null;if(X===1028)return J.RED;if(X===1029)return J.RED_INTEGER;if(X===1030)return J.RG;if(X===1031)return J.RG_INTEGER;if(X===1033)return J.RGBA_INTEGER;if(X===33776||X===33777||X===33778||X===33779)if(H===YJ)if(W=$.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(X===33776)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(X===33777)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(X===33778)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(X===33779)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=$.get("WEBGL_compressed_texture_s3tc"),W!==null){if(X===33776)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(X===33777)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(X===33778)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(X===33779)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(X===35840||X===35841||X===35842||X===35843)if(W=$.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(X===35840)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(X===35841)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(X===35842)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(X===35843)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(X===36196)if(W=$.get("WEBGL_compressed_texture_etc1"),W!==null)return W.COMPRESSED_RGB_ETC1_WEBGL;else return null;if(X===37492||X===37496)if(W=$.get("WEBGL_compressed_texture_etc"),W!==null){if(X===37492)return H===YJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(X===37496)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(X===37808||X===37809||X===37810||X===37811||X===37812||X===37813||X===37814||X===37815||X===37816||X===37817||X===37818||X===37819||X===37820||X===37821)if(W=$.get("WEBGL_compressed_texture_astc"),W!==null){if(X===37808)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(X===37809)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(X===37810)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(X===37811)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(X===37812)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(X===37813)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(X===37814)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(X===37815)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(X===37816)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(X===37817)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(X===37818)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(X===37819)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(X===37820)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(X===37821)return H===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(X===36492||X===36494||X===36495)if(W=$.get("EXT_texture_compression_bptc"),W!==null){if(X===36492)return H===YJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(X===36494)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(X===36495)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(X===36283||X===36284||X===36285||X===36286)if(W=$.get("EXT_texture_compression_rgtc"),W!==null){if(X===36492)return W.COMPRESSED_RED_RGTC1_EXT;if(X===36284)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(X===36285)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(X===36286)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(X===1020){if(Z)return J.UNSIGNED_INT_24_8;if(W=$.get("WEBGL_depth_texture"),W!==null)return W.UNSIGNED_INT_24_8_WEBGL;else return null}return J[X]!==void 0?J[X]:null}return{convert:Y}}class y9 extends zJ{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class ZJ extends GJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var B4={type:"move"};class g8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ZJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ZJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ZJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,Y=null,X=null,K=this._targetRay,W=this._grip,H=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(H&&J.hand){X=!0;for(let _ of J.hand.values()){let z=$.getJointPose(_,Q),R=this._getHandJoint(H,_);if(z!==null)R.matrix.fromArray(z.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=z.radius;R.visible=z!==null}let q=H.joints["index-finger-tip"],U=H.joints["thumb-tip"],G=q.position.distanceTo(U.position),F=0.02,N=0.005;if(H.inputState.pinching&&G>F+N)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&G<=F-N)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(W!==null&&J.gripSpace){if(Y=$.getPose(J.gripSpace,Q),Y!==null){if(W.matrix.fromArray(Y.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,Y.linearVelocity)W.hasLinearVelocity=!0,W.linearVelocity.copy(Y.linearVelocity);else W.hasLinearVelocity=!1;if(Y.angularVelocity)W.hasAngularVelocity=!0,W.angularVelocity.copy(Y.angularVelocity);else W.hasAngularVelocity=!1}}if(K!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&Y!==null)Z=Y;if(Z!==null){if(K.matrix.fromArray(Z.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,Z.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(Z.linearVelocity);else K.hasLinearVelocity=!1;if(Z.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(Z.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(B4)}}}if(K!==null)K.visible=Z!==null;if(W!==null)W.visible=Y!==null;if(H!==null)H.visible=X!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new ZJ;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}class r8 extends qJ{constructor(J,$,Q,Z,Y,X,K,W,H,q){if(q=q!==void 0?q:1026,q!==1026&&q!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Q===void 0&&q===1026)Q=1014;if(Q===void 0&&q===1027)Q=1020;super(null,Z,Y,X,K,W,q,Q,H);this.isDepthTexture=!0,this.image={width:J,height:$},this.magFilter=K!==void 0?K:1003,this.minFilter=W!==void 0?W:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);if(this.compareFunction!==null)$.compareFunction=this.compareFunction;return $}}class x9 extends eJ{constructor(J,$){super();let Q=this,Z=null,Y=1,X=null,K="local-floor",W=1,H=null,q=null,U=null,G=null,F=null,N=null,_=$.getContextAttributes(),z=null,R=null,V=[],k=[],B=new zJ;B.layers.enable(1),B.viewport=new s0;let A=new zJ;A.layers.enable(2),A.viewport=new s0;let w=[B,A],M=new y9;M.layers.enable(1),M.layers.enable(2);let g=null,l=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let n=V[T];if(n===void 0)n=new g8,V[T]=n;return n.getTargetRaySpace()},this.getControllerGrip=function(T){let n=V[T];if(n===void 0)n=new g8,V[T]=n;return n.getGripSpace()},this.getHand=function(T){let n=V[T];if(n===void 0)n=new g8,V[T]=n;return n.getHandSpace()};function E(T){let n=k.indexOf(T.inputSource);if(n===-1)return;let $0=V[n];if($0!==void 0)$0.update(T.inputSource,T.frame,H||X),$0.dispatchEvent({type:T.type,data:T.inputSource})}function L(){Z.removeEventListener("select",E),Z.removeEventListener("selectstart",E),Z.removeEventListener("selectend",E),Z.removeEventListener("squeeze",E),Z.removeEventListener("squeezestart",E),Z.removeEventListener("squeezeend",E),Z.removeEventListener("end",L),Z.removeEventListener("inputsourceschange",s);for(let T=0;T<V.length;T++){let n=k[T];if(n===null)continue;k[T]=null,V[T].disconnect(n)}g=null,l=null,J.setRenderTarget(z),F=null,G=null,U=null,Z=null,R=null,o.stop(),Q.isPresenting=!1,Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){if(Y=T,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){if(K=T,Q.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||X},this.setReferenceSpace=function(T){H=T},this.getBaseLayer=function(){return G!==null?G:F},this.getBinding=function(){return U},this.getFrame=function(){return N},this.getSession=function(){return Z},this.setSession=async function(T){if(Z=T,Z!==null){if(z=J.getRenderTarget(),Z.addEventListener("select",E),Z.addEventListener("selectstart",E),Z.addEventListener("selectend",E),Z.addEventListener("squeeze",E),Z.addEventListener("squeezestart",E),Z.addEventListener("squeezeend",E),Z.addEventListener("end",L),Z.addEventListener("inputsourceschange",s),_.xrCompatible!==!0)await $.makeXRCompatible();if(Z.renderState.layers===void 0||J.capabilities.isWebGL2===!1){let n={antialias:Z.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:Y};F=new XRWebGLLayer(Z,$,n),Z.updateRenderState({baseLayer:F}),R=new PJ(F.framebufferWidth,F.framebufferHeight,{format:1023,type:1009,colorSpace:J.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,$0=null,F0=null;if(_.depth)F0=_.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,n=_.stencil?1027:1026,$0=_.stencil?1020:1014;let G0={colorFormat:$.RGBA8,depthFormat:F0,scaleFactor:Y};U=new XRWebGLBinding(Z,$),G=U.createProjectionLayer(G0),Z.updateRenderState({layers:[G]}),R=new PJ(G.textureWidth,G.textureHeight,{format:1023,type:1009,depthTexture:new r8(G.textureWidth,G.textureHeight,$0,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:J.outputColorSpace,samples:_.antialias?4:0});let N0=J.properties.get(R);N0.__ignoreDepthValues=G.ignoreDepthValues}R.isXRRenderTarget=!0,this.setFoveation(W),H=null,X=await Z.requestReferenceSpace(K),o.setContext(Z),o.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode};function s(T){for(let n=0;n<T.removed.length;n++){let $0=T.removed[n],F0=k.indexOf($0);if(F0>=0)k[F0]=null,V[F0].disconnect($0)}for(let n=0;n<T.added.length;n++){let $0=T.added[n],F0=k.indexOf($0);if(F0===-1){for(let N0=0;N0<V.length;N0++)if(N0>=k.length){k.push($0),F0=N0;break}else if(k[N0]===null){k[N0]=$0,F0=N0;break}if(F0===-1)break}let G0=V[F0];if(G0)G0.connect($0)}}let Y0=new S,h=new S;function y(T,n,$0){Y0.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition($0.matrixWorld);let F0=Y0.distanceTo(h),G0=n.projectionMatrix.elements,N0=$0.projectionMatrix.elements,v0=G0[14]/(G0[10]-1),_0=G0[14]/(G0[10]+1),A0=(G0[9]+1)/G0[5],n0=(G0[9]-1)/G0[5],UJ=(G0[8]-1)/G0[0],j=(N0[8]+1)/N0[0],i0=v0*UJ,j0=v0*j,E0=F0/(-UJ+j),z0=E0*-UJ;n.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(z0),T.translateZ(E0),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();let l0=v0+E0,w0=_0+E0,b0=i0-z0,d0=j0+(F0-z0),g0=A0*_0/w0*l0,KJ=n0*_0/w0*l0;T.projectionMatrix.makePerspective(b0,d0,g0,KJ,l0,w0),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function d(T,n){if(n===null)T.matrixWorld.copy(T.matrix);else T.matrixWorld.multiplyMatrices(n.matrixWorld,T.matrix);T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(Z===null)return;if(M.near=A.near=B.near=T.near,M.far=A.far=B.far=T.far,g!==M.near||l!==M.far)Z.updateRenderState({depthNear:M.near,depthFar:M.far}),g=M.near,l=M.far;let n=T.parent,$0=M.cameras;d(M,n);for(let F0=0;F0<$0.length;F0++)d($0[F0],n);if($0.length===2)y(M,B,A);else M.projectionMatrix.copy(B.projectionMatrix);t(T,M,n)};function t(T,n,$0){if($0===null)T.matrix.copy(n.matrixWorld);else T.matrix.copy($0.matrixWorld),T.matrix.invert(),T.matrix.multiply(n.matrixWorld);if(T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(n.projectionMatrix),T.projectionMatrixInverse.copy(n.projectionMatrixInverse),T.isPerspectiveCamera)T.fov=K8*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1}this.getCamera=function(){return M},this.getFoveation=function(){if(G===null&&F===null)return;return W},this.setFoveation=function(T){if(W=T,G!==null)G.fixedFoveation=T;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=T};let c=null;function u(T,n){if(q=n.getViewerPose(H||X),N=n,q!==null){let $0=q.views;if(F!==null)J.setRenderTargetFramebuffer(R,F.framebuffer),J.setRenderTarget(R);let F0=!1;if($0.length!==M.cameras.length)M.cameras.length=0,F0=!0;for(let G0=0;G0<$0.length;G0++){let N0=$0[G0],v0=null;if(F!==null)v0=F.getViewport(N0);else{let A0=U.getViewSubImage(G,N0);if(v0=A0.viewport,G0===0)J.setRenderTargetTextures(R,A0.colorTexture,G.ignoreDepthValues?void 0:A0.depthStencilTexture),J.setRenderTarget(R)}let _0=w[G0];if(_0===void 0)_0=new zJ,_0.layers.enable(G0),_0.viewport=new s0,w[G0]=_0;if(_0.matrix.fromArray(N0.transform.matrix),_0.matrix.decompose(_0.position,_0.quaternion,_0.scale),_0.projectionMatrix.fromArray(N0.projectionMatrix),_0.projectionMatrixInverse.copy(_0.projectionMatrix).invert(),_0.viewport.set(v0.x,v0.y,v0.width,v0.height),G0===0)M.matrix.copy(_0.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale);if(F0===!0)M.cameras.push(_0)}}for(let $0=0;$0<V.length;$0++){let F0=k[$0],G0=V[$0];if(F0!==null&&G0!==void 0)G0.update(F0,n,H||X)}if(c)c(T,n);if(n.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:n});N=null}let o=new B9;o.setAnimationLoop(u),this.setAnimationLoop=function(T){c=T},this.dispose=function(){}}}function C4(J,$){function Q(R,V){if(R.matrixAutoUpdate===!0)R.updateMatrix();V.value.copy(R.matrix)}function Z(R,V){if(V.color.getRGB(R.fogColor.value,z9(J)),V.isFog)R.fogNear.value=V.near,R.fogFar.value=V.far;else if(V.isFogExp2)R.fogDensity.value=V.density}function Y(R,V,k,B,A){if(V.isMeshBasicMaterial)X(R,V);else if(V.isMeshLambertMaterial)X(R,V);else if(V.isMeshToonMaterial)X(R,V),G(R,V);else if(V.isMeshPhongMaterial)X(R,V),U(R,V);else if(V.isMeshStandardMaterial){if(X(R,V),F(R,V),V.isMeshPhysicalMaterial)N(R,V,A)}else if(V.isMeshMatcapMaterial)X(R,V),_(R,V);else if(V.isMeshDepthMaterial)X(R,V);else if(V.isMeshDistanceMaterial)X(R,V),z(R,V);else if(V.isMeshNormalMaterial)X(R,V);else if(V.isLineBasicMaterial){if(K(R,V),V.isLineDashedMaterial)W(R,V)}else if(V.isPointsMaterial)H(R,V,k,B);else if(V.isSpriteMaterial)q(R,V);else if(V.isShadowMaterial)R.color.value.copy(V.color),R.opacity.value=V.opacity;else if(V.isShaderMaterial)V.uniformsNeedUpdate=!1}function X(R,V){if(R.opacity.value=V.opacity,V.color)R.diffuse.value.copy(V.color);if(V.emissive)R.emissive.value.copy(V.emissive).multiplyScalar(V.emissiveIntensity);if(V.map)R.map.value=V.map,Q(V.map,R.mapTransform);if(V.alphaMap)R.alphaMap.value=V.alphaMap,Q(V.alphaMap,R.alphaMapTransform);if(V.bumpMap){if(R.bumpMap.value=V.bumpMap,Q(V.bumpMap,R.bumpMapTransform),R.bumpScale.value=V.bumpScale,V.side===1)R.bumpScale.value*=-1}if(V.normalMap){if(R.normalMap.value=V.normalMap,Q(V.normalMap,R.normalMapTransform),R.normalScale.value.copy(V.normalScale),V.side===1)R.normalScale.value.negate()}if(V.displacementMap)R.displacementMap.value=V.displacementMap,Q(V.displacementMap,R.displacementMapTransform),R.displacementScale.value=V.displacementScale,R.displacementBias.value=V.displacementBias;if(V.emissiveMap)R.emissiveMap.value=V.emissiveMap,Q(V.emissiveMap,R.emissiveMapTransform);if(V.specularMap)R.specularMap.value=V.specularMap,Q(V.specularMap,R.specularMapTransform);if(V.alphaTest>0)R.alphaTest.value=V.alphaTest;let k=$.get(V).envMap;if(k)R.envMap.value=k,R.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,R.reflectivity.value=V.reflectivity,R.ior.value=V.ior,R.refractionRatio.value=V.refractionRatio;if(V.lightMap){R.lightMap.value=V.lightMap;let B=J._useLegacyLights===!0?Math.PI:1;R.lightMapIntensity.value=V.lightMapIntensity*B,Q(V.lightMap,R.lightMapTransform)}if(V.aoMap)R.aoMap.value=V.aoMap,R.aoMapIntensity.value=V.aoMapIntensity,Q(V.aoMap,R.aoMapTransform)}function K(R,V){if(R.diffuse.value.copy(V.color),R.opacity.value=V.opacity,V.map)R.map.value=V.map,Q(V.map,R.mapTransform)}function W(R,V){R.dashSize.value=V.dashSize,R.totalSize.value=V.dashSize+V.gapSize,R.scale.value=V.scale}function H(R,V,k,B){if(R.diffuse.value.copy(V.color),R.opacity.value=V.opacity,R.size.value=V.size*k,R.scale.value=B*0.5,V.map)R.map.value=V.map,Q(V.map,R.uvTransform);if(V.alphaMap)R.alphaMap.value=V.alphaMap,Q(V.alphaMap,R.alphaMapTransform);if(V.alphaTest>0)R.alphaTest.value=V.alphaTest}function q(R,V){if(R.diffuse.value.copy(V.color),R.opacity.value=V.opacity,R.rotation.value=V.rotation,V.map)R.map.value=V.map,Q(V.map,R.mapTransform);if(V.alphaMap)R.alphaMap.value=V.alphaMap,Q(V.alphaMap,R.alphaMapTransform);if(V.alphaTest>0)R.alphaTest.value=V.alphaTest}function U(R,V){R.specular.value.copy(V.specular),R.shininess.value=Math.max(V.shininess,0.0001)}function G(R,V){if(V.gradientMap)R.gradientMap.value=V.gradientMap}function F(R,V){if(R.metalness.value=V.metalness,V.metalnessMap)R.metalnessMap.value=V.metalnessMap,Q(V.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=V.roughness,V.roughnessMap)R.roughnessMap.value=V.roughnessMap,Q(V.roughnessMap,R.roughnessMapTransform);if($.get(V).envMap)R.envMapIntensity.value=V.envMapIntensity}function N(R,V,k){if(R.ior.value=V.ior,V.sheen>0){if(R.sheenColor.value.copy(V.sheenColor).multiplyScalar(V.sheen),R.sheenRoughness.value=V.sheenRoughness,V.sheenColorMap)R.sheenColorMap.value=V.sheenColorMap,Q(V.sheenColorMap,R.sheenColorMapTransform);if(V.sheenRoughnessMap)R.sheenRoughnessMap.value=V.sheenRoughnessMap,Q(V.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(V.clearcoat>0){if(R.clearcoat.value=V.clearcoat,R.clearcoatRoughness.value=V.clearcoatRoughness,V.clearcoatMap)R.clearcoatMap.value=V.clearcoatMap,Q(V.clearcoatMap,R.clearcoatMapTransform);if(V.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=V.clearcoatRoughnessMap,Q(V.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(V.clearcoatNormalMap){if(R.clearcoatNormalMap.value=V.clearcoatNormalMap,Q(V.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(V.clearcoatNormalScale),V.side===1)R.clearcoatNormalScale.value.negate()}}if(V.iridescence>0){if(R.iridescence.value=V.iridescence,R.iridescenceIOR.value=V.iridescenceIOR,R.iridescenceThicknessMinimum.value=V.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=V.iridescenceThicknessRange[1],V.iridescenceMap)R.iridescenceMap.value=V.iridescenceMap,Q(V.iridescenceMap,R.iridescenceMapTransform);if(V.iridescenceThicknessMap)R.iridescenceThicknessMap.value=V.iridescenceThicknessMap,Q(V.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(V.transmission>0){if(R.transmission.value=V.transmission,R.transmissionSamplerMap.value=k.texture,R.transmissionSamplerSize.value.set(k.width,k.height),V.transmissionMap)R.transmissionMap.value=V.transmissionMap,Q(V.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=V.thickness,V.thicknessMap)R.thicknessMap.value=V.thicknessMap,Q(V.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=V.attenuationDistance,R.attenuationColor.value.copy(V.attenuationColor)}if(V.anisotropy>0){if(R.anisotropyVector.value.set(V.anisotropy*Math.cos(V.anisotropyRotation),V.anisotropy*Math.sin(V.anisotropyRotation)),V.anisotropyMap)R.anisotropyMap.value=V.anisotropyMap,Q(V.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=V.specularIntensity,R.specularColor.value.copy(V.specularColor),V.specularColorMap)R.specularColorMap.value=V.specularColorMap,Q(V.specularColorMap,R.specularColorMapTransform);if(V.specularIntensityMap)R.specularIntensityMap.value=V.specularIntensityMap,Q(V.specularIntensityMap,R.specularIntensityMapTransform)}function _(R,V){if(V.matcap)R.matcap.value=V.matcap}function z(R,V){let k=$.get(V).light;R.referencePosition.value.setFromMatrixPosition(k.matrixWorld),R.nearDistance.value=k.shadow.camera.near,R.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:Y}}function k4(J,$,Q,Z){let Y={},X={},K=[],W=Q.isWebGL2?J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS):0;function H(k,B){let A=B.program;Z.uniformBlockBinding(k,A)}function q(k,B){let A=Y[k.id];if(A===void 0)_(k),A=U(k),Y[k.id]=A,k.addEventListener("dispose",R);let w=B.program;Z.updateUBOMapping(k,w);let M=$.render.frame;if(X[k.id]!==M)F(k),X[k.id]=M}function U(k){let B=G();k.__bindingPointIndex=B;let A=J.createBuffer(),w=k.__size,M=k.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,w,M),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,B,A),A}function G(){for(let k=0;k<W;k++)if(K.indexOf(k)===-1)return K.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(k){let B=Y[k.id],A=k.uniforms,w=k.__cache;J.bindBuffer(J.UNIFORM_BUFFER,B);for(let M=0,g=A.length;M<g;M++){let l=A[M];if(N(l,M,w)===!0){let E=l.__offset,L=Array.isArray(l.value)?l.value:[l.value],s=0;for(let Y0=0;Y0<L.length;Y0++){let h=L[Y0],y=z(h);if(typeof h==="number")l.__data[0]=h,J.bufferSubData(J.UNIFORM_BUFFER,E+s,l.__data);else if(h.isMatrix3)l.__data[0]=h.elements[0],l.__data[1]=h.elements[1],l.__data[2]=h.elements[2],l.__data[3]=h.elements[0],l.__data[4]=h.elements[3],l.__data[5]=h.elements[4],l.__data[6]=h.elements[5],l.__data[7]=h.elements[0],l.__data[8]=h.elements[6],l.__data[9]=h.elements[7],l.__data[10]=h.elements[8],l.__data[11]=h.elements[0];else h.toArray(l.__data,s),s+=y.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,E,l.__data)}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(k,B,A){let w=k.value;if(A[B]===void 0){if(typeof w==="number")A[B]=w;else{let M=Array.isArray(w)?w:[w],g=[];for(let l=0;l<M.length;l++)g.push(M[l].clone());A[B]=g}return!0}else if(typeof w==="number"){if(A[B]!==w)return A[B]=w,!0}else{let M=Array.isArray(A[B])?A[B]:[A[B]],g=Array.isArray(w)?w:[w];for(let l=0;l<M.length;l++){let E=M[l];if(E.equals(g[l])===!1)return E.copy(g[l]),!0}}return!1}function _(k){let B=k.uniforms,A=0,w=16,M=0;for(let g=0,l=B.length;g<l;g++){let E=B[g],L={boundary:0,storage:0},s=Array.isArray(E.value)?E.value:[E.value];for(let Y0=0,h=s.length;Y0<h;Y0++){let y=s[Y0],d=z(y);L.boundary+=d.boundary,L.storage+=d.storage}if(E.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=A,g>0){M=A%w;let Y0=w-M;if(M!==0&&Y0-L.boundary<0)A+=w-M,E.__offset=A}A+=L.storage}if(M=A%w,M>0)A+=w-M;return k.__size=A,k.__cache={},this}function z(k){let B={boundary:0,storage:0};if(typeof k==="number")B.boundary=4,B.storage=4;else if(k.isVector2)B.boundary=8,B.storage=8;else if(k.isVector3||k.isColor)B.boundary=16,B.storage=12;else if(k.isVector4)B.boundary=16,B.storage=16;else if(k.isMatrix3)B.boundary=48,B.storage=48;else if(k.isMatrix4)B.boundary=64,B.storage=64;else if(k.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k);return B}function R(k){let B=k.target;B.removeEventListener("dispose",R);let A=K.indexOf(B.__bindingPointIndex);K.splice(A,1),J.deleteBuffer(Y[B.id]),delete Y[B.id],delete X[B.id]}function V(){for(let k in Y)J.deleteBuffer(Y[k]);K=[],Y={},X={}}return{bind:H,update:q,dispose:V}}class a8{constructor(J={}){let{canvas:$=f5(),context:Q=null,depth:Z=!0,stencil:Y=!0,alpha:X=!1,antialias:K=!1,premultipliedAlpha:W=!0,preserveDrawingBuffer:H=!1,powerPreference:q="default",failIfMajorPerformanceCaveat:U=!1}=J;this.isWebGLRenderer=!0;let G;if(Q!==null)G=Q.getContextAttributes().alpha;else G=X;let F=new Uint32Array(4),N=new Int32Array(4),_=null,z=null,R=[],V=[];this.domElement=$,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace="srgb",this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let k=this,B=!1,A=0,w=0,M=null,g=-1,l=null,E=new s0,L=new s0,s=null,Y0=new x0(0),h=0,y=$.width,d=$.height,t=1,c=null,u=null,o=new s0(0,0,y,d),T=new s0(0,0,y,d),n=!1,$0=new s8,F0=!1,G0=!1,N0=null,v0=new e0,_0=new R0,A0=new S,n0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function UJ(){return M===null?t:1}let j=Q;function i0(I,f){for(let p=0;p<I.length;p++){let b=I[p],m=$.getContext(b,f);if(m!==null)return m}return null}try{let I={alpha:!0,depth:Z,stencil:Y,antialias:K,premultipliedAlpha:W,preserveDrawingBuffer:H,powerPreference:q,failIfMajorPerformanceCaveat:U};if("setAttribute"in $)$.setAttribute("data-engine","three.js r156");if($.addEventListener("webglcontextlost",P,!1),$.addEventListener("webglcontextrestored",W0,!1),$.addEventListener("webglcontextcreationerror",x,!1),j===null){let f=["webgl2","webgl","experimental-webgl"];if(k.isWebGL1Renderer===!0)f.shift();if(j=i0(f,I),j===null)if(i0(f))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}if(typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext)console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.");if(j.getShaderPrecisionFormat===void 0)j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let j0,E0,z0,l0,w0,b0,d0,g0,KJ,NJ,C,D,v,J0,r,a,D0,Q0,O,i,H0,Z0,q0,U0;function C0(){j0=new cY(j),E0=new gY(j,j0,J),j0.init(E0),Z0=new M4(j,j0,E0),z0=new O4(j,j0,E0),l0=new iY(j),w0=new K4,b0=new z4(j,j0,z0,w0,E0,Z0,l0),d0=new mY(k),g0=new lY(k),KJ=new YQ(j,E0),q0=new vY(j,j0,KJ,E0),NJ=new nY(j,KJ,l0,q0),C=new tY(j,NJ,KJ,l0),O=new aY(j,E0,b0),a=new pY(w0),D=new W4(k,d0,g0,j0,E0,q0,a),v=new C4(k,w0),J0=new q4,r=new N4(j0,E0),Q0=new xY(k,d0,g0,z0,C,G,W),D0=new _4(k,C,E0),U0=new k4(j,l0,E0,z0),i=new hY(j,j0,l0,E0),H0=new sY(j,j0,l0,E0),l0.programs=D.programs,k.capabilities=E0,k.extensions=j0,k.properties=w0,k.renderLists=J0,k.shadowMap=D0,k.state=z0,k.info=l0}C0();let P0=new x9(k,j);this.xr=P0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let I=j0.get("WEBGL_lose_context");if(I)I.loseContext()},this.forceContextRestore=function(){let I=j0.get("WEBGL_lose_context");if(I)I.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(I){if(I===void 0)return;t=I,this.setSize(y,d,!1)},this.getSize=function(I){return I.set(y,d)},this.setSize=function(I,f,p=!0){if(P0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(y=I,d=f,$.width=Math.floor(I*t),$.height=Math.floor(f*t),p===!0)$.style.width=I+"px",$.style.height=f+"px";this.setViewport(0,0,I,f)},this.getDrawingBufferSize=function(I){return I.set(y*t,d*t).floor()},this.setDrawingBufferSize=function(I,f,p){y=I,d=f,t=p,$.width=Math.floor(I*p),$.height=Math.floor(f*p),this.setViewport(0,0,I,f)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(o)},this.setViewport=function(I,f,p,b){if(I.isVector4)o.set(I.x,I.y,I.z,I.w);else o.set(I,f,p,b);z0.viewport(E.copy(o).multiplyScalar(t).floor())},this.getScissor=function(I){return I.copy(T)},this.setScissor=function(I,f,p,b){if(I.isVector4)T.set(I.x,I.y,I.z,I.w);else T.set(I,f,p,b);z0.scissor(L.copy(T).multiplyScalar(t).floor())},this.getScissorTest=function(){return n},this.setScissorTest=function(I){z0.setScissorTest(n=I)},this.setOpaqueSort=function(I){c=I},this.setTransparentSort=function(I){u=I},this.getClearColor=function(I){return I.copy(Q0.getClearColor())},this.setClearColor=function(){Q0.setClearColor.apply(Q0,arguments)},this.getClearAlpha=function(){return Q0.getClearAlpha()},this.setClearAlpha=function(){Q0.setClearAlpha.apply(Q0,arguments)},this.clear=function(I=!0,f=!0,p=!0){let b=0;if(I){let m=!1;if(M!==null){let V0=M.texture.format;m=V0===1033||V0===1031||V0===1029}if(m){let V0=M.texture.type,O0=V0===1009||V0===1014||V0===1012||V0===1020||V0===1017||V0===1018,M0=Q0.getClearColor(),B0=Q0.getClearAlpha(),f0=M0.r,I0=M0.g,k0=M0.b;if(O0)F[0]=f0,F[1]=I0,F[2]=k0,F[3]=B0,j.clearBufferuiv(j.COLOR,0,F);else N[0]=f0,N[1]=I0,N[2]=k0,N[3]=B0,j.clearBufferiv(j.COLOR,0,N)}else b|=j.COLOR_BUFFER_BIT}if(f)b|=j.DEPTH_BUFFER_BIT;if(p)b|=j.STENCIL_BUFFER_BIT;j.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){if($.removeEventListener("webglcontextlost",P,!1),$.removeEventListener("webglcontextrestored",W0,!1),$.removeEventListener("webglcontextcreationerror",x,!1),J0.dispose(),r.dispose(),w0.dispose(),d0.dispose(),g0.dispose(),C.dispose(),q0.dispose(),U0.dispose(),D.dispose(),P0.dispose(),P0.removeEventListener("sessionstart",lJ),P0.removeEventListener("sessionend",c0),N0)N0.dispose(),N0=null;EJ.stop()};function P(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function W0(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let I=l0.autoReset,f=D0.enabled,p=D0.autoUpdate,b=D0.needsUpdate,m=D0.type;C0(),l0.autoReset=I,D0.enabled=f,D0.autoUpdate=p,D0.needsUpdate=b,D0.type=m}function x(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function e(I){let f=I.target;f.removeEventListener("dispose",e),K0(f)}function K0(I){T0(I),w0.remove(I)}function T0(I){let f=w0.get(I).programs;if(f!==void 0){if(f.forEach(function(p){D.releaseProgram(p)}),I.isShaderMaterial)D.releaseShaderCache(I)}}this.renderBufferDirect=function(I,f,p,b,m,V0){if(f===null)f=n0;let O0=m.isMesh&&m.matrixWorld.determinant()<0,M0=N5(I,f,p,b,m);z0.setMaterial(b,O0);let B0=p.index,f0=1;if(b.wireframe===!0){if(B0=NJ.getWireframeAttribute(p),B0===void 0)return;f0=2}let I0=p.drawRange,k0=p.attributes.position,r0=I0.start*f0,t0=(I0.start+I0.count)*f0;if(V0!==null)r0=Math.max(r0,V0.start*f0),t0=Math.min(t0,(V0.start+V0.count)*f0);if(B0!==null)r0=Math.max(r0,0),t0=Math.min(t0,B0.count);else if(k0!==void 0&&k0!==null)r0=Math.max(r0,0),t0=Math.min(t0,k0.count);let LJ=t0-r0;if(LJ<0||LJ===1/0)return;q0.setup(m,b,M0,p,B0);let cJ,JJ=i;if(B0!==null)cJ=KJ.get(B0),JJ=H0,JJ.setIndex(cJ);if(m.isMesh)if(b.wireframe===!0)z0.setLineWidth(b.wireframeLinewidth*UJ()),JJ.setMode(j.LINES);else JJ.setMode(j.TRIANGLES);else if(m.isLine){let y0=b.linewidth;if(y0===void 0)y0=1;if(z0.setLineWidth(y0*UJ()),m.isLineSegments)JJ.setMode(j.LINES);else if(m.isLineLoop)JJ.setMode(j.LINE_LOOP);else JJ.setMode(j.LINE_STRIP)}else if(m.isPoints)JJ.setMode(j.POINTS);else if(m.isSprite)JJ.setMode(j.TRIANGLES);if(m.isInstancedMesh)JJ.renderInstances(r0,LJ,m.count);else if(p.isInstancedBufferGeometry){let y0=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,W7=Math.min(p.instanceCount,y0);JJ.renderInstances(r0,LJ,W7)}else JJ.render(r0,LJ)},this.compile=function(I,f){function p(b,m,V0){if(b.transparent===!0&&b.side===2&&b.forceSinglePass===!1)b.side=1,b.needsUpdate=!0,R8(b,m,V0),b.side=0,b.needsUpdate=!0,R8(b,m,V0),b.side=2;else R8(b,m,V0)}z=r.get(I),z.init(),V.push(z),I.traverseVisible(function(b){if(b.isLight&&b.layers.test(f.layers)){if(z.pushLight(b),b.castShadow)z.pushShadow(b)}}),z.setupLights(k._useLegacyLights),I.traverse(function(b){let m=b.material;if(m)if(Array.isArray(m))for(let V0=0;V0<m.length;V0++){let O0=m[V0];p(O0,I,b)}else p(m,I,b)}),V.pop(),z=null};let h0=null;function o0(I){if(h0)h0(I)}function lJ(){EJ.stop()}function c0(){EJ.start()}let EJ=new B9;if(EJ.setAnimationLoop(o0),typeof self<"u")EJ.setContext(self);this.setAnimationLoop=function(I){h0=I,P0.setAnimationLoop(I),I===null?EJ.stop():EJ.start()},P0.addEventListener("sessionstart",lJ),P0.addEventListener("sessionend",c0),this.render=function(I,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(P0.enabled===!0&&P0.isPresenting===!0){if(P0.cameraAutoUpdate===!0)P0.updateCamera(f);f=P0.getCamera()}if(I.isScene===!0)I.onBeforeRender(k,I,f,M);if(z=r.get(I,V.length),z.init(),V.push(z),v0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),$0.setFromProjectionMatrix(v0),G0=this.localClippingEnabled,F0=a.init(this.clippingPlanes,G0),_=J0.get(I,R.length),_.init(),R.push(_),xJ(I,f,0,k.sortObjects),_.finish(),k.sortObjects===!0)_.sort(c,u);if(this.info.render.frame++,F0===!0)a.beginShadows();let p=z.state.shadowsArray;if(D0.render(p,I,f),F0===!0)a.endShadows();if(this.info.autoReset===!0)this.info.reset();if(Q0.render(_,I),z.setupLights(k._useLegacyLights),f.isArrayCamera){let b=f.cameras;for(let m=0,V0=b.length;m<V0;m++){let O0=b[m];_6(_,I,O0,O0.viewport)}}else _6(_,I,f);if(M!==null)b0.updateMultisampleRenderTarget(M),b0.updateRenderTargetMipmap(M);if(I.isScene===!0)I.onAfterRender(k,I,f);if(q0.resetDefaultState(),g=-1,l=null,V.pop(),V.length>0)z=V[V.length-1];else z=null;if(R.pop(),R.length>0)_=R[R.length-1];else _=null};function xJ(I,f,p,b){if(I.visible===!1)return;if(I.layers.test(f.layers)){if(I.isGroup)p=I.renderOrder;else if(I.isLOD){if(I.autoUpdate===!0)I.update(f)}else if(I.isLight){if(z.pushLight(I),I.castShadow)z.pushShadow(I)}else if(I.isSprite){if(!I.frustumCulled||$0.intersectsSprite(I)){if(b)A0.setFromMatrixPosition(I.matrixWorld).applyMatrix4(v0);let O0=C.update(I),M0=I.material;if(M0.visible)_.push(I,O0,M0,p,A0.z,null)}}else if(I.isMesh||I.isLine||I.isPoints){if(!I.frustumCulled||$0.intersectsObject(I)){let O0=C.update(I),M0=I.material;if(b){if(I.boundingSphere!==void 0){if(I.boundingSphere===null)I.computeBoundingSphere();A0.copy(I.boundingSphere.center)}else{if(O0.boundingSphere===null)O0.computeBoundingSphere();A0.copy(O0.boundingSphere.center)}A0.applyMatrix4(I.matrixWorld).applyMatrix4(v0)}if(Array.isArray(M0)){let B0=O0.groups;for(let f0=0,I0=B0.length;f0<I0;f0++){let k0=B0[f0],r0=M0[k0.materialIndex];if(r0&&r0.visible)_.push(I,O0,r0,p,A0.z,k0)}}else if(M0.visible)_.push(I,O0,M0,p,A0.z,null)}}}let V0=I.children;for(let O0=0,M0=V0.length;O0<M0;O0++)xJ(V0[O0],f,p,b)}function _6(I,f,p,b){let{opaque:m,transmissive:V0,transparent:O0}=I;if(z.setupLightsView(p),F0===!0)a.setGlobalState(k.clippingPlanes,p);if(V0.length>0)R5(m,V0,f,p);if(b)z0.viewport(E.copy(b));if(m.length>0)V8(m,f,p);if(V0.length>0)V8(V0,f,p);if(O0.length>0)V8(O0,f,p);z0.buffers.depth.setTest(!0),z0.buffers.depth.setMask(!0),z0.buffers.color.setMask(!0),z0.setPolygonOffset(!1)}function R5(I,f,p,b){let m=E0.isWebGL2;if(N0===null)N0=new PJ(1,1,{generateMipmaps:!0,type:j0.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:m?4:0});if(k.getDrawingBufferSize(_0),m)N0.setSize(_0.x,_0.y);else N0.setSize(p8(_0.x),p8(_0.y));let V0=k.getRenderTarget();if(k.setRenderTarget(N0),k.getClearColor(Y0),h=k.getClearAlpha(),h<1)k.setClearColor(16777215,0.5);k.clear();let O0=k.toneMapping;k.toneMapping=0,V8(I,p,b),b0.updateMultisampleRenderTarget(N0),b0.updateRenderTargetMipmap(N0);let M0=!1;for(let B0=0,f0=f.length;B0<f0;B0++){let I0=f[B0],k0=I0.object,r0=I0.geometry,t0=I0.material,LJ=I0.group;if(t0.side===2&&k0.layers.test(b.layers)){let cJ=t0.side;t0.side=1,t0.needsUpdate=!0,O6(k0,p,b,r0,t0,LJ),t0.side=cJ,t0.needsUpdate=!0,M0=!0}}if(M0===!0)b0.updateMultisampleRenderTarget(N0),b0.updateRenderTargetMipmap(N0);k.setRenderTarget(V0),k.setClearColor(Y0,h),k.toneMapping=O0}function V8(I,f,p){let b=f.isScene===!0?f.overrideMaterial:null;for(let m=0,V0=I.length;m<V0;m++){let O0=I[m],M0=O0.object,B0=O0.geometry,f0=b===null?O0.material:b,I0=O0.group;if(M0.layers.test(p.layers))O6(M0,f,p,B0,f0,I0)}}function O6(I,f,p,b,m,V0){if(I.onBeforeRender(k,f,p,b,m,V0),I.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),m.onBeforeRender(k,f,p,b,I,V0),m.transparent===!0&&m.side===2&&m.forceSinglePass===!1)m.side=1,m.needsUpdate=!0,k.renderBufferDirect(p,f,b,m,I,V0),m.side=0,m.needsUpdate=!0,k.renderBufferDirect(p,f,b,m,I,V0),m.side=2;else k.renderBufferDirect(p,f,b,m,I,V0);I.onAfterRender(k,f,p,b,m,V0)}function R8(I,f,p){if(f.isScene!==!0)f=n0;let b=w0.get(I),m=z.state.lights,V0=z.state.shadowsArray,O0=m.state.version,M0=D.getParameters(I,m.state,V0,f,p),B0=D.getProgramCacheKey(M0),f0=b.programs;if(b.environment=I.isMeshStandardMaterial?f.environment:null,b.fog=f.fog,b.envMap=(I.isMeshStandardMaterial?g0:d0).get(I.envMap||b.environment),f0===void 0)I.addEventListener("dispose",e),f0=new Map,b.programs=f0;let I0=f0.get(B0);if(I0!==void 0){if(b.currentProgram===I0&&b.lightsStateVersion===O0)return z6(I,M0),I0}else M0.uniforms=D.getUniforms(I),I.onBuild(p,M0,k),I.onBeforeCompile(M0,k),I0=D.acquireProgram(M0,B0),f0.set(B0,I0),b.uniforms=M0.uniforms;let k0=b.uniforms;if(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)k0.clippingPlanes=a.uniform;if(z6(I,M0),b.needsLights=D5(I),b.lightsStateVersion=O0,b.needsLights)k0.ambientLightColor.value=m.state.ambient,k0.lightProbe.value=m.state.probe,k0.directionalLights.value=m.state.directional,k0.directionalLightShadows.value=m.state.directionalShadow,k0.spotLights.value=m.state.spot,k0.spotLightShadows.value=m.state.spotShadow,k0.rectAreaLights.value=m.state.rectArea,k0.ltc_1.value=m.state.rectAreaLTC1,k0.ltc_2.value=m.state.rectAreaLTC2,k0.pointLights.value=m.state.point,k0.pointLightShadows.value=m.state.pointShadow,k0.hemisphereLights.value=m.state.hemi,k0.directionalShadowMap.value=m.state.directionalShadowMap,k0.directionalShadowMatrix.value=m.state.directionalShadowMatrix,k0.spotShadowMap.value=m.state.spotShadowMap,k0.spotLightMatrix.value=m.state.spotLightMatrix,k0.spotLightMap.value=m.state.spotLightMap,k0.pointShadowMap.value=m.state.pointShadowMap,k0.pointShadowMatrix.value=m.state.pointShadowMatrix;let r0=I0.getUniforms(),t0=W8.seqWithValue(r0.seq,k0);return b.currentProgram=I0,b.uniformsList=t0,I0}function z6(I,f){let p=w0.get(I);p.outputColorSpace=f.outputColorSpace,p.instancing=f.instancing,p.instancingColor=f.instancingColor,p.skinning=f.skinning,p.morphTargets=f.morphTargets,p.morphNormals=f.morphNormals,p.morphColors=f.morphColors,p.morphTargetsCount=f.morphTargetsCount,p.numClippingPlanes=f.numClippingPlanes,p.numIntersection=f.numClipIntersection,p.vertexAlphas=f.vertexAlphas,p.vertexTangents=f.vertexTangents,p.toneMapping=f.toneMapping}function N5(I,f,p,b,m){if(f.isScene!==!0)f=n0;b0.resetTextureUnits();let V0=f.fog,O0=b.isMeshStandardMaterial?f.environment:null,M0=M===null?k.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:"srgb-linear",B0=(b.isMeshStandardMaterial?g0:d0).get(b.envMap||O0),f0=b.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,I0=!!p.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),k0=!!p.morphAttributes.position,r0=!!p.morphAttributes.normal,t0=!!p.morphAttributes.color,LJ=0;if(b.toneMapped){if(M===null||M.isXRRenderTarget===!0)LJ=k.toneMapping}let cJ=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,JJ=cJ!==void 0?cJ.length:0,y0=w0.get(b),W7=z.state.lights;if(F0===!0){if(G0===!0||I!==l){let IJ=I===l&&b.id===g;a.setState(b,I,IJ)}}let $J=!1;if(b.version===y0.__version){if(y0.needsLights&&y0.lightsStateVersion!==W7.state.version)$J=!0;else if(y0.outputColorSpace!==M0)$J=!0;else if(m.isInstancedMesh&&y0.instancing===!1)$J=!0;else if(!m.isInstancedMesh&&y0.instancing===!0)$J=!0;else if(m.isSkinnedMesh&&y0.skinning===!1)$J=!0;else if(!m.isSkinnedMesh&&y0.skinning===!0)$J=!0;else if(m.isInstancedMesh&&y0.instancingColor===!0&&m.instanceColor===null)$J=!0;else if(m.isInstancedMesh&&y0.instancingColor===!1&&m.instanceColor!==null)$J=!0;else if(y0.envMap!==B0)$J=!0;else if(b.fog===!0&&y0.fog!==V0)$J=!0;else if(y0.numClippingPlanes!==void 0&&(y0.numClippingPlanes!==a.numPlanes||y0.numIntersection!==a.numIntersection))$J=!0;else if(y0.vertexAlphas!==f0)$J=!0;else if(y0.vertexTangents!==I0)$J=!0;else if(y0.morphTargets!==k0)$J=!0;else if(y0.morphNormals!==r0)$J=!0;else if(y0.morphColors!==t0)$J=!0;else if(y0.toneMapping!==LJ)$J=!0;else if(E0.isWebGL2===!0&&y0.morphTargetsCount!==JJ)$J=!0}else $J=!0,y0.__version=b.version;let K$=y0.currentProgram;if($J===!0)K$=R8(b,f,m);let I6=!1,s$=!1,K7=!1,DJ=K$.getUniforms(),H$=y0.uniforms;if(z0.useProgram(K$.program))I6=!0,s$=!0,K7=!0;if(b.id!==g)g=b.id,s$=!0;if(I6||l!==I){DJ.setValue(j,"projectionMatrix",I.projectionMatrix),DJ.setValue(j,"viewMatrix",I.matrixWorldInverse);let IJ=DJ.map.cameraPosition;if(IJ!==void 0)IJ.setValue(j,A0.setFromMatrixPosition(I.matrixWorld));if(E0.logarithmicDepthBuffer)DJ.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)DJ.setValue(j,"isOrthographic",I.isOrthographicCamera===!0);if(l!==I)l=I,s$=!0,K7=!0}if(m.isSkinnedMesh){DJ.setOptional(j,m,"bindMatrix"),DJ.setOptional(j,m,"bindMatrixInverse");let IJ=m.skeleton;if(IJ)if(E0.floatVertexTextures){if(IJ.boneTexture===null)IJ.computeBoneTexture();DJ.setValue(j,"boneTexture",IJ.boneTexture,b0),DJ.setValue(j,"boneTextureSize",IJ.boneTextureSize)}else console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")}let H7=p.morphAttributes;if(H7.position!==void 0||H7.normal!==void 0||H7.color!==void 0&&E0.isWebGL2===!0)O.update(m,p,K$);if(s$||y0.receiveShadow!==m.receiveShadow)y0.receiveShadow=m.receiveShadow,DJ.setValue(j,"receiveShadow",m.receiveShadow);if(b.isMeshGouraudMaterial&&b.envMap!==null)H$.envMap.value=B0,H$.flipEnvMap.value=B0.isCubeTexture&&B0.isRenderTargetTexture===!1?-1:1;if(s$){if(DJ.setValue(j,"toneMappingExposure",k.toneMappingExposure),y0.needsLights)E5(H$,K7);if(V0&&b.fog===!0)v.refreshFogUniforms(H$,V0);v.refreshMaterialUniforms(H$,b,t,d,N0),W8.upload(j,y0.uniformsList,H$,b0)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)W8.upload(j,y0.uniformsList,H$,b0),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)DJ.setValue(j,"center",m.center);if(DJ.setValue(j,"modelViewMatrix",m.modelViewMatrix),DJ.setValue(j,"normalMatrix",m.normalMatrix),DJ.setValue(j,"modelMatrix",m.matrixWorld),b.isShaderMaterial||b.isRawShaderMaterial){let IJ=b.uniformsGroups;for(let q7=0,_5=IJ.length;q7<_5;q7++)if(E0.isWebGL2){let M6=IJ[q7];U0.update(M6,K$),U0.bind(M6,K$)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return K$}function E5(I,f){I.ambientLightColor.needsUpdate=f,I.lightProbe.needsUpdate=f,I.directionalLights.needsUpdate=f,I.directionalLightShadows.needsUpdate=f,I.pointLights.needsUpdate=f,I.pointLightShadows.needsUpdate=f,I.spotLights.needsUpdate=f,I.spotLightShadows.needsUpdate=f,I.rectAreaLights.needsUpdate=f,I.hemisphereLights.needsUpdate=f}function D5(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}if(this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(I,f,p){w0.get(I.texture).__webglTexture=f,w0.get(I.depthTexture).__webglTexture=p;let b=w0.get(I);if(b.__hasExternalTextures=!0,b.__hasExternalTextures){if(b.__autoAllocateDepthBuffer=p===void 0,!b.__autoAllocateDepthBuffer){if(j0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),b.__useRenderToTexture=!1}}},this.setRenderTargetFramebuffer=function(I,f){let p=w0.get(I);p.__webglFramebuffer=f,p.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(I,f=0,p=0){M=I,A=f,w=p;let b=!0,m=null,V0=!1,O0=!1;if(I){let B0=w0.get(I);if(B0.__useDefaultFramebuffer!==void 0)z0.bindFramebuffer(j.FRAMEBUFFER,null),b=!1;else if(B0.__webglFramebuffer===void 0)b0.setupRenderTarget(I);else if(B0.__hasExternalTextures)b0.rebindTextures(I,w0.get(I.texture).__webglTexture,w0.get(I.depthTexture).__webglTexture);let f0=I.texture;if(f0.isData3DTexture||f0.isDataArrayTexture||f0.isCompressedArrayTexture)O0=!0;let I0=w0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget){if(Array.isArray(I0[f]))m=I0[f][p];else m=I0[f];V0=!0}else if(E0.isWebGL2&&I.samples>0&&b0.useMultisampledRTT(I)===!1)m=w0.get(I).__webglMultisampledFramebuffer;else if(Array.isArray(I0))m=I0[p];else m=I0;E.copy(I.viewport),L.copy(I.scissor),s=I.scissorTest}else E.copy(o).multiplyScalar(t).floor(),L.copy(T).multiplyScalar(t).floor(),s=n;if(z0.bindFramebuffer(j.FRAMEBUFFER,m)&&E0.drawBuffers&&b)z0.drawBuffers(I,m);if(z0.viewport(E),z0.scissor(L),z0.setScissorTest(s),V0){let B0=w0.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+f,B0.__webglTexture,p)}else if(O0){let B0=w0.get(I.texture),f0=f||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,B0.__webglTexture,p||0,f0)}g=-1},this.readRenderTargetPixels=function(I,f,p,b,m,V0,O0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let M0=w0.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&O0!==void 0)M0=M0[O0];if(M0){z0.bindFramebuffer(j.FRAMEBUFFER,M0);try{let B0=I.texture,f0=B0.format,I0=B0.type;if(f0!==1023&&Z0.convert(f0)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let k0=I0===1016&&(j0.has("EXT_color_buffer_half_float")||E0.isWebGL2&&j0.has("EXT_color_buffer_float"));if(I0!==1009&&Z0.convert(I0)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(I0===1015&&(E0.isWebGL2||j0.has("OES_texture_float")||j0.has("WEBGL_color_buffer_float")))&&!k0){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=I.width-b&&(p>=0&&p<=I.height-m))j.readPixels(f,p,b,m,Z0.convert(f0),Z0.convert(I0),V0)}finally{let B0=M!==null?w0.get(M).__webglFramebuffer:null;z0.bindFramebuffer(j.FRAMEBUFFER,B0)}}},this.copyFramebufferToTexture=function(I,f,p=0){let b=Math.pow(2,-p),m=Math.floor(f.image.width*b),V0=Math.floor(f.image.height*b);b0.setTexture2D(f,0),j.copyTexSubImage2D(j.TEXTURE_2D,p,0,0,I.x,I.y,m,V0),z0.unbindTexture()},this.copyTextureToTexture=function(I,f,p,b=0){let m=f.image.width,V0=f.image.height,O0=Z0.convert(p.format),M0=Z0.convert(p.type);if(b0.setTexture2D(p,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,p.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,p.unpackAlignment),f.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,b,I.x,I.y,m,V0,O0,M0,f.image.data);else if(f.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,b,I.x,I.y,f.mipmaps[0].width,f.mipmaps[0].height,O0,f.mipmaps[0].data);else j.texSubImage2D(j.TEXTURE_2D,b,I.x,I.y,O0,M0,f.image);if(b===0&&p.generateMipmaps)j.generateMipmap(j.TEXTURE_2D);z0.unbindTexture()},this.copyTextureToTexture3D=function(I,f,p,b,m=0){if(k.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let V0=I.max.x-I.min.x+1,O0=I.max.y-I.min.y+1,M0=I.max.z-I.min.z+1,B0=Z0.convert(b.format),f0=Z0.convert(b.type),I0;if(b.isData3DTexture)b0.setTexture3D(b,0),I0=j.TEXTURE_3D;else if(b.isDataArrayTexture)b0.setTexture2DArray(b,0),I0=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,b.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,b.unpackAlignment);let k0=j.getParameter(j.UNPACK_ROW_LENGTH),r0=j.getParameter(j.UNPACK_IMAGE_HEIGHT),t0=j.getParameter(j.UNPACK_SKIP_PIXELS),LJ=j.getParameter(j.UNPACK_SKIP_ROWS),cJ=j.getParameter(j.UNPACK_SKIP_IMAGES),JJ=p.isCompressedTexture?p.mipmaps[0]:p.image;if(j.pixelStorei(j.UNPACK_ROW_LENGTH,JJ.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,JJ.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,I.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,I.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,I.min.z),p.isDataTexture||p.isData3DTexture)j.texSubImage3D(I0,m,f.x,f.y,f.z,V0,O0,M0,B0,f0,JJ.data);else if(p.isCompressedArrayTexture)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(I0,m,f.x,f.y,f.z,V0,O0,M0,B0,JJ.data);else j.texSubImage3D(I0,m,f.x,f.y,f.z,V0,O0,M0,B0,f0,JJ);if(j.pixelStorei(j.UNPACK_ROW_LENGTH,k0),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,r0),j.pixelStorei(j.UNPACK_SKIP_PIXELS,t0),j.pixelStorei(j.UNPACK_SKIP_ROWS,LJ),j.pixelStorei(j.UNPACK_SKIP_IMAGES,cJ),m===0&&b.generateMipmaps)j.generateMipmap(I0);z0.unbindTexture()},this.initTexture=function(I){if(I.isCubeTexture)b0.setTextureCube(I,0);else if(I.isData3DTexture)b0.setTexture3D(I,0);else if(I.isDataArrayTexture||I.isCompressedArrayTexture)b0.setTexture2DArray(I,0);else b0.setTexture2D(I,0);z0.unbindTexture()},this.resetState=function(){A=0,w=0,M=null,z0.reset(),q0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(J){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!J}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?3001:3000}set outputEncoding(J){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=J===3001?"srgb":"srgb-linear"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(J){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=J}}class v9 extends a8{}v9.prototype.isWebGL1Renderer=!0;class r7 extends GJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)$.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)$.object.backgroundIntensity=this.backgroundIntensity;return $}}class h9{constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=tJ()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,Y=this.stride;Z<Y;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=tJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=tJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var _J=new S;class u8{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)_J.fromBufferAttribute(this,$),_J.applyMatrix4(J),this.setXYZ($,_J.x,_J.y,_J.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)_J.fromBufferAttribute(this,$),_J.applyNormalMatrix(J),this.setXYZ($,_J.x,_J.y,_J.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)_J.fromBufferAttribute(this,$),_J.transformDirection(J),this.setXYZ($,_J.x,_J.y,_J.z);return this}setX(J,$){if(this.normalized)$=m0($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=m0($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=m0($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=m0($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=gJ($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=gJ($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=gJ($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=gJ($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=m0($,this.array),Q=m0(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=m0($,this.array),Q=m0(Q,this.array),Z=m0(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,Y){if(J=J*this.data.stride+this.offset,this.normalized)$=m0($,this.array),Q=m0(Q,this.array),Z=m0(Z,this.array),Y=m0(Y,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=Y,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let Y=0;Y<this.itemSize;Y++)$.push(this.data.array[Z+Y])}return new kJ(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new u8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let Y=0;Y<this.itemSize;Y++)$.push(this.data.array[Z+Y])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}class t8 extends D${constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new x0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var x$,t$=new S,v$=new S,h$=new S,g$=new R0,e$=new R0,g9=new e0,y8=new S,J8=new S,x8=new S,X9=new R0,T7=new R0,W9=new R0;class a7 extends GJ{constructor(J){super();if(this.isSprite=!0,this.type="Sprite",x$===void 0){x$=new uJ;let $=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Q=new h9($,5);x$.setIndex([0,1,2,0,2,3]),x$.setAttribute("position",new u8(Q,3,0,!1)),x$.setAttribute("uv",new u8(Q,2,3,!1))}this.geometry=x$,this.material=J!==void 0?J:new t8,this.center=new R0(0.5,0.5)}raycast(J,$){if(J.camera===null)console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(v$.setFromMatrixScale(this.matrixWorld),g9.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),h$.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)v$.multiplyScalar(-h$.z);let Q=this.material.rotation,Z,Y;if(Q!==0)Y=Math.cos(Q),Z=Math.sin(Q);let X=this.center;v8(y8.set(-0.5,-0.5,0),h$,X,v$,Z,Y),v8(J8.set(0.5,-0.5,0),h$,X,v$,Z,Y),v8(x8.set(0.5,0.5,0),h$,X,v$,Z,Y),X9.set(0,0),T7.set(1,0),W9.set(1,1);let K=J.ray.intersectTriangle(y8,J8,x8,!1,t$);if(K===null){if(v8(J8.set(-0.5,0.5,0),h$,X,v$,Z,Y),T7.set(0,1),K=J.ray.intersectTriangle(y8,x8,J8,!1,t$),K===null)return}let W=J.ray.origin.distanceTo(t$);if(W<J.near||W>J.far)return;$.push({distance:W,point:t$.clone(),uv:AJ.getInterpolation(t$,y8,J8,x8,X9,T7,W9,new R0),face:null,object:this})}copy(J,$){if(super.copy(J,$),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function v8(J,$,Q,Z,Y,X){if(g$.subVectors(J,Q).addScalar(0.5).multiply(Z),Y!==void 0)e$.x=X*g$.x-Y*g$.y,e$.y=Y*g$.x+X*g$.y;else e$.copy(g$);J.copy($),J.x+=e$.x,J.y+=e$.y,J.applyMatrix4(g9)}class _$ extends qJ{constructor(J,$,Q,Z,Y,X,K,W,H){super(J,$,Q,Z,Y,X,K,W,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class O$ extends D${constructor(J){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new x0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new x0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}function Y$(J,$,Q){if(p9(J))return new J.constructor(J.subarray($,Q!==void 0?Q:J.length));return J.slice($,Q)}function h8(J,$,Q){if(!J||!Q&&J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function p9(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class H8{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],Y=$[Q-1];Q:{J:{let X;$:{Z:if(!(J<Z)){for(let K=Q+2;;){if(Z===void 0){if(J<Y)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===K)break;if(Y=Z,Z=$[++Q],J<Z)break J}X=$.length;break $}if(!(J>=Y)){let K=$[1];if(J<K)Q=2,Y=K;for(let W=Q-2;;){if(Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===W)break;if(Z=Y,Y=$[--Q-1],J>=Y)break J}X=Q,Q=0;break $}break Q}while(Q<X){let K=Q+X>>>1;if(J<$[K])X=K;else Q=K+1}if(Z=$[Q],Y=$[Q-1],Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,Y,Z)}return this.interpolate_(Q,Y,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,Y=J*Z;for(let X=0;X!==Z;++X)$[X]=Q[Y+X];return $}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class m9 extends H8{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,Y=J-2,X=J+1,K=Z[Y],W=Z[X];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:Y=J,K=2*$-Q;break;case 2402:Y=Z.length-2,K=$+Z[Y]-Z[Y+1];break;default:Y=J,K=Q}if(W===void 0)switch(this.getSettings_().endingEnd){case 2401:X=J,W=2*Q-$;break;case 2402:X=1,W=Q+Z[1]-Z[0];break;default:X=J-1,W=$}let H=(Q-$)*0.5,q=this.valueSize;this._weightPrev=H/($-K),this._weightNext=H/(W-Q),this._offsetPrev=Y*q,this._offsetNext=X*q}interpolate_(J,$,Q,Z){let Y=this.resultBuffer,X=this.sampleValues,K=this.valueSize,W=J*K,H=W-K,q=this._offsetPrev,U=this._offsetNext,G=this._weightPrev,F=this._weightNext,N=(Q-$)/(Z-$),_=N*N,z=_*N,R=-G*z+2*G*_-G*N,V=(1+G)*z+(-1.5-2*G)*_+(-0.5+G)*N+1,k=(-1-F)*z+(1.5+F)*_+0.5*N,B=F*z-F*_;for(let A=0;A!==K;++A)Y[A]=R*X[q+A]+V*X[H+A]+k*X[W+A]+B*X[U+A];return Y}}class u9 extends H8{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let Y=this.resultBuffer,X=this.sampleValues,K=this.valueSize,W=J*K,H=W-K,q=(Q-$)/(Z-$),U=1-q;for(let G=0;G!==K;++G)Y[G]=X[H+G]*U+X[W+G]*q;return Y}}class d9 extends H8{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class dJ{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=h8($,this.TimeBufferType),this.values=h8(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:h8(J.times,Array),values:h8(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new d9(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new u9(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new m9(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return console.warn("THREE.KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J}return this}trim(J,$){let Q=this.times,Z=Q.length,Y=0,X=Z-1;while(Y!==Z&&Q[Y]<J)++Y;while(X!==-1&&Q[X]>$)--X;if(++X,Y!==0||X!==Z){if(Y>=X)X=Math.max(X,1),Y=X-1;let K=this.getValueSize();this.times=Y$(Q,Y,X),this.values=Y$(this.values,Y*K,X*K)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,Y=Q.length;if(Y===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let X=null;for(let K=0;K!==Y;K++){let W=Q[K];if(typeof W==="number"&&isNaN(W)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,K,W),J=!1;break}if(X!==null&&X>W){console.error("THREE.KeyframeTrack: Out of order keys.",this,K,W,X),J=!1;break}X=W}if(Z!==void 0){if(p9(Z))for(let K=0,W=Z.length;K!==W;++K){let H=Z[K];if(isNaN(H)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,K,H),J=!1;break}}}return J}optimize(){let J=Y$(this.times),$=Y$(this.values),Q=this.getValueSize(),Z=this.getInterpolation()===2302,Y=J.length-1,X=1;for(let K=1;K<Y;++K){let W=!1,H=J[K],q=J[K+1];if(H!==q&&(K!==1||H!==J[0]))if(!Z){let U=K*Q,G=U-Q,F=U+Q;for(let N=0;N!==Q;++N){let _=$[U+N];if(_!==$[G+N]||_!==$[F+N]){W=!0;break}}}else W=!0;if(W){if(K!==X){J[X]=J[K];let U=K*Q,G=X*Q;for(let F=0;F!==Q;++F)$[G+F]=$[U+F]}++X}}if(Y>0){J[X]=J[Y];for(let K=Y*Q,W=X*Q,H=0;H!==Q;++H)$[W+H]=$[K+H];++X}if(X!==J.length)this.times=Y$(J,0,X),this.values=Y$($,0,X*Q);else this.times=J,this.values=$;return this}clone(){let J=Y$(this.times,0),$=Y$(this.values,0),Z=new this.constructor(this.name,J,$);return Z.createInterpolant=this.createInterpolant,Z}}dJ.prototype.TimeBufferType=Float32Array;dJ.prototype.ValueBufferType=Float32Array;dJ.prototype.DefaultInterpolation=2301;class c$ extends dJ{}c$.prototype.ValueTypeName="bool";c$.prototype.ValueBufferType=Array;c$.prototype.DefaultInterpolation=2300;c$.prototype.InterpolantFactoryMethodLinear=void 0;c$.prototype.InterpolantFactoryMethodSmooth=void 0;class l9 extends dJ{}l9.prototype.ValueTypeName="color";class c9 extends dJ{}c9.prototype.ValueTypeName="number";class n9 extends H8{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let Y=this.resultBuffer,X=this.sampleValues,K=this.valueSize,W=(Q-$)/(Z-$),H=J*K;for(let q=H+K;H!==q;H+=4)mJ.slerpFlat(Y,0,X,H-K,X,H,W);return Y}}class e8 extends dJ{InterpolantFactoryMethodLinear(J){return new n9(this.times,this.values,this.getValueSize(),J)}}e8.prototype.ValueTypeName="quaternion";e8.prototype.DefaultInterpolation=2301;e8.prototype.InterpolantFactoryMethodSmooth=void 0;class n$ extends dJ{}n$.prototype.ValueTypeName="string";n$.prototype.ValueBufferType=Array;n$.prototype.DefaultInterpolation=2300;n$.prototype.InterpolantFactoryMethodLinear=void 0;n$.prototype.InterpolantFactoryMethodSmooth=void 0;class s9 extends dJ{}s9.prototype.ValueTypeName="vector";class i9{constructor(J,$,Q){let Z=this,Y=!1,X=0,K=0,W=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this.itemStart=function(q){if(K++,Y===!1){if(Z.onStart!==void 0)Z.onStart(q,X,K)}Y=!0},this.itemEnd=function(q){if(X++,Z.onProgress!==void 0)Z.onProgress(q,X,K);if(X===K){if(Y=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(q){if(Z.onError!==void 0)Z.onError(q)},this.resolveURL=function(q){if(W)return W(q);return q},this.setURLModifier=function(q){return W=q,this},this.addHandler=function(q,U){return H.push(q,U),this},this.removeHandler=function(q){let U=H.indexOf(q);if(U!==-1)H.splice(U,2);return this},this.getHandler=function(q){for(let U=0,G=H.length;U<G;U+=2){let F=H[U],N=H[U+1];if(F.global)F.lastIndex=0;if(F.test(q))return N}return null}}}var L4=new i9;class o9{constructor(J){this.manager=J!==void 0?J:L4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,Y){Q.load(J,Z,$,Y)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}o9.DEFAULT_MATERIAL_NAME="__DEFAULT";class t7 extends GJ{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new x0(J),this.intensity=$}dispose(){}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);if($.object.color=this.color.getHex(),$.object.intensity=this.intensity,this.groundColor!==void 0)$.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)$.object.distance=this.distance;if(this.angle!==void 0)$.object.angle=this.angle;if(this.decay!==void 0)$.object.decay=this.decay;if(this.penumbra!==void 0)$.object.penumbra=this.penumbra;if(this.shadow!==void 0)$.object.shadow=this.shadow.toJSON();return $}}var S7=new e0,K9=new S,H9=new S;class r9{constructor(J){this.camera=J,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R0(512,512),this.map=null,this.mapPass=null,this.matrix=new e0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new s8,this._frameExtents=new R0(1,1),this._viewportCount=1,this._viewports=[new s0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera,Q=this.matrix;K9.setFromMatrixPosition(J.matrixWorld),$.position.copy(K9),H9.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(H9),$.updateMatrixWorld(),S7.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S7),Q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Q.multiply(S7)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var q9=new e0,$8=new S,j7=new S;class a9 extends r9{constructor(){super(new zJ(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new R0(4,2),this._viewportCount=6,this._viewports=[new s0(2,1,1,1),new s0(0,1,1,1),new s0(3,1,1,1),new s0(1,1,1,1),new s0(3,0,1,1),new s0(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(J,$=0){let Q=this.camera,Z=this.matrix,Y=J.distance||Q.far;if(Y!==Q.far)Q.far=Y,Q.updateProjectionMatrix();$8.setFromMatrixPosition(J.matrixWorld),Q.position.copy($8),j7.copy(Q.position),j7.add(this._cubeDirections[$]),Q.up.copy(this._cubeUps[$]),Q.lookAt(j7),Q.updateMatrixWorld(),Z.makeTranslation(-$8.x,-$8.y,-$8.z),q9.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q9)}}class e7 extends t7{constructor(J,$,Q=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new a9}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class J6 extends t7{constructor(J,$){super(J,$);this.isAmbientLight=!0,this.type="AmbientLight"}}class q8{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=G9(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=G9();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}function G9(){return(typeof performance>"u"?Date:performance).now()}var $6="\\[\\]\\.:\\/",w4=new RegExp("["+$6+"]","g"),Q6="[^"+$6+"]",A4="[^"+$6.replace("\\.","")+"]",P4=/((?:WC+[\/:])*)/.source.replace("WC",Q6),T4=/(WCOD+)?/.source.replace("WCOD",A4),S4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Q6),j4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Q6),f4=new RegExp("^"+P4+T4+S4+j4+"$"),b4=["material","materials","bones","map"];class t9{constructor(J,$,Q){let Z=Q||u0.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,Y=Q.length;Z!==Y;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class u0{constructor(J,$,Q){this.path=$,this.parsedPath=Q||u0.parseTrackName($),this.node=u0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new u0(J,$,Q);else return new u0.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(w4,"")}static parseTrackName(J){let $=f4.exec(J);if($===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let Y=Q.nodeName.substring(Z+1);if(b4.indexOf(Y)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=Y}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(Y){for(let X=0;X<Y.length;X++){let K=Y[X];if(K.name===$||K.uuid===$)return K;let W=Q(K.children);if(W)return W}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,Y=Q.length;Z!==Y;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,Y=Q.length;Z!==Y;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,Y=Q.length;Z!==Y;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,Y=Q.length;Z!==Y;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,Y=$.propertyIndex;if(!J)J=u0.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let H=$.objectIndex;switch(Q){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let q=0;q<J.length;q++)if(J[q].name===H){H=q;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(H!==void 0){if(J[H]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let X=J[Z];if(X===void 0){let H=$.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let K=this.Versioning.None;if(this.targetObject=J,J.needsUpdate!==void 0)K=this.Versioning.NeedsUpdate;else if(J.matrixWorldNeedsUpdate!==void 0)K=this.Versioning.MatrixWorldNeedsUpdate;let W=this.BindingType.Direct;if(Y!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Y]!==void 0)Y=J.morphTargetDictionary[Y]}W=this.BindingType.ArrayElement,this.resolvedProperty=X,this.propertyIndex=Y}else if(X.fromArray!==void 0&&X.toArray!==void 0)W=this.BindingType.HasFromToArray,this.resolvedProperty=X;else if(Array.isArray(X))W=this.BindingType.EntireArray,this.resolvedProperty=X;else this.propertyName=Z;this.getValue=this.GetterByBindingType[W],this.setValue=this.SetterByBindingTypeAndVersioning[W][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}u0.Composite=t9;u0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};u0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};u0.prototype.GetterByBindingType=[u0.prototype._getValue_direct,u0.prototype._getValue_array,u0.prototype._getValue_arrayElement,u0.prototype._getValue_toArray];u0.prototype.SetterByBindingTypeAndVersioning=[[u0.prototype._setValue_direct,u0.prototype._setValue_direct_setNeedsUpdate,u0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[u0.prototype._setValue_array,u0.prototype._setValue_array_setNeedsUpdate,u0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[u0.prototype._setValue_arrayElement,u0.prototype._setValue_arrayElement_setNeedsUpdate,u0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[u0.prototype._setValue_fromArray,u0.prototype._setValue_fromArray_setNeedsUpdate,u0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l4=new Float32Array(1);class J7{constructor(J=1,$=0,Q=0){return this.radius=J,this.phi=$,this.theta=Q,this}set(J,$,Q){return this.radius=J,this.phi=$,this.theta=Q,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Q){if(this.radius=Math.sqrt(J*J+$*$+Q*Q),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Q),this.phi=Math.acos(RJ($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"156"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="156";function Y6(J,$,Q,Z,Y,X,K,W){let H=(g,l,E,L)=>[new R0(g/K,1-L/W),new R0(E/K,1-L/W),new R0(E/K,1-l/W),new R0(g/K,1-l/W)],q=H($+X,Q,$+Z+X,Q+X),U=H($+Z+X,Q,$+Z*2+X,Q+X),G=H($,Q+X,$+X,Q+X+Y),F=H($+X,Q+X,$+Z+X,Q+X+Y),N=H($+Z+X,Q+X,$+Z+X*2,Q+Y+X),_=H($+Z+X*2,Q+X,$+Z*2+X*2,Q+Y+X),z=J.attributes.uv,R=[N[3],N[2],N[0],N[1]],V=[G[3],G[2],G[0],G[1]],k=[q[3],q[2],q[0],q[1]],B=[U[0],U[1],U[3],U[2]],A=[F[3],F[2],F[0],F[1]],w=[_[3],_[2],_[0],_[1]],M=[];for(let g of[R,V,k,B,A,w])for(let l of g)M.push(l.x,l.y);z.set(new Float32Array(M)),z.needsUpdate=!0}function TJ(J,$,Q,Z,Y,X){Y6(J,$,Q,Z,Y,X,64,64)}function Z6(J,$,Q,Z,Y,X){Y6(J,$,Q,Z,Y,X,64,32)}class X$ extends ZJ{constructor(J,$){super();Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:J}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:$}),J.name="inner",$.name="outer"}}class J5 extends ZJ{constructor(){super();Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new O$({side:x7}),this.layer2Material=new O$({side:d8,transparent:!0,alphaTest:0.00001}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;let J=new a0(8,8,8);TJ(J,0,0,8,8,8);let $=new p0(J,this.layer1Material),Q=new a0(9,9,9);TJ(Q,32,0,8,8,8);let Z=new p0(Q,this.layer2Material);this.head=new X$($,Z),this.head.name="head",this.head.add($,Z),$.position.y=4,Z.position.y=4,this.add(this.head);let Y=new a0(8,12,4);TJ(Y,16,16,8,12,4);let X=new p0(Y,this.layer1Material),K=new a0(8.5,12.5,4.5);TJ(K,16,32,8,12,4);let W=new p0(K,this.layer2Material);this.body=new X$(X,W),this.body.name="body",this.body.add(X,W),this.body.position.y=-6,this.add(this.body);let H=new a0,q=new p0(H,this.layer1MaterialBiased);this.modelListeners.push(()=>{q.scale.x=this.slim?3:4,q.scale.y=12,q.scale.z=4,TJ(H,40,16,this.slim?3:4,12,4)});let U=new a0,G=new p0(U,this.layer2MaterialBiased);this.modelListeners.push(()=>{G.scale.x=this.slim?3.5:4.5,G.scale.y=12.5,G.scale.z=4.5,TJ(U,40,32,this.slim?3:4,12,4)});let F=new ZJ;F.add(q,G),this.modelListeners.push(()=>{F.position.x=this.slim?-0.5:-1}),F.position.y=-4,this.rightArm=new X$(q,G),this.rightArm.name="rightArm",this.rightArm.add(F),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);let N=new a0,_=new p0(N,this.layer1MaterialBiased);this.modelListeners.push(()=>{_.scale.x=this.slim?3:4,_.scale.y=12,_.scale.z=4,TJ(N,32,48,this.slim?3:4,12,4)});let z=new a0,R=new p0(z,this.layer2MaterialBiased);this.modelListeners.push(()=>{R.scale.x=this.slim?3.5:4.5,R.scale.y=12.5,R.scale.z=4.5,TJ(z,48,48,this.slim?3:4,12,4)});let V=new ZJ;V.add(_,R),this.modelListeners.push(()=>{V.position.x=this.slim?0.5:1}),V.position.y=-4,this.leftArm=new X$(_,R),this.leftArm.name="leftArm",this.leftArm.add(V),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);let k=new a0(4,12,4);TJ(k,0,16,4,12,4);let B=new p0(k,this.layer1MaterialBiased),A=new a0(4.5,12.5,4.5);TJ(A,0,32,4,12,4);let w=new p0(A,this.layer2MaterialBiased),M=new ZJ;M.add(B,w),M.position.y=-6,this.rightLeg=new X$(B,w),this.rightLeg.name="rightLeg",this.rightLeg.add(M),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-0.1,this.add(this.rightLeg);let g=new a0(4,12,4);TJ(g,16,48,4,12,4);let l=new p0(g,this.layer1MaterialBiased),E=new a0(4.5,12.5,4.5);TJ(E,0,48,4,12,4);let L=new p0(E,this.layer2MaterialBiased),s=new ZJ;s.add(l,L),s.position.y=-6,this.leftLeg=new X$(l,L),this.leftLeg.name="leftLeg",this.leftLeg.add(s),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-0.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(J){this._map=J,this.layer1Material.map=J,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=J,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=J,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=J,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(J){this.slim=J==="slim",this.modelListeners.forEach(($)=>$())}getBodyParts(){return this.children.filter((J)=>J instanceof X$)}setInnerLayerVisible(J){this.getBodyParts().forEach(($)=>$.innerLayer.visible=J)}setOuterLayerVisible(J){this.getBodyParts().forEach(($)=>$.outerLayer.visible=J)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-0.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-0.1}}class $5 extends ZJ{constructor(){super();Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new O$({side:d8,transparent:!0,alphaTest:0.00001});let J=new a0(10,16,1);Z6(J,0,0,10,16,1),this.cape=new p0(J,this.material),this.cape.position.y=-8,this.cape.position.z=0.5,this.add(this.cape)}get map(){return this.material.map}set map(J){this.material.map=J,this.material.needsUpdate=!0}}class Q5 extends ZJ{constructor(){super();Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new O$({side:d8,transparent:!0,alphaTest:0.00001});let J=new a0(12,22,4);Z6(J,22,0,10,20,2);let $=new p0(J,this.material);$.position.x=-5,$.position.y=-10,$.position.z=-1,this.leftWing=new ZJ,this.leftWing.add($),this.add(this.leftWing);let Q=new a0(12,22,4);Z6(Q,22,0,10,20,2);let Z=new p0(Q,this.material);Z.scale.x=-1,Z.position.x=5,Z.position.y=-10,Z.position.z=-1,this.rightWing=new ZJ,this.rightWing.add(Z),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=0.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=0.01,this.leftWing.rotation.z=0.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(J){this.material.map=J,this.material.needsUpdate=!0}}class Z5 extends ZJ{constructor(){super();Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new O$({side:x7});let J=new a0(8,8,1.3333333333333333);Y6(J,0,0,6,6,1,14,7),this.rightEar=new p0(J,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new p0(J,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(J){this.material.map=J,this.material.needsUpdate=!0}}var e9=10.8*Math.PI/180;class $7 extends ZJ{constructor(){super();Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new J5,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new $5,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=e9,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Q5,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Z5,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=0.6666666666666666,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){if(this.cape.visible)return"cape";if(this.elytra.visible)return"elytra";return null}set backEquipment(J){this.cape.visible=J==="cape",this.elytra.visible=J==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=e9,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function G8(J){return J instanceof HTMLImageElement||J instanceof HTMLVideoElement||J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&J instanceof OffscreenCanvas}function X6(J,$,Q,Z,Y){let X=J.getImageData($,Q,Z,Y);for(let K=0;K<Z;K++)for(let W=0;W<Y;W++){let H=(K+W*Z)*4;if(X.data[H+3]!==255)return!0}return!1}function Q7(J){return J/64}function Y5(J,$,Q){if(Q){if(X6(J,0,0,$,$))return}else if(X6(J,0,0,$,$/2))return;let Z=Q7($),Y=(X,K,W,H)=>J.clearRect(X*Z,K*Z,W*Z,H*Z);if(Y(40,0,8,8),Y(48,0,8,8),Y(32,8,8,8),Y(40,8,8,8),Y(48,8,8,8),Y(56,8,8,8),Q)Y(4,32,4,4),Y(8,32,4,4),Y(0,36,4,12),Y(4,36,4,12),Y(8,36,4,12),Y(12,36,4,12),Y(20,32,8,4),Y(28,32,8,4),Y(16,36,4,12),Y(20,36,8,12),Y(28,36,4,12),Y(32,36,8,12),Y(44,32,4,4),Y(48,32,4,4),Y(40,36,4,12),Y(44,36,4,12),Y(48,36,4,12),Y(52,36,12,12),Y(4,48,4,4),Y(8,48,4,4),Y(0,52,4,12),Y(4,52,4,12),Y(8,52,4,12),Y(12,52,4,12),Y(52,48,4,4),Y(56,48,4,4),Y(48,52,4,12),Y(52,52,4,12),Y(56,52,4,12),Y(60,52,4,12)}function y4(J,$){J.save(),J.scale(-1,1);let Q=Q7($),Z=(Y,X,K,W,H,q)=>J.drawImage(J.canvas,Y*Q,X*Q,K*Q,W*Q,-H*Q,q*Q,-K*Q,W*Q);Z(4,16,4,4,20,48),Z(8,16,4,4,24,48),Z(0,20,4,12,24,52),Z(4,20,4,12,20,52),Z(8,20,4,12,16,52),Z(12,20,4,12,28,52),Z(44,16,4,4,36,48),Z(48,16,4,4,40,48),Z(40,20,4,12,40,52),Z(44,20,4,12,36,52),Z(48,20,4,12,32,52),Z(52,20,4,12,44,52),J.restore()}function X5(J,$){let Q=!1;if($.width!==$.height)if($.width===2*$.height)Q=!0;else throw Error(`Bad skin size: ${$.width}x${$.height}`);let Z=J.getContext("2d",{willReadFrequently:!0});if(Q){let Y=$.width;J.width=Y,J.height=Y,Z.clearRect(0,0,Y,Y),Z.drawImage($,0,0,Y,Y/2),y4(Z,Y),Y5(Z,J.width,!1)}else J.width=$.width,J.height=$.height,Z.clearRect(0,0,$.width,$.height),Z.drawImage($,0,0,J.width,J.height),Y5(Z,J.width,!0)}function x4(J){if(J.width===2*J.height)return J.width/64;else if(J.width*17===J.height*22)return J.width/22;else if(J.width*11===J.height*23)return J.width/46;else throw Error(`Bad cape size: ${J.width}x${J.height}`)}function W5(J,$){let Q=x4($);J.width=64*Q,J.height=32*Q;let Z=J.getContext("2d",{willReadFrequently:!0});Z.clearRect(0,0,J.width,J.height),Z.drawImage($,0,0,$.width,$.height)}function v4(J,$,Q,Z,Y){let X=J.getImageData($,Q,Z,Y);for(let K=0;K<Z;K++)for(let W=0;W<Y;W++){let H=(K+W*Z)*4;if(!(X.data[H+0]===0&&X.data[H+1]===0&&X.data[H+2]===0&&X.data[H+3]===255))return!1}return!0}function h4(J,$,Q,Z,Y){let X=J.getImageData($,Q,Z,Y);for(let K=0;K<Z;K++)for(let W=0;W<Y;W++){let H=(K+W*Z)*4;if(!(X.data[H+0]===255&&X.data[H+1]===255&&X.data[H+2]===255&&X.data[H+3]===255))return!1}return!0}function K5(J){let $=Q7(J.width),Q=J.getContext("2d",{willReadFrequently:!0}),Z=(W,H,q,U)=>X6(Q,W*$,H*$,q*$,U*$),Y=(W,H,q,U)=>v4(Q,W*$,H*$,q*$,U*$),X=(W,H,q,U)=>h4(Q,W*$,H*$,q*$,U*$);return Z(50,16,2,4)||Z(54,20,2,12)||Z(42,48,2,4)||Z(46,52,2,12)||Y(50,16,2,4)&&Y(54,20,2,12)&&Y(42,48,2,4)&&Y(46,52,2,12)||X(50,16,2,4)&&X(54,20,2,12)&&X(42,48,2,4)&&X(46,52,2,12)?"slim":"default"}function g4(J){if(J.width===J.height*2&&J.height%7===0)return J.height/7;else throw Error(`Bad ears size: ${J.width}x${J.height}`)}function H5(J,$){let Q=g4($);J.width=14*Q,J.height=7*Q;let Z=J.getContext("2d",{willReadFrequently:!0});Z.clearRect(0,0,J.width,J.height),Z.drawImage($,0,0,$.width,$.height)}function W6(J,$){if($.width!==$.height&&$.width!==2*$.height)throw Error(`Bad skin size: ${$.width}x${$.height}`);let Q=Q7($.width),Z=14*Q,Y=7*Q;J.width=Z,J.height=Y;let X=J.getContext("2d",{willReadFrequently:!0});X.clearRect(0,0,Z,Y),X.drawImage($,24*Q,0,Z,Y,0,0,Z,Y)}async function U8(J){let $=document.createElement("img");return new Promise((Q,Z)=>{if($.onload=()=>Q($),$.onerror=Z,$.crossOrigin="anonymous",typeof J==="string")$.src=J;else{if(J.crossOrigin!==void 0)$.crossOrigin=J.crossOrigin;if(J.referrerPolicy!==void 0)$.referrerPolicy=J.referrerPolicy;$.src=J.src}})}var q5={type:"change"},K6={type:"start"},G5={type:"end"},Z7=new c8,U5=new vJ,p4=Math.cos(70*N9.DEG2RAD);class H6 extends eJ{constructor(J,$){super();this.object=J,this.domElement=$,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:N$.ROTATE,MIDDLE:N$.DOLLY,RIGHT:N$.PAN},this.touches={ONE:E$.ROTATE,TWO:E$.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return K.phi},this.getAzimuthalAngle=function(){return K.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",C),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",C),this._domElementKeyEvents=null},this.saveState=function(){Q.target0.copy(Q.target),Q.position0.copy(Q.object.position),Q.zoom0=Q.object.zoom},this.reset=function(){Q.target.copy(Q.target0),Q.object.position.copy(Q.position0),Q.object.zoom=Q.zoom0,Q.object.updateProjectionMatrix(),Q.dispatchEvent(q5),Q.update(),Y=Z.NONE},this.update=function(){let O=new S,i=new mJ().setFromUnitVectors(J.up,new S(0,1,0)),H0=i.clone().invert(),Z0=new S,q0=new mJ,U0=new S,C0=2*Math.PI;return function(P=null){let W0=Q.object.position;if(O.copy(W0).sub(Q.target),O.applyQuaternion(i),K.setFromVector3(O),Q.autoRotate&&Y===Z.NONE)L(l(P));if(Q.enableDamping)K.theta+=W.theta*Q.dampingFactor,K.phi+=W.phi*Q.dampingFactor;else K.theta+=W.theta,K.phi+=W.phi;let{minAzimuthAngle:x,maxAzimuthAngle:e}=Q;if(isFinite(x)&&isFinite(e)){if(x<-Math.PI)x+=C0;else if(x>Math.PI)x-=C0;if(e<-Math.PI)e+=C0;else if(e>Math.PI)e-=C0;if(x<=e)K.theta=Math.max(x,Math.min(e,K.theta));else K.theta=K.theta>(x+e)/2?Math.max(x,K.theta):Math.min(e,K.theta)}if(K.phi=Math.max(Q.minPolarAngle,Math.min(Q.maxPolarAngle,K.phi)),K.makeSafe(),Q.enableDamping===!0)Q.target.addScaledVector(q,Q.dampingFactor);else Q.target.add(q);if(Q.zoomToCursor&&w||Q.object.isOrthographicCamera)K.radius=u(K.radius);else K.radius=u(K.radius*H);if(O.setFromSpherical(K),O.applyQuaternion(H0),W0.copy(Q.target).add(O),Q.object.lookAt(Q.target),Q.enableDamping===!0)W.theta*=1-Q.dampingFactor,W.phi*=1-Q.dampingFactor,q.multiplyScalar(1-Q.dampingFactor);else W.set(0,0,0),q.set(0,0,0);let K0=!1;if(Q.zoomToCursor&&w){let T0=null;if(Q.object.isPerspectiveCamera){let h0=O.length();T0=u(h0*H);let o0=h0-T0;Q.object.position.addScaledVector(B,o0),Q.object.updateMatrixWorld()}else if(Q.object.isOrthographicCamera){let h0=new S(A.x,A.y,0);h0.unproject(Q.object),Q.object.zoom=Math.max(Q.minZoom,Math.min(Q.maxZoom,Q.object.zoom/H)),Q.object.updateProjectionMatrix(),K0=!0;let o0=new S(A.x,A.y,0);o0.unproject(Q.object),Q.object.position.sub(o0).add(h0),Q.object.updateMatrixWorld(),T0=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),Q.zoomToCursor=!1;if(T0!==null)if(this.screenSpacePanning)Q.target.set(0,0,-1).transformDirection(Q.object.matrix).multiplyScalar(T0).add(Q.object.position);else if(Z7.origin.copy(Q.object.position),Z7.direction.set(0,0,-1).transformDirection(Q.object.matrix),Math.abs(Q.object.up.dot(Z7.direction))<p4)J.lookAt(Q.target);else U5.setFromNormalAndCoplanarPoint(Q.object.up,Q.target),Z7.intersectPlane(U5,Q.target)}else if(Q.object.isOrthographicCamera)Q.object.zoom=Math.max(Q.minZoom,Math.min(Q.maxZoom,Q.object.zoom/H)),Q.object.updateProjectionMatrix(),K0=!0;if(H=1,w=!1,K0||Z0.distanceToSquared(Q.object.position)>X||8*(1-q0.dot(Q.object.quaternion))>X||U0.distanceToSquared(Q.target)>0)return Q.dispatchEvent(q5),Z0.copy(Q.object.position),q0.copy(Q.object.quaternion),U0.copy(Q.target),K0=!1,!0;return!1}}(),this.dispose=function(){if(Q.domElement.removeEventListener("contextmenu",J0),Q.domElement.removeEventListener("pointerdown",w0),Q.domElement.removeEventListener("pointercancel",d0),Q.domElement.removeEventListener("wheel",NJ),Q.domElement.removeEventListener("pointermove",b0),Q.domElement.removeEventListener("pointerup",d0),Q._domElementKeyEvents!==null)Q._domElementKeyEvents.removeEventListener("keydown",C),Q._domElementKeyEvents=null};let Q=this,Z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Y=Z.NONE,X=0.000001,K=new J7,W=new J7,H=1,q=new S,U=new R0,G=new R0,F=new R0,N=new R0,_=new R0,z=new R0,R=new R0,V=new R0,k=new R0,B=new S,A=new R0,w=!1,M=[],g={};function l(O){if(O!==null)return 2*Math.PI/60*Q.autoRotateSpeed*O;else return 2*Math.PI/60/60*Q.autoRotateSpeed}function E(){return Math.pow(0.95,Q.zoomSpeed)}function L(O){W.theta-=O}function s(O){W.phi-=O}let Y0=function(){let O=new S;return function(H0,Z0){O.setFromMatrixColumn(Z0,0),O.multiplyScalar(-H0),q.add(O)}}(),h=function(){let O=new S;return function(H0,Z0){if(Q.screenSpacePanning===!0)O.setFromMatrixColumn(Z0,1);else O.setFromMatrixColumn(Z0,0),O.crossVectors(Q.object.up,O);O.multiplyScalar(H0),q.add(O)}}(),y=function(){let O=new S;return function(H0,Z0){let q0=Q.domElement;if(Q.object.isPerspectiveCamera){let U0=Q.object.position;O.copy(U0).sub(Q.target);let C0=O.length();C0*=Math.tan(Q.object.fov/2*Math.PI/180),Y0(2*H0*C0/q0.clientHeight,Q.object.matrix),h(2*Z0*C0/q0.clientHeight,Q.object.matrix)}else if(Q.object.isOrthographicCamera)Y0(H0*(Q.object.right-Q.object.left)/Q.object.zoom/q0.clientWidth,Q.object.matrix),h(Z0*(Q.object.top-Q.object.bottom)/Q.object.zoom/q0.clientHeight,Q.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),Q.enablePan=!1}}();function d(O){if(Q.object.isPerspectiveCamera||Q.object.isOrthographicCamera)H/=O;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Q.enableZoom=!1}function t(O){if(Q.object.isPerspectiveCamera||Q.object.isOrthographicCamera)H*=O;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),Q.enableZoom=!1}function c(O){if(!Q.zoomToCursor)return;w=!0;let i=Q.domElement.getBoundingClientRect(),H0=O.clientX-i.left,Z0=O.clientY-i.top,q0=i.width,U0=i.height;A.x=H0/q0*2-1,A.y=-(Z0/U0)*2+1,B.set(A.x,A.y,1).unproject(Q.object).sub(Q.object.position).normalize()}function u(O){return Math.max(Q.minDistance,Math.min(Q.maxDistance,O))}function o(O){U.set(O.clientX,O.clientY)}function T(O){c(O),R.set(O.clientX,O.clientY)}function n(O){N.set(O.clientX,O.clientY)}function $0(O){G.set(O.clientX,O.clientY),F.subVectors(G,U).multiplyScalar(Q.rotateSpeed);let i=Q.domElement;L(2*Math.PI*F.x/i.clientHeight),s(2*Math.PI*F.y/i.clientHeight),U.copy(G),Q.update()}function F0(O){if(V.set(O.clientX,O.clientY),k.subVectors(V,R),k.y>0)d(E());else if(k.y<0)t(E());R.copy(V),Q.update()}function G0(O){_.set(O.clientX,O.clientY),z.subVectors(_,N).multiplyScalar(Q.panSpeed),y(z.x,z.y),N.copy(_),Q.update()}function N0(O){if(c(O),O.deltaY<0)t(E());else if(O.deltaY>0)d(E());Q.update()}function v0(O){let i=!1;switch(O.code){case Q.keys.UP:if(O.ctrlKey||O.metaKey||O.shiftKey)s(2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else y(0,Q.keyPanSpeed);i=!0;break;case Q.keys.BOTTOM:if(O.ctrlKey||O.metaKey||O.shiftKey)s(-2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else y(0,-Q.keyPanSpeed);i=!0;break;case Q.keys.LEFT:if(O.ctrlKey||O.metaKey||O.shiftKey)L(2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else y(Q.keyPanSpeed,0);i=!0;break;case Q.keys.RIGHT:if(O.ctrlKey||O.metaKey||O.shiftKey)L(-2*Math.PI*Q.rotateSpeed/Q.domElement.clientHeight);else y(-Q.keyPanSpeed,0);i=!0;break}if(i)O.preventDefault(),Q.update()}function _0(){if(M.length===1)U.set(M[0].pageX,M[0].pageY);else{let O=0.5*(M[0].pageX+M[1].pageX),i=0.5*(M[0].pageY+M[1].pageY);U.set(O,i)}}function A0(){if(M.length===1)N.set(M[0].pageX,M[0].pageY);else{let O=0.5*(M[0].pageX+M[1].pageX),i=0.5*(M[0].pageY+M[1].pageY);N.set(O,i)}}function n0(){let O=M[0].pageX-M[1].pageX,i=M[0].pageY-M[1].pageY,H0=Math.sqrt(O*O+i*i);R.set(0,H0)}function UJ(){if(Q.enableZoom)n0();if(Q.enablePan)A0()}function j(){if(Q.enableZoom)n0();if(Q.enableRotate)_0()}function i0(O){if(M.length==1)G.set(O.pageX,O.pageY);else{let H0=Q0(O),Z0=0.5*(O.pageX+H0.x),q0=0.5*(O.pageY+H0.y);G.set(Z0,q0)}F.subVectors(G,U).multiplyScalar(Q.rotateSpeed);let i=Q.domElement;L(2*Math.PI*F.x/i.clientHeight),s(2*Math.PI*F.y/i.clientHeight),U.copy(G)}function j0(O){if(M.length===1)_.set(O.pageX,O.pageY);else{let i=Q0(O),H0=0.5*(O.pageX+i.x),Z0=0.5*(O.pageY+i.y);_.set(H0,Z0)}z.subVectors(_,N).multiplyScalar(Q.panSpeed),y(z.x,z.y),N.copy(_)}function E0(O){let i=Q0(O),H0=O.pageX-i.x,Z0=O.pageY-i.y,q0=Math.sqrt(H0*H0+Z0*Z0);V.set(0,q0),k.set(0,Math.pow(V.y/R.y,Q.zoomSpeed)),d(k.y),R.copy(V)}function z0(O){if(Q.enableZoom)E0(O);if(Q.enablePan)j0(O)}function l0(O){if(Q.enableZoom)E0(O);if(Q.enableRotate)i0(O)}function w0(O){if(Q.enabled===!1)return;if(M.length===0)Q.domElement.setPointerCapture(O.pointerId),Q.domElement.addEventListener("pointermove",b0),Q.domElement.addEventListener("pointerup",d0);if(r(O),O.pointerType==="touch")D(O);else g0(O)}function b0(O){if(Q.enabled===!1)return;if(O.pointerType==="touch")v(O);else KJ(O)}function d0(O){if(a(O),M.length===0)Q.domElement.releasePointerCapture(O.pointerId),Q.domElement.removeEventListener("pointermove",b0),Q.domElement.removeEventListener("pointerup",d0);Q.dispatchEvent(G5),Y=Z.NONE}function g0(O){let i;switch(O.button){case 0:i=Q.mouseButtons.LEFT;break;case 1:i=Q.mouseButtons.MIDDLE;break;case 2:i=Q.mouseButtons.RIGHT;break;default:i=-1}switch(i){case N$.DOLLY:if(Q.enableZoom===!1)return;T(O),Y=Z.DOLLY;break;case N$.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(Q.enablePan===!1)return;n(O),Y=Z.PAN}else{if(Q.enableRotate===!1)return;o(O),Y=Z.ROTATE}break;case N$.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(Q.enableRotate===!1)return;o(O),Y=Z.ROTATE}else{if(Q.enablePan===!1)return;n(O),Y=Z.PAN}break;default:Y=Z.NONE}if(Y!==Z.NONE)Q.dispatchEvent(K6)}function KJ(O){switch(Y){case Z.ROTATE:if(Q.enableRotate===!1)return;$0(O);break;case Z.DOLLY:if(Q.enableZoom===!1)return;F0(O);break;case Z.PAN:if(Q.enablePan===!1)return;G0(O);break}}function NJ(O){if(Q.enabled===!1||Q.enableZoom===!1||Y!==Z.NONE)return;O.preventDefault(),Q.dispatchEvent(K6),N0(O),Q.dispatchEvent(G5)}function C(O){if(Q.enabled===!1||Q.enablePan===!1)return;v0(O)}function D(O){switch(D0(O),M.length){case 1:switch(Q.touches.ONE){case E$.ROTATE:if(Q.enableRotate===!1)return;_0(),Y=Z.TOUCH_ROTATE;break;case E$.PAN:if(Q.enablePan===!1)return;A0(),Y=Z.TOUCH_PAN;break;default:Y=Z.NONE}break;case 2:switch(Q.touches.TWO){case E$.DOLLY_PAN:if(Q.enableZoom===!1&&Q.enablePan===!1)return;UJ(),Y=Z.TOUCH_DOLLY_PAN;break;case E$.DOLLY_ROTATE:if(Q.enableZoom===!1&&Q.enableRotate===!1)return;j(),Y=Z.TOUCH_DOLLY_ROTATE;break;default:Y=Z.NONE}break;default:Y=Z.NONE}if(Y!==Z.NONE)Q.dispatchEvent(K6)}function v(O){switch(D0(O),Y){case Z.TOUCH_ROTATE:if(Q.enableRotate===!1)return;i0(O),Q.update();break;case Z.TOUCH_PAN:if(Q.enablePan===!1)return;j0(O),Q.update();break;case Z.TOUCH_DOLLY_PAN:if(Q.enableZoom===!1&&Q.enablePan===!1)return;z0(O),Q.update();break;case Z.TOUCH_DOLLY_ROTATE:if(Q.enableZoom===!1&&Q.enableRotate===!1)return;l0(O),Q.update();break;default:Y=Z.NONE}}function J0(O){if(Q.enabled===!1)return;O.preventDefault()}function r(O){M.push(O)}function a(O){delete g[O.pointerId];for(let i=0;i<M.length;i++)if(M[i].pointerId==O.pointerId){M.splice(i,1);return}}function D0(O){let i=g[O.pointerId];if(i===void 0)i=new R0,g[O.pointerId]=i;i.set(O.pageX,O.pageY)}function Q0(O){let i=O.pointerId===M[0].pointerId?M[1]:M[0];return g[i.pointerId]}Q.domElement.addEventListener("contextmenu",J0),Q.domElement.addEventListener("pointerdown",w0),Q.domElement.addEventListener("pointercancel",d0),Q.domElement.addEventListener("wheel",NJ,{passive:!1}),this.update()}}var F5={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class W${constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var m4=new i8(-1,1,1,-1,0,1),q6=new uJ;q6.setAttribute("position",new bJ([-1,3,0,-1,-1,0,3,-1,0],3));q6.setAttribute("uv",new bJ([0,2,0,0,2,0],2));class G6{constructor(J){this._mesh=new p0(q6,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,m4)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class F8 extends W${constructor(J,$){super();if(this.textureID=$!==void 0?$:"tDiffuse",J instanceof yJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=c7.clone(J.uniforms),this.material=new yJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this.fsQuad=new G6(this.material)}render(J,$,Q){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Q.texture;if(this.fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this.fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this.fsQuad.render(J)}}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Y7 extends W${constructor(J,$){super();this.scene=J,this.camera=$,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,$,Q){let Z=J.getContext(),Y=J.state;Y.buffers.color.setMask(!1),Y.buffers.depth.setMask(!1),Y.buffers.color.setLocked(!0),Y.buffers.depth.setLocked(!0);let X,K;if(this.inverse)X=0,K=1;else X=1,K=0;if(Y.buffers.stencil.setTest(!0),Y.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),Y.buffers.stencil.setFunc(Z.ALWAYS,X,4294967295),Y.buffers.stencil.setClear(K),Y.buffers.stencil.setLocked(!0),J.setRenderTarget(Q),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget($),this.clear)J.clear();J.render(this.scene,this.camera),Y.buffers.color.setLocked(!1),Y.buffers.depth.setLocked(!1),Y.buffers.color.setMask(!0),Y.buffers.depth.setMask(!0),Y.buffers.stencil.setLocked(!1),Y.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),Y.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),Y.buffers.stencil.setLocked(!0)}}class U6 extends W${constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class F6{constructor(J,$){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),$===void 0){let Q=J.getSize(new R0);this._width=Q.width,this._height=Q.height,$=new PJ(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:R9}),$.texture.name="EffectComposer.rt1"}else this._width=$.width,this._height=$.height;this.renderTarget1=$,this.renderTarget2=$.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new F8(F5),this.copyPass.material.blending=U9,this.clock=new q8}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,$){this.passes.splice($,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let $=this.passes.indexOf(J);if($!==-1)this.passes.splice($,1)}isLastEnabledPass(J){for(let $=J+1;$<this.passes.length;$++)if(this.passes[$].enabled)return!1;return!0}render(J){if(J===void 0)J=this.clock.getDelta();let $=this.renderer.getRenderTarget(),Q=!1;for(let Z=0,Y=this.passes.length;Z<Y;Z++){let X=this.passes[Z];if(X.enabled===!1)continue;if(X.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),X.render(this.renderer,this.writeBuffer,this.readBuffer,J,Q),X.needsSwap){if(Q){let K=this.renderer.getContext(),W=this.renderer.state.buffers.stencil;W.setFunc(K.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),W.setFunc(K.EQUAL,1,4294967295)}this.swapBuffers()}if(Y7!==void 0){if(X instanceof Y7)Q=!0;else if(X instanceof U6)Q=!1}}this.renderer.setRenderTarget($)}reset(J){if(J===void 0){let $=this.renderer.getSize(new R0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=$.width,this._height=$.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,$){this._width=J,this._height=$;let Q=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize(Q,Z),this.renderTarget2.setSize(Q,Z);for(let Y=0;Y<this.passes.length;Y++)this.passes[Y].setSize(Q,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class V6 extends W${constructor(J,$,Q=null,Z=null,Y=null){super();this.scene=J,this.camera=$,this.overrideMaterial=Q,this.clearColor=Z,this.clearAlpha=Y,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new x0}render(J,$,Q){let Z=J.autoClear;J.autoClear=!1;let Y,X;if(this.overrideMaterial!==null)X=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor);if(this.clearAlpha!==null)Y=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Q),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(Y);if(this.overrideMaterial!==null)this.scene.overrideMaterial=X;J.autoClear=Z}}var V5={uniforms:{tDiffuse:{value:null},resolution:{value:new R0(0.0009765625,0.001953125)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class R6{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(J,$){if(this.paused)return;let Q=$*this.speed;this.animate(J,Q),this.animationObjects.forEach((Z,Y)=>{let X=this.progress0.get(Y);Z(J,this.progress-X,Y)}),this.progress+=Q}addAnimation(J){let $=this.currentId++;return this.progress0.set($,this.progress),this.animationObjects.set($,J),$}removeAnimation(J){if(J!==void 0)this.animationObjects.delete(J),this.progress0.delete(J)}}class N6 extends R6{animate(J){let $=this.progress*2,Q=Math.PI*0.02;J.skin.leftArm.rotation.z=Math.cos($)*0.03+Q,J.skin.rightArm.rotation.z=Math.cos($+Math.PI)*0.03-Q;let Z=Math.PI*0.06;J.cape.rotation.x=Math.sin($)*0.01+Z}}class E6 extends a7{constructor(J="",$={}){let Q=new t8({transparent:!0,alphaTest:0.00001});super(Q);if(Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=Q,this.text=J,this.font=$.font===void 0?"48px Minecraft":$.font,this.margin=$.margin===void 0?[5,10,5,10]:$.margin,this.textStyle=$.textStyle===void 0?"white":$.textStyle,this.backgroundStyle=$.backgroundStyle===void 0?"rgba(0,0,0,.25)":$.backgroundStyle,this.height=$.height===void 0?4:$.height,($.repaintAfterLoaded===void 0?!0:$.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text))this.paint(),this.painted=this.loadAndPaint();else this.paint(),this.painted=Promise.resolve()}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){let J=document.createElement("canvas"),$=J.getContext("2d");$.font=this.font;let Q=$.measureText(this.text);J.width=this.margin[3]+Q.actualBoundingBoxLeft+Q.actualBoundingBoxRight+this.margin[1],J.height=this.margin[0]+Q.actualBoundingBoxAscent+Q.actualBoundingBoxDescent+this.margin[2],$=J.getContext("2d"),$.font=this.font,$.fillStyle=this.backgroundStyle,$.fillRect(0,0,J.width,J.height),$.fillStyle=this.textStyle,$.fillText(this.text,this.margin[3]+Q.actualBoundingBoxLeft,this.margin[0]+Q.actualBoundingBoxAscent);let Z=new _$(J);Z.magFilter=pJ,Z.minFilter=pJ,this.textMaterial.map=Z,this.textMaterial.needsUpdate=!0,this.scale.x=J.width/J.height*this.height,this.scale.y=this.height}}class D6{constructor(J={}){if(Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new J6(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new e7(16777215,0.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.canvas=J.canvas??document.createElement("canvas"),this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new r7,this.camera=new zJ,this.camera.add(this.cameraLight),this.scene.add(this.camera,this.globalLight),CJ.enabled=!1,this.renderer=new a8({canvas:this.canvas,preserveDrawingBuffer:J.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{if(this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device")this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0})},J.pixelRatio===void 0||J.pixelRatio==="match-device")this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio);else this._pixelRatio=J.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(J.pixelRatio);this.renderer.setClearColor(0,0);let $;if(this.renderer.capabilities.isWebGL2)$=new PJ(0,0,{depthTexture:new r8(0,0,V9)});if(this.composer=new F6(this.renderer,$),this.renderPass=new V6(this.scene,this.camera),this.fxaaPass=new F8(V5),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new $7,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new ZJ,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new H6(this.camera,this.canvas),this.controls.enableRotate=J.enableRotation!==!1,this.controls.enableZoom=J.allowZoom!==!1,J.skin!==void 0)this.loadSkin(J.skin,{model:J.model,ears:J.ears==="current-skin"});if(J.cape!==void 0)this.loadCape(J.cape);if(J.ears!==void 0&&J.ears!=="current-skin")this.loadEars(J.ears.source,{textureType:J.ears.textureType});if(J.width!==void 0)this.width=J.width;if(J.height!==void 0)this.height=J.height;if(J.background!==void 0)this.background=J.background;if(J.panorama!==void 0)this.loadPanorama(J.panorama);if(J.nameTag!==void 0)this.nameTag=J.nameTag;if(this.camera.position.z=1,this._zoom=J.zoom??0.9,this.fov=J.fov??50,this._animation=J.animation??null,this.clock=new q8,J.renderPaused===!0)this._renderPaused=!0,this.animationID=null;else this.animationID=window.requestAnimationFrame(()=>this.draw());this.onContextLost=(Q)=>{if(Q.preventDefault(),this.animationID!==null)window.cancelAnimationFrame(this.animationID),this.animationID=null},this.onContextRestored=()=>{if(this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null)this.animationID=window.requestAnimationFrame(()=>this.draw())},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",(Q)=>{this.isUserRotating=Q.touches.length===1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);let J=this.renderer.getPixelRatio();this.composer.setPixelRatio(J),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*J),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*J)}recreateSkinTexture(){this.skinTexture?.dispose(),this.skinTexture=new _$(this.skinCanvas),this.skinTexture.magFilter=pJ,this.skinTexture.minFilter=pJ,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture?.dispose(),this.capeTexture=new _$(this.capeCanvas),this.capeTexture.magFilter=pJ,this.capeTexture.minFilter=pJ,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture?.dispose(),this.earsTexture=new _$(this.earsCanvas),this.earsTexture.magFilter=pJ,this.earsTexture.minFilter=pJ,this.playerObject.ears.map=this.earsTexture}loadSkin(J,$={}){if(J===null)this.resetSkin();else if(G8(J)){if(X5(this.skinCanvas,J),this.recreateSkinTexture(),this.playerObject.skin.modelType=$.model===void 0||$.model==="auto-detect"?K5(this.skinCanvas):$.model,$.makeVisible!==!1)this.playerObject.skin.visible=!0;if($.ears===!0||$.ears==="load-only"){if(W6(this.earsCanvas,J),this.recreateEarsTexture(),$.ears===!0)this.playerObject.ears.visible=!0}}else return U8(J).then((Q)=>this.loadSkin(Q,$))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture?.dispose(),this.skinTexture=null}loadCape(J,$={}){if(J===null)this.resetCape();else if(G8(J)){if(W5(this.capeCanvas,J),this.recreateCapeTexture(),$.makeVisible!==!1)this.playerObject.backEquipment=$.backEquipment??"cape"}else return U8(J).then((Q)=>this.loadCape(Q,$))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture?.dispose(),this.capeTexture=null}loadEars(J,$={}){if(J===null)this.resetEars();else if(G8(J)){if($.textureType==="skin")W6(this.earsCanvas,J);else H5(this.earsCanvas,J);if(this.recreateEarsTexture(),$.makeVisible!==!1)this.playerObject.ears.visible=!0}else return U8(J).then((Q)=>this.loadEars(Q,$))}resetEars(){this.playerObject.ears.visible=!1,this.playerObject.ears.map=null,this.earsTexture?.dispose(),this.earsTexture=null}loadPanorama(J){return this.loadBackground(J,F9)}loadBackground(J,$){if(G8(J)){if(this.backgroundTexture?.dispose(),this.backgroundTexture=new qJ,this.backgroundTexture.image=J,$)this.backgroundTexture.mapping=$;this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture}else return U8(J).then((Q)=>this.loadBackground(Q,$))}draw(){let J=this.clock.getDelta();if(this._animation?.update(this.playerObject,J),this.autoRotate&&!(this.controls.enableRotate&&this.isUserRotating))this.playerWrapper.rotation.y+=J*this.autoRotateSpeed;this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(J,$){this.camera.aspect=J/$,this.camera.updateProjectionMatrix(),this.renderer.setSize(J,$),this.updateComposerSize()}dispose(){if(this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery?.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null,this.animationID!==null)window.cancelAnimationFrame(this.animationID),this.animationID=null;this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(J){if(this._renderPaused=J,J&&this.animationID!==null)window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0;else if(!J&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null)this.animationID=window.requestAnimationFrame(()=>this.draw())}get width(){return this.renderer.getSize(new R0).width}set width(J){this.setSize(J,this.height)}get height(){return this.renderer.getSize(new R0).height}set height(J){this.setSize(this.width,J)}get background(){return this.scene.background}set background(J){if(J===null||J instanceof x0||J instanceof qJ)this.scene.background=J;else this.scene.background=new x0(J);if(this.backgroundTexture!==null&&J!==this.backgroundTexture)this.backgroundTexture.dispose(),this.backgroundTexture=null}adjustCameraDistance(){let J=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;J=Math.max(10,Math.min(J,256)),this.camera.position.multiplyScalar(J/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(J){this.camera.fov=J,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(J){this._zoom=J,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(J){if(J==="match-device"){if(this._pixelRatio!=="match-device")this._pixelRatio=J,this.onDevicePixelRatioChange()}else{if(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null)this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null;this._pixelRatio=J,this.renderer.setPixelRatio(J),this.updateComposerSize()}}get animation(){return this._animation}set animation(J){if(this._animation!==J)this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this.clock.stop(),this.clock.autoStart=!0;if(J!==null)J.progress=0;this._animation=J}get nameTag(){return this._nameTag}set nameTag(J){if(this._nameTag!==null)this.playerWrapper.remove(this._nameTag);if(J===null){this._nameTag=null;return}if(!(J instanceof GJ))J=new E6(J);this.playerWrapper.add(J),J.position.y=20,this._nameTag=J}resetModelRotation(){this.playerWrapper.rotation.set(0,0,0),this.controls.reset()}}var X7=new D6({canvas:document.getElementById("skin_view_container"),width:400,height:600,skin:"assets/images/skin.png"});X7.autoRotate=!1;X7.animation=new N6;X7.animation.addAnimation(d4(X7.playerObject,0,null.clock.getDelta()));function d4(J,$,Q){let Z=$*2;J.skin.head.rotation.z=Math.cos(Z)*0.03+Math.PI*0.02}
