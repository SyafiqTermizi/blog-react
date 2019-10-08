import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NonFieldErrors from './NonFieldErros';

Enzyme.configure({ adapter: new Adapter() });

describe('test NonFieldErrors component', () => {
  it('should render the same number of li and number of error', () => {
    const props = { errors: ['error 1', 'error 2', 'error 3']};
    const enzymeWrapper = shallow(<NonFieldErrors { ...props } />);
    expect(enzymeWrapper.find('li').length).toBe(3);
  })
})