import React, { use } from 'react';
import User from '../Users/User';

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);
  return (
    <>
      <h2>This is from Users2</h2>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users2;
