import React from 'react'
import Topbar from '../engkichikoyna/Topbar'
import fisher from '../../assets/pictures/fisher.png'
import "./Kichikoynalar.css"
import { Link } from 'react-router-dom'

const data = [
    {
        img: fisher,
        title: "Mening tizimim",
        muallif: "A.Nimzowitsch"
    },
    {
        img: fisher,
        title: "Mening tizimim",
        muallif: "A.Nimzowitsch"
    },
    {
        img: fisher,
        title: "Mening tizimim",
        muallif: "A.Nimzowitsch"
    },
    {
        img: fisher,
        title: "Mening tizimim",
        muallif: "A.Nimzowitsch"
    }
]

function Topkitoblar({title='Top kitoblar'}) {
    
    return (
        <div className='TopKitoblar'>
            <Topbar title={title} to={"/library"} />
            <div className="Kitobroyhat">
                {data.map((e,i) => {
                    return (
                        <Link to={"/library/single/"+i} key={i} className="kitob">
                            <div className="img">
                                <img src={e.img} alt="" />
                            </div>
                            <div className="textbar">
                                <div className="title">
                                    <p className='p14'>{e.title}</p>
                                </div>
                                <div className="muallif">
                                    <p className='t13'>{e.muallif}</p>
                                </div>
                            </div>

                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Topkitoblar
