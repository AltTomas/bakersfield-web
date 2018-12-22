import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';

export const history = createHistory();

const deleteValue = (state, action) => {
  if (action.type === '@@redux-form/UNREGISTER_FIELD') {
    if (state) {
      const {
        values: { [action.payload.name]: unregistered, ...values }
      } = state;
      return { ...state, values };
    }
  }
  return state;
};

const form = formReducer.plugin({
  UTFORM: deleteValue
});

const reducers = combineReducers({
  form,
  router
});

const middlewares = [routerMiddleware(history)];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-composer Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => reducers(state, action);

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
