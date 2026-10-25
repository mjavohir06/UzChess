import React from 'react'
import { ImageMedal, ImageTopKurslar } from '../../../importers/Images'
import { IconBolim, IconLevel, IconMuallif } from '../../../importers/Icon'
import Professional from "../../../assets/icons/professional.svg?react"
import Havaskor from "../../../assets/icons/havaskor.svg?react"
// import "./Profile.css"

const Kurslardata = [
    {
        img: ImageTopKurslar,
        title: "Asosiy taktikalar",
        text:"Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari haqida bilib o'rganish",
        muallif: "Robert Fisher",
        daraja: "Boshlang'ich",
        dars: 14,
        id: 1
    },{
        img: ImageTopKurslar,
        title: "Asosiy taktikalar",
        text:"Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari haqida bilib o'rganish",
        muallif: "Robert Fisher",
        daraja: "Professional",
        dars: 10,
        id: 2
    },{
        img: ImageTopKurslar,
        title: "Shaxmat donalari bilan tanishuv",
        text:"Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari haqida bilib o'rganish",
        muallif: "Javoxir Sindarov",
        daraja: "Xavaskor",
        dars: 12,
        id: 3
    },
    {
        img: ImageTopKurslar,
        title: "Asosiy taktikalar",
        text:"Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o‘ziga xos xususiyatlari haqida bilib o'rganish",
        muallif: "Robert Fisher",
        daraja: "Boshlang'ich",
        dars: 20,
        id: 4
    },
    
]

export function DarajaIcon(daraja="Boshlang'ich"){
    return daraja=="Boshlang'ich" ? <IconLevel style={{width:"24px",height:"24px"}}/> : daraja=="Professional" ? <Professional style={{width:"24px",height:"24px"}}/> : <Havaskor style={{width:"24px",height:"24px"}}/>

}

function Profile_Sotibolingan() {
  return (
    <div className='Pbuyurtma'>
        {
            Kurslardata.map((e,i)=>{
                return(<div key={i} className='SOKurs'>
                <div className="headerdiv">
                    <div className="img">
                        <img src={e.img} alt="" />
                    </div>
                    <div className="textbar">
                        <div className="title">
                            <p className='p20'>{e.title}</p>
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
                        <IconMuallif/>
                        <p className='p14'>{e.muallif}</p>
                    </nav>
                    <nav>
                        <IconBolim/>
                        <p className='p14'>{e.dars}ta dars</p>
                    </nav>
                </div>

            </div>)})
        }
      
    </div>
  )
}

export default Profile_Sotibolingan
