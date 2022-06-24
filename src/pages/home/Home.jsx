import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Button } from 'semantic-ui-react';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import PopularMovieList from '../../components/PopularMovieList/PopularMovieList';

import CardCarousel from '../../components/CardCarousel/CardCarousel';

import getData from '../../utilities/getData';
import { topRatedMovieUrl } from '../../constants/apiUrls';
import mainBackground from '../../assets/mainBackground.png';

// eslint-disable-next-line object-curly-newline
import { HomepageContainer, BackgroundImgContainer, BackgroundImage, Title } from './Home.style';

function Homepage() {
  const [movies, setMovies] = useState([]);

  const renderMovieCards = async () => {
    const res = await getData(topRatedMovieUrl);
    setMovies(res);
  };
  return (
    <HomepageContainer>
      {/* <Main /> */}
      <BackgroundImgContainer>
        <BackgroundImage src={mainBackground} alt="mainBackground" />
      </BackgroundImgContainer>
      <Title>
        <p>Millions of movies, TV shows and people to discover. Explore now</p>
      </Title>
      <SearchBar />
      <PopularMovieList />
      <div>
        NowPlayingMovies
        <CardCarousel />
      </div>

      <Button onClick={renderMovieCards}>Top Rated movies</Button>
      {movies ? <MovieList movies={movies} /> : ''}
      <Outlet />
    </HomepageContainer>
  );
}

export default Homepage;
