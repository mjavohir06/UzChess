import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from "../../assets/pictures/UzChessLogo.png"
import Searchicon from "../../assets/icons/main/search.svg?react"
import Savatchaicon from "../../assets/icons/main/savatcha.svg?react"

import Bildirishnomaicon from "../../assets/icons/main/bildirishnoma.svg?react"
import Iconkurs from "../../assets/icons/kurslar.svg?react"
import Iconkitob from "../../assets/icons/kutubxona.svg?react"


// footer image











import { Link, Route, Router, Routes, useLocation, Navigate, createBrowserRouter, Outlet } from "react-router-dom"
import "./main.css"
import Bildirishnoma from '../kichikoynalar/Bildirishnoma'
import { boglanishurl, kurslarurl, kutubxonaurl, savatchaurl, yangiliklarurl } from '../engkichikoyna/Breadcrumb'
import Loginbox from '../kattaoynalar/Login/Loginbox'
import Footer from './Footer'
import { ImageUser } from '../../importers/Images'
import { IconExit, IconLog_in, IconSearch } from '../../importers/Icon'
import { Kurslardata } from '../kattaoynalar/Kurslar/Kurslar'
import { Kitoblardata } from '../kattaoynalar/Kutubxona/Kutubxona'
import Notfound from '../engkichikoyna/Notfound'
import { LoginContext } from '../../Contexts/LoginContext'






export function IsUser() {
  const user = JSON.parse(localStorage.getItem("user"))
  if (user && user !== null && user !==undefined) {
    return true
  } 

    return false
  
}




function Menu() {
  const path = useLocation().pathname
  return (
    <div className="menu">
      <div className="linkdiv">
        <Link className={path.startsWith('/home') ? "link lk" : "link"} to="/home">Asosiy</Link>
        <div className={path.startsWith('/home') ? "pastkichiziq pksk" : "pastkichiziq"}></div>
      </div>
      <div className="linkdiv">
        <Link className={path.startsWith(yangiliklarurl) ? "link lk" : "link"} to={yangiliklarurl}>Yangiliklar</Link>
        <div className={path.startsWith(yangiliklarurl) ? "pastkichiziq pksk" : "pastkichiziq"}></div>
      </div>
      <div className="linkdiv">
        <Link className={path.startsWith(kurslarurl) ? "link lk" : "link"} to={kurslarurl}>Kurslar</Link>
        <div className={path.startsWith(kurslarurl) ? "pastkichiziq pksk" : "pastkichiziq"}></div>
      </div>
      <div className="linkdiv">
        <Link className={path.startsWith(kutubxonaurl) ? "link lk" : "link"} to={kutubxonaurl}>Kutubxona</Link>
        <div className={path.startsWith(kutubxonaurl) ? "pastkichiziq pksk" : "pastkichiziq"}></div>
      </div>
      <div className="linkdiv">
        <Link className={path.startsWith(boglanishurl) ? "link lk" : "link"} to={boglanishurl}>Bog'lanish</Link>
        <div className={path.startsWith(boglanishurl) ? "pastkichiziq pksk" : "pastkichiziq"}></div>
      </div>
    </div>
  )
}

function Search() {
  const searchref = useRef()
  const alldata = []
  for (let kurs of Kurslardata) {
    alldata.push({ icon: <Iconkurs />, title: kurs.title, url: "/kurslar/" + kurs.id })
  }
  for (let kitob of Kitoblardata) {
    alldata.push({ icon: <Iconkitob />, title: kitob.kitobnomi, url: "library/single/" + kitob.id })
  }
  const [data, setdata] = useState(alldata)

  function search() {
    const value = searchref.current.value
    setdata(alldata.filter((e) => e.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
  }

  function tozalash() {
    searchref.current.value = ""
    search()
  }

  const highlightText = (text) => {
    const query = searchref.current
    if (!query) return text;

    const regex = new RegExp(`(${query.value})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.value.toLowerCase()
        ? <mark key={i}>{part}</mark>
        : part
    );
  };

  return (
    <div className="searchallbox">
      <div className="searchbar">
        <IconSearch />
        <input type="text" placeholder='Qidirish' ref={searchref} onChange={search} />
        <div className="btn" onClick={tozalash}>
          <p className='p16'>Tozalash</p>
        </div>
      </div>
      <div className="resultbar">
        {
          data.map((e, i) => {
            return (
              <Link to={e.url} className="result" key={i}>
                <div className="icon">
                  {e.icon}
                </div>
                <div className="title">
                  <p className='p20'>{highlightText(e.title)}</p>
                </div>
              </Link>
            )
          })
        }
        {data.length == 0 && <Notfound />}
      </div>
    </div>
  )

}






const main = () => {
  const {loginbar, qulf, setqulf } = useContext(LoginContext)
  const [bildir, setbildir] = useState(false)
  const [preslogin, setlogin] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [user,setUser]=useState()
  let  imguser = ImageUser
  const [g,setg]=useState(IsUser())
  useEffect(()=>{
    if (g) {
      setUser(JSON.parse(localStorage.getItem("user")))
      
    }
  },[loginbar])
  function login() {
    setlogin(true)
  }
  // useEffect(() => {

  // }, [qulf])
  useEffect(() => {
    if (qulf) {
      setlogin(true)
    }

  }, [qulf])


  return (
    <>
      <nav style={{ position: "relative" }} id='mainnav'>
        {bildir ? <Bildirishnoma setbildir={setbildir} /> : ""}
        {preslogin && <Loginbox pres={setlogin} />}
        {isSearch && <div className='pardaheader'></div>}
        <div className="mainnav">
          <div className="main" style={isSearch ? { zIndex: 999999 } : {}}>
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
            {
              isSearch ? <Search /> : <Menu />
            }


            <div className="kerakli">
              <div className="qsb">
                <div onClick={() => setSearch(p => !p)}>
                  {isSearch ? <IconExit /> : <Searchicon className="topicon" />}
                </div>
                <Link to={savatchaurl}><Savatchaicon className="topicon" /></Link>
                <Bildirishnomaicon className="topicon" onClick={() => setbildir(true)} />
              </div>

              <div className="chiziqcha"></div>
              {user ? <Link to={"/profile"} className='account'><p className='p16'>{user.ism}</p><div className="img"><img src={imguser} alt="" /></div></Link> : <div className="login" onClick={login}>
                <p>Kirish</p>
                <IconLog_in />
              </div>}
            </div>
          </div>
          {/* <div className="breadcrumb">

        </div> */}
          {/* <Breadcrumb/> */}


          {/* <Routes>
          <Route path='/' element={<Navigate to={'/home'} replace/>} />
          <Route path="/home" element={<Boshoyna/>}/>
          <Route path={kutubxonaurl} element={<Kutubxona />} />
          <Route path={savatchaurl} element={<Savatcha />} />
          <Route path={profileurl} element={<Profile />} />
          <Route path={kutubxonaurl+"/single/:id"} element={<Kutubxona_single/>}/>





          <Route path='*' element={<Error404/>}/>
        </Routes> */}
          <Outlet />
        </div>
        <div className="joyberfooter"></div>
      </nav>
      <Footer />
    </>
  )
}

export default main
