import React from 'react'
import "./kutubxona.css"
import kutubxona from "../../assets/icons/kutubxona.svg"
import search from "../../assets/icons/search.svg"
import star2 from "../../assets/icons/Star2.svg"
import savatcha from "../../assets/icons/savatcha.svg"
import bolim from "../../assets/icons/bolim.svg"
import level from "../../assets/icons/level.svg"
import yonalish from "../../assets/icons/yonalish.svg"
import shahmat2 from "../../assets/icons/shahmat2.svg"
import yurakcha from "../../assets/icons/yurakcha.svg"
import muallif from "../../assets/icons/muallif.svg"
import star from "../../assets/icons/Star.svg"
import kirish from "../../assets/icons/kirish2.svg"


import fisher from "../../assets/pictures/fisher.png"
import yoshlarp from "../../assets/pictures/yoshlarp.png"
import frame from "../../assets/pictures/Frame.png"



function Kutubxona() {
  return (
    <>
        <div className="breadcrumb">
            <img src="./home.svg" alt=""/>
            <p className="crumb1">Asosiy</p>
            <img src={shahmat2} alt=""/>
            <p className="crumb2">Kutubxona</p>
        </div>
      <div className="container">
        <div className="boxs1">
            <div className="kutubxona">
                <img src={kutubxona} alt=""/>
                <p>Kutubxona</p>
            </div>
            <div className="filter">
                <div className="title1">
                    <p>Filter</p>
                    <a href="/">Tozalash</a>
                </div>
                <div className="bar1">
                    <p>Tilni tanlang:</p>
                    <select>
                        <option value="/">O'zbek</option>
                    </select>
                </div>
                <div className="bar1">
                    <p>Darajani tanlang:</p>
                    <select>
                        <option value="/">Barchasi</option>
                    </select>
                </div>
                <div className="bar1">
                    <p>Kategoriya:</p>
                    <select>
                        <option value="/">Barchasi</option>
                    </select>
                </div>
                <div className="bar1">
                    <p>Reyting:</p>
                    <nav>
                        <img src={star2} alt=""/>
                        <img src={star2} alt=""/>
                        <img src={star2} alt=""/>
                        <img src={star2} alt=""/>
                        <img src={star2} alt=""/>
                    </nav>
                </div>
            </div>


        </div>
        {/* <!-- --------------Box2----------- --> */}
        <div className="boxs2">
            <div className="search">
                <img src={search} alt=""/>
                <input type="text" placeholder="Qidirish"/>
            </div>
        
            <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src={fisher} alt="Book cover image"/>
                <div className="rating">
                <img src={star} alt="svg icon"/>
                3.5
                </div>
                <div className="language">
                O'z
                </div>
            </div>
            <div className="texts">
                <div className="mainbar">
                    <div className="maintext">
                        <p>Bobbi Fisher shaxmatni o‘ynashni o‘rgataning</p>
                    </div>
                    <div className="price">
                        <p className="pr1">205 000.00 uzs</p>
                        <p className="pr2">155 000.00 uzs</p>
                    </div>
                    <div className="mainmenu">
                        <div className="mainlevel">
                            <img src={level} alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src={yonalish} alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src={muallif} alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src={yurakcha} alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src={fisher} alt="Book cover image"/>
                <div className="rating">
                <img src={star} alt="svg icon"/>
                3.5
                </div>
                <div className="language">
                O'z
                </div>
            </div>
            <div className="texts">
                <div className="mainbar">
                    <div className="maintext">
                        <p>Bobbi Fisher shaxmatni o‘ynashni o‘rgataning</p>
                    </div>
                    <div className="price">
                        <p className="pr1">205 000.00 uzs</p>
                        <p className="pr2">155 000.00 uzs</p>
                    </div>
                    <div className="mainmenu">
                        <div className="mainlevel">
                            <img src={level} alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src={yonalish} alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src={muallif} alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src={yurakcha} alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src={fisher} alt="Book cover image"/>
                <div className="rating">
                <img src={star} alt="svg icon"/>
                3.5
                </div>
                <div className="language">
                O'z
                </div>
            </div>
            <div className="texts">
                <div className="mainbar">
                    <div className="maintext">
                        <p>Bobbi Fisher shaxmatni o‘ynashni o‘rgataning</p>
                    </div>
                    <div className="price">
                        <p className="pr1">205 000.00 uzs</p>
                        <p className="pr2">155 000.00 uzs</p>
                    </div>
                    <div className="mainmenu">
                        <div className="mainlevel">
                            <img src={level} alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src={yonalish} alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src={muallif} alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src={yurakcha} alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src={fisher} alt="Book cover image"/>
                <div className="rating">
                <img src={star} alt="svg icon"/>
                3.5
                </div>
                <div className="language">
                O'z
                </div>
            </div>
            <div className="texts">
                <div className="mainbar">
                    <div className="maintext">
                        <p>Bobbi Fisher shaxmatni o‘ynashni o‘rgataning</p>
                    </div>
                    <div className="price">
                        <p className="pr1">205 000.00 uzs</p>
                        <p className="pr2">155 000.00 uzs</p>
                    </div>
                    <div className="mainmenu">
                        <div className="mainlevel">
                            <img src={level} alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src={yonalish} alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src={muallif} alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src={yurakcha} alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src={fisher} alt="Book cover image"/>
                <div className="rating">
                <img src={star} alt="svg icon"/>
                3.5
                </div>
                <div className="language">
                O'z
                </div>
            </div>
            <div className="texts">
                <div className="mainbar">
                    <div className="maintext">
                        <p>Bobbi Fisher shaxmatni o‘ynashni o‘rgataning</p>
                    </div>
                    <div className="price">
                        <p className="pr1">205 000.00 uzs</p>
                        <p className="pr2">155 000.00 uzs</p>
                    </div>
                    <div className="mainmenu">
                        <div className="mainlevel">
                            <img src={level} alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src={yonalish} alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src={muallif} alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src={yurakcha} alt="svg icon"/>
            
        </div>

        <div className="davomi">
            Ko'proq
        </div>
        

        
        </div>
        <div className="boxs3">
            <div className="yportal">
                <img src={yoshlarp} alt=""/>
                <div className="btn">
                    <p>Batafsil</p>
                    <img src={kirish} alt=""/>
                </div>
            </div>
            <div className="yishlar">
                <img src={frame} alt=""/>
            </div>
        </div>



    </div>
    </>
  )
}

export default Kutubxona
