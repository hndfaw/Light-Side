import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../../images/logo.png';

const Nav = () => {
  return (
    <nav className="nav">
        <img className="logo" src={logo} alt="lite side logo"/>
        <div className="buttons-container">
          <NavLink to='/people' ><button className="nav-btn">PEOPLE</button></NavLink>
          <NavLink to= '/planets'><button className="nav-btn">PLANETS</button></NavLink>
          <NavLink to= '/vehicles'className="nav-btn" >VEHICLES</NavLink>
          <div className="fav-btn-container">
            <p className="fav-count">0</p><button className="nav-fav-btn">FAVORITES</button>
          </div>
        </div>
    </nav>
  )
}

export default Nav;
