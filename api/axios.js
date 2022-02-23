import axios from 'axios'

let instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
    timeout: 30000
})

export default instance