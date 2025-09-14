
import './App.css'
import ToDo from './todo';
import Actor from './Actor';
import Singer from './Singer';
function App() {
  const actors = ['Bappa Raj', 'Hero Alom', 'Tarek', 'Pander Alo'];
  const singer = [
    {id: 1, name: 'Hero alom', age:35},
    {id: 2, name: 'Tanver Evan', age:27},
    {id: 3, name: 'Washroom singer', age:100}
  ]
  return (
    <>
      <h1>React Core Concepts </h1>
      {
        singer.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
      <ToDo task="Doing Code" isDone={true}></ToDo>
      <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Revise Js" isDone={false}></ToDo>
      <Person></Person>
      <Student></Student>
      <Developer name="Rifat" tech="MERN"></Developer>
      <Developer name="RonE" tech="Laravel"></Developer>
      <Developer name="Nipa" tech="Python"></Developer>
      <Player name="Rifat" kills="5000"></Player>
      <Player name="Nipa" kills="1"></Player>

    </>
  )
}
function Player({name, kills}){  //best way
  return(
    <>
    <div className="student">
      <h3>Name: {name} </h3>
      <h3>Kills: {kills} </h3>
    </div>
    </>
  )
}
function Person (){
  const age = 18;
  const personStyle ={
    color: "red",
    border: "black"
  }
  return(
    <p id='' title='tooltip' style={personStyle}>I am a person, my age is {age} </p>
  )
}
function Student (){
  const age = 18;
  return(
    <>
      <p>Name:  </p>
      <p>Dept: </p>
    </>
  )
}
function Developer (props){

  const age = 18;
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      margin: "10px"
    }}>
      <h3>Developer: {props.name}</h3>
      <h3>Technology: {props.tech} </h3>
    </div>
  )
}


export default App
