import React from 'react'
import './NavHeaderMobile.scss'
import { UiDropdown } from '../..'
import icn_arrow_right from '../../../assets/icons/icn_arrow_right.svg'
import icn_arrow_down from '../../../assets/icons/icn_arrow_down.svg'

const NavHeaderMobile = ({ nav }) => {
    return (
        <nav className="nav-mobile">
            <ul className="nav-mobile__list">
                {nav.map((i) => (
                    <li key={i.id} className="nav-mobile__item">
                        {i.subnav && (
                            <UiDropdown
                                title={i.name}
                                icon={icn_arrow_right}
                                activeIcon={icn_arrow_down}
                            >
                                <ul className="subnav-mobile__list">
                                    {i.subnav.map((item) => (
                                        <li
                                            key={item.id}
                                            className="subnav-mobile__item"
                                        >
                                            <a
                                                href={item.url}
                                                className="subnav-mobile__link"
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

export default NavHeaderMobile
