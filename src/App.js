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
      films: [],
      people: [],
      planets: [],
      vehicles: [],
      error: ''
    }
  }
  
  componentDidMount() {
    const films =  data.films.results.map((film, i) => {
      film.type = 'film';
      film.id = i;
      return film;
    })
    const people =  data.people.results.map((person, i) => {
      person.type = 'people';
      person.id = i;
      return person;
    })

    const planets =  data.planets.results.map((planet, i) => {
      planet.type = 'planet';
      planet.id = i;
      return planet;
    })

    const vehicles =  data.vehicles.results.map((vehicle, i) => {
      vehicle.type = 'vehicles';
      vehicle.id = i;
      return vehicle;
    })

    this.setState({ films, people, planets, vehicles })


    // const filmsURL = 'https://swapi.co/api/films/'
    // fetch(filmsURL)
    //   .then(response => response.json())
    //   .then(data => data.results)
    //   .then(films => this.setState({ films }))
    //   .catch(error => this.setState({ error : error.message }))
  }
  
  render() {
    // console.log(this.state.films)
    return (
      <div className="App">
        {this.state.films.length && <Aside films={this.state.films} />}
        {!this.state.films.length && <p>Loading....</p> }
        {!this.state.people.length && <p>Loading....</p> }
        {/* {this.state.people.length && <PeopleCardContainer people={this.state.people} />} */}
        <Route exact path='/' component={Home} />
        <Route exact path='/people' render={()=> <CardContainer data={this.state.people} />} />
        <Route exact path='/planets' render={()=> <CardContainer data={this.state.planets} />}/>
        <Route exact path='/vehicles' render={()=> <CardContainer data={this.state.vehicles} />}/>
        <Nav />
      </div>
    );
  }

}

export default App;
