import styled from 'styled-components';

export const StyledMoviesContainer = styled.main`
  color: #fff;
  max-width: 1172px;
  margin: auto;
  font-family: 'Mulish', sans-serif;
  h1 {
    font-weight: 800;
    font-size: 2.5em;
    margin: 0;
  }
`;

export const StyledMoviesList = styled.section`
  /* width: 100%; */
  // img background full height
  /* height: 100vh; */
  /* display: flex; */
  margin-top: 4.8em;
  padding: 0 1.25em;

  h1 {
    text-align: ${({ isMobile }) => (isMobile ? 'center' : undefined)};
  }
`;

export const StyledPaginationWrapper = styled.div`
  margin-top: 4.5em;
  display: block;
  text-align: center;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 3em;
  gap: 1.25em;
  justify-content: end;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : undefined)};
  max-width: ${({ isMobile }) => (isMobile ? '300px' : undefined)};
  margin-left: ${({ isMobile }) => (isMobile ? 'auto' : undefined)};
  margin-right: ${({ isMobile }) => (isMobile ? 'auto' : undefined)};
`;
