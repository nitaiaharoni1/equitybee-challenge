import { FC } from 'react';

import { ICompany } from 'types/interfaces/ICompany';

interface Props{
  company: ICompany;
}

export const CompanyItem: FC<Props> = ({ company }) => {
  const { name, logo, type } = company;

  return (
    <div className='border-2 p-3 my-3 w-fit hover:bg-gray-200 cursor-pointer'>
      <div>
        <span className='font-bold mr-2'>
          Name:
        </span>

        {name}
      </div>

      <div>
        <span className='font-bold mr-2'>
          Logo:
        </span>

        <img className='h-10 w-fit' src={logo} />
      </div>

      <div>
        <span className='font-bold mr-2'>
          Type:
        </span>

        {type}
      </div>
    </div>
  );
};

