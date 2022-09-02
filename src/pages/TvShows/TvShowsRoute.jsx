import { Route, Routes } from 'react-router-dom';
import * as route from '../../constants/routes';

import TvShow from '../TvShow/TvShow';
import TvShowsPopular from './TvShowsPopular';
import TvShowsAiringToday from './TvShowsAiringToday';
import TvShowsOnTheAir from './TvShowsOnTheAir';
import TvShowsTopRated from './TvShowsTopRated';
import Seasons from '../Seasons/Seasons';
import Season from '../Season/Season';

function TvShowsRoute() {
  return (
    <Routes>
      <Route index element={<TvShowsPopular />} />
      <Route path={route.AIRING_TODAY} element={<TvShowsAiringToday />} />
      <Route path={route.ON_TV} element={<TvShowsOnTheAir />} />
      <Route path={route.TOP_RATED} element={<TvShowsTopRated />} />
      <Route path={route.TVSHOW_ID}>
        <Route index element={<TvShow />} />
        <Route path={route.TVSHOW_SEASONS} element={<Seasons />} />

        <Route path={route.TVSHOW_SEASON}>
          <Route path={route.TVSHOW_SEASON_ID} element={<Season />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default TvShowsRoute;
