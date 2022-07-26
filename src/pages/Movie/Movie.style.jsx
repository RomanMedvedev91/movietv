import styled from 'styled-components';

export const MovieContainer = styled.main`
  color: #fff;
  max-width: 1172px;
  margin: auto;
  /* z-index: 2; */
  h2 {
    font-family: 'Mulish', sans-serif;
    font-weight: 800;
    font-size: 2.5em;
    margin: 0;
  }
`;

export const MovieDetail = styled.section`
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;

  top: 0;
  left: 0;
  /* 
  overflow: hidden; */
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* margin: auto; */
  z-index: -1;
  img {
    opacity: 0.2;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
  }
`;

export const PosterContainer = styled.div`
  max-width: 300px;

  img {
    width: 100%;
    display: block;
  }
`;

export const CastContainer = styled.section``;

export const MediaContainer = styled.section``;

export const RecommendedContainer = styled.section``;
