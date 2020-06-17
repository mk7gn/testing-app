import React from 'react';
import {shallow} from 'enzyme';

import App from './App';

test('should render without error', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toBeTruthy();
})
