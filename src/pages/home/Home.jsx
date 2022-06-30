import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Button, Card } from 'semantic-ui-react';
import SearchBar from '../../components/SearchBar/SearchBar';
// import MovieList from '../../components/MovieList/MovieList';
import MovieCard from '../../components/MovieCard/MovieCard';

import CardCarousel from '../../components/CardCarousel/CardCarousel';

import getData from '../../utilities/getData';
// import { topRatedMovieUrl } from '../../constants/apiUrls';
import { popularMovieUrl, topRatedMovieUrl } from '../../constants/apiUrls';
import mainBackground from '../../assets/mainBackground.png';

// import useFetch from '../../hooks/useFetch';

// eslint-disable-next-line object-curly-newline
import {
  HomepageContainer,
  BackgroundImgContainer,
  BackgroundImage,
  Title,
  PopularMoviesContainer
} from './Home.style';

function Homepage() {
  // const { data, loading, error } = useFetch(popularMovieUrl);

  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  // const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const renderMainMovieCards = async () => {
      setIsLoading(true);
      const popularMoviesResult = await getData(popularMovieUrl);
      const topRateMoviesResult = await getData(topRatedMovieUrl);
      setPopularMovies(popularMoviesResult);
      // setnowPlayingMovies(topRateMoviesResult.slice(0, 5));
      setTopRatedMovies(topRateMoviesResult);

      setIsLoading(false);
    };
    renderMainMovieCards();
  }, []);

  const renderMovieCards = (moviesCards) =>
    // console.log('movies', movies);
    // eslint-disable-next-line implicit-arrow-linebreak
    moviesCards.slice(0, 5).map((movie) => <MovieCard key={movie.id} image={movie.poster_path} />);

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
        PopularMovieList
        {/* {loading ? <div>Loading</div> : ''}
        {error ? <div>error</div> : ''} */}
        {isLoading ? <div>Loading</div> : ''}
        {popularMovies && (
          <Card.Group itemsPerRow={5}>{renderMovieCards(popularMovies)}</Card.Group>
        )}
      </PopularMoviesContainer>
      <div>
        {/* NowPlayingMovies
        {popularMovies && (
          <Card.Group itemsPerRow={5}>{renderMovieCards(topRatedMovies)}</Card.Group>
        )} */}
        <CardCarousel movies={topRatedMovies} />
      </div>

      <Button onClick={renderMovieCards}>Top Rated movies</Button>
      {/* {movies ? <MovieList movies={movies} /> : ''} */}
      <Outlet />
    </HomepageContainer>
  );
}

export default Homepage;
