/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable implicit-arrow-linebreak */
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Button, Icon, Modal, Embed, Loader, Dimmer } from 'semantic-ui-react';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import * as route from '../../constants/routes';

import {
  getMovieDetails,
  TMDB_POSTER_BASE,
  TMDB_POSTER_PATH,
  videoUrl,
  getMovieCredits
} from '../../constants/apiUrls';
import getData from '../../utilities/getData';

import {
  MovieContainer,
  MovieDetail,
  BackgroundImage,
  CastContainer,
  MediaContainer,
  RecommendedContainer,
  PosterContainer,
  MovieDataContainer,
  MovieDataTable
} from './Movie.style';

function Movie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [currentTrailer, setCurrentTrailer] = useState(null);
  const [movieCredits, movieSetCredits] = useState(null);
  const [open, setOpen] = useState(false);

  // const [movieImages, setMovieImages] = useState();
  const { category, movieId } = useParams();
  // const { movieId } = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      setIsLoading(true);
      const movieDetailUrl = getMovieDetails(movieId);
      const movieCreditUrl = getMovieCredits(movieId);
      // const movieImagesUrl = getMovieImages(movieId);
      const resMovieDetail = await getData(movieDetailUrl);
      const resMovieCredit = await getData(movieCreditUrl);
      // const resMovieImages = await getData(movieImagesUrl);

      setMovieDetails(resMovieDetail);
      movieSetCredits(resMovieCredit);
      // setMovieImages(resMovieImages);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    loadMovie();
  }, [movieId]);

  const getGenres = () => {
    let genresString = '';
    movieDetails.genres.forEach((genre, i, array) => {
      if (i === array.length - 1) {
        genresString += `${genre.name}`;
      } else {
        genresString += `${genre.name}, `;
      }
    });
    return genresString;
  };

  const getReleaseDateAndCountry = () => {
    const date = movieDetails.release_date.replace(/-/g, '/');

    let countries = '';
    movieDetails.production_countries.forEach(
      // eslint-disable-next-line no-return-assign
      (country) => (countries += `(${country.iso_3166_1})`)
    );
    return `${date} ${countries} `;
  };

  const runTime = () => {
    const timeInMinus = movieDetails.runtime;
    const hours = Math.floor(timeInMinus / 60);
    const minutes = Math.floor(timeInMinus % 60);

    return `${hours}h ${minutes}m`;
  };

  const formatMoneyToCurrenct = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  // regex
  // `$ ${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

  const playTrailer = async () => {
    const trailerUrl = videoUrl(movieId);
    const trailerResponse = await getData(trailerUrl);
    const trailers = trailerResponse.results;
    const trailer = trailers.find((video) => {
      const type = 'trailer';
      return video.type.toLowerCase() === type;
    });

    setCurrentTrailer(trailer);
    setOpen(true);
  };

  const getOriginalLanguage = () => {
    const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });
    return languageNames.of(`${movieDetails.original_language}`);
  };

  return (
    <>
      {console.log(category, movieId)}
      {isLoading && (
        <Dimmer active>
          <Loader size="medium">Loading...</Loader>
        </Dimmer>
      )}
      {!isLoading && movieDetails && (
        <MovieContainer>
          <MovieDetail>
            <BackgroundImage>
              <img src={`${TMDB_POSTER_BASE + movieDetails.backdrop_path}`} alt="mainBackground" />
            </BackgroundImage>
            <PosterContainer>
              <img src={`${TMDB_POSTER_PATH + movieDetails.poster_path}`} alt="posted" />
            </PosterContainer>
            <MovieDataContainer>
              <h2>{movieDetails.title}</h2>
              <p>
                <span>{getReleaseDateAndCountry()}</span>
                <span>{getGenres()}</span>
                <span>{runTime()}</span>
              </p>
              <p>{movieDetails.overview}</p>
              <MovieDataTable>
                <div>
                  <span>Status</span>
                  <span>{movieDetails.status}</span>
                </div>

                <div>
                  <span>Original language</span>
                  <span>{getOriginalLanguage()}</span>
                </div>

                <div>
                  <span>Budget</span>
                  <span>{formatMoneyToCurrenct(movieDetails.budget)}</span>
                </div>

                <div>
                  <span>Revenue</span>
                  <span>{formatMoneyToCurrenct(movieDetails.revenue)}</span>
                </div>
              </MovieDataTable>
              <Button primary onClick={playTrailer}>
                <Icon name="play" />
                Play Trailer
              </Button>
            </MovieDataContainer>
            {currentTrailer && (
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                closeIcon>
                <Modal.Header className="modal-header">
                  <Modal.Content>{movieDetails.title}</Modal.Content>
                </Modal.Header>

                <Embed
                  active
                  brandedUI
                  id={currentTrailer.key}
                  source="youtube"
                  // placeholder={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                />
              </Modal>
            )}
          </MovieDetail>
          {console.log(movieCredits)}
          <CastContainer>
            Cast details
            <CardCarousel
              movies={movieCredits.cast}
              header="Casts"
              link={route.MOVIES}
              visibleSlides={6}
              naturalSlideWidth={1}
              naturalSlideHeight={1.9}
            />
          </CastContainer>
          <MediaContainer>Media details</MediaContainer>
          <RecommendedContainer>Recomended movies</RecommendedContainer>
        </MovieContainer>
      )}
      <Outlet />
    </>
  );
}

export default Movie;
