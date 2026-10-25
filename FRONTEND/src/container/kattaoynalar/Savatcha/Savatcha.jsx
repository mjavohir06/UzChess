import React, { useContext, useEffect, useState } from 'react'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import "./Savatcha.css"

import fisherimg from "../../../assets/pictures/fisher.png"
import Books from '../../kichikoynalar/Books'
import { Yportal } from '../Kutubxona/Kutubxona'
import Tolovsavatcha from '../../kichikoynalar/Tolovsavatcha'
import { KitoblarContext } from '../../../Contexts/BookContext'

const datalist =[
    {
        img:fisherimg,
        title:"Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani",
        pr1:2000000,
        pr2:2500000,
    },
    {
        img:fisherimg,
        title:"Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani",
        pr1:2000000,
    },
    {
        img:fisherimg,
        title:"Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani",
        pr1:2000000,
        pr2:2500000,
    }
]

function Savatcha() {
    const [data, setData]=useState(datalist)
    const {setKitobsoni,ochir,setOchir}=useContext(KitoblarContext)
    useEffect(()=>{
        if(ochir!==undefined){
            
            setData(prev => prev.filter((v, j) => j !== ochir));
            setKitobsoni(prev => prev.filter((v, j) => j !== ochir));
            setOchir(undefined)
        }
    },[ochir])
    return (
        <>
            <Breadcrumb data={[{title:"Savatcha"}]} />
            <div className="containers">
                <div className="ustun12">
                    {data.map((e,i)=><Books data={e} i={i}/>)}
                    {data.length==0 ? <div className="mahsulot"><p className='p28'>Savatchada kitob yo'q</p></div> : ""}
                </div>
                <div className="ustun3">
                    <Tolovsavatcha data={data}/>
                    <Yportal/>

                </div>


            </div>
        </>
    )
}

export default Savatcha
