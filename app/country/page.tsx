import Link from "next/link";


function CountryPage() {
    return (
        <div>
            <h1 className="text-3xl font-extrabold"> Welcome to the  Country page </h1>
            <ul>
                <li className="text-1xl font-bold"><Link href="/country/[country_names]" as="/country/pakistan">PAKISTAN</Link></li>
                <li className="text-1xl font-bold"><Link href="/country/[country_names]" as="/country/india">INDIA</Link></li>
                <li className="text-1xl font-bold"><Link href="/country/[country_names]" as="/country/bangladesh">BANGLADESH</Link></li>
                <li className="text-1xl font-bold"><Link href="/country/[country_names]" as="/country/iran">IRAN</Link></li>
                <li className="text-1xl font-bold"><Link href="/country/[country_names]" as="/country/china">CHINA</Link></li>
            </ul> 
        </div>
    );
}
export default CountryPage