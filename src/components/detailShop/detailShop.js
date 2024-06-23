
import './detailShop.css';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDatabaseList } from '../../services/database';
import LoadingBox from '../loading/loading';
import { weekDays, hoursDay } from '../../model/cardLogic';

const DetailShop = () => {

    const { idnumber } = useParams()
    const navigate = useNavigate();
    const location = useLocation().pathname
    const { business, loading, error } = useDatabaseList(`https://escaladaonlineapi.onrender.com${location}`)

    const deleteShop = async () => {

        try {
            const response = await fetch(`https://escaladaonlineapi.onrender.com${location}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el comercio');
            }

            navigate('/');
        } catch (error) {
            console.error('Error al eliminar el comercio:', error);
        }
    }

    const instagramAnchor = business.instagram === "" ? '' : <a href={business.instagram} target='_blank'><img src="https://i.ibb.co/QXynQ0J/instagram.webp" /><p>{business.instagram}</p></a>
    const facebookAnchor = business.facebook === "" ? '' : <a href={business.facebook} target='_blank'><img src="https://i.ibb.co/rGq6Dxp/512px-2021-Facebook-icon-svg.png" /><p>{business.facebook}</p></a>
    const tiktokAnchor = business.tiktok === "" ? '' : <a href={business.tiktok} target='_blank'><img src="https://i.ibb.co/hZ4MH92/tiktok.png" /><p>{business.tiktok}</p></a>
    const webAnchor = business.web === "" ? '' : <a href={business.web} target='_blank'><img src="https://i.ibb.co/HVDH3fs/web.png" /><p>{business.web}</p></a>

    if (loading) {
        return <LoadingBox />;
    }
    if (error) {
        return <div>Error al cargar los datos: {error.message}</div>;
    }

    return (
        <div className='shopPage'>
            <div className='titleShop'>
                <img src={business.logo} />
                <h4>{business.category}</h4>
                <h2>{business.name}</h2>
            </div>
            <h4>{business.adress} {business.adressNumber}</h4>
            <div className='daysBox'>
                {weekDays.map(day => <div key={day.name} className={business.days.length === 0 ? 'unknownBox' : business.days.find(d => d === day.name) ? 'trueBox' : 'falseBox'}>{day.biSyntax}</div>)}
            </div>
            <div className='hoursBox'>
                {hoursDay(business.hours)}
            </div>
            <div className='socialsNetworkBox'>
                <div className={business.instagram === "" ? "noSocial" : "yesSocial"}>{instagramAnchor}</div>
                <div className={business.facebook === "" ? "noSocial" : "yesSocial"}>{facebookAnchor}</div>
                <div className={business.tiktok === "" ? "noSocial" : "yesSocial"}>{tiktokAnchor}</div>
                <div className={business.web === "" ? "noSocial" : "yesSocial"}>{webAnchor}</div>
            </div>
            <div className='btn-group'>
                <Link to="/" className='btn-shop'>INICIO</Link>
                <Link to={`/editShop/${idnumber}`} className='btn-shop'>EDITAR COMERCIO</Link>
                <button onClick={deleteShop} className='btn-shop'>BORRAR COMERCIO</button>
            </div>
        </div>
    );
};

export default DetailShop;