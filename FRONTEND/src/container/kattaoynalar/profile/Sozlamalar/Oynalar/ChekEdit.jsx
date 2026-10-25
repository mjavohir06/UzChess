import React, { useEffect, useRef, useState } from 'react'
import { IconReflesh, IconRuchka } from '../../../../../importers/Icon'

function ChekEdit({ setstep }) {
    const testkod = 123456
    const user = JSON.parse(localStorage.getItem("user"))
    const [time, setTime] = useState(59)
    const [formattel, setformat] = useState()
    const [isred, setred] = useState(false)
    const inputrefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)])


    useEffect(() => {
        if (time === 0) return;

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);
    useEffect(() => { inputrefs.current[0].current.focus() }, [])

    useEffect(() => {
        if (user.tel) {
            if (user.tel) {
                let formatted = "";
                if (String(user.tel).length > 0) formatted += String(user.tel).substring(0, 2);
                if (String(user.tel).length > 2) formatted += " " + String(user.tel).substring(2, 5);
                if (String(user.tel).length > 5) formatted += " " + String(user.tel).substring(5, 7);
                if (String(user.tel).length > 7) formatted += " " + String(user.tel).substring(7, 9);
                setformat(formatted)
            }

        }
    }, [])
    const data = user.email ? { title: "Tasdiqlash uchun maxsus kod elektron pochtaga yuborildi ", text: user.email } : { title: "Tasdiqlash uchun maxsus kod quyidagi raqamga yuborildi ", text: `+998 ${formattel}` }

    function orqaga() {
        if (user.email) {
            setstep(4)
        }
        else {
            setstep(6)
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
                if (kod[k] != String(testkod)[i]) {
                    natija = false
                }
                i++
            }
            if (natija) {
                setstep(0)

            } else {
                setred(true)
            }

        } else {
            setred(true)
        }
    }

    return (
        <>
            <div className="loginbar" style={{ height: "380px" }}>
                <p className='p20'>{data.title}</p>
                <div className="qaytayoz">
                    <div><p className='t16'>{data.text}</p></div>
                    <div className="ruchka" onClick={orqaga}>
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
                        </div> : <div className="qaytayuborbtn" onClick={() => setTime(59)}><IconReflesh /></div>}

                    </div>
                </div>
                <div className="bluebtn" onClick={tasdiqlash}>
                    <p className='p16'>Tasdiqlash</p>
                </div>
            </div>

        </>
    )
}

export default ChekEdit
