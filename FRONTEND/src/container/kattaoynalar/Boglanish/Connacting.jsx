import React, { useRef, useState } from 'react'
import "./style.css"
import { Yportal } from '../Kutubxona/Kutubxona'
import frame from "../../../assets/pictures/Frame.png"
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import { IconCalendar, IconCheckbox, IconExit, IconGmail, IconPhone, IconTrain_Outline } from '../../../importers/Icon'
import Portal_to_mainnav from '../../../Portal/Portal_to_mainnav'
import { Link } from 'react-router-dom'
const infodata = [
    {
        icon: <IconCalendar />,
        title: "Ish vaqti",
        text: "Dushanba-Juma 9:00-18:00"
    },
    {
        icon: <IconGmail />,
        title: "E-mail",
        text: "info@chessnation.uz"
    },
    {
        icon: <IconPhone />,
        title: "Telefon",
        text: "+998 (71) 203 55 11"
    },
    {
        icon: <IconTrain_Outline />,
        title: "Yaqin metro",
        text: "Mingo‘rik"
    }
]

function Connacting() {
    const [isopen, setopen] = useState(false)
    const telRef = useRef()
    const [tel,setTel]=useState()
    const [ism,setIsm]=useState()
    const [shikoyat,setShikoyat]=useState()

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
        if(tel && ism && shikoyat){
            if(String(tel).length===9){
                setopen(true)
            }else{
                alert("Telefon raqamda xatolik bor!!!")
            }
        }else{
            alert("Ma'lumot to'liq kiritilmagan!!!")
        }
    }


    return (
        <>
            <Breadcrumb data={[{ title: "Bog'lanish" }]} />
            {isopen &&
                <Portal_to_mainnav>
                    <div className="bgbox" onClick={() => setopen(false)}>
                    </div>
                    <div className="alertbox">
                        <div className="alert">
                            <div className="chek">
                                <IconCheckbox style={{ width: "64px", height: "64px" }} />
                            </div>
                            <div className="title">
                                <p className='p24'>Muvaffaqiyatli yuborildi</p>
                                <p className='text16'>Shikoyatingiz muvoffaqiyatli yuborildi</p>
                            </div>
                            <Link to={'/kurslar'} className="bluebtn">
                                <p className='p16'>Kursni ko'rish</p>
                            </Link>
                            <div className="x_cancel" onClick={() => setopen(false)}>
                                <IconExit />
                            </div>
                        </div>
                    </div>
                </Portal_to_mainnav>
            }

            <div className='container'>
                <div className="ustun12">
                    <div className="shikoyatbox">
                        <div className="title">
                            <p className='p28'>Bog‘lanish</p>
                        </div>
                        <div className="shikoyatbar">
                            <div className="textbox">
                                <div className="malumotinputs">
                                    <div className="ismbox">
                                        <p className='t15'>Siz bilan bog‘lanish</p>
                                        <input type="text" onChange={(e)=>setIsm(e.target.value)} placeholder='Ism familiyangizni kiriting' />
                                    </div>
                                    <div className="telbox">
                                        <p className='t15'>Telefon raqamingiz</p>
                                        <div className="teldiv">
                                            <div className="davlatr">
                                                <p className='p14'>+998</p>
                                            </div>
                                            <input style={{ outline: "none" }} ref={telRef} onChange={telkirit} type="tel" id="tel" placeholder="_ _  _ _ _  _ _  _ _" />
                                        </div>
                                    </div>
                                </div>
                                <div className="shikoyatinput">
                                    <p className='t15'>Shikoyat</p>
                                    <textarea placeholder='matn kiriting...' onChange={(e)=>setShikoyat(e.target.value)}></textarea>
                                </div>
                                <div className="tasdiqlash">
                                    <div className="tekshirish">
                                        <label className="checkbox">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <p className='p16'>Foydalanish <a href="/">shartlari</a> va <a href="/">qoidalarini</a> qabul qilaman</p>

                                    </div>
                                    <div className="btn" onClick={tasdiqlash}>
                                        <p className='p16'>Yuborish</p>
                                    </div>
                                </div>

                            </div>
                            <div className="infobox">
                                {
                                    infodata.map((e) => <div className="infobar">
                                        <div className="icon">
                                            {e.icon}
                                        </div>
                                        <div className="text">
                                            <p className='t14'>{e.title}</p>
                                            <p className='p16'>{e.text}</p>
                                        </div>
                                    </div>)
                                }
                            </div>

                        </div>
                    </div>

                    <div className="xarita">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.9318679613557!2d69.35503673209458!3d41.35383459968411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef52ca7c4c225%3A0x337e865b04679f0f!2sFunlandia%20play%20centre!5e0!3m2!1suz!2s!4v1766506662653!5m2!1suz!2s"
                            style={{ width: "100%", height: "100%", borderRadius: "12px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>

                </div>
                <div className="ustun3">
                    <Yportal />
                    <div className="yishlar">
                        <img src={frame} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Connacting
