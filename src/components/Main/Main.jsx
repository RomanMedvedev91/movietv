import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import PopularMovieList from '../PopularMovieList/PopularMovieList';
import getData from '../../utilities/getData';
import { topRatedMovieUrl } from '../../constants/apiUrls';

import { BackgroundImgContainer, BackgroundImage, Title } from './Main.style';
import mainBackground from '../../assets/mainBackground.png';
import NowPlayingMovies from './NowPlayingMovies/NowPlayingMovies';

function Main() {
  const [movies, setMovies] = useState([]);

  const renderMovieCards = async () => {
    const res = await getData(topRatedMovieUrl);
    setMovies(res);
  };

  return (
    <>
      {/* <MainScreenContainer> */}
      <BackgroundImgContainer>
        <BackgroundImage src={mainBackground} alt="mainBackground" />
      </BackgroundImgContainer>
      <Title>
        <p>Millions of movies, TV shows and people to discover. Explore now</p>
      </Title>
      <SearchBar />
      <PopularMovieList />
      <NowPlayingMovies />
      <Button onClick={renderMovieCards}>Top Rated movies</Button>
      {movies ? <MovieList movies={movies} /> : ''}
      {/* </MainScreenContainer> */}
    </>
  );
}

export default Main;
