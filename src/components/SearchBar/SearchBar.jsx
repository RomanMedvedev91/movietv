import { useState, useContext } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/Search.context';

import { SearchFormContainer, ButtonContainer } from './SearchBar.style';

function SearchBar() {
  const [currentInput, setCurrentInput] = useState('');
  const { setCurrentSearch } = useContext(SearchContext);

  const navigate = useNavigate();

  const onInputChangeHandle = (e) => {
    setCurrentInput(e.target.value);
  };

  const search = () => {
    setCurrentSearch(currentInput);
    // link to search page
    navigate(`/search/${currentInput}`);
    // navigate(`/search?query=${currentInput}`);
  };

  return (
    <SearchFormContainer>
      {/* <Title>
        <p>Millions of movies, TV shows and people to discover. Explore now</p>
      </Title> */}
      <Form onSubmit={(e) => e.preventDefault()}>
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
