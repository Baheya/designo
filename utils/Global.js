import { createGlobalStyle } from 'styled-components';
import { primaryFont, typography } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
    font-size: 16px;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing:inherit;
}

body {
    margin: 0;
    padding: 0;
    font-family: ${primaryFont};
}

h1 {
    size: ${typography.h1.size};
    line-height: ${typography.h1.lineHeight};
    font-weight: ${typography.h1.weight}
}

h2 {
    size: ${typography.h2.size};
    line-height: ${typography.h2.lineHeight};
    letter-spacing: ${typography.h2.spacing};
    font-weight: ${typography.h2.weight}
}

h3 {
    size: ${typography.h3.size};
    line-height: ${typography.h3.lineHeight};
    letter-spacing: ${typography.h3.spacing};
    font-weight: ${typography.h3.weight}
}

p {
    size: ${typography.paragraph.size};
    line-height: ${typography.paragraph.lineHeight};
    font-weight: ${typography.paragraph.weight}
}
`;
