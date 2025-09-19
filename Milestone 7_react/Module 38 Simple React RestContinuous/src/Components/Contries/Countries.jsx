import '../../App.css';
import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country)=>{
    // console.log('handle visited country clicked', country);
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
    
  }

  return (
    <div className="container mx-auto mt-3">
      <div className="my-3">
        <h1 className="text-4xl text-blue-600 font-bold mb-6">Hi, I am from countries {countries.length}</h1>
        <h3 className="">Total Country Visited {visitedCountries.length} </h3>
        <ol>
            {
                visitedCountries.map(country => <li key={country.cca3}> {country.name.common} </li>)
            }
        </ol>
      </div>

      <div className="bg-blue-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
