
import { useState } from 'react'
import './App.css'
export default function Counter(){

    const [count, setCount] = useState(0);

    const handleAdd = ()=>{
        const newCount = count +1 ;
        setCount(newCount)
    }
    return(
        <>
        <div className="counterStyle">
            <h3>count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
        </>
    )
}