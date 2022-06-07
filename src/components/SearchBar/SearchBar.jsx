import { useState } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import getData from '../../utilities/getData';

let searchQuery = '';
const searchMovieUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_OPENAI_API_KEY}&language=en-US&query=${searchQuery}d&page=1&include_adult=false`;

function SearchBar({ setMovies }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const search = async () => {
    if (name === '') {
      setError('name cannot be blank');
      return;
    }

    setError('');
    searchQuery = name;
    await getData(searchMovieUrl).then((res) => setMovies(res));
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
