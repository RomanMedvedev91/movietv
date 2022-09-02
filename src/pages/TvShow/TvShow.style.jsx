import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetail = styled.section`
  width: 100%;
  // img background full height
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  margin-top: 4.8em;

  .ui.button.show-more {
    padding: 0;
    margin-left: 1.2em;
    background: none;
    font-weight: 800;
    color: #3c64b1;

    &:hover {
      color: #fff;
    }
  }
`;

export const MovieDetailWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatorsTableStyle = styled.div`
  display: flex;
  justify-content: start;
  gap: 2em;
  margin-top: 3.2em;
  margin-bottom: 2.2em;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const TvshowsNetworks = styled.div`
  span {
    width: 100%;
  }
  span > img {
    max-width: 3em;
    background-color: #fff;
    padding: 0.2em;
  }
  div {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* align-items: center; */
    gap: 1em;
  }
`;

export const TvShowCreaterStyleLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  margin-right: 0.2em;
  font-size: 1.2em;
  font-weight: 600;
  /* font-weight: 800; */
  &:hover {
    color: #3c64b1;
  }
`;

export const TvShowsLinksStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  margin-top: 2em;
`;

export const LastSeasonContainerStyle = styled.section`
  padding-bottom: 4em;
  /* border-bottom: 1px solid #d7d7d7; */

  margin-top: 4em;
  h2 {
    margin-bottom: 2em;
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
