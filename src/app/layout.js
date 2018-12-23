import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';

import { history } from 'redux/store';
import { CONTACT, HOME, PRODUCTS, US } from 'constants/routes';

import Contact from './screens/Contact';
import Home from './screens/Home';
import styles from './styles.module.scss';
import Us from './screens/Us';
import Products from './screens/Products';

const App = () => (
  <div className={styles.content}>
    <Router history={history}>
      <Switch>
        <Route exact path={CONTACT} component={Contact} />
        <Route exact path={PRODUCTS} component={Products} />
        <Route exact path={US} component={Us} />
        <Route exact path={HOME} component={Home} />
        <Route render={() => <Redirect to={HOME} />} />
      </Switch>
    </Router>
  </div>
);

export default App;
