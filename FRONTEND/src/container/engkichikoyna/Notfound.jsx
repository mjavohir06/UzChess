import React from 'react'
import { ImageBulut } from '../../importers/Images'

function Notfound() {
    return (
        <div className='notfound'>
            <img src={ImageBulut} alt="" />
            <p className='p28'>Hech qanday ma’lumot topilmadi</p>
        </div>
    )
}

export default Notfound
