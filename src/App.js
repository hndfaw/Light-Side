import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside.js';
import CardContainer from './components/CardContainer/CardContainer.js'
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js'
import data from './TestData';

class App extends Component {
  constructor(){
    super()
    this.state = {
      films: data.films.results,
      data: [],
      favCount: 0,
      // people: [],
      // planets: [],
      // vehicles: [],
      // favorites: data.favorites,
      error: ''
    }
  }
  
  componentDidMount() {
    // const films =  data.films.results.map((film, i) => {
    //   film.type = 'films';
    //   film.id = `fl-${i}`;
    //   return film;
    // })
    const people =  data.people.results.map((person, i) => {
      person.type = 'people';
      person.id = `pp-${i}`;
      person.favorite = false;
      return person;
    })

    const planets =  data.planets.results.map((planet, i) => {
      planet.type = 'planets';
      planet.id = `pl-${i}`;
      planet.favorite = false;
      return planet;
    })

    const vehicles =  data.vehicles.results.map((vehicle, i) => {
      vehicle.type = 'vehicles';
      vehicle.id = `vh-${i}`;
      vehicle.favorite = false;
      return vehicle;
    })

    this.setState({ data: [...people, ...planets, ...vehicles] })

    // const filmsURL = 'https://swapi.co/api/films/'
    // fetch(filmsURL)
    //   .then(response => response.json())
    //   .then(data => data.results)
    //   .then(films => this.setState({ films }))
    //   .catch(error => this.setState({ error : error.message }))
  }

  handleFavorite = (id) => {

    const items = this.state.data.map(item => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      }
      return item
    });
    this.setState({data: [...items]})
    this.favCounter();
  }

  favCounter = () => {
    let x = 0;
     this.state.data.forEach(i => {
      if (i.favorite) {
        x++;
      }
    }
    )
    this.setState({favCount: x})
  }

   filterData = (type) => {

    if (type !== 'favorite') {
      return this.state.data.filter(item => 
        item.type === type
        )
     } else {
      return this.state.data.filter(item => 
        item.favorite === true
        )
     }
   }
  
  render() {
    return (
      
      <div className="App">
        {this.state.films.length && <Aside films={this.state.films} />}
        {/* {!this.state.films.length && <p>Loading....</p> }
        {!this.state.people.length && <p>Loading....</p> } */}
        {/* {this.state.people.length && <PeopleCardContainer people={this.state.people} />} */}
        <Route exact path='/' component={Home} />
        <Route exact path='/people' render={()=> <CardContainer handleFavorite={this.handleFavorite} data={this.filterData('people')} />} />
        <Route exact path='/planets' render={()=> <CardContainer handleFavorite={this.handleFavorite} data={this.filterData('planets')} />}/>
        <Route exact path='/vehicles' render={()=> <CardContainer handleFavorite={this.handleFavorite} data={this.filterData('vehicles')} />}/>
        <Route exact path='/favorites' render={()=> <CardContainer  handleFavorite={this.handleFavorite} data={this.filterData('favorite')} />}/>
        <Nav favCount={this.state.favCount}/>
      </div>
    );
  }

}

export default App;
