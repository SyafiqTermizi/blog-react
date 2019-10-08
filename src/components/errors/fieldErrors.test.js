import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FieldErrors from './FieldErrors';

Enzyme.configure({ adapter: new Adapter() });

describe('test FieldErrors component', () => {
  it('should have same number of li and number of error', () => {
    const props = { errors: ['error 1', 'error 2'] };
    const enzymeWrapper = shallow(<FieldErrors { ...props } />);
    expect(enzymeWrapper.find('li').length).toBe(2);
  });
});
