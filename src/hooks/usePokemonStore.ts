import { useEffect } from 'react';
import {
  onSetActivePokemon,
  onSetPokemons,
  onUpdateMessage,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { PokemonApiResponse } from '../interfaces';

export const usePokemonStore = (currentPage = 1, limit = 20) => {
  const { pokemons, activePokemon, message } = useAppSelector((state) => state.pokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchPokemons();
    }
  }, [pokemons]);

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
        dispatch(onSetPokemons(pokemonsFetched.results));
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

  return {
    //* Properties
    pokemons,
    activePokemon,
    message,
    //* Methods
    setActivePokemon,
  };
};
