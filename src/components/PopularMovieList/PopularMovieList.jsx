import { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';

// import MovieList from '../MovieList/MovieList';
import MovieCardNoDetails from '../MovieCardNoDetails/MovieCardNoDetails';
import { popularMovieUrl } from '../../constants/apiUrls';
import getData from '../../utilities/getData';

import { PopularMoviesContainer } from './PopularMovieList.style';

function PopularMovieList() {
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const renderPopularMovieCards = async () => {
      setIsLoading(true);
      const res = await getData(popularMovieUrl);
      setPopularMovies(res.slice(0, 5));
      setIsLoading(false);
    };
    renderPopularMovieCards();
  }, []);

  const renderMovieCards = (moviesCards) =>
    // console.log('movies', movies);
    // eslint-disable-next-line implicit-arrow-linebreak
    moviesCards.map((movie) => <MovieCardNoDetails key={movie.id} movie={movie} />);
  return (
    <PopularMoviesContainer>
      PopularMovieList
      <div>{isLoading ? 'Loading' : ''}</div>
      {/* <MovieList movies={popularMovies} /> */}
      <Card.Group itemsPerRow={5}>{renderMovieCards(popularMovies)}</Card.Group>
    </PopularMoviesContainer>
  );
}

export default PopularMovieList;
