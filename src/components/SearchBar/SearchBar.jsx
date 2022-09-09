import { useState } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import { SearchFormContainer, ButtonContainer } from './SearchBar.style';

function SearchBar() {
  const [currentInput, setCurrentInput] = useState('');

  const navigate = useNavigate();

  const onInputChangeHandle = (e) => {
    setCurrentInput(e.target.value);
  };

  const search = () => {
    // link to search page
    // use navigate function template
    // https://blog.webdevsimplified.com/2022-07/react-router/
    navigate({
      pathname: '/search',
      search: createSearchParams({
        query: currentInput
      }).toString()
    });
  };

  return (
    <SearchFormContainer>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Movie, artist, genre"
          value={currentInput}
          onChange={onInputChangeHandle}
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
