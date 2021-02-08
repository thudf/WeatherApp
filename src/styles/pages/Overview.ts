import styled from 'styled-components';

import { device } from '../../lib/deviceSizes';

export const Container = styled.div`
  display: flex;
  width: 90%;
  padding: 28px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: initial;

  > div + div {
    margin-top: 28px;
  }

  @media ${device.tablet} {
    padding: 64px 0;
    flex-direction: row;
    width: 80%;

    > div + div {
      margin-top: 0;
      margin-left: 10%;
    }
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.laptopL} {
    width: 50%;
  }
`;
