import './FooterStyle.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // External CSS file for custom styling
import logo from '../../assets/icons/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid mt-5 bg-hueso">
                <div className="row m-4 align align-items-center">
                    <div className='col-5'>
                        <div className="row">
                            <div className="col-4">
                                <img src={logo} alt="" style={{ width: "150px" }} />
                            </div>
                            <div className="col-8">
                                <p>Somos una Fundación sin fines de lucro dedicada a rescatar perros en situación de abandono o maltrato. Les brindamos una segunda oportunidad, ofreciéndoles el amor y cuidado que merecen y ayudándolos a encontrar un hogar lleno de cariño.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a className='nav-link' href="https://www.instagram.com"><FaInstagram /> Instagram</a>

                            </div>
                            <div className="col">
                                <a className='nav-link' href="https://www.facebook.com"><FaFacebook /> Facebook</a>
                            </div>
                            <div className="col">
                                <a className='nav-link' href="https://www.whatsapp.com"><FaWhatsapp /> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-7 p-4'>
                        <h5 className="text-white titulo">¿Tienes inquietudes o consultas?</h5>
                        <h5>Registra tus datos</h5>
                        <form action="#">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="nombres-apellidos" />
                                <label htmlFor="nombres-apellidos">Nombres y Apellidos</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" />
                                <label htmlFor="email">Correo electrónico</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label htmlFor="floatingTextarea2">Mensaje</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
