// pages/login/login.js

const util = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   * @params
   * id 用户ID
   * token 是否记住用户登录
   * userName 用户名 userPassword 密码
   * inputName 输入用户名 inputPassword 输入密码
   * 
   */
  data: {
    id: "",
    token: 0,
    userName: "admin",
    userPassword: "admin",
    inputName: "",
    inputPassword: "",
    nameInput: '',
    passwordInput: '',
  },

  
  /**用户名 */
  nameInput: function(e) {
    this.setData({
      inputName: util.trim(e.detail.value)
    })
  },

  /**密码 */
  pswdInput: function (e) {
    this.setData({
      inputPassword: util.trim(e.detail.value)
    })
  },

  /**记住密码 */
  rmpwd: function (e) {
    this.setData({
      remenberPassword: e.detail.value
    })
  },

  /**保持登录 */
  holdon: function (e) {
    this.setData({
      holdOn: e.detail.value
    })
  },

  /**
   * 登录按钮
   */
  loginbtn: function (e) {
    // console.log('loginbtn', e.detail)
    this.setData({
      nameInput: this.data.inputName,
      passwordInput: this.data.inputPassword,
    })
    console.log(this.data.nameInput, this.data.passwordInput)
    let that = this
    console.log(e)
    let nameInput = this.data.inputName,
        passwordInput = this.data.inputPassword
    
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
    if (nameInput === 'admin' && passwordInput === 'admin') {
      wx.showModal({
        title: '恭喜',
        content: '登录成功',
        showCancel: false,
        success: function () {

          wx.request({
            url: 'http://localhost:3000/api',
            method: 'GET',
            data: that.data,
            header: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              console.log(res, res.data)

            }
          })

          wx.navigateTo({
            url: '../index/index',
            success: function (res) {
              // console.log(that.data, value)
            },
            fail: function (res) {
              // console.log('fail navigateTo index', res)
            },
            complete: function (res) {

            },
          })
        }
      })

    } else {
      wx.showModal({
        title: '提示',
        content: '用户名或密码输入错误',
        showCancel: false,
        success: function (e) {

        }
      })
    }
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