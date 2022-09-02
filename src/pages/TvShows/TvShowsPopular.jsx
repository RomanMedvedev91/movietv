/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon, Pagination, Card, Dropdown, Button, Placeholder, Image } from 'semantic-ui-react';

import getData from '../../utilities/getData';

import {
  popularTvUrl,
  TMDB_POSTER_PATH,
  getTvShowsFilterUrl,
  filterTvShowsGenres,
  filterSortBy
} from '../../constants/apiUrls';

import {
  StyledMoviesContainer,
  StyledMoviesList,
  StyledPaginationWrapper,
  StyledFilterContainer
} from '../Movies/Movies.style';

import { filterYear } from '../../utilities/helperFunctions';

function TvShowsPopular() {
  const [isLoading, setIsLoading] = useState(false);

  const [moviesPreview, setMoviespreview] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [filterTempState, setFilterTempState] = useState({
    sortBy: null,
    genres: null,
    year: null
  });
  const [filterState, setFilterState] = useState(null);

  const navigate = useNavigate();
  const cardHandleClick = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const movieUrl = !filterState
        ? popularTvUrl(activePage)
        : getTvShowsFilterUrl(filterState, activePage);

      const res = await getData(movieUrl);
      setMoviespreview(res);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadMovies();
  }, [filterState, activePage]);

  const onChangePage = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  const sortHandleChange = (e, { value }, type) => {
    setFilterTempState({ ...filterTempState, [type]: value });
  };

  const setNewFilter = () => {
    setFilterState(filterTempState);
  };

  return (
    <StyledMoviesContainer>
      <StyledMoviesList>
        {moviesPreview && (
          <>
            <h1>Popular TV Shows</h1>
            <StyledFilterContainer>
              <Dropdown
                clearable
                options={filterSortBy}
                selection
                placeholder="Sort By"
                onChange={(e, obj) => sortHandleChange(e, obj, 'sortBy')}
              />
              <Dropdown
                options={filterTvShowsGenres}
                selection
                clearable
                placeholder="Genres"
                onChange={(e, obj) => sortHandleChange(e, obj, 'genres')}
              />

              <Dropdown
                selection
                clearable
                placeholder="Year"
                options={filterYear}
                onChange={(e, obj) => sortHandleChange(e, obj, 'year')}
              />

              <Button
                content="Filter"
                disabled={
                  !filterTempState.sortBy && !filterTempState.genres && !filterTempState.year
                }
                primary
                onClick={setNewFilter}
              />
            </StyledFilterContainer>

            <Card.Group itemsPerRow={5}>
              {moviesPreview.results.map((movie) => (
                <Card key={movie.id} onClick={() => cardHandleClick('tv', movie.id)}>
                  {isLoading ? (
                    <Placeholder inverted style={{ height: 300, width: 200 }}>
                      <Placeholder.Image rectangular />
                    </Placeholder>
                  ) : (
                    <Image
                      style={{ height: 300, width: 200 }}
                      src={
                        movie.backdrop_path
                          ? `${TMDB_POSTER_PATH + movie.poster_path}`
                          : 'https://react.semantic-ui.com/images/wireframe/image.png'
                      }
                    />
                  )}

                  <Card.Content>
                    {isLoading ? (
                      <Placeholder inverted>
                        <Placeholder.Header>
                          <Placeholder.Line length="long" />
                          <Placeholder.Line length="medium" />
                        </Placeholder.Header>
                      </Placeholder>
                    ) : (
                      <>
                        <Card.Header>{movie.name}</Card.Header>
                        <Card.Meta>{movie.first_air_date}</Card.Meta>
                      </>
                    )}
                  </Card.Content>
                </Card>
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
                totalPages={moviesPreview.total_pages < 500 ? moviesPreview.total_pages : 500}
                onPageChange={onChangePage}
                inverted
              />
            </StyledPaginationWrapper>
          </>
        )}
      </StyledMoviesList>
    </StyledMoviesContainer>
  );
}

export default TvShowsPopular;
