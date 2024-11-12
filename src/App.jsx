import './App.css'
import CSNav from './components/CsNavbar/CSNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'

function App() {

  return (
    <>
      <CSNav></CSNav>
      {/* <Navbar></Navbar> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
