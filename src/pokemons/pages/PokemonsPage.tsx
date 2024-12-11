import { PokemonImage, PokemonsGrid } from '../../components';

export const PokemonsPage = () => {
  return (
    <>
      <h1 className="text-xl md:text-3xl text-center sm:text-start sm:m-5 mt-7 font-extrabold">
        Pokémon code challenge
      </h1>
      <hr />

      <div className="w-full grid grid-cols-1 sm:grid-cols-3 my-5 sm:gap-1">
        <PokemonImage />
        <PokemonsGrid />
      </div>
    </>
  );
};
