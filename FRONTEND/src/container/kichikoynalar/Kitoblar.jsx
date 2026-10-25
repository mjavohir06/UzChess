import React, { useContext, useState } from 'react'
import { KitoblarContext } from '../../Contexts/BookContext.jsx'


import Savatchaicon from "../../assets/icons/main/savatcha.svg?react"
import Havaskor from "../../assets/icons/havaskor.svg?react"
import Professional from "../../assets/icons/professional.svg?react"
import yonalish from "../../assets/icons/yonalish.svg"

import yurakcha from "../../assets/icons/yurakcha.svg"
import muallif from "../../assets/icons/muallif.svg"
import star from "../../assets/icons/Star.svg"
import { IconLevel } from '../../importers/Icon.jsx'
import { Link } from 'react-router-dom'

function Kitoblar({ data ,ref}) {
    const { muallifimg, rating, til, kitobnomi, narx, chegirma, daraja, yonalishnomi, ismi, sotibolingan,id } = data
    const [s1,sets1]=useState(sotibolingan)
    const {cart,setCart}=useContext(KitoblarContext)
    const CartSet=new Set([...cart])
    function savatgajoyla(){
        if(CartSet.has(id) ){
            CartSet.delete(id)
            sets1(false)
            setCart([...CartSet])
        }else{
            CartSet.add(id)
            sets1(true)
            setCart([...CartSet])
        }
        
    }
    const highlightText = (text) => {
        const query=ref
        if (!query) return text;

        const regex = new RegExp(`(${query.value})`, "gi");

        return text.split(regex).map((part, i) =>
            part.toLowerCase() === query.value.toLowerCase()
                ? <mark key={i}>{part}</mark>
                : part
        );
    };
    
    return (
        <KitoblarContext>
            <Link to={"single/"+data.id}>
            <div  className="book-container">
                <div className="book-cover">
                    <img className="cover-image" src={muallifimg} alt="Book cover image" />
                    <div className="rating">
                        <img src={star} alt="svg icon" />
                        {rating}
                    </div>
                    <div className="language">
                        {til}
                    </div>
                </div>
                <div className="texts">
                    <div className="mainbar">
                        <div className="maintext">
                            <p>{highlightText(kitobnomi)}</p>
                        </div>
                        <div className="price">

                            {narx ? <p className="pr1">{narx}</p> : ""}
                            <p className="pr2">{chegirma} uzs</p>
                        </div>
                        <div className="mainmenu">
                            <div className="mainlevel">
                                {daraja == "Boshlang'ich" ? <IconLevel/> : daraja == "Havaskor" ? <Havaskor style={{width:"18px",transform:"translateY(-3px)"}}/> : daraja == "Professional" ? <Professional style={{width:"18px",transform:"translateY(-3px)"}}/> : <IconLevel/>}
                                <p>{daraja}</p>
                            </div>
                            <div className="j">

                            </div>
                            <div className="mainyonalish">
                                <img src={yonalish} alt="svg icon" />
                                <p>{yonalishnomi}</p>
                            </div>
                            <div className="j">

                            </div>
                            <div className="mainmuallif">
                                <img src={muallif} alt="svg icon" />
                                <p>{ismi}</p>
                            </div>
                        </div>
                    </div>
                    <div className={s1 ? "textbtn bos" : "textbtn"} onClick={savatgajoyla}>
                        <Savatchaicon style={{ color: "#F7F9FA" }} />
                        <p>Savatchaga</p>
                    </div>
                </div>
                <img src={yurakcha} alt="svg icon" />

            </div>
            </Link>
        </KitoblarContext>
    )
}


export default Kitoblar
