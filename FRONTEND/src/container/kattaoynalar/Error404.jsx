import React from 'react'
import Breadcrumb from '../engkichikoyna/Breadcrumb'
import { ImageError404 } from '../../importers/Images'
import "./Error404.css"
import { IconWhiteHome } from '../../importers/Icon'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <>
      <Breadcrumb data={[{title:"404 Sahifa topilmadi"}]}/>
      <div className="Error404container">
        <div className="returntohome">
            <p className='p140'>404</p>
            <p className='p32'>Sahifa topilmadi</p>
            <p className='t20'>Uups... Siz qidirayotgan sahifani topa olmadik :(</p>
            <Link to={'/home'} className="btn">
                <IconWhiteHome/>
                <p className='p20'>Asosiyga qaytish</p>
            </Link>

        </div>
        <div className="imgbox">
            <img src={ImageError404} alt="" />
        </div>
      </div>
    </>
  )
}

export default Error404
