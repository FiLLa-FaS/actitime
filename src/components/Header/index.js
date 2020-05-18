import React from 'react'
import { NavHeader, NavHeaderMobile, UiButton, Container, UiDropdown } from '..'
import './Header.scss'
import icn_logo from '../../assets/icons/icn_logo.svg'
import icn_burger from '../../assets/icons/icn_burger.svg'
import icn_close from '../../assets/icons/icn_close.svg'

const Header = ({ nav }) => {
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
                        <UiDropdown
                            className="header-dropdown"
                            icon={icn_burger}
                            activeIcon={icn_close}
                        >
                            <NavHeaderMobile nav={nav} />
                        </UiDropdown>
                    </div>
                </header>
            </Container>
            <NavHeaderMobile nav={nav} />
        </div>
    )
}

export default Header
