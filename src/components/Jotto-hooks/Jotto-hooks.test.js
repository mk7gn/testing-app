import React from 'react';
import { shallow } from 'enzyme';

import JottoHooks from './Jotto-hooks';
import { findByTestAttr } from '../../../test/testUtils';

test('should render `Jotto-hooks` without error', () => {
  const wrapper = shallow(<JottoHooks />);
  const component = findByTestAttr(wrapper, 'component-jotto-hooks');

  expect(component.length).toBe(1);
});