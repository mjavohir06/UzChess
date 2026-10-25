import React, { useRef, useState } from 'react'
import { IconEye, Iconeyeoff } from '../../../../../importers/Icon'

function EditTel({setstep}) {

    const [tel, setTel] = useState()
    const telRef = useRef()
    const [password1, setp1] = useState()
    const [eye1, seteye1] = useState("password")
    function eyechange(eye) {
        eye((prev) => {
            if (prev == "password") return "text"
            else return "password";
        })
    }

    function telkirit(e) {
        const val = e.target.value.replace(/\D/g, ""); // Harflarni olib tashlaydi

        // Format: 2-3-2-2
        let formatted = "";
        if (val.length > 0) formatted += val.substring(0, 2);
        if (val.length > 2) formatted += " " + val.substring(2, 5);
        if (val.length > 5) formatted += " " + val.substring(5, 7);
        if (val.length > 7) formatted += " " + val.substring(7, 9);
        telRef.current.value = formatted
        setTel(Number(formatted.replaceAll(" ", '')))
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
            
                
                <div className="telraqam">
                    <label for="tel" className="t15">Telefon raqam</label>
                    <div className="teldiv">
                        <div className="davlatr">
                            <p className='p14'>+998</p>
                        </div>
                        <input  style={{outline:"none"}} type="tel" ref={telRef} id="tel" onChange={telkirit} placeholder="_ _  _ _ _  _ _  _ _"  />
                    </div>
                </div>
            
            <div className="bluebtn" onClick={() => setstep(5)}>
                <p className='p16'>Davom etish</p>
            </div>
        </>
    )
}

export default EditTel
