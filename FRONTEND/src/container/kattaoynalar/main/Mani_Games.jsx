import React, { useState } from 'react'
import { IconKokQumsoat, IconKub } from '../../../importers/Icon'
import "./Reyting.css"
import "flag-icons/css/flag-icons.min.css";
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import Bullet from "../../../assets/icons/yakunlangangames/bullet.svg?react"
import Rapid from "../../../assets/icons/yakunlangangames/Rapid.svg?react"
import Blitz from "../../../assets/icons/yakunlangangames/blitz.svg?react"


const IconList={
    Rapid:<Rapid/>,
    Blitz:<Blitz/>,
    Bullet:<Bullet/>
}
const countrylist = ["af", 'ax', 'al', 'uz', 'ru', 'bi', 'sv']
const gamesData = Array.from({ length: 353 }, (_, i) => ({
    id: i + 1,
    player1: {
        name: "Jasurbek Pulatov",
        rating: 2896,
        flag: countrylist[Math.floor(Math.random() * (countrylist.length-1))],
    },
    player2: {
        name: "Niharu Hakomura",
        rating: 2291,
        flag: countrylist[Math.floor(Math.random() * (countrylist.length))],
    },
    score1: i % 3,
    score2: i % 2,
    type: ["Rapid", "Blitz", "Bullet"][i % 3],
    moves: [56, 42, 15][i % 3],
    date: `2${i} Yanvar, 2022`,
}));



function Main_Games() {
    const [page, setPage] = useState(1);
    const [PAGE_SIZE, SetPage_Size] = useState(10)

    const totalPages = Math.ceil(gamesData.length / PAGE_SIZE);

    const start = (page - 1) * PAGE_SIZE;
    const current = gamesData.slice(start, start + PAGE_SIZE);
    return (
        <>
            <Breadcrumb data={[{ title: "Reyting" }]} />
            <div className='container'>
                <div className="ustun1">
                    <div className="Reytinglogo">
                        <IconKokQumsoat className="KichikLogo" />
                        <p className='p32'>Reyting</p>
                    </div>
                    <div className="filter" style={{ height: "276px" }}>
                        <div className="title1">
                            <p>Filter</p>
                            <a href="/">Tozalash</a>
                        </div>
                        <div className="bar1">
                            <p>Mamlakatni tanlang:</p>
                            <select>
                                <option value="/">O'zbek</option>
                            </select>
                        </div>
                        <div className="bar1">
                            <p>Toifani tanlang:</p>
                            <select>
                                <option value="/">Barchasi</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="ustun23">
                    <div className="games-table">
                        <div className="gt-header">
                            <span>№</span>
                            <span>O‘YINCHILAR VA NATIJA</span>
                            <span>REYTING</span>
                            <span>NATIJA</span>
                            <span>O‘YIN TURI</span>
                            <span>YURISHLAR</span>
                            <span>O‘YIN SANASI</span>
                        </div>

                        {current.map((g) => {
                            const icons={
                                i1:g.score1>g.score2 ? <IconKub style={{color:"#E0B531"}}/>:g.score1==g.score2?<IconKub style={{color:"#82CC27"}}/> : <IconKub style={{color:"#585D63"}}/>,
                                i2:g.score1<g.score2 ? <IconKub style={{color:"#E0B531"}}/>:g.score1==g.score2?<IconKub style={{color:"#82CC27"}}/> : <IconKub style={{color:"#585D63"}}/>
                            }
                           return (
                            <div className="gt-row" key={g.id}>
                                <span className="index">{g.id}</span>

                                <div className="players">
                                    <div>
                                        {icons.i1} {g.player1.name} <span class={`fi fi-${g.player1.flag} fis`}></span>
                                    </div>
                                    <div>
                                        {icons.i2} {g.player2.name} <span class={`fi fi-${g.player2.flag} fis`}></span>
                                    </div>
                                </div>

                                <div className="ratings">
                                    <div>({g.player1.rating})</div>
                                    <div>({g.player2.rating})</div>
                                </div>

                                <div className="scores">
                                    <div>{g.score1}</div>
                                    <div>{g.score2}</div>
                                </div>

                                <span className={`type ${g.type.toLowerCase()}`}>
                                    {IconList[g.type]}{g.type}
                                </span>

                                <span>{g.moves}</span>
                                <span>{g.date}</span>
                            </div>
                        )})}
                        <div className="pagination">
                            <button
                                disabled={page === 1}
                                onClick={() => setPage(p => p - 1)}
                            >
                                ‹
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => {
                                if (totalPages < 8) {
                                    return (
                                        <button
                                            key={i}
                                            className={page === i + 1 ? "active" : ""}
                                            onClick={() => setPage(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    )
                                } else {
                                    if (i < 2) {
                                        return (
                                            <button
                                                key={i}
                                                className={page === i + 1 ? "active" : ""}
                                                onClick={() => setPage(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        )
                                    }
                                    if (page > 2 && page < totalPages - 1 && i > page - 3 && i < page + 1) {
                                        return <button
                                            key={i}
                                            className={page === i + 1 ? "active" : ""}
                                            onClick={() => setPage(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    }
                                    if (i == 2) {
                                        return (<><span className='threedot'>...</span></>)
                                    }
                                    if (page > 2 && page < totalPages - 3 && i > page - 1 && i < page + 2) {
                                        return <span className='threedot'>...</span>
                                    }
                                    if (i > totalPages - 3) {
                                        return <button
                                            key={i}
                                            className={page === i + 1 ? "active" : ""}
                                            onClick={() => setPage(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    }
                                }
                            })}

                            <button
                                disabled={page === totalPages}
                                onClick={() => setPage(p => p + 1)}
                            >
                                ›
                            </button>

                        </div>
                    </div>

                </div >
            </div>
        </>
    )
}

export default Main_Games
