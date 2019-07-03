import React, { Component } from 'react';
import './App.css';
import Aside from './components/Aside/Aside.js';
import PeopleCardContainer from './components/PeopleCardContainer/PeopleCardContainer.js'
import Nav from "./components/Nav/Nav.js";
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
    this.setState({ films : data.films.results})
    this.setState({ people : data.people.results })
    this.setState({ planets : data.planets.results })
    this.setState({ vehicles : data.vehicles.results })

    // const filmsURL = 'https://swapi.co/api/films/'
    // fetch(filmsURL)
    //   .then(response => response.json())
    //   .then(data => data.results)
    //   .then(films => this.setState({ films }))
    //   .catch(error => this.setState({ error : error.message }))
  }
  
  render() {
    return (
      <div className="App">
        {this.state.films.length && <Aside films={this.state.films} />}
        {!this.state.films.length && <p>Loading....</p> }
        {!this.state.people.length && <p>Loading....</p> }
        {this.state.people.length && <PeopleCardContainer people={this.state.people} />}
        <Nav />
      </div>
    );
  }

}

export default App;
