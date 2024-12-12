import { PokemonImage, PokemonsGrid, PokemonsPageSkeleton } from '../../components';
import { usePokemonStore } from '../../hooks';

export const PokemonsPage = () => {
  const { activePokemon, message, pokemons } = usePokemonStore();

  if (pokemons.length === 0) {
    return <PokemonsPageSkeleton />;
  }

  return (
    <>
      <h1 className="text-xl md:text-3xl text-center sm:text-start sm:m-5 mt-7 font-extrabold">
        Pokémon code challenge
      </h1>
      <hr />

      <div className="w-full grid grid-cols-1 sm:grid-cols-3 my-5 sm:gap-1">
        <PokemonImage activePokemon={activePokemon} message={message} />
        <PokemonsGrid />
      </div>
    </>
  );
};
