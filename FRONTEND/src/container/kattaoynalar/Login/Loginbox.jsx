import React, { useState,use, useContext } from 'react'
import "./Login.css"
import { IconExit, IconGlobal } from '../../../importers/Icon'
import { ImageLogo, ImageScreen } from '../../../importers/Images'
import Raqambian from './Regens/Raqambian'
import Emailbilan from './Regens/Emailbilan'
import { LoginContext } from '../../../Contexts/LoginContext'
import Kodkirit from './Regens/Kodkirit'
import Parolbilan from './Regens/Parolbilan'
import Loginwithtel from './Kirish/Loginwithtel'
import Loginwithemail from './Kirish/Loginwithemail'
import Refwithtel from './Kirish/Refwithtel'
import Refwithemail from './Kirish/Refwithemail'
import Ushla from './Ushla'

function Loginbox({ pres }) {
    const {loginbar,setloginbar, qulf, setqulf }=use(LoginContext)
    const [step, setstep] = useState(qulf ?"ushla": "tel0")
    console.log(step);
    

    return (
        <>
        <div className="kirishbarcontainer" onClick={()=>{pres(false);setqulf(false)}}>
        </div>
        <div className="loginxbox">
            <div className="kirishbox">
                <div className="kirishpanel">
                    {step=="ushla" && <Ushla setstep={setstep}/>}
                    {step == "tel0" ? <Raqambian  setstep={setstep}/> : ""}
                    {step=="email0" ? <Emailbilan setstep={setstep}/> : ""}
                    {step=="login_t0" ? <Loginwithtel setstep={setstep} pres={pres} setqulf={setqulf}/> : ""}
                    {step=="login_e0" ? <Loginwithemail setstep={setstep} pres={pres} setqulf={setqulf}/> : ""}
                    {step=="ref_t0" ? <Refwithtel setstep={setstep}/> : ""}
                    {step=="ref_e0" ? <Refwithemail setstep={setstep}/> : ""}
                    {step.endsWith("1") ? <Kodkirit step={step} setstep={setstep}/>:""}
                    {step.endsWith("2") ? <Parolbilan step={step} setstep={setstep} pres={pres}/>:""}
                </div>
                <div className="kirishpanel2">
                    <div className="select">
                        <IconGlobal />
                        <select>
                            <option value="uz">O'zbekcha</option>
                        </select>
                    </div>
                    <div className="screen">

                        <img src={ImageScreen} alt="" />
                    </div>
                    <div className="text">
                        <p className="p51">Shaxmatni</p>
                        <p className="py20">biz bilan o‘rganing! </p>
                    </div>
                </div>
                <div className="x_cancel"  onClick={()=>{pres(false);setqulf(false)}}>
                    <IconExit />
                </div>
                <div className="klogo">
                    <img src={ImageLogo} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Loginbox
