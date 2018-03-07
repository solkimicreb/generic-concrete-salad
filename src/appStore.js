import { store } from 'react-easy-stack';
import * as api from './api';
import { params } from 'react-easy-stack';

const appStore = store({
  products: [],
  async search(filter) {
    appStore.products = await api.search(filter);
  }
});

appStore.search(params.search);

export default appStore;
