import styled from 'styled-components';

import { device } from '../../lib/deviceSizes';

import Button from '../../components/Button';

interface CommandsButtonProps {
  loading: boolean;
}
export const Container = styled.div`
  display: flex;
  width: 90%;
  padding: 44px 0 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    width: 80%;
    align-items: initial;
  }

  @media ${device.laptop} {
    flex-direction: row;
    width: 70%;
    align-items: initial;
  }

  @media ${device.laptopL} {
    flex-direction: row;
    width: 50%;
    align-items: initial;
  }
`;

export const CommandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${device.tablet} {
    width: 100%;
    max-width: 200px;
  }
`;

export const CommandsContainerBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 90%;

  > button + button {
    margin-left: 15px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0;
    width: 100%;

    button + button {
      margin-top: 15px;
      margin-left: 0;
    }
  }
`;

export const CommandsButton = styled(Button)<CommandsButtonProps>`
  margin: 0;
  background-color: ${props => props.loading ? '#9fa8da' : '#5c6bc0'};
  border-width: 3px;
  border-color: ${props => props.loading ? '#9fa8da' : '#5c6bc0'};
  color: #f5f5f5;
  font-weight: 600;
  transition: all .4s;
  padding: 8px 0;
  width: 100%;

  &:hover {
    background-color: ${props => props.loading ? '#9fa8da' : '#3949ab'};
    border-width: 3px;
    border-color: ${props => props.loading ? '#9fa8da' : '#3949ab'};
    color: #f5f5f5;
    cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 0;
  width: 90%;

  @media ${device.tablet} {
    margin-left: 50px;
    margin-top: 20px;
    width: 100%;
  }
`;
