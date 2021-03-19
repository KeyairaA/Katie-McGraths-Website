import React, { Component } from "react";
import "./Works.css";
import { worksData } from "./WorksData";
import { WorksCard } from "./WorksCard";

export default class Works extends Component {
  render() {
    return (
      <div className="band">
        {/* card 1 */}
        {/* <div className="item-1">
          <a href="https://www.cwtv.com/shows/supergirl/?campaign=google_kp_watch" className="card">
          <img className="thumb" src = "../../assets/PageBackgroundImages/Supergirl.jpg" alt="Lena Luthor"/>
            <article>
              <h1>Supergirl</h1>
              <span>Since 2016</span>
            </article>
          </a>
        </div> */}
        {worksData.map((item) => (
            <WorksCard worksItem = {item}/>
          ))}
      </div>
    );
  }
}
