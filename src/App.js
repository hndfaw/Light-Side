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
      asideShow: true,
      error: ''
    }
  }

  componentDidMount() {
 
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
    this.favCounter(items);
  }

  favCounter = (items) => {
    let numOfFavorites = 0;
     items.forEach(i => {
      if (i.favorite) {
        numOfFavorites++;
      }
    }
    )
    this.setState({favCount: numOfFavorites})
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
   
   updateAsideShow = () => {
    this.setState({asideShow: !this.state.asideShow})
   }

  render() {
    const {films, favCount, data, asideShow} = this.state;

    return (
      <div className="App">
        {(films.length !== 0) && <Aside films={films} updateAsideShow={this.updateAsideShow} asideShow={asideShow}/>}
        {!this.state.data && <p>Loading....</p> } 

        <Route exact path='/' component={Home} />
        <Route exact path='/people' render={({match})=> {

          return (data.length !== 0) && <CardContainer handleFavorite={this.handleFavorite} data={this.filterData('people')} path={match.path} updateCurrentPath={this.updateCurrentPath} asideShow={asideShow}/>
          }} />

        <Route exact path='/planets' render={({match})=> {
        return (data.length !== 0)  && <CardContainer handleFavorite={this.handleFavorite} data={this.filterData('planets')} path={match.path} updateCurrentPath={this.updateCurrentPath} asideShow={asideShow}/>}}/>


        <Route exact path='/vehicles' render={({match})=> {
        return (data.length !== 0) &&  <CardContainer handleFavorite={this.handleFavorite} data={this.filterData('vehicles')} path={match.path} updateCurrentPath={this.updateCurrentPath} asideShow={asideShow}/>}}/>

        <Route exact path='/favorites' render={({match})=> {
        return (data.length !== 0) && <CardContainer  handleFavorite={this.handleFavorite} data={this.filterData('favorite')} favCount={favCount} path={match.path} updateCurrentPath={this.updateCurrentPath} asideShow={asideShow}/> }} />

        <Nav favCount={favCount}/>
      </div>
    );
  }

}

export default App;
