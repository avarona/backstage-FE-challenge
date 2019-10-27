import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('Button', () => {
  const wrapper = shallow(<Button text="Click me!" />);

  it('renders', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('is a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
});
