import React, { useState } from 'react';
import Container from '../tempComp/Container';
const ControlField = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();  // stop page refresh 
        console.log("submitted");
        // if (password.length < 6) {
        //     setError('password should be 6 characters')
        // }
        // else {
        //     setError('')
        // }
    }
    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
        if(event.target.value.length < 6){
            setError('password should be 6 characters')
        }
        else{
            setError('')
        }
    }
  return (
    <Container>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 border p-4">
        <input className='input w-full' name='text' type="text" placeholder='your name here ' required />
        <br />
        <input type="email" name='email' placeholder='your email here ' className='input w-full' required /> <br />
        <input defaultValue={password} onChange={handlePasswordChange} className='input w-full' name='password' type="password" placeholder='your password here ' required />
        <input className='btn' type="submit" value="Submit" />
      </form>
      <p className='text-red-500'>
        <small>{error}</small>
      </p>
    </Container>
  );
};
export default ControlField;