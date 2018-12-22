import React, { PureComponent } from 'react';
import { t } from 'i18next';

import AText from 'app/components/AText';

import styles from './styles.module.scss';

class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.socialMediaContainer}>
          <AText xxlarge semibold className={styles.font}>
            {t('Footer:followUs')}
          </AText>
        </div>
      </div>
    );
  }
}

export default Footer;
