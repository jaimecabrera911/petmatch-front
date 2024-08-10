import pet from "../../src/assets/images/image-step.png"
import Step from "./Steps/Step"
import simulador from '../assets/icons/simulador.png'
import entrevista from '../assets/icons/entrevista.png'
import entrega from '../assets/icons/entrega.png'
import { useNavigate } from "react-router-dom"

function InfoPet() {

    const navigation = useNavigate();

    function linkToSurvey() {
        navigation("/surveys")
    }

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
                                <div onClick={() => linkToSurvey()}>
                                    <Step image={simulador} text_color="green" step="Simulador" state="Aprobado" />
                                </div>
                            </div>
                            <div className="col-2 me-5">
                                <Step image={entrevista} text_color="red" step="Entrevista" state="Rechazado" />
                            </div>
                            <div className="col-2 me-5">
                                <Step image={entrega} text_color="gray" step="Entrega" state="Pendiente" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPet