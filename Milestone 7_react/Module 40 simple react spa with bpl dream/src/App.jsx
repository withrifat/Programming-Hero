
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import NavBar from './components/NavBar/NavBar'
import './index.css'

function App() {


  return (
    <>
    <div className="container mx-auto ">
      <NavBar></NavBar>
      <AvailablePlayers></AvailablePlayers>
    </div>
    </>
  )
}

export default App
