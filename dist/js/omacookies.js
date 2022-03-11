/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/CookieManager.js":
/*!*********************************!*\
  !*** ./src/js/CookieManager.js ***!
  \*********************************/
/***/ (() => {

window.addEventListener("load",function(){return OMAC.updateConsent()});window.addEventListener("update-consent-config",function(e){return OMAC.updateConsent(e.detail)});OMAC.updateConsent=function(){var newCookieValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(newCookieValue!==null){OMAC.hasResponded=true;OMAC.cookie=newCookieValue;OMAC.setCookie("omacookies-consent",newCookieValue)}else{OMAC.cookie=OMAC.getCookie("omacookies-consent");OMAC.hasResponded=OMAC.cookie!==null}var all=OMAC.consent.all=OMAC.strContainsAny(OMAC.cookie,"all");OMAC.consent.statistics=all||OMAC.strContainsAny(OMAC.cookie,"statistics");OMAC.consent.marketing=all||OMAC.strContainsAny(OMAC.cookie,"marketing");window.dispatchEvent(OMAC.consentUpdatedEvent)};

/***/ }),

/***/ "./src/js/OMAC.js":
/*!************************!*\
  !*** ./src/js/OMAC.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setReadOnlyProperty=function setReadOnlyProperty(obj,propName,propValue){Object.defineProperty(obj,propName,{value:propValue,writable:false})};var OMACookies={cookie:null,hasResponded:false,consent:{all:false,statistics:false,marketing:false},available_languages:{es:__webpack_require__(/*! ../lang/es.json */ "./src/lang/es.json"),en:__webpack_require__(/*! ../lang/en.json */ "./src/lang/en.json")},lang:"",trans:{},readMoreLink:"#",elementId:"omacookies",format:"modal",quickLinkPosition:"bottom-right"};setReadOnlyProperty(OMACookies,"consentUpdatedEvent",new Event("consent-updated"));setReadOnlyProperty(OMACookies,"openConsentBoxEvent",new Event("open-consent-box"));setReadOnlyProperty(OMACookies,"consentTypes",["statistics","marketing"]);OMACookies.setLang=function(lang){this.lang=lang;this.trans=this.available_languages[lang]};module.exports=OMACookies;

/***/ }),

/***/ "./src/js/components/CookiesNoticeBox.js":
/*!***********************************************!*\
  !*** ./src/js/components/CookiesNoticeBox.js ***!
  \***********************************************/
/***/ ((module) => {

var NoticeBox={elementId:"omacookies-notice-box",element:null,initialized:false,isOpen:false};NoticeBox.close=function(){OMAC.closeModal(this)};NoticeBox.open=function(){OMAC.openModal(this)};NoticeBox.buildStructure=function(){var _this=this;var html="\n        <div id=\"".concat(this.elementId,"\" class=\"omacookies-backdrop ").concat(this.isOpen||!OMAC.hasResponded?"fade-in":"omacookies-hide","\">\n            <div class=\"omacookies-notice omacookies-box omacookies-").concat(OMAC.format,"\">\n                <header class=\"omacookies-box-header\">\n                    <h3 class=\"omacookies-title\">").concat(OMAC.trans.consent_box_title,"</h3>\n                </header>\n                <div class=\"omacookies-box-body\">\n                    <p class=\"omacookies-text\">").concat(OMAC.trans.consent_box_description,"</p>\n                    <a href=\"").concat(OMAC.readMoreLink,"\" target=\"_blank\" class=\"omacookies-read-more\"\n                        aria-label=\"").concat(OMAC.trans.read_more_label,"\">\n                        ").concat(OMAC.trans.read_more,"\n                    </a>\n                </div>\n                <footer class=\"omacookies-box-footer\">\n                    <button id=\"omacookies-selection-btn\" class=\"omacookies-btn-secondary\"\n                        aria-label=\"").concat(OMAC.trans.customize_cookies_btn_label,"\" aria-labelledby=\"omacookies-selection\">\n                        ").concat(OMAC.trans.customize_cookies_btn,"\n                    </button>\n                    <button id=\"omacookies-accept-all-btn\" class=\"omacookies-btn-primary\">\n                        ").concat(OMAC.trans.accept_all_cookies_btn,"\n                    </button>\n                </footer>\n            </div>\n        </div>\n    ");var template=document.createElement("div");template.innerHTML=html;var struc=template.firstElementChild;struc.querySelector("#omacookies-selection-btn").addEventListener("click",function(){_this.close();OMAC.SelectionModal.open()});struc.querySelector("#omacookies-accept-all-btn").addEventListener("click",function(){window.dispatchEvent(new CustomEvent("update-consent-config",{detail:"all"}));_this.close();OMAC.QuickLink.show()});return struc};NoticeBox.refresh=function(){this.element.innerHTML=this.buildStructure().innerHTML};NoticeBox.init=function(){this.element=this.buildStructure();this.initialized=true;return this.element};module.exports=NoticeBox;

/***/ }),

/***/ "./src/js/components/CookiesSelectionModal.js":
/*!****************************************************!*\
  !*** ./src/js/components/CookiesSelectionModal.js ***!
  \****************************************************/
/***/ ((module) => {

var SelectionModal={elementId:"omacookies-selection-box",element:null,initialized:false,isOpen:false,isCloseEnabled:false};SelectionModal.close=function(){OMAC.closeModal(this)};SelectionModal.open=function(){OMAC.openModal(this)};SelectionModal.enableClose=function(){this.isCloseEnabled=true};SelectionModal.buildStructure=function(){var _this=this;var html="\n        <div id=\"".concat(this.elementId,"\" class=\"omacookies-backdrop ").concat(this.isOpen?"":"omacookies-hide","\">\n            <form class=\"omacookies-selection omacookies-box omacookies-modal\" id=\"omacookies-selection-form\">\n                <header class=\"omacookies-box-header\">\n                    <h3 class=\"omacookies-title\">").concat(OMAC.trans.select_box_title,"</h3>\n                </header>\n                <div class=\"omacookies-box-body\">\n                    <p class=\"omacookies-text\">").concat(OMAC.trans.select_box_description,"</p>\n                    <a href=\"").concat(OMAC.readMoreLink,"\" target=\"_blank\" class=\"omacookies-read-more\"\n                        aria-label=\"").concat(OMAC.trans.read_more_label,"\">\n                        ").concat(OMAC.trans.read_more,"</a>\n                    <div class=\"omacookies-switch-list\">\n                        <label class=\"omacookies-switch-group\">\n                            <span class=\"omacookies-switch-text\">").concat(OMAC.trans.select_mandatory_title,"</span>\n                            <input type=\"checkbox\" disabled checked />\n                            <span class=\"omacookies-switch\"></span>\n                        </label>\n                        <label class=\"omacookies-switch-group\" for=\"switch-statistics\">\n                            <span class=\"omacookies-switch-text\">").concat(OMAC.trans.select_statistics_title,"</span>\n                            <input id=\"switch-statistics\" type=\"checkbox\" value=\"statistics\" name=\"omacookies_consent\" />\n                            <span class=\"omacookies-switch\"></span>\n                        </label>\n                        <label class=\"omacookies-switch-group\" for=\"switch-marketing\">\n                            <span class=\"omacookies-switch-text\">").concat(OMAC.trans.select_marketing_title,"</span>\n                            <input id=\"switch-marketing\" type=\"checkbox\" value=\"marketing\" name=\"omacookies_consent\" />\n                            <span class=\"omacookies-switch\"></span>\n                        </label>\n                    </div>\n                </div>\n                <footer class=\"omacookies-box-footer\">\n                    <button id=\"omacookies-select-all-btn\" type=\"button\" class=\"omacookies-btn-secondary\">").concat(OMAC.trans.select_all_btn,"</button>\n                    <button id=\"omacookies-accept-selection-btn\" type=\"submit\"  class=\"omacookies-btn-primary\">").concat(OMAC.trans.accept_selection_btn,"</button>\n                </footer>\n                <button id=\"omacookies-close-selection\" type=\"button\" class=\"omacookies-close\" aria-labelledby=\"").concat(this.elementId,"\">\n                    <span class=\"omacookies-visually-hidden\">").concat(OMAC.trans.close,"</span>\n                    <i class=\"omacookies-icon-close\"></i>\n                </button>\n            </form>\n        </div>\n    ");var template=document.createElement("div");template.innerHTML=html;var struc=template.firstElementChild;var checkboxes=struc.querySelectorAll("[name='omacookies_consent']");this.updateCheckboxes(checkboxes);struc.querySelector("#omacookies-select-all-btn").addEventListener("click",function(){checkboxes.forEach(function(checkbox){checkbox.checked=true})});struc.querySelector("#omacookies-selection-form").addEventListener("submit",function(e){return _this.handleFormSubmit(e)});var closeBtn=struc.querySelector("#omacookies-close-selection");if(!OMAC.hasResponded){closeBtn.disabled=true}closeBtn.addEventListener("click",function(){_this.close();OMAC.QuickLink.show()});if(!OMAC.hasResponded||!this.isCloseEnabled){closeBtn.disabled=true}else{this.enableCloseModalOnBackdropClick(struc)}window.addEventListener("consent-updated",function(){_this.updateCheckboxes(checkboxes);_this.enableClose();_this.enableCloseButton(closeBtn);_this.enableCloseModalOnBackdropClick(struc)});return struc};SelectionModal.handleFormSubmit=function(e){e.preventDefault();var consentSelections=new FormData(e.target).getAll("omacookies_consent");var formattedConsent=OMAC.arrayIntersec(OMAC.consentTypes,consentSelections);var newConsent=formattedConsent.join();if(formattedConsent.length===OMAC.consentTypes.length){newConsent="all"}this.close();window.dispatchEvent(new CustomEvent("update-consent-config",{detail:newConsent}));OMAC.QuickLink.show()};SelectionModal.updateCheckboxes=function(checkboxes){checkboxes.forEach(function(checkbox){return SelectionModal.updateCheckbox(checkbox)})};SelectionModal.updateCheckbox=function(checkbox){if(OMAC.strContainsAny(OMAC.cookie,["all",checkbox.value])){return checkbox.checked=true}};SelectionModal.enableCloseButton=function(button){button.disabled=false};SelectionModal.enableCloseModalOnBackdropClick=function(modalElement){var _this2=this;modalElement.addEventListener("click",function(e){e.stopPropagation();if(e.target.classList.contains("omacookies-backdrop")){_this2.close();OMAC.QuickLink.show()}})};SelectionModal.refresh=function(){this.element.innerHTML=this.buildStructure().innerHTML};SelectionModal.init=function(){this.element=this.buildStructure();this.initialized=true;return this.element};module.exports=SelectionModal;

/***/ }),

/***/ "./src/js/components/IframeHandler.js":
/*!********************************************!*\
  !*** ./src/js/components/IframeHandler.js ***!
  \********************************************/
/***/ ((module) => {

function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e3){didErr=true;err=_e3},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}var IframeHandler=function(){function IframeHandler(selector){var _this=this;var excludedAttributes=arguments.length>1&&arguments[1]!==undefined?arguments[1]:["consent"];_classCallCheck(this,IframeHandler);this.selector=selector;this.excludedAttributes=excludedAttributes;window.addEventListener("consent-updated",function(){return _this.handleCookiesConsent()})}_createClass(IframeHandler,[{key:"getContentBlockedHtml",value:function getContentBlockedHtml(){return"\n            <div class=\"omacookies-iframe-youtube-content\">\n                <i class=\"omacookies-icon-cookie\"></i>\n                <h3 class=\"omacookies-title\">".concat(OMAC.trans.content_blocked_title,"</h3>\n                <p class=\"omacookies-text\">").concat(OMAC.trans.content_blocked_text,"</p>\n                <button id=\"omacookies-iframe-btn\" class=\"omacookies-btn-secondary\">\n                    ").concat(OMAC.trans.content_blocked_btn,"\n                </button>\n            </div>\n        ")}},{key:"getIframeHtml",value:function getIframeHtml(){return"<iframe></iframe>"}},{key:"getAttributesAsProps",value:function getAttributesAsProps(elem){var props={};var _iterator=_createForOfIteratorHelper(elem.attributes),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var attr=_step.value;if(attr.name.indexOf("data-omacookies-")!==-1){var name=attr.name.split("data-omacookies-")[1];if(this.excludedAttributes.includes(name))continue;props[name]=attr.value}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return props}},{key:"enableIframe",value:function enableIframe(elem){elem.innerHTML=this.getIframeHtml(elem);var iframe=elem.querySelector("iframe");var props=this.getAttributesAsProps(elem);for(var _i=0,_Object$entries=Object.entries(props);_i<_Object$entries.length;_i++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];iframe.setAttribute(key,value)}}},{key:"disableIframe",value:function disableIframe(elem){elem.innerHTML=this.getContentBlockedHtml();elem.querySelector("button").addEventListener("click",function(){return OMAC.SelectionModal.open()})}},{key:"handleCookiesConsent",value:function handleCookiesConsent(){var elements=document.querySelectorAll(this.selector);var _iterator2=_createForOfIteratorHelper(elements),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var elem=_step2.value;var consentType=elem.getAttribute("data-omacookies-consent");if(OMAC.consent[consentType]){this.enableIframe(elem)}else{this.disableIframe(elem)}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}]);return IframeHandler}();module.exports=IframeHandler;

/***/ }),

/***/ "./src/js/components/JavascriptScript.js":
/*!***********************************************!*\
  !*** ./src/js/components/JavascriptScript.js ***!
  \***********************************************/
/***/ (() => {

function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e2){didErr=true;err=_e2},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}(function(){var enableScripts=function enableScripts(script){var src=script.getAttribute("src");if(src){script.removeAttribute("src");script.setAttribute("type","text/javascript");script.setAttribute("src",src)}else{var newScript=document.createElement("script");newScript.className=script.className;newScript.setAttribute("type","text/javascript");newScript.innerText=script.innerText;script.parentNode.insertBefore(newScript,script);script.remove()}};var disableScripts=function disableScripts(script){return script.setAttribute("type","text/plain")};var handleCookiesConsent=function handleCookiesConsent(){var elements=document.querySelectorAll("script.omacookies-script");var _iterator=_createForOfIteratorHelper(elements),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var elem=_step.value;var consentType=elem.getAttribute("data-omacookies-consent");if(OMAC.consent[consentType]){enableScripts(elem)}else{disableScripts(elem)}}}catch(err){_iterator.e(err)}finally{_iterator.f()}};window.addEventListener("consent-updated",handleCookiesConsent)})();

/***/ }),

/***/ "./src/js/components/QuickLink.js":
/*!****************************************!*\
  !*** ./src/js/components/QuickLink.js ***!
  \****************************************/
/***/ ((module) => {

var QuickLink={elementId:"omacookies-quick-link",element:null,initialized:false,isShown:false};QuickLink.hide=function(){this.element.classList.add("omacookies-hide");this.isShown=false};QuickLink.show=function(){this.element.classList.remove("omacookies-hide");this.isShown=true};QuickLink.buildStructure=function(){var _this=this;var html="\n        <button id=\"".concat(this.elementId,"\"\n            class=\"omacookies-quick-link ").concat(OMAC.quickLinkPosition," ").concat(this.isShown||OMAC.hasResponded?"":"omacookies-hide","\"\n            aria-labelledby=\"").concat(OMAC.SelectionModal.elementId,"\">\n            <i class=\"omacookies-icon-cookie\"></i>\n        </button>\n    ");var template=document.createElement("button");template.innerHTML=html;var struc=template.firstElementChild;struc.addEventListener("click",function(){OMAC.SelectionModal.open();_this.hide()});return struc};QuickLink.init=function(){this.element=this.buildStructure();this.initialized=true;return this.element};module.exports=QuickLink;

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

window.addEventListener("load",function(){var elem=document.getElementById(OMAC.elementId);elem.classList.add("omacookies");elem.innerHTML="";elem.append(OMAC.NoticeBox.init());elem.append(OMAC.SelectionModal.init());elem.append(OMAC.QuickLink.init())});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window.OMAC=__webpack_require__(/*! ./OMAC */ "./src/js/OMAC.js");window.OMAC.setLang("es");__webpack_require__(/*! ./utils */ "./src/js/utils.js");window.OMAC.NoticeBox=__webpack_require__(/*! ./components/CookiesNoticeBox */ "./src/js/components/CookiesNoticeBox.js");window.OMAC.SelectionModal=__webpack_require__(/*! ./components/CookiesSelectionModal */ "./src/js/components/CookiesSelectionModal.js");window.OMAC.QuickLink=__webpack_require__(/*! ./components/QuickLink */ "./src/js/components/QuickLink.js");__webpack_require__(/*! ./CookieManager */ "./src/js/CookieManager.js");__webpack_require__(/*! ./components/RegularIframe */ "./src/js/components/RegularIframe.js");__webpack_require__(/*! ./components/YoutubeIframe */ "./src/js/components/YoutubeIframe.js");__webpack_require__(/*! ./components/JavascriptScript */ "./src/js/components/JavascriptScript.js");__webpack_require__(/*! ./init.js */ "./src/js/init.js");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function() {

var _this=this;function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e2){didErr=true;err=_e2},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]()}finally{if(didErr)throw err}}}}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}OMAC.setCookie=function(name,value){var exdays=arguments.length>2&&arguments[2]!==undefined?arguments[2]:365;var d=new Date;d.setTime(d.getTime()+exdays*24*60*60*1000);var expires="expires="+d.toUTCString();document.cookie=name+"="+value+";"+expires+";path=/"};OMAC.getCookie=function(name){name+="=";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1)}if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}return null};OMAC.deleteCookie=function(name){return OMAC.setCookie(name,null,-1)};OMAC.removeAttributes=function(element,attributes){var _iterator=_createForOfIteratorHelper(attributes),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var attr=_step.value;element.removeAttribute(attr)}}catch(err){_iterator.e(err)}finally{_iterator.f()}};OMAC.strContainsAny=function(haystack,needles){if(haystack&&needles){needles=typeof needles==="string"?[needles]:needles;var _iterator2=_createForOfIteratorHelper(needles),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var needle=_step2.value;if(haystack.indexOf(needle)!==-1)return true}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}return false};OMAC.arrayIntersec=function(array1,array2){return array1.filter(function(x){return array2.includes(x)})};OMAC.literal=function(literal){return literal.replace(/\s+/g," ").replace("\\n","").trim()};OMAC.openModal=function(modal){modal.element.classList.remove("omacookies-hide");setTimeout(function(){modal.element.classList.add("fade-in")},300);_this.isOpen=true};OMAC.closeModal=function(modal){modal.element.classList.remove("fade-in");setTimeout(function(){modal.element.classList.add("omacookies-hide")},300);_this.isOpen=false};

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
module.exports = JSON.parse('{"consent_box_title":"This website uses cookies","consent_box_description":"We use cookies to collect and analyse information on site performance and usage, to provide social media features and to enhace and customise content and advertisements. In addition, we share information about your use of the website with our social media, advertisers and web analytics partners, who may combine it with other information they have collected from your use of their services.","read_more":"Learn more","read_more_label":"Learn more about cookies on this site","customize_cookies_btn":"Settings","customize_cookies_btn_label":"Cookie settings","accept_all_cookies_btn":"Allow all","content_blocked_title":"... Oops!","content_blocked_text":"This content has been blocked due to your cookie settings.","content_blocked_btn":"Manage cookies","select_box_title":"Cookie settings","select_box_description":"Here you can manage the active cookies for this site.","select_mandatory_title":"Mandatory cookies","select_statistics_title":"Analytics cookies","select_marketing_title":"Marketing cookies","select_all_btn":"Select all","accept_selection_btn":"Allow selected","quick_link_title":"Cookie settings"}');

/***/ }),

/***/ "./src/lang/es.json":
/*!**************************!*\
  !*** ./src/lang/es.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"consent_box_title":"Esta página web usa cookies","consent_box_description":"Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.","read_more":"Leer más","read_more_label":"Leer más acerca de las cookies de esta página","customize_cookies_btn":"Personalizar","customize_cookies_btn_label":"Personalizar las cookies","accept_all_cookies_btn":"Aceptar todas","content_blocked_title":"... Ups!","content_blocked_text":"Este contenido ha sido bloqueado debido a tu configuración de cookies.","content_blocked_btn":"Personalizar cookies","select_box_title":"Personalizar Cookies","select_box_description":"Ahora puede personalizar las cookies activas para este sitio.","select_mandatory_title":"Cookies obligatorias","select_statistics_title":"Cookies de análisis","select_marketing_title":"Cookies de publicidad","select_all_btn":"Seleccionar todas","accept_selection_btn":"Aceptar selección","quick_link_title":"Configuración de cookies"}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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