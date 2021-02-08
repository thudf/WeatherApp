import { Provider } from 'react-redux';

import GlobalStyle from '../styles/GlobalStyle';
import AppProvider from '../hooks/index';
import store from '../store';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AppProvider>

    </>
  )
}
