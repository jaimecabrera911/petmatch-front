import CardPet, { DataPet } from './CardPet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardContainerPetsStyle.css'
import pet_img from "../../assets/images/dog1.png"

const data: DataPet[] = [
    {
        nombre: "Max",
        edad: 3,
        genero: "Macho",
        tamanio: "Mediano",
        desparasitado: false,
        vacunado: true,
        esterilizado: true,
        alimentacion: "Croquetas",
        apto_ninios: true,
        conv_perros: true,
        conv_gatos: false,
        apto: true,
        casa: true,
        finca: false,
        caracteristicas: ["Juguetón", "Cariñoso", "Protector"],
        descripcion: "Max es un perro muy juguetón y protector.",
        urlFoto: pet_img
    },
    {
        nombre: "Luna",
        edad: 2,
        genero: "Hembra",
        tamanio: "Pequeño",
        desparasitado: true,
        vacunado: true,
        esterilizado: true,
        alimentacion: "Comida húmeda",
        apto_ninios: true,
        conv_perros: true,
        conv_gatos: true,
        apto: true,
        casa: true,
        finca: true,
        caracteristicas: ["Tranquila", "Amigable", "Inteligente"],
        descripcion: "Luna es una perrita tranquila y muy amigable.",
        urlFoto: pet_img
    },
    {
        nombre: "Rocky",
        edad: 4,
        genero: "Macho",
        tamanio: "Grande",
        desparasitado: false,
        vacunado: true,
        esterilizado: false,
        alimentacion: "Barf",
        apto_ninios: false,
        conv_perros: false,
        conv_gatos: true,
        apto: false,
        casa: false,
        finca: true,
        caracteristicas: ["Guardían", "Energético", "Leal"],
        descripcion: "Rocky es un perro guardián muy leal y energético.",
        urlFoto: pet_img
    }
]

const CardContainerPets = () => {
    return (
        <div className="container" style={{ width: "65rem" }}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            {
                                data.map((pet, index) => {
                                    return <div key={index} className="col">
                                        <CardPet {...pet} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            {
                                data.map((pet, index) => {
                                    return <div key={index} className="col">
                                        <CardPet {...pet} />
                                    </div>
                                })
                            }
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
