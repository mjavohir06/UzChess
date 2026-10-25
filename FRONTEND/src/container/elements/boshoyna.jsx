import React, { useState } from 'react'
import "./Boshoyna.css"
import korish from "../../assets/icons/korish.svg"
import play from "../../assets/icons/play.svg"
import like from "../../assets/icons/like.svg"
import dislike from "../../assets/icons/dislike.svg"
import qilich from "../../assets/icons/qilich.svg"
import toj from "../../assets/icons/crown.svg"
import a_up from "../../assets/icons/arrow-up.svg"
import a_down from "../../assets/icons/arrow-down.svg"
import kitoblar from "../../assets/icons/kutubxona.svg"
import kurslar from "../../assets/icons/kurslar.svg"
import kurslarsoya from "../../assets/icons/graduation.svg"
import kitoblarsoya from "../../assets/icons/kitobsoya.svg"
import kumushkub from "../../assets/icons/yakunlangangames/kumushkubik.svg"
import oltinkub from "../../assets/icons/yakunlangangames/oltinkubik.svg"
import bullet from "../../assets/icons/yakunlangangames/bullet.svg"
import rapid from "../../assets/icons/yakunlangangames/Rapid.svg"
import blitz from "../../assets/icons/yakunlangangames/blitz.svg"
import Korish from "../../assets/icons/korish.svg?react"




import videopic from "../../assets/pictures/videopic.png"
// import kurslar from "../../assets/pictures/Kurslar.png"
import kutubxona from "../../assets/pictures/Kutubxona.png"
import yangilik from "../../assets/pictures/yangiliklar/yangilik.png"
import reklama from "../../assets/pictures/boshoyna/reklama.png"


import { Yportal } from '../kattaoynalar/Kutubxona/Kutubxona.jsx'
import Topkurslar from '../kichikoynalar/Topkurslar.jsx'
import Loyiharivoji from '../kichikoynalar/Loyiharivoji.jsx'
import Topbar from '../engkichikoyna/Topbar.jsx'
import Topkitoblar from '../kichikoynalar/Topkitoblar.jsx'
import { Link } from 'react-router-dom'
import { yangiliklardata } from '../kattaoynalar/News/News.jsx'


const Yakunlangandata = [
  {
    img1: oltinkub,
    img2: kumushkub,
    player1: "Shohrukh Bakhtiyarov",
    player2: "Nikaru Hakamura",
    score1: "(2861)",
    score2: "(2768)",
    natija1: "2",
    natija2: "0",
    turiicon: rapid,
    turi: "Rapid",
    yurishlar: "56",
    sana: "12 Dekabr"
  },
  {
    img1: oltinkub,
    img2: kumushkub,
    player1: "Abdusattorov Nodirbek",
    player2: "Ding Liren",
    score1: "(2861)",
    score2: "(2768)",
    natija1: "1",
    natija2: "0",
    turiicon: bullet,
    turi: "Bullet",
    yurishlar: "20",
    sana: "21 Noyabr"
  },
  {
    img1: oltinkub,
    img2: oltinkub,
    player1: "Aronian Levon",
    player2: "Sindarov Javokhir",
    score1: "(2861)",
    score2: "(2768)",
    natija1: "0",
    natija2: "2",
    turiicon: blitz,
    turi: "Blitz",
    yurishlar: "19",
    sana: "19 Oktabr"
  },
  {
    img1: oltinkub,
    img2: kumushkub,
    player1: "Caruana Fabiano",
    player2: "Rapport Richard",
    score1: "(2861)",
    score2: "(2768)",
    natija1: "1",
    natija2: "1",
    turiicon: blitz,
    turi: "Blitz",
    yurishlar: "56",
    sana: "2 Sentabr"
  },
  {
    img1: oltinkub,
    img2: kumushkub,
    player1: "Yakubboev Nodirbek",
    player2: "Gelfand Boris",
    score1: "(2861)",
    score2: "(2768)",
    natija1: "4",
    natija2: "1",
    turiicon: bullet,
    turi: "Bullet",
    yurishlar: "56",
    sana: "2 Sentabr"
  },
]













const Boshoyna = () => {
  const [count,setcount]=useState(1)
  return (
    <div className='boshoyna'>
      <div className="videonew">

        <div className="videodiv">
          <Topbar title={"Kun o'yini"} text={"Ko'rish"} to={"/live/0"} />
          <Link to={"/live/0"}>
            <div className="videoplayer">
              <div className="parda"></div>
              <img className='videopic' src={videopic} alt="video rasmi" />
              <img className='play' src={play} alt="..." />
              <div className="videoinfo">
                <p>5:30</p>
                <div>
                  <img src={bullet} alt="" />
                  <p>Bullet</p>
                </div>
              </div>
            </div>
          </Link>
          <div className="videotag">
            <div className="player1">
              <div className="liketag" >
                <img src={like} alt="" />
              </div>
              <div className="playername">
                <p>Abdusattorov Nodirbek</p>
              </div>
            </div>
            <div className="qilich">
              <img src={qilich} alt="" />
            </div>
            <div className="player2">
              <div className="playername">
                <p>magnus carlsen</p>
              </div>
              <div className="disliketag">
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="reytingbox">
          <Topbar title={"Reyting"} to={"/home/reyting"}/>
          <div className="reytingbar">
            <div className="boxs">
              <div className="box1">
                <div className="ism">
                  <img src={toj} alt="" />
                  <p className='p16'>magnus carlsen</p>
                </div>
                <p className='p16'>2861</p>
              </div>
              <div className="box2">
                <div>
                  <img src={a_up} alt="" />
                  <p className='inc'>12</p>
                </div>
                <p className='inc'>+102</p>
              </div>
            </div>
            <div className="boxs">
              <div className="box1">
                <div className="ism">

                  <p className='p16'>2. magnus carlsen</p>
                </div>
                <p className='p16'>2861</p>
              </div>
              <div className="box2">
                <div>
                  <img src={a_down} alt="" />
                  <p className='dec'>12</p>
                </div>
                <p className='dec'>-102</p>
              </div>
            </div>
            <div className="boxs">
              <div className="box1">
                <div className="ism">

                  <p className='p16'>3. magnus carlsen</p>
                </div>
                <p className='p16'>2861</p>
              </div>
              <div className="box2">
                <div>
                  <img src={a_up} alt="" />
                  <p className='inc'>12</p>
                </div>
                <p className='inc'>+102</p>
              </div>
            </div>
            <div className="boxs">
              <div className="box1">
                <div className="ism">

                  <p className='p16'>4. magnus carlsen</p>
                </div>
                <p className='p16'>2861</p>
              </div>
              <div className="box2">
                <div>

                  <p className='nor'>-</p>
                </div>
                <p className='inc'>+42</p>
              </div>
            </div>
            <div className="boxs">
              <div className="box1">
                <div className="ism">

                  <p className='p16'>5. magnus carlsen</p>
                </div>
                <p className='p16'>2861</p>
              </div>
              <div className="box2">
                <div>
                  <img src={a_up} alt="" />
                  <p className='inc'>12</p>
                </div>
                <p className='inc'>+102</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------Menu--Gamelist--News----------- */}
      <div className="gamesustun">
        <div className="menulist">

          <Link to={"/kurslar"} className="menu1">
            <img className='fon' src={kurslarsoya} alt="kurslar" />
            <img className='rasm' src={kurslar} alt="kurslar" />
            <p className='p20'>Kurslar</p>
          </Link>
          <Link to={"/library"} className="menu1">
            <img className='fon' src={kitoblarsoya} alt="kurslar" />
            <img className='rasm' src={kitoblar} alt="kurslar" />
            <p className='p20'>Kutubxona</p>
          </Link>
        </div>

        <div className="yakunlangangames">
          <Topbar title={"Yakunlangan o‘yinlar"}  to={"/home/games"}/>
          <div className="menu">
            <div>
              <p className='t12'>O‘yinchilar</p>
            </div>
            <div>
              <p className='t12'>natija</p>
            </div>
            <div>
              <p className='t12'>o‘yin Turi</p>
            </div>
            <div>
              <p className='t12'>Yurishlar</p>
            </div>
            <div>
              <p className='t12'>sana</p>
            </div>
          </div>
          <div className="royhat">
            {Yakunlangandata.map((e, i) => {
              let boxclass, turiclass
              if (i % 2 == 0) {
                boxclass = "kichikbox"
              } else {
                boxclass = "kichikbox dark"
              }
              if (e.turiicon == rapid) {
                turiclass = "pr14"
              } else if (e.turiicon == blitz) {
                turiclass = "py14"
              } else {
                turiclass = "pg14"
              }
              return (
                <div key={i} className={boxclass}>
                  <div className="medal">
                    <img src={e.img1} alt="" />
                    <img src={e.img2} alt="" />
                  </div>
                  <div className="ism">
                    <p className='p14'>{e.player1}</p>
                    <p className='p14'>{e.player2}</p>
                  </div>
                  <div className="ball">
                    <p className='t14'>{e.score1}</p>
                    <p className='t14'>{e.score2}</p>
                  </div>
                  <div className="natija">
                    <p className='p14'>{e.natija1}</p>
                    <p className='p14'>{e.natija2}</p>
                  </div>
                  <div className="turi">
                    <img src={e.turiicon} alt="" />
                    <p className={turiclass}>{e.turi}</p>
                  </div>
                  <div className="yurishlar">
                    <p className='p14'>{e.yurishlar}</p>
                  </div>
                  <div className="sana">
                    <p className='p14'>{e.sana}</p>
                  </div>


                </div>
              )
            })}
          </div>
        </div>

        <div className="reklamabox">
          <div className="reklamabar">
            <img src={reklama} alt="" />
          </div>
          <div className="btnbar">
            <div className="btn">
              <p className='p16'>Ko'rish</p>
            </div>
          </div>
        </div>

        <div className="yangiliklarbox">
          <Topbar title={"Yangiliklar"} to={"/news"}/>
          <div className="yangiliklarbar">
            {
              yangiliklardata.map((e, i) => {

                if(i<(5*count)){
                  return (
                    <Link to={"/news/single/"+e.id} key={i} className="yangilik">
                      <div className="newsimg">
                        <img src={e.img} alt="" />
                      </div>
                      <div className="news">
                        <p className='t14'>{e.sana}</p>
                        <p className='p16'>{e.title}</p>
                        <p className='t14'>{e.text}</p>
                      </div>
                      <Korish className="barchasi" style={{ color: "#1C92E0" }} />
                    </Link>
                  )

                }
              })
            }
          </div>
        {yangiliklardata.length>(5*count) &&  <div className="davomi" onClick={()=>setcount(p=>p+1)}>
            Ko'proq
          </div>}
        </div>
      </div>
      <div className="ustun3">
        <Loyiharivoji />
        <Yportal />
        <Topkurslar />
        <Topkitoblar />
      </div>

    </div>
  )
}

export default Boshoyna
