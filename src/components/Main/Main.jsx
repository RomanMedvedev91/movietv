import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import getData from '../../utilities/getData';

const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

function Main() {
  const [movies, setMovies] = useState([]);

  const renderMovieCards = async () => {
    await getData(topRated).then((res) => setMovies(res));
    console.log('movies', movies);
  };

  return (
    <div>
      Homepage
      <SearchBar movies={movies} setMovies={setMovies} />
      <Button onClick={renderMovieCards}>Top Rated movies</Button>
      {movies ? <MovieList movies={movies} /> : ''}
    </div>
  );
}

export default Main;
