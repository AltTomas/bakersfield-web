import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import ACard from 'app/components/ACard';

import styles from './styles.module.scss';
import HomeItem from './components/HomeItem';
import { items } from './constants';

class Home extends PureComponent {
  renderItems = item => <HomeItem item={item} />;

  render() {
    return (
      <ACard>
        <Grid container spacing={24}>
          {items.map(this.renderItems)}
        </Grid>
      </ACard>
    );
  }
}

export default Home;
