import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {string} state - Secret word
 * @param {object} action - action to be reduced
 * @returns {string} - new secretWord state
*/
export default function(state = null, action) {
  switch (action.type) {
    case (actionTypes.SET_SECRET_WORD):
      return action.payload;
    default:
      return state;
  }
}