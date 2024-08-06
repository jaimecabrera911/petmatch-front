import "./CardPetStyle.css";
import pet from "../../assets/images/dog1.png";

export interface DataPet {
    nombre: string;
    edad: number;
    genero: string;
    tamanio: string;
    desparasitado: boolean;
    vacunado: boolean;
    esterilizado: boolean;
    alimentacion: string;
    apto_ninios: boolean;
    conv_perros: boolean;
    conv_gatos: boolean;
    apto: boolean;
    casa: boolean;
    finca: boolean;
    caracteristicas: Array<string>;
    descripcion?: string;
    urlFoto: string;
}

function CardPet(dataPet: DataPet) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="card rounded-4 card-height">
                        <div
                            className="row justify-content-center align-items-center g-2"
                        >
                            <div className="container rounded-top-4 bg-amarillo">
                                <img src={pet} className="w-75" alt="..." />
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{dataPet.nombre}</h5>
                            <p className="card-text">Edad: {dataPet.edad}</p>
                            <p className="card-text">Genero: {dataPet.genero}</p>
                            <p className="card-text">Tamaño: {dataPet.tamanio}</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="card rounded-4 card-height">
                        <div className="card-body">
                            <h5 className="card-title">Salud</h5>
                            <p className="card-title">Desparasitado: {dataPet.desparasitado ? "Si" : "No"}</p>
                            <p className="card-text">Vacunado: {dataPet.vacunado ? "Si" : "No"}</p>
                            <p className="card-text">Esterilizado: {dataPet.esterilizado ? "Si" : "No"}</p>
                            <h5 className="card-title">Características</h5>
                            {dataPet.caracteristicas.map((caracteristica, index) => (
                                <p key={index} className="card-text">{caracteristica}</p>
                            ))}
                            <a href="#" className="btn boton"> ¡Adoptame!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPet;
