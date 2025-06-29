import axios from 'axios'

console.log(process.env.BASE_URL)

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http//localhost:8000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 0
});

export default instance;