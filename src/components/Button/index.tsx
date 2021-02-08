import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  width?: string;
  onClick?: () => void;
  active?: boolean;
  loading: boolean;
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  width, 
  active,
  loading,
  ...rest 
}) => (
  <Container 
    type="button" 
    width={width} 
    active={active}
    loading={loading}
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
