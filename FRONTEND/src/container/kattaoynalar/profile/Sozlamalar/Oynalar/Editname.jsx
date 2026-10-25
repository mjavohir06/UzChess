import React, { useState } from 'react'
import ImageProfile from "../../../../../assets/pictures/Profile/profile.jpg"
import { IconRuchka } from '../../../../../importers/Icon'

function Editname({setstep}) {
    const user=JSON.parse(localStorage.getItem("user"))
    const [ism,setIsm]=useState(user.ism)
    const [birthday,setbirthday]=useState(user.birthday ? user.birthday : null)

    function saqla(){
        user.ism=ism
        user.birthday=birthday
        localStorage.setItem("user",JSON.stringify(user))
        setstep(0)
    }

    return (
        <>
            <div className="rasm">
                <div className="img">
                    <img src={ImageProfile} alt="" />
                    <div className="tahrirlash">
                        <IconRuchka />
                    </div>
                </div>
                <p className='p14'>O'chirish</p>
            </div>
            <div className="inputs">
                <nav>
                    <p className='t15'>Ism-sharifingiz</p>
                    <input type="text" value={ism} onChange={(e)=>setIsm(e.target.value)}/>
                </nav>
                <nav>
                    <p className='t15'>Tug‘ilgan sana</p>
                    <input type="date" value={birthday} onChange={(e)=>setbirthday(e.target.value)}/>
                </nav>
            </div>
            <div className="buttonsaqla">
                <div className="bluebtn" onClick={saqla}>
                    <p className='p16'>Saqlash</p>
                </div>
            </div>
        </>
    )
}

export default Editname
