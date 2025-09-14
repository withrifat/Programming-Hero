
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + react</h1>
      <Person></Person>
    </>
  )
}

function Person (){
  const age = 18;
  return(
    <p>I am a person, my age is {age} </p>
  )
}
export default App
