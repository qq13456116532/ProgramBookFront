// 处理数据的请求
'use strict';

const HOST_URL = 'http://127.0.0.1:3000/api';
const LOGIN = '/as_users/login';
const GET_CONTENT_BY_ID = '/chapter/getContentById';
const GET_CONTENT_BY_HISTORY = '/chapter/getContentByHistory';
const GET_EMAILS_PAGEID = '/emails';
const GET_BOOKS_SORTBY_TIME = '/xxxx';
const GET_RANK = '/xs_rank/getRank';
const GET_BOOK_MULU = '/book/getMulu';
const GET_SESSION_ID = '/user/getSessionId';
const CHECK_SESSION_ID = '/user/checkSessionId';
const IS_REGISTED_BY_WX = '/user/isRegistedByWx';
const GET_UPLOAD_TOKEN = '/user/getUploadToken';
const REGISTE = '/user';
const GET_POSITION = 'https://restapi.amap.com/v3/geocode/regeo';
const GET_BOOK_BY_ID = '/book/getBookById';
const GET_BOOK_DETAIL = '/book/getBookDetail';
const GET_MY_BOOKS = '/user/getMyBooks';
const ADD_MY_BOOKS = '/user/addMyBooks';
const DELETE_MY_BOOKS = '/user/deleteMyBooks';
const ADD_COMMENT = '/book/addComment';
const DELETE_COMMENT = '/book/deleteComment';
const GET_COMMENTS = '/book/listComments';
const GET_USER_INFO = '/user/getUserInfo';
const UPDATE_USER_INFO = '/user/updateUserInfo';
const ADD_LIKE_NUM = '/book/addLikeNum';
const GET_ALL_BOOKS = '/book';
const INIT_DATABASE = '/book/initDataBase';
const GET_CLASSIFY = '/book/getClassify';
const SEARCH_BOOK = '/book/searchBook';
const EVERYDAY_SIGN = '/user/signIn'
const ContinueReadDay = '/user/getContinueDays'
const JudgeIsInList ='/user/JudgeIsInList'
const StartReading = '/user/StartReading'
const endReading = '/user/endReading'
const ContinueTime = '/user/continueTime'
const hasBookNum = '/user/hasBookNum'
const RemoveLikeNum = '/user/RemoveLikeNum'
const RecommendBooks = '/user/recommendBooks'
const OneBookReadingTime = '/book/getOneBookReadingTime'
const maxChapterNum= '/chapter/maxChapterNum'
const chapterByNumAndBookId = '/chapter/chapterByNumAndBookId'


function obj2url(obj) {
  if (obj instanceof Object) {
    return Object.keys(obj)
      .map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
      })
      .join('&');
  } else {
    console.err(obj + '，不是一个对象!');
    return '';
  }
}

module.exports = {
	getChapterByNumAndBookId:function(bookid,num){
		return HOST_URL +chapterByNumAndBookId  + '?bookid=' + bookid +'&num='+num
	},
	getmaxChapterNum: function(bookid){
		return HOST_URL +maxChapterNum + '?bookid=' + bookid;
	},
	getOneBookReadingTime: function(userid,bookid){
		return HOST_URL + OneBookReadingTime + '?userid=' + userid+ '&bookid='+bookid
	},
	getRecommendBooks: function(){
		return HOST_URL +RecommendBooks 
	},
	RemoveLikeNum: function() {
		return HOST_URL +RemoveLikeNum 
	},
	gethasBookNum: function(userid){
		return HOST_URL +hasBookNum +'?userid=' + userid
	},
	getContinueTime: function(userid){
		return HOST_URL +ContinueTime +'?userid=' + userid
	},
	GetendReading: function(token){
		return HOST_URL +endReading+  '?token=' + token
	},
	GetStartReading: function(userid,bookid){
		return HOST_URL +StartReading+  '?userid=' + userid + '&bookid='+bookid
	},
	GetJudgeIsInList: function(userid,bookid){
		return HOST_URL +JudgeIsInList+  '?userid=' + userid + '&bookid='+bookid
		
	},
	GetContinueReadDay: function(userid){
		return HOST_URL +ContinueReadDay+  '?userid=' + userid
	}
	,
	getEveryDaySign: function(userid){
		return HOST_URL + EVERYDAY_SIGN +  '?userid=' + userid;
	},
  getBookDetail: function (bookid) {
    return HOST_URL + GET_BOOK_DETAIL + '?bookid=' + bookid;
  },
  getContentById: function (sectionId) {
    return HOST_URL + GET_CONTENT_BY_ID + '?sectionId=' + sectionId;
  },
  getContentByHistory: function (userid, bookid) {
    return HOST_URL + GET_CONTENT_BY_HISTORY + '?bookid=' + bookid + '&userid=' + userid;
  },
  // 登录
  login: function (umt, password) {
    return HOST_URL + LOGIN;
  },
  // 获取邮件详情
  getEmailsByPageid: function (pageid) {
    return HOST_URL + GET_FACTION_DETAIL_BY_ID + '?pageid=' + pageid;
  },
  // 根据时间分类用户的书籍
  getBooksSortByTime: function (timeObj) {
    if (timeObj.timeType && timeObj.timeValue) {
      return HOST_URL + GET_BOOKS_SORTBY_TIME + '?timeType=' + timeObj.timeType + '&timeValue=' + timeObj.timeValue;
    } else {
      console.log('根据时间分类用户的书籍 传入参数错误');
    }
  },
  // 获取用户信息
  getBookById: function (bookid) {
    return HOST_URL + GET_BOOK_BY_ID + '?bookId=' + bookid;
  },
  // 获取排行榜
  getRank: function (rankType) {
    return HOST_URL + GET_RANK + '?rankType=' + rankType;
  },
  // 获取小说目录
  getMulu: function (bookid, sectionNum) {
    return HOST_URL + GET_BOOK_MULU + '?bookId=' + bookid + '&sectionNum=' + sectionNum;
  },
  // 将登录凭证发往你的服务端，并在你的服务端使用该凭证向微信服务器换取该微信用户的唯一标识(openid)和会话密钥(session_key)
  getSessionId: function (wxcode) {
    return HOST_URL + GET_SESSION_ID + '?wxcode=' + wxcode;
  },
  // 检查本地缓存中记录的登录信息是否有效
  checkSessionId: function (sessionid) {
    return HOST_URL + CHECK_SESSION_ID + '?sessionid=' + sessionid;
  },
  // 检查用户是否已经通过微信注册过
  isRegistedByWx: function (wxcode) {
    return HOST_URL + IS_REGISTED_BY_WX + '?wxcode=' + wxcode;
  },
  // 个人中心上传图片获取上传token
  getUploadToken: function () {
    return HOST_URL + GET_UPLOAD_TOKEN;
  },
  // 新用户注册
  registe: function () {
    return HOST_URL + REGISTE;
  },
  // 高德地图地址转换
  getPosition: function (latitude, longitude) {
    return GET_POSITION + '?key=74e7240976cc962d65ee8cbe45930979&location=' + longitude + ',' + latitude + '&poitype=&radius=200&extensions=base&batch=false&roadlevel=1';
  },
  // 获取我的书单
  getMyBooks: function (userid) {
    return HOST_URL + GET_MY_BOOKS + '?userid=' + userid;
  },
  // 新增书单, post方法
  addMyBooks: function () {
    return HOST_URL + ADD_MY_BOOKS;
  },
  // 删除书单，post方法
  deleteMyBooks: function () {
    return HOST_URL + DELETE_MY_BOOKS;
  },
  // 增加评论, post方法
  addComment: function () {
    return HOST_URL + ADD_COMMENT;
  },
  // 删除评论，post方法
  deleteComment: function () {
    return HOST_URL + DELETE_COMMENT;
  },
  // 获取评论
  listComments: function (bookid) {
    return HOST_URL + GET_COMMENTS + '?bookid=' + bookid;
  },
  // 获取用户详细信息
  getUserInfo: function (userid) {
    return HOST_URL + GET_USER_INFO + '?userid=' + userid;
  },
  // 更新用户信息, post
  updateUserInfo: function () {
    return HOST_URL + UPDATE_USER_INFO;
  },
  // 点赞, post
  addLikeNum: function () {
    return HOST_URL + ADD_LIKE_NUM;
  },
  // 点赞, post
  getAllBooks: function () {
    return HOST_URL + GET_ALL_BOOKS;
  },
  initDataBase: function () {
    return HOST_URL + INIT_DATABASE;
  },
  getClassify: function (index = 0, page = 1) {
    return HOST_URL + GET_CLASSIFY + '?index=' + index + '&page=' + page;
  },
  searchBook(keyword) {
    return HOST_URL + SEARCH_BOOK + '?keyword=' + keyword;
  }
};
