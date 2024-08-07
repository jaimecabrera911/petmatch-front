import UserLayout from '../layouts/UserLayout'
import "./SurveyStyle.css"

const SurveyPage = () => {
    return (
        <div>
            <UserLayout />
            <iframe title='survey' className='frame-survey' src="https://0l6h1mpu5as.typeform.com/to/KKxYDjH9" allowFullScreen />
        </div>
    )
}

export default SurveyPage