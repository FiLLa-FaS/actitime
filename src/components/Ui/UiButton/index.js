import React from 'react'
import './UiButton.scss'

const UiButton = ({ className, children }) => {
    return (
        <button type="button" className={className}>
            {children}
        </button>
    )
}

export default UiButton
