/* eslint-disable operator-linebreak */
function getSearchMovieUrl(query) {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${query}&include_adult=false`;
}

export default getSearchMovieUrl;

const currentYear = new Date().getFullYear();
export const filterYear = new Array(currentYear - 1899)
  .fill({})
  .map((obj, indx) => ({ key: indx + 1, text: currentYear - indx, value: currentYear - indx }));

export const getGenres = (movieDetails) => {
  let genresString = '';
  movieDetails.genres.forEach((genre, i, array) => {
    if (i === array.length - 1) {
      genresString += `${genre.name}`;
    } else {
      genresString += `${genre.name}, `;
    }
  });
  return genresString;
};

export const getReleaseDateAndCountry = (movieDetails) => {
  const date =
    movieDetails.release_date?.replace(/-/g, '/') ||
    movieDetails.first_air_date?.replace(/-/g, '/');

  let countries = '';
  movieDetails.production_countries.forEach(
    // eslint-disable-next-line no-return-assign
    (country) => (countries += `(${country.iso_3166_1})`)
  );
  return `${date} ${countries} `;
};

export const runTime = (movieDetails) => {
  const timeInMinus = movieDetails.runtime || movieDetails.episode_run_time[0];
  const hours = Math.floor(timeInMinus / 60);
  const minutes = Math.floor(timeInMinus % 60);

  if (hours === 0 && minutes > 0) return `${minutes}m`;
  if (hours > 0 && minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
};

export const getDateHumanReadble = (date) => {
  const dateObject = new Date(Date.parse(date));
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  };

  return dateObject.toLocaleDateString('en-US', options);
};
