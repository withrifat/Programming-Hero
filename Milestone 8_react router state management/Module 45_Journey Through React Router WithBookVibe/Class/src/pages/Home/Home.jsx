import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();

    
    return (
        <div>
            <Banner />
            <Books data={data}></Books>
        </div>
    );
};

export default Home;
