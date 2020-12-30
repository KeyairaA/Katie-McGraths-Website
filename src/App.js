import React, { Component } from "react";
import "./App.css";
import Home from "./views/Home/Home";
import Biography from "./components/Biography";
import Navigation from "./shared/Navigation/Navigation";
// example importing images directly into react component
import BackgroundImage from "./assets/PageBackgroundImages/Katie1.jpg";
import Header from "./shared/Header/Header";

class App extends Component {
  render() {
    const appStyles = {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      height: "100vh",
    };
    const appHeaderStyles = {
      display:"grid",
      gridTemplateRows: "1fr 1fr",
      justifyContent:"center"
    };
      console.log(appStyles);
    return (
      <div style={appStyles}>
        
        {/* <img src={BackgroundImage} alt="website logo" className="app-backgroundimage"/> */}
        {/* <Navigation></Navigation> */}
        {/* demo of two ways to import a react component into another react component */}
        <div style={appHeaderStyles}>
          <Header />
          <Navigation />
        </div>
        <Home></Home>
        {/* <Biography></Biography> */}
      </div>
    );
  }
}

export default App;
