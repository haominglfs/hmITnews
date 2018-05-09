// pages/post-detail/post-detail.js
var WxParse = require('../../wxParse/wxParse.js');
var AV = require('../../lib/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var APP_ID = 'f3V6Ra75Q5o2LLWF4eoqrIIG-gzGzoHsz';
    //var APP_KEY = 'KAzgpxRIvQOr29XF6OpHPhRo';
    //AV.init({
      //appId: APP_ID,
      //appKey: APP_KEY
    //});
    this.id = options.id;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.id)
    new AV.Query('jobbole')
      .get(this.id)
      .then(article => WxParse.wxParse('article', 'html', article.get('content'), this, 2))
      .catch(console.error);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

})