import "../styles/SmallCard.css"
import { usePokemonAPI } from "../hooks/usePokemonAPI";
import { Type } from "./Type";
import { Pagination } from "./Pagination";

export const SmallCard = () => {

  const { pokemonList, currentPage, setCurrentPage } = usePokemonAPI();

  return (
    <>
      <section className="container">
        <div className="grid-container">
            {pokemonList.map((pokemon, index: number) => (
              <div key={index} className="pokeCard">
                <div key={pokemon.number} className="pokeInfo">
                  <img src={pokemon.image} alt={pokemon.name} className="pokeImg"/>
                  <p className="pokeNumber">Nº{pokemon.number}</p>
                  <p className="pokeName">{pokemon.name}</p>
                  <Type type={pokemon.types.join(', ')}/>
                </div>
              </div>
            ))}
        </div>
      </section>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
}
