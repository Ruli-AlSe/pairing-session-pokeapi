import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import { usePokemonStore } from '../../hooks';
import { pokemonSlice } from '../../store';
import { pokemonsApiResponse } from '../fixtures/pokemonFixtures';

// Mock fetch API

window.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(pokemonsApiResponse),
  })
) as jest.Mock;

describe('Testing usePokemonStore hook', () => {
  let store: ReturnType<typeof configureStore>;

  beforeAll(() => jest.spyOn(console, 'warn').mockImplementation(() => {}));

  beforeEach(() => {
    // Create an independent store
    store = configureStore({
      reducer: {
        pokemon: pokemonSlice.reducer,
      },
    });

    // Clean mocks before each test
    jest.clearAllMocks();
  });

  test('should fetch data and update the store', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );

    const { result } = renderHook(() => usePokemonStore(), { wrapper });

    // Check initial hooks state
    act(() => {
      expect(result.current).toStrictEqual({
        activePokemon: undefined,
        displayPokemonDetails: false,
        message: 'Select a pokémon',
        pokemons: [],
        setActivePokemon: result.current.setActivePokemon,
        showPokemonDetails: result.current.showPokemonDetails,
        totalPages: 8,
      });
    });

    // Wait for the hook to fetch data
    await waitFor(() => {
      expect(result.current.pokemons).toEqual(pokemonsApiResponse.results);
      expect(result.current.pokemons.length).toEqual(20);
    });
  });

  test('should handle fetch error gracefully', async () => {
    // Mock and error in API
    window.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );

    const { result } = renderHook(() => usePokemonStore(), { wrapper });

    // Wait for the hook hanling the error
    await waitFor(() => {
      expect(result.current.pokemons).toEqual([]);
    });
  });
});
