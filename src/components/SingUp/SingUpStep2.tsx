import { Link } from "react-router-dom"

const SingUpStep2 = () => {
    return (
        <>
            <div className="container mt-5 w-25">
                <div className="card p-4">
                    <h2 className="card-title text-center">Credenciales</h2>
                    <form>
                        <div className="form-group">
                            <label>Crear Usuario*</label>
                            <input type="text" className="form-control" placeholder="Ingresa usuario" />
                        </div>
                        <div className="form-group">
                            <label>Crear Contraseña*</label>
                            <input type="password" className="form-control" placeholder="Ingresa contraseña" />
                        </div>
                        <div className="form-group text-right">
                            <a href="#" className="text-danger">¿Olvidaste tu contraseña?</a>
                        </div>
                        <Link className="btn btn-danger btn-block" to="/users/login">Registrarse</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SingUpStep2