import React from 'react'
import './NavHeader.scss'
import icn_arrow_down from '../../../assets/icons/icn_arrow_small_down.svg'
// import icn_arrow_up from '../../../assets/icons/icn_arrow_small_up.svg'

const NavHeader = ({ nav }) => {
    return (
        <div className="nav-header">
            <ul className="nav-header__list">
                {nav.map((i) => (
                    <li className="nav-header__item">
                        {!i.subnav && (
                            <a href={i.url} className="nav-header__link">
                                {i.name}
                            </a>
                        )}
                        {i.subnav && (
                            <div className="subnav">
                                <span className="subnav__title">{i.name}</span>
                                <img
                                    src={icn_arrow_down}
                                    alt=""
                                    className="subnav__icon"
                                />
                                <ul className="subnav__list">
                                    {i.subnav.map((item) => (
                                        <li
                                            key={item.id}
                                            className="subnav__item"
                                        >
                                            <a
                                                href={item.url}
                                                className="subnav__link"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavHeader
