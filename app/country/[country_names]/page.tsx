function CountryName({params}: {params: {country_names: string}}) {
    const countries:any={
        pakistan:{
            name: "Pakistan",
            capital: "Islamabad",
            population: "220 million",
            languages: "Urdu"
        },
        india:{
            name: "India",
            capital: "New delhi",
            population: "1.3 billion",
            languages: "Hindi"
        },
        bangladesh:{
            name: "Bangladesh",
            capital: "Dhaka",
            population: "160 million",
            languages: "Bangli"
        },
        iran:{
            name: "Iran",
            capital: "Tehran",
            population: "80 million",
            languages: "Persian"
        },
        china:{
            name: "China",
            capital: "Beijing",
            population: "1.4 billion",
            languages: "Chinese"
        }
    }
    if(Object.keys(countries).includes(params.country_names)) {
        return (
            <div>
                <h1 className="text-3xl font-bold"> Country Name : {countries[params.country_names].name}</h1>
                <h1 className="text-3xl font-bold">Capital : {countries[params.country_names].capital}</h1>
                <h1 className="text-3xl font-bold">Population : {countries[params.country_names].population}</h1>
                <h1 className="text-3xl font-bold">Language: {countries[params.country_names].languages}</h1>
            </div>
        )    
    }  else {
        return (
            <div>
                <h1>Counntry not found</h1>
            </div>
        )
    }
    
}
export default CountryName