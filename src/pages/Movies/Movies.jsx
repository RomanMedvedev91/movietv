import { Route, Routes } from 'react-router-dom';
import Movie from '../Movie/Movie';
import MoviesPreview from '../MoviesPreview/MoviesPreview';

function Movies() {
  return (
    <Routes>
      <Route index element={<MoviesPreview />} />
      <Route path=":movie_id" element={<Movie />} />
    </Routes>
  );
}

export default Movies;
