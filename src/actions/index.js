import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
};

export function getSecretWord() {
  return (dispatch) => {
    return axios.get('http://localhost:3030/')
      .then((res) => {
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: res.data
        })
      })
  }
}

/**
 * Dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action;
 *
 * @function guessedWord
 * @export
 * @param {string} guessedWord - Guessed word
 * @returns {Function} - Redux thunk function
 */
export function guessWord(guessedWord) {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    })

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  }
}