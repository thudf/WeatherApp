import styled, { css } from 'styled-components';

import { device } from '../../lib/deviceSizes';

interface ContainerProps {
  loading: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  padding: 16px;
  background: rgb(224,224,224);
  background: linear-gradient(235deg, rgba(224,224,224,1) 0%, rgba(189,189,189,1) 8%, rgba(117,117,117,1) 45%, rgba(87,85,85,1) 65%, rgba(33,33,33,1) 100%);
  border-radius: 8px;
  position: relative;

  ${(props) =>
    props.loading &&
    css`
      &::after {
        content: '';
        display: flex;
        background-color: black;
        position: absolute;
        opacity: 0.8;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        border-radius: 8px;
      }
    `}

  @media ${device.tablet} {
    padding: 32px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  > span {
    font-size: 24px;
    line-height: 1;
    text-transform: capitalize;
    color: #f5f5f5;
  }
`;

export const CardMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 90px;
    line-height: 1;
    color: #ffc107;
  }

  @media ${device.tablet} {
    margin-top: 32px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: baseline;
  margin-top: 16px;

  > svg {
    height: 16px;
    width: 16px;
    margin-right: 5px;
    color: #eeeeee;
  }

  > span {
    font-size: 16px;
    color: #eeeeee;
  }

  @media ${device.tablet} {
    margin-top: 32px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  z-index: 99;
`;
