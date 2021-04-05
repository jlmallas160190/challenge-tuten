import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Rendering components', () => {
  it('render app', () => {
    shallow(<App />);
  });
});
