import axios from 'axios'

const env = process.env.NODE_ENV
const isMock = true //mock开关

const hosts = {
  development: 'http://111.111.111.111:8080',//开发环境
  production: 'http://222.222.222.222:8080',//生产环境
  test:'http://333.333.333.333:8080',//测试环境
}

//设置baseURL
if (!isMock) axios.defaults.baseURL = hosts[env]

// request拦截器
//axios.interceptors.request.use()

//请求拦截器
//axios.interceptors.response.use()

export default axios
