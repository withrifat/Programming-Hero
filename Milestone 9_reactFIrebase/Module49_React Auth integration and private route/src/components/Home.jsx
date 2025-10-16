import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>This is home for {user && <span>{user.email}</span>}</h1>
        </div>
    );
};

export default Home;