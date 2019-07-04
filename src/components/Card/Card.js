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
      console.log(item)
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

// const PlanetCard = ({ planet }) => {
//   return (
//     <section className="card">
//       <h2 className="card-header">{planet.name}</h2>
//       <div className="card-body">
//         <p>Terrain: {planet.terrain}</p>
//         <p>Diameter: {planet.diameter}</p>
//         <p>Population: {planet.population}</p>
//       </div>
//       <footer className="card-footer"></footer>
//     </section>
//   )
// }

// const VehicleCard = ({ vehicle }) => {
//   return (
//     <section className="card">
//       <h2 className="card-header">{person.name}</h2>
//       <div className="card-body">
//         <p>Model: {vehicle.model}</p>
//         <p>Class: {vehicle.vehicle_class}</p>
//         <p>Number of Passengers: {vehicle.passengers}</p>
//       </div>
//       <footer className="card-footer"></footer>
//     </section>
//   )
// }



export default Card;