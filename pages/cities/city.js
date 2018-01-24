//  省份
var provinceList = [
  { "id": "11", "name": "北京", "initial": "B" },
  { "id": "110000", "name": "北京市" },
  { "id": "120000", "name": "天津市" },
  { "id": "130000", "name": "河北省" },
  { "id": "140000", "name": "山西省" },
  { "id": "150000", "name": "内蒙古自治区" },
  { "id": "210000", "name": "辽宁省" },
  { "id": "220000", "name": "吉林省" },
  { "id": "230000", "name": "黑龙江省" },
  { "id": "310000", "name": "上海市" },
  { "id": "320000", "name": "江苏省" },
  { "id": "330000", "name": "浙江省" },
  { "id": "340000", "name": "安徽省" },
  ];

var cityList = [
  {
    "provinceId": "11",
    "citys": [
      { "id": "1", "name": "昌平" },
      { "id": "210000", "name": "辽宁省" },
      { "id": "220000", "name": "吉林省" },
      { "id": "230000", "name": "黑龙江省" },
      { "id": "310000", "name": "上海市" },
      { "id": "320000", "name": "江苏省" },
      { "id": "330000", "name": "浙江省" },
      { "id": "340000", "name": "安徽省" },
      ]
  },
  {
    "provinceID": "110000",
    "citys": [
      { "id": "110000", "name": "北京市" },
      { "id": "120000", "name": "天津市" },
      { "id": "130000", "name": "河北省" },
      { "id": "140000", "name": "山西省" },
      { "id": "150000", "name": "内蒙古自治区" },
      { "id": "210000", "name": "辽宁省" },
      { "id": "220000", "name": "吉林省" },
      { "id": "230000", "name": "黑龙江省" },
      { "id": "310000", "name": "上海市" },
      { "id": "320000", "name": "江苏省" },
      { "id": "330000", "name": "浙江省" },
      { "id": "340000", "name": "安徽省" },
    ]
  }
];
//  点击省份，获取城市列表
function getCitysById(id) {
  let provinceId = provinceList[id].id;
  var tempObj = [];
  for (let i = 0; i < cityList.length; i++) {
    if (cityList[i].provinceId == provinceId) {
      tempObj = cityList[i].citys;
      break;
    }
  }
  return tempObj;
}

module.exports = {
  provinceList: provinceList,
  getCitysById: getCitysById
}