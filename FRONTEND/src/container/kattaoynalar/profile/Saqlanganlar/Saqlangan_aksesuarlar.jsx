import React, { useState } from 'react'
import { ImageMedal } from '../../../../importers/Images'
import { IconHeart } from '../../../../importers/Icon'

const data=[
    {
        img:ImageMedal,
        title:"Shvetsiyadan keltirigan maxsus shaxmat tilla doskasi",
        price:64000,
        id:1
    },
    {
        img:ImageMedal,
        title:"Shvetsiyadan keltirigan maxsus shaxmat tilla doskasi Shvetsiyadan keltirigan maxsus shaxmat tilla doskasi",
        price:64000,
        id:2
    },
    {
        img:ImageMedal,
        title:"Shvetsiyadan keltirigan maxsus shaxmat tilla doskasi",
        price:64000,
        id:3
    },
    {
        img:ImageMedal,
        title:"Shvetsiyadan keltirigan maxsus shaxmat tilla doskasi",
        price:64000,
        id:4
    },
]

function Saqlangan_aksesuarlar() {
  return (
    <div className='aksesuarbox'>
        {
            data.map((e,i)=>{
                const [pres,setpres]=useState(true)
                return(
                    <div className="aksesuar" key={i}>
                        <div className="imgbox">
                            <img src={e.img} alt="" />
                            <div className="yurakcha" onClick={()=>setpres(p=>!p)}>
                                <IconHeart istrue={pres}/>
                            </div>
                        </div>
                        <div className="price">
                            <p className='pg20'>{e.price==0?"Bepul":`${e.price.toLocaleString("fr-FR")}.00 uzs`}</p>
                        </div>
                        <div className="title">
                            <p className="p16">{e.title}</p>
                        </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Saqlangan_aksesuarlar
