import { useNavigate } from 'react';

import { Button, Container, Divider } from 'semantic-ui-react';

function NotFound() {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Header as="h1">The Page You Requested Could Not Be Found</Header>
      <Divider />
      <Button color="red" onClick={returnHome}>
        Okay
      </Button>
    </Container>
  );
}

export default NotFound;
