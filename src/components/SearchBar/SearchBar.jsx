import { useState, useContext } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/Search.context';
import getData from '../../utilities/getData';
import getSearchMovieUrl from '../../utilities/helperFunctions';

function SearchBar() {
  const [currentSearch, setCurrentSearch] = useState('');
  const [error, setError] = useState('');
  const { setSearchMovies } = useContext(SearchContext);
  const navigate = useNavigate();

  const search = async () => {
    if (currentSearch === '') {
      setError('currentSearch cannot be blank');
      return;
    }

    setError('');
    const searchUrl = getSearchMovieUrl(currentSearch);
    // await getData(searchUrl).then((res) => setSearchMovies(res));
    const res = await getData(searchUrl);
    setSearchMovies(res);

    // link to search page
    navigate(`/search?query=${currentSearch}`);
    // empty textarea
    setCurrentSearch('');
  };

  return (
    <>
      <Form>
        <Form.Field>
          <label htmlFor="find movie">Find movie</label>
          <Input
            placeholder="Search..."
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
          />
          <Button onSubmit={(e) => e.preventDefault()} onClick={search}>
            Search
          </Button>
        </Form.Field>
      </Form>
      {error ? <div>{error}</div> : ''}
    </>
  );
}

export default SearchBar;
