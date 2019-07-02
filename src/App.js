import React, { Component } from 'react';
import './App.css';
import Aside from './components/Aside/Aside.js'
import data from './TestData'

class App extends Component {
  constructor(){
    super()
    this.state = {
      films: [],
      people: [],
      error: ''
    }
  }
  
  componentDidMount() {
    this.setState({ films : data.films.results })
    this.setState({ people : data.people.results })
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
        <h1>APP COMPONENT</h1>
        {this.state.films.length && <Aside films={this.state.films} />}
        {!this.state.films.length && <p>Loading....</p> }
      </div>
    );
  }

}

export default App;
