import React from 'react'
import Logo from "../../assets/pictures/UzChessLogo.png"
import search from "../../assets/icons/search.svg"
import savatcha from "../../assets/icons/savatcha.svg"
import log_in from "../../assets/icons/log-in.svg"
import bildirishnoma from "../../assets/icons/bildirishnoma.svg"
import humo from "../../assets/icons/humo.svg"
import Logo2 from "../../assets/pictures/Logo.png"

// footer image
import telegram from "../../assets/icons/footer/telegram.svg"
import instagram from "../../assets/icons/footer/instagram.svg"
import twitter from "../../assets/icons/footer/twitter.svg"
import youtube from "../../assets/icons/footer/youtube.svg"
import facebook from "../../assets/icons/footer/facebook.svg"










import {Link,Route,Router,Routes} from "react-router-dom"
import "./main.css"
import Boshoyna from '../elements/boshoyna'
import Kutubxona from '../kattaoynalar/Kutubxona'
const main = () => {
  return (
    <nav >
    <div className='mainnav'>
      <div className="main">
        <div className="nomi">
            <div className="name">
                <img src={Logo} alt="" />
            </div>
            
            <div className='chiziqcha'></div>
            
            <div className="tils">
              <select>
                  <option value="uz">O'zbekcha</option>
              </select>
            </div>
              
        </div>

        <div className="menu">
          <Link className='link' to="/">Asosiy</Link>
          <Link className='link' to="/news">Yangiliklar</Link>
          <Link className='link' to="/coures">Kurslar</Link>
          <Link className='link' to="/library">Kutubxona</Link>
          <Link className='link' to="/connacting">Bog'lanish</Link>
        </div>
        
        <div className="kerakli">
          <div className="qsb">
            <img src={search} alt="?" />
            <img src={savatcha} alt="S" />
            <img src={bildirishnoma} alt="!" />
          </div>
          
          <div className="chiziqcha"></div>
          <div className="login">
            <p>Kirish</p>
            <img src={log_in} alt=">" />
          </div>
        </div>
      </div>
      {/* <div className="breadcrumb">

      </div> */}
      <Routes>
        <Route path='/' element={<Boshoyna/>}/>
        <Route path='/library' element={<Kutubxona/>}/>
      </Routes>
    </div>
      <footer className='footer'>
        <div className="lg">

        <img src={Logo2} alt="" />
        </div>
        <div className="menu">
          <Link className='p14' to={"/"}>Biz haqimizda</Link>
          <Link className='p14' to={"/"}>Cookie fayllari siyosati</Link>
          <Link className='p14' to={"/"}>Foydalanish qoidalari</Link>
          <Link className='p14' to={"/"}>Bog‘lanish</Link>
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
    </nav>
  )
}

export default main
