import { FaRegCircleUser } from 'react-icons/fa6'
import logo from '../assets/icons/logo.png'
import './BarraNavegacion.css'
import { ImProfile } from 'react-icons/im'
import { CiLogin } from 'react-icons/ci'

interface Props {
    role: string
}

const BarraNavegacionGestion = (props: Props) => {
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
                                <li className="nav-item me-5">
                                    <div className="dropdown">
                                        <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FaRegCircleUser /> {props.role}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><ImProfile /> Perfil</a></li>
                                            <li><a className="dropdown-item" href="#"><CiLogin /> Cerrar Sesión</a></li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default BarraNavegacionGestion