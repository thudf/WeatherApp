import styled from 'styled-components';
import { lighten } from 'polished';

import { device } from '../../lib/deviceSizes';

export const Header = styled.header`
  padding: 16px 0;
  background: #28262e;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.laptopL} {
    width: 50%;
  }
`;

export const HeaderNav = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
      margin-right: 10px;
    }

    span {
      font-size: 26px;
      line-height: 1;
      color: #eeeeee;
      position: relative;
    }

    span::after {
      content: 'App';
      font-weight: 600;
      color: #ff9800;
      position: absolute;
      right: -46px;
    }
  }

  > div:hover {
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #d10a10;
      width: 30px;
      height: 30px;
      transition: all .3s;
    }

    &:hover svg {
      color: ${lighten(0.08, '#d10a10')};
    }
  }
`;
