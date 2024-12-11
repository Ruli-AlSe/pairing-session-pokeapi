import { useEffect } from 'react';
import {
  onSetActivePokemon,
  onSetPokemons,
  onUpdateMessage,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { PokemonApiResponse } from '../interfaces';

export const usePokemonStore = (limit = 20, offset = 0, maxPokemons = 150) => {
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
  };

  const fetchPokemons = async () => {
    if (offset >= maxPokemons) {
      return;
    }

    try {
      const pokemonsFetched: PokemonApiResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      ).then((res) => res.json());

      if (pokemonsFetched) {
        dispatch(onSetPokemons(pokemonsFetched.results));
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
