import Banner from "../components/Banner"
import CardContainerPets from "../components/Cards/CardContainerPets"
import Filtros from "../components/Filtros"
import Introduccion from "../components/Introduccion"
import StepContainer from "../components/StepIndicator/StepContainer"
import VideoContainer from "../components/Video/VideoContainer"
import LayoutLading from "../layouts/LayoutLading"

const LandingPage = () => {
    return (
        <>
            <LayoutLading>
                <Banner />
                <Introduccion />
                <Filtros />
                <div className='mt-5'>
                    <CardContainerPets />
                </div>
                <StepContainer />
                <VideoContainer />
            </LayoutLading>
        </>
    )
}

export default LandingPage