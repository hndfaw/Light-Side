import React, { Component } from 'react';
import './Aside.css'


class Aside extends Component {


asideStyle = () => {
  if (this.props.asideShow === true) {
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

btnStyle = () => {
  if (this.props.asideShow === true) {
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

render () {
  const {films, asideShow, updateAsideShow} = this.props;

  const movLength = films.length;
  const randomNumber = Math.floor(Math.random() * Math.floor(movLength));
  const randomFilm = films[randomNumber];
  const closeCrawl = asideShow ? 'Close' : 'Open Opening Crawl';

  return (
    <aside style={this.asideStyle()} className="aside">
        <section className="body">
          <p>{randomFilm.opening_crawl}</p>
          <h4 className="film-title">{randomFilm.title}</h4>
          <h4>{randomFilm.release_date}</h4>
        </section>
        <div style={this.btnStyle()} onClick={() => updateAsideShow()} className="minimize-side">{closeCrawl}</div>
      </aside>
      )
}

      
}

export default Aside;