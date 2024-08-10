import { Link } from "react-router-dom"

const SingUpStep2 = () => {
    return (
        <>
            <div className="container mt-5 w-25">
                <div className="card p-4 border-0">
                    <h2 className="card-title text-center">Credenciales</h2>
                    <form>
                        <div className="form-group mt-4">
                            <label>Crear Usuario*</label>
                            <input type="text" className="form-control" placeholder="Ingresa usuario" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Crear Contraseña*</label>
                            <input type="password" className="form-control" placeholder="Ingresa contraseña" />
                        </div>
                        <div className="form-group text-right mt-2">
                            <a href="#" className="text-danger">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link className="btn btn-danger btn-block mt-3" to="/users/login">Registrarse</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SingUpStep2