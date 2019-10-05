import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from './Loading';

Enzyme.configure({ adapter: new Adapter() });

describe('test Loading component', () => {
  it('should contain Loading... text', () => {
    const enzymeWrapper = shallow(<Loading />);
    expect(enzymeWrapper.find('h5').text()).toEqual('Loading ...');
  })
})