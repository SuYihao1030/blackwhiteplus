// pages/goods/goods.js
const AV = require('../../libs/av-weapp-min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var itemId = options.id;
    this.getGoods(itemId);
  },

  getGoods: function (itemId) {
    var that = this;
    var query = new AV.Query('Goods');
    query.find().then(function (res) {
      var temp = new Array();
      for (var i = 0; i < res.length; i++) {
        if (res[i].attributes.goodItemId == itemId) {
          temp.push(res[i].attributes);
        }
      }
      that.setData({
        goods: temp
      })
    }, function (err) {
      console.log(err);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }
})