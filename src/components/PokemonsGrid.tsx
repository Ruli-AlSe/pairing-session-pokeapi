import clsx from 'clsx';
import { usePokemonStore } from '../hooks';
import { Pagination } from './Pagination';
import { DoubleTapComponent } from './DoubleTapButton';

export const PokemonsGrid = () => {
  const { setActivePokemon, pokemons, totalPages, showPokemonDetails, displayPokemonDetails } =
    usePokemonStore();

  return (
    <div
      className={clsx(
        'col-span-2 flex flex-col bg-white text-black px-2 sm:px-10 mt-2 sm:m-0 sm:rounded-e-3xl sm:max-h-[80vh] max-h-[50vh] overflow-y-scroll',
        {
          'animate-fade-out': displayPokemonDetails,
          'animate-fade-in': !displayPokemonDetails,
        }
      )}
    >
      {pokemons.map((pokemon) => (
        <DoubleTapComponent key={pokemon.url}>
          <div
            key={pokemon.url}
            onClick={() => setActivePokemon(pokemon.url, pokemon.name)}
            onDoubleClick={() => showPokemonDetails(true)}
            className="h-10 flex justify-between items-center shadow-e-md p-3 my-1 rounded-md hover:bg-gray-100 hover:cursor-pointer"
          >
            <span className="capitalize">{pokemon.name}</span>
            <img
              src="/pokemon/black-pokeball.svg"
              alt={`pokeball ${pokemon.name}`}
              className="w-4"
            />
          </div>
        </DoubleTapComponent>
      ))}

      <Pagination totalPages={totalPages} />
    </div>
  );
};
