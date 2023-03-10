import axios from 'axios'


const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchGetData = async () => {
    return await API.get('/users')
}

export const fetchGetTodoData = async () => {
    const res = await API.get('/comments')
    console.log(res)
    return await API.get('/comments')
}