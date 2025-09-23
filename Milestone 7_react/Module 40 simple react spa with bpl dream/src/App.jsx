import { Suspense, useState } from 'react';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import NavBar from './components/NavBar/NavBar';
import './index.css';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
// import Footer from 'daisyui/components/footer';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [ purchasedPlayers, setPurchasedPlayers] = useState([]);
  return (
    <>
      <div className="container mx-auto ">
        <NavBar availableBalance={availableBalance}></NavBar>
        <div className="container my-2 mx auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">Available</h1>
          <div className="p-2 font-bold">
            <button
              onClick={() => setToggle(true)}
              className={`py-3 px-4 border-1 border-gray-600 border-r-0 text-gray-900 rounded-l-2xl  ${
                toggle === true ? 'bg-[#E7FE29]' : ''
              }`}
            >
              Available{' '}
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`py-3 px-4 border-1 border-gray-600 border-l-0 text-gray-900 rounded-r-2xl  ${
                toggle === false ? 'bg-[#E7FE29]' : ''
              }`}
            >
              Selected{' '}
            </button>
          </div>
        </div>
        {toggle == true ? (
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <AvailablePlayers  purchasedPlayers={ purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
          </Suspense>
        ) : (
          <SelectedPlayers  purchasedPlayers={ purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} setAvailableBalance={setAvailableBalance}></SelectedPlayers>
        )}

        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default App;
