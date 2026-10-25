import React, { useEffect, useId, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Breadcrumb from '../../engkichikoyna/Breadcrumb'

import { IconBolim, IconHeart, IconKorish, IconLevel, IconMoney, IconPlay, IconShare, IconWarning } from '../../../importers/Icon';
import { Yportal } from '../Kutubxona/Kutubxona';
import Tolovoyna from './PulTolash/Tolovoyna';
import Darslar from './Kurslar_single_darslar/Darslar';
import { ImageOt, ImageTopKurslar, ImageVideopic } from '../../../importers/Images';



const IconHalfStar = ({ offset = 50, width = 24, height = 24 }) => {
    const id = useId()
    return (
        <svg width={width} height={height} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset={`${offset}%`} stopColor="#E0B531" />
                    <stop offset={`${offset}%`} stopColor="#21272bff" />
                </linearGradient>
            </defs>
            <path d="M6.76298 0.289455C6.8625 0.0976649 7.13685 0.0976653 7.23637 0.289455L8.9563 3.60396C8.99497 3.67849 9.06649 3.73045 9.14933 3.7442L12.8331 4.35571C13.0462 4.39109 13.131 4.65202 12.9794 4.80593L10.3586 7.46592C10.2997 7.52573 10.2723 7.60981 10.2849 7.69284L10.8416 11.3853C10.8738 11.5989 10.6519 11.7602 10.4586 11.6635L7.11897 9.99299C7.04388 9.95542 6.95547 9.95542 6.88038 9.99299L3.54071 11.6635C3.34747 11.7602 3.12551 11.5989 3.15773 11.3853L3.71449 7.69284C3.72701 7.60981 3.69969 7.52573 3.64076 7.46592L1.01997 4.80593C0.868322 4.65202 0.953101 4.39109 1.16626 4.35571L4.85002 3.7442C4.93286 3.73045 5.00438 3.67849 5.04305 3.60396L6.76298 0.289455Z" fill={`url(#${id})`} />

            <path
                d="M12 2L2 22h20L12 2z"

            />
        </svg>
    )
};

const Kurslardata = [
    {
        img: ImageTopKurslar,
        rating: 4.5,
        language: "O'z",
        title: "Shaxmat donalari bilan tanishuv",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 1
    },
    {
        img: ImageTopKurslar,
        rating: 4.2,
        language: "O'z",
        title: "Shoxga hujum qilish",
        muallif: "Robert Fisher",
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 2
    },
    {
        img: ImageTopKurslar,
        rating: 3.8,
        language: "O'z",
        title: "Mot qilish",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 3
    },
    {
        img: ImageTopKurslar,
        rating: 4.8,
        language: "O'z",
        title: "Asosiy taktikalar",
        muallif: "Robert Fisher",
        pr2: 0,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 4
    },
    {
        img: ImageTopKurslar,
        rating: 3.8,
        language: "O'z",
        title: "Mot qilish",
        muallif: "Robert Fisher",
        pr1: 205000,
        pr2: 96000,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 5
    },
    {
        img: ImageTopKurslar,
        rating: 4.8,
        language: "O'z",
        title: "Asosiy taktikalar",
        muallif: "Robert Fisher",
        pr2: 0,
        daraja: "Boshlang'ich",
        bolim: 5,
        yonalish: "Strategiya",
        id: 6
    },
]

const darslar_list = [
    {
        title: "Asosiy donalar",
        darslar: [
            {
                name: "Kirish",
                time: "07:12",
                img: ImageTopKurslar
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageTopKurslar
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageTopKurslar
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            }
        ]
    },
    {
        title: "Eng ko‘p foydalaniladigan donalar",
        darslar: [
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            }
        ]
    },
    {
        title: "Mot qilish oson bo‘lgan donalar",
        darslar: [
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            },
            {
                name: "Kirish",
                time: "07:12",
                img: ImageVideopic
            }
        ]
    }
]

const Izohdata = [
    {
        img: ImageOt,
        Username: "Jasurbek Narzullayev",
        date: "7 Sentyabr 2022 y. 19:52",
        stars: 4,
        izoh: "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
    },
    {
        img: ImageOt,
        Username: "Jasurbek Narzullayev",
        date: "7 Sentyabr 2022 y. 19:52",
        stars: 3,
        izoh: "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.\n 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
    },
    {
        img: ImageOt,
        Username: "Jasurbek Narzullayev",
        date: "7 Sentyabr 2022 y. 19:52",
        stars: 5,
        izoh: "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.\n 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
    },
    {
        img: ImageOt,
        Username: "Jasurbek Narzullayev",
        date: "7 Sentyabr 2022 y. 19:52",
        stars: 2,
        izoh: "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
    },
    {
        img: ImageOt,
        Username: "Jasurbek Narzullayev",
        date: "7 Sentyabr 2022 y. 19:52",
        stars: 4,
        izoh: "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.\n 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
    },
    {
        img: ImageOt,
        Username: "Jasurbek Narzullayev",
        date: "7 Sentyabr 2022 y. 19:52",
        stars: 3,
        izoh: "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
    },
    {
        img: ImageOt,
        Username: "Jasurbek Narzullayev",
        date: "7 Sentyabr 2022 y. 19:52",
        stars: 5,
        izoh: "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
    }
]





function Kurslar_single() {
    const { id } = useParams()
    const [target, setTarget] = useState(0)
    const [count, setCount] = useState(1)
    const [openId, setOpenId] = useState(null);


    if (id > Kurslardata.length - 1) {

        return (<>
            <Breadcrumb data={[{ title: "Kurslar", url: "/kurslar", }, { title: "Sahifa 404" }]} />
            <div className="containersingle">
                <div className="tanishuv">
                    <nav style={{ display: "grid", alignContent: "space-between", justifyContent: "center", width: "100%" }}>
                        <p className='p32'>Sahifa mavjud emas</p>
                        <Link to={'/kurslar'} className="btn" style={{ display: "flex" }}><p className='p20'>Kurslarga qaytish</p></Link>
                    </nav>
                </div>
            </div></>
        );
    }

    const data = Kurslardata.filter(e => e.id == id)[0]

    useEffect(() => {
        const closeAll = () => setOpenId(null);
        document.addEventListener("click", closeAll);
        return () => document.removeEventListener("click", closeAll);
    }, []);



    return (
        <>
            <Breadcrumb data={[{ title: "Kurslar", url: "/kurslar", }, { title: data.title }]} />
            <div className="containersingle">
                <div className="tanishuv">
                    <nav>
                        <p className="p32">{data.title}</p>
                        <div className="tnsh">
                            <IconMoney color={"#1C92E0"} />
                            <p className="p20">{data.pr2 == 0 ? "Bepul" : data.pr2.toLocaleString('fr-FR') + ".00 uzs"}</p>
                            {data.pr1 ? <p className="pr2">{data.pr1.toLocaleString('fr-FR')}.00 uzs</p> : ""}
                        </div>
                        <div className="tnsh f">
                            <div>
                                <IconLevel />
                                <p className="t14">{data.daraja}</p>
                            </div>
                            <div>
                                <IconBolim />
                                <p className="t14">{data.bolim} ta bo‘lim</p>
                            </div>
                            <div>
                                <IconPlay style={{ width: "12px" }} />
                                <p className="t14">24 ta dars</p>
                            </div>
                        </div>
                    </nav>
                    <nav>
                        <div className="ranks">
                            <div className="stars">
                                <IconHalfStar className="star" offset={(data.rating) * 100} />
                                <IconHalfStar className="star" offset={(data.rating - 1) * 100} />
                                <IconHalfStar className="star" offset={(data.rating - 2) * 100} />
                                <IconHalfStar className="star" offset={(data.rating - 3) * 100} />
                                <IconHalfStar className="star" offset={(data.rating - 4) * 100} />
                            </div>
                            <div className="rating">
                                <p className='p20'>{data.rating}</p>
                                <p className='t14'>({234}ta izoh)</p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="btn">
                                <p className='p20'>Kursni sotib olish</p>
                            </div>
                            <div className="share">
                                <IconHeart />
                            </div>
                            <div className="share">
                                <IconShare />
                            </div>
                        </div>
                    </nav>

                </div>


                <div className="container">
                    <div className="ustun12">
                        <div className="darslar">
                            {
                                darslar_list.map((e, i) => {

                                    return (
                                        <div className='dars'>
                                            <div className="title">
                                                <p className='p24'>{i + 1}. {e.title}</p>
                                                <IconKorish onClick={() => setTarget(i)} style={target == i ? { color: "#F7F9FA", transform: "rotate(-90deg)" } : { color: "#F7F9FA", transform: "rotate(90deg)" }} />
                                            </div>
                                            {target == i ? <Darslar data={e.darslar} index={i} /> : ""}
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div className="izohlarbox">
                            <div className="boxtitle">
                                <p className='p28'>Kurs haqida izohlar</p>
                            </div>
                            <div className="izohlar">
                                {
                                    Izohdata.map((e, i) => {
                                        if (i < (4 * count)) {
                                            const isOpen = openId === i+1;
                                            return (
                                                <div className='izoh'>
                                                    <div className="header">
                                                        <nav>
                                                            <div className="img">
                                                                <img src={e.img} alt="" />
                                                            </div>
                                                            <div className="title">
                                                                <div className="username">
                                                                    <p className='p20'>{e.Username}</p>
                                                                </div>
                                                                <div className="dateandstar">
                                                                    <div className="date">
                                                                        <p className='text18'>{e.date}</p>
                                                                    </div>
                                                                    <div className="stars">
                                                                        <IconHalfStar className="star" offset={(e.stars) * 100} width={17} height={17} />
                                                                        <IconHalfStar className="star" offset={(e.stars - 1) * 100} width={17} height={17} />
                                                                        <IconHalfStar className="star" offset={(e.stars - 2) * 100} width={17} height={17} />
                                                                        <IconHalfStar className="star" offset={(e.stars - 3) * 100} width={17} height={17} />
                                                                        <IconHalfStar className="star" offset={(e.stars - 4) * 100} width={17} height={17} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </nav>
                                                        <nav>
                                                            <div onClick={(e) => e.stopPropagation()}>
                                                                <details
                                                                    open={isOpen}
                                                                    onToggle={(e) => {
                                                                        setOpenId(e.target.open ? i+1 : null);
                                                                    }}
                                                                    className="more"
                                                                >
                                                                    <summary>⋮</summary>

                                                                    <ul className="menu">
                                                                        <li><IconWarning /><p className='p16'>Shikoyat qilish</p></li>
                                                                    </ul>
                                                                </details>
                                                            </div>
                                                        </nav>
                                                    </div>
                                                    <div className="text">
                                                        <p className='p16'>{e.izoh}</p>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            {
                                Izohdata.length > 4 * count && <div className="davomi" onClick={() => setCount(e => e + 1)}>Barcha izohlar</div>
                            }
                        </div>

                    </div>
                    <div className="ustun3">
                        <Yportal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kurslar_single
