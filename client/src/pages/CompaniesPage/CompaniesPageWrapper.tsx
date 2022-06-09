import { FC } from 'react';

import { CompaniesPage } from './CompaniesPage';

import { CompaniesProvider } from 'context';

export const CompaniesPageWrapper: FC = () => (
  <CompaniesProvider>
    <CompaniesPage />
  </CompaniesProvider>
);
