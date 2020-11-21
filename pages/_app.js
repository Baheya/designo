import { GlobalStyle, defaultTheme } from '../utils';
import { ThemeProvider } from 'styled-components';
import { Navigation } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
