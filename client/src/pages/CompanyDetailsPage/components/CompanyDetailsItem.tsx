import { FC } from 'react';

interface Props {
  label: string;
  value?: string | number;
}

export const CompanyDetailsItem: FC<Props> = ({ label, value }) => {
  if (!value) return null;

  return (
    <div>
      <span className='font-bold mr-2'>
        {`${label}:`}
      </span>

      {value}
    </div>
  );
};

