import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import HomePage from 'pages/HomePage';
import OneFilmPage from 'pages/OneFilmPage';
import CastPage from 'pages/CastPage';
import ReviewsPage from 'pages/ReviewsPage';
import MoviesPage from 'pages/MoviesPages/MoviesPage';

const ClientRoutes = () => {
  return (
    <Suspense fallback={<Oval />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:filmId" element={<OneFilmPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="/movies/>" element={<MoviesPage />} />
      </Routes>
    </Suspense>
  );
};

export default ClientRoutes;
