import { useState } from 'react';
import { Input, Form, Icon } from 'semantic-ui-react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import { StyledSearchNavbarContainer } from './SearchBar.style';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function SearchNavbar() {
  const [currentInput, setCurrentInput] = useState('');
  const { isMobile } = useMediaQuery();
  const navigate = useNavigate();

  const onInputChangeHandle = (e) => {
    setCurrentInput(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    // link to search page
    // use navigate function template
    // https://blog.webdevsimplified.com/2022-07/react-router/
    if (!currentInput.length) return;
    navigate({
      pathname: '/search',
      search: createSearchParams({
        query: currentInput
      }).toString()
    });
    setCurrentInput('');
  };

  return (
    <StyledSearchNavbarContainer isMobile={isMobile}>
      <Form onSubmit={(e) => search(e)}>
        <Input
          fluid
          icon={<Icon name="search" onClick={search} circular link />}
          placeholder="Movie, artist, genre"
          value={currentInput}
          onChange={onInputChangeHandle}
        />
      </Form>
    </StyledSearchNavbarContainer>
  );
}

export default SearchNavbar;
