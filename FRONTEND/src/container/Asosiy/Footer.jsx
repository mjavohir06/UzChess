import React from 'react'
import "./main.css"

import humo from "../../assets/icons/humo.svg"
import Logo2 from "../../assets/pictures/Logo.png"


import telegram from "../../assets/icons/footer/telegram.svg"
import instagram from "../../assets/icons/footer/instagram.svg"
import twitter from "../../assets/icons/footer/twitter.svg"
import youtube from "../../assets/icons/footer/youtube.svg"
import facebook from "../../assets/icons/footer/facebook.svg"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <div className="lg">

                <img src={Logo2} alt="" />
            </div>
            <div className="menu">
                <Link className='p14' to={"/"}>Biz haqimizda</Link>
                <Link className='p14' to={"/"}>Cookie fayllari siyosati</Link>
                <Link className='p14' to={"/qollanma"}>Foydalanish qoidalari</Link>
                <Link className='p14' to={"/connacting"}>Bog‘lanish</Link>
            </div>
            <div className="tarmoq">
                <img src={instagram} alt="" />
                <img src={telegram} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
            </div>
            <div className="tag1">
                <div className="tag">
                    <p className='p16'>© UzChess. All rights reserved.</p>
                    <img src={humo} alt="" />
                    <p className='p16'>Foydalanish qoidalari</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
