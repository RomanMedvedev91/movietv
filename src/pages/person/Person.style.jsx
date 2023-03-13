import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PersonContainer = styled.main`
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

export const PersonDetail = styled.section`
  height: calc(100% - 65px);
  width: 100%;
  display: flex;
  margin-top: 4.8em;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : undefined)};
  align-items: ${({ isMobile }) => (isMobile ? 'center' : undefined)};
`;

export const BackgroundImage = styled.div`
  height: calc(100vh - 65px);
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderGradient = styled.div`
  position: absolute;
  z-index: -2;
  left: 0;
  top: calc(100vh - 10vh);
  width: 100%;
  height: calc(100vh - 20vh);
  background: linear-gradient(to top, #141313, 80%, transparent);
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
  max-width: 800px;
  padding: ${({ isMobile }) => (isMobile ? '0 25px' : '0 55px 0 20px')};
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
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : undefined)};

  div {
    display: flex;
    flex-direction: column;

    span:nth-child(2) {
      font-size: 1.2em;
      font-weight: 600;
    }
  }
`;

export const PersonCreditsTable = styled.section`
  margin-top: 6em;
  padding: ${({ isMobile }) => (isMobile ? '0 25px' : '0')};

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

export const MovieCreditLink = styled(Link)`
  color: #3c64b1;
  cursor: pointer;
  margin-right: 0.2em;
  font-weight: 800;
  &:hover {
    color: #fff;
  }
`;
