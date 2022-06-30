import axios from 'axios'//引入axios发送请求得到模块
import qs from 'qs'
const isDev = process.env.NODE_ENV === 'development'//设置基础接口地址
const request=axios.create({
    baseURL:isDev?'https://www.young1024.com:3002':' http://www.young1024.com:82',
    method:'post',
    timeout:6000,
})
request.interceptors.request.use((config)=>{//设置请求拦截，转换数据格式以便发送请求
    config.data=qs.stringify(config.data)
    return config
},(error)=>{
    return Promise.reject(error)
})
request.interceptors.response.use((response)=>{//设置响应拦截
    if(response.data.status==='success'){
        return response.data
    }   
},(error)=>{
    return Promise.reject(error)
})
export default request//设置导出属性