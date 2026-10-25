import React, { useEffect, useState } from 'react'
import shahmat2 from "../../assets/icons/shahmat2.svg"
import { Link, useLocation } from 'react-router-dom'
import home from "../../assets/icons/home.svg"

const level1 = [
    {
        url: "/news",
        title: "Yangiliklar"
    },
    {
        url: "/kurslar",
        title: "Kurslar"
    },
    {
        url: "/library",
        title: "Kutubxona"
    },
    {
        url: "/connacting",
        title: "Bog'lanish"
    },
    {
        url: "/savatcha",
        title: "Savatcha"
    },
    {
        url: "/profile",
        title: "Profile"
    }
]




function Breadcrumb({data}) {

    if (data) {
        return (
            <div className="breadcrumb">
                <img src={home} alt="" />
                <Link to={'/home'} className="crumb1">Asosiy</Link>
                {data.map((e, i) => {
                    if (i < data.length - 1) {
                        return (
                            <div style={{display:"flex"}} key={i}>
                                <img src={shahmat2} alt="" />
                                <Link to={e.url} className="crumb1">{e.title}</Link>
                            </div>
                        )
                    } else {
                        return (
                            <div style={{display:"flex"}} key={i}>
                                <img src={shahmat2} alt="" />
                                <p className="crumb2">{e.title}</p>
                            </div>
                        )
                    }
                })}

            </div>
        )
    }
}

const yangiliklarurl=level1[0].url
const kurslarurl=level1[1].url
const kutubxonaurl=level1[2].url
const boglanishurl=level1[3].url
const savatchaurl=level1[4].url
const profileurl=level1[5].url

export default Breadcrumb
export {level1,yangiliklarurl,kurslarurl,kutubxonaurl,boglanishurl,profileurl,savatchaurl}