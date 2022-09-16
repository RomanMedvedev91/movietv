import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export

export const StyledSearchSection = styled.section`
  height: calc(100vh - 65px);
`;

export const HomepageContainer = styled.main`
  max-width: 1172px;
  margin: auto;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* background-color: bisque; */
  /* padding: 20px 80px; */
  /* .
  ui.card,
  .ui.cards > .card {
    box-shadow: none;
    transition: transform 0.5s ease;
    &:hover {
      box-shadow: none;
      cursor: pointer;
       transform: scale(1.1); 
    }
  }
  */
`;

export const BackgroundImgContainer = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  margin: auto;
  /* opacity: 0.5; */
`;

export const BackgroundImage = styled.img`
  height: 100%;
`;

export const HeaderGradient = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: calc(100% - 85%);
  width: 100%;
  height: 800px;
  background: linear-gradient(to top, #141313, 80%, transparent);
`;

export const Title = styled.div`
  max-width: 590px;
  font-family: 'Mulish', sans-serif;
  padding: 7em 0 3.8em 0;
  color: #fff;
  p {
    font-weight: 800;
    font-size: 2.3em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const PopularMoviesContainer = styled.section`
  margin-top: -20em;
  /* margin-top: 12em; */
  a.ui.card {
    padding: 0;

    &:hover {
      background: none;
      box-shadow: none;
      cursor: pointer;
    }
  }
`;

export const TrailerContainer = styled.div`
  padding: 10px;
  color: #fff;

  h3 {
    cursor: pointer;
    font-weight: 700;
    font-size: 1.28em;
    margin: 0.5em 0 0 0;
    line-height: 1.28571429em;
  }
  p {
    cursor: pointer;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.85);
  }

  .ui.embed {
    border-radius: 0.28571429rem;

    .play.icon {
      transition: all 0.5s ease;
      &:hover {
        background: rgba(0, 0, 0, 0.4);
        transform: scale(1.2);
      }
    }
  }
`;

export const CardContainer = styled.div`
  padding: 10px;
`;
