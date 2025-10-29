import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log(users);
    
    return (
        <div>
            <div className="">
                <form>
                    <h3>Add a user</h3>
                    <input type="text" />
                    <br />
                    <input type="email" name="" id="" />
                    <br />
                    <button>Add user</button>
                </form>
            </div>
            <div className="">
                {
                    users.map(user => <p key={user.id}>{user.name} Email: {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;