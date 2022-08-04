import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

import getData from '../../utilities/getData';

import { popularMovieUrl } from '../../constants/apiUrls';

function MoviesPreview() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesPreview, setMoviespreview] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const res = await getData(popularMovieUrl);
      setMoviespreview(res.results);
      setIsLoading(false);
    };
    loadMovies();
  }, []);

  return (
    <div>
      Search
      <div>
        <SearchBar />
      </div>
      {isLoading ? <h4>loadiing</h4> : ''}
      {moviesPreview ? <MovieList movies={moviesPreview} category="movies" /> : ''}
    </div>
  );
}

export default MoviesPreview;
