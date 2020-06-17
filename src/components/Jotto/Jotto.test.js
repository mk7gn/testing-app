import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Jotto from './Jotto';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('first test', () => {
  // const wrapper = shallow(<Jotto />);
})