/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/function-component-definition */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable implicit-arrow-linebreak */
import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, Link, useLocation } from 'react-router-dom';

import {
  Button,
  Icon,
  Modal,
  Embed,
  Loader,
  Dimmer,
  Tab,
  Card,
  Popup,
  Item
} from 'semantic-ui-react';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
// import * as route from '../../constants/routes';

import {
  getTvShowDetails,
  TMDB_POSTER_BASE,
  TMDB_POSTER_PATH,
  TMDB_BACKDROP_PATH,
  getTvShowCredits,
  getRecommendationsTvShows,
  getTvSeasonDetails
} from '../../constants/apiUrls';

import getData from '../../utilities/getData';

import {
  MovieContainer,
  BackgroundImage,
  CastContainer,
  MediaContainer,
  RecommendedContainer,
  PosterContainer,
  MovieDataContainer,
  MovieDataTable,
  HeaderGradient
} from '../Movie/Movie.style';

import {
  MovieDetailWrapperStyle,
  MovieDetail,
  TvShowCreaterStyleLink,
  CreatorsTableStyle,
  TvshowsNetworks,
  TvShowsLinksStyle,
  LastSeasonContainerStyle
} from './TvShow.style';

import TrailerCard from '../../components/MovieCard/TrailerCard';

import {
  getGenres,
  getReleaseDateAndCountry,
  runTime,
  getDateHumanReadble
} from '../../utilities/helperFunctions';

function TvShow() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [currentTrailer, setCurrentTrailer] = useState(null);
  const [movieCredits, setMovieSetCredits] = useState(null);
  const [recommendationsMovies, setrecommendationsMovies] = useState(null);
  const [seasonDetails, setSeasonDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [showMoreBio, setShowMoreBio] = useState(false);

  const { tvShowId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadMovie = async () => {
      if (!location.state?.id) {
        navigate('/404');
      } else {
        setIsLoading(true);
        const movieDetailUrl = getTvShowDetails(tvShowId);
        const movieCreditUrl = getTvShowCredits(tvShowId);
        const recommendationsMoviesUrl = getRecommendationsTvShows(tvShowId);

        const resMovieDetail = await getData(movieDetailUrl);
        const resMovieCredit = await getData(movieCreditUrl);
        const resrecommendationsMovies = await getData(recommendationsMoviesUrl);

        setMovieDetails(resMovieDetail);
        setMovieSetCredits(resMovieCredit);
        setrecommendationsMovies(resrecommendationsMovies.results);

        const seasonDetailUrl = getTvSeasonDetails(
          tvShowId,
          resMovieDetail?.last_episode_to_air?.season_number
        );
        const seasonDetailsRes = await getData(seasonDetailUrl);

        setSeasonDetails(seasonDetailsRes);

        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    loadMovie();
  }, [tvShowId]);

  const getPersonBiography = () => {
    const length = movieDetails.overview.length / 2;
    return showMoreBio
      ? movieDetails.overview
      : `${movieDetails.overview.substring(0, length)} . . . `;
  };

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

            <MovieDetailWrapperStyle>
              <PosterContainer>
                <img src={`${TMDB_POSTER_PATH + movieDetails.poster_path}`} alt="poster" />
              </PosterContainer>
              <TvShowsLinksStyle>
                <Button primary onClick={playTrailer}>
                  <Icon name="play" />
                  Play Trailer
                </Button>
                <div>
                  {movieDetails.homepage && (
                    <a href={movieDetails.homepage} target="_blank" rel="noreferrer">
                      <Popup
                        content="Visit Homepage"
                        trigger={<Icon name="linkify" size="large" />}
                      />
                    </a>
                  )}
                </div>
              </TvShowsLinksStyle>
            </MovieDetailWrapperStyle>

            <MovieDataContainer>
              <h2>{movieDetails.name}</h2>
              <p>
                <span>{getReleaseDateAndCountry(movieDetails)}</span>
                <span>{getGenres(movieDetails)}</span>
                <span>{runTime(movieDetails)}</span>
              </p>
              {movieDetails.tagline && <h5 className="tvshow-tagline">{movieDetails.tagline}</h5>}

              {/* <p>{movieDetails.overview}</p> */}

              <p>
                {getPersonBiography()}
                <Button className="show-more" onClick={() => setShowMoreBio(!showMoreBio)}>
                  {showMoreBio ? 'Show less' : 'Show more'}
                </Button>
              </p>

              <MovieDataTable>
                <div>
                  <span>Type</span>
                  <span>{movieDetails.type}</span>
                </div>

                <div>
                  <span>Status</span>
                  <span>{movieDetails.status}</span>
                </div>

                <div>
                  <span>Original language</span>
                  <span>{getOriginalLanguage()}</span>
                </div>
                <TvshowsNetworks>
                  <span>{movieDetails.networks.length > 1 ? 'Networks' : 'Network'}</span>
                  <div>
                    {movieDetails.networks.map((network) => (
                      <span key={network.id}>
                        <img src={`${TMDB_POSTER_BASE + network.logo_path}`} alt="networks logo" />
                      </span>
                    ))}
                  </div>
                </TvshowsNetworks>
              </MovieDataTable>

              {movieDetails.created_by[0] && (
                <CreatorsTableStyle>
                  {movieDetails.created_by.map((person) => (
                    <div key={person.id}>
                      <TvShowCreaterStyleLink to={`/person/${person.id}`}>
                        {person?.name}
                      </TvShowCreaterStyleLink>
                      <span>Creator</span>
                    </div>
                  ))}
                </CreatorsTableStyle>
              )}
            </MovieDataContainer>

            <HeaderGradient />
          </MovieDetail>

          <CastContainer>
            <CardCarousel
              title
              titleHeader="Casts"
              // titleLink={`${route.MOVIES}`}
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
                  meta={person.roles.map((el) => el.character).join(', ')}
                  onClick={() => cardHandleClick('person', person.id)}
                />
              ))}
            </CardCarousel>
          </CastContainer>

          {seasonDetails && (
            <LastSeasonContainerStyle>
              {console.log(seasonDetails)}
              {movieDetails.in_production ? <h2>Current Season</h2> : <h2>Last Season</h2>}

              <Item.Group>
                <Item>
                  <Item.Image
                    size="small"
                    src={
                      seasonDetails.poster_path
                        ? `${TMDB_POSTER_PATH + seasonDetails.poster_path}`
                        : 'https://react.semantic-ui.com/images/wireframe/image.png'
                    }
                  />
                  <Item.Content>
                    <Item.Header>
                      <Link to={`/tv/${tvShowId}/season/${seasonDetails.id}`}>
                        {seasonDetails.name}
                      </Link>
                    </Item.Header>
                    <Item.Meta>
                      <span>{seasonDetails.air_date.slice(0, 4)}</span>
                      <span>{` | ${seasonDetails.episodes.length} Episodes`}</span>
                    </Item.Meta>
                    <Item.Description>
                      {seasonDetails.overview
                        ? seasonDetails.overview
                        : `Season ${movieDetails.last_episode_to_air.season_number} of ${
                            movieDetails.name
                          } premiered on ${getDateHumanReadble(seasonDetails.air_date)}`}
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
              <Link to={`/tv/${tvShowId}/seasons`}>
                View All Seasons
                <Icon name="angle right" size="small" />
              </Link>
            </LastSeasonContainerStyle>
          )}

          <MediaContainer>
            <h2>Media details</h2>
            {TabExampleSecondaryPointing()}
          </MediaContainer>

          <RecommendedContainer>
            <CardCarousel
              title
              titleHeader="Recomended TV Shows"
              // titleLink={`${route.MOVIES}`}
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
                  header={movie.name}
                  meta={movie.first_air_date}
                  onClick={() => cardHandleClick(movie.media_type, movie.id)}
                />
              ))}
            </CardCarousel>
          </RecommendedContainer>
        </MovieContainer>
      )}
      {currentTrailer && (
        <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} closeIcon>
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
      <Outlet />
    </>
  );
}

export default TvShow;
