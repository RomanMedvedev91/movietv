/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */

import { Link } from 'react-router-dom';
import { Item, Placeholder } from 'semantic-ui-react';
import PaginationComponent from '../Pagination/Pagination';

import { getDateHumanReadble } from '../../utilities/helperFunctions';

function ItemsList({
  moviesPreview,
  cardHandleClick,
  getImageUrl,
  isLoading,
  onChangePage,
  activePage
}) {
  return (
    <>
      <Item.Group relaxed divided>
        {moviesPreview.results &&
          moviesPreview.results.map((movie) => (
            <Item key={movie.id} onClick={() => cardHandleClick(movie, movie.id)}>
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
                  src={getImageUrl(movie)}
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
      <PaginationComponent
        moviesPreview={moviesPreview}
        activePage={activePage}
        onChangePage={onChangePage}
      />
    </>
  );
}

export default ItemsList;
