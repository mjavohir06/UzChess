import React, { use, useState } from 'react'
import { IconEye, Iconeyeoff, IconKorish } from '../../../../importers/Icon'
import { LoginContext } from '../../../../Contexts/LoginContext'

function localuseradd(user){
    localStorage.setItem("user",JSON.stringify(user))
}

function Parolbilan({step,setstep,pres}) {
    const { loginbar, setloginbar } = use(LoginContext)
    const [parol1,setParol1]=useState()
    const [parol2,setParol2]=useState()
    const [eye1,seteye1]=useState("password")
    const [eye2,seteye2]=useState("password")

        function tasdiqlash(){
            if(parol1===parol2){
                if(String(parol1).length>6){
                    alert("Ro'yhatdan o'tdingiz!!!")
                    alert("Lekin bizni hali bekendimiz yo'qda... 😂😂😂")
                    setloginbar((e)=>{return {...e,parol:parol1}})
                    localuseradd(loginbar)
                    pres(false)
                }
                else{
                    alert("Parol juda qisqa!!!")
                }
            }else{
                alert("Parollar bir biriga mos bo'lishi kerak!!! Kamida 7 ta belgi bo'lishi kerak")
            }
            
        }
        function eyechange(eye){
            eye((prev)=>{
                if(prev=="password") return "text"
                else return "password";
            })
        }

    return (
        <>
            <div className="titlebox">
                <div className="orqaga" onClick={() => setstep(e => e == "tel1" ? "tel0" : "email0")}>
                    <IconKorish style={{ color: "#F7F9FA", transform: "rotateZ(180deg)" }} />
                </div>
                <p className="p20">Parol qo'yish</p>
            </div>
            <div className="loginbar" style={{ height: "380px",  alignContent:"flex-start"}}>
                <div className="parolinp">
                    <label for="ism" className="t15" >Parol</label>
                    <div className="parolbar">
                        <input id="ism" style={{outline:"none"}} onChange={(e) => setParol1(e.target.value)} placeholder="Parol kiriting" type={eye1} />
                        <div className="eyebtn" onClick={()=>eyechange(seteye1)}>
                            {eye1=="password"?<Iconeyeoff/>:<IconEye />}
                        </div>
                    </div>
                </div>
                <div className="parolinp">
                    <label for="ism" className="t15" >Parol</label>
                    <div className="parolbar">
                        <input id="ism" style={{outline:"none"}} onChange={(e) => setParol2(e.target.value)} placeholder="Parolni takrorlang" type={eye2} />
                        <div className="eyebtn" onClick={()=>eyechange(seteye2)}>
                            {eye2=="password"?<Iconeyeoff/>:<IconEye />}
                        </div>
                    </div>
                </div>
                
                
            </div>




            <div className="btn">
                <div className="royhat" onClick={tasdiqlash}>
                    <p className="p16">Tasdiqlash</p>
                </div>

            </div>


        </>
    )
}

export default Parolbilan
