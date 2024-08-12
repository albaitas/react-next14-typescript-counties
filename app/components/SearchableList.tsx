'use client';

import { Card } from './Card';
import { Search } from './Search';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchableListProps } from '../types';

export const SearchableList: React.FC<SearchableListProps> = ({ countries }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className='container'>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='list'>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString()
              },
              {
                title: 'Region',
                description: c.region
              },
              {
                title: 'Capital',
                description: c.capital ? c.capital[0] : 'N/A'
              }
            ]
          };

          return <Card key={c.name.common} onClick={() => router.push(`/country/${c.name.common}`)} {...countryInfo} />;
        })}
      </div>
    </div>
  );
};
