import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { device } from '../../lib/deviceSizes';

import Button from '../Button';

interface SliderProps {
  position: number;
}

interface ButtonCityProps {
  loading: boolean;
  active: boolean;
}

interface LeftButtonProps {
  isFirt: boolean;
}

interface RightButtonProps {
  isLast: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  width: 100%;

  >button {
    opacity: 1;

    @media ${device.mobileL} {
      opacity: 0;
      transition: all 0.2s;
    }
  }

  &:hover >button {
    opacity: 1;
  }

  @media ${device.tablet} {
    height: calc(4 * 65px);
    width: 200px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border: none;
  padding: 0 10px;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 10px 0;
  }
`;

export const Slider = styled.div<SliderProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: all .7s;
  transform: ${props => `translateX(${props.position * 210}px)`};

  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
    transform: ${props => `translateY(${props.position * 60}px)`};
  }
`;

export const UpButton = styled.button<LeftButtonProps>`
  width: 45px;
  height: 45px;
  outline: none;
  border-style: none;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 0;
  transform: translateX(-50%) rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  >svg {
    height: 45px;
    width: 45px;
  }

  &:hover {
    cursor: pointer;
    color: ${lighten(0.08, '#ff8f00')};
  }

  ${(props) =>
    props.isFirt &&
    css`
      &:hover {
        color: #e0e0e0;
        cursor: not-allowed;
      }`
  }

  @media ${device.mobileL} {
    width: 60px;
    height: 60px;

    >svg {
      height: 60px;
      width: 60px;
    }
  }

  @media ${device.tablet} {
    left: 50%;
    top: 0;
    transform: translateY(-70%) translateX(-50%) rotate(0deg);
  }
`;

export const DownButton = styled.button<RightButtonProps>`
  width: 45px;
  height: 45px;
  outline: none;
  border-style: none;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  transform: translateX(50%) rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;

  >svg {
    height: 45px;
    width: 45px;
  }

  &:hover {
    cursor: pointer;
    color: ${lighten(0.08, '#ff8f00')};
  }

  ${(props) =>
    props.isLast &&
    css`
      &:hover {
        color: #e0e0e0;
        cursor: not-allowed;
      }`
  }

  @media ${device.mobileL} {
    width: 60px;
    height: 60px;

    >svg {
      height: 60px;
      width: 60px;
    }
  }

  @media ${device.tablet} {
    right: 50%;
    bottom: 0;
    transform: translateY(70%) translateX(50%) rotate(0deg);
  }
`;

export const ButtonCity = styled(Button)<ButtonCityProps>`
  margin-left: 0;
  padding: 8px 12px;
  width: 200px;

  & + & {
    margin-left: 10px;
  }

  @media ${device.tablet} {
    margin-left: 0;
    padding: 0;
    height: 40px;
    width: 100%;

    & + & {
      margin-left: 0;
    }
  }
`;
