import React, { Component, Fragment } from 'react';
import { Router, view } from 'react-easy-stack';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Login from './Login';

const appStyle = {
  maxWidth: 800,
  margin: '80px auto'
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Router defaultPage="products" style={appStyle}>
          <ProductList page="products" />
          <Login page="login" />
        </Router>
      </Fragment>
    );
  }
}

export default view(App);
