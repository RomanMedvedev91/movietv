/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Icon, Pagination, Placeholder, Item } from 'semantic-ui-react';

import SearchBar from '../../components/SearchBar/SearchBar';

import { getDateHumanReadble } from '../../utilities/helperFunctions';
import getData from '../../utilities/getData';

import { getSearchMovieUrl, TMDB_POSTER_PATH } from '../../constants/apiUrls';

import { StyledSearchContainer, StyledSearchList, StyledPaginationWrapper } from './Search.style';

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const [moviesPreview, setMoviespreview] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);

      const searchUrl = getSearchMovieUrl(query);
      const res = await getData(searchUrl);
      console.log('getSearchMovie', res.results);
      setMoviespreview(res);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadMovies();
  }, [query]);

  const onChangePage = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };
  const cardHandleClick = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <>
      {console.log('query', query)}
      {moviesPreview && (
        <StyledSearchContainer>
          <StyledSearchList>
            <div>
              <SearchBar />
            </div>
            {isLoading ? <h4>loadiing</h4> : ''}
            <Item.Group>
              {moviesPreview.results.map((movie) => (
                <Item key={movie.id} onClick={() => cardHandleClick(movie.media_type, movie.id)}>
                  {isLoading ? (
                    <>
                      <Placeholder inverted style={{ height: 225, width: 150 }}>
                        <Placeholder.Image />
                      </Placeholder>
                      <Placeholder inverted>
                        <Placeholder.Header>
                          <Placeholder.Line length="full" />
                          <Placeholder.Line length="very long" />
                          <Placeholder.Line length="long" />
                        </Placeholder.Header>
                      </Placeholder>
                    </>
                  ) : (
                    <Item.Image
                      style={{ height: 225, width: 150 }}
                      size="small"
                      src={
                        movie.poster_path
                          ? `${TMDB_POSTER_PATH + movie.poster_path}`
                          : 'https://react.semantic-ui.com/images/wireframe/image.png'
                      }
                    />
                  )}

                  <Item.Content>
                    {isLoading ? (
                      <Placeholder inverted>
                        <Placeholder.Header>
                          <Placeholder.Line length="long" />
                          <Placeholder.Line length="medium" />
                        </Placeholder.Header>
                      </Placeholder>
                    ) : (
                      <>
                        <Item.Header>
                          <Link to={`/${movie.media_type}/${movie.id}`}>
                            {movie.title || movie.name}
                          </Link>
                        </Item.Header>

                        <Item.Meta>
                          {getDateHumanReadble(movie.release_date || movie.air_date)}
                        </Item.Meta>
                        <Item.Description>{movie.overview}</Item.Description>
                      </>
                    )}
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
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
          </StyledSearchList>
        </StyledSearchContainer>
      )}
    </>
  );
}

export default Search;
