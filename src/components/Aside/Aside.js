import React from 'react';
import './Aside.css'


const Aside = ({films}) => {

const randomFilm = films[0];


return (

<aside className="aside">
  {!films.length && <p>Loading....</p> }
    <section className="body">
      <p>{randomFilm.opening_crawl}</p>
      <h4 className="film-title">{randomFilm.title}</h4>
      <h4>{randomFilm.release_date}</h4>
    </section>
  </aside>
  )

      
}

export default Aside;