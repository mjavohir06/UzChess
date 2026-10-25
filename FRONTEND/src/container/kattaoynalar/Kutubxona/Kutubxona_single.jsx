import React from 'react'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import { ImageOt } from '../../../importers/Images'
import { IconLevel, IconMoney, IconMuallif, IconSahifa, IconSana, IconSavatcha, IconShare, IconYurakcha } from '../../../importers/Icon'


import "./kutubxona.css"
import { Yportal } from './Kutubxona'
import Topkitoblar from '../../kichikoynalar/Topkitoblar'

function Kutubxona_single() {
  return (
    <div>
        <Breadcrumb data={[{url:"/library",title:"Kutubxona"},{title:"Shaxmatdagi qobiliyatliringizga qayta baxo bering"}]}/>
        <div className="Kutubxonasinglecontainer">
            <div className="ustun1">
                <div className="mahsulot">
                <div className="mahsulottitle">
                    <div className="photo">
                        <img src={ImageOt} alt=""/>
                        <img src={ImageOt} alt=""/>
                    </div>
                    <div className="mtitle">
                        <div className="title">
                            <p className="p28">Shaxmatdagi qobiliyatlaringizga qayta baxo bering</p>

                        </div>
                        <div className="price">
                            <IconMoney color="#1C92E0"/>
                            <p className="p20">55 000.00 uzs</p>
                            <p className="redline">160 000.00 uzs</p>
                        </div>
                        <div className="mtable">
                            <div>
                                <nav>
                                    <IconLevel/>
                                    <p>Daraja</p>
                                </nav>
                                <p>Boshlangich</p>
                            </div>
                            <div>
                                <nav>
                                    <IconMuallif/>
                                    <p>Muallif</p>
                                </nav>
                                <p>Jeremy Silman</p>
                            </div>
                            <div>
                                <nav>
                                    <IconSahifa/>
                                    <p>Sahifa soni</p>
                                </nav>
                                <p>231</p>
                            </div>
                            <div>
                                <nav>
                                    <IconSana/>
                                    <p>Chop etilgan sana</p>
                                </nav>
                                <p>2002</p>
                            </div>
                        </div>
                        <div className="mbutton">
                            <div className="mbtn">
                                <IconSavatcha/>
                                <p className="p20">Savatchaga</p>
                            </div>
                            <div className="msh">
                                <IconYurakcha/>
                            </div>
                            <div className="msh">
                                <IconShare/>
                            </div>
                        </div>
                    </div>
                </div>          
                <div className="mtext"> 
                    <p className="p24">Kitob haqida</p>
                    <p className="t16">Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi sayohatni baham ko'radi. va shaxmat o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor.</p>
                </div>
            </div>
            </div>
            <div className="ustun2">
                <Yportal/>
                <Topkitoblar title={"Tavsiyalar"}/>
            </div>
        </div>
    </div>
  )
}

export default Kutubxona_single
