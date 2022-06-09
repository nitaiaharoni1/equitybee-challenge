import { uniqBy } from 'lodash';
import { FC, useState } from 'react';

import { CompaniesContext } from './CompaniesContext';

import { fetchCompany } from 'services/CompaniesService';
import { ICompany } from 'types/interfaces/ICompany';

export const CompaniesProvider: FC = ({ children }) => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const getCompany = async (domain: string) => {
    const res = await fetchCompany(domain);
    setCompanies((prevComps) => uniqBy([...prevComps, res], 'domain'));
  };

  const value = {
    getCompany,
    companies,
  };

  return (
    <CompaniesContext.Provider value={value}>
      {children}
    </CompaniesContext.Provider>
  );
};

