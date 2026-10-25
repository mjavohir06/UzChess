import React, { useContext, useEffect, useState } from 'react'

import { KitoblarContext } from '../../Contexts/BookContext'
import { IconExit } from '../../importers/Icon'

function Books({ data,i }) {
    const [count, setCount] = useState(1)
    const [ol, setOl] = useState("kam")
    
    const {kitobsoni,setKitobsoni,setOchir}=useContext(KitoblarContext)
    useEffect(()=>{
        setKitobsoni((e)=>[...e,1])
    },[])
    function kamay() {
        if (count > 1) {
            setCount(e => e - 1)
            setKitobsoni(prev => prev.map((v, j) => j === i ? count-1 : v));
            if (count == 2) setOl('kam')
            else setOl('')
        }
    }
    function kopay() {
        if (count < 20) {
            setCount(e => e + 1)
            setKitobsoni(prev => prev.map((v, j) => j === i ? count+1 : v));
            if (count == 19) setOl('kop')
            else setOl('')
        }
    }
    console.log(kitobsoni);
    
    return (
        <>
            <div className="mahsulot">
                <div className="rasm">
                    <img className="bg" src={data.img} alt="" />
                    <img className="yuzi" src={data.img} alt="" />
                </div>
                <div className="text">
                    <p className="p20">{data.title}</p>
                    <div className="price">
                        <p className="price1">{data.pr1.toLocaleString('fr-FR')}.00 uzs</p>
                        {data.pr2 ? <p className="price2">{data.pr2.toLocaleString('fr-FR')}.00 uzs</p> : ""}

                    </div>
                </div>
                <div className="button">
                    <div onClick={kamay} className={ol == "kam" ? "kam ol" : "kam"}><nav></nav></div>
                    <div className="soni"><p>{count}</p></div>
                    <div onClick={kopay} className={ol == "kop" ? "kop ol" : "kop"}><p>+</p></div>
                </div>
                <div className="chiqish" onClick={()=>setOchir(i)}>
                    <IconExit/>
                </div>
            </div>
        </>
    )
}

export default Books
