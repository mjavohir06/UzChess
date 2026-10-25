import React, { useContext, useEffect, useRef, useState } from 'react'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import { SavatchaContext } from '../../../Contexts/SavatchaContext'
import "./Savatcha.css"
import { IconCheckbox, IconCopy, IconExit, IconInfo } from '../../../importers/Icon'
import { Link, useNavigate } from 'react-router-dom'
import Portal_to_mainnav from '../../../Portal/Portal_to_mainnav'

function Savatcha_Rasmiylashtirish() {
  const { Schegirma, Stolov, Skupon } = useContext(SavatchaContext)
  const [raqam, setraqam] = useState(Math.floor((Math.random() * 89999999999) + 10000000000))
  const [tel, setTel] = useState()
  const [ism, setIsm] = useState()
  const [email, setEmail] = useState()
  const [isopen, setopen] = useState(false)
  const telRef = useRef()
  const navigate = useNavigate()


  const [ispres, setpres] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(raqam);
      setpres(true)
      setTimeout(() => {
        setpres(false)
      }, 2000);

    } catch (err) {
    }
  };

  function telkirit(e) {
    const val = e.target.value.replace(/\D/g, ""); // Harflarni olib tashlaydi

    // Format: 2-3-2-2
    let formatted = "";
    if (val.length > 0) formatted += val.substring(0, 2);
    if (val.length > 2) formatted += " " + val.substring(2, 5);
    if (val.length > 5) formatted += " " + val.substring(5, 7);
    if (val.length > 7) formatted += " " + val.substring(7, 9);
    telRef.current.value = formatted
    setTel(Number(formatted.replaceAll(" ", '')))
  }
  useEffect(() => {
    if (Stolov == 0) {
      navigate("/savatcha")
    }
  }, [])


  return (
    <>
      {isopen &&
        <Portal_to_mainnav>
          <div className="bgbox" onClick={() => navigate("/home")}>
          </div>
          <div className="alertbox">
            <div className="alert">
              <div className="chek">
                <IconCheckbox style={{ width: "64px", height: "64px" }} />
              </div>
              <div className="title">
                <p className='p24'>Buyurtma Rasmiylashtirildi</p>
                <p className='text16'>Tez orada siz bilan aloqaga chiqishadi va keyingi qadamlar haqida ma‘lumot beriladi.</p>
              </div>
              <div className="kodbox">
                <p className='t12'>BUYURTMA RAQAMI</p>
                <div className="raqambox">
                  <div className="raqambar">
                    <p className='p24'>{raqam}</p>
                  </div>
                  <div className="copybar">
                    {
                      ispres ? <IconCheckbox style={{ width: "24px", height: "24px" }} /> : <IconCopy onClick={copy} style={{ width: "24px", height: "24px" }} />
                    }
                  </div>
                </div>
              </div>
              <Link to={'/home'} className="bluebtn">
                <p className='p16'>Asosiyga qaytish</p>
              </Link>
              <div className="x_cancel" onClick={() => navigate("/home")}>
                <IconExit />
              </div>
            </div>
          </div>

        </Portal_to_mainnav>
      }
      <Breadcrumb data={[{ title: "Savatcha", url: "/savatcha" }, { title: "Rasmiylashtirish" }]} />
      <div className="containers">
        <div className="ustunr12">
          <div className="malumotbox">
            <div className="title">
              <p className='p20'>Ma’lumotlaringizni kiriting</p>
            </div>
            <div className="ismbar">
              <p className='t15'>To‘liq ismingiz</p>
              <input onChange={(e) => setIsm(e.target.value)} type="text" placeholder='To‘liq ismingizni kiriting' />
            </div>
            <div className="aloqabar">
              <div className="telbar">
                <p className='t15'></p>
                <div className="telraqam">
                  <label for="tel" className="t15">Telefon raqam</label>
                  <div className="teldiv">
                    <div className="davlatr">
                      <p className='p14'>+998</p>
                    </div>
                    <input style={{ outline: "none" }} type="tel" ref={telRef} id="tel" onChange={telkirit} placeholder="_ _  _ _ _  _ _  _ _" />
                  </div>
                </div>
              </div>
              <div className="emailbar">
                <p className='t15'>Elektron pochta</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Misol: j.pulatov@uic.group' />
              </div>
            </div>
            <div className="btns">
              <Link to={"/savatcha"} className="btn cancel">
                <p className='p16'>Bekor qilish</p>
              </Link>
              <div className="btn" onClick={() => setopen(true)}>
                <p className='p16'>Buyurtma berish</p>
              </div>
            </div>
          </div>

        </div>
        <div className="ustunr3">
          <div className="infobox">
            <div className="infobar">
              <div>
                <nav>
                  <p className='p20'>Jami:</p>
                  <p className='p20'>{Number(Stolov - Schegirma).toLocaleString("fr-FR")}.00 uzs</p>
                </nav>
              </div>
              <div>
                <nav>
                  <p className='p16'>Yetkazib berish:</p>
                  <p className='p16'>-</p>
                </nav>
                <nav>
                  <p className='p16'>Yetkarib berish narxi:</p>
                  <p className='p16'>-</p>
                </nav>
              </div>
              <div>
                <nav>
                  <p className='p16'>Jami:</p>
                  <p className='p16'>{Number(Stolov).toLocaleString("fr-FR")}.00 uzs</p>
                </nav>
              </div>
              <div>
                <nav>
                  <p className='p16'>Chegirma:</p>
                  <p className='p16'>{Number(Schegirma).toLocaleString("fr-FR")}.00 uzs ({(Math.floor((Schegirma / Stolov) * 100))}%)</p>
                </nav>
                <nav>
                  <p className='p16'>Kupon:</p>
                  <p className='p16'>{Skupon ? Skupon : "-"}</p>
                </nav>
                <nav>
                  <p className='p16'>To'lov usuli:</p>
                  <p className='p16'>-</p>
                </nav>
              </div>
            </div>
            <div className="alertbar">
              <div className="icon">
                <IconInfo />
              </div>
              <div className="alert">
                <p className='t13'>Yetkazishda borishda yo‘l tufayli muammo tug‘ilatigan xolatlarda, qo‘shimcha xaq talab qilinishi mumkin.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Savatcha_Rasmiylashtirish
