import React, { useRef, useState } from 'react'
import { IconEye, Iconeyeoff } from '../../../../importers/Icon';

function Loginwithemail({ setstep, pres ,setqulf}) {
    const parol = "parol1234"

    const [email, setemail] = useState()
    const [parol1, setParol1] = useState()
    const [eye1, seteye1] = useState("password")



    function eyechange(eye) {
        eye((prev) => {
            if (prev == "password") return "text"
            else return "password";
        })
    }

    function tasdiqlash() {
        if (email && parol1) {
            if (parol1.length > 6 && String(email).includes("@") && String(email).includes(".")) {
                if (parol1 == parol) {
                    alert("Tizimga kirdingiz")
                    pres(false)
                    setqulf(false)

                } else {
                    alert("Parol xato")
                }
            } else {
                alert("Kiritilgan ma'lumotlarda muammo bor!!!")
            }
        } else {
            alert("Ma'lumotlarni to'liq to'ldiring!!")
        }

    }


    return (
        <>
            <p className="p20">Tizimga kirish</p>

            <div className="menubar">
                <nav>

                    <div className="menu" onClick={() => setstep("login_t0")}>
                        <p>Telefon raqam orqali</p>
                    </div>
                    <div className="menu bos">
                        <p>E-mail orqali</p>
                    </div>
                </nav>
            </div>

            <div className="loginbar" style={{ height: "235px",  alignContent:"flex-start"}}>
                <div className="email">
                    <label for="email" className="t15">Elektron pochta</label>
                    <input id="email" onChange={(e) => setemail(e.target.value)} placeholder="exaple@gmail.com" type="email" />
                </div>
                <div className="parolinp">
                    <div className="parollabel">
                        <label for="ism" className="t15" >Parol</label>
                        <label onClick={() => setstep("")}>Parolni unutdingizmi?</label>
                    </div>
                    <div className="parolbar">
                        <input id="ism" style={{ outline: "none" }} onChange={(e) => setParol1(e.target.value)} placeholder="Parol kiriting" type={eye1} />
                        <div className="eyebtn" onClick={() => eyechange(seteye1)}>
                            {eye1 == "password" ? <Iconeyeoff /> : <IconEye />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <div className="royhat" onClick={tasdiqlash}>
                    <p className="p16">Kirish</p>
                </div>
                <div className="or">
                    <nav className="uzunch"></nav>
                    <p className="p14">yoki</p>
                    <nav className="uzunch"></nav>
                </div>
                <div className="royhat k" onClick={() => setstep("email0")}>
                    <p className="p16" >Ro'yhatdan o'tish</p>
                </div>
            </div>
        </>
    )
}

export default Loginwithemail
