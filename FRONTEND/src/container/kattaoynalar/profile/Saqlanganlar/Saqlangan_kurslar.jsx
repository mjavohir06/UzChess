import React, { useState } from 'react'
import { ImageTopKurslar } from '../../../../importers/Images'
import { DarajaIcon } from '../Profile_Sotibolingan'
import { IconBolim, IconHeart, IconMoney, IconMuallif, IconYellowStar } from '../../../../importers/Icon'

const Kurslardata = [
    {
        img: ImageTopKurslar,
        rating: 4.5,
        language: "O'z",
        title: "Shaxmat donalari bilan tanishuv",
        text: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari haqida bilib o'rganish",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        dars: 5,
        yonalish: "Strategiya",
        id: 1
    },
    {
        img: ImageTopKurslar,
        rating: 4.2,
        language: "O'z",
        title: "Shoxga hujum qilish",
        text: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari haqida bilib o'rganish",
        muallif: "Robert Fisher",
        pr2: 0,
        daraja: "Boshlang'ich",
        dars: 5,
        yonalish: "Strategiya",
        id: 2
    },
    {
        img: ImageTopKurslar,
        rating: 3.8,
        language: "O'z",
        title: "Mot qilish",
        text: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari haqida bilib o'rganish",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        dars: 5,
        yonalish: "Strategiya",
        id: 3
    }
]

function Saqlangan_kurslar() {
    return (
        <div className='Pbuyurtma'>
            {
                Kurslardata.map((e, i) => {
                    const [pres, setpres] = useState(true)
                    return (<div key={i} className='SOKurs'>
                        <div className="headerdiv">
                            <div className="img v2">
                                <img src={e.img} alt="" />
                                <div className="rating">
                                    <IconYellowStar />
                                    <p className='p12'>{e.rating}</p>
                                </div>
                            </div>
                            <div className="textbar">
                                <div className="title">
                                    <p className='p20'>{e.title}</p>
                                </div>
                                <div className="price">
                                    <IconMoney style={e.pr2 != 0 ? { width: "16px", height: "16px", color: "#1C92E0" } : { width: "16px", height: "16px", color: "#82CC27" }} />
                                    <p className='p14'>{e.pr2 == 0 ? "Bepul" : `${e.pr2.toLocaleString("fr-FR")}.00 uzs`}</p>
                                    {e.pr1 && <p className='pl12'>{e.pr2.toLocaleString("fr-FR")}.00 uzs</p>}
                                </div>
                                <div className="text">
                                    <p className='t14 q2'>{e.text}</p>
                                </div>
                            </div>
                        </div>
                        <div className="footerdiv">
                            <nav>
                                {DarajaIcon(e.daraja)}
                                <p className='p14'>{e.daraja}</p>
                            </nav>
                            <nav>
                                <IconMuallif />
                                <p className='p14'>{e.muallif}</p>
                            </nav>
                            <nav>
                                <IconBolim />
                                <p className='p14'>{e.dars}ta dars</p>
                            </nav>
                            <div className="yurakcha" onClick={()=>setpres(p=>!p)}>
                                <IconHeart istrue={pres}/>
                            </div>
                        </div>

                    </div>)
                })
            }

        </div>
    )
}

export default Saqlangan_kurslar
