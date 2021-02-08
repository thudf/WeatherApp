import styled from 'styled-components';
import { lighten } from 'polished';

export const Footer = styled.footer`
  padding: 28px 0;
  background: #9e9e9e;
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
`;

export const FooterContent = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
      margin-bottom: 4px;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      span {
        font-size: 26px;
        line-height: 1;
        color: #eeeeee;
      }

      span + span {
        font-size: 26px;
        font-weight: 600;
        color: #ff9800;
        transform: translateX(-5px);
      }
    }

    > span {
      margin-top: 6px;
      font-size: 12px;
      color: #212121;
    }

  }
`;
