!function(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(5)},function(t,e,r){var i=r(2),a=r(4);t.exports=i.extend({_prepare:function(){var t={chart:{type:"chart",width:"100",height:"100","font-family":'"Open Sans", sans-serif'}};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},attr:function(t){return t=t||0,this.attributes.data=t.data||[],this.attributes.opts=t,this._prepare()._generate()},_generate:function(){var t=this.attributes.opts.chart,e=this.attributes.data,r=this.make("svg",{width:t.width,height:t.height,viewBox:"0 0 "+t.width+" "+t.height}),i=t.height<t.width?t.height:t.width,a=this._dataSetRelativeToTotal(e),n=this.compile(this.element,this.compile(r,this._describePath(i,a,t)));return"string"==typeof n?n:this},_polarToCartesian:a.polarToCartesian,_describeArc:a.describeArc,_describePie:a.describePie,_describePath:function(){return""}})},function(t,e,r){{var i=r(9);t.exports=i.extend({init:function(t){var e=this;return"string"==typeof t?this.element="#"===t[0]?this.make("div",{id:t.replace(/^#/,""),width:"100%"}):this.make("div",{"class":t.replace(/^\./,""),width:"100%"}):"object"==typeof t?(this.element=t,this.element.style.width="100%"):this.element="",this.token=e.makeToken(),this.attributes={},this}})}},function(t,e,r){{var i=r(2);t.exports=i.extend({attr:function(t){t=t||{},!t||t.data&&0!==t.data.length||(t.data=void 0),this.attributes.data=t.data||0,this.attributes.opts=t;for(var e in t.data)t.data[e].label=(t.data[e].label||"").replace(/\s/g,"-");return this._prepare()._generate()},_prepare:function(){var t={chart:{width:"100",height:"200","font-family":'"Open Sans", sans-serif',line:!0,scattered:!1},showNodes:!1,xAxis:{},yAxis:{},data:[]};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},_generate:function(){var t=this.attributes.data,e=this.attributes.opts,r=e.chart,i=this.make("svg",{width:e.chart.width,height:e.chart.height,viewBox:"0 0 "+e.chart.width+" "+e.chart.height}),a=this,n=0,o=5;"[object Array]"!==Object.prototype.toString.call(t)&&(t=[t]);var s=a._findMinMax(t);a._extend(e._scale,s),e.heightRatio=(r.height-2*o)/s.max,e.gap=a._sigFigs(r.width/(s.len-1),8);for(var h=0;h<t.length;h++){var d=a.make("g",{},{label:t[h].label});i=a.compile(i,a.compile(d,a._describePath(t[h],n,o,e)))}var c=a.compile(a.element,i);return"string"==typeof c?c:a},_describeAttributeD:function(t,e,r,i){for(var a=i.chart.height,n=i.heightRatio,o=i.gap,s="",h=0;h<t.length;h++)s+=0===h?"M "+e+" "+(a-t[h]*n-r):" L "+(o*h+e)+" "+(a-t[h]*n-r);return""===s&&(s="M 0 0"),s},_describeCloseAttributeD:function(t,e,r,i){var a=i.chart.height,n=i.heightRatio;return["V",a-r,"H",e,"L",e,a-t[0]*n-r].join(" ")},_describeScatteredGraph:function(t,e,r,i,a){for(var n=a.chart.height,o=a.heightRatio,s=this,h=a.gap,d=t.scattered||0,c=d.strokeWidth||3,u=d.strokeColor||s._randomColor(),l=d.radius||5,f=(d.fill||"white",""),p=0;p<e.length;p++)f+=s.make("circle",{cx:h*p+r-l/2+c/2,cy:n-e[p]*o-i-l/2+c/2,r:l-c/2,stroke:u,"stroke-width":c,fill:"white"});return f},_describePath:function(t,e,r,i){var a=i.chart,n=this,o=n._describeAttributeD(t.data,e,r,i),s=n.make("path",{d:o,stroke:t.strokeColor||n._randomColor(),"stroke-width":t.strokeWidth||"5","stroke-linejoin":"round","stroke-linecap":"round","class":"_yakoTransitions-"+t.label,fill:"none"});return(a.line?s+(t.fill?n.make("path",{d:o+n._describeCloseAttributeD(t.data,e,r,i),stroke:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round","class":"_yakoTransitions-"+t.label,fill:t.fill}):""):"")+(a.scattered?n._describeScatteredGraph(t,t.data,e,r,i):"")}})}},function(t){var e=t.exports={polarToCartesian:function(t,e,r,i){var a=(i-90)*Math.PI/180;return{x:t+r*Math.cos(a),y:e+r*Math.sin(a)}},describeArc:function(t,r,i,a,n){var o=e.polarToCartesian(t,r,i,n),s=e.polarToCartesian(t,r,i,a),h=180>=n-a?"0":"1",d=["M",o.x,o.y,"A",i,i,0,h,0,s.x,s.y].join(" ");return d},describePie:function(t,r,i,a,n){return e.describeArc(t,r,i,a,n)+" L"+t+" "+r}}},function(t,e,r){for(var i=r(6),a=i.spark,n=i.pie,o=i.donut,s=i.bubble,h=i.bar,d=30,c=10,u=9,l=c,f=Date.now(),p="";l--;){for(var g=[],_=[],m=[],v=[],b=0;d>b;b++)g.push(Math.floor(500*Math.random()+10)),_.push(Math.floor(500*Math.random()+10)),m.push(Math.floor(500*Math.random()+10)),v.push(Math.floor(500*Math.random()+1));var k=i.spark()._randomColor(),w=i.spark()._randomColor(),x=[{data:g,strokeColor:k,fill:i.spark()._randomColor(),scattered:{strokeColor:k,fill:"white",strokeWidth:3,radius:5}},{data:_,strokeColor:w,fill:i.spark()._randomColor(),scattered:{strokeColor:w,fill:"white",strokeWidth:3,radius:5}}],y=[{label:"Auto Generated 3",data:m,strokeColor:i.spark()._randomColor(),fill:i.spark()._randomColor()}];p+=a(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:x}),p+=a(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:y}),p+=a(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0},title:"just a test",data:x}),p+=a(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0,line:!1},title:"just a test",data:x}),p+=n(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:v}),p+=o(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',innerRadius:40,outerRadius:50},title:"just a test",data:v}),p+=s(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',maxRadius:"10"},title:"just a test",data:v}),p+=h(".graph").attr({chart:{stack:!0,width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',showPointer:!1,fill:[]},title:"just a test",data:x}),p+=h(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',showPointer:!1,fill:[]},title:"just a test",data:x})}var M=Date.now()-f;console.log("Took "+M+"ms to generate "+c*u+" graphs with "+d+" different data points each avg of "+M/c/u+"ms"),p="<div>Took "+M+"ms to generate "+c*u+" graphs with "+d+" different data points avg of "+M/c/u+"ms</div>"+p;var C=document.getElementsByTagName("body")[0];C.innerHTML=p},function(t,e,r){var i=r(3),a=r(12),n=r(11),o=r(7),s=r(10),h=r(15);t.exports={name:"yakojs",VERSION:"0.1.0",spark:function(t){return new i(t)},pie:function(t){return new a(t)},donut:function(t){return new n(t)},bubble:function(t){return new s(t)},bar:function(t){return new o(t)},svg:h}},function(t,e,r){{var i=r(2);t.exports=i.extend({_prepare:function(){var t={chart:{type:"chart",width:"100",height:"100","font-family":'"Open Sans", sans-serif'}};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},attr:function(t){return t=t||0,this.attributes.data=t.data||[],this.attributes.opts=t,this._prepare()._generate()},_generate:function(){var t=this.attributes.data,e=this.attributes.opts.chart,r=this.make("svg",{width:e.width,height:e.height,viewBox:"0 0 "+e.width+" "+e.height}),i=this.compile(this.element,this.compile(r,this._describeBar(t,e)));return"string"==typeof i?i:this},_describeBar:function(t,e){if(!t.length)return"";t="object"==typeof t[0]?t:[t];var r=e.height,i=5;r-=i;for(var a=e.width,n=t[0].data.length,o=t.length,s=a/n,h=this._findMinMax(t,e),d="",c=0;n>c;c++)if(e.stack)for(var u=(r-i)*h.maxSet[c]/h.max,l=r-u,f=0;o>f;f++)d+=this.make("rect",{x:s*c+s/4,y:l,width:s/o,height:t[f].data[c]/h.maxSet[c]*u,fill:t[f].fill||this._randomColor()}),l+=t[f].data[c]/h.maxSet[c]*u;else for(var f=0;o>f;f++){var l=(r-i)*t[f].data[c]/h.max;d+=this.make("rect",{x:s*(c+1)-s/(f+1),y:r-l,width:s/(o+1),height:l,fill:t[f].fill||this._randomColor()})}return d}})}},function(t){function e(t){return"function"==typeof t}function r(t){return/\b_super\b/.test(t)}var i=t.exports=function(){};i.extend=function(t){function i(){this.init&&this.init.apply(this,arguments)}var a=this.prototype,n=this.prototype.init;this.prototype.init=null;var o=new this;this.prototype.init=n;for(var s in t){var h=t[s];o[s]=e(h)&&e(a[s])&&r(h)?function(t,e){return function(){var r=this._super;this._super=a[t];var i=e.apply(this,arguments);return this._super=r,i}}(s,h):h}return i.prototype=o,i.prototype.constructor=i,i.extend=arguments.callee,i}},function(t,e,r){r(16);var i,a=r(8);t.exports=i=a.extend({init:function(){return this},compile:function(t,e){return"object"==typeof t?(t.innerHTML=e,this):""===t?e:t.replace(/(.*)(<\/.*>$)/g,function(t,r,i){return r+e+i})},_dataSetRelativeToTotal:function(t){var e=t.reduce(function(t,e){return t+e});return t.map(function(t){return t/e})},_randomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},make:function(t,e,r){var i="<"+t;return"svg"===t&&(i+=' version="1.1" xmlns="http://www.w3.org/2000/svg"'),i+=this._makePairs(e),i+=this._makePairs("data",r),i+="></"+t+">"},_makePairs:function(t,e){if(arguments.length<2?(e=t,t=""):t+="-",!e)return"";for(var r=Object.keys(e),i=r.length,a="";i--;)a+=" "+t+r[i]+'="'+e[r[i]]+'"';return a},_extend:function(t,e){var r=this;if(e&&t){for(var i=Object.keys(e),a=i.length;a--;)"object"!=typeof e[i[a]]||"[object Array]"===Object.prototype.toString.call(e[i[a]])?t[i[a]]=e[i[a]]:(t[i[a]]||(t[i[a]]={}),r._extend(t[i[a]],e[i[a]]));return this}},_makeNode:function(t,e,r){var i=doc.createElementNS("http://www.w3.org/2000/svg",t);return this.assign(i,e),this._extend(i.dataset,r),i},isFn:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},makeToken:function(){return Math.random().toString(36).substr(2)},_sigFigs:function(t,e){var r=Math.pow(10,e-Math.floor(Math.log(t)/Math.LN10)-1);return Math.round(t*r)/r},_findMinMax:function(t,e){e=e||0,t="object"==typeof t[0]?t:[t];var r=0,i=Number.MAX_VALUE,a=[];if(t[0].data){for(var n=[],o=0;o<t.length;o++)n.push(t[o].data);t=n}for(var s=t.length,h=t[0].length,d=0;h>d;d++)if(e.stack){for(var c=0,u=0;s>u;u++)c+=t[u][d];a.push(c),r=c>r?c:r,i=i>c?c:i}else for(var l=0;s>l;l++)i=i>t[l][d]?t[l][d]:i,r=r<t[l][d]?t[l][d]:r;return{min:i,max:r,maxSet:a,len:h}}})},function(t,e,r){{var i=r(1);t.exports=i.extend({_generate:function(){var t=this.attributes.opts.chart,e=this.attributes.data,r=this.make("svg",{width:t.width,height:t.height,viewBox:"0 0 "+t.width+" "+t.height}),i=10,a=this._describeHorizontalPath(t.height,t.width,i,t);a+=this._describeBubble(e,t.height,t.width,i,t);var n=this.compile(this.element,this.compile(r,a));return n},_describeHorizontalPath:function(t,e,r,i){var a=t/2;return this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:i.strokColor||this._randomColor(),d:"M"+r+" "+a+" H"+(e-r)})},_describeBubble:function(t,e,r,i,a){if(!t)return"";for(var n=this._getMaxOfArray(t),o=t.length,s=(r-2*i)/(o-1),h="",d=a.fills||0,c=a.maxRadius||(a.height<a.width?a.height:a.width)/2,u=e/2,l=0;l<t.length;l++)h+=this.make("circle",{cx:s*l+i,cy:u,r:c*(t[l]/n),fill:d[0]||a.fill||this._randomColor()});return h},_getMaxOfArray:function(t){return Math.max.apply(null,t)}})}},function(t,e,r){{var i=r(1);t.exports=i.extend({_describePath:function(t,e,r){if(!e)return"";for(var i="",a=r.outerRadius||t/2,n=r.innerRadius||a/2,o=0,s=r.fills||0,h=r.strokeColors||0,d=r.height/2,c=r.width/2,u=0;u<e.length;u++){var l=o+360*e[u];i+=this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:h[u]||r.strokeColor||this._randomColor(),fill:s[u]||this._randomColor(),d:this._describeDonut(c,d,a,n,o,l)}),o=l}return i},_describeDonut:function(t,e,r,i,a,n){var o={start:this._polarToCartesian(t,e,r,n),end:this._polarToCartesian(t,e,r,a)},s={start:this._polarToCartesian(t,e,i,n),end:this._polarToCartesian(t,e,i,a)},h=180>=n-a?"0":"1";return["M",o.start.x,o.start.y,"A",r,r,0,h,0,o.end.x,o.end.y,"L",s.end.x,s.end.y,"A",i,i,0,h,1,s.start.x,s.start.y,"L",o.start.x,o.start.y,"Z"].join(" ")}})}},function(t,e,r){{var i=r(1);t.exports=i.extend({_describePath:function(t,e,r){if(!e)return"";for(var i="",a=t/2,n=0,o=r.fills||0,s=r.strokeColors||0,h=r.width/2,d=r.height/2,c=0;c<e.length;c++){var u=n+360*e[c];i+=this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:s[c]||r.strokeColor||this._randomColor(),d:this._describePie(h,d,a,n,u),fill:o[c]||this._randomColor()}),n=u}return i}})}},function(t,e,r){var i=r(3);i=new i,t.exports={getScale:function(t){var e=t.data||0,r=i._findMinMax(e);return r.paddingY=t.paddingY||5,r.gap=i._sigFigs(t.width/(r.len-1),8),r.heightRatio=(t.height-2*r.paddingY)/r.max,r.chart=r.chart||{},r.chart.height=t.height,r.chart.width=t.width,r},getOpenPath:function(t,e){return i._describeAttributeD(e,0,t.paddingY,t)},getClosedPath:function(t,e){return i._describeAttributeD(e,0,t.paddingY,t)+i._describeCloseAttributeD(e,0,t.paddingY,t)}}},function(){},function(t,e,r){t.exports={path:r(13),arc:r(4),react:r(14)}},function(){function t(t,e,r){return"undefined"==typeof r||0===+r?Math[t](e):(e=+e,r=+r,isNaN(e)||"number"!=typeof r||r%1!==0?0/0:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-r:-r))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+r:r))))}Math.round10||(Math.round10=function(e,r){return t("round",e,r)}),Math.floor10||(Math.floor10=function(e,r){return t("floor",e,r)}),Math.ceil10||(Math.ceil10=function(e,r){return t("ceil",e,r)})}]);