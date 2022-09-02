import { Route, Routes } from 'react-router-dom';
import * as route from '../../constants/routes';
import Movie from '../Movie/Movie';
import MoviesPopular from './MoviesPopular';
import MoviesTopRated from './MoviesTopRated';
import MoviesNowPlaying from './MoviesNowPlaying';
import MoviesUpcoming from './MoviesUpcoming';

function MoviesRoutes() {
  return (
    <Routes>
      <Route index element={<MoviesPopular />} />
      <Route path={route.TOP_RATED} element={<MoviesTopRated />} />
      <Route path={route.UPCOMING} element={<MoviesUpcoming />} />
      <Route path={route.NOW_PLAYING} element={<MoviesNowPlaying />} />
      <Route path={route.MOVIE_ID} element={<Movie />} />
    </Routes>
  );
}

export default MoviesRoutes;
