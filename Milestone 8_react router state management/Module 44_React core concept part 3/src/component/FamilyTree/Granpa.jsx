import React from 'react';
import Auncle from './Auncle';
import Aunt from './Aunt';
import Dad from './Dad';
const Granpa = () => {
    return (
        <div>
            <h2>Grand pa</h2>
                            <Dad></Dad>

                            <Auncle></Auncle>
                <Aunt></Aunt>
        </div>
    );
};

export default Granpa;