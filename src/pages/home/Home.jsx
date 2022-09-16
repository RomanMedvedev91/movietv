/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Card, Embed, Modal } from 'semantic-ui-react';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import * as route from '../../constants/routes';

import SearchBar from '../../components/SearchBar/SearchBar';
// import MovieCard from '../../components/MovieCard/MovieCard';
import CardCarousel from '../../components/CardCarousel/CardCarousel';

import getData from '../../utilities/getData';

import {
  popularMovieUrl,
  topRatedMovieUrl,
  nowPlayingMovieUrl,
  upcommingMovieUrl,
  videoUrl,
  popularTvUrl,
  TMDB_POSTER_PATH,
  tmdbPosterPath
} from '../../constants/apiUrls';
import { getDateHumanReadble } from '../../utilities/helperFunctions';
import mainBackground from '../../assets/homepageSection1Bachground.png';

import {
  HomepageContainer,
  BackgroundImgContainer,
  BackgroundImage,
  Title,
  PopularMoviesContainer,
  HeaderGradient,
  TrailerContainer
} from './Home.style';

function Homepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingdMovies, setUpcomingMovies] = useState([]);
  const [popularTvShoes, setPopularTvShoes] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState();

  // const [activeSlide, setActiveSlide] = useState(null);
  const [backgroundSlides, setBackgroundSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const renderMainMovieCards = async () => {
      setIsLoading(true);
      const popularMoviesResult = await getData(popularMovieUrl());
      const topRateMoviesResult = await getData(topRatedMovieUrl());
      const playingNowMoviesResult = await getData(nowPlayingMovieUrl());
      const upcomingMoviesResult = await getData(upcommingMovieUrl());
      const popularTvShoesResult = await getData(popularTvUrl());

      const upcomingMoviesWithTrailer = await Promise.all(
        upcomingMoviesResult.results.map(async (movie) => {
          const movieObj = { ...movie };
          const trailerUrl = videoUrl(movie.id);
          const trailerResponse = await getData(trailerUrl);
          movieObj.trailer = trailerResponse.results;
          return movieObj;
        })
      );

      setPopularMovies(popularMoviesResult.results);
      setTopRatedMovies(topRateMoviesResult.results);
      setnowPlayingMovies(playingNowMoviesResult.results);
      setUpcomingMovies(upcomingMoviesWithTrailer);
      setPopularTvShoes(popularTvShoesResult.results);

      // add backdrop_path for background slider
      popularMoviesResult.results
        .slice(0, 5)
        .map((movie) => setBackgroundSlides((prev) => [...prev, movie.backdrop_path]));

      setIsLoading(false);
    };

    renderMainMovieCards();
  }, []);

  // const renderMovieCards = (moviesCards) =>
  //   // eslint-disable-next-line implicit-arrow-linebreak
  //   moviesCards
  //     .slice(0, 5)
  //     .map((movie) => (
  //       <MovieCard key={movie.id} id={movie.id} image={movie.poster_path} category="movie" />
  //     ));

  const modalHandler = (movie) => {
    console.log('hit', movie);
    setCurrentTrailer(movie);
    setOpen(true);
  };

  const cardHandleClick = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <HomepageContainer>
      <section>
        <BackgroundImgContainer>
          <BackgroundImage src={mainBackground} alt="mainBackground" />
        </BackgroundImgContainer>
        <HeaderGradient />

        <Title>
          <p>Millions of movies, TV shows and people to discover. Explore now</p>
        </Title>
        <SearchBar />
      </section>
      <PopularMoviesContainer>
        {isLoading ? <div>Loading</div> : ''}
        {popularMovies && (
          <Card.Group itemsPerRow={5}>
            {/* {renderMovieCards(popularMovies)} */}
            {console.log(backgroundSlides)}
            {popularMovies.slice(0, 5).map((movie) => (
              <Card
                key={movie.id}
                image={
                  movie.poster_path
                    ? `${TMDB_POSTER_PATH + movie.poster_path}`
                    : 'https://react.semantic-ui.com/images/wireframe/image.png'
                }
                header={movie.title}
                meta={movie.release_date && getDateHumanReadble(movie.release_date)}
                onClick={() => cardHandleClick('movie', movie.id)}
              />
            ))}
          </Card.Group>
        )}
      </PopularMoviesContainer>
      {console.log('popularTvShoes', popularTvShoes)}
      {popularTvShoes && (
        <CardCarousel
          title
          titleHeader="Popular TV Shoes"
          titleLink={`${route.TVSHOWS}`}
          totalSlides={topRatedMovies.length}>
          {popularTvShoes.map((movie) => (
            <Card
              key={movie.id}
              image={
                movie.backdrop_path
                  ? `${TMDB_POSTER_PATH + movie.poster_path}`
                  : 'https://react.semantic-ui.com/images/wireframe/image.png'
              }
              header={movie.name}
              meta={movie.first_air_date && getDateHumanReadble(movie.first_air_date)}
              onClick={() => cardHandleClick('tv', movie.id)}
            />
          ))}
        </CardCarousel>
      )}

      {topRatedMovies && (
        <CardCarousel
          title
          titleHeader="Top Rated Movies"
          titleLink={`${route.MOVIES}`}
          totalSlides={topRatedMovies.length}>
          {topRatedMovies.map((movie) => (
            <Card
              key={movie.id}
              image={
                movie.backdrop_path
                  ? `${TMDB_POSTER_PATH + movie.poster_path}`
                  : 'https://react.semantic-ui.com/images/wireframe/image.png'
              }
              header={movie.title}
              meta={movie.release_date && getDateHumanReadble(movie.release_date)}
              onClick={() => cardHandleClick('movie', movie.id)}
            />
          ))}
        </CardCarousel>
      )}

      {nowPlayingMovies && (
        <CardCarousel
          title
          titleHeader="Playing now Movies"
          titleLink={`${route.MOVIES}`}
          totalSlides={nowPlayingMovies.length}>
          {nowPlayingMovies.map((movie) => (
            <Card
              key={movie.id}
              image={
                movie.backdrop_path
                  ? `${TMDB_POSTER_PATH + movie.poster_path}`
                  : 'https://react.semantic-ui.com/images/wireframe/image.png'
              }
              header={movie.title}
              meta={movie.release_date && getDateHumanReadble(movie.release_date)}
              onClick={() => cardHandleClick('movie', movie.id)}
            />
          ))}
        </CardCarousel>
      )}

      {console.log('upcomingMovies', upcomingdMovies)}
      {/* {console.log('upcomingTrailers', upcomingTrailers)} */}

      {upcomingdMovies && (
        <CardCarousel
          title
          titleHeader="Upcoming Movies Trailers"
          titleLink={`${route.MOVIES}`}
          totalSlides={upcomingdMovies.length}
          naturalSlideWidth={1}
          naturalSlideHeight={0.75}
          visibleSlides={3}>
          {upcomingdMovies.map((movie) => {
            const trailer = movie.trailer[0];
            return (
              <TrailerContainer key={movie.id}>
                <Embed
                  onClick={() => modalHandler(movie)}
                  icon="play"
                  active={false}
                  id={trailer?.key}
                  placeholder={`${tmdbPosterPath}${movie.backdrop_path}`}
                  source="youtube"
                />
                <h3>{movie.title}</h3>
                <p>{trailer?.name}</p>
              </TrailerContainer>
            );
          })}
        </CardCarousel>
      )}

      {currentTrailer && (
        <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} closeIcon>
          <Modal.Header className="modal-header">
            <Modal.Content>{currentTrailer.title}</Modal.Content>
          </Modal.Header>
          <Embed
            active
            id={currentTrailer.trailer[0].key}
            placeholder={`https://image.tmdb.org/t/p/w500/${currentTrailer.backdrop_path}`}
            source="youtube"
          />
        </Modal>
      )}

      <Outlet />
    </HomepageContainer>
  );
}

export default Homepage;
