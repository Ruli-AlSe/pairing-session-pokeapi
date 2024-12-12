import { memo } from 'react';
import { Pokemon } from '../interfaces';

interface Props {
  activePokemon?: Pokemon;
  message: string;
}

export const PokemonImage = memo(({ activePokemon, message }: Props) => {
  return (
    <div className="h-auto col-span-1 flex items-center flex-col px-10 bg-white sm:rounded-s-3xl">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="pokeapi-logo"
        className="my-10 sm:mt-20 sm:mb-0"
      />

      <div className="h-[20vh] sm:h-full flex justify-center items-center">
        {activePokemon ? (
          <img
            src={activePokemon.sprites.front_default}
            alt={activePokemon.sprites.back_default}
            className="w-32 animate-fade-in"
          />
        ) : (
          <p className="font-bold text-gray-800 antialiased text-xl">{message}</p>
        )}
      </div>
    </div>
  );
});
