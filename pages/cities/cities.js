// pages/cities/cities.js
// picker.js
var cityObj = require("./city")
Page({
  data: {
    index: 0
  },
  onLoad: function (options) {
    var defaultCitys = cityObj.getCitysById("0")
    this.setData({
      province: [cityObj.provinceList, defaultCitys]
    })
    console.log(this.data.province)
  },
  bindPickerChange(e) {
    if (e.detail.column == 0) {
      var citys = cityObj.getCitysById(e.detail.value);
      this.setData({
        province: [cityObj.provinceList, citys]
      })
    }
    console.log(this.data.province)
  }
})