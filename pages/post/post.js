// pages/post/post.js
//var dataObj = require("../../data/data.js")
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
    var APP_ID = 'oEI8xQMULPSXHxYlgcv7TTNA-gzGzoHsz';
    var APP_KEY = '6GPHjUNTssAtnx8LdVVNiYYD';
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
    //this.getData();
  },

  getData:function(){
    var that = this;
    wx.request({
      url: 'https://api.leancloud.cn/1.1/classes/ttblog',
      method: 'GET',
      headers: {
        'X-LC-Id': 'wCALUa8ixi6bA585I6Lem3CH-gzGzoHsz',
        'X-LC-Key': 'gyuNsb8OMLd1fNywfBApzOpC',
        'Content-Type': 'application/json',
      },
      success:function(res){
        console.log(res.data);
        that.setData({postList :res.data});
      },
      fail:function(error){
        console.log(error)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    new AV.Query('jobbole')
        .descending('createdAt')
        .limit(20)
        .find()
        .then(todos => this.setData({ postList :todos }))
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

  onTapToDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../post-detail/post-detail?id='+id,
      success: function () {
        console.log('jump success');
      },
      fail: function () {
        console.log('jump failed');
      },
      complete: function () {
        console.log('jump complete');
      }
    });
  }
})