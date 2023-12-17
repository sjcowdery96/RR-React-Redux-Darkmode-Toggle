import React from 'react'
import { useSelector } from 'react-redux'

function Photo() {
    //extract the data from the Slice
    const modeData = useSelector((state) => state.mode)
    return (
        <div className="Photo">
            <img src={modeData.photo} alt="author" />
        </div>
    )
}

export default Photo
