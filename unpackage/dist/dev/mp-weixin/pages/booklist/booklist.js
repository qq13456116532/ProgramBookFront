(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/booklist/booklist"],{

/***/ 37:
/*!***********************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/main.js?{"page":"pages%2Fbooklist%2Fbooklist"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _booklist = _interopRequireDefault(__webpack_require__(/*! ./pages/booklist/booklist.vue */ 38));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_booklist.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 38:
/*!****************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/booklist/booklist.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booklist.vue?vue&type=template&id=4fcc4334& */ 39);
/* harmony import */ var _booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booklist.vue?vue&type=script&lang=js& */ 41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _booklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booklist.vue?vue&type=style&index=0&lang=css& */ 43);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__["render"],
  _booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/booklist/booklist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/*!***********************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/booklist/booklist.vue?vue&type=template&id=4fcc4334& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./booklist.vue?vue&type=template&id=4fcc4334& */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_template_id_4fcc4334___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 40:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/booklist/booklist.vue?vue&type=template&id=4fcc4334& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 41:
/*!*****************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/booklist/booklist.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./booklist.vue?vue&type=script&lang=js& */ 42);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 42:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/booklist/booklist.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//booklist.js
var Api = __webpack_require__(/*! ../../utils/api/api */ 33);
var Util = __webpack_require__(/*! ../../utils/util */ 29);
//??????????????????
var app = getApp();
var _default = {
  data: function data() {
    return {
      headerText: '',
      showMonths: [],
      books: [],
      isSearching: false,
      searchValue: '',
      userInfo: {},
      err_page_data: null,
      //app?????????
      monthIndex: 0,
      authorModal: false
    };
  },
  onReady: function onReady() {
    var self = this;
    var timeResult = self.allMonths();
    this.showMonths = timeResult.showMonths;
    this.headerText = timeResult.headerText;
    console.log("???????????????", timeResult);
    //????????????????????????????????????????????????????????????????????????

    wx.getStorage({
      key: 'booklist',
      success: function success(res) {
        console.log('?????????????????????????????????');
        self.books = res.data;
      },
      fail: function fail(res) {
        console.log("????????????????????????");
      }
    });
  },
  onLoad: function onLoad(e) {
    var self = this;
    //???????????????
    wx.showToast({
      title: '??????????????????...',
      icon: 'loading',
      duration: 1000
    });
  },
  onShow: function onShow() {
    var self = this;
    var isLogin = uni.getStorage({
      key: "isLogin",
      success: function success(res) {
        // console.log("????????????????????????islogin",res.data)
        if (res.data) {
          // console.log("????????????????????????")
          self.authorModal = true;
          // self.getMyBooks()
        }
      }
    });
    //??????????????????
    //??????????????????userid
    uni.getStorage({
      key: 'openid',
      success: function success(res) {
        var id = res.data;
        console.log("???????????????ID", id);
        if (id) {
          self.getMyBooks(id);
          self.getUserinfo(id);
        } else {
          wx.hideToast();
          //??????????????????????????????
          self.err_page_data = {
            show: true,
            image_url: 'https://bpic.588ku.com/element_origin_min_pic/00/77/63/0056e18ce712923.jpg',
            text: '??????????????????????????????????????????????????????',
            buttonText: '??????',
            click: 'doLogin'
          };
        }
      },
      fail: function fail(e) {
        console.log("????????????ID", e);
      }
    });
  },
  methods: {
    authorcancle: function authorcancle() {
      this.authorModal = true;
    },
    //??????+??????
    bindGetUserprofile: function bindGetUserprofile() {
      var _this = this;
      var self = this;
      wx.getUserProfile({
        desc: '????????????????????????',
        // ??????????????????????????????????????????????????????????????????????????????????????????
        success: function success(res) {
          console.log("???????????????????????? ", res);
          _this.authorModal = true;
          uni.setStorage({
            key: "userInfo",
            data: res.userInfo
          });
          uni.setStorage({
            key: "isLogin",
            data: true
          });
          uni.setStorage({
            key: "avatar",
            data: res.userInfo.avatarUrl
          });
          wx.login({
            success: function success(mysuc) {
              if (mysuc.code) {
                //??????????????????
                wx.request({
                  url: 'HTTP://localhost:3000/user/onLogin',
                  data: {
                    code: mysuc.code,
                    nickName: res.userInfo.nickName,
                    avatar: res.userInfo.avatarUrl,
                    session_key: mysuc.session_key
                  },
                  success: function success(suc) {
                    console.log("????????????", suc);
                    uni.setStorage({
                      key: "session_key",
                      data: mysuc.session_key
                    });
                    uni.setStorage({
                      key: "openid",
                      data: suc.data.data.openid
                    });
                    self.getMyBooks(suc.data.data.openid);
                  },
                  fail: function fail(e) {
                    console.log("????????????", e);
                  }
                });
              } else {
                console.log('???????????????' + mysuc.errMsg);
              }
            }
          });
        }
      });
    },
    //??????????????????
    getMyBooks: function getMyBooks(userid) {
      var self = this;
      console.log("????????????getMyBooks");
      uni.request({
        url: Api.getMyBooks(userid),
        success: function success(res) {
          // console.log(res)
          var books = res.data.data || [];
          console.log('????????????');
          console.log(books);
          books.forEach(function (item) {
            item.isShow = true;
          });
          //????????????books
          self.books = books;
          //??????????????????????????????
          uni.setStorage({
            key: 'booklist',
            data: books,
            success: function success(res) {
              console.log('???????????????????????????????????????');
            }
          });
        },
        fail: function fail() {
          //??????????????????????????????
          //??????????????????????????????????????????????????????????????????????????????????????????????????????app?????????
          uni.getStorage({
            key: 'booklist',
            success: function success(res) {
              console.log('?????????????????????????????????');
              if (res.data && res.data[0].factionName) {
                self.books = res.data;
              } else {
                self.err_page_data = {
                  show: true,
                  image_url: 'https://bpic.588ku.com/element_origin_min_pic/00/77/63/0056e18ce712923.jpg',
                  text: '?????????????????????>_<??????????????????',
                  buttonText: '??????',
                  click: 'getMyBooks'
                };
              }
            },
            fail: function fail(err) {
              console.log('??????????????????' + err);
              self.err_page_data = {
                show: true,
                image_url: 'https://bpic.588ku.com/element_origin_min_pic/00/77/63/0056e18ce712923.jpg',
                text: '?????????????????????>_<??????????????????',
                buttonText: '??????',
                click: 'getMyBooks'
              };
            }
          });
          console.log("????????????????????????");
          self.err_page_data = {
            show: true,
            image_url: 'https://bpic.588ku.com/element_origin_min_pic/00/77/63/0056e18ce712923.jpg',
            text: '?????????????????????>_<??????????????????',
            buttonText: '??????',
            click: 'getMyBooks'
          };
        },
        complete: function complete() {
          //??????????????????loading
          wx.hideToast();
        }
      });
    },
    getUserinfo: function getUserinfo(userid) {
      var self = this;
      uni.request({
        url: Api.getUserInfo(userid),
        success: function success(res) {
          var tmpData = res.data.data;
          console.log('????????????');
          console.log(tmpData);
          if (tmpData && res.data.code == 200) {
            //??????????????????????????????
            uni.setStorage({
              key: 'userInfo',
              data: tmpData,
              success: function success(res) {
                console.log('???????????????????????????????????????');
              }
            });
          } else {
            console.log('????????????????????????....');
            Util.showErrMsg(self, '???????????????', 1000);
          }
        },
        fail: function fail(err) {
          console.log(err);
          self.err_page_data = {
            show: true,
            image_url: 'https://bpic.588ku.com/element_origin_min_pic/00/77/63/0056e18ce712923.jpg',
            text: '?????????????????????>_<??????????????????',
            buttonText: '??????',
            click: 'getUserinfo'
          };
        }
      });
    },
    allMonths: function allMonths() {
      var self = this;
      var resultArray = [];
      var today = new Date();
      var month = today.getMonth();
      // todo??????????????????????????????
      // resultArray.push({
      //   monthCname: Util.eNumToCNum(Math.abs(month)) + '???',
      //   hasRecord: false
      // });
      for (var i = 0; i <= 6; i++) {
        resultArray.push({
          monthCname: Util.eNumToCNum(Math.abs(month - i < 0 ? month + 12 - i : month - i)) + '???',
          // hasRecord: ((Math.random() > 0.5) ? true : false),
          hasRecord: i == 0,
          monthIndex: i
        });
      }
      return {
        headerText: today.getFullYear() + '???' + resultArray[0].monthCname,
        showMonths: resultArray.reverse()
      };
    },
    goToShop: function goToShop() {
      console.log("gotoshop");
      uni.switchTab({
        url: '../shop/shop',
        success: function success() {
          console.log("switchTab????????????");
        },
        fail: function fail(e) {
          console.log("switchTab????????????", e);
        }
      });
    },
    goToBookDetail: function goToBookDetail(e) {
      console.log("goToBookDetail???currentBookId???", e);
      uni.navigateTo({
        url: '../book_detail/book_detail?bookid=' + e
      });
    },
    setIsSearching: function setIsSearching() {
      this.isSearching = true;
    },
    judgeIsNull: function judgeIsNull(event) {
      if (event.detail.value == '') {
        this.isSearching = false;
      } else {
        this.isSearching = true;
      }
    },
    finishedInput: function finishedInput(event) {
      var self = this;
      console.log("????????????", event.detail.value);
      var searchStr = event.detail.value;
      if (searchStr) {
        var allBooks = self.books;
        allBooks.forEach(function (item, index, array) {
          //?????????????????????????????????????????????item.isShow = false???????????????foreach????????????????????????false?????????????????????????????????????????????
          var isNeedtoChage = true;
          //??????????????????
          if (item.factionName.indexOf(searchStr) >= 0) {
            // item.name = self.findAndSigned(searchStr, item.name); //????????????????????????????????????dom, ?????????????????????????????????
            //??????????????????????????????????????????
            item.isShow = true;
            isNeedtoChage = false;
          }
          //????????????????????????
          if (item.author.indexOf(searchStr) >= 0) {
            // item.author = self.findAndSigned(searchStr, item.author);
            item.isShow = true;
            isNeedtoChage = false;
          }
          //??????????????????
          if (item.des.indexOf(searchStr) >= 0) {
            // item.bookDes = self.findAndSigned(searchStr, item.bookDes);
            item.isShow = true;
            isNeedtoChage = false;
          }
          if (isNeedtoChage) {
            item.isShow = false;
          }
        });
        self.books = allBooks;
      } else {
        console.log('???????????????????????????????????????');
        uni.getStorage({
          key: 'openid',
          success: function success(res) {
            var id = res.data;
            self.getMyBooks(id);
          },
          fail: function fail(e) {
            console.log("????????????ID", e);
          }
        });
      }
    },
    findAndSigned: function findAndSigned(searchString, readyToBeSearch) {
      if (typeof searchString == 'string') {
        var regExp = new RegExp(searchString, 'igm');
        var leftStr = ''; //?????????????????????????????????
        var rightStr = ''; //?????????????????????????????????
        var count = 1; //?????????
        var tempStr = readyToBeSearch; //??????????????????????????????
        var notChageStr = readyToBeSearch; //??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<code></code>??????????????????,???????????????????????????????????????
        var lastIndex = 0; //????????????????????????
        while (regExp.exec(tempStr) != null) {
          console.log(++count);
          lastIndex = regExp.lastIndex + 13 * (count - 1); //????????????notChageStr???????????????????????????<code></code>??????13?????????????????????????????????????????????lastindex?????????????????????lastindex??????13
          leftStr = notChageStr.substring(0, lastIndex - searchString.length);
          rightStr = notChageStr.substring(lastIndex);
          notChageStr = leftStr + '<code>' + searchString + '</code>' + rightStr;
        }
        return notChageStr;
      } else {
        console.log('The param of findAndSigned is error!....');
        return '';
      }
    },
    clearSearchContent: function clearSearchContent() {
      //?????????????????????????????????
      var allBooks = this.data.books;
      allBooks.forEach(function (item) {
        item.isShow = true;
      });
      this.searchValue = '';
      this.books = allBooks;
    },
    //????????????
    chooseMonth: function chooseMonth(event) {
      var self = this;
      var month = event.target.month;
      // console.log(event)
      this.monthIndex = month;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 43:
/*!*************************************************************************************************************************!*\
  !*** D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/booklist/booklist.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./booklist.vue?vue&type=style&index=0&lang=css& */ 44);
/* harmony import */ var _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_booklist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilder/HBuilderX.2.8.13.20200927/Workplace/book/pages/booklist/booklist.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[37,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/booklist/booklist.js.map