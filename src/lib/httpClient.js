import axios from 'axios';

export const fetchEmployees = () => axios.get('/')
 // .then(res => res.data)
  //.catch(console.error);


export const fetchEmployee = id => axios.get('/', {
  params: {
    id
  }
})
  .then(res => res.data)
  .catch(console.error);
