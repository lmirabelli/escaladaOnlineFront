import './card.css'
import { Link } from 'react-router-dom'
import { weekDays, hoursDay } from '../../model/cardLogic'


const Card = ({ _id,name, days, hours, adress, adressNumber, logo, instagram, facebook, tiktok, web ,category}) => {


    if (!logo) {
        logo = "https://i.ibb.co/Vtxh4dx/X.png";
    }
    
    
    const instagramAnchor = instagram === "" ? '' : <a href={instagram} target='_blank'><img src="https://i.ibb.co/QXynQ0J/instagram.webp" alt="instagram" /><p>Instagram</p></a>
    const facebookAnchor = facebook === "" ? '' : <a href={facebook} target='_blank'><img src="https://i.ibb.co/rGq6Dxp/512px-2021-Facebook-icon-svg.png" alt="facebook" /><p>Facebook</p></a>
    const tiktokAnchor = tiktok === "" ? '' : <a href={tiktok} target='_blank'><img src="https://i.ibb.co/hZ4MH92/tiktok.png" alt="tiktok" /><p>Tiktok</p></a>
    const webAnchor = web === "" ? '' : <a href={web} target='_blank'><img src="https://i.ibb.co/HVDH3fs/web.png" alt="web" /><p>Web</p></a>


    if (!_id) {
        
        return (
            <div className="card">
                <h3>{name}</h3>
                <p>Falta información de identificación para este elemento.</p>
            </div>
        );
    }
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={logo} alt={name}></img>
            <h5>{category}</h5>
            <div className='daysBox'>
                {weekDays.map(day => <div key={day.name} className={days.length === 0 ? 'unknownBox' : days.find(d => d === day.name) ? 'trueBox' : 'falseBox'}>{day.biSyntax}</div>)}
            </div>
            <div className='hoursBox'>
                {hoursDay(hours)}
            </div>
            <h5>{adress} - {adressNumber}</h5>
            <div className='socialsNetworkBox'>
                <div className={instagram === "" ? "noSocial" : "yesSocial"}>{instagramAnchor}</div>
                <div className={facebook === "" ? "noSocial" : "yesSocial"}>{facebookAnchor}</div>
                <div className={tiktok === "" ? "noSocial" : "yesSocial"}>{tiktokAnchor}</div>
                <div className={web === "" ? "noSocial" : "yesSocial"}>{webAnchor}</div>                
            </div>
            <Link to={`/shop/${_id}`} className='buttonDetails' >Detalles</Link>
        </div>
    )
}

export default Card

