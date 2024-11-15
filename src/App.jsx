import './App.css'
import CSNav from './components/CsNavbar/CSNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
import Carosel from './components/Carosel/Carosel'

function App() {

  return (
    <>
      <CSNav></CSNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      <Carosel></Carosel>
    </>
  )
}

export default App
