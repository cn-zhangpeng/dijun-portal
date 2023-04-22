import axios from 'axios'
import router from "@/router";

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API, // api 的 base_url
    timeout: 5000, // 请求超时时间
    withCredentials: true
})

// 请求拦截
service.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 500) {
        console.log(error.response.data.msg)
    } else if (error.response.status === 401) {
        console.log('go to login')
        router.push({path: '/login'});
    }
    return Promise.reject(error)
})

export default service
