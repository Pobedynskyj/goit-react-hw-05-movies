import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'service/api';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviewFilm, setReviewFilm] = useState([]);

  useEffect(() => {
    movieReviews(movieId)
      .then(({ data }) => setReviewFilm(data.result))
      .catch(error => error);
  }, [movieId]);

  if (!movieId) {
    return;
  }

  return reviewFilm.length > 0 ? (
    <ul>
      {reviewFilm.map(({ content, author, id }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Review isn't found</p>
  );
};

export default ReviewsPage;
