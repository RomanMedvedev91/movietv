import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../RenderMovies/MovieList';
import getData from '../../utilities/getData';

function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData().then((res) => setMovies(res));
    // console.log('movies', movies);
  }, []);
  return (
    <div>
      Homepage
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default Homepage;
