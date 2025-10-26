import React from "react";
import { useLoaderData } from "react-router";
import Phone from "./Phone";


const Phones = () => {
  const phones = useLoaderData(); 

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-center mb-10">
        All Phones ({phones.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default Phones;
