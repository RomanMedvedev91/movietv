import axios from 'axios';

async function getData(query) {
  try {
    const res = await axios.get(query).then((response) => response);
    return res.data.results;
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;
