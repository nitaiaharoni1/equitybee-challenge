import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { constants } from './constants';

import { CompaniesPageWrapper } from 'pages';

export const Router: FC = () => {
  const { home } = constants.routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CompaniesPageWrapper />} path={home} />
      </Routes>
    </BrowserRouter>
  );
};
