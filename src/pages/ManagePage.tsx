import { IoIosAddCircleOutline } from "react-icons/io";
import Table from "../components/Table/Table";
import { CiSearch } from "react-icons/ci";
import ManageLayout from "../layouts/ManageLayout";

const ManagePage = () => {


    return (
        <>
            <ManageLayout role="Gestor" />
            <div className="container mt-5 ">
                <div className="d-flex justify-content-center">
                    <div className="input-group mb-3 w-50">
                        <span className="input-group-text" id="basic-addon1"><CiSearch /></span>
                        <input type="text" className="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <button className="btn btn-danger h-25 ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoIosAddCircleOutline /> Adicionar</button>
                </div>
            </div>
            <div className="p-5">
                <Table />
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Mascota</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Subir Imagen Mascota</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" />
                            <div className="dropdown">
                                <select className="form-select mt-3" aria-label="Default select example">
                                    <option selected>Seleccionar Genero</option>
                                    <option value="1">Macho</option>
                                    <option value="2">Hembra</option>
                                </select>
                            </div>
                            <div className="dropdown">
                                <select className="form-select mt-3" aria-label="Default select example">
                                    <option selected>Seleccionar Edad</option>
                                    <option value="0">0-1 año</option>
                                    <option value="1">1-5 años</option>
                                    <option value="2">&gt;5 años</option>
                                </select>
                            </div>
                            <div className="dropdown">
                                <select className="form-select mt-3" aria-label="Default select example">
                                    <option selected>Seleccionar Tamaño</option>
                                    <option value="0">Pequeño</option>
                                    <option value="1">Mediano</option>
                                    <option value="2">Grande</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <h3>Salud</h3>
                                .<div className="input-group">
                                    <div className="form-check me-4">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Vacunado
                                        </label>
                                    </div>
                                    <div className="form-check me-4">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked" >
                                            Esterilizado
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked" >
                                            Alimentación
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3>Comportamiento</h3>
                                <div className="input-group">
                                    <div className="form-check me-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Apto para niños
                                        </label>
                                    </div>
                                    <div className="form-check me-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked" >
                                            Convive con Perros
                                        </label>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="form-check me-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Convive con Gatos
                                        </label>
                                    </div>
                                    <div className="form-check me-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked" >
                                            Aparamentos
                                        </label>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="form-check me-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked" >
                                            Casa
                                        </label>
                                    </div>
                                    <div className="form-check me-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked" >
                                            Finca
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManagePage