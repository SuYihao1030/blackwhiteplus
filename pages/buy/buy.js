// pages/buy/buy.js
const AV = require('../../libs/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData: {},
    addressInfo: {},
    addressData: [],
    addressIndex: ''
  },

  addressClick: function () {
    wx.navigateTo({
      url: '../addressManager/addressManager',
    })
  },

  getAddressData: function () {
    var that = this;
    var addressData = new Array();
    var addr = new AV.Query('Adress');
    addr.equalTo('user', AV.User.current());
    addr.descending('updatedAt').find().then(function (addr) {
      for (var i = 0; i < addr.length; i++) {
        var temp = new Object();
        temp.name = addr[i].attributes.name;
        temp.phoneNum = addr[i].attributes.phoneNum;
        temp.areaInfo = addr[i].attributes.areaInfo;
        temp.detailAddress = addr[i].attributes.detailAddress;
        temp.provinceId = addr[i].attributes.provinceId;
        temp.cityId = addr[i].attributes.cityId;
        temp.areaId = addr[i].attributes.areaId;
        temp.zipCode = addr[i].attributes.zipCode
        addressData.push(temp);
      }
      var index = 0;
      for (var i = 0; i < addressData.length; i++) {
        if (addressData[i].name == that.data.addressIndex) {
          index = i;
        }
      }
      that.setData({
        addressInfo: addressData[index],
        addressData: addressData
      });
    }, function (err) {
      console.log(err);
    });
  },

  paynow: function () { //先跳转到支付成功界面界面  拿到code
    this.saveOrder();
    wx.redirectTo({
      url: '../paycomplete/paycomplete',
    })
  },

  saveOrder: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var buy = new Array();
    buy = JSON.parse(options.buy);
    var orderData = new Object();
    var goodsTotalPrice = 0;
    orderData.list = buy;
    for (var i = 0; i < buy.length; i++) {
      goodsTotalPrice += parseFloat(buy[i].goodNewPrice) * parseInt(buy[i].goodQuantity.quantity);
    }
    orderData.goodsTotalPrice = goodsTotalPrice;
    orderData.goodsTotalFreight = 10;
    this.setData({
      orderData: orderData,
    });
    this.getAddressData();
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
    this.getAddressData();
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