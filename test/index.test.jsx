import React from 'react';
import { shallow } from 'enzyme';
import AvailableImage from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<AvailableImage />);
  expect(wrapper.find('.AvailableImage').length).toBe(1);
});
