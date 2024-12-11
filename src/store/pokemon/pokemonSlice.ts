import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Pokemon, PokemonList } from '../../interfaces';

export interface PokemonState {
  pokemons: PokemonList[];
  activePokemon: Pokemon | undefined;
}

const initialState: PokemonState = {
  pokemons: [],
  activePokemon: undefined,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    onSetPokemons: (state, { payload }: PayloadAction<PokemonList[]>) => {
      state.pokemons = payload;
    },
    onSetActivePokemon: (state, { payload }: PayloadAction<Pokemon>) => {
      state.activePokemon = payload;
    },
  },
});

export const { onSetPokemons, onSetActivePokemon } = pokemonSlice.actions;
