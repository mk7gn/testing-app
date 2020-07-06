import React from 'react';
import {shallow} from 'enzyme';

import GuessedWords from './GuessedWords';
import { findByTestAttr, checkProps } from '../../../../test/testUtils'

const defaultProps = {
    guessedWords: [
      {
        guessedWord: 'train',
        letterMatchCount: 3
      }
    ],
  }

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps}/>)
}


test('should render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-guessed-words')

  expect(component.length).toBe(1);
})

test('should not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({guessedWords: []});
  })

  test('should render instruction to guess the word', () => {
      const instruction = findByTestAttr(wrapper, 'guess-instruction');
      expect(instruction.text().length).not.toBe(0);
  })
})

describe('if there are words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  })

  test('should render "guessed words" section', () => {

  })
})