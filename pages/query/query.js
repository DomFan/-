// pages/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '{{new Date()}}',
    startdate: '开始时间',
    enddate: '结束时间',
  },

  // 开始时间
  starttime: function(e){
    this.setData({
      startdate: e.detail.value
    })
  },
  // 结束时间
  endtime: function (e) {
    this.setData({
      enddate: e.detail.value
    })
  },

  // 确定时间范围
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