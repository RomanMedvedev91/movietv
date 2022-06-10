import { useContext } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { SearchContext } from '../../context/Search.context';

function Search() {
  const { currentSearchMovies } = useContext(SearchContext);

  return (
    <div>
      Search
      {currentSearchMovies ? <MovieList movies={currentSearchMovies} /> : ''}
    </div>
  );
}

export default Search;
