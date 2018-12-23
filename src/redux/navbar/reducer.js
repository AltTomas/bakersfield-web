import Immutable from 'seamless-immutable';

import { actions } from './actions';

export const defaultState = {
  routeId: 0
};

/* eslint-disable complexity */
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.NAVEGATE: {
      return Immutable.merge(state, {
        routeId: action.payload
      });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */
