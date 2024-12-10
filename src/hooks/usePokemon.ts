import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Definição do tipo Pokemon
export interface Pokemon {
  name: string;
  url: string;
  abilities?: { ability: { name: string } }[];
}

export const usePokemon = () => {
  return useQuery<Pokemon[], Error>({
    queryKey: ['pokemons'], // Adicionando queryKey explicitamente
    queryFn: async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      return response.data.results as Pokemon[];
    },
  });
};