import styled from 'styled-components';

export const SearchFormContainer = styled.section`
  max-width: 590px;
  form {
    display: flex;

    div.input {
      opacity: 85%;
      width: 100%;
    }
  }
`;

export const Title = styled.div`
  margin: 7em 0 3.8em 0;
  color: #fff;
  p {
    font-family: 'Mulish', sans-serif;
    font-weight: 800;
    font-size: 2.3em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonContainer = styled.div`
  margin-left: 1.2em;
`;
