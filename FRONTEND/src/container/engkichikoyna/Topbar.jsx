import React from 'react'

import Korish from "../../assets/icons/korish.svg?react"
import { Link } from 'react-router-dom'


function Topbar({ title,text="Barchasi",to }) {
    return (
        <div className="reytingtitle">
            <p className='at'>{title}</p>
            <Link to={to} className="kr">
                <p className='yt'>{text}</p>
                <Korish className="korish"/>
            </Link>
        </div>
    )
}

export default Topbar
