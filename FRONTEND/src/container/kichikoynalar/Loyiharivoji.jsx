import React from 'react'
import "./Kichikoynalar.css"


import qol from "../../assets/icons/loyiharivoji/qol.svg"

function Loyiharivoji() {
  return (
    <div className='loyiharivoji'>
        <div className="img">
            <img src={qol} alt="" />
        </div>
        <div className="textbar">
            <p className='p16'>Loyiha rivojiga xissa</p>
            <p className='t14'>Shaxmat rivojiga hissa qo‘shing</p>
        </div>
        <div className="soon">
            <p className='p12'>soon</p>
        </div>
    </div>
  )
}

export default Loyiharivoji
