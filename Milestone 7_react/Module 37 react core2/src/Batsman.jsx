import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]= useState(0)
    const[sixes, setSixes]= useState(0)
    // this for 
    const handleSingles = ()=>{
        const updatedRuns = runs + 1 ;
        setRuns(updatedRuns)
    }
    const handleFour = ()=>{
        const updatedRuns = runs + 4; 
        setRuns(updatedRuns)
    }
    const handleSix = ()=>{
        const updatedRuns = runs + 6; 
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updatedRuns)
    }
    return (
        <div className="">
            <h3>Player: Bangla Batsman</h3>
            {
                <p>{sixes}</p>
            }
            {
                runs > 50 && <p>You done Half Secure </p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}