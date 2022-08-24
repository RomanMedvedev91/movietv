/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon, Pagination, Dimmer, Loader, Card, Dropdown, Button } from 'semantic-ui-react';
// import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

import getData from '../../utilities/getData';

import {
  popularMovieUrl,
  TMDB_POSTER_PATH
  // FILTER_URL
} from '../../constants/apiUrls';

import {
  StyledMoviesContainer,
  StyledMoviesList,
  StyledPaginationWrapper,
  StyledFilterContainer
} from './moviesPreview.style';

const filterOptions = [
  { key: 1, text: 'Popularity Descending', value: 'pupularity.desc' },
  { key: 2, text: 'Popularity Ascending', value: 'pupularity.asc' },
  { key: 3, text: 'Raiting Descending', value: 'vote_average.desc' },
  { key: 4, text: 'Raiting Ascending', value: 'vote_average.asc' },
  { key: 5, text: 'Release Descending', value: 'release_date.desc' },
  { key: 6, text: 'Release Ascending', value: 'release_date.asc' },
  { key: 7, text: 'Revenue Descending', value: 'revenue.desc' },
  { key: 8, text: 'Revenue Ascending', value: 'revenue.asc' },
  { key: 9, text: 'Title (A-Z)', value: 'original_title.asc' }
];

const filterGenres = [
  { key: 1, text: 'Action', value: 28 },
  { key: 2, text: 'Adventure', value: 12 },
  { key: 3, text: 'Animation', value: 16 },
  { key: 4, text: 'Comedy', value: 35 },
  { key: 5, text: 'Crime', value: 80 },
  { key: 6, text: 'Documentary', value: 99 },
  { key: 7, text: 'Drama', value: 18 },
  { key: 8, text: 'Family', value: 10751 },
  { key: 9, text: 'Fantasy', value: 14 },
  { key: 10, text: 'History', value: 36 },
  { key: 11, text: 'Horror', value: 27 },
  { key: 12, text: 'Music', value: 10402 },
  { key: 13, text: 'Mystery', value: 9648 },
  { key: 14, text: 'Romance', value: 10749 },
  { key: 15, text: 'Science Fiction', value: 878 },
  { key: 16, text: 'TV Movie', value: 10770 },
  { key: 17, text: 'Thriller', value: 53 },
  { key: 18, text: 'War', value: 10752 },
  { key: 19, text: 'Western', value: 37 }
];

// new array fill 200 obj,
const currentYear = new Date().getFullYear();
const filterYear = new Array(currentYear - 1899)
  .fill({})
  .map((obj, indx) => ({ key: indx + 1, text: currentYear - indx, value: currentYear - indx }));

function MoviesPreview() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesPreview, setMoviespreview] = useState(null);
  const [activePage, setActivePage] = useState(1);
  // const [isFilter, setIsFilter] = useState(false);
  const [filterState, setFilterState] = useState({
    isFetching: false,
    multiple: true,
    sortBy: null,
    genres: null,
    userScoreMin: null,
    userScoreMax: null,
    // minUserVote: null,
    runTimeMin: null,
    runTimeMax: null,
    year: null,
    // releaseDateFrom: null,
    // releaseDateTo: null,
    withFilter: false
  });

  const getUrl = (state, page = 1) => {
    // const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;

    const sortBy = state.sortBy ? `&sort_by=${state.sortBy}` : '';
    const genres = state.genres ? `&with_genres=${state.genres}` : '';
    const year = state.year ? `&year=${state.year}` : '';

    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&${sortBy}${year}${genres}&with_watch_monetization_types=flatrate`;
  };
  /*
    const userScoreMin = state.userScoreMin ? `&vote_average.gte=${state.userScoreMin}` : '';
    const userScoreMax = state.userScoreMax ?  `&vote_average.lte=${state.userScoreMax}` : '';
    const runTimeMin = state.runTimeMin ? `&with_runtime.gte=${state.runTimeMin}` : '';
    const runTimeMax = state.runTimeMax ? `&with_runtime.lte=${state.runTimeMax}` : '';
    */

  // const releaseDateFrom = state.releaseDateFrom ?
  // `&release_date.gte=${state.releaseDateFrom.slice(0, 4)}-1-1` : '';
  // const releaseDateTo = state.releaseDateTo ?
  // `&release_date.lte=${state.releaseDateTo.slice(0, 4)}-11-11}` : '';

  const navigate = useNavigate();
  const cardHandleClick = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const movieUrl = popularMovieUrl(activePage);
      // const movieUrl = isFilter ? FILTER_URL(value, activePage) : popularMovieUrl(activePage);
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

  const sortHandleChange = (e, { value }, type) => {
    setFilterState({ ...filterState, [type]: value });
    console.log(filterState);
    console.log('e', e);
    console.log('value', value);
    console.log('type', type);
  };

  const setNewFilter = () => {
    console.log('getUrl', getUrl(filterState));
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
        {console.log(filterState)}
        {moviesPreview && (
          <>
            {/* <MovieList movies={moviesPreview} category="movie" /> */}
            <h1>Popular Movies</h1>
            <StyledFilterContainer>
              <Dropdown
                clearable
                options={filterOptions}
                selection
                placeholder="Select Filter"
                onChange={(e, obj) => sortHandleChange(e, obj, 'sortBy')}
              />
              <Dropdown
                clearable
                options={filterGenres}
                selection
                placeholder="Genres"
                onChange={(e, obj) => sortHandleChange(e, obj, 'genres')}
              />
              <Dropdown
                selection
                placeholder="Year"
                options={filterYear}
                onChange={(e, obj) => sortHandleChange(e, obj, 'year')}
              />
              <Button content="Primary" primary onClick={setNewFilter} />
            </StyledFilterContainer>

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
