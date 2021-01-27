import React, { Component } from "react";
import "./App.css";
import Navigation from "./shared/Navigation/Navigation";
// example importing images directly into react component
// import BackgroundImage from "./assets/PageBackgroundImages/Katie1.jpg";
import Header from "./shared/Header/Header";

import { createBrowserHistory } from "history";
import { Router,Switch } from "react-router";
import { appRoutes } from "./AppRouting";

const history = createBrowserHistory();

class App extends Component {
  render() {
    // const appStyles = {
    //   backgroundImage: `url(${BackgroundImage})`,
    //   backgroundSize: "cover",
    //   height: "100vh",
    // };
    const appHeaderStyles = {
      display:"grid",
      // gridTemplateRows: "1fr 1fr",
      justifyContent:"center"
    };
      // console.log(appStyles);
    return (
      // <div style={appStyles}>
      <div>
        
        {/* <img src={BackgroundImage} alt="website logo" className="app-backgroundimage"/> */}
        {/* <Navigation></Navigation> */}
        {/* demo of two ways to import a react component into another react component */}
        <Router history={history}> 
          <div style={appHeaderStyles}>
          <Header />
          <Navigation />
        </div>
          <Switch>{appRoutes()}</Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
