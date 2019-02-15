// pages/addressManager/addressManager.js
const AV = require('../../libs/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      addressData: [],
    },
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
      that.setData({
        addressData: addressData,
      });
    }, function (err) {
      console.log(err);
    });
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAddressData();
  },

  addressAdd: function () {
    wx.navigateTo({
      url: '../addressAdd/addressAdd',
    })
  },

  addrDelete: function (e) {
    console.log('ffffff', e);
    var that = this;
    wx.showModal({
      title: '确认删除该地址吗？',
      success: function (res) {
        if (res.confirm) {

        }
      }
    })
  },

  addrEdit: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../addressAdd/addressAdd?detailAddress=' + e.currentTarget.dataset.item.detailAddress + '&addressId=' + e.currentTarget.dataset.item.addressId + '&areaId=' + e.currentTarget.dataset.item.areaId + '&areaInfo=' + e.currentTarget.dataset.item.areaInfo + '&cityId=' + e.currentTarget.dataset.item.cityId + '&phoneNum=' + e.currentTarget.dataset.item.phoneNum + '&provinceId=' + e.currentTarget.dataset.item.provinceId + '&name=' + e.currentTarget.dataset.item.name + '&zipCode=' + e.currentTarget.dataset.item.zipCode,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
        // console.log('kkkkkkk');
        // console.log(e.currentTarget.dataset.item);
      }
    })
  },

  addressClick: function (e) {

    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    prevPage.setData({//直接给上移页面赋值
      addressIndex: e.currentTarget.dataset.item.name
    });
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
        // var addr = {};
        // addr = e.currentTarget.dataset.item;
        // wx.setStorageSync('address', addr);
      }
    })
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