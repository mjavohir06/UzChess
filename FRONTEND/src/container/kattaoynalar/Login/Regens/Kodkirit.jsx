import React, { use, useEffect, useRef, useState } from 'react'
import { IconKorish, IconReflesh, IconRuchka } from '../../../../importers/Icon'
import { LoginContext } from '../../../../Contexts/LoginContext'
import axios from 'axios'
import Backend_Host from '../../../../Backend_Host'

function Kodkirit({ step, setstep }) {


    const { loginbar } = use(LoginContext)
    const [code, setcode] = useState(loginbar.code)

    const [time, setTime] = useState(59)
    const [formattel, setformat] = useState()
    const [isred, setred] = useState(false)

    const inputrefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)])
    useEffect(async () => {
        if (loginbar.tel) {
            let formatted = "";
            if (String(loginbar.tel).length > 0) formatted += String(loginbar.tel).substring(0, 2);
            if (String(loginbar.tel).length > 2) formatted += " " + String(loginbar.tel).substring(2, 5);
            if (String(loginbar.tel).length > 5) formatted += " " + String(loginbar.tel).substring(5, 7);
            if (String(loginbar.tel).length > 7) formatted += " " + String(loginbar.tel).substring(7, 9);
            setformat(formatted)


        }

    }, [])
    useEffect(() => {
        if (time === 0) return;

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);
    useEffect(() => { inputrefs.current[0].current.focus() }, [])

    async function qaytayubor() {
        let data
        if (loginbar.tel && !String(step).startsWith("ref")) {
            data = await axios.post(Backend_Host + "user/send-sms", {
                type: "sing_up",
                tel: "+998" + loginbar.tel
            })
        }
        if (loginbar.tel && String(step).startsWith("ref")) {
            data = await axios.post(Backend_Host + "user/send-sms", {
                type: "sing_in",
                tel: "+998" + loginbar.tel
            })
        }
        if (loginbar.email && !String(step).startsWith("ref")) {
            data = await axios.post(Backend_Host + "user/send-email", {
                type: "sing_up",
                email: loginbar.email
            })
        }
        if (loginbar.email && String(step).startsWith("ref")) {
            data = await axios.post(Backend_Host + "user/send-email", {
                type: "sing_in",
                email: loginbar.email
            })
        }
        setTime(59)
        setcode(data.data.code)
    }


    function tasdiqlash() {
        const currents = inputrefs.current
        let index = 0
        const kod = {}
        for (let k of currents) {
            kod[index] = k.current.value
            if (index !== 5) {
                index++
            }
        }



        console.log(Object.entries(kod).length);
        if (Object.entries(kod).length == 6) {
            let natija = true, i = 0
            for (let k in kod) {
                if (kod[k] != String(code)[i]) {
                    natija = false
                }
                i++
            }
            if (natija) {
                setstep(e => e == "tel1" ? "tel2" : "email2")

            } else {
                setred(true)
            }

        } else {
            setred(true)
        }
    }


    function valuechange(e, i) {
        const value = String(e.target.value)
        setred(false)
        if (value.length === 1) {
            if (i < 5) {
                inputrefs.current[i + 1].current.focus()
            }
        } else if (value.length == 0) {
            if (i > 0) {
                inputrefs.current[i - 1].current.focus()
            }
        } else {
            if (i == 5) {
                inputrefs.current[i].current.value = value[0]
                inputrefs.current[i + 1].current.value = value[1]
                inputrefs.current[i + 2].current.focus()
            }
            else {
                inputrefs.current[i].current.value = value[0]
                inputrefs.current[i + 1].current.value = value[1]
                inputrefs.current[i + 1].current.focus()
            }

        }

    }

    return (
        <>
            <div className="titlebox">
                <div className="orqaga" onClick={() => setstep(e => e == "tel1" ? "tel0" : "email0")}>
                    <IconKorish style={{ color: "#F7F9FA", transform: "rotateZ(180deg)" }} />
                </div>
                <p className="p20">{step == "tel1" ? "Telefon raqamni tasdiqlash" : "Emailni tasdiqlash"}</p>
            </div>
            <div className="loginbar" style={{ height: "380px" }}>
                <p className='p20' style={{ margin: 0 }}>{step == "tel1" ? "Tasdiqlash uchun maxsus kod quyidagi raqamga yuborildi" : "Tasdiqlash uchun maxsus kod quyidagi emailga yuborildi"} </p>
                <div className="qaytayoz">
                    <div><p className='t16'>{formattel ? `+998 ${formattel}` : loginbar.email}</p></div>
                    <div className="ruchka" onClick={() => setstep(e => e == "tel1" ? "tel0" : "email0")}>
                        <IconRuchka />
                    </div>
                </div>
                <div className="kodbox">
                    <div className="kodbar">
                        <p className='p15'>Maxsus kodni kiriting</p>
                        <div className="kodinputs">
                            {inputrefs.current.map((ref, i) => <input key={i} className={isred ? "red" : ""} ref={ref} type="number" onChange={(e) => valuechange(e, i)} />)}


                        </div>
                    </div>
                    <div className="qaytayubor">
                        <p className='p16'>Qayta yuborish:</p>
                        {time !== 0 ? <div className="timer" style={time > 30 ? { backgroundColor: "rgba(130, 204, 39, 0.08)" } : { backgroundColor: "rgba(224, 181, 49, 0.08)" }}>
                            <p className={time > 30 ? 'pg16' : "py16"}>{`00:${time > 9 ? time : `0${time}`}`}</p>
                        </div> : <div className="qaytayuborbtn" onClick={qaytayubor}><IconReflesh /></div>}

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

export default Kodkirit
