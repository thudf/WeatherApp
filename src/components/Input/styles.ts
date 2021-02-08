import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  width: 100%;

  border: 3px solid #616161;

  display: flex;
  align-items: center;

  input {
    outline: none;
    flex: 1;
    border: 0;
    color: #616161;
    font-size: 16px;
    line-height: 16px;
    &::placeholder {
      color: #bdbdbd;
    }
  }

  svg {
    color: #616161;
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }
`;
