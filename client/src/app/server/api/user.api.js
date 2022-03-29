import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:2000" })

export const singinApi = async (userData) => {
    return await api.post('/login', userData, {
        'Content-Type': 'application/json'
    })
}

export const signupApi = async (userData) => {
    return await api.post('/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getUser = async (id, token) => {
    return await api.get(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateUserApi = async (id, userData, token) => {
    return await api.put(`/updateuser/${id}`, userData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}