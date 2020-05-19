import React from 'react'
import Slider from 'react-slick'
import CardSlider from './CardSlider'

import './Slider.scss'
import 'slick-carousel/slick/slick.css'

const MainSlider = ({ cards }) => {
    function SampleArrow() {
        return <div style={{ display: 'none' }} />
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ],
    }

    return (
        <div className="slider">
            <div className="slider__content">
                <Slider {...settings}>
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="slider__card"
                            id={card.id}
                        >
                            <CardSlider
                                id={card.id}
                                card={card}
                                latest={card.id === cards.length}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default MainSlider
