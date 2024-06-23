import "./cardbox.css"
import { useEffect } from "react"
import { useDatabaseList } from "../../services/database"
import { useLocation, useNavigate, Link } from "react-router-dom"
import Card from "../card/card"
import LoadingBox from "../loading/loading"

const Cardbox = () => {

    const location = useLocation().pathname;
    const navigate = useNavigate();
    
    useEffect(() => {
      if (location === '/shops/undefined') {
        navigate('/shops/rubroInexistente');
      }
    }, [location, navigate]);
    const {business, loading, error} = useDatabaseList(`https://escaladaonlineapi.onrender.com${location}`)
    let {shops, categoryList} = business


    if (loading) {
        return <LoadingBox />;
    }
    if (error) {
        return <div>Error al cargar los datos: {error.message}</div>;
    }
    if (shops.length == 0){

        categoryList?.sort((a,b) => {
            if(a < b){
                return -1
            }
            if(a > b){
                return 1
            }
            return 0
        })

        return(
            <div className="cardbox">
                <h2>EL RUBRO ELEGIDO NO EXISTE</h2>
                {categoryList?.map((category, index) => (<Link key={index} to={ `/shops/${category}` } className="btn">{category}</Link>))}
        </div>
        )

    }
    shops.sort((a, b) => a.name.localeCompare(b.name));
    
    return(
        <div className="cardbox">
            
            {shops?.map(shop => 
            (
                <Card key={shop._id} {...shop} />
                ))}
        </div>
    )
}

export default Cardbox