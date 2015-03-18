!function(t){function e(a){if(r[a])return r[a].exports;var i=r[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(6)},function(t,e,r){var a=r(2),i=r(4);t.exports=a.extend({_prepare:function(){var t=this,e={chart:{type:"chart",width:"100",height:"100","font-family":'"Open Sans", sans-serif',paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0}};return t._extend(e,t.attributes.opts),t.attributes.opts=e,t},attr:function(t){var e=this;return t=t||0,e.attributes.data=t.data||[],e.attributes.opts=t,e.postRender(e._prepare()._startCycle())},_startCycle:function(){var t,e=this,r=e.attributes.opts.chart,a=e.attributes.data,i=this.append,n=r.outerRadius||(r.height<r.width?r.height:r.width)/2,o=this._dataSetRelativeToTotal(a),s={relativeDataSet:o,outerRadius:n};return e._extend(s,r),paths=e._lifeCycleManager(s,function(){return t=e.make("svg",{width:r.width,height:r.height,viewBox:"0 0 "+r.width+" "+r.height}),e._describePath(n,o,s)}),i(e.element,i(t,paths))},_polarToCartesian:i.polarToCartesian,_describeArc:i.describeArc,_describePie:i.describePie,_describePath:function(){return""}})},function(t,e,r){{var a=r(10);t.exports=a.extend({init:function(t){var e=this;return e.element="string"==typeof t?"#"===t[0]?e.make("div",{id:t.replace(/^#/,""),width:"100%"}):e.make("div",{"class":t.replace(/^\./,""),width:"100%"}):"",e.token=e._makeToken(),e.attributes={},e}})}},function(t,e,r){{var a=r(2),i=r(17);t.exports=a.extend({attr:function(t){t=t||{},!t||t.data&&0!==t.data.length||(t.data=void 0);var e=this;return e.attributes.data=t.data||0,e.attributes.opts=t,e.postRender(e._prepare()._startCycle())},_prepare:function(){var t={chart:{width:"100",height:"200","font-family":'"Open Sans", sans-serif',line:!0,fill:!0,scattered:!1,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0},showNodes:!1,data:[]};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},_getLabelConfig:function(t){t.paddingLeft=t.paddingRight=30,t.paddingTop=t.paddingBottom=20},_startCycle:function(){var t,e=this,r=e.attributes.data,a=e.attributes.opts,n=a.chart,o=n.xAxis||a.xAxis,s=n.yAxis||a.yAxis,d=e.append,h=[];e._isArray(r)||(r=[r]);var l=e._scale(r,a);return e._extend(l,n),(s||o)&&(e._getLabelConfig(l,s,o),e.describeYAxis||i.label()),l.pHeight=n.height-l.paddingTop-l.paddingBottom,l.pWidth=n.width-l.paddingLeft-l.paddingRight,s&&e.describeYAxis&&h.push(e.describeYAxis(l,s)),l.heightRatio=l.pHeight/l.max,l.tickSize=e._sigFigs(l.pWidth/(l.len-1),8),o&&e.describeXAxis&&h.push(e.describeXAxis(l,o)),e._lifeCycleManager(l,function(){t=e.make("svg",{width:n.width,height:n.height,viewBox:"0 0 "+n.width+" "+n.height});for(var a=0;a<l.rows;a++){s&&s.multi&&(l.heightRatio=l.pHeight/l.max[a]);var i=e.make("g");h.push(d(i,e._describePath(r[a],l.paddingLeft,l.paddingTop,l)))}return h}),d(e.element,d(t,h))},_describeAttributeD:function(t,e,r,a){for(var i=a.height,n=a.heightRatio,o=a.tickSize,s="",d=0;d<t.length;d++)s+=0===d?"M "+e+" "+(i-t[d]*n-r):" L "+(o*d+e)+" "+(i-t[d]*n-r);return""===s&&(s="M 0 0"),s},_describeCloseAttributeD:function(t,e,r,a){var i=a.height,n=a.heightRatio;return["V",i-r,"H",e,"L",e,i-t[0]*n-r].join(" ")},_describeScatteredGraph:function(t,e,r,a,i){for(var n=i.height,o=i.heightRatio,s=this,d=i.tickSize,h=t.scattered||0,l=h.strokeWidth||3,u=h.strokeColor||s._randomColor(),c=h.radius||2,p=(h.fill||"white",[]),f=t._ref||"",g=0;g<e.length;g++)p.push(s.make("circle",{cx:d*g+r,cy:n-e[g]*o-a,r:c,stroke:u,"stroke-width":l,fill:"white",_ref:f}));return p},_describePath:function(t,e,r,a){var i=this,n=i._describeAttributeD(t.data,e,r,a),o=t._ref||"",s=i.make("path",{d:n,stroke:t.strokeColor||i._randomColor(),"stroke-width":t.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round",fill:"none",_ref:o}),d=[];return t.fill&&a.fill&&d.push(i.make("path",{d:n+i._describeCloseAttributeD(t.data,e,r,a),stroke:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round",fill:t.fill,_ref:o})),a.line&&d.push(s),a.scattered&&d.push(i._describeScatteredGraph(t,t.data,e,r,a)),d}})}},function(t){var e=t.exports={polarToCartesian:function(t,e,r,a){var i=(a-90)*Math.PI/180;return{x:t+r*Math.cos(i),y:e+r*Math.sin(i)}},describeArc:function(t,r,a,i,n){var o=e.polarToCartesian(t,r,a,n),s=e.polarToCartesian(t,r,a,i),d=180>=n-i?"0":"1",h=["M",o.x,o.y,"A",a,a,0,d,0,s.x,s.y].join(" ");return h},describePie:function(t,r,a,i,n){return e.describeArc(t,r,a,i,n)+" L"+t+" "+r}}},function(t){t.exports={describeYAxis:function(t,e){var r=this,a=[],i=[],n=rows=t.rows;e=e||{},e.multi||(n=rows=1,t.ySecs=[t.ySecs],t.max=[t.max]);for(var o=t.pHeight,s=t.paddingY||t.paddingTop,d=t.paddingX||t.paddingLeft-5;n--;){var h=r.make("g"),l=fSplits=t.ySecs[n],u=o/l,c=(n+1)%2===0?t.width-n*d:(n+1)*d;for(i=[],l+=1;l--;)i.push(r.make("text",{y:s+u*l,x:c,"font-size":12,"text-anchor":(n+1)%2===0?"start":"end",fill:e.color||"#333"},null,t.max[n]/fSplits*(fSplits-l)));c=(n+1)%2===0?c-5:c+5,i.push(r.make("path",{d:"M"+c+" 0L"+c+" "+(o+s),"stroke-width":"1",stroke:e.multi?t.color[n]:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),a.push(r.append(h,i))}return a},describeXAxis:function(t,e){var r=this,a=r.make("g",{"class":"xaxis"}),i=[],n=t.pHeight,o=t.tickSize,s=t.paddingX||t.paddingLeft,d=t.paddingY?2*t.paddingY-8:t.paddingTop+t.paddingBottom-8,h=n+d,l="dateTime"==e.format?!0:!1;if(l)var u=e.interval,c=r._utcMultiplier(e.interval),p=(/\d+/.test(u)?u.match(/\d+/)[0]:1,e.dateTimeLabelFormat),f=e.minUTC;for(var g=1;g<t.len-1;g++)i.push(r.make("text",{y:h,x:o*g+s,"font-size":12,"text-anchor":"start",fill:e.color||"#333"},null,l?r._formatTimeStamp(p,f+c*g):e.labels[g]||0));return i.push(r.make("path",{d:"M"+2*s+" "+(h-12)+" L"+(t.width-2*s)+" "+(h-12),"stroke-width":"1",stroke:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),[r.append(a,i)]},_utcMultiplier:function(t){var e=1e3,r=60,a=60,i=24,n=30,o=12,s=0;return/s$/.test(t)?s=e:/m$/.test(t)?s=r*e:/h$/.test(t)?s=r*a*e:/D$/.test(t)?s=r*a*i*e:/M$/.test(t)?s=r*a*i*n*e:/Y$/.test(t)&&(s=r*a*i*n*o*e),s},_formatTimeStamp:function(t,e){var r=new Date(e);return/YYYY/.test(t)?t=t.replace("YYYY",r.getFullYear()):/YY/.test(t)&&(t=t.replace("YY",r.getFullYear().toString().replace(/^\d{1,2}/,""))),t=/hh/.test(t)&&/ap/.test(t)?r.getHours()>11?t.replace(/hh/,r.getHours()-12===0?12:r.getHours()-12).replace(/ap/,"pm"):t.replace(/hh/,0===r.getHours()?12:r.getHours()).replace(/ap/,"am"):t.replace(/hh/,0===r.getHours()?12:r.getHours()),t=t.replace(/MM/,r.getMonth()+1).replace(/DD/,r.getDate()),t=/mm/.test(t)&&/ss/.test(t)?t.replace(/mm/,1==r.getMinutes().toString().length?"0"+r.getMinutes():r.getMinutes()).replace(/ss/,1==r.getSeconds().toString().length?"0"+r.getSeconds():r.getSeconds()):t.replace(/mm/,r.getMinutes()).replace(/ss/,r.getSeconds())}}},function(t,e,r){for(var a=r(7),i=r(5),n=a.spark,o=a.pie,s=a.donut,d=a.bubble,h=a.bar,l=30,u=10,c=10,p=2,f=u,g=Date.now(),m="";f--;){for(var b=[],v=[],_=[],x=[],k=[],y=[],w=0;l>w;w++)b.push(Math.floor(500*Math.random()+10)),v.push(Math.floor(500*Math.random()+10)),_.push(Math.floor(500*Math.random()+10)),x.push(Math.floor(500*Math.random()+1));for(var w=0;l>w;w++){for(var C=[],M=[],S=0;3>S;S++)C.push(Math.floor(500*Math.random()+10)),M.push(Math.floor(500*Math.random()+10));k.push(C),y.push(M)}var L=a.spark()._randomColor(),A=a.spark()._randomColor(),R=[{data:b,strokeColor:L,fill:a.spark()._randomColor(),scattered:{strokeColor:L,fill:"white",strokeWidth:2,radius:3}},{data:v,strokeColor:A,fill:a.spark()._randomColor(),scattered:{strokeColor:A,fill:"white",strokeWidth:2,radius:3}}],T=[{label:"Auto Generated 3",data:_,strokeColor:a.spark()._randomColor(),fill:a.spark()._randomColor()}],j=[{data:k,fill:a.spark()._randomColor()},{data:y,fill:a.spark()._randomColor()}],Y=n(".graph");m+=Y.attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:R}),m+=Y.attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:T}),m+=n(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0,fill:!1},title:"just a test",data:R}),m+=n(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0,line:!1,fill:!1},title:"just a test",data:R}),m+=o(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:x}),m+=s(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',innerRadius:40,outerRadius:50},title:"just a test",data:x}),m+=d(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',maxRadius:"10"},title:"just a test",data:x}),m+=d(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',maxRadius:"10",type:"scattered"},title:"just a test",data:j}),m+=h(".graph").attr({chart:{stack:!0,width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',showPointer:!1,fill:[]},title:"just a test",data:R}),m+=h(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',showPointer:!1,fill:[]},title:"just a test",data:R})}b=[],v=[];for(var w=0;10>w;w++)b.push(Math.floor(500*Math.random()+10)),v.push(Math.floor(500*Math.random()+10));var L="red",A="blue",R=[{data:b,strokeColor:L,strokeWidth:2,scattered:{strokeColor:L,fill:"white",strokeWidth:2,radius:5}},{data:v,strokeColor:A,strokeWidth:2,scattered:{strokeColor:A,fill:"white",strokeWidth:2,radius:5}}],Y=n({mixin:i});m=Y.attr({chart:{width:1200,height:150,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:R,yAxis:{multi:!0},xAxis:{format:"dateTime",interval:"4h",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}})+Y.attr({chart:{width:1200,height:150,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0},title:"just a test",data:R,yAxis:!0,xAxis:{format:"dateTime",interval:"1D",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}})+m;var B=Date.now()-g;m="<div>Took "+B+"ms to generate "+(u*c+p)+" graphs with "+l+" different data points avg of "+B/(u*c+p)+"ms</div>"+m;var H=document.getElementsByTagName("body")[0];H.innerHTML=m},function(t,e,r){var a=r(3),i=r(13),n=r(12),o=r(8),s=r(11),d=r(16),h=r(19),l=function(t,e){return"object"==typeof e?new(e.mixin?h(h(t,e.mixin),e):h(t,e)):new t(e)};t.exports={name:"yakojs",VERSION:"0.1.0",spark:function(t){return l(a,t)},pie:function(t){return l(i,t)},donut:function(t){return l(n,t)},bubble:function(t){return l(s,t)},bar:function(t){return l(o,t)},svg:d}},function(t,e,r){{var a=r(2);t.exports=a.extend({_prepare:function(){var t={chart:{type:"chart",width:"100",height:"100","font-family":'"Open Sans", sans-serif',paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0}};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},attr:function(t){return t=t||0,this.attributes.data=t.data||[],this.attributes.opts=t,this.postRender(this._prepare()._startCycle())},_startCycle:function(){var t,e=this.attributes.data,r=this,a=this.attributes.opts.chart,i=r.append,n=r._defineBaseScaleProperties(e,a);return paths=r._lifeCycleManager(n,function(){return t=r.make("svg",{width:a.width,height:a.height,viewBox:"0 0 "+a.width+" "+a.height}),r._describeBar(e,n)}),i(r.element,i(t,paths))},_describeBar:function(t,e){if(!t.length)return"";t="object"==typeof t[0]?t:[t];for(var r=e.height-e.paddingTop-e.paddingBottom,a=e.width-e.paddingLeft-e.paddingRight,i=t[0].data.length,n=t.length,o=a/i,s=[],d=0;i>d;d++)if(e.stack)for(var h=r*e.maxSet[d]/e.max,l=r-h+e.paddingTop,u=0;n>u;u++)s.push(this.make("rect",{x:o*d+o/4+e.paddingLeft,y:l,width:o/n,height:t[u].data[d]/e.maxSet[d]*h,fill:t[u].fill||this._randomColor()})),l+=t[u].data[d]/e.maxSet[d]*h;else for(var u=0;n>u;u++){var h=r*t[u].data[d]/e.max;s.push(this.make("rect",{x:o*(d+1)-o/(u+1)+e.paddingLeft,y:r-h+e.paddingTop,width:o/(n+.5),height:h,fill:t[u].fill||this._randomColor()}))}return s}})}},function(t){function e(t){return"function"==typeof t}function r(t){return/\b_super\b/.test(t)}var a=t.exports=function(){};a.extend=function(t){function a(){this.init&&this.init.apply(this,arguments)}var i=this.prototype,n=this.prototype.init;this.prototype.init=null;var o=new this;this.prototype.init=n;for(var s in t){var d=t[s];o[s]=e(d)&&e(i[s])&&r(d)?function(t,e){return function(){var r=this._super;this._super=i[t];var a=e.apply(this,arguments);return this._super=r,a}}(s,d):d}return a.prototype=o,a.prototype.constructor=a,a.extend=arguments.callee,a}},function(t,e,r){r(18);var a,i=r(9),n=function(t){return t instanceof Array};t.exports=a=i.extend({init:function(){return this},_dataSetRelativeToTotal:function(t){var e=t.reduce(function(t,e){return t+e});return t.map(function(t){return t/e})},_randomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},append:function(t,e){return""===t?e:(n(e)||(e=[e]),t.replace(/(.*)(<\/.*>$)/g,function(t,r,a){return r+e.join("")+a}))},make:function(t,e,r,a){var i="<"+t;return"svg"===t&&(i+=' version="1.1" xmlns="http://www.w3.org/2000/svg"'),i+=this._makePairs(e),i+=this._makePairs("data",r),i+=">"+(a||0===a?a:"")+"</"+t+">"},_deepCopy:function(t){return JSON.parse(JSON.stringify(t))},postRender:function(t){return t},_isArray:n,_getRatio:function(t){t.heightRatio=t.height-(t.paddingTop+t.paddingBottom)/t.max},_defineBaseScaleProperties:function(t,e){var r=this,a=r._scale(t,e);return r._extend(a,e),a._data=t,r._getRatio(a),a},_lifeCycleManager:function(t,e){{var r=this;this.attributes.data}r._call&&r._call(t);var a=r.preRender?r.preRender(Object.freeze(r._deepCopy(t))):0,i=a.prepend?a.prepend:[];return i=i.concat(e(t)),i=i.concat(a.append?a.append:[])},_makePairs:function(t,e){if(arguments.length<2?(e=t,t=""):t+="-",!e)return"";for(var r=Object.keys(e),a=r.length,i="";a--;)i+=" "+t+r[a]+'="'+e[r[a]]+'"';return i},_extend:function(t,e){var r=this;if(e&&t){for(var a=Object.keys(e),i=a.length;i--;)"object"!=typeof e[a[i]]||n(e[a[i]])?t[a[i]]=e[a[i]]:(t[a[i]]||(t[a[i]]={}),r._extend(t[a[i]],e[a[i]]));return this}},isFn:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},_makeToken:function(){return Math.random().toString(36).substr(2)},_sigFigs:function(t,e){var r=Math.pow(10,e-Math.floor(Math.log(t)/Math.LN10)-1);return Math.round(t*r)/r},_getSplits:function(t){if(t=Math.ceil(t,0),0===t)return{max:2,splits:2};var e=[3,2,5],r=t.toString().length,a=splits=0,i=function(t){for(var r=0;3>r;r++)if(t%e[r]===0)return e[r];return 0},n=function(t){var e=parseInt(t.toString()[0]);return 1==e?2:i(e)};return r>2?(a=Math.ceil10(t,r-1),splits=n(a),splits||(a+=Math.pow(10,r-1),splits=n(a))):2==r?(a=t.toString(),a[1]<=5&&(1==a[0]||2==a[0]||5==a[0]||7==a[0])&&0!=a[1]?a=parseInt(a[0]+"5"):(a=Math.ceil10(t,1),a=70==a?75:a),splits=i(a)):(a=t,splits=i(a),(5==a||3==a||2==a)&&(splits=1),splits||(a+=1,splits=n(a))),{max:a,splits:splits}},_scale:function(t,e){e=e||0,t="object"==typeof t[0]?t:[t];var r,a,i=0,n=e.yAxis||(e.chart?e.chart.yAxis:0),o=Number.MAX_VALUE,s=[],d=this,h=0,l=this._getSplits,u=[],c={};if(d._call)for(var p=0;p<t.length;p++)t[p]._ref=d._makeToken(),c[p]=t[p]._ref;if(t[0].data){r=[];for(var p=0;p<t.length;p++)r.push(t[p].data),u.push(t[p].strokeColor);t=r}var f=function(t,e){return t-e},g=t.length,m=t[0].length;if(n&&n.multi){o={},i={},h={};for(var b=0;g>b;b++)r=t[b].slice(0).sort(f),o[b]=r[0],a=l(r[m-1]),i[b]=a.max,h[b]=a.splits,delete r}else if(e.stack)for(var b=0;m>b;b++){for(var v=0,_=0;g>_;_++)v+=t[_][b];s.push(v),i=v>i?v:i,o=o>v?v:o}else if("bubble-scattered"==e.type){o={},i={};for(var p=0;3>p;p++)o[p]=Number.MAX_VALUE,i[p]=0;for(var b=0;m>b;b++)for(var _=0;g>_;_++)for(var x=0;3>x;x++)i[x]=i[x]<t[_][b][x]?t[_][b][x]:i[x],o[x]=o[x]>t[_][b][x]?t[_][b][x]:o[x]}else{for(var b=0;g>b;b++)r=t[b].slice(0).sort(f),o=o>r[0]?r[0]:o,i=i<r[m-1]?r[m-1]:i,delete r;n&&(a=l(i),i=a.max,h=a.splits)}return{min:o,max:i,maxSet:s,len:m,rows:g,ySecs:h,color:u,_refs:c}}})},function(t,e,r){{var a=r(1);t.exports=a.extend({_startCycle:function(){var t,e,r=this,a=r.attributes.opts.chart,i=r.attributes.data,n=r.append,o=(r.postRender,""),s=function(){return r.make("svg",{width:a.width,height:a.height,viewBox:"0 0 "+a.width+" "+a.height})};return"scattered"==a.type?(a.type="bubble-scattered",e=r._defineBaseScaleProperties(i,a),o=r._lifeCycleManager(e,function(e){return t=s(),r._describeBubbleChart(i,e)}),n(r.element,n(t,o))):(e=r._defineBaseScaleProperties(i,a),o=r._lifeCycleManager(e,function(e){return t=s(),o=r._describeBubble(i,a.height,a.width,e),o.unshift(r._describeXAxis(a.height,a.width,e)),o}),n(r.element,n(t,o)))},_getRatio:function(t){var e=t._data,r=t.height,a=t.width,i=t.len,n=(a>r?r:a)/3,o=t.paddingRight,s=t.paddingLeft,d=t.paddingTop,h=t.paddingBottom;if(t.type&&"bubble-scattered"==t.type)n=t.maxRadius=parseInt(t.maxRadius)||Math.sqrt(a*r/i)/2,t.paddingLeft=n>s?n:s,t.paddingRight=n>o?n:o,t.paddingTop=n>d?n:d,t.paddingBottom=n>h?n:h,t.widthRatio=(a-t.paddingLeft-t.paddingRight)/t.max[0],t.heightRatio=(r-t.paddingTop-t.paddingBottom)/t.max[1];else{t.bubble=t.bubble||{},t.xAxis=t.xAxis||{},n=t.bubble.maxRadius=parseInt(t.bubble.maxRadius)||n;var l=(a-s-o)/(i-1);n=t.bubble.maxRadius=n>l?l+s:n,t.paddingLeft=s||n*(e[0]/t.max),t.paddingRight=o||n*(e[i-1]/t.max),t.tickSize=(a-s-o)/(i-1)}},_describeBubbleChart:function(t,e){for(var r=e.height,a=e.width,i=e.heightRatio,n=e.widthRatio,o=this,s=e.len,d=e.max,h=e.fills||0,l=[],u=0;u<e.rows;u++)for(var c=0;s>c;c++){var p=t[u].data[c];l.push(o.make("circle",{cx:a-p[0]*n-e.paddingRight,cy:r-p[1]*i-e.paddingBottom,r:e.maxRadius*(p[2]/d[2]),fill:t[u].fill||h[c]||o._randomColor()}))}return l},_describeXAxis:function(t,e,r){var a=r.xAxis,i=t/2;return this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":a.strokeWidth||2,stroke:a.strokeColor||this._randomColor(),d:"M"+r.paddingLeft+" "+i+" H"+(e-r.paddingLeft-r.paddingRight)})},_describeBubble:function(t,e,r,a){if(!t)return"";for(var i=a.bubble,n=(t.length,[]),o=i.fills||0,s=i.strokeColors||0,d=i.strokeWidths||0,h=e/2,l=0;l<t.length;l++)n.push(this.make("circle",{cx:a.tickSize*l+a.paddingLeft,cy:h,r:i.maxRadius*(t[l]/a.max),fill:o[l]||i.fill||this._randomColor(),stroke:s[l]||i.strokeColor||this._randomColor(),"stroke-width":d[l]||i.strokeWidth||2}));return n}})}},function(t,e,r){{var a=r(1);t.exports=a.extend({_describePath:function(t,e,r){if(!e)return"";for(var a=[],i=r.outerRadius||t,n=r.innerRadius||i/2,o=0,s=r.fills||0,d=r.strokeColors||0,h=r.height/2,l=r.width/2,u=0;u<e.length;u++){var c=o+360*e[u];a.push(this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:d[u]||r.strokeColor||this._randomColor(),fill:s[u]||this._randomColor(),d:this._describeDonut(l,h,i,n,o,c)})),o=c}return a},_describeDonut:function(t,e,r,a,i,n){var o={start:this._polarToCartesian(t,e,r,n),end:this._polarToCartesian(t,e,r,i)},s={start:this._polarToCartesian(t,e,a,n),end:this._polarToCartesian(t,e,a,i)},d=180>=n-i?"0":"1";return["M",o.start.x,o.start.y,"A",r,r,0,d,0,o.end.x,o.end.y,"L",s.end.x,s.end.y,"A",a,a,0,d,1,s.start.x,s.start.y,"L",o.start.x,o.start.y,"Z"].join(" ")}})}},function(t,e,r){{var a=r(1);t.exports=a.extend({_describePath:function(t,e,r){if(!e)return"";for(var a=[],i=0,n=r.fills||0,o=r.strokeColors||0,s=r.width/2,d=r.height/2,h=0;h<e.length;h++){var l=i+360*e[h];a.push(this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:o[h]||r.strokeColor||this._randomColor(),d:this._describePie(s,d,t,i,l),fill:n[h]||this._randomColor()})),i=l}return a}})}},function(t,e,r){var a=r(3);a=new a,t.exports={getScale:function(t){var e=t.data||0,r=a._scale(e);return r.paddingY=t.paddingY||5,r.tickSize=a._sigFigs(t.width/(r.len-1),8),r.heightRatio=(t.height-2*r.paddingY)/r.max,r.height=t.height,r.width=t.width,r},getOpenPath:function(t,e){return a._describeAttributeD(e,0,t.paddingY,t)},getClosedPath:function(t,e){return a._describeAttributeD(e,0,t.paddingY,t)+a._describeCloseAttributeD(e,0,t.paddingY,t)}}},function(){},function(t,e,r){t.exports={path:r(14),arc:r(4),react:r(15)}},function(t){var e=function(t){console.warn(t)};t.exports={label:function(){e("You're attempting to use labels without the `Label` addons.  Check documentation https://github.com/alfredkam/yakojs/blob/master/doc.md")}}},function(){function t(t,e,r){return"undefined"==typeof r||0===+r?Math[t](e):(e=+e,r=+r,isNaN(e)||"number"!=typeof r||r%1!==0?0/0:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-r:-r))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+r:r))))}Math.round10||(Math.round10=function(e,r){return t("round",e,r)}),Math.floor10||(Math.floor10=function(e,r){return t("floor",e,r)}),Math.ceil10||(Math.ceil10=function(e,r){return t("ceil",e,r)})},function(t){t.exports=function(t,e){if(e instanceof Array){for(var r=0;r<e.length;r++)t=t.extend(e[r]);return t}return t.extend(e)}}]);