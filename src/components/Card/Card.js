import React from 'react';
import './Card.css';
import star from '../../images/star.png';
import starActive from '../../images/star-active.png';


class Card extends React.Component {
  state = {
    favCount: this.props.favCount
  }

  // console.log(item)
   Items = () => {
    const {item} = this.props;
    if (item.type === 'people') {
      // console.log('people')
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
      // console.log('planet')
      return (
        <>
          <p className="body-item"><span className="label">Terrain</span>{item.terrain}</p>
          <p className="body-item"><span className="label">Diameter</span>{item.diameter}</p>
          <p className="body-item"><span className="label">Population</span>{item.population}</p>
        </>
      )
    }
    if (item.type === 'vehicles') {
      // console.log('vehicles')
      return (
        <>
          <p className="body-item"><span className="label">Model</span>{item.model}</p>
          <p className="body-item"><span className="label">Class</span>{item.vehicle_class}</p>
          <p className="body-item"><span className="label">Number of Passengers</span>{item.passengers}</p>
        </>
      )
    }
  }

   run = (e) => {
    this.props.handleFavorite(e.target.id)
  }
  render () {
    const starType = !this.props.item.favorite ? star : starActive;
    return (
      <section className="card">
        <h3 className="card-header">{this.props.item.name}</h3>
        <div className="card-body">
          {this.Items()}
        </div>
        <footer className="card-footer">
          <img className="car-fav-btn" src={starType} onClick={this.run} id={this.props.item.id} alt="favorite button"/>
          {/* <button >F</button> */}
        </footer>
      </section>
    )
  }
  
}



export default Card;