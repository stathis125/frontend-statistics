import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  'content-type': 'application/json'
})

export const fetchEmployees = () => apiClient.get('/')

export const fetchEmployee = id => apiClient.get(`/${id}`)

export const createEmployee = props => apiClient.post('/', props)

export const updateEmployee = (id, props) => apiClient.put(`/${id}`, props)

export const deleteEmployee = id => apiClient.delete(`${id}`)
