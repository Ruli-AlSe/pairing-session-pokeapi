import { Navigate, Route, Routes } from 'react-router-dom';
import { PokemonsPage } from '../pokemons';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonsPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
