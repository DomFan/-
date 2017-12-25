// index.js 上传文件页面

// let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    token: '',
    userId: '',
    merchantName: '', //商户名称
    address: '', //商户地址
    linkman: '', //联系人
    lkmphone: '', //电话
    fileList: new Array(10), // 文件列表
    userName: '', // 为商户设置名称
    passWord: '', // 为商户设置密码
    // urls: new Array(10),
    urls: ['1','1','1','1','1','1','1','1','1','1'],
    nameArr: ["营业执照", "组织代码证", "法人持证件照", "身份证正面", "身份证反面", "特殊资质一", "特殊资质二", "特殊资质三", "特殊资质四", "特殊资质五"],

    buslicence: '', // 营业执照图片
    orgcode: '', // 组织代码图片
    lawholder: '', // 法人持证件照图片
    frontid: '', // 身份证正面照片
    backid: '', // 身份证反面照片
    spequalifione: '', // 特殊资质一图片
    spequalifitwo: '', // 特殊资质二图片
    spequalifithree: '', // 特殊资质三图片
    spequalififour: '', // 特殊资质四图片
    spequalififive: '', // 特殊资质五图片
  },

  /* 获取input输入值 */
  /* 商户 */
  nameinput: function (e) {
    this.setData({
      merchantName: e.detail.value
    })
    console.log(e.detail.value, '---' ,this.data.merchantName)
  },
  /* 地址 */
  addressinput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  /* 联系人 */
  personinput: function (e) {
    this.setData({
      linkman: e.detail.value
    })
  },
  /* 电话 */
  phoneinput: function (e) {
    this.setData({
      lkmphone: e.detail.value
    })
  },
  /* 商户登录名 */
  phoneinput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  /* 商户登录密码 */
  phoneinput: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },
  
  /**上传图片  */
  uploadpic: function (index, urls, indexName, userId) { // 索引，本地图片地址， 当前栏， 用户ID
    console.log(indexName)
    let that = this,
        token = that.data.token
    // 选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        // urls 清除元素 添加元素
        urls.splice(index, 1, src)
        // console.log(that.data.urls)
        // console.log(res.tempFilePaths)
        console.log(src)
        // 上传文件
        wx.uploadFile({
          url: 'http://192.168.98.179/back/accepagent/fileUpload',
          filePath: src,
          name: 'book', // 文件类型 需设置为 book
          header: {
            'content-type': 'multipart/form-data',
            'access-token': token
          },
          formData: {},
          success: function (res) {
            console.log('upload success', res)
            // console.log(res.data)
            let data = JSON.parse(res.data) // 将JSON字符串 转换成对象格式
            console.log(data)
            switch (index) {
              case 0: 
                that.setData({
                  buslicence: data.msg
                })
                break
              case 1:
                that.setData({
                  orgcode: data.msg
                })
                break
              case 2:
                that.setData({
                  lawholder: data.msg
                })
                break
              case 3:
                that.setData({
                  frontid: data.msg
                })
                break
              case 4:
                that.setData({
                  backid: data.msg
                })
                break
              case 5:
                that.setData({
                  spequalifione: data.msg
                })
                break
              case 6:
                that.setData({
                  spequalifitwo: data.msg
                })
                break
              case 7:
                that.setData({
                  spequalifithree: data.msg
                })
                break
              case 8:
                that.setData({
                  spequalififour: data.msg
                })
                break
              case 9:
                that.setData({
                  spequalififive: data.msg
                })
                break
            }

            
            // console.log(data, res.data, res.data.msg, that.data.buslicence)

            let fileList = that.data.fileList,
                file = data.msg
            fileList.splice(index, 1, file)
            console.log(fileList, file, that.data.buslicence)
          },
          fail: function (res) {
            console.log('upload fail', res)
            // console.log(res, 'fail', name, indexName, this.formData, this.filePath, that)
          },
          complete: function (res) {
            console.log('upload complete', res)
            // console.log('uploadfiles---', index, urls, res)
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

    if(!this.data.merchantName){
      wx.showToast({
        title: '请填写商户名称',
        icon: 'loading',
      })
      return
    }
    if (!this.data.address) {
      wx.showToast({
        title: '请填写商户地址',
        icon: 'loading',
      })
      return
    }
    if (!this.data.linkman) {
      wx.showToast({
        title: '请填写联系人名称',
        icon: 'loading',
      })
      return
    }
    if (!this.data.lkmphone) {
      wx.showToast({
        title: '请填写联系人电话',
        icon: 'loading',
      })
      return
    }

    wx.request({
      url: 'http://192.168.98.179/back/merchantinfoController/save',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'access-token': token
      },
      data: {
        merchantName: that.data.merchantName, // 商户名
        linkman: that.data.linkman, // 商户联系人
        lkmphone: that.data.lkmphone, // 商户联系方式
        address: that.data.address, // 商户地址
        merchantStname: that.data.merchantName, // 商户名简称
        userName: that.data.userName, // 为商户设置用户名
        passWord: that.data.passWord, // 为商户设置密码
        urls: that.data.urls // 
      },
      success: function (res) {
        // console.log(that.data.merchantName)
        console.log(res.data)
        console.log(res)
        // data:{ rel: true }, errMsg: "request:ok", header: { Expires: "0", Cache - Control: "no-cache, no-store, max-age=0, must-revalidate", Set - Cookie: SESSION=13ca18d1-4fe1-4743-848a-3fcc9a28dae8; path=/; HttpOnly", X - XSS - Protection: "1; mode=block", Pragma: "no-cache", … }, statusCode: 200


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
      username: options.userName,
      password: options.userPassword,
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
