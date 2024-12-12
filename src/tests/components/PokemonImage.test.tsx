import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { pokemonsArray } from '../fixtures/data/pokemons';
import { pokemonSlice } from '../../store';
import { pokemonsApiResponse } from '../fixtures/pokemonFixtures';
import { PokemonsPage } from '../../pokemons';

window.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(pokemonsApiResponse),
  })
) as jest.Mock;

describe('Testing PokemonImage component', () => {
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

  test('should have a text when no active pokemon', async () => {
    await waitFor(() =>
      render(
        <MemoryRouter>
          <Provider store={store}>
            <PokemonsPage />
          </Provider>
        </MemoryRouter>
      )
    );

    const elem = await screen.findByText('Select a pokémon');

    expect(elem).toBeInTheDocument();
    // screen.debug();
  });

  test('should display pokemon image when an activePokemon exists', async () => {
    await waitFor(() =>
      render(
        <MemoryRouter>
          <Provider store={store}>
            <PokemonsPage />
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

    await new Promise((resolved) => {
      setTimeout(() => {
        resolved(true);
      }, 100);
    }).then(() => {
      expect(screen.getByLabelText('pokemon image')).toBeInTheDocument();
    });
  });
});
