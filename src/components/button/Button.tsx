import React, { FC } from 'react';

// Styles
import ButtonContainer from './styles';

interface IButtonProps {
  children: string;
}

const Button: FC<IButtonProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
