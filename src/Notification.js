import React from 'react';
import { view, store } from 'react-easy-stack';
import Snackbar from 'material-ui/Snackbar';

const notificationStore = store({
  message: '',
  isOpen: false
});

export function notify(message) {
  notificationStore.message = message;
  notificationStore.isOpen = true;
}

function closeNotification() {
  notificationStore.message = '';
  notificationStore.isOpen = false;
}

export default view(() => (
  <Snackbar
    message={notificationStore.message}
    open={notificationStore.isOpen}
    onClose={closeNotification}
    autoHideDuration={4000}
  />
));
