import React from 'react';
import  "./Navigation.css";
import { NavLink } from "react-router-dom";
import Logo from './../Logo/Logo';

const Navigation = props =>{

    const navbar =  <nav className="tb-navbar navbar navbar-expand-md navbar-dark bg-dark">
    <NavLink className="tb-logo navbar-brand" to="/" exact ><Logo></Logo></NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample04">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/cars" exact >Cars <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/help' exact >Help</NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-md-0">
        <input className="form-control" type="text" placeholder="Search"></input>
      </form>
    </div>
  </nav>

        return <header>{navbar}</header>;
}

export default Navigation;
