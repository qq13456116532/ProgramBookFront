(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/book_detail/book_detail"],{

/***/ 69:
/*!*****************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/main.js?{"page":"pages%2Fbook_detail%2Fbook_detail"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _book_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/book_detail/book_detail.vue */ 70));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_book_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 70:
/*!**********************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/book_detail.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book_detail.vue?vue&type=template&id=481a20d6& */ 71);
/* harmony import */ var _book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book_detail.vue?vue&type=script&lang=js& */ 73);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _book_detail_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book_detail.vue?vue&type=style&index=0&lang=stylus& */ 75);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/book_detail/book_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/*!*****************************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/book_detail.vue?vue&type=template&id=481a20d6& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./book_detail.vue?vue&type=template&id=481a20d6& */ 72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_template_id_481a20d6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 72:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/book_detail.vue?vue&type=template&id=481a20d6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 73:
/*!***********************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/book_detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./book_detail.vue?vue&type=script&lang=js& */ 74);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/book_detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = _interopRequireDefault(__webpack_require__(/*! ../../utils/api/api.js */ 33));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../utils/util.js */ 29));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      bookid: null,
      isInList: 0,
      // 是否已经在书架中
      userInfo: null,
      commentInputHide: true,
      showAllDes: false,
      bookDetail: null,
      comments: [],
      err_page_data: null,
      //app状态页
      commentType: 'root'
    };
  },
  computed: {
    // isInList == 1 19
    judgeInlist1: function judgeInlist1() {
      return this.isInList == 1;
    },
    // isInList == 0
    judgeInlist0: function judgeInlist0() {
      return this.isInList == 0;
    }
  },
  onLoad: function onLoad(options) {
    var self = this;
    // show loading
    uni.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 0
    });
    console.log("打印一下options", options);

    // 只有url中带了是否在书架的参数才去更新isInList的值
    // if (options.hasOwnProperty('isInList')) {
    // 	if (options.isInList === '0' || options.isInList === '1')
    // 		this.isInList = parseInt(options.isInList)
    // } else {
    // 	var booklist = uni.getStorageSync('booklist');
    // 	var isInMyBook = booklist ? booklist.some(function(item) {
    // 		return item.bookid === options.bookid;
    // 	}) : false;
    // 	this.isInList = isInMyBook ? 1 : 0;
    // }

    // 获取userid和用户信息
    uni.getStorage({
      key: "userInfo",
      success: function success(res) {
        console.log("getStorage获取userInfo", res);
        self.userInfo = res.data;
      },
      fail: function fail(res) {
        console.log('huoqu 失败', res);
      }
    });
    // var openid = uni.getStorageSync("openid")
    // console.log("openid是",openid)
    // self.userInfo.openid = openid
    uni.getStorage({
      key: "openid",
      success: function success(res) {
        console.log("openid是", res.data);
        self.userid = res.data;
      }
    });
    this.showAllDes = false;
    this.bookid = options.bookid;
    self.getBookDetail();
    self.getComments(options.bookid);
  },
  methods: {
    getBookDetail: function getBookDetail() {
      var self = this;
      var bookid = this.bookid;
      uni.request({
        url: _api.default.getBookDetail(bookid),
        success: function success(res) {
          // console.log("getBookDetail执行成功",res)
          var tmpData = res.data;
          console.log("getBookDetail的tmpData是", tmpData);
          if (tmpData && tmpData.code == 200) {
            //格式化日期
            var date = new Date(tmpData.data.updateTime);
            tmpData.data.updateTime = _util.default.formatDate3(date);
            // devide des into shortDes and des;
            var shortDes = '';
            // format des
            var des = tmpData.data.des;
            tmpData.data.des = des.replace(/( ){2,}/, ' ');
            if (des.length > 95) {
              shortDes = des.substring(0, 76);
            }
            tmpData.data.shortDes = shortDes;
            // console.log("看一下修改以后的tmpData", tmpData)
            self.bookDetail = tmpData.data;
            self.err_page_data = null;
            uni.setNavigationBarTitle({
              title: tmpData.data.factionName
            });
            self.bookDetail.name = tmpData.data.factionName;
            var userid = uni.getStorageSync("openid");
            uni.request({
              url: _api.default.GetJudgeIsInList(userid, bookid),
              success: function success(res) {
                console.log("GetJudgeIsInList的结果是", res.data);
                self.isInList = res.data.data;
              }
            });
          } else {
            console.log('请求书籍信息失败....');
            self.err_page_data = {
              show: true,
              image_url: 'https://file.lantingshucheng.com/myapp/err_tips/network_err.png',
              text: '努力找不到网络>_<请检查后重试',
              buttonText: '重试',
              click: 'getBookDetail'
            };
          }
        },
        fail: function fail(err) {
          console.log(err);
          self.err_page_data = {
            show: true,
            image_url: 'https://file.lantingshucheng.com/myapp/err_tips/network_err.png',
            text: '努力找不到网络>_<请检查后重试',
            buttonText: '登录',
            click: 'getBookDetail'
          };
        },
        complete: function complete() {
          //hide loading
          setTimeout(function () {
            uni.hideToast();
          }, 1000);
        }
      });
    },
    getComments: function getComments(bookid) {
      var self = this;
      var openid = uni.getStorageSync('openid');
      uni.request({
        url: _api.default.listComments(bookid) + "&openid=" + openid,
        success: function success(res) {
          var tmpData = res.data;
          // console.log("打印一下评论",tmpData)
          if (tmpData && tmpData.code == 200) {
            // 格式化日期
            var finalData = tmpData.data.map(function (item) {
              // rootComment
              var rootDate = new Date(item.rootComment.time);
              item.rootComment.time = _util.default.formatDate3(rootDate);
              if (item.rootComment.userid == uni.getStorageSync('openid')) {
                item.rootComment.nickname = "我";
              }
              // child
              item.child.forEach(function (childItem) {
                var childDate = new Date(childItem.time);
                childItem.time = _util.default.formatDate3(childDate);
                if (childItem.userid == uni.getStorageSync('openid')) {
                  childItem.nickname = "我";
                }
              });
              // isLike and isOpenMoreComment
              // item.rootComment.isLike = 0;
              item.rootComment.isOpenMoreComment = 0;
              return item;
            });
            self.comments = finalData;
          } else {
            _util.default.showErrMsg(self, '请求评论失败!', 1000);
            console.log('请求评论失败....');
            self.err_page_data = {
              show: true,
              image_url: 'https://file.lantingshucheng.com/myapp/err_tips/network_err.png',
              text: '努力找不到网络>_<请检查后重试',
              buttonText: '重试',
              click: 'getBookDetail'
            };
          }
        },
        fail: function fail(err) {
          console.log(err);
          self.err_page_data = {
            show: true,
            image_url: 'https://file.lantingshucheng.com/myapp/err_tips/network_err.png',
            text: '努力找不到网络>_<请检查后重试',
            buttonText: '重试',
            click: 'getBookDetail'
          };
        },
        complete: function complete() {
          //hide loading
          setTimeout(function () {
            uni.hideToast();
          }, 1000);
        }
      });
    },
    showAllDesMethod: function showAllDesMethod() {
      if (this.bookDetail.shortDes) {
        if (this.showAllDes) {
          this.showAllDes = false;
        } else {
          this.showAllDes = true;
        }
      }
    },
    addLikeNum: function addLikeNum(e) {
      // console.log("当前在执行addLikeNum",e)
      var self = this;
      var commentid = e.target.dataset.commentid;
      var isInLikeArr = self.comments.some(function (item) {
        return commentid === item.rootComment.commentid && item.rootComment.isLike;
      });
      // 如果已经点赞了，就不重复发接口了
      if (!isInLikeArr) {
        var addLikeData = {
          bookid: self.bookid,
          commentid: commentid,
          userid: self.userid
        };
        console.log("看一下addLikeData", addLikeData);
        wx.request({
          method: 'post',
          url: _api.default.addLikeNum(),
          data: addLikeData,
          success: function success(res) {
            var tmpData = res.data;
            console.log("看一下tmpData", tmpData);
            if (tmpData && tmpData.code === 200) {
              if (tmpData.data == 0) {
                wx.showToast({
                  title: '已经点赞',
                  icon: 'error',
                  duration: 2000
                });
                return;
              }
              console.log('点赞成功');
              var comments = self.comments;
              // 更新comments
              comments.forEach(function (item) {
                if (commentid === item.rootComment.commentid) {
                  item.rootComment.isLike = 1;
                  ++item.rootComment.likenum;
                }
              });
              self.comments = comments;
            } else {
              _util.default.showErrMsg(self, '点赞失败!', 1000);
            }
          },
          fail: function fail(err) {
            console.log(err);
            _util.default.showErrMsg(self, '点赞失败!', 1000);
          }
        });
      } else {
        var RemoveLikeData = {
          bookid: self.bookid,
          commentid: commentid,
          userid: self.userid
        };
        console.log("看一下RemoveLikeData", RemoveLikeData);
        wx.request({
          method: 'post',
          url: _api.default.RemoveLikeNum(),
          data: RemoveLikeData,
          success: function success(res) {
            console.log("RemoveLikeNum看一下res", res);
            var comments = self.comments;
            // 更新comments
            comments.forEach(function (item) {
              if (commentid === item.rootComment.commentid) {
                item.rootComment.isLike = 0;
                --item.rootComment.likenum;
              }
            });
            self.comments = comments;
          }
        });
      }
    },
    addOrRemove: function addOrRemove() {
      var self = this;
      // 已在书架的先提示确认是否移除，然后调用deleteMyBook， 不在驾的调用addMyBook
      if (self.isInList === 1) {
        var userid = uni.getStorageSync("openid");
        var deleteData = {
          userid: userid,
          bookid: self.bookid
        };
        uni.request({
          method: 'post',
          url: _api.default.deleteMyBooks(),
          data: deleteData,
          success: function success(res) {
            var tmpData = res.data;
            if (tmpData && tmpData.code === 200) {
              console.log('将该书已成功从书架中移除');
              uni.showToast({
                title: '已从书架移除',
                icon: 'success',
                duration: 2000
              });
              setTimeout(function () {
                uni.hideToast();
              }, 1000);
              self.isInList = 0;
            } else {
              _util.default.showErrMsg(self, '移除失败!', 1000);
            }
          },
          fail: function fail(err) {
            console.log(err);
            _util.default.showErrMsg(self, '移除失败!', 1000);
          }
        });
      } else {
        var userid = uni.getStorageSync("openid");
        // console.log("...",userid)
        var addData = {
          userid: userid,
          bookid: self.bookid
        };
        uni.request({
          method: 'post',
          url: _api.default.addMyBooks(),
          data: addData,
          success: function success(res) {
            var tmpData = res.data;
            if (tmpData && tmpData.code === 200) {
              console.log('该书添加已成功添加至书架', tmpData);
              uni.showToast({
                title: '已添加至书架',
                icon: 'success',
                duration: 2000
              });
              setTimeout(function () {
                uni.hideToast();
              }, 1000);
              self.isInList = 1;
            } else if (tmpData.code === 400) {
              uni.showToast({
                title: '本书已添加',
                icon: 'error',
                duration: 2000
              });
              self.isInList = 1;
            }
          },
          fail: function fail(err) {
            console.log(err);
            _util.default.showErrMsg(self, '添加失败!', 1000);
          }
        });
      }
    },
    goToReader: function goToReader() {
      uni.navigateTo({
        url: 'reader/reader?bookid=' + this.bookid + '&name=' + this.bookDetail.name
      });
    },
    //评论相关
    readMoreComments: function readMoreComments(e) {
      var self = this;
      // console.log(e.target)
      var commentid = e.target.dataset.commentid;
      var hasOpenMoreComent = self.comments.some(function (item) {
        // console.log("看一下每一步的",commentid,item.rootComment.commentid,item.rootComment.isOpenMoreComment)
        return commentid === item.rootComment.commentid && item.rootComment.isOpenMoreComment;
      });
      console.log("hasOpenMoreComent是", hasOpenMoreComent);
      var comments = self.comments;
      // 更新comments
      comments.forEach(function (item) {
        if (commentid === item.rootComment.commentid) {
          if (hasOpenMoreComent) {
            item.rootComment.isOpenMoreComment = 0;
          } else {
            item.rootComment.isOpenMoreComment = 1;
          }
        }
      });
      self.comments = comments;
    },
    toWriteComment: function toWriteComment(e) {
      // console.log("toWriteComment",e)
      var commentid = e.target.dataset.commentid;
      var nickname = e.target.dataset.nickname;
      var userid = e.target.dataset.userid;
      if (commentid && nickname && userid) {
        this.commentInputHide = false;
        this.commentType = {
          id: commentid,
          nickname: nickname,
          userid: userid
        };
      } else {
        this.commentInputHide = false;
        this.commentType = {
          id: 'root',
          nickname: '',
          userid: ''
        };
      }
    },
    hideCommentBar: function hideCommentBar() {
      this.commentInputHide = true;
    },
    stageCommentValue: function stageCommentValue(e) {
      this.currentCommentValue = e.value;
    },
    sendComment: function sendComment(e) {
      console.log("看一下两种触发方式区别", e);
      var self = this;
      var comments = self.comments;
      var content = e.detail.value;
      // console.log("content是",content)
      var userid = "";
      try {
        userid = uni.getStorageSync("openid");
        if (value) {
          console.log(userid);
        }
      } catch (e) {
        console.log(e);
      }
      var addCommentData = {
        userid: userid,
        bookid: self.bookid,
        father: self.commentType.id,
        content: content
      };
      console.log("看一下addCommentData", addCommentData);
      // 不能给自己回复
      if (true) {
        // 调用增加评论的接口
        uni.request({
          url: _api.default.addComment(),
          method: 'post',
          data: JSON.stringify(addCommentData),
          success: function success(res) {
            var tmpData = res.data;
            console.log("tmpData是什么", tmpData);
            if (tmpData && tmpData.code == 200) {
              // 评论成功
              if (self.commentType.id === 'root') {
                comments.unshift({
                  rootComment: {
                    commentid: tmpData.data,
                    userid: userid,
                    nickname: '我',
                    avatar: self.userInfo.avatar,
                    father: 'root',
                    content: content,
                    isLike: 0,
                    likenum: 0,
                    isOpenMoreComment: 0,
                    time: _util.default.formatDate3(new Date())
                  },
                  child: []
                });
              } else {
                comments.forEach(function (item) {
                  var isFind = false;
                  // 先查找root
                  if (item.rootComment.commentid === self.commentType.id) {
                    item.child.push({
                      commentid: tmpData.commentid,
                      userid: userid,
                      nickname: '我',
                      avatar: self.userInfo.avatar,
                      father: self.commentType.id,
                      content: content,
                      reply: self.commentType.nickname,
                      time: _util.default.formatDate3(new Date())
                    });
                    isFind = true;
                  } else {
                    // 再查找child
                    if (item.child.length > 0) {
                      item.child.forEach(function (item2, index, array) {
                        if (item2.commentid === self.commentType.id) {
                          array.push({
                            commentid: tmpData.commentid,
                            userid: userid,
                            nickname: '我',
                            avatar: self.userInfo.avatar,
                            father: self.commentType.id,
                            content: content,
                            reply: self.commentType.nickname,
                            time: _util.default.formatDate3(new Date())
                          });
                        }
                      });
                      isFind = true;
                    }
                  }
                  //发表评论之后保证isOpenMoreComment是1，即可以看到详细回复
                  if (isFind) {
                    item.rootComment.isOpenMoreComment = 1;
                  }
                });
              }
              // 更新书评数组
              self.comments = comments;
              self.currentCommentValue = '';
              uni.showToast({
                title: '发布成功',
                icon: 'success',
                duration: 0
              });
              setTimeout(function () {
                uni.hideToast();
              }, 1000);
            } else {
              console.log('发布....');
              _util.default.showErrMsg(self, '发布评论失败', 1000);
            }
          },
          fail: function fail(err) {
            console.log(err);
            _util.default.showErrMsg(self, '发布评论失败', 1000);
          }
        });
      } else {}
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 75:
/*!**********************************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/book_detail.vue?vue&type=style&index=0&lang=stylus& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-1-3!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/stylus-loader??ref--11-oneOf-1-4!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./book_detail.vue?vue&type=style&index=0&lang=stylus& */ 76);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_book_detail_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!./node_modules/postcss-loader/src??ref--11-oneOf-1-3!./node_modules/stylus-loader??ref--11-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/book_detail/book_detail.vue?vue&type=style&index=0&lang=stylus& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[69,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/book_detail/book_detail.js.map