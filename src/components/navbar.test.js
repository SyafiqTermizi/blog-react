import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Navbar } from './Navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('test Navbar component', () => {
  it('should show login button if no token is provided', () => {
    const auth = { token: '' };
    const enzymeWrapper = shallow(<Navbar auth={auth} />);

    expect(enzymeWrapper.exists('#login')).toBe(true);
    expect(enzymeWrapper.exists('#add')).toBe(false);
  });

  it('should show add post button if token is provided', () => {
    const auth = { token: 'token', username: 'username' };
    const enzymeWrapper = shallow(<Navbar auth={auth} />);

    expect(enzymeWrapper.exists('#login')).toBe(false);
    expect(enzymeWrapper.exists('#add')).toBe(true);
    expect(enzymeWrapper.find('#logout').text()).toEqual('Logout')
  })
});