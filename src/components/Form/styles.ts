import styled from 'styled-components';

import { device } from '../../lib/deviceSizes';

interface FormContainerProps {
  openModal: boolean;
}

export const FormContainer = styled.div<FormContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-width: 6px;
  border-style: solid;
  border-color: #373737;
  border-radius: 8px;
  width: 280px;
  position: fixed;
  top: ${props => props.openModal ? 50 : -50}%;
  left: 50%;
  opacity: ${props => props.openModal ? 1 : 0};
  z-index: 999;
  transform: translate(-50%, -50%);
  transition: top .4s;

  form {
    width: 100%;
    margin: 30px;

    h1 {
      font-size: 26px;
      font-weight: 600;
      letter-spacing: -1.8px;
      color: #616161;
      margin-bottom: 14px;
    }

    button {
      padding: 10px 20px;
      margin-top: 14px;
      margin-left: 100%;
      transform: translateX(-100%);
      font-size: 16px;
      background-color: #ff8f00;
      border-color: #ff8f00;

      &:hover {
        background-color: #ffa000;
        border-color: #ffa000;
      }
    }
  }

  @media ${device.mobileL} {
    width: 380px;

    form {
      margin: 35px;

      h1 {
        font-size: 32px;
      }
    }
  }

  @media ${device.tablet} {
    width: 600px;

    form {
      margin: 40px;

      h1 {
        font-size: 32px;
      }
    }
  }
`;

export const CloseFormButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d32f2f;
  color: #e0e0e0;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transition: color .3s;

  &:hover {
    cursor: pointer;
    /* background-color: #e53935; */
    color: #454545;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
