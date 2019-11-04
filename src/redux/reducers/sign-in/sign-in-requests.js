import axios from 'axios';

// adresse a changer, gerer les environements

const signInRequest = {
  signIn: payload => axios.post('/users', payload)
};

export default signInRequest;
