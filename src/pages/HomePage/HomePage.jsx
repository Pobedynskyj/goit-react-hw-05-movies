import { trendingMovies } from 'service/api';
import { useEffect, useState } from 'react';
import FilmList from 'components/FilmList';
import s from './HomePage.module.css';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    trendingMovies().then(setFilms);
  }, []);

  if (!films.length) {
    return;
  }
  return (
    <>
      <h1 className={s.homeTitle}>Trending movies today</h1>
      <FilmList options={films} />
    </>
  );
};

export default HomePage;
