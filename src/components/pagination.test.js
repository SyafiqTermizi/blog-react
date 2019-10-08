import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pagination from './Pagination';

Enzyme.configure({ adapter: new Adapter() })

const setup = (limit=5, count=10) => {
  const props = {
    getter: jest.fn(),
    count: 10,
    limit: 5,
    pageCount: (count/limit),
  };
  const enzymeWrapper = shallow(<Pagination {...props} />);

  return { props, enzymeWrapper };
}

describe('test Pagination component', () => {
  it('should have same number of <li /> as pageCount', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.page-number').length).toBe(2);
  });

  it('should call props.getter when next and prev button is clicked', () => {
    const { enzymeWrapper, props } = setup();

    const prevButton = enzymeWrapper.find('.prev');
    const nextButton = enzymeWrapper.find('.next');

    prevButton.props().onClick();
    expect(props.getter.mock.calls.length).toBe(1);

    nextButton.props().onClick();
    expect(props.getter.mock.calls.length).toBe(2);
  })
})