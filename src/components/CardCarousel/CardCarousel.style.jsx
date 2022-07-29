import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export

export const CarouselMoviesContainer = styled.section`
  width: 100%;

  .ui.embed > .icon:before {
    font-size: 4em;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  .carousel__back-button {
    position: absolute;
    left: -7%;
    top: 35%;
  }
  .carousel__next-button {
    position: absolute;
    right: -7%;
    top: 35%;
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
    }
  }
`;
