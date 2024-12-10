import { Navigate, Route, Routes } from 'react-router-dom';
import { FirstPage } from '../page-one';
import { SecondPage } from '../page-two';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/second-page" element={<SecondPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
