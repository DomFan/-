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