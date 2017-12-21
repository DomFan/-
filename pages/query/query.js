// pages/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '{{new Date()}}',
    startDate: '',
    endDate: '',
    listData: [], // 查询列表
    open: false, // 是否开启交易类别列表
    text: "所有交易", // 交易类别
    list: ["所有交易","交易成功","退款"],
    // listData: [{
    //   tradedt: "2017-12-20 17:21:02", // 交易确认时间
    //   merchantName: "支付测试", // 商户名称
    //   passwayId: "微信", // 通道
    //   orders: "202017122017210159540768", // 订单号
    //   sum: 0.01, // 交易金额
    //   stateName: "支付成功",// 交易状态

    //   fee: 0.00006, //手续费
    //   rate: 0.006, // 费率
    //   refundsum: 0, // 退款金额
    //   tradeNo: "4200000027201712207895653733", // 钱包方订单号
    //   typeName: "收款"// 交易类型
    // }]
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
    if(this.data.endDate){

    }
  },
  // 结束时间
  endtime: function (e) {
    this.setData({
      endDate: e.detail.value
    })
    console.log(this.data.endDate)    
  },

  // 确定搜索条件
  confirm: function(){

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

    console.log(that.data)

    wx.request({
      // https://www.shouzan365.com/back/tradeBlotter/page?limit=10&offset=1&startDate=2017-12-01&endDate=2017-12-31
      url: 'https://www.shouzan365.com/back/tradeBlotter/page?startDate='+ that.data.startDate +'&endDate='+ that.data.endDate +'&token='+ token,
      data: {
        limit: 10,
        offset: 1,
        text: that.data.text,
        startDate: that.data.startDate,
        endDate: that.data.endDate
      },
      header: {
        'access-token': token
      },
      method: "GET",
      dataType: "json",
      success: function(res) {
        console.log(res)
        console.log(res.data.rows)
        that.setData({
          listData: res.data.rows
        })
        console.log(that.data.listData)
      },
      fail: function(res) {},
      complete: function(res) {
        
      },
    })
  },







  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userName: options.userName,
      userPassword: options.userPassword,
      token: options.token
    })
    console.log(options)
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