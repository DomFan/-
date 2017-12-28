#微信小程序
##结构
###

-  首页 home
-  登录页 login
-  上传页 index
-  查询账单 query
-  预览功能

###登录页
	标题上位置在 286px 顶部131px 距离为154px
		标题下位置 336px
		表单上边框位置 470px 距离为 134px
	边框颜色 #e1e1e1
	圆角 4px
	用户名颜色 #999 
	icon 50*50
	按钮颜色 #f55d54
###上传页
	边框颜色 #e1e1e1
	圆角 4px
###首页
	导航栏 开始布局位置 131px
		头像：138*138
			146px 283px  高：137px
			310px 447px  宽：137px
		文字：306px 331px  文字大小：25px

	头像栏位置 九宫格开始位置 384px
		图标：458px 494px 36px
			462px 502px 40px
		文字：523px 551px 28px
			524px 553px  29px

	九宫格第一栏下边框位置 633px

	导航栏及头像栏背景颜色
		"navigationBarBackgroundColor": "#f3594d"

###查账-报表查询-订单查询_明细
	查询条件：
		交易类型：成功 / 退款
		交易时间：区间三天
	正常订单查询： 
		交易确认时间、商户名称、通道、订单号、交易金额、交易状态
	退款订单查询：
		交易确认时间、商户名称、通道、退款订单号、退款金额、交易状态。
	- 查询结果
		- 计算总宽度 		320
		- 交易确认时间 	42		42		0.13125		13
		- 商户名称 		88		46		0.14375		14
		- 通道			120		32		0.1			10
		- 订单号			244		124		0.3875		40
		- 交易金额		278		34		0.10625		10
		- 交易状态		320		42		0.13125		13

##注意事项
###页面加载时 接受数据的方法
	onLoad: function(options) {
	  　　var jsonString = options.trainInfos;
	  　　//将字串类型转为JSON类型
	  　　var json = JSON.parse(jsonString);
	  　　this.setData({
	      　　trainList: json.data.trainList,
	  　　});
	}

###页面跳转携带参数
	登录后跳转回首页 首页进入上传页及查询页
	URL+datas
	datas = '?userName=' + userName + '&userPassword=' + userPassword + 'token=' + token

### urls
- 登录
	- 请求地址
		- 'https://www.shouzan365.com/api/jwt/auth?username=' + that.data.inputName + '&password=' + that.data.inputPassword
	- 请求参数
		- username 用户名
		- password 密码
		- token token
	- 请求方式
		- 'POST'
	- 返回数据
		- data
		:
		{token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmc2wiLCJjcmVhdGVkI…0KlneMwoOWEAIDh5AGPsYot5qpqHU8FzRbcXejXIhm_85FZ_w"}
		errMsg: "request:ok"
		header:	{Access-Control-Allow-Origin: "*", X-Application-Context: "ms-gate:80", X-XSS-Protection: "1; mode=block", Cache-Control: "no-cache, no-store, max-age=0, must-revalidate", Pragma: "no-cache", …}
		statusCode:	200
	
- 添加商户
	- 请求地址 - 保存商户信息
		- 'https://www.shouzan365.com/back/merchantinfoController/save'
	- 请求参数
		- 参数 类型 是否必填 说明
		- merchantName 	  String 是 商户名称
		- linkman 		  String 是 联系人姓名
		- lkmphone 		  String 是 联系人手机 
		- merchantStname  String 否 商户简称
		- userName		  String 用户名 
		- passWord		  String 密码 
		- buslicence 	  file   否 营业执照图片
		- orgcode    	  file   否 组织代码图片
		- lawholder  	  file   否 法人持证件照
		- frontid    	  file   否 身份证正面图片
		- backid 	 	  file   否 身份证反面照片
		- spequalifitwo   file   否 特殊资质二图片
		- spequalififour  file   否 特殊资质四图片
		- spequalifione   file   否 特殊资质一图片
		- spequalifithree file 	 否 特殊资质三图片
		- spequalififive  file   否 特殊资质五图片
		- 
		- merCode 		  String 否 商户编码
		- fkid 			  String 否 商户外部ID：UNI 进件后由通道生成， 再补写到本条数据
		- pid 			  String 否 商户上级ID
		- region 		  String 否 商户所在地区
		- address 		  String 否 商户详细地址
		- zfbindustryId   String 否 支付宝所属行业ID
		- salesman 		  String 否 业务员
		- lkmemail 		  String 否 联系人邮箱
		- buslicence	  String 否 营业执照图片
		- orgcode	 	  String 否 组织代码图片
		- lawholder 	  String 否 法人持证件照图片
		- frontid		  String 否 身份证正面图片
		- backid		  String 否 身份证反面图片
		- spequalifione   String 否 特殊资质一图片 
		- spequalifitwo   String 否 特殊资质二图片 
		- spequalifithree String 否 特殊资质三图片 
		- spequalififour  String 否 特殊资质四图片 
		- spequalififive  String 否 特殊资质五图片 
		- state			  String 否 商户状态 
		- creatorId		  String 否 创建人 
		- createTime	  Date 	 否 创建时间 
		- lastEdittime 	  Date   否 修改时间 
		- lastEditorid 	  String 否 修改人 
		- deleted 		  Integer   删除标识 
		- deleteUserid 	  String 否 删除人 
		- markDeletedtime Date   否 删除时间 
		- checkerId 	  String 否 审核人 
		- checkTime 	  Date   否 审核时间 
		- startTime 	  Date   否 开始时间 
		- endTime 		  Date   否 结束时间 
		- deposite 		  String 否 开户银行 
		- bankno 		  String 否 银行卡号 
		- branchNmae 	  String 否 开户支行名称 
		- branchRegion 	  String 否 开户支行所属地区 
		- company 		  String 否 企业名称 
		- acctholder	  String 否 开户人 
		- identitp		  String 否 持卡人证件类型 
		- identino		  String 否 持卡人证件号码 
		- holderaddress   String 否 持卡人地址 
		- holderphone	  String 否 持卡人手机号 
		- idendtstart	  String 否 证件有效期起 
		- idendtend		  String 否 证件有效期止 
		- front			  String 否 身份证正面照片 
		- back			  String 否 身份证反面照片 
		- passwayIds	  String 否 通道类型 
		- appid			  String 否 子商户号（微信） 
		- activestate	  String 否 激活状态 0 未激活 1 激活 
		- remarksAds	  String 否 进件状态备注 
		- remarksAct	  String 否 激活状态备注 
		- buslicenceName  String 否 营业执照图片名称 
		- orgcodeName 	  String 否 组织代码图片名称 
		- lawholderName   String 否 法人持证件照名称 
		- frontidName 	  String 否 身份证正面图片名称 
		- backidName	  String 否 身份证反面图片名称 
		- message		  String 否 返回信息 
		- frontName		  String 否 身份证正面照片名称 
		- backName		  String 否 身份证反面照片名称 
		- token			  String 否 第三方授权令牌(支付宝) 
		- wxindustryId	  String 否 微信所属行业 
		- acctype 		  BigDecimal 否 账户类型 
		- checked  		  BigDecimal 否 审核标识 
		- auditstate	  BigDecimal 否 进件状态 0 未处理  1 处理中 2 通过 3 未通过 
		- zfbsettlerate	  BigDecimal 否 支付宝结算费率 
		- wxsettlerate	  BigDecimal 否 微信结算费率 
		- lng 			  BigDecimal 否 商户所在经度（地理位置）
		- lat			  BigDecimal 否 商户所在纬度（地理位置） 
		- status 		  BigDecimal 否 状态码 
		- spequalifioneName   String 否 特殊资质一图片名称 
		- spequalifitwoName   String 否 特殊资质二图片名称 
		- spequalifithreeName String 否 特殊资质三图片名称 
		- spequalififourName  String 否 特殊资质四图片名称 
		- spequalififiveName  String 否 特殊资质五图片名称 

	- 请求方式
		- 'POST'
	- 返回数据
		- rel boolean 是否成功：成功true、失败false
		- msg String 返回说明信息

- 查询
	- 请求地址
		- url: 'https://www.shouzan365.com/back、tradeBlotter/page?limit=10&offset=1&startDate=2017-12-01&endDate=2017-12-31&token='+ token 
	- 请求参数
		- 必填：
			- limit 
			- offset
	- 请求方式：
		- 'GET'
	- 返回数据
		- data: rows: Array(10)
			0: {tradedt: "2017-12-20 17:21:02", merchantName: "支付测试", passwayId: "微信", orders: "202017122017210159540768", sum: 0.01, …}
			1: {tradedt: "2017-12-20 17:14:22", merchantName: "支付测试", passwayId: "微信", orders: "202017122017142216615851", sum: 0.01, …}
			2: {tradedt: "2017-12-20 17:14:19", merchantName: "支付测试", passwayId: "微信", orders: "202017122017141926927628", sum: 0.01, …}
			3: {tradedt: "2017-12-20 17:04:21", merchantName: "支付测试", passwayId: "微信", orders: "202017122017042069126024", sum: 0.01, …}
			4: {tradedt: "2017-12-20 17:02:23", merchantName: "支付测试", passwayId: "微信", orders: "202017122017022322347788", sum: 0.01, …}
			5: {tradedt: "2017-12-20 16:55:30", merchantName: "支付测试", passwayId: "微信", orders: "202017122016553040374230", sum: 0.01, …}
			6: {tradedt: "2017-12-20 16:54:29", merchantName: "支付测试", passwayId: "微信", orders: "202017122016542917979582", sum: 0.01, …}
			7: {tradedt: "2017-12-20 16:52:02", merchantName: "支付测试", passwayId: "微信", orders: "202017122016520239363421", sum: 0.01, …}
			8: {tradedt: "2017-12-20 16:38:32", merchantName: "支付测试", passwayId: "微信", orders: "202017122016383240495486", sum: 0.01, …}
			9: {tradedt: "2017-12-20 16:33:05", merchantName: "支付测试", passwayId: "微信", orders: "202017122016330461242770", sum: 0.01, …}
		length: 10
		__proto__: Array(0)
		total: 88
		__proto__: Object
		errMsg: "request:ok"
		header: {Cache-Control: "private", Expires: "Thu, 01 Jan 1970 08:00:00 CST", Access-Control-Allow-Origin: "*", X-Application-Context: "ms-gate:80", Date: "Thu, 21 Dec 2017 03:31:02 GMT", …}
		statusCode: 200
		- res.data.rows:
			- tradedt: "2017-12-20 17:21:02", // 交易确认时间
			- merchantName: "支付测试", // 商户名称
	      	- passwayId: "微信", // 通道
	      	- orders: "202017122017210159540768", // 订单号
	        - sum: 0.01, // 交易金额
	        - stateName: "支付成功",// 交易状态
	      	- fee: 0.00006, // 手续费
	      	- rate: 0.006, // 费率
	     	- refundsum: 0, // 退款金额
	      	- tradeNo: "4200000027201712207895653733", // 钱包方订单号
	      	- typeName: "收款" // 交易类型