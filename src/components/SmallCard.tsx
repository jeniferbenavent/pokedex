import "../styles/SmallCard.css";
import { usePokemonAPI } from "../hooks/usePokemonAPI";
import { Type } from "./Type";
import { Pagination } from "./Pagination";

export const SmallCard = ({ name }: { name: string }) => {
  const { pokemonList, currentPage, setCurrentPage, isLoading } = usePokemonAPI(name);

  return (
    <>
      <section className="container">
        {isLoading ? (
          <img src="/assets/icons/pokeball.png" alt="Loading..." className="rotate-image" width={30}/>
        ) : (
          <div className="grid-container">
            {pokemonList.map((pokemon, index: number) => (
              <div key={index} className="pokeCard">
                <div key={pokemon.number} className="pokeInfo">
                  <img src={pokemon.image} alt={pokemon.name} className="pokeImg" />
                  <p className="pokeNumber">Nº{pokemon.number}</p>
                  <p className="pokeName">{pokemon.name}</p>
                  <Type type={pokemon.types.join(", ")} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {isLoading ?
        <span></span> :
        <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
      }
    </>
  );
};
