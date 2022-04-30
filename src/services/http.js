import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://belvo-wallet-challenge-api.herokuapp.com',
});

instance.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if (token) {
    request.headers = {
      Authorization: token,
    };
  }

  return request;
});

export default instance;
