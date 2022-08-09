import styled from 'styled-components';

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

export const CardContainer = styled.div`
  padding: 10px;
`;
