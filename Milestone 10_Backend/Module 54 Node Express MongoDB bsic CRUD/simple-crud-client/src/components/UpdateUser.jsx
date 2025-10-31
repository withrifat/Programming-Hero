import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    console.log(user);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
        const updatedUser = { name, email }

        // send data to the server
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('after update', data)
                if(data.modifiedCount){
                    alert('user info updated')
                }
            })
    }

    return (
        <div>
            <h2>Edit a User</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" defaultValue={user.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={user.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;