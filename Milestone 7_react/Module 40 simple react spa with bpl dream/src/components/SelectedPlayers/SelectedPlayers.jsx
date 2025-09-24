import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
 
    return (
        <div className='max-w-[1200px] mx-auto'>
         {
            purchasedPlayers.map(player=><SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
         }
        </div>
    );
};

export default SelectedPlayers;