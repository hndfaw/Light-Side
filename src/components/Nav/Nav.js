import React from 'react';
import './Nav.css';
import logo from '../../images/logo.png';

const Nav = () => {
  return (
    <nav className="nav">
        <img className="logo" src={logo} alt="lite side logo"/>
        <div className="buttons-container">
          <button className="nav-btn">PEOPLE</button>
          <button className="nav-btn">PLANETS</button>
          <button className="nav-btn">VEHICLES</button>
          <div className="fav-btn-container">
            <p className="fav-count">0</p><button className="nav-fav-btn">FAVORITES</button>
          </div>
        </div>
    </nav>
  )
}

export default Nav;
