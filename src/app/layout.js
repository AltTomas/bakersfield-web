import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';

import * as Routes from 'app/components/Routes/constants';
import { history } from 'redux/store';

import Contact from './screens/Contact';
import Home from './screens/Home';
import styles from './styles.module.scss';

const App = () => (
  <div className={styles.content}>
    <Router history={history}>
      <Switch>
        <Route exact path={Routes.CONTACT} component={Contact} />
        <Route exact path={Routes.HOME} component={Home} />
        <Route render={() => <Redirect to={Routes.HOME} />} />
      </Switch>
    </Router>
  </div>
);

export default App;
