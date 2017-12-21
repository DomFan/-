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
	- 请求地址
	- 请求参数
	- 请求方式
	- 返回数据

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