import React from 'react';
import { shallow } from 'enzyme';
import LogItem from './';

describe('LogItem', () => {
  const item = {
    datetime: 'what',
    value: 'am',
    number: 'I',
    occurrences: 'doing',
    last_datetime: '?',
  }

  const wrapper = shallow(<LogItem item={item} />);

  it('renders', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('is a list of properties', () => {
    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.find('li').exists()).toBe(true);
  });
});
