import React from 'react';
import Brother from './Brother';
import Sister from './Sister';
import Myself from './Myself';

const Dad = () => {
    return (
        <div>
            <h2>dad</h2>
                            <Brother></Brother>
                            <Sister></Sister>
                            <Myself></Myself>
        </div>
    );
};

export default Dad;