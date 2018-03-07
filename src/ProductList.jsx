import React, { Component } from 'react';
import { view } from 'react-easy-stack';
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
    return (
      <div style={listStyle}>
        {appStore.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default view(ProductList);
