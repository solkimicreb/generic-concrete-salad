import React, { Component } from 'react';
import { view } from 'react-easy-stack';
import Card, { CardContent } from 'material-ui/Card';

const productStyle = {
  width: 350,
  maxWidth: '95%',
  margin: 20
};

class Product extends Component {
  render() {
    const { name, description } = this.props.product;
    return (
      <Card style={productStyle}>
        <CardContent>
          <h3>{name}</h3>
          <p>{description}</p>
        </CardContent>
      </Card>
    );
  }
}

export default view(Product);
