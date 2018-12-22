import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import App from './layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles.module.scss';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

class AppContainer extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <Navbar />
          </div>
          <App />
          <Footer />
        </div>
      </JssProvider>
    );
  }
}

export default AppContainer;
