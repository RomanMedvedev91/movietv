import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { SearchContext } from '../../context/Search.context';
import SearchBar from '../../components/SearchBar/SearchBar';

import getData from '../../utilities/getData';
import getSearchMovieUrl from '../../utilities/helperFunctions';

function Search() {
  const [isLoading, setIsLoading] = useState(false);

  const { query } = useParams();
  const { currentSearch, currentSearchMovies, setSearchMovies } = useContext(SearchContext);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const searchUrl = getSearchMovieUrl(query || currentSearch);
      const res = await getData(searchUrl);
      setSearchMovies(res.results);
      setIsLoading(false);
    };
    loadMovies();
  }, [currentSearch, query, setSearchMovies]);

  return (
    <div>
      Search
      <div>
        <SearchBar />
      </div>
      {isLoading ? <h4>loadiing</h4> : ''}
      {currentSearchMovies ? <MovieList movies={currentSearchMovies} category="movies" /> : ''}
    </div>
  );
}

export default Search;
