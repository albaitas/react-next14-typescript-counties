import React from 'react';
import { SearchProps } from '../types';

export const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return <input type='text' className='search-input' placeholder='Search for a country...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />;
};
