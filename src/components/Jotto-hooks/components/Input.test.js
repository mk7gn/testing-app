import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttr, checkProps } from '../../../../test/testUtils';

const setup = (props={ secretWord: 'party' }) => shallow(<Input {...props} />, );

describe('Input component', () => {
  test('should render Input component without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');

    expect(inputComponent.length).toBe(1);
  });

  test('should not throw warning with expected props', () => {
    const expectedProps = { secretWord: 'train' };

    checkProps(Input, expectedProps);
  })
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('should clear input field after submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    const mockEvent = { preventDefault () {}}
    submitButton.simulate('click', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  })
});
