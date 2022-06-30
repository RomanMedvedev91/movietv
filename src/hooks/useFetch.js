import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => async () => {
      try {
        setLoading(true);
        const response = await axios.get(url).then((res) => res);
        console.log(response);
        setData(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { data, error, loading };
}
