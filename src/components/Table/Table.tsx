import { MdDeleteForever } from "react-icons/md"

function Table() {
    return (
        <div>
            <table id="example" className="display table  table-striped">
                <thead>
                    <tr>
                        <th>No Proceso</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Genero</th>
                        <th>Tamaño</th>
                        <th>Simulador</th>
                        <th>Entrevista</th>
                        <th>Entrega</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Rocko</td>
                        <td>1</td>
                        <td>Macho</td>
                        <td>Mediano</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Aprobado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Luna</td>
                        <td>3</td>
                        <td>Hembra</td>
                        <td>Pequeño</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Rechazado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>Max</td>
                        <td>5</td>
                        <td>Macho</td>
                        <td>Grande</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Aprobado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>004</td>
                        <td>Simba</td>
                        <td>2</td>
                        <td>Macho</td>
                        <td>Mediano</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Aprobado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>005</td>
                        <td>Mila</td>
                        <td>4</td>
                        <td>Hembra</td>
                        <td>Grande</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Aprobado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>006</td>
                        <td>Chispa</td>
                        <td>2</td>
                        <td>Hembra</td>
                        <td>Pequeño</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Rechazado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>007</td>
                        <td>Rex</td>
                        <td>6</td>
                        <td>Macho</td>
                        <td>Grande</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Aprobado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>008</td>
                        <td>Coco</td>
                        <td>7</td>
                        <td>Hembra</td>
                        <td>Mediano</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Aprobado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>009</td>
                        <td>Toby</td>
                        <td>8</td>
                        <td>Macho</td>
                        <td>Grande</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Rechazado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                    <tr>
                        <td>010</td>
                        <td>Nala</td>
                        <td>9</td>
                        <td>Hembra</td>
                        <td>Pequeño</td>
                        <td>
                            <div className="dropdown">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Aprobado</option>
                                    <option value="1">Aprobado</option>
                                    <option value="2">Rechazado</option>
                                    <option value="3">Pendiente</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar Estado</option>
                                <option value="1">Aprobado</option>
                                <option value="2">Rechazado</option>
                                <option value="3">Pendiente</option>
                            </select>
                        </td>
                        <td><MdDeleteForever className="fs-1 text-secondary" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table