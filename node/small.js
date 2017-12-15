/**
 * Created by yss on 2017/12/14.
 */
/**
 * Created by yss on 2017/11/22.
 */
var express = require('express')
var app = express()
app.get('/api', function (req, res) {
  console.log(req.query);
  if (true) {
    res.send('true')
  } else {
    res.send('true')
  }

})
app.post('/file', function (req, res) {
  req.file //wenjian
  req.body //biaodan

})

app.post('/uploadfile', function (req, res) {
  console.log('upload---')
  console.log(req.file, req.body)
  res.send('upload')
})

app.post('/submitfile', function (req, res) {
  console.log('submitform---', req.file, req.body, req.params);
  res.send('提交成功')
})

app.get('/search', function (req, res) {
  console.log('search---', req.query, req.body, req.params)
  res.send({
    listData: [
      { "time": "2012-01-01", "name": "name1", "road": "alipay", "num": "0123456789", "money": "456.00", "status": "success" },
      { "time": "2012-01-02", "name": "name2", "road": "alipay", "num": "0123456789", "money": "123.12", "status": "success" },
      { "time": "2012-01-03", "name": "name3", "road": "wechat", "num": "0123456789", "money": "789.01", "status": "backoff" },
      { "time": "2012-01-04", "name": "name4", "road": "alipay", "num": "0123456789", "money": "0.12", "status": "success" },
      { "time": "2012-01-05", "name": "name5", "road": "alipay", "num": "0123456789", "money": "45678.21", "status": "backoff" },
      { "time": "2012-01-06", "name": "name6", "road": "wechat", "num": "0123456789", "money": "6.00", "status": "success" },
      { "time": "2012-01-01", "name": "name1", "road": "alipay", "num": "0123456789", "money": "456.00", "status": "success" },
      { "time": "2012-01-02", "name": "name2", "road": "alipay", "num": "0123456789", "money": "123.12", "status": "success" },
      { "time": "2012-01-03", "name": "name3", "road": "wechat", "num": "0123456789", "money": "789.01", "status": "backoff" },
      { "time": "2012-01-04", "name": "name4", "road": "alipay", "num": "0123456789", "money": "0.12", "status": "success" },
    ]
  })
})


// 开启服务器
app.listen(3000, function () {
  console.log("success run server");
})

