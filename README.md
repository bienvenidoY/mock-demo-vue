# 介绍
> 使用没有dev-server.js模板模拟接口返回数据
> isMock 开关 在mock接口和后端接口间切换
## mock数据来源
 - 本地*.json
 - mock.js 随机数据
## 用到的依赖
mock.js [介绍看这](https://github.com/nuysoft/Mock),详细文档看官网或者[wiki](https://github.com/nuysoft/Mock/wiki/Getting-Started)
```
npm install mockjs --save-dev  //写入dev依赖中
```
axios [介绍看这](https://github.com/axios/axios)
```
npm install axios --save //写入prod依赖
```
## 说明
借助axios 的baseURL 切换生产环境、开发环境和mock接口
## 修改的文件
- webopack.dev.con.js
```
12 const mockApi = require('../mock/mock-config')
···
47 before(app){ //在devServer中添加
48    mockApi(app)
49  }
```
- 新建mock文件夹
  1. mock.json 是本地假数据
  2. mock-config.js 接口返回数据的配置
- 新建src/api文件夹
  1. api.js 定义接口 method url
  2. config.js 配置axios
- 调用接口 在src/components/HelloWorld
  1. 渲染完成调用 api/seller get 本地json
  2. api/goods按钮 get 本地json
  3. api/ratings按钮 post 本地json
  4. api/list 按钮 get mock.js随机数据

  ## Build Setup

  ``` bash
  # install dependencies
  npm install or yarn

  # serve with hot reload at localhost:8080
  npm run dev

  # build for production with minification
  npm run build:prod

  # build for buildtest with minification
  npm run build:test
