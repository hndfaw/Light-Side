import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home.js';

describe('Home', ()=> {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  })

})