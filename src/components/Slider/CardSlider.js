import React from "react";
import "./CardSlider.scss";
import { UiLink } from "../";

const CardSlider = ({ card, latest }) => {
  return (
    <div className="slider-card">
      <div className="slider-card__content">
        {latest && <span className="slider-card__new">new</span>}
        <span className="slider-card__id">{card.id}</span>
        <h3 className="slider-card__title">{card.name}</h3>
        <p className="slider-card__info">{card.content}</p>
        <div className="slider-card__link">
          <UiLink>Learn more</UiLink>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
