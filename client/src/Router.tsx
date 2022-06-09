import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { constants } from './constants';
import { CompanyDetailsPage, CompaniesPage } from './pages';

export const Router: FC = () => {
  const { home, details } = constants.routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CompaniesPage />} path={home} />

        <Route element={<CompanyDetailsPage />} path={details} />
      </Routes>
    </BrowserRouter>
  );
};
