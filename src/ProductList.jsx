import React, { Component } from 'react';
import { view, storage, params } from 'react-easy-stack';
import appStore from './appStore';
import Product from './Product';

const listStyle = {
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
};

class ProductList extends Component {
  render() {
    const products = this.props.pageResolved
      ? appStore.products
      : storage.cache[params.search] || [];

    return (
      <div style={listStyle}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default view(ProductList);
