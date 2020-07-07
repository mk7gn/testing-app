import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';

export /**
 * Creates a testing store with imported reducers, middleware and initial state
 * global: rootReducer
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @returns {Store} - Redux store
 */
const storeFactory = (initialState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddlewares(rootReducer, initialState);
}

/**
 * Return node(s) with the given data test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data test attribute for test
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'props', component.name);
  expect(propError).toBeUndefined();
}
