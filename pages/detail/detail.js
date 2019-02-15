// pages/detail/detail.js
var Temp = require('../../template/index.js');
const AV = require('../../libs/av-weapp-min.js');
Page(Object.assign({}, Temp.Quantity, {
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    indicatorColor: '#fff',
    indicatorActiveColor: '#000',
    autoplay: true,
    circular: true,
    vertical: false,
    interval: 5000,
    duration: 1000,
    good: {},
    showDialog: false,
    isLike: false,
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

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imgUrls,
    })
  },

  toggleDialog: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  closeDialog: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  addLike: function () {
    this.setData({
      isLike: !this.data.isLike
    });
  },

  addCart: function () {
    var that = this;
    var goodId = this.data.goods.goodId;
    var quantity = this.data.goods.goodQuantity.quantity;
    AV.User.loginWithWeapp();
    var good = new AV.Query('Goods');
    good.ascending('goodId')
      .equalTo('goodId', goodId)
      .find()
      .then(function (res) {
        console.log(res);
        var cart = new AV.Object('Cart');
        cart.set('quantity', quantity);
        cart.set('user', AV.User.current());
        cart.set('goodid', goodId);
        cart.set('good', res[0]);
        cart.save().then(function () {
          wx.showToast({
            title: '加入购物车成功',
            success: function () {
              that.closeDialog();
            }
          });
        }, function (err) {
          console.log(err);
        });
      }, function (err) {
        console.log(err);
      });
  },

  toCart: function () {
    wx.switchTab({
      url: '../../pages/cart/cart',
    })
  },

  handleQuantityChange: function (e) {
    var componentId = e.componentId;
    var quantity = e.quantity;

    this.setData({
      [`${componentId}.quantity`]: quantity
    });
  },

  immeBuy: function () {
    var buy = new Array();
    buy.push(this.data.goods);
    console.log(buy);
    var buy_json = JSON.stringify(buy);
    wx.navigateTo({
      url: '../buy/buy?buy=' + buy_json,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodId = options.id;
    this.getGoodDetail(goodId);
  },

  getGoodDetail: function (goodId) {
    var that = this;
    var query = new AV.Query('Goods');
    query.find().then(function (res) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].attributes.goodId == goodId) {
          that.setData({
            goods: res[i].attributes
          })
        }
      }
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
}))