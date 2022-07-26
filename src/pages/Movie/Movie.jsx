import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { getMovieDetails, TMDB_POSTER_BASE, TMDB_POSTER_PATH } from '../../constants/apiUrls';
import getData from '../../utilities/getData';

import {
  MovieContainer,
  MovieDetail,
  BackgroundImage,
  CastContainer,
  MediaContainer,
  RecommendedContainer,
  PosterContainer
} from './Movie.style';

function Movie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  // const [movieImages, setMovieImages] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      setIsLoading(true);
      const movieDetailUrl = getMovieDetails(movieId);
      // const movieImagesUrl = getMovieImages(movieId);
      const resMovieDetail = await getData(movieDetailUrl);
      // const resMovieImages = await getData(movieImagesUrl);

      setMovieDetails(resMovieDetail);
      // setMovieImages(resMovieImages);

      setIsLoading(false);
    };
    loadMovie();
  }, [movieId]);

  const getGenresString = () => {
    let genresString = '';
    const genres = [...movieDetails.genres];
    genres.forEach((genre, i, array) => {
      if (i === array.length - 1) {
        genresString += `${genre.name}`;
      } else {
        genresString += `${genre.name}, `;
      }
    });
    return genresString;
  };

  return (
    <>
      {isLoading ? <h4>loadiing</h4> : ''}
      {movieDetails && (
        <MovieContainer>
          {/* {console.log(movieImages)} */}
          {movieDetails && <div>{movieDetails.budget}</div>}
          <MovieDetail>
            <BackgroundImage>
              <img src={`${TMDB_POSTER_BASE + movieDetails.backdrop_path}`} alt="mainBackground" />
            </BackgroundImage>
            <PosterContainer>
              <img src={`${TMDB_POSTER_PATH + movieDetails.poster_path}`} alt="posted" />
            </PosterContainer>
            <div>
              <h2>{movieDetails.title}</h2>
              <p>{getGenresString()}</p>
              <p>{movieDetails.overview}</p>
              <div>
                <div>
                  <p>Status</p>
                  <p>released</p>
                </div>
              </div>
            </div>
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
