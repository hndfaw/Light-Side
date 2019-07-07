import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import star from '../../images/star.png';
import starActive from '../../images/star-active.png';


class Card extends Component {
 
  
  generateItems = () => {
    const {item} = this.props;
    if (item.type === 'people') {

      return (
        <>
          <p className="body-item"><span className="label">Birth Year</span>{item.birth_year}</p>
          <p className="body-item"><span className="label">Gender</span>{item.gender}</p>
          <p className="body-item"><span className="label">Height</span>{item.height}</p>
          <p className="body-item"><span className="label">Eye Color</span>{item.eye_color}</p>
        </>
      )
    }
    if (item.type === 'planets') {

      return (
        <>
          <p className="body-item"><span className="label">Terrain</span>{item.terrain}</p>
          <p className="body-item"><span className="label">Diameter</span>{item.diameter}</p>
          <p className="body-item"><span className="label">Population</span>{item.population}</p>
        </>
      )
    }
    if (item.type === 'vehicles') {

      return (
        <>
          <p className="body-item"><span className="label">Model</span>{item.model}</p>
          <p className="body-item"><span className="label">Class</span>{item.vehicle_class}</p>
          <p className="body-item"><span className="label">Number of Passengers</span>{item.passengers}</p>
        </>
      )
    }
  }


  
  render () {
    const {handleFavorite} = this.props;
    const {favorite, name, id} = this.props.item;
    const starType = !favorite ? star : starActive;
    return (
      <section className="card">
        <h3 className="card-header">{name}</h3>
        <div className="card-body">
          {this.generateItems()}
        </div>
        <footer className="card-footer">
          <img className="card-fav-btn" src={starType} onClick={() => handleFavorite(id)} alt="favorite button"/>
        </footer>
      </section>
    )
  }
  
}

Card.propTypes = {
  item : PropTypes.object,
  handleFavorite : PropTypes.func,
  favorite : PropTypes.bool,
  name : PropTypes.string,
  id: PropTypes.number
}



export default Card;