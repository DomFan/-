#前端校验方法
##必填
- 错误提示： 请输入*** / 请选择***
	- 规则：
	- required: true
- 长度限制
	- 错误提示： 输入内容超过最大长度
	- 规则
		- max: n   最大长度
		- `<Input maxLength="n" />`   最大长度
		- pattern: /^\d{n}$/   确定的n位数字
		- len: n    确定的n位数字
- 手机号码 （18612345678）
	- 错误提示： 请输入正确手机号码
	- 规则：
		- pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
		`<Input maxLength="11" />`
- 电话号码 （010-85369999）
	- 错误提示： 请输入正确电话号码
	- 规则：
		- pattern:  /^(0\d{2,3}[-| ]?)?(\d{7,8})([-| ]?\d{3,5})?$/
		- `<Input maxLength="12" /> `
- 邮箱
	- 错误提示： 请输入正确邮箱
	- 规则：
		- type: 'email'
		- `<Input type="email" />`
- 数字
	- 错误提示： 请输入数字
	- 规则：
		- pattern: /^\d+$/
		- 校验整数或小数，使用validator，isNaN(value)判断
- 姓名(中文)
	- 错误提示: 请输入正确的姓名
	- 规则：
		- pattern: /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/
- 证件号
	- 数字类型
	- 长度限制
	- 身份证号码规则：
		- /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
- 银行卡号
	- 错误提示： 请输入正确的银行卡号
	- 规则：
		- pattern: /^([1-9]{1})(\d{14}|\d{18})$/
- 中文
	- 错误提示: 请输入正确的姓名
	- 规则：
		- pattern: /[\u4e00-\u9fa5]/gm