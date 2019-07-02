import React from 'react';
import './PeopleCardContainer.css'
import Card from '../Card/Card.js'


const PeopleCardContainer = ({ people }) => {

const peopleCards = people.map( person => {
 
 return <Card key={Date.now()} person={person} />
  
  })

  return (
    <main className="main">
      { peopleCards }
    </main>
  )


}



export default PeopleCardContainer;