/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  /* position: relative; */
  max-width: 1172px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: 25em;
  height: 810px;
  li:first-child {
    font-weight: 800;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const BackgroundImg = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  /* height: 700px; */

  img {
    width: 100%;
  }
`;

export const NavItemContainer = styled.ul`
  margin-left: 6em;
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
  /* width: calc(90px * 0.8); */
  /* display: flex; */
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
