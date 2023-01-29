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
      //控制当一个手势进行的时候屏蔽其他的手势
      moveTime: null,
      //控制左滑右滑的动画
      isMoving: 0,
      leftTimmerCount: 0,
      rightTimmerCount: 0,
      hasRunTouchMove: false,
      allSectionData: null,
      loaded: false,
      bookid: '',
      factionName: '',
      headImg: '',
      // 小说图像
      content: '',
      factionTitle: '八部浮屠',
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
      //0代表左滑动，1代表右滑动
      leftValue: 0,
      pageIndex: 1,
      maxPageNum: 0,
      newestSectionNum: 1450,
      allSliderValue: {
        section: 1431,
        bright: 80,
        font: 40
      },
      //font单位rpx
      isShowFontSelector: 0,
      //是否显示选择字体详情板块
      isUseBrightModel: 0,
      allFontFamily: ['微软雅黑', '黑体', 'Arial', '楷体', '等线'],
      currentFontFamily: '等线',
      lineHeight: 50,
      //单位rpx
      control: {
        all: 0,
        control_tab: 0,
        control_detail: 0,
        target: ''
      },
      //all表示整个控制是否显示，第一点击显示，再一次点击不显示;target表示显示哪一个detail
      colorStyle: {
        content_bg: '#f5f9fc',
        styleNum: 1,
        slider_bg: '#fd9941',
        slider_none_bg: '#dbdbdb',
        control_bg: '#ffffff',
        control_fontColor: '#fd9941'
      },
      //1、2、3、4分别对应四种颜色模式
      isShowMulu: 0,
      // 是否显示左侧栏
      muluSwiperNum: 0
    }, (0, _defineProperty2.default)(_ref, "allSectionData", []), (0, _defineProperty2.default)(_ref, "err_tips_data", {
      err_tips_show: false,
      err_tips_text: ''
    }), _ref;
  },
  onLoad: function onLoad(options) {
    console.log("在执行onLoad打印一下options", options);
    var self = this;
    var getWindowInfo = uni.getWindowInfo();
    // console.log(getWindowInfo.screenHeight);//屏幕高度
    // console.log(getWindowInfo.screenWidth);//屏幕宽度
    self.windows.pxwindows_width = getWindowInfo.screenWidth;
    self.windows.pxwindows_height = getWindowInfo.screenHeight;
    //动态设置标题
    var factionName = options.name || '超品战兵';
    var bookid = options.bookid;
    self.bookid = bookid;
    self.factionName = factionName;
    wx.setNavigationBarTitle({
      title: factionName
    });
    uni.request({
      url: (0, _api.getBookDetail)(self.bookid),
      success: function success(res) {
        console.log("getBookDetail的res是", res);
        self.book = res.data.data;
      }
    });
    var userid = uni.getStorageSync("openid");
    uni.request({
      url: (0, _api.getOneBookReadingTime)(userid, self.bookid),
      success: function success(res) {
        console.log("getOneBookReadingTime的res是", res);
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
    console.log("在执行onshow");
    var self = this;
    //读取用户设置
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
        console.log("reader界面onshow获得userid：", userid);
      }
    } catch (e) {
      // error
      console.log(e);
    }
    uni.request({
      url: (0, _api.GetStartReading)(self.userid, self.bookid),
      fail: function fail(e) {
        console.log("GetStartReading失败", e);
      },
      success: function success(e) {
        console.log("GetStartReading成功", e);
        self.StartReadingtoken = e.data.data;
      }
    });
  },
  onUnload: function onUnload() {
    var self = this;
    console.log("执行onUnload");
    uni.request({
      url: (0, _api.GetendReading)(self.StartReadingtoken),
      fail: function fail(e) {
        console.log("GetendReading失败", e);
      },
      success: function success(e) {
        console.log("GetendReading成功", e);
      }
    });
  },
  //跳出页面执行函数
  onHide: function onHide() {
    console.log("在执行onHide");
    var self = this;
    //onUnload方法在页面被关闭时触发，我们需要将用户的当前设置存下来
    try {
      var userSetting = {
        allSliderValue: self.allSliderValue,
        // 控制当前章节，亮度，字体大小
        allFontFamily: self.allFontFamily,
        // 已经存在的字体列表
        newestSectionNum: self.newestSectionNum,
        // 当前小说的最新章节
        pageIndex: self.pageIndex,
        // 当前第几页
        colorStyle: self.colorStyle //当前的主题
      };

      wx.setStorage('reader_setting', JSON.stringify(userSetting));
    } catch (e) {
      console.log(e);
    }
    uni.request({
      url: (0, _api.GetendReading)(self.StartReadingtoken),
      fail: function fail(e) {
        console.log("GetendReading失败", e);
      },
      success: function success(e) {
        console.log("GetendReading成功", e);
      }
    });
  },
  methods: {
    /**
     * 计算总页数函数，需要理解行高---line-height和字体大小font-size之间的关系，可以查考http://www.jianshu.com/p/f1019737e155，以及http://www.w3school.com.cn/cssref/pr_dim_line-height.asp
     * @param str 需要分页的内容
     * @param fontSize 当前的字体大小
     * @param lineHeight 当前的行高
     * @param windowW 当前window的宽度
     * @param windowH 当前window的高度
     * @param pixelRatio 当前分辨率，用来将rpx转换成px
     */
    countPageNum: function countPageNum(str, fontSize, lineHeight, windowW, windowH, pixelRatio) {
      var self = this;
      // console.log("在执行countPageNum")
      // console.log("fontSize是",fontSize)//32
      // console.log("lineHeight是",lineHeight)//36
      // console.log("windowW是",windowW)//320px
      // console.log("windowH是",windowH)//568px
      // var onePxToRpx = 750 / windowW;
      var myWidth = 750; //750rpx
      var myHeight = windowH / windowW * myWidth; //??rpx
      // console.log("pixelRatio是",pixelRatio)//1
      self.windows.windows_height = myHeight;
      self.windows.windows_width = myWidth;
      var returnNum = 0;
      // fontSize = fontSize / pixelRatio;//32
      // lineHeight = lineHeight / pixelRatio;//36
      //将str根据’\n‘截成数组
      var strArray = str.split(/\n+/); //119
      // console.log("strArray长度",strArray.length)
      // console.log('strArray的值：',strArray)
      var splitArray = [];
      var reg = new RegExp('\n+', 'igm');
      var result = '';
      //这里写一个for循环去记录每处分隔符的\n的个数，这将会影响到计算换行的高度
      while ((result = reg.exec(str)) != null) {
        splitArray.push(result.toString().match(/\n/gim).length);
      }
      // console.log("splitArray是",splitArray)
      //spliArray比strArray少一，这里加一项使之数量一样
      splitArray.push(0);
      var totalHeight = 0;
      // console.log("一行装多少字",Math.floor((myWidth  ) / fontSize))

      strArray.forEach(function (item, index) {
        //拒绝最后一项0
        var huanhangNum = splitArray[index] > 0 ? splitArray[index] : 0;
        // console.log("item的length",item.length)
        totalHeight += Math.ceil(item.length / Math.floor(myWidth / fontSize)) * lineHeight + huanhangNum * lineHeight;
      });
      // console.log("totalHeight,",totalHeight)
      // console.log("totalHeight / myHeight",totalHeight / myHeight)
      return Math.ceil(totalHeight / myHeight);
    },
    /**
     * 发送获取目录请求的方法
     * @param bookid 书籍的id
     * @param sectionnum 小说的当前章节
     * @param obj 操作的对象
     * @param success 接口完成的回调
     * @param fail 接口失败的回调
     * @param preOrNext 是向前翻页还是向后翻页
     */
    getMuluFun: function getMuluFun(bookid, sectionnum, obj, _success, _fail, preOrNext) {
      // console.log("在执行getMuluFun")

      // console.log("看一下obj",obj)
      //obj是self
      var self = this;
      //发送ajax得到这本小说的所有章节
      var oldSectionData = obj.allSectionData;
      wx.request({
        url: (0, _api.getMulu)(bookid, sectionnum),
        //仅为示例，并非真实的接口地址
        success: function success(res) {
          try {
            var tmpData = res.data.data;
            // console.log("看一下tmpdATA:", tmpData)
            //allSectionData像是一个队列，并不是一直加上接口获取的新数据，有一个最大值，当超过这个最大值，会在首尾删减多于的值
            if (oldSectionData.length == 0) {
              // console.log("原来数据是0")
              self.allSectionData = tmpData.sectionArray;
              self.headImg = tmpData.headImg;
              // console.log("现在的self.allSectionData",self.allSectionData)
            } else {
              //如果是向前翻页，数据应该插到顶部
              if (preOrNext == 'pre') {
                self.allSectionData = tmpData.sectionArray.concat(oldSectionData);
              } else if (preOrNext == 'next') {
                self.allSectionData = oldSectionData.concat(tmpData.sectionArray);
              }
            }
            //处理回调
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
          //处理回调
          if (typeof _fail == 'function') {
            _fail(obj);
          }
        }
      });
    },
    loadChapter: function loadChapter(bookid) {
      console.log("在执行loadChapter");
      //显示loading
      wx.showToast({
        title: '内容加载中',
        icon: 'loading',
        duration: 100
      });
      var self = this;
      var userid = wx.getStorageSync('openid');
      //根据章节id去得到章节内容
      wx.request({
        url: (0, _api.getContentByHistory)(userid, bookid),
        method: 'GET',
        success: function success(res) {
          try {
            console.log("执行getContentByHistory，结果", res);
            var tmpData = res.data.data;
            // console.log("tmpData",tmpData)
            // console.log("self.windows.windows_width,",self.windows.windows_width)
            // console.log("self.windows.windows_height,",self.windows.windows_height)
            // console.log("self.windows.pixelRatio,",self.windows.pixelRatio)							
            var newContent = tmpData.content;
            var sectionNum = tmpData.num;
            // //重新排版
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
            // console.log("执行到这里了")
            wx.hideToast();
            setTimeout(function () {
              self.loaded = true;
            }, 300);
          } catch (e) {
            wx.hideToast();
            console.log(e);
            _util.default.showErrMsg(self, '获取章节内容失败');
          }
        },
        fail: function fail(e) {
          wx.hideToast();
          _util.default.showErrMsg(self, '获取章节内容失败');
          console.error(e);
        }
      });
    },
    handletouchmove: function handletouchmove(event) {
      console.log('正在执行handletouchmove, event为：', event);
      var self = this;
      if (self.currentGesture != 0 || self.isMoving == 1) {
        return;
      }
      var currentX = event.touches[0].pageX;
      var currentY = event.touches[0].pageY;
      // 判断用没有滑动而是点击屏幕的动作
      self.hasRunTouchMove = true;
      console.log('正在执行touchmove, isMoving为：' + self.isMoving + '------event: {x: ' + event.touches[0].pageX + ' ,y: ' + event.touches[0].pageY + '}');
      var direction = 0;
      if (currentX - self.touches.lastX < 0) {
        direction = 0;
      } else if (currentX - self.touches.lastX > 0) {
        direction = 1;
      }
      //需要减少或者增加的值
      var moreOrLessValue = Math.abs(currentX - self.touches.lastX);
      //将当前坐标进行保存以进行下一次计算
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
      console.log('正在执行handletouchtart, event为：', event);
      var self = this;
      // 判断用户的点击事件，如果不是滑动，将不会执行touchmove
      self.hasRunTouchMove = false;
      // console.log('正在执行touchtart, isMoving为：'+isMoving+'------event: {x: '+event.touches[0].pageX+' ,y: '+event.touches[0].pageY+'}');
      if (self.isMoving == 0) {
        self.touches = {
          lastX: event.touches[0].pageX,
          lastY: event.touches[0].pageY
        };
      }
    },
    handletouchend: function handletouchend() {
      var self = this;
      console.log('正在执行handletouchend, isMoving为：' + this.isMoving + ", hasRunTouchMove为：" + self.hasRunTouchMove);
      // 判断用户的点击事件，决定是否显示控制栏
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
      //左滑动和有滑动的操作
      var currentIndex = self.pageIndex; //当前页数
      var targetLeftValue = null; //移动之后content的目标左值
      var pingjunValue = null; //500ms内平均每100ms移动的值
      if (self.isMoving == 0) {
        if (self.move_direction == 0) {
          if (currentIndex < self.maxPageNum) {
            targetLeftValue = -1 * self.windows.windows_width * currentIndex;
            // pingjunValue = Math.abs(targetLeftValue - self.leftValue) / 4; //500ms其实函数只执行了4次，第一次会等待100ms才会开始函数
            // isMoving = 1; //开始计时的时候将标志置1
            //使用计时器实现动画效果
            // console.log('开始向 左 滑动的计时器，isMoving为1');
            // moveTime = setInterval(function () {
            //   ++leftTimmerCount;
            //   var currentLeftValue = self.leftValue;
            //   //如果达到了目标值，立即停止计时器
            //   //调试发现有些时候这个if的跳转会莫名的不成立，所以做个限制，函数被执行了4次之后，无论条件是否成立，将leftValue设置为目标值，并结束计时器
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
            //     // console.log('向 左 滑动的计时器结束了，isMoving为0');
            //     return;
            //   }
            //   self.setData({ leftValue: currentLeftValue - pingjunValue });
            // }, 75);
            self.pageIndex = ++currentIndex;
          } else {
            //就是到了最后一页，下一步走下个目录了
            console.log("到了最后一页", self.sectionNum);
            uni.request({
              url: (0, _api.getChapterByNumAndBookId)(self.bookid, self.sectionNum + 1),
              success: function success(res) {
                console.log("getChapterByNumAndBookId成功");
                var tmpData = res.data.data;
                console.log("看一下tmpData", tmpData);
                var newContent = tmpData.content;
                //重新排版
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
          //前一页和后一页相差其实是2个-320px
          if (currentIndex > 1) {
            targetLeftValue = -1 * self.windows.windows_width * (currentIndex - 2);
            // pingjunValue = Math.abs(targetLeftValue - self.leftValue) / 4;
            // isMoving = 1;
            // console.log('开始向 左 滑动的计时器，isMoving为1');
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
            //     // console.log('向 右 滑动的计时器结束了，isMoving为0');
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
      console.log('正在执行sectionSliderChange, event为：', event);
      var self = this;
      self.allSliderValue = {
        section: event.detail.value,
        bright: self.allSliderValue.bright,
        font: self.allSliderValue.font
      };
    },
    brightSliderChange: function brightSliderChange(event) {
      console.log('正在执行brightSliderChange, event为：', event);
      var self = this;
      self.allSliderValue = {
        section: self.allSliderValue.section,
        bright: event.detail.value,
        font: self.allSliderValue.font
      };
      //亮度调节，其实是使用一个黑色的cover调节透明度，这里需要给出提示，使用亮度调节会失去当前颜色背景
      if (self.isUseBrightModel == 0) {
        wx.showModal({
          title: '提示',
          content: '使用亮度调节，会将背景模式还原至最初模式，建议使用系统的亮度调节',
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
      console.log('正在执行fontSliderChange, event为：', event);
      var self = this;
      self.allSliderValue = {
        section: self.allSliderValue.section,
        bright: self.allSliderValue.section,
        font: event.detail.value
      };
      //重新计算分页
      var maxPageNum = self.countPageNum(self.content, event.detail.value, self.lineHeight, self.windows.pxwindows_width, self.windows.pxwindows_height, self.windows.pixelRatio);
      console.log("maxPageNum是", maxPageNum);
      self.maxPageNum = maxPageNum;
    },
    gotoControlDetail: function gotoControlDetail(event) {
      console.log('正在执行gotoControlDetail, event为：', event);
      var self = this;
      var target = event.currentTarget.dataset.control;
      // 这里control_detail需要做两层判断，首先是control_detail之前是0还是1，0变成1,1变成0，其次是target在两次点击中是否相同，相同则继续上面的判断，否则取反
      var control_detail = null;
      if (self.control.control_detail == 0) {
        // 当control_detail不显示的时候不再判断两次点击的目标是否相同，直接统一显示
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

    //点击切换颜色
    switchColorStyle: function switchColorStyle(event) {
      console.log('正在执行switchColorStyle, event为：', event);
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
      console.log('正在执行selectFontFamily');
      this.isShowFontSelector = 1;
    },
    closeFontSelector: function closeFontSelector() {
      console.log('正在执行closeFontSelector');
      this.isShowFontSelector = 0;
    },
    changeFontFamily: function changeFontFamily(event) {
      console.log('正在执行changeFontFamily');
      this.currentFontFamily = event.currentTarget.dataset.fontname;
      //todo 执行改变字体后的重新排版
    },

    //打开目录侧边栏
    openMulu: function openMulu() {
      // console.log('正在执行openMulu');

      var self = this;
      var bookid = self.bookid || '58cbc7c8618cec336c6e8a10';
      var sectionNum = self.allSliderValue.section || 1430;
      // var bookid = self.bookid || '58ad9056f5d3811cecea0149'; //home
      //此接口需要分页，不能每次拿到全部的章节数据
      //发送ajax得到这本小说的所有章节
      var success = function success(obj) {
        self.isShowMulu = 1;
        // console.log("显示目录")
      };

      var fail = function fail(obj) {
        wx.showToast({
          title: '获取目录失败',
          icon: 'none'
        });
      };
      self.getMuluFun(bookid, sectionNum, self, success, fail);
    },
    //目录向上滑动到顶部
    getPreMuluPage: function getPreMuluPage() {
      console.log('正在执行getPreMuluPage');
      var self = this;
      var bookid = self.bookid || '58cbc7c8618cec336c6e8a10';
      var sectionNum = self.allSliderValue.section || 1430;
      sectionNum -= 20;
      // var bookid = self.bookid || '58ad9056f5d3811cecea0149'; //home
      var success = function success(obj) {
        console.log('你向上翻了一页');
      };
      var fail = function fail(obj) {
        _util.default.showErrMsg(obj, '获取目录失败');
      };
      self.getMuluFun(bookid, sectionNum, self, success, fail, 'pre');
    },
    //目录向下滑动到底部
    getNextMuluPage: function getNextMuluPage() {
      console.log('正在执行getNextMuluPage');
      var self = this;
      var bookid = self.bookid || '58cbc7c8618cec336c6e8a10';
      var sectionNum = self.allSliderValue.section || 1430;
      sectionNum += 20;
      // var bookid = self.bookid || '58ad9056f5d3811cecea0149'; //home
      var success = function success(obj) {
        console.log('你向上翻了一页');
      };
      var fail = function fail(obj) {
        _util.default.showErrMsg(obj, '获取目录失败');
      };
      self.getMuluFun(bookid, sectionNum, self, success, fail, 'next');
    },
    //滑动目录swiper
    muluSwiper: function muluSwiper(event) {
      console.log('正在执行muluSwiper');
      var self = this;
      var currentIndex = event.detail.current;
      self.muluSwiperNum = currentIndex;
    },
    closeMulu: function closeMulu(e) {
      // console.log('正在执行closeMulu');

      this.isShowMulu = 0;
    },
    //点击目录某一章
    showThisSection: function showThisSection(event) {
      console.log("正在执行showThisSection,event是", event);
      //显示loading
      wx.showToast({
        title: '内容加载中',
        icon: 'loading',
        duration: 100
      });
      var self = this;
      var sectionId = event.currentTarget.dataset.sectionid;
      var sectionNum = event.currentTarget.dataset.sectionnum;
      //根据章节id去得到章节内容
      wx.request({
        url: (0, _api.getContentById)(sectionId),
        method: 'GET',
        success: function success(res) {
          try {
            var tmpData = res.data.data;
            console.log("看一下tmpData", tmpData);
            var newContent = tmpData.content;
            //重新排版
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
            _util.default.showErrMsg(self, '获取章节内容失败');
          }
          wx.hideToast();
        },
        fail: function fail(e) {
          wx.hideToast();
          _util.default.showErrMsg(self, '获取章节内容失败');
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