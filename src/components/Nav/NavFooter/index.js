import React from 'react'
import './NavFooter.scss'

const NavFooter = ({ nav }) => {
    return (
        <nav className="nav-footer">
            <ul className="nav-footer__list">
                {nav.map((i) => (
                    <li key={i.id} className="nav-footer__item">
                        <a href={i.url} className="nav-footer__link">
                            {i.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavFooter
