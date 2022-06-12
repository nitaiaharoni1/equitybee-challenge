import axios from 'axios';

export const fetchCompany = (domain: string) => axios.get(`/company/${domain}`);
