import clsx from 'clsx';
import { usePokemonStore } from '../hooks';
import { Stats } from './Stats';

export const PokemonDetails = () => {
  const { showPokemonDetails, displayPokemonDetails, activePokemon } = usePokemonStore();
  if (!activePokemon) {
    return <></>;
  }

  const { id, abilities, name, weight, height, stats, types } = activePokemon;

  return (
    <div
      className={clsx(
        'w-full mt-2 sm:m-0 flex flex-col bg-white col-span-2 h-[80vh] animate-fade-in',
        {
          'animate-fade-out': !displayPokemonDetails,
          'animate-fade-in': displayPokemonDetails,
        }
      )}
    >
      <button
        className="w-fit bg-white text-gray-800 hover:bg-gray-200 transition-all duration-200 ml-1 mt-4 text-base px-3 py-1 rounded-xl"
        onClick={() => showPokemonDetails(false)}
      >
        Go back
      </button>

      <p className="text-center font-bold mt-10">Type</p>
      <p className="text-center font-bold">{types[0].type.name}</p>

      <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-around mt-10 px-5">
        <p className="sm:text-center font-bold">Number: {id}</p>
        <p className="sm:text-center font-bold capitalize">Name: {name}</p>
        <p className="sm:text-center font-bold">Height: {height}</p>
        <p className="sm:text-center font-bold">weight: {weight}</p>
      </div>

      <div className="w-full mt-10 px-5 grid grid-cols-1 lg:grid-cols-2">
        <Stats stats={stats} />

        <div className="w-full flex flex-col sm:items-center mt-16">
          <p className="sm:text-center font-bold mb-5">Abilities</p>
          {abilities.map((a) => (
            <p key={a.ability.name} className="sm:text-center font-bold capitalize">
              {a.ability.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
