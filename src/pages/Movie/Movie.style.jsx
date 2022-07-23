import styled from 'styled-components';

export const MovieContainer = styled.main`
  color: #fff;
`;

export const MovieDetail = styled.section`
  background-image: url(${(props) => props.img});
  background-size: cover;
  /* position: absolute; */
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const CastContainer = styled.section``;

export const MediaContainer = styled.section``;

export const RecommendedContainer = styled.section``;
