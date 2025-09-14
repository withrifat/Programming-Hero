
// export default function ToDo({task}){
//     return(
//         <>
//             <h2>I am from todo</h2>

//             <li>Task: {task} </li>
//         </>
//     )
// }

// export default function ToDo({task, isDone}){
//    if(isDone){return(
//         <>
//             <li>Task: {task} Done</li>
//         </>
//    )}
//    else {
//         return <li>Do now: {task} </li>
//    }
// }

// export default function ToDo({task, isDone, time = 0}){
//    return isDone ? <li>Done: {task} time: {time} </li> : <li>Not Done: {task} time: {time} </li>
// }


// conditional rendaring : 4 && 
// export default function ToDo({task, isDone, time = 0}){
//     return isDone && <li>Done: {task} time: {time} </li> 
// }
// conditional rendaring : 4 ||
export default function ToDo({task, isDone, time = 0}){
    return isDone || <li>Done: {task} time: {time} </li> 
}