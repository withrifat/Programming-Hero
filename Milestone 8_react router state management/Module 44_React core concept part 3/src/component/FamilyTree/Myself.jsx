import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Myself = () => {
    const newAsset = useContext(AssetContext);


    console.log(newAsset);
    return (
        <div>
            <h3>my self</h3>
            <p> {newAsset}</p>
        </div>
    );
};

export default Myself;