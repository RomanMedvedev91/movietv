import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import getData from '../../utilities/getData';
import topRatedMovieUrl from '../../constants/apiUrls';

import { MainScreenContainer, BackgroundImgContainer, BackgroundImage } from './Main.style';
import mainBackground from '../../assets/mainBackground.png';

function Main() {
  const [movies, setMovies] = useState([]);

  const renderMovieCards = async () => {
    const res = await getData(topRatedMovieUrl);
    setMovies(res);
  };

  return (
    <MainScreenContainer>
      <BackgroundImgContainer>
        <BackgroundImage src={mainBackground} alt="mainBackground" />
      </BackgroundImgContainer>
      <div>
        <p>Millions of movies, TV shows and people to discover. Explore now</p>
      </div>
      <SearchBar />
      <Button onClick={renderMovieCards}>Top Rated movies</Button>
      {movies ? <MovieList movies={movies} /> : ''}
    </MainScreenContainer>
  );
}

export default Main;
