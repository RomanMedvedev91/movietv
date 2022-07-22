import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// import { MovieContext } from '../../context/Movie.context';
import { getMovieDetails } from '../../constants/apiUrls';
import getData from '../../utilities/getData';

import {
  MovieContainer,
  MovieDetail,
  CastContainer,
  MediaContainer,
  RecommendedContainer
} from './Movie.style';

function Movie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  // const { currentMovie } = useContext(MovieContext);

  useEffect(() => {
    const loadMovie = async () => {
      setIsLoading(true);
      const searchUrl = getMovieDetails(movieId);
      // const searchUrl = getMovieDetails(currentMovie);
      const res = await getData(searchUrl);
      console.log('searchurl', res);
      setMovieDetails(res);

      setIsLoading(false);
    };
    loadMovie();
  }, [movieId]);

  return (
    <>
      <MovieContainer>
        {isLoading ? <h4>loadiing</h4> : ''}
        {movieId}
        {console.log('details', movieDetails)}
        {movieDetails && <div>{movieDetails.budget}</div>}
        <MovieDetail>movie details</MovieDetail>
        <CastContainer>Cast details</CastContainer>
        <MediaContainer>Media details</MediaContainer>
        <RecommendedContainer>Recomended movies</RecommendedContainer>
      </MovieContainer>
      <Outlet />
    </>
  );
}

export default Movie;
