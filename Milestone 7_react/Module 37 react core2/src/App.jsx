
import './App.css'
import Counter from './Counte';
import Batsman from './Batsman';
import Boller from './Boller';
import Users from './Users';
import Friends from './Friends'
import { Suspense } from 'react';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())

const fetchFriends = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json()
}

function App() {
  const friendsPromise = fetchFriends();

  function handleClick(){
    alert('I am Clicked . ')
  }
  const handleAdd5=(num)=>{
    let val = num + 5;
    alert("value is "+ val);
  }
  const clickMeBtn = () => alert("someone clicked me ");
  // <> its called Fragment 
  return (
    <>   
        <h3>Hi </h3>

        <Suspense fallback={ <h1>Loading .... </h1> }>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense>
        <Suspense fallback={ <h3>Friends Are coming soon </h3> }>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense>
        
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
