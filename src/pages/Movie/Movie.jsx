import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { getMovieDetails, TMDB_POSTER_BASE, getMovieImages } from '../../constants/apiUrls';
import getData from '../../utilities/getData';

import {
  MovieContainer,
  MovieDetail,
  BackgroundImage,
  CastContainer,
  MediaContainer,
  RecommendedContainer
} from './Movie.style';

function Movie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieImages, setMovieImages] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      setIsLoading(true);
      const movieDetailUrl = getMovieDetails(movieId);
      const movieImagesUrl = getMovieImages(movieId);
      const resMovieDetail = await getData(movieDetailUrl);
      const resMovieImages = await getData(movieImagesUrl);

      setMovieDetails(resMovieDetail);
      setMovieImages(resMovieImages);

      setIsLoading(false);
    };
    loadMovie();
  }, [movieId]);

  return (
    <>
      {isLoading ? <h4>loadiing</h4> : ''}
      {movieDetails && (
        <MovieContainer>
          {console.log(movieImages)}
          {movieDetails && <div>{movieDetails.budget}</div>}
          <MovieDetail>
            <BackgroundImage>
              <img src={`${TMDB_POSTER_BASE + movieDetails.backdrop_path}`} alt="mainBackground" />
            </BackgroundImage>
            <h2>{movieDetails.title}</h2>
            movie details
          </MovieDetail>
          <CastContainer>Cast details</CastContainer>
          <MediaContainer>Media details</MediaContainer>
          <RecommendedContainer>Recomended movies</RecommendedContainer>
        </MovieContainer>
      )}
      <Outlet />
    </>
  );
}

export default Movie;
