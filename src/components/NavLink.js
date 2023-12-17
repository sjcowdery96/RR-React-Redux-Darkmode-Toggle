import React from 'react'
import { useSelector } from 'react-redux'

function NavLink(props) {
    //extract the data from the Slice
    const modeData = useSelector((state) => state.mode)
    return (
        <div className="NavLink" style={{ 'backgroundColor': modeData.color4 }}>
            <p color={modeData.color5}>{props.content}</p>
        </div>
    )
}

export default NavLink
