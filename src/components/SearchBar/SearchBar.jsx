import { useState, useContext } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/Search.context';

function SearchBar() {
  const [currentInput, setCurrentInput] = useState('');
  const { currentSearch, setCurrentSearch } = useContext(SearchContext);

  const navigate = useNavigate();

  const onInputChangeHandle = (e) => {
    setCurrentInput(e.target.value);
  };

  const search = () => {
    setCurrentSearch(currentInput);
    // link to search page
    navigate(`/search?query=${currentSearch}`);
  };

  return (
    <Form>
      <Form.Field>
        <label htmlFor="find movie">Find movie</label>
        <Input
          placeholder="Search..."
          value={currentInput}
          onChange={(e) => onInputChangeHandle(e)}
        />
        <Button onSubmit={(e) => e.preventDefault()} onClick={search}>
          Search
        </Button>
      </Form.Field>
    </Form>
  );
}

export default SearchBar;
