import { useState } from 'react'
import './index.css'
import Main from "./container/Asosiy/main.jsx"
import Footer from './container/Asosiy/Footer.jsx'

import { KitoblarContext } from './Contexts/BookContext.jsx'
import { LoginContext } from './Contexts/LoginContext.jsx'
import { SavatchaContext } from './Contexts/SavatchaContext.jsx'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Boshoyna from './container/elements/boshoyna.jsx'
import Kutubxona from './container/kattaoynalar/Kutubxona/Kutubxona.jsx'
import Savatcha from './container/kattaoynalar/Savatcha/Savatcha.jsx'
import Kutubxona_single from './container/kattaoynalar/Kutubxona/Kutubxona_single.jsx'
import Error404 from './container/kattaoynalar/Error404.jsx'
import Main_Ranking from './container/kattaoynalar/main/Main_Ranking.jsx'
import Kurslar from './container/kattaoynalar/Kurslar/Kurslar.jsx'
import Kurslar_single from './container/kattaoynalar/Kurslar/Kurslar_single.jsx'
import Profile from './container/kattaoynalar/profile/Profile.jsx'
import Live_video from './container/kattaoynalar/main/Live_video.jsx'
import Connacting from './container/kattaoynalar/Boglanish/Connacting.jsx'
import Savatcha_Rasmiylashtirish from './container/kattaoynalar/Savatcha/Savatcha_Rasmiylashtirish.jsx'
import News from './container/kattaoynalar/News/News.jsx'
import News_single from './container/kattaoynalar/News/News_single.jsx'
import Foydalanish_qoidalari from './container/kattaoynalar/News/Foydalanish_qoidalari.jsx'
import Profile_Sotibolingan from './container/kattaoynalar/profile/Profile_Sotibolingan.jsx'
import Profile_Buyurtmalar from './container/kattaoynalar/profile/Profile-Buyurtmalar.jsx'
import Saqlangan from './container/kattaoynalar/profile/Saqlanganlar/Saqlangan.jsx'
import Profile_Sozlamalar from './container/kattaoynalar/profile/Sozlamalar/Profile_Sozlamalar.jsx'
import Main_Games from './container/kattaoynalar/main/Mani_Games.jsx'
import { NewsLoader } from './container/kattaoynalar/News/Loaders/News.loader.js'



const router=createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {path:'',element:<Navigate to={'/home'} replace/>},
      {path:'home',element:<Boshoyna/>},
      {path:"home/reyting",element:<Main_Ranking/>},
      {path:"home/games",element:<Main_Games/>},
      {path:"live/:id",element:<Live_video/>},

      {path:"library",element:<Kutubxona/>},
      {path:"library/single/:id",element:<Kutubxona_single/>},

      {path:"savatcha",element:<Savatcha/>},
      {path:"savatcha/rasmiylashtirish", element:<Savatcha_Rasmiylashtirish/>},

      {path:"profile",element:<Profile/>, children:[
        {path:"", element:<Profile_Sozlamalar/>},
        {path:'kurslar',element:<Profile_Sotibolingan/>},
        {path:"buyurtmalar",element:<Profile_Buyurtmalar/>},
        {path:"saqlanganlar",element:<Saqlangan/>}
      ]},

      {path:"kurslar",element:<Kurslar/>},
      {path:"kurslar/:id",element:<Kurslar_single/>},
      
      {path:"connacting",element:<Connacting/>},

      {path:"news",element:<News/>,loader:NewsLoader},
      {path:"news/single/:id",element:<News_single/>},

      {path:"qollanma",element:<Foydalanish_qoidalari/>},



      {path:"*",element:<Error404/>}
    ]

  }
])

function App() {
  const [cart, setCart] = useState([]);
  const [kitobsoni,setKitobsoni]=useState([])
  const [ochir,setOchir]=useState()
  const [loginbar,setloginbar]=useState({})
  const [qulf,setqulf]=useState(false)

  const [Stolov,setStolov]=useState(0)
  const [Schegirma,SetSchegirma]=useState(0)
  const [Skupon,SetSkupon]=useState()
 

  return (
    <SavatchaContext value={{Stolov,setStolov,Schegirma,SetSchegirma,Skupon,SetSkupon}}>
    <LoginContext value={{loginbar,setloginbar,qulf,setqulf}}>
    <KitoblarContext value={{cart, setCart,kitobsoni,setKitobsoni,ochir,setOchir}}>
    <div className='containermax'>
        <RouterProvider router={router}/>
        {/* <Main/> */}
      
    </div>
    </KitoblarContext>
    </LoginContext>
    </SavatchaContext>
  )
}

export default App
