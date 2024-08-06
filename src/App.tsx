import './App.css'
import Banner from './components/Banner'
import BarraNavegacion from './components/BarraNavegacion'
import CardContainerPets from './components/Cards/CardContainerPets'
import Filtros from './components/Filtros'
import Footer from './components/Footer/Footer'
import Introduccion from './components/Introduccion'
import StepContainer from './components/StepIndicator/StepContainer'
import VideoContainer from './components/Video/VideoContainer'

function App() {
  return (
    <>
      <BarraNavegacion />
      <Banner />
      <Introduccion />
      <Filtros />
      <div className='mt-5'>
        <CardContainerPets />
      </div>
      <StepContainer />
      <VideoContainer />
      <Footer />
    </>
  )
}

export default App
