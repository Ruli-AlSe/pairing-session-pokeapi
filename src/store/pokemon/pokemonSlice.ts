import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Pokemon, PokemonList } from '../../interfaces';

export interface PokemonState {
  pokemons: PokemonList[];
  activePokemon: Pokemon | undefined;
  message: string;
  pokeApiPage: number;
}

const initialState: PokemonState = {
  pokemons: [],
  activePokemon: undefined,
  message: 'Select a pokémon',
  pokeApiPage: 0,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    onSetPokemons: (
      state,
      { payload }: PayloadAction<{ pokemons: PokemonList[]; currentPage: number }>
    ) => {
      state.pokemons = payload.pokemons;
      state.pokeApiPage = payload.currentPage;
    },
    onSetActivePokemon: (state, { payload }: PayloadAction<Pokemon | undefined>) => {
      state.activePokemon = payload;
    },
    onUpdateMessage: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
  },
});

export const { onSetPokemons, onSetActivePokemon, onUpdateMessage } = pokemonSlice.actions;
