import axios from 'axios';
import appStore from './appStore';
import { pick } from 'lodash';
import { storage } from 'react-easy-stack';

const api = axios.create({
  baseURL: 'https://freebie-server.sloppy.zone/api/',
  headers: {
    token: storage.token
  }
});

// TODO: it should handle errors, replace this with a counter
api.interceptors.request.use(config => {
  appStore.isLoading = true;
  return config;
});

api.interceptors.response.use(response => {
  appStore.isLoading = false;
  return response;
});

export async function search(filter) {
  const { data } = await api.get('/products', {
    params: { search: filter }
  });
  return data.products;
}

export async function login(loginData) {
  loginData = pick(loginData, ['email', 'pass']);
  const { data } = await api.post('/users/login', loginData);
  api.defaults.headers.token = data.token;
  storage.token = data.token;
  return data.user;
}

export async function register(registerData) {
  await api.post('/users/register', registerData);
  return login(registerData);
}
