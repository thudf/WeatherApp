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
  padding: 32px;
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
    margin: 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 22px;
    line-height: 1;
    text-transform: capitalize;
    color: #f5f5f5;
  }

  > span + span {
    font-size: 16px;
    line-height: 1;
  }
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 44px;

  > svg {
    width: 180px;
    height: 180px;
    margin-bottom: 2px;
  }

  > svg + span {
    font-size: 11px;
    line-height: .8;
    text-transform: uppercase;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  > span {
    font-size: 68px;
    line-height: .8;
    color: #ffc107;
  }

  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const AddicitionalInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;

  @media ${device.mobileL} {
    flex-direction: column;
    margin-top: 0;
    flex-wrap: nowrap;
  }
`;

export const AddicitionalInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;

  & + & {
    margin-top: 8px;
  }

  > svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
    color: #eeeeee;
  }

  > svg + svg {
    height: 10px;
    width: 10px;
    position: absolute;
    top: -1px;
    left: 11px;
  }

  > span {
    font-size: 12px;
    line-height: 18px;
    color: #eeeeee;
  }

  @media ${device.mobileL} {
    width: 100%;
    justify-content: flex-start;
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
