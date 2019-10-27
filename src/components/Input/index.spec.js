import React from 'react';
import { shallow } from 'enzyme';
import Input from './';

describe('Input', () => {
  const wrapper = shallow(<Input value="I'm an input" onChange={jest.fn()} />);

  it('renders', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('is an input', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });
});
