import React from "react";

interface CountryCardProps {
  name: string;
  capital: string;
  population: string;
  languages: string;
}

function CountryCard({ name, capital, population, languages }: CountryCardProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Country Name: {name}</h1>
      <h1 className="text-3xl font-bold">Capital: {capital}</h1>
      <h1 className="text-3xl font-bold">Population: {population}</h1>
      <h1 className="text-3xl font-bold">Language: {languages}</h1>
    </div>
  );
}

export default CountryCard;
