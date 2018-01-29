Page({
  /** 页面的初始数据 */
  data: {
    username: '',
    password: '',
    token: '',
    userId: '',
    merchantName: '',   //商户名称
    merchantStname: '', //商户简称
    address: '',        //商户地址
    linkman: '',        //联系人
    lkmphone: '',       //电话
    lkmemail: '',       //联系人邮箱
    customerTel: '',    //商户客户电话
    fileList: new Array(10), // 文件列表
    userName: '', // 为商户设置名称
    passWord: '', // 为商户设置密码
    passwayIds: '', // 通道类型
    wxindustryId: '', // 微信所属行业ID
    wxsettlerate: '', // 微信结算费率
    zfbindustryId: '', // 支付宝所属行业ID
    zfbsettlerate: '', // 支付宝结算费率
    ischeckWX: false,
    ischeckZFB: false,
    WXlist: [],
    firWXlist: [],
    secWXlist: [],
    thiWXlist: [],
    firWXindex: 0,
    secWXindex: 0,
    thiWXindex: 0,
    final: {},
    animationData: {},
    ZFBlist: [],
    firZFBlist: [],
    secZFBlist: [],
    thiZFBlist: [],
    firZFBindex: 0,
    secZFBindex: 0,
    thiZFBindex: 0,
    finalZ: {},
    animationDataZ: {},
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
    /** 禁止输入特殊字符 只能写入英文 数字 汉字 */
    let val = e.detail.value,
        reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
        value = val.replace(reg, '')
    this.setData({
      merchantName: value
    })
    // console.log(e.detail.value, '--merchantName--', this.data.merchantName)
    return value
  },
  /**商户简称 */
  stnameinput: function(e){
    let val = e.detail.value,
      reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
      value = val.replace(reg, '')
    this.setData({
      merchantStname: value
    })
    // console.log(e.detail.value, '--merchantStname--', this.data.merchantStname)
    return value
  },
  /* 地址 */
  addressinput: function (e) {
    let val = e.detail.value,
      reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
      value = val.replace(reg, '')
    this.setData({
      address: value
    })
    // console.log('11',value, 2, e.detail.value, 3, this.data.address)
    return value
  },
  /* 联系人 */
  personinput: function (e) {
    let val = e.detail.value,
      reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
      value = val.replace(reg, '')
    this.setData({
      linkman: value
    })
    return value
  },
  /* 电话 */
  phoneinput: function (e) {
    let val = e.detail.value,
      reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
      value = val.replace(reg, '')
    this.setData({
      lkmphone: value
    })
    // console.log('phoneinput', this.data.lkmphone)
    return value
  },
  /** 电话格式验证 */
  validatemobile: function (e) {
    let val = e.detail.value
    if (val.length == 0) {
      wx.showModal({
        content: '请输入联系人电话！',
        showCancel: false,
      })
      return false;
    }
    if (val.length != 11) {
      wx.showModal({
        content: '电话长度有误！',
        showCancel: false,
      })
      return false;
    }
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(val)) {
      wx.showModal({
        content: '电话格式有误！',
        showCancel: false,
      })
      return false;
    }
    return true;
  },
  /**联系人邮箱 */
  validateEmail : function (email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'/
    return reg.test(email)
  },
  mailinput: function (e) {
    this.setData({
      lkmemail: e.detail.value
    })
    // console.log('mailinput', this.data.lkmemail)
  },
  emailblur: function(e){
    let val = e.detail.value,
        reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/, 
        //  /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/
        isEmail = reg.test(val)
        
    // console.log(reg.test(val))
    if(!isEmail){
      // console.log('not email')
      wx.showModal({
        content: '请填写正确邮箱',
        showCancel: false,
      })
      this.setData({ lkmemail: ''})
    } else {
      // console.log('email')
      // do nothing
    }
  },
  /**商户客户电话 customerTel */
  serviceinput: function (e) {
    this.setData({
      customerTel: e.detail.value
    })
  },
  /* 商户登录名 */
  userNameinput: function (e) {
    let val = e.detail.value,
      reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
      value = val.replace(reg, '')
    this.setData({
      userName: value
    })
    // console.log('userNameinput', e.detail.value, 'userName', this.data.userName, 'phone', this.data.lkmphone)
    return value
  },
  /* 商户登录密码 */
  passWordinput: function (e) {
    if(!e.detail.value){
      this.setData({passWord : '000000'})
      return
    }
    this.setData({
      passWord: e.detail.value
    })
    // console.log('passWordinput', e.detail.value,'passWord', this.data.passWord)
  },

  /** 通道类型 */
  //wxindustryId   String 否 微信所属行业
  //wxsettlerate BigDecimal 否 微信结算费率
  // 微信
  tapWX: function (e) {
    let that = this,
        check = this.data.ischeckWX,
        token = this.data.token,
        ischeckWX = this.data.ischeckWX,
        ischeckZFB = this.data.ischeckZFB
    check = !check
    this.setData({ischeckWX: check})
    // console.log('ischeckWX', this.data.ischeckWX)
    if(check == true){
      wx.request({
        url: 'https://www.shouzan365.com//back/industry/industrys',
        data: {
          passwayId: '74e1479029544232a218a3e60cb791fc'
        },
        header: {'access-token': token},
        method: 'GET',
        success: function(res) {
          // console.log('WX--res', res)
          that.setData({WXlist: res.data})
          that.cascade()
        },
      })
    }
    
    ischeckWX = that.data.ischeckWX
    ischeckWX && ischeckZFB ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528" }) : (ischeckWX && !ischeckZFB) ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc" }) : (!ischeckWX && ischeckZFB) ? this.setData({ passwayIds: "0c811cd8f6a3453da7eca6e446a54528" }) : this.setData({ passwayIds: "" })
    // console.log("isWX? ", that.data.ischeckWX,'--isZFB? ', ischeckZFB)
    // console.log(this.data.passwayIds)
  },

  //点击事件，点击弹出选择页
  dianji: function () {
    //这里写了一个动画，让其高度变为满屏
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    if (!this.data.token) {
      return
    }
    this.animation = animation
    animation.height(100 + 'vh').step()
    this.setData({
      animationData: animation.export()
    })

  },
  //取消按钮
  quxiao: function () {
    //这里也是动画，然其高度变为0
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.height(0 + 'rpx').step()
    this.setData({
      animationData: animation.export()
    });
    //取消不传值，这里就把final 的值赋值为{}
    this.setData({
      final: {}
    });
    // console.log(this.data.final);
  },
  //确认按钮
  queren: function () {
    //一样是动画，级联选择页消失，效果和取消一样
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.height(0 + 'rpx').step()
    this.setData({
      animationData: animation.export()
    });
    //打印最后选取的结果
    console.log(this.data.final);
    let final = this.data.final,
      fir = final.firWXlist,
      sec = final.secWXlist,
      thi = final.thiWXlist
    if (thi) {
      this.setData({ wxindustryId: thi.id})
    } else if (!thi && sec) {
      this.setData({ wxindustryId: sec.id})
    } else if (!thi && !sec && fir) {
      this.setData({ wxindustryId: fir.id})
    }
    console.log('wxindustryId', this.data.wxindustryId)
  },
  //滚动选择的时候触发事件
  bindChange: function (e) {
    //这里是获取picker-view内的picker-view-column 当前选择的是第几项
    const val = e.detail.value
    this.setData({
      firWXindex: val[0],
      secWXindex: val[1],
      thiWXindex: val[2]
    })
    this.cascade();
    // console.log(val);
    // console.log(this.data.final);
  },
  cascade: function () {
    let that = this,
      WXlist = that.data.WXlist,
      firWXlist = [],
      secWXlist = [],
      thiWXlist = [],
      firWXindex = that.data.firWXindex,
      secWXindex = that.data.secWXindex,
      thiWXindex = that.data.thiWXindex

    for(let i= 0; i<WXlist.length; i++){
      firWXlist.push({ id: WXlist[i].id, industryName: WXlist[i].industryName})
    }
    if (WXlist[firWXindex].children){
      if (WXlist[firWXindex].children[secWXindex]){
        for (let i = 0; i < WXlist[firWXindex].children.length; i++){
          // debugger
          secWXlist.push({ id: WXlist[firWXindex].children[i].id, industryName: WXlist[firWXindex].children[i].industryName})
        }
        if (WXlist[firWXindex].children[secWXindex].children){
          if (WXlist[firWXindex].children[secWXindex].children[thiWXindex]){
            for (let i = 0; i < WXlist[firWXindex].children[secWXindex].children.length; i++){
              thiWXlist.push({ id: WXlist[firWXindex].children[secWXindex].id, industryName: WXlist[firWXindex].children[secWXindex].children[i].industryName})
            }
          } else {
            that.setData({ thiWXindex: 0})
            for (let i = 0; i < WXlist[firWXindex].children[secWXindex].children.length; i++){
              thiWXlist.push({ id: WXlist[firWXindex].children[secWXindex].children[i].id, industryName: WXlist[firWXindex].children[secWXindex].children[i].industryName})
            }
          }
        } else {
          thiWXlist.push({ id: WXlist[firWXindex].children[secWXindex].id, industryName: WXlist[firWXindex].children[secWXindex].industryName})
        }
      } else {
        that.setData({ secWXindex: 0})
        for (let i= 0; i< WXlist[firWXindex].children.length; i++){
          secWXlist.push({ id: WXlist[firWXindex].children[i].id, industryName: WXlist[firWXindex].children[i].industryName})
        }
      }
    } else {
      secWXlist.push({ id: WXlist[firWXindex].id, industryName: WXlist[firWXindex].industryName})
      thiWXlist.push({ id: WXlist[firWXindex].id, industryName: WXlist[firWXindex].industryName})
    }

    that.setData({
      firWXlist,
      secWXlist,
      thiWXlist
    })
    // 内存溢出
    // if (firWXlist.length == 0 || secWXlist.length == 0 || thiWXlist.length == 0) {
    //   that.cascade()
    //   // 执行一次回调
    // }
    let final = {
      firWXlist: firWXlist[that.data.firWXindex],
      secWXlist: secWXlist[that.data.secWXindex],
      thiWXlist: thiWXlist[that.data.thiWXindex]
    }
    that.setData({ final})
  },
  // 微信结算费率
  rateWXinput: function (e) {
    this.setData({ wxsettlerate: e.detail.value})
  },


  // 支付宝
  // zfbindustryId   String 否 支付宝所属行业ID
  // zfbsettlerate   BigDecimal 否 支付宝结算费率
  tapZFB: function () {
    let check = this.data.ischeckZFB,
        token = this.data.token,
        that = this,
        ischeckWX = this.data.ischeckWX,
        ischeckZFB = this.data.ischeckZFB
    check = !check
    this.setData({ ischeckZFB: check })
    // console.log('ischeckZFB', this.data.ischeckZFB)
    if (check) {
      wx.request({
        url: 'https://www.shouzan365.com//back/industry/industrys',
        data: {
          passwayId: '0c811cd8f6a3453da7eca6e446a54528'
        },
        header: { 'access-token': token },
        method: 'GET',
        success: function (res) {
          // console.log('ZFB--res', res)
          that.setData({ ZFBlist: res.data })
          that.cascadeZFB()
        },
      })
    }
    ischeckZFB = that.data.ischeckZFB
    ischeckWX && ischeckZFB ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528" }) : (ischeckWX && !ischeckZFB) ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc" }) : (!ischeckWX && ischeckZFB) ? this.setData({ passwayIds: "0c811cd8f6a3453da7eca6e446a54528" }) : this.setData({ passwayIds: "" })
    // console.log("isWX? ", that.data.ischeckWX, '--isZFB? ', ischeckZFB)
    // console.log(this.data.passwayIds)
  },
  //点击事件，点击弹出选择页
  dianjiZ: function () {
    //这里写了一个动画，让其高度变为满屏
    let animationZ = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    if (!this.data.token) {
      return
    }
    this.animationZ = animationZ
    animationZ.height(100 + 'vh').step()
    // debugger
    this.setData({
      animationDataZ: animationZ.export()
    })
    console.log('dianjiZ')
  },
  //取消按钮
  quxiaoZ: function () {
    //这里也是动画，然其高度变为0
    let animationZ = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    this.animationZ = animationZ
    animationZ.height(0 + 'rpx').step()
    this.setData({
      animationDataZ: animationZ.export()
    });
    //取消不传值，这里就把final 的值赋值为{}
    this.setData({
      finalZ: {}
    });
    // console.log(this.data.finalZ);
  },
  //确认按钮
  querenZ: function () {
    //一样是动画，级联选择页消失，效果和取消一样
    let animationZ = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animationZ = animationZ
    animationZ.height(0 + 'rpx').step()
    this.setData({
      animationDataZ: animationZ.export()
    });
    //打印最后选取的结果
    // console.log(this.data.finalZ);
    let finalZ = this.data.finalZ,
      fir = finalZ.firZFBlist,
      sec = finalZ.secZFBlist,
      thi = finalZ.thiZFBlist
    if (thi) {
      this.setData({ zfbindustryId: thi.id })
    } else if (!thi && sec) {
      this.setData({ zfbindustryId: sec.id })
    } else if (!thi && !sec && fir) {
      this.setData({ zfbindustryId: fir.id })
    }
    // console.log('zfbindustryId', this.data.zfbindustryId)
  },
  //滚动选择的时候触发事件
  bindChangeZ: function (e) {
    //这里是获取picker-view内的picker-view-column 当前选择的是第几项
    const val = e.detail.value
    this.setData({
      firZFBindex: val[0],
      secZFBindex: val[1],
      thiZFBindex: val[2]
    })
    this.cascadeZFB();
    // console.log(val);
    // console.log(this.data.final);
  },
  cascadeZFB: function () {
    let that = this,
      ZFBlist = that.data.ZFBlist,
      firZFBlist = [],
      secZFBlist = [],
      thiZFBlist = [],
      firZFBindex = that.data.firZFBindex,
      secZFBindex = that.data.secZFBindex,
      thiZFBindex = that.data.thiZFBindex

    for (let i = 0; i < ZFBlist.length; i++) {
      firZFBlist.push({ id: ZFBlist[i].id, industryName: ZFBlist[i].industryName })
    }
    if (ZFBlist[firZFBindex].children) {
      if (ZFBlist[firZFBindex].children[secZFBindex]) {
        for (let i = 0; i < ZFBlist[firZFBindex].children.length; i++) {
          // debugger
          secZFBlist.push({ id: ZFBlist[firZFBindex].children[i].id, industryName: ZFBlist[firZFBindex].children[i].industryName })
        }
        if (ZFBlist[firZFBindex].children[secZFBindex].children) {
          if (ZFBlist[firZFBindex].children[secZFBindex].children[thiZFBindex]) {
            for (let i = 0; i < ZFBlist[firZFBindex].children[secZFBindex].children.length; i++) {
              thiZFBlist.push({ id: ZFBlist[firZFBindex].children[secZFBindex].children[i].id, industryName: ZFBlist[firZFBindex].children[secZFBindex].children[i].industryName })
            }
          } else {
            that.setData({ thiZFBindex: 0 })
            for (let i = 0; i < ZFBlist[firZFBindex].children[secZFBindex].children.length; i++) {
              thiZFBlist.push({ id: ZFBlist[firZFBindex].children[secZFBindex].children[i].id, industryName: ZFBlist[firZFBindex].children[secZFBindex].children[i].industryName })
            }
          }
        } else {
          thiZFBlist.push({ id: ZFBlist[firZFBindex].children[secZFBindex].id, industryName: ZFBlist[firZFBindex].children[secZFBindex].industryName })
        }
      } else {
        that.setData({ secZFBindex: 0 })
        for (let i = 0; i < ZFBlist[firZFBindex].children.length; i++) {
          secZFBlist.push({ id: ZFBlist[firZFBindex].children[i].id, industryName: ZFBlist[firZFBindex].children[i].industryName })
        }
      }
    } else {
      secZFBlist.push({ id: ZFBlist[firZFBindex].id, industryName: ZFBlist[firZFBindex].industryName })
      thiZFBlist.push({ id: ZFBlist[firZFBindex].id, industryName: ZFBlist[firZFBindex].industryName })
    }

    that.setData({
      firZFBlist,
      secZFBlist,
      thiZFBlist
    })
    // 内存溢出
    // if (firZFBlist.length == 0 || secZFBlist.length == 0 || thiZFBlist.length == 0) {
    //   that.cascade()
    //   // 执行一次回调
    // }
    let finalZ = {
      firZFBlist: firZFBlist[that.data.firZFBindex],
      secZFBlist: secZFBlist[that.data.secZFBindex],
      thiZFBlist: thiZFBlist[that.data.thiZFBindex]
    }
    that.setData({ finalZ })
  },
  // 支付宝结算费率
  rateZFBinput: function (e) {
    this.setData({ zfbsettlerate: e.detail.value})
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
        // console.log(src)
        // 上传文件
        wx.uploadFile({
          // url: 'http://192.168.98.179/back/accepagent/fileUpload',
          url: 'https://www.shouzan365.com/back/accepagent/fileUpload',
          filePath: src,
          name: 'book', // 文件类型 需设置为 book
          header: {
            'content-type': 'multipart/form-data',
            'access-token': token
          },
          formData: {},
          success: function (res) {
            // console.log('upload success', res)
            // console.log(res.data)
            let data = JSON.parse(res.data) // 将JSON字符串 转换成对象格式
            // console.log(data)
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
            // console.log(fileList, file, that.data.buslicence)
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
        token = this.data.token,
        telreg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
        emailreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/

    if (!token || token == 'undefined') {
      wx.showModal({
        title: '请先登录',
        content: '登录后可添加',
        showCancel: false,
      })
      return
    }
    if(!data.merchantName){
      wx.showToast({
        title: '请填写商户名称',
        icon: 'loading',
      })
      return
    }
    if (!data.merchantStname) {
      wx.showToast({
        title: '请填写商户名称',
        icon: 'loading',
      })
      return
    }
    if (!data.address) {
      wx.showToast({
        title: '请填写商户地址',
        icon: 'loading',
      })
      return
    }
    if (!data.linkman) {
      wx.showToast({
        title: '请填写联系人名称',
        icon: 'loading',
      })
      return
    }
    if (!data.lkmphone) {
      wx.showToast({
        title: '请填写联系人电话',
        icon: 'loading',
      })
      return
    }
    if (!telreg.test(data.lkmphone)) {
      wx.showToast({
        title: '电话格式有误',
        icon: 'loading',
      })
      return
    }
    if (!data.lkmemail) {
      wx.showToast({
        title: '请填写联系人邮箱',
        icon: 'loading',
      })
      return
    }
    if (!emailreg.test(data.lkmemail)) {
      wx.showToast({
        title: '邮箱格式有误',
        icon: 'loading',
      })
      return
    }
    if (!data.customerTel){
      this.setData({ customerTel: this.data.lkmphone})
    }
    if (!data.userName || !data.passWord) {
      if(!data.userName){this.setData({userName: this.data.lkmphone})}
      if(!data.passWord)(this.setData({passWord: '000000'}))
      wx.showModal({
        title: '提示',
        content: '登录名默认为联系人电话，密码默认为000000',
        showCancel: false,
      })
    }
    // if(ischeckWX && ischeckZFB){
    //   this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528"})
    // } else if(ischeckWX && !ischeckZFB){
    //   this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc"})
    // } else if(!ischeckWX && ischeckZFB){
    //   this.setData({ passwayIds: "0c811cd8f6a3453da7eca6e446a54528"})
    // } else {
    //   this.setData({ passwayIds: ""})
    // }
    ischeckWX && ischeckZFB ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528" }) : (ischeckWX && !ischeckZFB) ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc" }) : (!ischeckWX && ischeckZFB) ? this.setData({ passwayIds: "0c811cd8f6a3453da7eca6e446a54528" }) : this.setData({ passwayIds: "" })

    let formdata = {}, passwayIds = this.data.passwayIds
    if (passwayIds = '74e1479029544232a218a3e60cb791fc'){
      if (!this.data.wxindustryId) {
        wx.showModal({
          content: '请选择微信所属行业',
          showCancel: false,
        })
        return
      }
      if (!this.data.wxsettlerate) {
        wx.showModal({
          content: '请填写微信结算费率',
          showCancel: false,
        })
        return
      }
    } else if (passwayIds = '0c811cd8f6a3453da7eca6e446a54528'){
      if (!this.data.zfbindustryId) {
        wx.showModal({
          content: '请选择支付宝所属行业',
          showCancel: false,
        })
        return
      }
      if (!this.data.zfbsettlerate) {
        wx.showModal({
          content: '请填写支付宝结算费率',
          showCancel: false,
        })
        return
      }
    }
    if(!passwayIds || passwayIds == 'undefined'){ // 未选则通道类型
      formdata = {
        merchantName: that.data.merchantName, // 商户名称
        merchantStname: that.data.merchantStname, // 商户名简称
        address: that.data.address, // 商户地址
        linkman: that.data.linkman, // 商户联系人
        lkmphone: that.data.lkmphone, // 联系人电话
        lkmemail: that.data.lkmemail, // 联系人邮箱
        customerTel: that.data.customerTel, //商户客服电话
        userName: that.data.userName, // 为商户设置用户名
        passWord: that.data.passWord, // 为商户设置密码
        buslicence: that.data.buslicence, // 营业执照图片
        orgcode: that.data.orgcode, // 组织代码图片
        lawholder: that.data.lawholder, // 法人持证件照图片
        frontid: that.data.frontid, // 身份证正面照片
        backid: that.data.backid, // 身份证反面照片
        spequalifione: that.data.spequalifione, // 特殊资质一图片
        spequalifitwo: that.data.spequalifitwo, // 特殊资质二图片
        spequalifithree: that.data.spequalifithree, // 特殊资质三图片
        spequalififour: that.data.spequalififour, // 特殊资质四图片
        spequalififive: that.data.spequalififive, // 特殊资质五图片
      }
    } else if (passwayIds = '74e1479029544232a218a3e60cb791fc') { // 通道 微信
      formdata = {
        merchantName: that.data.merchantName, // 商户名称
        merchantStname: that.data.merchantStname, // 商户名简称
        address: that.data.address, // 商户地址
        linkman: that.data.linkman, // 商户联系人
        lkmphone: that.data.lkmphone, // 联系人电话
        lkmemail: that.data.lkmemail, // 联系人邮箱
        customerTel: that.data.customerTel, //商户客服电话
        userName: that.data.userName, // 为商户设置用户名
        passWord: that.data.passWord, // 为商户设置密码
        passwayIds: that.data.passwayIds, // 商户通道类型
        wxindustryId: that.data.wxindustryId, // 微信所属行业ID
        wxsettlerate: that.data.wxsettlerate, // 微信结算费率
        buslicence: that.data.buslicence, // 营业执照图片
        orgcode: that.data.orgcode, // 组织代码图片
        lawholder: that.data.lawholder, // 法人持证件照图片
        frontid: that.data.frontid, // 身份证正面照片
        backid: that.data.backid, // 身份证反面照片
        spequalifione: that.data.spequalifione, // 特殊资质一图片
        spequalifitwo: that.data.spequalifitwo, // 特殊资质二图片
        spequalifithree: that.data.spequalifithree, // 特殊资质三图片
        spequalififour: that.data.spequalififour, // 特殊资质四图片
        spequalififive: that.data.spequalififive, // 特殊资质五图片
      }
    } else if (passwayIds = '0c811cd8f6a3453da7eca6e446a54528') { // 通道 支付宝
      formdata = {
        merchantName: that.data.merchantName, // 商户名称
        merchantStname: that.data.merchantStname, // 商户名简称
        address: that.data.address, // 商户地址
        linkman: that.data.linkman, // 商户联系人
        lkmphone: that.data.lkmphone, // 联系人电话
        lkmemail: that.data.lkmemail, // 联系人邮箱
        customerTel: that.data.customerTel, //商户客服电话
        userName: that.data.userName, // 为商户设置用户名
        passWord: that.data.passWord, // 为商户设置密码
        passwayIds: that.data.passwayIds, // 商户通道类型
        zfbindustryId: that.data.zfbindustryId, // 支付宝所属行业ID
        zfbsettlerate: that.data.zfbsettlerate, // 支付宝结算费率
        buslicence: that.data.buslicence, // 营业执照图片
        orgcode: that.data.orgcode, // 组织代码图片
        lawholder: that.data.lawholder, // 法人持证件照图片
        frontid: that.data.frontid, // 身份证正面照片
        backid: that.data.backid, // 身份证反面照片
        spequalifione: that.data.spequalifione, // 特殊资质一图片
        spequalifitwo: that.data.spequalifitwo, // 特殊资质二图片
        spequalifithree: that.data.spequalifithree, // 特殊资质三图片
        spequalififour: that.data.spequalififour, // 特殊资质四图片
        spequalififive: that.data.spequalififive, // 特殊资质五图片
      }
    } else { // 通道 微信 支付宝
      formdata = {
        merchantName: that.data.merchantName, // 商户名称
        merchantStname: that.data.merchantStname, // 商户名简称
        address: that.data.address, // 商户地址
        linkman: that.data.linkman, // 商户联系人
        lkmphone: that.data.lkmphone, // 联系人电话
        lkmemail: that.data.lkmemail, // 联系人邮箱
        customerTel: that.data.customerTel, //商户客服电话
        userName: that.data.userName, // 为商户设置用户名
        passWord: that.data.passWord, // 为商户设置密码
        passwayIds: that.data.passwayIds, // 商户通道类型
        wxindustryId: that.data.wxindustryId, // 微信所属行业ID
        wxsettlerate: that.data.wxsettlerate, // 微信结算费率
        zfbindustryId: that.data.zfbindustryId, // 支付宝所属行业ID
        zfbsettlerate: that.data.zfbsettlerate, // 支付宝结算费率
        buslicence: that.data.buslicence, // 营业执照图片
        orgcode: that.data.orgcode, // 组织代码图片
        lawholder: that.data.lawholder, // 法人持证件照图片
        frontid: that.data.frontid, // 身份证正面照片
        backid: that.data.backid, // 身份证反面照片
        spequalifione: that.data.spequalifione, // 特殊资质一图片
        spequalifitwo: that.data.spequalifitwo, // 特殊资质二图片
        spequalifithree: that.data.spequalifithree, // 特殊资质三图片
        spequalififour: that.data.spequalififour, // 特殊资质四图片
        spequalififive: that.data.spequalififive, // 特殊资质五图片
      }
    }

    wx.request({
      // url: 'http://192.168.98.179/back/merchantinfoController/save',
      url: 'https://www.shouzan365.com/back/merchantinfoController/save',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'access-token': token
      },
      data: formdata,
      success: function (res) {
        // console.log('it is uploading...'+that.data)
        // console.log(res.data)
        // console.log(res)
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
    // console.log(options)
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
