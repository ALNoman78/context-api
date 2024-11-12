import './App.css'
import CSNav from './components/CsNavbar/CSNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {

  return (
    <>
      <CSNav></CSNav>
      {/* <Navbar></Navbar> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
