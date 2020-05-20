/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import { NavHeader, NavHeaderMobile, UiButton, Container } from '..'
import './Header.scss'
import icn_logo from '../../assets/icons/icn_logo.svg'
import icn_burger from '../../assets/icons/icn_burger.svg'
import icn_close from '../../assets/icons/icn_close.svg'

const Header = ({ nav }) => {
    const [showSub, setShowSub] = useState(false)
    return (
        <div>
            <Container>
                <header className="header">
                    <div className="header__column">
                        <img src={icn_logo} alt="" />
                        <div className="header__nav">
                            <NavHeader nav={nav} />
                        </div>
                    </div>
                    <div className="header__column">
                        <UiButton>Sign Up</UiButton>
                        <img
                            onClick={() => setShowSub(!showSub)}
                            src={showSub ? icn_close : icn_burger}
                            alt=""
                            className="header__burger"
                        />
                    </div>
                </header>
            </Container>
            {showSub && (
                <div className="header__sub">
                    <NavHeaderMobile nav={nav} />
                </div>
            )}
        </div>
    )
}

export default Header
