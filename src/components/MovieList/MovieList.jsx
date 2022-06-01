import MovieCard from '../MovieCard/MovieCard';

function MovieList({ movies }) {
  // console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
