import React, { useState } from 'react'
import { IconLink } from '../../importers/Icon';
import "./Styles.css"

function Copy({ text }) {
    const [ispres, setpres] = useState(false)
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setpres(true)
            setTimeout(() => {
                setpres(false)
            }, 2000);

        } catch (err) {
        }
    };
    if (ispres) {
        return (
            <div className="copybox bos">
                <span className='t14'>Nusxalandi</span>
                <IconLink />
            </div>
        )
    }else{
        return (
            <div onClick={copy} className="copybox">
                <IconLink />
            </div>
        )

    }
}

export default Copy
