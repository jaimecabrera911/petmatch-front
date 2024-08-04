import CardPet from './CardPet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardContainerPetsStyle.css'

const CardContainerPets = () => {
    return (
        <div className="container" style={{ width: "65rem" }}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col">
                                <CardPet />
                            </div>
                            <div className="col">
                                <CardPet />
                            </div>
                            <div className="col">
                                <CardPet />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col">
                                <CardPet />
                            </div>
                            <div className="col">
                                <CardPet />
                            </div>
                            <div className="col">
                                <CardPet />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col">
                                <CardPet />
                            </div>
                            <div className="col">
                                <CardPet />
                            </div>
                            <div className="col">
                                <CardPet />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default CardContainerPets;
