import React from 'react';
import './Card.css';

const Card = ({ person }) => {
  return (
    <section className="card">
      <h2 className="card-header">{person.name}</h2>
      <div className="card-body">
      <p>Birth Year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
      <p>Height: {person.height}</p>
      <p>Eye Color: {person.eye_color}</p>
      </div>
      <footer className="card-footer"></footer>
    </section>
  )
}

export default Card;