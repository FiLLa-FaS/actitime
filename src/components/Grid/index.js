import React from 'react'
import './Grid.scss'

const Grid = ({ children, gap }) => {
    return (
        <div className="grid" style={{ gridColumnGap: gap || '30px' }}>
            {children}
        </div>
    )
}

export default Grid
