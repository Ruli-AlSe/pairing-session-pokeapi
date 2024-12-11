import { Navigate, Route, Routes } from 'react-router-dom';
import { PokemonsPage } from '../pokemons';
import { SecondPage } from '../page-two';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonsPage />} />
      <Route path="/second-page" element={<SecondPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
