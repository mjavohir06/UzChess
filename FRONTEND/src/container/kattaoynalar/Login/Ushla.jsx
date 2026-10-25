import React from 'react'
import ImageQulf from "../../../assets/pictures/Login/Qulf.png"

function Ushla({setstep}) {
    return (
        <div className='ushla'>
            <img src={ImageQulf} alt="" />
            <p className='p20'>UzChess platformasidan to‘liq foydalanish uchun tizimga kiring</p>
            <p className='t16'>Platformaning barcha imkoniyatlaridan foydalanish uchun tizimga kirishingiz kerak</p>
            <div className="btn">
                <div className="royhat"onClick={()=>setstep("login_t0")}>
                    <p className="p16">Kirish</p>
                </div>
                <div className="royhat k" onClick={() => setstep("tel0")}>
                    <p className="p16" >Ro'yhatdan o'tish</p>
                </div>
            </div>
        </div>
    )
}

export default Ushla
