// pages/items/items.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        item_id: 1,
        item_name: "居家",
        children: [
          {
            child_id: 1,
            child_name: "床品件套",
            child_image: "../../images/items/1-1.png"
          },
          {
            child_id: 2,
            child_name: "被枕",
            child_image: "../../images/items/1-2.png"
          },
          {
            child_id: 3,
            child_name: "家具",
            child_image: "../../images/items/1-3.png"
          },
          {
            child_id: 4,
            child_name: "收纳",
            child_image: "../../images/items/1-4.png"
          },
          {
            child_id: 5,
            child_name: "家饰",
            child_image: "../../images/items/1-5.png"
          },
          {
            child_id: 6,
            child_name: "宠物",
            child_image: "../../images/items/1-6.png"
          }
        ]
      },
      {
        item_id: 2,
        item_name: "配件",
        children: [
          {
            child_id: 7,
            child_name: "行李箱",
            child_image: "../../images/items/2-1.png"
          },
          {
            child_id: 8,
            child_name: "男士包装",
            child_image: "../../images/items/2-2.png"
          },
          {
            child_id: 9,
            child_name: "女士包装",
            child_image: "../../images/items/2-3.png"
          },
          {
            child_id: 10,
            child_name: "钱包及小皮件",
            child_image: "../../images/items/2-4.png"
          },
          {
            child_id: 11,
            child_name: "女鞋",
            child_image: "../../images/items/2-5.png"
          },
          {
            child_id: 12,
            child_name: "男鞋",
            child_image: "../../images/items/2-6.png"
          },
          {
            child_id: 13,
            child_name: "拖鞋",
            child_image: "../../images/items/2-7.png"
          },
          {
            child_id: 14,
            child_name: "鞋配",
            child_image: "../../images/items/2-8.png"
          },
          {
            child_id: 15,
            child_name: "袜子",
            child_image: "../../images/items/2-8.png"
          },
          {
            child_id: 16,
            child_name: "丝袜",
            child_image: "../../images/items/2-10.png"
          },
          {
            child_id: 17,
            child_name: "配饰",
            child_image: "../../images/items/2-11.png"
          },
          {
            child_id: 18,
            child_name: "眼镜",
            child_image: "../../images/items/2-12.png"
          },
          {
            child_id: 19,
            child_name: "围巾件套",
            child_image: "../../images/items/2-13.png"
          },
          {
            child_id: 20,
            child_name: "旅行用品",
            child_image: "../../images/items/2-14.png"
          }
        ]
      },
      {
        item_id: 3,
        item_name: "服装",
        children: [
          {
            child_id: 21,
            child_name: "T恤",
            child_image: "../../images/items/3-1.png"
          },
          {
            child_id: 22,
            child_name: "衬衫",
            child_image: "../../images/items/3-2.png"
          },
          {
            child_id: 23,
            child_name: "牛仔",
            child_image: "../../images/items/3-3.png"
          },
          {
            child_id: 24,
            child_name: "运动",
            child_image: "../../images/items/3-4.png"
          },
          {
            child_id: 25,
            child_name: "裤装",
            child_image: "../../images/items/3-5.png"
          },
          {
            child_id: 26,
            child_name: "内衣",
            child_image: "../../images/items/3-6.png"
          },
          {
            child_id: 27,
            child_name: "内裤",
            child_image: "../../images/items/3-7.png"
          },
          {
            child_id: 28,
            child_name: "家居服",
            child_image: "../../images/items/3-8.png"
          },
          {
            child_id: 29,
            child_name: "裙装",
            child_image: "../../images/items/3-9.png"
          },
          {
            child_id: 30,
            child_name: "卫衣",
            child_image: "../../images/items/3-10.png"
          },
          {
            child_id: 31,
            child_name: "外衣",
            child_image: "../../images/items/3-11.png"
          },
          {
            child_id: 32,
            child_name: "针织毛衫",
            child_image: "../../images/items/3-12.png"
          }
        ]
      },
      {
        item_id: 4,
        item_name: "电器",
        children: [
          {
            child_id: 33,
            child_name: "生活电器",
            child_image: "../../images/items/4-1.png"
          },
          {
            child_id: 34,
            child_name: "厨房电器",
            child_image: "../../images/items/4-2.png"
          },
          {
            child_id: 35,
            child_name: "个护健康",
            child_image: "../../images/items/4-3.png"
          },
          {
            child_id: 36,
            child_name: "数码",
            child_image: "../../images/items/4-4.png"
          },
          {
            child_id: 37,
            child_name: "影音娱乐",
            child_image: "../../images/items/4-5.png"
          }
        ]
      },
      {
        item_id: 5,
        item_name: "洗护",
        children: [
          {
            child_id: 38,
            child_name: "纸巾湿巾",
            child_image: "../../images/items/5-1.png"
          },
          {
            child_id: 39,
            child_name: "家庭清洁",
            child_image: "../../images/items/5-2.png"
          },
          {
            child_id: 40,
            child_name: "生理用品",
            child_image: "../../images/items/5-3.png"
          },
          {
            child_id: 41,
            child_name: "毛巾",
            child_image: "../../images/items/5-4.png"
          },
          {
            child_id: 42,
            child_name: "美妆",
            child_image: "../../images/items/5-5.png"
          },
          {
            child_id: 43,
            child_name: "面部口腔护理",
            child_image: "../../images/items/5-6.png"
          },
          {
            child_id: 44,
            child_name: "身体护理",
            child_image: "../../images/items/5-7.png"
          },
          {
            child_id: 45,
            child_name: "浴室用具",
            child_image: "../../images/items/5-8.png"
          },
          {
            child_id: 46,
            child_name: "洗发护发",
            child_image: "../../images/items/5-9.png"
          },
          {
            child_id: 47,
            child_name: "香薰",
            child_image: "../../images/items/5-10.png"
          }
        ]
      },
      {
        item_id: 6,
        item_name: "饮食",
        children: [
          {
            child_id: 48,
            child_name: "糕点",
            child_image: "../../images/items/6-1.png"
          },
          {
            child_id: 49,
            child_name: "小食",
            child_image: "../../images/items/6-2.png"
          },
          {
            child_id: 50,
            child_name: "坚果炒货",
            child_image: "../../images/items/6-3.png"
          },
          {
            child_id: 51,
            child_name: "果干",
            child_image: "../../images/items/6-4.png"
          },
          {
            child_id: 52,
            child_name: "肉类零食",
            child_image: "../../images/items/6-5.png"
          },
          {
            child_id: 53,
            child_name: "冲饮",
            child_image: "../../images/items/6-6.png"
          },
          {
            child_id: 54,
            child_name: "茗茶",
            child_image: "../../images/items/6-7.png"
          },
          {
            child_id: 55,
            child_name: "酒水饮料",
            child_image: "../../images/items/6-8.png"
          },
          {
            child_id: 56,
            child_name: "食材",
            child_image: "../../images/items/6-9.png"
          },
          {
            child_id: 57,
            child_name: "调味",
            child_image: "../../images/items/6-10.png"
          },
          {
            child_id: 58,
            child_name: "滋补保健",
            child_image: "../../images/items/6-11.png"
          },
          {
            child_id: 59,
            child_name: "生鲜",
            child_image: "../../images/items/6-12.png"
          }
        ]
      },
      {
        item_id: 7,
        item_name: "餐厨",
        children: [
          {
            child_id: 60,
            child_name: "水具杯壶",
            child_image: "../../images/items/7-1.png"
          },
          {
            child_id: 61,
            child_name: "餐具",
            child_image: "../../images/items/7-2.png"
          },
          {
            child_id: 62,
            child_name: "锅具",
            child_image: "../../images/items/7-3.png"
          },
          {
            child_id: 63,
            child_name: "清洁保鲜",
            child_image: "../../images/items/7-4.png"
          },
          {
            child_id: 64,
            child_name: "厨房配件",
            child_image: "../../images/items/7-5.png"
          },
          {
            child_id: 65,
            child_name: "刀剪砧板",
            child_image: "../../images/items/7-6.png"
          },
          {
            child_id: 66,
            child_name: "茶具咖啡具酒具",
            child_image: "../../images/items/7-7.png"
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function(e) {
    let id = e.target.dataset.id;
    let index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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