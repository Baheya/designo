import { createGlobalStyle } from 'styled-components';
import { primaryFont, typography } from './typography';

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 16px;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing:inherit;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
    font-family: ${primaryFont};
}

h1 {
  font-size: ${typography.h1.mobile.size};
  line-height: ${typography.h1.mobile.lineHeight};
    font-weight: ${typography.h1.weight};
      @media (min-width: 750px) {
    font-size: ${typography.h1.size};
    line-height: ${typography.h1.lineHeight};
  }
}

h2 {
    font-size: ${typography.h2.size};
    line-height: ${typography.h2.lineHeight};
    letter-spacing: ${typography.h2.spacing};
    font-weight: ${typography.h2.weight}
}

h3 {
    font-size: ${typography.h3.size};
    line-height: ${typography.h3.lineHeight};
    letter-spacing: ${typography.h3.spacing};
    font-weight: ${typography.h3.weight}
}

p {
    font-size: ${typography.paragraph.mobile.size};
    line-height: ${typography.paragraph.mobile.lineHeight};
    font-weight: ${typography.paragraph.weight};
@media (min-width: 750px) {
    font-size: ${typography.paragraph.size};
    line-height: ${typography.paragraph.lineHeight};
  }
}
`;
