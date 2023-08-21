import { usePokemonAPI } from "../hooks/usePokemonAPI";
import "../styles/SmallCard.css"
import { Type } from "./Type";

export const SmallCard = () => {

  const { pokemonList } = usePokemonAPI();

  return (
    <section className="container">
      <div className="grid-container">
          {pokemonList.map((pokemon) => (
            <div className="pokeCard">
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
  );
}
