import styled from 'styled-components';
import { defaultTheme, typography, white } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

import styles from './Button.module.scss';

// const BUTTON_MODIFIERS = {
//   onDark: () => `
//   background-color: ${white.primary};
//   color: ${defaultTheme.textColorInverted};
//   &:hover {
//       background-color: ${defaultTheme.primaryHoverColor};
//       color: ${defaultTheme.textColor}
//   }
//   `,
//   onLight: () => `
//   background-color: ${defaultTheme.primaryColor};
//   color: ${defaultTheme.textColor};
//   &:hover {
//       background-color: ${defaultTheme.primaryHoverColor};
//       color: ${defaultTheme.textColor}
//   }
//   `,
// };

// const Button = styled.button`
//   padding: 18px 26px;
//   font-size: ${typography.paragraph.size};
//   border-radius: 10px;
//   width: 152px;
//   height: 56px;
//   cursor: pointer;
//   font-family: ${defaultTheme.primaryFont};
//   border: none;
//   transition: background-color 0.2s linear, color 0.2s linear;
//   text-transform: uppercase;
//   z-index: 1;
//   ${applyStyleModifiers(BUTTON_MODIFIERS)}
// `;

const Button = (props) => {
  return (
    <button className={styles[`${props.className}`]}>{props.children}</button>
  );
};

export { Button };
