import React, { useState } from 'react'
import { IconEye, Iconeyeoff } from '../../../../../importers/Icon'

function EditPassword({setstep}) {
    const [passwordold, setOld] = useState()
    const [password1, setp1] = useState()
    const [password2, setp2] = useState()
    const [eye1, seteye1] = useState("password")
    const [eye2, seteye2] = useState("password")
    const [eyeold, seteyeold] = useState("password")

    function eyechange(eye) {
        eye((prev) => {
            if (prev == "password") return "text"
            else return "password";
        })
    }
    return (
        <>
            <div className="parolinp">
                <label for="ism" className="t15" >Hozirgi parol</label>
                <div className="parolbar">
                    <input id="ism" style={{ outline: "none" }} onChange={(e) => setOld(e.target.value)} placeholder="Hozirgi parolni kiriting" type={eyeold} />
                    <div className="eyebtn" onClick={() => eyechange(seteyeold)}>
                        {eyeold == "password" ? <Iconeyeoff /> : <IconEye />}
                    </div>
                </div>
            </div>
            <div className="parolinp">
                <label for="ism" className="t15" >Yangi parol</label>
                <div className="parolbar">
                    <input id="ism" style={{ outline: "none" }} onChange={(e) => setp1(e.target.value)} placeholder="Yangi parolni kiriting" type={eye1} />
                    <div className="eyebtn" onClick={() => eyechange(seteye1)}>
                        {eye1 == "password" ? <Iconeyeoff /> : <IconEye />}
                    </div>
                </div>
            </div>
            <div className="parolinp">
                <label for="ism" className="t15" >Yangi parolni tasdiqlang</label>
                <div className="parolbar">
                    <input id="ism" style={{ outline: "none" }} onChange={(e) => setp2(e.target.value)} placeholder="Yangi parolni kiriting" type={eye2} />
                    <div className="eyebtn" onClick={() => eyechange(seteye2)}>
                        {eye2 == "password" ? <Iconeyeoff /> : <IconEye />}
                    </div>
                </div>
            </div>
            <div className="bluebtn" onClick={()=>setstep(0)}>
                <p className='p15'>Yangilash</p>
            </div>

        </>
    )
}

export default EditPassword
