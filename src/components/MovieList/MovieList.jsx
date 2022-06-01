import { Card } from 'semantic-ui-react';
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ movies }) {
  // console.log(movies);
  return (
    <Card.Group>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Card.Group>
  );
}

export default MovieList;
