import { useContext } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { SearchContext } from '../../context/Search.context';
import SearchBar from '../../components/SearchBar/SearchBar';

function Search() {
  const { currentSearchMovies } = useContext(SearchContext);

  return (
    <div>
      Search
      <div>
        <SearchBar />
      </div>
      {currentSearchMovies ? <MovieList movies={currentSearchMovies} /> : ''}
    </div>
  );
}

export default Search;
