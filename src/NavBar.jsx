import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import { view, params, path, route, Link } from 'react-easy-stack';
import { notify } from './Notification';
import appStore, * as app from './appStore';

const toolbarStyle = {
  width: '100%',
  maxWidth: 800,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between'
};

class NavBar extends Component {
  onSearch = search => {
    route({
      to: 'products',
      params: { search },
      options: { history: true, animate: search !== params.search }
    });
  };

  onLogout = () => {
    app.logout();
    route({ to: '/login' });
    if (path[0] === 'product') {
      notify('Please log in to see the product page');
    }
  };

  render() {
    const { isLoggedIn, isLoading } = appStore;

    return (
      <AppBar>
        <Toolbar style={toolbarStyle}>
          <SearchBar onRequestSearch={this.onSearch} value={params.search} />
          <Button color="inherit">
            {isLoggedIn ? (
              <span onClick={this.onLogout}>Logout</span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Button>
        </Toolbar>
        {isLoading && <LinearProgress color="secondary" />}
      </AppBar>
    );
  }
}

export default view(NavBar);
