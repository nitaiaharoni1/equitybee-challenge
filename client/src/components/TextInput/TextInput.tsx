import { ChangeEvent, FC, HTMLInputTypeAttribute, useEffect, useState } from 'react';

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute;
  currency?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  value?: string;
}

export const TextInput: FC<Props> = ({
  className,
  type = 'text',
  currency = '',
  placeholder = '',
  label,
  onChange,
  disabled = false,
  error = false,
  value = '',
}) => {
  const [val, setVal] = useState('');

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value: newValue } = e.target;
    // check if value contains not digits
    if (type === 'number' && newValue.match(/[^0-9]/g)) {
      newValue = newValue.replace(/[^0-9]/g, '');
    }
    setVal(newValue);
    onChange?.(newValue);
  };

  const formattedValue = type === 'number' ? val.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;

  return (
    <div className={`${className} w-full`}>
      {label && <div className='mb-2'>{label}</div>}

      <div className={`border-2 w-full flex px-2 mr-2 items-center ${error ? 'border-red-500' : ''}`}>
        {currency && <div>{currency}</div>}

        <input
          className='w-full p-2 outline-none text-gray-500'
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          value={formattedValue}
        />
      </div>
    </div>
  );
};
