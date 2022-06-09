import { useState } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

import getData from '../../utilities/getData';

function SearchBar({ setMovies }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const getSearchMovieUrl = (query) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${query}&include_adult=false`;

  const search = async () => {
    if (name === '') {
      setError('name cannot be blank');
      return;
    }

    setError('');
    await getData(getSearchMovieUrl(name)).then((res) => setMovies(res));

    // link to search page
    navigate(`/search?query=${name}`);
    // empty textarea
    setName('');
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label htmlFor="find movie">Find movie</label>
          <Input placeholder="Search..." onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Button onSubmit={(e) => e.preventDefault()} onClick={search}>
          Search
        </Button>
      </Form>
      {error ? <div>{error}</div> : ''}
      <div>{name}</div>
    </div>
  );
}

export default SearchBar;
