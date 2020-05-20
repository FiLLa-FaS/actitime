import React from 'react'
import './UiButton.scss'

const UiButton = ({ className = '', children }) => {
    return (
        <button type="button" className={`ui-button ${className}`}>
            {children}
        </button>
    )
}

export default UiButton
