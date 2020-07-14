import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttr } from '../../../../test/testUtils';
import { storeFactory } from '../../../../test/testUtils';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store}/>).dive().dive();
  return wrapper;
}

describe('render', () => {
  describe('word had not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: false};
      wrapper = setup(initialState);
    })
    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test('should render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');

      expect(inputBox.length).toBe(1);
    });

    test('should render submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');

      expect(button.length).toBe(1);
    });
  });

  describe('word has beed guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: true};
      wrapper = setup(initialState);
    });
    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test('should not render input component', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');

      expect(inputBox.length).toBe(0);
    });

    test('should not render submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');

      expect(button.length).toBe(0);
    });
  });
});

describe('update state', () => {

});

describe('redux-props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
