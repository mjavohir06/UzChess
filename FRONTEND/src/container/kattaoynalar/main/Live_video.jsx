import React from 'react'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import './Reyting.css'
import { Yportal } from '../Kutubxona/Kutubxona'
import Topkitoblar from '../../kichikoynalar/Topkitoblar'

function Live_video() {
    const videoId='1WEyUZ1SpHY?si=ffzj6Wf4mI87_I6v'
    return (
        <>
            <Breadcrumb data={[{ title: "Live" }]} />
            <div className="container">
                <div className="ustun12">
                    <div className="live_video">
                        <div className="title">
                            <p className='p28'>Jahon chempionati 4-tur o‘yini</p>
                        </div>
                        <div className="video">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='videoframe'
                            />
                        </div>
                    </div>
                </div>
                <div className="ustun3">
                    <Yportal/>
                    <Topkitoblar />
                </div>
            </div>
        </>
    )
}

export default Live_video
