import React from 'react';
import {shallow} from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../../../test/testUtils'

const setup = (props={success: false}) => {
  const wrapper = shallow(<Congrats {...props}/>)
  return wrapper;
}

test('should render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats')

  expect(component.length).toBe(1);
})

test('should render empty message when "success" prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats')

  expect(component.text()).toBe('');
})

test('should render congratulation message when "success" prop is true', () => {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');

  expect(message.text().length).not.toBe(0);
})

test('should not throw warning with expected props', () => {
  const expectedProps = {success: false};

  checkProps(Congrats, expectedProps);
})