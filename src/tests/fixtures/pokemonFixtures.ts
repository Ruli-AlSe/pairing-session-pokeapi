export const initialState = {
  pokemons: [],
  activePokemon: undefined,
  message: 'Select a pokémon',
  pokeApiPage: 0,
  displayPokemonDetails: false,
};

export const pokemonsApiResponse = {
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
    },
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/7/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/8/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/9/',
    },
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/10/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/11/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/12/',
    },
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/13/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/14/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/15/',
    },
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/16/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/17/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/18/',
    },
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/19/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/20/',
    },
  ],
};
