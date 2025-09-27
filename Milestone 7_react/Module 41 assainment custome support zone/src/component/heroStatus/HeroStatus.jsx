import React from 'react';

const HeroStatus = ({inProgress , resolved}) => {

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div
                    className="relative h-[250px] w-full md:w-[708px] rounded-xl p-8 flex flex-col items-center justify-center text-white overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #632EE3, #9F62F2)" }}>
                    <img src="/vector1.png" alt="" className="absolute insert-y-0 -inset-x-50 w-full h-full object-contain opacity-100 pointer-events-none rounded-xl" />
                    <img src="/vector1.png" alt="" className="absolute inset-y-0 inset-x-100 right-0 w-1/2 h-full object-contain opacity-100 pointer-events-none rounded-xl transform scale-x-[-1]"/>
                    <h2 className="text-lg font-medium relative z-10">In-Progress</h2>
                    <p className="text-5xl font-bold mt-2 relative z-10"> {inProgress} </p>
                </div>
                <div
                    className="relative h-[250px] w-full md:w-[708px] rounded-xl p-8 flex flex-col items-center justify-center text-white overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #54CF68, #00827A)" }}>
                    <img src="/vector1.png" alt="" className="absolute insert-y-0 -inset-x-50 w-full h-full object-contain opacity-100 pointer-events-none rounded-xl" />
                    <img src="/vector1.png" alt="" className="absolute inset-y-0 inset-x-100 right-0 w-1/2 h-full object-contain opacity-100 pointer-events-none rounded-xl transform scale-x-[-1]"/>
                    <h2 className="text-lg font-medium relative z-10">Resolved</h2>
                    <p className="text-5xl font-bold mt-2 relative z-10"> {resolved}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroStatus;
