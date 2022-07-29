import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomepageContainer = styled.main`
  max-width: 1172px;
  margin: auto;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* background-color: bisque; */
  /* padding: 20px 80px; */
  .ui.card,
  .ui.cards > .card {
    box-shadow: none;
    transition: transform 0.5s ease;
    &:hover {
      box-shadow: none;

      cursor: pointer;
      /* transform: scale(1.1); */
    }
  }
`;

export const BackgroundImgContainer = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  margin: auto;
  opacity: 0.5;
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

export const BackgroundImage = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  max-width: 590px;

  font-family: 'Mulish', sans-serif;
  margin: 7em 0 3.8em 0;
  color: #fff;
  p {
    font-weight: 800;
    font-size: 2.3em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const PopularMoviesContainer = styled.section`
  margin-top: 12em;
  /* .ui.card,
  .ui.cards > .card {
    box-shadow: none;
    transition: transform 0.5s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  } */
`;
