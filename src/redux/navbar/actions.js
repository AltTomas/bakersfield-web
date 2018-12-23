import { push } from 'react-router-redux';

import { stringArrayToObject } from '../utils';

export const actions = stringArrayToObject(['NAVEGATE'], '@@NAVBAR');

export const actionCreators = {
  navegate: (id, route) => async dispatch => {
    await dispatch({ type: actions.NAVEGATE, payload: id });
    dispatch(push(route));
  }
};

export default actionCreators;
