import React, { useState } from 'react'
import { IconReyting } from '../../../importers/Icon'
import "./Reyting.css"
import "flag-icons/css/flag-icons.min.css";
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import CustomSelect from '../../engkichikoyna/CustomSelect';
const ismlist = ['Magnus Carlsen', "Alireza Firouzja", "Ian Nepomniachtchi", "Manor Subkrekor"]
const countrylist = ["af", 'ax', 'al', 'uz', 'ru',  'bi', 'sv']
const dataList = Array.from({ length: 289 }, (_, i) => ({
  id: i + 1,
  name: ismlist[Math.floor(Math.random() * (ismlist.length))],
  country: countrylist[Math.floor(Math.random() * (countrylist.length))],
  classic: 2800 + (i % 10),
  classicDiff: i === 0 ? 102 : Math.floor((Math.random()*90)+10),
  rapid: 2820 + (i % 8),
  blitz: 2780 + (i % 6),
}));



function Main_Ranking() {
  const [page, setPage] = useState(1);
  const [PAGE_SIZE, SetPage_Size] = useState(10)

  const totalPages = Math.ceil(dataList.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentData = dataList.slice(start, start + PAGE_SIZE);
  

  const [country,setCountry]=useState("all")

  return (
    <>
      <Breadcrumb data={[{ title: "Reyting" }]} />
      <div className='container'>
        <div className="ustun1">
          <div className="Reytinglogo">
            <IconReyting className="KichikLogo" />
            <p className='p32'>Reyting</p>
          </div>
          <div className="filter" style={{ height: "276px" }}>
            <div className="title1">
              <p>Filter</p>
              <a href="/">Tozalash</a>
            </div>
            <div className="bar1">
              <p>Mamlakatni tanlang:</p>
              <CustomSelect value={country} onChange={setCountry} options={[{label:"Barchasi",value:"all"}]}/>
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
          <div className="leaderboard">
            <div className="lb-header">
              <span>№</span>
              <span>ISM FAMILIYA</span>
              <span>KLASSIKA</span>
              <span>RAPID</span>
              <span>BLITZ</span>
            </div>

            {currentData.map((p, i) => (
              <div className="lb-row trpt" key={p.id}>
                <span className="rank">
                  {(i + ((page - 1) * 10)) === 0 ? "👑" : (i + ((page - 1) * 10)) + 1}
                </span>

                <span className="name">
                  {p.name} <span class={`fi fi-${p.country} fis`}></span>
                </span>

                <span className="rating">
                  {p.classic}
                  {p.classicDiff && (
                    <small className="plus"> +{p.classicDiff}</small>
                  )}
                </span>

                <span>{p.rapid}</span>
                <span>{p.blitz}</span>
              </div>
            ))}
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

export default Main_Ranking
