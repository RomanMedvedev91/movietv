import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CarouselContainer = styled.div`
  position: relative;
  .carousel__back-button {
    position: absolute;
    left: -4em;
    top: 10em;
  }
  .carousel__next-button {
    position: absolute;
    right: -4em;
    top: 10em;
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
  .carousel {
    margin-left: -0.75em;
    margin-right: -0.75em;
  }
`;
