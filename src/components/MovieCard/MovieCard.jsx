import { Card } from 'semantic-ui-react';
// import { Card, Icon, Button } from 'semantic-ui-react';

// const extra = (
//   <Button>
//     <Icon name="film" />
//     Details
//   </Button>
// );

function MovieCard({ image, header }) {
  const tmdbPosterPath = 'https://image.tmdb.org/t/p/w500/';
  // const tmdbPosterPath = 'https://image.tmdb.org/t/p/w185_and_h278_face/';

  return (
    <Card
      image={image ? `${tmdbPosterPath + image}` : '/img-placeholder.jpg'}
      header={header || ''}
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
