import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../../images/logo.png';

const Nav = ({favCount}) => {

  return (
    <nav className="nav">
        <img className="logo" src={logo} alt="lite side logo"/>
        <div className="buttons-container">
          <NavLink to='/people' className="nav-btn" activeClassName="active-btn" >PEOPLE</NavLink>
          <NavLink to='/planets' className="nav-btn" activeClassName="active-btn">PLANETS</NavLink>
          <NavLink to='/vehicles' className="nav-btn" activeClassName="active-btn">VEHICLES</NavLink>
          <div className="fav-btn-container">
            <p className="fav-count">{favCount}</p>
            <NavLink to="/favorites" className="nav-fav-btn" activeClassName="fav-active">FAVORITES</NavLink>
          </div>
        </div>
    </nav>
  )
}

export default Nav;
