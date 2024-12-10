import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { AvatarFallback } from './AvatarFallback';

export const PokemonList = ({ search }: { search: string }) => {
  const { data, isLoading, isError } = usePokemon();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load Pokémon data.</p>;

  // Verifique se 'data' é um array válido antes de chamar .map
  const filteredData = data && Array.isArray(data) ? 
    data.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {filteredData.length > 0 ? (
        filteredData.map((pokemon) => (
          <div key={pokemon.name} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
            <AvatarFallback name={pokemon.name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} />
            <p className="mt-2 font-semibold capitalize">{pokemon.name}</p>

            {/* Exibindo as habilidades como badges */}
            <div className="mt-2 flex gap-2">
              {pokemon.abilities?.map((ability, index) => (
                <span key={index} className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm">
                  {ability.ability.name}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No Pokémon found</p> // Mensagem de fallback caso não haja dados
      )}
    </div>
  );
};