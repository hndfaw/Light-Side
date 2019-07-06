import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer.js'

describe('CardContainer', ()=> {

it('should match the snapshot with data passed correctly', ()=> {

  const data = [ {
    birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    favorite: false,
    films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
    gender: "male",
    hair_color: "blond",
    height: "172",
    homeworld: "https://swapi.co/api/planets/1/",
    id: "pp-0",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
    species: ["https://swapi.co/api/species/1/"],
    starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
    type: "people",
    url: "https://swapi.co/api/people/1/",
    vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
  }]

  const wrapper = shallow (<CardContainer
  data={data}
  handleFavorite={jest.fn()} 
  favCount={0}
  />);
  
  expect (wrapper).toMatchSnapshot();

});


});
