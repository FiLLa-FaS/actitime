import React from 'react'
import './NavHeader.scss'

const NavHeader = ({ nav }) => {
    return (
        <nav className="nav-header">
            <ul className="nav-header__list">
                {nav.map((i) => (
                    <li key={i.id} className="nav-header__item">
                        {!i.subnav && (
                            <a href={i.url} className="nav-header__link">
                                {i.name}
                            </a>
                        )}
                        {i.subnav && (
                            <div className="subnav">
                                <span className="subnav__title">{i.name}</span>
                                <i className="fas fa-angle-down subnav__icon" />
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
        </nav>
    )
}

export default NavHeader
