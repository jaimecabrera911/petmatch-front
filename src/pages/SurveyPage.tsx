import ManageLayout from '../layouts/ManageLayout'
import "./SurveyStyle.css"

const SurveyPage = () => {
    return (
        <div>
            <ManageLayout role="Adoptante" />
            <iframe title='survey' className='frame-survey' src="https://0l6h1mpu5as.typeform.com/to/KKxYDjH9" allowFullScreen />
        </div>
    )
}

export default SurveyPage