import styled from 'styled-components';

export const SearchFormContainer = styled.section`
  max-width: 590px;
  /* .ui.form input {
    background: none;
  } */

  form {
    display: flex;
    div.input {
      opacity: 85%;
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-left: 1.2em;
`;

export const StyledSearchNavbarContainer = styled.div`
  width: ${({ isMobile }) => (isMobile ? '100%' : '200px')};

  form {
    display: flex;
    div.input {
      opacity: 85%;
      width: 100%;
    }
  }

  i.circular.icon {
    box-shadow: 0 0 0 0.1emrgba (0, 0, 0, 0.9) inset;
  }
  i.circular.icon:hover {
    background-color: #2185d0 !important;
    box-shadow: none;
    color: #fff;
  }
`;
