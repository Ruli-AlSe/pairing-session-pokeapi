import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Pokemon, PokemonList } from '../../interfaces';

export interface PokemonState {
  pokemons: PokemonList[];
  activePokemon: Pokemon | undefined;
  message: string;
}

const initialState: PokemonState = {
  pokemons: [],
  activePokemon: undefined,
  message: 'Select a pokémon',
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    onSetPokemons: (state, { payload }: PayloadAction<PokemonList[]>) => {
      state.pokemons = payload;
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
