
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Contries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json())


function App() {

  return (
    <>
    <Suspense fallback={ <span className="loading loading-ring loading-4xl "></span> }>
     <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
