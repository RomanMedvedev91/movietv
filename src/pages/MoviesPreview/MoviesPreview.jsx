/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { Icon, Pagination, Dimmer, Loader } from 'semantic-ui-react';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

import getData from '../../utilities/getData';

import { popularMovieUrl } from '../../constants/apiUrls';

function MoviesPreview() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesPreview, setMoviespreview] = useState(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const movieUrl = popularMovieUrl(activePage);
      const res = await getData(movieUrl);
      console.log('res', res);
      setMoviespreview(res);

      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    };
    loadMovies();
  }, [activePage]);

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  return (
    <div>
      Search
      <div>
        <SearchBar />
      </div>
      {isLoading && (
        <Dimmer active>
          <Loader size="medium">Loading...</Loader>
        </Dimmer>
      )}
      {moviesPreview.results && (
        <>
          <MovieList movies={moviesPreview.results} category="movie" />
          <Pagination
            defaultActivePage={activePage}
            ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
            firstItem={{ content: <Icon name="angle double left" />, icon: true }}
            lastItem={{ content: <Icon name="angle double right" />, icon: true }}
            prevItem={{ content: <Icon name="angle left" />, icon: true }}
            nextItem={{ content: <Icon name="angle right" />, icon: true }}
            totalPages={moviesPreview.total_pages}
            onPageChange={onChange}
          />
        </>
      )}
    </div>
  );
}

export default MoviesPreview;
