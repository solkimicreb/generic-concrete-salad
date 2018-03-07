import React, { Component, Fragment } from 'react';
import { Router, view, params } from 'react-easy-stack';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Login from './Login';
import appStore from './appStore';

const appStyle = {
  maxWidth: 800,
  margin: '80px auto'
};

const enterAnimation = {
  keyframes: {
    opactity: [0, 1],
    transform: ['translateY(-10px)', 'none']
  },
  options: 150
};

const leaveAnimation = {
  keyframes: {
    opactity: [1, 0],
    transform: ['none', 'translateY(10px)']
  },
  options: 150
};

class App extends Component {
  searchProducts = async () => {
    await appStore.search(params.search);
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Router
          defaultPage="products"
          style={appStyle}
          timeout={800}
          enterAnimation={enterAnimation}
          leaveAnimation={leaveAnimation}
        >
          <ProductList page="products" resolve={this.searchProducts} />
          <Login page="login" />
        </Router>
      </Fragment>
    );
  }
}

export default view(App);
