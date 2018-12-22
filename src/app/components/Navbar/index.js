import React, { PureComponent } from 'react';

import styles from './styles.module.scss';
import NavbarButton from './components/NavbarButton';

class Navbar extends PureComponent {
  state = {
    selected: false
  };

  render() {
    return (
      <div className={styles.container}>
        <NavbarButton
          name="prueba"
          selected={this.state.selected}
          onPress={() => this.setState({ selected: true })}
        />
      </div>
    );
  }
}

export default Navbar;
