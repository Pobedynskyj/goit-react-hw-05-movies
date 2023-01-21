import { Suspense } from 'react';

import ClientRoutes from './ClientRoutes';

import Header from './Header';

export const App = () => {
  return (
    <>
      <Header />
      <ClientRoutes />
    </>
  );
};
