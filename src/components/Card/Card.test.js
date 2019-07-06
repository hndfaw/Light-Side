import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe.('Card', () => {
  it('should match the snapshot with all data passed correctly', () => {
    const wrapper = shallow(
      <Card
        title='banans'
        body='this shit is'
        id={1}
        removeIdea={jest.fn()}
        />
      );
      // console.log(wrapper.debug());
      expect(wrapper).toMatchSnapshot();
  });
})