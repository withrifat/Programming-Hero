import '../../App.css'

import React from 'react';

const Country = ({country}) => {
    // console.log(country.name);
    const countryName = country.name.common;
    const countryOfficial = country.name.official;
    const countryFlags = country.flags.flags.png;
        return (
            <div className="bg-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
            <img
                src={countryFlags}
                alt={country.flags.flags.alt}
                className="w-full h-30 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {countryName}
                </h2>
                <h3 className="text-sm text-gray-600">{countryOfficial}</h3>
                <h3 className="text-sm text-gray-600"> population = {country.population.population}</h3>
                <h3 className="text-sm text-gray-600"> area = {country.area.area}</h3>
                <h3 className="text-sm text-gray-600"> Continents = {country.continents.continents}</h3>

            </div>
        </div>
        );

};

export default Country;