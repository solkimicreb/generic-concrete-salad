import axios from 'axios';
import appStore from './appStore';

const api = axios.create({
  baseURL: 'https://freebie-server.sloppy.zone/api/'
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
