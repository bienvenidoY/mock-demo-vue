var appData = require('./mock.json')//加载本地数据文件
var seller = appData.seller//获取对应的本地数据
var goods = appData.goods
var ratings = appData.ratings

/* mock.js使用*/
var Mock = require('mockjs')
var list  = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})

var mockApi = require('../src/api/api').api

module.exports = function before(app) {
  app[mockApi.seller.method](mockApi.seller.url, (req, res) => {
    res.json({
      errno: 0,
      data: seller
    })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
  }),
    app[mockApi.goods.method](mockApi.goods.url, (req, res) => {
      res.json({
        errno: 0,
        data: goods
      })
    }),
    app[mockApi.ratings.method](mockApi.ratings.url, (req, res) => {
      res.json({
        errno: 0,
        data: ratings
      })
    }),
    app[mockApi.list.method](mockApi.list.url, (req, res) => {
      res.json({
        errno: 0,
        data: list//mock.js 生成随机数据
      })
    })
}
