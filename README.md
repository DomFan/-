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
		- spequalifione   file   否 特殊资质一图片
		- spequalifitwo   file   否 特殊资质二图片
		- spequalifithree file 	 否 特殊资质三图片
		- spequalififour  file   否 特殊资质四图片
		- spequalififive  file   否 特殊资质五图片

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
			- limit  显示的行数
			- offset 页码
			- startDate 开始日期
			- endDate 结束日期
	- 请求方式：
		- 'GET'
	- 返回数据
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
	      	- refundsum BigDecimal 退款金额 
	      	- refundorders String 退款订单号

###测试
	- 问题
		- 正常情况下，无法进行登陆操作；
		进入小程序后，点击下方类似主页的按钮，直接退出系统；
		查账功能，根据交易状态进行查询时，交易数据显示的正确，但交易状态显示的一直是所有交易；
		查询结果的列表中，每次进行滑动时都会出现"searching...."
		登陆用户名，显示的是登陆账号，是否应该显示用户姓名；
		上传功能，实际为商户新增功能，且录入对应的信息系统提示"请输入商户名称"；
		点击登陆用户头像，会进入用户中心，但进入时会有一瞬间显示的是登陆页面（点击下方用户中心按钮，情况相同）；
		## 操作流程描述
		待补充