import React from 'react'
import './BotonNavegacionStyle.css'

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
            <a className='nav-link titulo-boton' href={link}>
                {titulo}
            </a>
        </div>
    )
}

export default BotonNavegacion