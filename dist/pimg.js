"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var React=_interopDefault(require("react"));require("whatwg-fetch");var classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Image=function(t){function e(){var t,r,n,o;classCallCheck(this,e);for(var a=arguments.length,c=Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=n=possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),n.state={loading:!0,blob:null,thumb:null},o=r,possibleConstructorReturn(n,o)}return inherits(e,t),createClass(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.src.replace("/upload/","/upload/t_media_lib_thumb/");this.setState({thumb:e}),fetch(this.props.src).then(function(t){return t.blob()}).then(function(e){var r=URL.createObjectURL(e);t.setState({blob:r,loading:!1})}).catch(function(t){return console.log(t)})}},{key:"render",value:function(){return this.state.loading?React.createElement("img",{className:"pimg pimg__loading",src:this.state.thumb}):React.createElement("img",{className:"pimg",src:this.state.blob})}}]),e}(React.Component);module.exports=Image;
//# sourceMappingURL=pimg.js.map