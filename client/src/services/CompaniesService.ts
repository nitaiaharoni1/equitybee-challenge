import axios from 'axios';

import { ICompany } from '../types/interfaces/ICompany';

export const fetchCompany = (domain: string): Promise<ICompany> | undefined => axios.get(`/companies/${domain}`);
