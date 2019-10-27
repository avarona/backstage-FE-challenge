import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('includes the Form Component', () => {
    expect(wrapper.find('Form').exists()).toBe(true);
  });
});
