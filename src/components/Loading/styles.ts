import styled, { css, keyframes } from 'styled-components';

const Animate = keyframes`
  0% {
    width: 100px;
    height: 100px;
  }

  10% {
    width: 100px;
    height: 100px;
  }

  50% {
    width: 150px;
    height: 150px;
  }

  90% {
    width: 100px;
    height: 100px;
  }

  100% {
    width: 100px;
    height: 100px;
  }
`;

const Rotate = keyframes`
  0% { transform: rotate(0deg); }

  10% { transform: rotate(0deg); }

  50% { transform: rotate(90deg); }

  90% { transform: rotate(90deg); }

  100% { transform: rotate(90deg); }
`;

export const Container = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  animation: ${Animate} 1s linear infinite;
  transform: rotate(45deg);

  > span {
    position: absolute;
    width: 50px;
    height: 50px;
    animation: ${Rotate} 1s linear infinite;
  }

  > span:nth-child(1) {
    top: 0;
    left: 0;
    background-color: #fff;
  }

  > span:nth-child(2) {
    top: 0;
    right: 0;
    background-color: #fff;
  }

  > span:nth-child(3) {
    bottom: 0;
    left: 0;
    background-color: #fff;
  }

  > span:nth-child(4) {
    bottom: 0;
    right: 0;
    background-color: #fff;
  }
`;