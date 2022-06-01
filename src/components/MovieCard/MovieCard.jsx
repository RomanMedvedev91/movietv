import { Card, Icon, Button } from 'semantic-ui-react';

const extra = (
  <Button>
    <Icon name="user" />
    16 Friends
  </Button>
);

function MovieCard({ movie }) {
  return (
    <Card
      image={movie.backdrop_path}
      header={movie.title}
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
