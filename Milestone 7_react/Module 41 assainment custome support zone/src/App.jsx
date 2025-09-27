
import { Suspense, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './component/footer/Footer';
import HeroStatus from './component/heroStatus/HeroStatus';
import MainBody from './component/Mainbody/MainBody';
import NavBar from './component/nav/NavBar';
import './index.css';

const DataPromise = fetch('./data.json').then(data=> data.json())

function App() {
  const [customerTickets, setCustomerTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]); 
  const [resolvedTickets, setResolvedTickets] = useState([]);
  useEffect(() => {
    DataPromise.then(data => {
      setCustomerTickets(data);
    });
  }, []);
  const handleSelectTicket = (ticketToProgress) => {
    setInProgressTickets(prevInProgress => [...prevInProgress, ticketToProgress]);
    setCustomerTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketToProgress.id));
    toast.info(`Ticket #${ticketToProgress.id} moved to In Progress.`);
  };
  const handleCompleteTicket = (ticketToComplete) => {
    setResolvedTickets(prevResolved => [...prevResolved, ticketToComplete]);
    setInProgressTickets(prevInProgress => prevInProgress.filter(ticket => ticket.id !== ticketToComplete.id));
    toast.success(`Ticket #${ticketToComplete.id} has been resolved!`);
  };
  const inProgressCount = inProgressTickets.length;
  const resolvedCount = resolvedTickets.length;
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />
      <HeroStatus inProgress={inProgressCount} resolved={resolvedCount} />
      <Suspense fallback={<div className='container mx-auto my-4 text-center'><span className="loading loading-spinner loading-lg"></span></div>}>
        <MainBody
          customerTickets={customerTickets}
          inProgressTickets={inProgressTickets} // Changed prop name
          resolvedTickets={resolvedTickets}
          onSelectTicket={handleSelectTicket}
          onCompleteTicket={handleCompleteTicket}
        />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
