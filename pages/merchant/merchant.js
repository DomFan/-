// pages/merchant/merchant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    token: '',
    userName: '',
    userPassword: '',
    merchantlist: [],
    total: 0,
    offset: 1,
    isall: false,
    /**
     * rows：merchantName String 商户名称
     * rows：auditstate BigDecimal 进件状态 0 未处理  1 处理中 2 通过 3 未通过
     * rows：remarksAds String     进件状态备注
     */

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ total: 0, offset: 1, isall: false})
    console.log(options)
    this.setData({
      name: options.name,
      token: options.token,
      userName: options.userName,
      userPassword: options.userPassword
    })
    let that = this,
        name = this.data.name,
        token = this.data.token,
        offset = this.data.offset,
        userName = this.data.userName,
        userPassword = this.data.userPassword
    wx.request({
      url: "https://www.shouzan365.com/back/merchantinfoController/page",
      // url: 'https://www.shouzan365.com/back/merchantinfoController/page?limit=10&offset=1',
      data: {
        limit: 10,
        offset: offset,
      },
      header: {
        'access-token': token
      },
      method: "GET",
      success: function(res) {
        console.log('requset merchantlist:', res)
        if (res.data.rows) {
          that.setData({
            merchantlist: res.data.rows,
            total: res.data.total
          })
        }
        that.data.merchantlist.length == res.data.total ? that.setData({ isall: true}) : ''
      },
      fail: function(res) {},
      complete: function(res) {},
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
    let that = this,
      token = this.data.token,
      offset = this.data.offset,
      merchantlist = this.data.merchantlist,
      length = this.data.merchantlist.length,
      total = this.data.total
    if (length < total) {
      ++offset
      console.log("length", length, 'total', total, "offset", offset)
      wx.request({
        url: "https://www.shouzan365.com/back/merchantinfoController/page",
        data: {
          limit: 10,
          offset: offset,
        },
        header: {
          'access-token': token
        },
        method: "GET",
        success: function (res) {
          console.log('requset merchantlist:', res)
          if (res.data.rows){
            res.data.rows.map(item => {
              merchantlist.push(item)
            })
          }
          // debugger
          that.setData({ 
            merchantlist: merchantlist,
            offset: offset
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else if (length >= total) {
      that.setData({
        isall: true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})