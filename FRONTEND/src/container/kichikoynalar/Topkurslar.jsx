import React from 'react'
import "./Kichikoynalar.css"

import star from "../../assets/icons/Star.svg"
import eye from "../../assets/icons/topkurslar/eye.svg"


import topkurs from "../../assets/pictures/topkurslar/topkurs.png"
import Topbar from '../engkichikoyna/Topbar'
import { Link } from 'react-router-dom'


const Topkurslardata = [
  {
    img: topkurs,
    title: "Shaxmat donalari bilan tanishuv",
    rating: "3.5",
    korish: "5 756"
  },
  {
    img: topkurs,
    title: "Shaxmat donalari bilan tanishuv",
    rating: "3.5",
    korish: "5 756"
  },
  {
    img: topkurs,
    title: "Shaxmat donalari bilan tanishuv",
    rating: "3.5",
    korish: "5 756"
  },
  {
    img: topkurs,
    title: "Shaxmat donalari bilan tanishuv",
    rating: "3.5",
    korish: "5 756"
  }
]



function Topkurslar() {
    return (
        <div className="topkursbox">
            <Topbar title="Top kurslar" to={'/kurslar'}/>
            <div className="topkursbar">
                {Topkurslardata.map((e,i) => {


                    return (
                        <Link to={'/kurslar/'+(i+1)} key={i} className="topkurs">
                            <div className="kursimg">
                                <img src={e.img} alt="" />
                            </div>
                            <div className="textbar">
                                <div className="title">
                                    <p className='p14'>{e.title}</p>
                                </div>
                                <div className="past">
                                    <div className="rating">
                                        <img src={star} alt="" />
                                        <p className='p14'>{e.rating}</p>
                                    </div>
                                    <div className="korishlar">
                                        <img src={eye} alt="" />
                                        <p className='p14'>{e.korish}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Topkurslar
