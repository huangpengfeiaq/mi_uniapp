(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/home"],{

/***/ "../../../../Users/64165/Desktop/mi_uniapp/common/SDK/amap-wx.js":
/*!**************************************************************!*\
  !*** C:/Users/64165/Desktop/mi_uniapp/common/SDK/amap-wx.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function AMapWX(a) {this.key = a.key, this.requestConfig = { key: a.key, s: "rsx", platform: "WXJS", appname: a.key, sdkversion: "1.2.0", logversion: "2.0" };}AMapWX.prototype.getWxLocation = function (a, b) {wx.getLocation({ type: "gcj02", success: function success(a) {var c = a.longitude + "," + a.latitude;wx.setStorage({ key: "userLocation", data: c }), b(c);}, fail: function fail(c) {wx.getStorage({ key: "userLocation", success: function success(a) {a.data && b(a.data);} }), a.fail({ errCode: "0", errMsg: c.errMsg || "" });} });}, AMapWX.prototype.getRegeo = function (a) {function c(c) {var d = b.requestConfig;wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: c, extensions: "all", s: d.s, platform: d.platform, appname: b.key, sdkversion: d.sdkversion, logversion: d.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {var d, e, f, g, h, i, j, k, l;b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{ iconPath: a.iconPath, width: a.iconWidth, height: a.iconHeight, name: f, desc: g, longitude: h, latitude: i, id: 0, regeocodeData: d }], a.success(l)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}var b = this;a.location ? c(a.location) : b.getWxLocation(a, function (a) {c(a);});}, AMapWX.prototype.getWeather = function (a) {function d(d) {var e = "base";a.type && "forecast" == a.type && (e = "all"), wx.request({ url: "https://restapi.amap.com/v3/weather/weatherInfo", data: { key: b.key, city: d, extensions: e, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {function c(a) {var b = { city: { text: "城市", data: a.city }, weather: { text: "天气", data: a.weather }, temperature: { text: "温度", data: a.temperature }, winddirection: { text: "风向", data: a.winddirection + "风" }, windpower: { text: "风力", data: a.windpower + "级" }, humidity: { text: "湿度", data: a.humidity + "%" } };return b;}var d, e;b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({ forecast: b.data.forecasts[0] }) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}function e(e) {wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: e, extensions: "all", s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {var c, e;b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}var b = this,c = b.requestConfig;a.city ? d(a.city) : b.getWxLocation(a, function (a) {e(a);});}, AMapWX.prototype.getPoiAround = function (a) {function d(d) {var e = { key: b.key, location: d, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({ url: "https://restapi.amap.com/v3/place/around", data: e, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {var c, d, e, f;if (b.data.status && "1" == b.data.status) {if (b = b.data, b && b.pois) {for (c = [], d = 0; d < b.pois.length; d++) {e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({ latitude: parseFloat(b.pois[d].location.split(",")[1]), longitude: parseFloat(b.pois[d].location.split(",")[0]), iconPath: e, width: 22, height: 32, id: d, name: b.pois[d].name, address: b.pois[d].address });}f = { markers: c, poisData: b.pois }, a.success(f);}} else a.fail({ errCode: b.data.infocode, errMsg: b.data.info });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}var b = this,c = b.requestConfig;a.location ? d(a.location) : b.getWxLocation(a, function (a) {d(a);});}, AMapWX.prototype.getStaticmap = function (a) {function f(b) {c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);var e = d + c.join("&");a.success({ url: e });}var e,b = this,c = [],d = "https://restapi.amap.com/v3/staticmap?";c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {f(a);});}, AMapWX.prototype.getInputtips = function (a) {var b = this,c = b.requestConfig,d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({ url: "https://restapi.amap.com/v3/assistant/inputtips", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {b && b.data && b.data.tips && a.success({ tips: b.data.tips });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}, AMapWX.prototype.getDrivingRoute = function (a) {var b = this,c = b.requestConfig,d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({ url: "https://restapi.amap.com/v3/direction/driving", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {b && b.data && b.data.route && a.success({ paths: b.data.route.paths, taxi_cost: b.data.route.taxi_cost || "" });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}, AMapWX.prototype.getWalkingRoute = function (a) {var b = this,c = b.requestConfig,d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v3/direction/walking", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {b && b.data && b.data.route && a.success({ paths: b.data.route.paths });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}, AMapWX.prototype.getTransitRoute = function (a) {var b = this,c = b.requestConfig,d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({ url: "https://restapi.amap.com/v3/direction/transit/integrated", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {if (b && b.data && b.data.route) {var c = b.data.route;a.success({ distance: c.distance || "", taxi_cost: c.taxi_cost || "", transits: c.transits });}}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}, AMapWX.prototype.getRidingRoute = function (a) {var b = this,c = b.requestConfig,d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v4/direction/bicycling", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {b && b.data && b.data.data && a.success({ paths: b.data.data.paths });}, fail: function fail(b) {a.fail({ errCode: "0", errMsg: b.errMsg || "" });} });}, module.exports.AMapWX = AMapWX;

/***/ }),

/***/ "../../../../Users/64165/Desktop/mi_uniapp/main.js?{\"page\":\"pages%2FtabBar%2Fhome\"}":
/*!*********************************************************************************!*\
  !*** C:/Users/64165/Desktop/mi_uniapp/main.js?{"page":"pages%2FtabBar%2Fhome"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Users/64165/Desktop/mi_uniapp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _home = _interopRequireDefault(__webpack_require__(/*! ./pages/tabBar/home.vue */ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_home.default));

/***/ }),

/***/ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue":
/*!**************************************************************!*\
  !*** C:/Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_3ab66235___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=3ab66235& */ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=template&id=3ab66235&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&lang=scss& */ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_3ab66235___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_3ab66235___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** C:/Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** C:/Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=template&id=3ab66235&":
/*!*********************************************************************************************!*\
  !*** C:/Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=template&id=3ab66235& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_3ab66235___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home.vue?vue&type=template&id=3ab66235& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=template&id=3ab66235&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_3ab66235___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_3ab66235___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































































































var _amapWx = _interopRequireDefault(__webpack_require__(/*! @/common/SDK/amap-wx.js */ "../../../../Users/64165/Desktop/mi_uniapp/common/SDK/amap-wx.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var ttt = 0; //高德SDK
var _default = {
  data: function data() {
    return {
      afterHeaderOpacity: 1, //不透明度
      headerPosition: 'fixed',
      headerTop: null,
      statusTop: null,
      city: '北京',
      currentSwiper: 0,
      // 轮播图片
      swiperList: [
      { id: 1, src: 'url1', img: '../../static/img/1.jpg' },
      { id: 2, src: 'url2', img: '../../static/img/2.jpg' },
      { id: 3, src: 'url3', img: '../../static/img/3.jpg' }],

      // 分类菜单
      categoryList: [
      { id: 1, name: '新品发布', img: '../../static/img/category/8.png' },
      { id: 2, name: '小米众筹', img: '../../static/img/category/2.png' },
      { id: 3, name: '小米CC', img: '../../static/img/category/3.png' },
      { id: 4, name: '1分拼团', img: '../../static/img/category/4.png' },
      { id: 5, name: '超值特卖', img: '../../static/img/category/5.png' },
      { id: 6, name: '小米秒杀', img: '../../static/img/category/6.png' },
      { id: 7, name: '以旧换新', img: '../../static/img/category/7.png' },
      { id: 8, name: '电视热卖', img: '../../static/img/category/1.png' },
      { id: 8, name: '空调热卖', img: '../../static/img/category/1.png' },
      { id: 8, name: '米粉卡', img: '../../static/img/category/8.png' }],

      Promotion: [],
      //猜你喜欢列表
      productList: [
      {
        goods_id: 0,
        img: '../../static/img/goods/p1.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 1,
        img: '../../static/img/goods/p2.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 2,
        img: '../../static/img/goods/p3.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 3,
        img: '../../static/img/goods/p4.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 4,
        img: '../../static/img/goods/p5.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 5,
        img: '../../static/img/goods/p6.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 6,
        img: '../../static/img/goods/p7.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 7,
        img: '../../static/img/goods/p8.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 8,
        img: '../../static/img/goods/p9.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' },

      {
        goods_id: 9,
        img: '../../static/img/goods/p10.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' }],


      loadingText: '正在加载...' };

  },
  onPageScroll: function onPageScroll(e) {
    //兼容iOS端下拉时顶部漂移
    this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
    this.headerTop = e.scrollTop >= 0 ? null : 0;
    this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
  },
  //下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
  onPullDownRefresh: function onPullDownRefresh() {
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  //上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
  onReachBottom: function onReachBottom() {
    uni.showToast({ title: '触发上拉加载' });
    var len = this.productList.length;
    if (len >= 40) {
      this.loadingText = '到底了';
      return false;
    }
    // 演示,随机加入商品,生成环境请替换为ajax请求
    var end_goods_id = this.productList[len - 1].goods_id;
    for (var i = 1; i <= 10; i++) {
      var goods_id = end_goods_id + i;
      var p = {
        goods_id: goods_id,
        img:
        '../../static/img/goods/p' + (goods_id % 10 == 0 ? 10 : goods_id % 10) + '.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '￥168',
        slogan: '1235人付款' };

      this.productList.push(p);
    }
  },
  onLoad: function onLoad() {
    //


    // this.amapPlugin = new amap.AMapWX({
    // 	//高德地图KEY，随时失效，请务必替换为自己的KEY，参考：http://ask.dcloud.net.cn/article/35070
    // 	key: '7c235a9ac4e25e482614c6b8eac6fd8e'
    // });
    // //定位地址
    // this.amapPlugin.getRegeo({
    // 	success: data => {
    // 		this.city = data[0].regeocodeData.addressComponent.city.replace(/市/g, ''); //把"市"去掉
    // 	}
    // });
    //开启定时器
    this.Timer();
    //加载活动专区
    this.loadPromotion();
  },
  methods: {
    //加载Promotion 并设定倒计时,,实际应用中应该是ajax加载此数据。
    loadPromotion: function loadPromotion() {
      var cutTime = new Date();
      var yy = cutTime.getFullYear(),
      mm = cutTime.getMonth() + 1,
      dd = cutTime.getDate();
      var tmpcountdown = yy + '/' + mm + '/' + dd + ' 23:59:59';
      var tmpPromotion = [
      {
        title: '整点秒杀',
        ad: '整天秒杀专区',
        img: '../../static/img/s1.jpg',
        countdown: false },

      {
        title: '限时抢购',
        ad: '每天23点上线',
        img: '../../static/img/s2.jpg',
        countdown: tmpcountdown
        //countdown为目标时间，程序会获取当前时间倒数
      }];
      //检查倒计时
      for (var i = 0; i < tmpPromotion.length; i++) {
        var row = tmpPromotion[i];
        if (row.countdown) {
          var h = '00',
          m = '00',
          s = '00';
          var currentTime = new Date();
          var cutoffTime = new Date(tmpcountdown);
          if (!(currentTime >= cutoffTime)) {
            var countTime = parseInt(
            (cutoffTime.getTime() - currentTime.getTime()) / 1000);

            h = parseInt(countTime / 3600);
            m = parseInt(countTime % 3600 / 60);
            s = countTime % 60;
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
          }
          tmpPromotion[i].countdown = { h: h, m: m, s: s };
        }
      }
      this.Promotion = tmpPromotion;
    },
    //定时器
    Timer: function Timer() {var _this = this;
      setInterval(function () {
        if (_this.Promotion.length > 0) {
          for (var i = 0; i < _this.Promotion.length; i++) {
            var row = _this.Promotion[i];
            if (row.countdown) {
              if (
              !(
              row.countdown.h == 0 &&
              row.countdown.m == 0 &&
              row.countdown.s == 0))

              {
                if (row.countdown.s > 0) {
                  row.countdown.s--;
                  row.countdown.s =
                  row.countdown.s < 10 ?
                  '0' + row.countdown.s :
                  row.countdown.s;
                } else if (row.countdown.m > 0) {
                  row.countdown.m--;
                  row.countdown.m =
                  row.countdown.m < 10 ?
                  '0' + row.countdown.m :
                  row.countdown.m;
                  row.countdown.s = 59;
                } else if (row.countdown.h > 0) {
                  row.countdown.h--;
                  row.countdown.h =
                  row.countdown.h < 10 ?
                  '0' + row.countdown.h :
                  row.countdown.h;
                  row.countdown.m = 59;
                  row.countdown.s = 59;
                }
                _this.Promotion[i].countdown = row.countdown;
              }
            }
          }
        }
      }, 1000);
    },
    //消息列表
    toMsg: function toMsg() {
      uni.navigateTo({
        url: '../msg/msg' });

    },
    //搜索跳转
    toSearch: function toSearch() {
      uni.showToast({ title: '建议跳转到新页面做搜索功能' });
    },
    //轮播图跳转
    toSwiper: function toSwiper(e) {
      uni.showToast({ title: e.src, icon: 'none' });
    },
    //分类跳转
    toCategory: function toCategory(e) {
      //uni.showToast({title: e.name,icon:"none"});
      uni.navigateTo({
        url: '../goods/goods-list?cid=' + e.id + '&name=' + e.name });

    },
    //推荐商品跳转
    toPromotion: function toPromotion(e) {
      uni.showToast({ title: e.title, icon: 'none' });
    },
    //商品跳转
    toGoods: function toGoods(e) {
      uni.showToast({ title: '商品' + e.goods_id, icon: 'none' });
      uni.navigateTo({
        url: '../goods/goods' });

    },
    //轮播图指示器
    swiperChange: function swiperChange(event) {
      this.currentSwiper = event.detail.current;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=template&id=3ab66235&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/64165/Desktop/mi_uniapp/pages/tabBar/home.vue?vue&type=template&id=3ab66235& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", {
      staticClass: "status",
      style: {
        position: _vm.headerPosition,
        top: _vm.statusTop,
        opacity: _vm.afterHeaderOpacity
      }
    }),
    _c(
      "view",
      {
        staticClass: "header",
        style: {
          position: _vm.headerPosition,
          top: _vm.headerTop,
          opacity: _vm.afterHeaderOpacity
        }
      },
      [
        _c("view", { staticClass: "icon-btn" }, [
          _c("view", {
            staticClass: "icon tongzhi",
            attrs: { eventid: "43984cfd-0" },
            on: { tap: _vm.toMsg }
          })
        ]),
        _c("view", { staticClass: "input-box" }, [
          _c("input", {
            attrs: {
              placeholder: "默认关键字",
              "placeholder-style": "color:#c0c0c0;",
              eventid: "43984cfd-1"
            },
            on: {
              tap: function($event) {
                _vm.toSearch()
              }
            }
          }),
          _c("view", { staticClass: "icon search" })
        ]),
        _vm._m(0)
      ]
    ),
    _c("view", { staticClass: "place" }),
    _c("view", { staticClass: "swiper" }, [
      _c(
        "view",
        { staticClass: "swiper-box" },
        [
          _c(
            "swiper",
            {
              attrs: {
                circular: "true",
                autoplay: "true",
                eventid: "43984cfd-3"
              },
              on: { change: _vm.swiperChange }
            },
            _vm._l(_vm.swiperList, function(swiper, index0) {
              return _c(
                "swiper-item",
                { key: swiper.id, attrs: { mpcomid: "43984cfd-0-" + index0 } },
                [
                  _c("image", {
                    attrs: { src: swiper.img, eventid: "43984cfd-2-" + index0 },
                    on: {
                      tap: function($event) {
                        _vm.toSwiper(swiper)
                      }
                    }
                  })
                ]
              )
            })
          ),
          _c(
            "view",
            { staticClass: "indicator" },
            _vm._l(_vm.swiperList, function(swiper, index) {
              return _c("view", {
                key: index,
                staticClass: "dots",
                class: [_vm.currentSwiper >= index ? "on" : ""]
              })
            })
          )
        ],
        1
      )
    ]),
    _c(
      "view",
      { staticClass: "category-list" },
      _vm._l(_vm.categoryList, function(row, index) {
        return _c(
          "view",
          {
            key: index,
            staticClass: "category",
            attrs: { eventid: "43984cfd-4-" + index },
            on: {
              tap: function($event) {
                _vm.toCategory(row)
              }
            }
          },
          [
            _c("view", { staticClass: "img" }, [
              _c("image", { attrs: { src: row.img } })
            ]),
            _c("view", { staticClass: "text" }, [_vm._v(_vm._s(row.name))])
          ]
        )
      })
    ),
    _vm._m(1),
    _c("view", { staticClass: "promotion" }, [
      _c("view", { staticClass: "text" }, [_vm._v("小米秒杀")]),
      _c(
        "view",
        { staticClass: "list" },
        _vm._l(_vm.Promotion, function(row, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "column",
              attrs: { eventid: "43984cfd-5-" + index },
              on: {
                tap: function($event) {
                  _vm.toPromotion(row)
                }
              }
            },
            [
              _c("view", { staticClass: "top" }, [
                _c("view", { staticClass: "title" }, [
                  _vm._v(_vm._s(row.title))
                ]),
                row.countdown
                  ? _c("view", { staticClass: "countdown" }, [
                      _c("view", [_vm._v(_vm._s(row.countdown.h))]),
                      _vm._v(":"),
                      _c("view", [_vm._v(_vm._s(row.countdown.m))]),
                      _vm._v(":"),
                      _c("view", [_vm._v(_vm._s(row.countdown.s))])
                    ])
                  : _vm._e()
              ]),
              _c("view", { staticClass: "left" }, [
                _c("view", { staticClass: "ad" }, [_vm._v(_vm._s(row.ad))]),
                _c("view", { staticClass: "into" }, [_vm._v("点击进入")])
              ]),
              _c("view", { staticClass: "right" }, [
                _c("image", { attrs: { src: row.img } })
              ])
            ]
          )
        })
      )
    ]),
    _c("view", { staticClass: "goods-list" }, [
      _vm._m(2),
      _c(
        "view",
        { staticClass: "product-list" },
        _vm._l(_vm.productList, function(product, index1) {
          return _c(
            "view",
            {
              key: product.goods_id,
              staticClass: "product",
              attrs: { eventid: "43984cfd-6-" + index1 },
              on: {
                tap: function($event) {
                  _vm.toGoods(product)
                }
              }
            },
            [
              _c("image", { attrs: { mode: "widthFix", src: product.img } }),
              _c("view", { staticClass: "name" }, [
                _vm._v(_vm._s(product.name))
              ]),
              _c("view", { staticClass: "info" }, [
                _c("view", { staticClass: "price" }, [
                  _vm._v(_vm._s(product.price))
                ]),
                _c("view", { staticClass: "slogan" }, [
                  _vm._v(_vm._s(product.slogan))
                ])
              ])
            ]
          )
        })
      ),
      _c("view", { staticClass: "loading-text" }, [
        _vm._v(_vm._s(_vm.loadingText))
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "icon-btn" }, [
      _c("view", { staticClass: "icon yuyin" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "banner" }, [
      _c("image", { attrs: { src: "../../static/img/banner.jpg" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "title" }, [
      _c("image", { attrs: { src: "../../static/img/hua.png" } }),
      _vm._v("猜你喜欢"),
      _c("image", { attrs: { src: "../../static/img/hua.png" } })
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../Users/64165/Desktop/mi_uniapp/main.js?{\"page\":\"pages%2FtabBar%2Fhome\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabBar/home.js.map