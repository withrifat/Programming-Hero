import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";
import { toast } from "react-toastify";
const PlayerCard = ({ player, setAvailableBalance, availableBalance,setPurchasedPlayers,purchasedPlayers }) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
    if(availableBalance<playerPrice){
        toast("Not enough coins!!")
        return
    }
    if(purchasedPlayers.length===6){
        toast("6 players already selected!")
        return
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerPrice
    ); 
    setPurchasedPlayers([...purchasedPlayers,playerData])
    toast("Player purchased!")
  };
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img
          src={player.player_image}
          alt="Shoes"
          className="w-full h-[300px] object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
          <div className="flex items-center ">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
            <span className="ml-2">{player.player_country}</span>
          </div>

          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between font-bold">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.bating_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: ${player.price}</p>
          <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn">
            {isSelected === true ? "Selected" : "Choose player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
