import axios from 'axios';

async function getData(query) {
  try {
    const res = await axios.get(query).then((response) => response);
    console.log(res);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;
