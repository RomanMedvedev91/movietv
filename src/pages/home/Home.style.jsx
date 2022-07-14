import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomepageContainer = styled.main`
  max-width: 1172px;
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
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const BackgroundImgContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  margin: auto;
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

export const CarouselMoviesContainer = styled.section`
  width: 100%;

  .ui.embed > .icon:before {
    font-size: 4em;
  }
`;

export const MoviesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12em;
  margin-bottom: 2em;

  color: #fff;
  font-family: 'Mulish', sans-serif;

  h2 {
    font-weight: 800;
    font-size: 2.5em;
    margin: 0;
  }
  a {
    font-weight: 600;
    font-size: 1.2em;
    color: #fff;
    align-self: center;
    &:hover {
      color: #3c64b1;
      /* font-weight: 800; */
    }
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  .carousel__back-button {
    position: absolute;
    left: -4em;
    top: 7em;
  }
  .carousel__next-button {
    position: absolute;
    right: -4em;
    top: 7em;
  }
  button {
    margin: 0;
    background: none;
    border: none;
    padding: 0px;
    transition: transform 0.3s ease;
    color: #fff;

    &:hover {
      transform: scale(1.15);
    }
    &:disabled {
      color: rgba(255, 255, 255, 0.3);
    }
  }
  /* .carousel {
    margin-left: -0.75em;
    margin-right: -0.75em;
  } */
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
