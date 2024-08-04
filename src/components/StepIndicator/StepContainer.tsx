import StepIndicator from "./StepIndicator";
import image_step from "../../assets/images/image-step.jpg";

function StepContainer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center" style={{ height: "40rem" }}>
                            <div className="col text-center">
                                <img src={image_step} className="img-fluid" alt="Imagen" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-7">
                    <StepIndicator />
                </div>
            </div>
        </div>
    );
}

export default StepContainer;
