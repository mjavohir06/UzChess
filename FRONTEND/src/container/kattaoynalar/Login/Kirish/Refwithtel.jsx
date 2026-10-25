import React, { use, useRef, useState } from 'react'
import { LoginContext } from '../../../../Contexts/LoginContext';

function Refwithtel({setstep}) {
    const { loginbar, setloginbar } = use(LoginContext)
    const [tel, setTel] = useState()
    const telRef=useRef()

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
    function tasdiqlash(){
        if(String(tel).length==9){
            setstep("tel1")
            setloginbar((e)=>{return {...e,tel:tel}})
        }else{
            alert("raqam noto'g'ri")
        }
    }


    return (
        <>
            <p className="p20">Parolni qayta tiklash</p>

            <div className="menubar">
                <nav>

                    <div className="menu bos">
                        <p>Telefon raqam orqali</p>
                    </div>
                    <div className="menu" onClick={() => setstep("ref_e0")}>
                        <p>E-mail orqali</p>
                    </div>
                </nav>
            </div>

            <div className="loginbar" style={{ height: "350px",  alignContent:"flex-start"}}>
                <div className="telraqam">
                    <label for="tel" className="t15">Telefon raqam</label>
                    <div className="teldiv">
                        <div className="davlatr">
                            <p className='p14'>+998</p>
                        </div>
                        <input style={{ outline: "none" }} type="tel" ref={telRef} id="tel" onChange={telkirit} placeholder="_ _  _ _ _  _ _  _ _" />
                    </div>
                </div>
            </div>
            <div className="btn">
                <div className="royhat" onClick={tasdiqlash}>
                    <p className="p16" >Davom etish</p>
                </div>
            </div>
        </>
    )
}

export default Refwithtel
