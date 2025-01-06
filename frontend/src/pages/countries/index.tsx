import { useQuery } from "@apollo/client";
import Country from "../../components/Country";
import { queryCountries } from "@/graphql/countries";
import { ICountry } from "@/utils/interfaces";
import Header from "@/components/Header";
import AddCountry from "@/components/AddCountry";
import CountryCard from "@/components/CountryCard";

export default function countriesHome() {
  const { data } = useQuery<{ items: ICountry[] }>(queryCountries, {});

  const countries: ICountry[] = data ? data?.items : [];
  console.log("countries");
  console.log(countries);
  console.log("ok");

  return (
    <>
      <div>
        <h1>Add a new country</h1>
        <AddCountry />
      </div>
      <div>
        <h2>All Countries</h2>
        <div className="countries-div">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}
