import React from 'react';
import { shallow } from 'enzyme';
import Logger from './';

describe('Logger', () => {
  describe('with logs', () => {
    const logs = ['1', '2', '3'];
    const wrapper = shallow(<Logger log={logs} />);

    it('renders', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('has a LogItem', () => {
      expect(wrapper.find('LogItem').exists()).toBe(true);
    });
  });

  describe('with no logs', () => {
    const wrapper = shallow(<Logger log={[]} />);

    it('renders', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('does not have a LogItem', () => {
      expect(wrapper.find('LogItem').exists()).toBe(false);
    });
  });
});
