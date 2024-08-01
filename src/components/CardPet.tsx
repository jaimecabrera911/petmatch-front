import "./CardPetStyle.css";
import pet from "../assets/images/dog1.png";

function CardPet() {
    return (
        <div className="container">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card rounded-4 card-height">
                            <div
                                className="row justify-content-center align-items-center g-2"
                            >
                                <img src={pet} className="w-75" alt="..." />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="card rounded-4 card-height">
                            <div className="card-body">
                                <h5 className="card-title">Datos</h5>
                                <p className="card-text">Nombre: Rocko</p>
                                <p className="card-text">Genero: Macho</p>
                                <p className="card-text">Edad: 1</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPet;
