import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';


describe('Card', ()=> {
let fakeData;

beforeEach(()=> {
  fakeData = {
    birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    favorite: true,
    films: (5)["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
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
  }
});

  it ('should match the snapshot', () => {
    const wrapper = shallow(<Card key={fakeData.id} item={fakeData} handleFavorite={jest.fn()} isFavorited={false} />)
    expect(wrapper).toMatchSnapshot;
  })

  it('should match the favorited snapshot', () => {
    const wrapper = shallow(<Card key={fakeData.id} item={fakeData} handleFavorite={jest.fn()} isFavorited={true} />)
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should run handleFavorite prop when the Favorite button is clicked', () => {
    const wrapper = shallow(<Card key={fakeData.id} item={fakeData} handleFavorite={jest.fn()} isFavorited={true} />)
    wrapper.instance().handleFavorite = jest.fn();
    wrapper.find('.card-fav-btn').simulate('click');
    expect(wrapper.instance().handleFavorite).toHaveBeenCalledWith('pp-00');
  });

});
