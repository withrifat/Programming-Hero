
import './index.css'
import Bottles from './components/Bottles/Bottles'
import { Suspense } from 'react'

const bottlePromise = fetch('./Bottles.json').then(res=> res.json())

function App() {
    

  return (
    <>
    <div className="mx-auto container mt-2 ">
     <h2 className="text-center ">Buy Awesome Water Bottle </h2>
      <Suspense fallback={ <span className="loading loading-spinner loading-xl"></span> }>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </div>
    </>
  )
}

export default App
