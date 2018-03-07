import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import { view, params, route, Link } from 'react-easy-stack';

import appStore from './appStore';

const toolbarStyle = {
  width: '100%',
  maxWidth: 800,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between'
};

class NavBar extends Component {
  onSearch = async filter => {
    await appStore.search(filter);
    route({ to: 'products', params: { search: filter } });
  };

  render() {
    return (
      <AppBar>
        <Toolbar style={toolbarStyle}>
          <SearchBar onRequestSearch={this.onSearch} value={params.search} />
          <Button color="inherit">
            <Link to="login">Login</Link>
          </Button>
        </Toolbar>
        {appStore.isLoading && <LinearProgress color="secondary" />}
      </AppBar>
    );
  }
}

export default view(NavBar);
