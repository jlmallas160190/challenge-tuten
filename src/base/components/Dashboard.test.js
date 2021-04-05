import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

describe('Rendering Dashboard', () => {
  it('cardHeader contains title', () => {
    const wrapper = shallow(<Dashboard />);
    const cardHeaderWrapper = wrapper.find('#header');
    expect(cardHeaderWrapper.prop('title')).toEqual('Tuten Challenge');
  });
});
