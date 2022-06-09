import { FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLButtonElement>{
  className?: string;
}

export const Button: FC<Props> = ({ className, children, ...props }) => (
  <button
    className={`${className} border-2 p-2 ${props.disabled ? 'opacity-50' : 'hover:bg-gray-200 cursor-pointer'}`}
    // @ts-ignore
    type='button'
    {...props}
  >
    {children}
  </button>
);
