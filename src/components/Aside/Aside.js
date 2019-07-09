
import React from 'react';
import PropTypes from 'prop-types';
import './Aside.css'



const Aside = ({asideShow, films, updateAsideShow, randomNum}) => {

const asideStyle = () => {
  if (asideShow === true) {

    return {
      height: '90vh',
      transition: '0.1s',
    }
  } else {
    return {
      alignItems: 'center',
      borderRadius: '10px',
      color: 'transparent',
      display: 'flex',
      height: '20px',
      justifyContent: 'center',
      transition: '0.2s',
      width: '160px',
      position: 'absolute',
      bottom: '12px',
      left: '12px',
    }
  }
}


const btnStyle = () => {

  if (asideShow === true) {

    return {
      width: '50px'
    }
  } else {
    return {
      width: '100%',
      height: '100%',
      right: '0',
      bottom: '0',
      color: 'black',
    }
  }
  
}
 
  const randomFilm = films[randomNum];

  const closeCrawl = asideShow ? 'Close' : 'Open Opening Crawl';

  return (
    <aside style={asideStyle()} className="aside">
        <section className="body">
          <p>{randomFilm.opening_crawl}</p>
          <h4 className="film-title">{randomFilm.title}</h4>
          <h4>{randomFilm.release_date}</h4>
        </section>

        <div style={btnStyle()} onClick={() => updateAsideShow()} className="minimize-side">{closeCrawl}</div>

      </aside>
      )
  }



Aside.propTypes = {
  films : PropTypes.array,
  asideShow : PropTypes.bool,
  updateAsideShow : PropTypes.func

}

export default Aside;