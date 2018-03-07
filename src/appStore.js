import { store, params } from 'react-easy-stack';
import * as api from './api';

const appStore = store({
  products: [],
  async search(filter) {
    appStore.products = await api.search(filter);
  },
  async login(loginData) {
    this.user = await api.login(loginData);
  },
  async register(registerData) {
    this.user = await api.register(registerData);
  }
});

appStore.search(params.search);

export default appStore;
