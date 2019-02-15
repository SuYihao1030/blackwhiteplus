// pages/cart/cart.js
var Temp = require('../../template/index.js');
const AV = require('../../libs/av-weapp-min.js');
var app = getApp();
Page(Object.assign({}, Temp.Quantity, {
  /**
   * 页面的初始数据
   */
  data: {
    isAllSelect: false,
    totalMoney: 0,
    carts: [],
    scrollY: true,
  },

  getCartGood: function () {
    this.setData({
      totalMoney: 0
    })
    var that = this;
    var temp = new Array();
    var quantity = new Array();
    var cartGoods = new Array();
    var query = new AV.Query('Cart');
    query.equalTo('user', AV.User.current());
    query.descending('updatedAt').find().then(function (carts) {
      for (var i = 0; i < carts.length; i++) {
        temp.push(carts[i].attributes.good.id);
        quantity.push({
          goodId: carts[i].attributes.goodid,
          quantity: carts[i].attributes.quantity
        });
      }
      var cart = new AV.Query('Goods');
      for (var i = 0; i < temp.length; i++) {
        cart.get(temp[i]).then(function (cart) {
          for (var j = 0; j < quantity.length; j++) {
            if (quantity[j].goodId == cart.attributes.goodId) {
              cart.attributes.goodQuantity.quantity = quantity[j].quantity;
              cart.attributes.id = cart.id;
              cartGoods.push(cart.attributes);
              that.setData({
                carts: cartGoods
              });
              console.log(that.data.carts);
            }
          }
        }, function (err) {
          console.log(err);
        })
      }
    }, function (err) {
      console.log(err);
    });
  },

  switchSelect: function (e) {
    let Allprice = 0;
    let id = e.target.dataset.id;
    let index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney += this.data.carts[index].goodNewPrice * this.data.carts[index].goodQuantity.quantity;
    }
    else {
      this.data.totalMoney -= this.data.carts[index].goodNewPrice * this.data.carts[index].goodQuantity.quantity;
    }

    for (let i = 0; i < this.data.carts.length; i++) {
      Allprice += this.data.carts[i].goodNewPrice * this.data.carts[i].goodQuantity.quantity;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }

    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    });
  },

  allSelect: function (e) {
    if (!this.data.isAllSelect) {
      for (let i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney += this.data.carts[i].goodNewPrice * this.data.carts[i].goodQuantity.quantity;
      }
    }
    else {
      for (let i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }

    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    });
  },

  toBuy() {
    var buy = new Array();
    for (var i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].isSelect) {
        buy.push(this.data.carts[i]);
      }
    }
    console.log(buy);
    // var todo = AV.Object.createWithoutData('Cart', buy[0].id);
    // todo.destroy().then(function (success) {
    //   // 删除成功
    //   console.log("1");
    // }, function (error) {
    //   // 删除失败
    //   console.log(error);
    // });
    var buy_json = JSON.stringify(buy);
    wx.navigateTo({
      url: '../buy/buy?buy=' + buy_json
    })
  },

  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].goodQuantity.quantity = quantity;
    this.data.totalMoney = 0;
    for (let i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].isSelect) {
        this.data.totalMoney += this.data.carts[i].goodNewPrice * this.data.carts[i].goodQuantity.quantity
      }
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney
    });
  },

  swipeCheckX: 35, //激活检测滑动的阈值
  swipeCheckState: 0, //0未激活 1激活
  maxMoveLeft: 205, //消息列表项最大左滑距离
  correctMoveLeft: 205, //显示菜单时的左滑距离
  thresholdMoveLeft: 75,//左滑阈值，超过则显示菜单
  lastShowItemId: '', //记录上次显示菜单的id
  moveX: 0,  //记录平移距离
  showState: 0, //0 未显示菜单 1显示菜单
  touchStartState: 0, // 开始触摸时的状态 0 未显示菜单 1 显示菜单
  swipeDirection: 0, //是否触发水平滑动 0:未触发 1:触发水平滑动 2:触发垂直滑动

  touchStart: function (e) {
    if (this.showState === 1) {
      this.touchStartState = 1;
      this.showState = 0;
      this.moveX = 0;
      this.translateXItem(this.lastShowItemId, 0, 200);
      this.lastShowItemId = "";
      return;
    }
    this.firstTouchX = e.touches[0].clientX;
    this.firstTouchY = e.touches[0].clientY;
    if (this.firstTouchX > this.swipeCheckX) {
      this.swipeCheckState = 1;
    }
    this.lastMovetime = e.timeStamp;
  },

  touchMove: function (e) {
    if (this.swipeCheckState === 0) {
      return;
    }

    if (this.touchStartState === 1) {
      return;
    }

    var moveX = e.touches[0].clientX - this.firstTouchX;
    var moveY = e.touches[0].clientY - this.firstTouchY;

    if (this.swipeDirection === 2) {
      return;
    }

    if (this.swipeDirection === 0) {
      if (Math.abs(moveY) > 4) {
        this.swipeDirection = 2;
        return;
      }
      if (Math.abs(moveX) > 4) {
        this.swipeDirection = 1;
        this.setData({
          scrollY: false
        });
      } else {
        return;
      }
    }

    this.lastMovetime = e.timeStamp;

    if (moveX > 0) {
      moveX = 0;
    }

    if (moveX < -this.maxMoveLeft) {
      moveX = -this.maxMoveLeft
    }

    this.moveX = moveX;
    this.translateXItem(e.currentTarget.id, moveX, 0);
  },

  touchEnd: function (e) {
    this.swipeCheckState = 0;
    var swipeDirection = this.swipeDirection;
    this.swipeDirection = 0;
    if (this.touchStartState === 1) {
      this.touchStartState = 0;
      this.setData({
        scrollY: true
      });
      return;
    }

    if (swipeDirection !== 1) {
      return;
    }

    if (this.moveX === 0) {
      this.showState = 0;
      this.setData({
        scrollY: true
      });
      return;
    }

    if (this.moveX === this.correctMoveLeft) {
      this.showState = 1;
      this.lastShowItemId = e.currentTarget.id;
      return;
    }

    if (this.moveX < -this.thresholdMoveLeft) {
      this.moveX = -this.correctMoveLeft;
      this.showState = 1;
      this.lastShowItemId = e.currentTarget.id;
    } else {
      this.moveX = 0;
      this.showState = 0;
      this.setData({
        scrolly: true
      });
    }

    this.translateXItem(e.currentTarget.id, this.moveX, 500);
  },

  del: function (e) {
    this.deleteItem(e);
    console.log(e);
  },

  mark: function (e) {
    this.deleteItem(e);
    wx.showToast({
      title: '已加入收藏夹',
      icon: 'success',
      duration: 3000
    });
  },

  getItemIndex: function (id) {
    var carts = this.data.carts;
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].goodId == id) {
        return i;
      }
    }
    return -1;
  },

  deleteItem: function (e) {
    var animation = wx.createAnimation({
      duration: 200
    });
    animation.height(0).opacity(0).step();
    this.animationDelItem(e.currentTarget.id, animation);
    var that = this;
    setTimeout(function () {
      var index = that.getItemIndex(e.currentTarget.id);
      that.data.carts.splice(index, 1);
      that.setData({
        carts: that.data.carts
      });
    }, 200);
    this.showState = 0;
    this.setData({
      scrollY: true
    });
  },

  translateXItem: function (id, x, duration) {
    var animation = wx.createAnimation({
      duration: duration
    })
    animation.translateX(x).step();
    this.animationItem(id, animation);
  },

  animationItem: function (id, animation) {
    var index = this.getItemIndex(id);
    var param = {};
    var indexString = "carts[" + index + "].animation";
    param[indexString] = animation.export();
    this.setData(param);
  },

  animationDelItem: function (id, animation) {
    var index = this.getItemIndex(id);
    var param = {};
    var indexString = "carts[" + index + "].delAnimation";
    param[indexString] = animation.export();
    this.setData(param);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCartGood();
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
    this.getCartGood();
    this.setData({
      isAllSelect: false
    })
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
}));