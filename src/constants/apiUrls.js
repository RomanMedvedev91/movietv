/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line import/prefer-default-export
export const topRatedMovieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

export const popularMovieUrl = `
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

export const nowPlayingMovieUrl = `
https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

export const upcommingMovieUrl = `
https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

export const latestMovieUrl = `
https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

// eslint-disable-next-line prettier/prettier
export const videoUrl = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const getMovieDetails = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const getMovieImages = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US`;

export const tmdbPosterPath = 'https://image.tmdb.org/t/p/w500';

export const TMDB_POSTER_BASE = 'https://image.tmdb.org/t/p/original/';
export const TMDB_BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1400_and_h450_face/';
export const TMDB_POSTER_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_face/';

// const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

// `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

// const searchMovie = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${searchQuery}d&page=1&include_adult=false`;

// const testRequest = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_OPENAI_API_KEY}`;

// const getSimilarMovie = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1`
