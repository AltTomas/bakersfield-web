import React, { PureComponent } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';

import styles from './styles.module.scss';

class NavbarButton extends PureComponent {
  render() {
    const { name, onPress, selected } = this.props;

    return (
      <ButtonBase onClick={onPress} classes={{ root: `${styles.root} ${selected && styles.selected}` }}>
        {name}
      </ButtonBase>
    );
  }
}

export default NavbarButton;
