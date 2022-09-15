/* eslint-disable object-curly-newline */
import { Container, Header, Button, Divider } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function Seasons() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container textAlign="center">
      <Header inverted>All Seasons page under development sorry ...</Header>
      <Divider />

      <Button primary onClick={goBack}>
        Back
      </Button>
    </Container>
  );
}

export default Seasons;
