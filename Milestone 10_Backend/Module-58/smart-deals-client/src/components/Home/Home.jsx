import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';

const latestProductsPromise = fetch('http://localhost:3000/latest-products').then(res => res.json());
const Home = () => {
    return (
        <div>
            <h3 className='bg-primary'>this is home</h3>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;