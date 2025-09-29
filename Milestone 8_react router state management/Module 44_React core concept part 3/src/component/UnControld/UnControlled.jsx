import React, { useRef } from 'react';

const UnControlled = () => {
    const emailRef = useRef('');
    const PasswordRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        console.log(email);
        const password = PasswordRef.current.value;
        console.log(password);
    }
  return (
    <Container>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 border p-4">
        <input ref={emailRef} type="email" name='email' placeholder='your email here ' className='input w-full' required /> <br />
        <br />
        <input className='input w-full' name='text' type="text" placeholder='your name here ' required />
        <input ref={PasswordRef} className='input w-full' name='password' type="password" placeholder='your password here ' required />
        <input className='btn' type="submit" value="Submit" />
      </form>

    </Container>
  );
};

export default UnControlled;