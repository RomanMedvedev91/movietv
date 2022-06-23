import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
// export const MainScreenContainer = styled.div`
//   /* background-color: aliceblue; */
// `;

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

  margin: 7em 0 3.8em 0;
  color: #fff;
  p {
    font-family: 'Mulish', sans-serif;
    font-weight: 800;
    font-size: 2.3em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
