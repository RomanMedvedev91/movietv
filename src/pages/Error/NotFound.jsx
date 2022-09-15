/* eslint-disable object-curly-newline */
import { useNavigate } from 'react-router-dom';

import { Button, Container, Divider, Header } from 'semantic-ui-react';

function NotFound() {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/');
  };

  return (
    <Container textAlign="center">
      <Header inverted as="h1">
        Requested Page Could Not Be Found
      </Header>
      <Divider />

      <Button primary onClick={returnHome}>
        to Homepage
      </Button>
    </Container>
  );
}

export default NotFound;
