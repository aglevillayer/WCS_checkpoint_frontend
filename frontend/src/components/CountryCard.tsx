import { ICountry } from "@/utils/interfaces";

export default function CountryCard({ country }: { country: ICountry }) {
  return (
    <div className="country-card">
      <h3>{country.name}</h3>
      <p>{country.emoji}</p>
    </div>
  );
}
