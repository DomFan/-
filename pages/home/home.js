// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    list: ["上传", "查账", "其他", "其他", "其他", "其他", "其他", "其他","其他"],
    username: 'administrator',
  },

  login: function(){
    wx.navigateTo({
      url: '../login/login',
      success: function(res) {
        console.log('去登录')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  home: function(){
    wx.redirectTo({
      url: '../home/home',
      success: function(res) {
        console.log('去首页')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  // 点击跳转
  // 上传页
  click0: function(){
    console.log(0)
    wx.navigateTo({
      url: '../index/index',
      success: function(res) {
        console.log('go to index')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 查账页
  click1: function(){
    wx.navigateTo({
      url: '../query/query',
      success: function(res) {
        console.log(1)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  click2: function () {
    wx.redirectTo({
      url: './home',
      success: function (res) {
        console.log(2)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  click3: function () {
    wx.redirectTo({
      url: './home',
      success: function (res) {
        console.log(3)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  click4: function () {
    wx.redirectTo({
      url: './home',
      success: function (res) {
        console.log(4)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  click5: function () {
    wx.redirectTo({
      url: './home',
      success: function (res) {
        console.log(5)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  click6: function () {
    wx.redirectTo({
      url: './home',
      success: function (res) {
        console.log(6)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  click7: function () {
    wx.redirectTo({
      url: './home',
      success: function (res) {
        console.log(7)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  click8: function () {
    wx.navigateTo({
      url: '../home/home',
      success: function (res) {
        console.log(8)
      },
      fail: function (res) { },
      complete: function (res) { },
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