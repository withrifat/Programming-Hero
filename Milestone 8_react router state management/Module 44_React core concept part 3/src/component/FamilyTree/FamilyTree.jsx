import React, { createContext } from 'react';
import Container from '../tempComp/Container';
import Auncle from './Auncle';
import Granpa from './Granpa';

export const AssetContext = createContext('');


const FamilyTree = () => {
    const assets = 'diamond' ;
    return (
        <Container>
            <h2>Family Tree Component</h2>
            <section className='mx-auto text-center p-5 m-5 rounded-2xl border-4 border-indigo-600 bg-blue-900 flex gap-5 align-center justify-center'>
                <AssetContext.Provider value={assets}>
                 <Granpa></Granpa>
                </AssetContext.Provider>

            </section>
        </Container>
    );
};

export default FamilyTree;


//  this topic about contextAPI
// 1. create context
// 2. create provider and set value
// 3. use context to consume the value
// 4. useContext hook to consume the value
// 5. make sure the children component is wrapped by the provider component
// 6. only functional component can use useContext hook
// 7. useContext hook can only be used inside the functional component
