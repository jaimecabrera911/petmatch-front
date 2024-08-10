import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {

    const userRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = userRef.current?.value;
        const password = passwordRef.current?.value;
        if (user == "adoptante") {
            navigate("/adoption")
        } else if (user == "gestor") {
            navigate("/manage")
        }
        else {
            alert("Usuario no registrado.")
        }
    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card p-4 border-0">
                        <h2 className="card-title text-center">¡Bienvenido! Nos alegra verte de nuevo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mt-4">
                                <label>Usuario*</label>
                                <input type="text" className="form-control" placeholder="Ingresa usuario" ref={userRef} />
                            </div>
                            <div className="form-group mt-3">
                                <label>Contraseña*</label>
                                <input type="password" className="form-control" placeholder="Ingresa contraseña" ref={passwordRef} />
                            </div>
                            <div className="form-group text-right mt-3">
                                <a href="#" className="text-danger">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type="submit" className="btn btn-danger btn-block mt-3">Ingresar</button>
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
