import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:2000' })

export const anecdotesApi = async () => {
    return await api.get('/anecdotes')
}

export const anecdoteApi = async (id) => {
    return await api.get(`/anecdotes/${id}`)
}

export const myAnecdotesApi = async (token) => {
    return await api.get('/myanecdotes', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const anecdotesUserApi = async (id, token) => {
    return await api.get(`/useranecdotes/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const createAnecdoteApi = async (anecdoteData, token) => {
    return await api.post('/createanecdote', anecdoteData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

export const removeAnecdoteApi = async (id, token) => {
    return await api.delete(`/removeanecdote/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateAnecdoteApi = async (id, anecdoteData, token) => {
    return await api.put(`/updateanecdote/${id}`, anecdoteData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}