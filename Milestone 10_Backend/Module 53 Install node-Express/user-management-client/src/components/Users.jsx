import React, { use, useState } from 'react';

const Users = ({ usersPromise }) => {
  const inisialUser = use(usersPromise);
  const [users, setUsers] = useState(inisialUser);
  console.log(users);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const newUser = { name, email };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log('after post', data);
        const newUsers = [...users, data]; 
        setUsers(newUsers);
        // e.target.reset(); 
      })
      .catch(err => console.error('Error:', err));
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <h3>Add a user</h3>
        <input name='name' type='text' placeholder='Name' required />
        <br />
        <input name='email' type='email' placeholder='Email' required />
        <br />
        <button type='submit'>Add user</button>
      </form>

      <div>
        {users.map(user => (
          <p key={user.id}>{user.name} — Email: {user.email}</p>
        ))}
      </div>
    </div>
  );
};

export default Users;



// request object send to the server 
//  mention method post 
//  using fetch method post 
//  mention heade: json type data 