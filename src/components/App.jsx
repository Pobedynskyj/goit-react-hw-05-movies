import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import OneFilmPage from 'pages/OneFilmPage';

import { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import ClientRoutes from './ClientRoutes';

import Layout from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Outlet />}>
            <Route index element={<MoviesPage />} />
            <Route path=":moviesId" element={<OneFilmPage />} />
          </Route>
        </Route>
      </Routes>

      <ClientRoutes />
    </>
  );
};
