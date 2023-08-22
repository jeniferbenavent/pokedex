import { Pokemon, Results, Types } from "../interfaces/Pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonAPI = () => {
    
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20;

    async function fetchPokemonData(page: number) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${resultsPerPage}&offset=${(page - 1) * resultsPerPage}`);
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

    useEffect(() => {
      fetchPokemonData(currentPage);
    }, [currentPage]);

  return { pokemonList, currentPage, setCurrentPage, }
}
