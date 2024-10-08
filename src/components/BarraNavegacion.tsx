import BotonNavegacion from './BotonNavegacion'
import inicio from '../assets/icons/image1.png'
import requisitos from '../assets/icons/image2.png'
import tips from '../assets/icons/image3.png'
import donar from '../assets/icons/image4.png'
import denunciar from '../assets/icons/image5.png'
import contactar from '../assets/icons/image6.png'
import entrar from '../assets/icons/image7.png'
import logo from '../assets/icons/logo.png'
import './BarraNavegacion.css'

const BarraNavegacion = () => {
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
                                <li className="nav-item">
                                    <BotonNavegacion key="requisitos" icono={requisitos} titulo='Requisitos' link='#steps' />
                                </li>
                                <li className="nav-item">
                                    <BotonNavegacion key="tips" icono={tips} titulo='Tips' link='https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDQgCEAAYgwEYsQMYgAQyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEAUYQDIGCAcQRRg80gEIMzEwNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' />
                                </li>
                                <li className="nav-item">
                                    <BotonNavegacion key="donar" icono={donar} titulo='Donar' link='https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDQgCEAAYgwEYsQMYgAQyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEAUYQDIGCAcQRRg80gEIMzEwNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' />
                                </li>
                                <li className="nav-item">
                                    <BotonNavegacion key="denunciar" icono={denunciar} titulo='Denunciar' link='https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDQgCEAAYgwEYsQMYgAQyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEAUYQDIGCAcQRRg80gEIMzEwNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' />
                                </li>
                                <li className="nav-item">
                                    <BotonNavegacion key="contactar" icono={contactar} titulo='Contactar' link='https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDQgCEAAYgwEYsQMYgAQyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEAUYQDIGCAcQRRg80gEIMzEwNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' />
                                </li>
                                <li className="nav-item">
                                    <BotonNavegacion key="login" icono={entrar} titulo='Entrar' link='/users' />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default BarraNavegacion