import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReadMore from './ReadMore';

Enzyme.configure({ adapter: new Adapter() });

describe('test ReadMoreComponent', () => {
  it('should render only 300 character if the text is long', () => {
    const text = 'Whether article spirits new her covered hastily sitting her. \
Money witty books nor son add. Chicken age had evening believe \
but proceed pretend mrs. At missed advice my it no sister. Miss \
told ham dull knew see she spot near can. Spirit her entire her \
called. Building mr concerns servants in he outlived am \
breeding. He so lain good miss when sell some at if. Told hand \
so an rich gave next. How doubt yet again see son smart. While \
mirth large of on front. Ye he greater related adapted proceed \
entered an. Through it examine express promise no. Past add \
size game cold girl off how old.';
    
    const enzymeWrapper = shallow(<ReadMore text={text} className='test' />);
    const expectedOutput = 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. Building mr concerns servants in he outl.....'
    expect(enzymeWrapper.find('p').text()).toEqual(expectedOutput);
  });

  it('should render exact text if the text is short', () => {
    const text = 'short text';
    const enzymeWrapper = shallow(<ReadMore text={text} className='test' />);
    expect(enzymeWrapper.find('p').text()).toEqual('short text')
  });
})
