import BotonNavegacion from './BotonNavegacion'
import inicio from '../assets/icons/image1.png'
import logo from '../assets/icons/logo.png'
import './BarraNavegacion.css'

const BarraNavegacionLogin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light barra-navegacion">
                <div className="container-fluid">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="Bootstrap" width="80" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <BotonNavegacion key="inicio" icono={inicio} titulo='Inicio' link='/' />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default BarraNavegacionLogin