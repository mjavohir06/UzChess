import React, { useState } from 'react'
import { IconEye, Iconeyeoff } from '../../../../../importers/Icon'

function EditEmail({ setstep }) {
    const [password1, setp1] = useState()
    const [eye1, seteye1] = useState("password")
    function eyechange(eye) {
        eye((prev) => {
            if (prev == "password") return "text"
            else return "password";
        })
    }
    return (
        <>
            <div className="parolinp">
                <label for="ism" className="t15" >Parol</label>
                <div className="parolbar">
                    <input id="ism" style={{ outline: "none" }} onChange={(e) => setp1(e.target.value)} placeholder="Parolni kiriting" type={eye1} />
                    <div className="eyebtn" onClick={() => eyechange(seteye1)}>
                        {eye1 == "password" ? <Iconeyeoff /> : <IconEye />}
                    </div>
                </div>
            </div>
            <div className="parolinp">
                <label for="ism" className="t15" >Yangi parol</label>
                <input type="email" placeholder='example@uzchess.uz'/>
            </div>
            <div className="bluebtn" onClick={()=>setstep(5)}>
                <p className='p16'>Davom etish</p>
            </div>

        </>
    )
}

export default EditEmail