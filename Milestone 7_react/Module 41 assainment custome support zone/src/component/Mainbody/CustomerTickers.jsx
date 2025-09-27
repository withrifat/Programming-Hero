
import React from 'react';

const CustomerTickers = ({data, handleClickprogress}) => {
    const {id,title,description,customer,priority,status} = data;
    return (
          <div onClick={()=>handleClickprogress(data)} className="w-full bg-white shadow rounded p-4 flex flex-col gap-3 transform transition-transform duration-300 hover:scale-101 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <span className={`text-sm px-2 py-1 rounded-xl ${status==="Open"?"bg-green-300 text-black":status==="In-Progress"?"bg-yellow-300 text-black":status==="Closed"?"bg-red-300 text-white":"bg-gray-300 text-black"}`}>{status}</span>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2"><span>#{id}</span><span className={`${priority==="HIGH PRIORITY"?"text-red-500":priority==="MEDIUM PRIORITY"?"text-yellow-500":"text-gray-500"} font-bold`}>{priority}</span></div>
                <div className="flex items-center gap-2"><span>{customer}</span><span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>{new Date().toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickers;