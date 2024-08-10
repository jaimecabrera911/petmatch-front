import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SingUpStep1 = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-8">
                    <div className="card p-4 border-0">
                        <h2 className="card-title text-center">Formulario de registro</h2>
                        <form>
                            <div className="row mt-3">
                                <div className="form-group col-md-6">
                                    <label>Nombres y apellidos</label>
                                    <input type="text" className="form-control" placeholder="Nombres y apellidos" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Documento de identidad</label>
                                    <input type="text" className="form-control" placeholder="Documento de identidad" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="form-group col-md-6">
                                    <label>Dirección de residencia y barrio</label>
                                    <input type="text" className="form-control" placeholder="Dirección de residencia y barrio" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Fecha de nacimiento</label>
                                    <input type="date" className="form-control" placeholder="Fecha de nacimiento" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="form-group col-md-6">
                                    <label>Teléfono de contacto</label>
                                    <input type="text" className="form-control" placeholder="Teléfono de contacto" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Ciudad de residencia</label>
                                    <input type="text" className="form-control" placeholder="Ciudad de residencia" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="form-group col-md-6">
                                    <label>Ocupación</label>
                                    <input type="text" className="form-control" placeholder="Ocupación" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Correo electrónico</label>
                                    <input type="email" className="form-control" placeholder="Correo electrónico" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="d-flex justify-content-center">
                                    <Link className="btn btn-danger btn-block me-3" to="/users/singup-2">Registrarse</Link>
                                    <Link className="btn btn-outline-danger btn-block" to="/">Cancelar</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingUpStep1;
