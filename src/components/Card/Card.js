import React from 'react';
import './Card.css';

const Card = ({ item }) => {


  const Items = () => {
    if (item.type === 'people') {
      return (
        <div className="card-body">
        <p>Birth Year: {item.birth_year}</p>
        <p>Gender: {item.gender}</p>
        <p>Height: {item.height}</p>
        <p>Eye Color: {item.eye_color}</p>
      </div> 
    )
    }
    
  }
       
  
  
  return (
    <section className="card">
      <h2 className="card-header">{item.name}</h2>
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