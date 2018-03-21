import { store, params } from 'react-easy-stack';
import * as api from './api';

const appStore = store({
  products: [],
  async search(filter) {
    appStore.products = await api.search(filter);
  },
  async resolveProduct() {
    if (!params.id) {
      return { product: {} };
    }
    return { product: await api.fetchProduct(params.id) };
  },
  async saveProduct(product) {
    await api.saveProduct(product);
  },
  async editProduct(id, data) {
    await api.editProduct(id, data);
  },
  async login(loginData) {
    this.user = await api.login(loginData);
  },
  async register(registerData) {
    this.user = await api.register(registerData);
  }
});

export default appStore;
