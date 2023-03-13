import styled from 'styled-components';

export const MovieContainer = styled.main`
  color: #fff;
  max-width: 1172px;
  margin: auto;
  font-family: 'Mulish', sans-serif;
  h2 {
    font-weight: 800;
    font-size: 2.5em;
    margin: 0;
  }
`;

export const MovieDetail = styled.section`
  width: 100%;
  display: flex;
  margin-top: 4.8em;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : undefined)};
  align-items: ${({ isMobile }) => (isMobile ? 'center' : undefined)};
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  img {
    opacity: 0.2;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
  }
`;

export const HeaderGradient = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 100px;
  width: 100%;
  height: 1000px;
  background: linear-gradient(0deg, #141313, 80%, transparent);
`;

export const PosterContainer = styled.div`
  max-width: 300px;
  border-radius: 0.28571429rem;

  img {
    width: 100%;
    display: block;
    border-radius: inherit;
  }
`;

export const MovieDataContainer = styled.div`
  max-width: 800px;
  padding: ${({ isMobile }) => (isMobile ? '0 25px' : '0 55px 0 20px')};
  p {
    margin: 0;
  }
  p:nth-of-type(1) {
    margin-top: 1.2em;
  }

  p:nth-of-type(1) span:not(:first-child)::before {
    content: ' • ';
  }
  p:nth-of-type(2) {
    margin-top: 3.2em;
    max-width: 510px;
  }
`;

export const MovieDataTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2em;
  margin-bottom: 2.2em;

  div {
    display: flex;
    flex-direction: column;

    span:nth-child(2) {
      font-size: 1.2em;
      font-weight: 600;
    }
  }
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : undefined)};

`;

export const CastContainer = styled.section`
  padding: 0 1.25em;
  .ui.card {
    padding: 10px;
  }
`;

export const MediaContainer = styled.section`
  margin-top: 6em;
  padding: 0 1.25em;
  h2 {
    margin-bottom: 1em;
  }
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

export const RecommendedContainer = styled.section`
padding: ${({ isMobile }) => (isMobile ? '0 20px' : undefined)};
`;
