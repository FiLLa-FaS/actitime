import React, { useState } from 'react'
import './UiDropdown.scss'

const UiDropdown = ({ title, icon, activeIcon = icon, children, hover }) => {
    const [active, setActive] = useState(false)

    const toggleDrawer = (state) => () => {
        setActive(state)
    }

    return (
        <div
            role="menuitem"
            tabIndex={0}
            className="ui-dropdown"
            onClick={!hover && toggleDrawer(!active)}
            onKeyDown={toggleDrawer(!active)}
            onMouseEnter={hover && toggleDrawer(!active)}
            onMouseLeave={hover && toggleDrawer(!active)}
        >
            {title && <p className="ui-dropdown__title">{title}</p>}
            <img
                className="ui-dropdown__icon"
                src={active ? activeIcon : icon}
                alt=""
            />
            <div className={`${active ? 'active' : ''}`}>{children}</div>
        </div>
    )
}

export default UiDropdown
