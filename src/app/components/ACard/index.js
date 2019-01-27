import React, { PureComponent } from 'react';
import { bool, string, func } from 'prop-types';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

import { cardActionsTypes } from 'types/commonTypes';
import ATouchableWithoutFeedback from 'app/components/ATouchableWithoutFeedback';

import styles from './styles.module.scss';
import CardFooter from './components/CardFooter';

class UTCard extends PureComponent {
  state = { expandIsSelected: false, showChildren: false };

  handleOnPress = event => {
    event.stopPropagation();
    if (this.props.onClick) this.props.onClick();
    this.setState(prevState => ({ expandIsSelected: !prevState.expandIsSelected }));
    this.handleColapsibleChildrenUnmount();
  };

  handleColapsibleChildrenUnmount = () => {
    if (this.state.showChildren) return setTimeout(() => this.setState({ showChildren: false }), 1000);
    return this.setState({ showChildren: true });
  };

  render() {
    const { header, footer, children, horizontal, className, isCollapsible, style } = this.props;

    return !isCollapsible ? (
      <div className={`${styles.base} ${!horizontal && styles.column} ${className}`} style={style}>
        {header && <div className={styles.headerContent}>{header}</div>}
        {children}
        {footer && <CardFooter footer={footer} />}
      </div>
    ) : (
      <div className={`${styles.base} ${styles.column} ${className}`}>
        <ATouchableWithoutFeedback onClick={this.handleOnPress} className={styles.header}>
          <div className={styles.headerContent}>{header}</div>
          <IconButton onClick={this.handleOnPress}>
            {this.state.expandIsSelected ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ATouchableWithoutFeedback>
        <div className={this.state.expandIsSelected ? styles.active : styles.inactive}>{children}</div>
        {footer && <CardFooter footer={footer} />}
      </div>
    );
  }
}

UTCard.propTypes = {
  header: cardActionsTypes.header,
  footer: cardActionsTypes.footer,
  horizontal: bool,
  className: string,
  isCollapsible: bool,
  onClick: func
};
export default UTCard;
