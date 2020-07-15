import React from 'react';
import {shallow} from 'enzyme';

import Jotto, { UnconnectedJotto } from './Jotto';
import { storeFactory, findByTestAttr } from '../../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Jotto store={store}/>).dive().dive();
  return wrapper
}

describe('', () => {
  let wrapper;
  const initialState = {
    secretWord: 'party',
    success: true,
    guessedWords: [{
      guessedWord: 'train',
      letterMatchCount: 3
    }]
  }
  beforeEach(() => {
    wrapper = setup(initialState);
  })

  test('should render component without error', () => {
    const component = findByTestAttr(wrapper, 'component-app');

    expect(component.length).toBe(1);
  });

  test('should have access to a `success` prop', () => {
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(initialState.success);
  });

  test('should have access to a `secretWord` prop', () => {
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(initialState.secretWord);
  });

  test('should have access to a `guessedWords` props', () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toEqual(initialState.guessedWords);
  })

  test('should have a `getSecretWord` action creator as a function prop', () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
});

test('should run `getSecretWord` on component mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }
  const wrapper = shallow(<UnconnectedJotto {...props} />);

  wrapper.instance().componentDidMount();

  const getSecretWordMockCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordMockCallCount).toBe(1);
})

