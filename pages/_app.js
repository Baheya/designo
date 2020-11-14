import { GlobalStyle, defaultTheme } from '../utils';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
