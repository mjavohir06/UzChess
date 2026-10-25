import React from 'react'
import { IconLog_out } from '../../../../../importers/Icon'

function Chiqish({setstep}) {
    function chiq(){
        localStorage.removeItem("user")
        setstep(0)
    }
    function cancel(){
        setstep(0)
    }

  return (
    <>
      <div className="icon">
        <IconLog_out/>
      </div>
      <p className='p20'>Rostan ham tizimdan chiqishni tasdiqlaysizmi?</p>
      <div className="buttons">
        <div className="greybtn" onClick={cancel}>
            <p className='p16'>Bekor qilish</p>
        </div>
        <div className="bluebtn" onClick={chiq}>
            <p className='p16'>Davom etish</p>
        </div>
      </div>
    </>
  )
}

export default Chiqish
