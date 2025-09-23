import React, { use } from 'react';
import PlayerCart from './PlayerCart';

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {
  const playerData = use(playersPromise);


  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {playerData.map((player) =><PlayerCart purchasedPlayers={purchasedPlayers}  setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCart> )}
      </div>
    </>
  );
};

export default AvailablePlayers;
