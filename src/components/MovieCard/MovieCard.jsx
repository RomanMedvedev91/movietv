import { Card } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
// import { Card, Icon, Button } from 'semantic-ui-react';

// const extra = (
//   <Button>
//     <Icon name="film" />
//     Details
//   </Button>
// );

function MovieCard({ image, header, id }) {
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w500/';
  // const tmdbPosterPath = 'https://image.tmdb.org/t/p/w185_and_h278_face/';
  const navigate = useNavigate();

  const cardHandleClick = () => {
    navigate(`/movies/${id}`);
  };
  return (
    <Card
      image={image ? `${tmdbPosterPath + image}` : '/img-placeholder.jpg'}
      header={header || ''}
      onClick={cardHandleClick}
      // eslint-disable-next-line max-len
      // image={movie.poster_path ? `${tmdbPosterPath + movie.poster_path}` : '/img-placeholder.jpg'}
      // image={movie.backdrop_path}
      // header={header ? movie.tite || movie.name}
      // // header={`Elliot Baker\n ${movie.id}`}
      // meta={movie.id}
      // description={movie.o}
      // extra={extra}
    />
    // <div>
    //   MovieCard
    //   <div>{movie.id}</div>
    // </div>
  );
}

export default MovieCard;
