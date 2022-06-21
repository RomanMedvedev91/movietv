import { Card } from 'semantic-ui-react';

function MovieCardNoDetails({ movie }) {
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Card
      raised
      image={movie.poster_path ? `${tmdbPosterPath + movie.poster_path}` : '/img-placeholder.jpg'}
    />
  );
}

export default MovieCardNoDetails;
