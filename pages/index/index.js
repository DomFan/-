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
    urls: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    // urls: new Array(10),
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

    acctype: '', // 账户类型 企业 个人 BigDecimal
    deposite: '', // 开户银行
    bankno: '', // 银行卡号
    branchNmae: '', // 开户支行名称
    branchRegion: '', // 开户支行地区
    company: '', // 企业名称
    // 个人： 
    acctholder: '', // 开户人（法人）
    identitp: '', // 持卡人证件类型
    identino: '', // 持卡人证件号码
    holderaddress: '', // 持卡人地址
    holderphone: '', // 持卡人手机号
    idendtstart: "2018-01-01", // 证件有限期起始
    idendtend: "2018-12-31", // 证件有限期结束
    front: '', // 身份证正面
    back: '', // 身份证反面

    isperson: '', // '' 未选 '0'企业 '1'个人
    isfirstchoosebank: true,
    acctypelist: [
      { index: 0, name: "企业" },
      { index: 1, name: "个人" },
    ],
    banklist: ["中国工商银行", "中国农业银行", "中国银行", "中国建设银行", "中国光大银行", "中国民生银行", "华夏银行", "中信银行", "恒丰银行", "上海浦东发展银行", "交通银行", "浙商银行", "兴业银行", "深圳发展银行", "招商银行", "广东发展银行" ],
    bankindex: 0,
    identitplist: [ "身份证", "护照", "港澳居民通行证", "其他" ],
    identitpindex: 0,
    ischooseident: false,

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
      // debugger
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
    console.log('ischeckWX', this.data.ischeckWX)
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
          if(that.data.WXlist[0]){
            that.cascade()  
            let final = that.data.final,
              fir = final.firWXlist,
              sec = final.secWXlist,
              thi = final.thiWXlist
            if (thi) {
              that.setData({ wxindustryId: thi.id })
            } else if (!thi && sec) {
              that.setData({ wxindustryId: sec.id })
            } else if (!thi && !sec && fir) {
              that.setData({ wxindustryId: fir.id })
            }
          } else {
            wx.showModal({
              content: '没有可选行业，请添加',
              showCancel: false,
            })
          }
        },
      })
    }
    
    ischeckWX = that.data.ischeckWX
    ischeckWX && ischeckZFB ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528" }) : (ischeckWX && !ischeckZFB) ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc" }) : (!ischeckWX && ischeckZFB) ? this.setData({ passwayIds: "0c811cd8f6a3453da7eca6e446a54528" }) : this.setData({ passwayIds: "" })
    // console.log("isWX? ", that.data.ischeckWX,'--isZFB? ', ischeckZFB)
    console.log(this.data.passwayIds)
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
    if (!this.data.WXlist[0]){
      wx.showLoading({
        title: '无可选行业',
      })
      setTimeout(function(){
        wx.hideLoading()
      }, 1000)
      console.log('---',this.data.wxindustryId, '---')
      return
    }
    // return this.data.WXlist[0]
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
    // console.log(this.data.final);
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
    // console.log('wxindustryId', this.data.wxindustryId)
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
      // console.log('WXlist[firWXindex].children', WXlist)
    if (WXlist[0]){
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
          if (that.data.ZFBlist[0]) {
            that.cascadeZFB()
            let finalZ = that.data.finalZ,
              fir = finalZ.firZFBlist,
              sec = finalZ.secZFBlist,
              thi = finalZ.thiZFBlist
            if (thi) {
              that.setData({ zfbindustryId: thi.id })
            } else if (!thi && sec) {
              that.setData({ zfbindustryId: sec.id })
            } else if (!thi && !sec && fir) {
              that.setData({ zfbindustryId: fir.id })
            }
          } else {
            wx.showModal({
              content: '没有可选行业，请添加',
              showCancel: false,
            })
          }
        },
      })
    }
    ischeckZFB = that.data.ischeckZFB
    ischeckWX && ischeckZFB ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528" }) : (ischeckWX && !ischeckZFB) ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc" }) : (!ischeckWX && ischeckZFB) ? this.setData({ passwayIds: "0c811cd8f6a3453da7eca6e446a54528" }) : this.setData({ passwayIds: "" })
    // console.log("isWX? ", that.data.ischeckWX, '--isZFB? ', ischeckZFB)
    console.log(this.data.passwayIds)
  },
  //点击事件，点击弹出选择页
  dianjiZ: function () {
    //这里写了一个动画，让其高度变为满屏
    let animationZ = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    if (!this.data.token) { return }
    if (!this.data.ZFBlist[0]) {
      wx.showLoading({ title: '无可选行业', })
      setTimeout(function () { wx.hideLoading() }, 1000)
      console.log('---', this.data.zfbindustryId, '---')
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
    this.setData({ finalZ: {} });
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
    this.setData({ zfbsettlerate: e.detail.value })  
  },
  
  /**上传图片  */
  uploadpic: function (index, urls, indexName) { // 索引, 本地图片地址, 当前栏
    if(!this.data.token){
      wx.showLoading({ title: '请先登录', mask: true,})
      setTimeout(function(){wx.hideLoading()}, 1000)
      return
    }
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
            console.log('upload success', res)
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
            if (res.errMsg == "uploadFile:ok"){
              wx.showToast({
                title: '上传成功',
                icon: 'success',
                mask: false,
              })
            }
          },
          fail: function (res) {
            console.log('upload fail', res)
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
      })
    } else {
      wx.showToast({
        title: '请先上传文件',
        icon: 'loading',
        duration: 1000,
        mask: false,
      })
    }
    // console.log(urls, urls[index])
  },
  /** 上传图片 0 */
    uploadpic0: function(){
    this.uploadpic(0, this.data.urls, this.data.nameArr[0])
    },
    /** 点击预览 0 */
    lookpic0: function() {
      this.lookpic(0, this.data.urls)
      console.log(this.data.urls, this.data.urls[0])
      
    },
    /** 上传图片 1 */
    uploadpic1: function () {
      let urls = this.data.urls,
          nameArr = this.data.nameArr
        this.uploadpic(1, urls, nameArr[1])
    },
    /** 点击预览 1 */
    lookpic1: function(){
      this.lookpic(1, this.data.urls)
      // console.log('预览 1111')
    },
    uploadpic2: function () {
      let urls = this.data.urls,
        nameArr = this.data.nameArr
      this.uploadpic(2, urls, nameArr[2])
    },
    lookpic2: function () {
      this.lookpic(2, this.data.urls)
    },
    uploadpic3: function () {
      let urls = this.data.urls,
        nameArr = this.data.nameArr
      this.uploadpic(3, urls, nameArr[3])
    },
    lookpic3: function () {
      this.lookpic(3, this.data.urls)
    },
    uploadpic4: function () {
      let urls = this.data.urls,
        nameArr = this.data.nameArr
      this.uploadpic(4, urls, nameArr[4])
    },
    lookpic4: function () {
      this.lookpic(4, this.data.urls)
    },
    uploadpic5: function () {
      let urls = this.data.urls,
        nameArr = this.data.nameArr
      this.uploadpic(5, urls, nameArr[5])
    },
    lookpic5: function () {
      this.lookpic(5, this.data.urls)
    },
    uploadpic6: function () {
      this.uploadpic(6, this.data.urls, this.data.nameArr[6])
    },
    lookpic6: function () {
      this.lookpic(6, this.data.urls)
    },
    uploadpic7: function () {
      this.uploadpic(7, this.data.urls, this.data.nameArr[7])
    },
    lookpic7: function () {
      this.lookpic(7, this.data.urls)
    },
    uploadpic8: function () {
      this.uploadpic(8, this.data.urls, this.data.nameArr[8])
    },
    lookpic8: function () {
      this.lookpic(8, this.data.urls)
    },
    uploadpic9: function () {
      this.uploadpic(9, this.data.urls, this.data.nameArr[9])
    },
    lookpic9: function () {
      this.lookpic(9, this.data.urls)
    },

  
  /** 账户类型 */
  radioChange: function (e) {
    let value = e.detail.value
    this.setData({ acctype: parseInt(value), isperson: value})
    console.log(this.data.acctype, 'this.data.acctype')
  },

  /**选择开户银行 */
  bankchoose: function (e) {
    let banklist = this.data.banklist, value = e.detail.value
    this.setData({ 
      isfirstchoosebank: false,
      bankindex: value,
      deposite: banklist[value]
    })
  },
  /**银行卡号 */
  banknoinput: function (e) {
    let value = e.detail.value

    this.setData({bankno: value})
  },
  /**开户支行名称 */
  branchNmaeinput: function (e) {
    let value = e.detail.value
    this.setData({ branchNmae: value })
  },
  /**开户支行地区 */
  branchRegioninput: function (e) {
    let value = e.detail.value
    this.setData({ branchRegion: value})
  },
  /**企业名称 */
  companyinput: function (e) {
    let value = e.detail.value
    this.setData({ company: value })
  },
  /**开户人 法人 */
  acctholderinput: function (e) {
    let value = e.detail.value
    this.setData({ acctholder: value })
  },
  /**持卡人证件类型 */
  identitpchoose: function (e) {
    let value = e.detail.value, identitplist = this.data.identitplist
    this.setData({ 
      ischooseident: true,
      identitpindex: value,
      identitp: identitplist[value]
    })
  },
  /**持卡人证件号码 */
  identinoinput: function (e) {
    let value = e.detail.value
    this.setData({ identino: value })
  },
  /**持卡人证件地址 */
  holderaddressinput: function (e) {
    let value = e.detail.value
    this.setData({ holderaddress: value })
  },
  /**持卡人手机号 */
  holderphoneinput: function (e) {
    let value = e.detail.value
    this.setData({ holderphone: value })
  },
  /**持卡人有效期起 */
  idendtstartchange: function (e) {
    let value = e.detail.value
    this.setData({ idendtstart: value })
    console.log('start', this.data.idendtstart)
  },
  /**持卡人有效期止 */
  idendtendchange: function (e) {
    let value = e.detail.value
    this.setData({ idendtend: value })
    console.log('end', this.data.idendtend)
  },
  /**身份证正面照片 */
  frontinput: function (e) {
    let value = e.detail.value
    this.setData({ front: value })
  },
  /**身份证反面照片 */
  backinput: function (e) {
    let value = e.detail.value
    this.setData({ back: value })
  },





  /** 确认提交 */
  submitcfm: function (e) {
    let data = this.data,
        that = this,
        token = this.data.token,
        telreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/,
        emailreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
        ischeckWX = that.data.ischeckWX,
        ischeckZFB = that.data.ischeckZFB,
        bankreg = /^([1-9]{1})(\d{15}|\d{18})$/
    console.log(data)

    if (!token || token == 'undefined') {
      wx.showModal({ title: '请先登录', content: '登录后可添加', showCancel: false, })
      return
    }
    if(!data.merchantName){
      wx.showToast({ title: '请填写商户名称', icon: 'loading', })
      return
    }
    if (!data.merchantStname) {
      wx.showToast({ title: '请填写商户名称', icon: 'loading', })
      return
    }
    if (!data.address) {
      wx.showToast({ title: '请填写商户地址', icon: 'loading', })
      return
    }
    if (!data.linkman) {
      wx.showToast({ title: '填写联系人名称', icon: 'loading', })
      return
    }
    if (!data.lkmphone) {
      wx.showToast({ title: '填写联系人电话', icon: 'loading', })
      return
    }
    if (!telreg.test(data.lkmphone)) {
      // debugger
      wx.showToast({ title: '电话格式有误', icon: 'loading', })
      return
    }
    if (!data.lkmemail) {
      wx.showToast({ title: '填写联系人邮箱', icon: 'loading', })
      return
    }
    if (!emailreg.test(data.lkmemail)) {
      wx.showToast({ title: '邮箱格式有误', icon: 'loading', })
      return
    }
    if (!data.customerTel){
      this.setData({ customerTel: this.data.lkmphone})
    }
    /** 账户类型验证 */
    console.log(typeof data.acctype)
    if(typeof data.acctype == 'number'){
      // debugger
      console.log('acctype 0 or 1', data.acctype)
    } else {
      console.log('acctype another', data.acctype)
      wx.showToast({ title: '请选择账户类型', icon: 'loading', })
      return
    }
    if(!data.deposite){
      wx.showToast({ title: '请选择开户银行', icon: 'loading', })
      return
    }
    console.log('bankreg.test(data.bankno)', bankreg.test(data.bankno))
    // if(!data.bankno || !bankreg.test(data.bankno)){
    //   wx.showToast({ title: '银行卡格式有误', icon: 'loading', })
    //   return
    // }
    if (!data.bankno) {
      wx.showToast({ title: '请填写银行卡号', icon: 'loading', })
      return
    }
    if(!data.branchNmae){
      wx.showToast({ title: '请填写开户支行', icon: 'loading', })
      return      
    }
    if(!data.branchRegion){
      wx.showToast({ title: '请填写支行地区', icon: 'loading', })
      return
    }
    if(data.acctype == 0 && !data.company){
      wx.showToast({ title: '请填写企业名称', icon: 'loading', })
      return
    }
    if(data.acctype == 1){
      if(!data.acctholder){
        wx.showToast({ title: '请填写开户人', icon: 'loading', })
        return        
      }
      if(!data.identitp){
        wx.showToast({ title: '请选择证件类型', icon: 'loading', })
        return        
      }
      if(!data.identino){
        wx.showToast({ title: '请填写证件号码', icon: 'loading', })
        return
      }
      if(!data.holderaddress){
        wx.showToast({ title: '填写持卡人地址', icon: 'loading', })
        return
      }
      if(!telreg.test(data.holderphone)){
        wx.showToast({ title: '持卡人手机有误', icon: 'loading', })
        return
      }
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
    ischeckWX && ischeckZFB ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528" }) : (ischeckWX && !ischeckZFB) ? this.setData({ passwayIds: "74e1479029544232a218a3e60cb791fc" }) : (!ischeckWX && ischeckZFB) ? this.setData({ passwayIds: "0c811cd8f6a3453da7eca6e446a54528" }) : this.setData({ passwayIds: "" })

    let formdata = {}, passwayIds = this.data.passwayIds
    if (passwayIds == '74e1479029544232a218a3e60cb791fc'){
      if (!this.data.wxindustryId) {
        wx.showModal({ content: '请选择微信所属行业', showCancel: false, })
        return
      }
      if (!this.data.wxsettlerate) {
        wx.showModal({ content: '请填写微信结算费率', showCancel: false, })
        return
      }
    } else if (passwayIds == '0c811cd8f6a3453da7eca6e446a54528'){
      if (!this.data.zfbindustryId) {
        wx.showModal({ content: '请选择支付宝所属行业', showCancel: false, })
        return
      }
      if (!this.data.zfbsettlerate) {
        wx.showModal({ content: '请填写支付宝结算费率', showCancel: false, })
        return
      }
    } else if (passwayIds == "74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528"){
      if (!this.data.wxindustryId) {
        wx.showModal({ content: '请选择微信所属行业', showCancel: false, })
        return
      }
      if (!this.data.wxsettlerate) {
        wx.showModal({ content: '请填写微信结算费率', showCancel: false, })
        return
      }
      if (!this.data.zfbindustryId) {
        wx.showModal({ content: '请选择支付宝所属行业', showCancel: false, })
        return
      }
      if (!this.data.zfbsettlerate) {
        wx.showModal({ content: '请填写支付宝结算费率', showCancel: false, })
        return
      }
    }
    if(!passwayIds || passwayIds == 'undefined'){ // 未选则通道类型
      formdata = {
        merchantName: data.merchantName, // 商户名称
        merchantStname: data.merchantStname, // 商户名简称
        address: data.address, // 商户地址
        linkman: data.linkman, // 商户联系人
        lkmphone: data.lkmphone, // 联系人电话
        lkmemail: data.lkmemail, // 联系人邮箱
        customerTel: data.customerTel, //商户客服电话
        userName: data.userName, // 为商户设置用户名
        passWord: data.passWord, // 为商户设置密码
        buslicence: data.buslicence, // 营业执照图片
        orgcode: data.orgcode, // 组织代码图片
        lawholder: data.lawholder, // 法人持证件照图片
        frontid: data.frontid, // 身份证正面照片
        backid: data.backid, // 身份证反面照片
        spequalifione: data.spequalifione, // 特殊资质一图片
        spequalifitwo: data.spequalifitwo, // 特殊资质二图片
        spequalifithree: data.spequalifithree, // 特殊资质三图片
        spequalififour: data.spequalififour, // 特殊资质四图片
        spequalififive: data.spequalififive, // 特殊资质五图片
      }
    } else if (passwayIds == '74e1479029544232a218a3e60cb791fc') { // 通道 微信
      formdata = {
        merchantName: data.merchantName, // 商户名称
        merchantStname: data.merchantStname, // 商户名简称
        address: data.address, // 商户地址
        linkman: data.linkman, // 商户联系人
        lkmphone: data.lkmphone, // 联系人电话
        lkmemail: data.lkmemail, // 联系人邮箱
        customerTel: data.customerTel, //商户客服电话
        userName: data.userName, // 为商户设置用户名
        passWord: data.passWord, // 为商户设置密码
        passwayIds: data.passwayIds, // 商户通道类型
        wxindustryId: data.wxindustryId, // 微信所属行业ID
        wxsettlerate: data.wxsettlerate, // 微信结算费率
        buslicence: data.buslicence, // 营业执照图片
        orgcode: data.orgcode, // 组织代码图片
        lawholder: data.lawholder, // 法人持证件照图片
        frontid: data.frontid, // 身份证正面照片
        backid: data.backid, // 身份证反面照片
        spequalifione: data.spequalifione, // 特殊资质一图片
        spequalifitwo: data.spequalifitwo, // 特殊资质二图片
        spequalifithree: data.spequalifithree, // 特殊资质三图片
        spequalififour: data.spequalififour, // 特殊资质四图片
        spequalififive: data.spequalififive, // 特殊资质五图片
      }
    } else if (passwayIds == '0c811cd8f6a3453da7eca6e446a54528') { // 通道 支付宝
      formdata = {
        merchantName: data.merchantName, // 商户名称
        merchantStname: data.merchantStname, // 商户名简称
        address: data.address, // 商户地址
        linkman: data.linkman, // 商户联系人
        lkmphone: data.lkmphone, // 联系人电话
        lkmemail: data.lkmemail, // 联系人邮箱
        customerTel: data.customerTel, //商户客服电话
        userName: data.userName, // 为商户设置用户名
        passWord: data.passWord, // 为商户设置密码
        passwayIds: data.passwayIds, // 商户通道类型
        zfbindustryId: data.zfbindustryId, // 支付宝所属行业ID
        zfbsettlerate: data.zfbsettlerate, // 支付宝结算费率
        buslicence: data.buslicence, // 营业执照图片
        orgcode: data.orgcode, // 组织代码图片
        lawholder: data.lawholder, // 法人持证件照图片
        frontid: data.frontid, // 身份证正面照片
        backid: data.backid, // 身份证反面照片
        spequalifione: data.spequalifione, // 特殊资质一图片
        spequalifitwo: data.spequalifitwo, // 特殊资质二图片
        spequalifithree: data.spequalifithree, // 特殊资质三图片
        spequalififour: data.spequalififour, // 特殊资质四图片
        spequalififive: data.spequalififive, // 特殊资质五图片
      }
    } else if (passwayIds == '74e1479029544232a218a3e60cb791fc,0c811cd8f6a3453da7eca6e446a54528') { // 通道 微信 支付宝
      formdata = {
        merchantName: data.merchantName, // 商户名称
        merchantStname: data.merchantStname, // 商户名简称
        address: data.address, // 商户地址
        linkman: data.linkman, // 商户联系人
        lkmphone: data.lkmphone, // 联系人电话
        lkmemail: data.lkmemail, // 联系人邮箱
        customerTel: data.customerTel, //商户客服电话
        userName: data.userName, // 为商户设置用户名
        passWord: data.passWord, // 为商户设置密码
        passwayIds: data.passwayIds, // 商户通道类型
        wxindustryId: data.wxindustryId, // 微信所属行业ID
        wxsettlerate: data.wxsettlerate, // 微信结算费率
        zfbindustryId: data.zfbindustryId, // 支付宝所属行业ID
        zfbsettlerate: data.zfbsettlerate, // 支付宝结算费率
        buslicence: data.buslicence, // 营业执照图片
        orgcode: data.orgcode, // 组织代码图片
        lawholder: data.lawholder, // 法人持证件照图片
        frontid: data.frontid, // 身份证正面照片
        backid: data.backid, // 身份证反面照片
        spequalifione: data.spequalifione, // 特殊资质一图片
        spequalifitwo: data.spequalifitwo, // 特殊资质二图片
        spequalifithree: data.spequalifithree, // 特殊资质三图片
        spequalififour: data.spequalififour, // 特殊资质四图片
        spequalififive: data.spequalififive, // 特殊资质五图片
      }
    }
    if (data.acctype == 0) {
      formdata.deposite = data.deposite
      formdata.bankno = data.bankno
      formdata.branchNmae = data.branchNmae
      formdata.branchRegion = data.branchRegion
      formdata.company = data.company
    } else if (data.acctype == 1) {
      formdata.deposite = data.deposite
      formdata.bankno = data.bankno
      formdata.branchNmae = data.branchNmae
      formdata.branchRegion = data.branchRegion
      formdata.acctholder = data.acctholder
      formdata.identitp = data.identitp
      formdata.identino = data.identino
      formdata.holderaddress = data.holderaddress
      formdata.holderphone = data.holderphone
      formdata.idendtstart = data.idendtstart
      formdata.idendtend = data.idendtend
    }

    console.log(formdata)
    console.log('----', data.zfbindustryId, data.zfbsettlerate)

    wx.request({
      // url: 'http://192.168.98.174/back/merchantinfoController/save',
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
        wx.navigateTo({
          url: '../submitSuccess/submitSuccess',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })
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
