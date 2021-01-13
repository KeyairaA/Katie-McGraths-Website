import React, { Component } from "react";
import "./Navigation.css"
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div className="app-navigation">
          {/* <a href="Katie Home.html" className="__nav_links">
            Home
          </a> */}
           <NavLink to="/home" className="__nav_links" activeClassName="--active">Home</NavLink>
          {/* <a href="Katie Works.html" className="__nav_links">
            Works
          </a> */}
          {/* TODO- extract links to JS variables, import here and appRouting */}
          <NavLink to="/biography" className="__nav_links" activeClassName="--active">Biography</NavLink>
          {/* <a href="Katie Biography.html" className="__nav_links">
            Biography
          </a> */}
      </div>
    );
  }
}
