// // import { useEffect, useState } from 'react';
// import { Card } from 'semantic-ui-react';
// import MovieCard from '../MovieCard/MovieCard';

// function MovieList({ movies, category }) {
//   const renderMovieCards = (moviesCards) => {
//     console.log('movies', movies);
//     // eslint-disable-next-line implicit-arrow-linebreak
//     return moviesCards.map((movie) => (
//       <MovieCard
//         key={movie.id}
//         id={movie.id}
//         image={movie.poster_path}
//         header={movie.title || movie.name}
//         category={category}
//       />
//     ));
//   };

//   return <Card.Group itemsPerRow={4}>{renderMovieCards(movies)}</Card.Group>;
// }

// export default MovieList;
