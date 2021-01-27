import React, { Component } from "react";
import "./Biography.css";
import BackgroundImage from "../../assets/PageBackgroundImages/Katie5.jpg";
import { biographyData } from "./BiographyData";
import { BiographyPar } from "./BiographyPar";

export default class Biography extends Component {
  render() {
    const sharedStyles = {
      width: "50%",
    };

    const asideStyles = {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      height: "100vh",
      position: "fixed",
      right: "0",
      top: "0",
      zIndex: "-1",

      ...sharedStyles,
    };
    const mainStyles = {
      textAlign: "center",
      ...sharedStyles,
    };
    return (
      <div>
        <aside style={asideStyles}></aside>

        <main style={mainStyles}>
          <h2 className="bio-heading">Katie McGrath</h2>

          <p className="bio">Irish Actress</p>
          {biographyData.map((item) => (
            <BiographyPar dataItem = {item}/>
          ))}
        </main>
      </div>
    );
  }
}
