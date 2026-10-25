import React, { use, useEffect, useRef, useState } from 'react'
import { LoginContext } from '../../../../Contexts/LoginContext'
import axios from 'axios'
import Backend_Host from '../../../../Backend_Host'


function Raqambian({ setstep }) {
    const { loginbar, setloginbar } = use(LoginContext)
    const [ism, setism] = useState(loginbar.ism ? loginbar.ism :"")
    const [tel, setTel] = useState()
    const telRef=useRef()

    async function tasdiqlash() {
        if(ism && tel){
            if(ism.length>5 && String(tel).length==9){
                const data= await axios.post(Backend_Host+"user/send-sms",{
                    type:"sing_up",
                    tel:"+998"+tel
                })
                console.log(data);
                
                if(data.status==409){
                    return setstep("ref_t0")
                }

                setloginbar((e)=>{return {...e,ism:ism,tel:tel,code:data.data.code}})
                setstep("tel1")
            }else{
                if(ism.length<=5){
                    alert("Ism juda qishqa")
                }else{
                    alert("Telefon number xato")
                }
            }
        }else{
            alert("Ma'lumot kiritmadingiz!!!")
        }
    }
    function telkirit(e) {
        const val = e.target.value.replace(/\D/g, ""); // Harflarni olib tashlaydi
        
        // Format: 2-3-2-2
        let formatted = "";
        if (val.length > 0) formatted += val.substring(0, 2);
        if (val.length > 2) formatted += " " + val.substring(2, 5);
        if (val.length > 5) formatted += " " + val.substring(5, 7);
        if (val.length > 7) formatted += " " + val.substring(7, 9);
        telRef.current.value=formatted
        setTel(Number(formatted.replaceAll(" ",'')))
    }


    return (
        <>
            <p className="p20">Ro‘yxatdan o‘tish</p>

            <div className="menubar">
                <nav>

                    <div className="menu bos">
                        <p>Telefon raqam orqali</p>
                    </div>
                    <div className="menu" onClick={() => setstep("email0")}>
                        <p>E-mail orqali</p>
                    </div>
                </nav>
            </div>

            <div className="loginbar">
                <div className="ismsharf">
                    <label for="ism" className="t15">Ism-sharifingiz</label>
                    <input id="ism" value={ism} onChange={(e) => setism(e.target.value)} placeholder="Ism-sharifingizini kiriting" type="text" />
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
            </div>
            <div className="shartlar">
                <p className="t15">Ro‘yxatdan o‘tish tugmasini bosgach foydalanish <a href="/">shartlari va qoidalarini</a> qabul qilaman</p>
            </div>
            <div className="btn">
                <div className="royhat" onClick={tasdiqlash}>
                    <p className="p16" >Ro'yhatdan o'tish</p>
                </div>
                <div className="or">
                    <nav className="uzunch"></nav>
                    <p className="p14">yoki</p>
                    <nav className="uzunch"></nav>
                </div>
                <div className="royhat k" onClick={()=>setstep("login_t0")}>
                    <p className="p16">Kirish</p>
                </div>
            </div>
        </>
    )
}

export default Raqambian
