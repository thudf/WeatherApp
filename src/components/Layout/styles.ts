import styled, { css } from 'styled-components';

interface BackdropProps {
  backdrop?: boolean;
}

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Backdrop = styled.div<BackdropProps>`
  display: flex;
  background-color: #212121;
  position: absolute;
  opacity: ${props => props.backdrop ? 0.7 : 0};
  top: 0;
  left: 0;
  width: ${props => props.backdrop ? 100 : 0}%;
  height: ${props => props.backdrop ? 100 : 0}%;
  z-index: ${props => props.backdrop ? 998 : 1};
`;

export const Main = styled.main`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
`;