// index.js 上传文件页面

// let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userPassword: '',
    token: '',
    userId: '',
    sellerName: '', //商户名称
    sellerAddress: '', //商户地址
    sellerPerson: '', //联系人
    sellerPhone: '', //电话
    
    // urls: new Array(10),
    urls: ['1','1','1','1','1','1','1','1','1','1'],
    nameArr: ["营业执照", "组织代码证", "法人持证件照", "身份证正面", "身份证反面", "特殊资质一", "特殊资质二", "特殊资质三", "特殊资质四", "特殊资质五"]
  },

  /* 获取input输入值 */
  /* 商户 */
  nameinput: function (e) {
    this.setData({
      sellerName: e.detail.value
    })
    console.log(e.detail.value, '---' ,this.data.sellerName)
  },
  /* 地址 */
  addressinput: function (e) {
    this.setData({
      sellerAddress: e.detail.value
    })
  },
  /* 联系人 */
  personinput: function (e) {
    this.setData({
      sellerPerson: e.detail.value
    })
  },
  /* 电话 */
  phoneinput: function (e) {
    this.setData({
      sellerPhone: e.detail.value
    })
  },
  
  /**上传图片  */
  uploadpic: function (index, urls, indexName, userId) { // 索引，本地图片地址， 当前栏， 用户ID
    console.log(indexName)
    let that = this
    // 选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        // urls 清除元素 添加元素
        urls.splice(index, 1, src)
        console.log(that.data.urls)
        console.log(res.tempFilePaths)
        console.log(src)
        // 上传文件
        wx.uploadFile({
          url: 'http://localhost:3000/uploadfile',
          method: 'POST',
          filePath: src,
          name: indexName,
          header: {
            'access-token': that.data.token
          },
          formData: {
            id: userId,
            indexName: indexName,
          },
          success: function (res) {
            console.log(res.data)
          },
          fail: function (res) {
            console.log(res, 'fail', name, indexName, this.formData, this.filePath, that)
          },
          complete: function (res) {
            console.log('uploadfiles---', index, urls, that.data)
          },
        })

      }
    })
  },

  /**预览图片 */
  lookpic: function (index, urls) {
    // console.log(urls[index])
    if (urls[index] != '1') {
      wx.previewImage({
        current: urls[index],
        urls: urls,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.showToast({
        title: '请先上传文件',
        icon: 'loading',
        image: '',
        duration: 1000,
        mask: false,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }


    /** 
    wx.navigateTo({
      url: '../pic/pic',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    */
  },

  /**上传图片 0 */
  uploadpic0: function(){
   this.uploadpic(0, this.data.urls, this.data.nameArr[0], this.data.userId)
  },

  /*
  * 点击预览 0
  */
  lookpic0: function() {
    this.lookpic(0, this.data.urls)
  },
  /**
   * 上传图片 1
   */
  uploadpic1: function () {
    let urls = this.data.urls,
        nameArr = this.data.nameArr,
        userId = this.data.userId
    if(urls[0] == '1'){
      wx.showModal({
        title: '提示',
        content: `请先上传` + nameArr[0],
      })
      
    }else {
      this.uploadpic(1, urls, nameArr[1], userId)
    }
  },

  /**点击预览 1 */
  lookpic1: function(){
    this.lookpic(1, this.data.urls)
    // console.log('预览 1111')
  },
  uploadpic2: function () {
    let urls = this.data.urls,
      nameArr = this.data.nameArr,
      userId = this.data.userId
    if (!urls[1]) {
      wx.showModal({
        title: '提示',
        content: '请先上传' + nameArr[1],
      })

    } else {
      this.uploadpic(2, urls, nameArr[2], userId)
    }
  },
  lookpic2: function () {
    this.lookpic(2, this.data.urls)
  },
  uploadpic3: function () {
    let urls = this.data.urls,
      nameArr = this.data.nameArr,
      userId = this.data.userId
    if (!urls[2]) {
      wx.showModal({
        title: '提示',
        content: '请先上传' + nameArr[2],
      })

    } else {
      this.uploadpic(3, urls, nameArr[3], userId)
    }
  },
  lookpic3: function () {
    this.lookpic(3, this.data.urls)
  },
  uploadpic4: function () {
    let urls = this.data.urls,
      nameArr = this.data.nameArr,
      userId = this.data.userId
    if (!urls[3]) {
      wx.showModal({
        title: '提示',
        content: '请先上传' + nameArr[3],
      })

    } else {
      this.uploadpic(4, urls, nameArr[4], userId)
    }
  },
  lookpic4: function () {
    this.lookpic(4, this.data.urls)
  },
  uploadpic5: function () {
    let urls = this.data.urls,
      nameArr = this.data.nameArr,
      userId = this.data.userId
    if (!urls[4]) {
      wx.showModal({
        title: '提示',
        content: '请先上传' + nameArr[4],
      })

    } else {
      this.uploadpic(5, urls, nameArr[5], userId)
    }
  },
  lookpic5: function () {
    this.lookpic(5, this.data.urls)
  },
  uploadpic6: function () {
    this.uploadpic(6, this.data.urls, this.data.nameArr[6], this.data.userId)
  },
  lookpic6: function () {
    this.lookpic(6, this.data.urls)
  },
  uploadpic7: function () {
    this.uploadpic(7, this.data.urls, this.data.nameArr[7], this.data.userId)
  },
  lookpic7: function () {
    this.lookpic(7, this.data.urls)
  },
  uploadpic8: function () {
    this.uploadpic(8, this.data.urls, this.data.nameArr[8], this.data.userId)
  },
  lookpic8: function () {
    this.lookpic(8, this.data.urls)
  },
  uploadpic9: function () {
    this.uploadpic(9, this.data.urls, this.data.nameArr[9], this.data.userId)
  },
  lookpic9: function () {
    this.lookpic(9, this.data.urls)
  },

  /*
  * 确认提交
  */
  submitcfm: function (e) {
    let data = this.data,
        that = this,
        token = this.data.token
    if (!token || token == 'undefined') {
      wx.showModal({
        title: '请先登录',
        content: '登录后可添加',
        showCancel: false,
      })
      return
    }

    if(!this.data.sellerName){
      wx.showToast({
        title: '请填写商户名称',
        icon: 'loading',
      })
      return
    }
    if (!this.data.sellerAddress) {
      wx.showToast({
        title: '请填写商户地址',
        icon: 'loading',
      })
      return
    }
    if (!this.data.sellerPerson) {
      wx.showToast({
        title: '请填写联系人名称',
        icon: 'loading',
      })
      return
    }
    if (!this.data.sellerPhone) {
      wx.showToast({
        title: '请填写联系人电话',
        icon: 'loading',
      })
      return
    }

    wx.request({
      url: 'https://www.shouzan365.com/back/merchantinfoController/save',
      method: 'POST',
      header: {
        'access-token': token
      },
      data: {
        merchantName: that.data.sellerName,
        linkman: that.data.sellerPerson,
        lkmphone: that.data.sellerPhone,
        address: that.data.sellerAddress,
        merchantStname: that.data.sellerName
      },
      success: function (res) {
        // console.log(that.data.sellerName)
        console.log(res.data)
        wx.navigateTo({
          url: '../submitSuccess/submitSuccess',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) {  },
        })
      }

    })
    
  },

  /**表单提交 */
  formSubmit: function(e) {
    console.log(this.data, e.detail.value)
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
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

})
