
import Breadcrumb from '../../engkichikoyna/Breadcrumb'
import { IconSearch } from '../../../importers/Icon'
import "./News.css"
import yangilik from "../../../assets/pictures/yangiliklar/yangilik.png"
import { useRef, useState } from 'react'
import Notfound from '../../engkichikoyna/Notfound'
import { Yportal } from '../Kutubxona/Kutubxona'
import Topkitoblar from '../../kichikoynalar/Topkitoblar'
import { Link, useLoaderData } from 'react-router-dom'
import Topbar from '../../engkichikoyna/Topbar'
import { DateUz } from '../../../Function/Date'

const yangiliklardata = [
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:0
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:1
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:2
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:3
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:4
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:5
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:6
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:7
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:8
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:9
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:10
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:11
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:12
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:13
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingini o'rnatdi",
    id:14
  },
  {
    img: yangilik,
    sana: "Sentabr 7, 2022",
    title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
    text: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    id:15
  }
  
]


function News() {
  const [count, setCount] = useState(2)
  const searchref = useRef()
  const res=useLoaderData()
  
  const [data, setdata] = useState(res.data.map(e=>{return{...e,date:DateUz(e.date)}}))
  console.log(data);
  
  function search() {
    const value = searchref.current.value
    setdata(yangiliklardata.filter((e) => e.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())))


  }
  const highlightText = (text) => {
    const query = searchref.current
    if (!query) return text;

    const regex = new RegExp(`(${query.value})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.value.toLowerCase()
        ? <mark key={i}>{part}</mark>
        : part
    );
  };

  return (
    <>
      <Breadcrumb data={[{ title: "Yangiliklar" }]} />
      <div className="containers">
        <div className="ustun12">
          <div className="title">
            <p className='p32'>Yangiliklar</p>
            <div className="searchbox" >
              <IconSearch />
              <input type="text" onChange={search} ref={searchref} placeholder='Izlash' />
            </div>
          </div>
          <div className="news">
            {data.map((e, i) => {
              if (i < (count * 6)) {
                return (
                  <Link to={"single/"+e.id} key={i} className='newbox'>
                    <img src={e.img} alt="" />
                    <p className='t14'>{e.date}</p>
                    <p className='p14'>{highlightText(e.title)}</p>
                    <p className='t14'>{e.caption}</p>
                  </Link>
                )
              }
            })}
          </div>
          {data.length==0 && <Notfound/>}
          {data.length > (count * 6) && <div className="davomi" onClick={() => setCount(p => p + 1)}>
            <p className='p16'>Ko'proq</p>
          </div>}
          
        </div>
        <div className="ustun3">
          <Yportal/>
          <Topkitoblar/>
        </div>
      </div>

    </>
  )
}

export default News

export {yangiliklardata}
