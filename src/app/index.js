import React, { Component } from 'react';

import App from './layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles.module.scss';

class AppContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Navbar />
        </div>
        <App />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
