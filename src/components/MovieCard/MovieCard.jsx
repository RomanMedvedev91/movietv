/* eslint-disable object-curly-newline */
import { Card, Embed } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { TrailerContainer } from './MovieCard.style';
import { tmdbPosterPath } from '../../constants/apiUrls';

function MovieCard({ movie, id, image, header, modalHadler, trailer, category }) {
  const navigate = useNavigate();

  const cardHandleClick = () => {
    console.log(movie);
    navigate(`/${category}/${id}`);
  };

  return (
    <>
      {category === 'movies' && (
        <Card
          image={image ? `${tmdbPosterPath + image}` : '/img-placeholder.jpg'}
          header={header}
          meta={movie?.character}
          onClick={cardHandleClick}
        />
      )}
      {category === 'persons' && (
        <Card
          image={image ? `${tmdbPosterPath + image}` : '/img-placeholder.jpg'}
          header={header}
          meta={movie?.character}
          onClick={cardHandleClick}
        />
      )}

      {category === 'trailers' && (
        <TrailerContainer>
          <Embed
            onClick={() => modalHadler(movie)}
            icon="play"
            active={false}
            id={trailer && trailer.key}
            placeholder={`${tmdbPosterPath}${movie.backdrop_path}`}
            source="youtube"
          />
          <h3>{movie.title}</h3>
          {trailer ? <p>{trailer.name}</p> : <p>name is not defined</p>}
        </TrailerContainer>
      )}
    </>
  );
}

export default MovieCard;
