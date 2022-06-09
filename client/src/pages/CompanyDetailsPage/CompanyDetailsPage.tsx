import { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CompanyDetailsItem } from './components/CompanyDetailsItem';

import { Button } from 'components';
import { CompaniesContext } from 'context';
import { ICompany } from 'types/interfaces/ICompany';

export const CompanyDetailsPage: FC = () => {
  const { companies } = useContext(CompaniesContext);
  const { domain } = useParams();
  const navigate = useNavigate();

  const company = companies.find((comp) => comp.domain === domain) || {} as ICompany;

  const { logo, name, description, industry, moneyRaised, annualRevenue, employeesNum, marketCap, location } = company;

  const items = [
    {
      value: name,
      label: 'Name',
    },
    { value: description,
      label: 'Description',
    },
    { value: industry,
      label: 'Industry',
    },
    { value: moneyRaised,
      label: 'Money Raised',
    },
    { value: annualRevenue,
      label: 'Annual Revenue',
    },
    { value: employeesNum,
      label: 'Number of employees',
    },
    { value: marketCap,
      label: 'Market Cap',
    },
    { value: location,
      label: 'Location',
    },
  ];

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='flex items-center'>
        <Button
          className='mr-3'
          onClick={handleBackClick}
        >
          {'< Back'}
        </Button>

        <h1 className='font-bold text-2xl'>
          Company Details:
        </h1>
      </div>

      <div>

        <div className='border-2 p-3 my-3 w-fit'>

          <div>
            <span className='font-bold mr-2'>
              Logo:
            </span>

            <img className='h-10 w-fit' src={logo} />
          </div>

          {items.map(({ label, value }) => (
            <CompanyDetailsItem
              key={label}
              label={label}
              value={value}
            />
          ))}

        </div>
      </div>

    </div>
  );
};

