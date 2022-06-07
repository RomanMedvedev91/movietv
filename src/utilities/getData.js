import axios from 'axios';

// const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;

// `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

// const searchMovie = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${searchQuery}d&page=1&include_adult=false`;

// const testRequest = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_OPENAI_API_KEY}`;

async function getData(query) {
  try {
    const res = await axios.get(query);
    // console.log(res.data);
    return res.data.results;
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;
