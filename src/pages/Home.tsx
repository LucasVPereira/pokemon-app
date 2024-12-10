import React, { useState } from 'react';
import { PokemonList } from '../components/PokemonList';
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full max-w-4x1 p-4">
      <SearchBar onChange={(value) => setSearch(value)} />
      <PokemonList search={search} />
    </div>
    </div>
  );
};