// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */ 
  data: {
    token: '',
    userName: '',
    userPassword: '',
    list: ["进件", "查账", "其他", "其他", "其他", "其他", "其他", "其他","其他"],
    username: '请登录', // administrator
    name: '',
    isDB: true,
    isServer: false,
    isMerchant: false,
  },
  login: function(){
    // console.log(this.data)
    let token = this.data.token,
        userName = this.data.userName,
        userPassword = this.data.userPassword,
        name = this.data.name
    wx.navigateTo({
      url: '../login/login?userName='+ userName+ '&userPassword='+ userPassword+ '&token=' +token + '&name='+ name,
      success: function(res) {
        console.log('去登录')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  home: function(){
    let token = this.data.token,
      userName = this.data.userName,
      userPassword = this.data.userPassword,
      name = this.data.name
    wx.redirectTo({
      url: '../home/home?userName=' + userName + '&userPassword=' + userPassword + '&token=' + token + '&name=' +name,
      success: function(res) {
        console.log('去首页')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  // 点击跳转
  // 上传页
  clickUpload: function(){
    let token = this.data.token,
        userName = this.data.userName,
        userPassword = this.data.userPassword
    // console.log(0, this.data)
    wx.navigateTo({
      url: '../index/index?userName=' + userName + '&userPassword=' + userPassword + '&token=' + token,
      success: function(res) {
        // console.log('go to index---', userName, userPassword, token)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 查账页
  clickQuery: function(){
    let token = this.data.token,
        userName = this.data.userName,
        userPassword = this.data.userPassword
    wx.navigateTo({
      url: '../query/query?userName=' + userName + '&userPassword=' + userPassword + '&token='+ token,
      success: function(res) {
        // console.log(that.data)
        // console.log('go to search---', userName, userPassword, token)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  
  // 跳转到当前页
  noUse: function () {
    wx.redirectTo({
      url: './home',
      success: function (res) {
        console.log(2)
      },
      fail: function (res) { },
      complete: function (res) { },
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
      name: options.name
    })
    if(!options.token){
      this.setData({name: this.data.username})
    }
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
    wx.stopPullDownRefresh()
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