import { Link, useParams, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import s from './OneFilmPage.module.css';
import { movieInfo } from 'service/api';
import { useEffect, useState, Suspense } from 'react';

const OneFilmPage = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const { filmId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!filmId) {
      return;
    }
    movieInfo(filmId).then(setCurrentFilm);
  }, [filmId]);
  if (!currentFilm) {
    return;
  }
  const getActive = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  return (
    <>
      <Link to="/">Go back</Link>
    </>
  );
};

export default OneFilmPage;
