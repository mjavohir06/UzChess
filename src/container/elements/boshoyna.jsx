import React from 'react'
import "./Boshoyna.css"
import korish from "../../assets/icons/korish.svg"
import play from "../../assets/icons/play.svg"
import bullet from "../../assets/icons/bullet.svg"
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
import kumushkub from "../../assets/icons/kumushkubik.svg"
import oltinkub from "../../assets/icons/oltinkubik.svg"


import videopic from "../../assets/pictures/videopic.png"
// import kurslar from "../../assets/pictures/Kurslar.png"
import kutubxona from "../../assets/pictures/Kutubxona.png"



const Boshoyna = () => {
  return (
    <div className='boshoyna'>
      <div className="videonew">

        <div className="videodiv">
          <div className="vTitle">
            <p className='at'>Kun o'yini</p>
            <div className="kr">
              <p className='yt'>Ko'rish </p>
              <img src={korish} alt="kuting" />
            </div>
          </div>
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
          <div className="reytingtitle">
            <p className='at'>Reyting</p>
            <div className="kr">
              <p className='yt'>Barchasi</p>
              <img src={korish} alt="" />
            </div>
          </div>
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
          
          <div className="menu1">
            <img className='fon' src={kurslarsoya} alt="kurslar" />
            <img className='rasm' src={kurslar} alt="kurslar" />
            <p className='p20'>Kurslar</p>
          </div>
          <div className="menu1">
            <img className='fon' src={kitoblarsoya} alt="kurslar" />
            <img className='rasm' src={kitoblar} alt="kurslar" />
            <p className='p20'>Kutubxona</p>
          </div>
        </div>

        <div className="yakunlangangames">
          <div className="reytingtitle">
            <p className='at'>Yakunlangan o‘yinlar</p>
            <div className="kr">
              <p className='yt'>Barchasi</p>
              <img src={korish} alt="" />
            </div>
          </div>
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
            <div className="kichikbox">
              <div className="medal">
                <img src={oltinkub} alt="" />
                <img src={kumushkub} alt="" />
              </div>
              <div className="ism">
                <p className='p14'>Shohrukh Bakhtiyarov</p>
                <p className='p14'>Nikaru Hakamura</p>
              </div>
              <div className="ball">
                <p className='t14'>(2861)</p>
                <p className='t14'>(2768)</p>
              </div>
              <div className="natija">
                <p className='p14'>2</p>
                <p className='p14'>0</p>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>

      
    </div>
  )
}

export default Boshoyna
