import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './config/i18n';
import './scss/index.module.scss';
import store from './redux/store';
import App from './app';
import * as serviceWorker from './serviceWorker';
import 'rfs/scss/_rfs.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
