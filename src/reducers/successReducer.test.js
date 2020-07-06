import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('should return false when no action is passed', () => {
  const state = successReducer(undefined, {});

  expect(state).toBe(false);
});

test('should return true upon receiving an action of type `CORRECT_GUESS`', () => {
  const state = successReducer(false, { type: actionTypes.CORRECT_GUESS });

  expect(state).toBe(true);
});