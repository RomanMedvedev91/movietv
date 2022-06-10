function getSearchMovieUrl(query) {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${query}&include_adult=false`;
}

export default getSearchMovieUrl;
