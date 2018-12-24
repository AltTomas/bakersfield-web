import React, { PureComponent } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { func, bool, string } from 'prop-types';

import styles from './styles.module.scss';

class NavbarButton extends PureComponent {
  render() {
    const { name, onPress, selected } = this.props;

    return (
      <ButtonBase
        onClick={onPress}
        disableRipple
        classes={{ root: `${styles.root} ${selected && styles.selected}` }}
      >
        {name}
      </ButtonBase>
    );
  }
}

NavbarButton.propTypes = {
  name: string,
  onPress: func,
  selected: bool
};

export default NavbarButton;
