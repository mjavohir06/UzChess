import React, { useState } from 'react'
import { IconExit, IconKorish } from '../../importers/Icon'
import { ImageScreen } from '../../importers/Images'


const bildirdata=[
  {
    img:ImageScreen,
    title:"Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
    text:"Qadirli vatan himoyachilari sizlarni 14-yanvar vatan himoyachilari kuni bilan chin qalbimizsdan muborakbod etamiz!"
  },
  {
    img:ImageScreen,
    title:"14-yanvar muborak bo‘lsin",
    text:"Qadirli vatan himoyachilari sizlarni 14-yanvar vatan himoyachilari kuni bilan chin qalbimizsdan muborakbod etamiz!"
  },
  {
    img:ImageScreen,
    title:"Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
    text:"Qadirli vatan himoyachilari sizlarni 14-yanvar vatan himoyachilari kuni bilan chin qalbimizsdan muborakbod etamiz!"
  },
  {
    img:ImageScreen,
    title:"Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
    text:"Qadirli vatan himoyachilari sizlarni 14-yanvar vatan himoyachilari kuni bilan chin qalbimizsdan muborakbod etamiz!"
  },
  {
    img:ImageScreen,
    title:"Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
    text:"Qadirli vatan himoyachilari sizlarni 14-yanvar vatan himoyachilari kuni bilan chin qalbimizsdan muborakbod etamiz!"
  },
]

function Bildirishnoma({setbildir}) {
  return (
    <div className='containerBildir'>
      <div className="parda" onClick={()=>setbildir(false)}>

      </div>
      <div className="bildirbox">
        <div className="header">
          <p className='p24'>Xabaranoma</p>
          <nav onClick={()=>setbildir(false)}>
            <IconExit/>
          </nav>
        </div>
        <div className="bildirnomalar">
          {bildirdata.map((e)=>{
            const [ispres,setpres]=useState(false)
            return(
              <div className="bildirdiv">
                <div className="img">
                  <img src={e.img} alt="" />
                </div>
                <p className='p20'>{e.title}</p>
                {ispres ? <p className='t18'>{e.text}</p>:""}
                {ispres ? <div className="btn" onClick={()=>setpres(false)}><p className='faol'>Yopish</p><IconKorish  style={{transform:"rotate(-90deg)",color:"#F7F9FA"}}/></div> : <div className='btn' onClick={()=>setpres(true)}><p className='faol'>Batafsil</p><IconKorish  style={{transform:"rotate(90deg)",color:"#F7F9FA"}}/></div>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Bildirishnoma
