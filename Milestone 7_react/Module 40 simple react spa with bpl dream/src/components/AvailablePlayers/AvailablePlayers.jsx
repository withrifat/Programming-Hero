import React, { use } from 'react';
import PlayerCart from './PlayerCart';

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {playerData.map((player) =><PlayerCart player={player}></PlayerCart> )}
      </div>
    </>
  );
};

export default AvailablePlayers;
