(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/book_detail/reader/reader"],{

/***/ 142:
/*!*********************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/main.js?{"page":"pages%2Fbook_detail%2Freader%2Freader"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _reader = _interopRequireDefault(__webpack_require__(/*! ./pages/book_detail/reader/reader.vue */ 143));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_reader.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 143:
/*!************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/reader/reader.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reader.vue?vue&type=template&id=4841703e& */ 144);
/* harmony import */ var _reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reader.vue?vue&type=script&lang=js& */ 146);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _reader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reader.vue?vue&type=style&index=0&lang=css& */ 148);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/book_detail/reader/reader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 144:
/*!*******************************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/reader/reader.vue?vue&type=template&id=4841703e& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reader.vue?vue&type=template&id=4841703e& */ 145);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_template_id_4841703e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 145:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/reader/reader.vue?vue&type=template&id=4841703e& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 146:
/*!*************************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/reader/reader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reader.vue?vue&type=script&lang=js& */ 147);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 147:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/reader/reader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 10));
var _api = __webpack_require__(/*! ../../../utils/api/api */ 33);
var _util = _interopRequireDefault(__webpack_require__(/*! ../../../utils/util */ 29));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    var _ref;
    return _ref = {
      sectionNum: 1,
      maxChapterNum: 0,
      hours: 0,
      minutes: 0,
      readingTime: 0,
      book: null,
      StartReadingtoken: "",
      userid: "",
      currentGesture: 0,
      //?????????????????????????????????????????????????????????
      moveTime: null,
      //???????????????????????????
      isMoving: 0,
      leftTimmerCount: 0,
      rightTimmerCount: 0,
      hasRunTouchMove: false,
      allSectionData: null,
      loaded: false,
      bookid: '',
      factionName: '',
      headImg: '',
      // ????????????
      content: '',
      factionTitle: '????????????',
      windows: {
        windows_height: 0,
        pxwindows_height: 0,
        windows_width: 0,
        pxwindows_width: 0,
        pixelRatio: 1
      },
      touches: {
        lastX: 0,
        lastY: 0
      },
      move_direction: 0,
      //0??????????????????1???????????????
      leftValue: 0,
      pageIndex: 1,
      maxPageNum: 0,
      newestSectionNum: 1450,
      allSliderValue: {
        section: 1431,
        bright: 80,
        font: 40
      },
      //font??????rpx
      isShowFontSelector: 0,
      //????????????????????????????????????
      isUseBrightModel: 0,
      allFontFamily: ['????????????', '??????', 'Arial', '??????', '??????'],
      currentFontFamily: '??????',
      lineHeight: 50,
      //??????rpx
      control: {
        all: 0,
        control_tab: 0,
        control_detail: 0,
        target: ''
      },
      //all??????????????????????????????????????????????????????????????????????????????;target?????????????????????detail
      colorStyle: {
        content_bg: '#f5f9fc',
        styleNum: 1,
        slider_bg: '#fd9941',
        slider_none_bg: '#dbdbdb',
        control_bg: '#ffffff',
        control_fontColor: '#fd9941'
      },
      //1???2???3???4??????????????????????????????
      isShowMulu: 0,
      // ?????????????????????
      muluSwiperNum: 0
    }, (0, _defineProperty2.default)(_ref, "allSectionData", []), (0, _defineProperty2.default)(_ref, "err_tips_data", {
      err_tips_show: false,
      err_tips_text: ''
    }), _ref;
  },
  onLoad: function onLoad(options) {
    console.log("?????????onLoad????????????options", options);
    var self = this;
    var getWindowInfo = uni.getWindowInfo();
    // console.log(getWindowInfo.screenHeight);//????????????
    // console.log(getWindowInfo.screenWidth);//????????????
    self.windows.pxwindows_width = getWindowInfo.screenWidth;
    self.windows.pxwindows_height = getWindowInfo.screenHeight;
    //??????????????????
    var factionName = options.name || '????????????';
    var bookid = options.bookid;
    self.bookid = bookid;
    self.factionName = factionName;
    wx.setNavigationBarTitle({
      title: factionName
    });
    uni.request({
      url: (0, _api.getBookDetail)(self.bookid),
      success: function success(res) {
        console.log("getBookDetail???res???", res);
        self.book = res.data.data;
      }
    });
    var userid = uni.getStorageSync("openid");
    uni.request({
      url: (0, _api.getOneBookReadingTime)(userid, self.bookid),
      success: function success(res) {
        console.log("getOneBookReadingTime???res???", res);
        self.hours = res.data.data.hours;
        self.minutes = res.data.data.minutes;
      }
    });
    uni.request({
      url: (0, _api.getmaxChapterNum)(self.bookid),
      success: function success(res) {
        self.maxChapterNum = res.data.data;
      }
    });
    self.loadChapter(bookid);
  },
  onShow: function onShow() {
    console.log("?????????onshow");
    var self = this;
    //??????????????????
    wx.getStorage({
      key: 'reader_setting',
      success: function success(res) {
        var userSetting = JSON.parse(res.data);
        self.allSliderValue = userSetting.allSliderValue || self.allSliderValue;
        self.allFontFamily = userSetting.allFontFamily || self.allFontFamily;
        self.newestSectionNum = userSetting.newestSectionNum || self.newestSectionNum;
        self.pageIndex = userSetting.pageIndex || self.pageIndex;
        self.colorStyle = userSetting.colorStyle || self.colorStyle;
      }
    });
    try {
      var userid = uni.getStorageSync('openid');
      if (userid) {
        console.log("reader??????onshow??????userid???", userid);
      }
    } catch (e) {
      // error
      console.log(e);
    }
    uni.request({
      url: (0, _api.GetStartReading)(self.userid, self.bookid),
      fail: function fail(e) {
        console.log("GetStartReading??????", e);
      },
      success: function success(e) {
        console.log("GetStartReading??????", e);
        self.StartReadingtoken = e.data.data;
      }
    });
  },
  onUnload: function onUnload() {
    var self = this;
    console.log("??????onUnload");
    uni.request({
      url: (0, _api.GetendReading)(self.StartReadingtoken),
      fail: function fail(e) {
        console.log("GetendReading??????", e);
      },
      success: function success(e) {
        console.log("GetendReading??????", e);
      }
    });
  },
  //????????????????????????
  onHide: function onHide() {
    console.log("?????????onHide");
    var self = this;
    //onUnload?????????????????????????????????????????????????????????????????????????????????
    try {
      var userSetting = {
        allSliderValue: self.allSliderValue,
        // ??????????????????????????????????????????
        allFontFamily: self.allFontFamily,
        // ???????????????????????????
        newestSectionNum: self.newestSectionNum,
        // ???????????????????????????
        pageIndex: self.pageIndex,
        // ???????????????
        colorStyle: self.colorStyle //???????????????
      };

      wx.setStorage('reader_setting', JSON.stringify(userSetting));
    } catch (e) {
      console.log(e);
    }
    uni.request({
      url: (0, _api.GetendReading)(self.StartReadingtoken),
      fail: function fail(e) {
        console.log("GetendReading??????", e);
      },
      success: function success(e) {
        console.log("GetendReading??????", e);
      }
    });
  },
  methods: {
    /**
     * ??????????????????????????????????????????---line-height???????????????font-size??????????????????????????????http://www.jianshu.com/p/f1019737e155?????????http://www.w3school.com.cn/cssref/pr_dim_line-height.asp
     * @param str ?????????????????????
     * @param fontSize ?????????????????????
     * @param lineHeight ???????????????
     * @param windowW ??????window?????????
     * @param windowH ??????window?????????
     * @param pixelRatio ???????????????????????????rpx?????????px
     */
    countPageNum: function countPageNum(str, fontSize, lineHeight, windowW, windowH, pixelRatio) {
      var self = this;
      // console.log("?????????countPageNum")
      // console.log("fontSize???",fontSize)//32
      // console.log("lineHeight???",lineHeight)//36
      // console.log("windowW???",windowW)//320px
      // console.log("windowH???",windowH)//568px
      // var onePxToRpx = 750 / windowW;
      var myWidth = 750; //750rpx
      var myHeight = windowH / windowW * myWidth; //??rpx
      // console.log("pixelRatio???",pixelRatio)//1
      self.windows.windows_height = myHeight;
      self.windows.windows_width = myWidth;
      var returnNum = 0;
      // fontSize = fontSize / pixelRatio;//32
      // lineHeight = lineHeight / pixelRatio;//36
      //???str?????????\n???????????????
      var strArray = str.split(/\n+/); //119
      // console.log("strArray??????",strArray.length)
      // console.log('strArray?????????',strArray)
      var splitArray = [];
      var reg = new RegExp('\n+', 'igm');
      var result = '';
      //???????????????for?????????????????????????????????\n???????????????????????????????????????????????????
      while ((result = reg.exec(str)) != null) {
        splitArray.push(result.toString().match(/\n/gim).length);
      }
      // console.log("splitArray???",splitArray)
      //spliArray???strArray??????????????????????????????????????????
      splitArray.push(0);
      var totalHeight = 0;
      // console.log("??????????????????",Math.floor((myWidth  ) / fontSize))

      strArray.forEach(function (item, index) {
        //??????????????????0
        var huanhangNum = splitArray[index] > 0 ? splitArray[index] : 0;
        // console.log("item???length",item.length)
        totalHeight += Math.ceil(item.length / Math.floor(myWidth / fontSize)) * lineHeight + huanhangNum * lineHeight;
      });
      // console.log("totalHeight,",totalHeight)
      // console.log("totalHeight / myHeight",totalHeight / myHeight)
      return Math.ceil(totalHeight / myHeight);
    },
    /**
     * ?????????????????????????????????
     * @param bookid ?????????id
     * @param sectionnum ?????????????????????
     * @param obj ???????????????
     * @param success ?????????????????????
     * @param fail ?????????????????????
     * @param preOrNext ?????????????????????????????????
     */
    getMuluFun: function getMuluFun(bookid, sectionnum, obj, _success, _fail, preOrNext) {
      // console.log("?????????getMuluFun")

      // console.log("?????????obj",obj)
      //obj???self
      var self = this;
      //??????ajax?????????????????????????????????
      var oldSectionData = obj.allSectionData;
      wx.request({
        url: (0, _api.getMulu)(bookid, sectionnum),
        //??????????????????????????????????????????
        success: function success(res) {
          try {
            var tmpData = res.data.data;
            // console.log("?????????tmpdATA:", tmpData)
            //allSectionData???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            if (oldSectionData.length == 0) {
              // console.log("???????????????0")
              self.allSectionData = tmpData.sectionArray;
              self.headImg = tmpData.headImg;
              // console.log("?????????self.allSectionData",self.allSectionData)
            } else {
              //????????????????????????????????????????????????
              if (preOrNext == 'pre') {
                self.allSectionData = tmpData.sectionArray.concat(oldSectionData);
              } else if (preOrNext == 'next') {
                self.allSectionData = oldSectionData.concat(tmpData.sectionArray);
              }
            }
            //????????????
            if (typeof _success == 'function') {
              _success(obj);
            }
          } catch (e) {
            console.log(e);
            if (typeof _fail == 'function') {
              _fail(obj);
            }
          }
        },
        fail: function fail(err) {
          console.log(err);
          //????????????
          if (typeof _fail == 'function') {
            _fail(obj);
          }
        }
      });
    },
    loadChapter: function loadChapter(bookid) {
      console.log("?????????loadChapter");
      //??????loading
      wx.showToast({
        title: '???????????????',
        icon: 'loading',
        duration: 100
      });
      var self = this;
      var userid = wx.getStorageSync('openid');
      //????????????id?????????????????????
      wx.request({
        url: (0, _api.getContentByHistory)(userid, bookid),
        method: 'GET',
        success: function success(res) {
          try {
            console.log("??????getContentByHistory?????????", res);
            var tmpData = res.data.data;
            // console.log("tmpData",tmpData)
            // console.log("self.windows.windows_width,",self.windows.windows_width)
            // console.log("self.windows.windows_height,",self.windows.windows_height)
            // console.log("self.windows.pixelRatio,",self.windows.pixelRatio)							
            var newContent = tmpData.content;
            var sectionNum = tmpData.num;
            // //????????????
            var maxPageNum = self.countPageNum(newContent, self.allSliderValue.font, self.lineHeight, self.windows.pxwindows_width, self.windows.pxwindows_height, self.windows.pixelRatio);
            // console.log("maxPageNum,",maxPageNum)
            self.content = newContent;
            self.maxPageNum = maxPageNum;
            self.sectionNum = sectionNum;
            self.allSliderValue = {
              section: sectionNum,
              bright: self.allSliderValue.bright,
              font: self.allSliderValue.font
            };
            // console.log("??????????????????")
            wx.hideToast();
            setTimeout(function () {
              self.loaded = true;
            }, 300);
          } catch (e) {
            wx.hideToast();
            console.log(e);
            _util.default.showErrMsg(self, '????????????????????????');
          }
        },
        fail: function fail(e) {
          wx.hideToast();
          _util.default.showErrMsg(self, '????????????????????????');
          console.error(e);
        }
      });
    },
    handletouchmove: function handletouchmove(event) {
      console.log('????????????handletouchmove, event??????', event);
      var self = this;
      if (self.currentGesture != 0 || self.isMoving == 1) {
        return;
      }
      var currentX = event.touches[0].pageX;
      var currentY = event.touches[0].pageY;
      // ????????????????????????????????????????????????
      self.hasRunTouchMove = true;
      console.log('????????????touchmove, isMoving??????' + self.isMoving + '------event: {x: ' + event.touches[0].pageX + ' ,y: ' + event.touches[0].pageY + '}');
      var direction = 0;
      if (currentX - self.touches.lastX < 0) {
        direction = 0;
      } else if (currentX - self.touches.lastX > 0) {
        direction = 1;
      }
      //??????????????????????????????
      var moreOrLessValue = Math.abs(currentX - self.touches.lastX);
      //???????????????????????????????????????????????????
      self.touches = {
        lastX: currentX,
        lastY: currentY
      };
      self.move_direction = direction;
      var currentIndex = self.pageIndex;
      if (direction == 0) {
        if (currentIndex < self.maxPageNum) {
          self.leftValue = self.leftValue - moreOrLessValue;
        }
      } else {
        if (currentIndex > 1) {
          self.leftValue = self.leftValue + moreOrLessValue;
        }
      }
    },
    handletouchtart: function handletouchtart(event) {
      console.log('????????????handletouchtart, event??????', event);
      var self = this;
      // ??????????????????????????????????????????????????????????????????touchmove
      self.hasRunTouchMove = false;
      // console.log('????????????touchtart, isMoving??????'+isMoving+'------event: {x: '+event.touches[0].pageX+' ,y: '+event.touches[0].pageY+'}');
      if (self.isMoving == 0) {
        self.touches = {
          lastX: event.touches[0].pageX,
          lastY: event.touches[0].pageY
        };
      }
    },
    handletouchend: function handletouchend() {
      var self = this;
      console.log('????????????handletouchend, isMoving??????' + this.isMoving + ", hasRunTouchMove??????" + self.hasRunTouchMove);
      // ?????????????????????????????????????????????????????????
      if (self.hasRunTouchMove == false) {
        var y = self.touches.lastY;
        var x = self.touches.lastX;
        var h = self.windows.pxwindows_height / 2;
        var w = self.windows.pxwindows_width / 2;
        // console.log("x:"+x+",y:"+y+",h:"+h+",w:"+w)
        if (x && y && y >= h - 80 && y <= h + 80 && x >= w - 80 && x <= w + 80) {
          self.control = {
            all: self.control.all == 0 ? 1 : 0,
            control_tab: 1,
            control_detail: 0,
            target: ''
          };
          self.isShowFontSelector = 0;
          return;
        }
      }
      self.currentGesture = 0;
      //??????????????????????????????
      var currentIndex = self.pageIndex; //????????????
      var targetLeftValue = null; //????????????content???????????????
      var pingjunValue = null; //500ms????????????100ms????????????
      if (self.isMoving == 0) {
        if (self.move_direction == 0) {
          if (currentIndex < self.maxPageNum) {
            targetLeftValue = -1 * self.windows.windows_width * currentIndex;
            // pingjunValue = Math.abs(targetLeftValue - self.leftValue) / 4; //500ms????????????????????????4????????????????????????100ms??????????????????
            // isMoving = 1; //?????????????????????????????????1
            //?????????????????????????????????
            // console.log('????????? ??? ?????????????????????isMoving???1');
            // moveTime = setInterval(function () {
            //   ++leftTimmerCount;
            //   var currentLeftValue = self.leftValue;
            //   //????????????????????????????????????????????????
            //   //??????????????????????????????if????????????????????????????????????????????????????????????????????????4??????????????????????????????????????????leftValue???????????????????????????????????????
            //   if (leftTimmerCount == 4) {
            //     clearInterval(moveTime);
            //     isMoving = 0;
            //     leftTimmerCount = 0;
            self.leftValue = targetLeftValue;
            //     return;
            //   }
            //   if (currentLeftValue == targetLeftValue) {
            //     clearInterval(moveTime);
            //     isMoving = 0;
            //     leftTimmerCount = 0;
            //     // console.log('??? ??? ??????????????????????????????isMoving???0');
            //     return;
            //   }
            //   self.setData({ leftValue: currentLeftValue - pingjunValue });
            // }, 75);
            self.pageIndex = ++currentIndex;
          } else {
            //??????????????????????????????????????????????????????
            console.log("??????????????????", self.sectionNum);
            uni.request({
              url: (0, _api.getChapterByNumAndBookId)(self.bookid, self.sectionNum + 1),
              success: function success(res) {
                console.log("getChapterByNumAndBookId??????");
                var tmpData = res.data.data;
                console.log("?????????tmpData", tmpData);
                var newContent = tmpData.content;
                //????????????
                var maxPageNum = self.countPageNum(newContent, self.allSliderValue.font, self.lineHeight, self.windows.pxwindows_width, self.windows.pxwindows_height, self.windows.pixelRatio);
                self.content = newContent;
                self.maxPageNum = maxPageNum;
                self.sectionNum += 1;
                self.allSliderValue = {
                  section: self.sectionNum,
                  bright: self.allSliderValue.bright,
                  font: self.allSliderValue.font
                };
                // self.isMoving = 0
                // self.move_direction = 0

                self.leftValue = 0;
                self.pageIndex = 0;
              }
            });
          }
        } else {
          //????????????????????????????????????2???-320px
          if (currentIndex > 1) {
            targetLeftValue = -1 * self.windows.windows_width * (currentIndex - 2);
            // pingjunValue = Math.abs(targetLeftValue - self.leftValue) / 4;
            // isMoving = 1;
            // console.log('????????? ??? ?????????????????????isMoving???1');
            // moveTime = setInterval(function () {
            //   ++rightTimmerCount;
            //   var currentLeftValue = self.leftValue;
            //   if (rightTimmerCount == 4) {
            //     clearInterval(moveTime);
            //     isMoving = 0;
            //     rightTimmerCount = 0;
            self.leftValue = targetLeftValue;
            //     return;
            //   }
            //   if (currentLeftValue == targetLeftValue) {
            //     clearInterval(moveTime);
            //     isMoving = 0;
            //     rightTimmerCount = 0;
            //     // console.log('??? ??? ??????????????????????????????isMoving???0');
            //     return;
            //   }
            //   self.setData({ leftValue: currentLeftValue + pingjunValue });
            // }, 75);
            self.pageIndex = --currentIndex;
          }
        }
      } else {}
    },
    sectionSliderChange: function sectionSliderChange(event) {
      console.log('????????????sectionSliderChange, event??????', event);
      var self = this;
      self.allSliderValue = {
        section: event.detail.value,
        bright: self.allSliderValue.bright,
        font: self.allSliderValue.font
      };
    },
    brightSliderChange: function brightSliderChange(event) {
      console.log('????????????brightSliderChange, event??????', event);
      var self = this;
      self.allSliderValue = {
        section: self.allSliderValue.section,
        bright: event.detail.value,
        font: self.allSliderValue.font
      };
      //?????????????????????????????????????????????cover??????????????????????????????????????????????????????????????????????????????????????????
      if (self.isUseBrightModel == 0) {
        wx.showModal({
          title: '??????',
          content: '????????????????????????????????????????????????????????????????????????????????????????????????',
          success: function success(res) {
            if (res.confirm) {
              self.isUseBrightModel = 1;
              self.colorStyle = {
                content_bg: '#f5f9fc',
                styleNum: 1,
                slider_bg: '#fd9941',
                slider_none_bg: '#dbdbdb',
                control_bg: '#ffffff',
                control_fontColor: '#fd9941'
              };
            }
          }
        });
      }
    },
    fontSliderChange: function fontSliderChange(event) {
      console.log('????????????fontSliderChange, event??????', event);
      var self = this;
      self.allSliderValue = {
        section: self.allSliderValue.section,
        bright: self.allSliderValue.section,
        font: event.detail.value
      };
      //??????????????????
      var maxPageNum = self.countPageNum(self.content, event.detail.value, self.lineHeight, self.windows.pxwindows_width, self.windows.pxwindows_height, self.windows.pixelRatio);
      console.log("maxPageNum???", maxPageNum);
      self.maxPageNum = maxPageNum;
    },
    gotoControlDetail: function gotoControlDetail(event) {
      console.log('????????????gotoControlDetail, event??????', event);
      var self = this;
      var target = event.currentTarget.dataset.control;
      // ??????control_detail?????????????????????????????????control_detail?????????0??????1???0??????1,1??????0????????????target??????????????????????????????????????????????????????????????????????????????
      var control_detail = null;
      if (self.control.control_detail == 0) {
        // ???control_detail????????????????????????????????????????????????????????????????????????????????????
        control_detail = 1;
      } else {
        if (target && self.control.target == target) {
          control_detail = 0;
        } else {
          control_detail = 1;
        }
      }
      self.control = {
        all: self.control.all,
        control_tab: 1,
        control_detail: control_detail,
        target: target //font
      };
    },

    //??????????????????
    switchColorStyle: function switchColorStyle(event) {
      console.log('????????????switchColorStyle, event??????', event);
      var self = this;
      var styleNum = event.currentTarget.dataset.stylenum;
      switch (styleNum) {
        case 1:
          self.colorStyle = {
            content_bg: '#f5f9fc',
            styleNum: 1,
            slider_bg: '#fd9941',
            slider_none_bg: '#dbdbdb',
            control_bg: '#ffffff',
            control_fontColor: '#fd9941'
          };
          break;
        case '2':
          self.colorStyle = {
            content_bg: '#f5f0da',
            styleNum: 2,
            slider_bg: '#a6832f',
            slider_none_bg: '#dbd6c3',
            control_bg: '#f8f3e0',
            control_fontColor: '#a6832f'
          };
          break;
        case '3':
          self.colorStyle = {
            content_bg: '#c0edc6',
            styleNum: 3,
            slider_bg: '#359112',
            slider_none_bg: '#a7ccab',
            control_bg: '#ccf1d0',
            control_fontColor: '#359112'
          };
          break;
        case '4':
          self.colorStyle = {
            content_bg: '#1a1e21',
            styleNum: 4,
            slider_bg: '#bb7333',
            slider_none_bg: '#212528',
            control_bg: '#101417',
            control_fontColor: '#bb7333'
          };
          break;
      }
    },
    selectFontFamily: function selectFontFamily() {
      console.log('????????????selectFontFamily');
      this.isShowFontSelector = 1;
    },
    closeFontSelector: function closeFontSelector() {
      console.log('????????????closeFontSelector');
      this.isShowFontSelector = 0;
    },
    changeFontFamily: function changeFontFamily(event) {
      console.log('????????????changeFontFamily');
      this.currentFontFamily = event.currentTarget.dataset.fontname;
      //todo ????????????????????????????????????
    },

    //?????????????????????
    openMulu: function openMulu() {
      // console.log('????????????openMulu');

      var self = this;
      var bookid = self.bookid || '58cbc7c8618cec336c6e8a10';
      var sectionNum = self.allSliderValue.section || 1430;
      // var bookid = self.bookid || '58ad9056f5d3811cecea0149'; //home
      //???????????????????????????????????????????????????????????????
      //??????ajax?????????????????????????????????
      var success = function success(obj) {
        self.isShowMulu = 1;
        // console.log("????????????")
      };

      var fail = function fail(obj) {
        wx.showToast({
          title: '??????????????????',
          icon: 'none'
        });
      };
      self.getMuluFun(bookid, sectionNum, self, success, fail);
    },
    //???????????????????????????
    getPreMuluPage: function getPreMuluPage() {
      console.log('????????????getPreMuluPage');
      var self = this;
      var bookid = self.bookid || '58cbc7c8618cec336c6e8a10';
      var sectionNum = self.allSliderValue.section || 1430;
      sectionNum -= 20;
      // var bookid = self.bookid || '58ad9056f5d3811cecea0149'; //home
      var success = function success(obj) {
        console.log('?????????????????????');
      };
      var fail = function fail(obj) {
        _util.default.showErrMsg(obj, '??????????????????');
      };
      self.getMuluFun(bookid, sectionNum, self, success, fail, 'pre');
    },
    //???????????????????????????
    getNextMuluPage: function getNextMuluPage() {
      console.log('????????????getNextMuluPage');
      var self = this;
      var bookid = self.bookid || '58cbc7c8618cec336c6e8a10';
      var sectionNum = self.allSliderValue.section || 1430;
      sectionNum += 20;
      // var bookid = self.bookid || '58ad9056f5d3811cecea0149'; //home
      var success = function success(obj) {
        console.log('?????????????????????');
      };
      var fail = function fail(obj) {
        _util.default.showErrMsg(obj, '??????????????????');
      };
      self.getMuluFun(bookid, sectionNum, self, success, fail, 'next');
    },
    //????????????swiper
    muluSwiper: function muluSwiper(event) {
      console.log('????????????muluSwiper');
      var self = this;
      var currentIndex = event.detail.current;
      self.muluSwiperNum = currentIndex;
    },
    closeMulu: function closeMulu(e) {
      // console.log('????????????closeMulu');

      this.isShowMulu = 0;
    },
    //?????????????????????
    showThisSection: function showThisSection(event) {
      console.log("????????????showThisSection,event???", event);
      //??????loading
      wx.showToast({
        title: '???????????????',
        icon: 'loading',
        duration: 100
      });
      var self = this;
      var sectionId = event.currentTarget.dataset.sectionid;
      var sectionNum = event.currentTarget.dataset.sectionnum;
      //????????????id?????????????????????
      wx.request({
        url: (0, _api.getContentById)(sectionId),
        method: 'GET',
        success: function success(res) {
          try {
            var tmpData = res.data.data;
            console.log("?????????tmpData", tmpData);
            var newContent = tmpData.content;
            //????????????
            var maxPageNum = self.countPageNum(newContent, self.allSliderValue.font, self.lineHeight, self.windows.pxwindows_width, self.windows.pxwindows_height, self.windows.pixelRatio);
            self.content = newContent;
            self.maxPageNum = maxPageNum;
            self.sectionNum = tmpData.num;
            self.allSliderValue = {
              section: sectionNum,
              bright: self.allSliderValue.bright,
              font: self.allSliderValue.font
            };
            // self.isMoving = 0
            // self.move_direction = 0

            self.leftValue = 0;
            self.pageIndex = 0;
            wx.hideToast();
            self.closeMulu();
          } catch (e) {
            // console.log(e);
            wx.hideToast();
            _util.default.showErrMsg(self, '????????????????????????');
          }
          wx.hideToast();
        },
        fail: function fail(e) {
          wx.hideToast();
          _util.default.showErrMsg(self, '????????????????????????');
          console.error(e);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 148:
/*!*********************************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/reader/reader.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reader.vue?vue&type=style&index=0&lang=css& */ 149);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 149:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/reader/reader.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[142,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/book_detail/reader/reader.js.map