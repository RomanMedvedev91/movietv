import styled from 'styled-components';

export const PersonContainer = styled.main`
  color: #fff;
  max-width: 1172px;
  margin: auto;
  /* z-index: 2; */
  font-family: 'Mulish', sans-serif;
  h2 {
    font-weight: 800;
    font-size: 2.5em;
    margin: 0;
  }
`;

export const PersonDetail = styled.section`
  width: 100%;
  // img background full height
  /* height: 100vh; */
  display: flex;
  margin-top: 4.8em;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* margin: auto; */
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

export const PersonDataContainer = styled.div`
  width: 800px;
  padding: 0 55px 0 20px;
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

  a,
  a > i {
    color: #fff;
    opacity: 0.8;
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.15);
      color: #fff;
      opacity: 1;
    }
  }
`;

export const PersonDataTable = styled.div`
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
`;
