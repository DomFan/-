// pages/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    date: '{{new Date()}}',
    startdate: '开始时间',
    enddate: '结束时间',
    listData: [
      {"time": "2012-01-01", "name": "name1", "road": "alipay", "num": "0123456789", "money": "456.00", "status": "success"},
      {"time": "2012-01-02", "name": "name2", "road": "alipay", "num": "0123456789", "money": "123.12", "status": "success"},
      {"time": "2012-01-03", "name": "name3", "road": "wechat", "num": "0123456789", "money": "789.01", "status": "backoff"},
      {"time": "2012-01-04", "name": "name4", "road": "alipay", "num": "0123456789", "money": "0.12", "status": "success"},
      {"time": "2012-01-05", "name": "name5", "road": "alipay", "num": "0123456789", "money": "45678.21", "status": "backoff"},
      {"time": "2012-01-06", "name": "name6", "road": "wechat", "num": "0123456789", "money": "6.00", "status": "success"},
      { "time": "2012-01-01", "name": "name1", "road": "alipay", "num": "0123456789", "money": "456.00", "status": "success" },
      { "time": "2012-01-02", "name": "name2", "road": "alipay", "num": "0123456789", "money": "123.12", "status": "success" },
      { "time": "2012-01-03", "name": "name3", "road": "wechat", "num": "0123456789", "money": "789.01", "status": "backoff" },
      { "time": "2012-01-04", "name": "name4", "road": "alipay", "num": "0123456789", "money": "0.12", "status": "success" },
    ],
    open: false,
    text: "所有交易",
    list: ["所有交易","交易成功","退款"],
    
    
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
      startdate: e.detail.value
    })
    console.log(this.data.startdate)
  },
  // 结束时间
  endtime: function (e) {
    this.setData({
      enddate: e.detail.value
    })
    console.log(this.data.enddate)    
  },

  // 确定搜索条件
  confirm: function(){
    
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