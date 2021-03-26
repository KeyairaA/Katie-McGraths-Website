import React, { Component } from "react";
import "./Biography.css";
import BackgroundImage from "../../assets/PageBackgroundImages/Katie5.jpg";
import { biographyData } from "./BiographyData";
import { BiographyPar } from "./BiographyPar";

export default class Biography extends Component {
  render() {
    // const sharedStyles = {
    //   width: "50%",
    // };

    const asideStyles = {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      // height: "100vh",
      backgroundPosition: "50%"
      // position: "fixed",
      // right: "0",
      // zIndex: "-1",

      // ...sharedStyles,
    };
    const mainStyles = {
      textAlign: "center",
      padding: "0 1rem"
      // ...sharedStyles,
    };

  const twoColumnLayout = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: "1rem"
  };
    return (
      <div style={twoColumnLayout}>
        <aside style={asideStyles}/>

        <main style={mainStyles}>
          <h2 className="bio-heading">Katie McGrath</h2>
          {biographyData.map((item) => (
            <BiographyPar dataItem = {item}/>
          ))}

        </main>
      </div>
    );
  }
}
