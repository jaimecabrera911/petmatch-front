import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyle.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h2 className="card-title text-center">¡Bienvenido! Nos alegra verte de nuevo</h2>
                        <form>
                            <div className="form-group">
                                <label>Usuario*</label>
                                <input type="text" className="form-control" placeholder="Ingresa usuario" />
                            </div>
                            <div className="form-group">
                                <label>Contraseña*</label>
                                <input type="password" className="form-control" placeholder="Ingresa contraseña" />
                            </div>
                            <div className="form-group text-right">
                                <a href="#" className="text-danger">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type="submit" className="btn btn-danger btn-block">Ingresar</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 text-center d-flex flex-column justify-content-center">
                    <h3>¿No te has registrado?</h3>
                    <Link className="btn btn-outline-danger" to="/users/singup-1">Regístrate aquí </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
