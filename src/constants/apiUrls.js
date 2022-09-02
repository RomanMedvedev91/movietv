/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line import/prefer-default-export

// ========  MOVIES lists =======

export const topRatedMovieUrl = (page = 1) =>
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const popularMovieUrl = (page = 1) => `
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const nowPlayingMovieUrl = (page = 1) => `
https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const upcommingMovieUrl = (page = 1) => `
https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const latestMovieUrl = (page = 1) => `
https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const getMovieFilterUrl = (state, page = 1) => {
  const sortBy = state.sortBy ? `&sort_by=${state.sortBy}` : '';
  const genres = state.genres ? `&with_genres=${state.genres}` : '';
  const year = state.year ? `&primary_release_year=${state.year}` : '';
  return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}${sortBy}${year}${genres}&with_watch_monetization_types=flatrate`;
};

// eslint-disable-next-line prettier/prettier
export const videoUrl = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const getMovieDetails = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&append_to_response=videos,images&include_image_language=en,null`;

export const getRecommendationsMovies = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const getMovieCredits = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

// ===== TV SHOES =========

export const popularTvUrl = (page = 1) =>
  `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const topRatedTvUrl = (page = 1) =>
  `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const airingTodayTvUrl = (page = 1) =>
  `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const onTheAirTvUrl = (page = 1) =>
  `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=${page}`;

export const getTvShowsFilterUrl = (state, page = 1) => {
  const sortBy = state.sortBy ? `&sort_by=${state.sortBy}` : '';
  const genres = state.genres ? `&with_genres=${state.genres}` : '';
  const year = state.year ? `&first_air_date_year=${state.year}` : '';
  return `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US${sortBy}${year}&page=${page}&timezone=America%2FNew_York${genres}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
};

export const getTvShowDetails = (movieId) =>
  `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&append_to_response=videos,images&include_image_language=en,null`;

export const getRecommendationsTvShows = (movieId) =>
  `https://api.themoviedb.org/3/tv/${movieId}/recommendations?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const getTvShowCredits = (movieId) =>
  `https://api.themoviedb.org/3/tv/${movieId}/aggregate_credits?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const getTvSeasonDetails = (movieId, seasonNum) =>
  `https://api.themoviedb.org/3/tv/${movieId}/season/${seasonNum}?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

// ========= PERSON =============

export const getPersonDetails = (personId) =>
  `https://api.themoviedb.org/3/person/${personId}?append_to_response=images&api_key=${process.env.REACT_APP_OPENAI_API_KEY}`;

export const getPersonMoviesCredits = (personId) =>
  `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const getPersonExternalIds = (personId) =>
  `https://api.themoviedb.org/3/person/${personId}/external_ids?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

// ===== IMAGE URLs ============

export const tmdbPosterPath = 'https://image.tmdb.org/t/p/w500';

export const TMDB_POSTER_BASE = 'https://image.tmdb.org/t/p/original';
// export const TMDB_BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1400_and_h450_face/';
export const TMDB_BACKDROP_PATH = 'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2';
export const TMDB_POSTER_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_face';

// data for API

export const filterMovieGenres = [
  { key: 1, text: 'Action', value: 28 },
  { key: 2, text: 'Adventure', value: 12 },
  { key: 3, text: 'Animation', value: 16 },
  { key: 4, text: 'Comedy', value: 35 },
  { key: 5, text: 'Crime', value: 80 },
  { key: 6, text: 'Documentary', value: 99 },
  { key: 7, text: 'Drama', value: 18 },
  { key: 8, text: 'Family', value: 10751 },
  { key: 9, text: 'Fantasy', value: 14 },
  { key: 10, text: 'History', value: 36 },
  { key: 11, text: 'Horror', value: 27 },
  { key: 12, text: 'Music', value: 10402 },
  { key: 13, text: 'Mystery', value: 9648 },
  { key: 14, text: 'Romance', value: 10749 },
  { key: 15, text: 'Science Fiction', value: 878 },
  { key: 16, text: 'TV Movie', value: 10770 },
  { key: 17, text: 'Thriller', value: 53 },
  { key: 18, text: 'War', value: 10752 },
  { key: 19, text: 'Western', value: 37 }
];
export const filterTvShowsGenres = [
  { key: 1, text: 'Action & Adventure', value: 10759 },
  { key: 3, text: 'Animation', value: 16 },
  { key: 4, text: 'Comedy', value: 35 },
  { key: 5, text: 'Crime', value: 80 },
  { key: 6, text: 'Documentary', value: 99 },
  { key: 7, text: 'Drama', value: 18 },
  { key: 8, text: 'Family', value: 10751 },
  { key: 9, text: 'Kids', value: 10762 },
  { key: 10, text: 'Mystery', value: 9648 },
  { key: 11, text: 'News', value: 10763 },
  { key: 12, text: 'Reality', value: 10764 },
  { key: 13, text: 'Sci-Fi & Fantasy', value: 10765 },
  { key: 14, text: 'Soap', value: 10766 },
  { key: 15, text: 'Talk', value: 10767 },
  { key: 16, text: 'War & Politics', value: 10768 },
  { key: 19, text: 'Western', value: 37 }
];

export const filterSortBy = [
  { key: 1, text: 'Popularity Descending', value: 'popularity.desc' },
  { key: 2, text: 'Popularity Ascending', value: 'popularity.asc' },
  { key: 3, text: 'Raiting Descending', value: 'vote_average.desc' },
  { key: 4, text: 'Raiting Ascending', value: 'vote_average.asc' },
  { key: 5, text: 'Release Descending', value: 'release_date.desc' },
  { key: 6, text: 'Release Ascending', value: 'release_date.asc' },
  { key: 7, text: 'Revenue Descending', value: 'revenue.desc' },
  { key: 8, text: 'Revenue Ascending', value: 'revenue.asc' },
  { key: 9, text: 'Title (A-Z)', value: 'original_title.asc' }
];

// const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

// `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

// const searchMovie = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${searchQuery}d&page=1&include_adult=false`;

// const testRequest = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_OPENAI_API_KEY}`;

// const getSimilarMovie = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1`

// export const FILTER_URL = (sortBy, page = 1) =>
//   `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&sort_by=${sortBy}c&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;

// filter by vote range
// https://api.themoviedb.org/3/discover/movie?api_key=###&vote_average.gte=2.0&vote_average.lte=8.0
