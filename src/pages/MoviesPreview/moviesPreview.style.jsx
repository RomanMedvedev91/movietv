import styled from 'styled-components';

export const StyledMoviesContainer = styled.main`
  color: #fff;
  max-width: 1172px;
  margin: auto;
  font-family: 'Mulish', sans-serif;
  h1 {
    font-weight: 800;
    font-size: 2.5em;
    margin: 2.5em 0;
  }
`;

export const StyledMoviesList = styled.section`
  /* width: 100%; */
  // img background full height
  /* height: 100vh; */
  /* display: flex; */
  margin-top: 4.8em;
`;

export const StyledPaginationWrapper = styled.div`
  margin-top: 4.5em;
  display: block;
  text-align: center;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  gap: 1.25em;
  justify-content: end;
`;
