import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', ()=> {
  it('should match the snapshot with all data passed in correctly', () => {

    const wrapper = shallow( <Nav  />)

    expect(wrapper).toMatchSnapshot();
  });



});

