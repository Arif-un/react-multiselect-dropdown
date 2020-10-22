import e,{useState as t,useEffect as l}from"react";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function r(e,t){var l;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(l=function(e,t){if(e){if("string"==typeof e)return n(e,void 0);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?n(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){l&&(e=l);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(l=e[Symbol.iterator]()).next.bind(l)}function s(){return e.createElement("svg",{className:"msl-close-icn"},e.createElement("line",{x1:"0",y1:"0",x2:"15",y2:"15"}),e.createElement("line",{x1:"0",y1:"15",x2:"15",y2:"0"}))}function i(){return e.createElement("svg",{className:"msl-arrow-icn"},e.createElement("line",{x1:"10",y1:"15",x2:"2",y2:"7"}),e.createElement("line",{x1:"18",y1:"7",x2:"10",y2:"15"}))}function o(t){var l=t.singleSelect,n=t.addValue,s=t.checkValueExist,i=t.value,o=[];return function t(c){for(var u,m=function(){var r=u.value,c=r[0],m=r[1];"group"===m.type?(o.push(e.createElement("div",{key:m.title+c,"data-msl":!0,className:"msl-grp-title"},m.title)),m.childs.length>0?t(m.childs):o.push(e.createElement("option",{className:"msl-option msl-option-disable"},m.emptyDataLabel||"No Data Found"))):o.push(e.createElement("option",a({tabIndex:"0",key:m.value+m.label+c+10},!l&&{"data-msl":!0},{style:a({},m.style&&m.style),onClick:function(){!m.disabled&&n(m)},onKeyPress:function(e){"Enter"===e.key&&!m.disabled&&n(m)},title:m.label,className:"msl-option\n             "+(s(m,i)?"msl-option-active":"")+" \n              "+(m.disabled?"msl-option-disable":"")+" "+(void 0!==m.classes?m.classes:""),value:m.value}),m.label))},d=r(c.entries());!(u=d()).done;)m()}(t.opts),o}function c(n){var c=n.options,u=n.width,m=n.downArrowIcon,d=n.closeIcon,p=n.clearable,g=n.downArrow,v=n.onChange,f=n.singleSelect,h=n.jsonValue,b=n.defaultValue,y=n.className,N=n.placeholder,E=n.disableChip,w=n.name,x=n.attr,S=n.disabled,A=n.limit,k=n.emptyDataLabel,C=n.customValue,O=t(!1),V=O[0],L=O[1],j=t([]),$=j[0],J=j[1],I=t(c||[]),D=I[0],R=I[1],P=t(null),q=P[0],F=P[1],K=!0,M=function(e){var t=e;"string"==typeof e&&(t=e.split(","));for(var l,a=JSON.stringify(D),n=[],s=function(e){return n.push({label:e,value:e}),{label:e,value:e}},i=[],o=r(t);!(l=o()).done;){var c=l.value,u=a.match(new RegExp('{+?.[^{]*?"'+c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(/"/g,"\\\\$&")+'"}',"g"));u?1===u.length?i.push(JSON.parse(u)):u.length>1&&i.push(JSON.parse("["+u.join(",")+"]")):""!==c&&null!==c&&C&&(s(c),i.push({label:c,value:c}))}return R([].concat(D,n)),i};l(function(){var e,t,l=[];if(""!==b||b.length>0)if("string"==typeof b)l=M(b),f&&l.length>1&&(l=[l[0]]);else if(Array.isArray(b)&&b.length>0&&"string"!=typeof b[0]){l=b;var a=(e=b,t=JSON.stringify(D),e.filter(function(e){return!JSON.parse(t.match(new RegExp("{+?.[^{]*?"+e.value+'"}',"g")))}));R([].concat(D,a)),f&&l.length>1&&(l=[l[0]])}else Array.isArray(b)&&b.length>0&&(l=M(b),f&&l.length>1&&(l=[l[0]]));J(l)},[b]);var T=function(e){if(J(e),h)v(e);else{var t="";t+=e.map(function(e){return e.value}),v(t)}},U=function(){L(!0)},H=function(){L(!1)},z=function(e,t){var l=null,a=null;e.target.hasAttribute("data-msl")?l=e.target:e.target.parentNode.hasAttribute("data-msl")?l=e.target.parentNode:e.target.parentNode.parentNode.hasAttribute("data-msl")?l=e.target.parentNode.parentNode:e.target.parentNode.parentNode.parentNode.hasAttribute("data-msl")?l=e.target.parentNode.parentNode.parentNode:e.target.parentNode.parentNode.parentNode.parentNode.hasAttribute("data-msl")&&(l=e.target.parentNode.parentNode.parentNode.parentNode),null!==l&&(a=l.querySelector(".msl-input")),null!==a&&(t?a.focus():a.blur())},B=function e(t){G(t)?U():(document.removeEventListener("click",e),H())},G=function(e){return!!e.target.hasAttribute("data-msl")},Q=function(e,t){return t.some(function(t){return t.value===e.value})},W=function(e){var t=e.label,l=e.value;return t.match(/Create "|"+/g)&&(t=t.replace(/Create "|"+/g,"")),{label:t,value:l}},X=function(e){e=W(e);var t=[].concat($);f?t=[e]:Q(e,$)?t=t.filter(function(t){return t.value!==e.value}):(null===A||A>$.length)&&t.push(e),T(t),F(null),document.querySelectorAll(".msl-input").forEach(function(e){return e.innerHTML=""})};return e.createElement("div",a({},x,{onClick:function(e){K&&function e(t){G(t)?(V||document.addEventListener("click",e),z(t,!0),U()):(H(),document.removeEventListener("click",e))}(e)},style:{width:u},className:"msl-wrp msl-vars "+y+" "+(S?"msl-disabled":"")}),e.createElement("input",{name:w,type:"hidden",value:$.map(function(e){return e.value})}),e.createElement("div",{"data-msl":!0,className:"msl "+(V?"msl-active":"")+" "},e.createElement("div",{"data-msl":!0,className:"msl-input-wrp",style:{marginRight:p&&g?60:g||p?40:5}},!f&&!E&&$.map(function(t,l){return e.createElement("div",{key:"msl-chip-"+(l+11),className:"msl-chip"},t.label,e.createElement("div",{role:"button","aria-label":"delete-value",onClick:function(){return function(e){var t=[].concat($);t.splice(e,1),T(t)}(l)},className:"msl-btn msl-chip-delete msl-flx"},e.createElement(s,null)),e.createElement("span",null))}),!f&&E&&1===$.length?e.createElement("span",{className:"msl-single-value","data-msl":!0,style:{width:u-(p&&g?60:g||p?40:5)}},$[0].label,"d"):E&&$.length>1&&e.createElement("span",{className:"msl-single-value","data-msl":!0,style:{width:u-(p&&g?60:g||p?40:5)}},$.length," Selected"),f&&1===$.length&&e.createElement("span",{className:"msl-single-value","data-msl":!0,style:{width:u-(p&&g?60:g||p?40:5)}},$[0].label),(!f&&!E||!(!f||$.length)||!(f||!E||$.length))&&e.createElement("div",{"data-msl":!0,"data-placeholder":N,className:"msl-input",contentEditable:!S,onKeyUp:function(e){var t=e.target.textContent.trim().replace(/,+/g,"");if(t){var l={label:'Create "'+t+'"',value:t},a=JSON.stringify(D),n=a.match(new RegExp('{"label":+?.[^{]*?('+t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")+")+?.[^{]*?}","gi"));if(n){var r=JSON.parse("["+n+"]");C&&!a.match(new RegExp('{"label":(.[^{]*?)"value":"'+t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")+'"}',"gi"))&&r.push(l),F(r)}else F(C?[l]:[]);"Enter"!==e.key&&","!==e.key||(!C||n||Q(W(l),$)?q.length>0&&X(q[0]):(R([].concat(D,[W(l)])),X(l)))}else F(null)}})),(p||g)&&e.createElement("div",{className:"msl-actions msl-flx"},p&&$.length>0&&e.createElement("div",{role:"button","aria-label":"close-menu",onClick:function(){T([])},className:"msl-btn msl-clear-btn msl-flx"},d||e.createElement(s,null)),g&&e.createElement("div",{role:"button","aria-label":"toggle-menu",onClick:function(e){K=!1,V?(document.removeEventListener("click",B),z(e,!1),H()):(z(e,!0),U(),document.addEventListener("click",B))},className:"msl-btn msl-arrow-btn msl-flx",style:a({},V&&{transform:"rotate(180deg)"})},m||e.createElement(i,null)))),e.createElement("div",{className:"msl-options"},V&&!q&&D.length?e.createElement(o,a({opts:D},{singleSelect:f,addValue:X,checkValueExist:Q,value:$})):q&&q.length?e.createElement(o,a({opts:q},{singleSelect:f,addValue:X,checkValueExist:Q,value:$})):(q&&!q.length||D&&!D.length)&&e.createElement("option",{className:"msl-option msl-option-disable"},k)))}c.defaultProps={clearable:!0,downArrow:!0,width:300,singleSelect:!1,jsonValue:!1,defaultValue:"",disableChip:!1,name:"",disabled:!1,limit:null,emptyDataLabel:"No Data Found",placeholder:"Select...",onChange:function(){},options:[{label:"Empty",value:"",disabled:!0,style:{textAlign:"center"}}],customValue:!1};export default c;
//# sourceMappingURL=index.modern.js.map
