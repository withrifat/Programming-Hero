import React from 'react';
import Container from '../tempComp/Container';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.text.value);
        console.log(event.target.email.value);
    }
  return (
    <Container>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 border p-4">
        <input className='input w-full' name='text' type="text" placeholder='your name here ' />
        <br />
        <input type="email" name='email' placeholder='your email here ' className='input w-full'/> <br />
        <input className='btn' type="submit" value="Submit" />
      </form>
    </Container>
  );
};

export default SimpleForm;
