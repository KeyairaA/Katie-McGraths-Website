import React, { Component } from "react";
import "./Navigation.css"

export default class Navigation extends Component {
  render() {
    return (
      <div className="app-navigation">
          <a href="Katie Home.html" className="__nav_links">
            Home
          </a>
          <a href="Katie Works.html" className="__nav_links">
            Works
          </a>
          <a href="Katie Biography.html" className="__nav_links">
            Biography
          </a>
      </div>
    );
  }
}
