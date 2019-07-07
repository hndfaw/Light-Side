import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


describe ('App', ()=> {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(<App />);
     

    
  });

it('should match the snapshot', ()=> {
  expect(wrapper).toMatchSnapshot();
  }) 

  it('should toggle favorite ', () => {
    const fakeData = [{
      birth_year: "19BBY",
      favorite: true,
      gender: "male",
      id: "pp-0",
      mass: "77",
      name: "Luke Skywalker",
      type: "people",
    }]

     const expected = [{
      birth_year: "19BBY",
      favorite: false,
      gender: "male",
      id: "pp-0",
      mass: "77",
      name: "Luke Skywalker",
      type: "people",
    }]

    wrapper.instance().setState({data: fakeData})

    wrapper.instance().handleFavorite("pp-0")
    expect(wrapper.state('data')).toEqual(expected)
  })

  it('favCounter should increment/decrement faveCount in state', () => {

    const fakeData = [{
      birth_year: "19BBY",
      favorite: true,
      gender: "male",
      id: "pp-0",
      mass: "77",
      name: "Luke Skywalker",
      type: "people",
    }]

     const expected = [{
      birth_year: "19BBY",
      favorite: false,
      gender: "male",
      id: "pp-0",
      mass: "77",
      name: "Luke Skywalker",
      type: "people",
    }]

    wrapper.instance().setState({data: fakeData})
    wrapper.instance().setState({favCount: 0})
    wrapper.instance().favCounter()
    expect(wrapper.state('favCount')).toEqual(1)
  })


  it.skip('filterData should filter data by type and/or favorite', () => {

    const fakeData = [{
      favorite: true,
      id: "pp-0",
      type: "people",
    },
    {
      favorite: true,
      id: "pp-0",
      type: "vehicles",
    },
    {
      favorite: true,
      id: "pp-0",
      type: "people",
    }
  ]

     const expected = [{
      favorite: true,
      id: "pp-0",
      type: "people",
    },
    {
      favorite: true,
      id: "pp-0",
      type: "people",
    }]

    wrapper.instance().setState({data: fakeData})

    wrapper.instance().filterData('people')

    expect(wrapper(filterData).toEqual(expected))
  })


  it('updateAsideShow should toggle asideShow in state', () => {
    wrapper.instance().setState({asideShow: true})
    wrapper.instance().updateAsideShow()
    expect(wrapper.state('asideShow')).toEqual(false)
  })




  
});

