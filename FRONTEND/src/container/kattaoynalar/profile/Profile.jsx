import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'


import profileimg from "../../../assets/pictures/Profile/profile.jpg"

import sotibolishicon from "../../../assets/icons/Profile/sotibolish.svg"
import rocketicon from "../../../assets/icons/Profile/rocket 1.svg"
import hearticon from "../../../assets/icons/Profile/heart.svg"
import sozlamalaricon from "../../../assets/icons/Profile/sozlamalar.svg"
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import Profile_Buyurtmalar from './Profile-Buyurtmalar'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { IsUser } from '../../Asosiy/main'
import { LoginContext } from '../../../Contexts/LoginContext'


function Profile() {
    const path=useLocation()
    const navigate=useNavigate()
    const { qulf, setqulf } = useContext(LoginContext)
    const tl=()=>{
        if(path.pathname=="/profile/kurslar"){
            return "Sotib olingan kurslar"
        }else if(path.pathname=="/profile/buyurtmalar"){
            return "Buyurtmalar"
        }else if(path.pathname.startsWith("/profile/saqlanganlar")){
            return "Saqlanganlar"
        }else{
            return "Umumiy sozlamalar"
        }
    }

    useEffect(()=>{
        if(!IsUser()){
            navigate("/home")
            setqulf(true)
        }
    },[])


    return (
        <>
            <Breadcrumb data={[{title:"Profile",url:path.pathname},{title:tl()}]}/>
            <div className="containerprofile">

                <div className="ustun1">
                    <div className="profile">
                        <div className="photo">
                            <img src={profileimg} alt="" />
                        </div>
                        <div className="name">

                            <p className="p28">Jasurbek Po‘latov</p>
                        </div>
                    </div>
                    <div className="menus">
                        <Link to={'/profile/kurslar'} className={path.pathname=="/profile/kurslar" ? "menu bos":"menu"} >
                            <img src={sotibolishicon} alt="" />
                            <p className="p16">Sotib olingan kurslar</p>
                        </Link>
                        <Link to={"/profile/buyurtmalar"} className={path.pathname=="/profile/buyurtmalar" ? "menu bos":"menu"} >
                            <img src={rocketicon} alt="" />
                            <p className="p16">Buyurtmalar</p>
                        </Link>
                        <Link to={"/profile/saqlanganlar"} className={path.pathname.startsWith("/profile/saqlanganlar") ? "menu bos":"menu"} >
                            <img src={hearticon} alt="" />
                            <p className="p16">Saqlanganlar</p>
                        </Link>
                        <Link className={path.pathname=="/profile" ? "menu bos":"menu"} >
                            <img src={sozlamalaricon} alt="" />
                            <p className="p16">Umumiy sozlamalar</p>
                        </Link>
                    </div>
                </div>
                <div className="ustun23">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Profile
