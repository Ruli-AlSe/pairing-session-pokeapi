import { usePokemonStore } from '../hooks';
import { PokemonsPageSkeleton } from '../pokemons';
import { PokemonImage } from './PokemonImage';

export const PokemonsGrid = () => {
  const { setActivePokemon, pokemons: pokemonsList } = usePokemonStore();

  if (pokemonsList.length === 0) {
    return <PokemonsPageSkeleton />;
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 my-5 sm:gap-1">
      <PokemonImage />
      <div className="col-span-2 flex flex-col bg-white text-black px-2 sm:px-10 mt-2 sm:m-0 sm:rounded-e-3xl sm:max-h-fit max-h-[50vh] overflow-y-scroll">
        {pokemonsList.map((pokemon) => (
          <div
            key={pokemon.url}
            onClick={() => setActivePokemon(pokemon.url, pokemon.name)}
            className="h-6 flex justify-between items-center shadow-e-md p-3 my-1 rounded-md hover:bg-gray-100 hover:cursor-pointer"
          >
            <span className="capitalize text-[0.6rem]">{pokemon.name}</span>
            <img
              src="/pokemon/black-pokeball.svg"
              alt={`pokeball ${pokemon.name}`}
              className="w-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
