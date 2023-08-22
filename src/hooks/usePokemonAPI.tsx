import { Pokemon, Results, Types } from "../interfaces/Pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonAPI = (nameSearched:string) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const resultsPerPage = 21;

  async function fetchPokemonData(page: number) {
    try {
      setIsLoading(true);
      const endpoint = nameSearched
      ? `https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0`
        : `https://pokeapi.co/api/v2/pokemon?limit=${resultsPerPage}&offset=${(page - 1) * resultsPerPage}`;

      const response = await axios.get(endpoint);
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

      if (nameSearched) {
        const filteredPokemonList = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(nameSearched.toLowerCase()));
        setPokemonList(filteredPokemonList);
        
      }else{
        setPokemonList(pokemonData);
      }
      setIsLoading(false);

    } catch (error) {
      console.error('Error al imprimir los Pokémon:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonData(currentPage);
  }, [currentPage,nameSearched]);

  return { pokemonList, currentPage, setCurrentPage, isLoading }; // Devolvemos el estado de isLoading
}
