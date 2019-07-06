import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


describe ('App', ()=> {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

it('should match the snapshot', ()=> {
  expect(wrapper).toMatchSnapshot();
  }) 



  
});

