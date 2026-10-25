
import "./Profile.css"
import { IconCheckbox, IconExit, IconMoney, IconQumsoat, IconSavatcha } from '../../../importers/Icon'
import { ImageMedal, ImageTopKurslar } from '../../../importers/Images'


const data = [
  {
    imgs: [
      ImageMedal, ImageTopKurslar, ImageMedal, ImageTopKurslar
    ],
    id: 24542312123,
    status: "Yetkazib berildi",
    money: 1404240,
    katalogs: ["Kitob", "brelog", "shaxmat", "medal"]
  },
  {
    imgs: [
      ImageTopKurslar, ImageMedal, ImageMedal
    ],
    id: 24542312123,
    status: "Yetkazib berildi",
    money: 1404240,
    katalogs: ["Kitob", "brelog", "shaxmat", "medal"]
  },
  {
    imgs: [
      ImageMedal, ImageTopKurslar
    ],
    id: 24542312123,
    status: "Bekor qilingan",
    money: 1404240,
    katalogs: ["Kitob", "brelog", "shaxmat", "medal"]
  },
  {
    imgs: [
      ImageMedal
    ],
    id: 24542312123,
    status: "Buyurtma ko‘rib chiqilmoqda",
    money: 1404240,
    katalogs: ["Kitob", "brelog", "shaxmat", "medal"]
  }
]

function Profile_Buyurtmalar() {
  
  return (
    <div className='Pbuyurtma'>
      {
        data.map((e,i) => {
          const status=e.status==="Yetkazib berildi" ? "pg13" : e.status=="Bekor qilingan" ? "pr13" :"py13"
          const statusdiv=e.status==="Yetkazib berildi" ? "tek" : e.status=="Bekor qilingan" ? "bek" :"kch"
          const icon=e.status==="Yetkazib berildi" ? <IconCheckbox/> : e.status=="Bekor qilingan" ? <IconExit color="#DC2D2D"/> : <IconQumsoat/>
          return  <div key={i} className="pruchase">
          <div className="mahsulot">
            {e.imgs.map((j,index) => <img key={index} src={j} />)}

          </div>
          <div className="malumot">
            <div className="raqami">
              <p className="p20">№ {e.id}</p>

            </div>
            <nav className={statusdiv}>
              {icon}
              <p className={status}>{e.status}</p>
            </nav>
            <div className="bl">
              <nav>
                <IconMoney />
                <p className="p14">{e.money.toLocaleString("fr-FR")}.00 UZS</p>
              </nav>
              <nav>
                <IconSavatcha />
                <p className="p14">{e.katalogs.join(",")}</p>
              </nav>
            </div>
          </div>
        </div>
        })
      }
    </div>
  )
}

export default Profile_Buyurtmalar
