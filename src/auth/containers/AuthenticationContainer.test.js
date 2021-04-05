import React from 'react';
import AuthenticationContainer from './AuthenticationContainer';
import { shallow } from 'enzyme';

describe('Rendering AuthenticationContainer', () => {
  it('cardHeader contains title', () => {
    const wrapper = shallow(<AuthenticationContainer />);
    const cardHeaderWrapper = wrapper.find('header');
    expect(cardHeaderWrapper.prop('title')).toEqual('Tuten');
  });
});
