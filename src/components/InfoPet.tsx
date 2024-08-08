import pet from "../../src/assets/images/image-step.png"
import Step from "./Steps/Step"
import tips from '../assets/icons/image3.png'

function InfoPet() {
    return (
        <div className='container-fluid w-75'>
            <div className="row border border-1 rounded-5">
                <div className="col-1 bg-link-light">
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <input className="form-check-input" type="radio" value="" id="defaultCheck1" placeholder='check' />
                    </div>
                </div>
                <div className="col-1 bg-link-light">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={pet} alt="pet" width="100px" />
                    </div>
                </div>
                <div className="col-4 bg-link-light">
                    <div className="d-flex align-items-center h-100 fw-bolder p-5">
                        Proceso de adopción
                        No. 0234
                    </div>
                </div>
                <div className="col-6 bg-link-light">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                            <div className="col-2 me-5">
                                <Step image={tips} text_color="green" step="Simulador" state="Aprobado" />
                            </div>
                            <div className="col-2 me-5">
                                <Step image={tips} text_color="red" step="Entrevista" state="Rechazado" />
                            </div>
                            <div className="col-2 me-5">
                                <Step image={tips} text_color="gray" step="Entrega" state="Pendiente" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPet