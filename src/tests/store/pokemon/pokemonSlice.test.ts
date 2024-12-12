import {
  onDisplayPokemonDetails,
  onSetActivePokemon,
  onSetPokemons,
  onUpdateMessage,
  pokemonSlice,
} from '../../../store';
import { pokemonsArray, pokemonsList } from '../../fixtures/data/pokemons';
import { initialState } from '../../fixtures/pokemonFixtures';

describe('Testing pokemonSlice', () => {
  test('should return initial state', () => {
    const state = pokemonSlice.reducer(initialState, {
      type: '',
    });

    expect(pokemonSlice.name).toBe('pokemon');
    expect(state).toMatchObject(initialState);
  });

  test('should store pokemons sent in payload', () => {
    const state = pokemonSlice.reducer(
      initialState,
      onSetPokemons({ pokemons: pokemonsList, currentPage: 1 })
    );

    expect(state).toMatchObject({
      ...initialState,
      pokeApiPage: 1,
      pokemons: pokemonsList,
    });
  });

  test('should update message', () => {
    const state = pokemonSlice.reducer(initialState, onUpdateMessage('Pokemon not found'));

    expect(state).toMatchObject({
      ...initialState,
      message: 'Pokemon not found',
    });
  });

  test('should update active pokemon', () => {
    const state = pokemonSlice.reducer(initialState, onSetActivePokemon(pokemonsArray[0]));

    expect(state).toMatchObject({
      ...initialState,
      activePokemon: pokemonsArray[0],
    });
  });

  test('should update "displayPokemonDetails" to true', () => {
    const state = pokemonSlice.reducer(initialState, onDisplayPokemonDetails(true));

    expect(state).toMatchObject({
      ...initialState,
      displayPokemonDetails: true,
    });
  });
});
