import React, { useContext, useEffect, useRef, useState } from 'react'
import { KitoblarContext } from '../../Contexts/BookContext'
import { IconMoney } from '../../importers/Icon';
import { SavatchaContext } from '../../Contexts/SavatchaContext';
import { useNavigate } from 'react-router-dom';

function Tolovsavatcha({ data }) {
    console.log(data);

    const { kitobsoni, setKitobsoni } = useContext(KitoblarContext)
    const {SetSchegirma,setStolov,SetSkupon}=useContext(SavatchaContext)
    const [tolov, setTolov] = useState(0)
    const [chegirma,setChegirma]=useState(0)
    const KuponRef=useRef()
    const navigate=useNavigate()

    useEffect(() => {
        let njami = 0;
        let chjami=0
        for (let i = 0; i < data.length; i++) {
            const narx = data[i].pr2 ? parseInt(data[i].pr2) : parseInt(data[i].pr1);
            const cheg= data[i].pr1
            const soni = Number(kitobsoni[i]);

            if (!isNaN(narx) && !isNaN(soni)) {
                njami += narx * soni;
                chjami += cheg * soni
            }
        }

        setTolov(njami);
        setChegirma(njami-chjami)

    }, [kitobsoni, data]);

    function Rasmiylashtirish(){
        if(tolov==0){
            alert("Savatchada rasmiylashtirish uchun mahsulot yo'q")
        }else{
            setStolov(tolov)
            SetSchegirma(chegirma)
            if(KuponRef.current){
                if(KuponRef.current.value.length>5){
                    SetSkupon(KuponRef.current.value)
                }else if(KuponRef.current.value.length!=0){
                    alert("Kupon xato")
                    return;
                }
            }
            navigate('rasmiylashtirish')
        }
    }

    return (
        <div className="tolov">
            <div className="narxlar">
                <div>
                    <p className="p16">To‘lov narxi:</p>
                    <p className="p16">{tolov.toLocaleString("fr-FR")}.00 UZS</p>
                </div>
                <div>
                    <p className="p16">Chegirma:</p>
                    <p className="p16">{chegirma.toLocaleString("fr-FR")}.00 UZS ({Math.floor(chegirma/tolov*100)}%)</p>
                </div>
                <div>
                    <p className="p16">Kupon:</p>
                    <p className="p16">0 UZS</p>
                </div>
                <div>
                    <p className="p16">Yetkazib berish</p>
                    <p className="p16">0 UZS</p>
                </div>
            </div>
            <div className="jami">
                <p className="p20">Jami:</p>
                <p className="p20">{(tolov-chegirma).toLocaleString('fr-FR')}.00 UZS</p>
            </div>
            <div className="kupon">
                <p className="p14">KUPON</p>
                <input ref={KuponRef} type="text" placeholder="Kupondagi kodni kiriting" />
            </div>
            <div className="rasmiylashtirish" onClick={Rasmiylashtirish}>
                <IconMoney/>
                <p className="p20">Rasmiylashtirish</p>
            </div>
        </div>
    )
}

export default Tolovsavatcha
