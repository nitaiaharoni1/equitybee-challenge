import { FC } from 'react';

import { CompaniesProvider } from './context';

export const Providers: FC = ({ children }) => (
  <CompaniesProvider>
    {children}
  </CompaniesProvider>
);
