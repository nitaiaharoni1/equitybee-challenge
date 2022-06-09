import { FC, FormEvent, useContext, useState } from 'react';

import { CompanyItem } from './components/CompanyItem';

import { Button, TextInput } from 'components';
import { CompaniesContext } from 'context';
import { isValidDomain } from 'utils/functions/isValidDomain';

export const CompaniesPage: FC = () => {
  const { getCompany, companies } = useContext(CompaniesContext);
  const [input, setInput] = useState('');

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCompany(input);
    setInput('');
  };

  const isValid = isValidDomain(input);

  return (
    <div>
      <h1 className='font-bold text-2xl'>
        Companies List
      </h1>

      <div>
        <form
          className='flex'
          onSubmit={handleSubmit}
        >
          <TextInput
            className='w-60 mr-3'
            error={!isValid && input.length > 0}
            onChange={handleInputChange}
            placeholder='Choose a company domain'
            value={input}
          />

          <Button
            disabled={!isValid}
            type='submit'
          >
            Submit
          </Button>
        </form>

        <div>
          {companies.map((company) => (
            <CompanyItem
              key={company.domain}
              company={company}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

