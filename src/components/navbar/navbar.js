import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [searchCategory, setSearchCategory] = useState()

    const searchChange = (event) => {

        let valueSearch = event.target.value.toLowerCase()
        

        setSearchCategory(valueSearch);
    }

    return (
        <nav className='menu'>
            <div className='logo'>
                <Link to="/">
                <img src="https://i.ibb.co/rZztbf7/logo.png" alt="Escalada Online Logo" />
                </Link>
            </div>
            <div className='navigation'>
                <div className='searchBox'>
                    <label htmlFor='searchbox'>Busqueda por Rubro:</label>
                    <input type='text'
                            placeholder='KIOSCO'
                            name='searchbox'
                            id='categoryShop'
                            onChange={searchChange}
                            />
                <Link to={ `/shops/${searchCategory}` } className="button"><img src="https://cdn-icons-png.freepik.com/512/5272/5272056.png" /></Link>
                </div>
                <Link to="/addShop" className="button-navigation">Agregar Comercio</Link>
            </div>
        </nav>
    )
}

export default Navbar