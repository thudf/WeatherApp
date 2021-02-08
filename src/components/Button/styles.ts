import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  width?: string;
  active?: boolean;
  loading: boolean;
}

export const Container = styled.button<ContainerProps>`
  outline: none;
  background: ${props => props.active ? '#ffb300' : props.loading ? '#bdbdbd' : '#616161'};
  /* height: 40px; */
  border-radius: 4px;
  border-width: 2px;
  border-color: ${props => props.active ? '#ffb300' : props.loading ? '#bdbdbd' : '#616161'};
  border-style: solid;
  /* box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); */
  /* padding: 0 16px; */
  color: ${(props) => props.active ? '#fff' : '#fff'};
  /* width: 100%; */
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap;
  margin: 10px 0;
  transition: all 0.2s;

  &:hover {
    cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
    background-color: ${props => props.active ? '#ffb300' : props.loading ? '#bdbdbd' : '#424242'};
    border-color: ${props => props.active ? '#ffb300' : props.loading ? '#bdbdbd' : '#424242'};
    color: #fff;
  }

  ${(props) =>
    props.active &&
    css`
      &:hover {
        background: ${shade(0.03, '#ffb300')};
        border-color: ${shade(0.03, '#ffb300')};
        color: #fff
      }
    `}
`;
