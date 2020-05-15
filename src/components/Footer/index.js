import React from 'react'
import { NavFooter, UiButton, FieldEmail, Container } from '../'
import './Footer.scss'
import icn_logo_white from '../../assets/icons/icn_logo_white.svg'

const Footer = ({ nav }) => {
    return (
        <footer>
            <Container>
                <div className="grid">
                    <div className="grid__column">
                        <img src={icn_logo_white} alt="" />
                    </div>
                    <div className="grid__column grid__column--nav">
                        <NavFooter nav={nav} />
                    </div>
                    <div className="grid__column grid__column--big">
                        <FieldEmail />
                        <div className="footer__button">
                            <UiButton className="button__footer">
                                Sign Up Now
                            </UiButton>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
