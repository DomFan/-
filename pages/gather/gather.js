// pages/gather/gather.js
Page({
  /**
   * 页面的初始数据
   * @params
   * limit      -   显示的行数
   * offset     -   页码
   * date       -   日期
   * startDate  -   开始日期
   * endDate    -   结束日期
   * listData   -   查询返回数据列表
   * hasmore    -   是否还有数据
   * hasmoredata-   还有未显示数据
   * hasnomore  -   没有数据
   */
  data: {
    limit: 10,
    offset: 1,
    state: '',
    date: new Date(),
    startDate: '',
    endDate: '',
    listData: [],
    hasmore: false,
    hasmoredata: false,
    hasnomore: false,
  },

  // 开始时间
  starttime: function (e) {
    this.setData({
      startDate: e.detail.value
    })
    console.log(this.data.startDate)
  },

  // 结束时间
  endtime: function (e) {
    this.setData({
      endDate: e.detail.value
    })
    console.log(this.data.endDate)
  },

  // 确定搜索条件
  confirm: function () {
    let that = this,
      token = this.data.token
    // console.log(token)
    if (!token || token == 'undefined') {
      wx.showModal({
        title: '请先登录',
        content: '登录后可查询',
        showCancel: false,
      })
      return
    }
    if (!that.data.startDate) {
      wx.showModal({
        title: '提示',
        content: '请选择开始日期',
        showCancel: false,
      })
      return
    }
    if (!that.data.endDate) {
      wx.showModal({
        title: '提示',
        content: '请选择结束日期',
        showCancel: false,
      })
      return
    }
    // 重置数据数据及页码
    this.setData({ listData: [], offset: 1 })
    // console.log(that.data)
    wx.showLoading({
      title: 'searching...',
      mask: true,
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    /** 
     * @params 返回参数
      - 参数			  类型		  说明
			- tradedt		  date	  交易日期
			- merchant_id	string	商户名称
			- passway_id	string	支付方式
			- tradetimes	num		  交易总笔数
			- sum			    num		  交易总金额
			- refundtimes	num		  退款总笔数
			- refund		  num		  退款总金额
			- fee		    	num		  手续费
     */
    wx.request({
      // https://www.shouzan365.com/back/tradeBalcons/page?limit=10000000&offset=1&startDate=2017-12-01&endDate=2017-12-31
      url: 'https://www.shouzan365.com/back/tradeBalcons/page',
      data: {
        limit: 10,
        offset: 1,
        startDate: that.data.startDate,
        endDate: that.data.endDate,
        token
      },
      header: {
        'access-token': token
      },
      method: "GET",
      dataType: "json",
      success: function (res) {
        setTimeout(function () {
          wx.hideLoading()
        }, 1000)

        // console.log(res)
        console.log('查询---', res.data.rows)
        that.setData({
          listData: res.data.rows
        })

        if (res.data.total < that.data.listData.length) {
          that.setData({ hasmore: false, hasmoredata: false, hasnomore: true })
        } else {
          that.setData({ hasmore: true })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  // 汇总 
  gatherall: function () {
    let that = this, 
        token = that.data.token
    if (!token || token == 'undefined') {
      wx.showModal({
        title: '请先登录',
        content: '登录后可查询',
        showCancel: false,
      })
      return
    }
    if (!that.data.startDate) {
      wx.showModal({
        title: '提示',
        content: '请选择开始日期',
        showCancel: false,
      })
      return
    }
    if (!that.data.endDate) {
      wx.showModal({
        title: '提示',
        content: '请选择结束日期',
        showCancel: false,
      })
      return
    }
    wx.request({
      url: 'https://www.shouzan365.com/back/tradeBalcons/calTradebalcons',
      data: {
        startDate: that.data.startDate,
        endDate: that.data.endDate
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'access-token': token
      },
      method: 'POST',
      success: function(res) {
        console.log('汇总---', res)
        wx.showLoading({
          title: '汇总中。。。',
          mask: true,
        })
        setTimeout(function(){
          wx.hideLoading()
        if(res.data.msg){
          wx.showToast({
            title: '汇总成功',
          })
        }
        }, 1500)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userName: options.userName,
      userPassword: options.userPassword,
      token: options.token,
    })
    // console.log(options)
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
    if (!this.data.listData[0]) { return }
    console.log('onReachBottom')
    let that = this,
      token = this.data.token,
      hasmore = this.data.hasmore
    wx.showLoading({
      title: 'searching...',
      mask: true,
    })
    if (hasmore) {
      that.setData({ hasmore: false, hasmoredata: true, hasnomore: false })

      // 对页码进行累加
      ++this.data.offset

      wx.request({
        url: 'https://www.shouzan365.com/back/tradeBalcons/page',
        data: {
          limit: 10,
          offset: that.data.offset,
          startDate: that.data.startDate,
          endDate: that.data.endDate,
          token
        },
        header: {
          'access-token': token
        },
        method: "GET",
        dataType: "json",
        success: function (res) {
          setTimeout(function () {
            wx.hideLoading()
          }, 1000)
          console.log(res)
          let listData = that.data.listData
          // listData.concat(res.data.rows)
          res.data.rows.map(item => {
            listData.push(item)
          })
          console.log(that.data.listData)
          that.setData({
            listData
          })
          // **设置定时器，防止一次上拉多次加载 
          setTimeout(function () {
            that.setData({ hasmore: true, hasmoredata: false })
          }, 1000)
          that.setData({ hasnomore: false })

          console.log('res.data.total=' + res.data.total, '--this.data.listData.length=' + that.data.listData.length)

          if (res.data.total > that.data.listData.length) {
            that.setData({ hasmore: true })
            // console.log('total > listData.length' + that.data.hasmoredata, that.data.hasnomore)
          } else {
            that.setData({ hasmore: false, hasmoredata: false, hasnomore: true })
            // console.log('total <= listData.length'+ that.data.hasmore, that.data.hasmoredata, that.data.hasnomare)
          }
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})