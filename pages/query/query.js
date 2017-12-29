// pages/query/query.js
Page({
  
  /**
   * 页面的初始数据
   * @params
   * limit      -   显示的行数
   * offset     -   页码
   * state      -   交易状态
   * date       -   日期
   * startDate  -   开始日期
   * endDate    -   结束日期
   * listData   -   查询返回数据列表
   * hasmore    -   是否还有数据
   * hasmoredata-   还有未显示数据
   * hasnomore  -   没有数据
   * open       -   是否开启交易类别列表
   * text       -   显示的交易类别
   * list       -   交易状态列表
   * dateReg    -   时间格式正则
   */
  data: {
    limit: 10, 
    offset: 1, 
    state: '', 
    date: '{{new Date()}}', 
    startDate: '', 
    endDate: '', 
    listData: [], 
    hasmore: false, 
    hasmoredata: false, 
    hasnomore: false, 
    open: false, 
    text: "所有交易", 
    list: [
      { text: "所有交易", type: '' }, 
      { text: "支付成功", type: 1 }, 
      { text: "退款成功", type: 3 }, 
      { text: "部分退款", type: 6}
    ], 
    dateReg: /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/, 
  },


  // openlist 点击交易状态
  openlist: function(){
    (!this.data.open) ? this.setData({open: true}): this.setData({open: false})
    console.log(this.data.open)
  },
  // 交易状态选择
  chooseone: function(e){
    // console.log(e)
    this.setData(e.target.dataset)
    console.log(this.data.text)
    this.setData({open: false})
    console.log(this.data.state)
  },


  // 交易状态选择
  radioChange: function(e){
    console.log(e.detail.value)
  },

  // 开始时间
  starttime: function(e){
    this.setData({
      startDate: e.detail.value
    })
    console.log(this.data.startDate)
    /*{
      let dateReg = /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/,
        endDate = this.data.endDate,
        startDate = this.data.startDate
      if (startDate && dateReg.test(startDate)) {
        end = startDate.split('-').map(item => parseInt(item))
        start = startDate.split('-').map(item => parseInt(item))
        if(start[2])
        end[2] += 3
        this.setData({
          endDate: endDate.join('-')
        })
      }
      console.log(this.data.endDate, this.data.startDate)
    }
    */
    
    
  },
  // 结束时间
  endtime: function (e) {
    this.setData({
      endDate: e.detail.value
    })
    // console.log(this.data.endDate) 
    /*
      let dateReg = /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/,
        endDate = this.data.endDate,
        startDate = this.data.startDate
      if (endDate && dateReg.test(endDate)) {
        startDate = endDate.split('-').map(item => parseInt(item))
        startDate[2] -= 3
        this.setData({
          startDate: startDate.join('-')
        })
      }
    */
  },

  // 确定搜索条件
  confirm: function(){
    this.setData({listData: []})

    let that = this,
        token = this.data.token
    console.log(token)
    if(!token || token == 'undefined') {
      wx.showModal({
        title: '请先登录',
        content: '登录后可查询',
        showCancel: false,
      })
      return 
    }
    
      if (!that.data.startDate){
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
    

    console.log(that.data)

    wx.showLoading({
      title: 'searching...',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    
    /** 
     * @params 返回参数
     * tradedt - 交易确认时间
     * merchantName - 商户名称
     * passwayId - 通道
     * orders - 订单号
     * sum - 交易金额
     * stateName - 交易状态

     * fee - 手续费
     * rate - 费率
     * refundsum - 退款金额
     * tradeNo - 钱包方订单号
     * typeName - 交易类型
     */
    wx.request({
      // https://www.shouzan365.com/back/tradeBlotter/page?limit=10000000&offset=1&startDate=2017-12-01&endDate=2017-12-31
      url: 'https://www.shouzan365.com/back/tradeBlotter/page',
      data: {
        limit: 10,
        offset: 1,
        type: that.data.state,
        startDate: that.data.startDate,
        endDate: that.data.endDate,
        token
      },
      header: {
        'access-token': token
      },
      method: "GET",
      dataType: "json",
      success: function(res) {
        setTimeout(function(){
          wx.hideLoading()
        }, 1000)

        console.log(res)
        console.log(res.data.rows)
        that.setData({
          listData: res.data.rows
        })
        console.log(that.data.listData)
        if(res.data.total > that.data.listData.length){
          that.setData({hasmore: true})
        } else {
          that.setData({hasmore: false})
        }
      },
      fail: function(res) {},
      complete: function(res) {
        
      },
    })
  },

  // 上拉加载
  lower: function () {
    
    let that = this,
        token = this.data.token,
        hasmore = this.data.hasmore

    wx.showLoading({
      title: 'searching...',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

    if(hasmore){
      that.setData({hasmore: false, hasmoredata:true, hasnomore: false})
      console.log(that.data.hasmoredata, that.data.hasnomore)  

      ++this.data.offset

      wx.request({
        url: 'https://www.shouzan365.com/back/tradeBlotter/page',
        data: {
          limit: 10,
          offset: that.data.offset,
          type: that.data.state,
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

          /**设置定时器，防止一次上拉多次加载 */
          setTimeout(function () {
            that.setData({ hasmore: true, hasmoredata: false})
          }, 1000)

          that.setData({hasnomore: false })

          if (res.data.total <= that.data.listData.length) {
            that.setData({hasmore: false, hasmoredata: false, hasnomore: true })
            console.log(that.data.hasmoredata, that.data.hasnomore)
          }else{
            that.setData({hasmore: true})
          }
          
        },
        fail: function (res) { },
        complete: function (res) {
          
        },
      })
    }      
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})