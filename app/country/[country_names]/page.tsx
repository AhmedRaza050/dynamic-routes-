import CountryCard from "../../components/CountryCard";

function CountryName({ params }: { params: { country_names: string } }) {
  const countries: any = {
    pakistan: {
      name: "Pakistan",
      capital: "Islamabad",
      population: "220 million",
      languages: "Urdu",
    },
    india: {
      name: "India",
      capital: "New Delhi",
      population: "1.3 billion",
      languages: "Hindi",
    },
    bangladesh: {
      name: "Bangladesh",
      capital: "Dhaka",
      population: "160 million",
      languages: "Bengali",
    },
    iran: {
      name: "Iran",
      capital: "Tehran",
      population: "80 million",
      languages: "Persian",
    },
    china: {
      name: "China",
      capital: "Beijing",
      population: "1.4 billion",
      languages: "Chinese",
    },
  };

  if (Object.keys(countries).includes(params.country_names)) {
    const country = countries[params.country_names];

    return (
      <CountryCard
        name={country.name}
        capital={country.capital}
        population={country.population}
        languages={country.languages}
      />
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold">Country not found</h1>
      </div>
    );
  }
}

export default CountryName;
