/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/CookieManager.js":
/*!*********************************!*\
  !*** ./src/js/CookieManager.js ***!
  \*********************************/
/***/ (() => {

(function(){window.addEventListener("load",function(){return updateConsent()});window.addEventListener("update-consent-config",function(e){return updateConsent(e.detail)});var updateConsent=function updateConsent(){var newCookieValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(newCookieValue){OMAC.hasResponded=true;OMAC.cookie=newCookieValue;OMAC.setCookie("omacookies-consent",newCookieValue)}else{OMAC.cookie=OMAC.getCookie("omacookies-consent");OMAC.hasResponded=!!OMAC.cookie}var all=OMAC.consent.all=OMAC.strContainsAny(OMAC.cookie,"all");OMAC.consent.preferences=all||OMAC.strContainsAny(OMAC.cookie,"preferences");OMAC.consent.statistics=all||OMAC.strContainsAny(OMAC.cookie,"statistics");OMAC.consent.marketing=all||OMAC.strContainsAny(OMAC.cookie,"marketing");window.dispatchEvent(OMAC.consentUpdatedEvent)};var getConsentSelectionForm=function getConsentSelectionForm(){return document.getElementById("omacookies-selection-form")};var refreshConsentFormSelections=function refreshConsentFormSelections(){getConsentSelectionForm().querySelectorAll("input[name=omacookies_consent]").forEach(function(input){input.checked=OMAC.strContainsAny(OMAC.cookie,["all",input.value])})}})();

/***/ }),

/***/ "./src/js/OMAC.js":
/*!************************!*\
  !*** ./src/js/OMAC.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setReadOnlyProperty=function setReadOnlyProperty(obj,propName,propValue){Object.defineProperty(obj,propName,{value:propValue,writable:false})};var OMACookies={cookie:null,hasResponded:false,consent:{all:false,preferences:false,statistics:false,marketing:false},available_languages:{es:__webpack_require__(/*! ../lang/es.json */ "./src/lang/es.json"),en:__webpack_require__(/*! ../lang/en.json */ "./src/lang/en.json")},lang:"",trans:{},readMoreLink:"#",elementId:"omacookies",format:"banner"};setReadOnlyProperty(OMACookies,"consentUpdatedEvent",new Event("consent-updated"));setReadOnlyProperty(OMACookies,"openConsentBoxEvent",new Event("open-consent-box"));setReadOnlyProperty(OMACookies,"consentTypes",["preferences","statistics","marketing"]);OMACookies.setLang=function(lang){this.lang=lang;this.trans=this.available_languages[lang]};module.exports=OMACookies;

/***/ }),

/***/ "./src/js/components/CookiesNoticeBox.js":
/*!***********************************************!*\
  !*** ./src/js/components/CookiesNoticeBox.js ***!
  \***********************************************/
/***/ ((module) => {

var NoticeBox={elementId:"omacookies-notice-box",element:null,initialized:false,isOpen:false};NoticeBox.close=function(){this.element.classList.add("omacookies-hide");this.isOpen=false};NoticeBox.open=function(){this.element.classList.remove("omacookies-hide");this.isOpen=true};NoticeBox.buildStructure=function(){var _this=this;var html="\n        <div id=\"".concat(this.elementId,"\" class=\"omacookies-backdrop ").concat(this.isOpen||!OMAC.hasResponded?"":"omacookies-hide","\">\n            <div class=\"omacookies-notice omacookies-box omacookies-").concat(OMAC.format,"\">\n                <header class=\"omacookies-box-header\">\n                    <h3 class=\"omacookies-title\">").concat(OMAC.trans.consent_box_title,"</h3>\n                </header>\n                <div class=\"omacookies-box-body\">\n                    <p class=\"omacookies-text\">").concat(OMAC.trans.consent_box_description,"</p>\n                    <a href=\"").concat(OMAC.readMoreLink,"\" target=\"_blank\" class=\"omacookies-read-more\"\n                        aria-label=\"").concat(OMAC.trans.read_more_label,"\">\n                        ").concat(OMAC.trans.read_more,"\n                    </a>\n                </div>\n                <footer class=\"omacookies-box-footer\">\n                    <button id=\"omacookies-selection-btn\" class=\"omacookies-btn-secondary\"\n                        aria-label=\"").concat(OMAC.trans.customize_cookies_btn_label,"\" aria-labelledby=\"omacookies-selection\">\n                        ").concat(OMAC.trans.customize_cookies_btn,"\n                    </button>\n                    <button id=\"omacookies-accept-all-btn\" class=\"omacookies-btn-primary\">\n                        ").concat(OMAC.trans.accept_all_cookies_btn,"\n                    </button>\n                </footer>\n                <button id=\"omacookies-close-notice\" class=\"omacookies-close\" aria-labelledby=\"omacookies-consent\" disabled>\n                    <span class=\"omacookies-visually-hidden\">").concat(OMAC.trans.close,"</span>\n                </button>\n            </div>\n        </div>\n    ").trim();var template=document.createElement("div");template.innerHTML=html;var struc=template.firstElementChild;struc.querySelector("#omacookies-close-notice").addEventListener("click",function(){return _this.close()});struc.querySelector("#omacookies-selection-btn").addEventListener("click",function(){console.log("TODO: OPEN COOKIES CONFIG POPUP")});struc.querySelector("#omacookies-accept-all-btn").addEventListener("click",function(){window.dispatchEvent(new CustomEvent("update-consent-config",{detail:"all"}));_this.close()});return struc};NoticeBox.refresh=function(){this.element.innerHTML=this.buildStructure().innerHTML};NoticeBox.init=function(){this.element=this.buildStructure();this.initialized=true;return this.element};module.exports=NoticeBox;

/***/ }),

/***/ "./src/js/components/IframeHandler.js":
/*!********************************************!*\
  !*** ./src/js/components/IframeHandler.js ***!
  \********************************************/
/***/ ((module) => {

function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e3){didErr=true;err=_e3},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}var IframeHandler=function(){function IframeHandler(selector){var _this=this;var excludedAttributes=arguments.length>1&&arguments[1]!==undefined?arguments[1]:["consent"];_classCallCheck(this,IframeHandler);this.selector=selector;this.excludedAttributes=excludedAttributes;window.addEventListener("consent-updated",function(){return _this.handleCookiesConsent()})}_createClass(IframeHandler,[{key:"getContentBlockedHtml",value:function getContentBlockedHtml(){return"\n            <div class=\"omacookies-iframe-youtube-content\">\n                <img src=\"dist/img/omacookies-icon.svg\" alt=\"Cookies\">\n                <h3 class=\"omacookies-title\">".concat(OMAC.trans.content_blocked_title,"</h3>\n                <p class=\"omacookies-text\">").concat(OMAC.trans.content_blocked_text,"</p>\n                <button id=\"omacookies-iframe-btn\" class=\"omacookies-btn-secondary\">\n                    ").concat(OMAC.trans.content_blocked_btn,"\n                </button>\n            </div>\n        ")}},{key:"getIframeHtml",value:function getIframeHtml(elem){return"<iframe></iframe>"}},{key:"getAttributesAsProps",value:function getAttributesAsProps(elem){var props={};var _iterator=_createForOfIteratorHelper(elem.attributes),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var attr=_step.value;if(attr.name.indexOf("data-omacookies-")!==-1){var name=attr.name.split("data-omacookies-")[1];if(this.excludedAttributes.includes(name))continue;props[name]=attr.value}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return props}},{key:"enableIframe",value:function enableIframe(elem){elem.innerHTML=this.getIframeHtml(elem);var iframe=elem.querySelector("iframe");var props=this.getAttributesAsProps(elem);for(var _i=0,_Object$entries=Object.entries(props);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];iframe.setAttribute(key,value)}}},{key:"disableIframe",value:function disableIframe(elem){elem.innerHTML=this.getContentBlockedHtml();elem.querySelector("button").addEventListener("click",function(){return OMAC.NoticeBox.open()})}},{key:"handleCookiesConsent",value:function handleCookiesConsent(){var elements=document.querySelectorAll(this.selector);var _iterator2=_createForOfIteratorHelper(elements),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var elem=_step2.value;var consentType=elem.getAttribute("data-omacookies-consent");if(OMAC.consent[consentType]){this.enableIframe(elem)}else{this.disableIframe(elem)}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}]);return IframeHandler}();module.exports=IframeHandler;

/***/ }),

/***/ "./src/js/components/JavascriptScript.js":
/*!***********************************************!*\
  !*** ./src/js/components/JavascriptScript.js ***!
  \***********************************************/
/***/ (() => {

(function(){var getScripts=function getScripts(){return document.querySelectorAll("script.omacookies-script")};var enableScripts=function enableScripts(){getScripts().forEach(function(script){var src=script.getAttribute("src");if(src){script.removeAttribute("src");script.setAttribute("type","text/javascript");script.setAttribute("src",src)}else{var newScript=document.createElement("script");newScript.className=script.className;newScript.setAttribute("type","text/javascript");newScript.innerText=script.innerText;script.parentNode.insertBefore(newScript,script);script.remove()}})};var disableScripts=function disableScripts(){getScripts().forEach(function(script){script.setAttribute("type","text/plain")})};var handleCookiesConsent=function handleCookiesConsent(){if(OMAC.consent.statistics){enableScripts()}else{disableScripts()}};window.addEventListener("consent-updated",handleCookiesConsent)})();

/***/ }),

/***/ "./src/js/components/RegularIframe.js":
/*!********************************************!*\
  !*** ./src/js/components/RegularIframe.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IframeHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IframeHandler */ "./src/js/components/IframeHandler.js");
/* harmony import */ var _IframeHandler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IframeHandler__WEBPACK_IMPORTED_MODULE_0__);
new (_IframeHandler__WEBPACK_IMPORTED_MODULE_0___default())(".omacookies-iframe");

/***/ }),

/***/ "./src/js/components/YoutubeIframe.js":
/*!********************************************!*\
  !*** ./src/js/components/YoutubeIframe.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IframeHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IframeHandler */ "./src/js/components/IframeHandler.js");
/* harmony import */ var _IframeHandler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IframeHandler__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var YoutubeIframe=function(_IframeHandler){_inherits(YoutubeIframe,_IframeHandler);var _super=_createSuper(YoutubeIframe);function YoutubeIframe(selector,excludedAttributes){_classCallCheck(this,YoutubeIframe);return _super.call(this,selector,excludedAttributes)}_createClass(YoutubeIframe,[{key:"getIframeHtml",value:function getIframeHtml(elem){var youtubeVideoId=elem.getAttribute("data-omacookies-yt-video-id");return"\n            <iframe\n                width=\"560\" height=\"315\" frameborder=\"0\" allowfullscreen\n                src=\"https://www.youtube-nocookie.com/embed/".concat(youtubeVideoId,"\"\n                allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n            ></iframe>\n        ")}}]);return YoutubeIframe}((_IframeHandler__WEBPACK_IMPORTED_MODULE_0___default()));new YoutubeIframe(".omacookies-iframe-youtube",["consent","src","yt-video-id"]);

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ (() => {

window.addEventListener("load",function(){var elem=document.getElementById(OMAC.elementId);elem.innerHTML="";elem.append(OMAC.NoticeBox.init())});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window.OMAC=__webpack_require__(/*! ./OMAC */ "./src/js/OMAC.js");window.OMAC.setLang("es");__webpack_require__(/*! ./utils */ "./src/js/utils.js");window.OMAC.NoticeBox=__webpack_require__(/*! ./components/CookiesNoticeBox */ "./src/js/components/CookiesNoticeBox.js");__webpack_require__(/*! ./CookieManager */ "./src/js/CookieManager.js");__webpack_require__(/*! ./components/RegularIframe */ "./src/js/components/RegularIframe.js");__webpack_require__(/*! ./components/YoutubeIframe */ "./src/js/components/YoutubeIframe.js");__webpack_require__(/*! ./components/JavascriptScript */ "./src/js/components/JavascriptScript.js");__webpack_require__(/*! ./init.js */ "./src/js/init.js");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (() => {

function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e2){didErr=true;err=_e2},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}OMAC.setCookie=function(name,value){var exdays=arguments.length>2&&arguments[2]!==undefined?arguments[2]:365;var d=new Date;d.setTime(d.getTime()+exdays*24*60*60*1000);var expires="expires="+d.toUTCString();document.cookie=name+"="+value+";"+expires+";path=/"};OMAC.getCookie=function(name){name+="=";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1)}if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}return null};OMAC.deleteCookie=function(name){return OMAC.setCookie(name,null,-1)};OMAC.removeAttributes=function(element,attributes){var _iterator=_createForOfIteratorHelper(attributes),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var attr=_step.value;element.removeAttribute(attr)}}catch(err){_iterator.e(err)}finally{_iterator.f()}};OMAC.strContainsAny=function(haystack,needles){if(haystack&&needles){needles=typeof needles==="string"?[needles]:needles;var _iterator2=_createForOfIteratorHelper(needles),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var needle=_step2.value;if(haystack.indexOf(needle)!==-1)return true}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}return false};OMAC.arrayIntersec=function(array1,array2){return array1.filter(function(x){return array2.includes(x)})};

/***/ }),

/***/ "./src/scss/omacookies.scss":
/*!**********************************!*\
  !*** ./src/scss/omacookies.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lang/en.json":
/*!**************************!*\
  !*** ./src/lang/en.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"content_blocked_title":"Iframe blocked","content_blocked_text":"This content is bloqued due to your cookies configuration.","btn.change_cookies_preferences":"Change cookie preferences","consent_preferences_title":"Preferences","consent_statistics_title":"Statistics","consent_marketing_title":"Marketing","accept_selection":"Accept selection"}');

/***/ }),

/***/ "./src/lang/es.json":
/*!**************************!*\
  !*** ./src/lang/es.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"consent_preferences_title":"Preferencias","consent_statistics_title":"Estadísticas","consent_marketing_title":"Comerciales","accept_selection":"Aceptar selección","consent_box_title":"Esta página web usa cookies","consent_box_description":"Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.","read_more":"Leer más","read_more_label":"Leer más acerca de las cookies de esta página","customize_cookies_btn":"Personalizar","customize_cookies_btn_label":"Personalizar las cookies","accept_all_cookies_btn":"Aceptar todas","content_blocked_title":"... Ups!","content_blocked_text":"Este contenido ha sido bloqueado debido a tu configuración de cookies.","content_blocked_btn":"Personalizar cookies"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/omacookies": 0,
/******/ 			"css/omacookies": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkoma_cookies"] = self["webpackChunkoma_cookies"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/omacookies"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/omacookies"], () => (__webpack_require__("./src/scss/omacookies.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;