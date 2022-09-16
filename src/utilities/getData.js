import axios from 'axios';

async function getData(query) {
  try {
    const res = await axios.get(query).then((response) => {
      console.log(response);
      return response;
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;
