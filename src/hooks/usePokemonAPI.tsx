import { Pokemon, Results, Types } from "../interfaces/Pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonAPI = () => {
    
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const results = response.data.results;

        const pokemonDataPromises = results.map(async (result: Results) => {
          const pokemonResponse = await axios.get(result.url);
          const types = pokemonResponse.data.types.map((typeInfo: Types) => typeInfo.type.name);

          return {
            number: pokemonResponse.data.id,
            name: result.name,
            types: types,
            image: pokemonResponse.data.sprites.front_default,
          };
        });

        const pokemonData = await Promise.all(pokemonDataPromises);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error al imprimir los Pokémon:', error);
      }
    }

    fetchPokemonData();

  }, []);

  return { pokemonList }
}
