// index.js 上传文件页面

// let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 'admin',
    userPassword: null,
    sellerName: '', //商户名称
    sellerAddress: '', //商户地址
    sellerPerson: '', //联系人
    sellerPhone: '', //电话
    imageurl: '',
    url: '',
    urls: new Array(10),
    nameArr: ["营业执照", "组织代码证", "法人持证件照", "身份证正面", "身份证反面", "特殊资质一", "特殊资质二", "特殊资质三", "特殊资质四", "特殊资质五"]
  },

  /* 获取input输入值 */
  /* 商户 */
  nameinput: function (e) {
    this.setData({
      sellerName: e.detail.value
    })
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

        console.log(res.tempFilePaths)
        console.log(src)
        // 上传文件
        wx.uploadFile({
          url: 'http://localhost:3000/uploadfile',
          method: 'POST',
          filePath: src,
          name: indexName,
          header: {},
          formData: {
            id: userId,
            indexName,

          },
          success: function (res) {
            console.log(name, this.formData)
          },
          fail: function (res) {
            console.log(res, 'fail', name, indexName, this.formData, this.filePath, that)
            //{errMsg: "uploadFile:fail Error: connect ECONNREFUSED 192.157.208.178:443"}errMsg: "uploadFile:fail Error: connect ECONNREFUSED 192.157.208.178:443"__proto__: Object "fail" "" undefined undefined
          },
          complete: function (res) { },
        })

      }
    })
  },

  /**预览图片 */
  lookpic: function (index, urls) {
    // console.log(urls[index])
    if (urls[index]) {
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
    
    /** 
    wx.chooseImage({
      success: function(res){
      
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://localhost:3000/uploadfile', //ceshi
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'application/json' // 默认值
          },
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
            console.log(res, this, this.formData, this.data)
            console.log(data)
            that.setData({
              imageurl: filePath
            })
          }
        })

      }
    })
    */
    
    /** 
    var urls = this.data.urls,
        index = 0
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        // console.log(src, res, urls)

        // urls 清除第一个元素 添加元素
        if(urls[index]){
          urls.splice(index, 1, src)
        }else {
          urls.push(src)
        }
        
        wx.redirectTo({
          url: `../pic/pic?src=${src}`,
          success: function(){
            urls.push(src)
            that.setData({
              urls: urls
            })
            console.log(that.data.urls)
          }
        })
        
      }
    })
    */
    
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
    this.uploadpic(1, this.data.urls, this.data.nameArr[1], this.data.userId)
  },

  /**点击预览 1 */
  lookpic1: function(){
    this.lookpic(1, this.data.urls)
    // console.log('预览 1111')
  },
  uploadpic2: function () {
    this.uploadpic(2, this.data.urls, this.data.nameArr[2], this.data.userId)
  },
  lookpic2: function () {
    this.lookpic(2, this.data.urls)
  },
  uploadpic3: function () {
    this.uploadpic(3, this.data.urls, this.data.nameArr[3], this.data.userId)
  },
  lookpic3: function () {
    this.lookpic(3, this.data.urls)
  },
  uploadpic4: function () {
    this.uploadpic(4, this.data.urls, this.data.nameArr[4], this.data.userId)
  },
  lookpic4: function () {
    this.lookpic(4, this.data.urls)
  },
  uploadpic5: function () {
    this.uploadpic(5, this.data.urls, this.data.nameArr[5], this.data.userId)
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
        that = this
    wx.request({
      url: 'http://localhost:3000/submitfile',
      method: 'POST',
      data: data,
      success: function () {
        console.log(data)
        wx.navigateTo({
          url: '../submitSuccess/submitSuccess',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
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
    
  },

})
