/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// import { useLocation, useParams, useSearchParams } from 'react-router-dom';
// import MovieList from '../../components/MovieList/MovieList';
// import { SearchContext } from '../../context/Search.context';
import SearchBar from '../../components/SearchBar/SearchBar';

import getData from '../../utilities/getData';
import { getSearchMovieUrl } from '../../constants/apiUrls';

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  // const search = useLocation().search;
  // const query = new URLSearchParams(search).get("query");
  // const { query } = useParams();
  // const querySearch1 = new URLSearchParams(useLocation().search);
  // const querySearch = query.get('search');
  // const { currentSearch, currentSearchMovies, setSearchMovies } = useContext(SearchContext);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      // const searchUrl = getSearchMovieUrl(query || currentSearch);
      const searchUrl = getSearchMovieUrl(query);
      const res = await getData(searchUrl);
      console.log(res.results);
      // setSearchMovies(res.results);
      setIsLoading(false);
    };
    loadMovies();
  }, [query]);
  // }, [currentSearch, query, setSearchMovies]);

  return (
    <div>
      {console.log('query', query)}
      Search
      <div>
        <SearchBar />
      </div>
      {isLoading ? <h4>loadiing</h4> : ''}
      {/* {currentSearchMovies ?
       <MovieList movies={currentSearchMovies} category="movies" /> : ''} */}
    </div>
  );
}

export default Search;
