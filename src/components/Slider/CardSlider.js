import React from "react";
import "./CardSlider.scss";
import { UiLink } from "../";

const CardSlider = ({ card, latest }) => {
  return (
    <div class="slider-card">
      <div class="slider-card__content">
        {latest && <span className="slider-card__new">new</span>}
        <span class="slider-card__id">{card.id}</span>
        <h3 class="slider-card__title">{card.name}</h3>
        <p class="slider-card__info">{card.content}</p>
        <div class="slider-card__link">
          <UiLink>Learn more</UiLink>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
