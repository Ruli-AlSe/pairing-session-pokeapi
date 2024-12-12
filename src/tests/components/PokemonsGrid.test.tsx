import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { pokemonsArray } from '../fixtures/data/pokemons';
import { pokemonSlice, PokemonState } from '../../store';
import { PokemonsGrid } from '../../components';
import { pokemonsApiResponse } from '../fixtures/pokemonFixtures';

window.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(pokemonsApiResponse),
  })
) as jest.Mock;

describe('Testing PokemonsGrid component', () => {
  let store: ReturnType<typeof configureStore>;

  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

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

  test('should have 20 pokemons listed', async () => {
    await waitFor(() =>
      render(
        <MemoryRouter>
          <Provider store={store}>
            <PokemonsGrid />
          </Provider>
        </MemoryRouter>
      )
    );

    expect(screen.getAllByRole('img').length).toBe(20);
  });

  test('should set activePokemon when click in a row', async () => {
    await waitFor(() =>
      render(
        <MemoryRouter>
          <Provider store={store}>
            <PokemonsGrid />
          </Provider>
        </MemoryRouter>
      )
    );

    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(pokemonsArray[0]),
      })
    ) as jest.Mock;

    act(() => {
      fireEvent.click(screen.getByLabelText(pokemonsApiResponse.results[0].url));
    });

    setTimeout(() => {
      const activePokemon = (store.getState() as PokemonState).activePokemon;

      expect(activePokemon).toEqual(pokemonsArray[0]);
    }, 100);
  });
});
