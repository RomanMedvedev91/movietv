/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */

import { Link } from 'react-router-dom';
import { Item, Placeholder } from 'semantic-ui-react';
import PaginationComponent from '../Pagination/Pagination';

import { getDateHumanReadble } from '../../utilities/helperFunctions';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function ItemsList({
  moviesPreview,
  cardHandleClick,
  getImageUrl,
  isLoading,
  onChangePage,
  activePage
}) {
  const { isMobile } = useMediaQuery();

  return (
    <>
      <Item.Group relaxed divided>
        {moviesPreview.results &&
          moviesPreview.results.map((movie) => {
            // define categorues
            let cat;
            if (!movie.media_type && movie.first_air_date) {
              cat = 'tv';
            } else if (!movie.media_type && movie.known_for_department) {
              cat = 'person';
            } else {
              cat = movie.media_type || 'movie';
            }

            const movieIdUrl = `/${cat}/${movie.id}`;
            const movieIdState = { id: movie.id, category: cat };

            return (
              <Item key={movie.id}>
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
                    style={{ height: 225, width: 150, marginBottom: isMobile ? '2em' : '0' }}
                    size="small"
                    src={getImageUrl(movie)}
                    onClick={() => cardHandleClick(movie, movie.id)}
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
                        <Link to={movieIdUrl} state={movieIdState}>
                          {movie.title || movie.name}
                        </Link>
                      </Item.Header>

                      <Item.Meta>
                        {movie.known_for_department
                          ? movie.known_for_department
                          : getDateHumanReadble(
                            movie.release_date || movie.air_date || movie.first_air_date
                          )}
                      </Item.Meta>
                      <Item.Description>{movie.overview}</Item.Description>
                    </>
                  )}
                </Item.Content>
              </Item>
            );
          })}
      </Item.Group>
      <PaginationComponent
        moviesPreview={moviesPreview}
        activePage={activePage}
        onChangePage={onChangePage}
      />
    </>
  );
}

export default ItemsList;
