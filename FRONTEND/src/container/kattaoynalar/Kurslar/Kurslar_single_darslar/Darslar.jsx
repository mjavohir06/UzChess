import React from 'react'
import { IconPlay } from '../../../../importers/Icon'



function Darslar({data,index}) {
    
  return (
    <div className='videolar'>
        {data.map((e,i)=>{
            return(
                <div className="video">
                    <div className="vid">
                        <img src={e.img} alt="" />
                        <div className="play">
                            <IconPlay style={{width:"15px"}}/>
                            <p className='t14'>{e.time}</p>
                        </div>
                    </div>
                    <p className='p20'>{index+1}.{i+1} {e.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Darslar
