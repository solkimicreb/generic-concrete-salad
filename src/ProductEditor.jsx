import React, { Component } from 'react';
import { view, store, params } from 'react-easy-stack';
import { FormGroup } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import appStore from './appStore';

const productShell = {
  name: '',
  description: ''
};

class ProductEditor extends Component {
  store = store({
    changes: params.id ? {} : productShell
  });

  onChange = ev => {
    this.store.changes[ev.target.name] = ev.target.value;
  };

  onSave = () => {
    if (params.id) {
      appStore.editProduct(params.id, this.store.changes);
    } else {
      appStore.saveProduct(this.store.changes);
    }
  };

  render() {
    const { product } = this.props;
    const { changes } = this.store;
    const { name, description } = Object.assign({}, product, changes);
    const label = params.id ? 'Edit Product' : 'Add Product';

    return (
      <FormGroup>
        <TextField
          name="name"
          label="Name"
          margin="dense"
          value={name}
          onChange={this.onChange}
        />
        <TextField
          name="description"
          label="Description"
          margin="dense"
          multiline={true}
          value={description}
          onChange={this.onChange}
        />
        <Button onClick={this.onSave}>{label}</Button>
      </FormGroup>
    );
  }
}

export default view(ProductEditor);
