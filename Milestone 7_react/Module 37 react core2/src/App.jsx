
import './App.css'
import Counter from './Counte';
import Batsman from './Batsman';
import Boller from './Boller';
function App() {

  function handleClick(){
    alert('I am Clicked . ')
  }
  const handleAdd5=(num)=>{
    let val = num + 5;
    alert("value is "+ val);
  }
  const clickMeBtn = () => alert("someone clicked me ");
  return (
    <>  
        <h3>Hi </h3>
        <Boller></Boller>
        <Batsman></Batsman>
        <Counter></Counter>
        <button onClick={handleClick}>Click me</button>
        <button onClick={clickMeBtn}>Click me 1</button>
        <button onClick={() => alert("I am clicked")}>Click me 2</button>
        <button onClick={()=>handleAdd5(10)}>Click me 5</button>
    </>
  )
}

export default App
