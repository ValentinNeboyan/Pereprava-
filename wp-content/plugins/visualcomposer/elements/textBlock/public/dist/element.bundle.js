(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./textBlock/editor.css":function(e,t){e.exports=".vce-text-block {\n  min-height: 1em;\n}\n"},"./textBlock/index.js":function(e,t,s){"use strict";s.r(t);var n=s("./node_modules/vc-cake/index.js"),a=s.n(n),o=s("./node_modules/@babel/runtime/helpers/extends.js"),i=s.n(o),l=s("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=s.n(l),c=s("./node_modules/@babel/runtime/helpers/createClass.js"),p=s.n(c),d=s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=s.n(d),m=s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),b=s.n(m),g=s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),h=s.n(g),v=s("./node_modules/@babel/runtime/helpers/inherits.js"),y=s.n(v),k=s("./node_modules/react/index.js"),x=s.n(k),C=function(e){function t(e){var s;return r()(this,t),(s=u()(this,b()(t).call(this,e))).updateElementAssets=s.updateElementAssets.bind(h()(s)),s}return y()(t,e),p()(t,[{key:"updateElementAssets",value:function(e,t,s){this.updateElementAssetsWithExclusion(this.props.id,s,["output","customClass","metaCustomId"])}},{key:"render",value:function(){var e=this.props,t=e.id,s=e.atts,n=e.editor,a=s.output,o=s.customClass,l=s.metaCustomId,r="vce-text-block",c={};"string"==typeof o&&o&&(r=r.concat(" "+o)),l&&(c.id=l);var p=this.applyDO("all");return x.a.createElement("div",i()({className:r},n,c),x.a.createElement("div",i()({className:"vce-text-block-wrapper vce",id:"el-"+t},p),a))}}]),t}(a.a.getService("api").elementComponent);(0,a.a.getService("cook").add)(s("./textBlock/settings.json"),function(e){e.add(C)},{css:!1,editorCss:s("./node_modules/raw-loader/index.js!./textBlock/editor.css")},"")},"./textBlock/settings.json":function(e){e.exports={output:{type:"htmleditor",access:"public",value:"<h2>Typography is the art and technique</h2>\n<p>Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed. The arrangement of type involves selecting typefaces, point size, line length, line-spacing (leading), letter-spacing (tracking), and adjusting the space within letters pairs (kerning).</p>",options:{label:"Content",description:"Content for text block",inline:!0,skinToggle:"darkTextSkin"}},darkTextSkin:{type:"toggleSmall",access:"public",value:!1},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["output","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},metaBackendLabels:{type:"group",access:"protected",value:[{value:["output"]}]},relatedTo:{type:"group",access:"protected",value:["General"]},metaOrder:{type:"number",access:"protected",value:3},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},assetsLibrary:{access:"public",type:"string",value:["animate"]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"textBlock"}}}},[["./textBlock/index.js"]]]);