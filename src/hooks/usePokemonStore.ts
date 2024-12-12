import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  onDisplayPokemonDetails,
  onSetActivePokemon,
  onSetPokemons,
  onUpdateMessage,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { PokemonApiResponse } from '../interfaces';

export const usePokemonStore = () => {
  const { pokemons, activePokemon, message, pokeApiPage, displayPokemonDetails } = useAppSelector(
    (state) => state.pokemon
  );
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const maxPokemons = 150;
  const limit = 20;
  const totalPages = Math.ceil(maxPokemons / limit);

  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;
  if (currentPage < 1) navigate('/?page=1');
  if (currentPage > totalPages) navigate(`/?page=${totalPages}`);

  useEffect(() => {
    if (pokemons.length === 0 || pokeApiPage !== currentPage) {
      fetchPokemons();
    }
  }, [pokemons, currentPage]);

  const setActivePokemon = async (url: string, pokemonName: string) => {
    if (pokemonName === activePokemon?.name) return;

    dispatch(onSetActivePokemon(undefined));
    const pokemon = await fetch(url).then((res) => res.json());

    if (!pokemon) {
      dispatch(onUpdateMessage('Pokémon failed to load'));
      return;
    }

    dispatch(onSetActivePokemon(pokemon));
    localStorage.setItem('active-pokemon', JSON.stringify(pokemon));
  };

  const fetchPokemons = async () => {
    const offset = currentPage === 1 ? 0 : (currentPage - 1) * limit;
    const lastLimit = currentPage * limit >= 150 ? 150 - offset : limit;

    try {
      const pokemonsFetched: PokemonApiResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${lastLimit}&offset=${offset}`
      ).then((res) => res.json());

      if (pokemonsFetched) {
        dispatch(onSetPokemons({ pokemons: pokemonsFetched.results, currentPage }));
      }

      const pokemonStored = localStorage.getItem('active-pokemon');
      if (pokemonStored) {
        const parsedPokemon = JSON.parse(pokemonStored);
        dispatch(onSetActivePokemon(parsedPokemon));
      }
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  const showPokemonDetails = (value: boolean) => {
    dispatch(onDisplayPokemonDetails(value));
  };

  return {
    //* Properties
    pokemons,
    activePokemon,
    message,
    totalPages,
    displayPokemonDetails,
    //* Methods
    setActivePokemon,
    showPokemonDetails,
  };
};
