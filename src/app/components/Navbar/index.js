import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';

import NavbarActions from 'redux/navbar/actions';

import styles from './styles.module.scss';
import NavbarButton from './components/NavbarButton';
import { options } from './constants';

class Navbar extends PureComponent {
  handleNav = option => () => {
    this.props.dispatch(NavbarActions.navegate(option.id, option.route));
  };

  render() {
    return (
      <div className={styles.container}>
        {options.map(option => (
          <NavbarButton
            name={option.name}
            selected={this.props.routeId === option.id}
            onPress={this.handleNav(option)}
          />
        ))}
      </div>
    );
  }
}

Navbar.propTypes = {
  routeId: number
};

const mapStateToProps = store => ({
  routeId: store.navbar.routeId
});

export default connect(mapStateToProps)(Navbar);
