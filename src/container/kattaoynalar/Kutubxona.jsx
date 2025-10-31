import React from 'react'
import "./kutubxona.css"
import kutubxona from "../../assets/icons/kutubxona.svg"
import search from "../../assets/icons/search.svg"
import star2 from "../../assets/icons/Star2.svg"
import savatcha from "../../assets/icons/savatcha.svg"
import bolim from "../../assets/icons/bolim.svg"
import level from "../../assets/icons/level.svg"
import yonalish from "../../assets/icons/yonalish.svg"
import savatcha from "../../assets/icons/savatcha.svg"


function Kutubxona() {
  return (
    <>
        <div className="breadcrumb">
            <img src="./home.svg" alt=""/>
            <p className="crumb1">Asosiy</p>
            <img src="./shahmat2.svg" alt=""/>
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
                <img className="cover-image" src="/assets/images/fisher.png" alt="Book cover image"/>
                <div className="rating">
                <img src="/assets/icons/star.svg" alt="svg icon"/>
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
                            <img src="/assets/icons/level.svg" alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src="/assets/icons/yonalish.svg" alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src="/assets/icons/muallif.svg" alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src="/assets/icons/yurakcha.svg" alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src="/assets/images/fisher.png" alt="Book cover image"/>
                <div className="rating">
                <img src="/assets/icons/star.svg" alt="svg icon"/>
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
                            <img src="/assets/icons/level.svg" alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src="/assets/icons/yonalish.svg" alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src="/assets/icons/muallif.svg" alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src="/assets/icons/yurakcha.svg" alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src="/assets/images/fisher.png" alt="Book cover image"/>
                <div className="rating">
                <img src="/assets/icons/star.svg" alt="svg icon"/>
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
                            <img src="/assets/icons/level.svg" alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src="/assets/icons/yonalish.svg" alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src="/assets/icons/muallif.svg" alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src="/assets/icons/yurakcha.svg" alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src="/assets/images/fisher.png" alt="Book cover image"/>
                <div className="rating">
                <img src="/assets/icons/star.svg" alt="svg icon"/>
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
                            <img src="/assets/icons/level.svg" alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src="/assets/icons/yonalish.svg" alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src="/assets/icons/muallif.svg" alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src="/assets/icons/yurakcha.svg" alt="svg icon"/>
            
        </div>
        <div className="book-container">
            <div className="book-cover">
                <img className="cover-image" src="/assets/images/fisher.png" alt="Book cover image"/>
                <div className="rating">
                <img src="/assets/icons/star.svg" alt="svg icon"/>
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
                            <img src="/assets/icons/level.svg" alt="svg icon"/>
                            <p>Boshlang'ich</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainyonalish">
                            <img src="/assets/icons/yonalish.svg" alt="svg icon"/>
                            <p>Tarix</p>
                        </div>
                        <div className="j">
                            
                        </div>
                        <div className="mainmuallif">
                            <img src="/assets/icons/muallif.svg" alt="svg icon"/>
                            <p>Robert Fisher</p>
                        </div>
                    </div>
                </div>
                <div className="textbtn">
                    <img src={savatcha} alt="svg icon"/>
                    <p>Savatchaga</p>
                </div>
            </div>
            <img src="/assets/icons/yurakcha.svg" alt="svg icon"/>
            
        </div>

        <div className="davomi">
            Ko'proq
        </div>
        

        
        </div>
        <div className="boxs3">
            <div className="yportal">
                <img src="./320x640 (1).png" alt=""/>
                <div className="btn">
                    <p>Batafsil</p>
                    <img src="./kirish.svg" alt=""/>
                </div>
            </div>
            <div className="yishlar">
                <img src="./Frame.png" alt=""/>
            </div>
        </div>



    </div>
    </>
  )
}

export default Kutubxona
