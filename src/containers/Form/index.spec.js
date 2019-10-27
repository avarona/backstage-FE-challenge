import React from 'react';
import { shallow } from 'enzyme';
import Form from './';

describe('Form', () => {
  const wrapper = shallow(<Form />);

  it('renders', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('is a form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('has fields', () => {
    expect(wrapper.find('Input').exists()).toBe(true);
    expect(wrapper.find('Button').exists()).toBe(true);
  });
});
