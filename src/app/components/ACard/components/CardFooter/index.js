import React from 'react';

import { cardActionsTypes } from 'types/commonTypes';
import AButton from 'app/components/AButton';

import styles from './styles.module.scss';

const CardFooter = ({ footer }) => (
  <div className={styles.base}>
    {footer.map(button => (
      <AButton
        flat={button.flat}
        key={button.name}
        onPress={button.onPress}
        loading={button.loading}
        className={styles.button}
        disabled={button.disabled}
      >
        {button.name}
      </AButton>
    ))}
  </div>
);

CardFooter.propTypes = {
  footer: cardActionsTypes.footer
};

export default CardFooter;
