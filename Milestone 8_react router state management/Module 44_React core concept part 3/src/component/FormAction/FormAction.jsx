import React from 'react';
import Container from '../tempComp/Container';

const FormAction = () => {
  const handleAction = (formData) => {
    console.log(formData.get('name'));
    console.log(formData.get('email'));
  };
  return (
    <Container>
      <form action={handleAction}>
        <input type="text" name='name' placeholder="name" /> <br />
        <input type="email" name='email' placeholder="email" /> <br />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default FormAction;
