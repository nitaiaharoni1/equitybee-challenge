import { createContext } from 'react';

import { ICompany } from 'types/interfaces/ICompany';

interface ICompaniesContext {
  getCompany: (domain: string) => void;
  companies: ICompany[];
}

export const CompaniesContext = createContext<ICompaniesContext>({
  getCompany: () => {},
  companies: [],
});
