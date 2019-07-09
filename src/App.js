import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside.js';
import CardContainer from './components/CardContainer/CardContainer.js'
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import { fetchFilms, fetchPeople, fetchPlanets, fetchVehicles } from './apiCalls.js';
import loadingImage from './images/loading-y.gif'

class App extends Component {
  constructor(){
    super()
    this.state = {
      films: [],
      data: [],
      favCount: 0,
      asideShow: true,
      error: '',
    }
  }
componentDidMount() {

fetchFilms().then(films =>
    this.setState({films: films.results})
  )

  fetchPeople().then(people =>
    people.results.forEach((person, i) => {
      person.type = 'people';
      person.id = `pe-${i}`;
      person.favorite = false;
      this.setState({data: [...this.state.data, person]})
    })
  )

  fetchPlanets().then(planets =>
    planets.results.forEach((planet, i) => {
      planet.type = 'planets';
      planet.id = `pl-${i}`;
      planet.favorite = false;
      this.setState({data: [...this.state.data, planet]})
    })
  )

  fetchVehicles().then(vehicles =>
    vehicles.results.forEach((vehicle, i) => {
      vehicle.type = 'vehicles';
      vehicle.id = `vh-${i}`;
      vehicle.favorite = false;
      this.setState({data: [...this.state.data, vehicle]})
    })
  )
    
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
    let numOfFavorites = 0;
     this.state.data.forEach(i => {
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
        {((films.length === 0) || (data.length === 0)) && <div className="loading-container">
          <img className="loading" src={loadingImage} alt="loading films"/>
          </div>}

        {(films.length !== 0) && <Aside films={films} updateAsideShow={this.updateAsideShow} asideShow={asideShow}/> }

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
