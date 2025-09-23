import React, { useState } from 'react';

const PlayerCart = ({player, setAvailableBalance, availableBalance,purchasedPlayers, setPurchasedPlayers}) => {
    
    const [isSelected, setIsSelected] = useState(false)

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
    if(availableBalance<playerPrice){
        alert("Not enough coins!!")
        return
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerPrice
    ); 
    setPurchasedPlayers(...purchasedPlayers, playerData)
  }; 
  return (
    <div>
      <div className="card bg-base-100 w-96 p-4 shadow-sm">
        <figure>
          <img src={player['player_image']} className="rounded-xl w-full h-[300px] object-cover" alt="Shoes" />
        </figure>
        <div className="mt-4 ">
          <div className="flex gap-2 ">
            <img src="/user.png" alt="" className="h-8 w-8" />
            <h2 className="text-black text-lg font-bold"> {player['player_name']} </h2>
          </div>
          <div className="flex justify-between my-2 items-center border-b-1 border-gray-200">
            <div className="flex gap-2 ">
              <img className="h-[20px] w-[20px]" src="/flag.png" alt="" />
              <span>{player['player_country']}</span>
            </div>
            <div className="py-2">
              <button className="btn border-none "> {player['playing_role']} </button>
            </div>
          </div>
          <div className="flex justify-between items-center  ">
            <h2 className="font-bold py-1">Rating</h2>
            <span className="text-yellow-400 font-bold"> {player['rating']} </span>
          </div>
          <div className="flex justify-between items-center  ">
            <h2 className="font-bold py-1"> {player['bating_style']} </h2>
            <h2 className="font-bold py-1"> {player['bating_style']} </h2>
          </div>
          <div className="flex justify-between items-center  ">
            <h2 className="font-bold py-1">
              Price: <span className="ml-1">$ {player['price']} </span>
            </h2>
            <button disabled={isSelected} onClick={() => handleSelected(player)}
            // onClick={()=>{
            //     setIsSelected(true)
            //     setAvailableBalance(availableBalance-player.price.split("USD").join("").split(",").join(''))
            // }} 
            className="btn border-gray-300 bg-white text-black"> {isSelected===true?"selected": "chose" } </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCart;
