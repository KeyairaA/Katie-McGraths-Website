import React from "react";
import "./WorksCard.css";
import { a } from "react-router-dom";

export const WorksCard = (props) => {
    const { worksItem } = props  
    const {cardHeading, cardSubHeading, cardLink, cardImage, imageAltText} = worksItem
    return (
      <div className="item-1">
        <a
          href={cardLink}
          className="card"
        >
          <img
            className="thumb"
            src={cardImage}
            alt={imageAltText}
          />
          <article>
            <h1 className="works-card-title">{cardHeading}</h1>
            <div
             className="works-card-subtitle">{cardSubHeading}</div
            >
          </article>
        </a>
      </div>
    );
  }

