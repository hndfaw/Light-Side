import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card.js'



const CardContainer = ({ data, handleFavorite, favCount }) => {
    const favNote = favCount === 0 && <p className="add-fav-notes">You don't have any favorite cards...</p>
    const mainStyle = favCount === 0 ? {display: 'block'} : {display: 'grid'}
  const Cards = data.map( item => {
  return <Card key={item.id} item={item} handleFavorite={handleFavorite} />
  })

  return (
    <main style={mainStyle} className="main">
      { favNote }
      { Cards }
    </main>
  )


}



export default CardContainer;