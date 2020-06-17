import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from './Counter';
import { findByTestAttr } from '../../../test/testUtils'

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}, state=null) => {
  const wrapper = shallow(<Counter {...props}/>)
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}

test('should render without error', () => {
  const wrapper = setup();
  const counterComponent = findByTestAttr(wrapper, 'component-counter');

  expect(counterComponent.length).toBe(1);
})

test('should render counter display', () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, 'counter-display');

  expect(counter.length).toBe(1);
})

test('should render increment count button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');

  expect(button.length).toBe(1);
})

test('counter should start at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');

  expect(initialCounterState).toBe(0);
})

test('clicking increment button should update counter display', () => {
  const counter = 5;
  const wrapper = setup(null, {counter});
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
})

test('should render decrement button', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1);
})

test('clicking decrement buttont should update counter display', () => {
  const counter = 8;
  const wrapper = setup(null, {counter});
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
})

describe('decrement flow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');
    wrapper.update();
  })

  test('should not set counter display below 0', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(0);
  })

  test('should show error when trying decrement counter below 0', () => {
    const errorMessage = findByTestAttr(wrapper, 'counter-error-message');
    expect(errorMessage.hasClass('hidden')).toBe(false);
  })

  test('should clear error after increment button clicked', () => {
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');
    const errorMessage = findByTestAttr(wrapper, 'counter-error-message');
    expect(errorMessage.hasClass('hidden')).toBe(true);
  })
})
