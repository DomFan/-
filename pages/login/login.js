// pages/login/login.js

const util = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   * @params
   * id 用户ID
   * token 
   * userName 用户名 userPassword 密码
   * inputName 输入用户名 inputPassword 输入密码
   * 
   */
  data: {
    id: "",
    token: "",
    userName: "",
    userPassword: "",
    inputName: "",
    inputPassword: "",
    
  },

  
  /**用户名 */
  nameInput: function(e) {
    this.setData({
      inputName: util.trim(e.detail.value)
    })
    // console.log(this.data.inputName)
  },

  /**密码 */
  pswdInput: function (e) {
    this.setData({
      inputPassword: util.trim(e.detail.value)
    })
    // console.log(this.data.inputPassword)
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
        content: '用户名为空，请重新输入',
        showCancel: false,
        confirmText: '确定',
      })
      return false
    }
    if (passwordInput === '') {
      wx.showModal({
        title: '提示',
        content: '密码为空，请重新输入',
        showCancel: false,
        confirmText: '确定',
      })
      return false
    }
    wx.request({
      url: 'http://192.168.98.179/api/jwt/auth',
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
        that.setData({
          token: res.data.token
        })
        if(res.statusCode === 200 && res.data.token){
          that.setData({
            userName: nameInput,
            userPassword: passwordInput
          })
          wx.showModal({
            title: '恭喜',
            content: '登录成功',
            showCancel: false,
            success: function () {
              wx.redirectTo({
                url: '../home/home?userName='+that.data.userName+'&userPassword='+ that.data.userPassword+'&token='+ that.data.token,
                success: function(res) {
                  console.log(that.data)
                },
                fail: function(res) {},
                complete: function(res) {},
              })
            }
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '用户名或密码输入错误',
            showCancel: false,
            success: function (e) {

            },
            complete: function (e) {
              console.log(e)
            }
          })
        }
      }
    })
    
  },


  /** */
  usertap: function() {
    console.log('user had clicked')
  },

  /**
   * 注册
   */

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    
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