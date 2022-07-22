import { Outlet } from 'react-router-dom';

import {
  MovieContainer,
  MovieDetail,
  CastContainer,
  MediaContainer,
  RecommendedContainer
} from './Movie.style';

function Movie() {
  return (
    <>
      <MovieContainer>
        Movie
        <MovieDetail>Movie detail</MovieDetail>
        <CastContainer>Cast details</CastContainer>
        <MediaContainer>Media details</MediaContainer>
        <RecommendedContainer>Recomended movies</RecommendedContainer>
      </MovieContainer>
      <Outlet />
    </>
  );
}

export default Movie;
