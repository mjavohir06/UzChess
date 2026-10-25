import React, { useRef, useState } from 'react'
import "./Kurslar.css"
import { IconBlackStar, IconBolim, IconHeart, IconLevel, IconSearch, IconYellowStar, IconYonalish } from '../../../importers/Icon'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'


import Kurslarsvg from "../../../assets/icons/kurslar.svg"
import { Yportal } from '../Kutubxona/Kutubxona'
import Loyiharivoji from '../../kichikoynalar/Loyiharivoji'
import { ImageBulut, ImageOt, ImageTopKurslar } from '../../../importers/Images'
import { Link } from 'react-router-dom'
import Notfound from '../../engkichikoyna/Notfound'



const Kurslardata = [
    {
        img: ImageTopKurslar,
        rating: 4.5,
        language: "O'z",
        title: "Shaxmat donalari bilan tanishuv",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 1
    },
    {
        img: ImageTopKurslar,
        rating: 4.2,
        language: "O'z",
        title: "Shoxga hujum qilish",
        muallif: "Robert Fisher",
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 2
    },
    {
        img: ImageTopKurslar,
        rating: 3.8,
        language: "O'z",
        title: "Mot qilish",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 3
    },
    {
        img: ImageTopKurslar,
        rating: 4.8,
        language: "O'z",
        title: "Asosiy taktikalar",
        muallif: "Robert Fisher",
        pr2: 0,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 4
    },
    {
        img: ImageTopKurslar,
        rating: 3.8,
        language: "O'z",
        title: "Mot qilish",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 5
    },
    {
        img: ImageTopKurslar,
        rating: 4.8,
        language: "O'z",
        title: "Asosiy taktikalar",
        muallif: "Robert Fisher",
        pr2: 0,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 6
    },
]


function Kurslar() {
    const searchref = useRef()
    const [kursdata, setkurs] = useState([...Kurslardata])
    const [count, setCount] = useState(1)
    function search() {
        const value = searchref.current.value
        setkurs(Kurslardata.filter((e) => e.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())))


    }

    const highlightText = (text) => {
        const query=searchref.current
        if (!query) return text;

        const regex = new RegExp(`(${query.value})`, "gi");

        return text.split(regex).map((part, i) =>
            part.toLowerCase() === query.value.toLowerCase()
                ? <mark key={i}>{part}</mark>
                : part
        );
    };



    return (
        <>
            <Breadcrumb data={[{ title: "Kusrlar" }]} />
            <div className='container'>
                <div className="ustun1">
                    <div className="kutubxona">
                        <img src={Kurslarsvg} alt="" />
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
                                <IconBlackStar />
                                <IconBlackStar />
                                <IconBlackStar />
                                <IconBlackStar />
                                <IconBlackStar />
                            </nav>
                        </div>
                    </div>


                </div>
                <div className="ustun2">
                    <div className="search" >
                        <div onClick={() => searchref.current.focus()} style={{ width: "24px", height: "32px", display: "flex", alignItems: "center" }}>
                            <IconSearch />
                        </div>
                        <input onChange={search} ref={searchref} type="text" placeholder="Izlash" />
                    </div>

                    <div className="kitobroyhat">
                        {kursdata.map((e, i) => {
                            if (i < (4 * count)) {

                                return (
                                    <Link key={e.id} to={"/kurslar/" + e.id} className="book-container" id="v2">
                                        <div className="book-cover2">
                                            <img className="cover-image2" src={e.img} alt="Book cover image" />
                                            <div className="rating">
                                                <IconYellowStar />
                                                {e.rating}
                                            </div>
                                            <div className="language">
                                                {e.language}
                                            </div>
                                        </div>
                                        <div className="texts" id="texts">
                                            <div className="mainbar" id="mainbar">
                                                <div className="maintext">
                                                    <p className="textm1">{highlightText(e.title)}</p>
                                                    <p className="mual">{e.muallif}</p>
                                                </div>
                                                <div className="price">
                                                    {e.pr1 && <p className='pr1'>{e.pr1.toLocaleString('fr-FR') + ".00 uzs"}</p>}
                                                    <p className="pr22">{e.pr2 == 0 ? "Bepul" : e.pr2.toLocaleString('fr-FR') + ".00 uzs"}</p>
                                                </div>
                                                <div className="mainmenu">
                                                    <div className="mainlevel">
                                                        <IconLevel />
                                                        <p>{e.daraja}</p>
                                                    </div>
                                                    <div className="j">

                                                    </div>
                                                    <div className="mainyonalish">
                                                        <IconBolim />
                                                        <p>{e.bolim} ta bo'lim</p>
                                                    </div>
                                                    <div className="j">

                                                    </div>
                                                    <div className="mainmuallif">
                                                        <IconYonalish />
                                                        <p>{e.yonalish}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <IconHeart />

                                    </Link>
                                )
                            }
                        })}

                        {kursdata.length===0 && <Notfound/>
                        }

                        {kursdata.length > (4 * count) ? <div onClick={() => setCount(e => e + 1)} className="davomi">
                            Ko'proq
                        </div> : ""}
                    </div>

                </div>
                <div className="ustun3">
                    <Yportal />
                    <Loyiharivoji />
                </div>
            </div>
        </>
    )
}

export default Kurslar
export { Kurslardata }