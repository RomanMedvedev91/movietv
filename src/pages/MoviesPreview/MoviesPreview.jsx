/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon, Pagination, Dimmer, Loader, Card } from 'semantic-ui-react';
// import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

import getData from '../../utilities/getData';

import { popularMovieUrl, TMDB_POSTER_PATH } from '../../constants/apiUrls';

import {
  StyledMoviesContainer,
  StyledMoviesList,
  StyledPaginationWrapper
} from './moviesPreview.style';

function MoviesPreview() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesPreview, setMoviespreview] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();
  const cardHandleClick = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const movieUrl = popularMovieUrl(activePage);
      const res = await getData(movieUrl);
      setMoviespreview(res.results);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    loadMovies();
  }, [activePage]);

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  return (
    <StyledMoviesContainer>
      <StyledMoviesList>
        <div>
          <SearchBar />
        </div>
        {isLoading && (
          <Dimmer active>
            <Loader size="medium">Loading...</Loader>
          </Dimmer>
        )}
        {moviesPreview && (
          <>
            {/* <MovieList movies={moviesPreview} category="movie" /> */}
            <h1>Popular Movies</h1>
            <Card.Group itemsPerRow={5}>
              {moviesPreview.map((movie) => (
                <Card
                  key={movie.id}
                  image={
                    movie.backdrop_path
                      ? `${TMDB_POSTER_PATH + movie.poster_path}`
                      : 'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                  header={movie.title}
                  meta={movie.release_date}
                  onClick={() => cardHandleClick('movie', movie.id)}
                />
              ))}
            </Card.Group>
            <StyledPaginationWrapper>
              <Pagination
                defaultActivePage={activePage}
                ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                prevItem={{ content: <Icon name="angle left" />, icon: true }}
                nextItem={{ content: <Icon name="angle right" />, icon: true }}
                totalPages={500}
                onPageChange={onChange}
                inverted
              />
            </StyledPaginationWrapper>
          </>
        )}
      </StyledMoviesList>
    </StyledMoviesContainer>
  );
}

export default MoviesPreview;
