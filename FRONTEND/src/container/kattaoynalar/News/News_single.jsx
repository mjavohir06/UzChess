import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import { Link, useLocation, useParams } from 'react-router-dom'
import { yangiliklardata } from './News'
import Copy from '../../engkichikoyna/Copy'
import { IconEye, IconFacebook, IconShare, IconTelegram, IconTwitter } from '../../../importers/Icon'
import Topbar from '../../engkichikoyna/Topbar'


function News_single() {
    const { id } = useParams()
    const [data, setData] = useState()
    const path = useLocation()
    const korish_soni = 5432

    useEffect(() => {
        for (let d of yangiliklardata) {
            if (d.id == id) {
                setData(d)
            }
        }
    }, [yangiliklardata])

    if (data) {
        return (
            <>
                <Breadcrumb data={[{ title: "Yangiliklar", url: "/news" }, { title: data.title }]} />
                <div className="containers">
                    <div className="ustun12">
                        <div className='malumot_qolip'>
                            <div className="header">
                                <p className='p28'>{data.title}</p>
                                <p className='t16'>{data.sana} • 20:22</p>
                                <div className="img">
                                    <img src={data.img} alt="" />

                                </div>
                            </div>
                            <div className="malumot">
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
                                        <div className="korish">
                                            <IconEye style={{ width: "24px", height: "24px" }} />
                                            <p className='p16'>{korish_soni}</p>
                                        </div>
                                        <div className="btn">
                                            <p className='p16'>Ulashish</p>
                                            <IconShare style={{ width: "20px", height: "20px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qoshimcha">
                            <Topbar title={"O‘xshash yangiliklar"} to={"/news"} text={"Barcha yangiliklar"} />
                            <div className="news">
                                {
                                    yangiliklardata.map((e, i) => {
                                        if (i < 3) {
                                            return <Link to={"/news/single/" + e.id} key={i} className='newbox'>
                                                <img src={e.img} alt="" />
                                                <p className='t14'>{e.sana}</p>
                                                <p className='p14'>{e.title}</p>
                                                <p className='t14'>{e.text}</p>
                                            </Link>
                                        }

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default News_single
