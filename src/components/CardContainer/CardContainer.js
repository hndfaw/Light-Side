import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card.js'



const CardContainer = ({ data }) => {

const Cards = data.map( item => {
 return <Card key={Date.now()} item={item} />

  })

  return (
    <main className="main">
      { Cards }
    </main>
  )


}



export default CardContainer;