import styled from 'styled-components';

export const StyledSearchContainer = styled.main`
  color: #fff;
  max-width: 1172px;
  margin: auto;
  font-family: 'Mulish', sans-serif;
  h1 {
    font-weight: 800;
    font-size: 2.5em;
    margin: 0;
  }

  .ui.items > .item > .content > * {
    color: #fff;
  }
  .ui.items > .item > .content > .meta {
    margin: 1em 0;
  }
  .ui.items > .item > .content > .description {
    margin-top: 2em;
  }
  a {
    font-weight: 600;
    font-size: 1.2em;
    color: #fff;
    align-self: center;
    &:hover {
      color: #3c64b1;
    }
  }
`;

export const StyledSearchList = styled.section`
  margin-top: 4.8em;
`;

export const StyledTabsContainer = styled.div`
  margin-top: 6em;

  h2 {
    margin-bottom: 1em;
  }
  /* .ui.card {
  padding: 10px;
} */
  .ui.segment {
    min-height: 300px;
    background: none;
    border: none;
    border-radius: 0%;
    margin: 0;
    padding: 0;
  }

  .ui.text.menu .item {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 1em;
  }

  .ui.text.menu .active.item {
    color: rgba(255, 255, 255, 0.95);
    border-bottom: 2px solid #3c64b1;
  }
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 3em;
  gap: 1.25em;
  justify-content: end;
`;
