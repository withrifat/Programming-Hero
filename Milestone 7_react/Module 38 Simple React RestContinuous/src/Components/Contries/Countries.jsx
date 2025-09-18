import '../../App.css'
import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    // const {countries, } = countriesData ;
    // console.log(countries);
    
    return (
        <div className="">
        <h1 className="text-4xl text-blue-600 font-bold mb-6">
            Hi, I am from countries {countries.length}
        </h1>

        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {
                countries.map((country) => (
                <Country key={country.cca3} country={country} />
            ))
            }
        </div>
        </div>


    );
};

export default Countries;