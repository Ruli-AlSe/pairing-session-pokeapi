import { PokemonsGrid } from '../../components';

export const PokemonsPage = () => {
  return (
    <>
      <h1 className="text-xl md:text-3xl text-center sm:text-start sm:m-5 mt-7 font-extrabold">
        Pokémon code challenge
      </h1>
      <hr />

      <PokemonsGrid />
    </>
  );
};
