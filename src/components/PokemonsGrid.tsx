import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePokemonStore } from '../hooks';
import { PokemonsPageSkeleton } from '../pokemons';
import { Pagination } from './Pagination';

export const PokemonsGrid = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const totalPages = 8;

  const pageString = searchParams.get('page') ?? 1;
  let currentPage = isNaN(+pageString) ? 1 : +pageString;
  if (currentPage <= 1) currentPage = 1;
  if (currentPage > totalPages) navigate('/', { replace: true });

  const { setActivePokemon, pokemons: pokemonsList } = usePokemonStore(currentPage);

  if (pokemonsList.length === 0) {
    return <PokemonsPageSkeleton />;
  }

  return (
    <div className="col-span-2 flex flex-col bg-white text-black px-2 sm:px-10 mt-2 sm:m-0 sm:rounded-e-3xl sm:max-h-fit max-h-[50vh] overflow-y-scroll">
      {pokemonsList.map((pokemon) => (
        <div
          key={pokemon.url}
          onClick={() => setActivePokemon(pokemon.url, pokemon.name)}
          className="h-6 flex justify-between items-center shadow-e-md p-3 my-1 rounded-md hover:bg-gray-100 hover:cursor-pointer"
        >
          <span className="capitalize text-[0.6rem]">{pokemon.name}</span>
          <img src="/pokemon/black-pokeball.svg" alt={`pokeball ${pokemon.name}`} className="w-4" />
        </div>
      ))}

      <Pagination totalPages={totalPages} />
    </div>
  );
};
