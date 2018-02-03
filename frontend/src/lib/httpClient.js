import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  'content-type': 'application/json' 
})

export const fetchEmployees = () => apiClient.get('/')

export const fetchEmployee = id => apiClient.get('/', {
  params: {
    id
  }
})

  
