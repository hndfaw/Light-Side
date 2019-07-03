import React from 'react';


const VehicleCard = ({ vehicle }) => {
  return (
    <section className="card">
      <h2 className="card-header">{person.name}</h2>
      <div className="card-body">
        <p>Model: {vehicle.model}</p>
        <p>Class: {vehicle.vehicle_class}</p>
        <p>Number of Passengers: {vehicle.passengers}</p>
      </div>
      <footer className="card-footer"></footer>
    </section>
  )
}

export default VehicleCard;