import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
const service = axios.create({
  // 环境文件中的环境变量,读取不同环境变量读取不同
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, 
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加 icode
    config.headers.icode = 'A12961CE4404F3F1'
    // 统一注入token
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    // 必须返回 config
    return config 
  }, error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  // 请求成功后的处理
  response => {
    const { success, message, data } = response.data 
    // 判断当前请求是否成功
    // 成功返回解析后的数据
    if (success) {
      return data
    } else {
      // 失败(请求成功,用户名错误),消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  error => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default service
