import InfoPet from '../components/InfoPet'
import ManageLayout from '../layouts/ManageLayout'
import "./SurveyStyle.css"

const AdoptionPage = () => {
    return (
        <div>
            <ManageLayout role='Adoptante' />
            <div className="container p-5">
                <h3>Selecciona el proceso:</h3>
                <div className="container mt-5">
                    <InfoPet />
                    <br />
                    <InfoPet />
                    <br />
                    <InfoPet />
                </div>
            </div>
        </div>
    )
}

export default AdoptionPage