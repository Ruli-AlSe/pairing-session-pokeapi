export interface PokemonApiResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonList[];
}

export interface PokemonList {
  name: string;
  url: string;
}
