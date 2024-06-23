import { useState } from 'react'
import { Link} from 'react-router-dom';
import "./addShop.css"

const weekDaysList = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'];

const dayHoursList = Array.from({ length: 24 }, (_, i) => i);


const AddShop = () => {

    const [saveInfo, setSaveInfo] = useState(false)
    const [dataShop, setDataShop] = useState({
        name: "",
        email: "",
        logo: "",
        adress: "",
        adressNumber: "",
        days: [],
        hours: [],
        instagram: "",
        facebook: "",
        tiktok: "",
        web: "",
        whatsapp: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setDataShop(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ?
                name === 'hours' ?

                    checked ? [...prevState[name], parseInt(value)] : prevState[name].filter(hour => hour !== parseInt(value))
                    : checked ? [...prevState[name], value] : prevState[name].filter(day => day !== value)
                : value
        }));

    };

    const sortedDays = dataShop.days.sort((a, b) => weekDaysList.indexOf(a) - weekDaysList.indexOf(b));
    const sortedHours = dataShop.hours.sort((a, b) => a - b)

    const closeModal = () => {
        setSaveInfo(false)
        setDataShop(
            {
                name: "",
                email: "",
                logo: "",
                adress: "",
                adressNumber: "",
                days: [],
                hours: [],
                instagram: "",
                facebook: "",
                tiktok: "",
                web: "",
                whatsapp: "",
                category: ""
            }
        )
    }

    const sendShop = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('https://escaladaonlineapi.onrender.com/addShop', {
                method: 'POST',
                body: JSON.stringify(dataShop),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            } else {
                const result = await response.json();

                setSaveInfo(true)

            }


        } catch (e) {
            console.error('Error a enviar los datos del local', e)
        }


    }

    if (saveInfo) {

        setTimeout(() => {
            closeModal()
        }, 3000);
        return (
            <div className='successPost'>
                <h3>Bienvenido!!!</h3>
                <h2>{dataShop.name}</h2>
                <h3>a Escalada Online</h3>
                <button onClick={closeModal}>Cerrar</button>
            </div>


        )
    } else {
        return (

            <form onSubmit={sendShop} className='formAddShop'>
                <h1>Complete los siguientes datos para agregar su local a Escalada Online</h1>
                <div className='dataBox'>
                    <label htmlFor="name">Nombre del local:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={dataShop.name}
                        onChange={handleChange}
                        placeholder='mi local *(este campo campo es obligatorio)'
                    />
                </div>
                <div className='dataBox'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={dataShop.email}
                        onChange={handleChange}
                        placeholder='tucorreo@correo.com'
                    />
                </div>
                <div className='dataBox'>
                    <label htmlFor="logo">Ruta de la imagen:</label>
                    <input
                        type="text"
                        id="logo"
                        name="logo"
                        placeholder='www.mi-imagen.png'
                        value={dataShop.logo}
                        onChange={handleChange}
                    />
                </div>
                <div className='dataBox'>
                    <label htmlFor="adress">Calle:</label>
                    <input
                        type="text"
                        id="adress"
                        name="adress"
                        value={dataShop.adress}
                        onChange={handleChange}
                        placeholder='calle falsa *(este campo campo es obligatorio)'
                    />
                </div>
                <div className='dataBox'>
                    <label htmlFor="adressNumber">Altura:</label>
                    <input
                        type="number"
                        id="adressNumber"
                        name="adressNumber"
                        value={dataShop.adressNumber}
                        onChange={handleChange}
                        placeholder='123 *(este campo campo es obligatorio)'
                    />
                </div>
                <div className='dataBox'>
                    <label htmlFor="whatsapp" >Número de Whatsapp:</label>
                    <input
                        type="number"
                        id="whatsapp"
                        name="whatsapp"
                        value={dataShop.whatsapp}
                        onChange={handleChange}
                        placeholder='1135357979 sin guiones y/o espacios'
                    />
                </div>

                <div className='dataBox'>
                    <label htmlFor="category">Rubro:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={dataShop.category}
                        onChange={handleChange}
                        placeholder='kiosco'
                    />
                </div>


                <div className='checkBox'>
                    <h2>Elige los dias de la semana en donde el local esta abierto</h2>
                    {weekDaysList.map((day, index) => (
                        <div key={index} className='inputBox'>
                            <input
                                type="checkbox"
                                id={day}
                                name="days"
                                value={day}
                                checked={dataShop.days.includes(day)}
                                onChange={handleChange}
                            />
                            <label htmlFor={day}>{day}</label>
                        </div>
                    ))}

                    <p>Días seleccionados: {dataShop.days.join(', ')}</p>
                </div>
                <div className='checkBox'>
                    <h2>Elige los horarios en donde el local esta abierto</h2>
                    {dayHoursList.map((hour, index) => (
                        <div key={index} className='hoursBox'>
                            <input
                                type="checkbox"
                                id={`hour${hour}`}
                                name="hours"
                                value={hour}
                                checked={dataShop.hours.includes(hour)}
                                onChange={handleChange}
                            />
                            <label htmlFor={`hour${hour}`}>{hour}:00 a {hour}:59</label>
                        </div>
                    ))}
                    <p>Horas seleccionadas: {dataShop.hours.join(', ')}</p>
                </div>
                <h3>Redes Sociales</h3>
                <p className='socialNetworkNote'>Copia el link de la barra de direcciones del perfil de las redes</p>
                <div className='dataBox'>
                    <label htmlFor="instagram">Instagram:</label>
                    <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        placeholder='https://www.instagram.com/tuPerfil'
                        value={dataShop.instagram}
                        onChange={handleChange}
                    />
                </div>

                <div className='dataBox'>
                    <label htmlFor="facebook">Facebook:</label>
                    <input
                        type="text"
                        id="facebook"
                        name="facebook"
                        value={dataShop.facebook}
                        onChange={handleChange}
                        placeholder='https://www.facebook.com/tuPerfil'
                    />
                </div>

                <div className='dataBox'>
                    <label htmlFor="tiktok">Tik Tok:</label>
                    <input
                        type="text"
                        id="tiktok"
                        name="tiktok"
                        value={dataShop.tiktok}
                        onChange={handleChange}
                        placeholder='https://www.tiktok.com/@tuPerfil'
                    />
                </div>

                <div className='dataBox'>
                    <label htmlFor="web">Pagina Web:</label>
                    <input
                        type="text"
                        id="web"
                        name="web"
                        value={dataShop.web}
                        onChange={handleChange}
                        placeholder='https://www.tuNegocio.com.ar'
                    />
                </div>
                <div className='btns-add'>
                    <button type="submit">Agregar Local</button>
                    <Link to="/" className='btn'>Inicio</Link>
                </div>
            </form>
        )
    }
}

export default AddShop