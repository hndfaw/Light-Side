import React from 'react';

const PlanetCard = ({ planet }) => {
  return (
    <section className="card">
      <h2 className="card-header">{planet.name}</h2>
      <div className="card-body">
        <p>Terrain: {planet.terrain}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Population: {planet.population}</p>
      </div>
      <footer className="card-footer"></footer>
    </section>
  )
}

export default PlanetCard;