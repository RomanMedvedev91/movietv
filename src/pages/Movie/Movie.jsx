/* eslint-disable react/function-component-definition */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable implicit-arrow-linebreak */
import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

import { Button, Icon, Modal, Embed, Loader, Dimmer, Tab, Card } from 'semantic-ui-react';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import * as route from '../../constants/routes';

import {
  getMovieDetails,
  TMDB_POSTER_BASE,
  TMDB_POSTER_PATH,
  TMDB_BACKDROP_PATH,
  getMovieCredits,
  getRecommendationsMovies
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
  MovieDataTable,
  HeaderGradient
} from './Movie.style';

import TrailerCard from '../../components/MovieCard/TrailerCard';

function Movie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [currentTrailer, setCurrentTrailer] = useState(null);
  const [movieCredits, setMovieSetCredits] = useState(null);
  const [recommendationsMovies, setrecommendationsMovies] = useState(null);
  const [open, setOpen] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadMovie = async () => {
      console.log('locationMOVIE', location);
      if (!location.state?.id) {
        navigate('/404');
      } else {
        setIsLoading(true);
        const movieDetailUrl = getMovieDetails(movieId);
        const movieCreditUrl = getMovieCredits(movieId);
        const recommendationsMoviesUrl = getRecommendationsMovies(movieId);

        const resMovieDetail = await getData(movieDetailUrl);
        const resMovieCredit = await getData(movieCreditUrl);
        const resrecommendationsMovies = await getData(recommendationsMoviesUrl);

        setMovieDetails(resMovieDetail);
        setMovieSetCredits(resMovieCredit);
        setrecommendationsMovies(resrecommendationsMovies.results);

        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
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

  const playTrailer = () => {
    const trailer = movieDetails.videos.results.find((video) => {
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

  const modalHandler = (movie) => {
    setCurrentTrailer(movie);
    setOpen(true);
  };

  const cardHandleClick = (category, id) => {
    navigate(`/${category}/${id}`, { state: { id, category } });
  };

  const panes = [
    {
      menuItem: 'Videos',
      render: () => (
        <Tab.Pane loading={!movieDetails.videos.results} attached={false}>
          {movieDetails.videos.results && (
            <CardCarousel
              // title
              // titleHeader="Videos"
              // titleLink={`${route.MOVIES}`}
              totalSlides={movieDetails.videos.results.length}
              naturalSlideWidth={1}
              naturalSlideHeight={0.75}
              visibleSlides={3}>
              {movieDetails.videos.results.map((video) => (
                <TrailerCard
                  key={video.id}
                  trailer={video}
                  modalHadler={modalHandler}
                  backdropPath={movieDetails.backdrop_path}
                />
              ))}
            </CardCarousel>
          )}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Posters',
      render: () => (
        <Tab.Pane loading={!movieDetails.images.posters} attached={false}>
          {movieDetails.images.posters && (
            <CardCarousel
              // title
              // titleHeader="Posters"
              // titleLink={`${route.MOVIES}`}
              totalSlides={movieDetails.images.posters.length}
              naturalSlideWidth={1}
              naturalSlideHeight={1.5}
              visibleSlides={6}>
              {movieDetails.images.posters.map((image) => (
                <Card
                  key={image.file_path}
                  image={
                    image.file_path
                      ? `${TMDB_POSTER_PATH + image.file_path}`
                      : 'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                />
              ))}
            </CardCarousel>
          )}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Backdrops',
      render: () => (
        <Tab.Pane loading={!movieDetails.images.backdrops} attached={false}>
          {movieDetails.images.backdrops && (
            <CardCarousel
              // title
              // titleHeader="Posters"
              // titleLink={`${route.MOVIES}`}
              totalSlides={movieDetails.images.backdrops.length}
              naturalSlideWidth={1.8}
              naturalSlideHeight={1}
              visibleSlides={3}>
              {movieDetails.images.backdrops.map((image) => (
                <Card
                  key={image.file_path}
                  image={
                    image.file_path
                      ? `${TMDB_BACKDROP_PATH + image.file_path}`
                      : 'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                />
              ))}
            </CardCarousel>
          )}
        </Tab.Pane>
      )
    }
  ];

  // eslint-disable-next-line max-len
  // eslint-disable-next-line react/no-unstable-nested-components
  const TabExampleSecondaryPointing = () => <Tab menu={{ text: true }} panes={panes} />;

  return (
    <>
      {console.log('recommendationsMovies', recommendationsMovies)}
      {console.log('movieCredits', movieCredits)}
      {console.log('movieDetails', movieDetails)}
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
              <img src={`${TMDB_POSTER_PATH + movieDetails.poster_path}`} alt="poster" />
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
            <HeaderGradient />
          </MovieDetail>

          <CastContainer>
            <CardCarousel
              title
              titleHeader="Casts"
              titleLink={`${route.MOVIES}`}
              visibleSlides={6}
              totalSlides={movieCredits.cast.length > 10 ? 10 : movieCredits.cast.length}
              naturalSlideWidth={1}
              naturalSlideHeight={2}>
              {movieCredits.cast.slice(0, 10).map((person) => (
                <Card
                  key={person.id}
                  image={
                    person.profile_path
                      ? `${TMDB_POSTER_PATH + person.profile_path}`
                      : 'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                  header={person.name}
                  meta={person.character}
                  onClick={() => cardHandleClick('person', person.id)}
                />
              ))}
            </CardCarousel>
          </CastContainer>

          <MediaContainer>
            <h2>Media details</h2>
            {TabExampleSecondaryPointing()}
          </MediaContainer>

          <RecommendedContainer>
            <CardCarousel
              title
              titleHeader="Recomended movies"
              titleLink={`${route.MOVIES}`}
              visibleSlides={3}
              totalSlides={recommendationsMovies.length > 10 ? 10 : recommendationsMovies.length}
              naturalSlideWidth={1.8}
              naturalSlideHeight={1.4}>
              {recommendationsMovies.slice(0, 10).map((movie) => (
                <Card
                  key={movie.id}
                  image={
                    movie.backdrop_path
                      ? `${TMDB_BACKDROP_PATH + movie.backdrop_path}`
                      : 'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                  header={movie.title}
                  meta={movie.release_date}
                  onClick={() => cardHandleClick(movie.media_type, movie.id)}
                />
              ))}
            </CardCarousel>
          </RecommendedContainer>
        </MovieContainer>
      )}
      <Outlet />
    </>
  );
}

export default Movie;
