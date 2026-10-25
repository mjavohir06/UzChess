import React, { useState } from 'react'
import "./Style.css"

function Select({data,width,height,bgcolor,border}) {
    const [i,setI]=useState(0)
    if(!width) width="286px"
    if(!height) height="54px"
    if(!bgcolor) bgcolor="#15181A"
    if(!border) border="#232627"
    if(bgcolor==0) bgcolor="transparent"
    if(border==0) border="transparent"
  return (
    <div className='Selectbox' style={{width:width,height:height,backgroundColor:bgcolor,border:`1px solid ${border}`}}>
      <div className="selectbar">
        <p className='p16'>{data[i]}</p>
      </div>
    </div>
  )
}

export default Select
