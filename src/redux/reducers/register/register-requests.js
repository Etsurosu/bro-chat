import axios from 'axios';

// adresse a changer, gerer les environements

const registerRequest = {
  register: payload => axios.post('http://92.222.92.112:8000/api/auth/register', payload)
};

export default registerRequest;
