/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

// eslint-disable-next-line object-curly-newline
import { CarouselProvider, Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// eslint-disable-next-line object-curly-newline
import { Card, Icon, Embed, Modal } from 'semantic-ui-react';
import * as route from '../../constants/routes';

import SearchBar from '../../components/SearchBar/SearchBar';
// import MovieList from '../../components/MovieList/MovieList';
import MovieCard from '../../components/MovieCard/MovieCard';

import CardCarousel from '../../components/CardCarousel/CardCarousel';

import getData from '../../utilities/getData';
// import { topRatedMovieUrl } from '../../constants/apiUrls';
import {
  popularMovieUrl,
  topRatedMovieUrl,
  nowPlayingMovieUrl,
  upcommingMovieUrl,
  videoUrl
} from '../../constants/apiUrls';
import mainBackground from '../../assets/mainBackground.png';

// import useFetch from '../../hooks/useFetch';

// eslint-disable-next-line object-curly-newline

import {
  HomepageContainer,
  BackgroundImgContainer,
  BackgroundImage,
  Title,
  PopularMoviesContainer,
  CarouselMoviesContainer,
  MoviesTitle,
  CarouselContainer,
  TrailerContainer
} from './Home.style';

function Homepage() {
  // const { data, loading, error } = useFetch(popularMovieUrl);

  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingdMovies, setUpcomingMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState();

  // const [upcomingdMoviesTrailer, setUpcomingMoviesTrailer] = useState([]);

  useEffect(() => {
    const renderMainMovieCards = async () => {
      setIsLoading(true);
      const popularMoviesResult = await getData(popularMovieUrl);
      const topRateMoviesResult = await getData(topRatedMovieUrl);
      const playingNowMoviesResult = await getData(nowPlayingMovieUrl);
      const upcomingMoviesResult = await getData(upcommingMovieUrl);
      // Add movie data to upcomingMovies state

      const upcomingMoviesWithTrailer = await Promise.all(
        upcomingMoviesResult.map(async (movie) => {
          const movieObj = movie;
          const trailerUrl = videoUrl(movieObj.id);
          movieObj.trailer = await getData(trailerUrl);

          return movieObj;
        })
      );

      setPopularMovies(popularMoviesResult);
      setTopRatedMovies(topRateMoviesResult);
      setnowPlayingMovies(playingNowMoviesResult);
      setUpcomingMovies(upcomingMoviesWithTrailer);

      // setUpcomingMovies(upcomingMoviesResult);

      setIsLoading(false);
    };

    renderMainMovieCards();
  }, []);

  const renderMovieCards = (moviesCards) =>
    // console.log('movies', movies);
    // eslint-disable-next-line implicit-arrow-linebreak
    moviesCards.slice(0, 5).map((movie) => <MovieCard key={movie.id} image={movie.poster_path} />);

  const modalHadler = (movie) => {
    setCurrentTrailer(movie);
    console.log(currentTrailer);
    setOpen(true);
  };

  return (
    <HomepageContainer>
      <BackgroundImgContainer>
        <BackgroundImage src={mainBackground} alt="mainBackground" />
      </BackgroundImgContainer>
      <Title>
        <p>Millions of movies, TV shows and people to discover. Explore now</p>
      </Title>
      <SearchBar />
      <PopularMoviesContainer>
        {/* {loading ? <div>Loading</div> : ''}
        {error ? <div>error</div> : ''} */}
        {isLoading ? <div>Loading</div> : ''}
        {popularMovies && (
          <Card.Group itemsPerRow={5}>{renderMovieCards(popularMovies)}</Card.Group>
        )}
      </PopularMoviesContainer>

      <CarouselMoviesContainer>
        <MoviesTitle>
          <h2>Top Rated</h2>
          <Link to={route.MOVIES}>
            See more
            <Icon name="angle right" size="small" />
          </Link>
        </MoviesTitle>
        <CardCarousel movies={topRatedMovies} />
      </CarouselMoviesContainer>

      <CarouselMoviesContainer>
        <MoviesTitle>
          <h2>Playing now</h2>
          <Link to={route.MOVIES}>
            See more
            <Icon name="angle right" size="small" />
          </Link>
        </MoviesTitle>
        <CardCarousel movies={nowPlayingMovies} />
      </CarouselMoviesContainer>

      <CarouselMoviesContainer>
        <MoviesTitle>
          <h2>Upcoming trailers</h2>
          <Link to={route.MOVIES}>
            See more
            <Icon name="angle right" size="small" />
          </Link>
        </MoviesTitle>
        {console.log(upcomingdMovies)}

        <CarouselContainer>
          <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={60}
            totalSlides={upcomingdMovies.length}
            visibleSlides={3}
            step={1}>
            <ButtonBack>
              <Icon name="angle left" size="big" />
            </ButtonBack>
            <Slider>
              {upcomingdMovies.map((movie, indx) => (
                <Slide key={movie.id} index={indx}>
                  <TrailerContainer>
                    <Embed
                      onClick={() => modalHadler(movie)}
                      icon="play"
                      active={false}
                      id={movie.trailer[0].key}
                      placeholder={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      source="youtube"
                    />
                    <h3>{movie.title}</h3>
                    <p>{movie.trailer[0].name}</p>
                  </TrailerContainer>
                </Slide>
              ))}
            </Slider>
            <ButtonNext>
              <Icon name="angle right" size="big" />
            </ButtonNext>
          </CarouselProvider>
        </CarouselContainer>

        {currentTrailer && (
          <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} closeIcon>
            <Modal.Header className="modal-header">
              <Modal.Content>{currentTrailer.title}</Modal.Content>
              {/* <Modal.Actions>
                <Button labelPosition="right" onClick={() => setOpen(false)}>
                  <Icon name="close" />
                </Button>
              </Modal.Actions> */}
            </Modal.Header>
            <Embed
              active
              id={currentTrailer.trailer[0].key}
              placeholder={`https://image.tmdb.org/t/p/w500/${currentTrailer.backdrop_path}`}
              source="youtube"
            />
          </Modal>
        )}
      </CarouselMoviesContainer>

      <Outlet />
    </HomepageContainer>
  );
}

export default Homepage;
