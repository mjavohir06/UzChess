import React, { useRef, useState } from 'react'
import { IconEye, Iconeyeoff } from '../../../../importers/Icon';

function Loginwithtel({setstep,pres,setqulf}) {
    const parol="parol1234"

    const [tel, setTel] = useState()
    const [parol1, setParol1] = useState()
    const [eye1,seteye1]=useState("password")
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

    function eyechange(eye) {
        eye((prev) => {
            if (prev == "password") return "text"
            else return "password";
        })
    }

    function tasdiqlash() {
        if(parol1 && tel){
            if(parol1.length>6 && String(tel).length==9){
                if(parol1==parol){
                    alert("Tizimga kirdingiz")
                    pres(false)
                    setqulf(false)
                }else{
                    alert("Parol xato")
                }
            }else{
                alert("Kiritilgan ma'lumotlarda muammo bor!!!")
            }
        }else{
            alert("Ma'lumotlarni to'liq to'ldiring!!")
        }

    }


    return (
        <>
            <p className="p20">Tizimga kirish</p>

            <div className="menubar">
                <nav>

                    <div className="menu bos">
                        <p>Telefon raqam orqali</p>
                    </div>
                    <div className="menu" onClick={() => setstep("login_e0")}>
                        <p>E-mail orqali</p>
                    </div>
                </nav>
            </div>

            <div className="loginbar" style={{ height: "235px",  alignContent:"flex-start"}}>
                <div className="telraqam">
                    <label for="tel" className="t15">Telefon raqam</label>
                    <div className="teldiv">
                        <div className="davlatr">
                            <p className='p14'>+998</p>
                        </div>
                        <input style={{ outline: "none" }} type="tel" ref={telRef} id="tel" onChange={telkirit} placeholder="_ _  _ _ _  _ _  _ _" />
                    </div>
                </div>
                <div className="parolinp">
                    <div className="parollabel">
                        <label for="ism" className="t15" >Parol</label>
                        <label onClick={()=>setstep("ref_t0")}>Parolni unutdingizmi?</label>
                    </div>
                    <div className="parolbar">
                        <input id="ism" style={{ outline: "none" }} onChange={(e) => setParol1(e.target.value)} placeholder="Parol kiriting" type={eye1} />
                        <div className="eyebtn" onClick={() => eyechange(seteye1)}>
                            {eye1=="password"?<Iconeyeoff/>:<IconEye />}
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
                <div className="royhat k" onClick={()=>setstep("tel0")}>
                    <p className="p16" >Ro'yhatdan o'tish</p>
                </div>
            </div>
        </>
    )
}

export default Loginwithtel
