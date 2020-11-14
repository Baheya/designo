import styled from 'styled-components';
import { defaultTheme, typography, white } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  onDark: () => `
  background-color: ${white.primary}; 
  color: ${defaultTheme.textColorInverted};
  &:hover {
      background-color: ${defaultTheme.primaryHoverColor};
      color: ${defaultTheme.textColor}
  }
  `,
  onLight: () => `
  background-color: ${defaultTheme.primaryColor}; 
  color: ${defaultTheme.textColor};
  &:hover {
      background-color: ${defaultTheme.primaryHoverColor};
      color: ${defaultTheme.textColor}
  }
  `,
};

const Button = styled.button`
  padding: 18px 26px;
  font-size: ${typography.paragraph.size};
  border-radius: 10px;
  width: 152px;
  height: 56px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  border: none;
  transition: background-color 0.2s linear, color 0.2s linear;
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default Button;
