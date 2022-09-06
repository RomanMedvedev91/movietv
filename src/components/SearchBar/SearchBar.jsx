import { useState, useContext } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../context/Search.context';

import { SearchFormContainer, ButtonContainer } from './SearchBar.style';

function SearchBar() {
  const [currentInput, setCurrentInput] = useState('');
  const { setCurrentSearch } = useContext(SearchContext);
  // const [searchParams, setSearchParams] = useSearchParams({ search: null });

  const navigate = useNavigate();

  const onInputChangeHandle = (e) => {
    setCurrentInput(e.target.value);

    // const search = e.target.value;
    // if (search) {
    //   setSearchParams({ search });
    // } else {
    //   setSearchParams({});
    // }

    // setSearchParams(search, { replace: true });
  };

  const search = () => {
    setCurrentSearch(currentInput);
    // link to search page
    navigate({
      pathname: '/search',
      search: `?query=${currentInput}` // inject code value into template
    });
    // navigate(`/search/${currentInput}`);
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
          // value={searchParams.get('search') || ''}
          onChange={onInputChangeHandle}
        />
        {/* {console.log(searchParams)} */}
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
