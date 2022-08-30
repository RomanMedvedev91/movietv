import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    text-align: center;
  }
  span > img {
    max-width: 4em;
    background-color: #fff;
    padding: 0.2em;
  }
  div {
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
`;
