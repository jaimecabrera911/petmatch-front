import './IntroduccionStyle.css'

const Introduccion = () => {
    return (
        <div>
            <div className="container mt-5" style={{ width: "70rem" }}>
                <div className="row justify-content-center">
                    <div className="col text-center mb-4">
                        <h1 className="titulo">Busca <span className="red-text">tu amigo</span></h1>
                    </div>
                    <p>¡Bienvenidos a nuestro listado de mascotas! Si estás buscando añadir un nuevo miembro peludo a tu familia, estás en el lugar adecuado. Aquí encontrarás una variedad de adorables perritos esperando encontrar un hogar lleno de amor.  Tu nuevo mejor amigo está a solo unos clics de distancia.</p>
                </div>
            </div>
        </div>
    )
}

export default Introduccion