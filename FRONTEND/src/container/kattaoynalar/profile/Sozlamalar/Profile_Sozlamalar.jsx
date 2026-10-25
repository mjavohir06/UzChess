import React, { useEffect, useState } from 'react'
import { IconEmail, IconExit, IconKey, IconKorish, IconLog_out, IconPhone2, IconRuchka } from '../../../../importers/Icon'
import Portal_to_mainnav from '../../../../Portal/Portal_to_mainnav'
import Editname from './Oynalar/Editname'
import "../Profile.css"
import Chiqish from './Oynalar/Chiqish'
import { IsUser } from '../../../Asosiy/main'
import { useNavigate } from 'react-router-dom'
import EditPassword from './Oynalar/EditPassword'
import EditEmail from './Oynalar/EditEmail'
import ChekEdit from './Oynalar/ChekEdit'
import EditTel from './Oynalar/EditTel'

function Profile_Sozlamalar() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user){
        navigate("/home")
        return
    }
    const [step, setstep] = useState(0)

    const titledata = [
        {
            title: "Ma’lumotlarni tahrirlash",
            size: 676
        },
        {
            title: "Tzimdan chiqish",
            size: 440
        },
        {
            title: "Parolni yangilash",
            size: 466
        },
        {
            title: "Elektron pochtani yangilash",
            size: 466
        },
        {
            title: user.email?"Elektron pochtani yangilash":"Telefon raqamni yangilash",
            size: 466
        },
        {
            title: "Telefon raqamni yangilash",
            size: 466
        },
    ]

    return (<>
        {step !== 0 && <Portal_to_mainnav>
            <div className="Editparda" onClick={() => setstep(0)}>
                <div className="childbox" onClick={(e) => e.stopPropagation()}>
                    <div className="title" style={{ width: `${titledata[step - 1].size}px` }}>
                        <p className='p24'>{titledata[step - 1].title}</p>
                        <div className="exit" onClick={() => setstep(0)}>
                            <IconExit />
                        </div>
                    </div>
                    <div className="body">
                        {step == 1 && <Editname setstep={setstep} />}
                        {step == 2 && <Chiqish setstep={setstep} />}
                        {step ==3 && <EditPassword setstep={setstep}/>}
                        {step ==4 && <EditEmail setstep={setstep}/>}
                        {step ==5 && <ChekEdit setstep={setstep}/>}
                        {step ==6 && <EditTel setstep={setstep}/>}
                    </div>
                </div>
            </div>
        </Portal_to_mainnav>}
        <div className='PSozlamalar'>
            <div className="qolib12">
                <div className="title">
                    <div className="t">
                        <p className='p28'>Foydalanovchi ma’lumotlari</p>
                        <div className="ruchka" onClick={() => setstep(1)} >
                            <IconRuchka />
                        </div>
                    </div>
                    <div className="redbtn" onClick={() => setstep(2)}>
                        <IconLog_out />
                        <p className='p16'>Chiqish</p>
                    </div>
                </div>
                <div className="table">
                    <div className="tab">
                        <p className='text16'>Ism-sharifingiz</p>
                        <p className='p16'>{user.ism}</p>
                    </div>
                    <div className="tab">
                        <p className='text16'>Tug‘ilgan sana</p>
                        <p className='p16'>{user.birthday ? user.birthday : "-"}</p>
                    </div>
                </div>

            </div>
            <div className="qolib12">
                <div className="title">
                    <p className='p28'>Xavfsizlik</p>
                </div>
                <div className="yangilashlar">
                    <nav className="parol">
                        <div className="umum">
                            <div className="icon">
                                <IconKey />
                            </div>
                            <div className="textbar">
                                <p className='p16'>Parolni yangilash</p>
                                <p className='t14'>Esda qoluvchi va murakkab parol qo‘ying</p>
                            </div>
                        </div>
                        <div className="korish" onClick={()=>setstep(3)}>
                            <IconKorish style={{ color: "#F7F9FA" }} />
                        </div>
                    </nav>
                    {
                        user.tel ?
                            <nav className="parol">
                                <div className="umum">
                                    <div className="icon">
                                        <IconPhone2 />
                                    </div>
                                    <div className="textbar">
                                        <p className='p16'>Telefon raqamni yangilash</p>
                                        <p className='t14'>Telefon raqamingizni yangilang</p>
                                    </div>
                                </div>
                                <div className="korish" onClick={()=>setstep(6)}>
                                    <IconKorish style={{ color: "#F7F9FA" }} />
                                </div>
                            </nav>
                            :
                            <nav className="parol">
                                <div className="umum">
                                    <div className="icon">
                                        <IconEmail />
                                    </div>
                                    <div className="textbar">
                                        <p className='p16'>Elektron pochtani yangilash</p>
                                        <p className='t14'>Elektron pochtangizni yangilang</p>
                                    </div>
                                </div>
                                <div className="korish" onClick={()=>setstep(4)}>
                                    <IconKorish style={{ color: "#F7F9FA" }} />
                                </div>
                            </nav>
                    }
                </div>
            </div>

        </div>
    </>
    )
}

export default Profile_Sozlamalar
