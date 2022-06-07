import { Card, Icon, Button } from 'semantic-ui-react';

const extra = (
  <Button>
    <Icon name="user" />
    16 Friends
  </Button>
);

function MovieCard({ movie }) {
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w500/';
  // const tmdbPosterPath = 'https://image.tmdb.org/t/p/w185_and_h278_face/';

  return (
    <Card
      image={movie.poster_path ? `${tmdbPosterPath + movie.poster_path}` : '/img-placeholder.jpg'}
      // image={movie.backdrop_path}
      header={movie.title || movie.name}
      // header={`Elliot Baker\n ${movie.id}`}
      meta={movie.id}
      description={movie.o}
      extra={extra}
    />
    // <div>
    //   MovieCard
    //   <div>{movie.id}</div>
    // </div>
  );
}

export default MovieCard;
