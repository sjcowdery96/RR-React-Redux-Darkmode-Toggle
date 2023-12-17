import React from 'react'
import NavLink from './NavLink'
import { useSelector } from 'react-redux'

function Nav() {
    //extract the data from the Slice
    const modeData = useSelector((state) => state.mode)

    return (
        <div className="Nav" style={{ 'backgroundColor': modeData.color3 }}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
