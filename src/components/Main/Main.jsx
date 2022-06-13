import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import getData from '../../utilities/getData';
import topRatedMovieUrl from '../../constants/apiUrls';

function Main() {
  const [movies, setMovies] = useState([]);

  const renderMovieCards = async () => {
    const res = await getData(topRatedMovieUrl);
    setMovies(res);
  };

  return (
    <div>
      Homepage
      <SearchBar />
      <Button onClick={renderMovieCards}>Top Rated movies</Button>
      {movies ? <MovieList movies={movies} /> : ''}
    </div>
  );
}

export default Main;
