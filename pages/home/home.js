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
    isDB: '', //是地推人员
    isServer: '', //是服务商
    isMerchant: '', //是商户
    useris: ''
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
        console.log('去登录', token, '---')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  home: function(){
    let token = this.data.token,
      userName = this.data.userName,
      userPassword = this.data.userPassword,
      name = this.data.name,
      isDB = this.data.isDB,
      isServer = this.data.isServer,
      isMerchant = this.data.isMerchant
    wx.redirectTo({
      url: '../home/home?userName=' + userName + '&userPassword=' + userPassword + '&token=' + token + '&name=' + name + '&isDB=' + isDB + '&isServer=' + isServer + '&isMerchant' + isMerchant,
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
  // 汇总页
  clickGather:function () {
    let token = this.data.token,
      userName = this.data.userName,
      userPassword = this.data.userPassword
    wx.navigateTo({
      url: '../gather/gather?userName=' + userName + '&userPassword=' + userPassword + '&token=' + token,
      success: function (res) {
        // console.log(that.data)
        // console.log('go to search---', userName, userPassword, token)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  
  // 跳转到当前页
  noUse: function () {
    console.log('no use btn')
    // wx.redirectTo({
    //   url: './home?userName=' + userName + '&userPassword=' + userPassword + '&token='+ token+ '&name=' + name + '&isDB=' + isDB + '&isServer=' + isServer + '&isMerchant' + isMerchant,
    //   success: function (res) {
    //     console.log(2)
    //   },
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if(!options.token){
    //   this.setData({name: this.data.username, isServer:false, isDB: true, isMerchant: false})
    // }
    if(options.token){
      this.setData({
        userName: options.userName,
        userPassword: options.userPassword,
        token: options.token,
        name: options.name,
        isServer: options.isServer,
        isMerchant: options.isMerchant,
        isDB: options.isDB,
      })
    } else {
      this.setData({ name: this.data.username, isServer: "true", isDB: '', isMerchant: ''})
    }
    // console.log(options)
    // console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data)
    // console.log(this.data.isMerchant == 'true')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(this.data)
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