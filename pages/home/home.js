// pages/home/home.js
const AV = require('../../libs/av-weapp-min.js')
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    adList: [
      {
        picUrl: 'http://lc-2B4VlVqm.cn-n1.lcfile.com/7694cc23a9f615707d20.jpg',
      },
      {
        picUrl: 'http://lc-2B4VlVqm.cn-n1.lcfile.com/09183b2a6bb19a6078d6.jpg',
      },
      {
        picUrl: 'http://lc-2B4VlVqm.cn-n1.lcfile.com/0d98ad900d6943a691e7.jpg',
      }
    ],
    indicatorDots: true,
    indicatorColor: '#fff',
    indicatorActiveColor: '#000',
    autoplay: true,
    circular: true,
    vertical: false,
    interval: 5000,
    duration: 1000,
    goodsItems: [],
    advertise: [
      {
        imageUrl: 'http://lc-2B4VlVqm.cn-n1.lcfile.com/48c4a84ab0c7810a1a9c.jpg',
        url: ''
      }
    ],
    recommends: [],
  },

  search: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  imageLoad: function (e) {
    var res = wx.getSystemInfoSync();
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight;
    this.setData({
      bannerHeight: res.windowWidth / ratio
    })
  },

  getGoods: function () {
    var that = this;
    var query = new AV.Query('Goods');
    query.ascending('goodId').find().then(function (res) {
      var temp = new Array();
      for (var i = 0; i < res.length; i++) {
        temp.push(res[i].attributes)
      }
      console.log(temp);
      that.setData({
        goodsItems: temp,
        recommends: temp,
      })
    }, function (err) {
      console.log(err);
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoods();
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
    this.getGoods();
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