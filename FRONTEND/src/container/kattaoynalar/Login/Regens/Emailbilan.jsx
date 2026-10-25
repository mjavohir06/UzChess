import React, { use, useState } from 'react'
import { LoginContext } from '../../../../Contexts/LoginContext';


function Emailbilan({ setstep }) {
    const [email,setemail]=useState()
    const [ism, setism] = useState()
    const { loginbar, setloginbar } = use(LoginContext)

    
    function tasdiqlash(){
        if(ism && email){
            if(ism.length>5 && email.includes("@") && email.includes(".")){
                setloginbar((e)=>{return {...e,ism:ism,email:email}})
                setstep('email1')
            }else{
                if(ism.length<=5){
                    alert("Ism juda qishqa")
                }else{
                    alert("Email xato kiritilgan")
                }
            }
        }else{
            alert("Ma'lumot kiritmadingiz!!!")
        }
        
    }

    return (
        <>
            <p className="p20">Ro‘yxatdan o‘tish</p>

            <div className="menubar">
                <nav>

                    <div className="menu" onClick={() => setstep("tel0")}>
                        <p>Telefon raqam orqali</p>
                    </div>
                    <div className="menu bos">
                        <p>E-mail orqali</p>
                    </div>
                </nav>
            </div>

            <div className="loginbar">
                <div className="ismsharf">
                    <label for="ism" className="t15">Ism-sharifingiz</label>
                    <input id="ism" onChange={(e)=>setism(e.target.value)} placeholder="Ism-sharifingizini kiriting" type="text" />
                </div>
                <div className="email">
                    <label for="email" className="t15">Elektron pochta</label>
                    <input id="email" onChange={(e)=>setemail(e.target.value)} placeholder="exaple@gmail.com" type="email" />
                </div>
                
            </div>
            <div className="shartlar">
                <p className="t15">Ro‘yxatdan o‘tish tugmasini bosgach foydalanish <a href="/">shartlari va qoidalarini</a> qabul qilaman</p>
            </div>
            <div className="btn">
                <div className="royhat" onClick={tasdiqlash}>
                    <p className="p16">Ro'yhatdan o'tish</p>
                </div>
                <div className="or">
                    <nav className="uzunch"></nav>
                    <p className="p14">yoki</p>
                    <nav className="uzunch"></nav>
                </div>
                <div className="royhat k"  onClick={()=>setstep("login_e0")}>
                    <p className="p16">Kirish</p>
                </div>
            </div>
        </>
    )
}

export default Emailbilan
