// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   * @params
   * token 
   * userName     -   用户名 
   * userPassword -   密码
   * inputName    -   输入de用户名 
   * inputPassword-   输入de密码
   * name         -   返回的用户名
   */
  data: {
    islogin: false,
    token: "",
    userName: "",
    userPassword: "",
    inputName: "",
    inputPassword: "",
    name: "",
  },

  /**用户名 */
  nameInput: function(e) {
    let val = e.detail.value,
      reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
      value = val.replace(reg, '')
    this.setData({
      inputName: value
    })
    console.log('用户名'+this.data.inputName)
    return value
  },

  /**密码 */
  pswdInput: function (e) {
    let val = e.detail.value,
      reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
      value = val.replace(reg, '')
    this.setData({
      inputPassword: value
    })
    console.log('密码'+this.data.inputPassword)
    return value
  },

  /**
   * 登录按钮
   */
  loginbtn: function (e) {
    let that = this
    console.log(e)
    let token = this.data.token,
        nameInput = this.data.inputName,
        passwordInput = this.data.inputPassword,
        userName = this.data.userName,
        userPassword = this.data.userPassword
    
    if (nameInput === '') {
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
        confirmText: '确定',
      })
      return false
    }
    if (passwordInput === '') {
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel: false,
        confirmText: '确定',
      })
      return false
    }
    wx.showLoading({
      title: 'loading...',
      mask: true,
    })
    
    wx.request({
      // url: 'http://192.168.98.179/api/jwt/auth',
      url: 'https://www.shouzan365.com/api/jwt/auth',
      method: 'POST',
      data: {
        username: that.data.inputName,
        password: that.data.inputPassword,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'access-token':  token
      },
      success: function (res) {
        console.log(res, res.data)

        if(res.statusCode === 200 && res.data.token){
          setTimeout(function () {
            wx.hideLoading()
          }, 0)
         
          that.setData({
            userName: nameInput,
            userPassword: passwordInput,
            token: res.data.token,  
          })

          let toke = res.data.token
          wx.request({
            url: 'https://www.shouzan365.com/back/user',
            header: {
              'access-token': toke
            },
            method: "GET",
            dataType: "json",
            success: function (res) {
              console.log(res)
              that.setData({name: res.data.name})
              wx.redirectTo({
                url: '../home/home?userName=' + that.data.userName + '&userPassword=' + that.data.userPassword + '&token=' + that.data.token + '&name=' + that.data.name,
                success: function (res) {
                  console.log(that.data)
                },
              })
            }
          })
          
        } else if (!res.data.token) {
          wx.hideLoading()

          wx.showModal({
            title: '提示',
            content: '用户名或密码错误',
            showCancel: false
          })
        }
      },
      fail: function (res) {
        console.log('loading fail')
        wx.hideLoading()
        wx.showModal({
          title: 'tip',
          content: res.data,
          showCancel: false,
        })
      },
      complete: function(){}
    })
  },
  /**
   * 退出登录
   */
  exitbtn: function(){
    this.setData({
      islogin: false,
      token: '',
      userName: '',
      userPassword: '',
    })
    wx.navigateBack({
      delta: 5
    })
  },

  /**
   * 返回上一页
   */
  backoff: function () {
    wx.navigateBack({
      delta: 1,
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
    console.log(options)
    if(this.data.token != "undefined"){
      this.setData({islogin: true})
    } else {
      this.setData({islogin: false})
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { 
    if (this.data.holdOn === true) {
      wx.navigateTo({
        url: '../index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },



})