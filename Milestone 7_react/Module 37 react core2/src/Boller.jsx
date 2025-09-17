import { useState } from "react"

export default function Boller(){
    const [ball, ballUpdate]= useState(0)
    const ballBtn=()=>{
        const ballUpdates = ball + 1;
        if (ball >= 6) {
             return ballUpdate(0);
        }
        ballUpdate(ballUpdates)
    }
    return(
        <>
        <div className="">
            <h2>Ball count: {ball} </h2>
            <button onClick={ballBtn}>Ball</button>
        </div>
        </>
    )
}

