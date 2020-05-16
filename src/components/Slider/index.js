import React from 'react'
import CardSlider from './CardSlider'
import './Slider.scss'

const Slider = ({ cards }) => {
    return (
        <div className="slider">
            <div className="slider__content">
                {cards.map((card) => (
                    <div className="slider__card" id={card.id}>
                        <CardSlider
                            id={card.id}
                            card={card}
                            latest={card.id === cards.length}
                        />
                    </div>
                ))}
            </div>

            <div className="slider__nav">
                {cards.map((card) => (
                    <a href={`#${card.id}`} className="slider-nav__link">
                        <span className="slider-nav__item" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Slider
