import React, { useContext, useEffect, useRef, useState } from 'react'
import "./kutubxona.css"
import kutubxona from "../../../assets/icons/kutubxona.svg"
import Searchicon from "../../../assets/icons/main/search.svg?react"
import star2 from "../../../assets/icons/Star2.svg"

import kirish from "../../../assets/icons/kirish2.svg"



import fisher from "../../../assets/pictures/fisher.png"
import yoshlarp from "../../../assets/pictures/yoshlarp.png"
import frame from "../../../assets/pictures/Frame.png"
import ot from "../../../assets/pictures/topkitoblar.png"
import andre from "../../../assets/pictures/andre.png"
import david from "../../../assets/pictures/david.png"
import mikhail from "../../../assets/pictures/mikhail.png"


import Kitoblar from '../../kichikoynalar/Kitoblar'
import { KitoblarContext } from '../../../Contexts/BookContext'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import Copy from '../../engkichikoyna/Copy'
import Notfound from '../../engkichikoyna/Notfound'

export const Kitoblardata = [
    {
        muallifimg: fisher,
        rating: 3.5,
        til: "Py",
        kitobnomi: "Bobbi Fisher shaxmatni o‘ynashni o‘rganing",
        narx: "205 000 uzs",
        chegirma: "155 000 uzs",
        daraja: "Boshlang'ich",
        yonalishnomi: "Tarix",
        ismi: "Robert Fisher",
        sotibolingan: false,
        id: 1
    },
    {
        muallifimg: ot,
        rating: 3.5,
        til: "O'z",
        kitobnomi: "Bobbi Fisher shaxmatni o‘ynashni o‘rganing",

        chegirma: "180 000.00 uzs",
        daraja: "Boshlang'ich",
        yonalishnomi: "Adabiyot",
        ismi: "Jonatan Dez",
        sotibolingan: true,
        id: 2
    },
    {
        muallifimg: andre,
        rating: 3.5,
        til: "Py",
        kitobnomi: "Mening tizimim",

        chegirma: "Bepul",
        daraja: "Havaskor",
        yonalishnomi: "Matematika",
        ismi: "Andre Miladze",
        sotibolingan: true,
        id: 3
    },
    {
        muallifimg: david,
        rating: 3.5,
        til: "O'z",
        kitobnomi: "Zurixdagi shaxmat musobaqasi",

        chegirma: "120 000 uzs",
        daraja: "Professional",
        yonalishnomi: "Tarix",
        ismi: "David Bronstein",
        sotibolingan: false,
        id: 4
    },
    {
        muallifimg: mikhail,
        rating: 3.5,
        til: "Py",
        kitobnomi: "Mening esdaqolarlik o‘yinlarim",
        narx: "209 000 uzs",
        chegirma: "189 000 uzs",
        daraja: "Boshlang'ich",
        yonalishnomi: "Matematika",
        ismi: "Mikhail Litvin",
        sotibolingan: false,
        id: 5
    },
    {
        muallifimg: david,
        rating: 3.5,
        til: "O'z",
        kitobnomi: "Zurixdagi shaxmat musobaqasi",

        chegirma: "120 000 uzs",
        daraja: "Professional",
        yonalishnomi: "Tarix",
        ismi: "David Bronstein",
        sotibolingan: false,
        id: 6
    },
    {
        muallifimg: mikhail,
        rating: 3.5,
        til: "Py",
        kitobnomi: "Mening esdaqolarlik o‘yinlarim",
        narx: "209 000 uzs",
        chegirma: "189 000 uzs",
        daraja: "Boshlang'ich",
        yonalishnomi: "Matematika",
        ismi: "Mikhail Litvin",
        sotibolingan: false,
        id: 7
    },
]
function Yportal() {
    return (
        <div className="yportal">
            <img src={yoshlarp} alt="" />
            <div className="btn">
                <p>Batafsil</p>
                <img src={kirish} alt="" />
            </div>
        </div>
    )
}

function Kutubxona() {
    const { cart, setCart } = useContext(KitoblarContext)
    const [kitob, setkitob]=useState(Kitoblardata)
    const [count,setCount]=useState(1)
    const searchref = useRef()

    useEffect(() => {
        for (let d of Kitoblardata) {
            if (d.sotibolingan) {
                setCart((e) => [...e, d.id])
            }
        }

    }, [])
    function search() {
        const value = searchref.current.value
        setkitob(Kitoblardata.filter((e) => e.kitobnomi.toLocaleLowerCase().includes(value.toLocaleLowerCase())))


    }




    return (
        <>
            <Breadcrumb data={[{ title: "Kutubxona" }]} />
            <div className="container">
                <div className="ustun1">
                    <div className="kutubxona">
                        <img src={kutubxona} alt="" />
                        <p>Kutubxona</p>
                    </div>
                    <div className="filter">
                        <div className="title1">
                            <p>Filter</p>
                            <a href="/">Tozalash</a>
                        </div>
                        <div className="bar1">
                            <p>Tilni tanlang:</p>
                            <select>
                                <option value="/">O'zbek</option>
                            </select>
                        </div>
                        <div className="bar1">
                            <p>Darajani tanlang:</p>
                            <select>
                                <option value="/">Barchasi</option>
                            </select>
                        </div>
                        <div className="bar1">
                            <p>Kategoriya:</p>
                            <select>
                                <option value="/">Barchasi</option>
                            </select>
                        </div>
                        <div className="bar1">
                            <p>Reyting:</p>
                            <nav>
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                                <img src={star2} alt="" />
                            </nav>
                        </div>
                    </div>


                </div>
                {/* <!-- --------------Box2----------- --> */}
                <div className="boxs2">
                    <div className="search">
                        <Searchicon className="searchicon" />
                        <input onChange={search} ref={searchref} type="text" placeholder="Qidirish" />
                    </div>
                    {/* ----------------------Kitoblar------------------------ */}
                    {
                        kitob.length==0 && <Notfound/>
                    }
                    {kitob.map((e,i) =>{ 
                        if(i<(5*count)){

                            return <Kitoblar data={e} ref={searchref.current} />
                        }
                    })}



                    {kitob.length>5*count?<div onClick={()=>setCount(e=>e+1)} className="davomi">
                        Ko'proq
                    </div>:""}



                </div>
                <div className="boxs3">
                    <Yportal />
                    <div className="yishlar">
                        <img src={frame} alt="" />
                    </div>
                </div>



            </div>
        </>
    )
}

export default Kutubxona
export { Yportal }