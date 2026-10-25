import Money from '../assets/icons/Profile/money.svg?react'
import IconGlobal from '../assets/icons/Profile/global.svg?react'
import Level from '../assets/icons/level.svg?react'
import Savatcha from '../assets/icons/main/savatcha.svg?react'
import Share from '../assets/icons/Kutubxona/share.svg?react'
import IconMuallif from '../assets/icons/Kutubxona/muallif.svg?react'
import IconSana from '../assets/icons/Kutubxona/sana.svg?react'
import IconSahifa from '../assets/icons/Kutubxona/sahifa.svg?react'
import IconYurakcha from "../assets/icons/yurakcha.svg?react"
import IconWhiteHome from "../assets/pictures/Error404/home.svg?react"
import Exit from "../assets/icons/Savatcha/x_exit_cancel.svg?react"
import IconKorish from "../assets/icons/korish.svg?react"
import IconRuchka from "../assets/icons/Login/create_outline.svg?react"
import IconReflesh from "../assets/icons/Login/refresh 1.svg?react"
import IconEye from "../assets/icons/korishsoni.svg?react"
import Iconeyeoff from "../assets/icons/Login/eye-off-outline.svg?react"
import IconReyting from "../assets/icons/KichikLogolar/Reyting.svg?react"
import IconKokQumsoat from "../assets/icons/KichikLogolar/KokQumsoat.svg?react"
import Search from "../assets/icons/main/search.svg?react"
import IconBlackStar from "../assets/icons/Star2.svg?react"
import IconYellowStar from "../assets/icons/Star.svg?react"
// import IconHeart from "../assets/icons/yurakcha.svg?react"
import IconYonalish from "../assets/icons/yonalish.svg?react"
import IconBolim from "../assets/icons/bolim.svg?react"
import IconPlay from "../assets/icons/play.svg?react"
import IconLink from "../assets/icons/main/link.svg?react"
import IconCheckbox from "../assets/icons/Profile/Checkbox.svg?react"
import IconQumsoat from "../assets/icons/Profile/qumsoat.svg?react"
import IconWarning from "../assets/icons/Kurslar/warning.svg?react"
import IconCalendar from "../assets/icons/boglanish/calendar.svg?react"
import IconGmail from "../assets/icons/boglanish/gmail.svg?react"
import IconPhone from "../assets/icons/boglanish/phone.svg?react"
import IconTrain_Outline from "../assets/icons/boglanish/train-outline.svg?react"
import IconInfo from "../assets/icons/Savatcha/info.svg?react"
import IconCopy from "../assets/icons/Savatcha/copy-outline.svg?react"
import Twitter from "../assets/icons/News/twitter.svg?react"
import Facebook from "../assets/icons/News/facebook.svg?react"
import Telegram from "../assets/icons/News/telegram.svg?react"
import IconLog_in from "../assets/icons/log-in.svg?react"
import IconLog_out from "../assets/icons/log-out.svg?react"
import IconKey from "../assets/icons/Profile/key.svg?react"
import IconPhone2 from "../assets/icons/Profile/phone2.svg?react"
import IconEmail from "../assets/icons/Profile/mail.svg?react"
import IconKub from "../assets/icons/yakunlangangames/kubik.svg?react"





import { useId } from 'react'


const IconHeart = ({ size = 24, istrue=false}) => {
    let offset=0
    if(istrue){
        offset=100
    }
    const id = useId();
    const safeOffset = Math.max(0, Math.min(offset, 100));

    return (
        <svg
            width={size}
            height={(size * 18) / 20}
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
            
        >
            <defs>
                <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#82CC27" />
                    <stop offset={`${safeOffset}%`} stopColor="#82CC27" />
                    <stop offset={`${safeOffset}%`} stopColor="#1A1D1F" />
                    <stop offset="100%" stopColor="#1A1D1F" />
                </linearGradient>
            </defs>

            <path
                d="M10 17L9.62 16.74C7.81 15.52 5.52 14.14 3.82 12.1C2.03 9.96 1.17 7.77 1.2 5.39C1.23 2.72 3.35 0.5 5.95 0.5C8.02 1.7 9.4 2.57 10 2.57C10.6 1.7 11.98 0.5 14.05 0.5C16.65 0.5 18.77 2.72 18.8 5.39C18.83 7.77 17.97 9.96 16.18 12.1C14.48 14.14 12.19 15.52 10.38 16.74L10 17Z"
                stroke="#f7f9faff"
                strokeOpacity="0.12"
                strokeWidth="1"
            />

            <path
                d="M14.05 1.5C16.05 1.5 17.7 3.08 17.8 5.18L17.8 5.4C17.82 7.51 17.05 9.5 15.32 11.54C13.71 13.45 11.56 14.75 10 15.78C8.52 14.8 6.52 13.56 4.95 11.8L4.63 11.43C3.14 9.56 2.46 7.68 2.48 5.4C2.5 3.1 4.34 1.5 5.95 1.5C7.6 1.5 8.72 2.45 9.35 3.21L10 4L10.65 3.21C11.28 2.45 12.4 1.5 14.05 1.5Z"
                fill={`url(#${id})`}
            />
        </svg>
    );
};



function IconFacebook({ color }) {
    return <Facebook style={color ? { color: color } : { color: "#A5A5AA" }} />
}

function IconTelegram({ color }) {
    return <Telegram style={color ? { color: color } : { color: "#A5A5AA" }} />
}

function IconTwitter({ color }) {
    return <Twitter style={color ? { color: color } : { color: "#A5A5AA" }} />
}

function IconMoney({ color, style }) {
    return <Money style={color ? { color: color } : style ? { ...style } : { color: "#F7F9FA" }} />
}
function IconExit({ color }) {
    return <Exit style={color ? { color: color } : { color: "#fff" }} />
}


function IconLevel({ color }) {
    return <Level style={color ? { color: color } : { color: "#9DA1A3", width: "18px", transform: "translateY(-3px)" }} />
}
function IconSavatcha({ color }) {
    return <Savatcha style={color ? { color: color } : { color: "#F7F9FA" }} />
}
function IconShare({ color }) {
    return <Share style={color ? { color: color } : { color: "#F7F9FA" }} />
}
function IconSearch({ color }) {
    return <Search style={color ? { color: color } : { color: "#F7F9FA" }} />
}



export {
    IconMoney, IconLevel, IconSavatcha, IconShare, IconYurakcha, IconMuallif, IconSahifa, IconSana, IconWhiteHome, IconExit, IconGlobal, IconKorish,
    IconRuchka, IconReflesh, IconEye, Iconeyeoff, IconReyting, IconSearch, IconBlackStar, IconYellowStar, IconBolim, IconHeart, IconYonalish, IconPlay,
    IconLink, IconCheckbox, IconWarning, IconCalendar, IconGmail, IconPhone, IconTrain_Outline, IconInfo, IconCopy, IconFacebook, IconTelegram, IconTwitter,
    IconQumsoat,IconLog_in,IconLog_out,IconEmail,IconKey,IconPhone2,IconKokQumsoat,IconKub
}