import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    //extract the data from the Slice
    const modeData = useSelector((state) => state.mode)

    return (
        <div className="Footer" style={{ 'backgroundColor': modeData.color1 }}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
