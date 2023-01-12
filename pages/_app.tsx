
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
//import { AppProps } from 'next/app';

const App = ({ Component, pageProps }/*: AppProps*/) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
