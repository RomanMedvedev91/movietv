/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterContainer = styled.footer`

  max-width: 1172px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* padding-bottom: 2em; */
  height: 676px;
  li:first-child {
    font-weight: 600;
    font-size: 1.2em;
  }
  padding: ${(props) => (props.isMobile ? '2em' : '2em 1.5em')};
`;
export const FooterGradient = styled.div`
  position: absolute;
  z-index: -2;
  left: 0;
  width: 100%;
  bottom: calc(100vh - 50vh);
  height: calc(100vh - 30vh);
  background: linear-gradient(to bottom, #141313, 80%, transparent);
`;

export const LinksContainer = styled.div`
  display: flex;
  z-index: 1;
  gap: ${(props) => (props.isMobile ? undefined : '10em')};
  flex-direction: ${(props) => (props.isMobile ? 'column' : undefined)};
  align-items: ${(props) => (props.isMobile ? 'center' : undefined)};
`;

export const NavigationContainer = styled.div`
  display: flex;
  padding-top: 1.4em;
  gap: 10em;
`;

export const BackgroundImg = styled.div`
  position: absolute;
  z-index: -5;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 30%;

  img {
    width: 100%;
    height: 100vh;
    display: block;
  }
`;

export const NavItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
    &:hover {
      color: #3c64b1;
      /* font-weight: 800; */
    }
  }
`;

export const NavItem = styled.li`
  margin-bottom: 1em;
  display: inline-block;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const SocialsContainer = styled.div`
  a {
    color: #fff;
  }

  p {
    font-weight: 600;
    font-size: 1.2em;
    display: flex;
    justify-content: ${(props) => (props.isMobile ? 'center' : 'end')};
  }

  .facebook {
    &:hover,
    &:focus {
      color: #3b5998;
      filter: drop-shadow(0 0 24px #3b5998);
    }
  }

  .instagram {
    &:hover {
      color: #d6249f;
      filter: drop-shadow(0 0 24px #d6249f);
    }
  }

  .github {
    &:hover {
      color: #4183c4;
      filter: drop-shadow(0 0 24px #4183c4);
    }
  }

  .twitter {
    &:hover {
      color: #00c7ff;
      filter: drop-shadow(0 0 24px #00c7ff);
    }
  }

  .youtube {
    &:hover {
      color: #cd201f;
      filter: drop-shadow(0 0 24px #cd201f);
    }
  }
`;

export const FooterDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-top: 2em;

  div:first-of-type {
    display: flex;
    align-self: ${(props) => (props.isMobile ? 'center' : 'end')};
  }
  flex-direction: ${(props) => (props.isMobile ? 'column' : undefined)};

`;
