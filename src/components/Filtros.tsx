const Filtros = () => {
    return (
        <div className="container-fluid w-50 mt-4">
            <div className="row">
                <div className="col-4 d-flex align-items-center">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Seleccionar edad</option>
                        <option value="1">0-1 año</option>
                        <option value="2">1-5 años</option>
                        <option value="3">{">5 años"}</option>
                    </select>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Seleccionar género</option>
                        <option value="1">Macho</option>
                        <option value="2">Hembra</option>
                    </select>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Seleccionar tamaño</option>
                        <option value="1">Pequeño</option>
                        <option value="2">Mediano</option>
                        <option value="3">Grande</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default Filtros