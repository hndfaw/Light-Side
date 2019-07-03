import React from 'react';
import './PeopleCardContainer.css'
import PeopleCard from '../Card/PeopleCard.js'
import PlanetCard from '../Card/PlanetCard.js'


const PeopleCardContainer = ({ people, planets }) => {
console.log(people)
const peopleCards = people.map( person => {
 return <PeopleCard key={Date.now()} person={person} />
  
  })

  // const planetCards = planets.map(planet => {
  //   return <PlanetCard key={Date.now()} planet={planet} />
  // })

  return (
    <main className="main">
      { peopleCards }
      {/* { planetCards } */}
    </main>
  )


}



export default PeopleCardContainer;