import './App.css'
import Banner from './components/Banner'
import BarraNavegacion from './components/BarraNavegacion'
import CardPet from './components/CardPet'
import Filtros from './components/Filtros'
import Introduccion from './components/Introduccion'

function App() {


  return (
    <>
      <BarraNavegacion />
      <Banner />
      <Introduccion />
      <Filtros />
      <CardPet />
    </>
  )
}

export default App
