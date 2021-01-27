import React, { Component } from 'react'
import "./Home.css"
import BackgroundImage from "../../assets/PageBackgroundImages/Katie1.jpg";

export default class Home extends Component {
  render() {
    const appStyles = {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      height: "100vh",
    };
    return (
        <div style={appStyles}>
                
        </div>
    )
  }
}