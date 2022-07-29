/* eslint-disable object-curly-newline */
// import { useContext } from 'react';
import { Card, Embed } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { TrailerContainer } from './MovieCard.style';
import { tmdbPosterPath } from '../../constants/apiUrls';
// import { MovieContext } from '../../context/Movie.context';
// import { Card, Icon, Button } from 'semantic-ui-react';

function MovieCard({ movie, id, image, header, modalHadler, isTrailers, trailer }) {
  // const { setCurrentMovie } = useContext(MovieContext);

  const navigate = useNavigate();

  const cardHandleClick = () => {
    // setCurrentMovie(id);
    console.log(movie);
    navigate(`/movies/${id}`);
  };

  return (
    <>
      {!isTrailers && (
        <Card
          image={image ? `${tmdbPosterPath + image}` : '/img-placeholder.jpg'}
          header={header || ''}
          onClick={cardHandleClick}
        />
      )}

      {isTrailers && (
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
