import axios from 'axios';

async function getData(query) {
  try {
    const res = await axios.get(query).then((response) => response);
    return res.data;
  } catch (error) {
    throw new Error(error);
    // return console.log('Error', error);
  }
}

export default getData;
