import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from './Nav';

describe('Nav', ()=> {
  it('should match the snapshot with all data passed in correctly', () => {

    const wrapper = shallow( <Nav  />)

    expect(wrapper).toMatchSnapshot();
  });



});

