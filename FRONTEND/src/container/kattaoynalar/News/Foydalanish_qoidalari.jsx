import React from 'react'
import "./News.css"
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import { useLocation } from 'react-router-dom'
import { IconFacebook, IconShare, IconTelegram, IconTwitter } from '../../../importers/Icon'
import Copy from '../../engkichikoyna/Copy'
import Loyiharivoji from '../../kichikoynalar/Loyiharivoji'
import { Yportal } from '../Kutubxona/Kutubxona'


function Foydalanish_qoidalari() {
    const path=useLocation()
    return (
        <>
            <Breadcrumb data={[{ title: "Foydalanish qoidalari" }]} />
            <div className="containers">
                <div className="ustun12">
                    <div className='malumot_qolip'>
                        <div className="header">
                            <p className='p28'>Foydalanish qoidalari</p>
                        </div>
                        <div className="malumot qollanma">
                            <div className="backendpage">
                                <p className='p32'>Bu yerda backenddan kelgan ma'lumot bo'ladi</p>
                            </div>
                            <div className="mfooter">
                                <div className="tarmoqlar">
                                    <IconTwitter />
                                    <IconFacebook />
                                    <IconTelegram />
                                    <Copy text={window.location.origin + path.pathname} />
                                </div>
                                <div className="buttonbox">
                                    <div className="btn">
                                        <p className='p16'>Ulashish</p>
                                        <IconShare style={{ width: "20px", height: "20px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="ustun3">
                    <Loyiharivoji/>
                    <Yportal/>
                </div>
            </div>

        </>
    )
}

export default Foydalanish_qoidalari
