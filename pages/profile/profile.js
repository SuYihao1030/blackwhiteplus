// pages/profile/profile.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderItems: [
      {
        id: 0,
        name: '待付款',
        url: '',
        imageUrl: '../../images/profile/icon1.png',
      },
      {
        id: 1,
        name: '待发货',
        url: '',
        imageUrl: '../../images/profile/icon2.png',
      },
      {
        id: 2,
        name: '待收货',
        url: '',
        imageUrl: '../../images/profile/icon3.png',
      },
      {
        id: 3,
        name: '待评价',
        url: '',
        imageUrl: '../../images/profile/icon4.png',
      }
    ],
    profileList: [
      {
        id: 0,
        name: '我的收藏',
        url: '',
        imageUrl: '../../images/profile/icon5.png'
      },
      {
        id: 1,
        name: '收货地址',
        url: '',
        imageUrl: '../../images/profile/icon6.png'
      },
      {
        id: 2,
        name: '红包卡券',
        url: '',
        imageUrl: '../../images/profile/icon7.png'
      },
      {
        id: 3,
        name: '联系客服',
        url: '',
        imageUrl: '../../images/profile/icon8.png'
      },
      {
        id: 4,
        name: '帮助中心',
        url: '',
        imageUrl: '../../images/profile/icon9.png'
      }
    ]
  },

  toOrder: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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