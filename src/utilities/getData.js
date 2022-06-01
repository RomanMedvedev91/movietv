import axios from 'axios';

const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&page=1`;
// const testRequest = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_OPENAI_API_KEY}`;

async function getData() {
  try {
    const res = await axios.get(topRated);
    // console.log(res.data);
    return res.data.results;
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;
