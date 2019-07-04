import React from 'react';
import './Card.css';

const Card = ({ item }) => {


  const Items = () => {
    if (item.type === 'people') {
      return (
        <>
          <p><span className="label">Birth Year</span>{item.birth_year}</p>
          <p><span className="label">Gender</span>{item.gender}</p>
          <p><span className="label">Height</span>{item.height}</p>
          <p><span className="label">Eye Color</span>{item.eye_color}</p>
        </>
      )
    }
    if (item.type === 'planet') {
      return (
        <>
          <p><span className="label">Terrain</span>{item.terrain}</p>
          <p><span className="label">Diameter</span>{item.diameter}</p>
          <p><span className="label">Population</span>{item.population}</p>
        </>
      )
    }
    if (item.type === 'vehicles') {
      return (
        <>
          <p><span className="label">Model</span>{item.model}</p>
          <p><span className="label">Class</span>{item.vehicle_class}</p>
          <p><span className="label">Number of Passengers</span>{item.passengers}</p>
        </>
      )
    }
  }
  
  return (
    <section className="card">
      <h3 className="card-header">{item.name}</h3>
      <div className="card-body">
        {Items()}
      </div>
      <footer className="card-footer"></footer>
    </section>
  )
}



export default Card;