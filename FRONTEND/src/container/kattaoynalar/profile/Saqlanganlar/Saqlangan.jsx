import React, { useState } from 'react'
import Saqlangan_kurslar from './Saqlangan_kurslar'
import Saqlangan_kitoblar from './Saqlangan_kitoblar'
import Saqlangan_aksesuarlar from './Saqlangan_aksesuarlar'


const menulist = ["Saqlangan kurslar", "Saqlangan aksesuarlar", "Saqlangan kitoblar"]
const datalist=[<Saqlangan_kurslar/>,<Saqlangan_aksesuarlar/>,<Saqlangan_kitoblar/>]
function Saqlangan() {
    const [step, setstep] = useState(0)
    return (
        <div className='saqlangandiv'>
            <div className="menulist">
                {menulist.map((e, i) => <div key={i} className={i==step ? "menu bos" : "menu"} onClick={()=>setstep(i)}>
                    <span>{e}</span>
                </div>)
                }
            </div>
            <div className="saqlanganjoy">
                {datalist.map((e,i)=>{
                    if(step==i){
                        return e
                    }
                })}
            </div>

        </div>
    )
}

export default Saqlangan
