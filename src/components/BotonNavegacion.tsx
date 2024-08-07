import React from 'react'
import './BotonNavegacionStyle.css'
import { Link } from 'react-router-dom'

interface Propiedades {
    icono: string,
    titulo: string,
    link: string
}

const BotonNavegacion: React.FC<Propiedades> = (props) => {
    const { icono, titulo, link } = props
    return (
        <div className="d-inline-block text-center me-5">
            <img src={icono} alt="" width="45rem" />
            <Link className='nav-link titulo-boton' to={link} >{titulo}</Link>
        </div>
    )
}

export default BotonNavegacion