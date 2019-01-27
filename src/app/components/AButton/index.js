import React from 'react';
import { bool, func, string } from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { retrieveClassNamesFromProps } from 'utils/styleUtils';

import styles from './styles.module.scss';

const variants = [
  'small',
  'medium',
  'large',
  'blue',
  'darkBlue',
  'gray',
  'green',
  'white',
  'disabled',
  'rounded'
];

const UTButton = props => {
  const size = props.small ? 'small' : props.large ? 'large' : 'medium';

  const style = retrieveClassNamesFromProps(
    variants,
    styles,
    props,
    props.flat ? 'Flat' : props.outlined && 'Outlined'
  );

  return (
    <Button
      type={props.type}
      size={size}
      variant={
        props.flat
          ? 'text'
          : props.fab
          ? 'fab'
          : props.extendedFab
          ? 'extendedFab'
          : props.outlined
          ? 'outlined'
          : 'contained'
      }
      disabled={props.disabled || props.loading}
      onClick={props.onPress}
      classes={{
        root: `${
          props.flat ? styles.baseFlat : props.outlined ? styles.baseOutlined : styles.base
        } ${style} ${props.uppercase && styles.uppercase} ${props.lowercase && styles.lowercase} ${
          props.className
        }`,
        label: styles.labelFullWidth
      }}
    >
      {props.children}
      {props.loading && <CircularProgress size={24} className={styles.buttonProgress} />}
    </Button>
  );
};

UTButton.propTypes = {
  small: bool,
  large: bool,
  flat: bool,
  outlined: bool,
  fab: bool,
  extendedFab: bool,
  disabled: bool,
  loading: bool,
  type: string,
  onPress: func,
  className: string,
  uppercase: bool,
  lowercase: bool
};

export default UTButton;
