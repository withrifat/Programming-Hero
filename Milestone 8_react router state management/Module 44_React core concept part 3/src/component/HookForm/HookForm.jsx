import React from 'react';
import Container from '../tempComp/Container';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log("Submitted");
        
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} className='input w-full' name='text' type="text" placeholder='your name here ' value={name} onChange={nameOnChange} required />
                <br />
                <input className='btn' type="submit" value="Submit" />
            </form>
        </Container>
    );
};

export default HookForm;