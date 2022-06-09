import axios from 'axios';

// export const fetchCompany = (domain: string): Promise<ICompany> | undefined => axios.get(`/companies/${domain}`);
export const fetchCompany = async (domain: string) => {
  const res = await axios.get(`https://company.clearbit.com/v2/companies/find?domain=${domain}`, {
    headers: {
      Authorization: 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49',
    },
  });
  if (!res) {
    console.error('Error fetching company');
    return undefined;
  }
  return res.data;
};
