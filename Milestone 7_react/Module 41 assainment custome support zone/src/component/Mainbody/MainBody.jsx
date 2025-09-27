
import React from 'react';
import CustomerTickers from './CustomerTickers';
import TaskStatus from './TaskStatus';

const MainBody = ({ customerTickets,inProgressTickets,resolvedTickets, onSelectTicket, onCompleteTicket }) => {
  return (
    <div className='container mx-auto my-4 h-auto px-4 md:px-0 p-2'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  
        {/* Customer Tickets Section --> left */}
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Customer Tickets</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {customerTickets.length > 0 ? (
            // jump into customer Tickers part 
              customerTickets.map((ticket) => (
                <CustomerTickers 
                  key={ticket.id} 
                  data={ticket} 
                  handleClickprogress={onSelectTicket} 
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                <p>All pending tickets have been moved to progress!</p>
              </div>
            )}
          </div>
        </div>
        {/* ------------------------------------------------- Deviator-------------------------------------------------------- */}
        <div className="md:col-span-1">
          {/* Task Status */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Task Status</h1>
            <div className="space-y-4">
              {inProgressTickets.length > 0 ? (
                //  jump into customer task status part 
                inProgressTickets.map(ticket => (
                  <TaskStatus 
                    key={ticket.id}
                    data={ticket} 
                    handleComplete={onCompleteTicket} 
                  />
                ))
              ) : (
                <div className="p-4 text-center bg-gray-50 rounded-lg">
                  <p className='text-gray-500'>Select a ticket to begin progress.</p>
                </div>
              )}
            </div>
          </div>

          {/* Resolved Tasks */}
          <div>
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Resolved Tasks</h1>
            {resolvedTickets.length > 0 ? (
              <ul className="space-y-2">
                {resolvedTickets.map((ticket) => (
                  <div key={ticket.id} className="p-3 bg-green-100 text-green-700 rounded-lg shadow-sm font-medium">
                    <span className='font-bold text-green-800'>#{ticket.id}:</span> {ticket.title}
                    <p className='flex gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Complete</p>
                  </div>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center bg-gray-50 rounded-lg">
                <p className='text-gray-500'>No resolved tasks yet.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainBody;
