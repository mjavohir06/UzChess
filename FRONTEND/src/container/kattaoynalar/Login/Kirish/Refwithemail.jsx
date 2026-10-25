import React, { use, useState } from 'react'
import { LoginContext } from '../../../../Contexts/LoginContext'

function Refwithemail({setstep}) {
    const { loginbar, setloginbar } = use(LoginContext)
    const [email,setemail] = useState()

    function tasdiqlash() {
        if (String(email).includes('@') && String(email).includes(".")) {
            setstep("email1")
            setloginbar((e) => { return { ...e, email:email } })
        } else {
            alert("email noto'g'ri")
        }
    }


    return (
        <>
            <p className="p20">Parolni qayta tiklash</p>

            <div className="menubar">
                <nav>

                    <div className="menu" onClick={() => setstep("ref_t0")}>
                        <p>Telefon raqam orqali</p>
                    </div>
                    <div className="menu bos">
                        <p>E-mail orqali</p>
                    </div>
                </nav>
            </div>

            <div className="loginbar" style={{ height: "350px",  alignContent:"flex-start"}}>
                <div className="telraqam">
                    <div className="email">
                        <label for="email" className="t15">Elektron pochta</label>
                        <input id="email" onChange={(e) => setemail(e.target.value)} placeholder="exaple@gmail.com" type="email" />
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

export default Refwithemail
