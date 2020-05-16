import React from 'react'
import './NavHeader.scss'
import { UiDropdown } from '../..'
import icn_arrow_down from '../../../assets/icons/icn_arrow_small_down.svg'
import icn_arrow_up from '../../../assets/icons/icn_arrow_small_up.svg'

const NavHeader = ({ nav }) => {
    return (
        <nav className="nav-header__nav">
            <ul className="nav-header__list">
                {nav.map((i) => (
                    <li className="nav-header__item">
                        {i.subnav && (
                            <UiDropdown
                                title={i.name}
                                icon={icn_arrow_down}
                                activeIcon={icn_arrow_up}
                                hover
                            >
                                <ul className="nav-header__subnav">
                                    {i.subnav.map((item) => (
                                        <li className="subnav__item">
                                            <a
                                                href={item.url}
                                                className="subnav__link"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </UiDropdown>
                        )}
                        {!i.subnav && (
                            <a href={i.url} className="nav-header__link">
                                {i.name}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavHeader
