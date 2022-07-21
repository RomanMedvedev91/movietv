// import { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ movies }) {
  const renderMovieCards = (moviesCards) => {
    console.log('movies', movies);
    // eslint-disable-next-line implicit-arrow-linebreak
    return moviesCards.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  };

  return <Card.Group itemsPerRow={5}>{renderMovieCards(movies)}</Card.Group>;
}

export default MovieList;
