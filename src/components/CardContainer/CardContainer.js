import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css'
import Card from '../Card/Card.js'


const CardContainer = ({ data, handleFavorite, favCount, asideShow }) => {

  const favNote = favCount === 0 && <p className="add-fav-notes">You don't have any favorite cards...</p>;
  
  const mainWidth = asideShow ? '50%' : '80%';

  const mainStyle = favCount === 0 ? {display: 'block', width: mainWidth, transition: '0.5s'} : {display: 'grid', width: mainWidth, transition: '0.5s'};
  
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

CardContainer.propTypes = {
  data : PropTypes.array,
  handleFavorite : PropTypes.func,
  favCount : PropTypes.number,
  asideShow : PropTypes.bool
}



export default CardContainer;