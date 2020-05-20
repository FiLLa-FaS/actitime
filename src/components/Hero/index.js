import React from 'react'
import './Hero.scss'
import { Container, UiTitle, Slider } from '..'

const Hero = ({ slider_cards }) => {
    return (
        <div className="hero">
            <Container>
                <div className="hero__row">
                    <UiTitle
                        title="Features"
                        excerpt="Some of the features and advantages that we provide for those of you who store data in this Data Warehouse."
                    />
                </div>
                <div className="hero__row hero__row--slider">
                    <Slider cards={slider_cards} />
                </div>
            </Container>
        </div>
    )
}

export default Hero
