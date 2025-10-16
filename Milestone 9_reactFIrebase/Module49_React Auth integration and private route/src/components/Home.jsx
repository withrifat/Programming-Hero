import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const Home = () => {
    const authInfo = use(AuthContext)
    console.log(authInfo);
    
    return (
        <div>
            this is home 
        </div>
    );
};

export default Home;