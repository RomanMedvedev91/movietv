import { useState, useContext } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/Search.context';

import { SearchFormContainer, Title, ButtonContainer } from './SearchBar.style';

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
    <SearchFormContainer>
      <Title>
        <p>Millions of movies, TV shows and people to discover. Explore now</p>
      </Title>
      <Form>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Movie, artist, genre"
          value={currentInput}
          onChange={(e) => onInputChangeHandle(e)}
        />
        <ButtonContainer>
          <Button primary onSubmit={(e) => e.preventDefault()} onClick={search}>
            Search
          </Button>
        </ButtonContainer>
      </Form>
    </SearchFormContainer>
  );
}

export default SearchBar;
