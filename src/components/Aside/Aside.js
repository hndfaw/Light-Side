import React from 'react';
import './Aside.css'


const Aside = ({films}) => {
const randomFilm = films[0];
  return (

<aside className="aside">
  {!films.length && <p>Loading....</p> }
    <section className="body">
        <div className="crawl">
           <p>{randomFilm.opening_crawl}</p>
           <h4>{randomFilm.title}</h4>
          <h4>{randomFilm.release_date}</h4>
        </div>
    </section>
  </aside>
  )

      
}

export default Aside;