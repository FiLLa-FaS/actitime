import React, { useState } from 'react'
import './UiDropdown.scss'

const UiDropdown = ({ icon, activeIcon = icon, children }) => {
    const [active, setActive] = useState(false)

    const toggleDropdown = () => {
        if (!active) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    return (
        <div
            role="menuitem"
            tabIndex={0}
            className="ui-dropdown"
            onClick={() => toggleDropdown()}
            onKeyDown={() => toggleDropdown()}
        >
            <img src={active ? activeIcon : icon} alt="" />
            <div className={`${active ? 'active' : ''}`}>{children}</div>
        </div>
    )
}

export default UiDropdown
