import { SearchableList } from './components/SearchableList';

export default async function Home() {
  let countries = [];

  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region');
    if (!res.ok) {
      throw new Error(`Failed to fetch countries: ${res.status}`);
    }
    countries = await res.json();
  } catch (error) {
    console.error('Error fetching countries:', error);
  }

  return (
    <div>
      <SearchableList countries={countries} />
    </div>
  );
}
