import { FC } from 'react';

import { Providers } from './Providers';

import { Router } from 'Router';

export const App: FC = () => (
  <div className='m-16'>
    <Providers>
      <Router />
    </Providers>
  </div>
);
